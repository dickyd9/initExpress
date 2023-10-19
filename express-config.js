const compression = require("compression")
const cookieParser = require("cookie-parser")

const express = require("express")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const mysql = require("mysql2")

const dotenv = require("dotenv")

require("./models/index.js")

dotenv.config()

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

db.connect((err) => {
  if (err) {
    console.error("Gagal terhubung ke MySQL:", err)
  } else {
    console.log("Berhasil terhubung ke MySQL")
  }
})

const ExpressConfig = () => {
  const app = express()

  const options = {
    origin: "*",
    Credential: true,
  }

  app.use(cors(options))
  app.use(compression())
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use("/assets", express.static(__dirname + "/assets"))

  app.use(helmet())
  app.use(cookieParser())
  app.use(morgan("dev"))

  return app
}
module.exports = ExpressConfig
