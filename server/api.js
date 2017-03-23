const express = require('express')
const router = express.Router()
const User = require('./db/files/login')
var str ={name: 'xixixi', age: 21}
router.post('/login/createAccount', (req, res) => {
  let data = {
    account: req.body.account,
    password: req.body.password
  }
  var newAccount = new User(data)
  newAccount.save((err) => {
    if (err) {
      console.log(err)
    }else {
      res.send('save succeed!')
    }
  })
  })
module.exports = router
