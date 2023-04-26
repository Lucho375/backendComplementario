import { body, param } from 'express-validator'
import inputsValidations from './InputValidation.js'

const checkMongoId = () =>
  param('id')
    .trim()
    .notEmpty()
    .withMessage('Empty id')
    .isMongoId()
    .withMessage('Invalid id')
    .escape()

export const productValidation = {
  createProduct: [
    body('title', 'Title is required!').trim().notEmpty().escape(),
    body('description', 'Description is required!').trim().notEmpty().escape(),
    body('code', 'Product is code required!').trim().notEmpty().escape(),
    body('price', 'Price must be a number and is required!')
      .trim()
      .notEmpty()
      .isNumeric()
      .escape(),
    body('stock', 'Stock must be a number and is required!')
      .trim()
      .notEmpty()
      .isNumeric()
      .escape(),
    inputsValidations
  ],
  getOneProduct: [checkMongoId(), inputsValidations],
  updateProduct: [
    checkMongoId(),
    body().custom(value => {
      if (Object.keys(value).length === 0) {
        throw new Error('Empty update!')
      }
      return true
    }),
    inputsValidations
  ],
  deleteProduct: [checkMongoId(), inputsValidations]
}
