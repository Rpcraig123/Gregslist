const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', controllers.getAllProducts)

router.post('/new-product', controllers.addProduct)

router.delete('/remove-product/:productId', controllers.removeProduct)

router.put('/update-product/:productId', controllers.updateProduct)

router.get('/cart/:userId', controllers.getCart)

router.post('/new-product-cart/:productId', controllers.addToCart)

// router.delete('/rem-product-cart/:productId', controllers.remCart)

router.post('/new-user', controllers.addUser)

router.get('/users', controllers.getUsers)

// router.post('/new-comment', controllers.addComment)

// router.delete('/rem-comment', controllers.remComment)

module.exports = router