// server.js
import express from 'express'
import questionRoutes from './questionRoutes.js'
import pythonRoutes from './pythonRoutes.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api/questions', questionRoutes)
app.use('/api/python', pythonRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})