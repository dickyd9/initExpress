"use strict"

const express = require("express")
const serverless = require("serverless-http")

const app = express()
const port = 3000

const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello World!")
})

app.use("/api/", router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app
module.exports.handler = serverless(app)
