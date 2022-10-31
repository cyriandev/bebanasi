import express from 'express'
import dotenv from 'dotenv'
dotenv.config({ path: process.cwd() + '/.env' })

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`)
})
