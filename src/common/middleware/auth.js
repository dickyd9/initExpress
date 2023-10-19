const jwt = require('jsonwebtoken');
// import config from "../config/config"

module.exports = checkJwt = (req, res, next) => {
  //Get the jwt token from the head
  const token = req.headers.authorization
  let jwtPayload
  let secret = process.env.JWT_SECRET

  //Try to validate the token and get data
  try {
    const tk = token.split(" ")[1]
    jwtPayload = jwt.verify(tk, secret)
    req.body.user = jwtPayload
  } catch (error) {
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).json({ message: "Unauthorized!" })
    return
  }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { userId, username } = jwtPayload
  const newToken = jwt.sign({ userId, username }, secret, {
    expiresIn: "1h",
  })
  res.setHeader("token", newToken)

  //Call the next middleware or controller
  next()
}
