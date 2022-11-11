const router = require('express').Router()

const characterRoute = require('./characterRoute.js')
const userRoute = require('./userRoutes.js')


router.use('/characters', characterRoute)
router.use('/users', userRoute)

module.exports = router;