/**
 * Created by swallow on 2017/7/9.
 */
const mongoose = require('../mongoose')
const Schema = mongoose.Schema
let topicSchema = new Schema({
  date: { type: Date, default: Date.now()},
  name: { type: String },
  description: {
    type: String
  },
  _question: [{
    type: Schema.Types.ObjectId, ref: 'Problem'
  }],
  _follower: [{
    type: Schema.Types.ObjectId, ref: 'User'
  }]
})
let Topic = mongoose.model('Topic', topicSchema)
module.exports = Topic
