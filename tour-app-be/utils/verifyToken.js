import jwt from 'jsonwebtoken'

function verifyTokens  (token)  {
  let reqUser = null
  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized" })
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'token is invalid' })
    }
   reqUser=user
  })
  return reqUser

}
export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken
  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized" })
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ success: false, message: 'token is invalid' })
    }
    req.user = user
   
  })
  next()
}
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    }
    else {
      return res.status(401).json({ success: false, message: "Not Authenticated" })
    }
  })
}

export const verifyAdmin = (req, res, next) => {

  const user = verifyTokens(req.cookies.accessToken)
  user.role = 'admin'
  if(user.role === 'admin'){
    next()
  }
  else {
       return res.status(401).json({ success: false, message: "Not Authenticated" })
  }
  
}