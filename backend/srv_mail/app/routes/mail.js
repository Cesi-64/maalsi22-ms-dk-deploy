// Import des modules
const express = require('express')
let router = express.Router()

const mailCtrl = require('../controller/mail')

// Time Middleware
router.use( (req, res, next) => {
    const event = new Date()
    console.log(`MAIL TIME:`, event.toString())
    next()
})

router.post('/', mailCtrl.sendMail)


module.exports = router