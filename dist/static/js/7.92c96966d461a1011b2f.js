webpackJsonp([7,17],{105:function(e,t,o){o(185);var a=o(1)(o(146),o(233),"data-v-035b1f96",null);e.exports=a.exports},146:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(90),n=a(i),A=o(61),r=a(A),s=o(11),d=a(s);t.default={data:function(){return{login:!1,account:"",operateHeight:1e3,headOperate:!1,images:[],pic:null,imgExist:!1,imgSrc:null,list:[{title:"我的创作",icon:"#icon-bianji1",href:"/more/my_creation/",default:"/answer"},{title:"我的关注",icon:"#icon-guanzhu",href:"/more/my_focus/",default:"/question"},{title:"我的收藏",icon:"#icon-shoucang",href:"/more/my_creation/"},{title:"我的草稿",icon:"#icon-caogao",href:"/more/my_creation/"},{title:"最近浏览",icon:"#icon-zuijin",href:"/more/my_creation/"}]}},created:function(){this.checkLogin(),this.getHeadImage()},methods:{checkLogin:function(){var e=this;d.default.get("/login/checkLogin").then(function(t){if(t.data.login){e.login=!0,e.account=t.data.account;for(var o in e.list)e.list[o].href=e.list[o].href+e.account+e.list[o].default}else e.login=!1})},getHeadImage:function(){var e=this;d.default.get("/picture/getHeadPicture").then(function(t){if(t.data.imgExist){var a=e;a.imgExist=!0,a.$nextTick(function(){a.imgSrc=o(261)("./"+t.data.imgSrc)})}})},goRegister:function(){this.$router.push("register")},quit:function(){var e=this;d.default.get("/login/quitLogin").then(function(t){t.data.login||(e.login=!1)})},openHeadOperate:function(){this.operateHeight=document.documentElement.clientHeight,this.headOperate=!0},cancelHeadOperate:function(){this.headOperate=!1},chooseFile:function(){document.getElementById("poster").click()},uploadImage:function(e){var t=this,o=new FormData;o.append("file",e.target.files[0]),(0,d.default)({url:"/picture/uploadHeadPic",method:"post",data:o,headers:{"Content-Type":"multipart/form-data"}}).then(function(e){"success"===e.data&&(t.headOperate=!1)})}},components:{SearchBar:n.default,FootMenu:r.default}}},164:function(e,t,o){t=e.exports=o(4)(),t.push([e.id,".fade-enter-active[data-v-035b1f96],.fade-leave-active[data-v-035b1f96]{transition:opacity .5s}.fade-enter[data-v-035b1f96],.fade-leave-active[data-v-035b1f96]{opacity:0}.more[data-v-035b1f96]{background:#eeeef3}.more .operate[data-v-035b1f96]{height:50px;font-size:16px;color:#54585d;font-weight:600;border-bottom:1px solid #e7e7e7}.more .operate[data-v-035b1f96],.more .person[data-v-035b1f96]{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.more .person[data-v-035b1f96]{height:85px;border-bottom:2px solid #e7e7e7;background:#fff}.more .person .head[data-v-035b1f96]{-ms-flex:1.2;flex:1.2}.more .person .head img[data-v-035b1f96]{margin-left:15px;width:50px;height:50px;border-radius:1000px}.more .person .info[data-v-035b1f96]{-ms-flex:4;flex:4}.more .person .info span[data-v-035b1f96]{display:block}.more .person .info .name[data-v-035b1f96]{font-size:14px;color:#585858}.more .person .info .notice[data-v-035b1f96]{font-size:12px;color:#afafaf}.more .person .icon[data-v-035b1f96]{-ms-flex:1;flex:1;color:#afafaf;font-size:18px}.more .login-btn[data-v-035b1f96]{width:100%;height:95px;text-align:center;border-bottom:1px solid #e7e7e7;background:#fff}.more .login-btn div[data-v-035b1f96]{padding-top:20px;font-size:16px;font-weight:500}.more .login-btn button[data-v-035b1f96]{margin-top:10px;padding:4px 22px;background:#fff;border:1px solid #2da1fe;border-radius:5px;color:#2da1fe;font-size:13px}.more .mine[data-v-035b1f96]{margin-top:15px;background:#fff}.more .mine .my-operate[data-v-035b1f96]{height:43px;display:-ms-flexbox;display:flex;text-align:center;line-height:43px}.more .mine .my-operate a[data-v-035b1f96]{display:-ms-inline-flexbox;display:inline-flex;width:100%}.more .mine .my-operate .left-icon[data-v-035b1f96]{-ms-flex:1.2;flex:1.2;font-size:22px;color:#c3c3db}.more .mine .my-operate .title[data-v-035b1f96]{-ms-flex:4;flex:4;text-align:left;color:#585858;font-size:14px;border-bottom:1px solid #e7e7e7}.more .mine .my-operate .right-icon[data-v-035b1f96]{-ms-flex:1;flex:1;color:#afafaf;font-size:15px;border-bottom:1px solid #e7e7e7}.more .quit[data-v-035b1f96]{width:100%;height:45px;margin-top:15px;background:#fff;color:rgba(243,58,3,.9);text-align:center;line-height:45px;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7}.more #poster[data-v-035b1f96]{height:30px;margin:0;padding:0;opacity:1;position:absolute;bottom:100px;left:100px}.more .head-operate[data-v-035b1f96]{z-index:999;position:absolute;top:0;left:0;width:100%;background:rgba(38,38,38,.2);height:1000px;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center;-ms-flex-align:end;align-items:flex-end}.more .head-operate .menu-op[data-v-035b1f96]{z-index:999;width:96%;height:177px;margin-bottom:10px}.more .head-operate .menu-op .choose-menu[data-v-035b1f96]{width:100%;height:97px;border-radius:6px;background:#fff}.more .head-operate .menu-op .choose-menu div[data-v-035b1f96]{text-align:center}.more .head-operate .menu-op .choose-menu .label[data-v-035b1f96]{height:42px;line-height:42px;color:#afafaf;font-size:12px}.more .head-operate .menu-op .choose-menu .btn[data-v-035b1f96]{height:55px;line-height:55px;font-size:21px;font-weight:500;color:#2da1fe;border-top:1px solid #e7e7e7}.more .head-operate .menu-op .cancel[data-v-035b1f96]{width:100%;height:55px;line-height:55px;background:#fff;border-radius:5px;margin-top:10px;color:#2da1fe;font-size:21px;font-weight:500;text-align:center}","",{version:3,sources:["/./src/pages/more/more.vue"],names:[],mappings:"AACA,wEAAwE,sBAAsB,CAC7F,AACD,iEAAiE,SAAS,CACzE,AACD,uBAAuB,kBAAkB,CACxC,AACD,gCAA2C,YAAY,AAAsH,eAAe,cAAc,gBAAgB,+BAA+B,CACxP,AACD,+DAFgC,WAAW,AAAY,oBAAoB,aAAa,qBAAqB,uBAAuB,sBAAsB,kBAAmB,CAG5K,AADD,+BAA0C,YAAY,AAAsH,gCAAgC,eAAgB,CAC3N,AACD,qCAAqC,aAAa,QAAQ,CACzD,AACD,yCAAyC,iBAAiB,WAAW,YAAY,oBAAoB,CACpG,AACD,qCAAqC,WAAW,MAAM,CACrD,AACD,0CAA0C,aAAa,CACtD,AACD,2CAA2C,eAAe,aAAa,CACtE,AACD,6CAA6C,eAAe,aAAa,CACxE,AACD,qCAAqC,WAAW,OAAO,cAAc,cAAc,CAClF,AACD,kCAAkC,WAAW,YAAY,kBAAkB,gCAAgC,eAAgB,CAC1H,AACD,sCAAsC,iBAAiB,eAAe,eAAe,CACpF,AACD,yCAAyC,gBAAgB,iBAA0B,gBAAmB,yBAAyB,kBAAkB,cAAc,cAAc,CAC5K,AACD,6BAA6B,gBAAgB,eAAgB,CAC5D,AACD,yCAAyC,YAAY,oBAAoB,aAAa,kBAAkB,gBAAgB,CACvH,AACD,2CAA2C,2BAA2B,oBAAoB,UAAU,CACnG,AACD,oDAAoD,aAAa,SAAS,eAAe,aAAa,CACrG,AACD,gDAAgD,WAAW,OAAO,gBAAgB,cAAc,eAAe,+BAA+B,CAC7I,AACD,qDAAqD,WAAW,OAAO,cAAc,eAAe,+BAA+B,CAClI,AACD,6BAA6B,WAAW,YAAY,gBAAgB,gBAAmB,wBAAyB,kBAAkB,iBAAiB,6BAA6B,+BAA+B,CAC9M,AACD,+BAA+B,YAAY,SAAS,UAAU,UAAU,kBAAkB,aAAa,UAAU,CAChH,AACD,qCAAqC,YAAY,kBAAkB,MAAM,OAAO,WAAW,6BAA8B,cAAc,oBAAoB,aAAa,qBAAqB,iBAAiB,qBAAqB,uBAAuB,mBAAmB,oBAAoB,CAChS,AACD,8CAA8C,YAAY,UAAU,aAAa,kBAAkB,CAClG,AACD,2DAA2D,WAAW,YAAY,kBAAkB,eAAgB,CACnH,AACD,+DAA+D,iBAAiB,CAC/E,AACD,kEAAkE,YAAY,iBAAiB,cAAc,cAAc,CAC1H,AACD,gEAAgE,YAAY,iBAAiB,eAAe,gBAAgB,cAAc,4BAA4B,CACrK,AACD,sDAAsD,WAAW,YAAY,iBAAiB,gBAAiB,kBAAkB,gBAAgB,cAAc,eAAe,gBAAgB,iBAAiB,CAC9M",file:"more.vue",sourcesContent:["\n.fade-enter-active[data-v-035b1f96],.fade-leave-active[data-v-035b1f96]{transition:opacity .5s\n}\n.fade-enter[data-v-035b1f96],.fade-leave-active[data-v-035b1f96]{opacity:0\n}\n.more[data-v-035b1f96]{background:#EEEEF3\n}\n.more .operate[data-v-035b1f96]{width:100%;height:50px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:16px;color:#54585D;font-weight:600;border-bottom:1px solid #E7E7E7\n}\n.more .person[data-v-035b1f96]{width:100%;height:85px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-bottom:2px solid #E7E7E7;background:white\n}\n.more .person .head[data-v-035b1f96]{-ms-flex:1.2;flex:1.2\n}\n.more .person .head img[data-v-035b1f96]{margin-left:15px;width:50px;height:50px;border-radius:1000px\n}\n.more .person .info[data-v-035b1f96]{-ms-flex:4;flex:4\n}\n.more .person .info span[data-v-035b1f96]{display:block\n}\n.more .person .info .name[data-v-035b1f96]{font-size:14px;color:#585858\n}\n.more .person .info .notice[data-v-035b1f96]{font-size:12px;color:#AFAFAF\n}\n.more .person .icon[data-v-035b1f96]{-ms-flex:1;flex:1;color:#AFAFAF;font-size:18px\n}\n.more .login-btn[data-v-035b1f96]{width:100%;height:95px;text-align:center;border-bottom:1px solid #E7E7E7;background:white\n}\n.more .login-btn div[data-v-035b1f96]{padding-top:20px;font-size:16px;font-weight:500\n}\n.more .login-btn button[data-v-035b1f96]{margin-top:10px;padding:4px 22px 4px 22px;background:#ffffff;border:1px solid #2DA1FE;border-radius:5px;color:#2DA1FE;font-size:13px\n}\n.more .mine[data-v-035b1f96]{margin-top:15px;background:white\n}\n.more .mine .my-operate[data-v-035b1f96]{height:43px;display:-ms-flexbox;display:flex;text-align:center;line-height:43px\n}\n.more .mine .my-operate a[data-v-035b1f96]{display:-ms-inline-flexbox;display:inline-flex;width:100%\n}\n.more .mine .my-operate .left-icon[data-v-035b1f96]{-ms-flex:1.2;flex:1.2;font-size:22px;color:#C3C3DB\n}\n.more .mine .my-operate .title[data-v-035b1f96]{-ms-flex:4;flex:4;text-align:left;color:#585858;font-size:14px;border-bottom:1px solid #E7E7E7\n}\n.more .mine .my-operate .right-icon[data-v-035b1f96]{-ms-flex:1;flex:1;color:#AFAFAF;font-size:15px;border-bottom:1px solid #E7E7E7\n}\n.more .quit[data-v-035b1f96]{width:100%;height:45px;margin-top:15px;background:#ffffff;color:rgba(243,58,3,0.9);text-align:center;line-height:45px;border-top:1px solid #E7E7E7;border-bottom:1px solid #E7E7E7\n}\n.more #poster[data-v-035b1f96]{height:30px;margin:0;padding:0;opacity:2;position:absolute;bottom:100px;left:100px\n}\n.more .head-operate[data-v-035b1f96]{z-index:999;position:absolute;top:0;left:0;width:100%;background:rgba(38,38,38,0.2);height:1000px;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center;-ms-flex-align:end;align-items:flex-end\n}\n.more .head-operate .menu-op[data-v-035b1f96]{z-index:999;width:96%;height:177px;margin-bottom:10px\n}\n.more .head-operate .menu-op .choose-menu[data-v-035b1f96]{width:100%;height:97px;border-radius:6px;background:white\n}\n.more .head-operate .menu-op .choose-menu div[data-v-035b1f96]{text-align:center\n}\n.more .head-operate .menu-op .choose-menu .label[data-v-035b1f96]{height:42px;line-height:42px;color:#AFAFAF;font-size:12px\n}\n.more .head-operate .menu-op .choose-menu .btn[data-v-035b1f96]{height:55px;line-height:55px;font-size:21px;font-weight:500;color:#2DA1FE;border-top:1px solid #E7E7E7\n}\n.more .head-operate .menu-op .cancel[data-v-035b1f96]{width:100%;height:55px;line-height:55px;background:white;border-radius:5px;margin-top:10px;color:#2DA1FE;font-size:21px;font-weight:500;text-align:center\n}\n"],sourceRoot:"webpack://"}])},185:function(e,t,o){var a=o(164);"string"==typeof a&&(a=[[e.id,a,""]]);o(5)(a,{});a.locals&&(e.exports=a.locals)},212:function(e,t,o){e.exports=o.p+"static/img/yuyiwei_songhuiqiao.3190acf.jpg"},213:function(e,t,o){e.exports=o.p+"static/img/yuyiwei_乔儿.7c5bb89.jpg"},233:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"more"},[a("search-bar"),e._v(" "),a("div",{staticClass:"operate"},[e._v("更多")]),e._v(" "),e.login?a("div",[a("div",{staticClass:"person"},[a("div",{staticClass:"head",on:{click:e.openHeadOperate}},[e.imgExist?a("img",{attrs:{src:e.imgSrc,alt:"头像载入失败"}}):a("img",{attrs:{src:o(60)}})]),e._v(" "),a("div",{staticClass:"info"},[a("span",{staticClass:"name"},[e._v(e._s(e.account))]),e._v(" "),a("span",{staticClass:"notice"},[e._v("查看或编辑个人资料")])]),e._v(" "),a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-jiantou"}})])])]):a("div",[a("div",{staticClass:"login-btn"},[a("div",[e._v("登录知乎，体验更多功能")]),e._v(" "),a("button",{on:{click:e.goRegister}},[e._v("注册/登录")])])]),e._v(" "),a("div",{staticClass:"mine"},[e._l(e.list,function(t){return[a("div",{staticClass:"my-operate"},[a("router-link",{attrs:{to:t.href}},[a("span",{staticClass:"left-icon"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":t.icon}})])]),e._v(" "),a("span",{staticClass:"title"},[e._v(e._s(t.title))]),e._v(" "),a("span",{staticClass:"right-icon"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-jiantou"}})])])])],1)]})],2),e._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1),e._v(" "),a("div",{staticClass:"quit",on:{click:e.quit}},[e._v("\n    退出我的账号\n  ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.headOperate,expression:"headOperate"}],staticClass:"head-operate",style:{height:e.operateHeight+"px"}},[a("div",{staticClass:"menu-op"},[a("div",{staticClass:"choose-menu"},[a("div",{staticClass:"label"},[e._v("设置头像")]),e._v(" "),a("div",{staticClass:"btn",on:{click:e.chooseFile}},[e._v("上传头像")])]),e._v(" "),a("div",{staticClass:"cancel",on:{click:e.cancelHeadOperate}},[e._v("取消")])]),e._v(" "),a("div",[a("input",{attrs:{type:"file",id:"poster",name:"img",accept:"image/*"},on:{change:e.uploadImage}})])]),e._v(" "),a("foot-menu")],1)},staticRenderFns:[]}},261:function(e,t,o){function a(e){return o(i(e))}function i(e){return n[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var n={"./yuyiwei_songhuiqiao.jpg":212,"./yuyiwei_乔儿.jpg":213};a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=261}});
//# sourceMappingURL=7.92c96966d461a1011b2f.js.map