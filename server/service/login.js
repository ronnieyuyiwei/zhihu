/**
 * Created by YYW on 2017/3/27.
 */
/**
 * Created by YYW on 2017/3/27.
 */
const express = require('express')
const router = express.Router()
const User = require('../db/files/user')
var svgCaptcha = require('svg-captcha')

router.get('/login/getCaptcha', (req, res) => {
  var captcha = svgCaptcha.create({noise: 2, ignoreChars: '0o1i' })
  // req.session.captchaText = captcha.text.toLowerCase()
  res.set('Content-Type', 'image/svg+xml')
  res.status(200).send(captcha.data)
})
module.exports = router
