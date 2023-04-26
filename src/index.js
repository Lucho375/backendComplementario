/* eslint no-unused-vars: "off" */
import MongoDbConnection from './config/database.js'
import Server from './config/server.js'
import 'dotenv/config'
;(async function main() {
  try {
    const httpServer = Server().listen(process.env.PORT || 8080, () =>
      console.log(`Server running on port : ${process.env.PORT}`)
    )
    await MongoDbConnection()
  } catch (error) {
    console.log(error.message)
  }
})()
