webpackJsonp([2,13],{1:function(e,t,n){"use strict";function a(e){return"[object Array]"===y.call(e)}function r(e){return"[object ArrayBuffer]"===y.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function o(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function c(e){return"number"==typeof e}function u(e){return"undefined"==typeof e}function d(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===y.call(e)}function f(e){return"[object File]"===y.call(e)}function A(e){return"[object Blob]"===y.call(e)}function p(e){return"[object Function]"===y.call(e)}function h(e){return d(e)&&p(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function C(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||a(e)||(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function g(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=g(t[n],e):t[n]=e}for(var t={},n=0,a=arguments.length;n<a;n++)C(arguments[n],e);return t}function x(e,t,n){return C(t,function(t,a){n&&"function"==typeof t?e[a]=w(t,n):e[a]=t}),e}var w=n(7),y=Object.prototype.toString;e.exports={isArray:a,isArrayBuffer:r,isFormData:i,isArrayBufferView:o,isString:s,isNumber:c,isObject:d,isUndefined:u,isDate:l,isFile:f,isBlob:A,isFunction:p,isStream:h,isURLSearchParams:m,isStandardBrowserEnv:b,forEach:C,merge:g,extend:x,trim:v}},2:function(e,t,n){(function(t){"use strict";function a(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function r(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(3):"undefined"!=typeof t&&(e=n(3)),e}var i=n(1),o=n(25),s=/^\)\]\}',?\n/,c={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:r(),transformRequest:[function(e,t){return o(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(s,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){u.headers[e]={}}),i.forEach(["post","put","patch"],function(e){u.headers[e]=i.merge(c)}),e.exports=u}).call(t,n(28))},3:function(e,t,n){"use strict";var a=n(1),r=n(17),i=n(20),o=n(26),s=n(24),c=n(6),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(19);e.exports=function(e){return new Promise(function(t,d){var l=e.data,f=e.headers;a.isFormData(l)&&delete f["Content-Type"];var A=new XMLHttpRequest,p="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in A||s(e.url)||(A=new window.XDomainRequest,p="onload",h=!0,A.onprogress=function(){},A.ontimeout=function(){}),e.auth){var m=e.auth.username||"",v=e.auth.password||"";f.Authorization="Basic "+u(m+":"+v)}if(A.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),A.timeout=e.timeout,A[p]=function(){if(A&&(4===A.readyState||h)&&(0!==A.status||A.responseURL&&0===A.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in A?o(A.getAllResponseHeaders()):null,a=e.responseType&&"text"!==e.responseType?A.response:A.responseText,i={data:a,status:1223===A.status?204:A.status,statusText:1223===A.status?"No Content":A.statusText,headers:n,config:e,request:A};r(t,d,i),A=null}},A.onerror=function(){d(c("Network Error",e)),A=null},A.ontimeout=function(){d(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),A=null},a.isStandardBrowserEnv()){var b=n(22),C=(e.withCredentials||s(e.url))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;C&&(f[e.xsrfHeaderName]=C)}if("setRequestHeader"in A&&a.forEach(f,function(e,t){"undefined"==typeof l&&"content-type"===t.toLowerCase()?delete f[t]:A.setRequestHeader(t,e)}),e.withCredentials&&(A.withCredentials=!0),e.responseType)try{A.responseType=e.responseType}catch(e){if("json"!==A.responseType)throw e}"function"==typeof e.onDownloadProgress&&A.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&A.upload&&A.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){A&&(A.abort(),d(e),A=null)}),void 0===l&&(l=null),A.send(l)})}},4:function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},5:function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},6:function(e,t,n){"use strict";var a=n(16);e.exports=function(e,t,n,r){var i=new Error(e);return a(i,t,n,r)}},7:function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}}},10:function(e,t,n){e.exports=n(11)},11:function(e,t,n){"use strict";function a(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var r=n(1),i=n(7),o=n(13),s=n(2),c=a(s);c.Axios=o,c.create=function(e){return a(r.merge(s,e))},c.Cancel=n(4),c.CancelToken=n(12),c.isCancel=n(5),c.all=function(e){return Promise.all(e)},c.spread=n(27),e.exports=c,e.exports.default=c},12:function(e,t,n){"use strict";function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}var r=n(4);a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e,t=new a(function(t){e=t});return{token:t,cancel:e}},e.exports=a},13:function(e,t,n){"use strict";function a(e){this.defaults=e,this.interceptors={request:new o,response:new o}}var r=n(2),i=n(1),o=n(14),s=n(15),c=n(23),u=n(21);a.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(r,this.defaults,{method:"get"},e),e.baseURL&&!c(e.url)&&(e.url=u(e.baseURL,e.url));var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head"],function(e){a.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,n,a){return this.request(i.merge(a||{},{method:e,url:t,data:n}))}}),e.exports=a},14:function(e,t,n){"use strict";function a(){this.handlers=[]}var r=n(1);a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=a},15:function(e,t,n){"use strict";function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=n(1),i=n(18),o=n(5),s=n(2);e.exports=function(e){a(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||s.adapter;return t(e).then(function(t){return a(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(a(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},16:function(e,t){"use strict";e.exports=function(e,t,n,a){return e.config=t,n&&(e.code=n),e.response=a,e}},17:function(e,t,n){"use strict";var a=n(6);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(a("Request failed with status code "+n.status,n.config,null,n)):e(n)}},18:function(e,t,n){"use strict";var a=n(1);e.exports=function(e,t,n){return a.forEach(n,function(n){e=n(e,t)}),e}},19:function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function a(e){for(var t,a,i=String(e),o="",s=0,c=r;i.charAt(0|s)||(c="=",s%1);o+=c.charAt(63&t>>8-s%1*8)){if(a=i.charCodeAt(s+=.75),a>255)throw new n;t=t<<8|a}return o}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=a},20:function(e,t,n){"use strict";function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=n(1);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var o=[];r.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(a(t)+"="+a(e))}))}),i=o.join("&")}return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}},21:function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},22:function(e,t,n){"use strict";var a=n(1);e.exports=a.isStandardBrowserEnv()?function(){return{write:function(e,t,n,r,i,o){var s=[];s.push(e+"="+encodeURIComponent(t)),a.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),a.isString(r)&&s.push("path="+r),a.isString(i)&&s.push("domain="+i),o===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},23:function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},24:function(e,t,n){"use strict";var a=n(1);e.exports=a.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return t=e(window.location.href),function(n){var r=a.isString(n)?e(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},25:function(e,t,n){"use strict";var a=n(1);e.exports=function(e,t){a.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})}},26:function(e,t,n){"use strict";var a=n(1);e.exports=function(e){var t,n,r,i={};return e?(a.forEach(e.split("\n"),function(e){r=e.indexOf(":"),t=a.trim(e.substr(0,r)).toLowerCase(),n=a.trim(e.substr(r+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},27:function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},28:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function r(e){if(d===setTimeout)return setTimeout(e,0);if((d===n||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===a||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function o(){h&&A&&(h=!1,A.length?p=A.concat(p):m=-1,p.length&&s())}function s(){if(!h){var e=r(o);h=!0;for(var t=p.length;t;){for(A=p,p=[];++m<t;)A&&A[m].run();m=-1,t=p.length}A=null,h=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var d,l,f=e.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:n}catch(e){d=n}try{l="function"==typeof clearTimeout?clearTimeout:a}catch(e){l=a}}();var A,p=[],h=!1,m=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new c(e,t)),1!==p.length||h||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},43:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"loading"}},57:function(e,t,n){t=e.exports=n(8)(),t.push([e.id,".spinner[data-v-162703cb]{width:22px;height:22px;position:relative}.container1>div[data-v-162703cb],.container2>div[data-v-162703cb],.container3>div[data-v-162703cb]{width:6px;height:6px;background-color:#333;border-radius:100%;position:absolute;animation:bouncedelay 1.2s infinite ease-in-out;animation-fill-mode:both}.spinner .spinner-container[data-v-162703cb]{position:absolute;width:100%;height:100%}.container2[data-v-162703cb]{transform:rotate(45deg)}.container3[data-v-162703cb]{transform:rotate(90deg)}.circle1[data-v-162703cb]{top:0;left:0}.circle2[data-v-162703cb]{top:0;right:0}.circle3[data-v-162703cb]{right:0;bottom:0}.circle4[data-v-162703cb]{left:0;bottom:0}.container2 .circle1[data-v-162703cb]{animation-delay:-1.1s}.container3 .circle1[data-v-162703cb]{animation-delay:-1s}.container1 .circle2[data-v-162703cb]{animation-delay:-.9s}.container2 .circle2[data-v-162703cb]{animation-delay:-.8s}.container3 .circle2[data-v-162703cb]{animation-delay:-.7s}.container1 .circle3[data-v-162703cb]{animation-delay:-.6s}.container2 .circle3[data-v-162703cb]{animation-delay:-.5s}.container3 .circle3[data-v-162703cb]{animation-delay:-.4s}.container1 .circle4[data-v-162703cb]{animation-delay:-.3s}.container2 .circle4[data-v-162703cb]{animation-delay:-.2s}.container3 .circle4[data-v-162703cb]{animation-delay:-.1s}@keyframes bouncedelay{0%,80%,to{transform:scale(0);-webkit-transform:scale(0)}40%{transform:scale(1);-webkit-transform:scale(1)}}","",{version:3,sources:["/./src/components/loading.vue"],names:[],mappings:"AACA,0BAA0B,WAAW,YAAY,iBAAiB,CACjE,AACD,mGAAmG,UAAU,WAAW,sBAAsB,mBAAmB,kBAAkB,gDAAgD,wBAAwB,CAC1P,AACD,6CAA6C,kBAAkB,WAAW,WAAW,CACpF,AACD,6BAA6B,uBAAwB,CACpD,AACD,6BAA6B,uBAAwB,CACpD,AACD,0BAA0B,MAAM,MAAM,CACrC,AACD,0BAA0B,MAAM,OAAO,CACtC,AACD,0BAA0B,QAAQ,QAAQ,CACzC,AACD,0BAA0B,OAAO,QAAQ,CACxC,AACD,sCAAsC,qBAAqB,CAC1D,AACD,sCAAsC,mBAAqB,CAC1D,AACD,sCAAsC,oBAAqB,CAC1D,AACD,sCAAsC,oBAAqB,CAC1D,AACD,sCAAsC,oBAAqB,CAC1D,AACD,sCAAsC,oBAAqB,CAC1D,AACD,sCAAsC,oBAAqB,CAC1D,AACD,sCAAsC,oBAAqB,CAC1D,AACD,sCAAsC,oBAAqB,CAC1D,AACD,sCAAsC,oBAAqB,CAC1D,AACD,sCAAsC,oBAAqB,CAC1D,AACD,uBACA,UAAY,mBAAmB,0BAA0B,CACxD,AACD,IAAI,mBAAmB,0BAA0B,CAChD,CACA",file:"loading.vue",sourcesContent:["\n.spinner[data-v-162703cb]{width:22px;height:22px;position:relative\n}\n.container1>div[data-v-162703cb],.container2>div[data-v-162703cb],.container3>div[data-v-162703cb]{width:6px;height:6px;background-color:#333;border-radius:100%;position:absolute;animation:bouncedelay 1.2s infinite ease-in-out;animation-fill-mode:both\n}\n.spinner .spinner-container[data-v-162703cb]{position:absolute;width:100%;height:100%\n}\n.container2[data-v-162703cb]{transform:rotateZ(45deg)\n}\n.container3[data-v-162703cb]{transform:rotateZ(90deg)\n}\n.circle1[data-v-162703cb]{top:0;left:0\n}\n.circle2[data-v-162703cb]{top:0;right:0\n}\n.circle3[data-v-162703cb]{right:0;bottom:0\n}\n.circle4[data-v-162703cb]{left:0;bottom:0\n}\n.container2 .circle1[data-v-162703cb]{animation-delay:-1.1s\n}\n.container3 .circle1[data-v-162703cb]{animation-delay:-1.0s\n}\n.container1 .circle2[data-v-162703cb]{animation-delay:-0.9s\n}\n.container2 .circle2[data-v-162703cb]{animation-delay:-0.8s\n}\n.container3 .circle2[data-v-162703cb]{animation-delay:-0.7s\n}\n.container1 .circle3[data-v-162703cb]{animation-delay:-0.6s\n}\n.container2 .circle3[data-v-162703cb]{animation-delay:-0.5s\n}\n.container3 .circle3[data-v-162703cb]{animation-delay:-0.4s\n}\n.container1 .circle4[data-v-162703cb]{animation-delay:-0.3s\n}\n.container2 .circle4[data-v-162703cb]{animation-delay:-0.2s\n}\n.container3 .circle4[data-v-162703cb]{animation-delay:-0.1s\n}\n@keyframes bouncedelay{\n0%,80%,100%{transform:scale(0);-webkit-transform:scale(0)\n}\n40%{transform:scale(1);-webkit-transform:scale(1)\n}\n}\n"],sourceRoot:"webpack://"}])},58:function(e,t,n){var a=n(57);"string"==typeof a&&(a=[[e.id,a,""]]);n(9)(a,{});a.locals&&(e.exports=a.locals)},61:function(e,t,n){var a,r;n(58),a=n(43);var i=n(63);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-162703cb",e.exports=a},63:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"spinner-container container1"},[n("div",{staticClass:"circle1"}),e._v(" "),n("div",{staticClass:"circle2"}),e._v(" "),n("div",{staticClass:"circle3"}),e._v(" "),n("div",{staticClass:"circle4"})]),e._v(" "),n("div",{staticClass:"spinner-container container2"},[n("div",{staticClass:"circle1"}),e._v(" "),n("div",{staticClass:"circle2"}),e._v(" "),n("div",{staticClass:"circle3"}),e._v(" "),n("div",{staticClass:"circle4"})]),e._v(" "),n("div",{staticClass:"spinner-container container3"},[n("div",{staticClass:"circle1"}),e._v(" "),n("div",{staticClass:"circle2"}),e._v(" "),n("div",{staticClass:"circle3"}),e._v(" "),n("div",{staticClass:"circle4"})])])}]}},88:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"success"}},89:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),i=a(r),o=n(61),s=a(o),c=n(175),u=a(c);t.default={data:function(){return{account:"",answer:"",flag:!1,loading_gif:!1,success:!1,loading:!1}},props:["qid"],created:function(){this.checkLogin()},components:{Loading:s.default,Success:u.default},methods:{checkLogin:function(){var e=this;i.default.get("/login/checkLogin").then(function(t){t.data.login&&(e.account=t.data.account)})},checkWords:function(){0!==this.answer.length?this.flag=!0:this.flag=!1},addAnswer:function(){var e=this;this.loading_gif=!0,this.loading=!0,i.default.post("/answer/addAnswer",{qid:this.qid,responder:this.account,content:this.answer}).then(function(t){"ok"===t.data&&(setTimeout(function(){e.loading=!1,e.success=!0},1e3),setTimeout(function(){e.success=!1,e.loading_gif=!1,e.$router.go(-1)},2e3))}).catch(function(e){e&&console.log(e)})}}}},138:function(e,t,n){t=e.exports=n(8)(),t.push([e.id,".add-answer[data-v-4b736baa]{width:100%;background:#fff;position:absolute;top:0;left:0}.add-answer .title-bar[data-v-4b736baa]{width:100%;height:45px;margin-top:5px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;text-align:center;line-height:45px;border-bottom:1px solid #e7e7e7}.add-answer .title-bar span[data-v-4b736baa]{color:#0283fe;width:60px;height:40px;line-height:40px;font-size:16px;font-weight:700;display:inline-block}.add-answer .title-bar label[data-v-4b736baa]{font-size:16px;font-weight:500}.add-answer .title-bar span.cancel[data-v-4b736baa]{float:left}.add-answer .title-bar .fake[data-v-4b736baa]{color:rgba(2,131,254,.3)}.add-answer .input[data-v-4b736baa]{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.add-answer .input textarea[data-v-4b736baa]{width:96%;min-height:400px;border:none;font-size:15px;padding-top:10px;padding-left:5px;margin:0 auto}.add-answer .loading[data-v-4b736baa]{position:absolute;top:0;left:0;width:100%;min-height:600px;background:hsla(0,0%,59%,.6);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.add-answer .loading .loading-gif[data-v-4b736baa]{margin-top:52%;width:70px;height:70px;background:#f9f9f1;border:1px solid #e7e7e7;border-radius:5px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}","",{version:3,sources:["/./src/pages/answer/add-answer.vue"],names:[],mappings:"AACA,6BAA6B,WAAW,gBAAiB,kBAAkB,MAAM,MAAM,CACtF,AACD,wCAAwC,WAAW,YAAY,eAAe,oBAAoB,aAAa,sBAAsB,8BAA8B,kBAAkB,iBAAiB,+BAA+B,CACpO,AACD,6CAA6C,cAAc,WAAW,YAAY,iBAAiB,eAAe,gBAAgB,oBAAoB,CACrJ,AACD,8CAA8C,eAAe,eAAe,CAC3E,AACD,oDAAoD,UAAU,CAC7D,AACD,8CAA8C,wBAAyB,CACtE,AACD,oCAAoC,WAAW,oBAAoB,aAAa,qBAAqB,sBAAsB,CAC1H,AACD,6CAA6C,UAAU,iBAAiB,YAAY,eAAe,iBAAiB,iBAAiB,aAAa,CACjJ,AACD,sCAAsC,kBAAkB,MAAM,OAAO,WAAW,iBAAiB,6BAAiC,oBAAoB,aAAa,qBAAqB,sBAAsB,CAC7M,AACD,mDAAmD,eAAe,WAAW,YAAY,mBAAmB,yBAAyB,kBAAkB,oBAAoB,aAAa,qBAAqB,uBAAuB,sBAAsB,kBAAkB,CAC3Q",file:"add-answer.vue",sourcesContent:["\n.add-answer[data-v-4b736baa]{width:100%;background:white;position:absolute;top:0;left:0\n}\n.add-answer .title-bar[data-v-4b736baa]{width:100%;height:45px;margin-top:5px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;text-align:center;line-height:45px;border-bottom:1px solid #E7E7E7\n}\n.add-answer .title-bar span[data-v-4b736baa]{color:#0283FE;width:60px;height:40px;line-height:40px;font-size:16px;font-weight:700;display:inline-block\n}\n.add-answer .title-bar label[data-v-4b736baa]{font-size:16px;font-weight:500\n}\n.add-answer .title-bar span.cancel[data-v-4b736baa]{float:left\n}\n.add-answer .title-bar .fake[data-v-4b736baa]{color:rgba(2,131,254,0.3)\n}\n.add-answer .input[data-v-4b736baa]{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center\n}\n.add-answer .input textarea[data-v-4b736baa]{width:96%;min-height:400px;border:none;font-size:15px;padding-top:10px;padding-left:5px;margin:0 auto\n}\n.add-answer .loading[data-v-4b736baa]{position:absolute;top:0;left:0;width:100%;min-height:600px;background:rgba(151,151,151,0.6);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center\n}\n.add-answer .loading .loading-gif[data-v-4b736baa]{margin-top:52%;width:70px;height:70px;background:#F9F9F1;border:1px solid #E7E7E7;border-radius:5px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center\n}\n"],sourceRoot:"webpack://"}])},141:function(e,t,n){t=e.exports=n(8)(),t.push([e.id,".success[data-v-4f3eb1dc]{width:70px;height:70px;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;font-size:15px;color:#585858}.success .icon[data-v-4f3eb1dc]{font-size:30px;color:#23de55}","",{version:3,sources:["/./src/components/success.vue"],names:[],mappings:"AACA,0BAA0B,WAAW,YAAY,kBAAkB,oBAAoB,aAAa,qBAAqB,uBAAuB,sBAAsB,mBAAmB,0BAA0B,sBAAsB,eAAe,aAAa,CACpQ,AACD,gCAAgC,eAAe,aAAa,CAC3D",file:"success.vue",sourcesContent:["\n.success[data-v-4f3eb1dc]{width:70px;height:70px;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column;font-size:15px;color:#585858\n}\n.success .icon[data-v-4f3eb1dc]{font-size:30px;color:#23DE55\n}\n"],sourceRoot:"webpack://"}])},153:function(e,t,n){var a=n(138);"string"==typeof a&&(a=[[e.id,a,""]]);n(9)(a,{});a.locals&&(e.exports=a.locals)},156:function(e,t,n){var a=n(141);"string"==typeof a&&(a=[[e.id,a,""]]);n(9)(a,{});a.locals&&(e.exports=a.locals)},175:function(e,t,n){var a,r;n(156),a=n(88);var i=n(189);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-4f3eb1dc",e.exports=a},176:function(e,t,n){var a,r;n(153),a=n(89);var i=n(186);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-4b736baa",e.exports=a},186:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-answer"},[n("div",{staticClass:"title-bar"},[n("span",{staticClass:"cancel"},[e._v("取消")]),e._v(" "),n("label",[e._v("添加回答")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],on:{click:e.addAnswer}},[e._v("发布")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.flag,expression:"!flag"}],staticClass:"fake"},[e._v("发布")])]),e._v(" "),n("div",{staticClass:"input"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{autofocus:"",placeholder:"填写回答内容"},domProps:{value:e._s(e.answer)},on:{input:[function(t){t.target.composing||(e.answer=t.target.value)},e.checkWords]}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading_gif,expression:"loading_gif"}],staticClass:"loading"},[n("div",{staticClass:"loading-gif"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.success,expression:"success"}]},[n("Success")],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[n("Loading")],1)])])])},staticRenderFns:[]}},189:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"success"},[n("div",[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-chenggong"}})])]),e._v(" "),n("div",[e._v("发布成功")])])},staticRenderFns:[]}}});
//# sourceMappingURL=2.44c292449e02248c1e84.js.map