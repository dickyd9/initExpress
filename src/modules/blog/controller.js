const asyncHandler = require("express-async-handler")
const BlogService = require("./service")

exports.getBlog = asyncHandler(async (req, res, next) => {
  try {
    const data = await BlogService.getBlog(req)
    res.json(data)
  } catch (error) {
    next(error)
  }
})

exports.getBlogDetail = asyncHandler(async (req, res) => {
  try {
    const data = await BlogService.getBlogDetail(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res
      .status(500)
      .json({ error: "Terjadi kesalahan dalam mengambil data bisnis" })
  }
})

exports.getRecentBlog = asyncHandler(async (req, res) => {
  try {
    const data = await BlogService.getRecentBlog(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res
      .status(500)
      .json({ error: "Terjadi kesalahan dalam mengambil data bisnis" })
  }
})

exports.addBlog = asyncHandler(async (req, res) => {
  try {
    const data = await BlogService.addBlog(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error })
  }
})
