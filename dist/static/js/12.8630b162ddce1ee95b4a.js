webpackJsonp([12,14],{128:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),a=o(i);e.default={name:"menu-question",data:function(){return{questionList:[]}},created:function(){var t=this;a.default.get("/question/getQuestion",function(t,e){t&&console.log(t)}).then(function(e){for(var n=0;n<e.data.length;n++)t.questionList.push({questionTitle:e.data[n].title,questionContent:e.data[n].describe,questionId:"/question/"+e.data[n].id,answerNum:e.data[n].answerNum,date:e.data[n].date})}).catch(function(t){console.log(t)})}}},174:function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".question[data-v-c48c7be4]{margin-top:10px;padding:0 10px;border-bottom:1px solid #e7e7e7;border-top:1px solid #e7e7e7;background:#fff}.question .question-title[data-v-c48c7be4]{margin-top:15px;-webkit-line-clamp:2;font-size:17px;font-weight:600}.question .question-content[data-v-c48c7be4],.question .question-title[data-v-c48c7be4]{width:100%;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.question .question-content[data-v-c48c7be4]{margin-top:10px;-webkit-line-clamp:3;font-size:15px;color:#585858}.question .question-info[data-v-c48c7be4]{margin-top:8px;font-size:14px;color:#afafaf;padding-bottom:8px}","",{version:3,sources:["/./src/components/more/menu-question.vue"],names:[],mappings:"AACA,2BAA2B,gBAAgB,eAAsB,gCAAgC,6BAA6B,eAAgB,CAC7I,AACD,2CAA2C,gBAAgB,AAAoD,qBAAqB,AAA4C,eAAe,eAAe,CAC7M,AACD,wFAF2D,WAAW,qBAAqB,oBAAoB,AAAqB,4BAA4B,eAAgB,CAG/K,AADD,6CAA6C,gBAAgB,AAAoD,qBAAqB,AAA4C,eAAe,aAAa,CAC7M,AACD,0CAA0C,eAAe,eAAe,cAAc,kBAAkB,CACvG",file:"menu-question.vue",sourcesContent:["\n.question[data-v-c48c7be4]{margin-top:10px;padding:0 10px 0 10px;border-bottom:1px solid #E7E7E7;border-top:1px solid #E7E7E7;background:white\n}\n.question .question-title[data-v-c48c7be4]{margin-top:15px;width:100%;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:17px;font-weight:600\n}\n.question .question-content[data-v-c48c7be4]{margin-top:10px;width:100%;word-break:break-all;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:15px;color:#585858\n}\n.question .question-info[data-v-c48c7be4]{margin-top:8px;font-size:14px;color:#AFAFAF;padding-bottom:8px\n}\n"],sourceRoot:"webpack://"}])},195:function(t,e,n){var o=n(174);"string"==typeof o&&(o=[[t.id,o,""]]);n(4)(o,{});o.locals&&(t.exports=o.locals)},203:function(t,e,n){var o,i;n(195),o=n(128);var a=n(233);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-c48c7be4",t.exports=o},233:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-question"},t._l(t.questionList,function(e){return n("div",[n("router-link",{staticClass:"question",attrs:{tag:"div",to:e.questionId}},[n("div",{staticClass:"question-title"},[t._v("\n        "+t._s(e.questionTitle)+"\n      ")]),t._v(" "),n("div",{staticClass:"question-content"},[t._v("\n        "+t._s(e.questionContent)+"\n      ")]),t._v(" "),n("div",{staticClass:"question-info"},[n("span",[t._v(t._s(e.answerNum)+" 回答")]),t._v(" "),n("span",[t._v("4 关注")]),t._v(" "),n("span",[t._v(t._s(e.date))])])])],1)}))},staticRenderFns:[]}}});
//# sourceMappingURL=12.8630b162ddce1ee95b4a.js.map