import express from 'express'
import nodemailer from 'nodemailer'
import multer from 'multer'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000
const DIST = join(__dirname, 'dist')

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
})

app.use(express.json())
app.use(express.static(DIST))

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

const TO = process.env.EMAIL_TO || 'yhcc@dwighthall.org'

// Contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, organization, role, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    await createTransport().sendMail({
      from: `"YHCC Contact Form" <${process.env.EMAIL_USER}>`,
      to: TO,
      replyTo: email,
      subject: `Inquiry From ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || 'N/A'}`,
        `Role: ${role || 'N/A'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New Inquiry From ${name}</h2>
        <table cellpadding="6">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Organization</strong></td><td>${organization || 'N/A'}</td></tr>
          <tr><td><strong>Role</strong></td><td>${role || 'N/A'}</td></tr>
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

// Membership application
app.post('/api/apply', upload.single('resume'), async (req, res) => {
  const { name, email, year, skills } = req.body
  const resumeFile = req.file

  if (!name || !email || !year) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const attachments = resumeFile
      ? [{ filename: resumeFile.originalname, content: resumeFile.buffer, contentType: resumeFile.mimetype }]
      : []

    await createTransport().sendMail({
      from: `"YHCC Applications" <${process.env.EMAIL_USER}>`,
      to: TO,
      replyTo: email,
      subject: `F26 Application — ${name}`,
      text: [
        `New F26 Application`,
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Graduating Year: ${year}`,
        `Skills/Experiences: ${skills || 'None specified'}`,
        '',
        resumeFile ? `Resume attached: ${resumeFile.originalname}` : 'No resume attached',
      ].join('\n'),
      html: `
        <h2>New F26 Membership Application</h2>
        <table cellpadding="6">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td><strong>Graduating Year</strong></td><td>${year}</td></tr>
          <tr><td><strong>Skills/Experiences</strong></td><td>${skills || 'None specified'}</td></tr>
        </table>
        ${resumeFile ? `<p>Résumé attached: <strong>${resumeFile.originalname}</strong></p>` : '<p>No résumé attached.</p>'}
      `,
      attachments,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Application email error:', err)
    res.status(500).json({ error: 'Failed to submit application' })
  }
})

// SPA fallback — all routes serve index.html
app.get('*', (_req, res) => {
  res.sendFile(join(DIST, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`YHCC server running on port ${PORT}`)
})
