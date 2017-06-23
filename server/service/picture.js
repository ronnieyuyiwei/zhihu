/**
 * Created by YYW on 2017/6/7.
 */
const express = require('express')
const router = express.Router()
const util = require('util')
const path = require('path')
const fs = require('fs')
const formidable = require('formidable')
router.post('/picture/headPic', (req, res) => {
  var pic = req.body.pic
  console.log(pic)
  res.send('ok')
})
module.exports = router
