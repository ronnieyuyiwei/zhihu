/**
 * Created by YYW on 2017/3/18.
 */
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/swallow')
module.exports = mongoose
