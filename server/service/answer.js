/**
 * Created by YYW on 2017/5/2.
 */

const express = require('express')
const router = express.Router()
const Problem = require('../db/files/problem')
const User = require('../db/files/user')
const mongoose = require('mongoose')
const moment = require('moment')
moment.locale('zh-cn')
router.post('/answer/addAnswer', (req, res) => {
  let data = {
    qid: req.body.qid,
    responder: req.body.responder,
    content: req.body.content
  }
  User.findOne({'account': data.responder}, function (err, doc) {
    if (err) {
      console.log(err)
      res.send('error')
    }
    if (doc) {
      Problem.update({_id: mongoose.Types.ObjectId(data.qid)}, {$push: {answer: { responder: doc._id, content: data.content }}}, function (err) {
        if (err) {
          console.log(err)
        }
        doc._answer.push({_id: mongoose.Types.ObjectId(data.qid)})
        doc.save((err) => {
          if (err) {
            console.log(err)
          }
          res.send('ok')
        })
      })
    } else {
      res.send('error')
    }
  })
})
router.get('/answer/getMyAnswer', (req, res) => {       // 在我的创作中显示我的回答
  let account = req.query.account || req.session.account || req.cookies.account
  let answerList = []
  console.log(account)
  User.findOne({account: account})
    .populate('_answer')
    .exec((err, user) => {
      if (err) {
        console.log(err)
      }
      if (user._answer.length > 0) {
        for (let i = 0; i < user._answer.length; i++) {
          for (let j = 0; j < user._answer[i].answer.length; j++) {
            if (user._answer[i].answer[j].responder.toString() === user._id.toString()) {
              answerList.push({
                answerTitle: user._answer[i].title,
                answerContent: user._answer[i].answer[j].content,
                answerDate: moment(user._answer[i].answer[j].date).fromNow(),
                questionId: user._answer[i]._id.toString(),
                answerId: user._answer[i].answer[j]._id.toString()
              })
            }
          }
        }
        res.send(answerList)
      } else {
        res.send(answerList)
      }
    })
})
router.get('/answer/getAnswer_preview', (req, res) => {
  let questionId = req.query.questionId
  Problem.findOne({_id: mongoose.Types.ObjectId(questionId)})
    .populate('answer.responder')
    .exec(function (err, doc) {
      if (err) {
        console.log(err)
        res.send(false)
      }
      if (doc.answer.length) {
        let answer = []
        for (let i = 0; i < doc.answer.length; i++) {
          // let zanCount = 0
          if (doc.answer[i].as_comment) {    // 先判断有没有评论
            console.log(doc.answer[i].as_comment)
          }
          answer.push({
            content: doc.answer[i].content,
            responder: doc.answer[i].responder.account,
            date: moment(doc.answer[i].date).fromNow(),
            id: doc.answer[i]._id
          })
        }
        res.send(answer)
      } else {
        res.send(false)    // 找不到结果
      }
    })
})
router.get('/answer/getAnswer_content', (req, res) => {
  let questionId = req.query.questionId
  let answerId = req.query.answerId
  let answer = []
  Problem.findOne({_id: mongoose.Types.ObjectId(questionId)})
    .populate('answer.responder')
    .exec(function (err, doc) {
      if (err) {
        console.log(err)
        res.send(false)
      }
      if (doc.answer.length) {
        doc.answer.forEach(function (e) {              // 查找answerId 匹配的项
          if (e._id.toString() === answerId) {
            answer.push({
              title: doc.title,
              responder: e.responder.account,
              content: e.content,
              date: moment(e.date).format('YYYY-MM-DD')
            })
          }
        })
        answer.push({
          title: doc.title
        })
        // console.log(doc)
        res.send(answer)
      } else {
        res.send(false)    // 找不到结果
      }
    })
})
router.get('/answer/vote/initializeVote', (req, res) => {
  console.log('req.session.account' + ' ' + req.session.account)
  console.log('req.cookies.AndLogin.account' + ' ' + req.cookies.AndLogin.account)
  res.send('xx')
})
router.post('/answer/vote', (req, res) => {
})
module.exports = router
