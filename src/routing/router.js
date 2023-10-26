const express = require("express")
const router = express.Router()

const auth = require("./auth.route")
const user = require("./user.route")
const product = require("./product.route")
const blog = require("./blog.route")
const gallery = require("./gallery.route")
const images = require("./image.route")
// const testimoni = require("./testimoni/testi.routing")
// const kemitraan = require("./kemitraan/kemitraan.routing")

router.use(auth)
router.use(user)
router.use(product)
router.use(blog)
router.use(gallery)
router.use(images)
// router.use(testimoni)
// router.use(kemitraan)

module.exports = router
