webpackJsonp([10,17],{103:function(e,t,n){var i,a;n(200),i=n(143);var o=n(246);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-606b2a8d",e.exports=i},143:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"my-creation",data:function(){return{menus:[{name:"回答",title:"answer",path:"answer"},{name:"提问",title:"question",path:"question"},{name:"分享",title:"share",path:"share"},{name:"专栏",title:"column",path:"column"}]}},created:function(){this.addPath()},methods:{addPath:function(){for(var e in this.menus)this.menus[e].path="/more/my_creation/"+this.$route.params.id+"/"+this.menus[e].path}}}},177:function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".my-creation[data-v-606b2a8d]{position:absolute;top:0;left:0;background:#fff;width:100%;min-height:1000px}.my-creation .title[data-v-606b2a8d]{width:100%;height:50px;text-align:center;font-size:16px;color:#585858;line-height:50px}.my-creation .title svg[data-v-606b2a8d]{color:#888d97;font-size:20px;position:absolute;top:15px;left:5px}.my-creation .menu[data-v-606b2a8d]{height:40px;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;display:-ms-flexbox;display:flex;padding:0 30px;text-align:center;-ms-flex-pack:center;justify-content:center;line-height:40px;font-size:14px;color:#979797;font-weight:600}.my-creation .menu .btn[data-v-606b2a8d]{-ms-flex:1;flex:1}.my-creation .menu .btn a[data-v-606b2a8d]{display:inline-block;width:100%;height:40px}.my-creation .menu .btn .router-link-active[data-v-606b2a8d]{border-bottom:2px solid #2da1fe}.my-creation .menu-question[data-v-606b2a8d]{background:#f8f8f8}.my-creation .order[data-v-606b2a8d]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-align:center;height:40px;line-height:30px;color:#979797;font-size:14px;font-weight:600;border-bottom:1px solid #e7e7e7}.my-creation .order div[data-v-606b2a8d]{height:30px;-ms-flex:1;flex:1}.my-creation .order div[data-v-606b2a8d]:first-child{border-right:1px solid #e7e7e7}","",{version:3,sources:["/./src/pages/more/children/my-creation.vue"],names:[],mappings:"AACA,8BAA8B,kBAAkB,MAAM,OAAO,gBAAiB,WAAW,iBAAiB,CACzG,AACD,qCAAqC,WAAW,YAAY,kBAAkB,eAAe,cAAc,gBAAgB,CAC1H,AACD,yCAAyC,cAAc,eAAe,kBAAkB,SAAS,QAAQ,CACxG,AACD,oCAAoC,YAAY,6BAA6B,gCAAgC,oBAAoB,aAAa,eAAsB,kBAAkB,qBAAqB,uBAAuB,iBAAiB,eAAe,cAAc,eAAe,CAC9R,AACD,yCAAyC,WAAW,MAAM,CACzD,AACD,2CAA2C,qBAAqB,WAAW,WAAW,CACrF,AACD,6DAA6D,+BAA+B,CAC3F,AACD,6CAA6C,kBAAkB,CAC9D,AACD,qCAAqC,oBAAoB,aAAa,sBAAsB,mBAAmB,kBAAkB,YAAY,iBAAiB,cAAc,eAAe,gBAAgB,+BAA+B,CACzO,AACD,yCAAyC,YAAY,WAAW,MAAM,CACrE,AACD,qDAAsD,8BAA8B,CACnF",file:"my-creation.vue",sourcesContent:["\n.my-creation[data-v-606b2a8d]{position:absolute;top:0;left:0;background:white;width:100%;min-height:1000px\n}\n.my-creation .title[data-v-606b2a8d]{width:100%;height:50px;text-align:center;font-size:16px;color:#585858;line-height:50px\n}\n.my-creation .title svg[data-v-606b2a8d]{color:#888D97;font-size:20px;position:absolute;top:15px;left:5px\n}\n.my-creation .menu[data-v-606b2a8d]{height:40px;border-top:1px solid #E7E7E7;border-bottom:1px solid #E7E7E7;display:-ms-flexbox;display:flex;padding:0 30px 0 30px;text-align:center;-ms-flex-pack:center;justify-content:center;line-height:40px;font-size:14px;color:#979797;font-weight:600\n}\n.my-creation .menu .btn[data-v-606b2a8d]{-ms-flex:1;flex:1\n}\n.my-creation .menu .btn a[data-v-606b2a8d]{display:inline-block;width:100%;height:40px\n}\n.my-creation .menu .btn .router-link-active[data-v-606b2a8d]{border-bottom:2px solid #2DA1FE\n}\n.my-creation .menu-question[data-v-606b2a8d]{background:#F8F8F8\n}\n.my-creation .order[data-v-606b2a8d]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;text-align:center;height:40px;line-height:30px;color:#979797;font-size:14px;font-weight:600;border-bottom:1px solid #E7E7E7\n}\n.my-creation .order div[data-v-606b2a8d]{height:30px;-ms-flex:1;flex:1\n}\n.my-creation .order div[data-v-606b2a8d]:nth-child(1){border-right:1px solid #E7E7E7\n}\n"],sourceRoot:"webpack://"}])},200:function(e,t,n){var i=n(177);"string"==typeof i&&(i=[[e.id,i,""]]);n(4)(i,{});i.locals&&(e.exports=i.locals)},246:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-creation"},[n("div",{staticClass:"title"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-fanhui"}})]),e._v("\n      我的创作\n    ")]),e._v(" "),n("div",{staticClass:"menu"},e._l(e.menus,function(t){return n("div",{staticClass:"btn"},[n("router-link",{attrs:{to:t.path}},[n("div",[e._v(e._s(t.name))])])],1)})),e._v(" "),n("div",{staticClass:"menu-conent"},[n("router-view")],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=10.e5a0154ad85a74e38b19.js.map