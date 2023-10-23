const asyncHandler = require("express-async-handler")
const GalleryService = require("./service")

exports.getImage = asyncHandler(async (req, res) => {
  try {
    const data = await GalleryService.getImage(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.addImage = asyncHandler(async (req, res) => {
  try {
    const data = await GalleryService.addImage(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.updateImage = asyncHandler(async (req, res) => {
  try {
    const data = await GalleryService.editImage(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.deleteImage = asyncHandler(async (req, res) => {
  try {
    const data = await GalleryService.deleteImage(req.params.id)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error })
  }
})
