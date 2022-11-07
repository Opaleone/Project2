const router = require('express').Router()
const classGet = require('./class')

router.use('/class', classGet)

module.exports = router;