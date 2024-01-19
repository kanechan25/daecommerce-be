const Author = require("../models/Author")
const Book = require("../models/Book")
const User = require("../models/User")

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

  getUser: async ({ email }) => {
    try {
      const user = await User.findOne(email)
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
  createUser: async ({ name, email, password }) => {
    try {
      const user = new User({ name, email, password })
      await user.save()
      return user
    } catch (err) {
      throw new Error("Error creating user")
    }
  },
  updateUser: async ({ id, name, email, password }) => {
    try {
      const user = await User.findByIdAndUpdate(id, { name, email, password }, { new: true })
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
