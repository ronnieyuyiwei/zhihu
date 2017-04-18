/**
 * Created by YYW on 2017/4/18.
 */
var mongoose = require('../mongoose')
var Schema = mongoose.Schema
var problemSchema = new Schema({
  date: { type: Date, default: Date.now },
  questioner: String,
  topic: Array,
  title: String,
  describe: String,
  invited: Array,
  answer: [{
    date: Date,
    responder: String,
    content: String,
    fold: Boolean
  }],
  comment: [{
    date: Date,
    discussant: String,
    content: String,
    zan: Number
  }]
})
var Problem = mongoose.model('Problem', problemSchema)
module.exports = Problem
