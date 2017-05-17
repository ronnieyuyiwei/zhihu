/**
 * Created by YYW on 2017/5/2.
 */

const express = require('express')
const router = express.Router()
const Problem = require('../db/files/problem')
const User = require('../db/files/user')
const mongoose = require('mongoose')
const moment = require('moment')
moment.locale('zh-cn')
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
router.get('/answer/getAnswer_preview', (req, res) => {
  let questionId = req.query.questionId
  Problem.findOne({_id: mongoose.Types.ObjectId(questionId)})
    .populate('answer.responder')
    .exec(function (err, doc) {
      if (err) {
        console.log(err)
        res.send(false)
      }
      if (doc.answer.length) {
        let answer = []
        for (let i = 0; i < doc.answer.length; i++) {
          // let zanCount = 0
          if (doc.answer[i].as_comment) {    // 先判断有没有评论
            console.log(doc.answer[i].as_comment)
          }
          answer.push({
            content: doc.answer[i].content,
            responder: doc.answer[i].responder.account,
            date: moment(doc.answer[i].date).fromNow(),
            id: doc.answer[i]._id
          })
        }
        res.send(answer)
      } else {
        res.send(false)    // 找不到结果
      }
    })
})
router.get('/answer/getAnswer_content', (req, res) => {
  let questionId = req.query.questionId
  let answerId = req.query.answerId
  let answer = []
  Problem.findOne({_id: mongoose.Types.ObjectId(questionId)})
    .populate('answer.responder')
    .exec(function (err, doc) {
      if (err) {
        console.log(err)
        res.send(false)
      }
      if (doc.answer.length) {
        doc.answer.forEach(function (e) {              // 查找answerId 匹配的项
          if (e._id.toString() === answerId) {
            answer.push({
              title: doc.title,
              responder: e.responder.account,
              content: e.content,
              date: moment(e.date).format('YYYY-MM-DD')
            })
          }
        })
        answer.push({
          title: doc.title
        })
        // console.log(doc)
        res.send(answer)
      } else {
        res.send(false)    // 找不到结果
      }
    })
})
router.post('/answer/vote/initializeVote', (req, res) => {
  console.log('进入初始化')
  let data = {
    account: req.body.account,
    qid: req.body.qid,
    asId: req.body.asId
  }
  let list = []
  Problem.findOne({_id: mongoose.Types.ObjectId(data.qid)})
    .exec((err, problem) => {
      if (err) {
        console.log(err)
      }
      if (problem) {
        problem.answer.forEach(function (answer) {
          if (answer._id.toString() === data.asId) {
            list.push({agreeNum: answer.agree.length})
          }
        })
      } else {
        console.log('error')
      }
    })
  Problem.findOne({_id: mongoose.Types.ObjectId(data.qid)})
    .populate('answer.agree')
    .exec(function (err, problem) {
      if (err) {
        console.log(err)
      }
      if (problem) {
        problem.answer.forEach(function (answer) {
          if (answer._id.toString() === data.asId) {
            answer.agree.some(function (user) {
              User.findOne({_id: user}, function (err, userDoc) {
                if (err) {
                  console.log(err)
                }
                if (userDoc) {
                  res.send({attitude: 'agree'})
                }
              })
            })
            answer.disagree.some(function (user) {
              User.findOne({_id: user}, function (err, userDoc) {
                if (err) {
                  console.log(err)
                }
                if (userDoc) {
                  res.send({attitude: 'disagree'})
                }
              })
            })
            res.send({attitude: null})
          } else {
            console.log('错误，无法查询到回答')
          }
        })
      }
    })
})
router.post('/answer/vote', (req, res) => {
  let data = {
    vote: req.body.vote,      // true表示agree， false表示disagree
    account: req.body.account,
    qid: req.body.qid,
    asId: req.body.asId
  }
  // if (data.vote === 'agree') {
  //   Problem.findOne({_id: mongoose.Types.ObjectId(data.qid)})
  //     .populate('answer.agree')
  //     .exec(function (err, problem) {
  //       if (err) {
  //         console.log(err)
  //       }
  //       if (problem) {
  //         problem.answer.forEach(function (answer) {
  //           if (answer._id.toString() === data.asId) {
  //             answer.agree.some(function (user) {
  //               User.findOne({_id: user}, function (err, userDoc) {
  //                 if (err) {
  //                   console.log(err)
  //                 }
  //                 console.log('进入user内部' + userDoc.account)
  //                 if (userDoc) {
  //                  //
  //                 }
  //               })
  //             })
  //           }
  //         })
  //       }
  //     })
  // }
  if (data.vote === 'agree') {
    User.findOne({account: data.account}, (err, result) => {
      if (err) {
        console.log(err)
      }
      Problem.findById(data.qid)
        .exec((err, doc) => {
          if (err) {
            console.log(err)
          }
          if (doc.answer) {
            for (let i = 0; i < doc.answer.length; i++) {
              if (doc.answer[i]._id.toString() === data.asId) {
                console.log(data.asId)
                doc.answer[i].agree.push(result._id)
                doc.save((err) => {
                  if (err) {
                    console.log(err)
                  }
                  res.send('ok')
                })
              }
            }
          }
        })
    })
  }
})
module.exports = router
