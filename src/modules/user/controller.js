const UserService = require("./service")
const asyncHandler = require("express-async-handler")

exports.getUser = asyncHandler(async (req, res) => {
  try {
    const data = await UserService.getUser(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.newUser = asyncHandler(async (req, res) => {
  const create = req.body
  try {
    const data = await UserService.newUser(create)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error: "Terjadi kesalahan dalam server" })
  }
})

exports.userProfile = asyncHandler(async (req, res) => {
  try {
    const data = await UserService.userProfile(req)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error })
  }
})