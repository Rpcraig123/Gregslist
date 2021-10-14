const { model } = require('mongoose')
const ProductSchema = require('./product')
const UserSchema = require('./user')
const CommentSchema = require('./comment')

const User = model('users', UserSchema)
const Product = model('products', ProductSchema)
const Comment = model('comments', CommentSchema)

module.exports = {
  User,
  Product,
  Comment
}