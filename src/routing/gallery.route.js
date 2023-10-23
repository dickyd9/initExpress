const express = require("express")
const GalleryController = require("../modules/gallery/controller")
const uploadMiddleware = require("../common/middleware/uploadFile")

const router = express.Router()

router.post(
  "/gallery",
  uploadMiddleware.single("path"),
  GalleryController.addImage
)
router.get("/gallery", GalleryController.getImage)
router.put(
  "/gallery/:id",
  uploadMiddleware.single("path"),
  GalleryController.updateImage
)
router.delete("/gallery/:id", GalleryController.deleteImage)

module.exports = router
