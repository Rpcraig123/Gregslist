const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', controllers.getAllProducts)

router.get('/cart', controllers.getCart)

router.post('/new-product', controllers.addProduct)

router.delete('/remove-product/:productId', controllers.removeProduct)

router.put('/update-product/:productId', controllers.updateProduct)

router.post('/new-comment/:productId', controllers.addPost)

module.exports = router