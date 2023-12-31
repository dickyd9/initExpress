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
router.delete("/product/:id", ProductController.deleteProduct)
router.put(
  "/product/:id",
  uploadMiddleware.single("productImage"),
  ProductController.editProduct
)

module.exports = router
