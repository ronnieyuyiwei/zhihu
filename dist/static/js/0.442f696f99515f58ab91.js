webpackJsonp([0,17],[,,function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(29)("wks"),a=n(20),r=n(2).Symbol,i="function"==typeof r,s=t.exports=function(t){return o[t]||(o[t]=i&&r[t]||(i?r:a)("Symbol."+t))};s.store=o},,,function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(10),a=n(19);t.exports=n(8)?function(t,e,n){return o.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(14)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(47),a=n(21);t.exports=function(t){return o(a(t))}},function(t,e,n){var o=n(13),a=n(35),r=n(31),i=Object.defineProperty;e.f=n(8)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),a)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},,function(t,e,n){var o=n(15);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e,n){var o=n(37),a=n(26);t.exports=Object.keys||function(t){return o(t,a)}},,function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(10).f,a=n(6),r=n(3)("toStringTag");t.exports=function(t,e,n){t&&!a(t=n?t:t.prototype,r)&&o(t,r,{configurable:!0,value:e})}},function(t,e,n){var o=n(29)("keys"),a=n(20);t.exports=function(t){return o[t]||(o[t]=a(t))}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(2),a=n(11),r=n(32),i=n(7),s="prototype",c=function(t,e,n){var f,u,l,A=t&c.F,d=t&c.G,p=t&c.S,v=t&c.P,h=t&c.B,x=t&c.W,g=d?a:a[e]||(a[e]={}),w=g[s],m=d?o:p?o[e]:(o[e]||{})[s];d&&(n=e);for(f in n)u=!A&&m&&void 0!==m[f],u&&f in g||(l=u?m[f]:n[f],g[f]=d&&"function"!=typeof m[f]?n[f]:h&&u?r(l,o):x&&m[f]==l?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e[s]=t[s],e}(l):v&&"function"==typeof l?r(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[f]=l,t&c.R&&w&&!w[f]&&i(w,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){t.exports=!0},function(t,e,n){var o=n(2),a="__core-js_shared__",r=o[a]||(o[a]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e,n){var o=n(15),a=n(2).document,r=o(a)&&o(a.createElement);t.exports=function(t){return r?a.createElement(t):{}}},function(t,e,n){var o=n(15);t.exports=function(t,e){if(!o(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!o(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!o(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!o(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(34);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,a){return t.call(e,n,o,a)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){"use strict";var o=n(28),a=n(27),r=n(39),i=n(7),s=n(6),c=n(16),f=n(48),u=n(22),l=n(53),A=n(3)("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",h="values",x=function(){return this};t.exports=function(t,e,n,g,w,m,y){f(n,e,g);var C,B,b,_=function(t){if(!d&&t in j)return j[t];switch(t){case v:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",D=w==h,E=!1,j=t.prototype,F=j[A]||j[p]||w&&j[w],W=F||_(w),O=w?D?_("entries"):W:void 0,I="Array"==e?j.entries||F:F;if(I&&(b=l(I.call(new t)),b!==Object.prototype&&(u(b,k,!0),o||s(b,A)||i(b,A,x))),D&&F&&F.name!==h&&(E=!0,W=function(){return F.call(this)}),o&&!y||!d&&!E&&j[A]||i(j,A,W),c[e]=W,c[k]=x,w)if(C={values:D?W:_(h),keys:m?W:_(v),entries:O},y)for(B in C)B in j||r(j,B,C[B]);else a(a.P+a.F*(d||E),e,C);return C}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){t.exports=!n(8)&&!n(14)(function(){return 7!=Object.defineProperty(n(30)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(13),a=n(50),r=n(26),i=n(23)("IE_PROTO"),s=function(){},c="prototype",f=function(){var t,e=n(30)("iframe"),o=r.length,a="<",i=">";for(e.style.display="none",n(43).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(a+"script"+i+"document.F=Object"+a+"/script"+i),t.close(),f=t.F;o--;)delete f[c][r[o]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[c]=o(t),n=new s,s[c]=null,n[i]=t):n=f(),void 0===e?n:a(n,e)}},function(t,e,n){var o=n(6),a=n(9),r=n(46)(!1),i=n(23)("IE_PROTO");t.exports=function(t,e){var n,s=a(t),c=0,f=[];for(n in s)n!=i&&o(s,n)&&f.push(n);for(;e.length>c;)o(s,n=e[c++])&&(~r(f,n)||f.push(n));return f}},,function(t,e,n){t.exports=n(7)},function(t,e,n){var o=n(21);t.exports=function(t){return Object(o(t))}},,,function(t,e,n){t.exports=n(2).document&&document.documentElement},function(t,e,n){var o=n(24),a=Math.min;t.exports=function(t){return t>0?a(o(t),9007199254740991):0}},function(t,e){t.exports=function(){}},function(t,e,n){var o=n(9),a=n(44),r=n(55);t.exports=function(t){return function(e,n,i){var s,c=o(e),f=a(c.length),u=r(i,f);if(t&&n!=n){for(;f>u;)if(s=c[u++],s!=s)return!0}else for(;f>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}}},function(t,e,n){var o=n(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var o=n(36),a=n(19),r=n(22),i={};n(7)(i,n(3)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(i,{next:a(1,n)}),r(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var o=n(10),a=n(13),r=n(17);t.exports=n(8)?Object.defineProperties:function(t,e){a(t);for(var n,i=r(e),s=i.length,c=0;s>c;)o.f(t,n=i[c++],e[n]);return t}},,,function(t,e,n){var o=n(6),a=n(40),r=n(23)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=a(t),o(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,n){var o=n(24),a=n(21);t.exports=function(t){return function(e,n){var r,i,s=String(a(e)),c=o(n),f=s.length;return c<0||c>=f?t?"":void 0:(r=s.charCodeAt(c),r<55296||r>56319||c+1===f||(i=s.charCodeAt(c+1))<56320||i>57343?t?s.charAt(c):r:t?s.slice(c,c+2):(r-55296<<10)+(i-56320)+65536)}}},function(t,e,n){var o=n(24),a=Math.max,r=Math.min;t.exports=function(t,e){return t=o(t),t<0?a(t+e,0):r(t,e)}},function(t,e,n){"use strict";var o=n(45),a=n(49),r=n(16),i=n(9);t.exports=n(33)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,a(1)):"keys"==e?a(0,n):"values"==e?a(0,t[n]):a(0,[n,t[n]])},"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},function(t,e){},function(t,e,n){"use strict";var o=n(54)(!0);n(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(56);for(var o=n(2),a=n(7),r=n(16),i=n(3)("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var f=s[c],u=o[f],l=u&&u.prototype;l&&!l[i]&&a(l,i,f),r[f]=r.Array}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var o=n(25),a=n(3)("toStringTag"),r="Arguments"==o(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=i(e=Object(t),a))?n:r?o(e):"Object"==(s=o(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var o,a,r,i=n(32),s=n(154),c=n(43),f=n(30),u=n(2),l=u.process,A=u.setImmediate,d=u.clearImmediate,p=u.MessageChannel,v=0,h={},x="onreadystatechange",g=function(){var t=+this;if(h.hasOwnProperty(t)){var e=h[t];delete h[t],e()}},w=function(t){g.call(t.data)};A&&d||(A=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return h[++v]=function(){s("function"==typeof t?t:Function(t),e)},o(v),v},d=function(t){delete h[t]},"process"==n(25)(l)?o=function(t){l.nextTick(i(g,t,1))}:p?(a=new p,r=a.port2,a.port1.onmessage=w,o=i(r.postMessage,r,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function(t){u.postMessage(t+"","*")},u.addEventListener("message",w,!1)):o=x in f("script")?function(t){c.appendChild(f("script"))[x]=function(){c.removeChild(this),g.call(t)}}:function(t){setTimeout(i(g,t,1),0)}),t.exports={set:A,clear:d}},,function(t,e,n){n(195);var o=n(1)(n(136),n(241),"data-v-4ca9af41",null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(12),r=o(a);e.default={data:function(){return{login:!1,account:"",voteHeight:0,agreeIsActive:!1,disagreeIsActive:!1,voteDiv:!1,voteState:null,list:[{title:"赞同",icon:"#icon-shangxia",method:"openVote"},{title:"感谢作者",icon:"#icon-icon1",method:""},{title:"加入收藏",icon:"#icon-shoucang",method:""},{title:"评论",icon:"#icon-icon",method:""}]}},name:"answer-foot",created:function(){this.setVoteHeight(),this.initializeVote()},methods:{setVoteHeight:function(){var t=document.documentElement.clientHeight;this.voteHeight=t},initializeVote:function(){var t=this;r.default.get("/answer/vote/initializeVote",{params:{qid:this.$route.params.qid,asId:this.$route.params.asId}}).then(function(e){t.list[0].title=e.data.agreeNum+"赞同","agree"===e.data.attitude?(t.agreeIsActive=!0,t.disagreeIsActive=!1):"disagree"===e.data.attitude?(t.agreeIsActive=!1,t.disagreeIsActive=!0):"neutral"===e.data.attitude&&(t.agreeIsActive=!1,t.disagreeIsActive=!1)}).catch(function(t){console.log(t)})},handle:function(t){"openVote"===t&&(this.voteDiv=!0)},vote:function(t){var e=this;"agree"===t?this.agreeIsActive?(this.agreeIsActive=!1,this.disagreeIsActive=!1):(this.agreeIsActive=!0,this.disagreeIsActive=!1):"disagree"===t&&(this.disagreeIsActive?(this.agreeIsActive=!1,this.disagreeIsActive=!1):(this.agreeIsActive=!1,this.disagreeIsActive=!0)),setTimeout(function(){e.voteHide()},500)},voteHide:function(){var t=this;this.voteDiv=!1;var e=void 0;e=this.agreeIsActive?"agree":this.disagreeIsActive?"disagree":"neutral",r.default.post("/answer/vote",{qid:this.$route.params.qid,asId:this.$route.params.asId,vote:e}).then(function(e){e.data&&t.initializeVote()})}}}},,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(150),r=o(a),i=n(213),s=o(i),c=n(12),f=o(c);e.default={name:"answer-content",data:function(){return{title:"",responder:"",content:"",date:"",buttonRender:!0,focused:!1}},components:{AnswerFoot:s.default},created:function(){var t=this;new r.default(this.getData).then(function(){return new r.default(t.checkFocus)})},methods:{goBack:function(){this.$router.go(-1)},goQuestion:function(){this.$router.replace("/question/"+this.$route.params.qid)},getData:function(t){var e=this;f.default.get("/answer/getAnswer_content",{params:{questionId:this.$route.params.qid,answerId:this.$route.params.asId}}).then(function(n){e.title=n.data[0].title,e.responder=n.data[0].responder,e.content=n.data[0].content,e.date=n.data[0].date,t(e.responder)}).catch(function(t){console.log(t)})},checkFocus:function(){var t=this;f.default.get("/user/checkPersonFocus",{params:{responder:this.responder}}).then(function(e){e.data.render?e.data.focused?t.focused=!0:t.focused=!1:t.buttonRender=!1})},addPersonFocus:function(){var t=this;f.default.post("/user/addPersonFocus",{responder:this.responder}).then(function(e){"ok"===e.data&&(t.focused=!0)})},cancelPersonFocus:function(){var t=this;f.default.post("/user/cancelPersonFocus",{responder:this.responder}).then(function(e){"ok"===e.data&&(t.focused=!1)})}}}},,,,,,,,,,,,,,function(t,e,n){t.exports={default:n(151),__esModule:!0}},function(t,e,n){n(57),n(58),n(59),n(163),t.exports=n(11).Promise},function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var o=n(32),a=n(156),r=n(155),i=n(13),s=n(44),c=n(162),f={},u={},e=t.exports=function(t,e,n,l,A){var d,p,v,h,x=A?function(){return t}:c(t),g=o(n,l,e?2:1),w=0;if("function"!=typeof x)throw TypeError(t+" is not iterable!");if(r(x)){for(d=s(t.length);d>w;w++)if(h=e?g(i(p=t[w])[0],p[1]):g(t[w]),h===f||h===u)return h}else for(v=x.call(t);!(p=v.next()).done;)if(h=a(v,g,p.value,e),h===f||h===u)return h};e.BREAK=f,e.RETURN=u},function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var o=n(16),a=n(3)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||r[a]===t)}},function(t,e,n){var o=n(13);t.exports=function(t,e,n,a){try{return a?e(o(n)[0],n[1]):e(n)}catch(e){var r=t.return;throw void 0!==r&&o(r.call(t)),e}}},function(t,e,n){var o=n(3)("iterator"),a=!1;try{var r=[7][o]();r.return=function(){a=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!a)return!1;var n=!1;try{var r=[7],i=r[o]();i.next=function(){return{done:n=!0}},r[o]=function(){return i},t(r)}catch(t){}return n}},function(t,e,n){var o=n(2),a=n(100).set,r=o.MutationObserver||o.WebKitMutationObserver,i=o.process,s=o.Promise,c="process"==n(25)(i);t.exports=function(){var t,e,n,f=function(){var o,a;for(c&&(o=i.domain)&&o.exit();t;){a=t.fn,t=t.next;try{a()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(c)n=function(){i.nextTick(f)};else if(r){var u=!0,l=document.createTextNode("");new r(f).observe(l,{characterData:!0}),n=function(){l.data=u=!u}}else if(s&&s.resolve){var A=s.resolve();n=function(){A.then(f)}}else n=function(){a.call(o,f)};return function(o){var a={fn:o,next:void 0};e&&(e.next=a),t||(t=a,n()),e=a}}},function(t,e,n){var o=n(7);t.exports=function(t,e,n){for(var a in e)n&&t[a]?t[a]=e[a]:o(t,a,e[a]);return t}},function(t,e,n){"use strict";var o=n(2),a=n(11),r=n(10),i=n(8),s=n(3)("species");t.exports=function(t){var e="function"==typeof a[t]?a[t]:o[t];i&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,n){var o=n(13),a=n(34),r=n(3)("species");t.exports=function(t,e){var n,i=o(t).constructor;return void 0===i||void 0==(n=o(i)[r])?e:a(n)}},function(t,e,n){var o=n(99),a=n(3)("iterator"),r=n(16);t.exports=n(11).getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||r[o(t)]}},function(t,e,n){"use strict";var o,a,r,i=n(28),s=n(2),c=n(32),f=n(99),u=n(27),l=n(15),A=n(34),d=n(152),p=n(153),v=n(161),h=n(100).set,x=n(158)(),g="Promise",w=s.TypeError,m=s.process,y=s[g],m=s.process,C="process"==f(m),B=function(){},b=!!function(){try{var t=y.resolve(1),e=(t.constructor={})[n(3)("species")]=function(t){t(B,B)};return(C||"function"==typeof PromiseRejectionEvent)&&t.then(B)instanceof e}catch(t){}}(),_=function(t,e){return t===e||t===y&&e===r},k=function(t){var e;return!(!l(t)||"function"!=typeof(e=t.then))&&e},D=function(t){return _(y,t)?new E(t):new a(t)},E=a=function(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw w("Bad Promise constructor");e=t,n=o}),this.resolve=A(e),this.reject=A(n)},j=function(t){try{t()}catch(t){return{error:t}}},F=function(t,e){if(!t._n){t._n=!0;var n=t._c;x(function(){for(var o=t._v,a=1==t._s,r=0,i=function(e){var n,r,i=a?e.ok:e.fail,s=e.resolve,c=e.reject,f=e.domain;try{i?(a||(2==t._h&&I(t),t._h=1),i===!0?n=o:(f&&f.enter(),n=i(o),f&&f.exit()),n===e.promise?c(w("Promise-chain cycle")):(r=k(n))?r.call(n,s,c):s(n)):c(o)}catch(t){c(t)}};n.length>r;)i(n[r++]);t._c=[],t._n=!1,e&&!t._h&&W(t)})}},W=function(t){h.call(s,function(){var e,n,o,a=t._v;if(O(t)&&(e=j(function(){C?m.emit("unhandledRejection",a,t):(n=s.onunhandledrejection)?n({promise:t,reason:a}):(o=s.console)&&o.error&&o.error("Unhandled promise rejection",a)}),t._h=C||O(t)?2:1),t._a=void 0,e)throw e.error})},O=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,o=0;n.length>o;)if(e=n[o++],e.fail||!O(e.promise))return!1;return!0},I=function(t){h.call(s,function(){var e;C?m.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},M=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),F(e,!0))},P=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw w("Promise can't be resolved itself");(e=k(t))?x(function(){var o={_w:n,_d:!1};try{e.call(t,c(P,o,1),c(M,o,1))}catch(t){M.call(o,t)}}):(n._v=t,n._s=1,F(n,!1))}catch(t){M.call({_w:n,_d:!1},t)}}};b||(y=function(t){d(this,y,g,"_h"),A(t),o.call(this);try{t(c(P,this,1),c(M,this,1))}catch(t){M.call(this,t)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=n(159)(y.prototype,{then:function(t,e){var n=D(v(this,y));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=C?m.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&F(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),E=function(){var t=new o;this.promise=t,this.resolve=c(P,t,1),this.reject=c(M,t,1)}),u(u.G+u.W+u.F*!b,{Promise:y}),n(22)(y,g),n(160)(g),r=n(11)[g],u(u.S+u.F*!b,g,{reject:function(t){var e=D(this),n=e.reject;return n(t),e.promise}}),u(u.S+u.F*(i||!b),g,{resolve:function(t){if(t instanceof y&&_(t.constructor,this))return t;var e=D(this),n=e.resolve;return n(t),e.promise}}),u(u.S+u.F*!(b&&n(157)(function(t){y.all(t).catch(B)})),g,{all:function(t){var e=this,n=D(e),o=n.resolve,a=n.reject,r=j(function(){var n=[],r=0,i=1;p(t,!1,function(t){var s=r++,c=!1;n.push(void 0),i++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--i||o(n))},a)}),--i||o(n)});return r&&a(r.error),n.promise},race:function(t){var e=this,n=D(e),o=n.reject,a=j(function(){p(t,!1,function(t){e.resolve(t).then(n.resolve,o)})});return a&&o(a.error),n.promise}})},,,,,,,,,,function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".answer-content .operate[data-v-4ca9af41]{width:100%;height:50px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;font-size:22px;text-align:center;color:#54585d;font-weight:600;border-bottom:1px solid #f8f8f8}.answer-content .operate .back[data-v-4ca9af41]{-ms-flex:1;flex:1}.answer-content .operate .display[data-v-4ca9af41]{-ms-flex:6;flex:6;font-size:16px}.answer-content .operate .share[data-v-4ca9af41]{-ms-flex:1;flex:1}.answer-content .title[data-v-4ca9af41]{width:100%;min-height:50px;max-height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#000;line-height:50px;font-weight:600;font-size:18px}.answer-content .blank[data-v-4ca9af41]{width:100%;height:7px;background:#efeff4}.answer-content .answer[data-v-4ca9af41]{width:100%}.answer-content .answer .author[data-v-4ca9af41]{display:-ms-flexbox;display:flex;height:53px;-ms-flex-align:center;align-items:center;border-bottom:1px solid #f8f8f8}.answer-content .answer .author .head-sculpture[data-v-4ca9af41]{-ms-flex:1;flex:1;margin-left:10px}.answer-content .answer .author .head-sculpture img[data-v-4ca9af41]{width:38px;margin-top:3px;border-radius:1000px}.answer-content .answer .author .person-intro[data-v-4ca9af41]{-ms-flex:5;flex:5}.answer-content .answer .author .person-intro span[data-v-4ca9af41]{display:block}.answer-content .answer .author .person-intro .name[data-v-4ca9af41]{font-size:14px;color:#4e586e;font-weight:600}.answer-content .answer .author .person-intro .sign[data-v-4ca9af41]{font-size:12px}.answer-content .answer .author .focus-button[data-v-4ca9af41]{-ms-flex:1.8;flex:1.8}.answer-content .answer .author .focus-button .focus[data-v-4ca9af41]{-ms-flex-pack:end;justify-content:flex-end}.answer-content .answer .author .focus-button .focus div[data-v-4ca9af41]{width:70px;height:30px;text-align:center;line-height:30px;border-radius:5px;border:1px solid #4096fe;color:#4096fe}.answer-content .answer .author .focus-button .focused[data-v-4ca9af41]{-ms-flex-pack:end;justify-content:flex-end}.answer-content .answer .author .focus-button .focused div[data-v-4ca9af41]{width:70px;height:30px;text-align:center;line-height:30px;background:#edeef0;border-radius:5px;font-size:14px;color:#6d7784}.answer-content .answer .content[data-v-4ca9af41]{width:100%;font-size:17px;letter-spacing:1px;line-height:27px;color:#585858}.answer-content .answer .content p[data-v-4ca9af41]{padding:0 7px 0 12px}.answer-content .answer .copyright[data-v-4ca9af41]{width:100%;height:180px;padding-bottom:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.answer-content .answer .copyright p[data-v-4ca9af41]{padding-right:30px;font-size:16px;color:#afafaf;font-weight:600}.answer-content .answer .copyright div[data-v-4ca9af41]{margin-top:-20px}","",{version:3,sources:["/./src/pages/answer/answer-content.vue"],names:[],mappings:"AACA,0CAA0C,WAAW,YAAY,oBAAoB,aAAa,sBAAsB,8BAA8B,sBAAsB,mBAAmB,eAAe,kBAAkB,cAAc,gBAAgB,+BAA+B,CAC5R,AACD,gDAAgD,WAAW,MAAM,CAChE,AACD,mDAAmD,WAAW,OAAO,cAAc,CAClF,AACD,iDAAiD,WAAW,MAAM,CACjE,AACD,wCAAwC,WAAW,gBAAgB,gBAAgB,oBAAoB,aAAa,sBAAsB,mBAAmB,qBAAqB,uBAAuB,kBAAkB,WAAW,iBAAiB,gBAAgB,cAAc,CACpR,AACD,wCAAwC,WAAW,WAAW,kBAAkB,CAC/E,AACD,yCAAyC,UAAU,CAClD,AACD,iDAAiD,oBAAoB,aAAa,YAAY,sBAAsB,mBAAmB,+BAA+B,CACrK,AACD,iEAAiE,WAAW,OAAO,gBAAgB,CAClG,AACD,qEAAqE,WAAW,eAAe,oBAAoB,CAClH,AACD,+DAA+D,WAAW,MAAM,CAC/E,AACD,oEAAoE,aAAa,CAChF,AACD,qEAAqE,eAAe,cAAc,eAAe,CAChH,AACD,qEAAqE,cAAc,CAClF,AACD,+DAA+D,aAAa,QAAQ,CACnF,AACD,sEAAsE,kBAAkB,wBAAwB,CAC/G,AACD,0EAA0E,WAAW,YAAY,kBAAkB,iBAAiB,kBAAkB,yBAAyB,aAAa,CAC3L,AACD,wEAAwE,kBAAkB,wBAAwB,CACjH,AACD,4EAA4E,WAAW,YAAY,kBAAkB,iBAAiB,mBAAmB,kBAAkB,eAAe,aAAa,CACtM,AACD,kDAAkD,WAAW,eAAe,mBAAmB,iBAAiB,aAAa,CAC5H,AACD,oDAAoD,oBAAoB,CACvE,AACD,oDAAoD,WAAW,aAAa,oBAAoB,oBAAoB,aAAa,kBAAkB,yBAAyB,sBAAsB,kBAAkB,CACnN,AACD,sDAAsD,mBAAmB,eAAe,cAAc,eAAe,CACpH,AACD,wDAAwD,gBAAgB,CACvE",file:"answer-content.vue",sourcesContent:["\n.answer-content .operate[data-v-4ca9af41]{width:100%;height:50px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;font-size:22px;text-align:center;color:#54585D;font-weight:600;border-bottom:1px solid #F8F8F8\n}\n.answer-content .operate .back[data-v-4ca9af41]{-ms-flex:1;flex:1\n}\n.answer-content .operate .display[data-v-4ca9af41]{-ms-flex:6;flex:6;font-size:16px\n}\n.answer-content .operate .share[data-v-4ca9af41]{-ms-flex:1;flex:1\n}\n.answer-content .title[data-v-4ca9af41]{width:100%;min-height:50px;max-height:60px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#000;line-height:50px;font-weight:600;font-size:18px\n}\n.answer-content .blank[data-v-4ca9af41]{width:100%;height:7px;background:#EFEFF4\n}\n.answer-content .answer[data-v-4ca9af41]{width:100%\n}\n.answer-content .answer .author[data-v-4ca9af41]{display:-ms-flexbox;display:flex;height:53px;-ms-flex-align:center;align-items:center;border-bottom:1px solid #F8F8F8\n}\n.answer-content .answer .author .head-sculpture[data-v-4ca9af41]{-ms-flex:1;flex:1;margin-left:10px\n}\n.answer-content .answer .author .head-sculpture img[data-v-4ca9af41]{width:38px;margin-top:3px;border-radius:1000px\n}\n.answer-content .answer .author .person-intro[data-v-4ca9af41]{-ms-flex:5;flex:5\n}\n.answer-content .answer .author .person-intro span[data-v-4ca9af41]{display:block\n}\n.answer-content .answer .author .person-intro .name[data-v-4ca9af41]{font-size:14px;color:#4E586E;font-weight:600\n}\n.answer-content .answer .author .person-intro .sign[data-v-4ca9af41]{font-size:12px\n}\n.answer-content .answer .author .focus-button[data-v-4ca9af41]{-ms-flex:1.8;flex:1.8\n}\n.answer-content .answer .author .focus-button .focus[data-v-4ca9af41]{-ms-flex-pack:end;justify-content:flex-end\n}\n.answer-content .answer .author .focus-button .focus div[data-v-4ca9af41]{width:70px;height:30px;text-align:center;line-height:30px;border-radius:5px;border:1px solid #4096FE;color:#4096FE\n}\n.answer-content .answer .author .focus-button .focused[data-v-4ca9af41]{-ms-flex-pack:end;justify-content:flex-end\n}\n.answer-content .answer .author .focus-button .focused div[data-v-4ca9af41]{width:70px;height:30px;text-align:center;line-height:30px;background:#EDEEF0;border-radius:5px;font-size:14px;color:#6D7784\n}\n.answer-content .answer .content[data-v-4ca9af41]{width:100%;font-size:17px;letter-spacing:1px;line-height:27px;color:#585858\n}\n.answer-content .answer .content p[data-v-4ca9af41]{padding:0 7px 0 12px\n}\n.answer-content .answer .copyright[data-v-4ca9af41]{width:100%;height:180px;padding-bottom:60px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center\n}\n.answer-content .answer .copyright p[data-v-4ca9af41]{padding-right:30px;font-size:16px;color:#AFAFAF;font-weight:600\n}\n.answer-content .answer .copyright div[data-v-4ca9af41]{margin-top:-20px\n}\n"],sourceRoot:"webpack://"}])},,,,,,function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".answer-foot[data-v-a05e8ad4]{height:52px;width:100%;max-width:640px;background:#fff;position:fixed;bottom:0;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#888d97;font-size:21px;border-top:1px solid #e7e7e7}.answer-foot li[data-v-a05e8ad4]{height:52px;display:block;-ms-flex:1;flex:1}.answer-foot li .icon[data-v-a05e8ad4]{margin-top:5px}.answer-foot li span[data-v-a05e8ad4]{display:block;font-size:13px;color:#888d97}.answer-foot .vote[data-v-a05e8ad4]{position:absolute;left:0;width:100%;background:rgba(38,38,38,.3);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.answer-foot .vote .content[data-v-a05e8ad4]{width:240px;background:#fff;border-radius:8px;height:140px}.answer-foot .vote .content .title[data-v-a05e8ad4]{margin-top:10px;color:#979797;font-size:15px}.answer-foot .vote .content .btn[data-v-a05e8ad4]{margin-top:10px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;width:100%}.answer-foot .vote .content .btn .vote-btn[data-v-a05e8ad4]{width:52px;color:#afafaf;font-size:14px}.answer-foot .vote .content .btn .vote-btn .btn-box[data-v-a05e8ad4]{width:52px;height:52px;border:1px solid #e7e7e7;border-radius:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:35px}.answer-foot .vote .content .btn .vote-btn .active[data-v-a05e8ad4]{background:#2da1fe}.answer-foot .vote .content .btn .vote-btn .active .icon[data-v-a05e8ad4]{color:#fff}.answer-foot .vote .content .btn .vote-btn .msg[data-v-a05e8ad4]{margin-top:5px}","",{version:3,sources:["/./src/components/answer/answer-foot.vue"],names:[],mappings:"AACA,8BAA8B,YAAY,WAAW,gBAAgB,gBAAiB,eAAe,SAAS,2BAA2B,oBAAoB,sBAAsB,mBAAmB,qBAAqB,uBAAuB,kBAAkB,cAAc,eAAe,4BAA4B,CAC5T,AACD,iCAAiC,YAAY,cAAc,WAAW,MAAM,CAC3E,AACD,uCAAuC,cAAc,CACpD,AACD,sCAAsC,cAAc,eAAe,aAAa,CAC/E,AACD,oCAAoC,kBAAkB,OAAO,WAAW,6BAA8B,oBAAoB,aAAa,qBAAqB,uBAAuB,sBAAsB,kBAAkB,CAC1N,AACD,6CAA6C,YAAY,gBAAiB,kBAAkB,YAAY,CACvG,AACD,oDAAoD,gBAAgB,cAAc,cAAc,CAC/F,AACD,kDAAkD,gBAAgB,oBAAoB,aAAa,yBAAyB,6BAA6B,sBAAsB,mBAAmB,UAAU,CAC3M,AACD,4DAA4D,WAAW,cAAc,cAAc,CAClG,AACD,qEAAqE,WAAW,YAAY,yBAAyB,kBAAkB,oBAAoB,aAAa,qBAAqB,uBAAuB,sBAAsB,mBAAmB,cAAc,CAC1Q,AACD,oEAAoE,kBAAkB,CACrF,AACD,0EAA0E,UAAW,CACpF,AACD,iEAAiE,cAAc,CAC9E",file:"answer-foot.vue",sourcesContent:["\n.answer-foot[data-v-a05e8ad4]{height:52px;width:100%;max-width:640px;background:white;position:fixed;bottom:0;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#888D97;font-size:21px;border-top:1px solid #E7E7E7\n}\n.answer-foot li[data-v-a05e8ad4]{height:52px;display:block;-ms-flex:1;flex:1\n}\n.answer-foot li .icon[data-v-a05e8ad4]{margin-top:5px\n}\n.answer-foot li span[data-v-a05e8ad4]{display:block;font-size:13px;color:#888D97\n}\n.answer-foot .vote[data-v-a05e8ad4]{position:absolute;left:0;width:100%;background:rgba(38,38,38,0.3);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center\n}\n.answer-foot .vote .content[data-v-a05e8ad4]{width:240px;background:white;border-radius:8px;height:140px\n}\n.answer-foot .vote .content .title[data-v-a05e8ad4]{margin-top:10px;color:#979797;font-size:15px\n}\n.answer-foot .vote .content .btn[data-v-a05e8ad4]{margin-top:10px;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;width:100%\n}\n.answer-foot .vote .content .btn .vote-btn[data-v-a05e8ad4]{width:52px;color:#AFAFAF;font-size:14px\n}\n.answer-foot .vote .content .btn .vote-btn .btn-box[data-v-a05e8ad4]{width:52px;height:52px;border:1px solid #E7E7E7;border-radius:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;font-size:35px\n}\n.answer-foot .vote .content .btn .vote-btn .active[data-v-a05e8ad4]{background:#2DA1FE\n}\n.answer-foot .vote .content .btn .vote-btn .active .icon[data-v-a05e8ad4]{color:white\n}\n.answer-foot .vote .content .btn .vote-btn .msg[data-v-a05e8ad4]{margin-top:5px\n}\n"],sourceRoot:"webpack://"}])},,,,,,,,,,,,,,,,function(t,e,n){var o=n(173);"string"==typeof o&&(o=[[t.id,o,""]]);n(5)(o,{});o.locals&&(t.exports=o.locals)},,,,,,,,function(t,e,n){var o=n(179);"string"==typeof o&&(o=[[t.id,o,""]]);n(5)(o,{});o.locals&&(t.exports=o.locals)},,,,,,,,,,function(t,e,n){n(203);var o=n(1)(n(125),n(249),"data-v-a05e8ad4",null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer-content"},[n("div",{staticClass:"operate"},[n("div",{staticClass:"back",on:{click:t.goBack}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-fanhui"}})])]),t._v(" "),n("div",{staticClass:"display"},[t._v("\n       回答\n    ")]),t._v(" "),n("div",{staticClass:"share"},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-msnui-more"
}})])])]),t._v(" "),n("div",{staticClass:"title",on:{click:function(e){t.goQuestion()}}},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"blank"}),t._v(" "),n("div",{staticClass:"answer"},[n("div",{staticClass:"author"},[t._m(0),t._v(" "),n("div",{staticClass:"person-intro"},[n("span",{staticClass:"name"},[t._v(t._s(t.responder))]),t._v(" "),n("span",{staticClass:"sign"},[t._v("这是一个有理想的人")])]),t._v(" "),t.buttonRender?n("div",{staticClass:"focus-button"},[t.focused?n("div",{staticClass:"focused",on:{click:t.cancelPersonFocus}},[n("div",[t._v("\n            已关注\n          ")])]):n("div",{staticClass:"focus",on:{click:t.addPersonFocus}},[n("div",[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-jia"}})]),t._v(" 关注\n          ")])])]):t._e()]),t._v(" "),n("div",{staticClass:"content"},[n("p",[t._v(t._s(t.content))])]),t._v(" "),n("div",{staticClass:"copyright"},[n("div",[n("p",[t._v("创建于 "+t._s(t.date))]),t._v(" "),n("p",[t._v("著作权归作者所有")])])])]),t._v(" "),n("div",{staticClass:"answer-foot"},[n("answer-foot")],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"head-sculpture"},[o("img",{attrs:{src:n(60)}})])}]}},,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer-foot"},[t._l(t.list,function(e){return[n("li",{on:{click:function(n){t.handle(e.method)}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.icon}})]),t._v(" "),n("span",[t._v(t._s(e.title))])])]}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.voteDiv,expression:"voteDiv"}],staticClass:"vote",style:{height:t.voteHeight+"px",top:-t.voteHeight+52+"px"},on:{click:function(e){return e.target!==e.currentTarget?null:void t.voteHide()}}},[n("div",{staticClass:"content"},[n("div",{staticClass:"title"},[t._v("为答案投票")]),t._v(" "),n("div",{staticClass:"btn"},[n("div",{staticClass:"agree vote-btn"},[n("div",{staticClass:"btn-box",class:{active:t.agreeIsActive},on:{click:function(e){t.vote("agree")}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-down-copy-copy"}})])]),t._v(" "),n("div",{staticClass:"msg"},[t._v("赞同")])]),t._v(" "),n("div",{staticClass:"disagree vote-btn"},[n("div",{staticClass:"btn-box",class:{active:t.disagreeIsActive},on:{click:function(e){t.vote("disagree")}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-sanjiao"}})])]),t._v(" "),n("div",{staticClass:"msg"},[t._v("反对")])])])])])],2)},staticRenderFns:[]}}]);
//# sourceMappingURL=0.442f696f99515f58ab91.js.map