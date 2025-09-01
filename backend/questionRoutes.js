import express from 'express'
import fs from 'fs'

const router = express.Router()

router.get('/', (req, res) => {
  fs.readFile('question.json', 'utf-8', (err, data) => {
    if (err) return res.status(500).send('Error reading questions')
    res.json(JSON.parse(data))
  })
})

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  fs.readFile('question.json', 'utf-8', (err, data) => {
    if (err) return res.status(500).send('Error reading questions')
    const questions = JSON.parse(data)
    const question = questions.find(q => q.id === id)
    if (!question) return res.status(404).send('Question not found')
    res.json(question)
  })
})

export default router
