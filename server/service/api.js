const express = require('express')
const router = express.Router()
const register = require('./register')
const login = require('./login')

const session = require('express-session')
const cookieParser = require('cookie-parser')

router.use(session({
  secret: 'this_is_a_smart_website',
  name: 'swallow',   // 这里的name值得是cookie的name，默认cookie的name是：connect.sid
  cookie: {
    httpOnly: true,
    maxAge: 3600 * 1000 * 24 * 10 // 设置maxAge是10天，即10天后session和相应的cookie失效过期
  },
  resave: true,
  saveUninitialized: true
}))
router.use(cookieParser('this_is_a_smart_website'))
router.use('/', register)
router.use('/', login)
module.exports = router
