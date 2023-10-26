const asyncHandler = require("express-async-handler")
const ImagesService = require("./service")

exports.getImage = asyncHandler(async (req, res) => {
  try {
    const data = await ImagesService.getImage(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.addImage = asyncHandler(async (req, res) => {
  try {
    const data = await ImagesService.addImage(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.updateImage = asyncHandler(async (req, res) => {
  try {
    const data = await ImagesService.editImage(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.deleteImage = asyncHandler(async (req, res) => {
  try {
    const data = await ImagesService.deleteImage(req.params.id)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error })
  }
})
