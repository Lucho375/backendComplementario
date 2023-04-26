import { Router } from 'express'
import controller from '../controllers/Product.js'
import { productValidation } from '../middlewares/validations/productValidations.js'

const productsRoutes = Router()

productsRoutes
  .get('/', controller.getProducts)
  .post('/', productValidation.createProduct, controller.createProduct)
  .get('/:id', productValidation.getOneProduct, controller.getProductById)
  .delete('/:id', productValidation.deleteProduct, controller.deleteProductById)
  .put('/:id', productValidation.updateProduct, controller.updateProduct)

export default productsRoutes
