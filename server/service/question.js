/**
 * Created by YYW on 2017/4/18.
 */
const express = require('express')
const router = express.Router()
const Problem = require('../db/files/problem')
const User = require('../db/files/user')
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
    .populate('_ask')
    .exec(function (err, doc) {
      if (err) {
        console.log(err)
      }
      var list = []
      for (let i = 0; i < doc[0]._ask.length; i++) {
        list.push({
          title: doc[0]._ask[i].title,
          describe: doc[0]._ask[i].describe
        })
      }
      console.log(list)
      res.send(list)
    })

})
module.exports = router
