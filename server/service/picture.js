/**
 * Created by YYW on 2017/6/7.
 */
const express = require('express')
const router = express.Router()
const util = require('util')
const path = require('path')
const fs = require('fs')
const Image = require('../db/files/picture.js')
const User = require('../db/files/user.js')
const formidable = require('formidable')
router.post('/picture/headPic', (req, res) => {
  var account = req.cookies.AndLogin.account
  var pic = {
    img: req.body.pic
  }
  Image.create(pic, (err, image) => {
    if (err) {
      console.log(err)
    } else {
      User.update({account: account}, {$set: {'_headImage': image._id}}, (err) => {
        if (err) {
          console.log(err)
        } else {
          res.send('头像上传成功')
        }
      })
    }
  })
})
module.exports = router
