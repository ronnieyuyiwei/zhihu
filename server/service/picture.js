/**
 * Created by YYW on 2017/6/7.
 */
const express = require('express')
const router = express.Router()
const util = require('util')
const path = require('path')
const fs = require('fs')
const User = require('../db/files/user.js')
const formidable = require('formidable')
router.post('/picture/uploadHeadPic', (req, res) => {
  let user = req.session.account || req.cookies.AndLogin.account
  let targetPath
  let form = new formidable.IncomingForm()
  form.encoding = 'utf-8'
  form.uploadDir = 'images'
  form.keepExtensions = true
  form.maxFieldsSize = 10 * 1024 * 1024 // 上传限制10M
  let headImgPath = `images/headImg/`
  if (!fs.existsSync(headImgPath)) {
    fs.mkdirSync(headImgPath)
  }
  form.parse(req, function(err, fields, files) {
    if (err) {
      console.log(err)
    }
    let fileName = `${user}_${files.file.name}`
    targetPath = path.join(headImgPath, fileName) // 设置保存位置
    fs.renameSync(files.file.path, targetPath) // 重命名文件并保存
    User.findOne({account: user}, (err, doc) => {
      if (err) {
        console.log(err)
      }
        if (doc.headImage) {
          // 已经上传过的处理
          let oldPic = doc.headImage
          doc.headImage = fileName
          doc.save((err) => {
            if (err) {
              console.log(err)
            } else {
              if (fs.existsSync(path.join('images/headImg/', oldPic))) {
                fs.unlink(path.join('images/headImg/', oldPic), (err) => {
                  if (err) {
                    console.log(err)
                  } else {
                    res.send('success')
                  }
                })
              }
            }
          })
        } else {
          doc.headImage = fileName
          doc.save((err) => {
            if (err) {
              console.log(err)
            } else {
              res.send('success')
            }
          })
        }
    })
  })
})
router.get('/picture/getHeadPicture', (req, res) => {
  const account = req.cookies.AndLogin.account
  User.findOne({account: account})
    .exec((err, user) => {
      if(err) {
        console.log(err)
      }
      if(user.headImage) {
        let imgSrc = user.headImage
        res.send({imgExist: true, imgSrc: imgSrc})
      } else {
        res.send({imgExist: false})
      }
    })
})
// router.post('/picture/test/updatePic', (req, res) => {
//
//   let user = req.session.account || req.cookies.AndLogin.account
//   let targetPath
//   let form = new formidable.IncomingForm()
//   form.encoding = 'utf-8'
//   form.uploadDir = 'images'
//   form.keepExtensions = true
//   form.maxFieldsSize = 10 * 1024 * 1024
//   let headImgPath = `images/headImg/`
//   if (!fs.existsSync(headImgPath)) {
//     fs.mkdirSync(headImgPath)
//   }
//   form.parse(req, function(err, fields, files) {
//     targetPath = path.join(headImgPath, `${user}_${files.file.name}`)
//     fs.renameSync(files.file.path, targetPath)
//     res.send('success')
//   })
//
// })
module.exports = router
