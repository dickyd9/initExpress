class Inteceptor {
  async response(model, req, message) {
    const page = parseInt(req.query.page, 10) || 1
    const limit = parseInt(req.query.limit, 10) || 10
    const offset = (page - 1) * limit

    if (req.route.path === "/user-list") {
      const datas = await model.findAll({
        attributes: [
          "fullname",
          "address",
          "email",
          "is_email_verified",
          "createdAt",
        ],
        // limit: limit,
        // offset: offset,
      })
      const total = await model.count()
      const totalPages = Math.ceil(total / limit)

      return new Promise((resolve, reject) => {
        const data = {
          message: message,
          data: datas,
          meta: {
            totalData: total,
            limit: limit,
            page: offset,
            totalPages,
          },
        }
        resolve(data)
      })
    }
    
    const datas = await model.findAll({
      limit: limit,
      offset: offset,
    })

    const total = await model.count()
    const totalPages = Math.ceil(total / limit)

    return new Promise((resolve, reject) => {
      const data = {
        message: message,
        data: datas,
        meta: {
          totalData: total,
          limit: limit,
          page: offset,
          totalPages,
        },
      }
      resolve(data)
    })
  }

  errorHandler(err, res) {
    if (err.status) {
      res.status(err.status).json({ message: err.message })
    } else {
      res.status(500).json({ message: "Terjadi kesalahan dalam server" })
    }
  }
}

module.exports = new Inteceptor()
