const express = require("express")
const AuthController = require("../modules/auth/controller")

const router = express.Router()

// router.get("/user", UserController)
router.post("/signIn", AuthController.login)
// router.put("/product", ProductController.updateProduct)

module.exports = router
