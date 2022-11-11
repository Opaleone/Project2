const router = require('express').Router()
const characterRoute = require('./characterRoute.js')

router.use('/characters', characterRoute)

module.exports = router;