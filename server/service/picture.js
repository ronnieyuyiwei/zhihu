/**
 * Created by YYW on 2017/6/7.
 */
const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const User = require('../db/files/user.js')
const formidable = require('formidable')
router.post('/picture/uploadHeadPic', (req, res) => {
  let user = req.session.account || req.cookies.AndLogin.account
  let targetPath
  let form = new formidable.IncomingForm()
  form.encoding = 'utf-8'
  form.uploadDir = '../images'
  form.keepExtensions = true
  form.maxFieldsSize = 10 * 1024 * 1024 // 上传限制10M
  let headImgPath = `../images/headImg/`
  if (!fs.existsSync(headImgPath)) {
    fs.mkdirSync(headImgPath)
  }
  form.parse(req, function (err, fields, files) {
    if (err) {
      console.log(err)
    }
    let type = files.file.name.split('.')
    let fileExtension = type[type.length - 1].toLowerCase()
    let fileRawName = type[type.length - 2]
    let fileName = `${user}_${fileRawName}.${fileExtension}`
    let saveName = `${fileName}`
    targetPath = path.join(headImgPath, fileName) // 设置保存位置
    fs.renameSync(files.file.path, targetPath) // 重命名文件并保存
    console.log('检查savePath' + saveName)
    User.findOne({account: user}, (err, doc) => {
      if (err) {
        console.log(err)
      }
      if (doc.headImage) {
        // 已经上传过的处理
        let oldPic = `${headImgPath}/${doc.headImage}`
        doc.headImage = saveName
        doc.save((err) => {
          if (err) {
            console.log(err)
          } else {
            if (fs.existsSync(oldPic)) {
              fs.unlink((oldPic), (err) => {
                if (err) {
                  console.log(err)
                } else {
                  res.send('success')
                }
              })
            } else {
              res.send('success')
            }
          }
        })
      } else {
        doc.headImage = saveName
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
  const account = req.cookies.AndLogin.account || req.session.account
  User.findOne({account: account})
    .exec((err, user) => {
      if (err) {
        console.log(err)
      }
      if (user.headImage) {
        res.send({ imgExist: true, imgSrc: user.headImage })
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
//   form.uploadDir = 'imagesxx'
//   form.keepExtensions = true
//   form.maxFieldsSize = 10 * 1024 * 1024
//   let headImgPath = `imagesxx/headImg/`
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
router.get('/test/getPic', (req, res) => {
  res.send('/headImg/yuyiwei_songhuiqiao.jpg')
})
module.exports = router
