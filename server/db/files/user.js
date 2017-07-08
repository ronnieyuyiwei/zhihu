/**
 * Created by YYW on 2017/3/18.
 */
var mongoose = require('../mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
  account: {type: String, index: true, unique: true, required: true},
  password: {type: String, required: true},
  headImage: {type: String},
  registration_time: {type: Date, default: Date.now},
  _ask: [{type: Schema.Types.ObjectId, ref: 'Problem'}],
  _answer: [{type: Schema.Types.ObjectId, ref: 'Problem'}],
  _focusProblem: [{type: Schema.Types.ObjectId, ref: 'Problem'}],
  _focusPeople: [{type: Schema.Types.ObjectId, ref: 'User'}],
  _follower: [{type: Schema.Types.ObjectId, ref: 'User'}]
})
var User = mongoose.model('User', userSchema)
module.exports = User
