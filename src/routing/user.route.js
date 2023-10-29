const express = require("express")
const UserController = require("../modules/user/controller")
const checkJwt = require("../common/middleware/auth")

const router = express.Router()

// router.get("/user", checkJwt, UserController.getUser)
router.get("/user", checkJwt, UserController.userProfile)
router.get("/user-list", UserController.getUser)
router.post("/signUp", UserController.newUser)
router.put("/editUser/:id", UserController.editUser)
router.delete("/deleteUser/:id", UserController.deleteUser)

module.exports = router
