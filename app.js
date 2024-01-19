const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const mongoose = require("mongoose")

const typeDefs = require("./schema/schema")
const resolvers = require("./resolver/resolver")
const app = express()

// Load db methods
const mongoDataMethods = require("./data/db")

// Connect to Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kanechan:tranvankhoa_2593@graphqlcluster.4o4tbam.mongodb.net/?retryWrites=true&w=majority",
      {}
    )
    console.log("Mongoose Connected")
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods })
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
}
startServer()

app.listen({ port: 4000 }, () => {
  console.log(`Server on http://localhost:4000${apolloServer.graphqlPath}`)
})

connectDB()
