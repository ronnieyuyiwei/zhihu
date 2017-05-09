/**
 * Created by YYW on 2017/5/9.
 */
var mongoose = require('../mongoose')
var Schema = mongoose.Schema
var commentSchema = new Schema({
  date: { type: Date, default: Date.now },
  discussant: { type: Schema.Types.ObjectId, ref: 'User' },
  content: String,
  comment: { type: Schema.Types.ObjectId, ref: 'Comment' },
  zan: { type: Schema.Types.ObjectId, ref: 'User' }
})

var Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
