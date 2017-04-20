/**
 * Created by YYW on 2017/4/18.
 */
const express = require('express')
const router = express.Router()
const Problem = require('../db/files/problem')
router.post('/question/addQuestion', (req, res) => {
  let data = {
    questioner: req.session.account,
    // topic: req.body.topic,
    title: req.body.title,
    describe: req.body.describe
  }
  var newProblem = new Problem(data)
  newProblem.save((err) => {
    if (err) {
      console.log(err)
    } else {
      res.send('保存成功')
    }
  })
})
router.get('/question/getQuestion', (req, res) => {

})
module.exports = router
