webpackJsonp([6,17],{60:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"loading"}},61:function(e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"success",props:["status"]}},76:function(e,a,t){a=e.exports=t(4)(),a.push([e.id,".loading-template[data-v-526905e2]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:80px;height:80px;background:#e7e7e7;border-radius:8px;margin:0 auto}.loading-template .spinner[data-v-526905e2]{width:22px;height:22px;position:relative;margin-top:25px}.loading-template .container1>div[data-v-526905e2],.loading-template .container2>div[data-v-526905e2],.loading-template .container3>div[data-v-526905e2]{width:6px;height:6px;background-color:#333;border-radius:100%;position:absolute;animation:bouncedelay 1.2s infinite ease-in-out;animation-fill-mode:both}.loading-template .spinner .spinner-container[data-v-526905e2]{position:absolute;width:100%;height:100%}.loading-template .container2[data-v-526905e2]{transform:rotate(45deg)}.loading-template .container3[data-v-526905e2]{transform:rotate(90deg)}.loading-template .circle1[data-v-526905e2]{top:0;left:0}.loading-template .circle2[data-v-526905e2]{top:0;right:0}.loading-template .circle3[data-v-526905e2]{right:0;bottom:0}.loading-template .circle4[data-v-526905e2]{left:0;bottom:0}.loading-template .container2 .circle1[data-v-526905e2]{animation-delay:-1.1s}.loading-template .container3 .circle1[data-v-526905e2]{animation-delay:-1s}.loading-template .container1 .circle2[data-v-526905e2]{animation-delay:-.9s}.loading-template .container2 .circle2[data-v-526905e2]{animation-delay:-.8s}.loading-template .container3 .circle2[data-v-526905e2]{animation-delay:-.7s}.loading-template .container1 .circle3[data-v-526905e2]{animation-delay:-.6s}.loading-template .container2 .circle3[data-v-526905e2]{animation-delay:-.5s}.loading-template .container3 .circle3[data-v-526905e2]{animation-delay:-.4s}.loading-template .container1 .circle4[data-v-526905e2]{animation-delay:-.3s}.loading-template .container2 .circle4[data-v-526905e2]{animation-delay:-.2s}.loading-template .container3 .circle4[data-v-526905e2]{animation-delay:-.1s}@keyframes bouncedelay{0%,80%,to{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}","",{version:3,sources:["/./src/components/loading/loading.vue"],names:[],mappings:"AACA,mCAAmC,oBAAoB,aAAa,qBAAqB,uBAAuB,WAAW,YAAY,mBAAmB,kBAAkB,aAAa,CACxL,AACD,4CAA4C,WAAW,YAAY,kBAAkB,eAAe,CACnG,AACD,yJAAyJ,UAAU,WAAW,sBAAsB,mBAAmB,kBAAkB,gDAAgD,wBAAwB,CAChT,AACD,+DAA+D,kBAAkB,WAAW,WAAW,CACtG,AACD,+CAA+C,uBAAwB,CACtE,AACD,+CAA+C,uBAAwB,CACtE,AACD,4CAA4C,MAAM,MAAM,CACvD,AACD,4CAA4C,MAAM,OAAO,CACxD,AACD,4CAA4C,QAAQ,QAAQ,CAC3D,AACD,4CAA4C,OAAO,QAAQ,CAC1D,AACD,wDAAwD,qBAAqB,CAC5E,AACD,wDAAwD,mBAAqB,CAC5E,AACD,wDAAwD,oBAAqB,CAC5E,AACD,wDAAwD,oBAAqB,CAC5E,AACD,wDAAwD,oBAAqB,CAC5E,AACD,wDAAwD,oBAAqB,CAC5E,AACD,wDAAwD,oBAAqB,CAC5E,AACD,wDAAwD,oBAAqB,CAC5E,AACD,wDAAwD,oBAAqB,CAC5E,AACD,wDAAwD,oBAAqB,CAC5E,AACD,wDAAwD,oBAAqB,CAC5E,AACD,uBACA,UAAY,mBAAmB,0BAA0B,CACxD,AACD,IAAI,mBAAmB,0BAA0B,CAChD,CACA",file:"loading.vue",sourcesContent:["\n.loading-template[data-v-526905e2]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:80px;height:80px;background:#E7E7E7;border-radius:8px;margin:0 auto\n}\n.loading-template .spinner[data-v-526905e2]{width:22px;height:22px;position:relative;margin-top:25px\n}\n.loading-template .container1>div[data-v-526905e2],.loading-template .container2>div[data-v-526905e2],.loading-template .container3>div[data-v-526905e2]{width:6px;height:6px;background-color:#333;border-radius:100%;position:absolute;animation:bouncedelay 1.2s infinite ease-in-out;animation-fill-mode:both\n}\n.loading-template .spinner .spinner-container[data-v-526905e2]{position:absolute;width:100%;height:100%\n}\n.loading-template .container2[data-v-526905e2]{transform:rotateZ(45deg)\n}\n.loading-template .container3[data-v-526905e2]{transform:rotateZ(90deg)\n}\n.loading-template .circle1[data-v-526905e2]{top:0;left:0\n}\n.loading-template .circle2[data-v-526905e2]{top:0;right:0\n}\n.loading-template .circle3[data-v-526905e2]{right:0;bottom:0\n}\n.loading-template .circle4[data-v-526905e2]{left:0;bottom:0\n}\n.loading-template .container2 .circle1[data-v-526905e2]{animation-delay:-1.1s\n}\n.loading-template .container3 .circle1[data-v-526905e2]{animation-delay:-1.0s\n}\n.loading-template .container1 .circle2[data-v-526905e2]{animation-delay:-0.9s\n}\n.loading-template .container2 .circle2[data-v-526905e2]{animation-delay:-0.8s\n}\n.loading-template .container3 .circle2[data-v-526905e2]{animation-delay:-0.7s\n}\n.loading-template .container1 .circle3[data-v-526905e2]{animation-delay:-0.6s\n}\n.loading-template .container2 .circle3[data-v-526905e2]{animation-delay:-0.5s\n}\n.loading-template .container3 .circle3[data-v-526905e2]{animation-delay:-0.4s\n}\n.loading-template .container1 .circle4[data-v-526905e2]{animation-delay:-0.3s\n}\n.loading-template .container2 .circle4[data-v-526905e2]{animation-delay:-0.2s\n}\n.loading-template .container3 .circle4[data-v-526905e2]{animation-delay:-0.1s\n}\n@keyframes bouncedelay{\n0%,80%,100%{transform:scale(0);-webkit-transform:scale(0)\n}\n40%{transform:scale(1);-webkit-transform:scale(1)\n}\n}\n"],sourceRoot:"webpack://"}])},77:function(e,a,t){a=e.exports=t(4)(),a.push([e.id,".status[data-v-897e0222]{width:80px;height:80px;background:#e7e7e7;border-radius:8px;margin:0 auto}.error[data-v-897e0222],.status[data-v-897e0222],.success[data-v-897e0222]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.error[data-v-897e0222],.success[data-v-897e0222]{width:70px;height:70px;text-align:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;font-size:14px;color:#585858}.error .icon[data-v-897e0222],.success .icon[data-v-897e0222]{font-size:28px;color:#23de55}.error .message[data-v-897e0222],.success .message[data-v-897e0222]{margin-top:5px}.error #error[data-v-897e0222],.success #error[data-v-897e0222]{color:#d53027;font-size:26px}","",{version:3,sources:["/./src/components/loading/status.vue"],names:[],mappings:"AACA,yBAAsG,WAAW,YAAY,mBAAmB,kBAAkB,aAAa,CAC9K,AACD,2EAFyB,oBAAoB,aAAa,qBAAqB,sBAAuB,CAGrG,AADD,kDAAkD,WAAW,YAAY,kBAAkB,AAA6E,sBAAsB,mBAAmB,0BAA0B,sBAAsB,eAAe,aAAa,CAC5R,AACD,8DAA8D,eAAe,aAAa,CACzF,AACD,oEAAoE,cAAc,CACjF,AACD,gEAAgE,cAAc,cAAc,CAC3F",file:"status.vue",sourcesContent:["\n.status[data-v-897e0222]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:80px;height:80px;background:#E7E7E7;border-radius:8px;margin:0 auto\n}\n.success[data-v-897e0222],.error[data-v-897e0222]{width:70px;height:70px;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;font-size:14px;color:#585858\n}\n.success .icon[data-v-897e0222],.error .icon[data-v-897e0222]{font-size:28px;color:#23DE55\n}\n.success .message[data-v-897e0222],.error .message[data-v-897e0222]{margin-top:5px\n}\n.success #error[data-v-897e0222],.error #error[data-v-897e0222]{color:#D53027;font-size:26px\n}\n"],sourceRoot:"webpack://"}])},78:function(e,a,t){var n=t(76);"string"==typeof n&&(n=[[e.id,n,""]]);t(8)(n,{});n.locals&&(e.exports=n.locals)},79:function(e,a,t){var n=t(77);"string"==typeof n&&(n=[[e.id,n,""]]);t(8)(n,{});n.locals&&(e.exports=n.locals)},80:function(e,a,t){t(78);var n=t(3)(t(60),t(82),"data-v-526905e2",null);e.exports=n.exports},81:function(e,a,t){t(79);var n=t(3)(t(61),t(83),"data-v-897e0222",null);e.exports=n.exports},82:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement;e._self._c||a;return e._m(0)},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"loading-template"},[t("div",{staticClass:"spinner"},[t("div",{staticClass:"spinner-container container1"},[t("div",{staticClass:"circle1"}),e._v(" "),t("div",{staticClass:"circle2"}),e._v(" "),t("div",{staticClass:"circle3"}),e._v(" "),t("div",{staticClass:"circle4"})]),e._v(" "),t("div",{staticClass:"spinner-container container2"},[t("div",{staticClass:"circle1"}),e._v(" "),t("div",{staticClass:"circle2"}),e._v(" "),t("div",{staticClass:"circle3"}),e._v(" "),t("div",{staticClass:"circle4"})]),e._v(" "),t("div",{staticClass:"spinner-container container3"},[t("div",{staticClass:"circle1"}),e._v(" "),t("div",{staticClass:"circle2"}),e._v(" "),t("div",{staticClass:"circle3"}),e._v(" "),t("div",{staticClass:"circle4"})])])])}]}},83:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"status"},[e.status?t("div",{staticClass:"success"},[t("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#icon-chenggong"}})]),e._v(" "),t("div",{staticClass:"message"},[e._v("发布成功")])]):t("div",{staticClass:"error"},[t("div",[t("svg",{staticClass:"icon",attrs:{id:"error","aria-hidden":"true"}},[t("use",{attrs:{"xlink:href":"#icon-cha"}})])]),e._v(" "),t("div",{staticClass:"message"},[e._v("发布失败")])])])},staticRenderFns:[]}},138:function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var i=t(19),s=n(i),o=t(80),d=n(o),r=t(81),A=n(r);a.default={data:function(){return{account:"",answer:"",flag:!1,loading_gif:!1,axStatus:!1,loading:!1,status:!1}},props:["qid"],created:function(){this.checkLogin()},components:{Loading:d.default,Status:A.default},methods:{checkLogin:function(){var e=this;s.default.get("/login/checkLogin").then(function(a){a.data.login&&(e.account=a.data.account)})},checkWords:function(){0!==this.answer.length?this.flag=!0:this.flag=!1},addAnswer:function(){var e=this;this.loading_gif=!0,this.loading=!0,s.default.post("/answer/addAnswer",{qid:this.qid,responder:this.account,content:this.answer}).then(function(a){"ok"===a.data?(e.loading=!1,e.axStatus=!0,e.status=!0,setTimeout(function(){e.$router.push("/question/"+e.qid)},1e3)):(e.loading=!1,e.axStatus=!1,e.status=!0,setTimeout(function(){e.$router.push("/question/"+e.qid)},1e3))}).catch(function(a){console.log(a.msg),e.loading=!1,e.axStatus=!1,e.status=!0,setTimeout(function(){e.$router.push("/question/"+e.qid)},1500)})}}}},185:function(e,a,t){a=e.exports=t(4)(),a.push([e.id,".add-answer[data-v-d4da507e]{width:100%;background:#fff;position:absolute;top:0;left:0}.add-answer .title-bar[data-v-d4da507e]{width:100%;height:45px;margin-top:5px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;text-align:center;line-height:45px;border-bottom:1px solid #e7e7e7}.add-answer .title-bar span[data-v-d4da507e]{color:#0283fe;width:60px;height:40px;line-height:40px;font-size:16px;font-weight:700;display:inline-block}.add-answer .title-bar label[data-v-d4da507e]{font-size:16px;font-weight:500}.add-answer .title-bar span.cancel[data-v-d4da507e]{float:left}.add-answer .title-bar .fake[data-v-d4da507e]{color:rgba(2,131,254,.3)}.add-answer .input[data-v-d4da507e]{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.add-answer .input textarea[data-v-d4da507e]{width:96%;min-height:400px;border:none;font-size:15px;padding-top:10px;padding-left:5px;margin:0 auto}.add-answer .loading[data-v-d4da507e]{position:absolute;width:100%;top:200px}","",{version:3,sources:["/./src/pages/answer/add-answer.vue"],names:[],mappings:"AACA,6BAA6B,WAAW,gBAAiB,kBAAkB,MAAM,MAAM,CACtF,AACD,wCAAwC,WAAW,YAAY,eAAe,oBAAoB,aAAa,sBAAsB,8BAA8B,kBAAkB,iBAAiB,+BAA+B,CACpO,AACD,6CAA6C,cAAc,WAAW,YAAY,iBAAiB,eAAe,gBAAgB,oBAAoB,CACrJ,AACD,8CAA8C,eAAe,eAAe,CAC3E,AACD,oDAAoD,UAAU,CAC7D,AACD,8CAA8C,wBAAyB,CACtE,AACD,oCAAoC,WAAW,oBAAoB,aAAa,qBAAqB,sBAAsB,CAC1H,AACD,6CAA6C,UAAU,iBAAiB,YAAY,eAAe,iBAAiB,iBAAiB,aAAa,CACjJ,AACD,sCAAsC,kBAAkB,WAAW,SAAS,CAC3E",file:"add-answer.vue",sourcesContent:["\n.add-answer[data-v-d4da507e]{width:100%;background:white;position:absolute;top:0;left:0\n}\n.add-answer .title-bar[data-v-d4da507e]{width:100%;height:45px;margin-top:5px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;text-align:center;line-height:45px;border-bottom:1px solid #E7E7E7\n}\n.add-answer .title-bar span[data-v-d4da507e]{color:#0283FE;width:60px;height:40px;line-height:40px;font-size:16px;font-weight:700;display:inline-block\n}\n.add-answer .title-bar label[data-v-d4da507e]{font-size:16px;font-weight:500\n}\n.add-answer .title-bar span.cancel[data-v-d4da507e]{float:left\n}\n.add-answer .title-bar .fake[data-v-d4da507e]{color:rgba(2,131,254,0.3)\n}\n.add-answer .input[data-v-d4da507e]{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center\n}\n.add-answer .input textarea[data-v-d4da507e]{width:96%;min-height:400px;border:none;font-size:15px;padding-top:10px;padding-left:5px;margin:0 auto\n}\n.add-answer .loading[data-v-d4da507e]{position:absolute;width:100%;top:200px\n}\n"],sourceRoot:"webpack://"}])},211:function(e,a,t){var n=t(185);"string"==typeof n&&(n=[[e.id,n,""]]);t(8)(n,{});n.locals&&(e.exports=n.locals)},227:function(e,a,t){t(211);var n=t(3)(t(138),t(260),"data-v-d4da507e",null);e.exports=n.exports},260:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"add-answer"},[t("div",{staticClass:"title-bar"},[t("span",{staticClass:"cancel"},[e._v("取消")]),e._v(" "),t("label",[e._v("添加回答")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],on:{click:e.addAnswer}},[e._v("发布")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.flag,expression:"!flag"}],staticClass:"fake"},[e._v("发布")])]),e._v(" "),t("div",{staticClass:"input"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{autofocus:"",placeholder:"填写回答内容"},domProps:{value:e.answer},on:{input:[function(a){a.target.composing||(e.answer=a.target.value)},e.checkWords]}})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.loading_gif,expression:"loading_gif"}],staticClass:"loading"},[t("loading",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]}),e._v(" "),t("status",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"status"}],attrs:{status:e.axStatus}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=6.6e3ad7fec3fabcec7762.js.map