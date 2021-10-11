const { User, Product, Cart } = require('../models')

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
      const id = req.params.Id;
      const deleted = await Product.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Product Deleted");
      }
      throw new Error("Expense not found");
      
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const updateProduct = async (req, res) => {
  try {
      const { id } = req.params;
      await Product.findByIdAndUpdate(id, req.body, { new: true }, (err, product) => {
          if (err) {
              res.status(500).send(err);
          }
          if (!product) {
              res.status(500).send('Plant not found!');
          }
          return res.status(200).json(product);
      })
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

// const getCart = async (req, res) => {
//   try {
//     const cart = await .find()
//     const product = await Product.findById(id)
//     const cart = await Cart.find()
//     return res.status(201).json({
//       cart
//     })
//   } catch (error) {
//     return res.status(500).send(error.message)
//   }
// }

// const addToCart = async (req, res) => {
//   try {
//     const payment = await new Payment(req.body)
//     await payment.save()
//     return res.status(201).json({
//       payment
//     })
//   } catch (error) {
//     return res.status(500).json({ error: error.message })
//   }
// }

const addUser = async (req, res) => {
  try {
    const user = await new User(req.body)
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
  addProduct,
  removeProduct,
  updateProduct,
  getCart,
  addToCart,
  addUser
}