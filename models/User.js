const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favourites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  inCart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ]
})
UserSchema.set("toObject", { virtuals: true })
UserSchema.set("toJSON", { virtuals: true })
UserSchema.path("favourites").default(() => [])
UserSchema.path("inCart").default(() => [])

module.exports = mongoose.model("users", UserSchema)
