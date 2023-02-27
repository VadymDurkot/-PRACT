const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')
const roleMiddleware = require('./middlewaree/roleMiddleware')

router.post('/registration', [
    check('username', "Імя користувача не може бути порожнім").notEmpty(),
    check('password', "Пароль має бути не більше 4 и меньше 10 символов").isLength({ min: 4, max: 10 })
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers)

module.exports = router