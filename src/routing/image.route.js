const express = require("express")
const ImagesController = require("../modules/images/controller")
const uploadMiddleware = require("../common/middleware/uploadFile")

const router = express.Router()

router.post(
  "/images",
  uploadMiddleware.single("path"),
  ImagesController.addImage
)
router.get("/images", ImagesController.getImage)
router.delete("/images/:id", ImagesController.deleteImage)
router.put(
  "/images/:id",
  uploadMiddleware.single("path"),
  ImagesController.deleteImage
)

module.exports = router
