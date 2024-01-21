const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  ratings: {
    type: Number,
    default: 5
  },
  reviews: {
    type: Number,
    default: 0
  },
  isAddedBtn: {
    type: Boolean,
    default: false
  },
  quantity: {
    type: Number,
    default: 1
  },
  imgUrl: {
    type: String,
    default: ""
  },
  productType: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "ProductType"
  }
})
module.exports = mongoose.model("products", ProductSchema)
