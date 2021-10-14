const { Schema } = require('mongoose')

const Product = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'comments' }],
  },
  { timestamps: true }
)

module.exports = Product