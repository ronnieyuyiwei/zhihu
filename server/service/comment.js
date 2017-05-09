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
      // console.log('doc[0].questionComment' + doc[0].questionComment)
      console.log('doc[0].questionComment[0]' + '\n' + doc[0].questionComment[0].discussant.account)
      console.log('doc[0].questionComment' + '\n' + doc[0].questionComment[0].discussant)
      Problem.populate(doc, { path: 'questionComment.discussant' }, function (err, populateDoc) {
        if (err) {
          console.log(err)
        }
        console.log('xx' + populateDoc[0].questionComment.discussant.account)
      })
      // if (doc[0].questionComment) {
      //   let comment = []
      //   // console.log('account' + doc[0].questionComment[0].discussant.account)
      //   for (var i = 0; i < doc[0].questionComment.length; i++) {
      //     comment.push({
      //       date: doc[0].questionComment[i].date,
      //       // discussant: doc[0].questionComment[i].discussant.account,
      //       content: doc[0].questionComment[i].content
      //     })
      //   }
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
