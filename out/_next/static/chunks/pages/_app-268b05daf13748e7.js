(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7406:function(t,e,r){"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[Z]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===q}(t)||Array.isArray(t)||!!t[B]||!!t.constructor[B]||p(t)||y(t))}function u(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:J)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[Z];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:p(t)?2:y(t)?3:0}function f(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function a(t,e){return 2===c(t)?t.get(e):t[e]}function s(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function l(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function p(t){return V&&t instanceof Map}function y(t){return X&&t instanceof Set}function d(t){return t.o||t.t}function v(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=G(t);delete e[Z];for(var r=J(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function b(t,e){return void 0===e&&(e=!1),m(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=h),Object.freeze(t),e&&u(t,(function(t,e){return b(e,!0)}),!0)),t}function h(){n(2)}function m(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function g(t){var e=H[t];return e||n(18,t),e}function O(t,e){H[t]||(H[t]=e)}function w(){return U}function S(t,e){e&&(g("Patches"),t.u=[],t.s=[],t.v=e)}function P(t){j(t),t.p.forEach(_),t.p=null}function j(t){t===U&&(U=t.l)}function E(t){return U={p:[],l:U,h:t,m:!0,_:0}}function _(t){var e=t[Z];0===e.i||1===e.i?e.j():e.O=!0}function x(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.g||g("ES5").S(e,t,o),o?(r[Z].P&&(P(e),n(4)),i(t)&&(t=A(e,t),e.l||N(e,t)),e.u&&g("Patches").M(r[Z].t,t,e.u,e.s)):t=A(e,r,[]),P(e),e.u&&e.v(e.u,e.s),t!==W?t:void 0}function A(t,e,r){if(m(e))return e;var n=e[Z];if(!n)return u(e,(function(o,i){return D(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return N(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=v(n.k):n.o;u(3===n.i?new Set(o):o,(function(e,i){return D(t,n,o,e,i,r)})),N(t,o,!1),r&&t.u&&g("Patches").R(n,r,t.u,t.s)}return n.o}function D(t,e,r,n,u,c){if(o(u)){var a=A(t,u,c&&e&&3!==e.i&&!f(e.D,n)?c.concat(n):void 0);if(s(r,n,a),!o(a))return;t.m=!1}if(i(u)&&!m(u)){if(!t.h.F&&t._<1)return;A(t,u),e&&e.A.l||N(t,u)}}function N(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&b(e,r)}function C(t,e){var r=t[Z];return(r?d(r):t)[e]}function I(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function $(t){t.P||(t.P=!0,t.l&&$(t.l))}function k(t){t.o||(t.o=v(t.t))}function M(t,e,r){var n=p(e)?g("MapSet").N(e,r):y(e)?g("MapSet").T(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:w(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=Q;r&&(o=[n],i=Y);var u=Proxy.revocable(o,i),c=u.revoke,f=u.proxy;return n.k=f,n.j=c,f}(e,r):g("ES5").J(e,r);return(r?r.A:w()).p.push(n),n}function R(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[Z],o=c(e);if(n){if(!n.P&&(n.i<4||!g("ES5").K(n)))return n.t;n.I=!0,r=T(e,o),n.I=!1}else r=T(e,o);return u(r,(function(e,o){n&&a(n.t,e)===o||s(r,e,t(o))})),3===o?new Set(r):r}(t)}function T(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return v(t)}function F(){function t(t,e){var r=i[t];return r?r.enumerable=e:i[t]=r={configurable:!0,enumerable:e,get:function(){var e=this[Z];return Q.get(e,t)},set:function(e){var r=this[Z];Q.set(r,t,e)}},r}function e(t){for(var e=t.length-1;e>=0;e--){var o=t[e][Z];if(!o.P)switch(o.i){case 5:n(o)&&$(o);break;case 4:r(o)&&$(o)}}}function r(t){for(var e=t.t,r=t.k,n=J(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==Z){var u=e[i];if(void 0===u&&!f(e,i))return!0;var c=r[i],a=c&&c[Z];if(a?a.t!==u:!l(c,u))return!0}}var s=!!e[Z];return n.length!==J(e).length+(s?0:1)}function n(t){var e=t.k;if(e.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(e,e.length-1);if(r&&!r.get)return!0;for(var n=0;n<e.length;n++)if(!e.hasOwnProperty(n))return!0;return!1}var i={};O("ES5",{J:function(e,r){var n=Array.isArray(e),o=function(e,r){if(e){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,t(o,!0));return n}var i=G(r);delete i[Z];for(var u=J(i),c=0;c<u.length;c++){var f=u[c];i[f]=t(f,e||!!i[f].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,e),i={i:n?5:4,A:r?r.A:w(),P:!1,I:!1,D:{},l:r,t:e,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,Z,{value:i,writable:!0}),o},S:function(t,r,i){i?o(r)&&r[Z].A===t&&e(t.p):(t.u&&function t(e){if(e&&"object"==typeof e){var r=e[Z];if(r){var o=r.t,i=r.k,c=r.D,a=r.i;if(4===a)u(i,(function(e){e!==Z&&(void 0!==o[e]||f(o,e)?c[e]||t(i[e]):(c[e]=!0,$(r)))})),u(o,(function(t){void 0!==i[t]||f(i,t)||(c[t]=!1,$(r))}));else if(5===a){if(n(r)&&($(r),c.length=!0),i.length<o.length)for(var s=i.length;s<o.length;s++)c[s]=!1;else for(var l=o.length;l<i.length;l++)c[l]=!0;for(var p=Math.min(i.length,o.length),y=0;y<p;y++)i.hasOwnProperty(y)||(c[y]=!0),void 0===c[y]&&t(i[y])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?r(t):n(t)}})}r.d(e,{xC:function(){return Ct},oM:function(){return kt}});var z,U,L="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),V="undefined"!=typeof Map,X="undefined"!=typeof Set,K="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,W=L?Symbol.for("immer-nothing"):((z={})["immer-nothing"]=!0,z),B=L?Symbol.for("immer-draftable"):"__$immer_draftable",Z=L?Symbol.for("immer-state"):"__$immer_state",q=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),J="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,G=Object.getOwnPropertyDescriptors||function(t){var e={};return J(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},H={},Q={get:function(t,e){if(e===Z)return t;var r=d(t);if(!f(r,e))return function(t,e,r){var n,o=I(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===C(t.t,e)?(k(t),t.o[e]=M(t.A.h,n,t)):n},has:function(t,e){return e in d(t)},ownKeys:function(t){return Reflect.ownKeys(d(t))},set:function(t,e,r){var n=I(d(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=C(d(t),e),i=null==o?void 0:o[Z];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(l(r,o)&&(void 0!==r||f(t.t,e)))return!0;k(t),$(t)}return t.o[e]===r&&"number"!=typeof r&&(void 0!==r||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==C(t.t,e)||e in t.t?(t.D[e]=!1,k(t),$(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=d(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},Y={};u(Q,(function(t,e){Y[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Y.deleteProperty=function(t,e){return Y.set.call(this,t,e,void 0)},Y.set=function(t,e,r){return Q.set.call(this,t[0],e,r,t[0])};var tt=function(){function t(t){var e=this;this.g=K,this.F=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var u=r;r=t;var c=e;return function(t){var e=this;void 0===t&&(t=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return c.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var f;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var a=E(e),s=M(e,t,void 0),l=!0;try{f=r(s),l=!1}finally{l?P(a):j(a)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(t){return S(a,o),x(t,a)}),(function(t){throw P(a),t})):(S(a,o),x(f,a))}if(!t||"object"!=typeof t){if(void 0===(f=r(t))&&(f=t),f===W&&(f=void 0),e.F&&b(f,!0),o){var p=[],y=[];g("Patches").M(t,f,p,y),o(p,y)}return f}n(21,t)},this.produceWithPatches=function(t,r){if("function"==typeof t)return function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))};var n,o,i=e.produce(t,r,(function(t,e){n=t,o=e}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(t){return[t,n,o]})):[i,n,o]},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=R(t));var e=E(this),r=M(this,t,void 0);return r[Z].C=!0,j(e),r},e.finishDraft=function(t,e){var r=(t&&t[Z]).A;return S(r,e),x(void 0,r)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!K&&n(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}r>-1&&(e=e.slice(r+1));var i=g("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e)}))},t}(),et=new tt,rt=et.produce,nt=(et.produceWithPatches.bind(et),et.setAutoFreeze.bind(et),et.setUseProxies.bind(et),et.applyPatches.bind(et),et.createDraft.bind(et),et.finishDraft.bind(et),rt),ot=r(4942);function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ut(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){(0,ot.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function ct(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var ft="function"===typeof Symbol&&Symbol.observable||"@@observable",at=function(){return Math.random().toString(36).substring(7).split("").join(".")},st={INIT:"@@redux/INIT"+at(),REPLACE:"@@redux/REPLACE"+at(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+at()}};function lt(t){if("object"!==typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function pt(t,e,r){var n;if("function"===typeof e&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(ct(0));if("function"===typeof e&&"undefined"===typeof r&&(r=e,e=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(ct(1));return r(pt)(t,e)}if("function"!==typeof t)throw new Error(ct(2));var o=t,i=e,u=[],c=u,f=!1;function a(){c===u&&(c=u.slice())}function s(){if(f)throw new Error(ct(3));return i}function l(t){if("function"!==typeof t)throw new Error(ct(4));if(f)throw new Error(ct(5));var e=!0;return a(),c.push(t),function(){if(e){if(f)throw new Error(ct(6));e=!1,a();var r=c.indexOf(t);c.splice(r,1),u=null}}}function p(t){if(!lt(t))throw new Error(ct(7));if("undefined"===typeof t.type)throw new Error(ct(8));if(f)throw new Error(ct(9));try{f=!0,i=o(i,t)}finally{f=!1}for(var e=u=c,r=0;r<e.length;r++){(0,e[r])()}return t}function y(t){if("function"!==typeof t)throw new Error(ct(10));o=t,p({type:st.REPLACE})}function d(){var t,e=l;return(t={subscribe:function(t){if("object"!==typeof t||null===t)throw new Error(ct(11));function r(){t.next&&t.next(s())}return r(),{unsubscribe:e(r)}}})[ft]=function(){return this},t}return p({type:st.INIT}),(n={dispatch:p,subscribe:l,getState:s,replaceReducer:y})[ft]=d,n}function yt(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var o=e[n];0,"function"===typeof t[o]&&(r[o]=t[o])}var i,u=Object.keys(r);try{!function(t){Object.keys(t).forEach((function(e){var r=t[e];if("undefined"===typeof r(void 0,{type:st.INIT}))throw new Error(ct(12));if("undefined"===typeof r(void 0,{type:st.PROBE_UNKNOWN_ACTION()}))throw new Error(ct(13))}))}(r)}catch(c){i=c}return function(t,e){if(void 0===t&&(t={}),i)throw i;for(var n=!1,o={},c=0;c<u.length;c++){var f=u[c],a=r[f],s=t[f],l=a(s,e);if("undefined"===typeof l){e&&e.type;throw new Error(ct(14))}o[f]=l,n=n||l!==s}return(n=n||u.length!==Object.keys(t).length)?o:t}}function dt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function vt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(ct(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=e.map((function(t){return t(o)}));return n=dt.apply(void 0,i)(r.dispatch),ut(ut({},r),{},{dispatch:n})}}}function bt(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"===typeof o?o(r,n,t):e(o)}}}}var ht=bt();ht.withExtraArgument=bt;var mt=ht,gt=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Ot=function(t,e){for(var r=0,n=e.length,o=t.length;r<n;r++,o++)t[o]=e[r];return t},wt=Object.defineProperty,St=(Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols),Pt=Object.prototype.hasOwnProperty,jt=Object.prototype.propertyIsEnumerable,Et=function(t,e,r){return e in t?wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r},_t=function(t,e){for(var r in e||(e={}))Pt.call(e,r)&&Et(t,r,e[r]);if(St)for(var n=0,o=St(e);n<o.length;n++){r=o[n];jt.call(e,r)&&Et(t,r,e[r])}return t},xt="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?dt:dt.apply(null,arguments)};"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function At(t){if("object"!==typeof t||null===t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;for(var r=e;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return e===r}var Dt=function(t){function e(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=t.apply(this,r)||this;return Object.setPrototypeOf(o,e.prototype),o}return gt(e,t),Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.prototype.concat.apply(this,e)},e.prototype.prepend=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 1===t.length&&Array.isArray(t[0])?new(e.bind.apply(e,Ot([void 0],t[0].concat(this)))):new(e.bind.apply(e,Ot([void 0],t.concat(this))))},e}(Array);function Nt(){return function(t){return function(t){void 0===t&&(t={});var e=t.thunk,r=void 0===e||e,n=(t.immutableCheck,t.serializableCheck,new Dt);r&&(!function(t){return"boolean"===typeof t}(r)?n.push(mt.withExtraArgument(r.extraArgument)):n.push(mt));0;return n}(t)}}function Ct(t){var e,r=Nt(),n=t||{},o=n.reducer,i=void 0===o?void 0:o,u=n.middleware,c=void 0===u?r():u,f=n.devTools,a=void 0===f||f,s=n.preloadedState,l=void 0===s?void 0:s,p=n.enhancers,y=void 0===p?void 0:p;if("function"===typeof i)e=i;else{if(!At(i))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');e=yt(i)}var d=c;"function"===typeof d&&(d=d(r));var v=vt.apply(void 0,d),b=dt;a&&(b=xt(_t({trace:!1},"object"===typeof a&&a)));var h=[v];return Array.isArray(y)?h=Ot([v],y):"function"===typeof y&&(h=y(h)),pt(e,l,b.apply(void 0,h))}function It(t,e){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(e){var o=e.apply(void 0,r);if(!o)throw new Error("prepareAction did not return an object");return _t(_t({type:t,payload:o.payload},"meta"in o&&{meta:o.meta}),"error"in o&&{error:o.error})}return{type:t,payload:r[0]}}return r.toString=function(){return""+t},r.type=t,r.match=function(e){return e.type===t},r}function $t(t){var e,r={},n=[],o={addCase:function(t,e){var n="string"===typeof t?t:t.type;if(n in r)throw new Error("addCase cannot be called with two reducers for the same action type");return r[n]=e,o},addMatcher:function(t,e){return n.push({matcher:t,reducer:e}),o},addDefaultCase:function(t){return e=t,o}};return t(o),[r,n,e]}function kt(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");var r,n="function"==typeof t.initialState?t.initialState:nt(t.initialState,(function(){})),u=t.reducers||{},c=Object.keys(u),f={},a={},s={};function l(){var e="function"===typeof t.extraReducers?$t(t.extraReducers):[t.extraReducers],r=e[0],u=void 0===r?{}:r,c=e[1],f=void 0===c?[]:c,s=e[2],l=void 0===s?void 0:s,p=_t(_t({},u),a);return function(t,e,r,n){void 0===r&&(r=[]);var u,c="function"===typeof e?$t(e):[e,r,n],f=c[0],a=c[1],s=c[2];if(function(t){return"function"===typeof t}(t))u=function(){return nt(t(),(function(){}))};else{var l=nt(t,(function(){}));u=function(){return l}}function p(t,e){void 0===t&&(t=u());var r=Ot([f[e.type]],a.filter((function(t){return(0,t.matcher)(e)})).map((function(t){return t.reducer})));return 0===r.filter((function(t){return!!t})).length&&(r=[s]),r.reduce((function(t,r){if(r){var n;if(o(t))return"undefined"===typeof(n=r(t,e))?t:n;if(i(t))return nt(t,(function(t){return r(t,e)}));if("undefined"===typeof(n=r(t,e))){if(null===t)return t;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return t}),t)}return p.getInitialState=u,p}(n,p,f,l)}return c.forEach((function(t){var r,n,o=u[t],i=e+"/"+t;"reducer"in o?(r=o.reducer,n=o.prepare):r=o,f[t]=r,a[i]=r,s[t]=n?It(i,n):It(i)})),{name:e,reducer:function(t,e){return r||(r=l()),r(t,e)},actions:s,caseReducers:f,getInitialState:function(){return r||(r=l()),r.getInitialState()}}}Object.assign;var Mt="listenerMiddleware";It(Mt+"/add"),It(Mt+"/removeAll"),It(Mt+"/remove");F()},8679:function(t,e,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function f(t){return n.isMemo(t)?u:c[t.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=u;var a=Object.defineProperty,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,r,n){if("string"!==typeof r){if(d){var o=y(r);o&&o!==d&&t(e,o,n)}var u=s(r);l&&(u=u.concat(l(r)));for(var c=f(e),v=f(r),b=0;b<u.length;++b){var h=u[b];if(!i[h]&&(!n||!n[h])&&(!v||!v[h])&&(!c||!c[h])){var m=p(r,h);try{a(e,h,m)}catch(g){}}}}return e}},7686:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n=r(9499),o=(r(3911),r(9473)),i=r(7406),u=r(6233),c=(0,i.xC)({reducer:{counter:u.r2.reducer}}),f=r(5893);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t){var e=t.Component,r=t.pageProps;return(0,f.jsx)(o.zt,{store:c,children:(0,f.jsx)(e,s({},r))})}},6233:function(t,e,r){"use strict";r.d(e,{r2:function(){return n},zT:function(){return i}});var n=(0,r(7406).oM)({name:"counter",initialState:{value:10,indicator:{titleIndicator:"title",urlImageIndicator:"https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg"}},reducers:{increment:function(t){t.value+=1},decrement:function(t){t.value-=1},changeIndicator:function(t,e){t.indicator.titleIndicator=e.payload.titleIndicator,t.indicator.urlImageIndicator=e.payload.urlImageIndicator},incrementByAmount:function(t,e){t.value+=e.payload}}}),o=n.actions,i=(o.increment,o.decrement,o.incrementByAmount,o.changeIndicator)},6840:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7686)}])},3911:function(){},9921:function(t,e){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,a=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,m=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function w(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case s:case l:case i:case c:case u:case y:return t;default:switch(t=t&&t.$$typeof){case a:case p:case b:case v:case f:return t;default:return e}}case o:return e}}}function S(t){return w(t)===l}e.AsyncMode=s,e.ConcurrentMode=l,e.ContextConsumer=a,e.ContextProvider=f,e.Element=n,e.ForwardRef=p,e.Fragment=i,e.Lazy=b,e.Memo=v,e.Portal=o,e.Profiler=c,e.StrictMode=u,e.Suspense=y,e.isAsyncMode=function(t){return S(t)||w(t)===s},e.isConcurrentMode=S,e.isContextConsumer=function(t){return w(t)===a},e.isContextProvider=function(t){return w(t)===f},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===n},e.isForwardRef=function(t){return w(t)===p},e.isFragment=function(t){return w(t)===i},e.isLazy=function(t){return w(t)===b},e.isMemo=function(t){return w(t)===v},e.isPortal=function(t){return w(t)===o},e.isProfiler=function(t){return w(t)===c},e.isStrictMode=function(t){return w(t)===u},e.isSuspense=function(t){return w(t)===y},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===i||t===l||t===c||t===u||t===y||t===d||"object"===typeof t&&null!==t&&(t.$$typeof===b||t.$$typeof===v||t.$$typeof===f||t.$$typeof===a||t.$$typeof===p||t.$$typeof===m||t.$$typeof===g||t.$$typeof===O||t.$$typeof===h)},e.typeOf=w},9864:function(t,e,r){"use strict";t.exports=r(9921)},9473:function(t,e,r){"use strict";r.d(e,{zt:function(){return g},I0:function(){return P},v9:function(){return d}});var n=r(1688),o=r(2798),i=r(3935);let u=function(t){t()};const c=()=>u;var f=r(7294);const a=f.createContext(null);function s(){return(0,f.useContext)(a)}let l=()=>{throw new Error("uSES not initialized!")};const p=(t,e)=>t===e;function y(t=a){const e=t===a?s:()=>(0,f.useContext)(t);return function(t,r=p){const{store:n,subscription:o,getServerState:i}=e(),u=l(o.addNestedSub,n.getState,i||n.getState,t,r);return(0,f.useDebugValue)(u),u}}const d=y();r(8679),r(2973);const v={notify(){},get:()=>[]};function b(t,e){let r,n=v;function o(){u.onStateChange&&u.onStateChange()}function i(){r||(r=e?e.addNestedSub(o):t.subscribe(o),n=function(){const t=c();let e=null,r=null;return{clear(){e=null,r=null},notify(){t((()=>{let t=e;for(;t;)t.callback(),t=t.next}))},get(){let t=[],r=e;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let n=!0,o=r={callback:t,next:null,prev:r};return o.prev?o.prev.next=o:e=o,function(){n&&null!==e&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}const u={addNestedSub:function(t){return i(),n.subscribe(t)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:i,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=v)},getListeners:()=>n};return u}const h=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement)?f.useLayoutEffect:f.useEffect;let m=null;var g=function({store:t,context:e,children:r,serverState:n}){const o=(0,f.useMemo)((()=>{const e=b(t);return{store:t,subscription:e,getServerState:n?()=>n:void 0}}),[t,n]),i=(0,f.useMemo)((()=>t.getState()),[t]);h((()=>{const{subscription:e}=o;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),i!==t.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}}),[o,i]);const u=e||a;return f.createElement(u.Provider,{value:o},r)};function O(t=a){const e=t===a?s:()=>(0,f.useContext)(t);return function(){const{store:t}=e();return t}}const w=O();function S(t=a){const e=t===a?w:O(t);return function(){return e().dispatch}}const P=S();var j,E;j=o.useSyncExternalStoreWithSelector,l=j,(t=>{m=t})(n.useSyncExternalStore),E=i.unstable_batchedUpdates,u=E},8359:function(t,e){"use strict";var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen");function h(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case i:case c:case u:case p:case y:return t;default:switch(t=t&&t.$$typeof){case s:case a:case l:case v:case d:case f:return t;default:return e}}case o:return e}}}r=Symbol.for("react.module.reference")},2973:function(t,e,r){"use strict";r(8359)},3250:function(t,e,r){"use strict";var n=r(7294);var o="function"===typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t===1/e)||t!==t&&e!==e},i=n.useState,u=n.useEffect,c=n.useLayoutEffect,f=n.useDebugValue;function a(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!o(t,r)}catch(n){return!0}}var s="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(t,e){return e()}:function(t,e){var r=e(),n=i({inst:{value:r,getSnapshot:e}}),o=n[0].inst,s=n[1];return c((function(){o.value=r,o.getSnapshot=e,a(o)&&s({inst:o})}),[t,r,e]),u((function(){return a(o)&&s({inst:o}),t((function(){a(o)&&s({inst:o})}))}),[t]),f(r),r};e.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:s},139:function(t,e,r){"use strict";var n=r(7294),o=r(1688);var i="function"===typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t===1/e)||t!==t&&e!==e},u=o.useSyncExternalStore,c=n.useRef,f=n.useEffect,a=n.useMemo,s=n.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,r,n,o){var l=c(null);if(null===l.current){var p={hasValue:!1,value:null};l.current=p}else p=l.current;l=a((function(){function t(t){if(!f){if(f=!0,u=t,t=n(t),void 0!==o&&p.hasValue){var e=p.value;if(o(e,t))return c=e}return c=t}if(e=c,i(u,t))return e;var r=n(t);return void 0!==o&&o(e,r)?e:(u=t,c=r)}var u,c,f=!1,a=void 0===r?null:r;return[function(){return t(e())},null===a?void 0:function(){return t(a())}]}),[e,r,n,o]);var y=u(t,l[0],l[1]);return f((function(){p.hasValue=!0,p.value=y}),[y]),s(y),y}},1688:function(t,e,r){"use strict";t.exports=r(3250)},2798:function(t,e,r){"use strict";t.exports=r(139)},4942:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return n}})},9499:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return n}})}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(6840),e(1587)}));var r=t.O();_N_E=r}]);