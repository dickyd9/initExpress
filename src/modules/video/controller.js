const VideoService = require("./service")
const asyncHandler = require("express-async-handler")

exports.getVideos = asyncHandler(async (req, res) => {
  try {
    const data = await VideoService.getVideo(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.newVideo = asyncHandler(async (req, res) => {
  const create = req.body
  try {
    const data = await VideoService.newVideo(create)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.editVideo = asyncHandler(async (req, res) => {
  try {
    const data = await VideoService.editVideo(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.deleteVideo = asyncHandler(async (req, res) => {
  try {
    const data = await VideoService.deleteUser(req.params.id)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error })
  }
})
