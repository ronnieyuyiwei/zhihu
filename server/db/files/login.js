/**
 * Created by YYW on 2017/3/18.
 */
var mongoose = require('../mongoose')
var Schema = mongoose.Schema
var userSchema = new Schema({
  name: String,
  password: String
})
var User = mongoose.model('User', userSchema)
module.exports = User


