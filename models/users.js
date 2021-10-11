const { Schema } = require('mongoose')

const User = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'products' }],
    cart: [{ type: Schema.Types.ObjectId, ref: 'cart' }]
  },
  { timestamps: true }
)

module.exports = User