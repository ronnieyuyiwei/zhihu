/**
 * Created by YYW on 2017/4/18.
 */
var mongoose = require('../mongoose')
var Schema = mongoose.Schema
var problemSchema = new Schema({
  date: { type: Date, default: Date.now },
  questioner: { type: Schema.Types.ObjectId, ref: 'User' },
  topic: Array,
  title: String,
  describe: String,
  invited: Array,
  answer: [{
    date: { type: Date, default: Date.now },
    responder: { type: Schema.Types.ObjectId, ref: 'User' },
    as_comment: [{
      date: { type: Date, default: Date.now },
      discussant: { type: Schema.Types.ObjectId, ref: 'User' },
      content: String,
      zan: { type: Boolean, default: false }
    }],
    content: String,
    fold: { type: Boolean, default: false }
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
