const { model } = require('mongoose')
const CartSchema = require('./cart')
const ProductSchema = require('./product')
const UserSchema = require('./user')

const User = model('users', UserSchema)
const Product = model('products', ProductSchema)
const Cart = model('cart', CartSchema)

module.exports = {
  User,
  Product,
  Cart
}