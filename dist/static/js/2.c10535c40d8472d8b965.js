webpackJsonp([2,13,15],{1:function(e,t,n){"use strict";function o(e){return"[object Array]"===w.call(e)}function r(e){return"[object ArrayBuffer]"===w.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function d(e){return"[object Date]"===w.call(e)}function p(e){return"[object File]"===w.call(e)}function l(e){return"[object Blob]"===w.call(e)}function A(e){return"[object Function]"===w.call(e)}function h(e){return f(e)&&A(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function g(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||o(e)||(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function y(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=y(t[n],e):t[n]=e}for(var t={},n=0,o=arguments.length;n<o;n++)g(arguments[n],e);return t}function b(e,t,n){return g(t,function(t,o){n&&"function"==typeof t?e[o]=q(t,n):e[o]=t}),e}var q=n(7),w=Object.prototype.toString;e.exports={isArray:o,isArrayBuffer:r,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:d,isFile:p,isBlob:l,isFunction:A,isStream:h,isURLSearchParams:m,isStandardBrowserEnv:v,forEach:g,merge:y,extend:b,trim:x}},2:function(e,t,n){(function(t){"use strict";function o(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function r(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(3):"undefined"!=typeof t&&(e=n(3)),e}var i=n(1),s=n(25),a=/^\)\]\}',?\n/,u={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:r(),transformRequest:[function(e,t){return s(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(o(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(o(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(a,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){c.headers[e]={}}),i.forEach(["post","put","patch"],function(e){c.headers[e]=i.merge(u)}),e.exports=c}).call(t,n(28))},3:function(e,t,n){"use strict";var o=n(1),r=n(17),i=n(20),s=n(26),a=n(24),u=n(6),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(19);e.exports=function(e){return new Promise(function(t,f){var d=e.data,p=e.headers;o.isFormData(d)&&delete p["Content-Type"];var l=new XMLHttpRequest,A="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||a(e.url)||(l=new window.XDomainRequest,A="onload",h=!0,l.onprogress=function(){},l.ontimeout=function(){}),e.auth){var m=e.auth.username||"",x=e.auth.password||"";p.Authorization="Basic "+c(m+":"+x)}if(l.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l[A]=function(){if(l&&(4===l.readyState||h)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,o=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:o,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:e,request:l};r(t,f,i),l=null}},l.onerror=function(){f(u("Network Error",e)),l=null},l.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),l=null},o.isStandardBrowserEnv()){var v=n(22),g=(e.withCredentials||a(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in l&&o.forEach(p,function(e,t){"undefined"==typeof d&&"content-type"===t.toLowerCase()?delete p[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(e){if("json"!==l.responseType)throw e}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===d&&(d=null),l.send(d)})}},4:function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},5:function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},6:function(e,t,n){"use strict";var o=n(16);e.exports=function(e,t,n,r){var i=new Error(e);return o(i,t,n,r)}},7:function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(t,n)}}},10:function(e,t,n){e.exports=n(11)},11:function(e,t,n){"use strict";function o(e){var t=new s(e),n=i(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var r=n(1),i=n(7),s=n(13),a=n(2),u=o(a);u.Axios=s,u.create=function(e){return o(r.merge(a,e))},u.Cancel=n(4),u.CancelToken=n(12),u.isCancel=n(5),u.all=function(e){return Promise.all(e)},u.spread=n(27),e.exports=u,e.exports.default=u},12:function(e,t,n){"use strict";function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}var r=n(4);o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o(function(t){e=t});return{token:t,cancel:e}},e.exports=o},13:function(e,t,n){"use strict";function o(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var r=n(2),i=n(1),s=n(14),a=n(15),u=n(23),c=n(21);o.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(r,this.defaults,{method:"get"},e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head"],function(e){o.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){o.prototype[e]=function(t,n,o){return this.request(i.merge(o||{},{method:e,url:t,data:n}))}}),e.exports=o},14:function(e,t,n){"use strict";function o(){this.handlers=[]}var r=n(1);o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},15:function(e,t,n){"use strict";function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var r=n(1),i=n(18),s=n(5),a=n(2);e.exports=function(e){o(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return o(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(o(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},16:function(e,t){"use strict";e.exports=function(e,t,n,o){return e.config=t,n&&(e.code=n),e.response=o,e}},17:function(e,t,n){"use strict";var o=n(6);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n)):e(n)}},18:function(e,t,n){"use strict";var o=n(1);e.exports=function(e,t,n){return o.forEach(n,function(n){e=n(e,t)}),e}},19:function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,o,i=String(e),s="",a=0,u=r;i.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if(o=i.charCodeAt(a+=.75),o>255)throw new n;t=t<<8|o}return s}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},20:function(e,t,n){"use strict";function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var r=n(1);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(r.isArray(e)&&(t+="[]"),r.isArray(e)||(e=[e]),r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),i=s.join("&")}return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}},21:function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},22:function(e,t,n){"use strict";var o=n(1);e.exports=o.isStandardBrowserEnv()?function(){return{write:function(e,t,n,r,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),o.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),o.isString(r)&&a.push("path="+r),o.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},23:function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},24:function(e,t,n){"use strict";var o=n(1);e.exports=o.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return t=e(window.location.href),function(n){var r=o.isString(n)?e(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return function(){return!0}}()},25:function(e,t,n){"use strict";var o=n(1);e.exports=function(e,t){o.forEach(e,function(n,o){o!==t&&o.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[o])})}},26:function(e,t,n){"use strict";var o=n(1);e.exports=function(e){var t,n,r,i={};return e?(o.forEach(e.split("\n"),function(e){r=e.indexOf(":"),t=o.trim(e.substr(0,r)).toLowerCase(),n=o.trim(e.substr(r+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},27:function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},28:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function s(){h&&l&&(h=!1,l.length?A=l.concat(A):m=-1,A.length&&a())}function a(){if(!h){var e=r(s);h=!0;for(var t=A.length;t;){for(l=A,A=[];++m<t;)l&&l[m].run();m=-1,t=A.length}l=null,h=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var f,d,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var l,A=[],h=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];A.push(new u(e,t)),1!==A.length||h||r(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},91:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),i=o(r);t.default={name:"question",data:function(){return{title:"",describe:"",focus:"",commentNum:"",layerPop:!1}},created:function(){this.getData()},methods:{getData:function(){var e=this;i.default.get("/question/getData",{params:{questionId:this.$route.params.id}}).then(function(t){t.data.status?(e.title=t.data.title,e.describe=t.data.describe,e.commentNum=t.data.commentNum):e.$router.replace("/error")}).catch(function(e){e&&console.log(e)})},addAnswer:function(){this.$router.push(this.$route.path+"/add_answer"),this.layerPop=!0}}}},132:function(e,t,n){t=e.exports=n(8)(),t.push([e.id,".question .question-body .topic[data-v-0f738ddf]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:30px;border-bottom:1px dashed #e7e7e7}.question .question-body .topic span[data-v-0f738ddf]{-ms-flex:7;flex:7}.question .question-body .topic svg[data-v-0f738ddf]{-ms-flex:1;flex:1;color:#c3c3db;font-size:20px}.question .question-body .question-content[data-v-0f738ddf]{width:100%;min-height:100px;margin-top:15px}.question .question-body .question-content .title[data-v-0f738ddf]{font-family:SimHei;font-size:18px;font-weight:600;padding:0 10px}.question .question-body .question-content .describe[data-v-0f738ddf]{margin-top:13px;font-size:15px;color:#585858;padding:0 10px}.question .question-body .question-content .info[data-v-0f738ddf]{width:100%;margin-top:15px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:distribute;align-content:space-around;-ms-flex-align:center;align-items:center}.question .question-body .question-content .info .focus[data-v-0f738ddf]{-ms-flex:1;flex:1;font-size:15px;color:#6d7784;margin-left:10px}.question .question-body .question-content .info .comment[data-v-0f738ddf]{-ms-flex:1;flex:1;font-size:15px;color:#6d7784}.question .question-body .question-content .info .add-focus[data-v-0f738ddf]{-ms-flex:2;flex:2}.question .question-body .question-content .info .add-focus button[data-v-0f738ddf]{float:right;margin-right:20px;width:80px;height:30px;border:none;background:#0083fe;border-radius:5px;font-size:14px;color:#fff}.question .question-body .question-content .button-bar[data-v-0f738ddf]{width:100%;margin-top:15px;height:45px;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;display:-ms-flexbox;display:flex;text-align:center;line-height:45px;font-size:14px;color:#6d7784}.question .question-body .question-content .button-bar .invite-people[data-v-0f738ddf]{height:45px;-ms-flex:1;flex:1;border-right:1px solid #e7e7e7}.question .question-body .question-content .button-bar .add-answer[data-v-0f738ddf]{height:45px;-ms-flex:1;flex:1}.question .question-body .question-content .button-bar .icon[data-v-0f738ddf]{font-size:19px}.question .answer-preview[data-v-0f738ddf]{height:3000px;width:100%;background:#ff0}.question .question-view[data-v-0f738ddf]{width:100%}","",{version:3,sources:["/./src/pages/question/question.vue"],names:[],mappings:"AACA,iDAAiD,oBAAoB,aAAa,qBAAqB,uBAAuB,sBAAsB,mBAAmB,WAAW,YAAY,gCAAgC,CAC7N,AACD,sDAAsD,WAAW,MAAM,CACtE,AACD,qDAAqD,WAAW,OAAO,cAAc,cAAc,CAClG,AACD,4DAA4D,WAAW,iBAAiB,eAAe,CACtG,AACD,mEAAmE,mBAAmB,eAAe,gBAAgB,cAAqB,CACzI,AACD,sEAAsE,gBAAgB,eAAe,cAAc,cAAqB,CACvI,AACD,kEAAkE,WAAW,gBAAgB,oBAAoB,aAAa,8BAA8B,2BAA2B,sBAAsB,kBAAkB,CAC9N,AACD,yEAAyE,WAAW,OAAO,eAAe,cAAc,gBAAgB,CACvI,AACD,2EAA2E,WAAW,OAAO,eAAe,aAAa,CACxH,AACD,6EAA6E,WAAW,MAAM,CAC7F,AACD,oFAAoF,YAAY,kBAAkB,WAAW,YAAY,YAAY,mBAAmB,kBAAkB,eAAe,UAAa,CACrN,AACD,wEAAwE,WAAW,gBAAgB,YAAY,6BAA6B,gCAAgC,oBAAoB,aAAa,kBAAkB,iBAAiB,eAAe,aAAa,CAC3Q,AACD,uFAAuF,YAAY,WAAW,OAAO,8BAA8B,CAClJ,AACD,oFAAoF,YAAY,WAAW,MAAM,CAChH,AACD,8EAA8E,cAAc,CAC3F,AACD,2CAA2C,cAAc,WAAW,eAAiB,CACpF,AACD,0CAA0C,UAAU,CACnD",file:"question.vue",sourcesContent:["\n.question .question-body .topic[data-v-0f738ddf]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:30px;border-bottom:1px dashed #E7E7E7\n}\n.question .question-body .topic span[data-v-0f738ddf]{-ms-flex:7;flex:7\n}\n.question .question-body .topic svg[data-v-0f738ddf]{-ms-flex:1;flex:1;color:#C3C3DB;font-size:20px\n}\n.question .question-body .question-content[data-v-0f738ddf]{width:100%;min-height:100px;margin-top:15px\n}\n.question .question-body .question-content .title[data-v-0f738ddf]{font-family:SimHei;font-size:18px;font-weight:600;padding:0 10px 0 10px\n}\n.question .question-body .question-content .describe[data-v-0f738ddf]{margin-top:13px;font-size:15px;color:#585858;padding:0 10px 0 10px\n}\n.question .question-body .question-content .info[data-v-0f738ddf]{width:100%;margin-top:15px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:distribute;align-content:space-around;-ms-flex-align:center;align-items:center\n}\n.question .question-body .question-content .info .focus[data-v-0f738ddf]{-ms-flex:1;flex:1;font-size:15px;color:#6D7784;margin-left:10px\n}\n.question .question-body .question-content .info .comment[data-v-0f738ddf]{-ms-flex:1;flex:1;font-size:15px;color:#6D7784\n}\n.question .question-body .question-content .info .add-focus[data-v-0f738ddf]{-ms-flex:2;flex:2\n}\n.question .question-body .question-content .info .add-focus button[data-v-0f738ddf]{float:right;margin-right:20px;width:80px;height:30px;border:none;background:#0083FE;border-radius:5px;font-size:14px;color:#ffffff\n}\n.question .question-body .question-content .button-bar[data-v-0f738ddf]{width:100%;margin-top:15px;height:45px;border-top:1px solid #E7E7E7;border-bottom:1px solid #E7E7E7;display:-ms-flexbox;display:flex;text-align:center;line-height:45px;font-size:14px;color:#6D7784\n}\n.question .question-body .question-content .button-bar .invite-people[data-v-0f738ddf]{height:45px;-ms-flex:1;flex:1;border-right:1px solid #E7E7E7\n}\n.question .question-body .question-content .button-bar .add-answer[data-v-0f738ddf]{height:45px;-ms-flex:1;flex:1\n}\n.question .question-body .question-content .button-bar .icon[data-v-0f738ddf]{font-size:19px\n}\n.question .answer-preview[data-v-0f738ddf]{height:3000px;width:100%;background:yellow\n}\n.question .question-view[data-v-0f738ddf]{width:100%\n}\n"],sourceRoot:"webpack://"}])},148:function(e,t,n){var o=n(132);"string"==typeof o&&(o=[[e.id,o,""]]);n(9)(o,{});o.locals&&(e.exports=o.locals)},173:function(e,t,n){var o,r;n(148),o=n(91);var i=n(179);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-0f738ddf",e.exports=o},179:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"question"},[n("div",{staticClass:"question-body"},[n("div",{staticClass:"topic"},[n("span",[e._v("话题内容")]),e._v(" "),n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-jiantou"}})])]),e._v(" "),n("div",{staticClass:"question-content"},[n("div",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"describe"},[e._v(e._s(e.describe))]),e._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"focus"},[e._v("1016人关注")]),e._v(" "),n("div",{staticClass:"comment"},[e._v(e._s(e.commentNum)+" 条评论")]),e._v(" "),e._m(0)]),e._v(" "),n("div",{staticClass:"button-bar"},[n("div",{staticClass:"invite-people"},[n("span",[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-yaoqing"}})])]),e._v(" \n          "),n("span",[e._v("\n            邀请回答\n          ")])]),e._v(" "),n("div",{staticClass:"add-answer"},[n("span",[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-bianji"}})])]),e._v(" \n          "),n("span",{on:{click:e.addAnswer}},[e._v("\n            添加回答\n          ")])])])])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.layerPop,expression:"!layerPop"}],staticClass:"answer-preview"}),e._v(" "),n("div",{staticClass:"question-view"},[n("router-view")],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-focus"},[n("button",[e._v("+ 关注")])])}]}}});
//# sourceMappingURL=2.c10535c40d8472d8b965.js.map