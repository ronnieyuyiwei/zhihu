/**
 * Created by YYW on 2017/3/18.
 */
var mongoose = require('../mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
  account: {type: String, index: true, unique: true, required: true},
  password: {type: String, required: true},
  registration_time: {type: Date, default: Date.now},
  ask: [{type: Schema.Types.ObjectId, ref: 'Problem'}]
})
var User = mongoose.model('User', userSchema)
module.exports = User
