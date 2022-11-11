const home = require('express').Router()
const withAuth = require('../utils/auth');
const { User } = require('../models');

home.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    })
    console.log(req.session)

    console.log(userData)

    let user = userData.get({ plain: true });

    console.log('ding')

    return res.render('homepage', {
      ...user,
      logged_in: true,
    })
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'})
  }
})

home.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    })
    console.log(req.session)

    console.log(userData)

    let user = userData.get({ plain: true });

    console.log('ding')


    res.render('profile', {
      ...user,
      logged_in: true,
    })
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'})
  }
})

home.get('/characterSheet', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    })
    console.log(req.session)

    console.log(userData)

    let user = userData.get({ plain: true });

    console.log('ding')

    return res.render('characterSheet', {
      ...user,
      logged_in: true,
    })
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


module.exports = home