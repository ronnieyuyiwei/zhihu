webpackJsonp([4,10],{1:function(e,t,n){"use strict";function r(e){return"[object Array]"===C.call(e)}function o(e){return"[object ArrayBuffer]"===C.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===C.call(e)}function l(e){return"[object File]"===C.call(e)}function d(e){return"[object Blob]"===C.call(e)}function A(e){return"[object Function]"===C.call(e)}function h(e){return f(e)&&A(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function g(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)g(arguments[n],e);return t}function b(e,t,n){return g(t,function(t,r){n&&"function"==typeof t?e[r]=y(t,n):e[r]=t}),e}var y=n(7),C=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:f,isUndefined:c,isDate:p,isFile:l,isBlob:d,isFunction:A,isStream:h,isURLSearchParams:m,isStandardBrowserEnv:v,forEach:g,merge:w,extend:b,trim:x}},2:function(e,t,n){(function(t){"use strict";function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(3):"undefined"!=typeof t&&(e=n(3)),e}var i=n(1),s=n(23),a=/^\)\]\}',?\n/,u={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:o(),transformRequest:[function(e,t){return s(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(a,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){c.headers[e]={}}),i.forEach(["post","put","patch"],function(e){c.headers[e]=i.merge(u)}),e.exports=c}).call(t,n(27))},3:function(e,t,n){"use strict";var r=n(1),o=n(15),i=n(18),s=n(24),a=n(22),u=n(6),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(17);e.exports=function(e){return new Promise(function(t,f){var p=e.data,l=e.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,A="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,A="onload",h=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var m=e.auth.username||"",x=e.auth.password||"";l.Authorization="Basic "+c(m+":"+x)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[A]=function(){if(d&&(4===d.readyState||h)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,f,i),d=null}},d.onerror=function(){f(u("Network Error",e)),d=null},d.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),d=null},r.isStandardBrowserEnv()){var v=n(20),g=(e.withCredentials||a(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(l,function(e,t){"undefined"==typeof p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(e){if("json"!==d.responseType)throw e}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),f(e),d=null)}),void 0===p&&(p=null),d.send(p)})}},4:function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},5:function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},6:function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t,n,o){var i=new Error(e);return r(i,t,n,o)}},7:function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";function r(e){var t=new s(e),n=i(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(1),i=n(7),s=n(11),a=n(2),u=r(a);u.Axios=s,u.create=function(e){return r(o.merge(a,e))},u.Cancel=n(4),u.CancelToken=n(10),u.isCancel=n(5),u.all=function(e){return Promise.all(e)},u.spread=n(25),e.exports=u,e.exports.default=u},10:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(4);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},11:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(2),i=n(1),s=n(12),a=n(13),u=n(21),c=n(19);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},12:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(1);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},13:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(1),i=n(16),s=n(5),a=n(2);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},14:function(e,t){"use strict";e.exports=function(e,t,n,r){return e.config=t,n&&(e.code=n),e.response=r,e}},15:function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n)):e(n)}},16:function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},17:function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,i=String(e),s="",a=0,u=o;i.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if(r=i.charCodeAt(a+=.75),r>255)throw new n;t=t<<8|r}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},18:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(1);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),i=s.join("&")}return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}},19:function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},20:function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),s===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},21:function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},22:function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},23:function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},24:function(e,t,n){"use strict";var r=n(1);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},25:function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},27:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(p===clearTimeout)return clearTimeout(e);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){h&&d&&(h=!1,d.length?A=d.concat(A):m=-1,A.length&&a())}function a(){if(!h){var e=o(s);h=!0;for(var t=A.length;t;){for(d=A,A=[];++m<t;)d&&d[m].run();m=-1,t=A.length}d=null,h=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var f,p,l=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(e){p=r}}();var d,A=[],h=!1,m=-1;l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];A.push(new u(e,t)),1!==A.length||h||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=c,l.addListener=c,l.once=c,l.off=c,l.removeListener=c,l.removeAllListeners=c,l.emit=c,l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},80:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),i=r(o);t.default={name:"answer",data:function(){return{title:"",describe:"",focus:"",comments:""}},methods:{getData:function(){i.default.get()}}}},130:function(e,t,n){t=e.exports=n(26)(),t.push([e.id,".answer .question .topic[data-v-92b1a42a]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:30px;border-bottom:1px dashed #e7e7e7}.answer .question .topic span[data-v-92b1a42a]{-ms-flex:7;flex:7}.answer .question .topic svg[data-v-92b1a42a]{-ms-flex:1;flex:1;color:#c3c3db;font-size:20px}.answer .question .question-content[data-v-92b1a42a]{width:100%;min-height:100px;margin-top:15px}.answer .question .question-content .title[data-v-92b1a42a]{font-family:SimHei;font-size:18px;font-weight:600;padding:0 10px}.answer .question .question-content .describe[data-v-92b1a42a]{margin-top:13px;font-size:15px;color:#585858;padding:0 10px}.answer .question .question-content .info[data-v-92b1a42a]{width:100%;margin-top:15px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:distribute;align-content:space-around;-ms-flex-align:center;align-items:center}.answer .question .question-content .info .focus[data-v-92b1a42a]{-ms-flex:1;flex:1;font-size:15px;color:#6d7784;margin-left:10px}.answer .question .question-content .info .comment[data-v-92b1a42a]{-ms-flex:1;flex:1;font-size:15px;color:#6d7784}.answer .question .question-content .info .add-focus[data-v-92b1a42a]{-ms-flex:2;flex:2}.answer .question .question-content .info .add-focus button[data-v-92b1a42a]{float:right;margin-right:20px;width:80px;height:30px;border:none;background:#0083fe;border-radius:5px;font-size:14px;color:#fff}.answer .question .question-content .button-bar[data-v-92b1a42a]{width:100%;margin-top:15px;height:45px;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;display:-ms-flexbox;display:flex;text-align:center;line-height:45px;font-size:14px;color:#6d7784}.answer .question .question-content .button-bar .invite-people[data-v-92b1a42a]{height:45px;-ms-flex:1;flex:1;border-right:1px solid #e7e7e7}.answer .question .question-content .button-bar .add-answer[data-v-92b1a42a]{height:45px;-ms-flex:1;flex:1}.answer .question .question-content .button-bar .icon[data-v-92b1a42a]{font-size:19px}","",{version:3,sources:["/./src/pages/answer.vue"],names:[],mappings:"AACA,0CAA0C,oBAAoB,aAAa,qBAAqB,uBAAuB,sBAAsB,mBAAmB,WAAW,YAAY,gCAAgC,CACtN,AACD,+CAA+C,WAAW,MAAM,CAC/D,AACD,8CAA8C,WAAW,OAAO,cAAc,cAAc,CAC3F,AACD,qDAAqD,WAAW,iBAAiB,eAAe,CAC/F,AACD,4DAA4D,mBAAmB,eAAe,gBAAgB,cAAqB,CAClI,AACD,+DAA+D,gBAAgB,eAAe,cAAc,cAAqB,CAChI,AACD,2DAA2D,WAAW,gBAAgB,oBAAoB,aAAa,8BAA8B,2BAA2B,sBAAsB,kBAAkB,CACvN,AACD,kEAAkE,WAAW,OAAO,eAAe,cAAc,gBAAgB,CAChI,AACD,oEAAoE,WAAW,OAAO,eAAe,aAAa,CACjH,AACD,sEAAsE,WAAW,MAAM,CACtF,AACD,6EAA6E,YAAY,kBAAkB,WAAW,YAAY,YAAY,mBAAmB,kBAAkB,eAAe,UAAa,CAC9M,AACD,iEAAiE,WAAW,gBAAgB,YAAY,6BAA6B,gCAAgC,oBAAoB,aAAa,kBAAkB,iBAAiB,eAAe,aAAa,CACpQ,AACD,gFAAgF,YAAY,WAAW,OAAO,8BAA8B,CAC3I,AACD,6EAA6E,YAAY,WAAW,MAAM,CACzG,AACD,uEAAuE,cAAc,CACpF",file:"answer.vue",sourcesContent:["\n.answer .question .topic[data-v-92b1a42a]{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:30px;border-bottom:1px dashed #E7E7E7\n}\n.answer .question .topic span[data-v-92b1a42a]{-ms-flex:7;flex:7\n}\n.answer .question .topic svg[data-v-92b1a42a]{-ms-flex:1;flex:1;color:#C3C3DB;font-size:20px\n}\n.answer .question .question-content[data-v-92b1a42a]{width:100%;min-height:100px;margin-top:15px\n}\n.answer .question .question-content .title[data-v-92b1a42a]{font-family:SimHei;font-size:18px;font-weight:600;padding:0 10px 0 10px\n}\n.answer .question .question-content .describe[data-v-92b1a42a]{margin-top:13px;font-size:15px;color:#585858;padding:0 10px 0 10px\n}\n.answer .question .question-content .info[data-v-92b1a42a]{width:100%;margin-top:15px;display:-ms-flexbox;display:flex;-ms-flex-line-pack:distribute;align-content:space-around;-ms-flex-align:center;align-items:center\n}\n.answer .question .question-content .info .focus[data-v-92b1a42a]{-ms-flex:1;flex:1;font-size:15px;color:#6D7784;margin-left:10px\n}\n.answer .question .question-content .info .comment[data-v-92b1a42a]{-ms-flex:1;flex:1;font-size:15px;color:#6D7784\n}\n.answer .question .question-content .info .add-focus[data-v-92b1a42a]{-ms-flex:2;flex:2\n}\n.answer .question .question-content .info .add-focus button[data-v-92b1a42a]{float:right;margin-right:20px;width:80px;height:30px;border:none;background:#0083FE;border-radius:5px;font-size:14px;color:#ffffff\n}\n.answer .question .question-content .button-bar[data-v-92b1a42a]{width:100%;margin-top:15px;height:45px;border-top:1px solid #E7E7E7;border-bottom:1px solid #E7E7E7;display:-ms-flexbox;display:flex;text-align:center;line-height:45px;font-size:14px;color:#6D7784\n}\n.answer .question .question-content .button-bar .invite-people[data-v-92b1a42a]{height:45px;-ms-flex:1;flex:1;border-right:1px solid #E7E7E7\n}\n.answer .question .question-content .button-bar .add-answer[data-v-92b1a42a]{height:45px;-ms-flex:1;flex:1\n}\n.answer .question .question-content .button-bar .icon[data-v-92b1a42a]{font-size:19px\n}\n"],sourceRoot:"webpack://"}])},145:function(e,t,n){var r=n(130);"string"==typeof r&&(r=[[e.id,r,""]]);n(28)(r,{});r.locals&&(e.exports=r.locals)},155:function(e,t,n){var r,o;n(145),r=n(80);var i=n(173);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,o._scopeId="data-v-92b1a42a",e.exports=r},173:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answer"},[n("div",{staticClass:"question"},[n("div",{staticClass:"topic"},[n("span",[e._v("话题内容")]),e._v(" "),n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-jiantou"}})])]),e._v(" "),n("div",{staticClass:"question-content"},[n("div",{staticClass:"title"},[e._v("在朝鲜的七个月，没网络没手机一夜回到解放前？")]),e._v(" "),n("div",{staticClass:"describe"},[e._v("这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"button-bar"},[n("div",{staticClass:"invite-people"},[n("span",[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-yaoqing"}})])]),e._v(" \n          "),n("span",[e._v("\n            邀请回答\n          ")])]),e._v(" "),n("div",{staticClass:"add-answer"},[n("span",[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-bianji"}})])]),e._v(" \n          "),n("span",[e._v("\n            添加回答\n          ")])])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info"},[n("div",{staticClass:"focus"},[e._v("1016人关注")]),e._v(" "),n("div",{staticClass:"comment"},[e._v("2222条评论")]),e._v(" "),n("div",{staticClass:"add-focus"},[n("button",[e._v("+ 关注")])])])}]}}});
//# sourceMappingURL=4.e0086faba7c417f48279.js.map