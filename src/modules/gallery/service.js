const Inteceptor = require("../../common/middleware/response")
const asyncHandler = require("express-async-handler")
const db = require("../../../models")
const Gallery = db.gallery

exports.addImage = asyncHandler(async (req) => {
  try {
    const { file, body } = await req

    const originPath = "/assets/images/" + file?.filename
    const data = {
      path: originPath || "",
      title: body.title,
      link: body.link,
      size: body.size,
    }

    const products = await Gallery.create(data)
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success add image",
        data: products,
      }
      resolve(data)
    })
  } catch (error) {}
})

exports.getImage = asyncHandler(async (req) => {
  const message = "Success get data!"
  const param = {}
  return Inteceptor.response(Gallery, req, message, param)
})

exports.editImage = asyncHandler(async (req) => {
  try {
    const { file, body } = await req

    const originPath = "/assets/images/" + file?.filename
    const data = {
      path: originPath || "",
      title: body.title,
      link: body.link,
      size: body.size,
    }

    const products = await Gallery.update(data, {
      where: { id: req.params.id },
    })
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success edit image",
        data: products,
      }
      resolve(data)
    })
  } catch (error) {}
})

exports.deleteImage = asyncHandler(async (id) => {
  await Gallery.destroy({
    where: {
      id: id,
    },
  })
  return new Promise((resolve, reject) => {
    const data = { message: "Data deleted!" }
    resolve(data)
  })
})
