/**
 * Created by YYW on 2017/4/18.
 */
const express = require('express')
const router = express.Router()
const Problem = require('../db/files/problem')
const User = require('../db/files/user')
const mongoose = require('mongoose')
const moment = require('moment')
moment.locale('zh-cn')
router.post('/question/addQuestion', (req, res) => {
  var user = req.session.account || req.cookies.AndLogin.account
  var userQuery = User.findOne({account: user})
  userQuery.exec(function (err, result) {
    if (err) {
      console.log(err)
    }
    let question = {
      questioner: result._id,
      title: req.body.title,
      describe: req.body.describe
    }
    var newProblem = new Problem(question)
    newProblem.save((err, doc) => {
      if (err) {
        console.log(err)
      } else {
        User.update({'account': user}, {$push: {'_ask': doc._id}}, {upsert: true}, function (err) {
          if (err) {
            console.log(err)
          } else {
            res.send('保存成功')
          }
        })
      }
    })
  })
})
router.get('/question/getQuestion', (req, res) => {
  var user = req.session.account || req.cookies.AndLogin.account
  User.find({account: user})
    .populate({
      path: '_ask',
      options: {
        sort: {date: -1}
      }
    })
    .exec(function (err, doc) {
      if (err) {
        console.log(err)
      }
      var list = []
      for (let i = 0; i < doc[0]._ask.length; i++) {
        list.push({
          title: doc[0]._ask[i].title,
          describe: doc[0]._ask[i].describe,
          id: doc[0]._ask[i]._id,
          answerNum: 0 || doc[0]._ask[i].answer.length,
          date: moment(doc[0]._ask[i].date).fromNow()
        })
      }
      res.send(list)
    })
})
router.get('/question/getData', (req, res) => {
  let questionId = req.query.questionId
  if (questionId.length === 24) {             // 检查问题id位数是否合法
    Problem.findOne({_id: mongoose.Types.ObjectId(questionId)}, function (err, result) {
      if (err) {
        console.log(err)
      }
      if (result) {
        let question = {
          status: true,
          title: result.title,
          describe: result.describe
        }
        if (result.questionComment.length) {
          question.commentNum = result.questionComment.length
          res.send(question)
        } else {
          question.commentNum = 0
          res.send(question)
        }
      } else {
        res.send({status: false})
      }
    })
  } else {
    res.send({status: false})
  }
})
router.get('/question/checkAnswer', (req, res) => {
  let qid = req.query.questionId
  let user = req.session.account || req.cookies.AndLogin.account
  console.log('进入checkAnswer')
  User.findOne({account: user})
    .exec((err, user) => {
      if (err) {
        console.log(err)
      } else {
        if (user._answer) {
          let answered = false
          user._answer.forEach((answer) => {
            if (answer.toString() === qid) {
              answered = true
            }
          })
          res.send({answered: answered})
        }
      }
    })
})
module.exports = router
