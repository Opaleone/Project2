const router = require('express').Router()
const characterRoute = require('./characterRoute')
const userRoute = require('./userRoutes')

router.use('/characters', characterRoute)
router.use('/users', userRoute)

module.exports = router;