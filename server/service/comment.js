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
  // let account = req.session.account
  Problem.find({_id: mongoose.Types.ObjectId(qid)})
    .populate('questionComment')
    .populate({
      path: 'questionComment',
      populate: { path: 'discussant' }
    })
    .exec((err, doc) => {
      if (err) {
        console.log(err)
      }
      if (doc[0].questionComment.length) {      // 是否存在评论
        let comment = []
        for (var i = 0; i < doc[0].questionComment.length; i++) {
          comment.push({
            date: moment(doc[0].questionComment[i].date).format('ddd, HH:mm '),
            discussant: doc[0].questionComment[i].discussant.account,
            content: doc[0].questionComment[i].content,
            commentId: doc[0].questionComment[i]._id
          })
        }
        res.send(comment)
      } else {
        res.send(false)
      }
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
