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

router.get('/comment/getQuestionComment/', (req, res) => {
  let qid = req.query.qid
  Problem.find({_id: mongoose.Types.ObjectId(qid)})
    .populate('comment')
    .exec((err, doc) => {
      if (err) {
        console.log(err)
        res.send(false)
      }
      if (doc.comment) {
        let comment = []
        comment.push({
          date: doc.comment.date,
          content: doc.comment.textContent
        })
      } else {
        req.send(false)
      }
    })
})
router.push('/comment/addComment/', (req, res) => {
  let qid = req.query.qid
 
})
