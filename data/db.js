const Author = require("../models/Author")
const Book = require("../models/Book")
const User = require("../models/User")
const Product = require("../models/Product")
// const ProductType = require("../models/ProductType")

const mongoDataMethods = {
  createAuthor: async (args) => {
    const newAuthor = new Author(args)
    return await newAuthor.save()
  },
  createBook: async (args) => {
    const newBook = new Book(args)
    return await newBook.save()
  },
  getAllBooks: async (condition = null) => (condition === null ? await Book.find() : await Book.find(condition)),
  getBookById: async (id) => await Book.findById(id),
  getAllAuthors: async () => await Author.find(),
  getAuthorById: async (id) => await Author.findById(id),

  // daecommerce app
  // createProductType: async ({ productTypeName }) => {
  //   try {
  //     const productType = new ProductType({
  //       productTypeName
  //     })
  //     await productType.save()
  //     return productType
  //   } catch (err) {
  //     throw new Error("Error creating productType")
  //   }
  // },
  // updateProductType: async ({ id, productTypeName }) => {
  //   try {
  //     const productType = await ProductType.findByIdAndUpdate(id, { productTypeName }, { new: true })
  //     return productType
  //   } catch (err) {
  //     throw new Error("Error updating productType")
  //   }
  // },
  // getProductTypes: async () => {
  //   try {
  //     const productTypes = await ProductType.find()
  //     console.log("productTypes", productTypes)
  //     return productTypes
  //   } catch (err) {
  //     throw new Error("Error retrieving productTypes")
  //   }
  // },
  // getProductType: async (id) => {
  //   try {
  //     const productType = await ProductType.findById(id)
  //     return productType
  //   } catch (err) {
  //     throw new Error("Error retrieving productType")
  //   }
  // },
  createProduct: async ({ title, description, price, ratings, reviews, isAddedBtn, quantity, imgUrl }) => {
    try {
      const product = new Product({
        title,
        description,
        price,
        ratings,
        reviews,
        isAddedBtn,
        quantity,
        imgUrl
      })
      await product.save()
      return product
    } catch (err) {
      throw new Error("Error creating product")
    }
  },
  updateProduct: async ({ id, title, description, price, ratings, reviews, isAddedBtn, quantity, imgUrl }) => {
    try {
      const product = await Product.findByIdAndUpdate(
        id,
        { title, description, price, ratings, reviews, isAddedBtn, quantity, imgUrl },
        { new: true }
      )
      return product
    } catch (err) {
      throw new Error("Error updating product")
    }
  },
  getProducts: async () => {
    try {
      const products = await Product.find()
      return products
    } catch (err) {
      throw new Error("Error retrieving products")
    }
  },
  getProduct: async (id) => {
    try {
      const product = await Product.findById(id)
      return product
    } catch (err) {
      throw new Error("Error retrieving product")
    }
  },
  getUser: async (email) => {
    try {
      const user = await User.findOne({ email: email })
      return user
    } catch (err) {
      throw new Error("Error retrieving user")
    }
  },
  getUsers: async () => {
    try {
      const users = await User.find()
      return users
    } catch (err) {
      throw new Error("Error retrieving users")
    }
  },
  createUser: async ({ name, email, password, favourites }) => {
    try {
      const user = new User({ name, email, password, favourites })
      await user.save()
      return user
    } catch (err) {
      throw new Error("Error creating user")
    }
  },
  updateUser: async ({ id, name, email, password, favourites }) => {
    try {
      const user = await User.findByIdAndUpdate(id, { name, email, password, favourites }, { new: true })
      return user
    } catch (err) {
      throw new Error("Error updating user")
    }
  },
  deleteUser: async ({ id }) => {
    try {
      const user = await User.findByIdAndRemove(id)
      return user
    } catch (err) {
      throw new Error("Error deleting user")
    }
  }
}
module.exports = mongoDataMethods
