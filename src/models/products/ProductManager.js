import { ProductsDao } from '../../daos/ProductsDao.js'

export class ProductManager {
  constructor() {
    this.productDao = new ProductsDao()
  }

  async findAll() {
    return this.productDao.getAllProducts()
  }

  async findById(id) {
    return this.productDao.getProductById(id)
  }

  async createProduct(product) {
    return this.productDao.createProduct(product)
  }

  async update(id, update) {
    return this.productDao.updateProduct(id, update)
  }

  async delete(id) {
    return this.productDao.deleteProduct(id)
  }
}
