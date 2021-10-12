const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', controllers.getAllProducts)

router.post('/new-product', controllers.addProduct)

router.delete('/remove-product/:productId', controllers.removeProduct)

router.put('/update-product/:productId', controllers.updateProduct)

// router.get('/cart', controllers.getCart)

// router.post('/new-product-cart/:productId', controllers.addToCart)

// router.post('/new-user', controllers.addUser)

module.exports = router