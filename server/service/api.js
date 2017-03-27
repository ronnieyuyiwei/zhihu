const express = require('express')
const router = express.Router()
const User = require('../db/files/user')
const register = require('./register')
const login = require('./login')

const session = require('express-session')
router.use(session({
  secret: 'this_is_a_smart_website',
  name: 'swallow',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
  cookie: {
    httpOnly: true,
    maxAge: 80000
  },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: true,
  saveUninitialized: true
}))
// router.use('/', register )
router.use('/', login)
module.exports = router
