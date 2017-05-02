/**
 * Created by YYW on 2017/5/2.
 */

const express = require('express')
const router = express.Router()
const Problem = require('../db/files/problem')
const User = require('../db/files/user')
const mongoose = require('mongoose')
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

module.exports = router
