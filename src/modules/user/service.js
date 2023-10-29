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
    const user = req.body.user
    const data = User.findByPk(user.userId, {
      attributes: {
        exclude: ["password", "auth_token", "email_verification_token"],
      },
    })
    resolve(data)
  })
})

exports.editUser = asyncHandler(async (req) => {
  const salt = bcrypt.genSaltSync(10, "a")
  const hash = bcrypt.hashSync(req.body?.password, salt)

  const editUser = {
    ...req.body,
    password: hash
  }

  const user = await User.update(editUser, {
    where: { id: req.params.id },
  })
  return new Promise((resolve, reject) => {
    const data = {
      message: "Success edit user",
      data: user,
    }
    resolve(data)
  })
})

exports.deleteUser = asyncHandler(async (id) => {
  await User.destroy({
    where: {
      id: id,
    },
  })
  return new Promise((resolve, reject) => {
    const data = { message: "Data deleted!" }
    resolve(data)
  })
})
