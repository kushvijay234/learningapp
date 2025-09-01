import express from 'express'
import fs from 'fs'

const router = express.Router()

// GET all questions
router.get('/', (req, res) => {
  fs.readFile('python.json', 'utf-8', (err, data) => {
    if (err) return res.status(500).send('Error reading questions')
    const parsed = JSON.parse(data)
    res.json(parsed.python) // Access the "python" array
  })
})

// GET question by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  fs.readFile('python.json', 'utf-8', (err, data) => {
    if (err) return res.status(500).send('Error reading questions')
    const parsed = JSON.parse(data)
    const question = parsed.python.find(q => q.id === id) // Access inside "python"
    if (!question) return res.status(404).send('Question not found')
    res.json(question)
  })
})

export default router