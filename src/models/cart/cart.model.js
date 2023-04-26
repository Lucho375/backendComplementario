import { model, Schema } from 'mongoose'

const CartSchema = new Schema({
  products: [
    {
      id: String,
      quantity: Number
    }
  ]
})

const CartModel = model('Carts', CartSchema)

export default CartModel
