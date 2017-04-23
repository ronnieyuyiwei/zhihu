/**
 * Created by YYW on 2017/3/27.
 */
const express = require('express')
const router = express.Router()
const User = require('../db/files/user')
var svgCaptcha = require('svg-captcha')
router.get('/register/getAccount', (req, res) => {
  User.findOne({'account': req.query.account}, (err, result) => {
    if (err) console.log(err)
    if (result) {
      res.send({message: '用户名已经存在', permission: false})
    } else {
      res.send({message: '', permission: true})
    }
  })
})
router.post('/register/createAccount', (req, res) => {
  var data = {
    account: req.body.account,
    password: req.body.password
  }
  function validate () {                        // 服务器验证
    let acReg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/  // 匹配中文、数字、字母及下划线
    let psReg = /^[A-Za-z0-9]+$/                // 匹配数字及字母
    if (!(acReg.test(data.account) && data.account.length >= 4 && data.account.length <= 10)) {
      return {msg: '用户名不符合格式，拒绝注册', permission: false}
    }
    if (!(psReg.test(data.password) && data.password.length >= 8 && data.password.length <= 20)) {
      return {msg: '密码不符合格式，拒绝注册', permission: false}
    }
    return {msg: '验证通过', permission: true}
  }
  console.log('是否允许登录：' + validate().permission)
  if (validate().permission) { // 数据库存储
    // var newAccount = new User(data)
    console.log(`执行到数据存储之前`)
    // newAccount.save((err) => {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     res.send('注册成功')
    //   }
    // })
    User.create(data, function (err) {
      if (err) {
        console.log(err)
      }
      res.send('新注册成功')
    })
  } else {
    res.send(validate().msg)
  }
})
router.get('/register/getCaptcha', (req, res) => {
  var captcha = svgCaptcha.create({ noise: 2, ignoreChars: '0o1i' })
  req.session.captchaText = captcha.text.toLowerCase()
  res.set('Content-Type', 'image/svg+xml')
  res.status(200).send(captcha.data)
})
router.get('/register/checkCaptcha', (req, res) => {
  console.log('收到的验证码' + req.query.captcha)
  console.log('session验证码' + req.session.captchaText)
  if (req.query.captcha.toLowerCase() === req.session.captchaText) {
    res.send({message: '验证码正确', permission: true})
  } else {
    res.send({message: '验证码错误,请重新输入', permission: false})
  }
})

module.exports = router
