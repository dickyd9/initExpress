const Inteceptor = require("../../common/middleware/response")
const asyncHandler = require("express-async-handler")
const db = require("../../../models")
const Blog = db.blogs

exports.getBlogDetail = asyncHandler(async (req) => {
  const blogs = await Blog.findOne({ where: { id: req.params.id } })
  return new Promise((resolve, reject) => {
    const data = blogs
    resolve(data)
  })
})

exports.getBlog = asyncHandler(async (req) => {
  const message = "Success get data!"
  return Inteceptor.response(Blog, req, message)
})

exports.addBlog = asyncHandler(async (req) => {
  const { file, body } = await req
  console.log(body)
  const originPath = "/assets/images/blog/" + file?.filename
  const data = {
    blogImage: originPath || "",
    blogTitle: body.blogTitle,
    blogDesc: body.blogDesc,
    blogStatus: body.blogStatus,
  }
  const blogs = await Blog.create(data)
  return new Promise((resolve, reject) => {
    const data = {
      message: "Success add product",
      data: blogs,
    }
    resolve(data)
  })
})
