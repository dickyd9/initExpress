const express = require("express")
const BlogController = require("../modules/blog/controller")
const uploadMiddleware = require("../common/middleware/uploadFile")

const router = express.Router()

router.post(
  "/blog",
  uploadMiddleware.single("blogImage"),
  BlogController.addBlog
)
router.get("/blog", BlogController.getBlog)
router.get("/blog/:id", BlogController.getBlogDetail)

module.exports = router
