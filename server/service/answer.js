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
  User.findOne({'account': data.responder}, function (err, doc) {
    if (err) {
      console.log(err)
      res.send('error')
    }
    if (doc) {
      Problem.update({_id: mongoose.Types.ObjectId(data.qid)}, {$push: {answer: { responder: doc._id, content: data.content }}}, function (err) {
        if (err) {
          console.log(err)
        }
        doc._answer.push({_id: mongoose.Types.ObjectId(data.qid)})
        doc.save((err) => {
          if (err) {
            console.log(err)
          }
          res.send('ok')
        })
      })
    } else {
      res.send('error')
    }
  })
})
router.get('/answer/getMyAnswer', (req, res) => {       // 在我的创作中显示我的回答
  let account = req.query.account || req.session.account || req.cookies.account
  let answerList = []
  console.log(account)
  User.findOne({account: account})
    .populate('_answer')
    .exec((err, user) => {
      if (err) {
        console.log(err)
      }
      if (user._answer.length > 0) {
        for (let i = 0; i < user._answer.length; i++) {
          for (let j = 0; j < user._answer[i].answer.length; j++) {
            if (user._answer[i].answer[j].responder.toString() === user._id.toString()) {
              answerList.push({
                answerTitle: user._answer[i].title,
                answerContent: user._answer[i].answer[j].content,
                answerDate: moment(user._answer[i].answer[j].date).fromNow(),
                questionId: user._answer[i]._id.toString(),
                answerId: user._answer[i].answer[j]._id.toString()
              })
            }
          }
        }
        res.send(answerList)
      } else {
        res.send(answerList)
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
router.get('/answer/vote/initializeVote', (req, res) => {
  let data = {
    account: req.session.account || req.cookies.AndLogin.account,
    qid: req.query.qid,
    asId: req.query.asId
  }
  let reg = /^[0-9a-fA-F]{24}$/
  console.log('路由进入初始化')
  if (reg.test(data.qid)) {
    Problem.findOne({_id: mongoose.Types.ObjectId(data.qid)})
      .populate('answer.agree answer.disagree')
      .exec((err, problem) => {
        if (err) {
          console.log(err)
        }
        if (problem) {
          if (problem.answer) {
            let responseList = {
              agreeNum: 0,
              attitude: null
            }
            problem.answer.forEach((answer) => {
              if (answer._id.toString() === data.asId) {
                responseList.agreeNum = answer.agree.length
                for (let i = 0; i < answer.agree.length; i++) {
                  if (answer.agree[i].account.toString() === data.account.toString()) {
                    responseList.attitude = 'agree'
                  }
                }
                for (let i = 0; i < answer.disagree.length; i++) {
                  if (answer.disagree[i].account.toString() === data.account.toString()) {
                    responseList.attitude = 'disagree'
                  }
                }
                console.log(responseList.attitude + '333333333')
                if (!responseList.attitude) {
                  responseList.attitude = 'neutral'
                }
                res.send(responseList)
              }
            })
          }
        } else {
          res.send(404)
        }
      })
  } else {
    console.log('id验证不通过')
  }
})
router.post('/answer/vote', (req, res) => {
  let user = req.session.account || req.cookies.AndLogin.account
  let qid = req.body.qid
  let asId = req.body.asId
  let vote = req.body.vote
  class Vote {
    constructor (vote) {
      this.vote = vote
    }
    operate () {
      User.findOne({account: user}, (err, user) => {
        if (err) {
          console.log(err)
        } else {
          Problem.findById(mongoose.Types.ObjectId(qid))
            .exec((err, problem) => {
              if (err) {
                console.log(err)
              } else {
                if (problem) {
                  problem.answer.forEach((answer) => {
                    if (answer._id.toString() === asId.toString()) {
                      if (this.vote === 'agree') {
                        let agreeExist = false
                        for (let i = 0; i < answer.agree.length; i++) {
                          if (answer.agree[i].toString() === user._id.toString()) {
                            agreeExist = true  // 检测到重复
                            break
                          }
                        }
                        for (let i = 0; i < answer.disagree.length; i++) { // 删除不赞同
                          if (answer.disagree[i].toString() === user._id.toString()) {
                            answer.disagree.splice(i, 1)
                          }
                        }
                        if (!agreeExist) {
                          answer.agree.push(user._id)
                        }
                      }
                      if (this.vote === 'disagree') {
                        let disagreeExist = false
                        for (let i = 0; i < answer.disagree.length; i++) {
                          if (answer.disagree[i].toString() === user._id.toString()) {
                            disagreeExist = true  // 检测到重复
                            break
                          }
                        }
                        for (let i = 0; i < answer.agree.length; i++) { // 删除赞同
                          if (answer.agree[i].toString() === user._id.toString()) {
                            answer.agree.splice(i, 1)
                          }
                        }
                        if (!disagreeExist) {
                          answer.disagree.push(user._id)
                        }
                      }
                      if (this.vote === 'neutral') {
                        for (let i = 0; i < answer.agree.length; i++) { // 删除赞同
                          if (answer.agree[i].toString() === user._id.toString()) {
                            answer.agree.splice(i, 1)
                          }
                        }
                        for (let i = 0; i < answer.disagree.length; i++) { // 删除不赞同
                          if (answer.disagree[i].toString() === user._id.toString()) {
                            answer.disagree.splice(i, 1)
                          }
                        }
                      }
                    }
                  })
                  problem.save((err) => {
                    if (err) {
                      console.log(err)
                    } else {
                      res.send('ok')
                    }
                  })
                }
              }
            })
        }
      })
    }
  }
  let newVote = new Vote(vote)
  newVote.operate()
})
module.exports = router
