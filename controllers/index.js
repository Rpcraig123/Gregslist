const { User, Product } = require('../models')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(201).json({
      products
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getProduct = async (req, res) => {
  try {
    const id = req.params.productId
    const product = await Product.findById(id)
    return res.status(201).json({
      product
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addProduct = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    return res.status(201).json({
      product
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const removeProduct = async (req, res) => {
  try {
      const id = req.params.productId;
      const deleted = await Product.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Product Deleted");
      }
      throw new Error("Product not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const updateProduct = async (req, res) => {
  const id = req.params.productId;
  await Product.findByIdAndUpdate(id, req.body, { new: true }, (err, product) => {
      if (err) {
          res.status(500).send(err);
      }
      if (!product) {
          res.status(500).send('Product not found!');
      }
      return res.status(200).json(product);
  })
}

const getCart = async (req, res) => {
  try {
    const id = req.params.userId;
    const cartIds = await User.findById(id).select({ cart: 1 })
    let cart = []
    cartProducts = cartIds.cart
    for (i = 0; i < cartProducts.length; i++){
      let product = await Product.findById(cartProducts[i])
      cart.push(product)
    }
    return res.status(201).json({
      cart
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPrice = async (req, res) => {
  try {
    const id = req.params.productId;
    const product = await Product.findById(id) 
    const productPrice = product.price
    return res.status(201).json({
      productPrice
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addToCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId)
    const userId = req.body.userId
    const user = await User.findById(userId)
    user.cart.push(product)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const remCart = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.body.user_id
    const user = await User.findById(userId)
    const index = user.cart.indexOf(productId)
    user.cart.splice(index, 1)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(201).json({
      users
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addComment = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId)
    const comment = req.body.description
    product.comments.push(comment)
    await product.save()
    return res.status(201).json({
      product
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getComments = async (req, res) => {
  try {
    const id = req.params.productId;
    const comments = await Product.findById(id).select({ comments: 1 })
    return res.status(201).json({
      comments
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const remComment = async (req, res) => {
  try {
    const productId = req.params.productId;
    const userId = req.body.user_id
    const user = await User.findById(userId)
    const index = user.cart.indexOf(productId)
    user.cart.splice(index, 1)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  removeProduct,
  updateProduct,
  getCart,
  getPrice,
  addToCart,
  remCart,
  getUsers,
  addComment,
  getComments,
  remComment
}