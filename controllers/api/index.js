const router = require('express').Router()
const characterRoute = require('./characterRoute')

router.use('/character', characterRoute)

module.exports = router;