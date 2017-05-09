/**
 * Created by YYW on 2017/5/9.
 */
const express = require('express')
const router = express.Router()
const Problem = require('../db/files/problem')
const Comment = require('../db/files/comment')
const User = require('../db/files/user')
const mongoose = require('mongoose')
const moment = require('moment')
moment.locale('zh-cn')

router.get('/comment/getQuestionComment', (req, res) => {
  let qid = req.query.qid
  Problem.find({_id: mongoose.Types.ObjectId(qid)})
    .populate('questionComment')
    .exec((err, doc) => {
      if (err) {
        console.log(err)
      }
      console.log('doc' + doc.questionComment)
      // console.log('doc.questionComment' + doc.questionComment.date)
      // if (doc) {
      //   console.log('in')
      //   let comment = []
      //   for (var i = 0; i < doc.comment.length; i++) {
      //     comment.push({
      //       date: doc.comment[i].date,
      //       discussant: doc.comment[i].discussant.account,
      //       content: doc.comment[i].textContent
      //     })
      //   }
      //   console.log('fffffffffff' + comment)
      //   res.send(comment)
      // } else {
      //   console.log('out')
      //   res.send(false)
      // }
      res.send(false)
    })
})
router.post('/comment/addComment/', (req, res) => {
  let qid = req.body.qid
  let discussant = req.body.discussant
  let comment = req.body.comment
  User.findOne({account: discussant}, function (err, doc) {
    if (err) {
      console.log(err)
    }
    var newComment = new Comment({
      discussant: doc._id,
      content: comment
    })
    newComment.save(function (err, doc) {
      if (err) {
        console.log(err)
      }
      Problem.update({_id: mongoose.Types.ObjectId(qid)}, { $push: { questionComment: doc._id } }, function (err) {
        if (err) {
          console.log(err)
        }
        res.send('ok')
      })
    })
  })
})

module.exports = router
