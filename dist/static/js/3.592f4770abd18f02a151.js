webpackJsonp([3,5,13],{21:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),s=a(o);t.default={name:"answer-template",data:function(){return{hasValue:!1,answerList:[]}},props:["qid"],created:function(){this.fetchData()},watch:{$route:function(){this.fetchData()}},computed:{num:function(){return this.hasValue?this.answerList.length:0}},methods:{fetchData:function(){var e=this;s.default.get("/answer/getAnswer_preview",{params:{questionId:this.qid}}).then(function(t){if(t.data){e.hasValue=!0;for(var n=0;n<t.data.length;n++)e.answerList.push({content:t.data[n].content,responder:t.data[n].responder})}else e.hasValue=!1})}}}},35:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".answer-template .basic-info[data-v-1b499fcc]{height:30px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end;text-align:center;color:#979797}.answer-template .basic-info .num[data-v-1b499fcc]{width:70px}.answer-template .basic-info .order[data-v-1b499fcc]{width:100px}.answer-template .answer-content[data-v-1b499fcc]:last-child{padding-bottom:100px}.answer-template .answer-content .answer[data-v-1b499fcc]{margin-top:10px;padding:0 10px;border-bottom:1px solid #e7e7e7;border-top:1px solid #e7e7e7;background:#fff}.answer-template .answer-content .answer .answer-people[data-v-1b499fcc]{margin-top:15px;width:100%;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.answer-template .answer-content .answer .answer-people span[data-v-1b499fcc]{margin-left:5px;font-size:13px;font-weight:600;color:#979797}.answer-template .answer-content .answer .answer-people span img[data-v-1b499fcc]{width:24px;border-radius:2000px}.answer-template .answer-content .answer .answer-content[data-v-1b499fcc]{margin-top:10px;width:100%;word-break:break-all;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:15px;color:#585858}.answer-template .answer-content .answer .answer-info[data-v-1b499fcc]{margin-top:8px;font-size:14px;color:#afafaf;padding-bottom:8px}.answer-template .message[data-v-1b499fcc]{height:60px;text-align:center;color:#979797;margin-top:25px;font-size:14px}","",{version:3,sources:["/./src/components/answer/answer-template.vue"],names:[],mappings:"AACA,8CAA8C,YAAY,oBAAoB,aAAa,sBAAsB,8BAA8B,mBAAmB,qBAAqB,kBAAkB,aAAa,CACrN,AACD,mDAAmD,UAAU,CAC5D,AACD,qDAAqD,WAAW,CAC/D,AACD,6DAA6D,oBAAoB,CAChF,AACD,0DAA0D,gBAAgB,eAAsB,gCAAgC,6BAA6B,eAAgB,CAC5K,AACD,yEAAyE,gBAAgB,WAAW,qBAAqB,oBAAoB,qBAAqB,4BAA4B,gBAAgB,2BAA2B,oBAAoB,sBAAsB,kBAAkB,CACpS,AACD,8EAA8E,gBAAgB,eAAe,gBAAgB,aAAa,CACzI,AACD,kFAAkF,WAAW,oBAAoB,CAChH,AACD,0EAA0E,gBAAgB,WAAW,qBAAqB,oBAAoB,qBAAqB,4BAA4B,gBAAgB,eAAe,aAAa,CAC1O,AACD,uEAAuE,eAAe,eAAe,cAAc,kBAAkB,CACpI,AACD,2CAA2C,YAAY,kBAAkB,cAAc,gBAAgB,cAAc,CACpH",file:"answer-template.vue",sourcesContent:["\n.answer-template .basic-info[data-v-1b499fcc]{height:30px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end;text-align:center;color:#979797\n}\n.answer-template .basic-info .num[data-v-1b499fcc]{width:70px\n}\n.answer-template .basic-info .order[data-v-1b499fcc]{width:100px\n}\n.answer-template .answer-content[data-v-1b499fcc]:last-child{padding-bottom:100px\n}\n.answer-template .answer-content .answer[data-v-1b499fcc]{margin-top:10px;padding:0 10px 0 10px;border-bottom:1px solid #E7E7E7;border-top:1px solid #E7E7E7;background:white\n}\n.answer-template .answer-content .answer .answer-people[data-v-1b499fcc]{margin-top:15px;width:100%;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center\n}\n.answer-template .answer-content .answer .answer-people span[data-v-1b499fcc]{margin-left:5px;font-size:13px;font-weight:600;color:#979797\n}\n.answer-template .answer-content .answer .answer-people span img[data-v-1b499fcc]{width:24px;border-radius:2000px\n}\n.answer-template .answer-content .answer .answer-content[data-v-1b499fcc]{margin-top:10px;width:100%;word-break:break-all;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:15px;color:#585858\n}\n.answer-template .answer-content .answer .answer-info[data-v-1b499fcc]{margin-top:8px;font-size:14px;color:#AFAFAF;padding-bottom:8px\n}\n.answer-template .message[data-v-1b499fcc]{height:60px;text-align:center;color:#979797;margin-top:25px;font-size:14px\n}\n"],sourceRoot:"webpack://"}])},36:function(e,t,n){var a=n(35);"string"==typeof a&&(a=[[e.id,a,""]]);n(2)(a,{});a.locals&&(e.exports=a.locals)},37:function(e,t,n){e.exports=n.p+"static/img/1.3851a58.jpg"},39:function(e,t,n){var a,o;n(36),a=n(21);var s=n(41);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-1b499fcc",e.exports=a},41:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"answer-template"},[a("div",{staticClass:"basic-info"},[a("div",{staticClass:"num"},[e._v(e._s(e.num)+"个回答")]),e._v(" "),a("div",{staticClass:"order"},[a("span",[e._v("按时间排序")]),e._v(" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-arrow-right-copy"}})])])]),e._v(" "),e.hasValue?a("div",e._l(e.answerList,function(t){return a("div",{staticClass:"answer-content"},[a("router-link",{staticClass:"answer",attrs:{tag:"div",to:"/home"}},[a("div",{staticClass:"answer-people"},[a("span",[a("img",{attrs:{src:n(37)}})]),e._v(" "),a("span",[e._v(e._s(t.responder))])]),e._v(" "),a("div",{staticClass:"answer-content"},[e._v("\n          "+e._s(t.content)+"\n        ")]),e._v(" "),a("div",{staticClass:"answer-info"},[a("span",[e._v("2 赞同")]),e._v(" ·\n          "),a("span",[e._v("4 评论")]),e._v(" ·\n          "),a("span",[e._v("1 年前")])])])],1)})):a("div",{staticClass:"message"},[a("div",[e._v("暂时还没有用户回答，您可以关注该问题")]),e._v(" "),a("div",[e._v("有新的回答会及时通知您")])])])},staticRenderFns:[]}},101:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),s=a(o),i=n(39),c=a(i),r=n(19),A=a(r);t.default={name:"question",data:function(){return{title:"",describe:"",focus:"",commentNum:"",questionId:this.$route.params.id}},components:{AnswerPreview:c.default,FootMenu:A.default},created:function(){this.getData()},computed:{layerPop:function(){var e=/add_answer$/;return!!e.test(this.$route.path)}},methods:{getData:function(){var e=this;s.default.get("/question/getData",{params:{questionId:this.$route.params.id}}).then(function(t){t.data.status?(e.title=t.data.title,e.describe=t.data.describe,e.commentNum=t.data.commentNum):e.$router.replace("/error")}).catch(function(e){e&&console.log(e)})},addAnswer:function(){this.$router.push(this.$route.path+"/add_answer")}}}},148:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".question .question-body .topic[data-v-9c333c02]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:30px;border-bottom:1px dashed #e7e7e7}.question .question-body .topic span[data-v-9c333c02]{-ms-flex:7;flex:7}.question .question-body .topic svg[data-v-9c333c02]{-ms-flex:1;flex:1;color:#c3c3db;font-size:20px}.question .question-body .question-content[data-v-9c333c02]{width:100%;min-height:100px;margin-top:15px}.question .question-body .question-content .title[data-v-9c333c02]{font-family:SimHei;font-size:18px;font-weight:600;padding:0 10px}.question .question-body .question-content .describe[data-v-9c333c02]{margin-top:13px;font-size:15px;color:#585858;padding:0 10px}.question .question-body .question-content .info[data-v-9c333c02]{width:100%;margin-top:15px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:distribute;align-content:space-around;-ms-flex-align:center;align-items:center}.question .question-body .question-content .info .focus[data-v-9c333c02]{-ms-flex:1;flex:1;font-size:15px;color:#6d7784;margin-left:10px}.question .question-body .question-content .info .comment[data-v-9c333c02]{-ms-flex:1;flex:1;font-size:15px;color:#6d7784}.question .question-body .question-content .info .add-focus[data-v-9c333c02]{-ms-flex:2;flex:2}.question .question-body .question-content .info .add-focus button[data-v-9c333c02]{float:right;margin-right:20px;width:80px;height:30px;border:none;background:#0083fe;border-radius:5px;font-size:14px;color:#fff}.question .question-body .question-content .button-bar[data-v-9c333c02]{width:100%;margin-top:15px;height:45px;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;display:-ms-flexbox;display:flex;text-align:center;line-height:45px;font-size:14px;color:#6d7784}.question .question-body .question-content .button-bar .invite-people[data-v-9c333c02]{height:45px;-ms-flex:1;flex:1;border-right:1px solid #e7e7e7}.question .question-body .question-content .button-bar .add-answer[data-v-9c333c02]{height:45px;-ms-flex:1;flex:1}.question .question-body .question-content .button-bar .icon[data-v-9c333c02]{font-size:19px}.question .answer-preview[data-v-9c333c02]{width:100%;background:#edeef0;min-height:calc(100vh - 128px)}.question .question-view[data-v-9c333c02]{width:100%}","",{version:3,sources:["/./src/pages/question/question.vue"],names:[],mappings:"AACA,iDAAiD,oBAAoB,aAAa,qBAAqB,uBAAuB,sBAAsB,mBAAmB,WAAW,YAAY,gCAAgC,CAC7N,AACD,sDAAsD,WAAW,MAAM,CACtE,AACD,qDAAqD,WAAW,OAAO,cAAc,cAAc,CAClG,AACD,4DAA4D,WAAW,iBAAiB,eAAe,CACtG,AACD,mEAAmE,mBAAmB,eAAe,gBAAgB,cAAqB,CACzI,AACD,sEAAsE,gBAAgB,eAAe,cAAc,cAAqB,CACvI,AACD,kEAAkE,WAAW,gBAAgB,oBAAoB,aAAa,8BAA8B,2BAA2B,sBAAsB,kBAAkB,CAC9N,AACD,yEAAyE,WAAW,OAAO,eAAe,cAAc,gBAAgB,CACvI,AACD,2EAA2E,WAAW,OAAO,eAAe,aAAa,CACxH,AACD,6EAA6E,WAAW,MAAM,CAC7F,AACD,oFAAoF,YAAY,kBAAkB,WAAW,YAAY,YAAY,mBAAmB,kBAAkB,eAAe,UAAa,CACrN,AACD,wEAAwE,WAAW,gBAAgB,YAAY,6BAA6B,gCAAgC,oBAAoB,aAAa,kBAAkB,iBAAiB,eAAe,aAAa,CAC3Q,AACD,uFAAuF,YAAY,WAAW,OAAO,8BAA8B,CAClJ,AACD,oFAAoF,YAAY,WAAW,MAAM,CAChH,AACD,8EAA8E,cAAc,CAC3F,AACD,2CAA2C,WAAW,mBAAmB,8BAA8B,CACtG,AACD,0CAA0C,UAAU,CACnD",file:"question.vue",sourcesContent:["\n.question .question-body .topic[data-v-9c333c02]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:30px;border-bottom:1px dashed #E7E7E7\n}\n.question .question-body .topic span[data-v-9c333c02]{-ms-flex:7;flex:7\n}\n.question .question-body .topic svg[data-v-9c333c02]{-ms-flex:1;flex:1;color:#C3C3DB;font-size:20px\n}\n.question .question-body .question-content[data-v-9c333c02]{width:100%;min-height:100px;margin-top:15px\n}\n.question .question-body .question-content .title[data-v-9c333c02]{font-family:SimHei;font-size:18px;font-weight:600;padding:0 10px 0 10px\n}\n.question .question-body .question-content .describe[data-v-9c333c02]{margin-top:13px;font-size:15px;color:#585858;padding:0 10px 0 10px\n}\n.question .question-body .question-content .info[data-v-9c333c02]{width:100%;margin-top:15px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:distribute;align-content:space-around;-ms-flex-align:center;align-items:center\n}\n.question .question-body .question-content .info .focus[data-v-9c333c02]{-ms-flex:1;flex:1;font-size:15px;color:#6D7784;margin-left:10px\n}\n.question .question-body .question-content .info .comment[data-v-9c333c02]{-ms-flex:1;flex:1;font-size:15px;color:#6D7784\n}\n.question .question-body .question-content .info .add-focus[data-v-9c333c02]{-ms-flex:2;flex:2\n}\n.question .question-body .question-content .info .add-focus button[data-v-9c333c02]{float:right;margin-right:20px;width:80px;height:30px;border:none;background:#0083FE;border-radius:5px;font-size:14px;color:#ffffff\n}\n.question .question-body .question-content .button-bar[data-v-9c333c02]{width:100%;margin-top:15px;height:45px;border-top:1px solid #E7E7E7;border-bottom:1px solid #E7E7E7;display:-ms-flexbox;display:flex;text-align:center;line-height:45px;font-size:14px;color:#6D7784\n}\n.question .question-body .question-content .button-bar .invite-people[data-v-9c333c02]{height:45px;-ms-flex:1;flex:1;border-right:1px solid #E7E7E7\n}\n.question .question-body .question-content .button-bar .add-answer[data-v-9c333c02]{height:45px;-ms-flex:1;flex:1\n}\n.question .question-body .question-content .button-bar .icon[data-v-9c333c02]{font-size:19px\n}\n.question .answer-preview[data-v-9c333c02]{width:100%;background:#EDEEF0;min-height:calc(100vh - 128px)\n}\n.question .question-view[data-v-9c333c02]{width:100%\n}\n"],sourceRoot:"webpack://"}])},168:function(e,t,n){var a=n(148);"string"==typeof a&&(a=[[e.id,a,""]]);n(2)(a,{});a.locals&&(e.exports=a.locals)},188:function(e,t,n){var a,o;n(168),a=n(101);var s=n(204);o=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(o=a=a.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-9c333c02",e.exports=a},204:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[n("div",{staticClass:"question-body"},[n("div",{staticClass:"topic"},[n("span",[e._v("话题内容")]),e._v(" "),n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-jiantou"}})])]),e._v(" "),n("div",{staticClass:"question-content"},[n("div",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"describe"},[e._v(e._s(e.describe))]),e._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"focus"},[e._v("1016人关注")]),e._v(" "),n("div",{staticClass:"comment"},[e._v(e._s(e.commentNum)+" 条评论")]),e._v(" "),e._m(0)]),e._v(" "),n("div",{staticClass:"button-bar"},[n("div",{staticClass:"invite-people"},[n("span",[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-yaoqing"}})])]),e._v(" \n          "),n("span",[e._v("\n            邀请回答\n          ")])]),e._v(" "),n("div",{staticClass:"add-answer",on:{click:e.addAnswer}},[n("span",[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-bianji"}})])]),e._v(" \n          "),n("span",[e._v("\n            添加回答\n          ")])])])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.layerPop,expression:"!layerPop"}],staticClass:"answer-preview"},[n("answer-preview",{attrs:{qid:e.questionId}})],1),e._v(" "),n("div",{staticClass:"question-view"},[n("router-view",{attrs:{qid:e.questionId}})],1),e._v(" "),n("foot-menu")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-focus"},[n("button",[e._v("+ 关注")])])}]}}});
//# sourceMappingURL=3.592f4770abd18f02a151.js.map