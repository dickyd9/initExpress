const asyncHandler = require("express-async-handler")
const db = require("../../../models")
const User = db.users
const dotenv = require("dotenv")

const bcrypt = require("bcrypt")

const jwt = require('jsonwebtoken');

dotenv.config()

exports.login = asyncHandler(async (login, res) => {
  try {
    let { email, password } = login
    if (!(email && password)) {
      res.status(400).send()
    }

    const user = await User.findOne({ where: { email: email } })

    if (user) {
      const password_valid = await bcrypt.compare(password, user.password)
      if (password_valid) {
        let secret = process.env.JWT_SECRET
        const token = jwt.sign({ userId: user.id, email: user.email }, secret, {
          expiresIn: "10000",
        })

        // //Send the jwt in the response
        res.send({
          auth: token,
        })
      } else {
        res.status(400).send({ error: "Password Incorrect" })
      }
    } else {
      res.status(404).send({ error: "User does not exist" })
    }
  } catch (error) {
    res.status(404).send({ error: error })
  }
})
