webpackJsonp([0,17],[,function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(28)("wks"),r=n(19),a=n(1).Symbol,i="function"==typeof a,s=t.exports=function(t){return o[t]||(o[t]=i&&a[t]||(i?a:r)("Symbol."+t))};s.store=o},,,function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(9),r=n(18);t.exports=n(7)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(46),r=n(20);t.exports=function(t){return o(r(t))}},function(t,e,n){var o=n(12),r=n(34),a=n(30),i=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(o(t),e=a(e,!0),o(n),r)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},,function(t,e,n){var o=n(14);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e,n){var o=n(36),r=n(25);t.exports=Object.keys||function(t){return o(t,r)}},,function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(9).f,r=n(5),a=n(2)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,a)&&o(t,a,{configurable:!0,value:e})}},function(t,e,n){var o=n(28)("keys"),r=n(19);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(1),r=n(10),a=n(31),i=n(6),s="prototype",c=function(t,e,n){var u,f,d,l=t&c.F,A=t&c.G,p=t&c.S,v=t&c.P,h=t&c.B,x=t&c.W,g=A?r:r[e]||(r[e]={}),w=g[s],m=A?o:p?o[e]:(o[e]||{})[s];A&&(n=e);for(u in n)f=!l&&m&&void 0!==m[u],f&&u in g||(d=f?m[u]:n[u],g[u]=A&&"function"!=typeof m[u]?n[u]:h&&f?a(d,o):x&&m[u]==d?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e[s]=t[s],e}(d):v&&"function"==typeof d?a(Function.call,d):d,v&&((g.virtual||(g.virtual={}))[u]=d,t&c.R&&w&&!w[u]&&i(w,u,d)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=!0},function(t,e,n){var o=n(1),r="__core-js_shared__",a=o[r]||(o[r]={});t.exports=function(t){return a[t]||(a[t]={})}},function(t,e,n){var o=n(14),r=n(1).document,a=o(r)&&o(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},function(t,e,n){var o=n(14);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(33);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){"use strict";var o=n(27),r=n(26),a=n(38),i=n(6),s=n(5),c=n(15),u=n(47),f=n(21),d=n(52),l=n(2)("iterator"),A=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",h="values",x=function(){return this};t.exports=function(t,e,n,g,w,m,b){u(n,e,g);var y,C,B,_=function(t){if(!A&&t in j)return j[t];switch(t){case v:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",D=w==h,E=!1,j=t.prototype,F=j[l]||j[p]||w&&j[w],W=F||_(w),O=w?D?_("entries"):W:void 0,I="Array"==e?j.entries||F:F;if(I&&(B=d(I.call(new t)),B!==Object.prototype&&(f(B,k,!0),o||s(B,l)||i(B,l,x))),D&&F&&F.name!==h&&(E=!0,W=function(){return F.call(this)}),o&&!b||!A&&!E&&j[l]||i(j,l,W),c[e]=W,c[k]=x,w)if(y={values:D?W:_(h),keys:m?W:_(v),entries:O},b)for(C in y)C in j||a(j,C,y[C]);else r(r.P+r.F*(A||E),e,y);return y}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(7)&&!n(13)(function(){return 7!=Object.defineProperty(n(29)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(12),r=n(49),a=n(25),i=n(22)("IE_PROTO"),s=function(){},c="prototype",u=function(){var t,e=n(29)("iframe"),o=a.length,r="<",i=">";for(e.style.display="none",n(42).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(r+"script"+i+"document.F=Object"+r+"/script"+i),t.close(),u=t.F;o--;)delete u[c][a[o]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[c]=o(t),n=new s,s[c]=null,n[i]=t):n=u(),void 0===e?n:r(n,e)}},function(t,e,n){var o=n(5),r=n(8),a=n(45)(!1),i=n(22)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),c=0,u=[];for(n in s)n!=i&&o(s,n)&&u.push(n);for(;e.length>c;)o(s,n=e[c++])&&(~a(u,n)||u.push(n));return u}},,function(t,e,n){t.exports=n(6)},function(t,e,n){var o=n(20);t.exports=function(t){return Object(o(t))}},,,function(t,e,n){t.exports=n(1).document&&document.documentElement},function(t,e,n){var o=n(23),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e){t.exports=function(){}},function(t,e,n){var o=n(8),r=n(43),a=n(54);t.exports=function(t){return function(e,n,i){var s,c=o(e),u=r(c.length),f=a(i,u);if(t&&n!=n){for(;u>f;)if(s=c[f++],s!=s)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var o=n(24);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var o=n(35),r=n(18),a=n(21),i={};n(6)(i,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(i,{next:r(1,n)}),a(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var o=n(9),r=n(12),a=n(16);t.exports=n(7)?Object.defineProperties:function(t,e){r(t);for(var n,i=a(e),s=i.length,c=0;s>c;)o.f(t,n=i[c++],e[n]);return t}},,,function(t,e,n){var o=n(5),r=n(39),a=n(22)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,n){var o=n(23),r=n(20);t.exports=function(t){return function(e,n){var a,i,s=String(r(e)),c=o(n),u=s.length;return c<0||c>=u?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===u||(i=s.charCodeAt(c+1))<56320||i>57343?t?s.charAt(c):a:t?s.slice(c,c+2):(a-55296<<10)+(i-56320)+65536)}}},function(t,e,n){var o=n(23),r=Math.max,a=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):a(t,e)}},function(t,e,n){"use strict";var o=n(44),r=n(48),a=n(15),i=n(8);t.exports=n(32)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):"keys"==e?r(0,n):"values"==e?r(0,t[n]):r(0,[n,t[n]])},"values"),a.Arguments=a.Array,o("keys"),o("values"),o("entries")},function(t,e){},function(t,e,n){"use strict";var o=n(53)(!0);n(32)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(55);for(var o=n(1),r=n(6),a=n(15),i=n(2)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var u=s[c],f=o[u],d=f&&f.prototype;d&&!d[i]&&r(d,i,u),a[u]=a.Array}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var o=n(24),r=n(2)("toStringTag"),a="Arguments"==o(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=i(e=Object(t),r))?n:a?o(e):"Object"==(s=o(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var o,r,a,i=n(31),s=n(153),c=n(42),u=n(29),f=n(1),d=f.process,l=f.setImmediate,A=f.clearImmediate,p=f.MessageChannel,v=0,h={},x="onreadystatechange",g=function(){var t=+this;if(h.hasOwnProperty(t)){var e=h[t];delete h[t],e()}},w=function(t){g.call(t.data)};l&&A||(l=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return h[++v]=function(){s("function"==typeof t?t:Function(t),e)},o(v),v},A=function(t){delete h[t]},"process"==n(24)(d)?o=function(t){d.nextTick(i(g,t,1))}:p?(r=new p,a=r.port2,r.port1.onmessage=w,o=i(a.postMessage,a,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(o=function(t){f.postMessage(t+"","*")},f.addEventListener("message",w,!1)):o=x in u("script")?function(t){c.appendChild(u("script"))[x]=function(){c.removeChild(this),g.call(t)}}:function(t){setTimeout(i(g,t,1),0)}),t.exports={set:l,clear:A}},,function(t,e,n){var o,r;n(193),o=n(135);var a=n(239);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-4c29dcab",t.exports=o},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),a=o(r);e.default={data:function(){return{login:!1,account:"",voteHeight:0,agreeIsActive:!1,disagreeIsActive:!1,voteDiv:!1,voteState:null,list:[{title:"赞同",icon:"#icon-shangxia",method:"openVote"},{title:"感谢作者",icon:"#icon-icon1",method:""},{title:"加入收藏",icon:"#icon-shoucang",method:""},{title:"评论",icon:"#icon-icon",method:""}]}},name:"answer-foot",created:function(){this.setVoteHeight(),this.initializeVote()},methods:{setVoteHeight:function(){var t=document.documentElement.clientHeight;this.voteHeight=t},initializeVote:function(){var t=this;a.default.get("/answer/vote/initializeVote",{params:{qid:this.$route.params.qid,asId:this.$route.params.asId}}).then(function(e){t.list[0].title=e.data.agreeNum+"赞同","agree"===e.data.attitude?(t.agreeIsActive=!0,t.disagreeIsActive=!1):"disagree"===e.data.attitude?(t.agreeIsActive=!1,t.disagreeIsActive=!0):"neutral"===e.data.attitude&&(t.agreeIsActive=!1,t.disagreeIsActive=!1)}).catch(function(t){console.log(t)})},handle:function(t){"openVote"===t&&(this.voteDiv=!0)},vote:function(t){var e=this;"agree"===t?this.agreeIsActive?(this.agreeIsActive=!1,this.disagreeIsActive=!1):(this.agreeIsActive=!0,this.disagreeIsActive=!1):"disagree"===t&&(this.disagreeIsActive?(this.agreeIsActive=!1,this.disagreeIsActive=!1):(this.agreeIsActive=!1,this.disagreeIsActive=!0)),setTimeout(function(){e.voteHide()},500)},voteHide:function(){var t=this;this.voteDiv=!1;var e=void 0;e=this.agreeIsActive?"agree":this.disagreeIsActive?"disagree":"neutral",a.default.post("/answer/vote",{qid:this.$route.params.qid,asId:this.$route.params.asId,vote:e}).then(function(e){e.data&&t.initializeVote()})}}}},,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(149),a=o(r),i=n(212),s=o(i),c=n(11),u=o(c);e.default={name:"answer-content",data:function(){return{title:"",responder:"",content:"",date:"",buttonRender:!0,focused:!1}},components:{AnswerFoot:s.default},created:function(){var t=this;new a.default(this.getData).then(function(){return new a.default(t.checkFocus)})},methods:{goBack:function(){this.$router.go(-1)},goQuestion:function(){this.$router.replace("/question/"+this.$route.params.qid)},getData:function(t){var e=this;u.default.get("/answer/getAnswer_content",{params:{questionId:this.$route.params.qid,answerId:this.$route.params.asId}}).then(function(n){e.title=n.data[0].title,e.responder=n.data[0].responder,e.content=n.data[0].content,e.date=n.data[0].date,t(e.responder)}).catch(function(t){console.log(t)})},checkFocus:function(){var t=this;u.default.get("/user/checkPersonFocus",{params:{responder:this.responder}}).then(function(e){e.data.render?e.data.focused?t.focused=!0:t.focused=!1:t.buttonRender=!1})},addPersonFocus:function(){var t=this;u.default.post("/user/addPersonFocus",{responder:this.responder}).then(function(e){"ok"===e.data&&(t.focused=!0)})},cancelPersonFocus:function(){var t=this;u.default.post("/user/cancelPersonFocus",{responder:this.responder}).then(function(e){"ok"===e.data&&(t.focused=!1)})}}}},,,,,,,,,,,,,,function(t,e,n){t.exports={default:n(150),__esModule:!0}},function(t,e,n){n(56),n(57),n(58),n(162),t.exports=n(10).Promise},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var o=n(31),r=n(155),a=n(154),i=n(12),s=n(43),c=n(161),u={},f={},e=t.exports=function(t,e,n,d,l){var A,p,v,h,x=l?function(){return t}:c(t),g=o(n,d,e?2:1),w=0;if("function"!=typeof x)throw TypeError(t+" is not iterable!");if(a(x)){for(A=s(t.length);A>w;w++)if(h=e?g(i(p=t[w])[0],p[1]):g(t[w]),h===u||h===f)return h}else for(v=x.call(t);!(p=v.next()).done;)if(h=r(v,g,p.value,e),h===u||h===f)return h};e.BREAK=u,e.RETURN=f},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var o=n(15),r=n(2)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[r]===t)}},function(t,e,n){var o=n(12);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&o(a.call(t)),e}}},function(t,e,n){var o=n(2)("iterator"),r=!1;try{var a=[7][o]();a.return=function(){r=!0},Array.from(a,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var a=[7],i=a[o]();i.next=function(){return{done:n=!0}},a[o]=function(){return i},t(a)}catch(t){}return n}},function(t,e,n){var o=n(1),r=n(99).set,a=o.MutationObserver||o.WebKitMutationObserver,i=o.process,s=o.Promise,c="process"==n(24)(i);t.exports=function(){var t,e,n,u=function(){var o,r;for(c&&(o=i.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(c)n=function(){i.nextTick(u)};else if(a){var f=!0,d=document.createTextNode("");new a(u).observe(d,{characterData:!0}),n=function(){d.data=f=!f}}else if(s&&s.resolve){var l=s.resolve();n=function(){l.then(u)}}else n=function(){r.call(o,u)};return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},function(t,e,n){var o=n(6);t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:o(t,r,e[r]);return t}},function(t,e,n){"use strict";var o=n(1),r=n(10),a=n(9),i=n(7),s=n(2)("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:o[t];i&&e&&!e[s]&&a.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var o=n(12),r=n(33),a=n(2)("species");t.exports=function(t,e){var n,i=o(t).constructor;return void 0===i||void 0==(n=o(i)[a])?e:r(n)}},function(t,e,n){var o=n(98),r=n(2)("iterator"),a=n(15);t.exports=n(10).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||a[o(t)]}},function(t,e,n){"use strict";var o,r,a,i=n(27),s=n(1),c=n(31),u=n(98),f=n(26),d=n(14),l=n(33),A=n(151),p=n(152),v=n(160),h=n(99).set,x=n(157)(),g="Promise",w=s.TypeError,m=s.process,b=s[g],m=s.process,y="process"==u(m),C=function(){},B=!!function(){try{var t=b.resolve(1),e=(t.constructor={})[n(2)("species")]=function(t){t(C,C)};return(y||"function"==typeof PromiseRejectionEvent)&&t.then(C)instanceof e}catch(t){}}(),_=function(t,e){return t===e||t===b&&e===a},k=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},D=function(t){return _(b,t)?new E(t):new r(t)},E=r=function(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw w("Bad Promise constructor");e=t,n=o}),this.resolve=l(e),this.reject=l(n)},j=function(t){try{t()}catch(t){return{error:t}}},F=function(t,e){if(!t._n){t._n=!0;var n=t._c;x(function(){for(var o=t._v,r=1==t._s,a=0,i=function(e){var n,a,i=r?e.ok:e.fail,s=e.resolve,c=e.reject,u=e.domain;try{i?(r||(2==t._h&&I(t),t._h=1),i===!0?n=o:(u&&u.enter(),n=i(o),u&&u.exit()),n===e.promise?c(w("Promise-chain cycle")):(a=k(n))?a.call(n,s,c):s(n)):c(o)}catch(t){c(t)}};n.length>a;)i(n[a++]);t._c=[],t._n=!1,e&&!t._h&&W(t)})}},W=function(t){h.call(s,function(){var e,n,o,r=t._v;if(O(t)&&(e=j(function(){y?m.emit("unhandledRejection",r,t):(n=s.onunhandledrejection)?n({promise:t,reason:r}):(o=s.console)&&o.error&&o.error("Unhandled promise rejection",r)}),t._h=y||O(t)?2:1),t._a=void 0,e)throw e.error})},O=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,o=0;n.length>o;)if(e=n[o++],e.fail||!O(e.promise))return!1;return!0},I=function(t){h.call(s,function(){var e;y?m.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},M=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),F(e,!0))},P=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw w("Promise can't be resolved itself");(e=k(t))?x(function(){var o={_w:n,_d:!1};try{e.call(t,c(P,o,1),c(M,o,1))}catch(t){M.call(o,t)}}):(n._v=t,n._s=1,F(n,!1))}catch(t){M.call({_w:n,_d:!1},t)}}};B||(b=function(t){A(this,b,g,"_h"),l(t),o.call(this);try{t(c(P,this,1),c(M,this,1))}catch(t){M.call(this,t)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=n(158)(b.prototype,{then:function(t,e){var n=D(v(this,b));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=y?m.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&F(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),E=function(){var t=new o;this.promise=t,this.resolve=c(P,t,1),this.reject=c(M,t,1)}),f(f.G+f.W+f.F*!B,{Promise:b}),n(21)(b,g),n(159)(g),a=n(10)[g],f(f.S+f.F*!B,g,{reject:function(t){var e=D(this),n=e.reject;return n(t),e.promise}}),f(f.S+f.F*(i||!B),g,{resolve:function(t){if(t instanceof b&&_(t.constructor,this))return t;var e=D(this),n=e.resolve;return n(t),e.promise}}),f(f.S+f.F*!(B&&n(156)(function(t){b.all(t).catch(C)})),g,{all:function(t){var e=this,n=D(e),o=n.resolve,r=n.reject,a=j(function(){var n=[],a=0,i=1;p(t,!1,function(t){var s=a++,c=!1;n.push(void 0),i++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--i||o(n))},r)}),--i||o(n)});return a&&r(a.error),n.promise},race:function(t){var e=this,n=D(e),o=n.reject,r=j(function(){p(t,!1,function(t){e.resolve(t).then(n.resolve,o)})});return r&&o(r.error),n.promise}})},,,,function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".answer-foot[data-v-14949a80]{height:52px;width:100%;max-width:640px;background:#fff;position:fixed;bottom:0;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#888d97;font-size:21px;border-top:1px solid #e7e7e7}.answer-foot li[data-v-14949a80]{height:52px;display:block;-ms-flex:1;flex:1}.answer-foot li .icon[data-v-14949a80]{margin-top:5px}.answer-foot li span[data-v-14949a80]{display:block;font-size:13px;color:#888d97}.answer-foot .vote[data-v-14949a80]{position:absolute;left:0;width:100%;background:rgba(38,38,38,.3);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.answer-foot .vote .content[data-v-14949a80]{width:240px;background:#fff;border-radius:8px;height:140px}.answer-foot .vote .content .title[data-v-14949a80]{margin-top:10px;color:#979797;font-size:15px}.answer-foot .vote .content .btn[data-v-14949a80]{margin-top:10px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;width:100%}.answer-foot .vote .content .btn .vote-btn[data-v-14949a80]{width:52px;color:#afafaf;font-size:14px}.answer-foot .vote .content .btn .vote-btn .btn-box[data-v-14949a80]{width:52px;height:52px;border:1px solid #e7e7e7;border-radius:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:35px}.answer-foot .vote .content .btn .vote-btn .active[data-v-14949a80]{background:#2da1fe}.answer-foot .vote .content .btn .vote-btn .active .icon[data-v-14949a80]{color:#fff}.answer-foot .vote .content .btn .vote-btn .msg[data-v-14949a80]{margin-top:5px}","",{version:3,sources:["/./src/components/answer/answer-foot.vue"],names:[],mappings:"AACA,8BAA8B,YAAY,WAAW,gBAAgB,gBAAiB,eAAe,SAAS,2BAA2B,oBAAoB,sBAAsB,mBAAmB,qBAAqB,uBAAuB,kBAAkB,cAAc,eAAe,4BAA4B,CAC5T,AACD,iCAAiC,YAAY,cAAc,WAAW,MAAM,CAC3E,AACD,uCAAuC,cAAc,CACpD,AACD,sCAAsC,cAAc,eAAe,aAAa,CAC/E,AACD,oCAAoC,kBAAkB,OAAO,WAAW,6BAA8B,oBAAoB,aAAa,qBAAqB,uBAAuB,sBAAsB,kBAAkB,CAC1N,AACD,6CAA6C,YAAY,gBAAiB,kBAAkB,YAAY,CACvG,AACD,oDAAoD,gBAAgB,cAAc,cAAc,CAC/F,AACD,kDAAkD,gBAAgB,oBAAoB,aAAa,yBAAyB,6BAA6B,sBAAsB,mBAAmB,UAAU,CAC3M,AACD,4DAA4D,WAAW,cAAc,cAAc,CAClG,AACD,qEAAqE,WAAW,YAAY,yBAAyB,kBAAkB,oBAAoB,aAAa,qBAAqB,uBAAuB,sBAAsB,mBAAmB,cAAc,CAC1Q,AACD,oEAAoE,kBAAkB,CACrF,AACD,0EAA0E,UAAW,CACpF,AACD,iEAAiE,cAAc,CAC9E",file:"answer-foot.vue",sourcesContent:["\n.answer-foot[data-v-14949a80]{height:52px;width:100%;max-width:640px;background:white;position:fixed;bottom:0;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#888D97;font-size:21px;border-top:1px solid #E7E7E7\n}\n.answer-foot li[data-v-14949a80]{height:52px;display:block;-ms-flex:1;flex:1\n}\n.answer-foot li .icon[data-v-14949a80]{margin-top:5px\n}\n.answer-foot li span[data-v-14949a80]{display:block;font-size:13px;color:#888D97\n}\n.answer-foot .vote[data-v-14949a80]{position:absolute;left:0;width:100%;background:rgba(38,38,38,0.3);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center\n}\n.answer-foot .vote .content[data-v-14949a80]{width:240px;background:white;border-radius:8px;height:140px\n}\n.answer-foot .vote .content .title[data-v-14949a80]{margin-top:10px;color:#979797;font-size:15px\n}\n.answer-foot .vote .content .btn[data-v-14949a80]{margin-top:10px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;width:100%\n}\n.answer-foot .vote .content .btn .vote-btn[data-v-14949a80]{width:52px;color:#AFAFAF;font-size:14px\n}\n.answer-foot .vote .content .btn .vote-btn .btn-box[data-v-14949a80]{width:52px;height:52px;border:1px solid #E7E7E7;border-radius:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:35px\n}\n.answer-foot .vote .content .btn .vote-btn .active[data-v-14949a80]{background:#2DA1FE\n}\n.answer-foot .vote .content .btn .vote-btn .active .icon[data-v-14949a80]{color:white\n}\n.answer-foot .vote .content .btn .vote-btn .msg[data-v-14949a80]{margin-top:5px\n}\n"],sourceRoot:"webpack://"}])},,,,,,function(t,e,n){e=t.exports=n(3)(),e.push([t.id,".answer-content .operate[data-v-4c29dcab]{width:100%;height:50px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;font-size:22px;text-align:center;color:#54585d;font-weight:600;border-bottom:1px solid #f8f8f8}.answer-content .operate .back[data-v-4c29dcab]{-ms-flex:1;flex:1}.answer-content .operate .display[data-v-4c29dcab]{-ms-flex:6;flex:6;font-size:16px}.answer-content .operate .share[data-v-4c29dcab]{-ms-flex:1;flex:1}.answer-content .title[data-v-4c29dcab]{width:100%;min-height:50px;max-height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#000;line-height:50px;font-weight:600;font-size:18px}.answer-content .blank[data-v-4c29dcab]{width:100%;height:7px;background:#efeff4}.answer-content .answer[data-v-4c29dcab]{width:100%}.answer-content .answer .author[data-v-4c29dcab]{display:-ms-flexbox;display:flex;height:53px;-ms-flex-align:center;align-items:center;border-bottom:1px solid #f8f8f8}.answer-content .answer .author .head-sculpture[data-v-4c29dcab]{-ms-flex:1;flex:1;margin-left:10px}.answer-content .answer .author .head-sculpture img[data-v-4c29dcab]{width:38px;margin-top:3px;border-radius:1000px}.answer-content .answer .author .person-intro[data-v-4c29dcab]{-ms-flex:5;flex:5}.answer-content .answer .author .person-intro span[data-v-4c29dcab]{display:block}.answer-content .answer .author .person-intro .name[data-v-4c29dcab]{font-size:14px;color:#4e586e;font-weight:600}.answer-content .answer .author .person-intro .sign[data-v-4c29dcab]{font-size:12px}.answer-content .answer .author .focus-button[data-v-4c29dcab]{-ms-flex:1.8;flex:1.8}.answer-content .answer .author .focus-button .focus[data-v-4c29dcab]{-ms-flex-pack:end;justify-content:flex-end}.answer-content .answer .author .focus-button .focus div[data-v-4c29dcab]{width:70px;height:30px;text-align:center;line-height:30px;border-radius:5px;border:1px solid #4096fe;color:#4096fe}.answer-content .answer .author .focus-button .focused[data-v-4c29dcab]{-ms-flex-pack:end;justify-content:flex-end}.answer-content .answer .author .focus-button .focused div[data-v-4c29dcab]{width:70px;height:30px;text-align:center;line-height:30px;background:#edeef0;border-radius:5px;font-size:14px;color:#6d7784}.answer-content .answer .content[data-v-4c29dcab]{width:100%;font-size:17px;letter-spacing:1px;line-height:27px;color:#585858}.answer-content .answer .content p[data-v-4c29dcab]{padding:0 7px 0 12px}.answer-content .answer .copyright[data-v-4c29dcab]{width:100%;height:180px;padding-bottom:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.answer-content .answer .copyright p[data-v-4c29dcab]{padding-right:30px;font-size:16px;color:#afafaf;font-weight:600}.answer-content .answer .copyright div[data-v-4c29dcab]{margin-top:-20px}","",{version:3,sources:["/./src/pages/answer/answer-content.vue"],names:[],mappings:"AACA,0CAA0C,WAAW,YAAY,oBAAoB,aAAa,sBAAsB,8BAA8B,sBAAsB,mBAAmB,eAAe,kBAAkB,cAAc,gBAAgB,+BAA+B,CAC5R,AACD,gDAAgD,WAAW,MAAM,CAChE,AACD,mDAAmD,WAAW,OAAO,cAAc,CAClF,AACD,iDAAiD,WAAW,MAAM,CACjE,AACD,wCAAwC,WAAW,gBAAgB,gBAAgB,oBAAoB,aAAa,sBAAsB,mBAAmB,qBAAqB,uBAAuB,kBAAkB,WAAW,iBAAiB,gBAAgB,cAAc,CACpR,AACD,wCAAwC,WAAW,WAAW,kBAAkB,CAC/E,AACD,yCAAyC,UAAU,CAClD,AACD,iDAAiD,oBAAoB,aAAa,YAAY,sBAAsB,mBAAmB,+BAA+B,CACrK,AACD,iEAAiE,WAAW,OAAO,gBAAgB,CAClG,AACD,qEAAqE,WAAW,eAAe,oBAAoB,CAClH,AACD,+DAA+D,WAAW,MAAM,CAC/E,AACD,oEAAoE,aAAa,CAChF,AACD,qEAAqE,eAAe,cAAc,eAAe,CAChH,AACD,qEAAqE,cAAc,CAClF,AACD,+DAA+D,aAAa,QAAQ,CACnF,AACD,sEAAsE,kBAAkB,wBAAwB,CAC/G,AACD,0EAA0E,WAAW,YAAY,kBAAkB,iBAAiB,kBAAkB,yBAAyB,aAAa,CAC3L,AACD,wEAAwE,kBAAkB,wBAAwB,CACjH,AACD,4EAA4E,WAAW,YAAY,kBAAkB,iBAAiB,mBAAmB,kBAAkB,eAAe,aAAa,CACtM,AACD,kDAAkD,WAAW,eAAe,mBAAmB,iBAAiB,aAAa,CAC5H,AACD,oDAAoD,oBAAoB,CACvE,AACD,oDAAoD,WAAW,aAAa,oBAAoB,oBAAoB,aAAa,kBAAkB,yBAAyB,sBAAsB,kBAAkB,CACnN,AACD,sDAAsD,mBAAmB,eAAe,cAAc,eAAe,CACpH,AACD,wDAAwD,gBAAgB,CACvE",file:"answer-content.vue",sourcesContent:["\n.answer-content .operate[data-v-4c29dcab]{width:100%;height:50px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;font-size:22px;text-align:center;color:#54585D;font-weight:600;border-bottom:1px solid #F8F8F8\n}\n.answer-content .operate .back[data-v-4c29dcab]{-ms-flex:1;flex:1\n}\n.answer-content .operate .display[data-v-4c29dcab]{-ms-flex:6;flex:6;font-size:16px\n}\n.answer-content .operate .share[data-v-4c29dcab]{-ms-flex:1;flex:1\n}\n.answer-content .title[data-v-4c29dcab]{width:100%;min-height:50px;max-height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#000;line-height:50px;font-weight:600;font-size:18px\n}\n.answer-content .blank[data-v-4c29dcab]{width:100%;height:7px;background:#EFEFF4\n}\n.answer-content .answer[data-v-4c29dcab]{width:100%\n}\n.answer-content .answer .author[data-v-4c29dcab]{display:-ms-flexbox;display:flex;height:53px;-ms-flex-align:center;align-items:center;border-bottom:1px solid #F8F8F8\n}\n.answer-content .answer .author .head-sculpture[data-v-4c29dcab]{-ms-flex:1;flex:1;margin-left:10px\n}\n.answer-content .answer .author .head-sculpture img[data-v-4c29dcab]{width:38px;margin-top:3px;border-radius:1000px\n}\n.answer-content .answer .author .person-intro[data-v-4c29dcab]{-ms-flex:5;flex:5\n}\n.answer-content .answer .author .person-intro span[data-v-4c29dcab]{display:block\n}\n.answer-content .answer .author .person-intro .name[data-v-4c29dcab]{font-size:14px;color:#4E586E;font-weight:600\n}\n.answer-content .answer .author .person-intro .sign[data-v-4c29dcab]{font-size:12px\n}\n.answer-content .answer .author .focus-button[data-v-4c29dcab]{-ms-flex:1.8;flex:1.8\n}\n.answer-content .answer .author .focus-button .focus[data-v-4c29dcab]{-ms-flex-pack:end;justify-content:flex-end\n}\n.answer-content .answer .author .focus-button .focus div[data-v-4c29dcab]{width:70px;height:30px;text-align:center;line-height:30px;border-radius:5px;border:1px solid #4096FE;color:#4096FE\n}\n.answer-content .answer .author .focus-button .focused[data-v-4c29dcab]{-ms-flex-pack:end;justify-content:flex-end\n}\n.answer-content .answer .author .focus-button .focused div[data-v-4c29dcab]{width:70px;height:30px;text-align:center;line-height:30px;background:#EDEEF0;border-radius:5px;font-size:14px;color:#6D7784\n}\n.answer-content .answer .content[data-v-4c29dcab]{width:100%;font-size:17px;letter-spacing:1px;line-height:27px;color:#585858\n}\n.answer-content .answer .content p[data-v-4c29dcab]{padding:0 7px 0 12px\n}\n.answer-content .answer .copyright[data-v-4c29dcab]{width:100%;height:180px;padding-bottom:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center\n}\n.answer-content .answer .copyright p[data-v-4c29dcab]{padding-right:30px;font-size:16px;color:#AFAFAF;font-weight:600\n}\n.answer-content .answer .copyright div[data-v-4c29dcab]{margin-top:-20px\n}\n"],sourceRoot:"webpack://"}])},,,,,,,,,,,,,,,function(t,e,n){var o=n(166);"string"==typeof o&&(o=[[t.id,o,""]]);n(4)(o,{});o.locals&&(t.exports=o.locals)},,,,,,function(t,e,n){var o=n(172);"string"==typeof o&&(o=[[t.id,o,""]]);n(4)(o,{});o.locals&&(t.exports=o.locals)},,,,,,,,,,,,,,,,,,,function(t,e,n){var o,r;n(187),o=n(124);var a=n(233);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-14949a80",t.exports=o},,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer-foot"},[t._l(t.list,function(e){return[n("li",{on:{click:function(n){t.handle(e.method);
}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("span",[t._v(t._s(e.title))])])]}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.voteDiv,expression:"voteDiv"}],staticClass:"vote",style:{height:t.voteHeight+"px",top:-t.voteHeight+52+"px"},on:{click:function(e){e.target===e.currentTarget&&t.voteHide()}}},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v("为答案投票")]),t._v(" "),n("div",{staticClass:"btn"},[n("div",{staticClass:"agree vote-btn"},[n("div",{staticClass:"btn-box",class:{active:t.agreeIsActive},on:{click:function(e){t.vote("agree")}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-down-copy-copy"}})])]),t._v(" "),n("div",{staticClass:"msg"},[t._v("赞同")])]),t._v(" "),n("div",{staticClass:"disagree vote-btn"},[n("div",{staticClass:"btn-box",class:{active:t.disagreeIsActive},on:{click:function(e){t.vote("disagree")}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-sanjiao"}})])]),t._v(" "),n("div",{staticClass:"msg"},[t._v("反对")])])])])])],2)},staticRenderFns:[]}},,,,,,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer-content"},[n("div",{staticClass:"operate"},[n("div",{staticClass:"back",on:{click:t.goBack}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-fanhui"}})])]),t._v(" "),n("div",{staticClass:"display"},[t._v("\n       回答\n    ")]),t._v(" "),n("div",{staticClass:"share"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-msnui-more"}})])])]),t._v(" "),n("div",{staticClass:"title",on:{click:function(e){t.goQuestion()}}},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"blank"}),t._v(" "),n("div",{staticClass:"answer"},[n("div",{staticClass:"author"},[t._m(0),t._v(" "),n("div",{staticClass:"person-intro"},[n("span",{staticClass:"name"},[t._v(t._s(t.responder))]),t._v(" "),n("span",{staticClass:"sign"},[t._v("这是一个有理想的人")])]),t._v(" "),t.buttonRender?n("div",{staticClass:"focus-button"},[t.focused?n("div",{staticClass:"focused",on:{click:t.cancelPersonFocus}},[n("div",[t._v("\n            已关注\n          ")])]):n("div",{staticClass:"focus",on:{click:t.addPersonFocus}},[n("div",[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-jia"}})]),t._v(" 关注\n          ")])])]):t._e()]),t._v(" "),n("div",{staticClass:"content"},[n("p",[t._v(t._s(t.content))])]),t._v(" "),n("div",{staticClass:"copyright"},[n("div",[n("p",[t._v("创建于 "+t._s(t.date))]),t._v(" "),n("p",[t._v("著作权归作者所有")])])])]),t._v(" "),n("div",{staticClass:"answer-foot"},[n("answer-foot")],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"head-sculpture"},[o("img",{attrs:{src:n(59)}})])}]}}]);
//# sourceMappingURL=0.1b6a95168f956e7ea5af.js.map