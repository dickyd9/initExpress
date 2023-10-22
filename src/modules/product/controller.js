const asyncHandler = require("express-async-handler")
const ProductService = require("./service")

exports.getProduct = asyncHandler(async (req, res) => {
  try {
    const data = await ProductService.getProduct(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.addProduct = asyncHandler(async (req, res) => {
  try {
    const data = await ProductService.createProduct(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error })
  }
})

exports.editProduct = asyncHandler(async (req, res) => {
  try {
    const data = await ProductService.editProduct(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error })
  }
})

exports.deleteProduct = asyncHandler(async (req, res) => {
  try {
    const data = await ProductService.deleteProduct(req.params.id)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error })
  }
})
