/**
 * Created by YYW on 2017/3/18.
 */
var mongoose = require('../mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
  account: {type: String, index: 1, unique: true, required: true},
  password: {type: String, required: true},
  ask: [{type: Schema.Types.ObjectId, ref: 'Problem'}]
})
var User = mongoose.model('User', userSchema)
module.exports = User
