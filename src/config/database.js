import mongoose from 'mongoose'

async function MongoDbConnection() {
  const URI = process.env.MONGO_DB_URI
  if (!URI) {
    throw new Error('Missing MONGO_DB_URI environment variable')
  }

  try {
    await mongoose.connect(URI)
    console.log('Connected to database')
  } catch (error) {
    console.log({ error: error.message })
  }
}

export default MongoDbConnection
