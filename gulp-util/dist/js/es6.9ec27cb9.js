!function o(i,a,c){function u(r,t){if(!a[r]){if(!i[r]){var e="function"==typeof require&&require;if(!t&&e)return e(r,!0);if(l)return l(r,!0);throw new Error("Cannot find module '"+r+"'")}var n=a[r]={exports:{}};i[r][0].call(n.exports,function(t){var e=i[r][1][t];return u(e||t)},n,n.exports,o,i,a,c)}return a[r].exports}for(var l="function"==typeof require&&require,t=0;t<c.length;t++)u(c[t]);return u}({1:[function(t,e,r){e.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},{}],2:[function(t,e,r){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},{}],3:[function(t,e,r){e.exports=function(t){return t&&t.__esModule?t:{default:t}}},{}],4:[function(t,e,r){var n=function(i){"use strict";var u,t=Object.prototype,l=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function a(t,e,r,n){var i,a,c,u,o=e&&e.prototype instanceof d?e:d,l=Object.create(o.prototype),s=new O(n||[]);return l._invoke=(i=t,a=r,c=s,u=h,function(t,e){if(u===y)throw new Error("Generator is already running");if(u===v){if("throw"===t)throw e;return C()}for(c.method=t,c.arg=e;;){var r=c.delegate;if(r){var n=_(r,c);if(n){if(n===g)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===h)throw u=v,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=y;var o=f(i,a,c);if("normal"===o.type){if(u=c.done?v:p,o.arg===g)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=v,c.method="throw",c.arg=o.arg)}}),l}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}i.wrap=a;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",g={};function d(){}function c(){}function s(){}var m={};m[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==t&&l.call(x,o)&&(m=x);var b=s.prototype=d.prototype=Object.create(m);function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(u){var e;this._invoke=function(r,n){function t(){return new Promise(function(t,e){!function e(t,r,n,o){var i=f(u[t],u,r);if("throw"!==i.type){var a=i.arg,c=a.value;return c&&"object"==typeof c&&l.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):Promise.resolve(c).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)})}o(i.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function _(t,e){var r=t.iterator[e.method];if(r===u){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=u,_(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,g;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(l.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=u,t.done=!0,t};return n.next=n}}return{next:C}}function C(){return{value:u,done:!0}}return c.prototype=b.constructor=s,s.constructor=c,s[n]=c.displayName="GeneratorFunction",i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,s):(t.__proto__=s,n in t||(t[n]="GeneratorFunction")),t.prototype=Object.create(b),t},i.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[r]=function(){return this},i.AsyncIterator=E,i.async=function(t,e,r,n){var o=new E(a(t,e,r,n));return i.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},L(b),b[n]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},i.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=l.call(o,"catchLoc"),c=l.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),g}},i}("object"==typeof e?e.exports:{});try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},{}],5:[function(t,e,r){e.exports=t("regenerator-runtime")},{"regenerator-runtime":4}],6:[function(t,e,r){"use strict";var n,o,i,a,c,u,l=t("@babel/runtime/helpers/interopRequireDefault"),s=l(t("@babel/runtime/regenerator")),f=l(t("@babel/runtime/helpers/classCallCheck")),h=l(t("@babel/runtime/helpers/createClass"));console.log(6,1,2),o=(n=[1,2,3,4])[0],i=n[1],a=n[2],console.log(o,i,a),function(t){var e=0<arguments.length&&void 0!==t?t:{},r=e.x,n=e.y,o=void 0===n?5:n;console.log(r,o)}({x:4}),function(){console.log("xx");console.log(1+2)}(),c=function(){function r(t,e){(0,f.default)(this,r),this.x=t,this.y=e}return(0,h.default)(r,[{key:"toString",value:function(){return"("+this.x+", "+this.y+")"}}]),r}(),console.log(new c("你好","吗").toString()),new Promise(function(t,e){console.log("Promise"),t()}).then(function(){console.log("resolved.")}),console.log("Hi!"),s.default.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.default.awrap(new Promise(function(t){setTimeout(function(){t("async await test...")},1e3)}));case 2:u=t.sent,console.log(u);case 4:case"end":return t.stop()}})},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3,"@babel/runtime/regenerator":5}]},{},[6]);