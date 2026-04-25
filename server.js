import express from 'express'
import multer from 'multer'
import { Resend } from 'resend'
import { google } from 'googleapis'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000
const DIST = join(__dirname, 'dist')

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } })
app.use(express.json())
app.use(express.static(DIST))

// ── Email ────────────────────────────────────────────────────────────────────
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const EMAIL_FROM = process.env.EMAIL_FROM || 'YHCC <onboarding@resend.dev>'
const EMAIL_TO = process.env.EMAIL_TO || 'yhcc@dwighthall.org'

async function sendEmail({ to, subject, html, attachments = [] }) {
  if (!resend) {
    console.log('[DEV] Email not configured — would send:', { to, subject })
    return
  }
  const { error } = await resend.emails.send({ from: EMAIL_FROM, to, subject, html, attachments })
  if (error) throw error
}

// ── Google APIs ───────────────────────────────────────────────────────────────
function getGoogleAuth() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) return null
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
    ],
  })
}

async function appendToSheet(auth, values) {
  const sheetId = process.env.GOOGLE_SHEET_ID
  if (!auth || !sheetId) return null
  const sheets = google.sheets({ version: 'v4', auth })
  const res = await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Sheet1!A1',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [values] },
  })
  return res.data
}

async function createDriveDoc(auth, name, htmlContent, resumeBuffer, resumeName, resumeMime) {
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID
  if (!auth || !folderId) return { docUrl: null, resumeUrl: null }

  const drive = google.drive({ version: 'v3', auth })

  // Create Google Doc from HTML content
  const { Readable } = await import('stream')
  const docRes = await drive.files.create({
    requestBody: {
      name,
      mimeType: 'application/vnd.google-apps.document',
      parents: [folderId],
    },
    media: {
      mimeType: 'text/html',
      body: Readable.from([htmlContent]),
    },
  })
  const docUrl = `https://docs.google.com/document/d/${docRes.data.id}/edit`

  let resumeUrl = null
  if (resumeBuffer && resumeName) {
    // Find or create "Resumes" subfolder
    const folderSearch = await drive.files.list({
      q: `name='Resumes' and '${folderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
      fields: 'files(id)',
    })
    let resumeFolderId
    if (folderSearch.data.files.length > 0) {
      resumeFolderId = folderSearch.data.files[0].id
    } else {
      const rf = await drive.files.create({
        requestBody: { name: 'Resumes', mimeType: 'application/vnd.google-apps.folder', parents: [folderId] },
      })
      resumeFolderId = rf.data.id
    }

    const resumeRes = await drive.files.create({
      requestBody: { name: resumeName, parents: [resumeFolderId] },
      media: { mimeType: resumeMime || 'application/pdf', body: Readable.from([resumeBuffer]) },
    })
    resumeUrl = `https://drive.google.com/file/d/${resumeRes.data.id}/view`
  }

  return { docUrl, resumeUrl }
}

// ── Routes ────────────────────────────────────────────────────────────────────

// Contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, organization, role, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' })

  try {
    await sendEmail({
      to: EMAIL_TO,
      subject: `Inquiry From ${name}`,
      html: `
        <h2 style="color:#0f4d92">Inquiry From ${name}</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Organization</strong></td><td>${organization || 'N/A'}</td></tr>
          <tr><td><strong>Role</strong></td><td>${role || 'N/A'}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap;color:#333">${message}</p>
      `,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

// Membership application
app.post('/api/apply', (req, res, next) => {
  upload.single('resume')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.code === 'LIMIT_FILE_SIZE' ? 'File exceeds 10 MB limit.' : err.message })
    }
    if (err) return res.status(500).json({ error: 'File upload failed.' })
    next()
  })
}, async (req, res) => {
  const {
    name, email, year, skills,
    skillsBlurb, interestArea, behavioral, caseStudy,
  } = req.body
  const resumeFile = req.file
  if (!name || !email || !year) return res.status(400).json({ error: 'Missing required fields' })

  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })

  const docHtml = `
    <html><body style="font-family:Arial,sans-serif;max-width:800px;margin:auto">
    <h1 style="color:#0f4d92">YHCC F26 Application — ${name}</h1>
    <p style="color:#666">Submitted: ${timestamp}</p>
    <hr/>
    <h2>Part 1 — Basic Information</h2>
    <table cellpadding="6" style="border-collapse:collapse;width:100%">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Graduating Year</strong></td><td>${year}</td></tr>
      <tr><td><strong>Skills / Experiences</strong></td><td>${skills || 'None specified'}</td></tr>
    </table>
    <hr/>
    <h2>Part 2 — Short Response</h2>
    <h3>Q1: Skills Elaboration (150w max)</h3>
    <p style="white-space:pre-wrap">${skillsBlurb || '—'}</p>
    <h3>Q2: Healthcare Interest (200w max)</h3>
    <p style="white-space:pre-wrap">${interestArea || '—'}</p>
    <h3>Q3: Behavioral Question (200w max)</h3>
    <p style="white-space:pre-wrap">${behavioral || '—'}</p>
    <hr/>
    <h2>Part 3 — Case Study (400w max)</h2>
    <p style="white-space:pre-wrap">${caseStudy || '—'}</p>
    <hr/>
    <p><em>Resume: ${resumeFile ? resumeFile.originalname : 'Not provided'}</em></p>
    </body></html>
  `

  // ── Google Drive + Sheets (non-fatal — email is the primary record) ───
  let docUrl = null
  let resumeUrl = null
  try {
    const auth = getGoogleAuth()
    ;({ docUrl, resumeUrl } = await createDriveDoc(
      auth,
      `${name} — F26 Application — ${timestamp.split(',')[0]}`,
      docHtml,
      resumeFile?.buffer,
      resumeFile?.originalname,
      resumeFile?.mimetype,
    ))
    await appendToSheet(auth, [
      timestamp, name, email, year,
      skills || '',
      skillsBlurb || '', interestArea || '', behavioral || '', caseStudy || '',
      resumeFile?.originalname || '',
      docUrl || '', resumeUrl || '',
    ])
  } catch (googleErr) {
    console.error('Google integration error (non-fatal):', googleErr)
  }

  // ── Email notification (full application data + resume attachment) ────
  const attachments = resumeFile
    ? [{ filename: resumeFile.originalname, content: resumeFile.buffer }]
    : []

  try {
    await sendEmail({
      to: EMAIL_TO,
      subject: `F26 Application — ${name}`,
      html: `
        <h2 style="color:#0f4d92">New F26 Membership Application</h2>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Graduating Year</strong></td><td>${year}</td></tr>
          <tr><td><strong>Skills</strong></td><td>${skills || 'None specified'}</td></tr>
        </table>
        <h3>Q1: Skills Elaboration</h3>
        <p style="white-space:pre-wrap;color:#333">${skillsBlurb || '—'}</p>
        <h3>Q2: Healthcare Interest</h3>
        <p style="white-space:pre-wrap;color:#333">${interestArea || '—'}</p>
        <h3>Q3: Behavioral</h3>
        <p style="white-space:pre-wrap;color:#333">${behavioral || '—'}</p>
        <h3>Case Study</h3>
        <p style="white-space:pre-wrap;color:#333">${caseStudy || '—'}</p>
        ${docUrl ? `<p><a href="${docUrl}">View in Google Docs →</a></p>` : ''}
        ${resumeUrl ? `<p><a href="${resumeUrl}">View résumé in Google Drive →</a></p>` : ''}
      `,
      attachments,
    })
  } catch (emailErr) {
    console.error('Application email notification failed:', emailErr)
  }

  res.json({ success: true, docUrl, resumeUrl })
})

// SPA fallback
app.get('*', (_req, res) => res.sendFile(join(DIST, 'index.html')))

app.listen(PORT, () => console.log(`YHCC server running on port ${PORT}`))
