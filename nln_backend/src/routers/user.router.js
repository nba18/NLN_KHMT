const router = require('express').Router()
const userController = require('../controllers/userController')

router.post('/login', userController.login)
router.post('/register', userController.register)
router.post('/themyeuthich', userController.themyeuthich)
router.get('/laydsyeuthich/:id', userController.laydsyeuthich)
module.exports = router