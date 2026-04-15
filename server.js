import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000
const DIST = join(__dirname, 'dist')

// Serve static assets from Vite build
app.use(express.static(DIST))

// SPA fallback — all routes serve index.html
app.get('*', (_req, res) => {
  res.sendFile(join(DIST, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`YHCC server running on port ${PORT}`)
})
