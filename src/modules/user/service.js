const { validate } = require("class-validator")
const Inteceptor = require("../../common/middleware/response")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const db = require("../../../models")
const User = db.users

exports.getUser = asyncHandler(async (req) => {
  const message = "Success get data!"
  return Inteceptor.response(User, req, message)
})

exports.newUser = asyncHandler(async (createUser) => {
  const users = await User.create(createUser)
  const errors = await validate(users)
  if (errors.length > 0) {
    res.status(400).send(errors)
    return
  }
  return new Promise((resolve, reject) => {
    const data = {
      message: "Success add user",
      data: users,
    }
    resolve(data)
  })
})

exports.userProfile = asyncHandler(async (req) => {
  return new Promise((resolve, reject) => {
    const data = req.body.user
    resolve(data)
  })
})