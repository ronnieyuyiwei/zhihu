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
router.post('/login/checkAccount', (req, res) => {
  let data = {
    account: req.body.account,
    password: req.body.password
  }
  console.log(req.body.account)
  User.findOne({account: data.account, password: data.password}, (err, result) => {
    if (err) console.log(err)
    console.log(result)
    if (result) {
      res.send('登录成功')
    } else {
      res.send('用户名密码错误')
    }
  })
})
router.get('/login/getCaptcha', (req, res) => {
  var captcha = svgCaptcha.create({noise: 2, ignoreChars: '0o1i' })
  req.session.captchaText2 = captcha.text.toLowerCase()
  res.set('Content-Type', 'image/svg+xml')
  res.status(200).send(captcha.data)
})
router.get('/login/checkCaptcha', (req, res) => {
  console.log('收到的验证码' + req.query.captcha)
  console.log('session验证码' + req.session.captchaText2)
  if (req.query.captcha === req.session.captchaText2) {
    res.send({message:'验证码正确', permission: true})
  } else {
    res.send({message:'验证码错误,请重新输入', permission: false})
  }
})
module.exports = router
