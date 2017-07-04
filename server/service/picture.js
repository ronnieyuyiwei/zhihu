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
  User.findOne({account: account}, (err, doc) => {
    if (err) {
      console.log(err)
    }
    Image.create(pic, (err, image) => {
      if (err) {
        console.log(err)
      } else {
        User.update({account: account}, {$set: {'_headImage': image._id}}, (err) => {
          if (err) {
            console.log(err)
          } else {
            Image.remove({_id: doc._headImage}, (err) => {
              if (err) {
                console.log(err)
              }
              res.send('success')
            })
          }
        })
      }
    })
  })
})
router.get('/picture/getHeadPicture', (req, res) => {
  const account = req.cookies.AndLogin.account
  User.findOne({account: account})
    .populate('_headImage')
    .exec((err, user) => {
      if(err) {
        console.log(err)
      }
      if(user._headImage) {
        let imgSrc = user._headImage.img
        res.send({imgExist: true, imgSrc: imgSrc})
      } else {
        res.send({imgExist: false})
      }
    })
})
router.post('/picture/test/updatePic', (req, res) => {
  console.log('——————————————————————————————————————')
  console.log('content-type' + req.get('Content-Type'))
  console.log('content-length' + req.get('content-length'))
  console.log('——————————————————————————————————————')
  let form = new formidable.IncomingForm()
  form.encoding = 'utf-8'
  form.uploadDir = 'images'
  form.keepExtensions = true
  form.maxFieldsSize = 10 * 1024 * 1024
  form.parse(req, function(err, fields, files) {
    console.log('进入form parse')
    res.send(util.inspect({fields: fields, files: files}))
  })
})
module.exports = router
