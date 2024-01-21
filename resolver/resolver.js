const resolver = {
  // QUERY
  Query: {
    books: async (parent, args, context) => await context.mongoDataMethods.getAllBooks(),
    book: async (parent, args, context) => await context.mongoDataMethods.getBookById(args.id),
    authors: async (parent, args, context) => await context.mongoDataMethods.getAllAuthors(),
    author: async (parent, args, context) => await context.mongoDataMethods.getAuthorById(args.id),
    user: async (parent, args, context) => {
      const user = await context.mongoDataMethods.getUser(args.email)
      return user
    },
    users: async (parent, args, context) => await context.mongoDataMethods.getUsers(),
    product: async (parent, args, context) => await context.mongoDataMethods.getProduct(args.id),
    products: async (parent, args, context) => await context.mongoDataMethods.getProducts()
  },
  Book: {
    author: async (parent, args, context) => await context.mongoDataMethods.getAuthorById(parent.authorId)
  },
  Author: {
    books: async (parent, args, context) => await context.mongoDataMethods.getAllBooks({ authorId: parent.id })
  },
  User: {
    favourites: async (parent, args, context) => {
      const productIds = parent.favourites || []
      const products = await Promise.all(productIds.map((productId) => context.mongoDataMethods.getProduct(productId)))
      return products
    },
    inCart: async (parent, args, context) => {
      const inCartIds = parent.favourites || []
      const inCart = await Promise.all(inCartIds.map((productId) => context.mongoDataMethods.getProduct(productId)))
      return inCart
    }
  },
  Product: {
    productType: async (parent, args, context) => await context.mongoDataMethods.getProductType(parent.id)
  },
  // MUTATION
  Mutation: {
    createAuthor: async (parent, args, context) => await context.mongoDataMethods.createAuthor(args),
    createBook: async (parent, args, context) => await context.mongoDataMethods.createBook(args),
    createUser: async (parent, args, context) => await context.mongoDataMethods.createUser(args),
    updateUser: async (parent, args, context) => await context.mongoDataMethods.updateUser(args),
    createProduct: async (parent, args, context) => await context.mongoDataMethods.createProduct(args),
    updateProduct: async (parent, args, context) => await context.mongoDataMethods.updateProduct(args),
    createProductType: async (parent, args, context) => await context.mongoDataMethods.createProductType(args)
  }
}

module.exports = resolver
