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
      req.session.account = data.account
      res.cookie('AndLogin', {account: data.account}, { expires: new Date(Date.now() + 3600*1000*24*10), httpOnly: true });
      res.send('登录成功')
    } else {
      res.send('用户名密码错误')
    }
  })
})
router.get('/login/checkLogin', (req, res) => { // 验证是否已经登录
  // console.log('Cookies: ', req.cookies)
  // console.log('Signed Cookies: ', req.signedCookies)
  if (req.session.account) {
    console.log('session中获取到账户名' + req.session.account)
    res.send({
      login: true,
      account: req.session.account,
      session_id: req.session.id
    })
  } else if (req.cookies.AndLogin) {
    console.log('cookies中获取的账户名' + req.cookies.AndLogin.account)
    res.send({
      login: true,
      account: req.cookies.AndLogin.account,
      session_id: req.session.id
    })
  } else {
    res.send({
      login: false
    })
  }
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
  if (req.query.captcha.toLowerCase() === req.session.captchaText2) {
    res.send({message: '验证码正确', permission: true})
  } else {
    res.send({message: '验证码错误,请重新输入', permission: false})
  }
})
router.get('/login/quitLogin', (req, res) => {
  req.session.destroy(function (err) {
    if (err) console.log(err)
    res.cookie('AndLogin', {account: null}, {maxAge: 0}) // 删除cookie
    res.send({login: false})
  })
})
module.exports = router
