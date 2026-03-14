const registrationService= require('./services/registration.service.js')

const router = require ("express").Router()


router.get('/signup', registrationService.signup )
router.get('/confirmEmail', registrationService.confirmEmail )


module.exports = router 