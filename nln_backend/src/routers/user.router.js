const router = require('express').Router()
const userController = require('../controllers/user.controller')
const middlewareController = require('../controllers/middleware.controller')

router.post('/login', userController.login)
router.post('/register', userController.register)


module.exports = router