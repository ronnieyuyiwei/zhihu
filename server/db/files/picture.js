/**
 * Created by YYW on 2017/6/25.
 */
const mongoose = require('../mongoose')
var Schema = mongoose.Schema
var imageSchema = new Schema({
  img: { type: String }
})
var Image = mongoose.model('Image', imageSchema)
module.exports = Image
