/**
 * Created by YYW on 2017/4/18.
 */
const express = require('express')
const router = express.Router()
const Problem = require('../db/files/problem')
const User = require('../db/files/user')
router.post('/question/addQuestion', (req, res) => {
  let data = {
    questioner: req.cookies.account,
    // topic: req.body.topic,
    title: req.body.title,
    describe: req.body.describe
  }
  var newProblem = new Problem(data)
  newProblem.save((err, doc) => {
    if (err) {
      console.log(err)
    } else {
      User.update({'account': data.questioner}, {$push: {'ask': doc._id}}, {upsert: true}, function (err) {
        if (err) {
          console.log(err)
        } else {
          res.send('保存成功')
        }
      })
    }
  })
})
router.get('/question/getQuestion', (req, res) => {

})
module.exports = router
