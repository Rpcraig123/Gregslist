const { Schema } = require('mongoose')

const Cart = new Schema(
  {
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }]
  },
  { timestamps: true }
)

module.exports = Cart