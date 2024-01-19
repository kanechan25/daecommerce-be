const resolver = {
  // QUERY
  Query: {
    books: async (parent, args, context) => await context.mongoDataMethods.getAllBooks(),
    book: async (parent, args, context) => await context.mongoDataMethods.getBookById(args.id),
    authors: async (parent, args, context) => await context.mongoDataMethods.getAllAuthors(),
    author: async (parent, args, context) => await context.mongoDataMethods.getAuthorById(args.id),
    getUser: async (parent, args, context) => await context.mongoDataMethods.getUser(args.email)
  },
  Book: {
    author: async (parent, args, context) => await context.mongoDataMethods.getAuthorById(parent.authorId)
  },
  Author: {
    books: async (parent, args, context) => await context.mongoDataMethods.getAllBooks({ authorId: parent.id })
  },

  // MUTATION
  Mutation: {
    createAuthor: async (parent, args, context) => await context.mongoDataMethods.createAuthor(args),
    createBook: async (parent, args, context) => await context.mongoDataMethods.createBook(args),
    createUser: async (parent, args, context) => await context.mongoDataMethods.createUser(args)
  }
}

module.exports = resolver
