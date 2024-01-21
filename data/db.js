const Author = require("../models/Author")
const Book = require("../models/Book")
const User = require("../models/User")
const Product = require("../models/Product")
const ProductType = require("../models/ProductType")

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
  createProductType: async ({ productTypeName }) => {
    try {
      const existingProductType = await ProductType.findOne({ productTypeName })
      if (existingProductType) {
        console.log("Product type already exists:", existingProductType)
      } else {
        const newProductType = new ProductType({ productTypeName })
        await newProductType.save()
        return newProductType
      }
    } catch (err) {
      throw new Error("Error creating productType")
    }
  },
  updateProductType: async ({ id, productTypeName }) => {
    try {
      const productType = await ProductType.findByIdAndUpdate(id, { productTypeName }, { new: true })
      return productType
    } catch (err) {
      throw new Error("Error updating productType")
    }
  },
  getProductTypes: async () => {
    try {
      const productTypes = await ProductType.find()
      return productTypes
    } catch (err) {
      throw new Error("Error retrieving productTypes")
    }
  },
  getProductType: async (id) => {
    try {
      const productType = await ProductType.findById(id)
      return productType
    } catch (err) {
      throw new Error("Error retrieving productType")
    }
  },
  createProduct: async ({ title, description, price, ratings, reviews, isAddedBtn, quantity, imgUrl, productType }) => {
    try {
      const product = new Product({
        title,
        description,
        price,
        ratings,
        reviews,
        isAddedBtn,
        quantity,
        imgUrl,
        productType
      })
      await product.save()
      return product
    } catch (err) {
      throw new Error("Error creating product")
    }
  },
  updateProduct: async ({
    id,
    title,
    description,
    price,
    ratings,
    reviews,
    isAddedBtn,
    quantity,
    imgUrl,
    productType
  }) => {
    try {
      const product = await Product.findByIdAndUpdate(
        id,
        { title, description, price, ratings, reviews, isAddedBtn, quantity, imgUrl, productType },
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
      const existingUser = await User.findOne({ email: email })
      if (existingUser) {
        console.log("Email type already exists:", existingProductType)
      } else {
        const newUser = new User({ name, email, password, favourites })
        await newUser.save()
        return newUser
      }
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
