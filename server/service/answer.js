/**
 * Created by YYW on 2017/4/30.
 */

const express = require('express')
const router = express.Router()
const Problem = require('../db/files/problem')
const mongoose = require('mongoose')
router.get('/answer/getQuestion', (req, res) => {
  // let questionId = req.query.questionId
  // if (questionId.length === 24) {             // 检查问题id位数是否合法
  //   Problem.findOne({_id: mongoose.Types.ObjectId(questionId)}, function (err, result) {
  //     if (err) {
  //       console.log(err)
  //     }
  //     console.log(result)
  //     if (result) {
  //       let question = {
  //         title: result.title,
  //         describe: result.describe,
  //         commentNum: '222'
  //       }
  //       res.send(question)
  //     }
  //     else {
  //       res.sendStatus(404)
  //     }
  //   })
  // } else {
  //   res.status(404)
  // }
  // res.sendStatus(404)
  res.sendStatus(404)
})

module.exports = router
