const character1 = require('express').Router()

const Character = require('../../models/character')

character1.get('/', async (req, res) => {
  try {
    const allCharacters = await Character.findAll()

    res.status(200).json(allCharacters)
  } catch(err) {
    res.status(500).json(err)
  }
})

character1.get('/:id', async (req, res) => {
  try {
    const singleCharacter = await Character.findByPk(req.params.id)

    res.status(200).json(singleCharacter)
  } catch (err) {
    res.status(500).json(err)
  }
})

character1.post('/', async (req, res) => {
  console.log("something");
  try {
    const newCharacter = await Character.create(req.body)
    res.status(201).json({message: `${newCharacter} added successfully!`})
  } catch (err) {
    res.status(500).json(err)
  }
})

character1.put('/:id', async (req, res) => {
  try {
    await Character.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    res.status(200).json({message: `${req.params.id} updated successfully`})
  } catch (err) {
    res.status(500).json(err)
  }
})

character1.delete('/:id', async (req, res) => {
  try {
    await Character.destroy({
      where: {
        id: req.params.id
      }
    })

    res.status(200).json(`${req.params.id} deleted`)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = character1