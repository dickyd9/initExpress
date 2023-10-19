"use strict"

const ExpressConfig = require("./express-config")
const route = require("./src/routing/router")

const app = ExpressConfig()
const PORT = process.env.PORT || 5000

app.use("/v1", route)

app.listen(PORT, () => {
  console.log(`Example app listening at ${PORT}`)
})

module.exports = app
