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
  type ProductType {
    productTypeName: String!
  }
  type Product {
    title: String!
    description: String!
    price: Float!
    ratings: Int!
    reviews: Int!
    isAddedBtn: Boolean!
    quantity: Int!
    imgUrl: String!
  }

  type User {
    name: String!
    email: String!
    password: String!
    favourites: [Product]!
    inCart: [Product]!
  }
  # ROOT TYPE:
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
    user(email: String!): User
    users: [User]
    product(id: ID!): Product
    products: [Product]
  }
  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID!): Book
    # daecommerce app
    createProduct(
      title: String!
      description: String!
      price: Float!
      ratings: Int
      reviews: Int
      isAddedBtn: Boolean
      quantity: Int
      imgUrl: String
    ): Product
    updateProduct(
      id: ID!
      title: String
      description: String
      price: Float
      ratings: Int
      reviews: Int
      isAddedBtn: Boolean
      quantity: Int
      imgUrl: String
    ): Product
    createProductType(productTypeName: String!): ProductType
    createUser(name: String!, email: String!, password: String!): User
    updateUser(id: ID!, name: String, email: String, password: String, favourites: [ID], inCart: [ID]): User
    deleteUser(id: ID!): User
  }
`

module.exports = typeDefs
