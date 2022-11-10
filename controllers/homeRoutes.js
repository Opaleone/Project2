const home = require('express').Router()

home.get('/characterSheet', (req, res) => {
  try {
    return res.render('characterSheet')
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'})
  }
})

home.get('/profile', (req, res) => {
  try {
    return res.render('profile')
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'})
  }
})

home.get('/login', (req, res) => {
  try {
    return res.render('login')
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'})
  }
})

home.get('/signup', (req, res) => {
  try {
    return res.render('signup')
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'})
  }
})

home.get('/', (req, res) => {
  try {
    return res.render('homepage')
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'})
  }
})
module.exports = home