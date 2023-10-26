const Inteceptor = require("../../common/middleware/response")
const asyncHandler = require("express-async-handler")
const db = require("../../../models")
const Images = db.images

exports.addImage = asyncHandler(async (req) => {
  try {
    const { file, body } = await req
    const originPath = "https://shoeslab.id" + "/assets/images/" + file?.filename
    const data = {
      path: originPath || "",
    }

    const images = await Images.create(data)
    return new Promise((resolve, reject) => {
      const data = {
        message: "Success add image",
        data: images,
      }
      resolve(data)
    })
  } catch (error) {}
})

exports.getImage = asyncHandler(async (req) => {
  const message = "Success get data!"
  const param = {}
  return Inteceptor.response(Images, req, message, param)
})

exports.editImage = asyncHandler(async (req) => {
  try {
    const { file, body } = await req

    const originPath = "https://shoeslab.id" + "/assets/images/" + file?.filename
    const data = {
      path: originPath || "",
    }

    const products = await Images.update(data, {
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
  await Images.destroy({
    where: {
      id: id,
    },
  })
  return new Promise((resolve, reject) => {
    const data = { message: "Data deleted!" }
    resolve(data)
  })
})
