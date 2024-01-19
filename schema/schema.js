const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }
  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }
  type User {
    name: String!
    email: String!
    password: String!
  }
  # ROOT TYPE:
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
    getUser(email: String!): User
    getUsers: [User]
  }
  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID!): Book
    # users
    createUser(name: String!, email: String!, password: String!): User
    updateUser(id: ID!, name: String, email: String, password: String): User
    deleteUser(id: ID!): User
  }
`

module.exports = typeDefs
