const Inteceptor = require("../../common/middleware/response")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const db = require("../../../models")
const Product = db.product

exports.getProduct = asyncHandler(async (req) => {
  const message = "Success get data!"
  const param = {}
  return Inteceptor.response(Product, req, message, param)
})

exports.createProduct = asyncHandler(async (req) => {
  try {
    const { file, body } = await req

    const originPath = "/assets/images/" + file?.filename
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

exports.editProduct = asyncHandler(async (createProduct) => {
  try {
    const { file, body } = await createProduct

    const originPath = "/assets/images/" + file?.filename
    const data = {
      productImage: originPath || "",
      productName: body.productName,
      productPrice: body.productPrice,
      productLink: body.productLink,
    }

    const products = await Product.update(data, {
      where: { id: createProduct.params.id },
    })
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success update product",
        data: products,
      }
      resolve(data)
    })
  } catch (error) {}
})

exports.deleteProduct = asyncHandler(async (id) => {
  await Product.destroy({
    where: {
      id: id,
    },
  })
  return new Promise((resolve, reject) => {
    const data = { message: "Data deleted!" }
    resolve(data)
  })
})
