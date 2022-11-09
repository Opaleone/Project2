const router = require('express').Router()
const characterRoute = require('./characterRoute')

router.use('/characters', characterRoute)

module.exports = router;