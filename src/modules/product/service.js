const Inteceptor = require("../../common/middleware/response")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const db = require("../../../models")
const Product = db.product

exports.getProduct = asyncHandler(async (req) => {
  const message = "Success get data!"
  return Inteceptor.response(Product, req, message)
})

exports.createProduct = asyncHandler(async (createProduct) => {
  try {
    const { file, body } = await createProduct

    const originPath = "/assets/images/product/" + file?.filename
    const data = {
      productImage: originPath || "",
      productName: body.productName,
      productPrice: body.productPrice,
      productLink: body.productLink,
    }

    const products = await Product.create(data)
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success add product",
        data: products,
      }
      resolve(data)
    })
  } catch (error) {}
})
