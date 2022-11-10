const home = require('express').Router()
const withAuth = require('../utils/auth');
const { User } = require('../models');

home.get('/characterSheet', (req, res) => {
  try {
    return res.render('characterSheet')
  } catch (err) {
    res.status(500).json({message: 'Internal Server Error'})
  }
})

// home.get('/profile', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.id, {
//       where: {
//         id: req.session.id
//       }
//     })
    
//     const userObject = {
//       username: userData
//     }

//     console.log(req.session)

//     console.log('ding')
//     // console.log(userData)

//     // const user = userData.get({ plain: true });

//     // console.log('This is the user info:' + userData);

//     res.render('profile', {
//       ...userObject,
//     })
//   } catch (err) {
//     res.status(500).json({message: 'Internal Server Error'})
//   }
// })

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