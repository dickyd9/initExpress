const asyncHandler = require("express-async-handler")
const AuthService = require("./service")

exports.login = asyncHandler(async (req, res) => {
  const login = req.body
  try {
    const data = await AuthService.login(login, res)
    res.json(data)
  } catch (error) {
    console.error("Terjadi kesalahan:", error)
    res.status(500).json({ error })
  }
})
