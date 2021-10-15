const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const authController = require('../controllers/AuthController')
const middleware = require('../middleware')

// Auth Routes
router.post('/auth/login', authController.Login)
router.post('/auth/register', authController.Register)
router.get('/auth/session', middleware.stripToken, middleware.verifyToken, authController.CheckSession)

// Product Routes
router.get('/', controllers.getAllProducts)
router.post('/new-product', controllers.addProduct)
router.delete('/remove-product/:productId', controllers.removeProduct)
router.put('/update-product/:productId', controllers.updateProduct)

// Cart Routes
router.get('/cart/:userId', controllers.getCart)
router.post('/new-product-cart/:productId', controllers.addToCart)
router.delete('/rem-product-cart/:productId', controllers.remCart)

// Comment Routes
router.post('/new-comment/:productId', controllers.addComment)
router.get('/comments/:productId', controllers.getComments)
// router.delete('/rem-comment/:productId', controllers.remComment)

// Testing Routes
router.get('/users', controllers.getUsers)

module.exports = router