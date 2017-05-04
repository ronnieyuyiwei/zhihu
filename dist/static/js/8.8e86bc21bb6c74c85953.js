webpackJsonp([8,13],{98:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(4),i=s(r);e.default={data:function(){return{account:"",password:"",password2:"",msg:"",captcha:"",pic:"",userCheck:!1,passwordCheck:!1,passwordEq:!1}},mounted:function(){this.getCaptcha()},computed:{validator:function(){var t=this.userCheck&&this.passwordCheck&&this.passwordEq;if(t)return!0}},methods:{checkUser:function(){var t=this;i.default.get("/register/getAccount",{params:{account:this.account}}).then(function(e){e.data.permission?(t.msg=e.data.message,t.userCheck=!0):(t.msg=e.data.message,t.userCheck=!1)}).catch(function(t){console.log(t)})},account_validate:function(){if(this.account.length>=4&&this.account.length<=10){this.msg="";var t=/^[\u4E00-\u9FA5A-Za-z0-9_]+$/;t.test(this.account)?this.checkUser():(this.userCheck=!1,this.msg="用户名只能包含中文、字母数字和下划线")}else this.userCheck=!1,this.msg="用户名长度必须在4-10位之间"},ps_validate:function(){if(this.password.length>=8&&this.password.length<=20){this.msg="";var t=/^[A-Za-z0-9]+$/;t.test(this.password)?(this.passwordCheck=!0,this.msg=""):(this.passwordCheck=!1,this.msg="密码只能包含字母和数字")}else this.passwordCheck=!1,this.msg="密码长度必须在8-20位之间"},equal_validate:function(){this.password2!==this.password?(this.passwordEq=!1,this.msg="两次输入的密码不一致"):(this.passwordEq=!0,this.msg="",this.account_validate())},register:function(){var t=this;i.default.get("/register/checkCaptcha",{params:{captcha:this.captcha}}).then(function(e){e.data.permission?i.default.post("/register/createAccount",{account:t.account,password:t.password}).then(function(e){t.msg=e.data}).catch(function(t){console.log(t)}):(t.msg=e.data.message,t.captcha="",t.getCaptcha())}),this.getCaptcha().catch(function(t){console.log(t)})},getCaptcha:function(){var t=this;i.default.get("/register/getCaptcha",function(t,e){t&&console.log(t)}).then(function(e){t.pic=e.data})}}}},146:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,".register .close-btn[data-v-6bdc36e3]{color:#c3c3db;font-size:23px;margin-top:10px;margin-left:10px}.register .title[data-v-6bdc36e3]{margin-top:20px;color:#2da1fe;font-size:55px;text-align:center;letter-spacing:8px}.register .register-form[data-v-6bdc36e3]{width:93%;margin:10px auto 0}.register .register-form .user-set label[data-v-6bdc36e3]{display:block}.register .register-form .user-set input[data-v-6bdc36e3]{padding:5px;height:35px;font-size:15px;letter-spacing:1px;width:98%;border:none;border-radius:0;border-bottom:1px solid #afafaf}.register .register-form .captcha[data-v-6bdc36e3]{display:-ms-flexbox;display:flex}.register .register-form .captcha .captcha-input[data-v-6bdc36e3]{-ms-flex:3;flex:3}.register .register-form .captcha .captcha-input input[data-v-6bdc36e3]{padding:5px;height:35px;font-size:15px;letter-spacing:1px;width:98%;border:none;border-radius:0;border-bottom:1px solid #afafaf}.register .register-form .captcha .captcha-pic[data-v-6bdc36e3]{-ms-flex:1;flex:1}.register .register-form .notice-msg[data-v-6bdc36e3]{color:#ff4600}.register .register-form .submit[data-v-6bdc36e3]{width:100%;margin-top:10px;text-align:center}.register .register-form .submit button[data-v-6bdc36e3]{text-align:center;border:none;border-radius:5px;background:#2da1fe;width:90%;height:45px;color:#fff;font-size:16px;letter-spacing:3px}.register .register-form .submit .fake-btn[data-v-6bdc36e3]{background:rgba(45,161,254,.5)}.register .go-login[data-v-6bdc36e3]{margin-top:15px;text-align:center}","",{version:3,sources:["/./src/pages/login/register.vue"],names:[],mappings:"AACA,sCAAsC,cAAc,eAAe,gBAAgB,gBAAgB,CAClG,AACD,kCAAkC,gBAAgB,cAAc,eAAe,kBAAkB,kBAAkB,CAClH,AACD,0CAA0C,UAAU,kBAAuB,CAC1E,AACD,0DAA0D,aAAa,CACtE,AACD,0DAA0D,YAAY,YAAY,eAAe,mBAAmB,UAAU,YAAY,gBAAgB,+BAA+B,CACxL,AACD,mDAAmD,oBAAoB,YAAY,CAClF,AACD,kEAAkE,WAAW,MAAM,CAClF,AACD,wEAAwE,YAAY,YAAY,eAAe,mBAAmB,UAAU,YAAY,gBAAgB,+BAA+B,CACtM,AACD,gEAAgE,WAAW,MAAM,CAChF,AACD,sDAAsD,aAAa,CAClE,AACD,kDAAkD,WAAW,gBAAgB,iBAAiB,CAC7F,AACD,yDAAyD,kBAAkB,YAAY,kBAAkB,mBAAmB,UAAU,YAAY,WAAc,eAAe,kBAAkB,CAChM,AACD,4DAA4D,8BAA+B,CAC1F,AACD,qCAAqC,gBAAgB,iBAAiB,CACrE",file:"register.vue",sourcesContent:["\n.register .close-btn[data-v-6bdc36e3]{color:#C3C3DB;font-size:23px;margin-top:10px;margin-left:10px\n}\n.register .title[data-v-6bdc36e3]{margin-top:20px;color:#2DA1FE;font-size:55px;text-align:center;letter-spacing:8px\n}\n.register .register-form[data-v-6bdc36e3]{width:93%;margin:10px auto 0 auto\n}\n.register .register-form .user-set label[data-v-6bdc36e3]{display:block\n}\n.register .register-form .user-set input[data-v-6bdc36e3]{padding:5px;height:35px;font-size:15px;letter-spacing:1px;width:98%;border:none;border-radius:0;border-bottom:1px solid #AFAFAF\n}\n.register .register-form .captcha[data-v-6bdc36e3]{display:-ms-flexbox;display:flex\n}\n.register .register-form .captcha .captcha-input[data-v-6bdc36e3]{-ms-flex:3;flex:3\n}\n.register .register-form .captcha .captcha-input input[data-v-6bdc36e3]{padding:5px;height:35px;font-size:15px;letter-spacing:1px;width:98%;border:none;border-radius:0;border-bottom:1px solid #AFAFAF\n}\n.register .register-form .captcha .captcha-pic[data-v-6bdc36e3]{-ms-flex:1;flex:1\n}\n.register .register-form .notice-msg[data-v-6bdc36e3]{color:#FF4600\n}\n.register .register-form .submit[data-v-6bdc36e3]{width:100%;margin-top:10px;text-align:center\n}\n.register .register-form .submit button[data-v-6bdc36e3]{text-align:center;border:none;border-radius:5px;background:#2DA1FE;width:90%;height:45px;color:#ffffff;font-size:16px;letter-spacing:3px\n}\n.register .register-form .submit .fake-btn[data-v-6bdc36e3]{background:rgba(45,161,254,0.5)\n}\n.register .go-login[data-v-6bdc36e3]{margin-top:15px;text-align:center\n}\n"],sourceRoot:"webpack://"}])},164:function(t,e,a){var s=a(146);"string"==typeof s&&(s=[[t.id,s,""]]);a(2)(s,{});s.locals&&(t.exports=s.locals)},187:function(t,e,a){var s,r;a(164),s=a(98);var i=a(200);r=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(r=s=s.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-6bdc36e3",t.exports=s},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register"},[a("div",{staticClass:"close-btn"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-cha"}})])]),t._v(" "),a("div",{staticClass:"title"},[t._v("知乎")]),t._v(" "),a("div",{staticClass:"register-form"},[a("div",{staticClass:"user-set"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.account,expression:"account",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t._s(t.account)},on:{input:[function(e){e.target.composing||(t.account=e.target.value.trim())},t.account_validate],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"密码（8-15位）"},domProps:{value:t._s(t.password)},on:{input:[function(e){e.target.composing||(t.password=e.target.value.trim())},t.ps_validate],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password2,expression:"password2",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"再次输入密码"},domProps:{value:t._s(t.password2)},on:{change:t.equal_validate,input:function(e){e.target.composing||(t.password2=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),a("div",{staticClass:"captcha"},[a("div",{staticClass:"captcha-input"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{type:"text",placeholder:"验证码（不区分大小写）"},domProps:{value:t._s(t.captcha)},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"captcha-pic",domProps:{innerHTML:t._s(t.pic)},on:{click:t.getCaptcha}})]),t._v(" "),a("div",{staticClass:"notice-msg"},[t._v(t._s(t.msg))]),t._v(" "),a("div",{staticClass:"submit"},[this.validator?a("div",[a("button",{staticClass:"btn true-btn",attrs:{type:"submit"},on:{click:t.register}},[t._v("注册")])]):a("div",[a("button",{staticClass:"btn fake-btn"},[t._v("注册")])]),t._v(" "),a("div",{staticClass:"go-login"},[a("router-link",{attrs:{to:"/login"}},[t._v("已有知乎账号？ 去登录")])],1)])])])},staticRenderFns:[]}}});
//# sourceMappingURL=8.8e86bc21bb6c74c85953.js.map