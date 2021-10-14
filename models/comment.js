const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Comment