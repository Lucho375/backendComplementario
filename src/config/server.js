import express, { urlencoded } from 'express'
import productsRoutes from '../routes/productRoutes.js'
import userRoutes from '../routes/userRoutes.js'
import cors from 'cors'
import corsOptions from './corsOptions.js'

export default function Server() {
  const app = express()
  app.use(cors(corsOptions))
  app.use(urlencoded({ extended: true, limit: '2mb' }))
  app.use(express.json({ limit: '2mb' }))
  app.use('/products', productsRoutes)
  app.use('/users', userRoutes)
  return app
}
