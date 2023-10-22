const Inteceptor = require("../../common/middleware/response")
const asyncHandler = require("express-async-handler")
const db = require("../../../models")
const Blog = db.blogs
const Sequelize = require("sequelize")

exports.getBlogDetail = asyncHandler(async (req) => {
  const blogs = await Blog.findOne({ where: { id: req.params.id } })
  return new Promise((resolve, reject) => {
    const data = blogs
    resolve(data)
  })
})

exports.getBlog = asyncHandler(async (req) => {
  const message = "Success get data!"
  const query = {}

  if (req.query.keyword) {
    query.blogTitle = {
      [Sequelize.Op.regexp]: req.query.keyword, // Gunakan req.query.name sebagai pola RegEx
    }
  }

  if (req.query.status) {
    query.blogStatus = {
      [Sequelize.Op.eq]: req.query.status, // Gunakan req.query.name sebagai pola RegEx
    }
  }

  return Inteceptor.response(Blog, req, message, query)
})

exports.getRecentBlog = asyncHandler(async () => {
  const blogs = await Blog.findAll({
    order: [["createdAt", "DESC"]],
    limit: 3,
  })
  return new Promise((resolve, reject) => {
    const data = blogs
    resolve(data)
  })
})

exports.addBlog = asyncHandler(async (req) => {
  const { file, body } = await req
  const originPath = "/assets/images/" + file?.filename
  const data = {
    blogImage: originPath || "",
    blogTitle: body.blogTitle,
    blogDesc: body.blogDesc,
    blogStatus: body.blogStatus,
  }
  const blogs = await Blog.create(data)
  return new Promise((resolve, reject) => {
    const data = {
      message: "Success add blog",
      data: blogs,
    }
    resolve(data)
  })
})

exports.editBlog = asyncHandler(async (req) => {
  const { file, body } = await req
  console.log(body)
  const originPath = "/assets/images/" + file?.filename
  const data = {
    blogImage: originPath || "",
    blogTitle: body.blogTitle,
    blogDesc: body.blogDesc,
    blogStatus: body.blogStatus,
  }
  const blogs = await Blog.update(data, { where: { id: req.params.id } })
  return new Promise((resolve, reject) => {
    const data = {
      message: "Success update blog",
      data: blogs,
    }
    resolve(data)
  })
})

exports.deleteBlog = asyncHandler(async (id) => {
  await Blog.destroy({
    where: {
      id: id,
    },
  })
  return new Promise((resolve, reject) => {
    const data = { message: "Data deleted!" }
    resolve(data)
  })
})
