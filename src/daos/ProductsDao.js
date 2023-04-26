import ProductModel from '../models/products/Product.js'

export class ProductsDao {
  async getAllProducts() {
    const products = await ProductModel.find()
    return products.map(
      ({ title, description, price, stock, thumbnail, _id }) => ({
        id: _id,
        title,
        description,
        price,
        stock,
        thumbnail
      })
    )
  }

  async createProduct(newProduct) {
    return ProductModel.create(newProduct)
  }

  async getProductById(id) {
    const product = await ProductModel.findById(id)
    const { title, description, price, stock, thumbnail, _id } = product
    return { id: _id, title, description, price, stock, thumbnail }
  }

  async updateProduct(id, update) {
    return ProductModel.findByIdAndUpdate(id, update, { new: true })
  }

  async deleteProduct(id) {
    return ProductModel.findByIdAndUpdate(id, { status: false }, { new: true })
  }
}
