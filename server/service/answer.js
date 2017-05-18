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
  let data = {
    account: req.body.account,
    qid: req.body.qid,
    asId: req.body.asId
  }
  var list = {
    agreeNum: '',
    attitude: 'hehe'
  }
  console.log(data.account + '2222')
  function getAgreeNum () {
    return new Promise((resolve, reject) => {
      Problem.findOne({_id: mongoose.Types.ObjectId(data.qid)})
        .exec((err, problem) => {
          if (err) {
            console.log(err)
          }
          if (problem) {
            problem.answer.forEach(function (answer) {
              if (answer._id.toString() === data.asId) {
                resolve(answer.agree.length)
              }
            })
          } else {
            console.log('error')
          }
        })
    })
  }
  function checkVote () {
    return new Promise((resolve, reject) => {
      Problem.findOne({_id: mongoose.Types.ObjectId(data.qid)})
        .populate('answer.agree answer.disagree')
        .exec(function (err, problem) {
          if (err) {
            console.log(err)
          }
          if (problem) {
            problem.answer.forEach((answer) => {
              if (answer.agree.length > 0) { // agree 存在
                for (let i = 0; i < answer.agree.length; i++) {
                  if (answer.agree[i].account === data.account) {
                    console.log('查询到agree')
                    resolve('agree')
                  } else {
                    console.log('进入第一else分支')
                    if (answer.disagree) { // disagree 存在
                      for (let i = 0; i < answer.disagree.length; i++) {
                        if (answer.disagree[i].account === data.account) {
                          console.log('查询到disagree')
                          resolve('disagree')
                        } else {
                          console.log('返回null')
                          resolve(null)
                        }
                      }
                    } else {
                      console.log('返回null')
                      resolve(null)
                    }
                  }
                }
              } else if (answer.agree.length === 0) {
                console.log('进入agree不存在')
                if (answer.disagree) { // disagree 存在
                  for (let i = 0; i < answer.disagree.length; i++) {
                    if (answer.disagree[i].account === data.account) {
                      console.log('查询到disagree')
                      resolve('disagree')
                    } else {
                      console.log('返回null')
                      resolve(null)
                    }
                  }
                } else {
                  console.log('返回null')
                  resolve(null)
                }
              }
            })
          }
        })
    })
  }
  getAgreeNum().then((data) => {
    list.agreeNum = data
    return checkVote()
  }).then((data) => {
    list.attitude = data
    res.send(list)
  })
})
router.post('/answer/vote', (req, res) => {
  let data = {
    vote: req.body.vote,      // true表示agree， false表示disagree
    account: req.body.account,
    qid: req.body.qid,
    asId: req.body.asId
  }
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
                if (doc.answer[i].agree) {
                  if (!doc.answer[i].agree.some(function (userId) {
                    return userId.toString() === result._id.toString()
                  })) {
                    doc.answer[i].agree.push(result._id)
                    if (doc.answer[i].disagree) {
                      for (let j = 0; j < doc.answer[i].disagree.length; j++) {
                        if (doc.answer[i].disagree[j].toString() === result._id.toString()) {
                          doc.answer[i].disagree.splice(j, 1)
                        }
                      }
                    }
                  }
                }
              } else {
                doc.answer[i].agree.push(result._id)
                if (doc.answer[i].disagree) {
                  for (let j = 0; j < doc.answer[i].disagree.length; j++) {
                    if (doc.answer[i].disagree[j].toString() === result._id.toString()) {
                      doc.answer[i].disagree.splice(j, 1)
                    }
                  }
                }
              }
              doc.save((err) => {
                if (err) {
                  console.log(err)
                }
                Problem.findOne({_id: mongoose.Types.ObjectId(data.qid)})
                  .exec((err, problem) => {
                    if (err) {
                      console.log(err)
                    }
                    if (problem) {
                      problem.answer.forEach(function (answer) {
                        if (answer._id.toString() === data.asId) {
                          res.send({agreeNum: answer.agree.length})
                        }
                      })
                    } else {
                      console.log('error')
                    }
                  })
              })
            }
          }
        })
    })
  }
  if (data.vote === 'disagree') {
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
                if (doc.answer[i].disagree) {
                  if (!doc.answer[i].disagree.some(function (userId) {
                    return userId.toString() === result._id.toString()
                  })) {
                    doc.answer[i].disagree.push(result._id)
                    if (doc.answer[i].agree) {
                      for (let j = 0; j < doc.answer[i].agree.length; j++) {
                        if (doc.answer[i].agree[j].toString() === result._id.toString()) {
                          doc.answer[i].agree.splice(j, 1)
                        }
                      }
                    }
                  }
                }
              } else {
                doc.answer[i].disagree.push(result._id)
                if (doc.answer[i].agree) {
                  for (let j = 0; j < doc.answer[i].agree.length; j++) {
                    if (doc.answer[i].agree[j].toString() === result._id.toString()) {
                      doc.answer[i].agree.splice(j, 1)
                    }
                  }
                }
              }
              doc.save((err) => {
                if (err) {
                  console.log(err)
                }
                Problem.findOne({_id: mongoose.Types.ObjectId(data.qid)})
                  .exec((err, problem) => {
                    if (err) {
                      console.log(err)
                    }
                    if (problem) {
                      problem.answer.forEach(function (answer) {
                        if (answer._id.toString() === data.asId) {
                          res.send({agreeNum: answer.agree.length})
                        }
                      })
                    } else {
                      console.log('error')
                    }
                  })
              })
            }
          }
        })
    })
  }
})
module.exports = router
