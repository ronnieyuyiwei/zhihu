const express = require('express')
const router = express.Router()
const User = require('./db/files/login')
router.get('/login/getAccount', (req, res) => {
  User.findOne({'account': req.query.account}, (err, result) => {
    if (err) console.log(err)
    console.log(req.body.account)
    if (result) {
      res.send({message: '用户名已经存在',permission: false})
    }else {
      res.send({message: '可以注册',permission: true})
    }
  })
})
router.post('/login/createAccount', (req, res) => {
  let data = {
    account: req.body.account,
    password: req.body.password
  }
  var newAccount = new User(data)
  newAccount.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.send('注册成功')
    }
  })
})
module.exports = router
