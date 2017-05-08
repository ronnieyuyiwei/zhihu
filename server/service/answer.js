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
  User.findOne({'account': data.responder}, '_id', function (err, doc) {
    if (err) {
      console.log(err)
      res.send('error')
    }
    if (doc) {
      Problem.update({_id: mongoose.Types.ObjectId(data.qid)}, {$push: {answer: { responder: doc._id, content: data.content }}}, function (err) {
        if (err) {
          console.log(err)
        }
        res.send('ok')
      })
    } else {
      res.send('error')
    }
  })
})
router.get('/answer/getAnswer_preview', (req, res) => {
  let questionId = req.query.questionId
  Problem.findOne({_id: mongoose.Types.ObjectId(questionId)})
    .populate('answer.responder answer.as_comment answer.as_comment_zan ')
    .exec(function (err, doc) {
      if (err) {
        console.log(err)
        res.send(false)
      }
      if (doc.answer.length) {
        let answer = []
        for (let i = 0; i < doc.answer.length; i++) {
          let zanCount = 0
          if (doc.answer[i].as_comment.length) {    // 先判断有没有评论
            if (doc.answer[i].as_comment[i].zan === true) {
              zanCount = zanCount++
            }
          }
          answer.push({
            content: doc.answer[i].content,
            responder: doc.answer[i].responder.account,
            num: doc.answer[i].as_comment.length,
            zan: zanCount,
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
    .where('answer._id').equals(mongoose.Types.ObjectId(answerId))
    .exec(function (err, doc) {
      if (err) {
        console.log(err)
        res.send(false)
      }
      if (doc.answer.length) {
        answer.push({
          title: doc.title,
          responder: doc.answer[0].responder.account,
          content: doc.answer[0].content,
          date: moment(doc.answer[0].date).format('YYYY-MM-DD')
        })
        console.log(answer)
        res.send(answer)
      } else {
        res.send(false)    // 找不到结果
      }
    })
})
module.exports = router
