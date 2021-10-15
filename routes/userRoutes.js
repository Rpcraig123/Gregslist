const Router = require('express').Router()

const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

Router.post('/auth/login', controller.Login)
Router.post('/auth/register', controller.Register)
Router.get('/auth/session', middleware.stripToken, middleware.verifyToken, controller.CheckSession)

module.exports = Router
