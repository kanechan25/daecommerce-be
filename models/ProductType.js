const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductTypeSchema = new Schema({
  productTypeName: {
    type: String,
    required: true,
    unique: true
  }
})
module.exports = mongoose.model("producttypes", ProductTypeSchema)
