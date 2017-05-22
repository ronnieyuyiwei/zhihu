/**
 * Created by YYW on 2017/5/22.
 */
const express = require('express')
const router = express.Router()
var cheerio = require('cheerio')
var superagent = require('superagent')
router.get('/crawler', (req, res) => {
  superagent.get('http://www.jianshu.com')
    .end(function (err, sres) {
      if (err) {
        console.log(err)
      }
      var $ = cheerio.load(sres.text)
      var items = []
      $('ul.note-list > li').each(function (idx, element) {
        var $element = $(element)
        items.push({
          author: $element.children('.content').children('.author').children('.name').children('a.blue-link').text(),
          title: $element.children('.content').children('.title').text()
          // href: $element.attr('href')
        })
      })
      console.log(items)
      res.send(items)
    })
})
// router.get('/crawler', (req, res) => {
//   let baseHeaders = {
//     'Accept': '*/*',
//     'Accept-Encoding': 'gzip, deflate, sdch, br',
//     'Accept-Language': 'zh-CN,zh;q=0.8',
//     'Cache-Control': 'no-cache',
//     'Connection': 'keep-alive',
//     'Cookie': 'aliyungf_tc=AQAAAO2cfDQjkAYACCBYZeEv6OMByu17; acw_tc=AQAAAJKCsFtSvwcACCBYZdGE+Gkh8kob; q_c1=e7476840aa8b4aecbc23c4f30a760e62|1495443681000|1495443681000; _xsrf=4975e46f8dc308598cc405bfd64b4b0e; r_cap_id="MWMwOTkzNGU3OGU0NDRiZmJkN2VlOTYxZjRlZTJkMjA=|1495443681|09ee1843889e25078b6c62ee95faf17e3ea97290"; cap_id="ZWU0NGYxZDQ3ZTA3NDg4ZTkxMTA5MTMyOTJiNGViNTU=|1495443681|4092ff53b818b9a060a5c7ba8a8741cea3b918a5"; _zap=a83d0b0c-6240-4c3c-9d8d-91abf400d672; d_c0="ADACU5jsywuPTjKGCRV7ITH0AYQXyBCI0nA=|1495443682"; l_n_c=1; l_cap_id="NGEzOGQxYzBkODNhNDFmMjhlZjUyNmZiMDViYTY4YWQ=|1495443930|aacff8b9e3f6fc6fdb8a8f27e7078453f88bf6c6"; __utma=51854390.251474180.1495443614.1495443614.1495443614.1; __utmb=51854390.0.10.1495443614; __utmc=51854390; __utmz=51854390.1495443614.1.1.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/; __utmv=51854390.000--|2=registration_date=20150718=1^3=entry_date=20170522=1; n_c=1',
//     'Host': 'www.zhihu.com',
//     'Pragma': 'no-cache',
//     'Referer': 'https://www.zhihu.com/',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
//     'X-Requested-With': 'XMLHttpRequest'
//   }
//   superagent
//     .get('https://www.zhihu.com')
//     .set(baseHeaders)
//     .set('Cookie', 'Mi4wQUJCS0JneF9hQWdBQUVMeDl0N0xDeGNBQUFCaEFsVk5UeWhLV1FENWJNWnRETEZVVHRxSjI5Z1h1QVFTcnJpZGJB|1495440455|0ea65f32fb57f05801f0840eaec5b76a62153653')
//     .type('form')
//     .send({account: '13621684786', password: 'swallow940416'})
//     .redirects(0)
//     .end((err, res) => {
//       if (err) {
//         console.log(err)
//       }
//       console.log(res)
//     })
// })
module.exports = router
