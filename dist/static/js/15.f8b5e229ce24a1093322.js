webpackJsonp([15,17],{129:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(11),o=n(r);t.default={data:function(){return{answerList:[]}},created:function(){this.getData()},methods:{getData:function(){var e=this;o.default.get("/answer/getMyAnswer",{params:{account:this.$route.params.id}}).then(function(t){if(t.data.length>0)for(var a=0;a<t.data.length;a++)e.answerList.push({answerTitle:t.data[a].answerTitle,answerContent:t.data[a].answerContent,answerDate:t.data[a].answerDate,answerHref:"/question/"+t.data[a].questionId+"/answer/"+t.data[a].answerId})}).catch(function(e){console.log(e)})}}}},179:function(e,t,a){t=e.exports=a(3)(),t.push([e.id,".answer[data-v-85af0434]{margin-top:10px;padding:0 10px;border-bottom:1px solid #e7e7e7;border-top:1px solid #e7e7e7;background:#fff}.answer .answer-title[data-v-85af0434]{margin-top:15px;-webkit-line-clamp:2;font-size:17px;font-weight:600}.answer .answer-content[data-v-85af0434],.answer .answer-title[data-v-85af0434]{width:100%;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.answer .answer-content[data-v-85af0434]{margin-top:10px;-webkit-line-clamp:3;font-size:15px;color:#585858}.answer .answer-info[data-v-85af0434]{margin-top:8px;font-size:14px;color:#afafaf;padding-bottom:8px}","",{version:3,sources:["/./src/components/more/menu-answer.vue"],names:[],mappings:"AACA,yBAAyB,gBAAgB,eAAsB,gCAAgC,6BAA6B,eAAgB,CAC3I,AACD,uCAAuC,gBAAgB,AAAoD,qBAAqB,AAA4C,eAAe,eAAe,CACzM,AACD,gFAFuD,WAAW,qBAAqB,oBAAoB,AAAqB,4BAA4B,eAAgB,CAG3K,AADD,yCAAyC,gBAAgB,AAAoD,qBAAqB,AAA4C,eAAe,aAAa,CACzM,AACD,sCAAsC,eAAe,eAAe,cAAc,kBAAkB,CACnG",file:"menu-answer.vue",sourcesContent:["\n.answer[data-v-85af0434]{margin-top:10px;padding:0 10px 0 10px;border-bottom:1px solid #E7E7E7;border-top:1px solid #E7E7E7;background:white\n}\n.answer .answer-title[data-v-85af0434]{margin-top:15px;width:100%;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:17px;font-weight:600\n}\n.answer .answer-content[data-v-85af0434]{margin-top:10px;width:100%;word-break:break-all;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;font-size:15px;color:#585858\n}\n.answer .answer-info[data-v-85af0434]{margin-top:8px;font-size:14px;color:#AFAFAF;padding-bottom:8px\n}\n"],sourceRoot:"webpack://"}])},204:function(e,t,a){var n=a(179);"string"==typeof n&&(n=[[e.id,n,""]]);a(4)(n,{});n.locals&&(e.exports=n.locals)},216:function(e,t,a){var n,r;a(204),n=a(129);var o=a(250);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,r._scopeId="data-v-85af0434",e.exports=n},250:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-answer"},e._l(e.answerList,function(t){return a("div",[a("router-link",{staticClass:"answer",attrs:{tag:"div",to:t.answerHref}},[a("div",{staticClass:"answer-title"},[e._v("\n        "+e._s(t.answerTitle)+"\n      ")]),e._v(" "),a("div",{staticClass:"answer-content"},[e._v("\n        "+e._s(t.answerContent)+"\n      ")]),e._v(" "),a("div",{staticClass:"answer-info"},[a("span",[e._v(e._s(t.answerDate))])])])],1)}))},staticRenderFns:[]}}});
//# sourceMappingURL=15.f8b5e229ce24a1093322.js.map