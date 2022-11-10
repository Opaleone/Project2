const router = require('express').Router()
const characterRoute = require('./characterRoute')
const userRoute = require('./userRoutes.js')

router.use('/characters', characterRoute)
router.use('/users', userRoute)

module.exports = router;