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
    as_comment: { type: Schema.Types.ObjectId, ref: 'Comment' },
    content: String,
    agree: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    disagree: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    fold: { type: Boolean, default: false }
  }],
  questionComment: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})
var Problem = mongoose.model('Problem', problemSchema)
module.exports = Problem
