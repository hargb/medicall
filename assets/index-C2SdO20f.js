function ld(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function sd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lo={exports:{}},jl={},To={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),id=Symbol.for("react.portal"),ad=Symbol.for("react.fragment"),od=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),ud=Symbol.for("react.provider"),dd=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),pd=Symbol.for("react.memo"),xd=Symbol.for("react.lazy"),ua=Symbol.iterator;function hd(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var Ro={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mo=Object.assign,zo={};function xn(e,t,n){this.props=e,this.context=t,this.refs=zo,this.updater=n||Ro}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Io(){}Io.prototype=xn.prototype;function pi(e,t,n){this.props=e,this.context=t,this.refs=zo,this.updater=n||Ro}var xi=pi.prototype=new Io;xi.constructor=pi;Mo(xi,xn.prototype);xi.isPureReactComponent=!0;var da=Array.isArray,Bo=Object.prototype.hasOwnProperty,hi={current:null},Oo={key:!0,ref:!0,__self:!0,__source:!0};function Fo(e,t,n){var r,s={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Bo.call(t,r)&&!Oo.hasOwnProperty(r)&&(s[r]=t[r]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)s[r]===void 0&&(s[r]=o[r]);return{$$typeof:or,type:e,key:i,ref:a,props:s,_owner:hi.current}}function gd(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gi(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function vd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ma=/\/+/g;function Wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vd(""+e.key):t.toString(36)}function Mr(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case or:case id:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+Wl(a,0):r,da(s)?(n="",e!=null&&(n=e.replace(ma,"$&/")+"/"),Mr(s,t,n,"",function(u){return u})):s!=null&&(gi(s)&&(s=gd(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(ma,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",da(e))for(var o=0;o<e.length;o++){i=e[o];var c=r+Wl(i,o);a+=Mr(i,t,n,c,s)}else if(c=hd(e),typeof c=="function")for(e=c.call(e),o=0;!(i=e.next()).done;)i=i.value,c=r+Wl(i,o++),a+=Mr(i,t,n,c,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function gr(e,t,n){if(e==null)return e;var r=[],s=0;return Mr(e,r,"","",function(i){return t.call(n,i,s++)}),r}function yd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},zr={transition:null},wd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:zr,ReactCurrentOwner:hi};function Uo(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!gi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=xn;T.Fragment=ad;T.Profiler=cd;T.PureComponent=pi;T.StrictMode=od;T.Suspense=fd;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wd;T.act=Uo;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mo({},e.props),s=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=hi.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(c in t)Bo.call(t,c)&&!Oo.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&o!==void 0?o[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:or,type:e.type,key:s,ref:i,props:r,_owner:a}};T.createContext=function(e){return e={$$typeof:dd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ud,_context:e},e.Consumer=e};T.createElement=Fo;T.createFactory=function(e){var t=Fo.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:md,render:e}};T.isValidElement=gi;T.lazy=function(e){return{$$typeof:xd,_payload:{_status:-1,_result:e},_init:yd}};T.memo=function(e,t){return{$$typeof:pd,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=zr.transition;zr.transition={};try{e()}finally{zr.transition=t}};T.unstable_act=Uo;T.useCallback=function(e,t){return de.current.useCallback(e,t)};T.useContext=function(e){return de.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return de.current.useDeferredValue(e)};T.useEffect=function(e,t){return de.current.useEffect(e,t)};T.useId=function(){return de.current.useId()};T.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return de.current.useMemo(e,t)};T.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};T.useRef=function(e){return de.current.useRef(e)};T.useState=function(e){return de.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return de.current.useTransition()};T.version="18.3.1";To.exports=T;var y=To.exports;const Ho=sd(y),jd=ld({__proto__:null,default:Ho},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd=y,Nd=Symbol.for("react.element"),kd=Symbol.for("react.fragment"),Cd=Object.prototype.hasOwnProperty,Sd=bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ed={key:!0,ref:!0,__self:!0,__source:!0};function Wo(e,t,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Cd.call(t,r)&&!Ed.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:Nd,type:e,key:i,ref:a,props:s,_owner:Sd.current}}jl.Fragment=kd;jl.jsx=Wo;jl.jsxs=Wo;Lo.exports=jl;var l=Lo.exports,hs={},Vo={exports:{}},be={},Qo={exports:{}},$o={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,D){var L=A.length;A.push(D);e:for(;0<L;){var $=L-1>>>1,Z=A[$];if(0<s(Z,D))A[$]=D,A[L]=Z,L=$;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var D=A[0],L=A.pop();if(L!==D){A[0]=L;e:for(var $=0,Z=A.length,xr=Z>>>1;$<xr;){var Ct=2*($+1)-1,Hl=A[Ct],St=Ct+1,hr=A[St];if(0>s(Hl,L))St<Z&&0>s(hr,Hl)?(A[$]=hr,A[St]=L,$=St):(A[$]=Hl,A[Ct]=L,$=Ct);else if(St<Z&&0>s(hr,L))A[$]=hr,A[St]=L,$=St;else break e}}return D}function s(A,D){var L=A.sortIndex-D.sortIndex;return L!==0?L:A.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,p=null,x=3,j=!1,g=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(A){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=A)r(u),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(u)}}function v(A){if(w=!1,f(A),!g)if(n(c)!==null)g=!0,Fl(C);else{var D=n(u);D!==null&&Ul(v,D.startTime-A)}}function C(A,D){g=!1,w&&(w=!1,m(k),k=-1),j=!0;var L=x;try{for(f(D),p=n(c);p!==null&&(!(p.expirationTime>D)||A&&!te());){var $=p.callback;if(typeof $=="function"){p.callback=null,x=p.priorityLevel;var Z=$(p.expirationTime<=D);D=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(c)&&r(c),f(D)}else r(c);p=n(c)}if(p!==null)var xr=!0;else{var Ct=n(u);Ct!==null&&Ul(v,Ct.startTime-D),xr=!1}return xr}finally{p=null,x=L,j=!1}}var N=!1,E=null,k=-1,M=5,P=-1;function te(){return!(e.unstable_now()-P<M)}function wn(){if(E!==null){var A=e.unstable_now();P=A;var D=!0;try{D=E(!0,A)}finally{D?jn():(N=!1,E=null)}}else N=!1}var jn;if(typeof d=="function")jn=function(){d(wn)};else if(typeof MessageChannel<"u"){var ca=new MessageChannel,rd=ca.port2;ca.port1.onmessage=wn,jn=function(){rd.postMessage(null)}}else jn=function(){S(wn,0)};function Fl(A){E=A,N||(N=!0,jn())}function Ul(A,D){k=S(function(){A(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){g||j||(g=!0,Fl(C))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(A){switch(x){case 1:case 2:case 3:var D=3;break;default:D=x}var L=x;x=D;try{return A()}finally{x=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,D){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=x;x=A;try{return D()}finally{x=L}},e.unstable_scheduleCallback=function(A,D,L){var $=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?$+L:$):L=$,A){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=L+Z,A={id:h++,callback:D,priorityLevel:A,startTime:L,expirationTime:Z,sortIndex:-1},L>$?(A.sortIndex=L,t(u,A),n(c)===null&&A===n(u)&&(w?(m(k),k=-1):w=!0,Ul(v,L-$))):(A.sortIndex=Z,t(c,A),g||j||(g=!0,Fl(C))),A},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(A){var D=x;return function(){var L=x;x=D;try{return A.apply(this,arguments)}finally{x=L}}}})($o);Qo.exports=$o;var _d=Qo.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad=y,je=_d;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yo=new Set,Wn={};function Ot(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Wn[e]=t,e=0;e<t.length;e++)Yo.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gs=Object.prototype.hasOwnProperty,Pd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},pa={};function Dd(e){return gs.call(pa,e)?!0:gs.call(fa,e)?!1:Pd.test(e)?pa[e]=!0:(fa[e]=!0,!1)}function Ld(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Td(e,t,n,r){if(t===null||typeof t>"u"||Ld(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,s,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var vi=/[\-:]([a-z])/g;function yi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vi,yi);le[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vi,yi);le[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vi,yi);le[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function wi(e,t,n,r){var s=le.hasOwnProperty(t)?le[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Td(t,n,s,r)&&(n=null),r||s===null?Dd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var et=Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),ji=Symbol.for("react.strict_mode"),vs=Symbol.for("react.profiler"),Go=Symbol.for("react.provider"),Ko=Symbol.for("react.context"),bi=Symbol.for("react.forward_ref"),ys=Symbol.for("react.suspense"),ws=Symbol.for("react.suspense_list"),Ni=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),Xo=Symbol.for("react.offscreen"),xa=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=xa&&e[xa]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Vl;function Pn(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||""}return`
`+Vl+e}var Ql=!1;function $l(e,t){if(!e||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,o=i.length-1;1<=a&&0<=o&&s[a]!==i[o];)o--;for(;1<=a&&0<=o;a--,o--)if(s[a]!==i[o]){if(a!==1||o!==1)do if(a--,o--,0>o||s[a]!==i[o]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=o);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function Rd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=$l(e.type,!1),e;case 11:return e=$l(e.type.render,!1),e;case 1:return e=$l(e.type,!0),e;default:return""}}function js(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Ht:return"Portal";case vs:return"Profiler";case ji:return"StrictMode";case ys:return"Suspense";case ws:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ko:return(e.displayName||"Context")+".Consumer";case Go:return(e._context.displayName||"Context")+".Provider";case bi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ni:return t=e.displayName||null,t!==null?t:js(e.type)||"Memo";case nt:t=e._payload,e=e._init;try{return js(e(t))}catch{}}return null}function Md(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return js(t);case 8:return t===ji?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zd(e){var t=Jo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=zd(e))}function Zo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jo(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bs(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ha(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qo(e,t){t=t.checked,t!=null&&wi(e,"checked",t,!1)}function Ns(e,t){qo(e,t);var n=vt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ks(e,t.type,n):t.hasOwnProperty("defaultValue")&&ks(e,t.type,vt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ga(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ks(e,t,n){(t!=="number"||Yr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function en(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Cs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function va(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Dn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vt(n)}}function ec(e,t){var n=vt(t.value),r=vt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ya(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ss(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wr,nc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Id=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){Id.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function rc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function lc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=rc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var Bd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Es(e,t){if(t){if(Bd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function _s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var As=null;function ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ps=null,tn=null,nn=null;function wa(e){if(e=dr(e)){if(typeof Ps!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Sl(t),Ps(e.stateNode,e.type,t))}}function sc(e){tn?nn?nn.push(e):nn=[e]:tn=e}function ic(){if(tn){var e=tn,t=nn;if(nn=tn=null,wa(e),t)for(e=0;e<t.length;e++)wa(t[e])}}function ac(e,t){return e(t)}function oc(){}var Yl=!1;function cc(e,t,n){if(Yl)return e(t,n);Yl=!0;try{return ac(e,t,n)}finally{Yl=!1,(tn!==null||nn!==null)&&(oc(),ic())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Ds=!1;if(Xe)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Ds=!1}function Od(e,t,n,r,s,i,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Mn=!1,Gr=null,Kr=!1,Ls=null,Fd={onError:function(e){Mn=!0,Gr=e}};function Ud(e,t,n,r,s,i,a,o,c){Mn=!1,Gr=null,Od.apply(Fd,arguments)}function Hd(e,t,n,r,s,i,a,o,c){if(Ud.apply(this,arguments),Mn){if(Mn){var u=Gr;Mn=!1,Gr=null}else throw Error(b(198));Kr||(Kr=!0,Ls=u)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ja(e){if(Ft(e)!==e)throw Error(b(188))}function Wd(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ja(s),e;if(i===r)return ja(s),t;i=i.sibling}throw Error(b(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a){for(o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function dc(e){return e=Wd(e),e!==null?mc(e):null}function mc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mc(e);if(t!==null)return t;e=e.sibling}return null}var fc=je.unstable_scheduleCallback,ba=je.unstable_cancelCallback,Vd=je.unstable_shouldYield,Qd=je.unstable_requestPaint,Y=je.unstable_now,$d=je.unstable_getCurrentPriorityLevel,Ci=je.unstable_ImmediatePriority,pc=je.unstable_UserBlockingPriority,Xr=je.unstable_NormalPriority,Yd=je.unstable_LowPriority,xc=je.unstable_IdlePriority,bl=null,He=null;function Gd(e){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:Jd,Kd=Math.log,Xd=Math.LN2;function Jd(e){return e>>>=0,e===0?32:31-(Kd(e)/Xd|0)|0}var jr=64,br=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~s;o!==0?r=Ln(o):(i&=a,i!==0&&(r=Ln(i)))}else a=n&~s,a!==0?r=Ln(a):i!==0&&(r=Ln(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),s=1<<n,r|=e[n],t&=~s;return r}function Zd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Me(i),o=1<<a,c=s[a];c===-1?(!(o&n)||o&r)&&(s[a]=Zd(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}}function Ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hc(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function Gl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function em(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Me(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function Si(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var z=0;function gc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var vc,Ei,yc,wc,jc,Rs=!1,Nr=[],ct=null,ut=null,dt=null,$n=new Map,Yn=new Map,lt=[],tm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Na(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":$n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function kn(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=dr(t),t!==null&&Ei(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function nm(e,t,n,r,s){switch(t){case"focusin":return ct=kn(ct,e,t,n,r,s),!0;case"dragenter":return ut=kn(ut,e,t,n,r,s),!0;case"mouseover":return dt=kn(dt,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return $n.set(i,kn($n.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Yn.set(i,kn(Yn.get(i)||null,e,t,n,r,s)),!0}return!1}function bc(e){var t=At(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=uc(n),t!==null){e.blockedOn=t,jc(e.priority,function(){yc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ms(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);As=r,n.target.dispatchEvent(r),As=null}else return t=dr(n),t!==null&&Ei(t),e.blockedOn=n,!1;t.shift()}return!0}function ka(e,t,n){Ir(e)&&n.delete(t)}function rm(){Rs=!1,ct!==null&&Ir(ct)&&(ct=null),ut!==null&&Ir(ut)&&(ut=null),dt!==null&&Ir(dt)&&(dt=null),$n.forEach(ka),Yn.forEach(ka)}function Cn(e,t){e.blockedOn===t&&(e.blockedOn=null,Rs||(Rs=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,rm)))}function Gn(e){function t(s){return Cn(s,e)}if(0<Nr.length){Cn(Nr[0],e);for(var n=1;n<Nr.length;n++){var r=Nr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&Cn(ct,e),ut!==null&&Cn(ut,e),dt!==null&&Cn(dt,e),$n.forEach(t),Yn.forEach(t),n=0;n<lt.length;n++)r=lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(n=lt[0],n.blockedOn===null);)bc(n),n.blockedOn===null&&lt.shift()}var rn=et.ReactCurrentBatchConfig,Zr=!0;function lm(e,t,n,r){var s=z,i=rn.transition;rn.transition=null;try{z=1,_i(e,t,n,r)}finally{z=s,rn.transition=i}}function sm(e,t,n,r){var s=z,i=rn.transition;rn.transition=null;try{z=4,_i(e,t,n,r)}finally{z=s,rn.transition=i}}function _i(e,t,n,r){if(Zr){var s=Ms(e,t,n,r);if(s===null)ls(e,t,r,qr,n),Na(e,r);else if(nm(s,e,t,n,r))r.stopPropagation();else if(Na(e,r),t&4&&-1<tm.indexOf(e)){for(;s!==null;){var i=dr(s);if(i!==null&&vc(i),i=Ms(e,t,n,r),i===null&&ls(e,t,r,qr,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else ls(e,t,r,null,n)}}var qr=null;function Ms(e,t,n,r){if(qr=null,e=ki(r),e=At(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=uc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function Nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($d()){case Ci:return 1;case pc:return 4;case Xr:case Yd:return 16;case xc:return 536870912;default:return 16}default:return 16}}var it=null,Ai=null,Br=null;function kc(){if(Br)return Br;var e,t=Ai,n=t.length,r,s="value"in it?it.value:it.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[i-r];r++);return Br=s.slice(e,1<r?1-r:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function Ca(){return!1}function Ne(e){function t(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?kr:Ca,this.isPropagationStopped=Ca,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=Ne(hn),ur=W({},hn,{view:0,detail:0}),im=Ne(ur),Kl,Xl,Sn,Nl=W({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Di,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(Kl=e.screenX-Sn.screenX,Xl=e.screenY-Sn.screenY):Xl=Kl=0,Sn=e),Kl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),Sa=Ne(Nl),am=W({},Nl,{dataTransfer:0}),om=Ne(am),cm=W({},ur,{relatedTarget:0}),Jl=Ne(cm),um=W({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),dm=Ne(um),mm=W({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fm=Ne(mm),pm=W({},hn,{data:0}),Ea=Ne(pm),xm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gm[e])?!!t[e]:!1}function Di(){return vm}var ym=W({},ur,{key:function(e){if(e.key){var t=xm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Di,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wm=Ne(ym),jm=W({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_a=Ne(jm),bm=W({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Di}),Nm=Ne(bm),km=W({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cm=Ne(km),Sm=W({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Em=Ne(Sm),_m=[9,13,27,32],Li=Xe&&"CompositionEvent"in window,zn=null;Xe&&"documentMode"in document&&(zn=document.documentMode);var Am=Xe&&"TextEvent"in window&&!zn,Cc=Xe&&(!Li||zn&&8<zn&&11>=zn),Aa=" ",Pa=!1;function Sc(e,t){switch(e){case"keyup":return _m.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Pm(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(Pa=!0,Aa);case"textInput":return e=t.data,e===Aa&&Pa?null:e;default:return null}}function Dm(e,t){if(Vt)return e==="compositionend"||!Li&&Sc(e,t)?(e=kc(),Br=Ai=it=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cc&&t.locale!=="ko"?null:t.data;default:return null}}var Lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lm[e.type]:t==="textarea"}function _c(e,t,n,r){sc(r),t=el(t,"onChange"),0<t.length&&(n=new Pi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var In=null,Kn=null;function Tm(e){Oc(e,0)}function kl(e){var t=Yt(e);if(Zo(t))return e}function Rm(e,t){if(e==="change")return t}var Ac=!1;if(Xe){var Zl;if(Xe){var ql="oninput"in document;if(!ql){var La=document.createElement("div");La.setAttribute("oninput","return;"),ql=typeof La.oninput=="function"}Zl=ql}else Zl=!1;Ac=Zl&&(!document.documentMode||9<document.documentMode)}function Ta(){In&&(In.detachEvent("onpropertychange",Pc),Kn=In=null)}function Pc(e){if(e.propertyName==="value"&&kl(Kn)){var t=[];_c(t,Kn,e,ki(e)),cc(Tm,t)}}function Mm(e,t,n){e==="focusin"?(Ta(),In=t,Kn=n,In.attachEvent("onpropertychange",Pc)):e==="focusout"&&Ta()}function zm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kl(Kn)}function Im(e,t){if(e==="click")return kl(t)}function Bm(e,t){if(e==="input"||e==="change")return kl(t)}function Om(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Om;function Xn(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!gs.call(t,s)||!Ie(e[s],t[s]))return!1}return!0}function Ra(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ma(e,t){var n=Ra(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ra(n)}}function Dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lc(){for(var e=window,t=Yr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yr(e.document)}return t}function Ti(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fm(e){var t=Lc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Dc(n.ownerDocument.documentElement,n)){if(r!==null&&Ti(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=Ma(n,i);var a=Ma(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Um=Xe&&"documentMode"in document&&11>=document.documentMode,Qt=null,zs=null,Bn=null,Is=!1;function za(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Is||Qt==null||Qt!==Yr(r)||(r=Qt,"selectionStart"in r&&Ti(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&Xn(Bn,r)||(Bn=r,r=el(zs,"onSelect"),0<r.length&&(t=new Pi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var $t={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionend:Cr("Transition","TransitionEnd")},es={},Tc={};Xe&&(Tc=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function Cl(e){if(es[e])return es[e];if(!$t[e])return e;var t=$t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tc)return es[e]=t[n];return e}var Rc=Cl("animationend"),Mc=Cl("animationiteration"),zc=Cl("animationstart"),Ic=Cl("transitionend"),Bc=new Map,Ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){Bc.set(e,t),Ot(t,[e])}for(var ts=0;ts<Ia.length;ts++){var ns=Ia[ts],Hm=ns.toLowerCase(),Wm=ns[0].toUpperCase()+ns.slice(1);wt(Hm,"on"+Wm)}wt(Rc,"onAnimationEnd");wt(Mc,"onAnimationIteration");wt(zc,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(Ic,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));function Ba(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hd(r,t,void 0,e),e.currentTarget=null}function Oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==i&&s.isPropagationStopped())break e;Ba(s,o,u),i=c}else for(a=0;a<r.length;a++){if(o=r[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==i&&s.isPropagationStopped())break e;Ba(s,o,u),i=c}}}if(Kr)throw e=Ls,Kr=!1,Ls=null,e}function B(e,t){var n=t[Hs];n===void 0&&(n=t[Hs]=new Set);var r=e+"__bubble";n.has(r)||(Fc(t,e,2,!1),n.add(r))}function rs(e,t,n){var r=0;t&&(r|=4),Fc(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Sr]){e[Sr]=!0,Yo.forEach(function(n){n!=="selectionchange"&&(Vm.has(n)||rs(n,!1,e),rs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,rs("selectionchange",!1,t))}}function Fc(e,t,n,r){switch(Nc(t)){case 1:var s=lm;break;case 4:s=sm;break;default:s=_i}n=s.bind(null,t,n,e),s=void 0,!Ds||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function ls(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;o!==null;){if(a=At(o),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}o=o.parentNode}}r=r.return}cc(function(){var u=i,h=ki(n),p=[];e:{var x=Bc.get(e);if(x!==void 0){var j=Pi,g=e;switch(e){case"keypress":if(Or(n)===0)break e;case"keydown":case"keyup":j=wm;break;case"focusin":g="focus",j=Jl;break;case"focusout":g="blur",j=Jl;break;case"beforeblur":case"afterblur":j=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Sa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Nm;break;case Rc:case Mc:case zc:j=dm;break;case Ic:j=Cm;break;case"scroll":j=im;break;case"wheel":j=Em;break;case"copy":case"cut":case"paste":j=fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=_a}var w=(t&4)!==0,S=!w&&e==="scroll",m=w?x!==null?x+"Capture":null:x;w=[];for(var d=u,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,m!==null&&(v=Qn(d,m),v!=null&&w.push(Zn(d,v,f)))),S)break;d=d.return}0<w.length&&(x=new j(x,g,null,n,h),p.push({event:x,listeners:w}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",x&&n!==As&&(g=n.relatedTarget||n.fromElement)&&(At(g)||g[Je]))break e;if((j||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,j?(g=n.relatedTarget||n.toElement,j=u,g=g?At(g):null,g!==null&&(S=Ft(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(j=null,g=u),j!==g)){if(w=Sa,v="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=_a,v="onPointerLeave",m="onPointerEnter",d="pointer"),S=j==null?x:Yt(j),f=g==null?x:Yt(g),x=new w(v,d+"leave",j,n,h),x.target=S,x.relatedTarget=f,v=null,At(h)===u&&(w=new w(m,d+"enter",g,n,h),w.target=f,w.relatedTarget=S,v=w),S=v,j&&g)t:{for(w=j,m=g,d=0,f=w;f;f=Ut(f))d++;for(f=0,v=m;v;v=Ut(v))f++;for(;0<d-f;)w=Ut(w),d--;for(;0<f-d;)m=Ut(m),f--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=Ut(w),m=Ut(m)}w=null}else w=null;j!==null&&Oa(p,x,j,w,!1),g!==null&&S!==null&&Oa(p,S,g,w,!0)}}e:{if(x=u?Yt(u):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var C=Rm;else if(Da(x))if(Ac)C=Bm;else{C=zm;var N=Mm}else(j=x.nodeName)&&j.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(C=Im);if(C&&(C=C(e,u))){_c(p,C,n,h);break e}N&&N(e,x,u),e==="focusout"&&(N=x._wrapperState)&&N.controlled&&x.type==="number"&&ks(x,"number",x.value)}switch(N=u?Yt(u):window,e){case"focusin":(Da(N)||N.contentEditable==="true")&&(Qt=N,zs=u,Bn=null);break;case"focusout":Bn=zs=Qt=null;break;case"mousedown":Is=!0;break;case"contextmenu":case"mouseup":case"dragend":Is=!1,za(p,n,h);break;case"selectionchange":if(Um)break;case"keydown":case"keyup":za(p,n,h)}var E;if(Li)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Vt?Sc(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Cc&&n.locale!=="ko"&&(Vt||k!=="onCompositionStart"?k==="onCompositionEnd"&&Vt&&(E=kc()):(it=h,Ai="value"in it?it.value:it.textContent,Vt=!0)),N=el(u,k),0<N.length&&(k=new Ea(k,e,null,n,h),p.push({event:k,listeners:N}),E?k.data=E:(E=Ec(n),E!==null&&(k.data=E)))),(E=Am?Pm(e,n):Dm(e,n))&&(u=el(u,"onBeforeInput"),0<u.length&&(h=new Ea("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=E))}Oc(p,t)})}function Zn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function el(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Qn(e,n),i!=null&&r.unshift(Zn(e,i,s)),i=Qn(e,t),i!=null&&r.push(Zn(e,i,s))),e=e.return}return r}function Ut(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oa(e,t,n,r,s){for(var i=t._reactName,a=[];n!==null&&n!==r;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===r)break;o.tag===5&&u!==null&&(o=u,s?(c=Qn(n,i),c!=null&&a.unshift(Zn(n,c,o))):s||(c=Qn(n,i),c!=null&&a.push(Zn(n,c,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Qm=/\r\n?/g,$m=/\u0000|\uFFFD/g;function Fa(e){return(typeof e=="string"?e:""+e).replace(Qm,`
`).replace($m,"")}function Er(e,t,n){if(t=Fa(t),Fa(e)!==t&&n)throw Error(b(425))}function tl(){}var Bs=null,Os=null;function Fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Us=typeof setTimeout=="function"?setTimeout:void 0,Ym=typeof clearTimeout=="function"?clearTimeout:void 0,Ua=typeof Promise=="function"?Promise:void 0,Gm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ua<"u"?function(e){return Ua.resolve(null).then(e).catch(Km)}:Us;function Km(e){setTimeout(function(){throw e})}function ss(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Gn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+gn,qn="__reactProps$"+gn,Je="__reactContainer$"+gn,Hs="__reactEvents$"+gn,Xm="__reactListeners$"+gn,Jm="__reactHandles$"+gn;function At(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ha(e);e!==null;){if(n=e[Ue])return n;e=Ha(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[Ue]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Sl(e){return e[qn]||null}var Ws=[],Gt=-1;function jt(e){return{current:e}}function O(e){0>Gt||(e.current=Ws[Gt],Ws[Gt]=null,Gt--)}function I(e,t){Gt++,Ws[Gt]=e.current,e.current=t}var yt={},oe=jt(yt),xe=jt(!1),Rt=yt;function on(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function he(e){return e=e.childContextTypes,e!=null}function nl(){O(xe),O(oe)}function Wa(e,t,n){if(oe.current!==yt)throw Error(b(168));I(oe,t),I(xe,n)}function Uc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(b(108,Md(e)||"Unknown",s));return W({},n,r)}function rl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Rt=oe.current,I(oe,e),I(xe,xe.current),!0}function Va(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=Uc(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,O(xe),O(oe),I(oe,e)):O(xe),I(xe,n)}var $e=null,El=!1,is=!1;function Hc(e){$e===null?$e=[e]:$e.push(e)}function Zm(e){El=!0,Hc(e)}function bt(){if(!is&&$e!==null){is=!0;var e=0,t=z;try{var n=$e;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,El=!1}catch(s){throw $e!==null&&($e=$e.slice(e+1)),fc(Ci,bt),s}finally{z=t,is=!1}}return null}var Kt=[],Xt=0,ll=null,sl=0,ke=[],Ce=0,Mt=null,Ye=1,Ge="";function Et(e,t){Kt[Xt++]=sl,Kt[Xt++]=ll,ll=e,sl=t}function Wc(e,t,n){ke[Ce++]=Ye,ke[Ce++]=Ge,ke[Ce++]=Mt,Mt=e;var r=Ye;e=Ge;var s=32-Me(r)-1;r&=~(1<<s),n+=1;var i=32-Me(t)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Ye=1<<32-Me(t)+s|n<<s|r,Ge=i+e}else Ye=1<<i|n<<s|r,Ge=e}function Ri(e){e.return!==null&&(Et(e,1),Wc(e,1,0))}function Mi(e){for(;e===ll;)ll=Kt[--Xt],Kt[Xt]=null,sl=Kt[--Xt],Kt[Xt]=null;for(;e===Mt;)Mt=ke[--Ce],ke[Ce]=null,Ge=ke[--Ce],ke[Ce]=null,Ye=ke[--Ce],ke[Ce]=null}var we=null,ye=null,F=!1,Re=null;function Vc(e,t){var n=Se(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ye=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:Ye,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Se(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ye=null,!0):!1;default:return!1}}function Vs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qs(e){if(F){var t=ye;if(t){var n=t;if(!Qa(e,t)){if(Vs(e))throw Error(b(418));t=mt(n.nextSibling);var r=we;t&&Qa(e,t)?Vc(r,n):(e.flags=e.flags&-4097|2,F=!1,we=e)}}else{if(Vs(e))throw Error(b(418));e.flags=e.flags&-4097|2,F=!1,we=e}}}function $a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function _r(e){if(e!==we)return!1;if(!F)return $a(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fs(e.type,e.memoizedProps)),t&&(t=ye)){if(Vs(e))throw Qc(),Error(b(418));for(;t;)Vc(e,t),t=mt(t.nextSibling)}if($a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=we?mt(e.stateNode.nextSibling):null;return!0}function Qc(){for(var e=ye;e;)e=mt(e.nextSibling)}function cn(){ye=we=null,F=!1}function zi(e){Re===null?Re=[e]:Re.push(e)}var qm=et.ReactCurrentBatchConfig;function En(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var o=s.refs;a===null?delete o[i]:o[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Ar(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ya(e){var t=e._init;return t(e._payload)}function $c(e){function t(m,d){if(e){var f=m.deletions;f===null?(m.deletions=[d],m.flags|=16):f.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function s(m,d){return m=ht(m,d),m.index=0,m.sibling=null,m}function i(m,d,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<d?(m.flags|=2,d):f):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function o(m,d,f,v){return d===null||d.tag!==6?(d=fs(f,m.mode,v),d.return=m,d):(d=s(d,f),d.return=m,d)}function c(m,d,f,v){var C=f.type;return C===Wt?h(m,d,f.props.children,v,f.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nt&&Ya(C)===d.type)?(v=s(d,f.props),v.ref=En(m,d,f),v.return=m,v):(v=$r(f.type,f.key,f.props,null,m.mode,v),v.ref=En(m,d,f),v.return=m,v)}function u(m,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=ps(f,m.mode,v),d.return=m,d):(d=s(d,f.children||[]),d.return=m,d)}function h(m,d,f,v,C){return d===null||d.tag!==7?(d=Tt(f,m.mode,v,C),d.return=m,d):(d=s(d,f),d.return=m,d)}function p(m,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fs(""+d,m.mode,f),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vr:return f=$r(d.type,d.key,d.props,null,m.mode,f),f.ref=En(m,null,d),f.return=m,f;case Ht:return d=ps(d,m.mode,f),d.return=m,d;case nt:var v=d._init;return p(m,v(d._payload),f)}if(Dn(d)||bn(d))return d=Tt(d,m.mode,f,null),d.return=m,d;Ar(m,d)}return null}function x(m,d,f,v){var C=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:o(m,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:return f.key===C?c(m,d,f,v):null;case Ht:return f.key===C?u(m,d,f,v):null;case nt:return C=f._init,x(m,d,C(f._payload),v)}if(Dn(f)||bn(f))return C!==null?null:h(m,d,f,v,null);Ar(m,f)}return null}function j(m,d,f,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(f)||null,o(d,m,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vr:return m=m.get(v.key===null?f:v.key)||null,c(d,m,v,C);case Ht:return m=m.get(v.key===null?f:v.key)||null,u(d,m,v,C);case nt:var N=v._init;return j(m,d,f,N(v._payload),C)}if(Dn(v)||bn(v))return m=m.get(f)||null,h(d,m,v,C,null);Ar(d,v)}return null}function g(m,d,f,v){for(var C=null,N=null,E=d,k=d=0,M=null;E!==null&&k<f.length;k++){E.index>k?(M=E,E=null):M=E.sibling;var P=x(m,E,f[k],v);if(P===null){E===null&&(E=M);break}e&&E&&P.alternate===null&&t(m,E),d=i(P,d,k),N===null?C=P:N.sibling=P,N=P,E=M}if(k===f.length)return n(m,E),F&&Et(m,k),C;if(E===null){for(;k<f.length;k++)E=p(m,f[k],v),E!==null&&(d=i(E,d,k),N===null?C=E:N.sibling=E,N=E);return F&&Et(m,k),C}for(E=r(m,E);k<f.length;k++)M=j(E,m,k,f[k],v),M!==null&&(e&&M.alternate!==null&&E.delete(M.key===null?k:M.key),d=i(M,d,k),N===null?C=M:N.sibling=M,N=M);return e&&E.forEach(function(te){return t(m,te)}),F&&Et(m,k),C}function w(m,d,f,v){var C=bn(f);if(typeof C!="function")throw Error(b(150));if(f=C.call(f),f==null)throw Error(b(151));for(var N=C=null,E=d,k=d=0,M=null,P=f.next();E!==null&&!P.done;k++,P=f.next()){E.index>k?(M=E,E=null):M=E.sibling;var te=x(m,E,P.value,v);if(te===null){E===null&&(E=M);break}e&&E&&te.alternate===null&&t(m,E),d=i(te,d,k),N===null?C=te:N.sibling=te,N=te,E=M}if(P.done)return n(m,E),F&&Et(m,k),C;if(E===null){for(;!P.done;k++,P=f.next())P=p(m,P.value,v),P!==null&&(d=i(P,d,k),N===null?C=P:N.sibling=P,N=P);return F&&Et(m,k),C}for(E=r(m,E);!P.done;k++,P=f.next())P=j(E,m,k,P.value,v),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?k:P.key),d=i(P,d,k),N===null?C=P:N.sibling=P,N=P);return e&&E.forEach(function(wn){return t(m,wn)}),F&&Et(m,k),C}function S(m,d,f,v){if(typeof f=="object"&&f!==null&&f.type===Wt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:e:{for(var C=f.key,N=d;N!==null;){if(N.key===C){if(C=f.type,C===Wt){if(N.tag===7){n(m,N.sibling),d=s(N,f.props.children),d.return=m,m=d;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===nt&&Ya(C)===N.type){n(m,N.sibling),d=s(N,f.props),d.ref=En(m,N,f),d.return=m,m=d;break e}n(m,N);break}else t(m,N);N=N.sibling}f.type===Wt?(d=Tt(f.props.children,m.mode,v,f.key),d.return=m,m=d):(v=$r(f.type,f.key,f.props,null,m.mode,v),v.ref=En(m,d,f),v.return=m,m=v)}return a(m);case Ht:e:{for(N=f.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(m,d.sibling),d=s(d,f.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=ps(f,m.mode,v),d.return=m,m=d}return a(m);case nt:return N=f._init,S(m,d,N(f._payload),v)}if(Dn(f))return g(m,d,f,v);if(bn(f))return w(m,d,f,v);Ar(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(m,d.sibling),d=s(d,f),d.return=m,m=d):(n(m,d),d=fs(f,m.mode,v),d.return=m,m=d),a(m)):n(m,d)}return S}var un=$c(!0),Yc=$c(!1),il=jt(null),al=null,Jt=null,Ii=null;function Bi(){Ii=Jt=al=null}function Oi(e){var t=il.current;O(il),e._currentValue=t}function $s(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ln(e,t){al=e,Ii=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Ii!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(al===null)throw Error(b(308));Jt=e,al.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Pt=null;function Fi(e){Pt===null?Pt=[e]:Pt.push(e)}function Gc(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Fi(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ze(e,r)}function Ze(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rt=!1;function Ui(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ze(e,n)}return s=r.interleaved,s===null?(t.next=t,Fi(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ze(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Si(e,n)}}function Ga(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ol(e,t,n,r){var s=e.updateQueue;rt=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(i!==null){var p=s.baseState;a=0,h=u=c=null,o=i;do{var x=o.lane,j=o.eventTime;if((r&x)===x){h!==null&&(h=h.next={eventTime:j,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=e,w=o;switch(x=t,j=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){p=g.call(j,p,x);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,x=typeof g=="function"?g.call(j,p,x):g,x==null)break e;p=W({},p,x);break e;case 2:rt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,x=s.effects,x===null?s.effects=[o]:x.push(o))}else j={eventTime:j,lane:x,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=j,c=p):h=h.next=j,a|=x;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;x=o,o=x.next,x.next=null,s.lastBaseUpdate=x,s.shared.pending=null}}while(!0);if(h===null&&(c=p),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=h,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);It|=a,e.lanes=a,e.memoizedState=p}}function Ka(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(b(191,s));s.call(r)}}}var mr={},We=jt(mr),er=jt(mr),tr=jt(mr);function Dt(e){if(e===mr)throw Error(b(174));return e}function Hi(e,t){switch(I(tr,t),I(er,e),I(We,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ss(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ss(t,e)}O(We),I(We,t)}function dn(){O(We),O(er),O(tr)}function Xc(e){Dt(tr.current);var t=Dt(We.current),n=Ss(t,e.type);t!==n&&(I(er,e),I(We,n))}function Wi(e){er.current===e&&(O(We),O(er))}var U=jt(0);function cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var as=[];function Vi(){for(var e=0;e<as.length;e++)as[e]._workInProgressVersionPrimary=null;as.length=0}var Ur=et.ReactCurrentDispatcher,os=et.ReactCurrentBatchConfig,zt=0,H=null,X=null,q=null,ul=!1,On=!1,nr=0,ef=0;function se(){throw Error(b(321))}function Qi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function $i(e,t,n,r,s,i){if(zt=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?lf:sf,e=n(r,s),On){i=0;do{if(On=!1,nr=0,25<=i)throw Error(b(301));i+=1,q=X=null,t.updateQueue=null,Ur.current=af,e=n(r,s)}while(On)}if(Ur.current=dl,t=X!==null&&X.next!==null,zt=0,q=X=H=null,ul=!1,t)throw Error(b(300));return e}function Yi(){var e=nr!==0;return nr=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?H.memoizedState=q=e:q=q.next=e,q}function Ae(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=q===null?H.memoizedState:q.next;if(t!==null)q=t,X=e;else{if(e===null)throw Error(b(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?H.memoizedState=q=e:q=q.next=e}return q}function rr(e,t){return typeof t=="function"?t(e):t}function cs(e){var t=Ae(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=X,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var o=a=null,c=null,u=i;do{var h=u.lane;if((zt&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=r):c=c.next=p,H.lanes|=h,It|=h}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=o,Ie(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,H.lanes|=i,It|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function us(e){var t=Ae(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=e(i,a.action),a=a.next;while(a!==s);Ie(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Jc(){}function Zc(e,t){var n=H,r=Ae(),s=t(),i=!Ie(r.memoizedState,s);if(i&&(r.memoizedState=s,pe=!0),r=r.queue,Gi(tu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,lr(9,eu.bind(null,n,r,s,t),void 0,null),ee===null)throw Error(b(349));zt&30||qc(n,t,s)}return s}function qc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eu(e,t,n,r){t.value=n,t.getSnapshot=r,nu(t)&&ru(e)}function tu(e,t,n){return n(function(){nu(t)&&ru(e)})}function nu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function ru(e){var t=Ze(e,1);t!==null&&ze(t,e,1,-1)}function Xa(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=rf.bind(null,H,e),[t.memoizedState,e]}function lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lu(){return Ae().memoizedState}function Hr(e,t,n,r){var s=Fe();H.flags|=e,s.memoizedState=lr(1|t,n,void 0,r===void 0?null:r)}function _l(e,t,n,r){var s=Ae();r=r===void 0?null:r;var i=void 0;if(X!==null){var a=X.memoizedState;if(i=a.destroy,r!==null&&Qi(r,a.deps)){s.memoizedState=lr(t,n,i,r);return}}H.flags|=e,s.memoizedState=lr(1|t,n,i,r)}function Ja(e,t){return Hr(8390656,8,e,t)}function Gi(e,t){return _l(2048,8,e,t)}function su(e,t){return _l(4,2,e,t)}function iu(e,t){return _l(4,4,e,t)}function au(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ou(e,t,n){return n=n!=null?n.concat([e]):null,_l(4,4,au.bind(null,t,e),n)}function Ki(){}function cu(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uu(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function du(e,t,n){return zt&21?(Ie(n,t)||(n=hc(),H.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function tf(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=os.transition;os.transition={};try{e(!1),t()}finally{z=n,os.transition=r}}function mu(){return Ae().memoizedState}function nf(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fu(e))pu(t,n);else if(n=Gc(e,t,n,r),n!==null){var s=ue();ze(n,e,r,s),xu(n,t,r)}}function rf(e,t,n){var r=xt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fu(e))pu(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,o=i(a,n);if(s.hasEagerState=!0,s.eagerState=o,Ie(o,a)){var c=t.interleaved;c===null?(s.next=s,Fi(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=Gc(e,t,s,r),n!==null&&(s=ue(),ze(n,e,r,s),xu(n,t,r))}}function fu(e){var t=e.alternate;return e===H||t!==null&&t===H}function pu(e,t){On=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Si(e,n)}}var dl={readContext:_e,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},lf={readContext:_e,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Ja,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hr(4194308,4,au.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=nf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Xa,useDebugValue:Ki,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Xa(!1),t=e[0];return e=tf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,s=Fe();if(F){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ee===null)throw Error(b(349));zt&30||qc(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,Ja(tu.bind(null,r,i,e),[e]),r.flags|=2048,lr(9,eu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=ee.identifierPrefix;if(F){var n=Ge,r=Ye;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ef++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sf={readContext:_e,useCallback:cu,useContext:_e,useEffect:Gi,useImperativeHandle:ou,useInsertionEffect:su,useLayoutEffect:iu,useMemo:uu,useReducer:cs,useRef:lu,useState:function(){return cs(rr)},useDebugValue:Ki,useDeferredValue:function(e){var t=Ae();return du(t,X.memoizedState,e)},useTransition:function(){var e=cs(rr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Jc,useSyncExternalStore:Zc,useId:mu,unstable_isNewReconciler:!1},af={readContext:_e,useCallback:cu,useContext:_e,useEffect:Gi,useImperativeHandle:ou,useInsertionEffect:su,useLayoutEffect:iu,useMemo:uu,useReducer:us,useRef:lu,useState:function(){return us(rr)},useDebugValue:Ki,useDeferredValue:function(e){var t=Ae();return X===null?t.memoizedState=e:du(t,X.memoizedState,e)},useTransition:function(){var e=us(rr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Jc,useSyncExternalStore:Zc,useId:mu,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Al={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),s=xt(e),i=Ke(r,s);i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,s),t!==null&&(ze(t,e,s,r),Fr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),s=xt(e),i=Ke(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ft(e,i,s),t!==null&&(ze(t,e,s,r),Fr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=xt(e),s=Ke(n,r);s.tag=2,t!=null&&(s.callback=t),t=ft(e,s,r),t!==null&&(ze(t,e,r,n),Fr(t,e,r))}};function Za(e,t,n,r,s,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Xn(n,r)||!Xn(s,i):!0}function hu(e,t,n){var r=!1,s=yt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(s=he(t)?Rt:oe.current,r=t.contextTypes,i=(r=r!=null)?on(e,s):yt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Al,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function qa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Al.enqueueReplaceState(t,t.state,null)}function Gs(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Ui(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=_e(i):(i=he(t)?Rt:oe.current,s.context=on(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ys(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Al.enqueueReplaceState(s,s.state,null),ol(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t){try{var n="",r=t;do n+=Rd(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function ds(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ks(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var of=typeof WeakMap=="function"?WeakMap:Map;function gu(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fl||(fl=!0,si=r),Ks(e,t)},n}function vu(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Ks(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ks(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function eo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=bf.bind(null,e,t,n),t.then(e,e))}function to(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function no(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,ft(n,t,1))),n.lanes|=1),e)}var cf=et.ReactCurrentOwner,pe=!1;function ce(e,t,n,r){t.child=e===null?Yc(t,null,n,r):un(t,e.child,n,r)}function ro(e,t,n,r,s){n=n.render;var i=t.ref;return ln(t,s),r=$i(e,t,n,r,i,s),n=Yi(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,qe(e,t,s)):(F&&n&&Ri(t),t.flags|=1,ce(e,t,r,s),t.child)}function lo(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!ra(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,yu(e,t,i,r,s)):(e=$r(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xn,n(a,r)&&e.ref===t.ref)return qe(e,t,s)}return t.flags|=1,e=ht(i,r),e.ref=t.ref,e.return=t,t.child=e}function yu(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(Xn(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,qe(e,t,s)}return Xs(e,t,n,r,s)}function wu(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(qt,ve),ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(qt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,I(qt,ve),ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,I(qt,ve),ve|=r;return ce(e,t,s,n),t.child}function ju(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xs(e,t,n,r,s){var i=he(n)?Rt:oe.current;return i=on(t,i),ln(t,s),n=$i(e,t,n,r,i,s),r=Yi(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,qe(e,t,s)):(F&&r&&Ri(t),t.flags|=1,ce(e,t,n,s),t.child)}function so(e,t,n,r,s){if(he(n)){var i=!0;rl(t)}else i=!1;if(ln(t,s),t.stateNode===null)Wr(e,t),hu(t,n,r),Gs(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=_e(u):(u=he(n)?Rt:oe.current,u=on(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||c!==u)&&qa(t,a,r,u),rt=!1;var x=t.memoizedState;a.state=x,ol(t,r,a,s),c=t.memoizedState,o!==r||x!==c||xe.current||rt?(typeof h=="function"&&(Ys(t,n,h,r),c=t.memoizedState),(o=rt||Za(t,n,o,r,x,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Kc(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Le(t.type,o),a.props=u,p=t.pendingProps,x=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=_e(c):(c=he(n)?Rt:oe.current,c=on(t,c));var j=n.getDerivedStateFromProps;(h=typeof j=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||x!==c)&&qa(t,a,r,c),rt=!1,x=t.memoizedState,a.state=x,ol(t,r,a,s);var g=t.memoizedState;o!==p||x!==g||xe.current||rt?(typeof j=="function"&&(Ys(t,n,j,r),g=t.memoizedState),(u=rt||Za(t,n,u,r,x,g,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Js(e,t,n,r,i,s)}function Js(e,t,n,r,s,i){ju(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&Va(t,n,!1),qe(e,t,i);r=t.stateNode,cf.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=un(t,e.child,null,i),t.child=un(t,null,o,i)):ce(e,t,o,i),t.memoizedState=r.state,s&&Va(t,n,!0),t.child}function bu(e){var t=e.stateNode;t.pendingContext?Wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wa(e,t.context,!1),Hi(e,t.containerInfo)}function io(e,t,n,r,s){return cn(),zi(s),t.flags|=256,ce(e,t,n,r),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0};function qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nu(e,t,n){var r=t.pendingProps,s=U.current,i=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),I(U,s&1),e===null)return Qs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ll(a,r,0,null),e=Tt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=qs(n),t.memoizedState=Zs,e):Xi(t,a));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return uf(e,t,a,r,o,s,n);if(i){i=r.fallback,a=t.mode,s=e.child,o=s.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=ht(s,c),r.subtreeFlags=s.subtreeFlags&14680064),o!==null?i=ht(o,i):(i=Tt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?qs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Zs,r}return i=e.child,e=i.sibling,r=ht(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xi(e,t){return t=Ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&zi(r),un(t,e.child,null,n),e=Xi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uf(e,t,n,r,s,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ds(Error(b(422))),Pr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=Ll({mode:"visible",children:r.children},s,0,null),i=Tt(i,s,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&un(t,e.child,null,a),t.child.memoizedState=qs(a),t.memoizedState=Zs,i);if(!(t.mode&1))return Pr(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var o=r.dgst;return r=o,i=Error(b(419)),r=ds(i,r,void 0),Pr(e,t,a,r)}if(o=(a&e.childLanes)!==0,pe||o){if(r=ee,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ze(e,s),ze(r,e,s,-1))}return na(),r=ds(Error(b(421))),Pr(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Nf.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,ye=mt(s.nextSibling),we=t,F=!0,Re=null,e!==null&&(ke[Ce++]=Ye,ke[Ce++]=Ge,ke[Ce++]=Mt,Ye=e.id,Ge=e.overflow,Mt=t),t=Xi(t,r.children),t.flags|=4096,t)}function ao(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$s(e.return,t,n)}function ms(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function ku(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(ce(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ao(e,n,t);else if(e.tag===19)ao(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(U,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&cl(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ms(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&cl(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ms(t,!0,n,null,i);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function df(e,t,n){switch(t.tag){case 3:bu(t),cn();break;case 5:Xc(t);break;case 1:he(t.type)&&rl(t);break;case 4:Hi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;I(il,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Nu(e,t,n):(I(U,U.current&1),e=qe(e,t,n),e!==null?e.sibling:null);I(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ku(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),I(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,wu(e,t,n)}return qe(e,t,n)}var Cu,ei,Su,Eu;Cu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ei=function(){};Su=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Dt(We.current);var i=null;switch(n){case"input":s=bs(e,s),r=bs(e,r),i=[];break;case"select":s=W({},s,{value:void 0}),r=W({},r,{value:void 0}),i=[];break;case"textarea":s=Cs(e,s),r=Cs(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=tl)}Es(n,r);var a;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var o=s[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(o=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&B("scroll",e),i||o===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Eu=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mf(e,t,n){var r=t.pendingProps;switch(Mi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return he(t.type)&&nl(),ie(t),null;case 3:return r=t.stateNode,dn(),O(xe),O(oe),Vi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_r(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(oi(Re),Re=null))),ei(e,t),ie(t),null;case 5:Wi(t);var s=Dt(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Su(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return ie(t),null}if(e=Dt(We.current),_r(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ue]=t,r[qn]=i,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(s=0;s<Tn.length;s++)B(Tn[s],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ha(r,i),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},B("invalid",r);break;case"textarea":va(r,i),B("invalid",r)}Es(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var o=i[a];a==="children"?typeof o=="string"?r.textContent!==o&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,o,e),s=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&Er(r.textContent,o,e),s=["children",""+o]):Wn.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&B("scroll",r)}switch(n){case"input":yr(r),ga(r,i,!0);break;case"textarea":yr(r),ya(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=tl)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ue]=t,e[qn]=r,Cu(e,t,!1,!1),t.stateNode=e;e:{switch(a=_s(n,r),n){case"dialog":B("cancel",e),B("close",e),s=r;break;case"iframe":case"object":case"embed":B("load",e),s=r;break;case"video":case"audio":for(s=0;s<Tn.length;s++)B(Tn[s],e);s=r;break;case"source":B("error",e),s=r;break;case"img":case"image":case"link":B("error",e),B("load",e),s=r;break;case"details":B("toggle",e),s=r;break;case"input":ha(e,r),s=bs(e,r),B("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=W({},r,{value:void 0}),B("invalid",e);break;case"textarea":va(e,r),s=Cs(e,r),B("invalid",e);break;default:s=r}Es(n,s),o=s;for(i in o)if(o.hasOwnProperty(i)){var c=o[i];i==="style"?lc(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&nc(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vn(e,c):typeof c=="number"&&Vn(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wn.hasOwnProperty(i)?c!=null&&i==="onScroll"&&B("scroll",e):c!=null&&wi(e,i,c,a))}switch(n){case"input":yr(e),ga(e,r,!1);break;case"textarea":yr(e),ya(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?en(e,!!r.multiple,i,!1):r.defaultValue!=null&&en(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Eu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Dt(tr.current),Dt(We.current),_r(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(i=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:Er(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return ie(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ye!==null&&t.mode&1&&!(t.flags&128))Qc(),cn(),t.flags|=98560,i=!1;else if(i=_r(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(b(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[Ue]=t}else cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Re!==null&&(oi(Re),Re=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?J===0&&(J=3):na())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return dn(),ei(e,t),e===null&&Jn(t.stateNode.containerInfo),ie(t),null;case 10:return Oi(t.type._context),ie(t),null;case 17:return he(t.type)&&nl(),ie(t),null;case 19:if(O(U),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)_n(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=cl(e),a!==null){for(t.flags|=128,_n(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&Y()>fn&&(t.flags|=128,r=!0,_n(i,!1),t.lanes=4194304)}else{if(!r)if(e=cl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!F)return ie(t),null}else 2*Y()-i.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,_n(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Y(),t.sibling=null,n=U.current,I(U,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function ff(e,t){switch(Mi(t),t.tag){case 1:return he(t.type)&&nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return dn(),O(xe),O(oe),Vi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wi(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return dn(),null;case 10:return Oi(t.type._context),null;case 22:case 23:return ta(),null;case 24:return null;default:return null}}var Dr=!1,ae=!1,pf=typeof WeakSet=="function"?WeakSet:Set,_=null;function Zt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){V(e,t,r)}else n.current=null}function ti(e,t,n){try{n()}catch(r){V(e,t,r)}}var oo=!1;function xf(e,t){if(Bs=Zr,e=Lc(),Ti(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,p=e,x=null;t:for(;;){for(var j;p!==n||s!==0&&p.nodeType!==3||(o=a+s),p!==i||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(j=p.firstChild)!==null;)x=p,p=j;for(;;){if(p===e)break t;if(x===n&&++u===s&&(o=a),x===i&&++h===r&&(c=a),(j=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=j}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Os={focusedElem:e,selectionRange:n},Zr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,S=g.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Le(t.type,w),S);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(v){V(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return g=oo,oo=!1,g}function Fn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&ti(t,n,i)}s=s.next}while(s!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ni(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[qn],delete t[Hs],delete t[Xm],delete t[Jm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Au(e){return e.tag===5||e.tag===3||e.tag===4}function co(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Au(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tl));else if(r!==4&&(e=e.child,e!==null))for(ri(e,t,n),e=e.sibling;e!==null;)ri(e,t,n),e=e.sibling}function li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(li(e,t,n),e=e.sibling;e!==null;)li(e,t,n),e=e.sibling}var ne=null,Te=!1;function tt(e,t,n){for(n=n.child;n!==null;)Pu(e,t,n),n=n.sibling}function Pu(e,t,n){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:ae||Zt(n,t);case 6:var r=ne,s=Te;ne=null,tt(e,t,n),ne=r,Te=s,ne!==null&&(Te?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Te?(e=ne,n=n.stateNode,e.nodeType===8?ss(e.parentNode,n):e.nodeType===1&&ss(e,n),Gn(e)):ss(ne,n.stateNode));break;case 4:r=ne,s=Te,ne=n.stateNode.containerInfo,Te=!0,tt(e,t,n),ne=r,Te=s;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ti(n,t,a),s=s.next}while(s!==r)}tt(e,t,n);break;case 1:if(!ae&&(Zt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){V(n,t,o)}tt(e,t,n);break;case 21:tt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,tt(e,t,n),ae=r):tt(e,t,n);break;default:tt(e,t,n)}}function uo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pf),t.forEach(function(r){var s=kf.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:ne=o.stateNode,Te=!1;break e;case 3:ne=o.stateNode.containerInfo,Te=!0;break e;case 4:ne=o.stateNode.containerInfo,Te=!0;break e}o=o.return}if(ne===null)throw Error(b(160));Pu(i,a,s),ne=null,Te=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){V(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Du(t,e),t=t.sibling}function Du(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Oe(e),r&4){try{Fn(3,e,e.return),Pl(3,e)}catch(w){V(e,e.return,w)}try{Fn(5,e,e.return)}catch(w){V(e,e.return,w)}}break;case 1:Pe(t,e),Oe(e),r&512&&n!==null&&Zt(n,n.return);break;case 5:if(Pe(t,e),Oe(e),r&512&&n!==null&&Zt(n,n.return),e.flags&32){var s=e.stateNode;try{Vn(s,"")}catch(w){V(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,o=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&qo(s,i),_s(o,a);var u=_s(o,i);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?lc(s,p):h==="dangerouslySetInnerHTML"?nc(s,p):h==="children"?Vn(s,p):wi(s,h,p,u)}switch(o){case"input":Ns(s,i);break;case"textarea":ec(s,i);break;case"select":var x=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var j=i.value;j!=null?en(s,!!i.multiple,j,!1):x!==!!i.multiple&&(i.defaultValue!=null?en(s,!!i.multiple,i.defaultValue,!0):en(s,!!i.multiple,i.multiple?[]:"",!1))}s[qn]=i}catch(w){V(e,e.return,w)}}break;case 6:if(Pe(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(b(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(w){V(e,e.return,w)}}break;case 3:if(Pe(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(w){V(e,e.return,w)}break;case 4:Pe(t,e),Oe(e);break;case 13:Pe(t,e),Oe(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(qi=Y())),r&4&&uo(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(u=ae)||h,Pe(t,e),ae=u):Pe(t,e),Oe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(p=_=h;_!==null;){switch(x=_,j=x.child,x.tag){case 0:case 11:case 14:case 15:Fn(4,x,x.return);break;case 1:Zt(x,x.return);var g=x.stateNode;if(typeof g.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(w){V(r,n,w)}}break;case 5:Zt(x,x.return);break;case 22:if(x.memoizedState!==null){fo(p);continue}}j!==null?(j.return=x,_=j):fo(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{s=p.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=rc("display",a))}catch(w){V(e,e.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){V(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Pe(t,e),Oe(e),r&4&&uo(e);break;case 21:break;default:Pe(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Au(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Vn(s,""),r.flags&=-33);var i=co(e);li(e,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,o=co(e);ri(e,o,a);break;default:throw Error(b(161))}}catch(c){V(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hf(e,t,n){_=e,Lu(e)}function Lu(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var s=_,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Dr;if(!a){var o=s.alternate,c=o!==null&&o.memoizedState!==null||ae;o=Dr;var u=ae;if(Dr=a,(ae=c)&&!u)for(_=s;_!==null;)a=_,c=a.child,a.tag===22&&a.memoizedState!==null?po(s):c!==null?(c.return=a,_=c):po(s);for(;i!==null;)_=i,Lu(i),i=i.sibling;_=s,Dr=o,ae=u}mo(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,_=i):mo(e)}}function mo(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ka(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ka(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Gn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ae||t.flags&512&&ni(t)}catch(x){V(t,t.return,x)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function fo(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function po(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(c){V(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){V(t,s,c)}}var i=t.return;try{ni(t)}catch(c){V(t,i,c)}break;case 5:var a=t.return;try{ni(t)}catch(c){V(t,a,c)}}}catch(c){V(t,t.return,c)}if(t===e){_=null;break}var o=t.sibling;if(o!==null){o.return=t.return,_=o;break}_=t.return}}var gf=Math.ceil,ml=et.ReactCurrentDispatcher,Ji=et.ReactCurrentOwner,Ee=et.ReactCurrentBatchConfig,R=0,ee=null,G=null,re=0,ve=0,qt=jt(0),J=0,sr=null,It=0,Dl=0,Zi=0,Un=null,fe=null,qi=0,fn=1/0,Qe=null,fl=!1,si=null,pt=null,Lr=!1,at=null,pl=0,Hn=0,ii=null,Vr=-1,Qr=0;function ue(){return R&6?Y():Vr!==-1?Vr:Vr=Y()}function xt(e){return e.mode&1?R&2&&re!==0?re&-re:qm.transition!==null?(Qr===0&&(Qr=hc()),Qr):(e=z,e!==0||(e=window.event,e=e===void 0?16:Nc(e.type)),e):1}function ze(e,t,n,r){if(50<Hn)throw Hn=0,ii=null,Error(b(185));cr(e,n,r),(!(R&2)||e!==ee)&&(e===ee&&(!(R&2)&&(Dl|=n),J===4&&st(e,re)),ge(e,r),n===1&&R===0&&!(t.mode&1)&&(fn=Y()+500,El&&bt()))}function ge(e,t){var n=e.callbackNode;qd(e,t);var r=Jr(e,e===ee?re:0);if(r===0)n!==null&&ba(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ba(n),t===1)e.tag===0?Zm(xo.bind(null,e)):Hc(xo.bind(null,e)),Gm(function(){!(R&6)&&bt()}),n=null;else{switch(gc(r)){case 1:n=Ci;break;case 4:n=pc;break;case 16:n=Xr;break;case 536870912:n=xc;break;default:n=Xr}n=Fu(n,Tu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tu(e,t){if(Vr=-1,Qr=0,R&6)throw Error(b(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Jr(e,e===ee?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var s=R;R|=2;var i=Mu();(ee!==e||re!==t)&&(Qe=null,fn=Y()+500,Lt(e,t));do try{wf();break}catch(o){Ru(e,o)}while(!0);Bi(),ml.current=i,R=s,G!==null?t=0:(ee=null,re=0,t=J)}if(t!==0){if(t===2&&(s=Ts(e),s!==0&&(r=s,t=ai(e,s))),t===1)throw n=sr,Lt(e,0),st(e,r),ge(e,Y()),n;if(t===6)st(e,r);else{if(s=e.current.alternate,!(r&30)&&!vf(s)&&(t=xl(e,r),t===2&&(i=Ts(e),i!==0&&(r=i,t=ai(e,i))),t===1))throw n=sr,Lt(e,0),st(e,r),ge(e,Y()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:_t(e,fe,Qe);break;case 3:if(st(e,r),(r&130023424)===r&&(t=qi+500-Y(),10<t)){if(Jr(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Us(_t.bind(null,e,fe,Qe),t);break}_t(e,fe,Qe);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-Me(r);i=1<<a,a=t[a],a>s&&(s=a),r&=~i}if(r=s,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gf(r/1960))-r,10<r){e.timeoutHandle=Us(_t.bind(null,e,fe,Qe),r);break}_t(e,fe,Qe);break;case 5:_t(e,fe,Qe);break;default:throw Error(b(329))}}}return ge(e,Y()),e.callbackNode===n?Tu.bind(null,e):null}function ai(e,t){var n=Un;return e.current.memoizedState.isDehydrated&&(Lt(e,t).flags|=256),e=xl(e,t),e!==2&&(t=fe,fe=n,t!==null&&oi(t)),e}function oi(e){fe===null?fe=e:fe.push.apply(fe,e)}function vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Ie(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~Zi,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function xo(e){if(R&6)throw Error(b(327));sn();var t=Jr(e,0);if(!(t&1))return ge(e,Y()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=Ts(e);r!==0&&(t=r,n=ai(e,r))}if(n===1)throw n=sr,Lt(e,0),st(e,t),ge(e,Y()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,fe,Qe),ge(e,Y()),null}function ea(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(fn=Y()+500,El&&bt())}}function Bt(e){at!==null&&at.tag===0&&!(R&6)&&sn();var t=R;R|=1;var n=Ee.transition,r=z;try{if(Ee.transition=null,z=1,e)return e()}finally{z=r,Ee.transition=n,R=t,!(R&6)&&bt()}}function ta(){ve=qt.current,O(qt)}function Lt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ym(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Mi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:dn(),O(xe),O(oe),Vi();break;case 5:Wi(r);break;case 4:dn();break;case 13:O(U);break;case 19:O(U);break;case 10:Oi(r.type._context);break;case 22:case 23:ta()}n=n.return}if(ee=e,G=e=ht(e.current,null),re=ve=t,J=0,sr=null,Zi=Dl=It=0,fe=Un=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}Pt=null}return e}function Ru(e,t){do{var n=G;try{if(Bi(),Ur.current=dl,ul){for(var r=H.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ul=!1}if(zt=0,q=X=H=null,On=!1,nr=0,Ji.current=null,n===null||n.return===null){J=1,sr=t,G=null;break}e:{var i=e,a=n.return,o=n,c=t;if(t=re,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var j=to(a);if(j!==null){j.flags&=-257,no(j,a,o,i,t),j.mode&1&&eo(i,u,t),t=j,c=u;var g=t.updateQueue;if(g===null){var w=new Set;w.add(c),t.updateQueue=w}else g.add(c);break e}else{if(!(t&1)){eo(i,u,t),na();break e}c=Error(b(426))}}else if(F&&o.mode&1){var S=to(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),no(S,a,o,i,t),zi(mn(c,o));break e}}i=c=mn(c,o),J!==4&&(J=2),Un===null?Un=[i]:Un.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=gu(i,c,t);Ga(i,m);break e;case 1:o=c;var d=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=vu(i,o,t);Ga(i,v);break e}}i=i.return}while(i!==null)}Iu(n)}catch(C){t=C,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Mu(){var e=ml.current;return ml.current=dl,e===null?dl:e}function na(){(J===0||J===3||J===2)&&(J=4),ee===null||!(It&268435455)&&!(Dl&268435455)||st(ee,re)}function xl(e,t){var n=R;R|=2;var r=Mu();(ee!==e||re!==t)&&(Qe=null,Lt(e,t));do try{yf();break}catch(s){Ru(e,s)}while(!0);if(Bi(),R=n,ml.current=r,G!==null)throw Error(b(261));return ee=null,re=0,J}function yf(){for(;G!==null;)zu(G)}function wf(){for(;G!==null&&!Vd();)zu(G)}function zu(e){var t=Ou(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Iu(e):G=t,Ji.current=null}function Iu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ff(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,G=null;return}}else if(n=mf(n,t,ve),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);J===0&&(J=5)}function _t(e,t,n){var r=z,s=Ee.transition;try{Ee.transition=null,z=1,jf(e,t,n,r)}finally{Ee.transition=s,z=r}return null}function jf(e,t,n,r){do sn();while(at!==null);if(R&6)throw Error(b(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(em(e,i),e===ee&&(G=ee=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lr||(Lr=!0,Fu(Xr,function(){return sn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var a=z;z=1;var o=R;R|=4,Ji.current=null,xf(e,n),Du(n,e),Fm(Os),Zr=!!Bs,Os=Bs=null,e.current=n,hf(n),Qd(),R=o,z=a,Ee.transition=i}else e.current=n;if(Lr&&(Lr=!1,at=e,pl=s),i=e.pendingLanes,i===0&&(pt=null),Gd(n.stateNode),ge(e,Y()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(fl)throw fl=!1,e=si,si=null,e;return pl&1&&e.tag!==0&&sn(),i=e.pendingLanes,i&1?e===ii?Hn++:(Hn=0,ii=e):Hn=0,bt(),null}function sn(){if(at!==null){var e=gc(pl),t=Ee.transition,n=z;try{if(Ee.transition=null,z=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,pl=0,R&6)throw Error(b(331));var s=R;for(R|=4,_=e.current;_!==null;){var i=_,a=i.child;if(_.flags&16){var o=i.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(_=u;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:Fn(8,h,i)}var p=h.child;if(p!==null)p.return=h,_=p;else for(;_!==null;){h=_;var x=h.sibling,j=h.return;if(_u(h),h===u){_=null;break}if(x!==null){x.return=j,_=x;break}_=j}}}var g=i.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}_=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,_=a;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Fn(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,_=m;break e}_=i.return}}var d=e.current;for(_=d;_!==null;){a=_;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,_=f;else e:for(a=d;_!==null;){if(o=_,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Pl(9,o)}}catch(C){V(o,o.return,C)}if(o===a){_=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,_=v;break e}_=o.return}}if(R=s,bt(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(bl,e)}catch{}r=!0}return r}finally{z=n,Ee.transition=t}}return!1}function ho(e,t,n){t=mn(n,t),t=gu(e,t,1),e=ft(e,t,1),t=ue(),e!==null&&(cr(e,1,t),ge(e,t))}function V(e,t,n){if(e.tag===3)ho(e,e,n);else for(;t!==null;){if(t.tag===3){ho(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=mn(n,e),e=vu(t,e,1),t=ft(t,e,1),e=ue(),t!==null&&(cr(t,1,e),ge(t,e));break}}t=t.return}}function bf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(re&n)===n&&(J===4||J===3&&(re&130023424)===re&&500>Y()-qi?Lt(e,0):Zi|=n),ge(e,t)}function Bu(e,t){t===0&&(e.mode&1?(t=br,br<<=1,!(br&130023424)&&(br=4194304)):t=1);var n=ue();e=Ze(e,t),e!==null&&(cr(e,t,n),ge(e,n))}function Nf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bu(e,n)}function kf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Bu(e,n)}var Ou;Ou=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,df(e,t,n);pe=!!(e.flags&131072)}else pe=!1,F&&t.flags&1048576&&Wc(t,sl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var s=on(t,oe.current);ln(t,n),s=$i(null,t,r,e,s,n);var i=Yi();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,rl(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ui(t),s.updater=Al,t.stateNode=s,s._reactInternals=t,Gs(t,r,e,n),t=Js(null,t,r,!0,i,n)):(t.tag=0,F&&i&&Ri(t),ce(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=Sf(r),e=Le(r,e),s){case 0:t=Xs(null,t,r,e,n);break e;case 1:t=so(null,t,r,e,n);break e;case 11:t=ro(null,t,r,e,n);break e;case 14:t=lo(null,t,r,Le(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),Xs(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),so(e,t,r,s,n);case 3:e:{if(bu(t),e===null)throw Error(b(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Kc(e,t),ol(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=mn(Error(b(423)),t),t=io(e,t,r,n,s);break e}else if(r!==s){s=mn(Error(b(424)),t),t=io(e,t,r,n,s);break e}else for(ye=mt(t.stateNode.containerInfo.firstChild),we=t,F=!0,Re=null,n=Yc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),r===s){t=qe(e,t,n);break e}ce(e,t,r,n)}t=t.child}return t;case 5:return Xc(t),e===null&&Qs(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,Fs(r,s)?a=null:i!==null&&Fs(r,i)&&(t.flags|=32),ju(e,t),ce(e,t,a,n),t.child;case 6:return e===null&&Qs(t),null;case 13:return Nu(e,t,n);case 4:return Hi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=un(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),ro(e,t,r,s,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,a=s.value,I(il,r._currentValue),r._currentValue=a,i!==null)if(Ie(i.value,a)){if(i.children===s.children&&!xe.current){t=qe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var o=i.dependencies;if(o!==null){a=i.child;for(var c=o.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Ke(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),$s(i.return,n,t),o.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(b(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),$s(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ce(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,ln(t,n),s=_e(s),r=r(s),t.flags|=1,ce(e,t,r,n),t.child;case 14:return r=t.type,s=Le(r,t.pendingProps),s=Le(r.type,s),lo(e,t,r,s,n);case 15:return yu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Le(r,s),Wr(e,t),t.tag=1,he(r)?(e=!0,rl(t)):e=!1,ln(t,n),hu(t,r,s),Gs(t,r,s,n),Js(null,t,r,!0,e,n);case 19:return ku(e,t,n);case 22:return wu(e,t,n)}throw Error(b(156,t.tag))};function Fu(e,t){return fc(e,t)}function Cf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,t,n,r){return new Cf(e,t,n,r)}function ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sf(e){if(typeof e=="function")return ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bi)return 11;if(e===Ni)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Se(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,s,i){var a=2;if(r=e,typeof e=="function")ra(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wt:return Tt(n.children,s,i,t);case ji:a=8,s|=8;break;case vs:return e=Se(12,n,t,s|2),e.elementType=vs,e.lanes=i,e;case ys:return e=Se(13,n,t,s),e.elementType=ys,e.lanes=i,e;case ws:return e=Se(19,n,t,s),e.elementType=ws,e.lanes=i,e;case Xo:return Ll(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Go:a=10;break e;case Ko:a=9;break e;case bi:a=11;break e;case Ni:a=14;break e;case nt:a=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Se(a,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function Tt(e,t,n,r){return e=Se(7,e,r,t),e.lanes=n,e}function Ll(e,t,n,r){return e=Se(22,e,r,t),e.elementType=Xo,e.lanes=n,e.stateNode={isHidden:!1},e}function fs(e,t,n){return e=Se(6,e,null,t),e.lanes=n,e}function ps(e,t,n){return t=Se(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ef(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function la(e,t,n,r,s,i,a,o,c){return e=new Ef(e,t,n,o,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Se(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ui(i),e}function _f(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uu(e){if(!e)return yt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(he(n))return Uc(e,n,t)}return t}function Hu(e,t,n,r,s,i,a,o,c){return e=la(n,r,!0,e,s,i,a,o,c),e.context=Uu(null),n=e.current,r=ue(),s=xt(n),i=Ke(r,s),i.callback=t??null,ft(n,i,s),e.current.lanes=s,cr(e,s,r),ge(e,r),e}function Tl(e,t,n,r){var s=t.current,i=ue(),a=xt(s);return n=Uu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ft(s,t,a),e!==null&&(ze(e,s,a,i),Fr(e,s,a)),a}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function go(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sa(e,t){go(e,t),(e=e.alternate)&&go(e,t)}var Wu=typeof reportError=="function"?reportError:function(e){console.error(e)};function ia(e){this._internalRoot=e}Rl.prototype.render=ia.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Tl(e,t,null,null)};Rl.prototype.unmount=ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Bt(function(){Tl(null,e,null,null)}),t[Je]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=wc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<lt.length&&t!==0&&t<lt[n].priority;n++);lt.splice(n,0,e),n===0&&bc(e)}};function aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vo(){}function Af(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=hl(a);i.call(u)}}var a=Hu(t,r,e,0,null,!1,!1,"",vo);return e._reactRootContainer=a,e[Je]=a.current,Jn(e.nodeType===8?e.parentNode:e),Bt(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var o=r;r=function(){var u=hl(c);o.call(u)}}var c=la(e,0,!1,null,null,!1,!1,"",vo);return e._reactRootContainer=c,e[Je]=c.current,Jn(e.nodeType===8?e.parentNode:e),Bt(function(){Tl(t,c,n,r)}),c}function zl(e,t,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var o=s;s=function(){var c=hl(a);o.call(c)}}Tl(t,a,e,s)}else a=Af(n,t,e,s,r);return hl(a)}vc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(Si(t,n|1),ge(t,Y()),!(R&6)&&(fn=Y()+500,bt()))}break;case 13:Bt(function(){var r=Ze(e,1);if(r!==null){var s=ue();ze(r,e,1,s)}}),sa(e,1)}};Ei=function(e){if(e.tag===13){var t=Ze(e,134217728);if(t!==null){var n=ue();ze(t,e,134217728,n)}sa(e,134217728)}};yc=function(e){if(e.tag===13){var t=xt(e),n=Ze(e,t);if(n!==null){var r=ue();ze(n,e,t,r)}sa(e,t)}};wc=function(){return z};jc=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};Ps=function(e,t,n){switch(t){case"input":if(Ns(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Sl(r);if(!s)throw Error(b(90));Zo(r),Ns(r,s)}}}break;case"textarea":ec(e,n);break;case"select":t=n.value,t!=null&&en(e,!!n.multiple,t,!1)}};ac=ea;oc=Bt;var Pf={usingClientEntryPoint:!1,Events:[dr,Yt,Sl,sc,ic,ea]},An={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Df={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dc(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tr.isDisabled&&Tr.supportsFiber)try{bl=Tr.inject(Df),He=Tr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!aa(t))throw Error(b(200));return _f(e,t,null,n)};be.createRoot=function(e,t){if(!aa(e))throw Error(b(299));var n=!1,r="",s=Wu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=la(e,1,!1,null,null,n,!1,r,s),e[Je]=t.current,Jn(e.nodeType===8?e.parentNode:e),new ia(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=dc(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Bt(e)};be.hydrate=function(e,t,n){if(!Ml(t))throw Error(b(200));return zl(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!aa(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=Wu;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Hu(t,null,e,1,n??null,s,!1,i,a),e[Je]=t.current,Jn(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Rl(t)};be.render=function(e,t,n){if(!Ml(t))throw Error(b(200));return zl(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!Ml(e))throw Error(b(40));return e._reactRootContainer?(Bt(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};be.unstable_batchedUpdates=ea;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ml(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return zl(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Vu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vu)}catch(e){console.error(e)}}Vu(),Vo.exports=be;var Lf=Vo.exports,yo=Lf;hs.createRoot=yo.createRoot,hs.hydrateRoot=yo.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ir(){return ir=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ir.apply(this,arguments)}var ot;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ot||(ot={}));const wo="popstate";function Tf(e){e===void 0&&(e={});function t(r,s){let{pathname:i,search:a,hash:o}=r.location;return ci("",{pathname:i,search:a,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:gl(s)}return Mf(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rf(){return Math.random().toString(36).substr(2,8)}function jo(e,t){return{usr:e.state,key:e.key,idx:t}}function ci(e,t,n,r){return n===void 0&&(n=null),ir({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vn(t):t,{state:n,key:t&&t.key||r||Rf()})}function gl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Mf(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,o=ot.Pop,c=null,u=h();u==null&&(u=0,a.replaceState(ir({},a.state,{idx:u}),""));function h(){return(a.state||{idx:null}).idx}function p(){o=ot.Pop;let S=h(),m=S==null?null:S-u;u=S,c&&c({action:o,location:w.location,delta:m})}function x(S,m){o=ot.Push;let d=ci(w.location,S,m);u=h()+1;let f=jo(d,u),v=w.createHref(d);try{a.pushState(f,"",v)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(v)}i&&c&&c({action:o,location:w.location,delta:1})}function j(S,m){o=ot.Replace;let d=ci(w.location,S,m);u=h();let f=jo(d,u),v=w.createHref(d);a.replaceState(f,"",v),i&&c&&c({action:o,location:w.location,delta:0})}function g(S){let m=s.location.origin!=="null"?s.location.origin:s.location.href,d=typeof S=="string"?S:gl(S);return d=d.replace(/ $/,"%20"),Q(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let w={get action(){return o},get location(){return e(s,a)},listen(S){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(wo,p),c=S,()=>{s.removeEventListener(wo,p),c=null}},createHref(S){return t(s,S)},createURL:g,encodeLocation(S){let m=g(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:x,replace:j,go(S){return a.go(S)}};return w}var bo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bo||(bo={}));function zf(e,t,n){return n===void 0&&(n="/"),If(e,t,n)}function If(e,t,n,r){let s=typeof t=="string"?vn(t):t,i=pn(s.pathname||"/",n);if(i==null)return null;let a=$u(e);Bf(a);let o=null;for(let c=0;o==null&&c<a.length;++c){let u=Kf(i);o=Yf(a[c],u)}return o}function $u(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,a,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(Q(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=gt([r,c.relativePath]),h=n.concat(c);i.children&&i.children.length>0&&(Q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),$u(i.children,t,h,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Qf(u,i.index),routesMeta:h})};return e.forEach((i,a)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))s(i,a);else for(let c of Yu(i.path))s(i,a,c)}),t}function Yu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=Yu(r.join("/")),o=[];return o.push(...a.map(c=>c===""?i:[i,c].join("/"))),s&&o.push(...a),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Bf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$f(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Of=/^:[\w-]+$/,Ff=3,Uf=2,Hf=1,Wf=10,Vf=-2,No=e=>e==="*";function Qf(e,t){let n=e.split("/"),r=n.length;return n.some(No)&&(r+=Vf),t&&(r+=Uf),n.filter(s=>!No(s)).reduce((s,i)=>s+(Of.test(i)?Ff:i===""?Hf:Wf),r)}function $f(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function Yf(e,t,n){let{routesMeta:r}=e,s={},i="/",a=[];for(let o=0;o<r.length;++o){let c=r[o],u=o===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",p=ui({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},h),x=c.route;if(!p)return null;Object.assign(s,p.params),a.push({params:s,pathname:gt([i,p.pathname]),pathnameBase:qf(gt([i,p.pathnameBase])),route:x}),p.pathnameBase!=="/"&&(i=gt([i,p.pathnameBase]))}return a}function ui(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gf(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:r.reduce((u,h,p)=>{let{paramName:x,isOptional:j}=h;if(x==="*"){let w=o[p]||"";a=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const g=o[p];return j&&!g?u[x]=void 0:u[x]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Gf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,c)=>(r.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function Kf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Qu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Xf(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?vn(e):e;return{pathname:n?n.startsWith("/")?n:Jf(n,t):t,search:ep(r),hash:tp(s)}}function Jf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function xs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gu(e,t){let n=Zf(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ku(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=vn(e):(s=ir({},e),Q(!s.pathname||!s.pathname.includes("?"),xs("?","pathname","search",s)),Q(!s.pathname||!s.pathname.includes("#"),xs("#","pathname","hash",s)),Q(!s.search||!s.search.includes("#"),xs("#","search","hash",s)));let i=e===""||s.pathname==="",a=i?"/":s.pathname,o;if(a==null)o=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let x=a.split("/");for(;x[0]==="..";)x.shift(),p-=1;s.pathname=x.join("/")}o=p>=0?t[p]:"/"}let c=Xf(s,o),u=a&&a!=="/"&&a.endsWith("/"),h=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}const gt=e=>e.join("/").replace(/\/\/+/g,"/"),qf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ep=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function np(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xu=["post","put","patch","delete"];new Set(Xu);const rp=["get",...Xu];new Set(rp);/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(this,arguments)}const Il=y.createContext(null),Ju=y.createContext(null),Nt=y.createContext(null),Bl=y.createContext(null),kt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Zu=y.createContext(null);function lp(e,t){let{relative:n}=t===void 0?{}:t;fr()||Q(!1);let{basename:r,navigator:s}=y.useContext(Nt),{hash:i,pathname:a,search:o}=Ol(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:gt([r,a])),s.createHref({pathname:c,search:o,hash:i})}function fr(){return y.useContext(Bl)!=null}function pr(){return fr()||Q(!1),y.useContext(Bl).location}function qu(e){y.useContext(Nt).static||y.useLayoutEffect(e)}function Be(){let{isDataRoute:e}=y.useContext(kt);return e?gp():sp()}function sp(){fr()||Q(!1);let e=y.useContext(Il),{basename:t,future:n,navigator:r}=y.useContext(Nt),{matches:s}=y.useContext(kt),{pathname:i}=pr(),a=JSON.stringify(Gu(s,n.v7_relativeSplatPath)),o=y.useRef(!1);return qu(()=>{o.current=!0}),y.useCallback(function(u,h){if(h===void 0&&(h={}),!o.current)return;if(typeof u=="number"){r.go(u);return}let p=Ku(u,JSON.parse(a),i,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:gt([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,a,i,e])}function oa(){let{matches:e}=y.useContext(kt),t=e[e.length-1];return t?t.params:{}}function Ol(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(Nt),{matches:s}=y.useContext(kt),{pathname:i}=pr(),a=JSON.stringify(Gu(s,r.v7_relativeSplatPath));return y.useMemo(()=>Ku(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function ip(e,t){return ap(e,t)}function ap(e,t,n,r){fr()||Q(!1);let{navigator:s}=y.useContext(Nt),{matches:i}=y.useContext(kt),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=pr(),h;if(t){var p;let S=typeof t=="string"?vn(t):t;c==="/"||(p=S.pathname)!=null&&p.startsWith(c)||Q(!1),h=S}else h=u;let x=h.pathname||"/",j=x;if(c!=="/"){let S=c.replace(/^\//,"").split("/");j="/"+x.replace(/^\//,"").split("/").slice(S.length).join("/")}let g=zf(e,{pathname:j}),w=mp(g&&g.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:gt([c,s.encodeLocation?s.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:gt([c,s.encodeLocation?s.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&w?y.createElement(Bl.Provider,{value:{location:ar({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ot.Pop}},w):w}function op(){let e=hp(),t=np(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:s},n):null,null)}const cp=y.createElement(op,null);class up extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(kt.Provider,{value:this.props.routeContext},y.createElement(Zu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dp(e){let{routeContext:t,match:n,children:r}=e,s=y.useContext(Il);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(kt.Provider,{value:t},r)}function mp(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=(s=n)==null?void 0:s.errors;if(o!=null){let h=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);h>=0||Q(!1),a=a.slice(0,Math.min(a.length,h+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<a.length;h++){let p=a[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=h),p.route.id){let{loaderData:x,errors:j}=n,g=p.route.loader&&x[p.route.id]===void 0&&(!j||j[p.route.id]===void 0);if(p.route.lazy||g){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((h,p,x)=>{let j,g=!1,w=null,S=null;n&&(j=o&&p.route.id?o[p.route.id]:void 0,w=p.route.errorElement||cp,c&&(u<0&&x===0?(g=!0,S=null):u===x&&(g=!0,S=p.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,x+1)),d=()=>{let f;return j?f=w:g?f=S:p.route.Component?f=y.createElement(p.route.Component,null):p.route.element?f=p.route.element:f=h,y.createElement(dp,{match:p,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:f})};return n&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?y.createElement(up,{location:n.location,revalidation:n.revalidation,component:w,error:j,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var ed=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ed||{}),vl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(vl||{});function fp(e){let t=y.useContext(Il);return t||Q(!1),t}function pp(e){let t=y.useContext(Ju);return t||Q(!1),t}function xp(e){let t=y.useContext(kt);return t||Q(!1),t}function td(e){let t=xp(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function hp(){var e;let t=y.useContext(Zu),n=pp(vl.UseRouteError),r=td(vl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function gp(){let{router:e}=fp(ed.UseNavigateStable),t=td(vl.UseNavigateStable),n=y.useRef(!1);return qu(()=>{n.current=!0}),y.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,ar({fromRouteId:t},i)))},[e,t])}const ko={};function vp(e,t){ko[t]||(ko[t]=!0,console.warn(t))}const Co=(e,t,n)=>vp(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function yp(e,t){(e==null?void 0:e.v7_startTransition)===void 0&&Co("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(e==null?void 0:e.v7_relativeSplatPath)===void 0&&Co("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function K(e){Q(!1)}function wp(e){let{basename:t="/",children:n=null,location:r,navigationType:s=ot.Pop,navigator:i,static:a=!1,future:o}=e;fr()&&Q(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:i,static:a,future:ar({v7_relativeSplatPath:!1},o)}),[c,o,i,a]);typeof r=="string"&&(r=vn(r));let{pathname:h="/",search:p="",hash:x="",state:j=null,key:g="default"}=r,w=y.useMemo(()=>{let S=pn(h,c);return S==null?null:{location:{pathname:S,search:p,hash:x,state:j,key:g},navigationType:s}},[c,h,p,x,j,g,s]);return w==null?null:y.createElement(Nt.Provider,{value:u},y.createElement(Bl.Provider,{children:n,value:w}))}function jp(e){let{children:t,location:n}=e;return ip(di(t),n)}new Promise(()=>{});function di(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,s)=>{if(!y.isValidElement(r))return;let i=[...t,s];if(r.type===y.Fragment){n.push.apply(n,di(r.props.children,i));return}r.type!==K&&Q(!1),!r.props.index||!r.props.children||Q(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=di(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yl(){return yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yl.apply(this,arguments)}function nd(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function bp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Np(e,t){return e.button===0&&(!t||t==="_self")&&!bp(e)}const kp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Cp=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Sp="6";try{window.__reactRouterVersion=Sp}catch{}const Ep=y.createContext({isTransitioning:!1}),_p="startTransition",So=jd[_p];function Ap(e){let{basename:t,children:n,future:r,window:s}=e,i=y.useRef();i.current==null&&(i.current=Tf({window:s,v5Compat:!0}));let a=i.current,[o,c]=y.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},h=y.useCallback(p=>{u&&So?So(()=>c(p)):c(p)},[c,u]);return y.useLayoutEffect(()=>a.listen(h),[a,h]),y.useEffect(()=>yp(r),[r]),y.createElement(wp,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}const Pp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lp=y.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:i,replace:a,state:o,target:c,to:u,preventScrollReset:h,viewTransition:p}=t,x=nd(t,kp),{basename:j}=y.useContext(Nt),g,w=!1;if(typeof u=="string"&&Dp.test(u)&&(g=u,Pp))try{let f=new URL(window.location.href),v=u.startsWith("//")?new URL(f.protocol+u):new URL(u),C=pn(v.pathname,j);v.origin===f.origin&&C!=null?u=C+v.search+v.hash:w=!0}catch{}let S=lp(u,{relative:s}),m=Rp(u,{replace:a,state:o,target:c,preventScrollReset:h,relative:s,viewTransition:p});function d(f){r&&r(f),f.defaultPrevented||m(f)}return y.createElement("a",yl({},x,{href:g||S,onClick:w||i?r:d,ref:n,target:c}))}),De=y.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:a=!1,style:o,to:c,viewTransition:u,children:h}=t,p=nd(t,Cp),x=Ol(c,{relative:p.relative}),j=pr(),g=y.useContext(Ju),{navigator:w,basename:S}=y.useContext(Nt),m=g!=null&&Mp(x)&&u===!0,d=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,f=j.pathname,v=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;s||(f=f.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&S&&(v=pn(v,S)||v);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let N=f===d||!a&&f.startsWith(d)&&f.charAt(C)==="/",E=v!=null&&(v===d||!a&&v.startsWith(d)&&v.charAt(d.length)==="/"),k={isActive:N,isPending:E,isTransitioning:m},M=N?r:void 0,P;typeof i=="function"?P=i(k):P=[i,N?"active":null,E?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let te=typeof o=="function"?o(k):o;return y.createElement(Lp,yl({},p,{"aria-current":M,className:P,ref:n,style:te,to:c,viewTransition:u}),typeof h=="function"?h(k):h)});var mi;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mi||(mi={}));var Eo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Eo||(Eo={}));function Tp(e){let t=y.useContext(Il);return t||Q(!1),t}function Rp(e,t){let{target:n,replace:r,state:s,preventScrollReset:i,relative:a,viewTransition:o}=t===void 0?{}:t,c=Be(),u=pr(),h=Ol(e,{relative:a});return y.useCallback(p=>{if(Np(p,n)){p.preventDefault();let x=r!==void 0?r:gl(u)===gl(h);c(e,{replace:x,state:s,preventScrollReset:i,relative:a,viewTransition:o})}},[u,c,h,r,s,n,e,i,a,o])}function Mp(e,t){t===void 0&&(t={});let n=y.useContext(Ep);n==null&&Q(!1);let{basename:r}=Tp(mi.useViewTransitionState),s=Ol(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=pn(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=pn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ui(s.pathname,a)!=null||ui(s.pathname,i)!=null}const fi="/medicall/assets/Mylogo-B4dQ5J1k.png",zp="/medicall/assets/appointment_img-DzbZlMsi.png",Ip="/medicall/assets/my_image-BcPduuG8.jpg",Bp="/medicall/assets/header_img-DhAi3lLA.png",Op="/medicall/assets/header2_img-CUkB3QOn.png",Fp="/medicall/assets/group_profiles-BCL6AVF5.png",Up="/medicall/assets/profile_pic-D58ifz71.png",Hp="/medicall/assets/contact_image-IJu_19v_.png",Wp="/medicall/assets/about_image-MG9zrc7b.png",Vp="/medicall/assets/logo-BNCDj_dh.svg",Qp="data:image/svg+xml,%3csvg%20width='14'%20height='10'%20viewBox='0%200%2014%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.57692%206.63312L1.60393%200.347811C1.23701%20-0.115937%200.642112%20-0.115937%200.275191%200.347811C-0.0917303%200.811558%20-0.0917303%201.56344%200.275191%202.02719L5.91255%209.15219C6.27947%209.61594%206.87437%209.61594%207.24129%209.15219L12.8787%202.02719C13.2456%201.56344%2013.2456%200.811558%2012.8787%200.347811C12.5117%20-0.115937%2011.9168%20-0.115937%2011.5499%200.347811L6.57692%206.63312Z'%20fill='%237C7C7C'/%3e%3cmask%20id='mask0_5479_343'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='14'%20height='10'%3e%3cpath%20d='M6.57692%206.63312L1.60393%200.347811C1.23701%20-0.115937%200.642112%20-0.115937%200.275191%200.347811C-0.0917303%200.811558%20-0.0917303%201.56344%200.275191%202.02719L5.91255%209.15219C6.27947%209.61594%206.87437%209.61594%207.24129%209.15219L12.8787%202.02719C13.2456%201.56344%2013.2456%200.811558%2012.8787%200.347811C12.5117%20-0.115937%2011.9168%20-0.115937%2011.5499%200.347811L6.57692%206.63312Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_5479_343)'%3e%3c/g%3e%3c/svg%3e",$p="data:image/svg+xml,%3csvg%20width='37'%20height='27'%20viewBox='0%200%2037%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='17'%20y='24'%20width='20'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3crect%20x='7'%20y='12'%20width='30'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3crect%20width='37'%20height='3'%20rx='1.5'%20fill='%23000B6D'/%3e%3c/svg%3e",Yp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nO3cy27TQBSA4RPKRT6T9iG4qUW8CEgUWHQB7Chh0cwE3iAPCuIiqOAlsNG4GFqpFnGaNudk/k+aXRY5+jXjyI4sAgAAAAAAAAAAAAAA1mB+XXaO7sr29L6IjMSt+TUZx912ljyTSyG9khC/S0jNn/VFqvhMvKlmzyXEr//miN8kTF+KvxipPhWjW7VonIgXGie9c4T4QpwYSUjH5wzhK4r2xujWsY9jOF8v+ofwEUX/G+Nkbc/uiXk76c4CQexG0QVj5HXr/W1xYCQaP7qMogNiaPrg48jKdPZYQvzlKooOiJFn0/hIXNH0elCUcTxa33eNh26+68ZH0VJieIiipcWwHEVLjWExipYew1IUJYadKEoMO1GUGHaiKDHsRFFi2ImixLATRYlhJ4oSw04UJYadKEoMO1GUGIYeGKV60GctPBArYKc0a7s/VhRdWRRiGIpSszPsRKmJYSdKTYzLpIN+2hLEWIyGKPZiNESxF6Mhir0YDVEuHmPCrRMrdIkbhRb+YrSR9AJ3bYliKEaHKCuyyucZyvFlJ0aHKEu6zCd9yk6xE6NDlAVd5TNwZafYidEhSo91/jtE2Sl2YnSIYihGp/golmJI6VEsxig2iuUYxUXxEKOYKFV6uvEvn6mm++LDwVb7fkVPMZaL8rmd1bz89k7PW18HHF8u3igXZg/dxhgaZfxuT+yb3xSNP90cU8sfXz/aWV3Q9Kb3YughxpkoPTsl7yJXcpSzO+WTVOmJeFNN99sL+Omd4S7GX29vyDg9OHnVuIdfJH0OttoZ8ix5JgAAAAAAAAAAAAAAIFftNzm+PJEnw4B9AAAAAElFTkSuQmCC",Gp="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.9%204.4H18.7V14.3H4.4V16.5C4.40085%2016.7915%204.51701%2017.0708%204.72312%2017.2769C4.92923%2017.483%205.20852%2017.5992%205.5%2017.6H17.6L22%2022V5.5C21.9992%205.20852%2021.883%204.92923%2021.6769%204.72312C21.4708%204.51701%2021.1915%204.40085%2020.9%204.4ZM16.5%2011V1.1C16.4992%200.808523%2016.383%200.529227%2016.1769%200.323121C15.9708%200.117015%2015.6915%200.00084938%2015.4%200H1.1C0.808523%200.00084938%200.529227%200.117015%200.323121%200.323121C0.117015%200.529227%200.00084938%200.808523%200%201.1V16.5L4.4%2012.1H15.4C15.6915%2012.0992%2015.9708%2011.983%2016.1769%2011.7769C16.383%2011.5708%2016.4992%2011.2915%2016.5%2011Z'%20fill='%23595959'/%3e%3c/svg%3e",Kp="data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.4905%201.50034C9.1861%201.75975%209.03389%201.88948%208.87133%201.99843C8.4987%202.24818%208.08021%202.42152%207.64013%202.5084C7.44814%202.54632%207.24879%202.56222%206.8501%202.59403C5.84838%202.67398%205.3475%202.71394%204.92964%202.86154C3.96314%203.20292%203.20292%203.96314%202.86154%204.92964C2.71394%205.3475%202.67398%205.84838%202.59403%206.8501C2.56222%207.24879%202.54632%207.44814%202.5084%207.64013C2.42152%208.08021%202.24818%208.4987%201.99843%208.87133C1.88948%209.03389%201.75977%209.18609%201.50034%209.4905C0.848541%2010.2554%200.522628%2010.6378%200.331528%2011.0376C-0.110509%2011.9625%20-0.110509%2013.0375%200.331528%2013.9624C0.522641%2014.3623%200.848541%2014.7446%201.50034%2015.5095C1.75973%2015.8139%201.88948%2015.9661%201.99843%2016.1286C2.24818%2016.5013%202.42152%2016.9198%202.5084%2017.3599C2.54632%2017.5519%202.56222%2017.7513%202.59403%2018.1499C2.67398%2019.1516%202.71394%2019.6525%202.86154%2020.0704C3.20292%2021.0369%203.96314%2021.7971%204.92964%2022.1385C5.3475%2022.286%205.84838%2022.326%206.8501%2022.406C7.24879%2022.4378%207.44814%2022.4538%207.64013%2022.4916C8.08021%2022.5785%208.4987%2022.7519%208.87133%2023.0016C9.03389%2023.1105%209.18609%2023.2403%209.4905%2023.4996C10.2554%2024.1515%2010.6378%2024.4774%2011.0376%2024.6685C11.9625%2025.1105%2013.0375%2025.1105%2013.9624%2024.6685C14.3623%2024.4774%2014.7446%2024.1515%2015.5095%2023.4996C15.8139%2023.2403%2015.9661%2023.1105%2016.1286%2023.0016C16.5013%2022.7519%2016.9198%2022.5785%2017.3599%2022.4916C17.5519%2022.4538%2017.7513%2022.4378%2018.1499%2022.406C19.1516%2022.326%2019.6525%2022.286%2020.0704%2022.1385C21.0369%2021.7971%2021.7971%2021.0369%2022.1385%2020.0704C22.286%2019.6525%2022.326%2019.1516%2022.406%2018.1499C22.4378%2017.7513%2022.4538%2017.5519%2022.4916%2017.3599C22.5785%2016.9198%2022.7519%2016.5013%2023.0016%2016.1286C23.1105%2015.9661%2023.2403%2015.8139%2023.4996%2015.5095C24.1515%2014.7446%2024.4774%2014.3623%2024.6685%2013.9624C25.1105%2013.0375%2025.1105%2011.9625%2024.6685%2011.0376C24.4774%2010.6378%2024.1515%2010.2554%2023.4996%209.4905C23.2403%209.18609%2023.1105%209.03389%2023.0016%208.87133C22.7519%208.4987%2022.5785%208.08021%2022.4916%207.64013C22.4538%207.44814%2022.4378%207.24879%2022.406%206.8501C22.326%205.84838%2022.286%205.3475%2022.1385%204.92964C21.7971%203.96314%2021.0369%203.20292%2020.0704%202.86154C19.6525%202.71394%2019.1516%202.67398%2018.1499%202.59403C17.7513%202.56222%2017.5519%202.54632%2017.3599%202.5084C16.9198%202.42152%2016.5013%202.24818%2016.1286%201.99843C15.9661%201.88948%2015.8139%201.75977%2015.5095%201.50034C14.7446%200.848541%2014.3623%200.522641%2013.9624%200.331528C13.0375%20-0.110509%2011.9625%20-0.110509%2011.0376%200.331528C10.6378%200.522628%2010.2554%200.848541%209.4905%201.50034ZM17.9669%209.82893C18.3641%209.43163%2018.3641%208.7875%2017.9669%208.3902C17.5696%207.99292%2016.9254%207.99292%2016.5281%208.3902L10.4654%2014.453L8.47183%2012.4595C8.07454%2012.0623%207.4304%2012.0623%207.03312%2012.4595C6.63583%2012.8568%206.63583%2013.5009%207.03312%2013.8983L9.74598%2016.6111C10.1433%2017.0084%2010.7874%2017.0084%2011.1848%2016.6111L17.9669%209.82893Z'%20fill='%230016E1'/%3e%3c/svg%3e",Xp="data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%206H15M15%206L10.8378%201M15%206L10.8378%2011'%20stroke='%23595959'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Jp="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.5%200C3.80559%200%200%203.80554%200%208.5C0%2013.1944%203.80559%2017%208.5%2017C13.1945%2017%2017%2013.1944%2017%208.5C17%203.80554%2013.1945%200%208.5%200ZM8.5%2015.3C4.75049%2015.3%201.7%2012.2495%201.7%208.5C1.7%204.75049%204.75049%201.7%208.5%201.7C12.2496%201.7%2015.3%204.75049%2015.3%208.5C15.3%2012.2495%2012.2496%2015.3%208.5%2015.3ZM9.56436%205.1C9.56436%205.71628%209.11565%206.1625%208.50864%206.1625C7.87706%206.1625%207.43936%205.71628%207.43936%205.08821C7.43936%204.48456%207.88891%204.0375%208.50864%204.0375C9.11565%204.0375%209.56436%204.48456%209.56436%205.1ZM7.65186%207.65H9.35186V12.75H7.65186V7.65Z'%20fill='black'/%3e%3c/svg%3e",Zp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAUlEQVR4nO3dv2/TQBjG8TBAkTrAWgYqlU6dqFQJBgpDkRi6UHmlcgd+bZQytIDub/+iA5OkwXLskPge+55HuqWVkvfej+4uTRp7MnEcx3Ecx3Ecx3EcZ0QB7gMvgQ/ADRAyGzfAe+A49iI1xi7wTaApQWRcxZ6kwngEfBdoQhAbsSc7fWPcAT4LTD6Ijk+xR32CPBGYdBAfe32CvBaYcBAfJ32CnAlMOIiPsz5BCoEJB/FRGITkCAYhfeMNQvpmG4T0DTYI6ZtqENI30iACzQsGSd+wYJDNfR5xUQ2ld5+z/MPwAngwV9fD6mep68oSpATu1dR2FzgXqC8rkLIOQwwlG5CyCUMIJQuQsg2GCMroQcouGAIoowYpV8FIjDJakPJ/MBZQ3hlEACMRyuhWSLlOjAQoowIpN4HRM8poQM5jw1o09Kjh90ctH2OTB/0oQMplK2OukcWS+to+1qZWyuBByg4YjROeqy8lyqBBLpf9Kz//bjFtQNqibAFfDDJr2nFHjNABpO259Mogs4Y97YgROoIsRQEODTJr1mlHjLACSCNKrMEgs0b9BB7XfFWu6WXpKiB/UW6dV/G5qxp8qC+gnFZbR9zPv676KqbFi47L6nuRh9Vzrhtj8K+y1jphxOszCAbxCsErZBpvWWJbAj5DDIIPdbxChrIlIF7f2qM+YcTrMwgG8QrBK2Qab1liWwI+QwyCD3W8QoayJSBe39qjPmHE6zMIBvEKwStkGm9ZYlsCPkMMgg91vEKGsiUgXt/aoz5hxOszCOMHUbiQciG+Qt7mdqnxQhzkJLeL8RfiIHt9364i3lHHINT24GOvt6uoUHYSX1KvEF0h/d/QZeGWR/E2Pwbhdw+uFr94lAJlq7ohVrwx1nWGK+S6mvuL2ItJrgEOGpp0kLq+7IJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtIJBtALsN7y5uJ+6vuwCbAM/ajDiz7ZT15dlgOc1IM9S15V1+POp5Ztq7Kaux3EcZ5JPfgHNTOp1Sby6QAAAAABJRU5ErkJggg==",qp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAAAjCAYAAADokDbBAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiCSURBVHgB7Vp9bFXlGf8959x7Wwq1hSJSioJSN8yckC3IFoPDICqZW7aEJrO33UqLxMxt7iPLnCwbg+j+kLiMzSmU0kJp6ew+nGMyF1w6LS4sYlgWdaDIhzjxKlVaC70f57z+3nN767nnnttCb4Vb9ZfcnPf74/c+7/s+z/NewThAXZ0qDFgotxK4HAH0N7fKXuQhAshjrAyrHyhgHhK4htErDQNFYmMDwx8dMpVSQijkCFvhfhEI2FLOjZ0HjAmZ9V9WxUYJZiobn2d08cpalIbDqqatTXrxEULOZDaEVb0Av4CNKan2lMJLBX0fjDBRWhPIU+QumYKLSd60tCSl+cwdhsDikrzCPvazveeZtMcOYR/yFDmTaSViMM1QeiJPubeQO+IJzDXPILLlMenDOIAvmVoVQRzzTRtXw0QZJS1BUYvYBg5ZBg5s2yYnhxowQ5k3jSBQPgnTeRuXpJKMiXhj40Ykbq9Bhbsoezrd1CQ936tSE/pCmMdzt9QWHGxul1cSAUQTxSgJu9oJBvFuS4u8U1WlJk00MdXdlmmht6lTetasUcbRQ1jE+Dy2FTSBF7jmzzZ3yps4SzRUqSlWIT5nKMzlBANKcIQ75b+bW+XFbHXEHVmxQl0sMfyMwTAzSrPUsfnrNgVf27RdXidhdyt9Zo4AElNp2+gL2XjDk/UkF+peMdDOLT3dSVF4qKldvllfrWznNk8f8IbNbXJXQ7WqZWSbJ28rz9Sn2daP2cactDxBlHkP2UH8XC9GtnHW1qrLOEY9n+X8hTIKCPaSgO83b5dnvFlGKrCqRpUbcezmgO4chshUnevjFj6BscFCTvSRISJzABe1ip9GL5FOnkIB5/VdM47HVt2qivzq3x5WC4IWdjNYDT8ik50spKTu4sVb7c0aIpOrtpMFr8G5T0CQGybxNxVjgyKvJPtgkVWCP3gT6+vVDM7lz6x/5Qj1dQcX8fMgCb3One6QWR9Wy9jQZzAaGBiPuMUtWXWLVaEMoJEclPuU7aXE9FCyvVeD3r3rFy9WQ/dOMmBjiQ8pNGTwax66T/MrPICncUUWMP0m5dqSOi9DFHTngu1sN+4qp88pE1nA/AGedcf4fYsN9mD0eIdtPErT89882y7hllwFH5LIzF2c4A5tqRkVuIF1lnnmEefl9QAnsDlk4bQEyZGNB5le7Crz2coKfKUL+L2OOGQaJi7xUQx7SuK4+5edcsadyJt+uhnjVgGyaj8cVKQ3htWdnfKuO52H+zS/8uz7CMn/9mWVeHzNGrH1bYxRggTWUhPYOTTe21SHaeBJBmd4xnhtXdjZjfu4eF+H57jimHY3t/Eiw5Cy0rqyRs1m+lpXsSBrfQmDZKYGHfUZV9mpEO5raFBT3Im8CU/wpu3cukOeH+w01zNTK+cbm9tkpyZSx1Pf0YDEHXLHW3bI/yiG6/3Kcid8QX85h0U+2R0uIh3EDPzOW4h1r09t9ZT59xw/DRmd8fbDABqo/jxBke9IGOhy65hjBTIXxxjBsn0X948k9CfMSRMM6pBXaHWQojTDp9a1VL/K0hunJGZi6qWTnXYjDplWEO3cuj9kg7N9ChdzeZZzjZZTbTi88ja1LhrAI62t0j84IMldNj9YcCcd5SUb4TDTyOT2LpMofaQ+M2DenTg7FIUEE3TA2eZaiQ3auIHBAyNUvJwS2sQD+U88/yYiD2H7S6YmJ/OMVyiyk2pOLjDiQRQ4gVTKwx1yRBVgAbf8few4q9nl6HGCpQUKv0IeIpQ9q9ibQNYHSEAMOcI0k56sNNt8yxbHobCaN/Y6M4ql7K2Ot+yt4jNGkt5wx1fVPTH4qEYXEHYgUzJ55s/keGdmlAXe5HPIa5aPh4JH2985sYMYsUOWPZ1U5XwdHdz2A/z8Rf/qa9QnOZDWQR0zDfFJWMhD2W8gRnE0f05S2+LYDUzxrjrvgVdnXIXDx19GVJubaZkK3U1tsg7nAGeb89aqom3+Lbc2n8KW7XKA5Kz1q8zBTPZNF1waKkIZLgBUHIXuuH4FoAq0zs/MZPperYaRyGcz8gQNdVVqWH/BsmWqINMCAmZZfG+ZU4F7rgirPez2UWp6L3Fgp+giK6Ur7ht+zl7a8yc4wgzSWHZC3MTmumr1gErglBnAHHqN/jomHuMRICY6eXP/Riw6lAWljP+UA/qUT9GjMyvx1GC4kb/rPPmzAkE8wSPifnLzDPkYoHFjcD66zTk0K25muzdzQW7sAg7rCl5JLBfteqIapNdReFJq9dmPA+3SihvYRy3AyPJAsYRuuiUpzYzlK0nm+XDyzubQ12vD1RHFLAtIojekjIOggV1xG9pPeZWnjHb8tNKosJWJM0pbPAGEVKpdhVPu8qN3Uyhs0gq8FcV+xo5iHEGbr/Zx/DYVf7hVItxl3yH52d6XyCe0Khgart3RkSnotvuwWgdbOuUEFXcdHg+vsVraIvx9saXLuWSHQHt+N0mu5SROY5RwyKSiq73Gf1Pa3TTcQID/8/OjmOAW97tMY7u0cb+sYIHjWapaiYSv/T/mICHbOM7XvOmO1Ck8blhYSj/AC351aSl1qBh17aTjoneYPrTg/IeeqbXGhPdfDoZuOL6pmJMLUaGNfpI7nzlTWaWQ3yhrRngE/Ysa7h6akZFsndxRpSqsAizngT2fq1TAtvp5Vh6xBLtmVWL/yZMI9vcknQtpE1U4oE0+bzovkpu8aQEbxzbReeH3bOHAwKeDgrdjFmol6XEPcPyvGjb+8fIJdHd1yVk8FSvh2/9c8nAj56FVw4vYl6WFjfFjbOCp/hhe9HrF8tyqzo5sZBoBXN24NenROt8Yn37yYRDL2TgcPT50ZBrGhbsIP3RkXkjk9V8Kzwm0s3mG/pO3cS7vRzlh3JJJE/egZeJeem26YwE8N5yW8THGId4D27wquLi5ZfcAAAAASUVORK5CYII=",ex="/medicall/assets/razorpay_logo-C6aP63br.png",tx="/medicall/assets/doc1-DpAa9vNj.png",nx="/medicall/assets/doc2-Y_tw-_wb.png",rx="/medicall/assets/doc3-D46sSx07.png",lx="/medicall/assets/doc4-BJ7TwJ-q.png",sx="/medicall/assets/doc5-DMyOgDQL.png",ix="/medicall/assets/doc6-BBgIGkd-.png",ax="/medicall/assets/doc7-Jj6FmILj.png",ox="/medicall/assets/doc8-IA4IHo5Z.png",cx="/medicall/assets/doc9-DFlzAwfe.png",ux="/medicall/assets/doc10-CAm4njsj.png",dx="/medicall/assets/doc11-Dhd97DEN.png",mx="/medicall/assets/doc12-DnN3-E9a.png",fx="/medicall/assets/doc13-iluopkgH.png",px="/medicall/assets/doc14-DFAA3xQf.png",xx="/medicall/assets/doc15-wRQogShG.png",hx="/medicall/assets/doc16-CGOUIVYX.png",Ve={appointment_img:zp,my_image:Ip,header_img:Bp,group_profiles:Fp,logo:Vp,chats_icon:Gp,verified_icon:Kp,info_icon:Jp,profile_pic:Up,arrow_icon:Xp,contact_image:Hp,about_image:Wp,menu_icon:$p,cross_icon:Yp,dropdown_icon:Qp,upload_icon:Zp,stripe_logo:qp,razorpay_logo:ex,header2_img:Op},gx=[{_id:"doc1",name:"Dr. Richard James",image:tx,speciality:"General physician",degree:"MBBS",experience:"4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:50,address:{line1:"17th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc2",name:"Dr. Emily Larson",image:nx,speciality:"Gynecologist",degree:"MBBS",experience:"3 Years",about:"Dr. Emily Larson has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:60,address:{line1:"27th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc3",name:"Dr. Sarah Patel",image:rx,speciality:"Dermatologist",degree:"MBBS",experience:"1 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:30,address:{line1:"37th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc4",name:"Dr. Christopher Lee",image:lx,speciality:"Pediatricians",degree:"MBBS",experience:"2 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:40,address:{line1:"47th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc5",name:"Dr. Jennifer Garcia",image:sx,speciality:"Neurologist",degree:"MBBS",experience:"4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:50,address:{line1:"57th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc6",name:"Dr. Andrew Williams",image:ix,speciality:"Neurologist",degree:"MBBS",experience:"4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:50,address:{line1:"57th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc7",name:"Dr. Christopher Davis",image:ax,speciality:"General physician",degree:"MBBS",experience:"4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:50,address:{line1:"17th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc8",name:"Dr. Timothy White",image:ox,speciality:"Gynecologist",degree:"MBBS",experience:"3 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:60,address:{line1:"27th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc9",name:"Dr. Ava Mitchell",image:cx,speciality:"Dermatologist",degree:"MBBS",experience:"1 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:30,address:{line1:"37th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc10",name:"Dr. Jeffrey King",image:ux,speciality:"Pediatricians",degree:"MBBS",experience:"2 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:40,address:{line1:"47th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc11",name:"Dr. Zoe Kelly",image:dx,speciality:"Neurologist",degree:"MBBS",experience:"4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:50,address:{line1:"57th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc12",name:"Dr. Patrick Harris",image:mx,speciality:"Neurologist",degree:"MBBS",experience:"4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:50,address:{line1:"57th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc13",name:"Dr. Chloe Evans",image:fx,speciality:"General physician",degree:"MBBS",experience:"4 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:50,address:{line1:"17th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc14",name:"Dr. Ryan Martinez",image:px,speciality:"Gynecologist",degree:"MBBS",experience:"3 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:60,address:{line1:"27th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc15",name:"Dr. Amelia Hill",image:xx,speciality:"Dermatologist",degree:"MBBS",experience:"1 Years",about:"Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:30,address:{line1:"37th Cross, Richmond",line2:"Circle, Ring Road, London"}},{_id:"doc16",name:"Dr. Maxewll Raw",image:hx,speciality:"Gastroenterologist",degree:"MBBS",experience:"7 Years",about:"Dr.Maxewell has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Maxewell has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",fees:30,address:{line1:"38th Cross, Richmond",line2:"Circle, Ring Road, London"}}],wl="/medicall/assets/profile2-BETX9lLC.jpg",vx=()=>{const e=Be(),[t,n]=y.useState(!1),[r,s]=y.useState(!1),[i,a]=y.useState(!0),o=[{name:"Home",path:"/"},{name:"Find Doctors",path:"/Doctors"},{name:"About",path:"/About"},{name:"Contact",path:"/Contact"},{name:"Health Tips",path:"/BasicRemedies"},{name:"Ayurveda",path:"/Ayurveda"}];return l.jsxs(l.Fragment,{children:[l.jsx("header",{className:"sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100",children:l.jsx("div",{className:"max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10",children:l.jsxs("div",{className:"h-[78px] flex items-center justify-between",children:[l.jsx("button",{onClick:()=>e("/"),className:"flex items-center shrink-0 cursor-pointer",children:l.jsx("img",{src:fi,className:"w-[150px] sm:w-[165px] object-contain",alt:"Medi-call"})}),l.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:o.map(c=>l.jsx(De,{to:c.path,className:({isActive:u})=>`relative px-3.5 py-2.5 rounded-xl text-[13px] xl:text-sm font-medium transition-all duration-200
                    ${u?"text-blue-600 bg-blue-50":"text-slate-600 hover:text-blue-600 hover:bg-slate-50"}`,children:c.name},c.path))}),l.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[l.jsx("button",{onClick:()=>e("/Doctors"),className:`hidden sm:flex w-10 h-10 items-center justify-center rounded-xl\r
                border border-slate-200 text-slate-500\r
                hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50\r
                transition-all duration-200`,"aria-label":"Find doctors",children:l.jsxs("svg",{className:"w-[18px] h-[18px]",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("circle",{cx:"11",cy:"11",r:"6.5",stroke:"currentColor",strokeWidth:"1.8"}),l.jsx("path",{d:"M16 16L21 21",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]})}),i&&l.jsxs("button",{className:`hidden sm:flex relative w-10 h-10 items-center justify-center\r
                  rounded-xl border border-slate-200 text-slate-500\r
                  hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50\r
                  transition-all duration-200`,"aria-label":"Notifications",children:[l.jsxs("svg",{className:"w-[18px] h-[18px]",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M18 9C18 5.6 15.8 3.5 12 3.5C8.2 3.5 6 5.6 6 9V13L4 16H20L18 13V9Z",stroke:"currentColor",strokeWidth:"1.7",strokeLinejoin:"round"}),l.jsx("path",{d:"M10 19C10.5 20 11.2 20.5 12 20.5C12.8 20.5 13.5 20 14 19",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})]}),l.jsx("span",{className:"absolute top-[8px] right-[8px] w-1.5 h-1.5 bg-red-500 rounded-full border border-white"})]}),i?l.jsxs("div",{className:"relative",children:[l.jsxs("button",{onClick:()=>s(!r),className:`flex items-center gap-2 sm:gap-2.5\r
                    p-1 rounded-xl hover:bg-slate-50 transition-all duration-200`,children:[l.jsx("img",{src:wl,className:`w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover\r
                      border border-slate-200`,alt:"User"}),l.jsxs("div",{className:"hidden md:flex flex-col items-start leading-tight",children:[l.jsx("span",{className:"text-[12px] font-semibold text-slate-800",children:"Hi, Puneet"}),l.jsx("span",{className:"text-[10px] text-slate-400",children:"Patient"})]}),l.jsx("img",{src:Ve.dropdown_icon,className:`w-2.5 mr-1 transition-transform duration-200 ${r?"rotate-180":""}`,alt:"Dropdown"})]}),r&&l.jsx("div",{className:"absolute right-0 top-[58px] w-[230px]",children:l.jsxs("div",{className:`bg-white border border-slate-100 rounded-2xl\r
                      shadow-[0_15px_50px_rgba(15,23,42,0.12)]\r
                      overflow-hidden`,children:[l.jsx("div",{className:"px-4 py-4 bg-slate-50 border-b border-slate-100",children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("img",{src:wl,className:"w-11 h-11 rounded-xl object-cover",alt:"Profile"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-semibold text-slate-800",children:"Puneet"}),l.jsx("p",{className:"text-xs text-slate-400",children:"Patient account"})]})]})}),l.jsxs("div",{className:"p-2",children:[l.jsxs("button",{onClick:()=>{e("/my-profile"),s(!1)},className:`w-full flex items-center gap-3 px-3 py-3\r
                            rounded-xl text-left text-sm text-slate-600\r
                            hover:bg-blue-50 hover:text-blue-600\r
                            transition-colors`,children:[l.jsx("span",{className:"w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100",children:"👤"}),l.jsx("span",{children:"My Profile"})]}),l.jsxs("button",{onClick:()=>{e("/my-appointments"),s(!1)},className:`w-full flex items-center gap-3 px-3 py-3\r
                            rounded-xl text-left text-sm text-slate-600\r
                            hover:bg-blue-50 hover:text-blue-600\r
                            transition-colors`,children:[l.jsx("span",{className:"w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100",children:"📅"}),l.jsx("span",{children:"My Appointments"})]}),l.jsx("div",{className:"my-1 border-t border-slate-100"}),l.jsxs("button",{onClick:()=>{a(!1),s(!1)},className:`w-full flex items-center gap-3 px-3 py-3\r
                            rounded-xl text-left text-sm text-red-500\r
                            hover:bg-red-50\r
                            transition-colors`,children:[l.jsx("span",{className:"w-8 h-8 flex items-center justify-center rounded-lg bg-red-50",children:"↪"}),l.jsx("span",{children:"Logout"})]})]})]})})]}):l.jsx("button",{onClick:()=>e("/login"),className:`hidden sm:block bg-blue-600 hover:bg-blue-700\r
                  text-white text-sm font-semibold\r
                  px-6 py-2.5 rounded-xl\r
                  shadow-sm hover:shadow-md\r
                  transition-all duration-200`,children:"Create account"}),l.jsx("button",{onClick:()=>n(!0),className:`lg:hidden w-10 h-10 flex items-center justify-center\r
                rounded-xl border border-slate-200 hover:bg-slate-50`,"aria-label":"Open menu",children:l.jsx("img",{src:Ve.menu_icon,className:"w-5",alt:"Menu"})})]})]})})}),t&&l.jsxs("div",{className:"fixed inset-0 z-[100] bg-white lg:hidden",children:[l.jsxs("div",{className:"h-[78px] px-5 flex items-center justify-between border-b border-slate-100",children:[l.jsx("img",{src:fi,className:"w-[145px]",alt:"Medi-call"}),l.jsx("button",{onClick:()=>n(!1),className:`w-10 h-10 flex items-center justify-center\r
              rounded-xl border border-slate-200 hover:bg-slate-50`,children:l.jsx("img",{src:Ve.cross_icon,className:"w-5",alt:"Close"})})]}),l.jsxs("div",{className:"px-5 pt-8",children:[l.jsx("p",{className:"text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4",children:"Menu"}),l.jsx("nav",{className:"flex flex-col gap-2",children:o.map(c=>l.jsx(De,{to:c.path,onClick:()=>n(!1),className:({isActive:u})=>`px-4 py-3.5 rounded-xl text-base font-medium transition-all
                    ${u?"bg-blue-50 text-blue-600":"text-slate-700 hover:bg-slate-50"}`,children:c.name},c.path))}),l.jsx("div",{className:"mt-8 pt-6 border-t border-slate-100",children:i?l.jsxs("div",{className:"space-y-2",children:[l.jsx("button",{onClick:()=>{e("/my-profile"),n(!1)},className:`w-full text-left px-4 py-3 rounded-xl\r
                    text-slate-700 hover:bg-slate-50`,children:"👤 My Profile"}),l.jsx("button",{onClick:()=>{e("/my-appointments"),n(!1)},className:`w-full text-left px-4 py-3 rounded-xl\r
                    text-slate-700 hover:bg-slate-50`,children:"📅 My Appointments"}),l.jsx("button",{onClick:()=>{a(!1),n(!1)},className:`w-full text-left px-4 py-3 rounded-xl\r
                    text-red-500 hover:bg-red-50`,children:"↪ Logout"})]}):l.jsx("button",{onClick:()=>{e("/login"),n(!1)},className:`w-full bg-blue-600 text-white py-3.5\r
                  rounded-xl font-semibold`,children:"Create Account"})})]})]})]})},yx=()=>l.jsx("footer",{className:"mt-24 sm:mt-28",children:l.jsx("div",{className:"bg-slate-950 text-white",children:l.jsxs("div",{className:"max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10",children:[l.jsxs("div",{className:"py-14 sm:py-16",children:[l.jsxs("div",{className:`relative overflow-hidden\r
              rounded-3xl\r
              bg-blue-600\r
              px-6 py-8 sm:px-10 sm:py-10\r
              mb-14`,children:[l.jsx("div",{className:`absolute -right-16 -top-20\r
              w-52 h-52 rounded-full\r
              bg-white/10`}),l.jsx("div",{className:`absolute right-20 -bottom-28\r
              w-48 h-48 rounded-full\r
              bg-white/5`}),l.jsxs("div",{className:`relative flex flex-col md:flex-row\r
              md:items-center md:justify-between gap-7`,children:[l.jsxs("div",{className:"max-w-[650px]",children:[l.jsx("span",{className:`inline-block mb-3\r
                    text-[10px] uppercase\r
                    tracking-[0.18em]\r
                    font-bold text-blue-100`,children:"Better care starts here"}),l.jsx("h2",{className:`text-2xl sm:text-3xl\r
                    font-bold tracking-tight`,children:"Find the right doctor for you."}),l.jsx("p",{className:`mt-2\r
                    text-sm leading-6\r
                    text-blue-100`,children:"Browse verified healthcare professionals and book your appointment in just a few clicks."})]}),l.jsxs(De,{to:"/Doctors",className:`group shrink-0\r
                  inline-flex items-center justify-center gap-2\r
                  px-6 py-3\r
                  rounded-xl\r
                  bg-white\r
                  text-blue-600\r
                  text-sm font-semibold\r
                  hover:bg-blue-50\r
                  transition-all duration-200`,children:["Find a Doctor",l.jsx("span",{className:`text-lg transition-transform\r
                  group-hover:translate-x-1`,children:"→"})]})]})]}),l.jsxs("div",{className:`grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-[2fr_1fr_1fr_1.3fr]\r
              gap-10 lg:gap-16`,children:[l.jsxs("div",{children:[l.jsx(De,{to:"/",className:"inline-block",children:l.jsx("div",{className:"bg-white rounded-xl px-3 py-2",children:l.jsx("img",{src:fi,className:"w-[145px] object-contain",alt:"Medi-call"})})}),l.jsx("p",{className:`max-w-[430px]\r
                  mt-5\r
                  text-sm\r
                  leading-7\r
                  text-slate-400`,children:"Medi-call makes healthcare simpler by helping patients discover trusted doctors, book appointments and access better care from one place."}),l.jsxs("div",{className:"flex items-center gap-2 mt-6",children:[l.jsx("button",{className:`w-9 h-9 rounded-xl\r
                    border border-slate-800\r
                    flex items-center justify-center\r
                    text-xs font-semibold\r
                    text-slate-400\r
                    hover:text-white\r
                    hover:border-slate-600\r
                    transition-colors`,children:"in"}),l.jsx("button",{className:`w-9 h-9 rounded-xl\r
                    border border-slate-800\r
                    flex items-center justify-center\r
                    text-sm font-semibold\r
                    text-slate-400\r
                    hover:text-white\r
                    hover:border-slate-600\r
                    transition-colors`,children:"f"}),l.jsx("button",{className:`w-9 h-9 rounded-xl\r
                    border border-slate-800\r
                    flex items-center justify-center\r
                    text-sm font-semibold\r
                    text-slate-400\r
                    hover:text-white\r
                    hover:border-slate-600\r
                    transition-colors`,children:"◎"})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:`text-xs uppercase\r
                  tracking-[0.15em]\r
                  font-bold text-white mb-5`,children:"Company"}),l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx(De,{to:"/",className:`text-sm text-slate-400\r
                    hover:text-white transition-colors`,children:"Home"}),l.jsx(De,{to:"/About",className:`text-sm text-slate-400\r
                    hover:text-white transition-colors`,children:"About us"}),l.jsx(De,{to:"/Contact",className:`text-sm text-slate-400\r
                    hover:text-white transition-colors`,children:"Contact us"}),l.jsx("span",{className:`text-sm text-slate-400\r
                    hover:text-white cursor-pointer\r
                    transition-colors`,children:"Privacy Policy"})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:`text-xs uppercase\r
                  tracking-[0.15em]\r
                  font-bold text-white mb-5`,children:"Services"}),l.jsxs("div",{className:"flex flex-col gap-3",children:[l.jsx(De,{to:"/Doctors",className:`text-sm text-slate-400\r
                    hover:text-white transition-colors`,children:"Find Doctors"}),l.jsx(De,{to:"/Doctors",className:`text-sm text-slate-400\r
                    hover:text-white transition-colors`,children:"Book Appointment"}),l.jsx(De,{to:"/BasicRemedies",className:`text-sm text-slate-400\r
                    hover:text-white transition-colors`,children:"Health Tips"}),l.jsx(De,{to:"/Ayurveda",className:`text-sm text-slate-400\r
                    hover:text-white transition-colors`,children:"Ayurvedic Care"})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:`text-xs uppercase\r
                  tracking-[0.15em]\r
                  font-bold text-white mb-5`,children:"Get in touch"}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:`w-9 h-9 shrink-0\r
                      rounded-xl bg-slate-900\r
                      border border-slate-800\r
                      flex items-center justify-center`,children:l.jsx("svg",{className:"w-4 h-4 text-slate-300",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M6.5 3.5H9L10.5 7.5L8.5 9C9.4 11.2 11 12.9 13.2 13.8L14.7 11.8L18.7 13.3V15.8C18.7 17.2 17.5 18.3 16.1 18.2C9.5 17.5 5.5 13.5 4.8 6.9C4.7 5.5 5.8 3.5 6.5 3.5Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] text-slate-500 uppercase tracking-wide",children:"Phone"}),l.jsx("a",{href:"tel:+918130265893",className:`text-sm text-slate-300\r
                        hover:text-white transition-colors`,children:"+91 81302 65893"})]})]}),l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:`w-9 h-9 shrink-0\r
                      rounded-xl bg-slate-900\r
                      border border-slate-800\r
                      flex items-center justify-center`,children:l.jsxs("svg",{className:"w-4 h-4 text-slate-300",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),l.jsx("path",{d:"M4 7L12 13L20 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] text-slate-500 uppercase tracking-wide",children:"Email"}),l.jsx("a",{href:"mailto:medicall112@gmail.com",className:`text-sm text-slate-300\r
                        hover:text-white transition-colors break-all`,children:"medicall112@gmail.com"})]})]})]})]})]})]}),l.jsx("div",{className:"border-t border-slate-800",children:l.jsxs("div",{className:`max-w-[1440px] mx-auto\r
              px-5 sm:px-8 lg:px-10\r
              py-5\r
              flex flex-col sm:flex-row\r
              items-center justify-between\r
              gap-3`,children:[l.jsxs("p",{className:"text-xs text-slate-500 text-center sm:text-left",children:["© ",new Date().getFullYear()," Medi-call. All rights reserved."]}),l.jsxs("div",{className:"flex items-center gap-5",children:[l.jsx("span",{className:"text-xs text-slate-500",children:"Privacy"}),l.jsx("span",{className:"text-xs text-slate-500",children:"Terms"}),l.jsx("span",{className:"text-xs text-slate-500",children:"Help"})]}),l.jsx("p",{className:"text-xs text-slate-600",children:"Built with care for better healthcare."})]})})]})})}),wx=()=>{const e=Be(),t=()=>{e("/Doctors"),window.scrollTo({top:0,behavior:"smooth"})};return l.jsxs("section",{className:"bg-slate-50 px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7",children:[l.jsxs("div",{className:`relative\r
        max-w-[1280px]\r
        mx-auto\r
        overflow-hidden\r
        rounded-[28px]\r
        bg-slate-950`,children:[l.jsx("div",{className:`absolute\r
          -right-32\r
          -top-32\r
          w-[420px]\r
          h-[420px]\r
          rounded-full\r
          bg-blue-600/10`}),l.jsx("div",{className:`absolute\r
          right-[25%]\r
          bottom-[-180px]\r
          w-[400px]\r
          h-[400px]\r
          rounded-full\r
          bg-cyan-500/5`}),l.jsx("div",{className:`absolute\r
          left-[-180px]\r
          bottom-[-220px]\r
          w-[420px]\r
          h-[420px]\r
          rounded-full\r
          bg-blue-500/5`}),l.jsxs("div",{className:`relative\r
          grid\r
          lg:grid-cols-[1fr_0.9fr]\r
          min-h-[570px]`,children:[l.jsxs("div",{className:`flex\r
            flex-col\r
            justify-center\r
            px-6\r
            sm:px-10\r
            lg:px-14\r
            xl:px-16\r
            py-12\r
            lg:py-16`,children:[l.jsxs("div",{className:`flex\r
              items-center\r
              gap-2\r
              w-fit\r
              px-3\r
              py-1.5\r
              rounded-full\r
              bg-white/5\r
              border\r
              border-white/10`,children:[l.jsx("span",{className:`w-2\r
                h-2\r
                rounded-full\r
                bg-emerald-400`}),l.jsx("span",{className:`text-[10px]\r
                font-semibold\r
                tracking-wide\r
                text-slate-300`,children:"TRUSTED DIGITAL HEALTHCARE"})]}),l.jsxs("h1",{className:`mt-6\r
              text-4xl\r
              sm:text-5xl\r
              xl:text-6xl\r
              font-bold\r
              leading-[1.05]\r
              tracking-tight\r
              text-white\r
              max-w-[650px]`,children:["Healthcare that",l.jsx("span",{className:"block text-blue-400",children:"fits your life."})]}),l.jsx("p",{className:`mt-6\r
              max-w-[560px]\r
              text-sm\r
              sm:text-base\r
              leading-7\r
              text-slate-400`,children:"Find trusted doctors, explore specialities and book consultations without the usual hassle."}),l.jsxs("div",{className:`mt-8\r
              flex\r
              flex-col\r
              sm:flex-row\r
              gap-2\r
              max-w-[610px]\r
              p-2\r
              rounded-2xl\r
              bg-white`,children:[l.jsxs("button",{onClick:()=>e("/Doctors"),className:`flex\r
                items-center\r
                gap-3\r
                flex-1\r
                px-4\r
                py-3\r
                rounded-xl\r
                text-left\r
                hover:bg-slate-50\r
                transition-colors`,children:[l.jsx("span",{className:`w-9\r
                  h-9\r
                  rounded-lg\r
                  bg-blue-50\r
                  flex\r
                  items-center\r
                  justify-center`,children:"🩺"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] text-slate-400",children:"Find a specialist"}),l.jsx("p",{className:"text-xs font-semibold text-slate-700 mt-0.5",children:"Doctor or speciality"})]})]}),l.jsx("div",{className:"hidden sm:block w-px bg-slate-200 my-2"}),l.jsxs("button",{onClick:()=>e("/Doctors"),className:`flex\r
                items-center\r
                gap-3\r
                flex-1\r
                px-4\r
                py-3\r
                rounded-xl\r
                text-left\r
                hover:bg-slate-50\r
                transition-colors`,children:[l.jsx("span",{className:`w-9\r
                  h-9\r
                  rounded-lg\r
                  bg-slate-100\r
                  flex\r
                  items-center\r
                  justify-center`,children:"📍"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] text-slate-400",children:"Location"}),l.jsx("p",{className:"text-xs font-semibold text-slate-700 mt-0.5",children:"Choose your location"})]})]}),l.jsx("button",{onClick:t,className:`px-6\r
                py-3\r
                rounded-xl\r
                bg-blue-600\r
                hover:bg-blue-700\r
                text-white\r
                text-xs\r
                font-semibold\r
                transition-colors`,children:"Search"})]}),l.jsxs("div",{className:`flex\r
              flex-wrap\r
              items-center\r
              gap-5\r
              mt-7`,children:[l.jsx("div",{className:"flex items-center",children:l.jsx("img",{src:Ve.group_profiles,alt:"Patients",className:`h-8\r
                    w-auto\r
                    object-contain`})}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("span",{className:"text-amber-400 text-sm",children:"★"}),l.jsx("span",{className:"text-xs font-bold text-white",children:"Trusted healthcare experience"})]}),l.jsx("p",{className:"text-[10px] text-slate-500 mt-1",children:"Simple booking • Trusted doctors • Easy access"})]})]})]}),l.jsxs("div",{className:`relative\r
            min-h-[360px]\r
            lg:min-h-full\r
            flex\r
            items-end\r
            justify-center\r
            overflow-hidden`,children:[l.jsx("div",{className:`absolute\r
              inset-x-10\r
              top-16\r
              bottom-0\r
              rounded-t-[180px]\r
              bg-blue-600/10`}),l.jsx("img",{src:Ve.header2_img,alt:"Doctor consultation",className:`relative\r
              z-10\r
              w-full\r
              max-w-[570px]\r
              h-auto\r
              object-contain\r
              object-bottom\r
              lg:absolute\r
              lg:bottom-0\r
              lg:right-0`}),l.jsxs("div",{className:`absolute\r
              z-20\r
              top-10\r
              right-5\r
              sm:right-8\r
              lg:right-10\r
              flex\r
              items-center\r
              gap-3\r
              px-4\r
              py-3\r
              rounded-2xl\r
              bg-white\r
              shadow-[0_15px_40px_rgba(0,0,0,0.18)]`,children:[l.jsx("div",{className:`w-9\r
                h-9\r
                rounded-xl\r
                bg-emerald-50\r
                flex\r
                items-center\r
                justify-center`,children:"✓"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-slate-800",children:"Verified doctors"}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-0.5",children:"Quality-focused care"})]})]}),l.jsx("div",{className:`absolute\r
              z-20\r
              bottom-8\r
              left-5\r
              sm:left-8\r
              lg:left-6\r
              px-4\r
              py-3\r
              rounded-2xl\r
              bg-white\r
              shadow-[0_15px_40px_rgba(0,0,0,0.18)]`,children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-9\r
                  h-9\r
                  rounded-xl\r
                  bg-blue-50\r
                  flex\r
                  items-center\r
                  justify-center`,children:"📅"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-slate-800",children:"Easy scheduling"}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-0.5",children:"Pick a time that works"})]})]})})]})]})]}),l.jsxs("div",{className:`max-w-[1180px]\r
        mx-auto\r
        grid\r
        grid-cols-1\r
        sm:grid-cols-3\r
        gap-3\r
        py-5`,children:[l.jsxs("div",{className:`flex\r
          items-center\r
          gap-3\r
          p-4\r
          rounded-2xl\r
          bg-white\r
          border\r
          border-slate-100`,children:[l.jsx("div",{className:`w-10\r
            h-10\r
            rounded-xl\r
            bg-blue-50\r
            flex\r
            items-center\r
            justify-center`,children:"🩺"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-slate-800",children:"Multiple specialities"}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:"Find the right doctor"})]})]}),l.jsxs("div",{className:`flex\r
          items-center\r
          gap-3\r
          p-4\r
          rounded-2xl\r
          bg-white\r
          border\r
          border-slate-100`,children:[l.jsx("div",{className:`w-10\r
            h-10\r
            rounded-xl\r
            bg-emerald-50\r
            flex\r
            items-center\r
            justify-center`,children:"⚡"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-slate-800",children:"Simple booking"}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:"Choose your time and book"})]})]}),l.jsxs("div",{className:`flex\r
          items-center\r
          gap-3\r
          p-4\r
          rounded-2xl\r
          bg-white\r
          border\r
          border-slate-100`,children:[l.jsx("div",{className:`w-10\r
            h-10\r
            rounded-xl\r
            bg-violet-50\r
            flex\r
            items-center\r
            justify-center`,children:"🔒"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-slate-800",children:"Your information"}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:"Built with privacy in mind"})]})]})]})]})},jx=()=>{const e=Be(),t=[{name:"General physician",title:"General Physician",description:"Everyday health, fever & common conditions",icon:"🩺",bg:"bg-blue-50",iconBg:"bg-blue-100",iconColor:"text-blue-600"},{name:"Gynecologist",title:"Gynecologist",description:"Women's health, wellness & care",icon:"♀",bg:"bg-pink-50",iconBg:"bg-pink-100",iconColor:"text-pink-600"},{name:"Dermatologist",title:"Dermatologist",description:"Skin, hair & cosmetic health",icon:"✦",bg:"bg-purple-50",iconBg:"bg-purple-100",iconColor:"text-purple-600"},{name:"Pediatricians",title:"Pediatrician",description:"Healthcare specially for children",icon:"♧",bg:"bg-emerald-50",iconBg:"bg-emerald-100",iconColor:"text-emerald-600"},{name:"Neurologist",title:"Neurologist",description:"Brain, nerves & nervous system",icon:"◉",bg:"bg-orange-50",iconBg:"bg-orange-100",iconColor:"text-orange-600"},{name:"Gastroenterologist",title:"Gastroenterologist",description:"Digestive system & gut health",icon:"⌁",bg:"bg-yellow-50",iconBg:"bg-yellow-100",iconColor:"text-yellow-600"}],n=r=>{e(`/Doctors/${encodeURIComponent(r)}`),window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("section",{className:"mt-16 sm:mt-20 lg:mt-24",children:l.jsxs("div",{className:"max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[10px] sm:text-[11px]\r
                uppercase tracking-[0.18em]\r
                font-bold text-blue-600`,children:"Healthcare specialists"})]}),l.jsx("h2",{className:`text-2xl sm:text-3xl lg:text-[34px]\r
              font-bold tracking-[-1px]\r
              text-slate-900`,children:"Find care for every need"}),l.jsx("p",{className:`mt-2 max-w-[590px]\r
              text-sm sm:text-[15px]\r
              leading-6 text-slate-500`,children:"Choose a speciality and find experienced doctors who can help you with your healthcare needs."})]}),l.jsxs("button",{onClick:()=>{e("/Doctors"),window.scrollTo({top:0,behavior:"smooth"})},className:`group flex items-center gap-2 w-fit\r
            text-sm font-semibold\r
            text-blue-600\r
            hover:text-blue-700\r
            transition-colors`,children:["View all doctors",l.jsx("span",{className:`text-lg\r
              transition-transform duration-200\r
              group-hover:translate-x-1`,children:"→"})]})]}),l.jsx("div",{className:`grid\r
          grid-cols-2\r
          sm:grid-cols-3\r
          lg:grid-cols-6\r
          gap-3 sm:gap-4`,children:t.map(r=>l.jsxs("button",{onClick:()=>n(r.name),className:`group relative\r
              overflow-hidden\r
              text-left\r
              p-4 sm:p-5\r
              min-h-[205px]\r
              rounded-2xl\r
              bg-white\r
              border border-slate-100\r
              hover:-translate-y-1\r
              hover:border-blue-100\r
              hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]\r
              transition-all duration-300`,children:[l.jsx("div",{className:`absolute
                -right-10 -top-10
                w-28 h-28
                rounded-full
                ${r.bg}
                opacity-80
                group-hover:scale-125
                transition-transform duration-500`}),l.jsxs("div",{className:"relative flex items-start justify-between",children:[l.jsx("div",{className:`w-12 h-12
                  rounded-2xl
                  ${r.iconBg}
                  flex items-center justify-center
                  text-xl
                  ${r.iconColor}
                  group-hover:scale-105
                  transition-transform duration-300`,children:r.icon}),l.jsx("div",{className:`w-8 h-8\r
                  rounded-full\r
                  bg-slate-50\r
                  flex items-center justify-center\r
                  text-slate-400\r
                  opacity-0\r
                  translate-x-1\r
                  group-hover:opacity-100\r
                  group-hover:translate-x-0\r
                  transition-all duration-300`,children:"→"})]}),l.jsxs("div",{className:"relative mt-5",children:[l.jsx("h3",{className:`text-sm\r
                  sm:text-[15px]\r
                  font-bold\r
                  text-slate-800\r
                  group-hover:text-blue-600\r
                  transition-colors`,children:r.title}),l.jsx("p",{className:`mt-2\r
                  text-[10px]\r
                  sm:text-xs\r
                  leading-5\r
                  text-slate-400`,children:r.description})]}),l.jsxs("div",{className:`absolute\r
                left-4 right-4\r
                bottom-4\r
                flex items-center\r
                justify-between`,children:[l.jsx("span",{className:`text-[9px]\r
                  font-bold\r
                  uppercase\r
                  tracking-wider\r
                  text-slate-300`,children:"Specialist"}),l.jsx("span",{className:`text-[10px]\r
                  font-semibold\r
                  text-blue-500\r
                  opacity-0\r
                  group-hover:opacity-100\r
                  transition-opacity`,children:"Explore →"})]})]},r.name))}),l.jsxs("div",{className:`mt-6\r
          p-5 sm:p-6\r
          rounded-2xl\r
          bg-slate-50\r
          border border-slate-100\r
          flex flex-col sm:flex-row\r
          items-start sm:items-center\r
          justify-between gap-4`,children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-11 h-11\r
              rounded-xl\r
              bg-white\r
              border border-slate-100\r
              flex items-center justify-center\r
              text-lg`,children:"🔍"}),l.jsxs("div",{children:[l.jsx("p",{className:`text-sm\r
                font-semibold\r
                text-slate-800`,children:"Not sure which doctor you need?"}),l.jsx("p",{className:`text-xs\r
                text-slate-400\r
                mt-1`,children:"Browse our complete list and find the right specialist."})]})]}),l.jsx("button",{onClick:()=>{e("/Doctors"),window.scrollTo({top:0,behavior:"smooth"})},className:`px-5 py-2.5\r
            rounded-xl\r
            bg-white\r
            border border-slate-200\r
            text-xs sm:text-sm\r
            font-semibold\r
            text-slate-700\r
            hover:border-blue-200\r
            hover:bg-blue-50\r
            hover:text-blue-600\r
            transition-all`,children:"Browse all doctors →"})]})]})})},yn=y.createContext(),bx=e=>{const n={doctors:gx,currencySymbol:"$"};return l.jsx(yn.Provider,{value:n,children:e.children})},Nx=()=>{const e=Be(),{doctors:t}=y.useContext(yn),n=r=>{e(`/appointment/${r}`),window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("section",{className:"mt-20 sm:mt-24 lg:mt-28",children:l.jsxs("div",{className:"max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[11px] uppercase tracking-[0.18em]\r
              font-bold text-blue-600`,children:"Trusted professionals"})]}),l.jsx("h2",{className:`text-2xl sm:text-3xl lg:text-[34px]\r
              font-bold tracking-[-1px] text-slate-900`,children:"Meet our top doctors"}),l.jsx("p",{className:`mt-2 max-w-[560px]\r
              text-sm sm:text-[15px]\r
              leading-6 text-slate-500`,children:"Experienced healthcare professionals ready to help you with personalized care and expert guidance."})]}),l.jsxs("button",{onClick:()=>{e("/Doctors"),window.scrollTo({top:0,behavior:"smooth"})},className:`group flex items-center gap-2 w-fit\r
            text-sm font-semibold text-blue-600\r
            hover:text-blue-700 transition-colors`,children:["View all doctors",l.jsx("span",{className:`text-lg transition-transform duration-200\r
              group-hover:translate-x-1`,children:"→"})]})]}),l.jsx("div",{className:`grid grid-cols-1\r
          sm:grid-cols-2\r
          lg:grid-cols-3\r
          xl:grid-cols-5\r
          gap-4`,children:t.slice(0,10).map(r=>l.jsxs("article",{onClick:()=>n(r._id),className:`group cursor-pointer\r
              bg-white\r
              border border-slate-100\r
              rounded-2xl\r
              overflow-hidden\r
              hover:border-blue-100\r
              hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]\r
              hover:-translate-y-1\r
              transition-all duration-300`,children:[l.jsxs("div",{className:"relative overflow-hidden bg-slate-50",children:[l.jsx("img",{src:r.image,alt:r.name,className:`w-full aspect-[4/4.5]\r
                  object-cover\r
                  group-hover:scale-[1.035]\r
                  transition-transform duration-500`}),l.jsxs("div",{className:`absolute top-3 left-3\r
                  flex items-center gap-1.5\r
                  px-2.5 py-1.5\r
                  bg-white/95\r
                  backdrop-blur-sm\r
                  rounded-full\r
                  shadow-sm`,children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500"}),l.jsx("span",{className:"text-[10px] font-semibold text-slate-600",children:"Available"})]}),l.jsx("button",{onClick:s=>s.stopPropagation(),className:`absolute top-3 right-3\r
                  w-8 h-8\r
                  flex items-center justify-center\r
                  rounded-full\r
                  bg-white/95\r
                  backdrop-blur-sm\r
                  text-slate-400\r
                  hover:text-red-500\r
                  shadow-sm\r
                  transition-colors`,"aria-label":"Add to favourites",children:l.jsx("svg",{className:"w-[16px] h-[16px]",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M20.8 8.7C20.8 13.5 12 20 12 20S3.2 13.5 3.2 8.7C3.2 5.9 5.3 4 8 4C9.8 4 11.3 5 12 6.4C12.7 5 14.2 4 16 4C18.7 4 20.8 5.9 20.8 8.7Z",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),l.jsxs("div",{className:"p-4",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("h3",{className:`text-[15px]\r
                    font-bold\r
                    text-slate-800\r
                    truncate\r
                    group-hover:text-blue-600\r
                    transition-colors`,children:r.name}),l.jsx("span",{className:`w-4 h-4 shrink-0\r
                    flex items-center justify-center\r
                    rounded-full\r
                    bg-blue-50\r
                    text-blue-600`,title:"Verified doctor",children:l.jsx("svg",{className:"w-2.5 h-2.5",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),l.jsx("p",{className:`mt-1\r
                  text-xs\r
                  font-medium\r
                  text-slate-400`,children:r.speciality}),l.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("span",{className:"text-amber-400 text-sm",children:"★"}),l.jsx("span",{className:"text-xs font-semibold text-slate-700",children:"4.8"}),l.jsx("span",{className:"text-[10px] text-slate-400",children:"(120+)"})]}),l.jsx("span",{className:"text-[10px] text-slate-400",children:"10+ yrs exp."})]}),l.jsx("div",{className:"h-px bg-slate-100 my-3"}),l.jsx("button",{onClick:s=>{s.stopPropagation(),n(r._id)},className:`w-full\r
                  py-2.5\r
                  rounded-xl\r
                  bg-blue-50\r
                  text-blue-600\r
                  text-xs\r
                  font-semibold\r
                  hover:bg-blue-600\r
                  hover:text-white\r
                  transition-all duration-200`,children:"Book Appointment"})]})]},r._id))}),l.jsx("div",{className:"flex justify-center mt-10",children:l.jsxs("button",{onClick:()=>{e("/Doctors"),window.scrollTo({top:0,behavior:"smooth"})},className:`group\r
            flex items-center gap-2\r
            px-7 py-3\r
            rounded-xl\r
            border border-slate-200\r
            bg-white\r
            text-sm font-semibold\r
            text-slate-600\r
            hover:border-blue-200\r
            hover:bg-blue-50\r
            hover:text-blue-600\r
            transition-all duration-200`,children:["Explore all doctors",l.jsx("span",{className:"transition-transform group-hover:translate-x-1",children:"→"})]})})]})})},kx=()=>{const e=Be(),[t,n]=y.useState(""),[r,s]=y.useState(""),i=()=>{e("/Doctors")};return l.jsxs("section",{className:"relative overflow-hidden pt-6 sm:pt-8 lg:pt-10",children:[l.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[l.jsx("div",{className:"absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-blue-100/50 blur-3xl"}),l.jsx("div",{className:"absolute bottom-0 -left-40 w-[350px] h-[350px] rounded-full bg-cyan-50 blur-3xl"})]}),l.jsxs("div",{className:"max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10",children:[l.jsxs("div",{className:`relative min-h-[570px] lg:min-h-[590px]\r
          rounded-[28px] sm:rounded-[36px]\r
          bg-gradient-to-br from-[#eff6ff] via-white to-[#f0fdfa]\r
          border border-blue-100/70\r
          overflow-hidden`,children:[l.jsx("div",{className:`absolute top-[-100px] right-[18%] w-[260px] h-[260px]\r
          rounded-full border-[45px] border-white/60`}),l.jsx("div",{className:`absolute bottom-[-120px] left-[40%] w-[280px] h-[280px]\r
          rounded-full border-[55px] border-blue-100/30`}),l.jsxs("div",{className:"relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] min-h-[570px]",children:[l.jsxs("div",{className:"flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-16 xl:px-20",children:[l.jsxs("div",{className:`inline-flex items-center gap-2 w-fit\r
              px-3 py-1.5 rounded-full\r
              bg-white border border-blue-100\r
              shadow-sm mb-6`,children:[l.jsx("span",{className:"flex w-2 h-2 rounded-full bg-emerald-500"}),l.jsx("span",{className:"text-[11px] sm:text-xs font-semibold text-slate-600",children:"Trusted healthcare, made simple"})]}),l.jsxs("h1",{className:`max-w-[680px]\r
                text-[38px] leading-[1.08]\r
                sm:text-[48px] sm:leading-[1.08]\r
                lg:text-[56px] lg:leading-[1.06]\r
                xl:text-[62px]\r
                font-bold tracking-[-2px]\r
                text-slate-900`,children:["Your health deserves",l.jsx("span",{className:"block text-blue-600",children:"better care."})]}),l.jsx("p",{className:`max-w-[570px]\r
                mt-5\r
                text-sm sm:text-base\r
                leading-7\r
                text-slate-500`,children:"Find trusted doctors, book appointments and connect with healthcare professionals — all from one simple platform."}),l.jsx("div",{className:`mt-8\r
                w-full max-w-[720px]\r
                p-2\r
                bg-white\r
                rounded-2xl\r
                border border-slate-200\r
                shadow-[0_12px_35px_rgba(15,23,42,0.08)]`,children:l.jsxs("div",{className:"grid sm:grid-cols-[1fr_1fr_auto] gap-2",children:[l.jsxs("div",{className:`flex items-center gap-3 px-3 py-3\r
                  rounded-xl hover:bg-slate-50 transition-colors`,children:[l.jsx("div",{className:`w-9 h-9 rounded-lg bg-blue-50\r
                    flex items-center justify-center shrink-0`,children:l.jsxs("svg",{className:"w-[18px] h-[18px] text-blue-600",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M12 21C16.5 16.5 19 13.3 19 9.5C19 5.9 16 3 12 3C8 3 5 5.9 5 9.5C5 13.3 7.5 16.5 12 21Z",stroke:"currentColor",strokeWidth:"1.7"}),l.jsx("circle",{cx:"12",cy:"9",r:"2.5",stroke:"currentColor",strokeWidth:"1.7"})]})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("label",{className:`block text-[10px] uppercase\r
                      tracking-wider font-semibold text-slate-400`,children:"Speciality"}),l.jsxs("select",{value:t,onChange:a=>n(a.target.value),className:`w-full mt-0.5 bg-transparent outline-none\r
                        text-sm font-medium text-slate-700 cursor-pointer`,children:[l.jsx("option",{value:"",children:"What do you need?"}),l.jsx("option",{value:"general",children:"General Physician"}),l.jsx("option",{value:"dermatologist",children:"Dermatologist"}),l.jsx("option",{value:"gynecologist",children:"Gynecologist"}),l.jsx("option",{value:"pediatrician",children:"Pediatrician"}),l.jsx("option",{value:"neurologist",children:"Neurologist"}),l.jsx("option",{value:"cardiologist",children:"Cardiologist"})]})]})]}),l.jsxs("div",{className:`flex items-center gap-3 px-3 py-3\r
                    rounded-xl hover:bg-slate-50 transition-colors\r
                    border-t sm:border-t-0 sm:border-l border-slate-100`,children:[l.jsx("div",{className:`w-9 h-9 rounded-lg bg-emerald-50\r
                    flex items-center justify-center shrink-0`,children:l.jsxs("svg",{className:"w-[18px] h-[18px] text-emerald-600",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("path",{d:"M19 10C19 15 12 21 12 21C12 21 5 15 5 10C5 6.1 8.1 3 12 3C15.9 3 19 6.1 19 10Z",stroke:"currentColor",strokeWidth:"1.7"}),l.jsx("circle",{cx:"12",cy:"10",r:"2.5",stroke:"currentColor",strokeWidth:"1.7"})]})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("label",{className:`block text-[10px] uppercase\r
                      tracking-wider font-semibold text-slate-400`,children:"Location"}),l.jsx("input",{value:r,onChange:a=>s(a.target.value),type:"text",placeholder:"City or area",className:`w-full mt-0.5 bg-transparent outline-none\r
                        text-sm font-medium text-slate-700\r
                        placeholder:text-slate-400`})]})]}),l.jsxs("button",{onClick:i,className:`flex items-center justify-center gap-2\r
                    px-6 py-3\r
                    rounded-xl\r
                    bg-blue-600 hover:bg-blue-700\r
                    text-white\r
                    text-sm font-semibold\r
                    shadow-sm hover:shadow-md\r
                    transition-all duration-200`,children:[l.jsxs("svg",{className:"w-[17px] h-[17px]",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("circle",{cx:"11",cy:"11",r:"6.5",stroke:"currentColor",strokeWidth:"1.8"}),l.jsx("path",{d:"M16 16L21 21",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"})]}),"Search"]})]})}),l.jsxs("div",{className:"mt-5 flex flex-wrap items-center gap-2",children:[l.jsx("span",{className:"text-xs font-medium text-slate-400 mr-1",children:"Popular:"}),["General Physician","Dermatologist","Dentist","Pediatrician"].map(a=>l.jsx("button",{onClick:()=>{n(a),e("/Doctors")},className:`px-3 py-1.5 rounded-full\r
                    bg-white/80 border border-slate-200\r
                    text-[11px] sm:text-xs font-medium text-slate-600\r
                    hover:border-blue-200 hover:text-blue-600\r
                    hover:bg-blue-50\r
                    transition-all`,children:a},a))]}),l.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-x-8 gap-y-4",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-xl font-bold text-slate-900",children:"100+"}),l.jsx("p",{className:"text-[11px] text-slate-400",children:"Verified Doctors"})]}),l.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xl font-bold text-slate-900",children:"10K+"}),l.jsx("p",{className:"text-[11px] text-slate-400",children:"Happy Patients"})]}),l.jsx("div",{className:"h-8 w-px bg-slate-200 hidden sm:block"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xl font-bold text-slate-900",children:"4.8/5"}),l.jsx("p",{className:"text-[11px] text-slate-400",children:"Patient Rating"})]})]})]}),l.jsxs("div",{className:"relative hidden lg:flex items-end justify-center",children:[l.jsx("div",{className:`absolute bottom-0 right-0\r
                w-[520px] h-[520px]\r
                rounded-full\r
                bg-blue-100/60`}),l.jsx("div",{className:`absolute bottom-10 right-10\r
                w-[420px] h-[420px]\r
                rounded-full\r
                bg-white/60`}),l.jsx("img",{src:Ve.header_img,alt:"Healthcare professional",className:`relative z-10\r
                h-[510px] xl:h-[545px]\r
                w-auto object-contain object-bottom\r
                drop-shadow-[0_25px_35px_rgba(15,23,42,0.12)]`}),l.jsxs("div",{className:`absolute z-20\r
                top-[120px] right-[50px] xl:right-[75px]\r
                flex items-center gap-3\r
                bg-white\r
                rounded-2xl\r
                px-4 py-3\r
                shadow-[0_15px_40px_rgba(15,23,42,0.12)]\r
                border border-slate-100`,children:[l.jsx("div",{className:`w-10 h-10 rounded-xl bg-emerald-50\r
                flex items-center justify-center`,children:l.jsx("svg",{className:"w-5 h-5 text-emerald-600",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-semibold text-slate-800",children:"Verified Doctors"}),l.jsx("p",{className:"text-[10px] text-slate-400",children:"Quality healthcare"})]})]}),l.jsx("div",{className:`absolute z-20\r
                bottom-[75px] left-[15px] xl:left-[45px]\r
                bg-white\r
                rounded-2xl\r
                px-4 py-3\r
                shadow-[0_15px_40px_rgba(15,23,42,0.12)]\r
                border border-slate-100`,children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("div",{className:"flex -space-x-2",children:[l.jsx("div",{className:`w-8 h-8 rounded-full bg-blue-100\r
                    border-2 border-white flex items-center justify-center text-xs`,children:"👨‍⚕️"}),l.jsx("div",{className:`w-8 h-8 rounded-full bg-emerald-100\r
                    border-2 border-white flex items-center justify-center text-xs`,children:"👩‍⚕️"}),l.jsx("div",{className:`w-8 h-8 rounded-full bg-purple-100\r
                    border-2 border-white flex items-center justify-center text-xs`,children:"👨‍⚕️"})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-semibold text-slate-800",children:"24/7 Care"}),l.jsx("p",{className:"text-[10px] text-slate-400",children:"Doctors are here for you"})]})]})})]})]})]}),l.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-5",children:[{title:"Find a Doctor",text:"Search specialists",icon:"👨‍⚕️",path:"/Doctors"},{title:"Book Appointment",text:"Choose your slot",icon:"📅",path:"/Doctors"},{title:"Online Consultation",text:"Connect from home",icon:"💻",path:"/Doctors"},{title:"Health Tips",text:"Learn & stay healthy",icon:"❤️",path:"/BasicRemedies"}].map(a=>l.jsx("button",{onClick:()=>e(a.path),className:`group text-left p-4 sm:p-5\r
              rounded-2xl\r
              bg-white\r
              border border-slate-100\r
              hover:border-blue-100\r
              hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]\r
              transition-all duration-200`,children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-10 h-10 sm:w-11 sm:h-11\r
                rounded-xl bg-slate-50\r
                flex items-center justify-center\r
                text-lg\r
                group-hover:bg-blue-50\r
                transition-colors`,children:a.icon}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"text-xs sm:text-sm font-semibold text-slate-800",children:a.title}),l.jsx("p",{className:"text-[10px] sm:text-xs text-slate-400 mt-0.5",children:a.text})]})]})},a.title))})]})]})},Cx=()=>l.jsxs("main",{className:"bg-slate-50 overflow-hidden",children:[l.jsx("section",{children:l.jsx(wx,{})}),l.jsx("section",{className:"bg-white",children:l.jsx(jx,{})}),l.jsx("section",{className:"bg-slate-50",children:l.jsx(Nx,{})}),l.jsx("section",{className:"bg-white",children:l.jsx(kx,{})})]}),Rr=()=>{const{speciality:e}=oa(),t=Be(),{doctors:n}=y.useContext(yn),[r,s]=y.useState(!1),[i,a]=y.useState(""),[o,c]=y.useState("all"),u=["General physician","Gynecologist","Dermatologist","Pediatricians","Neurologist","Gastroenterologist"],h=y.useMemo(()=>{let g=n||[];if(e&&(g=g.filter(w=>w.speciality===e)),i.trim()){const w=i.toLowerCase().trim();g=g.filter(S=>{var f,v;const m=((f=S.name)==null?void 0:f.toLowerCase())||"",d=((v=S.speciality)==null?void 0:v.toLowerCase())||"";return m.includes(w)||d.includes(w)})}return o==="available"&&(g=g),g},[n,e,i,o]);y.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const p=()=>{a(""),c("all"),t("/Doctors")},x=g=>{t(e===g?"/Doctors":`/Doctors/${g}`),s(!1)},j=g=>{t(`/appointment/${g}`),window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("section",{className:"min-h-screen py-8 sm:py-10 lg:py-12",children:l.jsxs("div",{className:"max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10",children:[l.jsxs("div",{className:`relative overflow-hidden rounded-[28px]\r
        bg-gradient-to-br from-[#eff6ff] via-white to-[#f0fdfa]\r
        border border-blue-100/70\r
        px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12`,children:[l.jsx("div",{className:`absolute -right-20 -top-24\r
            w-72 h-72 rounded-full\r
            border-[55px] border-blue-100/40`}),l.jsx("div",{className:`absolute right-[18%] -bottom-28\r
            w-52 h-52 rounded-full\r
            bg-emerald-100/30`}),l.jsxs("div",{className:"relative z-10 max-w-[800px]",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[10px] sm:text-[11px]\r
                uppercase tracking-[0.18em]\r
                font-bold text-blue-600`,children:"Find your care"})]}),l.jsxs("h1",{className:`text-3xl sm:text-4xl lg:text-[46px]\r
              font-bold tracking-[-1.5px]\r
              text-slate-900`,children:["Find the right doctor",l.jsx("span",{className:"text-blue-600",children:" for you."})]}),l.jsx("p",{className:`mt-3 max-w-[620px]\r
              text-sm sm:text-[15px]\r
              leading-6 text-slate-500`,children:"Browse healthcare specialists, compare your options and book an appointment with a doctor that fits your needs."})]}),l.jsxs("div",{className:`relative z-10\r
            mt-7\r
            max-w-[820px]\r
            flex flex-col sm:flex-row\r
            gap-2\r
            p-2\r
            bg-white\r
            border border-slate-200\r
            rounded-2xl\r
            shadow-[0_12px_35px_rgba(15,23,42,0.07)]`,children:[l.jsxs("div",{className:`flex items-center gap-3\r
              flex-1\r
              px-3 py-2.5\r
              rounded-xl\r
              bg-slate-50\r
              border border-transparent\r
              focus-within:bg-white\r
              focus-within:border-blue-200\r
              transition-all`,children:[l.jsxs("svg",{className:"w-5 h-5 text-slate-400 shrink-0",viewBox:"0 0 24 24",fill:"none",children:[l.jsx("circle",{cx:"11",cy:"11",r:"6.5",stroke:"currentColor",strokeWidth:"1.7"}),l.jsx("path",{d:"M16 16L21 21",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})]}),l.jsx("input",{type:"text",value:i,onChange:g=>a(g.target.value),placeholder:"Search doctor or speciality...",className:`w-full bg-transparent outline-none\r
                text-sm text-slate-700\r
                placeholder:text-slate-400`}),i&&l.jsx("button",{onClick:()=>a(""),className:"text-slate-400 hover:text-slate-700",children:"×"})]}),l.jsx("button",{onClick:()=>s(g=>!g),className:`sm:hidden\r
              px-5 py-3\r
              rounded-xl\r
              bg-slate-100\r
              text-sm font-semibold text-slate-700`,children:"Filters"})]})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row gap-7 mt-8",children:[l.jsx("aside",{className:`
              lg:w-[230px] shrink-0
              ${r?"block":"hidden lg:block"}
            `,children:l.jsxs("div",{className:`sticky top-5\r
              bg-white\r
              border border-slate-100\r
              rounded-2xl\r
              p-4\r
              shadow-[0_8px_25px_rgba(15,23,42,0.04)]`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-bold text-slate-800",children:"Speciality"}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-0.5",children:"Browse by medical field"})]}),e&&l.jsx("button",{onClick:p,className:`text-[10px] font-semibold\r
                    text-blue-600 hover:text-blue-700`,children:"Clear"})]}),l.jsxs("div",{className:"flex flex-col gap-1.5",children:[l.jsx("button",{onClick:()=>{t("/Doctors"),s(!1)},className:`
                    w-full text-left
                    px-3 py-2.5
                    rounded-xl
                    text-xs font-medium
                    transition-all
                    ${e?"text-slate-600 hover:bg-slate-50":"bg-blue-600 text-white shadow-sm"}
                  `,children:l.jsxs("span",{className:"flex items-center justify-between",children:["All Doctors",!e&&l.jsx("span",{children:"✓"})]})}),u.map(g=>l.jsx("button",{onClick:()=>x(g),className:`
                      w-full text-left
                      px-3 py-2.5
                      rounded-xl
                      text-xs font-medium
                      transition-all
                      ${e===g?"bg-blue-50 text-blue-600":"text-slate-600 hover:bg-slate-50"}
                    `,children:l.jsxs("span",{className:"flex items-center justify-between",children:[g,e===g&&l.jsx("span",{className:"text-blue-600",children:"✓"})]})},g))]}),l.jsxs("div",{className:"border-t border-slate-100 mt-5 pt-5",children:[l.jsx("p",{className:"text-sm font-bold text-slate-800",children:"Availability"}),l.jsxs("div",{className:"mt-3 flex flex-col gap-2",children:[l.jsxs("button",{onClick:()=>c("all"),className:"flex items-center gap-2 text-xs text-slate-600",children:[l.jsx("span",{className:`w-4 h-4 rounded-full border
                      flex items-center justify-center
                      ${o==="all"?"border-blue-600":"border-slate-300"}`,children:o==="all"&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-blue-600"})}),"All doctors"]}),l.jsxs("button",{onClick:()=>c("available"),className:"flex items-center gap-2 text-xs text-slate-600",children:[l.jsx("span",{className:`w-4 h-4 rounded-full border
                      flex items-center justify-center
                      ${o==="available"?"border-emerald-500":"border-slate-300"}`,children:o==="available"&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"})}),"Available now"]})]})]})]})}),l.jsxs("main",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:`flex flex-col sm:flex-row\r
              sm:items-center sm:justify-between\r
              gap-3 mb-5`,children:[l.jsxs("div",{children:[l.jsx("h2",{className:`text-xl sm:text-2xl\r
                font-bold text-slate-900 tracking-tight`,children:e||"All Doctors"}),l.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:[h.length," doctors available"]})]}),l.jsxs("div",{className:`flex items-center gap-2\r
                text-xs text-slate-400`,children:[l.jsx("span",{children:"Sort by"}),l.jsxs("select",{className:`bg-white\r
                  border border-slate-200\r
                  rounded-lg\r
                  px-3 py-2\r
                  text-xs font-medium text-slate-600\r
                  outline-none`,children:[l.jsx("option",{children:"Recommended"}),l.jsx("option",{children:"Availability"}),l.jsx("option",{children:"Name"})]})]})]}),h.length>0?l.jsx("div",{className:`grid\r
                grid-cols-1\r
                sm:grid-cols-2\r
                xl:grid-cols-3\r
                gap-4`,children:h.map(g=>l.jsxs("article",{onClick:()=>j(g._id),className:`group\r
                    bg-white\r
                    border border-slate-100\r
                    rounded-2xl\r
                    overflow-hidden\r
                    cursor-pointer\r
                    hover:border-blue-100\r
                    hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]\r
                    hover:-translate-y-1\r
                    transition-all duration-300`,children:[l.jsxs("div",{className:"relative bg-slate-50 overflow-hidden",children:[l.jsx("img",{src:g.image,alt:g.name,className:`w-full\r
                        aspect-[4/3]\r
                        object-cover\r
                        group-hover:scale-[1.035]\r
                        transition-transform duration-500`}),l.jsxs("div",{className:`absolute top-3 left-3\r
                        flex items-center gap-1.5\r
                        px-2.5 py-1.5\r
                        rounded-full\r
                        bg-white/95\r
                        backdrop-blur-sm\r
                        shadow-sm`,children:[l.jsx("span",{className:`w-1.5 h-1.5\r
                          rounded-full bg-emerald-500`}),l.jsx("span",{className:`text-[10px]\r
                          font-semibold text-slate-600`,children:"Available"})]}),l.jsx("button",{onClick:w=>w.stopPropagation(),className:`absolute top-3 right-3\r
                        w-8 h-8\r
                        rounded-full\r
                        bg-white/95\r
                        backdrop-blur-sm\r
                        flex items-center justify-center\r
                        text-slate-400\r
                        hover:text-red-500\r
                        shadow-sm\r
                        transition-colors`,"aria-label":"Favourite doctor",children:l.jsx("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M20.8 8.7C20.8 13.5 12 20 12 20S3.2 13.5 3.2 8.7C3.2 5.9 5.3 4 8 4C9.8 4 11.3 5 12 6.4C12.7 5 14.2 4 16 4C18.7 4 20.8 5.9 20.8 8.7Z",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),l.jsxs("div",{className:"p-4",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("h3",{className:`font-bold\r
                          text-[16px]\r
                          text-slate-800\r
                          truncate\r
                          group-hover:text-blue-600\r
                          transition-colors`,children:g.name}),l.jsx("span",{className:`w-4 h-4 shrink-0\r
                          rounded-full\r
                          bg-blue-50\r
                          text-blue-600\r
                          flex items-center justify-center`,children:l.jsx("svg",{className:"w-2.5 h-2.5",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),l.jsx("p",{className:`text-xs\r
                        font-medium\r
                        text-slate-400\r
                        mt-1`,children:g.speciality}),l.jsxs("div",{className:`flex items-center\r
                      justify-between mt-4`,children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("span",{className:"text-amber-400 text-sm",children:"★"}),l.jsx("span",{className:`text-xs\r
                            font-semibold\r
                            text-slate-700`,children:"4.8"})]}),l.jsx("span",{className:`text-[10px]\r
                          text-slate-400`,children:"Consultation available"})]}),l.jsx("div",{className:"h-px bg-slate-100 my-3"}),l.jsx("button",{onClick:w=>{w.stopPropagation(),j(g._id)},className:`w-full\r
                        py-2.5\r
                        rounded-xl\r
                        bg-blue-50\r
                        text-blue-600\r
                        text-xs\r
                        font-semibold\r
                        hover:bg-blue-600\r
                        hover:text-white\r
                        transition-all duration-200`,children:"View & Book Appointment"})]})]},g._id))}):l.jsxs("div",{className:`min-h-[380px]\r
                rounded-2xl\r
                border border-dashed border-slate-200\r
                bg-slate-50/50\r
                flex flex-col\r
                items-center\r
                justify-center\r
                text-center px-6`,children:[l.jsx("div",{className:`w-16 h-16\r
                  rounded-2xl\r
                  bg-white\r
                  border border-slate-100\r
                  flex items-center justify-center\r
                  text-2xl\r
                  shadow-sm`,children:"🔍"}),l.jsx("h3",{className:`mt-5\r
                  text-lg font-bold\r
                  text-slate-800`,children:"No doctors found"}),l.jsx("p",{className:`mt-2\r
                  max-w-[380px]\r
                  text-sm\r
                  leading-6\r
                  text-slate-400`,children:"Try another doctor name, speciality or clear your current filters."}),l.jsx("button",{onClick:p,className:`mt-5\r
                  px-5 py-2.5\r
                  rounded-xl\r
                  bg-blue-600\r
                  text-white\r
                  text-xs\r
                  font-semibold\r
                  hover:bg-blue-700\r
                  transition-colors`,children:"Clear filters"})]})]})]})]})})},Sx=({speciality:e,docId:t})=>{const{doctors:n}=y.useContext(yn),r=Be(),[s,i]=y.useState([]);y.useEffect(()=>{if((n==null?void 0:n.length)>0&&e){const c=n.filter(u=>u.speciality===e&&u._id!==t);i(c)}else i([])},[n,e,t]);const a=c=>{c&&(r(`/appointment/${c}`),window.scrollTo({top:0,behavior:"smooth"}))},o=()=>{r("/Doctors"),window.scrollTo({top:0,behavior:"smooth"})};return l.jsx("section",{className:"mt-20 sm:mt-24",children:l.jsxs("div",{className:"max-w-[1280px] mx-auto",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                uppercase\r
                tracking-[0.18em]\r
                font-bold\r
                text-blue-600`,children:"Similar specialists"})]}),l.jsx("h2",{className:`text-2xl\r
              sm:text-3xl\r
              font-bold\r
              text-slate-900\r
              tracking-tight`,children:"More doctors you can consult"}),l.jsx("p",{className:`text-sm\r
              text-slate-500\r
              mt-2\r
              max-w-xl\r
              leading-6`,children:"Explore other doctors from the same speciality and choose a professional that fits your healthcare needs."})]}),l.jsx("button",{onClick:o,className:`self-start sm:self-auto\r
            text-sm\r
            font-semibold\r
            text-blue-600\r
            hover:text-blue-700\r
            transition-colors\r
            whitespace-nowrap`,children:"View all doctors →"})]}),s.length>0?l.jsx("div",{className:`grid\r
            grid-cols-1\r
            sm:grid-cols-2\r
            lg:grid-cols-3\r
            xl:grid-cols-5\r
            gap-5`,children:s.slice(0,5).map(c=>l.jsxs("article",{onClick:()=>a(c._id),className:`group\r
                bg-white\r
                rounded-3xl\r
                overflow-hidden\r
                border\r
                border-slate-100\r
                cursor-pointer\r
                hover:border-blue-100\r
                hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]\r
                hover:-translate-y-1\r
                transition-all\r
                duration-300`,children:[l.jsxs("div",{className:`relative\r
                  bg-blue-50\r
                  overflow-hidden`,children:[l.jsx("img",{src:c.image,alt:`${c.name} profile`,className:`w-full\r
                    aspect-[4/4.8]\r
                    object-cover\r
                    group-hover:scale-105\r
                    transition-transform\r
                    duration-500`}),l.jsxs("div",{className:`absolute\r
                    top-3\r
                    left-3\r
                    flex\r
                    items-center\r
                    gap-1.5\r
                    bg-white/95\r
                    backdrop-blur-sm\r
                    rounded-full\r
                    px-3\r
                    py-1.5\r
                    shadow-sm`,children:[l.jsx("span",{className:`w-2\r
                      h-2\r
                      rounded-full\r
                      bg-emerald-500`}),l.jsx("span",{className:`text-[10px]\r
                      font-semibold\r
                      text-slate-600`,children:"Available"})]}),l.jsx("button",{onClick:u=>u.stopPropagation(),"aria-label":"Add doctor to favourites",className:`absolute\r
                    top-3\r
                    right-3\r
                    w-8\r
                    h-8\r
                    rounded-full\r
                    bg-white/95\r
                    backdrop-blur-sm\r
                    flex\r
                    items-center\r
                    justify-center\r
                    text-lg\r
                    text-slate-400\r
                    hover:text-red-500\r
                    hover:scale-105\r
                    transition-all\r
                    shadow-sm`,children:"♡"})]}),l.jsxs("div",{className:"p-4",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("h3",{className:`text-base\r
                      font-bold\r
                      text-slate-900\r
                      truncate`,children:c.name}),l.jsx("span",{className:`flex-shrink-0\r
                      w-4\r
                      h-4\r
                      rounded-full\r
                      bg-blue-50\r
                      text-blue-600\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-[9px]\r
                      font-bold`,children:"✓"})]}),l.jsx("p",{className:`text-xs\r
                    text-slate-500\r
                    mt-1\r
                    truncate`,children:c.speciality}),l.jsxs("div",{className:`flex\r
                    items-center\r
                    justify-between\r
                    mt-4\r
                    pt-3\r
                    border-t\r
                    border-slate-100`,children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("span",{className:"text-amber-400 text-sm",children:"★"}),l.jsx("span",{className:`text-xs\r
                        font-semibold\r
                        text-slate-700`,children:"4.8"})]}),l.jsx("span",{className:`text-[10px]\r
                      text-slate-400`,children:"View profile"})]})]})]},c._id))}):l.jsxs("div",{className:`rounded-3xl\r
            border\r
            border-slate-100\r
            bg-slate-50\r
            py-12\r
            px-5\r
            text-center`,children:[l.jsx("div",{className:`w-12\r
              h-12\r
              mx-auto\r
              rounded-2xl\r
              bg-white\r
              border\r
              border-slate-100\r
              flex\r
              items-center\r
              justify-center\r
              text-xl`,children:"🩺"}),l.jsx("h3",{className:`mt-4\r
              text-base\r
              font-semibold\r
              text-slate-800`,children:"No related doctors found"}),l.jsx("p",{className:`mt-1\r
              text-sm\r
              text-slate-500`,children:"Explore our complete list of doctors instead."}),l.jsx("button",{onClick:o,className:`mt-5\r
              px-5\r
              py-2.5\r
              rounded-xl\r
              bg-blue-600\r
              text-white\r
              text-xs\r
              font-semibold\r
              hover:bg-blue-700\r
              transition-colors`,children:"Browse all doctors"})]}),s.length>5&&l.jsx("div",{className:"flex justify-center mt-8",children:l.jsx("button",{onClick:o,className:`px-7\r
              py-3\r
              rounded-full\r
              bg-slate-100\r
              text-slate-700\r
              text-sm\r
              font-semibold\r
              hover:bg-blue-50\r
              hover:text-blue-600\r
              transition-all`,children:"Explore more doctors →"})})]})})},Ex=()=>{var f,v,C;const{docId:e}=oa(),{doctors:t,currencySymbol:n}=y.useContext(yn),r=["SUN","MON","TUE","WED","THU","FRI","SAT"],[s,i]=y.useState(null),[a,o]=y.useState([]),[c,u]=y.useState(0),[h,p]=y.useState(""),[x,j]=y.useState("clinic"),[g,w]=y.useState(""),S=()=>{const N=t==null?void 0:t.find(E=>E._id===e);i(N)},m=()=>{o([]);const N=new Date;for(let E=0;E<7;E++){const k=new Date(N);k.setDate(N.getDate()+E);const M=new Date(k);if(M.setHours(21,0,0,0),N.getDate()===k.getDate()){if(N.getHours()>=21)continue;k.setHours(N.getHours()>10?N.getHours():10),k.setMinutes(N.getMinutes()>30?30:0)}else k.setHours(10),k.setMinutes(0);const P=[];for(;k<M;){const te=k.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});P.push({datetime:new Date(k),time:te}),k.setMinutes(k.getMinutes()+30)}P.length>0&&o(te=>[...te,P])}};y.useEffect(()=>{S()},[t,e]),y.useEffect(()=>{s&&(u(0),p(""),m())},[s]);const d=()=>{if(!h){w("Please select an available time slot.");return}w(`Selected ${h} appointment. Booking integration will be connected next.`)};return s?l.jsx("section",{className:"py-8 sm:py-10 lg:py-12",children:l.jsxs("div",{className:"max-w-[1280px] mx-auto px-5 sm:px-8",children:[l.jsxs("div",{className:`flex items-center gap-2\r
        text-xs text-slate-400 mb-6`,children:[l.jsx("span",{children:"Home"}),l.jsx("span",{children:"›"}),l.jsx("span",{children:"Doctors"}),l.jsx("span",{children:"›"}),l.jsx("span",{className:"text-slate-600 font-medium",children:"Appointment"})]}),l.jsxs("div",{className:`grid lg:grid-cols-[380px_1fr]\r
          bg-white\r
          border border-slate-100\r
          rounded-[28px]\r
          overflow-hidden\r
          shadow-[0_12px_40px_rgba(15,23,42,0.05)]`,children:[l.jsxs("div",{className:"relative bg-blue-50 min-h-[330px] lg:min-h-[420px]",children:[l.jsx("img",{src:s.image,alt:s.name,className:`absolute inset-0\r
              w-full h-full\r
              object-cover`}),l.jsxs("div",{className:`absolute top-5 left-5\r
              flex items-center gap-2\r
              px-3 py-2\r
              bg-white/95\r
              backdrop-blur-sm\r
              rounded-full\r
              shadow-sm`,children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),l.jsx("span",{className:"text-xs font-semibold text-slate-700",children:"Available for appointments"})]})]}),l.jsxs("div",{className:"p-6 sm:p-8 lg:p-10",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h1",{className:`text-2xl sm:text-3xl\r
                font-bold tracking-tight\r
                text-slate-900`,children:s.name}),l.jsx("img",{src:Ve.verified_icon,className:"w-5 h-5",alt:"Verified"})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2 mt-2",children:[l.jsx("span",{className:`text-sm\r
                font-medium\r
                text-blue-600`,children:s.speciality}),l.jsx("span",{className:"w-1 h-1 rounded-full bg-slate-300"}),l.jsx("span",{className:"text-sm text-slate-500",children:s.degree}),l.jsx("span",{className:`px-2.5 py-1\r
              rounded-full\r
              bg-slate-100\r
              text-[10px]\r
              font-semibold\r
              text-slate-600`,children:s.experience})]}),l.jsxs("div",{className:"flex items-center gap-3 mt-5",children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("span",{className:"text-amber-400",children:"★"}),l.jsx("span",{className:"text-sm font-bold text-slate-800",children:"4.8"})]}),l.jsx("span",{className:"text-xs text-slate-400",children:"Trusted healthcare professional"})]}),l.jsxs("div",{className:"mt-7",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h2",{className:"text-sm font-bold text-slate-800",children:"About doctor"}),l.jsx("img",{src:Ve.info_icon,className:"w-4 h-4",alt:""})]}),l.jsx("p",{className:`mt-2\r
                max-w-[720px]\r
                text-sm\r
                leading-6\r
                text-slate-500`,children:s.about})]}),l.jsxs("div",{className:`mt-7\r
              flex items-center justify-between\r
              p-4\r
              rounded-2xl\r
              bg-slate-50\r
              border border-slate-100`,children:[l.jsxs("div",{children:[l.jsx("p",{className:`text-[10px] uppercase\r
                tracking-wider font-semibold\r
                text-slate-400`,children:"Consultation fee"}),l.jsxs("p",{className:"mt-1 text-xl font-bold text-slate-900",children:[n,s.fees]})]}),l.jsxs("div",{className:`flex items-center gap-2\r
              text-xs text-emerald-600 font-medium`,children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),"Accepting patients"]})]})]})]}),l.jsxs("div",{className:"grid lg:grid-cols-[1fr_330px] gap-6 mt-7",children:[l.jsxs("div",{className:`bg-white\r
            border border-slate-100\r
            rounded-[24px]\r
            p-5 sm:p-7\r
            shadow-[0_8px_30px_rgba(15,23,42,0.04)]`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:`text-[10px]\r
                  uppercase tracking-[0.16em]\r
                  font-bold text-blue-600`,children:"Book your visit"}),l.jsx("h2",{className:`mt-1\r
                  text-xl sm:text-2xl\r
                  font-bold text-slate-900`,children:"Choose a date & time"})]}),l.jsxs("div",{className:`hidden sm:flex\r
                items-center gap-2\r
                text-xs text-slate-400`,children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),"Available slots"]})]}),l.jsxs("div",{className:"mt-7",children:[l.jsx("p",{className:"text-xs font-semibold text-slate-600 mb-3",children:"Select date"}),l.jsx("div",{className:`flex gap-2 overflow-x-auto pb-2\r
              scrollbar-thin`,children:a.map((N,E)=>{var P;const k=(P=N==null?void 0:N[0])==null?void 0:P.datetime;if(!k)return null;const M=c===E;return l.jsxs("button",{onClick:()=>{u(E),p(""),w("")},className:`
                        min-w-[76px]
                        h-[88px]
                        rounded-2xl
                        flex flex-col
                        items-center
                        justify-center
                        gap-1
                        border
                        transition-all
                        ${M?"bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100":"bg-white border-slate-200 text-slate-500 hover:border-blue-200 hover:bg-blue-50"}
                      `,children:[l.jsx("span",{className:`text-[10px] font-bold tracking-wider
                        ${M?"text-blue-100":"text-slate-400"}`,children:r[k.getDay()]}),l.jsx("span",{className:"text-2xl font-bold",children:k.getDate()}),l.jsx("span",{className:`text-[10px]
                        ${M?"text-blue-100":"text-slate-400"}`,children:k.toLocaleDateString([],{month:"short"})})]},E)})})]}),l.jsxs("div",{className:"mt-7",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("p",{className:"text-xs font-semibold text-slate-600",children:"Available times"}),l.jsx("span",{className:"text-[10px] text-slate-400",children:"30 min consultation"})]}),l.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2",children:(f=a[c])==null?void 0:f.map((N,E)=>{const k=N.time===h;return l.jsx("button",{onClick:()=>{p(N.time),w("")},className:`
                        py-2.5
                        px-2
                        rounded-xl
                        text-xs
                        font-medium
                        border
                        transition-all
                        ${k?"bg-blue-600 border-blue-600 text-white":"border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50"}
                      `,children:N.time},E)})})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("p",{className:"text-xs font-semibold text-slate-600 mb-3",children:"Consultation type"}),l.jsxs("div",{className:"grid sm:grid-cols-2 gap-3",children:[l.jsx("button",{onClick:()=>j("clinic"),className:`
                    text-left
                    p-4
                    rounded-2xl
                    border
                    transition-all
                    ${x==="clinic"?"border-blue-200 bg-blue-50":"border-slate-200 bg-white hover:bg-slate-50"}
                  `,children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-10 h-10 rounded-xl
                      flex items-center justify-center
                      ${x==="clinic"?"bg-blue-100 text-blue-600":"bg-slate-100 text-slate-500"}`,children:"🏥"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-semibold text-slate-800",children:"In-clinic visit"}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:"Visit the doctor's clinic"})]})]})}),l.jsx("button",{onClick:()=>j("online"),className:`
                    text-left
                    p-4
                    rounded-2xl
                    border
                    transition-all
                    ${x==="online"?"border-blue-200 bg-blue-50":"border-slate-200 bg-white hover:bg-slate-50"}
                  `,children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-10 h-10 rounded-xl
                      flex items-center justify-center
                      ${x==="online"?"bg-blue-100 text-blue-600":"bg-slate-100 text-slate-500"}`,children:"💻"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-semibold text-slate-800",children:"Video consultation"}),l.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:"Consult from anywhere"})]})]})})]})]})]}),l.jsx("aside",{children:l.jsxs("div",{className:`lg:sticky lg:top-24\r
              bg-slate-950\r
              rounded-[24px]\r
              p-6\r
              text-white\r
              overflow-hidden\r
              relative`,children:[l.jsx("div",{className:`absolute -right-16 -top-16\r
                w-40 h-40\r
                rounded-full\r
                bg-blue-500/10`}),l.jsx("div",{className:`absolute -left-20 -bottom-20\r
                w-48 h-48\r
                rounded-full\r
                bg-cyan-500/5`}),l.jsxs("div",{className:"relative",children:[l.jsx("p",{className:`text-[10px]\r
                  uppercase\r
                  tracking-[0.16em]\r
                  font-bold\r
                  text-slate-400`,children:"Appointment summary"}),l.jsx("h3",{className:`mt-2\r
                  text-xl\r
                  font-bold`,children:"Your booking"}),l.jsxs("div",{className:`mt-6\r
                  flex items-center gap-3\r
                  pb-5\r
                  border-b border-white/10`,children:[l.jsx("img",{src:s.image,alt:s.name,className:"w-12 h-12 rounded-xl object-cover"}),l.jsxs("div",{className:"min-w-0",children:[l.jsx("p",{className:"text-sm font-semibold truncate",children:s.name}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:s.speciality})]})]}),l.jsxs("div",{className:"py-5 space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-xs text-slate-400",children:"Date"}),l.jsx("span",{className:"text-xs font-medium",children:(C=(v=a[c])==null?void 0:v[0])!=null&&C.datetime?a[c][0].datetime.toLocaleDateString([],{weekday:"short",month:"short",day:"numeric"}):"Select date"})]}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-xs text-slate-400",children:"Time"}),l.jsx("span",{className:`text-xs font-medium
                      ${h?"text-white":"text-slate-500"}`,children:h||"Select time"})]}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-xs text-slate-400",children:"Consultation"}),l.jsx("span",{className:"text-xs font-medium",children:x==="online"?"Video":"In-clinic"})]})]}),l.jsxs("div",{className:`pt-5\r
                  border-t border-white/10\r
                  flex items-center justify-between`,children:[l.jsx("span",{className:"text-xs text-slate-400",children:"Consultation fee"}),l.jsxs("span",{className:"text-lg font-bold",children:[n,s.fees]})]}),l.jsx("button",{onClick:d,className:`w-full\r
                  mt-6\r
                  py-3.5\r
                  rounded-xl\r
                  bg-blue-600\r
                  hover:bg-blue-500\r
                  text-white\r
                  text-sm\r
                  font-semibold\r
                  transition-colors`,children:"Confirm Appointment →"}),g&&l.jsx("p",{className:`mt-3\r
                    text-[10px]\r
                    leading-4\r
                    text-center\r
                    text-slate-400`,children:g}),l.jsx("p",{className:`mt-4\r
                  text-[10px]\r
                  leading-4\r
                  text-center\r
                  text-slate-500`,children:"You can review your appointment details before confirming."})]})]})})]}),l.jsx("div",{className:"mt-16",children:l.jsx(Sx,{docId:e,speciality:s.speciality})})]})}):l.jsx("div",{className:"min-h-[70vh] flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:`w-12 h-12 rounded-full border-4\r
          border-slate-200 border-t-blue-600\r
          animate-spin mx-auto`}),l.jsx("p",{className:"mt-4 text-sm text-slate-500",children:"Loading doctor information..."})]})})},_x=()=>{const[e,t]=y.useState("Sign Up"),[n,r]=y.useState(""),[s,i]=y.useState(""),[a,o]=y.useState(""),[c,u]=y.useState(!1),h=async x=>{x.preventDefault(),console.log({mode:e,name:a,email:n,password:s})},p=()=>{t(x=>x==="Sign Up"?"Login":"Sign Up"),i("")};return l.jsx("main",{className:"min-h-[calc(100vh-80px)] bg-slate-50 flex items-center",children:l.jsx("div",{className:"w-full max-w-[1180px] mx-auto px-5 sm:px-8 py-10 lg:py-16",children:l.jsxs("div",{className:`grid\r
          lg:grid-cols-2\r
          bg-white\r
          rounded-[28px]\r
          overflow-hidden\r
          border\r
          border-slate-100\r
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]`,children:[l.jsxs("div",{className:`hidden\r
            lg:flex\r
            relative\r
            overflow-hidden\r
            bg-slate-950\r
            p-10\r
            xl:p-14\r
            flex-col\r
            justify-between\r
            min-h-[650px]`,children:[l.jsx("div",{className:`absolute\r
              -right-28\r
              -top-28\r
              w-80\r
              h-80\r
              rounded-full\r
              bg-blue-500/10`}),l.jsx("div",{className:`absolute\r
              -left-32\r
              -bottom-32\r
              w-96\r
              h-96\r
              rounded-full\r
              bg-cyan-500/5`}),l.jsxs("div",{className:"relative",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-11\r
                  h-11\r
                  rounded-2xl\r
                  bg-blue-600\r
                  flex\r
                  items-center\r
                  justify-center\r
                  text-white\r
                  font-bold\r
                  text-lg`,children:"M"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-white font-bold text-lg",children:"Medi-call"}),l.jsx("p",{className:"text-[10px] text-slate-500",children:"Healthcare made simpler"})]})]}),l.jsxs("div",{className:"mt-24",children:[l.jsxs("div",{className:`inline-flex\r
                  items-center\r
                  gap-2\r
                  px-3\r
                  py-1.5\r
                  rounded-full\r
                  bg-white/5\r
                  border\r
                  border-white/10`,children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),l.jsx("span",{className:"text-[10px] font-medium text-slate-300",children:"Your health, your way"})]}),l.jsxs("h1",{className:`mt-6\r
                  text-4xl\r
                  xl:text-5xl\r
                  font-bold\r
                  leading-[1.1]\r
                  tracking-tight\r
                  text-white`,children:["Better access to",l.jsx("span",{className:"block text-blue-400",children:"better healthcare."})]}),l.jsx("p",{className:`mt-6\r
                  max-w-md\r
                  text-sm\r
                  leading-6\r
                  text-slate-400`,children:"Find trusted doctors, compare specialities and schedule consultations from one simple healthcare platform."})]})]}),l.jsxs("div",{className:"relative grid grid-cols-3 gap-3",children:[l.jsxs("div",{className:`rounded-2xl\r
                bg-white/5\r
                border\r
                border-white/10\r
                p-4`,children:[l.jsx("p",{className:"text-lg font-bold text-white",children:"24/7"}),l.jsx("p",{className:"text-[10px] text-slate-500 mt-1",children:"Access"})]}),l.jsxs("div",{className:`rounded-2xl\r
                bg-white/5\r
                border\r
                border-white/10\r
                p-4`,children:[l.jsx("p",{className:"text-lg font-bold text-white",children:"100%"}),l.jsx("p",{className:"text-[10px] text-slate-500 mt-1",children:"Digital"})]}),l.jsxs("div",{className:`rounded-2xl\r
                bg-white/5\r
                border\r
                border-white/10\r
                p-4`,children:[l.jsx("p",{className:"text-lg font-bold text-white",children:"Easy"}),l.jsx("p",{className:"text-[10px] text-slate-500 mt-1",children:"Booking"})]})]})]}),l.jsxs("div",{className:`p-6\r
            sm:p-10\r
            lg:p-12\r
            xl:p-14\r
            flex\r
            flex-col\r
            justify-center`,children:[l.jsxs("div",{className:"lg:hidden flex items-center gap-3 mb-10",children:[l.jsx("div",{className:`w-10\r
                h-10\r
                rounded-xl\r
                bg-blue-600\r
                flex\r
                items-center\r
                justify-center\r
                text-white\r
                font-bold`,children:"M"}),l.jsxs("div",{children:[l.jsx("p",{className:"font-bold text-slate-900",children:"Medi-call"}),l.jsx("p",{className:"text-[10px] text-slate-400",children:"Healthcare made simpler"})]})]}),l.jsxs("div",{children:[l.jsx("span",{className:`text-[10px]\r
                uppercase\r
                tracking-[0.18em]\r
                font-bold\r
                text-blue-600`,children:e==="Sign Up"?"Get started":"Welcome back"}),l.jsx("h2",{className:`mt-2\r
                text-3xl\r
                font-bold\r
                tracking-tight\r
                text-slate-900`,children:e==="Sign Up"?"Create your account":"Login to Medi-call"}),l.jsx("p",{className:`mt-2\r
                text-sm\r
                leading-6\r
                text-slate-500`,children:e==="Sign Up"?"Create an account to manage your healthcare appointments.":"Access your appointments and healthcare profile."})]}),l.jsxs("form",{onSubmit:h,className:"mt-8 space-y-5",children:[e==="Sign Up"&&l.jsxs("div",{children:[l.jsx("label",{className:`block\r
                    text-xs\r
                    font-semibold\r
                    text-slate-700\r
                    mb-2`,children:"Full name"}),l.jsxs("div",{className:"relative",children:[l.jsx("span",{className:`absolute\r
                      left-4\r
                      top-1/2\r
                      -translate-y-1/2\r
                      text-slate-400`,children:"👤"}),l.jsx("input",{type:"text",placeholder:"Enter your full name",value:a,onChange:x=>o(x.target.value),required:!0,className:`w-full\r
                      h-12\r
                      pl-11\r
                      pr-4\r
                      rounded-xl\r
                      border\r
                      border-slate-200\r
                      bg-slate-50\r
                      text-sm\r
                      text-slate-800\r
                      placeholder:text-slate-400\r
                      outline-none\r
                      transition-all\r
                      focus:bg-white\r
                      focus:border-blue-500\r
                      focus:ring-4\r
                      focus:ring-blue-50`})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:`block\r
                  text-xs\r
                  font-semibold\r
                  text-slate-700\r
                  mb-2`,children:"Email address"}),l.jsxs("div",{className:"relative",children:[l.jsx("span",{className:`absolute\r
                    left-4\r
                    top-1/2\r
                    -translate-y-1/2\r
                    text-slate-400`,children:"✉"}),l.jsx("input",{type:"email",placeholder:"you@example.com",value:n,onChange:x=>r(x.target.value),required:!0,className:`w-full\r
                    h-12\r
                    pl-11\r
                    pr-4\r
                    rounded-xl\r
                    border\r
                    border-slate-200\r
                    bg-slate-50\r
                    text-sm\r
                    text-slate-800\r
                    placeholder:text-slate-400\r
                    outline-none\r
                    transition-all\r
                    focus:bg-white\r
                    focus:border-blue-500\r
                    focus:ring-4\r
                    focus:ring-blue-50`})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("label",{className:`text-xs\r
                    font-semibold\r
                    text-slate-700`,children:"Password"}),e==="Login"&&l.jsx("button",{type:"button",className:`text-[10px]\r
                      font-semibold\r
                      text-blue-600\r
                      hover:text-blue-700`,children:"Forgot password?"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("span",{className:`absolute\r
                    left-4\r
                    top-1/2\r
                    -translate-y-1/2\r
                    text-slate-400`,children:"🔒"}),l.jsx("input",{type:c?"text":"password",placeholder:"Enter your password",value:s,onChange:x=>i(x.target.value),required:!0,minLength:6,className:`w-full\r
                    h-12\r
                    pl-11\r
                    pr-12\r
                    rounded-xl\r
                    border\r
                    border-slate-200\r
                    bg-slate-50\r
                    text-sm\r
                    text-slate-800\r
                    placeholder:text-slate-400\r
                    outline-none\r
                    transition-all\r
                    focus:bg-white\r
                    focus:border-blue-500\r
                    focus:ring-4\r
                    focus:ring-blue-50`}),l.jsx("button",{type:"button",onClick:()=>u(x=>!x),className:`absolute\r
                    right-4\r
                    top-1/2\r
                    -translate-y-1/2\r
                    text-xs\r
                    text-slate-400\r
                    hover:text-slate-600`,children:c?"Hide":"Show"})]}),e==="Sign Up"&&l.jsx("p",{className:"mt-2 text-[10px] text-slate-400",children:"Password must contain at least 6 characters."})]}),l.jsx("button",{type:"submit",className:`w-full\r
                h-12\r
                rounded-xl\r
                bg-blue-600\r
                text-white\r
                text-sm\r
                font-semibold\r
                hover:bg-blue-700\r
                active:scale-[0.99]\r
                transition-all\r
                shadow-sm`,children:e==="Sign Up"?"Create Account →":"Login →"})]}),l.jsxs("div",{className:`flex\r
              items-center\r
              gap-3\r
              my-7`,children:[l.jsx("div",{className:"h-px bg-slate-100 flex-1"}),l.jsx("span",{className:"text-[10px] text-slate-400",children:"OR"}),l.jsx("div",{className:"h-px bg-slate-100 flex-1"})]}),l.jsxs("p",{className:"text-center text-xs text-slate-500",children:[e==="Sign Up"?"Already have an account?":"Don't have an account?",l.jsx("button",{type:"button",onClick:p,className:`ml-1.5\r
                font-semibold\r
                text-blue-600\r
                hover:text-blue-700`,children:e==="Sign Up"?"Login here":"Create one"})]}),l.jsxs("div",{className:`flex\r
              items-start\r
              gap-3\r
              mt-8\r
              p-4\r
              rounded-2xl\r
              bg-slate-50\r
              border\r
              border-slate-100`,children:[l.jsx("span",{className:"text-sm",children:"🔐"}),l.jsx("p",{className:`text-[10px]\r
                leading-4\r
                text-slate-500`,children:"Your account information will be securely handled once authentication is connected to the backend."})]})]})]})})})},_o=()=>l.jsxs("main",{className:"bg-slate-50 min-h-screen",children:[l.jsx("section",{className:"px-5 sm:px-8 pt-10 sm:pt-14",children:l.jsx("div",{className:"max-w-[1180px] mx-auto",children:l.jsxs("div",{className:`relative\r
            overflow-hidden\r
            rounded-[28px]\r
            bg-slate-950\r
            px-6\r
            sm:px-10\r
            lg:px-14\r
            py-12\r
            sm:py-16`,children:[l.jsx("div",{className:`absolute\r
              -right-24\r
              -top-24\r
              w-72\r
              h-72\r
              rounded-full\r
              bg-blue-600/10`}),l.jsx("div",{className:`absolute\r
              -left-32\r
              -bottom-32\r
              w-80\r
              h-80\r
              rounded-full\r
              bg-cyan-500/5`}),l.jsxs("div",{className:"relative max-w-3xl",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-500 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                  uppercase\r
                  tracking-[0.2em]\r
                  font-bold\r
                  text-blue-400`,children:"About Medi-call"})]}),l.jsxs("h1",{className:`text-3xl\r
                sm:text-4xl\r
                lg:text-5xl\r
                font-bold\r
                leading-tight\r
                tracking-tight\r
                text-white`,children:["Healthcare should feel",l.jsx("span",{className:"text-blue-400",children:" simple."})]}),l.jsx("p",{className:`mt-5\r
                max-w-2xl\r
                text-sm\r
                sm:text-base\r
                leading-7\r
                text-slate-400`,children:"We are building a simpler way for patients to discover healthcare professionals, manage appointments and stay connected with their care."})]})]})})}),l.jsx("section",{className:"px-5 sm:px-8 py-14 sm:py-20",children:l.jsxs("div",{className:`max-w-[1180px]\r
          mx-auto\r
          grid\r
          lg:grid-cols-[0.85fr_1.15fr]\r
          gap-10\r
          lg:gap-16\r
          items-center`,children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:`absolute\r
              -inset-3\r
              rounded-[30px]\r
              bg-blue-100\r
              -z-10`}),l.jsx("img",{src:Ve.about_image,alt:"Healthcare professionals",className:`w-full\r
              rounded-[26px]\r
              object-cover\r
              max-h-[500px]`}),l.jsxs("div",{className:`absolute\r
              bottom-5\r
              left-5\r
              bg-white\r
              rounded-2xl\r
              px-4\r
              py-3\r
              shadow-[0_12px_35px_rgba(15,23,42,0.12)]`,children:[l.jsx("p",{className:"text-[10px] uppercase tracking-wider text-slate-400",children:"Our approach"}),l.jsx("p",{className:"text-sm font-bold text-slate-800 mt-1",children:"Patient-first healthcare"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                uppercase\r
                tracking-[0.18em]\r
                font-bold\r
                text-blue-600`,children:"Our story"})]}),l.jsx("h2",{className:`text-2xl\r
              sm:text-3xl\r
              font-bold\r
              text-slate-900\r
              tracking-tight`,children:"Making healthcare easier to navigate"}),l.jsxs("div",{className:`mt-6\r
              space-y-5\r
              text-sm\r
              leading-7\r
              text-slate-500`,children:[l.jsx("p",{children:"Welcome to Medi-call, your trusted partner in managing your healthcare needs conveniently and efficiently. At Medi-call, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health journey."}),l.jsx("p",{children:"Medi-call is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating modern technology to improve the user experience and make access to healthcare simpler."})]}),l.jsxs("div",{className:`mt-7\r
              p-5\r
              rounded-2xl\r
              bg-white\r
              border\r
              border-slate-100`,children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-10\r
                  h-10\r
                  rounded-xl\r
                  bg-blue-50\r
                  flex\r
                  items-center\r
                  justify-center\r
                  text-blue-600`,children:"◈"}),l.jsxs("div",{children:[l.jsx("p",{className:`text-[10px]\r
                    uppercase\r
                    tracking-wider\r
                    font-bold\r
                    text-blue-600`,children:"Our vision"}),l.jsx("p",{className:"text-sm font-bold text-slate-800 mt-1",children:"A seamless healthcare experience"})]})]}),l.jsx("p",{className:`mt-4\r
                text-sm\r
                leading-6\r
                text-slate-500`,children:"Our vision at Medi-call is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it."})]})]})]})}),l.jsx("section",{className:"bg-white px-5 sm:px-8 py-14 sm:py-20",children:l.jsxs("div",{className:"max-w-[1180px] mx-auto",children:[l.jsxs("div",{className:"text-center max-w-2xl mx-auto",children:[l.jsxs("div",{className:"flex items-center justify-center gap-2 mb-4",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                uppercase\r
                tracking-[0.18em]\r
                font-bold\r
                text-blue-600`,children:"Why Medi-call"}),l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"})]}),l.jsx("h2",{className:`text-2xl\r
              sm:text-3xl\r
              font-bold\r
              text-slate-900\r
              tracking-tight`,children:"Built around your healthcare journey"}),l.jsx("p",{className:"mt-3 text-sm text-slate-500 leading-6",children:"Everything is designed to make discovering and managing healthcare simpler."})]}),l.jsxs("div",{className:`grid\r
            md:grid-cols-3\r
            gap-5\r
            mt-10`,children:[l.jsxs("div",{className:`group\r
              rounded-[24px]\r
              border\r
              border-slate-100\r
              bg-slate-50\r
              p-6\r
              hover:bg-blue-600\r
              hover:border-blue-600\r
              transition-all\r
              duration-300`,children:[l.jsx("div",{className:`w-12\r
                h-12\r
                rounded-2xl\r
                bg-blue-100\r
                group-hover:bg-white/10\r
                flex\r
                items-center\r
                justify-center\r
                text-blue-600\r
                group-hover:text-white\r
                text-xl\r
                transition-all`,children:"⚡"}),l.jsx("h3",{className:`mt-6\r
                text-lg\r
                font-bold\r
                text-slate-900\r
                group-hover:text-white`,children:"Efficiency"}),l.jsx("p",{className:`mt-3\r
                text-sm\r
                leading-6\r
                text-slate-500\r
                group-hover:text-blue-100`,children:"Streamlined appointment scheduling that fits into your busy lifestyle without unnecessary steps."}),l.jsx("div",{className:`mt-6\r
                text-xs\r
                font-semibold\r
                text-blue-600\r
                group-hover:text-white`,children:"Simple by design →"})]}),l.jsxs("div",{className:`group\r
              rounded-[24px]\r
              border\r
              border-slate-100\r
              bg-slate-50\r
              p-6\r
              hover:bg-blue-600\r
              hover:border-blue-600\r
              transition-all\r
              duration-300`,children:[l.jsx("div",{className:`w-12\r
                h-12\r
                rounded-2xl\r
                bg-emerald-100\r
                group-hover:bg-white/10\r
                flex\r
                items-center\r
                justify-center\r
                text-emerald-600\r
                group-hover:text-white\r
                text-xl\r
                transition-all`,children:"◎"}),l.jsx("h3",{className:`mt-6\r
                text-lg\r
                font-bold\r
                text-slate-900\r
                group-hover:text-white`,children:"Convenience"}),l.jsx("p",{className:`mt-3\r
                text-sm\r
                leading-6\r
                text-slate-500\r
                group-hover:text-blue-100`,children:"Access healthcare professionals through an experience designed to reduce the friction around finding and booking care."}),l.jsx("div",{className:`mt-6\r
                text-xs\r
                font-semibold\r
                text-blue-600\r
                group-hover:text-white`,children:"Care, without the hassle →"})]}),l.jsxs("div",{className:`group\r
              rounded-[24px]\r
              border\r
              border-slate-100\r
              bg-slate-50\r
              p-6\r
              hover:bg-blue-600\r
              hover:border-blue-600\r
              transition-all\r
              duration-300`,children:[l.jsx("div",{className:`w-12\r
                h-12\r
                rounded-2xl\r
                bg-violet-100\r
                group-hover:bg-white/10\r
                flex\r
                items-center\r
                justify-center\r
                text-violet-600\r
                group-hover:text-white\r
                text-xl\r
                transition-all`,children:"✦"}),l.jsx("h3",{className:`mt-6\r
                text-lg\r
                font-bold\r
                text-slate-900\r
                group-hover:text-white`,children:"Personalization"}),l.jsx("p",{className:`mt-3\r
                text-sm\r
                leading-6\r
                text-slate-500\r
                group-hover:text-blue-100`,children:"A healthcare experience that can adapt to your preferences, appointments and ongoing needs."}),l.jsx("div",{className:`mt-6\r
                text-xs\r
                font-semibold\r
                text-blue-600\r
                group-hover:text-white`,children:"Designed around you →"})]})]})]})}),l.jsx("section",{className:"px-5 sm:px-8 py-14",children:l.jsxs("div",{className:`max-w-[1180px]\r
          mx-auto\r
          rounded-[28px]\r
          bg-blue-600\r
          px-6\r
          sm:px-10\r
          lg:px-14\r
          py-10\r
          sm:py-12\r
          flex\r
          flex-col\r
          md:flex-row\r
          md:items-center\r
          md:justify-between\r
          gap-6`,children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] uppercase tracking-[0.18em] font-bold text-blue-200",children:"Your health matters"}),l.jsx("h2",{className:`mt-2\r
              text-2xl\r
              sm:text-3xl\r
              font-bold\r
              text-white`,children:"Start your healthcare journey"}),l.jsx("p",{className:"mt-2 text-sm text-blue-100",children:"Find a doctor and book your next consultation."})]}),l.jsx("a",{href:"/Doctors",className:`w-fit\r
            px-6\r
            py-3\r
            rounded-xl\r
            bg-white\r
            text-blue-600\r
            text-sm\r
            font-semibold\r
            hover:bg-blue-50\r
            transition-colors`,children:"Find a doctor →"})]})})]}),Ao=()=>l.jsxs("main",{className:"bg-slate-50 min-h-screen",children:[l.jsx("section",{className:"px-5 sm:px-8 pt-10 sm:pt-14",children:l.jsx("div",{className:"max-w-[1180px] mx-auto",children:l.jsxs("div",{className:`relative\r
            overflow-hidden\r
            rounded-[28px]\r
            bg-slate-950\r
            px-6\r
            sm:px-10\r
            lg:px-14\r
            py-12\r
            sm:py-16`,children:[l.jsx("div",{className:`absolute\r
              -right-24\r
              -top-28\r
              w-80\r
              h-80\r
              rounded-full\r
              bg-blue-600/10`}),l.jsx("div",{className:`absolute\r
              -left-24\r
              -bottom-32\r
              w-80\r
              h-80\r
              rounded-full\r
              bg-cyan-500/5`}),l.jsxs("div",{className:"relative max-w-3xl",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-500 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                  uppercase\r
                  tracking-[0.2em]\r
                  font-bold\r
                  text-blue-400`,children:"Contact Medi-call"})]}),l.jsxs("h1",{className:`text-3xl\r
                sm:text-4xl\r
                lg:text-5xl\r
                font-bold\r
                leading-tight\r
                tracking-tight\r
                text-white`,children:["We're here to",l.jsx("span",{className:"text-blue-400",children:" help."})]}),l.jsx("p",{className:`mt-5\r
                max-w-2xl\r
                text-sm\r
                sm:text-base\r
                leading-7\r
                text-slate-400`,children:"Have a question about Medi-call, appointments or our platform? Reach out to us through the channels below."})]})]})})}),l.jsx("section",{className:"px-5 sm:px-8 py-10",children:l.jsxs("div",{className:`max-w-[1180px]\r
          mx-auto\r
          grid\r
          sm:grid-cols-3\r
          gap-4`,children:[l.jsxs("a",{href:"tel:01129911774",className:`group\r
            bg-white\r
            border\r
            border-slate-100\r
            rounded-2xl\r
            p-5\r
            hover:border-blue-100\r
            hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]\r
            transition-all`,children:[l.jsx("div",{className:`w-11\r
              h-11\r
              rounded-xl\r
              bg-blue-50\r
              flex\r
              items-center\r
              justify-center\r
              text-blue-600\r
              text-lg`,children:"☎"}),l.jsx("p",{className:`text-[10px]\r
              uppercase\r
              tracking-wider\r
              font-bold\r
              text-slate-400\r
              mt-5`,children:"Call us"}),l.jsx("p",{className:`text-sm\r
              font-bold\r
              text-slate-800\r
              mt-1\r
              group-hover:text-blue-600`,children:"011-299-117-74"}),l.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Speak with our team"})]}),l.jsxs("a",{href:"mailto:medicall112@gmail.com",className:`group\r
            bg-white\r
            border\r
            border-slate-100\r
            rounded-2xl\r
            p-5\r
            hover:border-blue-100\r
            hover:shadow-[0_12px_30px_rgba(15,23,42,0.06)]\r
            transition-all`,children:[l.jsx("div",{className:`w-11\r
              h-11\r
              rounded-xl\r
              bg-emerald-50\r
              flex\r
              items-center\r
              justify-center\r
              text-emerald-600\r
              text-lg`,children:"✉"}),l.jsx("p",{className:`text-[10px]\r
              uppercase\r
              tracking-wider\r
              font-bold\r
              text-slate-400\r
              mt-5`,children:"Email us"}),l.jsx("p",{className:`text-sm\r
              font-bold\r
              text-slate-800\r
              mt-1\r
              break-all\r
              group-hover:text-blue-600`,children:"medicall112@gmail.com"}),l.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Send us your query"})]}),l.jsxs("div",{className:`bg-white\r
            border\r
            border-slate-100\r
            rounded-2xl\r
            p-5`,children:[l.jsx("div",{className:`w-11\r
              h-11\r
              rounded-xl\r
              bg-violet-50\r
              flex\r
              items-center\r
              justify-center\r
              text-violet-600\r
              text-lg`,children:"📍"}),l.jsx("p",{className:`text-[10px]\r
              uppercase\r
              tracking-wider\r
              font-bold\r
              text-slate-400\r
              mt-5`,children:"Our location"}),l.jsx("p",{className:"text-sm font-bold text-slate-800 mt-1",children:"New Delhi, India"}),l.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Visit our office"})]})]})}),l.jsx("section",{className:"px-5 sm:px-8 pb-14 sm:pb-20",children:l.jsxs("div",{className:`max-w-[1180px]\r
          mx-auto\r
          grid\r
          lg:grid-cols-[0.9fr_1.1fr]\r
          gap-10\r
          lg:gap-16\r
          items-center`,children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:`absolute\r
              -inset-3\r
              rounded-[30px]\r
              bg-blue-100\r
              -z-10`}),l.jsx("img",{src:Ve.contact_image,alt:"Medi-call office",className:`w-full\r
              rounded-[26px]\r
              object-cover\r
              max-h-[470px]`})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                uppercase\r
                tracking-[0.18em]\r
                font-bold\r
                text-blue-600`,children:"Our office"})]}),l.jsx("h2",{className:`text-2xl\r
              sm:text-3xl\r
              font-bold\r
              text-slate-900\r
              tracking-tight`,children:"Come say hello"}),l.jsx("p",{className:`mt-4\r
              text-sm\r
              leading-7\r
              text-slate-500`,children:"Our office is located in Chirag Delhi, New Delhi. If you need assistance or want to connect with the Medi-call team, you can reach us using the contact details provided."}),l.jsxs("div",{className:`mt-7\r
              flex\r
              gap-4\r
              p-5\r
              rounded-2xl\r
              bg-white\r
              border\r
              border-slate-100`,children:[l.jsx("div",{className:`w-10\r
                h-10\r
                rounded-xl\r
                bg-blue-50\r
                flex\r
                items-center\r
                justify-center\r
                flex-shrink-0`,children:"📍"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-slate-800",children:"Office address"}),l.jsxs("p",{className:`mt-1\r
                  text-sm\r
                  leading-6\r
                  text-slate-500`,children:["341/4 Chirag Delhi",l.jsx("br",{}),"Near Chirag Delhi Metro,",l.jsx("br",{}),"New Delhi, India"]})]})]}),l.jsxs("div",{className:`mt-3\r
              flex\r
              gap-4\r
              p-5\r
              rounded-2xl\r
              bg-white\r
              border\r
              border-slate-100`,children:[l.jsx("div",{className:`w-10\r
                h-10\r
                rounded-xl\r
                bg-emerald-50\r
                flex\r
                items-center\r
                justify-center\r
                flex-shrink-0`,children:"☎"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-slate-800",children:"Phone"}),l.jsx("a",{href:"tel:01129911774",className:`mt-1\r
                  block\r
                  text-sm\r
                  text-blue-600\r
                  hover:text-blue-700`,children:"011-299-117-74"})]})]})]})]})}),l.jsx("section",{className:"bg-white px-5 sm:px-8 py-14 sm:py-20",children:l.jsx("div",{className:"max-w-[1180px] mx-auto",children:l.jsxs("div",{className:`rounded-[28px]\r
            bg-slate-50\r
            border\r
            border-slate-100\r
            p-6\r
            sm:p-8\r
            lg:p-10\r
            flex\r
            flex-col\r
            md:flex-row\r
            md:items-center\r
            md:justify-between\r
            gap-7`,children:[l.jsxs("div",{className:"max-w-2xl",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                  uppercase\r
                  tracking-[0.18em]\r
                  font-bold\r
                  text-blue-600`,children:"Careers"})]}),l.jsx("h2",{className:`text-2xl\r
                sm:text-3xl\r
                font-bold\r
                text-slate-900\r
                tracking-tight`,children:"Build the future of healthcare with us."}),l.jsx("p",{className:`mt-3\r
                text-sm\r
                leading-6\r
                text-slate-500`,children:"Learn more about our teams and opportunities at Medi-call."})]}),l.jsx("button",{type:"button",className:`w-fit\r
              px-6\r
              py-3\r
              rounded-xl\r
              bg-slate-900\r
              text-white\r
              text-sm\r
              font-semibold\r
              hover:bg-blue-600\r
              transition-colors`,children:"Explore jobs →"})]})})}),l.jsx("section",{className:"px-5 sm:px-8 py-12",children:l.jsxs("div",{className:`max-w-[1180px]\r
          mx-auto\r
          rounded-[28px]\r
          bg-blue-600\r
          px-6\r
          sm:px-10\r
          py-10\r
          text-center`,children:[l.jsx("p",{className:`text-[10px]\r
            uppercase\r
            tracking-[0.18em]\r
            font-bold\r
            text-blue-200`,children:"Need healthcare?"}),l.jsx("h2",{className:`mt-2\r
            text-2xl\r
            sm:text-3xl\r
            font-bold\r
            text-white`,children:"Find the right doctor for you."}),l.jsx("p",{className:"mt-2 text-sm text-blue-100",children:"Browse doctors and explore available specialities."}),l.jsx("a",{href:"/Doctors",className:`inline-block\r
            mt-6\r
            px-6\r
            py-3\r
            rounded-xl\r
            bg-white\r
            text-blue-600\r
            text-sm\r
            font-semibold\r
            hover:bg-blue-50\r
            transition-colors`,children:"Browse doctors →"})]})})]}),Ax=()=>{const[e,t]=y.useState({name:"puneet",image:wl,email:"puneetSuperstar@gmail.com",phone:"+91 8130265893",address:{line1:"B-234, Chirag Delhi",line2:"Near Chirag Delhi Metro Station, New Delhi"},gender:"Male",dob:"2002-08-07"}),[n,r]=y.useState(!1),s=(o,c)=>{t(u=>({...u,[o]:c}))},i=(o,c)=>{t(u=>({...u,address:{...u.address,[o]:c}}))},a=o=>o?new Date(o).toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"}):"Not provided";return l.jsx("section",{className:"min-h-[75vh] py-8 sm:py-12",children:l.jsxs("div",{className:"max-w-[1100px] mx-auto px-5 sm:px-8",children:[l.jsxs("div",{className:"mb-8",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
              uppercase\r
              tracking-[0.18em]\r
              font-bold\r
              text-blue-600`,children:"Account"})]}),l.jsx("h1",{className:`text-2xl\r
            sm:text-3xl\r
            font-bold\r
            text-slate-900\r
            tracking-tight`,children:"My Profile"}),l.jsx("p",{className:"mt-2 text-sm text-slate-500",children:"Manage your personal information and contact details."})]}),l.jsxs("div",{className:`relative\r
          overflow-hidden\r
          bg-slate-950\r
          rounded-[28px]\r
          p-6\r
          sm:p-8\r
          mb-6`,children:[l.jsx("div",{className:`absolute\r
            -right-20\r
            -top-24\r
            w-64\r
            h-64\r
            rounded-full\r
            bg-blue-500/10`}),l.jsx("div",{className:`absolute\r
            -left-20\r
            -bottom-32\r
            w-64\r
            h-64\r
            rounded-full\r
            bg-cyan-500/5`}),l.jsxs("div",{className:`relative\r
            flex\r
            flex-col\r
            sm:flex-row\r
            sm:items-center\r
            gap-5`,children:[l.jsxs("div",{className:"relative flex-shrink-0",children:[l.jsx("img",{src:e.image||wl,alt:"Profile",className:`w-24\r
                h-24\r
                sm:w-28\r
                sm:h-28\r
                rounded-3xl\r
                object-cover\r
                border-4\r
                border-white/10`}),l.jsx("span",{className:`absolute\r
                right-1\r
                bottom-1\r
                w-5\r
                h-5\r
                rounded-full\r
                bg-emerald-500\r
                border-4\r
                border-slate-950`})]}),l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h2",{className:`text-xl\r
                  sm:text-2xl\r
                  font-bold\r
                  text-white`,children:e.name}),l.jsx("span",{className:`px-2\r
                  py-1\r
                  rounded-full\r
                  bg-blue-500/10\r
                  text-blue-300\r
                  text-[9px]\r
                  font-semibold`,children:"PATIENT"})]}),l.jsx("p",{className:"mt-1 text-sm text-slate-400",children:e.email}),l.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[l.jsxs("div",{className:`flex\r
                  items-center\r
                  gap-2\r
                  text-xs\r
                  text-slate-300`,children:[l.jsx("span",{children:"📱"}),e.phone]}),l.jsxs("div",{className:`flex\r
                  items-center\r
                  gap-2\r
                  text-xs\r
                  text-slate-300`,children:[l.jsx("span",{children:"📍"}),"New Delhi"]})]})]}),l.jsx("button",{onClick:()=>r(o=>!o),className:`self-start\r
              sm:self-center\r
              px-5\r
              py-2.5\r
              rounded-xl\r
              bg-white\r
              text-slate-900\r
              text-xs\r
              font-semibold\r
              hover:bg-slate-100\r
              transition-colors`,children:n?"Cancel":"Edit profile"})]})]}),l.jsxs("div",{className:"grid lg:grid-cols-[1fr_300px] gap-6",children:[l.jsxs("div",{className:`bg-white\r
            border\r
            border-slate-100\r
            rounded-[24px]\r
            overflow-hidden\r
            shadow-[0_8px_30px_rgba(15,23,42,0.04)]`,children:[l.jsx("div",{className:`px-6\r
              sm:px-7\r
              py-5\r
              border-b\r
              border-slate-100`,children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-10\r
                  h-10\r
                  rounded-xl\r
                  bg-blue-50\r
                  flex\r
                  items-center\r
                  justify-center\r
                  text-blue-600`,children:"👤"}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-sm font-bold text-slate-900",children:"Personal information"}),l.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Your basic personal details"})]})]})}),l.jsxs("div",{className:"p-6 sm:p-7 space-y-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:`block\r
                  text-xs\r
                  font-semibold\r
                  text-slate-600\r
                  mb-2`,children:"Full name"}),n?l.jsx("input",{type:"text",value:e.name,onChange:o=>s("name",o.target.value),className:`w-full\r
                    px-4\r
                    py-3\r
                    rounded-xl\r
                    border\r
                    border-slate-200\r
                    bg-slate-50\r
                    text-sm\r
                    text-slate-800\r
                    outline-none\r
                    focus:border-blue-500\r
                    focus:ring-4\r
                    focus:ring-blue-50`}):l.jsx("p",{className:`px-4\r
                    py-3\r
                    rounded-xl\r
                    bg-slate-50\r
                    text-sm\r
                    text-slate-700`,children:e.name})]}),l.jsxs("div",{className:"grid sm:grid-cols-2 gap-5",children:[l.jsxs("div",{children:[l.jsx("label",{className:`block\r
                    text-xs\r
                    font-semibold\r
                    text-slate-600\r
                    mb-2`,children:"Gender"}),n?l.jsxs("select",{value:e.gender,onChange:o=>s("gender",o.target.value),className:`w-full\r
                      px-4\r
                      py-3\r
                      rounded-xl\r
                      border\r
                      border-slate-200\r
                      bg-slate-50\r
                      text-sm\r
                      text-slate-700\r
                      outline-none\r
                      focus:border-blue-500\r
                      focus:ring-4\r
                      focus:ring-blue-50`,children:[l.jsx("option",{value:"Male",children:"Male"}),l.jsx("option",{value:"Female",children:"Female"}),l.jsx("option",{value:"Other",children:"Other"})]}):l.jsx("p",{className:`px-4\r
                      py-3\r
                      rounded-xl\r
                      bg-slate-50\r
                      text-sm\r
                      text-slate-700`,children:e.gender})]}),l.jsxs("div",{children:[l.jsx("label",{className:`block\r
                    text-xs\r
                    font-semibold\r
                    text-slate-600\r
                    mb-2`,children:"Date of birth"}),n?l.jsx("input",{type:"date",value:e.dob,onChange:o=>s("dob",o.target.value),className:`w-full\r
                      px-4\r
                      py-3\r
                      rounded-xl\r
                      border\r
                      border-slate-200\r
                      bg-slate-50\r
                      text-sm\r
                      text-slate-700\r
                      outline-none\r
                      focus:border-blue-500\r
                      focus:ring-4\r
                      focus:ring-blue-50`}):l.jsx("p",{className:`px-4\r
                      py-3\r
                      rounded-xl\r
                      bg-slate-50\r
                      text-sm\r
                      text-slate-700`,children:a(e.dob)})]})]})]})]}),l.jsxs("div",{className:`bg-white\r
            border\r
            border-slate-100\r
            rounded-[24px]\r
            overflow-hidden\r
            shadow-[0_8px_30px_rgba(15,23,42,0.04)]`,children:[l.jsx("div",{className:`px-6\r
              py-5\r
              border-b\r
              border-slate-100`,children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:`w-10\r
                  h-10\r
                  rounded-xl\r
                  bg-emerald-50\r
                  flex\r
                  items-center\r
                  justify-center\r
                  text-emerald-600`,children:"📞"}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-sm font-bold text-slate-900",children:"Contact information"}),l.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"How we can reach you"})]})]})}),l.jsxs("div",{className:"p-6 space-y-5",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] uppercase tracking-wider font-bold text-slate-400",children:"Email"}),l.jsx("p",{className:"mt-1 text-sm text-slate-700 break-all",children:e.email})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] uppercase tracking-wider font-bold text-slate-400",children:"Phone"}),n?l.jsx("input",{type:"text",value:e.phone,onChange:o=>s("phone",o.target.value),className:`mt-2\r
                    w-full\r
                    px-3\r
                    py-2.5\r
                    rounded-xl\r
                    border\r
                    border-slate-200\r
                    bg-slate-50\r
                    text-sm\r
                    outline-none\r
                    focus:border-blue-500`}):l.jsx("p",{className:"mt-1 text-sm text-slate-700",children:e.phone})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] uppercase tracking-wider font-bold text-slate-400",children:"Address"}),n?l.jsxs("div",{className:"mt-2 space-y-2",children:[l.jsx("input",{type:"text",value:e.address.line1,onChange:o=>i("line1",o.target.value),className:`w-full\r
                      px-3\r
                      py-2.5\r
                      rounded-xl\r
                      border\r
                      border-slate-200\r
                      bg-slate-50\r
                      text-sm\r
                      outline-none\r
                      focus:border-blue-500`}),l.jsx("input",{type:"text",value:e.address.line2,onChange:o=>i("line2",o.target.value),className:`w-full\r
                      px-3\r
                      py-2.5\r
                      rounded-xl\r
                      border\r
                      border-slate-200\r
                      bg-slate-50\r
                      text-sm\r
                      outline-none\r
                      focus:border-blue-500`})]}):l.jsxs("p",{className:`mt-1\r
                    text-sm\r
                    leading-6\r
                    text-slate-600`,children:[e.address.line1,l.jsx("br",{}),e.address.line2]})]})]})]})]}),n&&l.jsxs("div",{className:`mt-6\r
            flex\r
            flex-col\r
            sm:flex-row\r
            sm:items-center\r
            sm:justify-between\r
            gap-4\r
            p-5\r
            rounded-2xl\r
            bg-blue-50\r
            border\r
            border-blue-100`,children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-sm font-semibold text-slate-800",children:"You are editing your profile"}),l.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Review your information before saving."})]}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:()=>r(!1),className:`px-5\r
                py-2.5\r
                rounded-xl\r
                border\r
                border-slate-200\r
                bg-white\r
                text-slate-600\r
                text-xs\r
                font-semibold\r
                hover:bg-slate-50`,children:"Cancel"}),l.jsx("button",{onClick:()=>r(!1),className:`px-6\r
                py-2.5\r
                rounded-xl\r
                bg-blue-600\r
                text-white\r
                text-xs\r
                font-semibold\r
                hover:bg-blue-700\r
                transition-colors`,children:"Save changes"})]})]}),l.jsxs("div",{className:`mt-6\r
          flex\r
          items-start\r
          gap-3\r
          p-5\r
          rounded-2xl\r
          bg-slate-50\r
          border\r
          border-slate-100`,children:[l.jsx("div",{className:`w-9\r
            h-9\r
            rounded-xl\r
            bg-white\r
            border\r
            border-slate-100\r
            flex\r
            items-center\r
            justify-center\r
            flex-shrink-0`,children:"🔒"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-slate-700",children:"Your information is private"}),l.jsx("p",{className:"text-[11px] text-slate-500 mt-1 leading-5",children:"Your personal information is used to manage your healthcare experience and appointments."})]})]})]})})},Px=()=>{const{doctors:e,currencySymbol:t}=y.useContext(yn),n=Be(),r=(e==null?void 0:e.slice(0,3))||[],s=i=>{i&&(n(`/appointment/${i}`),window.scrollTo({top:0,behavior:"smooth"}))};return l.jsx("section",{className:"min-h-[70vh] py-8 sm:py-12",children:l.jsxs("div",{className:"max-w-[1180px] mx-auto px-5 sm:px-8",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                uppercase\r
                tracking-[0.18em]\r
                font-bold\r
                text-blue-600`,children:"Patient dashboard"})]}),l.jsx("h1",{className:`text-2xl\r
              sm:text-3xl\r
              font-bold\r
              text-slate-900\r
              tracking-tight`,children:"My Appointments"}),l.jsx("p",{className:"mt-2 text-sm text-slate-500",children:"Manage your upcoming consultations and appointment history."})]}),l.jsx("button",{onClick:()=>{n("/Doctors"),window.scrollTo({top:0,behavior:"smooth"})},className:`self-start sm:self-auto\r
            px-5\r
            py-2.5\r
            rounded-xl\r
            bg-blue-600\r
            text-white\r
            text-sm\r
            font-semibold\r
            hover:bg-blue-700\r
            transition-colors`,children:"Find a doctor →"})]}),l.jsxs("div",{className:`grid\r
          grid-cols-2\r
          sm:grid-cols-4\r
          gap-3\r
          sm:gap-4\r
          mt-8`,children:[l.jsxs("div",{className:`bg-white\r
            border\r
            border-slate-100\r
            rounded-2xl\r
            p-4\r
            shadow-[0_6px_24px_rgba(15,23,42,0.03)]`,children:[l.jsx("p",{className:"text-[10px] uppercase tracking-wider text-slate-400",children:"Upcoming"}),l.jsx("p",{className:"text-2xl font-bold text-slate-900 mt-1",children:"0"})]}),l.jsxs("div",{className:`bg-white\r
            border\r
            border-slate-100\r
            rounded-2xl\r
            p-4\r
            shadow-[0_6px_24px_rgba(15,23,42,0.03)]`,children:[l.jsx("p",{className:"text-[10px] uppercase tracking-wider text-slate-400",children:"Completed"}),l.jsx("p",{className:"text-2xl font-bold text-slate-900 mt-1",children:"0"})]}),l.jsxs("div",{className:`bg-white\r
            border\r
            border-slate-100\r
            rounded-2xl\r
            p-4\r
            shadow-[0_6px_24px_rgba(15,23,42,0.03)]`,children:[l.jsx("p",{className:"text-[10px] uppercase tracking-wider text-slate-400",children:"Cancelled"}),l.jsx("p",{className:"text-2xl font-bold text-slate-900 mt-1",children:"0"})]}),l.jsxs("div",{className:`bg-white\r
            border\r
            border-slate-100\r
            rounded-2xl\r
            p-4\r
            shadow-[0_6px_24px_rgba(15,23,42,0.03)]`,children:[l.jsx("p",{className:"text-[10px] uppercase tracking-wider text-slate-400",children:"Total"}),l.jsx("p",{className:"text-2xl font-bold text-slate-900 mt-1",children:"0"})]})]}),l.jsxs("div",{className:"mt-10",children:[l.jsx("div",{className:"flex items-center justify-between mb-5",children:l.jsxs("div",{children:[l.jsx("h2",{className:"text-lg font-bold text-slate-900",children:"Upcoming appointments"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Your scheduled consultations will appear here."})]})}),!e||e.length===0?l.jsxs("div",{className:`bg-slate-50\r
              border\r
              border-slate-100\r
              rounded-3xl\r
              py-16\r
              px-5\r
              text-center`,children:[l.jsx("div",{className:`w-16\r
                h-16\r
                mx-auto\r
                rounded-2xl\r
                bg-white\r
                border\r
                border-slate-100\r
                flex\r
                items-center\r
                justify-center\r
                text-2xl`,children:"📅"}),l.jsx("h3",{className:"mt-5 text-lg font-bold text-slate-800",children:"No appointments yet"}),l.jsx("p",{className:"mt-2 text-sm text-slate-500 max-w-sm mx-auto",children:"Once you book a consultation, your upcoming appointment will appear here."}),l.jsx("button",{onClick:()=>{n("/Doctors"),window.scrollTo(0,0)},className:`mt-6\r
                px-6\r
                py-3\r
                rounded-xl\r
                bg-blue-600\r
                text-white\r
                text-sm\r
                font-semibold\r
                hover:bg-blue-700\r
                transition-colors`,children:"Browse doctors"})]}):l.jsx("div",{className:"space-y-4",children:r.map((i,a)=>l.jsx("article",{className:`group\r
                  bg-white\r
                  border\r
                  border-slate-100\r
                  rounded-3xl\r
                  p-4\r
                  sm:p-5\r
                  hover:border-blue-100\r
                  hover:shadow-[0_12px_35px_rgba(15,23,42,0.06)]\r
                  transition-all`,children:l.jsxs("div",{className:`flex\r
                    flex-col\r
                    lg:flex-row\r
                    lg:items-center\r
                    gap-5`,children:[l.jsxs("div",{className:"flex items-center gap-4 flex-1",children:[l.jsx("img",{src:i.image,alt:i.name,className:`w-20\r
                        h-20\r
                        sm:w-24\r
                        sm:h-24\r
                        rounded-2xl\r
                        object-cover\r
                        bg-blue-50\r
                        flex-shrink-0`}),l.jsxs("div",{className:"min-w-0",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h3",{className:`font-bold\r
                            text-slate-900\r
                            truncate`,children:i.name}),l.jsx("span",{className:`w-4\r
                            h-4\r
                            flex-shrink-0\r
                            rounded-full\r
                            bg-blue-50\r
                            text-blue-600\r
                            flex\r
                            items-center\r
                            justify-center\r
                            text-[9px]\r
                            font-bold`,children:"✓"})]}),l.jsx("p",{className:"text-sm text-blue-600 mt-1",children:i.speciality}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:i.degree}),l.jsx("div",{className:"flex items-center gap-2 mt-3",children:l.jsxs("span",{className:`flex\r
                            items-center\r
                            gap-1.5\r
                            text-[10px]\r
                            font-semibold\r
                            text-emerald-600`,children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),"Available"]})})]})]}),l.jsxs("div",{className:`lg:w-[280px]\r
                      p-4\r
                      rounded-2xl\r
                      bg-slate-50\r
                      border\r
                      border-slate-100`,children:[l.jsx("p",{className:`text-[10px]\r
                        uppercase\r
                        tracking-wider\r
                        font-bold\r
                        text-slate-400`,children:"Appointment"}),l.jsxs("div",{className:"mt-3 space-y-2",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-xs text-slate-500",children:"Date"}),l.jsx("span",{className:"text-xs font-semibold text-slate-700",children:"To be scheduled"})]}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-xs text-slate-500",children:"Time"}),l.jsx("span",{className:"text-xs font-semibold text-slate-700",children:"Select slot"})]}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-xs text-slate-500",children:"Consultation"}),l.jsx("span",{className:"text-xs font-semibold text-slate-700",children:"In-clinic / Video"})]})]})]}),l.jsxs("div",{className:`flex\r
                      flex-col\r
                      sm:flex-row\r
                      lg:flex-col\r
                      gap-2\r
                      lg:w-[170px]`,children:[l.jsx("button",{onClick:()=>s(i._id),className:`w-full\r
                        px-4\r
                        py-2.5\r
                        rounded-xl\r
                        bg-blue-600\r
                        text-white\r
                        text-xs\r
                        font-semibold\r
                        hover:bg-blue-700\r
                        transition-colors`,children:"Book appointment"}),l.jsx("button",{onClick:()=>s(i._id),className:`w-full\r
                        px-4\r
                        py-2.5\r
                        rounded-xl\r
                        border\r
                        border-slate-200\r
                        text-slate-600\r
                        text-xs\r
                        font-semibold\r
                        hover:bg-slate-50\r
                        transition-colors`,children:"View doctor"})]})]})},i._id||a))})]}),l.jsx("div",{className:`mt-10\r
          rounded-3xl\r
          bg-blue-50\r
          border\r
          border-blue-100\r
          p-5\r
          sm:p-6`,children:l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-4",children:[l.jsx("div",{className:`w-11\r
              h-11\r
              rounded-xl\r
              bg-white\r
              flex\r
              items-center\r
              justify-center\r
              text-lg\r
              flex-shrink-0`,children:"🔒"}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-sm font-bold text-slate-800",children:"Your healthcare, securely managed"}),l.jsx("p",{className:"text-xs text-slate-500 mt-1 leading-5",children:"Your appointment information will be securely managed once the booking backend is connected."})]})]})})]})})},Po=()=>{const e=Be(),[t,n]=y.useState(""),[r,s]=y.useState("All"),i=[{id:1,title:"5 Ayurvedic Tips for a Healthy Lifestyle",category:"Lifestyle",readTime:"5 min read",icon:"🌿",excerpt:"Discover practical Ayurvedic principles that can fit naturally into your everyday lifestyle.",content:"Ayurveda is a traditional system of medicine rooted in India. Its approach emphasizes daily routines, balanced nutrition, adequate rest and mindful living."},{id:2,title:"Herbs for Mental Clarity in Ayurveda",category:"Herbs",readTime:"6 min read",icon:"🌱",excerpt:"Explore traditional Ayurvedic herbs commonly discussed for focus, relaxation and mental well-being.",content:"Herbs such as Brahmi and Ashwagandha have a long history of use in Ayurvedic traditions. Their suitability can vary from person to person, especially when medicines or medical conditions are involved."},{id:3,title:"The Role of Diet in Ayurveda",category:"Nutrition",readTime:"7 min read",icon:"🥗",excerpt:"Understand how Ayurveda approaches food, daily routines and individual dietary preferences.",content:"Ayurvedic dietary traditions consider food choices, digestion, routine and individual constitution. A balanced modern diet should still meet your nutritional requirements."},{id:4,title:"Understanding Dinacharya",category:"Lifestyle",readTime:"5 min read",icon:"☀️",excerpt:"Learn about Dinacharya, the Ayurvedic concept of maintaining a structured daily routine.",content:"Dinacharya refers to daily routines described in Ayurvedic traditions. Regular sleep, meals, hygiene and mindful activities can support a consistent lifestyle."},{id:5,title:"Common Ayurvedic Herbs Explained",category:"Herbs",readTime:"8 min read",icon:"🍃",excerpt:"A simple introduction to commonly known herbs used in Ayurvedic traditions.",content:"Tulsi, turmeric, ginger, Brahmi and other herbs are commonly associated with Ayurveda. Their traditional uses differ, and herbal products can interact with medicines."},{id:6,title:"Ayurveda & Mindful Living",category:"Wellness",readTime:"4 min read",icon:"🧘",excerpt:"Explore how traditional wellness practices can encourage mindfulness and balanced routines.",content:"Ayurvedic wellness traditions often combine daily routines, food, rest and mindfulness. These practices can complement a healthy lifestyle but should not replace necessary medical care."}],a=["All","Lifestyle","Herbs","Nutrition","Wellness"],o=y.useMemo(()=>{const c=t.toLowerCase().trim();return i.filter(u=>{const h=r==="All"||u.category===r,p=!c||u.title.toLowerCase().includes(c)||u.excerpt.toLowerCase().includes(c)||u.category.toLowerCase().includes(c);return h&&p})},[t,r]);return l.jsxs("main",{className:"min-h-screen bg-slate-50",children:[l.jsx("section",{className:"px-5 sm:px-8 pt-10 sm:pt-14",children:l.jsx("div",{className:"max-w-[1180px] mx-auto",children:l.jsxs("div",{className:`relative\r
            overflow-hidden\r
            rounded-[30px]\r
            bg-[#173F35]\r
            px-6\r
            sm:px-10\r
            lg:px-14\r
            py-12\r
            sm:py-16`,children:[l.jsx("div",{className:`absolute\r
              -right-20\r
              -top-24\r
              w-80\r
              h-80\r
              rounded-full\r
              border\r
              border-white/5`}),l.jsx("div",{className:`absolute\r
              right-20\r
              -bottom-40\r
              w-96\r
              h-96\r
              rounded-full\r
              border\r
              border-white/5`}),l.jsxs("div",{className:"relative max-w-3xl",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[l.jsx("span",{className:"w-7 h-[2px] bg-emerald-300 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                  uppercase\r
                  tracking-[0.2em]\r
                  font-bold\r
                  text-emerald-200`,children:"Traditional Wellness"})]}),l.jsxs("h1",{className:`text-3xl\r
                sm:text-4xl\r
                lg:text-5xl\r
                font-bold\r
                leading-tight\r
                tracking-tight\r
                text-white`,children:["Explore the wisdom of",l.jsx("span",{className:"block text-emerald-300",children:"Ayurveda."})]}),l.jsx("p",{className:`mt-5\r
                max-w-2xl\r
                text-sm\r
                sm:text-base\r
                leading-7\r
                text-emerald-50/70`,children:"Learn about traditional Ayurvedic approaches to lifestyle, nutrition, herbs and everyday wellness through simple, easy-to-read guides."}),l.jsxs("div",{className:"mt-8 max-w-[620px] relative",children:[l.jsx("span",{className:`absolute\r
                  left-4\r
                  top-1/2\r
                  -translate-y-1/2\r
                  text-slate-400\r
                  text-lg`,children:"⌕"}),l.jsx("input",{type:"text",value:t,onChange:c=>n(c.target.value),placeholder:"Search herbs, nutrition, lifestyle...",className:`w-full\r
                  h-13\r
                  py-3\r
                  pl-11\r
                  pr-5\r
                  rounded-2xl\r
                  bg-white\r
                  text-sm\r
                  text-slate-800\r
                  placeholder:text-slate-400\r
                  outline-none\r
                  focus:ring-4\r
                  focus:ring-emerald-300/20`})]})]})]})})}),l.jsx("section",{className:"px-5 sm:px-8 pt-6",children:l.jsxs("div",{className:`max-w-[1180px]\r
          mx-auto\r
          flex\r
          items-start\r
          gap-3\r
          p-4\r
          rounded-2xl\r
          bg-emerald-50\r
          border\r
          border-emerald-100`,children:[l.jsx("span",{className:"text-lg flex-shrink-0",children:"🌿"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-emerald-900",children:"About this section"}),l.jsx("p",{className:`mt-1\r
              text-[11px]\r
              leading-5\r
              text-emerald-800`,children:"Ayurveda is a traditional system of medicine originating in India. These articles provide general educational information and should not replace professional medical advice or prescribed treatment."})]})]})}),l.jsx("section",{className:"px-5 sm:px-8 pt-10",children:l.jsx("div",{className:"max-w-[1180px] mx-auto",children:l.jsxs("div",{className:`grid\r
            grid-cols-1\r
            lg:grid-cols-[1.3fr_0.7fr]\r
            gap-5`,children:[l.jsxs("button",{onClick:()=>e("/ayurveda/1"),className:`group\r
              relative\r
              text-left\r
              overflow-hidden\r
              rounded-[26px]\r
              bg-white\r
              border\r
              border-slate-100\r
              p-6\r
              sm:p-8\r
              hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)]\r
              transition-all`,children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:`px-2.5\r
                  py-1\r
                  rounded-full\r
                  bg-emerald-50\r
                  text-[9px]\r
                  font-bold\r
                  uppercase\r
                  tracking-wider\r
                  text-emerald-700`,children:"Featured guide"}),l.jsx("span",{className:"text-[10px] text-slate-400",children:i[0].readTime})]}),l.jsx("div",{className:`mt-7\r
                w-14\r
                h-14\r
                rounded-2xl\r
                bg-emerald-50\r
                flex\r
                items-center\r
                justify-center\r
                text-3xl\r
                group-hover:scale-105\r
                transition-transform`,children:i[0].icon}),l.jsx("h2",{className:`mt-6\r
                text-2xl\r
                sm:text-3xl\r
                font-bold\r
                leading-tight\r
                text-slate-900\r
                max-w-xl`,children:i[0].title}),l.jsx("p",{className:`mt-3\r
                max-w-2xl\r
                text-sm\r
                leading-6\r
                text-slate-500`,children:i[0].excerpt}),l.jsxs("div",{className:`mt-7\r
                flex\r
                items-center\r
                gap-2\r
                text-xs\r
                font-semibold\r
                text-emerald-700`,children:["Read featured guide",l.jsx("span",{className:"group-hover:translate-x-1 transition-transform",children:"→"})]})]}),l.jsxs("div",{className:`rounded-[26px]\r
              bg-slate-900\r
              p-6\r
              sm:p-8\r
              flex\r
              flex-col\r
              justify-between`,children:[l.jsxs("div",{children:[l.jsx("div",{className:`w-12\r
                  h-12\r
                  rounded-2xl\r
                  bg-white/10\r
                  flex\r
                  items-center\r
                  justify-center\r
                  text-2xl`,children:"🪷"}),l.jsxs("h3",{className:`mt-6\r
                  text-xl\r
                  font-bold\r
                  text-white`,children:["Traditional knowledge,",l.jsx("span",{className:"block text-emerald-300",children:"modern understanding."})]}),l.jsx("p",{className:`mt-3\r
                  text-sm\r
                  leading-6\r
                  text-slate-400`,children:"Learn the traditional context behind commonly discussed Ayurvedic practices while keeping modern healthcare guidance in perspective."})]}),l.jsxs("div",{className:`mt-8\r
                pt-5\r
                border-t\r
                border-white/10\r
                flex\r
                items-center\r
                justify-between`,children:[l.jsx("span",{className:"text-[10px] text-slate-500",children:"Medi-call Health Library"}),l.jsx("span",{className:"text-emerald-300 text-lg",children:"✦"})]})]})]})})}),l.jsx("section",{className:"px-5 sm:px-8 py-12 sm:py-14",children:l.jsxs("div",{className:"max-w-[1180px] mx-auto",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"w-7 h-[2px] bg-emerald-600 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                  uppercase\r
                  tracking-[0.18em]\r
                  font-bold\r
                  text-emerald-700`,children:"Explore"})]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-slate-900",children:"Ayurveda guides"})]}),l.jsxs("p",{className:"text-xs text-slate-400",children:[o.length," ",o.length===1?"article":"articles"]})]}),l.jsx("div",{className:`flex\r
            gap-2\r
            overflow-x-auto\r
            py-5`,children:a.map(c=>l.jsx("button",{onClick:()=>s(c),className:`
                  flex-shrink-0
                  px-4
                  py-2
                  rounded-full
                  text-xs
                  font-semibold
                  border
                  transition-all
                  ${r===c?"bg-emerald-700 border-emerald-700 text-white":"bg-white border-slate-200 text-slate-500 hover:border-emerald-200 hover:text-emerald-700"}
                `,children:c},c))}),o.length>0?l.jsx("div",{className:`grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-3\r
              gap-5`,children:o.map(c=>l.jsxs("article",{className:`group\r
                  bg-white\r
                  border\r
                  border-slate-100\r
                  rounded-[24px]\r
                  p-5\r
                  hover:border-emerald-100\r
                  hover:-translate-y-1\r
                  hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)]\r
                  transition-all\r
                  duration-300`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("div",{className:`w-12\r
                      h-12\r
                      rounded-2xl\r
                      bg-emerald-50\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-2xl\r
                      group-hover:scale-105\r
                      transition-transform`,children:c.icon}),l.jsx("span",{className:`px-2.5\r
                      py-1\r
                      rounded-full\r
                      bg-slate-50\r
                      text-[9px]\r
                      font-semibold\r
                      text-slate-500`,children:c.category})]}),l.jsx("h3",{className:`mt-5\r
                    text-base\r
                    font-bold\r
                    leading-6\r
                    text-slate-900`,children:c.title}),l.jsx("p",{className:`mt-2\r
                    text-sm\r
                    leading-6\r
                    text-slate-500\r
                    line-clamp-3`,children:c.excerpt}),l.jsxs("div",{className:`flex\r
                    items-center\r
                    justify-between\r
                    mt-5\r
                    pt-4\r
                    border-t\r
                    border-slate-100`,children:[l.jsx("span",{className:"text-[10px] text-slate-400",children:c.readTime}),l.jsx("button",{onClick:()=>e(`/ayurveda/${c.id}`),className:`text-xs\r
                      font-semibold\r
                      text-emerald-700\r
                      hover:text-emerald-800`,children:"Read article →"})]})]},c.id))}):l.jsxs("div",{className:`py-16\r
              text-center\r
              rounded-[24px]\r
              bg-white\r
              border\r
              border-slate-100`,children:[l.jsx("div",{className:`w-14\r
                h-14\r
                mx-auto\r
                rounded-2xl\r
                bg-emerald-50\r
                flex\r
                items-center\r
                justify-center\r
                text-xl`,children:"🔎"}),l.jsx("h3",{className:"mt-4 text-base font-bold text-slate-800",children:"No articles found"}),l.jsx("p",{className:"mt-1 text-sm text-slate-500",children:"Try another keyword or category."}),l.jsx("button",{onClick:()=>{n(""),s("All")},className:`mt-5\r
                text-xs\r
                font-semibold\r
                text-emerald-700`,children:"Clear filters"})]})]})}),l.jsx("section",{className:"px-5 sm:px-8 pb-14",children:l.jsxs("div",{className:`max-w-[1180px]\r
          mx-auto\r
          rounded-[28px]\r
          bg-emerald-700\r
          p-7\r
          sm:p-10\r
          flex\r
          flex-col\r
          md:flex-row\r
          md:items-center\r
          md:justify-between\r
          gap-6`,children:[l.jsxs("div",{children:[l.jsx("p",{className:`text-[10px]\r
              uppercase\r
              tracking-[0.18em]\r
              font-bold\r
              text-emerald-200`,children:"Need personalised advice?"}),l.jsx("h2",{className:`mt-2\r
              text-2xl\r
              sm:text-3xl\r
              font-bold\r
              text-white`,children:"Talk to a qualified doctor."}),l.jsx("p",{className:"mt-2 text-sm text-emerald-100",children:"Traditional wellness can complement healthcare, but professional advice matters when you need it."})]}),l.jsx("button",{onClick:()=>e("/Doctors"),className:`w-fit\r
            px-6\r
            py-3\r
            rounded-xl\r
            bg-white\r
            text-emerald-700\r
            text-sm\r
            font-semibold\r
            hover:bg-emerald-50\r
            transition-colors`,children:"Find a doctor →"})]})})]})},Dx=()=>{const e=Be(),{id:t}=oa(),n={1:{category:"Lifestyle",title:"5 Ayurvedic Tips for a Healthy Lifestyle",readTime:"5 min read",icon:"🌿",intro:"Ayurveda is a traditional system of medicine from India that places importance on daily routines, nutrition, rest and mindful living.",sections:[{title:"1. Start your day with a consistent routine",content:"A consistent morning routine can help create structure in your day. Ayurveda traditionally emphasizes regular daily habits such as waking, personal hygiene, movement and mindful preparation for the day."},{title:"2. Pay attention to your meals",content:"Ayurvedic traditions place considerable importance on food and digestion. Eating regular, balanced meals and choosing foods that suit your individual needs can be part of a healthy lifestyle."},{title:"3. Stay physically active",content:"Regular physical activity is an important part of overall health. Walking, stretching, yoga or other suitable forms of exercise can be incorporated according to your fitness level and preferences."},{title:"4. Make time for rest",content:"Adequate sleep and periods of rest are essential for everyday well-being. Maintaining a regular sleep schedule can make it easier to establish healthy habits."},{title:"5. Practice mindful living",content:"Simple practices such as breathing exercises, meditation or taking short breaks from screens can encourage mindfulness and help create a more balanced daily routine."}]},2:{category:"Herbs",title:"Herbs for Mental Clarity in Ayurveda",readTime:"6 min read",icon:"🌱",intro:"Several herbs have a long history of use in Ayurvedic traditions. Understanding their traditional context is important before adding any herbal product to your routine.",sections:[{title:"Brahmi",content:"Brahmi is traditionally associated with memory, concentration and mental well-being in Ayurvedic literature. Modern evidence varies depending on the preparation and individual circumstances."},{title:"Ashwagandha",content:"Ashwagandha is a commonly discussed Ayurvedic herb traditionally used for general wellness and stress-related concerns. It may not be suitable for everyone and can interact with certain medicines."},{title:"Why individual advice matters",content:"Herbal products can have side effects and may interact with prescription medicines. If you take medication or have an existing health condition, discuss herbal supplements with a qualified healthcare professional before using them."}]},3:{category:"Nutrition",title:"The Role of Diet in Ayurveda",readTime:"7 min read",icon:"🥗",intro:"Food is an important part of Ayurvedic traditions. The approach considers digestion, individual constitution, routine and the qualities of different foods.",sections:[{title:"Food as part of daily routine",content:"Ayurvedic traditions emphasize eating mindfully and maintaining a consistent meal routine. In modern nutrition, overall dietary quality and adequate nutrient intake remain important considerations."},{title:"Understanding individual needs",content:"Ayurveda often discusses food in relation to individual constitution or dosha. These concepts come from traditional Ayurvedic frameworks and should not be treated as a substitute for evidence-based nutritional assessment."},{title:"Keep your diet balanced",content:"A healthy diet generally includes a variety of vegetables, fruits, whole grains, pulses, nuts and other nutrient-rich foods according to individual dietary needs and preferences."}]},4:{category:"Lifestyle",title:"Understanding Dinacharya",readTime:"5 min read",icon:"☀️",intro:"Dinacharya refers to daily routines described in Ayurvedic traditions. The concept focuses on maintaining consistency in everyday habits.",sections:[{title:"What is Dinacharya?",content:"Dinacharya can broadly be understood as a structured daily routine. Traditional Ayurvedic texts describe routines related to waking, hygiene, meals, activity and rest."},{title:"Building a modern routine",content:"You can take inspiration from the idea of consistency by maintaining regular sleep, meal and activity schedules that fit your lifestyle."},{title:"Consistency matters",content:"Small habits performed consistently can make everyday routines easier to maintain. The goal should be a practical routine rather than following a rigid schedule."}]},5:{category:"Herbs",title:"Common Ayurvedic Herbs Explained",readTime:"8 min read",icon:"🍃",intro:"Tulsi, turmeric, ginger and other herbs are commonly associated with Indian traditional medicine and Ayurvedic practices.",sections:[{title:"Tulsi",content:"Tulsi, also known as holy basil, has a long history of traditional use in India. It is commonly consumed as part of traditional preparations and herbal drinks."},{title:"Turmeric",content:"Turmeric is widely used as a culinary spice and in traditional preparations. Curcumin, one of its components, has been studied extensively, although supplement effects can differ from ordinary dietary use."},{title:"Ginger",content:"Ginger is commonly used in food and traditional preparations. It is also studied for certain digestive and nausea-related applications."}]},6:{category:"Wellness",title:"Ayurveda & Mindful Living",readTime:"4 min read",icon:"🧘",intro:"Mindfulness, routine and self-awareness are recurring themes in traditional Ayurvedic wellness practices.",sections:[{title:"Create moments of calm",content:"Taking a few minutes for breathing exercises, meditation or quiet reflection can be a simple way to introduce mindfulness into your day."},{title:"Connect routine with well-being",content:"Regular sleep, balanced meals, movement and meaningful social connections can all contribute to overall well-being."},{title:"Use wellness practices appropriately",content:"Traditional wellness practices can complement a healthy lifestyle, but they should not replace professional medical care when you have symptoms or a diagnosed condition."}]}},r=n[t]||n[1];return l.jsxs("main",{className:"min-h-screen bg-slate-50",children:[l.jsx("section",{className:"px-5 sm:px-8 pt-8 sm:pt-12",children:l.jsxs("div",{className:"max-w-[900px] mx-auto",children:[l.jsxs("button",{onClick:()=>e("/Ayurveda"),className:`group\r
            flex\r
            items-center\r
            gap-2\r
            mb-7\r
            text-xs\r
            font-semibold\r
            text-slate-500\r
            hover:text-emerald-700\r
            transition-colors`,children:[l.jsx("span",{className:`w-8\r
              h-8\r
              rounded-full\r
              bg-white\r
              border\r
              border-slate-200\r
              flex\r
              items-center\r
              justify-center\r
              group-hover:border-emerald-200\r
              transition-colors`,children:"←"}),"Back to Ayurveda"]}),l.jsxs("div",{className:`relative\r
            overflow-hidden\r
            rounded-[30px]\r
            bg-[#173F35]\r
            px-6\r
            sm:px-10\r
            lg:px-14\r
            py-10\r
            sm:py-14`,children:[l.jsx("div",{className:`absolute\r
              -right-24\r
              -top-24\r
              w-80\r
              h-80\r
              rounded-full\r
              border\r
              border-white/5`}),l.jsx("div",{className:`absolute\r
              right-24\r
              -bottom-40\r
              w-96\r
              h-96\r
              rounded-full\r
              border\r
              border-white/5`}),l.jsxs("div",{className:"relative",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[l.jsx("span",{className:`px-3\r
                  py-1.5\r
                  rounded-full\r
                  bg-emerald-300/10\r
                  border\r
                  border-emerald-200/10\r
                  text-[10px]\r
                  font-bold\r
                  uppercase\r
                  tracking-wider\r
                  text-emerald-200`,children:r.category}),l.jsx("span",{className:"text-xs text-slate-400",children:r.readTime})]}),l.jsx("div",{className:`mt-7\r
                w-16\r
                h-16\r
                rounded-2xl\r
                bg-white/10\r
                flex\r
                items-center\r
                justify-center\r
                text-3xl`,children:r.icon}),l.jsx("h1",{className:`mt-7\r
                max-w-3xl\r
                text-3xl\r
                sm:text-4xl\r
                lg:text-[46px]\r
                leading-tight\r
                tracking-tight\r
                font-bold\r
                text-white`,children:r.title}),l.jsx("p",{className:`mt-5\r
                max-w-2xl\r
                text-sm\r
                sm:text-base\r
                leading-7\r
                text-emerald-50/70`,children:r.intro})]})]})]})}),l.jsx("section",{className:"px-5 sm:px-8 py-10 sm:py-14",children:l.jsxs("div",{className:`max-w-[900px]\r
          mx-auto\r
          grid\r
          grid-cols-1\r
          lg:grid-cols-[1fr_250px]\r
          gap-8`,children:[l.jsxs("article",{className:`bg-white\r
            rounded-[26px]\r
            border\r
            border-slate-100\r
            p-6\r
            sm:p-9\r
            lg:p-10`,children:[l.jsxs("div",{className:`flex\r
              items-center\r
              gap-3\r
              pb-6\r
              mb-7\r
              border-b\r
              border-slate-100`,children:[l.jsx("div",{className:`w-9\r
                h-9\r
                rounded-full\r
                bg-emerald-50\r
                flex\r
                items-center\r
                justify-center\r
                text-sm`,children:"🌿"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-slate-800",children:"Medi-call Ayurveda Guide"}),l.jsx("p",{className:"text-[10px] text-slate-400",children:"General educational information"})]})]}),l.jsx("div",{className:"mb-9",children:l.jsx("p",{className:`text-[17px]\r
                leading-8\r
                text-slate-600`,children:r.intro})}),l.jsx("div",{className:"space-y-9",children:r.sections.map((s,i)=>l.jsx("section",{children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("span",{className:`flex-shrink-0\r
                      w-8\r
                      h-8\r
                      rounded-lg\r
                      bg-emerald-50\r
                      text-emerald-700\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-xs\r
                      font-bold`,children:String(i+1).padStart(2,"0")}),l.jsxs("div",{children:[l.jsx("h2",{className:`text-xl\r
                        sm:text-2xl\r
                        font-bold\r
                        leading-tight\r
                        text-slate-900`,children:s.title}),l.jsx("p",{className:`mt-3\r
                        text-sm\r
                        sm:text-[15px]\r
                        leading-7\r
                        text-slate-600`,children:s.content})]})]})},i))}),l.jsx("div",{className:`mt-10\r
              p-5\r
              rounded-2xl\r
              bg-amber-50\r
              border\r
              border-amber-100`,children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("span",{className:"text-lg",children:"⚠️"}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-bold text-amber-900",children:"Important"}),l.jsx("p",{className:`mt-1\r
                    text-xs\r
                    leading-5\r
                    text-amber-800`,children:"Herbal products and traditional remedies may not be appropriate for everyone and can interact with medicines. Do not stop or replace prescribed treatment based on information in this article. Consult a qualified healthcare professional when needed."})]})]})})]}),l.jsxs("aside",{className:"space-y-4",children:[l.jsxs("div",{className:`bg-white\r
              border\r
              border-slate-100\r
              rounded-[22px]\r
              p-5`,children:[l.jsx("p",{className:`text-[9px]\r
                uppercase\r
                tracking-[0.16em]\r
                font-bold\r
                text-slate-400`,children:"Article information"}),l.jsxs("div",{className:"mt-5 space-y-4",children:[l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] text-slate-400",children:"Category"}),l.jsx("p",{className:"mt-1 text-xs font-semibold text-slate-800",children:r.category})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] text-slate-400",children:"Reading time"}),l.jsx("p",{className:"mt-1 text-xs font-semibold text-slate-800",children:r.readTime})]}),l.jsxs("div",{children:[l.jsx("p",{className:"text-[10px] text-slate-400",children:"Content type"}),l.jsx("p",{className:"mt-1 text-xs font-semibold text-slate-800",children:"Health education"})]})]})]}),l.jsxs("div",{className:`rounded-[22px]\r
              bg-emerald-700\r
              p-5`,children:[l.jsx("div",{className:`w-10\r
                h-10\r
                rounded-xl\r
                bg-white/10\r
                flex\r
                items-center\r
                justify-center`,children:"🩺"}),l.jsx("h3",{className:`mt-5\r
                text-base\r
                font-bold\r
                leading-5\r
                text-white`,children:"Have a health concern?"}),l.jsx("p",{className:`mt-2\r
                text-xs\r
                leading-5\r
                text-emerald-100`,children:"Get personalised guidance from a qualified doctor."}),l.jsx("button",{onClick:()=>e("/Doctors"),className:`mt-5\r
                w-full\r
                py-2.5\r
                rounded-xl\r
                bg-white\r
                text-emerald-700\r
                text-xs\r
                font-bold\r
                hover:bg-emerald-50\r
                transition-colors`,children:"Find a doctor →"})]}),l.jsx("button",{onClick:()=>e("/Ayurveda"),className:`w-full\r
              py-3\r
              rounded-xl\r
              bg-white\r
              border\r
              border-slate-200\r
              text-xs\r
              font-semibold\r
              text-slate-600\r
              hover:border-emerald-200\r
              hover:text-emerald-700\r
              transition-colors`,children:"← Explore more Ayurveda"})]})]})})]})},Do=()=>{const[e,t]=y.useState(""),[n,r]=y.useState("All"),[s,i]=y.useState(null),a=[{id:1,title:"Honey and Lemon for Sore Throat",category:"Cold & Throat",icon:"🍯",description:"A warm mixture of honey and lemon may help soothe a sore throat and reduce irritation.",fullDescription:"Mix a tablespoon of honey and a few drops of fresh lemon juice into a cup of warm water. Sip the mixture slowly. Honey may provide a soothing effect for throat irritation."},{id:2,title:"Turmeric Milk for Cough",category:"Cold & Throat",icon:"🥛",description:"Warm turmeric milk is a traditional drink often used for comfort during coughs and colds.",fullDescription:"Mix around half a teaspoon of turmeric powder into a cup of warm milk. You can add a small amount of black pepper if desired. This is a traditional comfort drink and should not replace medical treatment."},{id:3,title:"Aloe Vera for Minor Skin Irritation",category:"Skin Care",icon:"🌿",description:"Aloe vera gel can provide a cooling and soothing sensation for minor skin irritation.",fullDescription:"A small amount of plain aloe vera gel can be applied to intact skin. Avoid applying it to deep wounds, serious burns or infected areas. Stop if irritation occurs."},{id:4,title:"Ginger Tea for Nausea",category:"Digestive",icon:"🫚",description:"Ginger tea is commonly used to help with mild nausea and digestive discomfort.",fullDescription:"Boil a few slices of fresh ginger in water for several minutes. Strain and drink while warm. Ginger may help with some forms of nausea, although persistent or severe nausea needs medical evaluation."},{id:5,title:"Cucumber for Puffy Eyes",category:"Skin Care",icon:"🥒",description:"Chilled cucumber slices can temporarily cool the skin around tired or puffy eyes.",fullDescription:"Place clean, chilled cucumber slices over closed eyes for around 10–15 minutes. Avoid putting cucumber or its juice directly inside the eyes."},{id:6,title:"Basil Leaves for Cough",category:"Cold & Throat",icon:"🌱",description:"Basil is traditionally used in drinks and preparations intended to soothe throat discomfort.",fullDescription:"Basil leaves can be used to prepare a warm herbal drink. Evidence for treating cough with basil is limited, so persistent or worsening symptoms should be evaluated by a healthcare professional."},{id:7,title:"Garlic with Food",category:"Wellness",icon:"🧄",description:"Garlic is a nutritious ingredient that can be included as part of a balanced diet.",fullDescription:"Fresh garlic can be added to meals according to personal preference. Although garlic has several biologically active compounds, it should not be considered a replacement for treatment of infections."},{id:8,title:"Cool Compress for Sunburn",category:"Skin Care",icon:"🧊",description:"A cool, damp compress can help provide temporary relief from mild sunburn discomfort.",fullDescription:"Apply a clean, cool, damp cloth to mildly sunburned skin for short periods. Avoid ice directly on the skin. Stay hydrated and protect the affected area from further sun exposure."},{id:9,title:"Peppermint for Headache Comfort",category:"Headache",icon:"🌿",description:"Some people use diluted peppermint oil externally for temporary headache relief.",fullDescription:"If using peppermint oil topically, it should be appropriately diluted and kept away from the eyes and broken skin. Stop using it if irritation occurs. Severe or unusual headaches require medical attention."},{id:10,title:"Saltwater Gargle",category:"Cold & Throat",icon:"🧂",description:"A warm saltwater gargle can provide temporary relief from throat irritation.",fullDescription:"Dissolve about half a teaspoon of salt in a glass of warm water. Gargle and spit it out rather than swallowing. Seek medical advice if throat symptoms are severe or persistent."}],o=["All","Cold & Throat","Digestive","Skin Care","Headache","Wellness"],c=y.useMemo(()=>a.filter(u=>{const h=n==="All"||u.category===n,p=e.toLowerCase().trim(),x=!p||u.title.toLowerCase().includes(p)||u.description.toLowerCase().includes(p)||u.category.toLowerCase().includes(p);return h&&x}),[e,n]);return l.jsxs("main",{className:"min-h-screen bg-slate-50",children:[l.jsx("section",{className:"px-5 sm:px-8 pt-10 sm:pt-14",children:l.jsx("div",{className:"max-w-[1180px] mx-auto",children:l.jsxs("div",{className:`relative\r
            overflow-hidden\r
            rounded-[28px]\r
            bg-slate-950\r
            px-6\r
            sm:px-10\r
            lg:px-14\r
            py-12\r
            sm:py-16`,children:[l.jsx("div",{className:`absolute\r
              -right-24\r
              -top-24\r
              w-80\r
              h-80\r
              rounded-full\r
              bg-blue-600/10`}),l.jsx("div",{className:`absolute\r
              -left-24\r
              -bottom-32\r
              w-80\r
              h-80\r
              rounded-full\r
              bg-cyan-500/5`}),l.jsxs("div",{className:"relative max-w-3xl",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-500 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                  uppercase\r
                  tracking-[0.2em]\r
                  font-bold\r
                  text-blue-400`,children:"Health Library"})]}),l.jsxs("h1",{className:`text-3xl\r
                sm:text-4xl\r
                lg:text-5xl\r
                font-bold\r
                leading-tight\r
                tracking-tight\r
                text-white`,children:["Everyday health,",l.jsx("span",{className:"block text-blue-400",children:"explained simply."})]}),l.jsx("p",{className:`mt-5\r
                max-w-2xl\r
                text-sm\r
                sm:text-base\r
                leading-7\r
                text-slate-400`,children:"Explore simple self-care ideas for common everyday discomforts. Use this library as general information, not as a substitute for professional medical care."}),l.jsxs("div",{className:`mt-8\r
                max-w-[620px]\r
                relative`,children:[l.jsx("span",{className:`absolute\r
                  left-4\r
                  top-1/2\r
                  -translate-y-1/2\r
                  text-slate-400`,children:"⌕"}),l.jsx("input",{type:"text",value:e,onChange:u=>t(u.target.value),placeholder:"Search headache, cough, skin care...",className:`w-full\r
                  h-13\r
                  py-3\r
                  pl-11\r
                  pr-5\r
                  rounded-2xl\r
                  bg-white\r
                  text-sm\r
                  text-slate-800\r
                  placeholder:text-slate-400\r
                  outline-none\r
                  focus:ring-4\r
                  focus:ring-blue-500/20`})]})]})]})})}),l.jsx("section",{className:"px-5 sm:px-8 pt-6",children:l.jsxs("div",{className:`max-w-[1180px]\r
          mx-auto\r
          flex\r
          items-start\r
          gap-3\r
          p-4\r
          rounded-2xl\r
          bg-amber-50\r
          border\r
          border-amber-100`,children:[l.jsx("span",{className:"text-lg flex-shrink-0",children:"⚠️"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-xs font-bold text-amber-900",children:"Health information notice"}),l.jsx("p",{className:"mt-1 text-[11px] leading-5 text-amber-800",children:"These suggestions are for general self-care information. They are not a diagnosis or a replacement for advice from a qualified healthcare professional. Seek medical attention for severe, persistent or worsening symptoms."})]})]})}),l.jsx("section",{className:"px-5 sm:px-8 py-10 sm:py-14",children:l.jsxs("div",{className:"max-w-[1180px] mx-auto",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[l.jsx("span",{className:"w-7 h-[2px] bg-blue-600 rounded-full"}),l.jsx("span",{className:`text-[10px]\r
                  uppercase\r
                  tracking-[0.18em]\r
                  font-bold\r
                  text-blue-600`,children:"Browse library"})]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-slate-900",children:"Self-care guides"})]}),l.jsxs("p",{className:"text-xs text-slate-400",children:[c.length," ",c.length===1?"guide":"guides"," found"]})]}),l.jsx("div",{className:`flex\r
            gap-2\r
            overflow-x-auto\r
            py-5\r
            scrollbar-thin`,children:o.map(u=>l.jsx("button",{onClick:()=>r(u),className:`
                  flex-shrink-0
                  px-4
                  py-2
                  rounded-full
                  text-xs
                  font-semibold
                  border
                  transition-all
                  ${n===u?"bg-blue-600 border-blue-600 text-white":"bg-white border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-600"}
                `,children:u},u))}),c.length>0?l.jsx("div",{className:`grid\r
              grid-cols-1\r
              sm:grid-cols-2\r
              lg:grid-cols-3\r
              gap-5`,children:c.map(u=>l.jsxs("article",{className:`group\r
                  bg-white\r
                  border\r
                  border-slate-100\r
                  rounded-[24px]\r
                  p-5\r
                  hover:border-blue-100\r
                  hover:-translate-y-1\r
                  hover:shadow-[0_14px_35px_rgba(15,23,42,0.07)]\r
                  transition-all\r
                  duration-300`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("div",{className:`w-12\r
                      h-12\r
                      rounded-2xl\r
                      bg-blue-50\r
                      flex\r
                      items-center\r
                      justify-center\r
                      text-2xl\r
                      group-hover:scale-105\r
                      transition-transform`,children:u.icon}),l.jsx("span",{className:`px-2.5\r
                      py-1\r
                      rounded-full\r
                      bg-slate-50\r
                      text-[9px]\r
                      font-semibold\r
                      text-slate-500`,children:u.category})]}),l.jsx("h3",{className:`mt-5\r
                    text-base\r
                    font-bold\r
                    leading-6\r
                    text-slate-900`,children:u.title}),l.jsx("p",{className:`mt-2\r
                    text-sm\r
                    leading-6\r
                    text-slate-500\r
                    line-clamp-3`,children:u.description}),l.jsxs("div",{className:`flex\r
                    items-center\r
                    justify-between\r
                    mt-5\r
                    pt-4\r
                    border-t\r
                    border-slate-100`,children:[l.jsx("span",{className:`text-[10px]\r
                      text-slate-400`,children:"General information"}),l.jsx("button",{onClick:()=>i(u),className:`text-xs\r
                      font-semibold\r
                      text-blue-600\r
                      hover:text-blue-700`,children:"Read guide →"})]})]},u.id))}):l.jsxs("div",{className:`py-16\r
              text-center\r
              rounded-[24px]\r
              bg-white\r
              border\r
              border-slate-100`,children:[l.jsx("div",{className:`w-14\r
                h-14\r
                mx-auto\r
                rounded-2xl\r
                bg-slate-50\r
                flex\r
                items-center\r
                justify-center\r
                text-xl`,children:"🔎"}),l.jsx("h3",{className:"mt-4 text-base font-bold text-slate-800",children:"No guides found"}),l.jsx("p",{className:"mt-1 text-sm text-slate-500",children:"Try another symptom or category."}),l.jsx("button",{onClick:()=>{t(""),r("All")},className:`mt-5\r
                text-xs\r
                font-semibold\r
                text-blue-600`,children:"Clear filters"})]})]})}),l.jsx("section",{className:"px-5 sm:px-8 pb-14",children:l.jsxs("div",{className:`max-w-[1180px]\r
          mx-auto\r
          rounded-[28px]\r
          bg-blue-600\r
          p-7\r
          sm:p-10\r
          flex\r
          flex-col\r
          md:flex-row\r
          md:items-center\r
          md:justify-between\r
          gap-6`,children:[l.jsxs("div",{children:[l.jsx("p",{className:`text-[10px]\r
              uppercase\r
              tracking-[0.18em]\r
              font-bold\r
              text-blue-200`,children:"Need professional care?"}),l.jsx("h2",{className:`mt-2\r
              text-2xl\r
              sm:text-3xl\r
              font-bold\r
              text-white`,children:"Don't self-treat when you need a doctor."}),l.jsx("p",{className:"mt-2 text-sm text-blue-100",children:"Explore doctors and find a suitable speciality."})]}),l.jsx("a",{href:"/Doctors",className:`w-fit\r
            px-6\r
            py-3\r
            rounded-xl\r
            bg-white\r
            text-blue-600\r
            text-sm\r
            font-semibold\r
            hover:bg-blue-50\r
            transition-colors`,children:"Find a doctor →"})]})}),s&&l.jsx("div",{className:`fixed\r
          inset-0\r
          z-50\r
          bg-slate-950/60\r
          backdrop-blur-sm\r
          flex\r
          items-center\r
          justify-center\r
          p-5`,onClick:()=>i(null),children:l.jsxs("div",{className:`w-full\r
            max-w-[620px]\r
            max-h-[85vh]\r
            overflow-y-auto\r
            bg-white\r
            rounded-[28px]\r
            shadow-2xl`,onClick:u=>u.stopPropagation(),children:[l.jsxs("div",{className:`flex\r
              items-start\r
              justify-between\r
              gap-4\r
              p-6\r
              border-b\r
              border-slate-100`,children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:`w-12\r
                  h-12\r
                  rounded-2xl\r
                  bg-blue-50\r
                  flex\r
                  items-center\r
                  justify-center\r
                  text-2xl`,children:s.icon}),l.jsxs("div",{children:[l.jsx("span",{className:`text-[9px]\r
                    uppercase\r
                    tracking-wider\r
                    font-bold\r
                    text-blue-600`,children:s.category}),l.jsx("h2",{className:`mt-1\r
                    text-lg\r
                    font-bold\r
                    leading-6\r
                    text-slate-900`,children:s.title})]})]}),l.jsx("button",{onClick:()=>i(null),className:`w-9\r
                h-9\r
                rounded-xl\r
                bg-slate-50\r
                text-slate-500\r
                hover:bg-slate-100\r
                flex\r
                items-center\r
                justify-center\r
                flex-shrink-0`,"aria-label":"Close",children:"×"})]}),l.jsxs("div",{className:"p-6",children:[l.jsx("p",{className:`text-sm\r
                leading-7\r
                text-slate-600`,children:s.fullDescription}),l.jsxs("div",{className:`mt-6\r
                p-4\r
                rounded-2xl\r
                bg-amber-50\r
                border\r
                border-amber-100`,children:[l.jsx("p",{className:"text-xs font-bold text-amber-900",children:"When to seek medical care"}),l.jsx("p",{className:`mt-1\r
                  text-[11px]\r
                  leading-5\r
                  text-amber-800`,children:"If symptoms are severe, persistent, suddenly worsen, or you are concerned about your condition, consult a qualified healthcare professional."})]}),l.jsx("button",{onClick:()=>i(null),className:`mt-6\r
                w-full\r
                py-3\r
                rounded-xl\r
                bg-slate-900\r
                text-white\r
                text-sm\r
                font-semibold\r
                hover:bg-blue-600\r
                transition-colors`,children:"Close guide"})]})]})})]})},Lx=()=>l.jsxs("div",{className:"min-h-screen bg-slate-50",children:[l.jsx(vx,{}),l.jsxs(jp,{children:[l.jsx(K,{path:"/",element:l.jsx(Cx,{})}),l.jsx(K,{path:"/doctors",element:l.jsx(Rr,{})}),l.jsx(K,{path:"/Doctors",element:l.jsx(Rr,{})}),l.jsx(K,{path:"/doctors/:speciality",element:l.jsx(Rr,{})}),l.jsx(K,{path:"/Doctors/:speciality",element:l.jsx(Rr,{})}),l.jsx(K,{path:"/appointment/:docId",element:l.jsx(Ex,{})}),l.jsx(K,{path:"/login",element:l.jsx(_x,{})}),l.jsx(K,{path:"/about",element:l.jsx(_o,{})}),l.jsx(K,{path:"/About",element:l.jsx(_o,{})}),l.jsx(K,{path:"/contact",element:l.jsx(Ao,{})}),l.jsx(K,{path:"/Contact",element:l.jsx(Ao,{})}),l.jsx(K,{path:"/my-profile",element:l.jsx(Ax,{})}),l.jsx(K,{path:"/my-appointments",element:l.jsx(Px,{})}),l.jsx(K,{path:"/Ayurveda",element:l.jsx(Po,{})}),l.jsx(K,{path:"/ayurveda",element:l.jsx(Po,{})}),l.jsx(K,{path:"/ayurveda/:id",element:l.jsx(Dx,{})}),l.jsx(K,{path:"/BasicRemedies",element:l.jsx(Do,{})}),l.jsx(K,{path:"/basic-remedies",element:l.jsx(Do,{})})]}),l.jsx(yx,{})]});hs.createRoot(document.getElementById("root")).render(l.jsx(Ho.StrictMode,{children:l.jsx(Ap,{basename:"/medicall",children:l.jsx(bx,{children:l.jsx(Lx,{})})})}));
