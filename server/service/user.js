/**
 * Created by YYW on 2017/6/1.
 */
const express = require('express')
const router = express.Router()
const Problem = require('../db/files/problem')
const User = require('../db/files/user')
const mongoose = require('mongoose')
router.post('/user/addProblemFocus', (req, res) => {
  let account = req.session.account || req.cookies.AndLogin.account
  let quesitonId = mongoose.Types.ObjectId(req.body.questionId)
  User.update({account: account}, {$addToSet: {'_focusProblem': quesitonId}}, (err) => {
    if (err) {
      console.log(err)
    }
  })
})
module.exports = router
