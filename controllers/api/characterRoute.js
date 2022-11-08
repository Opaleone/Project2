const character = require('express').Router()

const Character = require('./../../models/character')

character.get('/', async (req, res) => {
  try {
    const allCharacters = await Character.findAll()

    res.status(200).json(allCharacters)
  } catch(err) {
    res.status(500).json(err)
  }
})

character.get('/:id', async (req, res) => {
  try {
    const singleCharacter = await Character.findByPk(req.params.id)

    res.status(200).json(singleCharacter)
  } catch (err) {
    res.status(500).json(err)
  }
})

character.post('/', async (req, res) => {
  try {
    const newCharacter = await Character.create(req.body)

    res.status(201).json({message: `${newCharacter} added successfully!`})
  } catch (err) {
    res.status(500).json(err)
  }
})

character.put('/:id', async (req, res) => {
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

character.delete('/:id', async (req, res) => {
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