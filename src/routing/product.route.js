const express = require("express")
const ProductController = require("../modules/product/controller")
// import { checkJwt } from "../../common/middleware/auth"
const uploadMiddleware = require("../common/middleware/uploadFile")

const router = express.Router()

router.post(
  "/product",
  uploadMiddleware.single("productImage"),
  ProductController.addProduct
)
// router.get("/product", checkJwt, ProductController.getProductData)
router.get("/product", ProductController.getProduct)
// router.put("/product", ProductController.updateProduct)

module.exports = router
