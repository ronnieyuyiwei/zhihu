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
    User.findOne({account: account}, (err, user) => {
      if (err) {
        console.log(err)
      }
      Problem.update({_id: quesitonId}, {$addToSet: {'focus': user._id}}, (err) => {
        if (err) {
          console.log(err)
        } else {
          res.send('ok')
        }
      })
    })
  })
})
router.post('/user/cancelProblemFocus', (req, res) => {
  let account = req.session.account || req.cookies.AndLogin.account
  let quesitonId = mongoose.Types.ObjectId(req.body.questionId)
  User.update({account: account}, {$pull: {'_focusProblem': quesitonId}}, (err) => {
    if (err) {
      console.log(err)
    }
    User.findOne({account: account}, (err, user) => {
      if (err) {
        console.log(err)
      }
      Problem.update({_id: quesitonId}, {$pull: {'focus': user._id}}, (err) => {
        if (err) {
          console.log(err)
        } else {
          res.send('ok')
        }
      })
    })
  })
})
router.get('/user/getFocusProblem', (req, res) => {
  let account = req.session.account || req.cookies.AndLogin.account
  let questionList = []
  User.findOne({account: account})
    .populate('_focusProblem')
    .exec((err, doc) => {
      if (err) {
        console.log(err)
      } else {
        for (let i = 0; i < doc._focusProblem.length; i++) {
          console.log('x' +　doc._focusProblem[i].focus.length)
          questionList.push({
            title: doc._focusProblem[i].title,
            answerNum: doc._focusProblem[i].answer.length,
            focusNum: doc._focusProblem[i].focus.length,
            qid: doc._focusProblem[i]._id
          })
        }
        res.send(questionList)
      }

    })
})
router.get('/user/checkPersonFocus', (req, res) => {
  let responder = req.query.responder
  let account = req.session.account || req.cookies.AndLogin.account
  if (responder === account) { // 回答者是自己
    res.send({render:false})
  } else {
    User.findOne({account: account})
      .populate('_focusPeople')
      .exec((err, user) => {
        if (err) {
          console.log(err)
        } else {
          let focused = false
          for (let i = 0; i < user._focusPeople.length; i++) {
            if (user._focusPeople[i].account === responder) {
              console.log('检查到已关注')
              focused = true
              break
            }
          }
          res.send({render: true, focused: focused})
        }
      })
  }
})
router.post('/user/addPersonFocus', (req, res) => {
  let responder = req.body.responder
  let account = req.session.account || req.cookies.AndLogin.account
  User.findOne({account: account}, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      User.findOne({account: responder}, (err, resp) => {
        if (err) {
          console.log(err)
        }
        User.update({account: account}, {$addToSet: {'_focusPeople': resp._id}}, (err) => {
          if (err) {
            console.log(err)
          } else {
            User.update({account: responder}, {$addToSet: {'_follower': user._id}}, (err) => {
              if (err) {
                console.log(err)
              }
              res.send('ok')
            })
          }
        })
      })
    }
  })
})
router.post('/user/cancelPersonFocus', (req, res) => {
  let responder = req.body.responder
  let account = req.session.account || req.cookies.AndLogin.account
  User.findOne({account: account}, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      User.findOne({account: responder}, (err, resp) => {
        if (err) {
          console.log(err)
        }
        User.update({account: account}, {$pull: {'_focusPeople': resp._id}}, (err) => {
          if (err) {
            console.log(err)
          } else {
            User.update({account: responder}, {$pull: {'_follower': user._id}}, (err) => {
              if (err) {
                console.log(err)
              }
              res.send('ok')
            })
          }
        })
      })
    }
  })
})
module.exports = router
