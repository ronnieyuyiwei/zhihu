webpackJsonp([0,6],[,function(t,e,r){"use strict";function n(t){return"[object Array]"===b.call(t)}function o(t){return"[object ArrayBuffer]"===b.call(t)}function a(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){var e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function i(t){return"string"==typeof t}function c(t){return"number"==typeof t}function u(t){return"undefined"==typeof t}function f(t){return null!==t&&"object"==typeof t}function d(t){return"[object Date]"===b.call(t)}function p(t){return"[object File]"===b.call(t)}function l(t){return"[object Blob]"===b.call(t)}function h(t){return"[object Function]"===b.call(t)}function g(t){return f(t)&&h(t.pipe)}function m(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function A(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function x(t,e){if(null!==t&&"undefined"!=typeof t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.call(null,t[a],a,t)}function w(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=w(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)x(arguments[r],t);return e}function C(t,e,r){return x(e,function(e,n){r&&"function"==typeof e?t[n]=y(e,r):t[n]=e}),t}var y=r(7),b=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:o,isFormData:a,isArrayBufferView:s,isString:i,isNumber:c,isObject:f,isUndefined:u,isDate:d,isFile:p,isBlob:l,isFunction:h,isStream:g,isURLSearchParams:m,isStandardBrowserEnv:v,forEach:x,merge:w,extend:C,trim:A}},function(t,e,r){(function(e){"use strict";function n(t,e){!a.isUndefined(t)&&a.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!=typeof XMLHttpRequest?t=r(3):"undefined"!=typeof e&&(t=r(3)),t}var a=r(1),s=r(23),i=/^\)\]\}',?\n/,c={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:o(),transformRequest:[function(t,e){return s(e,"Content-Type"),a.isFormData(t)||a.isArrayBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)?t:a.isArrayBufferView(t)?t.buffer:a.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):a.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(i,"");try{t=JSON.parse(t)}catch(t){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],function(t){u.headers[t]={}}),a.forEach(["post","put","patch"],function(t){u.headers[t]=a.merge(c)}),t.exports=u}).call(e,r(26))},function(t,e,r){"use strict";var n=r(1),o=r(15),a=r(18),s=r(24),i=r(22),c=r(6),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(17);t.exports=function(t){return new Promise(function(e,f){var d=t.data,p=t.headers;n.isFormData(d)&&delete p["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",g=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||i(t.url)||(l=new window.XDomainRequest,h="onload",g=!0,l.onprogress=function(){},l.ontimeout=function(){}),t.auth){var m=t.auth.username||"",A=t.auth.password||"";p.Authorization="Basic "+u(m+":"+A)}if(l.open(t.method.toUpperCase(),a(t.url,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,l[h]=function(){if(l&&(4===l.readyState||g)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?l.response:l.responseText,a={data:n,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:r,config:t,request:l};o(e,f,a),l=null}},l.onerror=function(){f(c("Network Error",t)),l=null},l.ontimeout=function(){f(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),l=null},n.isStandardBrowserEnv()){var v=r(20),x=(t.withCredentials||i(t.url))&&t.xsrfCookieName?v.read(t.xsrfCookieName):void 0;x&&(p[t.xsrfHeaderName]=x)}if("setRequestHeader"in l&&n.forEach(p,function(t,e){"undefined"==typeof d&&"content-type"===e.toLowerCase()?delete p[e]:l.setRequestHeader(e,t)}),t.withCredentials&&(l.withCredentials=!0),t.responseType)try{l.responseType=t.responseType}catch(t){if("json"!==l.responseType)throw t}"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){l&&(l.abort(),f(t),l=null)}),void 0===d&&(d=null),l.send(d)})}},function(t,e){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,r){"use strict";var n=r(14);t.exports=function(t,e,r,o){var a=new Error(t);return n(a,e,r,o)}},function(t,e){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},function(t,e,r){t.exports=r(9)},function(t,e,r){"use strict";function n(t){var e=new s(t),r=a(s.prototype.request,e);return o.extend(r,s.prototype,e),o.extend(r,e),r}var o=r(1),a=r(7),s=r(11),i=r(2),c=n(i);c.Axios=s,c.create=function(t){return n(o.merge(i,t))},c.Cancel=r(4),c.CancelToken=r(10),c.isCancel=r(5),c.all=function(t){return Promise.all(t)},c.spread=r(25),t.exports=c,t.exports.default=c},function(t,e,r){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r(4);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t,e=new n(function(e){t=e});return{token:e,cancel:t}},t.exports=n},function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=r(2),a=r(1),s=r(12),i=r(13),c=r(21),u=r(19);n.prototype.request=function(t){"string"==typeof t&&(t=a.merge({url:arguments[0]},arguments[1])),t=a.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!c(t.url)&&(t.url=u(t.baseURL,t.url));var e=[i,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},a.forEach(["delete","get","head"],function(t){n.prototype[t]=function(e,r){return this.request(a.merge(r||{},{method:t,url:e}))}}),a.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(a.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r(1);n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r(1),a=r(16),s=r(5),i=r(2);t.exports=function(t){n(t),t.headers=t.headers||{},t.data=a(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]});var e=t.adapter||i.adapter;return e(t).then(function(e){return n(t),e.data=a(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(n(t),e&&e.response&&(e.response.data=a(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e){"use strict";t.exports=function(t,e,r,n){return t.config=e,r&&(t.code=r),t.response=n,t}},function(t,e,r){"use strict";var n=r(6);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r)):t(r)}},function(t,e,r){"use strict";var n=r(1);t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},function(t,e){"use strict";function r(){this.message="String contains an invalid character"}function n(t){for(var e,n,a=String(t),s="",i=0,c=o;a.charAt(0|i)||(c="=",i%1);s+=c.charAt(63&e>>8-i%1*8)){if(n=a.charCodeAt(i+=.75),n>255)throw new r;e=e<<8|n}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=n},function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(1);t.exports=function(t,e,r){if(!e)return t;var a;if(r)a=r(e);else if(o.isURLSearchParams(e))a=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&"undefined"!=typeof t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))}))}),a=s.join("&")}return a&&(t+=(t.indexOf("?")===-1?"?":"&")+a),t}},function(t,e){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},function(t,e,r){"use strict";var n=r(1);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,a,s){var i=[];i.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(a)&&i.push("domain="+a),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,r){"use strict";var n=r(1);t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,r){"use strict";var n=r(1);t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},function(t,e,r){"use strict";var n=r(1);t.exports=function(t){var e,r,o,a={};return t?(n.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=n.trim(t.substr(0,o)).toLowerCase(),r=n.trim(t.substr(o+1)),e&&(a[e]=a[e]?a[e]+", "+r:r)}),a):a}},function(t,e){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function a(t){if(d===clearTimeout)return clearTimeout(t);if((d===n||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function s(){g&&l&&(g=!1,l.length?h=l.concat(h):m=-1,h.length&&i())}function i(){if(!g){var t=o(s);g=!0;for(var e=h.length;e;){for(l=h,h=[];++m<e;)l&&l[m].run();m=-1,e=h.length}l=null,g=!1,a(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var f,d,p=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(t){f=r}try{d="function"==typeof clearTimeout?clearTimeout:n}catch(t){d=n}}();var l,h=[],g=!1,m=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];h.push(new c(t,e)),1!==h.length||g||o(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(8),a=n(o);e.default={data:function(){return{account:"",password:"",password2:"",msg:"",captcha:"",pic:"",userCheck:!1,passwordCheck:!1,passwordEq:!1}},mounted:function(){this.getCaptcha()},computed:{validator:function(){var t=this.userCheck&&this.passwordCheck&&this.passwordEq;if(t)return!0}},methods:{checkUser:function(){var t=this;a.default.get("/register/getAccount",{params:{account:this.account}}).then(function(e){e.data.permission?(t.msg=e.data.message,t.userCheck=!0):(t.msg=e.data.message,t.userCheck=!1)}).catch(function(t){console.log(t)})},account_validate:function(){if(this.account.length>=4&&this.account.length<=10){this.msg="";var t=/^[\u4E00-\u9FA5A-Za-z0-9_]+$/;t.test(this.account)?this.checkUser():(this.userCheck=!1,this.msg="用户名只能包含中文、字母数字和下划线")}else this.userCheck=!1,this.msg="用户名长度必须在4-10位之间"},ps_validate:function(){if(this.password.length>=8&&this.password.length<=20){this.msg="";var t=/^[A-Za-z0-9]+$/;t.test(this.password)?(this.passwordCheck=!0,this.msg=""):(this.passwordCheck=!1,this.msg="密码只能包含字母和数字")}else this.passwordCheck=!1,this.msg="密码长度必须在8-20位之间"},equal_validate:function(){this.password2!==this.password?(this.passwordEq=!1,this.msg="两次输入的密码不一致"):(this.passwordEq=!0,this.msg="",this.account_validate())},register:function(){var t=this;a.default.get("/register/checkCaptcha",{params:{captcha:this.captcha}}).then(function(e){e.data.permission?a.default.post("/register/createAccount",{account:t.account,password:t.password}).then(function(e){t.msg=e.data}).catch(function(t){console.log(t)}):(t.msg=e.data.message,t.captcha="",t.getCaptcha())}),this.getCaptcha().catch(function(t){console.log(t)})},getCaptcha:function(){var t=this;a.default.get("/register/getCaptcha",function(t,e){t&&console.log(t)}).then(function(e){t.pic=e.data})}}}},,,,,function(t,e,r){e=t.exports=r(27)(),e.push([t.id,".register .close-btn[data-v-62fdd32a]{color:#c3c3db;font-size:23px;margin-top:10px;margin-left:10px}.register .title[data-v-62fdd32a]{margin-top:20px;color:#2da1fe;font-size:55px;text-align:center;letter-spacing:8px}.register .register-form[data-v-62fdd32a]{width:93%;margin:10px auto 0}.register .register-form .user-set label[data-v-62fdd32a]{display:block}.register .register-form .user-set input[data-v-62fdd32a]{padding:5px;height:35px;font-size:15px;letter-spacing:1px;width:98%;border:none;border-radius:0;border-bottom:1px solid #afafaf}.register .register-form .captcha[data-v-62fdd32a]{display:-ms-flexbox;display:flex}.register .register-form .captcha .captcha-input[data-v-62fdd32a]{-ms-flex:3;flex:3}.register .register-form .captcha .captcha-input input[data-v-62fdd32a]{padding:5px;height:35px;font-size:15px;letter-spacing:1px;width:98%;border:none;border-radius:0;border-bottom:1px solid #afafaf}.register .register-form .captcha .captcha-pic[data-v-62fdd32a]{-ms-flex:1;flex:1}.register .register-form .notice-msg[data-v-62fdd32a]{color:#ff4600}.register .register-form .submit[data-v-62fdd32a]{width:100%;margin-top:10px;text-align:center}.register .register-form .submit button[data-v-62fdd32a]{text-align:center;border:none;border-radius:5px;background:#2da1fe;width:90%;height:45px;color:#fff;font-size:16px;letter-spacing:3px}.register .register-form .submit .fake-btn[data-v-62fdd32a]{background:rgba(45,161,254,.5)}.register .go-login[data-v-62fdd32a]{margin-top:15px;text-align:center}","",{version:3,sources:["/./src/pages/register.vue"],names:[],mappings:"AACA,sCAAsC,cAAc,eAAe,gBAAgB,gBAAgB,CAClG,AACD,kCAAkC,gBAAgB,cAAc,eAAe,kBAAkB,kBAAkB,CAClH,AACD,0CAA0C,UAAU,kBAAuB,CAC1E,AACD,0DAA0D,aAAa,CACtE,AACD,0DAA0D,YAAY,YAAY,eAAe,mBAAmB,UAAU,YAAY,gBAAgB,+BAA+B,CACxL,AACD,mDAAmD,oBAAoB,YAAY,CAClF,AACD,kEAAkE,WAAW,MAAM,CAClF,AACD,wEAAwE,YAAY,YAAY,eAAe,mBAAmB,UAAU,YAAY,gBAAgB,+BAA+B,CACtM,AACD,gEAAgE,WAAW,MAAM,CAChF,AACD,sDAAsD,aAAa,CAClE,AACD,kDAAkD,WAAW,gBAAgB,iBAAiB,CAC7F,AACD,yDAAyD,kBAAkB,YAAY,kBAAkB,mBAAmB,UAAU,YAAY,WAAc,eAAe,kBAAkB,CAChM,AACD,4DAA4D,8BAA+B,CAC1F,AACD,qCAAqC,gBAAgB,iBAAiB,CACrE",file:"register.vue",sourcesContent:["\n.register .close-btn[data-v-62fdd32a]{color:#C3C3DB;font-size:23px;margin-top:10px;margin-left:10px\n}\n.register .title[data-v-62fdd32a]{margin-top:20px;color:#2DA1FE;font-size:55px;text-align:center;letter-spacing:8px\n}\n.register .register-form[data-v-62fdd32a]{width:93%;margin:10px auto 0 auto\n}\n.register .register-form .user-set label[data-v-62fdd32a]{display:block\n}\n.register .register-form .user-set input[data-v-62fdd32a]{padding:5px;height:35px;font-size:15px;letter-spacing:1px;width:98%;border:none;border-radius:0;border-bottom:1px solid #AFAFAF\n}\n.register .register-form .captcha[data-v-62fdd32a]{display:-ms-flexbox;display:flex\n}\n.register .register-form .captcha .captcha-input[data-v-62fdd32a]{-ms-flex:3;flex:3\n}\n.register .register-form .captcha .captcha-input input[data-v-62fdd32a]{padding:5px;height:35px;font-size:15px;letter-spacing:1px;width:98%;border:none;border-radius:0;border-bottom:1px solid #AFAFAF\n}\n.register .register-form .captcha .captcha-pic[data-v-62fdd32a]{-ms-flex:1;flex:1\n}\n.register .register-form .notice-msg[data-v-62fdd32a]{color:#FF4600\n}\n.register .register-form .submit[data-v-62fdd32a]{width:100%;margin-top:10px;text-align:center\n}\n.register .register-form .submit button[data-v-62fdd32a]{text-align:center;border:none;border-radius:5px;background:#2DA1FE;width:90%;height:45px;color:#ffffff;font-size:16px;letter-spacing:3px\n}\n.register .register-form .submit .fake-btn[data-v-62fdd32a]{background:rgba(45,161,254,0.5)\n}\n.register .go-login[data-v-62fdd32a]{margin-top:15px;text-align:center\n}\n"],sourceRoot:"webpack://"}])},,,,,,,,,function(t,e,r){var n=r(52);"string"==typeof n&&(n=[[t.id,n,""]]);r(28)(n,{});n.locals&&(t.exports=n.locals)},,,,,,,,function(t,e,r){var n,o;r(61),n=r(47);var a=r(77);o=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(o=n=n.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-62fdd32a",t.exports=n},,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"register"},[r("div",{staticClass:"close-btn"},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-cha"}})])]),t._v(" "),r("div",{staticClass:"title"},[t._v("知乎")]),t._v(" "),r("div",{staticClass:"register-form"},[r("div",{staticClass:"user-set"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.account,expression:"account",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t._s(t.account)},on:{input:[function(e){e.target.composing||(t.account=e.target.value.trim())},t.account_validate],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"密码（8-15位）"},domProps:{value:t._s(t.password)},on:{input:[function(e){e.target.composing||(t.password=e.target.value.trim())},t.ps_validate],blur:function(e){t.$forceUpdate()}}})]),t._v(" "),r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password2,expression:"password2",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"再次输入密码"},domProps:{value:t._s(t.password2)},on:{change:t.equal_validate,input:function(e){e.target.composing||(t.password2=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),r("div",{staticClass:"captcha"},[r("div",{staticClass:"captcha-input"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{type:"text",placeholder:"验证码（不区分大小写）"},domProps:{value:t._s(t.captcha)},on:{input:function(e){e.target.composing||(t.captcha=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"captcha-pic",domProps:{innerHTML:t._s(t.pic)},on:{click:t.getCaptcha}})]),t._v(" "),r("div",{staticClass:"notice-msg"},[t._v(t._s(t.msg))]),t._v(" "),r("div",{staticClass:"submit"},[this.validator?r("div",[r("button",{staticClass:"btn true-btn",attrs:{type:"submit"},on:{click:t.register}},[t._v("注册")])]):r("div",[r("button",{staticClass:"btn fake-btn"},[t._v("注册")])]),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"go-login"},[r("a",{attrs:{href:"#/login"}},[t._v("已有知乎账号？ 去登录")])])}]}}]);
//# sourceMappingURL=0.7b94b3548e21705753d1.js.map