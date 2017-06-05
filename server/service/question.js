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
  let account = req.session.account || req.cookies.AndLogin.account
  User.findOne({account: account})
    .exec((err, user) => {
      if (err) {
        console.log(err)
      } else {
        if (user._answer) {
          let answered = false
          let focused = false
          for (let i = 0; i < user._focusProblem.length; i++) {
            if (user._focusProblem[i].toString() === qid) {
              focused = true
            }
          }
          var asId = null
          user._answer.forEach((answer) => {
            if (answer.toString() === qid) {
              answered = true
              Problem.findOne({_id: mongoose.Types.ObjectId(answer)})
                .populate('answer.responder')
                .exec((err, problem) => {
                  if (err) {
                    console.log(err)
                  } else {
                    for (let i = 0; i < problem.answer.length; i++) {
                      if (problem.answer[i].responder.account === account) {
                        asId = problem.answer[i]._id.toString()
                        res.send({answered: answered, asId: asId, focused: focused})
                        break
                      }
                    }
                  }
                })
            }
          })
        }
      }
    })
})
router.get('/question/discovery/getQuestion', (req, res) => {
  Problem.find({})
    .exec((err, doc) => {
      if (err) {
        console.log(err)
      } else {
        let questionList = []
        let stack = {
          responder: '',
          title: '',
          content: '',
          qid: '',
          asId: '',
          agreeNum: '',
          commentNum: 0
        }
        doc.forEach((problem) => {
          let agreeNum = 0
          if (problem.answer.length > 0) {
            problem.answer.forEach((answer, i) => {
              if (answer.agree.length >= agreeNum) {
                agreeNum = answer.agree.length
                stack.title = problem.title
                stack.content = answer.content
                stack.qid = problem._id
                stack.asId = answer._id
                stack.agreeNum = answer.agree.length
              }
              if (i === problem.answer.length-1) {
                console.log(stack)
                questionList.push({
                  answer: true,
                  title: stack.title,
                  content: stack.content,
                  qid: stack.qid,
                  asId: stack.asId,
                  agreeNum: stack.agreeNum
                })
              }
            })
          } else {
            questionList.push({
              answer: false,
              title: problem.title,
              qid: problem._id
            })
          }
        })

        res.send(questionList)
      }
    })
})
module.exports = router
