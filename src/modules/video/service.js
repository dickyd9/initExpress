const { validate } = require("class-validator")
const Inteceptor = require("../../common/middleware/response")
const asyncHandler = require("express-async-handler")
const db = require("../../../models")
const Video = db.video

exports.getVideo = asyncHandler(async (req) => {
  const message = "Success get data!"
  return Inteceptor.response(Video, req, message)
})

exports.newVideo = asyncHandler(async (createUser) => {
  const videos = await Video.create(createUser)
  const errors = await validate(videos)
  if (errors.length > 0) {
    res.status(400).send(errors)
    return
  }
  return new Promise((resolve, reject) => {
    const data = {
      message: "Success add user",
      data: videos,
    }
    resolve(data)
  })
})

exports.editVideo = asyncHandler(async (editVideo) => {
  try {
    const videos = await Video.update(editVideo.body, {
      where: { id: editVideo.params.id },
    })
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success update link video",
        data: videos,
      }
      resolve(data)
    })
  } catch (error) {}
})

exports.deleteUser = asyncHandler(async (id) => {
  await Video.destroy({
    where: {
      id: id,
    },
  })
  return new Promise((resolve, reject) => {
    const data = { message: "Data deleted!" }
    resolve(data)
  })
})
