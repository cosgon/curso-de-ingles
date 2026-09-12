function gm(e,r){for(var n=0;n<r.length;n++){const a=r[n];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in e)){const o=Object.getOwnPropertyDescriptor(a,t);o&&Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function vm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zl={exports:{}},Rt={},Bl={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ca=Symbol.for("react.element"),ym=Symbol.for("react.portal"),Am=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),wm=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),Tm=Symbol.for("react.context"),km=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Em=Symbol.for("react.memo"),Sm=Symbol.for("react.lazy"),ys=Symbol.iterator;function Om(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var Fl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jl=Object.assign,Vl={};function Pn(e,r,n){this.props=e,this.context=r,this.refs=Vl,this.updater=n||Fl}Pn.prototype.isReactComponent={};Pn.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};Pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gl(){}Gl.prototype=Pn.prototype;function Ai(e,r,n){this.props=e,this.context=r,this.refs=Vl,this.updater=n||Fl}var Pi=Ai.prototype=new Gl;Pi.constructor=Ai;jl(Pi,Pn.prototype);Pi.isPureReactComponent=!0;var As=Array.isArray,Hl=Object.prototype.hasOwnProperty,wi={current:null},$l={key:!0,ref:!0,__self:!0,__source:!0};function Yl(e,r,n){var a,t={},o=null,i=null;if(r!=null)for(a in r.ref!==void 0&&(i=r.ref),r.key!==void 0&&(o=""+r.key),r)Hl.call(r,a)&&!$l.hasOwnProperty(a)&&(t[a]=r[a]);var s=arguments.length-2;if(s===1)t.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];t.children=l}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)t[a]===void 0&&(t[a]=s[a]);return{$$typeof:ca,type:e,key:o,ref:i,props:t,_owner:wi.current}}function bm(e,r){return{$$typeof:ca,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function Ri(e){return typeof e=="object"&&e!==null&&e.$$typeof===ca}function Im(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var Ps=/\/+/g;function Gt(e,r){return typeof e=="object"&&e!==null&&e.key!=null?Im(""+e.key):r.toString(36)}function Wa(e,r,n,a,t){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ca:case ym:i=!0}}if(i)return i=e,t=t(i),e=a===""?"."+Gt(i,0):a,As(t)?(n="",e!=null&&(n=e.replace(Ps,"$&/")+"/"),Wa(t,r,n,"",function(u){return u})):t!=null&&(Ri(t)&&(t=bm(t,n+(!t.key||i&&i.key===t.key?"":(""+t.key).replace(Ps,"$&/")+"/")+e)),r.push(t)),1;if(i=0,a=a===""?".":a+":",As(e))for(var s=0;s<e.length;s++){o=e[s];var l=a+Gt(o,s);i+=Wa(o,r,n,l,t)}else if(l=Om(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=a+Gt(o,s++),i+=Wa(o,r,n,l,t);else if(o==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function ya(e,r,n){if(e==null)return e;var a=[],t=0;return Wa(e,a,"","",function(o){return r.call(n,o,t++)}),a}function xm(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Ma={transition:null},Nm={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Ma,ReactCurrentOwner:wi};function ql(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:ya,forEach:function(e,r,n){ya(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return ya(e,function(){r++}),r},toArray:function(e){return ya(e,function(r){return r})||[]},only:function(e){if(!Ri(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Pn;U.Fragment=Am;U.Profiler=wm;U.PureComponent=Ai;U.StrictMode=Pm;U.Suspense=Cm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nm;U.act=ql;U.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=jl({},e.props),t=e.key,o=e.ref,i=e._owner;if(r!=null){if(r.ref!==void 0&&(o=r.ref,i=wi.current),r.key!==void 0&&(t=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in r)Hl.call(r,l)&&!$l.hasOwnProperty(l)&&(a[l]=r[l]===void 0&&s!==void 0?s[l]:r[l])}var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];a.children=s}return{$$typeof:ca,type:e.type,key:t,ref:o,props:a,_owner:i}};U.createContext=function(e){return e={$$typeof:Tm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rm,_context:e},e.Consumer=e};U.createElement=Yl;U.createFactory=function(e){var r=Yl.bind(null,e);return r.type=e,r};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:km,render:e}};U.isValidElement=Ri;U.lazy=function(e){return{$$typeof:Sm,_payload:{_status:-1,_result:e},_init:xm}};U.memo=function(e,r){return{$$typeof:Em,type:e,compare:r===void 0?null:r}};U.startTransition=function(e){var r=Ma.transition;Ma.transition={};try{e()}finally{Ma.transition=r}};U.unstable_act=ql;U.useCallback=function(e,r){return de.current.useCallback(e,r)};U.useContext=function(e){return de.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return de.current.useDeferredValue(e)};U.useEffect=function(e,r){return de.current.useEffect(e,r)};U.useId=function(){return de.current.useId()};U.useImperativeHandle=function(e,r,n){return de.current.useImperativeHandle(e,r,n)};U.useInsertionEffect=function(e,r){return de.current.useInsertionEffect(e,r)};U.useLayoutEffect=function(e,r){return de.current.useLayoutEffect(e,r)};U.useMemo=function(e,r){return de.current.useMemo(e,r)};U.useReducer=function(e,r,n){return de.current.useReducer(e,r,n)};U.useRef=function(e){return de.current.useRef(e)};U.useState=function(e){return de.current.useState(e)};U.useSyncExternalStore=function(e,r,n){return de.current.useSyncExternalStore(e,r,n)};U.useTransition=function(){return de.current.useTransition()};U.version="18.3.1";Bl.exports=U;var R=Bl.exports;const Ql=vm(R),Um=gm({__proto__:null,default:Ql},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm=R,Lm=Symbol.for("react.element"),_m=Symbol.for("react.fragment"),Wm=Object.prototype.hasOwnProperty,Mm=Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zm={key:!0,ref:!0,__self:!0,__source:!0};function Kl(e,r,n){var a,t={},o=null,i=null;n!==void 0&&(o=""+n),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(i=r.ref);for(a in r)Wm.call(r,a)&&!zm.hasOwnProperty(a)&&(t[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps,r)t[a]===void 0&&(t[a]=r[a]);return{$$typeof:Lm,type:e,key:o,ref:i,props:t,_owner:Mm.current}}Rt.Fragment=_m;Rt.jsx=Kl;Rt.jsxs=Kl;zl.exports=Rt;var f=zl.exports,Po={},Xl={exports:{}},ke={},Jl={exports:{}},Zl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(O,I){var N=O.length;O.push(I);e:for(;0<N;){var H=N-1>>>1,Z=O[H];if(0<t(Z,I))O[H]=I,O[N]=Z,N=H;else break e}}function n(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var I=O[0],N=O.pop();if(N!==I){O[0]=N;e:for(var H=0,Z=O.length,ga=Z>>>1;H<ga;){var Er=2*(H+1)-1,Vt=O[Er],Sr=Er+1,va=O[Sr];if(0>t(Vt,N))Sr<Z&&0>t(va,Vt)?(O[H]=va,O[Sr]=N,H=Sr):(O[H]=Vt,O[Er]=N,H=Er);else if(Sr<Z&&0>t(va,N))O[H]=va,O[Sr]=N,H=Sr;else break e}}return I}function t(O,I){var N=O.sortIndex-I.sortIndex;return N!==0?N:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],h=1,p=null,g=3,y=!1,P=!1,A=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(O){for(var I=n(u);I!==null;){if(I.callback===null)a(u);else if(I.startTime<=O)a(u),I.sortIndex=I.expirationTime,r(l,I);else break;I=n(u)}}function v(O){if(A=!1,d(O),!P)if(n(l)!==null)P=!0,Ge(T);else{var I=n(u);I!==null&&jt(v,I.startTime-O)}}function T(O,I){P=!1,A&&(A=!1,m(b),b=-1),y=!0;var N=g;try{for(d(I),p=n(l);p!==null&&(!(p.expirationTime>I)||O&&!fe());){var H=p.callback;if(typeof H=="function"){p.callback=null,g=p.priorityLevel;var Z=H(p.expirationTime<=I);I=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(l)&&a(l),d(I)}else a(l);p=n(l)}if(p!==null)var ga=!0;else{var Er=n(u);Er!==null&&jt(v,Er.startTime-I),ga=!1}return ga}finally{p=null,g=N,y=!1}}var k=!1,E=null,b=-1,L=5,x=-1;function fe(){return!(e.unstable_now()-x<L)}function nr(){if(E!==null){var O=e.unstable_now();x=O;var I=!0;try{I=E(!0,O)}finally{I?ne():(k=!1,E=null)}}else k=!1}var ne;if(typeof c=="function")ne=function(){c(nr)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=nr,ne=function(){J.postMessage(null)}}else ne=function(){C(nr,0)};function Ge(O){E=O,k||(k=!0,ne())}function jt(O,I){b=C(function(){O(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){P||y||(P=!0,Ge(T))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(O){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var N=g;g=I;try{return O()}finally{g=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=g;g=O;try{return I()}finally{g=N}},e.unstable_scheduleCallback=function(O,I,N){var H=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?H+N:H):N=H,O){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=N+Z,O={id:h++,callback:I,priorityLevel:O,startTime:N,expirationTime:Z,sortIndex:-1},N>H?(O.sortIndex=N,r(u,O),n(l)===null&&O===n(u)&&(A?(m(b),b=-1):A=!0,jt(v,N-H))):(O.sortIndex=Z,r(l,O),P||y||(P=!0,Ge(T))),O},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(O){var I=g;return function(){var N=g;g=I;try{return O.apply(this,arguments)}finally{g=N}}}})(Zl);Jl.exports=Zl;var Bm=Jl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=R,Te=Bm;function w(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eu=new Set,Hn={};function jr(e,r){pn(e,r),pn(e+"Capture",r)}function pn(e,r){for(Hn[e]=r,e=0;e<r.length;e++)eu.add(r[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wo=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ws={},Rs={};function Vm(e){return wo.call(Rs,e)?!0:wo.call(ws,e)?!1:jm.test(e)?Rs[e]=!0:(ws[e]=!0,!1)}function Gm(e,r,n,a){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hm(e,r,n,a){if(r===null||typeof r>"u"||Gm(e,r,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function pe(e,r,n,a,t,o,i){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=t,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=i}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];oe[r]=new pe(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ti=/[\-:]([a-z])/g;function ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(Ti,ki);oe[r]=new pe(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(Ti,ki);oe[r]=new pe(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(Ti,ki);oe[r]=new pe(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ci(e,r,n,a){var t=oe.hasOwnProperty(r)?oe[r]:null;(t!==null?t.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Hm(r,n,t,a)&&(n=null),a||t===null?Vm(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):t.mustUseProperty?e[t.propertyName]=n===null?t.type===3?!1:"":n:(r=t.attributeName,a=t.attributeNamespace,n===null?e.removeAttribute(r):(t=t.type,n=t===3||t===4&&n===!0?"":""+n,a?e.setAttributeNS(a,r,n):e.setAttribute(r,n))))}var er=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),Ei=Symbol.for("react.strict_mode"),Ro=Symbol.for("react.profiler"),ru=Symbol.for("react.provider"),nu=Symbol.for("react.context"),Si=Symbol.for("react.forward_ref"),To=Symbol.for("react.suspense"),ko=Symbol.for("react.suspense_list"),Oi=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),au=Symbol.for("react.offscreen"),Ts=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=Ts&&e[Ts]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Ht;function Nn(e){if(Ht===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Ht=r&&r[1]||""}return`
`+Ht+e}var $t=!1;function Yt(e,r){if(!e||$t)return"";$t=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var a=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){a=u}e.call(r.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var t=u.stack.split(`
`),o=a.stack.split(`
`),i=t.length-1,s=o.length-1;1<=i&&0<=s&&t[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(t[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||t[i]!==o[s]){var l=`
`+t[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{$t=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nn(e):""}function $m(e){switch(e.tag){case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 2:case 15:return e=Yt(e.type,!1),e;case 11:return e=Yt(e.type.render,!1),e;case 1:return e=Yt(e.type,!0),e;default:return""}}function Co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qr:return"Fragment";case qr:return"Portal";case Ro:return"Profiler";case Ei:return"StrictMode";case To:return"Suspense";case ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nu:return(e.displayName||"Context")+".Consumer";case ru:return(e._context.displayName||"Context")+".Provider";case Si:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oi:return r=e.displayName||null,r!==null?r:Co(e.type)||"Memo";case tr:r=e._payload,e=e._init;try{return Co(e(r))}catch{}}return null}function Ym(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Co(r);case 8:return r===Ei?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Pr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tu(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function qm(e){var r=tu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var t=n.get,o=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return t.call(this)},set:function(i){a=""+i,o.call(this,i)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Pa(e){e._valueTracker||(e._valueTracker=qm(e))}function ou(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),a="";return e&&(a=tu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(r.setValue(e),!0):!1}function Ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eo(e,r){var n=r.checked;return V({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ks(e,r){var n=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;n=Pr(r.value!=null?r.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function iu(e,r){r=r.checked,r!=null&&Ci(e,"checked",r,!1)}function So(e,r){iu(e,r);var n=Pr(r.value),a=r.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Oo(e,r.type,n):r.hasOwnProperty("defaultValue")&&Oo(e,r.type,Pr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Cs(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oo(e,r,n){(r!=="number"||Ka(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Un=Array.isArray;function sn(e,r,n,a){if(e=e.options,r){r={};for(var t=0;t<n.length;t++)r["$"+n[t]]=!0;for(n=0;n<e.length;n++)t=r.hasOwnProperty("$"+e[n].value),e[n].selected!==t&&(e[n].selected=t),t&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Pr(n),r=null,t=0;t<e.length;t++){if(e[t].value===n){e[t].selected=!0,a&&(e[t].defaultSelected=!0);return}r!==null||e[t].disabled||(r=e[t])}r!==null&&(r.selected=!0)}}function bo(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(w(91));return V({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Es(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(w(92));if(Un(n)){if(1<n.length)throw Error(w(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Pr(n)}}function su(e,r){var n=Pr(r.value),a=Pr(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function Ss(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Io(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?lu(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wa,uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,a,t){MSApp.execUnsafeLocalFunction(function(){return e(r,n,a,t)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=wa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function $n(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var _n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qm=["Webkit","ms","Moz","O"];Object.keys(_n).forEach(function(e){Qm.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),_n[r]=_n[e]})});function cu(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||_n.hasOwnProperty(e)&&_n[e]?(""+r).trim():r+"px"}function mu(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=n.indexOf("--")===0,t=cu(n,r[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,t):e[n]=t}}var Km=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(e,r){if(r){if(Km[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(w(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(w(61))}if(r.style!=null&&typeof r.style!="object")throw Error(w(62))}}function No(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Do=null,ln=null,un=null;function Os(e){if(e=pa(e)){if(typeof Do!="function")throw Error(w(280));var r=e.stateNode;r&&(r=St(r),Do(e.stateNode,e.type,r))}}function du(e){ln?un?un.push(e):un=[e]:ln=e}function pu(){if(ln){var e=ln,r=un;if(un=ln=null,Os(e),r)for(e=0;e<r.length;e++)Os(r[e])}}function fu(e,r){return e(r)}function hu(){}var qt=!1;function gu(e,r,n){if(qt)return e(r,n);qt=!0;try{return fu(e,r,n)}finally{qt=!1,(ln!==null||un!==null)&&(hu(),pu())}}function Yn(e,r){var n=e.stateNode;if(n===null)return null;var a=St(n);if(a===null)return null;n=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,r,typeof n));return n}var Lo=!1;if(Ke)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{Lo=!1}function Xm(e,r,n,a,t,o,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{r.apply(n,u)}catch(h){this.onError(h)}}var Wn=!1,Xa=null,Ja=!1,_o=null,Jm={onError:function(e){Wn=!0,Xa=e}};function Zm(e,r,n,a,t,o,i,s,l){Wn=!1,Xa=null,Xm.apply(Jm,arguments)}function ed(e,r,n,a,t,o,i,s,l){if(Zm.apply(this,arguments),Wn){if(Wn){var u=Xa;Wn=!1,Xa=null}else throw Error(w(198));Ja||(Ja=!0,_o=u)}}function Vr(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function vu(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function bs(e){if(Vr(e)!==e)throw Error(w(188))}function rd(e){var r=e.alternate;if(!r){if(r=Vr(e),r===null)throw Error(w(188));return r!==e?null:e}for(var n=e,a=r;;){var t=n.return;if(t===null)break;var o=t.alternate;if(o===null){if(a=t.return,a!==null){n=a;continue}break}if(t.child===o.child){for(o=t.child;o;){if(o===n)return bs(t),e;if(o===a)return bs(t),r;o=o.sibling}throw Error(w(188))}if(n.return!==a.return)n=t,a=o;else{for(var i=!1,s=t.child;s;){if(s===n){i=!0,n=t,a=o;break}if(s===a){i=!0,a=t,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,a=t;break}if(s===a){i=!0,a=o,n=t;break}s=s.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==a)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:r}function yu(e){return e=rd(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Au(e);if(r!==null)return r;e=e.sibling}return null}var Pu=Te.unstable_scheduleCallback,Is=Te.unstable_cancelCallback,nd=Te.unstable_shouldYield,ad=Te.unstable_requestPaint,$=Te.unstable_now,td=Te.unstable_getCurrentPriorityLevel,Ii=Te.unstable_ImmediatePriority,wu=Te.unstable_UserBlockingPriority,Za=Te.unstable_NormalPriority,od=Te.unstable_LowPriority,Ru=Te.unstable_IdlePriority,Tt=null,je=null;function id(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Tt,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:ud,sd=Math.log,ld=Math.LN2;function ud(e){return e>>>=0,e===0?32:31-(sd(e)/ld|0)|0}var Ra=64,Ta=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function et(e,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,t=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~t;s!==0?a=Dn(s):(o&=i,o!==0&&(a=Dn(o)))}else i=n&~t,i!==0?a=Dn(i):o!==0&&(a=Dn(o));if(a===0)return 0;if(r!==0&&r!==a&&!(r&t)&&(t=a&-a,o=r&-r,t>=o||t===16&&(o&4194240)!==0))return r;if(a&4&&(a|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)n=31-_e(r),t=1<<n,a|=e[n],r&=~t;return a}function cd(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function md(e,r){for(var n=e.suspendedLanes,a=e.pingedLanes,t=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-_e(o),s=1<<i,l=t[i];l===-1?(!(s&n)||s&a)&&(t[i]=cd(s,r)):l<=r&&(e.expiredLanes|=s),o&=~s}}function Wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tu(){var e=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),e}function Qt(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function ma(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-_e(r),e[r]=n}function dd(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var t=31-_e(n),o=1<<t;r[t]=0,a[t]=-1,e[t]=-1,n&=~o}}function xi(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var a=31-_e(n),t=1<<a;t&r|e[a]&r&&(e[a]|=r),n&=~t}}var _=0;function ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cu,Ni,Eu,Su,Ou,Mo=!1,ka=[],mr=null,dr=null,pr=null,qn=new Map,Qn=new Map,ir=[],pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,r){switch(e){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":qn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(r.pointerId)}}function En(e,r,n,a,t,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[t]},r!==null&&(r=pa(r),r!==null&&Ni(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,t!==null&&r.indexOf(t)===-1&&r.push(t),e)}function fd(e,r,n,a,t){switch(r){case"focusin":return mr=En(mr,e,r,n,a,t),!0;case"dragenter":return dr=En(dr,e,r,n,a,t),!0;case"mouseover":return pr=En(pr,e,r,n,a,t),!0;case"pointerover":var o=t.pointerId;return qn.set(o,En(qn.get(o)||null,e,r,n,a,t)),!0;case"gotpointercapture":return o=t.pointerId,Qn.set(o,En(Qn.get(o)||null,e,r,n,a,t)),!0}return!1}function bu(e){var r=xr(e.target);if(r!==null){var n=Vr(r);if(n!==null){if(r=n.tag,r===13){if(r=vu(n),r!==null){e.blockedOn=r,Ou(e.priority,function(){Eu(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function za(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=zo(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Uo=a,n.target.dispatchEvent(a),Uo=null}else return r=pa(n),r!==null&&Ni(r),e.blockedOn=n,!1;r.shift()}return!0}function Ns(e,r,n){za(e)&&n.delete(r)}function hd(){Mo=!1,mr!==null&&za(mr)&&(mr=null),dr!==null&&za(dr)&&(dr=null),pr!==null&&za(pr)&&(pr=null),qn.forEach(Ns),Qn.forEach(Ns)}function Sn(e,r){e.blockedOn===r&&(e.blockedOn=null,Mo||(Mo=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,hd)))}function Kn(e){function r(t){return Sn(t,e)}if(0<ka.length){Sn(ka[0],e);for(var n=1;n<ka.length;n++){var a=ka[n];a.blockedOn===e&&(a.blockedOn=null)}}for(mr!==null&&Sn(mr,e),dr!==null&&Sn(dr,e),pr!==null&&Sn(pr,e),qn.forEach(r),Qn.forEach(r),n=0;n<ir.length;n++)a=ir[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<ir.length&&(n=ir[0],n.blockedOn===null);)bu(n),n.blockedOn===null&&ir.shift()}var cn=er.ReactCurrentBatchConfig,rt=!0;function gd(e,r,n,a){var t=_,o=cn.transition;cn.transition=null;try{_=1,Ui(e,r,n,a)}finally{_=t,cn.transition=o}}function vd(e,r,n,a){var t=_,o=cn.transition;cn.transition=null;try{_=4,Ui(e,r,n,a)}finally{_=t,cn.transition=o}}function Ui(e,r,n,a){if(rt){var t=zo(e,r,n,a);if(t===null)oo(e,r,a,nt,n),xs(e,a);else if(fd(t,e,r,n,a))a.stopPropagation();else if(xs(e,a),r&4&&-1<pd.indexOf(e)){for(;t!==null;){var o=pa(t);if(o!==null&&Cu(o),o=zo(e,r,n,a),o===null&&oo(e,r,a,nt,n),o===t)break;t=o}t!==null&&a.stopPropagation()}else oo(e,r,a,null,n)}}var nt=null;function zo(e,r,n,a){if(nt=null,e=bi(a),e=xr(e),e!==null)if(r=Vr(e),r===null)e=null;else if(n=r.tag,n===13){if(e=vu(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return nt=e,null}function Iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(td()){case Ii:return 1;case wu:return 4;case Za:case od:return 16;case Ru:return 536870912;default:return 16}default:return 16}}var lr=null,Di=null,Ba=null;function xu(){if(Ba)return Ba;var e,r=Di,n=r.length,a,t="value"in lr?lr.value:lr.textContent,o=t.length;for(e=0;e<n&&r[e]===t[e];e++);var i=n-e;for(a=1;a<=i&&r[n-a]===t[o-a];a++);return Ba=t.slice(e,1<a?1-a:void 0)}function Fa(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ca(){return!0}function Us(){return!1}function Ce(e){function r(n,a,t,o,i){this._reactName=n,this._targetInst=t,this.type=a,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ca:Us,this.isPropagationStopped=Us,this}return V(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),r}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=Ce(wn),da=V({},wn,{view:0,detail:0}),yd=Ce(da),Kt,Xt,On,kt=V({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(Kt=e.screenX-On.screenX,Xt=e.screenY-On.screenY):Xt=Kt=0,On=e),Kt)},movementY:function(e){return"movementY"in e?e.movementY:Xt}}),Ds=Ce(kt),Ad=V({},kt,{dataTransfer:0}),Pd=Ce(Ad),wd=V({},da,{relatedTarget:0}),Jt=Ce(wd),Rd=V({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Td=Ce(Rd),kd=V({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cd=Ce(kd),Ed=V({},wn,{data:0}),Ls=Ce(Ed),Sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Od={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Id(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=bd[e])?!!r[e]:!1}function _i(){return Id}var xd=V({},da,{key:function(e){if(e.key){var r=Sd[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Fa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Od[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_i,charCode:function(e){return e.type==="keypress"?Fa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nd=Ce(xd),Ud=V({},kt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_s=Ce(Ud),Dd=V({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_i}),Ld=Ce(Dd),_d=V({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=Ce(_d),Md=V({},kt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=Ce(Md),Bd=[9,13,27,32],Wi=Ke&&"CompositionEvent"in window,Mn=null;Ke&&"documentMode"in document&&(Mn=document.documentMode);var Fd=Ke&&"TextEvent"in window&&!Mn,Nu=Ke&&(!Wi||Mn&&8<Mn&&11>=Mn),Ws=" ",Ms=!1;function Uu(e,r){switch(e){case"keyup":return Bd.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kr=!1;function jd(e,r){switch(e){case"compositionend":return Du(r);case"keypress":return r.which!==32?null:(Ms=!0,Ws);case"textInput":return e=r.data,e===Ws&&Ms?null:e;default:return null}}function Vd(e,r){if(Kr)return e==="compositionend"||!Wi&&Uu(e,r)?(e=xu(),Ba=Di=lr=null,Kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Nu&&r.locale!=="ko"?null:r.data;default:return null}}var Gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Gd[e.type]:r==="textarea"}function Lu(e,r,n,a){du(a),r=at(r,"onChange"),0<r.length&&(n=new Li("onChange","change",null,n,a),e.push({event:n,listeners:r}))}var zn=null,Xn=null;function Hd(e){$u(e,0)}function Ct(e){var r=Zr(e);if(ou(r))return e}function $d(e,r){if(e==="change")return r}var _u=!1;if(Ke){var Zt;if(Ke){var eo="oninput"in document;if(!eo){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),eo=typeof Bs.oninput=="function"}Zt=eo}else Zt=!1;_u=Zt&&(!document.documentMode||9<document.documentMode)}function Fs(){zn&&(zn.detachEvent("onpropertychange",Wu),Xn=zn=null)}function Wu(e){if(e.propertyName==="value"&&Ct(Xn)){var r=[];Lu(r,Xn,e,bi(e)),gu(Hd,r)}}function Yd(e,r,n){e==="focusin"?(Fs(),zn=r,Xn=n,zn.attachEvent("onpropertychange",Wu)):e==="focusout"&&Fs()}function qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ct(Xn)}function Qd(e,r){if(e==="click")return Ct(r)}function Kd(e,r){if(e==="input"||e==="change")return Ct(r)}function Xd(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Me=typeof Object.is=="function"?Object.is:Xd;function Jn(e,r){if(Me(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var t=n[a];if(!wo.call(r,t)||!Me(e[t],r[t]))return!1}return!0}function js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vs(e,r){var n=js(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=r&&a>=r)return{node:n,offset:r-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=js(n)}}function Mu(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Mu(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function zu(){for(var e=window,r=Ka();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Ka(e.document)}return r}function Mi(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Jd(e){var r=zu(),n=e.focusedElem,a=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(a!==null&&Mi(n)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var t=n.textContent.length,o=Math.min(a.start,t);a=a.end===void 0?o:Math.min(a.end,t),!e.extend&&o>a&&(t=a,a=o,o=t),t=Vs(n,o);var i=Vs(n,a);t&&i&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(r=r.createRange(),r.setStart(t.node,t.offset),e.removeAllRanges(),o>a?(e.addRange(r),e.extend(i.node,i.offset)):(r.setEnd(i.node,i.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zd=Ke&&"documentMode"in document&&11>=document.documentMode,Xr=null,Bo=null,Bn=null,Fo=!1;function Gs(e,r,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fo||Xr==null||Xr!==Ka(a)||(a=Xr,"selectionStart"in a&&Mi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Bn&&Jn(Bn,a)||(Bn=a,a=at(Bo,"onSelect"),0<a.length&&(r=new Li("onSelect","select",null,r,n),e.push({event:r,listeners:a}),r.target=Xr)))}function Ea(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Jr={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},ro={},Bu={};Ke&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Et(e){if(ro[e])return ro[e];if(!Jr[e])return e;var r=Jr[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Bu)return ro[e]=r[n];return e}var Fu=Et("animationend"),ju=Et("animationiteration"),Vu=Et("animationstart"),Gu=Et("transitionend"),Hu=new Map,Hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(e,r){Hu.set(e,r),jr(r,[e])}for(var no=0;no<Hs.length;no++){var ao=Hs[no],ep=ao.toLowerCase(),rp=ao[0].toUpperCase()+ao.slice(1);Rr(ep,"on"+rp)}Rr(Fu,"onAnimationEnd");Rr(ju,"onAnimationIteration");Rr(Vu,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(Gu,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),np=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));function $s(e,r,n){var a=e.type||"unknown-event";e.currentTarget=n,ed(a,r,void 0,e),e.currentTarget=null}function $u(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],t=a.event;a=a.listeners;e:{var o=void 0;if(r)for(var i=a.length-1;0<=i;i--){var s=a[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&t.isPropagationStopped())break e;$s(t,s,u),o=l}else for(i=0;i<a.length;i++){if(s=a[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&t.isPropagationStopped())break e;$s(t,s,u),o=l}}}if(Ja)throw e=_o,Ja=!1,_o=null,e}function M(e,r){var n=r[$o];n===void 0&&(n=r[$o]=new Set);var a=e+"__bubble";n.has(a)||(Yu(r,e,2,!1),n.add(a))}function to(e,r,n){var a=0;r&&(a|=4),Yu(n,e,a,r)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[Sa]){e[Sa]=!0,eu.forEach(function(n){n!=="selectionchange"&&(np.has(n)||to(n,!1,e),to(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Sa]||(r[Sa]=!0,to("selectionchange",!1,r))}}function Yu(e,r,n,a){switch(Iu(r)){case 1:var t=gd;break;case 4:t=vd;break;default:t=Ui}n=t.bind(null,r,n,e),t=void 0,!Lo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(t=!0),a?t!==void 0?e.addEventListener(r,n,{capture:!0,passive:t}):e.addEventListener(r,n,!0):t!==void 0?e.addEventListener(r,n,{passive:t}):e.addEventListener(r,n,!1)}function oo(e,r,n,a,t){var o=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var s=a.stateNode.containerInfo;if(s===t||s.nodeType===8&&s.parentNode===t)break;if(i===4)for(i=a.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===t||l.nodeType===8&&l.parentNode===t))return;i=i.return}for(;s!==null;){if(i=xr(s),i===null)return;if(l=i.tag,l===5||l===6){a=o=i;continue e}s=s.parentNode}}a=a.return}gu(function(){var u=o,h=bi(n),p=[];e:{var g=Hu.get(e);if(g!==void 0){var y=Li,P=e;switch(e){case"keypress":if(Fa(n)===0)break e;case"keydown":case"keyup":y=Nd;break;case"focusin":P="focus",y=Jt;break;case"focusout":P="blur",y=Jt;break;case"beforeblur":case"afterblur":y=Jt;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ld;break;case Fu:case ju:case Vu:y=Td;break;case Gu:y=Wd;break;case"scroll":y=yd;break;case"wheel":y=zd;break;case"copy":case"cut":case"paste":y=Cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_s}var A=(r&4)!==0,C=!A&&e==="scroll",m=A?g!==null?g+"Capture":null:g;A=[];for(var c=u,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,m!==null&&(v=Yn(c,m),v!=null&&A.push(ea(c,v,d)))),C)break;c=c.return}0<A.length&&(g=new y(g,P,null,n,h),p.push({event:g,listeners:A}))}}if(!(r&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Uo&&(P=n.relatedTarget||n.fromElement)&&(xr(P)||P[Xe]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(P=n.relatedTarget||n.toElement,y=u,P=P?xr(P):null,P!==null&&(C=Vr(P),P!==C||P.tag!==5&&P.tag!==6)&&(P=null)):(y=null,P=u),y!==P)){if(A=Ds,v="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(A=_s,v="onPointerLeave",m="onPointerEnter",c="pointer"),C=y==null?g:Zr(y),d=P==null?g:Zr(P),g=new A(v,c+"leave",y,n,h),g.target=C,g.relatedTarget=d,v=null,xr(h)===u&&(A=new A(m,c+"enter",P,n,h),A.target=d,A.relatedTarget=C,v=A),C=v,y&&P)r:{for(A=y,m=P,c=0,d=A;d;d=Hr(d))c++;for(d=0,v=m;v;v=Hr(v))d++;for(;0<c-d;)A=Hr(A),c--;for(;0<d-c;)m=Hr(m),d--;for(;c--;){if(A===m||m!==null&&A===m.alternate)break r;A=Hr(A),m=Hr(m)}A=null}else A=null;y!==null&&Ys(p,g,y,A,!1),P!==null&&C!==null&&Ys(p,C,P,A,!0)}}e:{if(g=u?Zr(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var T=$d;else if(zs(g))if(_u)T=Kd;else{T=qd;var k=Yd}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=Qd);if(T&&(T=T(e,u))){Lu(p,T,n,h);break e}k&&k(e,g,u),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&Oo(g,"number",g.value)}switch(k=u?Zr(u):window,e){case"focusin":(zs(k)||k.contentEditable==="true")&&(Xr=k,Bo=u,Bn=null);break;case"focusout":Bn=Bo=Xr=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,Gs(p,n,h);break;case"selectionchange":if(Zd)break;case"keydown":case"keyup":Gs(p,n,h)}var E;if(Wi)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Kr?Uu(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Nu&&n.locale!=="ko"&&(Kr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Kr&&(E=xu()):(lr=h,Di="value"in lr?lr.value:lr.textContent,Kr=!0)),k=at(u,b),0<k.length&&(b=new Ls(b,e,null,n,h),p.push({event:b,listeners:k}),E?b.data=E:(E=Du(n),E!==null&&(b.data=E)))),(E=Fd?jd(e,n):Vd(e,n))&&(u=at(u,"onBeforeInput"),0<u.length&&(h=new Ls("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=E))}$u(p,r)})}function ea(e,r,n){return{instance:e,listener:r,currentTarget:n}}function at(e,r){for(var n=r+"Capture",a=[];e!==null;){var t=e,o=t.stateNode;t.tag===5&&o!==null&&(t=o,o=Yn(e,n),o!=null&&a.unshift(ea(e,o,t)),o=Yn(e,r),o!=null&&a.push(ea(e,o,t))),e=e.return}return a}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,r,n,a,t){for(var o=r._reactName,i=[];n!==null&&n!==a;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===a)break;s.tag===5&&u!==null&&(s=u,t?(l=Yn(n,o),l!=null&&i.unshift(ea(n,l,s))):t||(l=Yn(n,o),l!=null&&i.push(ea(n,l,s)))),n=n.return}i.length!==0&&e.push({event:r,listeners:i})}var ap=/\r\n?/g,tp=/\u0000|\uFFFD/g;function qs(e){return(typeof e=="string"?e:""+e).replace(ap,`
`).replace(tp,"")}function Oa(e,r,n){if(r=qs(r),qs(e)!==r&&n)throw Error(w(425))}function tt(){}var jo=null,Vo=null;function Go(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ho=typeof setTimeout=="function"?setTimeout:void 0,op=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,ip=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(e){return Qs.resolve(null).then(e).catch(sp)}:Ho;function sp(e){setTimeout(function(){throw e})}function io(e,r){var n=r,a=0;do{var t=n.nextSibling;if(e.removeChild(n),t&&t.nodeType===8)if(n=t.data,n==="/$"){if(a===0){e.removeChild(t),Kn(r);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=t}while(n);Kn(r)}function fr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+Rn,ra="__reactProps$"+Rn,Xe="__reactContainer$"+Rn,$o="__reactEvents$"+Rn,lp="__reactListeners$"+Rn,up="__reactHandles$"+Rn;function xr(e){var r=e[Fe];if(r)return r;for(var n=e.parentNode;n;){if(r=n[Xe]||n[Fe]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=Ks(e);e!==null;){if(n=e[Fe])return n;e=Ks(e)}return r}e=n,n=e.parentNode}return null}function pa(e){return e=e[Fe]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function St(e){return e[ra]||null}var Yo=[],en=-1;function Tr(e){return{current:e}}function z(e){0>en||(e.current=Yo[en],Yo[en]=null,en--)}function W(e,r){en++,Yo[en]=e.current,e.current=r}var wr={},ue=Tr(wr),ve=Tr(!1),_r=wr;function fn(e,r){var n=e.type.contextTypes;if(!n)return wr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var t={},o;for(o in n)t[o]=r[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=t),t}function ye(e){return e=e.childContextTypes,e!=null}function ot(){z(ve),z(ue)}function Xs(e,r,n){if(ue.current!==wr)throw Error(w(168));W(ue,r),W(ve,n)}function qu(e,r,n){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var t in a)if(!(t in r))throw Error(w(108,Ym(e)||"Unknown",t));return V({},n,a)}function it(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wr,_r=ue.current,W(ue,e),W(ve,ve.current),!0}function Js(e,r,n){var a=e.stateNode;if(!a)throw Error(w(169));n?(e=qu(e,r,_r),a.__reactInternalMemoizedMergedChildContext=e,z(ve),z(ue),W(ue,e)):z(ve),W(ve,n)}var $e=null,Ot=!1,so=!1;function Qu(e){$e===null?$e=[e]:$e.push(e)}function cp(e){Ot=!0,Qu(e)}function kr(){if(!so&&$e!==null){so=!0;var e=0,r=_;try{var n=$e;for(_=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}$e=null,Ot=!1}catch(t){throw $e!==null&&($e=$e.slice(e+1)),Pu(Ii,kr),t}finally{_=r,so=!1}}return null}var rn=[],nn=0,st=null,lt=0,Ee=[],Se=0,Wr=null,Ye=1,qe="";function Or(e,r){rn[nn++]=lt,rn[nn++]=st,st=e,lt=r}function Ku(e,r,n){Ee[Se++]=Ye,Ee[Se++]=qe,Ee[Se++]=Wr,Wr=e;var a=Ye;e=qe;var t=32-_e(a)-1;a&=~(1<<t),n+=1;var o=32-_e(r)+t;if(30<o){var i=t-t%5;o=(a&(1<<i)-1).toString(32),a>>=i,t-=i,Ye=1<<32-_e(r)+t|n<<t|a,qe=o+e}else Ye=1<<o|n<<t|a,qe=e}function zi(e){e.return!==null&&(Or(e,1),Ku(e,1,0))}function Bi(e){for(;e===st;)st=rn[--nn],rn[nn]=null,lt=rn[--nn],rn[nn]=null;for(;e===Wr;)Wr=Ee[--Se],Ee[Se]=null,qe=Ee[--Se],Ee[Se]=null,Ye=Ee[--Se],Ee[Se]=null}var Re=null,we=null,B=!1,Le=null;function Xu(e,r){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Zs(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Re=e,we=fr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Re=e,we=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Wr!==null?{id:Ye,overflow:qe}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Re=e,we=null,!0):!1;default:return!1}}function qo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qo(e){if(B){var r=we;if(r){var n=r;if(!Zs(e,r)){if(qo(e))throw Error(w(418));r=fr(n.nextSibling);var a=Re;r&&Zs(e,r)?Xu(a,n):(e.flags=e.flags&-4097|2,B=!1,Re=e)}}else{if(qo(e))throw Error(w(418));e.flags=e.flags&-4097|2,B=!1,Re=e}}}function el(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function ba(e){if(e!==Re)return!1;if(!B)return el(e),B=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Go(e.type,e.memoizedProps)),r&&(r=we)){if(qo(e))throw Ju(),Error(w(418));for(;r;)Xu(e,r),r=fr(r.nextSibling)}if(el(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){we=fr(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}we=null}}else we=Re?fr(e.stateNode.nextSibling):null;return!0}function Ju(){for(var e=we;e;)e=fr(e.nextSibling)}function hn(){we=Re=null,B=!1}function Fi(e){Le===null?Le=[e]:Le.push(e)}var mp=er.ReactCurrentBatchConfig;function bn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var a=n.stateNode}if(!a)throw Error(w(147,e));var t=a,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(i){var s=t.refs;i===null?delete s[o]:s[o]=i},r._stringRef=o,r)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Ia(e,r){throw e=Object.prototype.toString.call(r),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function rl(e){var r=e._init;return r(e._payload)}function Zu(e){function r(m,c){if(e){var d=m.deletions;d===null?(m.deletions=[c],m.flags|=16):d.push(c)}}function n(m,c){if(!e)return null;for(;c!==null;)r(m,c),c=c.sibling;return null}function a(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function t(m,c){return m=yr(m,c),m.index=0,m.sibling=null,m}function o(m,c,d){return m.index=d,e?(d=m.alternate,d!==null?(d=d.index,d<c?(m.flags|=2,c):d):(m.flags|=2,c)):(m.flags|=1048576,c)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,c,d,v){return c===null||c.tag!==6?(c=ho(d,m.mode,v),c.return=m,c):(c=t(c,d),c.return=m,c)}function l(m,c,d,v){var T=d.type;return T===Qr?h(m,c,d.props.children,v,d.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===tr&&rl(T)===c.type)?(v=t(c,d.props),v.ref=bn(m,c,d),v.return=m,v):(v=qa(d.type,d.key,d.props,null,m.mode,v),v.ref=bn(m,c,d),v.return=m,v)}function u(m,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=go(d,m.mode,v),c.return=m,c):(c=t(c,d.children||[]),c.return=m,c)}function h(m,c,d,v,T){return c===null||c.tag!==7?(c=Lr(d,m.mode,v,T),c.return=m,c):(c=t(c,d),c.return=m,c)}function p(m,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ho(""+c,m.mode,d),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Aa:return d=qa(c.type,c.key,c.props,null,m.mode,d),d.ref=bn(m,null,c),d.return=m,d;case qr:return c=go(c,m.mode,d),c.return=m,c;case tr:var v=c._init;return p(m,v(c._payload),d)}if(Un(c)||kn(c))return c=Lr(c,m.mode,d,null),c.return=m,c;Ia(m,c)}return null}function g(m,c,d,v){var T=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return T!==null?null:s(m,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Aa:return d.key===T?l(m,c,d,v):null;case qr:return d.key===T?u(m,c,d,v):null;case tr:return T=d._init,g(m,c,T(d._payload),v)}if(Un(d)||kn(d))return T!==null?null:h(m,c,d,v,null);Ia(m,d)}return null}function y(m,c,d,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(d)||null,s(c,m,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Aa:return m=m.get(v.key===null?d:v.key)||null,l(c,m,v,T);case qr:return m=m.get(v.key===null?d:v.key)||null,u(c,m,v,T);case tr:var k=v._init;return y(m,c,d,k(v._payload),T)}if(Un(v)||kn(v))return m=m.get(d)||null,h(c,m,v,T,null);Ia(c,v)}return null}function P(m,c,d,v){for(var T=null,k=null,E=c,b=c=0,L=null;E!==null&&b<d.length;b++){E.index>b?(L=E,E=null):L=E.sibling;var x=g(m,E,d[b],v);if(x===null){E===null&&(E=L);break}e&&E&&x.alternate===null&&r(m,E),c=o(x,c,b),k===null?T=x:k.sibling=x,k=x,E=L}if(b===d.length)return n(m,E),B&&Or(m,b),T;if(E===null){for(;b<d.length;b++)E=p(m,d[b],v),E!==null&&(c=o(E,c,b),k===null?T=E:k.sibling=E,k=E);return B&&Or(m,b),T}for(E=a(m,E);b<d.length;b++)L=y(E,m,b,d[b],v),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?b:L.key),c=o(L,c,b),k===null?T=L:k.sibling=L,k=L);return e&&E.forEach(function(fe){return r(m,fe)}),B&&Or(m,b),T}function A(m,c,d,v){var T=kn(d);if(typeof T!="function")throw Error(w(150));if(d=T.call(d),d==null)throw Error(w(151));for(var k=T=null,E=c,b=c=0,L=null,x=d.next();E!==null&&!x.done;b++,x=d.next()){E.index>b?(L=E,E=null):L=E.sibling;var fe=g(m,E,x.value,v);if(fe===null){E===null&&(E=L);break}e&&E&&fe.alternate===null&&r(m,E),c=o(fe,c,b),k===null?T=fe:k.sibling=fe,k=fe,E=L}if(x.done)return n(m,E),B&&Or(m,b),T;if(E===null){for(;!x.done;b++,x=d.next())x=p(m,x.value,v),x!==null&&(c=o(x,c,b),k===null?T=x:k.sibling=x,k=x);return B&&Or(m,b),T}for(E=a(m,E);!x.done;b++,x=d.next())x=y(E,m,b,x.value,v),x!==null&&(e&&x.alternate!==null&&E.delete(x.key===null?b:x.key),c=o(x,c,b),k===null?T=x:k.sibling=x,k=x);return e&&E.forEach(function(nr){return r(m,nr)}),B&&Or(m,b),T}function C(m,c,d,v){if(typeof d=="object"&&d!==null&&d.type===Qr&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Aa:e:{for(var T=d.key,k=c;k!==null;){if(k.key===T){if(T=d.type,T===Qr){if(k.tag===7){n(m,k.sibling),c=t(k,d.props.children),c.return=m,m=c;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===tr&&rl(T)===k.type){n(m,k.sibling),c=t(k,d.props),c.ref=bn(m,k,d),c.return=m,m=c;break e}n(m,k);break}else r(m,k);k=k.sibling}d.type===Qr?(c=Lr(d.props.children,m.mode,v,d.key),c.return=m,m=c):(v=qa(d.type,d.key,d.props,null,m.mode,v),v.ref=bn(m,c,d),v.return=m,m=v)}return i(m);case qr:e:{for(k=d.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(m,c.sibling),c=t(c,d.children||[]),c.return=m,m=c;break e}else{n(m,c);break}else r(m,c);c=c.sibling}c=go(d,m.mode,v),c.return=m,m=c}return i(m);case tr:return k=d._init,C(m,c,k(d._payload),v)}if(Un(d))return P(m,c,d,v);if(kn(d))return A(m,c,d,v);Ia(m,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(m,c.sibling),c=t(c,d),c.return=m,m=c):(n(m,c),c=ho(d,m.mode,v),c.return=m,m=c),i(m)):n(m,c)}return C}var gn=Zu(!0),ec=Zu(!1),ut=Tr(null),ct=null,an=null,ji=null;function Vi(){ji=an=ct=null}function Gi(e){var r=ut.current;z(ut),e._currentValue=r}function Ko(e,r,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===n)break;e=e.return}}function mn(e,r){ct=e,ji=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(ge=!0),e.firstContext=null)}function Ie(e){var r=e._currentValue;if(ji!==e)if(e={context:e,memoizedValue:r,next:null},an===null){if(ct===null)throw Error(w(308));an=e,ct.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return r}var Nr=null;function Hi(e){Nr===null?Nr=[e]:Nr.push(e)}function rc(e,r,n,a){var t=r.interleaved;return t===null?(n.next=n,Hi(r)):(n.next=t.next,t.next=n),r.interleaved=n,Je(e,a)}function Je(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var or=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function hr(e,r,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,D&2){var t=a.pending;return t===null?r.next=r:(r.next=t.next,t.next=r),a.pending=r,Je(e,n)}return t=a.interleaved,t===null?(r.next=r,Hi(a)):(r.next=t.next,t.next=r),a.interleaved=r,Je(e,n)}function ja(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,xi(e,n)}}function nl(e,r){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var t=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?t=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?t=o=r:o=o.next=r}else t=o=r;n={baseState:a.baseState,firstBaseUpdate:t,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function mt(e,r,n,a){var t=e.updateQueue;or=!1;var o=t.firstBaseUpdate,i=t.lastBaseUpdate,s=t.shared.pending;if(s!==null){t.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?o=u:i.next=u,i=l;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=l))}if(o!==null){var p=t.baseState;i=0,h=u=l=null,s=o;do{var g=s.lane,y=s.eventTime;if((a&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var P=e,A=s;switch(g=r,y=n,A.tag){case 1:if(P=A.payload,typeof P=="function"){p=P.call(y,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=A.payload,g=typeof P=="function"?P.call(y,p,g):P,g==null)break e;p=V({},p,g);break e;case 2:or=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=t.effects,g===null?t.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=y,l=p):h=h.next=y,i|=g;if(s=s.next,s===null){if(s=t.shared.pending,s===null)break;g=s,s=g.next,g.next=null,t.lastBaseUpdate=g,t.shared.pending=null}}while(!0);if(h===null&&(l=p),t.baseState=l,t.firstBaseUpdate=u,t.lastBaseUpdate=h,r=t.shared.interleaved,r!==null){t=r;do i|=t.lane,t=t.next;while(t!==r)}else o===null&&(t.shared.lanes=0);zr|=i,e.lanes=i,e.memoizedState=p}}function al(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],t=a.callback;if(t!==null){if(a.callback=null,a=n,typeof t!="function")throw Error(w(191,t));t.call(a)}}}var fa={},Ve=Tr(fa),na=Tr(fa),aa=Tr(fa);function Ur(e){if(e===fa)throw Error(w(174));return e}function Yi(e,r){switch(W(aa,r),W(na,e),W(Ve,fa),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Io(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Io(r,e)}z(Ve),W(Ve,r)}function vn(){z(Ve),z(na),z(aa)}function ac(e){Ur(aa.current);var r=Ur(Ve.current),n=Io(r,e.type);r!==n&&(W(na,e),W(Ve,n))}function qi(e){na.current===e&&(z(Ve),z(na))}var F=Tr(0);function dt(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var lo=[];function Qi(){for(var e=0;e<lo.length;e++)lo[e]._workInProgressVersionPrimary=null;lo.length=0}var Va=er.ReactCurrentDispatcher,uo=er.ReactCurrentBatchConfig,Mr=0,j=null,K=null,ee=null,pt=!1,Fn=!1,ta=0,dp=0;function ie(){throw Error(w(321))}function Ki(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Me(e[n],r[n]))return!1;return!0}function Xi(e,r,n,a,t,o){if(Mr=o,j=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Va.current=e===null||e.memoizedState===null?gp:vp,e=n(a,t),Fn){o=0;do{if(Fn=!1,ta=0,25<=o)throw Error(w(301));o+=1,ee=K=null,r.updateQueue=null,Va.current=yp,e=n(a,t)}while(Fn)}if(Va.current=ft,r=K!==null&&K.next!==null,Mr=0,ee=K=j=null,pt=!1,r)throw Error(w(300));return e}function Ji(){var e=ta!==0;return ta=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?j.memoizedState=ee=e:ee=ee.next=e,ee}function xe(){if(K===null){var e=j.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var r=ee===null?j.memoizedState:ee.next;if(r!==null)ee=r,K=e;else{if(e===null)throw Error(w(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?j.memoizedState=ee=e:ee=ee.next=e}return ee}function oa(e,r){return typeof r=="function"?r(e):r}function co(e){var r=xe(),n=r.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var a=K,t=a.baseQueue,o=n.pending;if(o!==null){if(t!==null){var i=t.next;t.next=o.next,o.next=i}a.baseQueue=t=o,n.pending=null}if(t!==null){o=t.next,a=a.baseState;var s=i=null,l=null,u=o;do{var h=u.lane;if((Mr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,i=a):l=l.next=p,j.lanes|=h,zr|=h}u=u.next}while(u!==null&&u!==o);l===null?i=a:l.next=s,Me(a,r.memoizedState)||(ge=!0),r.memoizedState=a,r.baseState=i,r.baseQueue=l,n.lastRenderedState=a}if(e=n.interleaved,e!==null){t=e;do o=t.lane,j.lanes|=o,zr|=o,t=t.next;while(t!==e)}else t===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function mo(e){var r=xe(),n=r.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var a=n.dispatch,t=n.pending,o=r.memoizedState;if(t!==null){n.pending=null;var i=t=t.next;do o=e(o,i.action),i=i.next;while(i!==t);Me(o,r.memoizedState)||(ge=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),n.lastRenderedState=o}return[o,a]}function tc(){}function oc(e,r){var n=j,a=xe(),t=r(),o=!Me(a.memoizedState,t);if(o&&(a.memoizedState=t,ge=!0),a=a.queue,Zi(lc.bind(null,n,a,e),[e]),a.getSnapshot!==r||o||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,ia(9,sc.bind(null,n,a,t,r),void 0,null),re===null)throw Error(w(349));Mr&30||ic(n,r,t)}return t}function ic(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=j.updateQueue,r===null?(r={lastEffect:null,stores:null},j.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function sc(e,r,n,a){r.value=n,r.getSnapshot=a,uc(r)&&cc(e)}function lc(e,r,n){return n(function(){uc(r)&&cc(e)})}function uc(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Me(e,n)}catch{return!0}}function cc(e){var r=Je(e,1);r!==null&&We(r,e,1,-1)}function tl(e){var r=Be();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},r.queue=e,e=e.dispatch=hp.bind(null,j,e),[r.memoizedState,e]}function ia(e,r,n,a){return e={tag:e,create:r,destroy:n,deps:a,next:null},r=j.updateQueue,r===null?(r={lastEffect:null,stores:null},j.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,r.lastEffect=e)),e}function mc(){return xe().memoizedState}function Ga(e,r,n,a){var t=Be();j.flags|=e,t.memoizedState=ia(1|r,n,void 0,a===void 0?null:a)}function bt(e,r,n,a){var t=xe();a=a===void 0?null:a;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,a!==null&&Ki(a,i.deps)){t.memoizedState=ia(r,n,o,a);return}}j.flags|=e,t.memoizedState=ia(1|r,n,o,a)}function ol(e,r){return Ga(8390656,8,e,r)}function Zi(e,r){return bt(2048,8,e,r)}function dc(e,r){return bt(4,2,e,r)}function pc(e,r){return bt(4,4,e,r)}function fc(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function hc(e,r,n){return n=n!=null?n.concat([e]):null,bt(4,4,fc.bind(null,r,e),n)}function es(){}function gc(e,r){var n=xe();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Ki(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function vc(e,r){var n=xe();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Ki(r,a[1])?a[0]:(e=e(),n.memoizedState=[e,r],e)}function yc(e,r,n){return Mr&21?(Me(n,r)||(n=Tu(),j.lanes|=n,zr|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function pp(e,r){var n=_;_=n!==0&&4>n?n:4,e(!0);var a=uo.transition;uo.transition={};try{e(!1),r()}finally{_=n,uo.transition=a}}function Ac(){return xe().memoizedState}function fp(e,r,n){var a=vr(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},Pc(e))wc(r,n);else if(n=rc(e,r,n,a),n!==null){var t=me();We(n,e,a,t),Rc(n,r,a)}}function hp(e,r,n){var a=vr(e),t={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))wc(r,t);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var i=r.lastRenderedState,s=o(i,n);if(t.hasEagerState=!0,t.eagerState=s,Me(s,i)){var l=r.interleaved;l===null?(t.next=t,Hi(r)):(t.next=l.next,l.next=t),r.interleaved=t;return}}catch{}finally{}n=rc(e,r,t,a),n!==null&&(t=me(),We(n,e,a,t),Rc(n,r,a))}}function Pc(e){var r=e.alternate;return e===j||r!==null&&r===j}function wc(e,r){Fn=pt=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function Rc(e,r,n){if(n&4194240){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,xi(e,n)}}var ft={readContext:Ie,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},gp={readContext:Ie,useCallback:function(e,r){return Be().memoizedState=[e,r===void 0?null:r],e},useContext:Ie,useEffect:ol,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Ga(4194308,4,fc.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Ga(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ga(4,2,e,r)},useMemo:function(e,r){var n=Be();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var a=Be();return r=n!==void 0?n(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=fp.bind(null,j,e),[a.memoizedState,e]},useRef:function(e){var r=Be();return e={current:e},r.memoizedState=e},useState:tl,useDebugValue:es,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=tl(!1),r=e[0];return e=pp.bind(null,e[1]),Be().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var a=j,t=Be();if(B){if(n===void 0)throw Error(w(407));n=n()}else{if(n=r(),re===null)throw Error(w(349));Mr&30||ic(a,r,n)}t.memoizedState=n;var o={value:n,getSnapshot:r};return t.queue=o,ol(lc.bind(null,a,o,e),[e]),a.flags|=2048,ia(9,sc.bind(null,a,o,n,r),void 0,null),n},useId:function(){var e=Be(),r=re.identifierPrefix;if(B){var n=qe,a=Ye;n=(a&~(1<<32-_e(a)-1)).toString(32)+n,r=":"+r+"R"+n,n=ta++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=dp++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},vp={readContext:Ie,useCallback:gc,useContext:Ie,useEffect:Zi,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:vc,useReducer:co,useRef:mc,useState:function(){return co(oa)},useDebugValue:es,useDeferredValue:function(e){var r=xe();return yc(r,K.memoizedState,e)},useTransition:function(){var e=co(oa)[0],r=xe().memoizedState;return[e,r]},useMutableSource:tc,useSyncExternalStore:oc,useId:Ac,unstable_isNewReconciler:!1},yp={readContext:Ie,useCallback:gc,useContext:Ie,useEffect:Zi,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:vc,useReducer:mo,useRef:mc,useState:function(){return mo(oa)},useDebugValue:es,useDeferredValue:function(e){var r=xe();return K===null?r.memoizedState=e:yc(r,K.memoizedState,e)},useTransition:function(){var e=mo(oa)[0],r=xe().memoizedState;return[e,r]},useMutableSource:tc,useSyncExternalStore:oc,useId:Ac,unstable_isNewReconciler:!1};function Ue(e,r){if(e&&e.defaultProps){r=V({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Xo(e,r,n,a){r=e.memoizedState,n=n(a,r),n=n==null?r:V({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var It={isMounted:function(e){return(e=e._reactInternals)?Vr(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var a=me(),t=vr(e),o=Qe(a,t);o.payload=r,n!=null&&(o.callback=n),r=hr(e,o,t),r!==null&&(We(r,e,t,a),ja(r,e,t))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var a=me(),t=vr(e),o=Qe(a,t);o.tag=1,o.payload=r,n!=null&&(o.callback=n),r=hr(e,o,t),r!==null&&(We(r,e,t,a),ja(r,e,t))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=me(),a=vr(e),t=Qe(n,a);t.tag=2,r!=null&&(t.callback=r),r=hr(e,t,a),r!==null&&(We(r,e,a,n),ja(r,e,a))}};function il(e,r,n,a,t,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,i):r.prototype&&r.prototype.isPureReactComponent?!Jn(n,a)||!Jn(t,o):!0}function Tc(e,r,n){var a=!1,t=wr,o=r.contextType;return typeof o=="object"&&o!==null?o=Ie(o):(t=ye(r)?_r:ue.current,a=r.contextTypes,o=(a=a!=null)?fn(e,t):wr),r=new r(n,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=It,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),r}function sl(e,r,n,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,a),r.state!==e&&It.enqueueReplaceState(r,r.state,null)}function Jo(e,r,n,a){var t=e.stateNode;t.props=n,t.state=e.memoizedState,t.refs={},$i(e);var o=r.contextType;typeof o=="object"&&o!==null?t.context=Ie(o):(o=ye(r)?_r:ue.current,t.context=fn(e,o)),t.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(Xo(e,r,o,n),t.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(r=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),r!==t.state&&It.enqueueReplaceState(t,t.state,null),mt(e,n,t,a),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function yn(e,r){try{var n="",a=r;do n+=$m(a),a=a.return;while(a);var t=n}catch(o){t=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:t,digest:null}}function po(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Zo(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var Ap=typeof WeakMap=="function"?WeakMap:Map;function kc(e,r,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var a=r.value;return n.callback=function(){gt||(gt=!0,ui=a),Zo(e,r)},n}function Cc(e,r,n){n=Qe(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var t=r.value;n.payload=function(){return a(t)},n.callback=function(){Zo(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Zo(e,r),typeof a!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var i=r.stack;this.componentDidCatch(r.value,{componentStack:i!==null?i:""})}),n}function ll(e,r,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Ap;var t=new Set;a.set(r,t)}else t=a.get(r),t===void 0&&(t=new Set,a.set(r,t));t.has(n)||(t.add(n),e=Up.bind(null,e,r,n),r.then(e,e))}function ul(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function cl(e,r,n,a,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Qe(-1,1),r.tag=2,hr(n,r,1))),n.lanes|=1),e)}var Pp=er.ReactCurrentOwner,ge=!1;function ce(e,r,n,a){r.child=e===null?ec(r,null,n,a):gn(r,e.child,n,a)}function ml(e,r,n,a,t){n=n.render;var o=r.ref;return mn(r,t),a=Xi(e,r,n,a,o,t),n=Ji(),e!==null&&!ge?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~t,Ze(e,r,t)):(B&&n&&zi(r),r.flags|=1,ce(e,r,a,t),r.child)}function dl(e,r,n,a,t){if(e===null){var o=n.type;return typeof o=="function"&&!ls(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=o,Ec(e,r,o,a,t)):(e=qa(n.type,null,a,r,r.mode,t),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,!(e.lanes&t)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(i,a)&&e.ref===r.ref)return Ze(e,r,t)}return r.flags|=1,e=yr(o,a),e.ref=r.ref,e.return=r,r.child=e}function Ec(e,r,n,a,t){if(e!==null){var o=e.memoizedProps;if(Jn(o,a)&&e.ref===r.ref)if(ge=!1,r.pendingProps=a=o,(e.lanes&t)!==0)e.flags&131072&&(ge=!0);else return r.lanes=e.lanes,Ze(e,r,t)}return ei(e,r,n,a,t)}function Sc(e,r,n){var a=r.pendingProps,t=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(on,Pe),Pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,W(on,Pe),Pe|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:n,W(on,Pe),Pe|=a}else o!==null?(a=o.baseLanes|n,r.memoizedState=null):a=n,W(on,Pe),Pe|=a;return ce(e,r,t,n),r.child}function Oc(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function ei(e,r,n,a,t){var o=ye(n)?_r:ue.current;return o=fn(r,o),mn(r,t),n=Xi(e,r,n,a,o,t),a=Ji(),e!==null&&!ge?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~t,Ze(e,r,t)):(B&&a&&zi(r),r.flags|=1,ce(e,r,n,t),r.child)}function pl(e,r,n,a,t){if(ye(n)){var o=!0;it(r)}else o=!1;if(mn(r,t),r.stateNode===null)Ha(e,r),Tc(r,n,a),Jo(r,n,a,t),a=!0;else if(e===null){var i=r.stateNode,s=r.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ie(u):(u=ye(n)?_r:ue.current,u=fn(r,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==a||l!==u)&&sl(r,i,a,u),or=!1;var g=r.memoizedState;i.state=g,mt(r,a,i,t),l=r.memoizedState,s!==a||g!==l||ve.current||or?(typeof h=="function"&&(Xo(r,n,h,a),l=r.memoizedState),(s=or||il(r,n,s,a,g,l,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(r.flags|=4194308)):(typeof i.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=l),i.props=a,i.state=l,i.context=u,a=s):(typeof i.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{i=r.stateNode,nc(e,r),s=r.memoizedProps,u=r.type===r.elementType?s:Ue(r.type,s),i.props=u,p=r.pendingProps,g=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ie(l):(l=ye(n)?_r:ue.current,l=fn(r,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||g!==l)&&sl(r,i,a,l),or=!1,g=r.memoizedState,i.state=g,mt(r,a,i,t);var P=r.memoizedState;s!==p||g!==P||ve.current||or?(typeof y=="function"&&(Xo(r,n,y,a),P=r.memoizedState),(u=or||il(r,n,u,a,g,P,l)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,P,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,P,l)),typeof i.componentDidUpdate=="function"&&(r.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(r.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=P),i.props=a,i.state=P,i.context=l,a=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(r.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(r.flags|=1024),a=!1)}return ri(e,r,n,a,o,t)}function ri(e,r,n,a,t,o){Oc(e,r);var i=(r.flags&128)!==0;if(!a&&!i)return t&&Js(r,n,!1),Ze(e,r,o);a=r.stateNode,Pp.current=r;var s=i&&typeof n.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&i?(r.child=gn(r,e.child,null,o),r.child=gn(r,null,s,o)):ce(e,r,s,o),r.memoizedState=a.state,t&&Js(r,n,!0),r.child}function bc(e){var r=e.stateNode;r.pendingContext?Xs(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Xs(e,r.context,!1),Yi(e,r.containerInfo)}function fl(e,r,n,a,t){return hn(),Fi(t),r.flags|=256,ce(e,r,n,a),r.child}var ni={dehydrated:null,treeContext:null,retryLane:0};function ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ic(e,r,n){var a=r.pendingProps,t=F.current,o=!1,i=(r.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(t&2)!==0),s?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),W(F,t&1),e===null)return Qo(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(i=a.children,e=a.fallback,o?(a=r.mode,o=r.child,i={mode:"hidden",children:i},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ut(i,a,0,null),e=Lr(e,a,n,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=ai(n),r.memoizedState=ni,e):rs(r,i));if(t=e.memoizedState,t!==null&&(s=t.dehydrated,s!==null))return wp(e,r,i,a,s,t,n);if(o){o=a.fallback,i=r.mode,t=e.child,s=t.sibling;var l={mode:"hidden",children:a.children};return!(i&1)&&r.child!==t?(a=r.child,a.childLanes=0,a.pendingProps=l,r.deletions=null):(a=yr(t,l),a.subtreeFlags=t.subtreeFlags&14680064),s!==null?o=yr(s,o):(o=Lr(o,i,n,null),o.flags|=2),o.return=r,a.return=r,a.sibling=o,r.child=a,a=o,o=r.child,i=e.child.memoizedState,i=i===null?ai(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,r.memoizedState=ni,a}return o=e.child,e=o.sibling,a=yr(o,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=n),a.return=r,a.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=a,r.memoizedState=null,a}function rs(e,r){return r=Ut({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function xa(e,r,n,a){return a!==null&&Fi(a),gn(r,e.child,null,n),e=rs(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function wp(e,r,n,a,t,o,i){if(n)return r.flags&256?(r.flags&=-257,a=po(Error(w(422))),xa(e,r,i,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=a.fallback,t=r.mode,a=Ut({mode:"visible",children:a.children},t,0,null),o=Lr(o,t,i,null),o.flags|=2,a.return=r,o.return=r,a.sibling=o,r.child=a,r.mode&1&&gn(r,e.child,null,i),r.child.memoizedState=ai(i),r.memoizedState=ni,o);if(!(r.mode&1))return xa(e,r,i,null);if(t.data==="$!"){if(a=t.nextSibling&&t.nextSibling.dataset,a)var s=a.dgst;return a=s,o=Error(w(419)),a=po(o,a,void 0),xa(e,r,i,a)}if(s=(i&e.childLanes)!==0,ge||s){if(a=re,a!==null){switch(i&-i){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(a.suspendedLanes|i)?0:t,t!==0&&t!==o.retryLane&&(o.retryLane=t,Je(e,t),We(a,e,t,-1))}return ss(),a=po(Error(w(421))),xa(e,r,i,a)}return t.data==="$?"?(r.flags|=128,r.child=e.child,r=Dp.bind(null,e),t._reactRetry=r,null):(e=o.treeContext,we=fr(t.nextSibling),Re=r,B=!0,Le=null,e!==null&&(Ee[Se++]=Ye,Ee[Se++]=qe,Ee[Se++]=Wr,Ye=e.id,qe=e.overflow,Wr=r),r=rs(r,a.children),r.flags|=4096,r)}function hl(e,r,n){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),Ko(e.return,r,n)}function fo(e,r,n,a,t){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:t}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=t)}function xc(e,r,n){var a=r.pendingProps,t=a.revealOrder,o=a.tail;if(ce(e,r,a.children,n),a=F.current,a&2)a=a&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hl(e,n,r);else if(e.tag===19)hl(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(W(F,a),!(r.mode&1))r.memoizedState=null;else switch(t){case"forwards":for(n=r.child,t=null;n!==null;)e=n.alternate,e!==null&&dt(e)===null&&(t=n),n=n.sibling;n=t,n===null?(t=r.child,r.child=null):(t=n.sibling,n.sibling=null),fo(r,!1,t,n,o);break;case"backwards":for(n=null,t=r.child,r.child=null;t!==null;){if(e=t.alternate,e!==null&&dt(e)===null){r.child=t;break}e=t.sibling,t.sibling=n,n=t,t=e}fo(r,!0,n,null,o);break;case"together":fo(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ha(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Ze(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),zr|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(w(153));if(r.child!==null){for(e=r.child,n=yr(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=yr(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function Rp(e,r,n){switch(r.tag){case 3:bc(r),hn();break;case 5:ac(r);break;case 1:ye(r.type)&&it(r);break;case 4:Yi(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,t=r.memoizedProps.value;W(ut,a._currentValue),a._currentValue=t;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(W(F,F.current&1),r.flags|=128,null):n&r.child.childLanes?Ic(e,r,n):(W(F,F.current&1),e=Ze(e,r,n),e!==null?e.sibling:null);W(F,F.current&1);break;case 19:if(a=(n&r.childLanes)!==0,e.flags&128){if(a)return xc(e,r,n);r.flags|=128}if(t=r.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),W(F,F.current),a)break;return null;case 22:case 23:return r.lanes=0,Sc(e,r,n)}return Ze(e,r,n)}var Nc,ti,Uc,Dc;Nc=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ti=function(){};Uc=function(e,r,n,a){var t=e.memoizedProps;if(t!==a){e=r.stateNode,Ur(Ve.current);var o=null;switch(n){case"input":t=Eo(e,t),a=Eo(e,a),o=[];break;case"select":t=V({},t,{value:void 0}),a=V({},a,{value:void 0}),o=[];break;case"textarea":t=bo(e,t),a=bo(e,a),o=[];break;default:typeof t.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=tt)}xo(n,a);var i;n=null;for(u in t)if(!a.hasOwnProperty(u)&&t.hasOwnProperty(u)&&t[u]!=null)if(u==="style"){var s=t[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in a){var l=a[u];if(s=t!=null?t[u]:void 0,a.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&M("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(r.updateQueue=u)&&(r.flags|=4)}};Dc=function(e,r,n,a){n!==a&&(r.flags|=4)};function In(e,r){if(!B)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function se(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(r)for(var t=e.child;t!==null;)n|=t.lanes|t.childLanes,a|=t.subtreeFlags&14680064,a|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)n|=t.lanes|t.childLanes,a|=t.subtreeFlags,a|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=a,e.childLanes=n,r}function Tp(e,r,n){var a=r.pendingProps;switch(Bi(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(r),null;case 1:return ye(r.type)&&ot(),se(r),null;case 3:return a=r.stateNode,vn(),z(ve),z(ue),Qi(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ba(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Le!==null&&(di(Le),Le=null))),ti(e,r),se(r),null;case 5:qi(r);var t=Ur(aa.current);if(n=r.type,e!==null&&r.stateNode!=null)Uc(e,r,n,a,t),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(w(166));return se(r),null}if(e=Ur(Ve.current),ba(r)){a=r.stateNode,n=r.type;var o=r.memoizedProps;switch(a[Fe]=r,a[ra]=o,e=(r.mode&1)!==0,n){case"dialog":M("cancel",a),M("close",a);break;case"iframe":case"object":case"embed":M("load",a);break;case"video":case"audio":for(t=0;t<Ln.length;t++)M(Ln[t],a);break;case"source":M("error",a);break;case"img":case"image":case"link":M("error",a),M("load",a);break;case"details":M("toggle",a);break;case"input":ks(a,o),M("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},M("invalid",a);break;case"textarea":Es(a,o),M("invalid",a)}xo(n,o),t=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?a.textContent!==s&&(o.suppressHydrationWarning!==!0&&Oa(a.textContent,s,e),t=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Oa(a.textContent,s,e),t=["children",""+s]):Hn.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&M("scroll",a)}switch(n){case"input":Pa(a),Cs(a,o,!0);break;case"textarea":Pa(a),Ss(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=tt)}a=t,r.updateQueue=a,a!==null&&(r.flags|=4)}else{i=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=i.createElement(n,{is:a.is}):(e=i.createElement(n),n==="select"&&(i=e,a.multiple?i.multiple=!0:a.size&&(i.size=a.size))):e=i.createElementNS(e,n),e[Fe]=r,e[ra]=a,Nc(e,r,!1,!1),r.stateNode=e;e:{switch(i=No(n,a),n){case"dialog":M("cancel",e),M("close",e),t=a;break;case"iframe":case"object":case"embed":M("load",e),t=a;break;case"video":case"audio":for(t=0;t<Ln.length;t++)M(Ln[t],e);t=a;break;case"source":M("error",e),t=a;break;case"img":case"image":case"link":M("error",e),M("load",e),t=a;break;case"details":M("toggle",e),t=a;break;case"input":ks(e,a),t=Eo(e,a),M("invalid",e);break;case"option":t=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},t=V({},a,{value:void 0}),M("invalid",e);break;case"textarea":Es(e,a),t=bo(e,a),M("invalid",e);break;default:t=a}xo(n,t),s=t;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?mu(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uu(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$n(e,l):typeof l=="number"&&$n(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hn.hasOwnProperty(o)?l!=null&&o==="onScroll"&&M("scroll",e):l!=null&&Ci(e,o,l,i))}switch(n){case"input":Pa(e),Cs(e,a,!1);break;case"textarea":Pa(e),Ss(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Pr(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?sn(e,!!a.multiple,o,!1):a.defaultValue!=null&&sn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=tt)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return se(r),null;case 6:if(e&&r.stateNode!=null)Dc(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(w(166));if(n=Ur(aa.current),Ur(Ve.current),ba(r)){if(a=r.stateNode,n=r.memoizedProps,a[Fe]=r,(o=a.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Oa(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oa(a.nodeValue,n,(e.mode&1)!==0)}o&&(r.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Fe]=r,r.stateNode=a}return se(r),null;case 13:if(z(F),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&r.mode&1&&!(r.flags&128))Ju(),hn(),r.flags|=98560,o=!1;else if(o=ba(r),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Fe]=r}else hn(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;se(r),o=!1}else Le!==null&&(di(Le),Le=null),o=!0;if(!o)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(e===null||F.current&1?X===0&&(X=3):ss())),r.updateQueue!==null&&(r.flags|=4),se(r),null);case 4:return vn(),ti(e,r),e===null&&Zn(r.stateNode.containerInfo),se(r),null;case 10:return Gi(r.type._context),se(r),null;case 17:return ye(r.type)&&ot(),se(r),null;case 19:if(z(F),o=r.memoizedState,o===null)return se(r),null;if(a=(r.flags&128)!==0,i=o.rendering,i===null)if(a)In(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(i=dt(e),i!==null){for(r.flags|=128,In(o,!1),a=i.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=n,n=r.child;n!==null;)o=n,e=a,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(F,F.current&1|2),r.child}e=e.sibling}o.tail!==null&&$()>An&&(r.flags|=128,a=!0,In(o,!1),r.lanes=4194304)}else{if(!a)if(e=dt(i),e!==null){if(r.flags|=128,a=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),In(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!B)return se(r),null}else 2*$()-o.renderingStartTime>An&&n!==1073741824&&(r.flags|=128,a=!0,In(o,!1),r.lanes=4194304);o.isBackwards?(i.sibling=r.child,r.child=i):(n=o.last,n!==null?n.sibling=i:r.child=i,o.last=i)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=$(),r.sibling=null,n=F.current,W(F,a?n&1|2:n&1),r):(se(r),null);case 22:case 23:return is(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?Pe&1073741824&&(se(r),r.subtreeFlags&6&&(r.flags|=8192)):se(r),null;case 24:return null;case 25:return null}throw Error(w(156,r.tag))}function kp(e,r){switch(Bi(r),r.tag){case 1:return ye(r.type)&&ot(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return vn(),z(ve),z(ue),Qi(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return qi(r),null;case 13:if(z(F),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(w(340));hn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return z(F),null;case 4:return vn(),null;case 10:return Gi(r.type._context),null;case 22:case 23:return is(),null;case 24:return null;default:return null}}var Na=!1,le=!1,Cp=typeof WeakSet=="function"?WeakSet:Set,S=null;function tn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){G(e,r,a)}else n.current=null}function oi(e,r,n){try{n()}catch(a){G(e,r,a)}}var gl=!1;function Ep(e,r){if(jo=rt,e=zu(),Mi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var t=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,h=0,p=e,g=null;r:for(;;){for(var y;p!==n||t!==0&&p.nodeType!==3||(s=i+t),p!==o||a!==0&&p.nodeType!==3||(l=i+a),p.nodeType===3&&(i+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break r;if(g===n&&++u===t&&(s=i),g===o&&++h===a&&(l=i),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vo={focusedElem:e,selectionRange:n},rt=!1,S=r;S!==null;)if(r=S,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,S=e;else for(;S!==null;){r=S;try{var P=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var A=P.memoizedProps,C=P.memoizedState,m=r.stateNode,c=m.getSnapshotBeforeUpdate(r.elementType===r.type?A:Ue(r.type,A),C);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=r.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){G(r,r.return,v)}if(e=r.sibling,e!==null){e.return=r.return,S=e;break}S=r.return}return P=gl,gl=!1,P}function jn(e,r,n){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&e)===e){var o=t.destroy;t.destroy=void 0,o!==void 0&&oi(r,n,o)}t=t.next}while(t!==a)}}function xt(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==r)}}function ii(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Lc(e){var r=e.alternate;r!==null&&(e.alternate=null,Lc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Fe],delete r[ra],delete r[$o],delete r[lp],delete r[up])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _c(e){return e.tag===5||e.tag===3||e.tag===4}function vl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function si(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=tt));else if(a!==4&&(e=e.child,e!==null))for(si(e,r,n),e=e.sibling;e!==null;)si(e,r,n),e=e.sibling}function li(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(li(e,r,n),e=e.sibling;e!==null;)li(e,r,n),e=e.sibling}var ae=null,De=!1;function ar(e,r,n){for(n=n.child;n!==null;)Wc(e,r,n),n=n.sibling}function Wc(e,r,n){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Tt,n)}catch{}switch(n.tag){case 5:le||tn(n,r);case 6:var a=ae,t=De;ae=null,ar(e,r,n),ae=a,De=t,ae!==null&&(De?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(De?(e=ae,n=n.stateNode,e.nodeType===8?io(e.parentNode,n):e.nodeType===1&&io(e,n),Kn(e)):io(ae,n.stateNode));break;case 4:a=ae,t=De,ae=n.stateNode.containerInfo,De=!0,ar(e,r,n),ae=a,De=t;break;case 0:case 11:case 14:case 15:if(!le&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){t=a=a.next;do{var o=t,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&oi(n,r,i),t=t.next}while(t!==a)}ar(e,r,n);break;case 1:if(!le&&(tn(n,r),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(s){G(n,r,s)}ar(e,r,n);break;case 21:ar(e,r,n);break;case 22:n.mode&1?(le=(a=le)||n.memoizedState!==null,ar(e,r,n),le=a):ar(e,r,n);break;default:ar(e,r,n)}}function yl(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cp),r.forEach(function(a){var t=Lp.bind(null,e,a);n.has(a)||(n.add(a),a.then(t,t))})}}function Ne(e,r){var n=r.deletions;if(n!==null)for(var a=0;a<n.length;a++){var t=n[a];try{var o=e,i=r,s=i;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,De=!1;break e;case 3:ae=s.stateNode.containerInfo,De=!0;break e;case 4:ae=s.stateNode.containerInfo,De=!0;break e}s=s.return}if(ae===null)throw Error(w(160));Wc(o,i,t),ae=null,De=!1;var l=t.alternate;l!==null&&(l.return=null),t.return=null}catch(u){G(t,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Mc(r,e),r=r.sibling}function Mc(e,r){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(r,e),ze(e),a&4){try{jn(3,e,e.return),xt(3,e)}catch(A){G(e,e.return,A)}try{jn(5,e,e.return)}catch(A){G(e,e.return,A)}}break;case 1:Ne(r,e),ze(e),a&512&&n!==null&&tn(n,n.return);break;case 5:if(Ne(r,e),ze(e),a&512&&n!==null&&tn(n,n.return),e.flags&32){var t=e.stateNode;try{$n(t,"")}catch(A){G(e,e.return,A)}}if(a&4&&(t=e.stateNode,t!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&iu(t,o),No(s,i);var u=No(s,o);for(i=0;i<l.length;i+=2){var h=l[i],p=l[i+1];h==="style"?mu(t,p):h==="dangerouslySetInnerHTML"?uu(t,p):h==="children"?$n(t,p):Ci(t,h,p,u)}switch(s){case"input":So(t,o);break;case"textarea":su(t,o);break;case"select":var g=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?sn(t,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?sn(t,!!o.multiple,o.defaultValue,!0):sn(t,!!o.multiple,o.multiple?[]:"",!1))}t[ra]=o}catch(A){G(e,e.return,A)}}break;case 6:if(Ne(r,e),ze(e),a&4){if(e.stateNode===null)throw Error(w(162));t=e.stateNode,o=e.memoizedProps;try{t.nodeValue=o}catch(A){G(e,e.return,A)}}break;case 3:if(Ne(r,e),ze(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(r.containerInfo)}catch(A){G(e,e.return,A)}break;case 4:Ne(r,e),ze(e);break;case 13:Ne(r,e),ze(e),t=e.child,t.flags&8192&&(o=t.memoizedState!==null,t.stateNode.isHidden=o,!o||t.alternate!==null&&t.alternate.memoizedState!==null||(ts=$())),a&4&&yl(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(le=(u=le)||h,Ne(r,e),le=u):Ne(r,e),ze(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(p=S=h;S!==null;){switch(g=S,y=g.child,g.tag){case 0:case 11:case 14:case 15:jn(4,g,g.return);break;case 1:tn(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){a=g,n=g.return;try{r=a,P.props=r.memoizedProps,P.state=r.memoizedState,P.componentWillUnmount()}catch(A){G(a,n,A)}}break;case 5:tn(g,g.return);break;case 22:if(g.memoizedState!==null){Pl(p);continue}}y!==null?(y.return=g,S=y):Pl(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{t=p.stateNode,u?(o=t.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=cu("display",i))}catch(A){G(e,e.return,A)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(A){G(e,e.return,A)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ne(r,e),ze(e),a&4&&yl(e);break;case 21:break;default:Ne(r,e),ze(e)}}function ze(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(_c(n)){var a=n;break e}n=n.return}throw Error(w(160))}switch(a.tag){case 5:var t=a.stateNode;a.flags&32&&($n(t,""),a.flags&=-33);var o=vl(e);li(e,o,t);break;case 3:case 4:var i=a.stateNode.containerInfo,s=vl(e);si(e,s,i);break;default:throw Error(w(161))}}catch(l){G(e,e.return,l)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Sp(e,r,n){S=e,zc(e)}function zc(e,r,n){for(var a=(e.mode&1)!==0;S!==null;){var t=S,o=t.child;if(t.tag===22&&a){var i=t.memoizedState!==null||Na;if(!i){var s=t.alternate,l=s!==null&&s.memoizedState!==null||le;s=Na;var u=le;if(Na=i,(le=l)&&!u)for(S=t;S!==null;)i=S,l=i.child,i.tag===22&&i.memoizedState!==null?wl(t):l!==null?(l.return=i,S=l):wl(t);for(;o!==null;)S=o,zc(o),o=o.sibling;S=t,Na=s,le=u}Al(e)}else t.subtreeFlags&8772&&o!==null?(o.return=t,S=o):Al(e)}}function Al(e){for(;S!==null;){var r=S;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:le||xt(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!le)if(n===null)a.componentDidMount();else{var t=r.elementType===r.type?n.memoizedProps:Ue(r.type,n.memoizedProps);a.componentDidUpdate(t,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&al(r,o,a);break;case 3:var i=r.updateQueue;if(i!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}al(r,i,n)}break;case 5:var s=r.stateNode;if(n===null&&r.flags&4){n=s;var l=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Kn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||r.flags&512&&ii(r)}catch(g){G(r,r.return,g)}}if(r===e){S=null;break}if(n=r.sibling,n!==null){n.return=r.return,S=n;break}S=r.return}}function Pl(e){for(;S!==null;){var r=S;if(r===e){S=null;break}var n=r.sibling;if(n!==null){n.return=r.return,S=n;break}S=r.return}}function wl(e){for(;S!==null;){var r=S;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{xt(4,r)}catch(l){G(r,n,l)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var t=r.return;try{a.componentDidMount()}catch(l){G(r,t,l)}}var o=r.return;try{ii(r)}catch(l){G(r,o,l)}break;case 5:var i=r.return;try{ii(r)}catch(l){G(r,i,l)}}}catch(l){G(r,r.return,l)}if(r===e){S=null;break}var s=r.sibling;if(s!==null){s.return=r.return,S=s;break}S=r.return}}var Op=Math.ceil,ht=er.ReactCurrentDispatcher,ns=er.ReactCurrentOwner,be=er.ReactCurrentBatchConfig,D=0,re=null,Q=null,te=0,Pe=0,on=Tr(0),X=0,sa=null,zr=0,Nt=0,as=0,Vn=null,he=null,ts=0,An=1/0,He=null,gt=!1,ui=null,gr=null,Ua=!1,ur=null,vt=0,Gn=0,ci=null,$a=-1,Ya=0;function me(){return D&6?$():$a!==-1?$a:$a=$()}function vr(e){return e.mode&1?D&2&&te!==0?te&-te:mp.transition!==null?(Ya===0&&(Ya=Tu()),Ya):(e=_,e!==0||(e=window.event,e=e===void 0?16:Iu(e.type)),e):1}function We(e,r,n,a){if(50<Gn)throw Gn=0,ci=null,Error(w(185));ma(e,n,a),(!(D&2)||e!==re)&&(e===re&&(!(D&2)&&(Nt|=n),X===4&&sr(e,te)),Ae(e,a),n===1&&D===0&&!(r.mode&1)&&(An=$()+500,Ot&&kr()))}function Ae(e,r){var n=e.callbackNode;md(e,r);var a=et(e,e===re?te:0);if(a===0)n!==null&&Is(n),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(n!=null&&Is(n),r===1)e.tag===0?cp(Rl.bind(null,e)):Qu(Rl.bind(null,e)),ip(function(){!(D&6)&&kr()}),n=null;else{switch(ku(a)){case 1:n=Ii;break;case 4:n=wu;break;case 16:n=Za;break;case 536870912:n=Ru;break;default:n=Za}n=Yc(n,Bc.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Bc(e,r){if($a=-1,Ya=0,D&6)throw Error(w(327));var n=e.callbackNode;if(dn()&&e.callbackNode!==n)return null;var a=et(e,e===re?te:0);if(a===0)return null;if(a&30||a&e.expiredLanes||r)r=yt(e,a);else{r=a;var t=D;D|=2;var o=jc();(re!==e||te!==r)&&(He=null,An=$()+500,Dr(e,r));do try{xp();break}catch(s){Fc(e,s)}while(!0);Vi(),ht.current=o,D=t,Q!==null?r=0:(re=null,te=0,r=X)}if(r!==0){if(r===2&&(t=Wo(e),t!==0&&(a=t,r=mi(e,t))),r===1)throw n=sa,Dr(e,0),sr(e,a),Ae(e,$()),n;if(r===6)sr(e,a);else{if(t=e.current.alternate,!(a&30)&&!bp(t)&&(r=yt(e,a),r===2&&(o=Wo(e),o!==0&&(a=o,r=mi(e,o))),r===1))throw n=sa,Dr(e,0),sr(e,a),Ae(e,$()),n;switch(e.finishedWork=t,e.finishedLanes=a,r){case 0:case 1:throw Error(w(345));case 2:br(e,he,He);break;case 3:if(sr(e,a),(a&130023424)===a&&(r=ts+500-$(),10<r)){if(et(e,0)!==0)break;if(t=e.suspendedLanes,(t&a)!==a){me(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=Ho(br.bind(null,e,he,He),r);break}br(e,he,He);break;case 4:if(sr(e,a),(a&4194240)===a)break;for(r=e.eventTimes,t=-1;0<a;){var i=31-_e(a);o=1<<i,i=r[i],i>t&&(t=i),a&=~o}if(a=t,a=$()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Op(a/1960))-a,10<a){e.timeoutHandle=Ho(br.bind(null,e,he,He),a);break}br(e,he,He);break;case 5:br(e,he,He);break;default:throw Error(w(329))}}}return Ae(e,$()),e.callbackNode===n?Bc.bind(null,e):null}function mi(e,r){var n=Vn;return e.current.memoizedState.isDehydrated&&(Dr(e,r).flags|=256),e=yt(e,r),e!==2&&(r=he,he=n,r!==null&&di(r)),e}function di(e){he===null?he=e:he.push.apply(he,e)}function bp(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var t=n[a],o=t.getSnapshot;t=t.value;try{if(!Me(o(),t))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function sr(e,r){for(r&=~as,r&=~Nt,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-_e(r),a=1<<n;e[n]=-1,r&=~a}}function Rl(e){if(D&6)throw Error(w(327));dn();var r=et(e,0);if(!(r&1))return Ae(e,$()),null;var n=yt(e,r);if(e.tag!==0&&n===2){var a=Wo(e);a!==0&&(r=a,n=mi(e,a))}if(n===1)throw n=sa,Dr(e,0),sr(e,r),Ae(e,$()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,br(e,he,He),Ae(e,$()),null}function os(e,r){var n=D;D|=1;try{return e(r)}finally{D=n,D===0&&(An=$()+500,Ot&&kr())}}function Br(e){ur!==null&&ur.tag===0&&!(D&6)&&dn();var r=D;D|=1;var n=be.transition,a=_;try{if(be.transition=null,_=1,e)return e()}finally{_=a,be.transition=n,D=r,!(D&6)&&kr()}}function is(){Pe=on.current,z(on)}function Dr(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,op(n)),Q!==null)for(n=Q.return;n!==null;){var a=n;switch(Bi(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ot();break;case 3:vn(),z(ve),z(ue),Qi();break;case 5:qi(a);break;case 4:vn();break;case 13:z(F);break;case 19:z(F);break;case 10:Gi(a.type._context);break;case 22:case 23:is()}n=n.return}if(re=e,Q=e=yr(e.current,null),te=Pe=r,X=0,sa=null,as=Nt=zr=0,he=Vn=null,Nr!==null){for(r=0;r<Nr.length;r++)if(n=Nr[r],a=n.interleaved,a!==null){n.interleaved=null;var t=a.next,o=n.pending;if(o!==null){var i=o.next;o.next=t,a.next=i}n.pending=a}Nr=null}return e}function Fc(e,r){do{var n=Q;try{if(Vi(),Va.current=ft,pt){for(var a=j.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}pt=!1}if(Mr=0,ee=K=j=null,Fn=!1,ta=0,ns.current=null,n===null||n.return===null){X=1,sa=r,Q=null;break}e:{var o=e,i=n.return,s=n,l=r;if(r=te,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=s,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=ul(i);if(y!==null){y.flags&=-257,cl(y,i,s,o,r),y.mode&1&&ll(o,u,r),r=y,l=u;var P=r.updateQueue;if(P===null){var A=new Set;A.add(l),r.updateQueue=A}else P.add(l);break e}else{if(!(r&1)){ll(o,u,r),ss();break e}l=Error(w(426))}}else if(B&&s.mode&1){var C=ul(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),cl(C,i,s,o,r),Fi(yn(l,s));break e}}o=l=yn(l,s),X!==4&&(X=2),Vn===null?Vn=[o]:Vn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var m=kc(o,l,r);nl(o,m);break e;case 1:s=l;var c=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(gr===null||!gr.has(d)))){o.flags|=65536,r&=-r,o.lanes|=r;var v=Cc(o,s,r);nl(o,v);break e}}o=o.return}while(o!==null)}Gc(n)}catch(T){r=T,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function jc(){var e=ht.current;return ht.current=ft,e===null?ft:e}function ss(){(X===0||X===3||X===2)&&(X=4),re===null||!(zr&268435455)&&!(Nt&268435455)||sr(re,te)}function yt(e,r){var n=D;D|=2;var a=jc();(re!==e||te!==r)&&(He=null,Dr(e,r));do try{Ip();break}catch(t){Fc(e,t)}while(!0);if(Vi(),D=n,ht.current=a,Q!==null)throw Error(w(261));return re=null,te=0,X}function Ip(){for(;Q!==null;)Vc(Q)}function xp(){for(;Q!==null&&!nd();)Vc(Q)}function Vc(e){var r=$c(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,r===null?Gc(e):Q=r,ns.current=null}function Gc(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=kp(n,r),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(n=Tp(n,r,Pe),n!==null){Q=n;return}if(r=r.sibling,r!==null){Q=r;return}Q=r=e}while(r!==null);X===0&&(X=5)}function br(e,r,n){var a=_,t=be.transition;try{be.transition=null,_=1,Np(e,r,n,a)}finally{be.transition=t,_=a}return null}function Np(e,r,n,a){do dn();while(ur!==null);if(D&6)throw Error(w(327));n=e.finishedWork;var t=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(dd(e,o),e===re&&(Q=re=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,Yc(Za,function(){return dn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=be.transition,be.transition=null;var i=_;_=1;var s=D;D|=4,ns.current=null,Ep(e,n),Mc(n,e),Jd(Vo),rt=!!jo,Vo=jo=null,e.current=n,Sp(n),ad(),D=s,_=i,be.transition=o}else e.current=n;if(Ua&&(Ua=!1,ur=e,vt=t),o=e.pendingLanes,o===0&&(gr=null),id(n.stateNode),Ae(e,$()),r!==null)for(a=e.onRecoverableError,n=0;n<r.length;n++)t=r[n],a(t.value,{componentStack:t.stack,digest:t.digest});if(gt)throw gt=!1,e=ui,ui=null,e;return vt&1&&e.tag!==0&&dn(),o=e.pendingLanes,o&1?e===ci?Gn++:(Gn=0,ci=e):Gn=0,kr(),null}function dn(){if(ur!==null){var e=ku(vt),r=be.transition,n=_;try{if(be.transition=null,_=16>e?16:e,ur===null)var a=!1;else{if(e=ur,ur=null,vt=0,D&6)throw Error(w(331));var t=D;for(D|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(S=u;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:jn(8,h,o)}var p=h.child;if(p!==null)p.return=h,S=p;else for(;S!==null;){h=S;var g=h.sibling,y=h.return;if(Lc(h),h===u){S=null;break}if(g!==null){g.return=y,S=g;break}S=y}}}var P=o.alternate;if(P!==null){var A=P.child;if(A!==null){P.child=null;do{var C=A.sibling;A.sibling=null,A=C}while(A!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:jn(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,S=m;break e}S=o.return}}var c=e.current;for(S=c;S!==null;){i=S;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,S=d;else e:for(i=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xt(9,s)}}catch(T){G(s,s.return,T)}if(s===i){S=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,S=v;break e}S=s.return}}if(D=t,kr(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Tt,e)}catch{}a=!0}return a}finally{_=n,be.transition=r}}return!1}function Tl(e,r,n){r=yn(n,r),r=kc(e,r,1),e=hr(e,r,1),r=me(),e!==null&&(ma(e,1,r),Ae(e,r))}function G(e,r,n){if(e.tag===3)Tl(e,e,n);else for(;r!==null;){if(r.tag===3){Tl(r,e,n);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(gr===null||!gr.has(a))){e=yn(n,e),e=Cc(r,e,1),r=hr(r,e,1),e=me(),r!==null&&(ma(r,1,e),Ae(r,e));break}}r=r.return}}function Up(e,r,n){var a=e.pingCache;a!==null&&a.delete(r),r=me(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>$()-ts?Dr(e,0):as|=n),Ae(e,r)}function Hc(e,r){r===0&&(e.mode&1?(r=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):r=1);var n=me();e=Je(e,r),e!==null&&(ma(e,r,n),Ae(e,n))}function Dp(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Hc(e,n)}function Lp(e,r){var n=0;switch(e.tag){case 13:var a=e.stateNode,t=e.memoizedState;t!==null&&(n=t.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(w(314))}a!==null&&a.delete(r),Hc(e,n)}var $c;$c=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return ge=!1,Rp(e,r,n);ge=!!(e.flags&131072)}else ge=!1,B&&r.flags&1048576&&Ku(r,lt,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Ha(e,r),e=r.pendingProps;var t=fn(r,ue.current);mn(r,n),t=Xi(null,r,a,e,t,n);var o=Ji();return r.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ye(a)?(o=!0,it(r)):o=!1,r.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,$i(r),t.updater=It,r.stateNode=t,t._reactInternals=r,Jo(r,a,e,n),r=ri(null,r,a,!0,o,n)):(r.tag=0,B&&o&&zi(r),ce(null,r,t,n),r=r.child),r;case 16:a=r.elementType;e:{switch(Ha(e,r),e=r.pendingProps,t=a._init,a=t(a._payload),r.type=a,t=r.tag=Wp(a),e=Ue(a,e),t){case 0:r=ei(null,r,a,e,n);break e;case 1:r=pl(null,r,a,e,n);break e;case 11:r=ml(null,r,a,e,n);break e;case 14:r=dl(null,r,a,Ue(a.type,e),n);break e}throw Error(w(306,a,""))}return r;case 0:return a=r.type,t=r.pendingProps,t=r.elementType===a?t:Ue(a,t),ei(e,r,a,t,n);case 1:return a=r.type,t=r.pendingProps,t=r.elementType===a?t:Ue(a,t),pl(e,r,a,t,n);case 3:e:{if(bc(r),e===null)throw Error(w(387));a=r.pendingProps,o=r.memoizedState,t=o.element,nc(e,r),mt(r,a,null,n);var i=r.memoizedState;if(a=i.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){t=yn(Error(w(423)),r),r=fl(e,r,a,n,t);break e}else if(a!==t){t=yn(Error(w(424)),r),r=fl(e,r,a,n,t);break e}else for(we=fr(r.stateNode.containerInfo.firstChild),Re=r,B=!0,Le=null,n=ec(r,null,a,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),a===t){r=Ze(e,r,n);break e}ce(e,r,a,n)}r=r.child}return r;case 5:return ac(r),e===null&&Qo(r),a=r.type,t=r.pendingProps,o=e!==null?e.memoizedProps:null,i=t.children,Go(a,t)?i=null:o!==null&&Go(a,o)&&(r.flags|=32),Oc(e,r),ce(e,r,i,n),r.child;case 6:return e===null&&Qo(r),null;case 13:return Ic(e,r,n);case 4:return Yi(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=gn(r,null,a,n):ce(e,r,a,n),r.child;case 11:return a=r.type,t=r.pendingProps,t=r.elementType===a?t:Ue(a,t),ml(e,r,a,t,n);case 7:return ce(e,r,r.pendingProps,n),r.child;case 8:return ce(e,r,r.pendingProps.children,n),r.child;case 12:return ce(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(a=r.type._context,t=r.pendingProps,o=r.memoizedProps,i=t.value,W(ut,a._currentValue),a._currentValue=i,o!==null)if(Me(o.value,i)){if(o.children===t.children&&!ve.current){r=Ze(e,r,n);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var l=s.firstContext;l!==null;){if(l.context===a){if(o.tag===1){l=Qe(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ko(o.return,n,r),s.lanes|=n;break}l=l.next}}else if(o.tag===10)i=o.type===r.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ko(i,n,r),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===r){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ce(e,r,t.children,n),r=r.child}return r;case 9:return t=r.type,a=r.pendingProps.children,mn(r,n),t=Ie(t),a=a(t),r.flags|=1,ce(e,r,a,n),r.child;case 14:return a=r.type,t=Ue(a,r.pendingProps),t=Ue(a.type,t),dl(e,r,a,t,n);case 15:return Ec(e,r,r.type,r.pendingProps,n);case 17:return a=r.type,t=r.pendingProps,t=r.elementType===a?t:Ue(a,t),Ha(e,r),r.tag=1,ye(a)?(e=!0,it(r)):e=!1,mn(r,n),Tc(r,a,t),Jo(r,a,t,n),ri(null,r,a,!0,e,n);case 19:return xc(e,r,n);case 22:return Sc(e,r,n)}throw Error(w(156,r.tag))};function Yc(e,r){return Pu(e,r)}function _p(e,r,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,r,n,a){return new _p(e,r,n,a)}function ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wp(e){if(typeof e=="function")return ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Si)return 11;if(e===Oi)return 14}return 2}function yr(e,r){var n=e.alternate;return n===null?(n=Oe(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qa(e,r,n,a,t,o){var i=2;if(a=e,typeof e=="function")ls(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Qr:return Lr(n.children,t,o,r);case Ei:i=8,t|=8;break;case Ro:return e=Oe(12,n,r,t|2),e.elementType=Ro,e.lanes=o,e;case To:return e=Oe(13,n,r,t),e.elementType=To,e.lanes=o,e;case ko:return e=Oe(19,n,r,t),e.elementType=ko,e.lanes=o,e;case au:return Ut(n,t,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ru:i=10;break e;case nu:i=9;break e;case Si:i=11;break e;case Oi:i=14;break e;case tr:i=16,a=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return r=Oe(i,n,r,t),r.elementType=e,r.type=a,r.lanes=o,r}function Lr(e,r,n,a){return e=Oe(7,e,a,r),e.lanes=n,e}function Ut(e,r,n,a){return e=Oe(22,e,a,r),e.elementType=au,e.lanes=n,e.stateNode={isHidden:!1},e}function ho(e,r,n){return e=Oe(6,e,null,r),e.lanes=n,e}function go(e,r,n){return r=Oe(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Mp(e,r,n,a,t){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qt(0),this.expirationTimes=Qt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qt(0),this.identifierPrefix=a,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function us(e,r,n,a,t,o,i,s,l){return e=new Mp(e,r,n,s,l),r===1?(r=1,o===!0&&(r|=8)):r=0,o=Oe(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(o),e}function zp(e,r,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:a==null?null:""+a,children:e,containerInfo:r,implementation:n}}function qc(e){if(!e)return wr;e=e._reactInternals;e:{if(Vr(e)!==e||e.tag!==1)throw Error(w(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ye(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ye(n))return qu(e,n,r)}return r}function Qc(e,r,n,a,t,o,i,s,l){return e=us(n,a,!0,e,t,o,i,s,l),e.context=qc(null),n=e.current,a=me(),t=vr(n),o=Qe(a,t),o.callback=r??null,hr(n,o,t),e.current.lanes=t,ma(e,t,a),Ae(e,a),e}function Dt(e,r,n,a){var t=r.current,o=me(),i=vr(t);return n=qc(n),r.context===null?r.context=n:r.pendingContext=n,r=Qe(o,i),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=hr(t,r,i),e!==null&&(We(e,t,i,o),ja(e,t,i)),i}function At(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kl(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function cs(e,r){kl(e,r),(e=e.alternate)&&kl(e,r)}function Bp(){return null}var Kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ms(e){this._internalRoot=e}Lt.prototype.render=ms.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(w(409));Dt(e,r,null,null)};Lt.prototype.unmount=ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Br(function(){Dt(null,e,null,null)}),r[Xe]=null}};function Lt(e){this._internalRoot=e}Lt.prototype.unstable_scheduleHydration=function(e){if(e){var r=Su();e={blockedOn:null,target:e,priority:r};for(var n=0;n<ir.length&&r!==0&&r<ir[n].priority;n++);ir.splice(n,0,e),n===0&&bu(e)}};function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _t(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cl(){}function Fp(e,r,n,a,t){if(t){if(typeof a=="function"){var o=a;a=function(){var u=At(i);o.call(u)}}var i=Qc(r,a,e,0,null,!1,!1,"",Cl);return e._reactRootContainer=i,e[Xe]=i.current,Zn(e.nodeType===8?e.parentNode:e),Br(),i}for(;t=e.lastChild;)e.removeChild(t);if(typeof a=="function"){var s=a;a=function(){var u=At(l);s.call(u)}}var l=us(e,0,!1,null,null,!1,!1,"",Cl);return e._reactRootContainer=l,e[Xe]=l.current,Zn(e.nodeType===8?e.parentNode:e),Br(function(){Dt(r,l,n,a)}),l}function Wt(e,r,n,a,t){var o=n._reactRootContainer;if(o){var i=o;if(typeof t=="function"){var s=t;t=function(){var l=At(i);s.call(l)}}Dt(r,i,e,t)}else i=Fp(n,r,e,t,a);return At(i)}Cu=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Dn(r.pendingLanes);n!==0&&(xi(r,n|1),Ae(r,$()),!(D&6)&&(An=$()+500,kr()))}break;case 13:Br(function(){var a=Je(e,1);if(a!==null){var t=me();We(a,e,1,t)}}),cs(e,1)}};Ni=function(e){if(e.tag===13){var r=Je(e,134217728);if(r!==null){var n=me();We(r,e,134217728,n)}cs(e,134217728)}};Eu=function(e){if(e.tag===13){var r=vr(e),n=Je(e,r);if(n!==null){var a=me();We(n,e,r,a)}cs(e,r)}};Su=function(){return _};Ou=function(e,r){var n=_;try{return _=e,r()}finally{_=n}};Do=function(e,r,n){switch(r){case"input":if(So(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var a=n[r];if(a!==e&&a.form===e.form){var t=St(a);if(!t)throw Error(w(90));ou(a),So(a,t)}}}break;case"textarea":su(e,n);break;case"select":r=n.value,r!=null&&sn(e,!!n.multiple,r,!1)}};fu=os;hu=Br;var jp={usingClientEntryPoint:!1,Events:[pa,Zr,St,du,pu,os]},xn={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vp={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yu(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{Tt=Da.inject(Vp),je=Da}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;ke.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ds(r))throw Error(w(200));return zp(e,r,null,n)};ke.createRoot=function(e,r){if(!ds(e))throw Error(w(299));var n=!1,a="",t=Kc;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(t=r.onRecoverableError)),r=us(e,1,!1,null,null,n,!1,a,t),e[Xe]=r.current,Zn(e.nodeType===8?e.parentNode:e),new ms(r)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=yu(r),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Br(e)};ke.hydrate=function(e,r,n){if(!_t(r))throw Error(w(200));return Wt(null,e,r,!0,n)};ke.hydrateRoot=function(e,r,n){if(!ds(e))throw Error(w(405));var a=n!=null&&n.hydratedSources||null,t=!1,o="",i=Kc;if(n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),r=Qc(r,null,e,1,n??null,t,!1,o,i),e[Xe]=r.current,Zn(e),a)for(e=0;e<a.length;e++)n=a[e],t=n._getVersion,t=t(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,t]:r.mutableSourceEagerHydrationData.push(n,t);return new Lt(r)};ke.render=function(e,r,n){if(!_t(r))throw Error(w(200));return Wt(null,e,r,!1,n)};ke.unmountComponentAtNode=function(e){if(!_t(e))throw Error(w(40));return e._reactRootContainer?(Br(function(){Wt(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};ke.unstable_batchedUpdates=os;ke.unstable_renderSubtreeIntoContainer=function(e,r,n,a){if(!_t(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Wt(e,r,n,!1,a)};ke.version="18.3.1-next-f1338f8080-20240426";function Xc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc)}catch(e){console.error(e)}}Xc(),Xl.exports=ke;var Gp=Xl.exports,El=Gp;Po.createRoot=El.createRoot,Po.hydrateRoot=El.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function la(){return la=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},la.apply(null,arguments)}var cr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cr||(cr={}));const Sl="popstate";function Hp(e){e===void 0&&(e={});function r(t,o){let{pathname:i="/",search:s="",hash:l=""}=Gr(t.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),pi("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(t,o){let i=t.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let l=t.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:Pt(o))}function a(t,o){Mt(t.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Yp(r,n,a,e)}function Y(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function Mt(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function $p(){return Math.random().toString(36).substr(2,8)}function Ol(e,r){return{usr:e.state,key:e.key,idx:r}}function pi(e,r,n,a){return n===void 0&&(n=null),la({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?Gr(r):r,{state:n,key:r&&r.key||a||$p()})}function Pt(e){let{pathname:r="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function Gr(e){let r={};if(e){let n=e.indexOf("#");n>=0&&(r.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(r.search=e.substr(a),e=e.substr(0,a)),e&&(r.pathname=e)}return r}function Yp(e,r,n,a){a===void 0&&(a={});let{window:t=document.defaultView,v5Compat:o=!1}=a,i=t.history,s=cr.Pop,l=null,u=h();u==null&&(u=0,i.replaceState(la({},i.state,{idx:u}),""));function h(){return(i.state||{idx:null}).idx}function p(){s=cr.Pop;let C=h(),m=C==null?null:C-u;u=C,l&&l({action:s,location:A.location,delta:m})}function g(C,m){s=cr.Push;let c=pi(A.location,C,m);n&&n(c,C),u=h()+1;let d=Ol(c,u),v=A.createHref(c);try{i.pushState(d,"",v)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;t.location.assign(v)}o&&l&&l({action:s,location:A.location,delta:1})}function y(C,m){s=cr.Replace;let c=pi(A.location,C,m);n&&n(c,C),u=h();let d=Ol(c,u),v=A.createHref(c);i.replaceState(d,"",v),o&&l&&l({action:s,location:A.location,delta:0})}function P(C){let m=t.location.origin!=="null"?t.location.origin:t.location.href,c=typeof C=="string"?C:Pt(C);return c=c.replace(/ $/,"%20"),Y(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let A={get action(){return s},get location(){return e(t,i)},listen(C){if(l)throw new Error("A history only accepts one active listener");return t.addEventListener(Sl,p),l=C,()=>{t.removeEventListener(Sl,p),l=null}},createHref(C){return r(t,C)},createURL:P,encodeLocation(C){let m=P(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(C){return i.go(C)}};return A}var bl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bl||(bl={}));function qp(e,r,n){return n===void 0&&(n="/"),Qp(e,r,n)}function Qp(e,r,n,a){let t=typeof r=="string"?Gr(r):r,o=ps(t.pathname||"/",n);if(o==null)return null;let i=Jc(e);Kp(i);let s=null,l=uf(o);for(let u=0;s==null&&u<i.length;++u)s=of(i[u],l);return s}function Jc(e,r,n,a){r===void 0&&(r=[]),n===void 0&&(n=[]),a===void 0&&(a="");let t=(o,i,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(a.length));let u=Ar([a,l.relativePath]),h=n.concat(l);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jc(o.children,r,h,u)),!(o.path==null&&!o.index)&&r.push({path:u,score:af(u,o.index),routesMeta:h})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))t(o,i);else for(let l of Zc(o.path))t(o,i,l)}),r}function Zc(e){let r=e.split("/");if(r.length===0)return[];let[n,...a]=r,t=n.endsWith("?"),o=n.replace(/\?$/,"");if(a.length===0)return t?[o,""]:[o];let i=Zc(a.join("/")),s=[];return s.push(...i.map(l=>l===""?o:[o,l].join("/"))),t&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Kp(e){e.sort((r,n)=>r.score!==n.score?n.score-r.score:tf(r.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Xp=/^:[\w-]+$/,Jp=3,Zp=2,ef=1,rf=10,nf=-2,Il=e=>e==="*";function af(e,r){let n=e.split("/"),a=n.length;return n.some(Il)&&(a+=nf),r&&(a+=Zp),n.filter(t=>!Il(t)).reduce((t,o)=>t+(Xp.test(o)?Jp:o===""?ef:rf),a)}function tf(e,r){return e.length===r.length&&e.slice(0,-1).every((a,t)=>a===r[t])?e[e.length-1]-r[r.length-1]:0}function of(e,r,n){let{routesMeta:a}=e,t={},o="/",i=[];for(let s=0;s<a.length;++s){let l=a[s],u=s===a.length-1,h=o==="/"?r:r.slice(o.length)||"/",p=sf({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),g=l.route;if(!p)return null;Object.assign(t,p.params),i.push({params:t,pathname:Ar([o,p.pathname]),pathnameBase:ff(Ar([o,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(o=Ar([o,p.pathnameBase]))}return i}function sf(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=lf(e.path,e.caseSensitive,e.end),t=r.match(n);if(!t)return null;let o=t[0],i=o.replace(/(.)\/+$/,"$1"),s=t.slice(1);return{params:a.reduce((u,h,p)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let A=s[p]||"";i=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const P=s[p];return y&&!P?u[g]=void 0:u[g]=(P||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function lf(e,r,n){r===void 0&&(r=!1),n===void 0&&(n=!0),Mt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],t="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(a.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),t+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?t+="\\/*$":e!==""&&e!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,r?void 0:"i"),a]}function uf(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Mt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function ps(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let n=r.endsWith("/")?r.length-1:r.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const cf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mf=e=>cf.test(e);function df(e,r){r===void 0&&(r="/");let{pathname:n,search:a="",hash:t=""}=typeof e=="string"?Gr(e):e,o;if(n)if(mf(n))o=n;else{if(n.includes("//")){let i=n;n=em(n),Mt(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+n))}n.startsWith("/")?o=xl(n.substring(1),"/"):o=xl(n,r)}else o=r;return{pathname:o,search:hf(a),hash:gf(t)}}function xl(e,r){let n=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?n.length>1&&n.pop():t!=="."&&n.push(t)}),n.length>1?n.join("/"):"/"}function vo(e,r,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pf(e){return e.filter((r,n)=>n===0||r.route.path&&r.route.path.length>0)}function fs(e,r){let n=pf(e);return r?n.map((a,t)=>t===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function hs(e,r,n,a){a===void 0&&(a=!1);let t;typeof e=="string"?t=Gr(e):(t=la({},e),Y(!t.pathname||!t.pathname.includes("?"),vo("?","pathname","search",t)),Y(!t.pathname||!t.pathname.includes("#"),vo("#","pathname","hash",t)),Y(!t.search||!t.search.includes("#"),vo("#","search","hash",t)));let o=e===""||t.pathname==="",i=o?"/":t.pathname,s;if(i==null)s=n;else{let p=r.length-1;if(!a&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),p-=1;t.pathname=g.join("/")}s=p>=0?r[p]:"/"}let l=df(t,s),u=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const em=e=>e.replace(/\/\/+/g,"/"),Ar=e=>em(e.join("/")),ff=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const rm=["post","put","patch","delete"];new Set(rm);const yf=["get",...rm];new Set(yf);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ua(){return ua=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ua.apply(null,arguments)}const gs=R.createContext(null),Af=R.createContext(null),Cr=R.createContext(null),zt=R.createContext(null),rr=R.createContext({outlet:null,matches:[],isDataRoute:!1}),nm=R.createContext(null);function Pf(e,r){let{relative:n}=r===void 0?{}:r;Tn()||Y(!1);let{basename:a,navigator:t}=R.useContext(Cr),{hash:o,pathname:i,search:s}=om(e,{relative:n}),l=i;return a!=="/"&&(l=i==="/"?a:Ar([a,i])),t.createHref({pathname:l,search:s,hash:o})}function Tn(){return R.useContext(zt)!=null}function ha(){return Tn()||Y(!1),R.useContext(zt).location}function am(e){R.useContext(Cr).static||R.useLayoutEffect(e)}function tm(){let{isDataRoute:e}=R.useContext(rr);return e?Df():wf()}function wf(){Tn()||Y(!1);let e=R.useContext(gs),{basename:r,future:n,navigator:a}=R.useContext(Cr),{matches:t}=R.useContext(rr),{pathname:o}=ha(),i=JSON.stringify(fs(t,n.v7_relativeSplatPath)),s=R.useRef(!1);return am(()=>{s.current=!0}),R.useCallback(function(u,h){if(h===void 0&&(h={}),!s.current)return;if(typeof u=="number"){a.go(u);return}let p=hs(u,JSON.parse(i),o,h.relative==="path");e==null&&r!=="/"&&(p.pathname=p.pathname==="/"?r:Ar([r,p.pathname])),(h.replace?a.replace:a.push)(p,h.state,h)},[r,a,i,o,e])}function Rf(){let{matches:e}=R.useContext(rr),r=e[e.length-1];return r?r.params:{}}function om(e,r){let{relative:n}=r===void 0?{}:r,{future:a}=R.useContext(Cr),{matches:t}=R.useContext(rr),{pathname:o}=ha(),i=JSON.stringify(fs(t,a.v7_relativeSplatPath));return R.useMemo(()=>hs(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function Tf(e,r){return kf(e,r)}function kf(e,r,n,a){Tn()||Y(!1);let{navigator:t}=R.useContext(Cr),{matches:o}=R.useContext(rr),i=o[o.length-1],s=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let u=ha(),h;if(r){var p;let C=typeof r=="string"?Gr(r):r;l==="/"||(p=C.pathname)!=null&&p.startsWith(l)||Y(!1),h=C}else h=u;let g=h.pathname||"/",y=g;if(l!=="/"){let C=l.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let P=qp(e,{pathname:y}),A=bf(P&&P.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Ar([l,t.encodeLocation?t.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:Ar([l,t.encodeLocation?t.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n,a);return r&&A?R.createElement(zt.Provider,{value:{location:ua({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:cr.Pop}},A):A}function Cf(){let e=Uf(),r=vf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,t={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},r),n?R.createElement("pre",{style:t},n):null,null)}const Ef=R.createElement(Cf,null);class Sf extends R.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){console.error("React Router caught the following error during render",r,n)}render(){return this.state.error!==void 0?R.createElement(rr.Provider,{value:this.props.routeContext},R.createElement(nm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Of(e){let{routeContext:r,match:n,children:a}=e,t=R.useContext(gs);return t&&t.static&&t.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(t.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(rr.Provider,{value:r},a)}function bf(e,r,n,a){var t;if(r===void 0&&(r=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=a)!=null&&o.v7_partialHydration&&r.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=(t=n)==null?void 0:t.errors;if(s!=null){let h=i.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);h>=0||Y(!1),i=i.slice(0,Math.min(i.length,h+1))}let l=!1,u=-1;if(n&&a&&a.v7_partialHydration)for(let h=0;h<i.length;h++){let p=i[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=h),p.route.id){let{loaderData:g,errors:y}=n,P=p.route.loader&&g[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||P){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((h,p,g)=>{let y,P=!1,A=null,C=null;n&&(y=s&&p.route.id?s[p.route.id]:void 0,A=p.route.errorElement||Ef,l&&(u<0&&g===0?(Lf("route-fallback"),P=!0,C=null):u===g&&(P=!0,C=p.route.hydrateFallbackElement||null)));let m=r.concat(i.slice(0,g+1)),c=()=>{let d;return y?d=A:P?d=C:p.route.Component?d=R.createElement(p.route.Component,null):p.route.element?d=p.route.element:d=h,R.createElement(Of,{match:p,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:d})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?R.createElement(Sf,{location:n.location,revalidation:n.revalidation,component:A,error:y,children:c(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):c()},null)}var im=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(im||{}),sm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sm||{});function If(e){let r=R.useContext(gs);return r||Y(!1),r}function xf(e){let r=R.useContext(Af);return r||Y(!1),r}function Nf(e){let r=R.useContext(rr);return r||Y(!1),r}function lm(e){let r=Nf(),n=r.matches[r.matches.length-1];return n.route.id||Y(!1),n.route.id}function Uf(){var e;let r=R.useContext(nm),n=xf(),a=lm();return r!==void 0?r:(e=n.errors)==null?void 0:e[a]}function Df(){let{router:e}=If(im.UseNavigateStable),r=lm(sm.UseNavigateStable),n=R.useRef(!1);return am(()=>{n.current=!0}),R.useCallback(function(t,o){o===void 0&&(o={}),n.current&&(typeof t=="number"?e.navigate(t):e.navigate(t,ua({fromRouteId:r},o)))},[e,r])}const Nl={};function Lf(e,r,n){Nl[e]||(Nl[e]=!0)}function _f(e,r){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Wf(e){let{to:r,replace:n,state:a,relative:t}=e;Tn()||Y(!1);let{future:o,static:i}=R.useContext(Cr),{matches:s}=R.useContext(rr),{pathname:l}=ha(),u=tm(),h=hs(r,fs(s,o.v7_relativeSplatPath),l,t==="path"),p=JSON.stringify(h);return R.useEffect(()=>u(JSON.parse(p),{replace:n,state:a,relative:t}),[u,p,t,n,a]),null}function $r(e){Y(!1)}function Mf(e){let{basename:r="/",children:n=null,location:a,navigationType:t=cr.Pop,navigator:o,static:i=!1,future:s}=e;Tn()&&Y(!1);let l=r.replace(/^\/*/,"/"),u=R.useMemo(()=>({basename:l,navigator:o,static:i,future:ua({v7_relativeSplatPath:!1},s)}),[l,s,o,i]);typeof a=="string"&&(a=Gr(a));let{pathname:h="/",search:p="",hash:g="",state:y=null,key:P="default"}=a,A=R.useMemo(()=>{let C=ps(h,l);return C==null?null:{location:{pathname:C,search:p,hash:g,state:y,key:P},navigationType:t}},[l,h,p,g,y,P,t]);return A==null?null:R.createElement(Cr.Provider,{value:u},R.createElement(zt.Provider,{children:n,value:A}))}function zf(e){let{children:r,location:n}=e;return Tf(fi(r),n)}new Promise(()=>{});function fi(e,r){r===void 0&&(r=[]);let n=[];return R.Children.forEach(e,(a,t)=>{if(!R.isValidElement(a))return;let o=[...r,t];if(a.type===R.Fragment){n.push.apply(n,fi(a.props.children,o));return}a.type!==$r&&Y(!1),!a.props.index||!a.props.children||Y(!1);let i={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(i.children=fi(a.props.children,o)),n.push(i)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},hi.apply(null,arguments)}function Bf(e,r){if(e==null)return{};var n={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(r.indexOf(a)!==-1)continue;n[a]=e[a]}return n}function Ff(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jf(e,r){return e.button===0&&(!r||r==="_self")&&!Ff(e)}const Vf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Gf="6";try{window.__reactRouterVersion=Gf}catch{}const Hf="startTransition",Ul=Um[Hf];function $f(e){let{basename:r,children:n,future:a,window:t}=e,o=R.useRef();o.current==null&&(o.current=Hp({window:t,v5Compat:!0}));let i=o.current,[s,l]=R.useState({action:i.action,location:i.location}),{v7_startTransition:u}=a||{},h=R.useCallback(p=>{u&&Ul?Ul(()=>l(p)):l(p)},[l,u]);return R.useLayoutEffect(()=>i.listen(h),[i,h]),R.useEffect(()=>_f(a),[a]),R.createElement(Mf,{basename:r,children:n,location:s.location,navigationType:s.action,navigator:i,future:a})}const Yf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fr=R.forwardRef(function(r,n){let{onClick:a,relative:t,reloadDocument:o,replace:i,state:s,target:l,to:u,preventScrollReset:h,viewTransition:p}=r,g=Bf(r,Vf),{basename:y}=R.useContext(Cr),P,A=!1;if(typeof u=="string"&&qf.test(u)&&(P=u,Yf))try{let d=new URL(window.location.href),v=u.startsWith("//")?new URL(d.protocol+u):new URL(u),T=ps(v.pathname,y);v.origin===d.origin&&T!=null?u=T+v.search+v.hash:A=!0}catch{}let C=Pf(u,{relative:t}),m=Qf(u,{replace:i,state:s,target:l,preventScrollReset:h,relative:t,viewTransition:p});function c(d){a&&a(d),d.defaultPrevented||m(d)}return R.createElement("a",hi({},g,{href:P||C,onClick:A||o?a:c,ref:n,target:l}))});var Dl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Dl||(Dl={}));var Ll;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ll||(Ll={}));function Qf(e,r){let{target:n,replace:a,state:t,preventScrollReset:o,relative:i,viewTransition:s}=r===void 0?{}:r,l=tm(),u=ha(),h=om(e,{relative:i});return R.useCallback(p=>{if(jf(p,n)){p.preventDefault();let g=a!==void 0?a:Pt(u)===Pt(h);l(e,{replace:g,state:t,preventScrollReset:o,relative:i,viewTransition:s})}},[u,l,h,a,t,n,e,o,i,s])}const Kf=`# Lesson 01 – Simple Present: Routines\r
\r
## Vocabulário (20)\r
- Cold soda\r
- Hot chocolate\r
- Iced Lemonade\r
- Fresh coconut water\r
- Sweet milkshake\r
- Sparkling water\r
- Warm tea\r
- Natural juice\r
- Creamy smoothie\r
- Refreshing beer\r
- Crispy bacon\r
- Soft bread\r
- Spicy chicken\r
- Sweet pancakes\r
- Salty popcorn\r
- Fresh sushi\r
- Hot pizza\r
- Cold ice cream\r
- Tasty burger\r
- Creamy pasta\r
\r
## Verbos\r
- To drink, To eat, To like\r
\r
## Gramática\r
- A or An\r
\r
## Preparação\r
- I drink _______\r
- I don't eat _____\r
- Do you like to eat _____?\r
\r
## Homework\r
1. Do you drink sparkling water?\r
2. Do you like to eat salty sushi?\r
3. Do you like smoothie?\r
4. Do you eat creamy pasta?\r
5. Do you like to eat bacon?`,Xf=`# Lesson 02 – Simple Present: Chores & Needs\r
\r
## Vocabulário (20)\r
- Dirty dishes\r
- Full trash can\r
- Wet floor\r
- Messy bedroom\r
- Clean laundry\r
- Empty fridge\r
- Broken lamp\r
- Open window\r
- Closed curtains\r
- Dead batteries\r
- Soap dispenser\r
- Broom and dustpan\r
- Vacuum cleaner\r
- Ironing board\r
- Washing machine\r
- Dish soap\r
- Trash bags\r
- Cleaning cloth\r
- Rubber gloves\r
- Laundry basket\r
\r
## Verbos\r
- To need, To want, To clean, To take out, To organize, To buy\r
\r
## Gramática\r
- What do you need? / What do you want?\r
\r
## Preparação\r
- I need _______\r
- I don't want to clean _____\r
- Do you need to buy _____?\r
\r
## Homework\r
1. Do you need to take out the trash?\r
2. What do you want to clean?\r
3. Do you need new trash bags?\r
4. What do you want to organize?\r
5. Do you need to buy dish soap?`,Jf=`# Lesson 03 - Simple Present: Morning Routines\r
\r
## Vocabulário (20)\r
- Alarm clock\r
- Soft pillow\r
- Warm shower\r
- Clean towel\r
- Blue toothbrush\r
- Mint toothpaste\r
- School uniform\r
- Black shoes\r
- Bus stop\r
- Coffee mug\r
- Fried eggs\r
- Toast bread\r
- Office badge\r
- Lunch box\r
- Phone charger\r
- Bedroom mirror\r
- Hair brush\r
- Kitchen table\r
- Backpack zipper\r
- Front door\r
\r
## Verbos\r
- To wake up, To brush, To get dressed, To pack, To leave\r
\r
## Gramática\r
- Simple Present com rotina diaria e expressoes de tempo.\r
\r
## Preparação\r
- I wake up _____\r
- I don't brush my teeth _____\r
- Do you leave home _____\r
\r
## Homework\r
1. Do you wake up at six?\r
2. Do you brush your teeth before breakfast?\r
3. Do you leave home at seven?\r
4. Do you use alarm clock in your routine?\r
5. Can you make a sentence with soft pillow?\r
`,Zf=`# Lesson 04 - Simple Present: Free Time Habits\r
\r
## Vocabulário (20)\r
- Funny movie\r
- Long series\r
- Pop playlist\r
- Soccer game\r
- Comic book\r
- Video game\r
- Running shoes\r
- Yoga mat\r
- Beach chair\r
- Cold lemonade\r
- Board game\r
- Family photo\r
- Music speaker\r
- Art class\r
- Dance lesson\r
- Park bench\r
- Tennis racket\r
- Story book\r
- Snack box\r
- Movie ticket\r
\r
## Verbos\r
- To relax, To watch, To listen, To train, To read\r
\r
## Gramática\r
- Adverbs of frequency: always, usually, sometimes, never.\r
\r
## Preparação\r
- I watch a funny movie _____\r
- I don't listen to loud music _____\r
- Do you train at the park _____\r
\r
## Homework\r
1. Do you watch a funny movie on Friday?\r
2. Do you listen to pop music at home?\r
3. Do you train at the park on weekends?\r
4. Do you use funny movie in your routine?\r
5. Can you make a sentence with long series?\r
`,eh=`# Lesson 05 - Simple Present 3rd: Family Routines\r
\r
## Vocabulário (20)\r
- Busy mother\r
- Friendly father\r
- Young brother\r
- Kind sister\r
- Grandma apron\r
- Family car\r
- Office desk\r
- School notebook\r
- Dinner table\r
- Phone call\r
- Garden flowers\r
- Weekend lunch\r
- Clean garage\r
- Shopping list\r
- House keys\r
- Work shoes\r
- Coffee break\r
- TV remote\r
- Dog leash\r
- Rain jacket\r
\r
## Verbos\r
- To cook, To drive, To work, To help, To call\r
\r
## Gramática\r
- He / She + verb-s no Simple Present.\r
\r
## Preparação\r
- My mother cooks dinner _____\r
- My father doesn't drive _____\r
- Does your sister help you _____\r
\r
## Homework\r
1. Does your mother cook dinner every day?\r
2. Does your father drive to work at eight?\r
3. Does your sister help you with homework?\r
4. Do you use busy mother in your routine?\r
5. Can you make a sentence with friendly father?\r
`,rh=`# Lesson 06 - Simple Present 3rd: Workplace Habits\r
\r
## Vocabulário (20)\r
- Office computer\r
- Meeting room\r
- Paper folder\r
- Company email\r
- Lunch break\r
- Glass elevator\r
- Reception desk\r
- Client list\r
- Printer paper\r
- Desk calendar\r
- Blue pen\r
- Water bottle\r
- Work laptop\r
- Name badge\r
- Coffee machine\r
- Office chair\r
- Project file\r
- Team message\r
- Phone headset\r
- Parking ticket\r
\r
## Verbos\r
- To answer, To schedule, To check, To print, To arrive\r
\r
## Gramática\r
- Perguntas com Does e negativas com does not.\r
\r
## Preparação\r
- Lucas answers emails _____\r
- Ana doesn't schedule meetings _____\r
- Does the manager check the project _____\r
\r
## Homework\r
1. Does Lucas answer emails every morning?\r
2. Does Ana schedule meetings on Tuesday?\r
3. Does the manager check the project file daily?\r
4. Do you use office computer in your routine?\r
5. Can you make a sentence with meeting room?\r
`,nh=`# Lesson 07 - Simple Present 3rd: Neighborhood Life\r
\r
## Vocabulário (20)\r
- Corner bakery\r
- Small market\r
- Street vendor\r
- Green garden\r
- Mail box\r
- Front gate\r
- Bus driver\r
- Local park\r
- Trash truck\r
- Fruit stand\r
- Quiet street\r
- Dog walker\r
- Flower pot\r
- Milk bottle\r
- Morning newspaper\r
- Sidewalk bench\r
- City bus\r
- White fence\r
- Car wash\r
- Shop window\r
\r
## Verbos\r
- To open, To close, To deliver, To sweep, To water\r
\r
## Gramática\r
- Uso de he, she e it em frases curtas.\r
\r
## Preparação\r
- The bakery opens _____\r
- The mailman doesn't deliver letters _____\r
- Does your neighbor water the plants _____\r
\r
## Homework\r
1. Does the bakery open at seven?\r
2. Does the mailman deliver letters every day?\r
3. Does your neighbor water the plants at night?\r
4. Do you use corner bakery in your routine?\r
5. Can you make a sentence with small market?\r
`,ah=`# Lesson 08 - Simple Present 3rd: Pets and Care\r
\r
## Vocabulário (20)\r
- Happy dog\r
- Small cat\r
- Pet bowl\r
- Dog food\r
- Cat toy\r
- Short leash\r
- Pet shampoo\r
- Vet clinic\r
- Water dish\r
- Soft blanket\r
- Pet house\r
- Rubber ball\r
- Clean litter box\r
- Dog collar\r
- Park path\r
- Treat bag\r
- Animal brush\r
- Pet bed\r
- Open yard\r
- Blue carrier\r
\r
## Verbos\r
- To feed, To walk, To sleep, To bark, To wash\r
\r
## Gramática\r
- Perguntas curtas com Does he / Does she / Does it.\r
\r
## Preparação\r
- Pedro feeds the dog _____\r
- The cat doesn't sleep in _____\r
- Does Marina walk her dog _____\r
\r
## Homework\r
1. Does Pedro feed the dog every morning?\r
2. Does the cat sleep on the sofa?\r
3. Does Marina walk her dog after work?\r
4. Do you use happy dog in your routine?\r
5. Can you make a sentence with small cat?\r
`,th=`# Lesson 11 - Simple Past: Weekend Activities\r
\r
## Vocabulário (20)\r
- Beach trip\r
- Family lunch\r
- Clean kitchen\r
- Movie night\r
- Park walk\r
- Birthday cake\r
- City museum\r
- Photo album\r
- Bus ticket\r
- Rainy Sunday\r
- Coffee shop\r
- Sports game\r
- Phone photos\r
- Hotel room\r
- Street market\r
- Dinner plate\r
- Travel bag\r
- Museum guide\r
- Weekend plan\r
- Quiet afternoon\r
\r
## Verbos\r
- To visit, To watch, To cook, To clean, To rest\r
\r
## Gramática\r
- Simple Past regular com -ed em afirmativas.\r
\r
## Preparação\r
- I visited my aunt _____\r
- I didn't watch TV _____\r
- Did you rest at home in _____\r
\r
## Homework\r
1. Did you visit your aunt on Saturday?\r
2. Did you watch a movie last night?\r
3. Did you rest at home in the afternoon?\r
4. Do you use beach trip in your routine?\r
5. Can you make a sentence with family lunch?\r
`,oh=`# Lesson 12 - Simple Past: Last Vacation\r
\r
## Vocabulário (20)\r
- Beach hotel\r
- Tour guide\r
- Travel ticket\r
- Sunny island\r
- Museum map\r
- City square\r
- Boat ride\r
- Hotel breakfast\r
- Travel passport\r
- Photo camera\r
- Street cafe\r
- Bus station\r
- Souvenir shop\r
- Ocean view\r
- Night market\r
- Travel journal\r
- Sand castle\r
- Pool chair\r
- Hotel key\r
- Travel backpack\r
\r
## Verbos\r
- To travel, To stay, To walk, To enjoy, To rent\r
\r
## Gramática\r
- Negativas e perguntas com did / didn't.\r
\r
## Preparação\r
- I traveled to Bahia _____\r
- I didn't stay in a _____\r
- Did you walk on the beach _____\r
\r
## Homework\r
1. Did you travel to Bahia in January?\r
2. Did you stay in a small hotel?\r
3. Did you walk on the beach every morning?\r
4. Do you use beach hotel in your routine?\r
5. Can you make a sentence with tour guide?\r
`,ih=`# Lesson 13 - Simple Past: Busy Day Yesterday\r
\r
## Vocabulário (20)\r
- Late meeting\r
- Office report\r
- Dirty car\r
- Phone battery\r
- Lunch receipt\r
- Closed store\r
- Work email\r
- Kitchen sink\r
- Laundry soap\r
- Desk lamp\r
- City traffic\r
- Rainy street\r
- Bus card\r
- Phone charger\r
- Shopping bag\r
- Dinner pan\r
- Desk drawer\r
- Client message\r
- Family call\r
- Broken umbrella\r
\r
## Verbos\r
- To finish, To answer, To organize, To wash, To call\r
\r
## Gramática\r
- Time expressions: yesterday, last night, this morning.\r
\r
## Preparação\r
- I finished work at _____\r
- I didn't organize the kitchen _____\r
- Did you call your friend _____\r
\r
## Homework\r
1. Did you finish work at six yesterday?\r
2. Did you organize your desk last night?\r
3. Did you call your friend after dinner?\r
4. Do you use late meeting in your routine?\r
5. Can you make a sentence with office report?\r
`,sh=`# Lesson 14 - Simple Past: Party Preparation\r
\r
## Vocabulário (20)\r
- Birthday balloons\r
- Party table\r
- Paper plates\r
- Fruit juice\r
- Music box\r
- Dance floor\r
- Birthday banner\r
- Party lights\r
- Guest list\r
- Chocolate cake\r
- Plastic cups\r
- Party hat\r
- Gift bag\r
- Photo booth\r
- Doorbell sound\r
- Snack tray\r
- Party speaker\r
- Late guest\r
- Clean living room\r
- Birthday candles\r
\r
## Verbos\r
- To decorate, To invite, To arrive, To dance, To celebrate\r
\r
## Gramática\r
- Simple Past regular com verbos de preparacao.\r
\r
## Preparação\r
- I decorated the living _____\r
- I didn't invite _____\r
- Did you celebrate your birthday _____\r
\r
## Homework\r
1. Did you decorate the living room yesterday?\r
2. Did you invite your cousins by phone?\r
3. Did you celebrate your birthday at home?\r
4. Do you use birthday balloons in your routine?\r
5. Can you make a sentence with party table?\r
`,lh=`# Lesson 15 - Simple Past Irregular: City Errands\r
\r
## Vocabulário (20)\r
- Bank line\r
- Bus card\r
- Market bag\r
- New shoes\r
- Fresh bread\r
- Bus stop\r
- Cash wallet\r
- Store receipt\r
- City center\r
- Taxi ride\r
- Phone credit\r
- Train station\r
- Gift card\r
- Cold rain\r
- Street sign\r
- Bakery counter\r
- Shopping mall\r
- Cash register\r
- Bus ticket\r
- Umbrella stand\r
\r
## Verbos\r
- To go, To buy, To get, To come, To pay\r
\r
## Gramática\r
- Simple Past irregular: go, buy, get, come.\r
\r
## Preparação\r
- I went to the bank _____\r
- I didn't buy _____\r
- Did you get home at eight _____\r
\r
## Homework\r
1. Did you go to the bank this morning?\r
2. Did you buy fresh bread after work?\r
3. Did you get home at eight last night?\r
4. Do you use bank line in your routine?\r
5. Can you make a sentence with bus card?\r
`,uh=`# Lesson 16 - Simple Past Irregular: Special Memories\r
\r
## Vocabulário (20)\r
- Old friend\r
- Family photo\r
- School reunion\r
- Warm hug\r
- Coffee shop\r
- Birthday gift\r
- Handmade card\r
- Family dinner\r
- Weekend message\r
- Photo frame\r
- Bus ride\r
- Movie poster\r
- Small present\r
- Happy tears\r
- Phone selfie\r
- Nice surprise\r
- Sunday lunch\r
- Blue notebook\r
- Long conversation\r
- Sweet dessert\r
\r
## Verbos\r
- To see, To meet, To have, To make, To give\r
\r
## Gramática\r
- Simple Past irregular: see, meet, have, make.\r
\r
## Preparação\r
- I saw my cousin _____\r
- I didn't meet my _____\r
- Did you have dinner with _____\r
\r
## Homework\r
1. Did you see your cousin on Sunday?\r
2. Did you meet an old friend downtown?\r
3. Did you have dinner with your family?\r
4. Do you use old friend in your routine?\r
5. Can you make a sentence with family photo?\r
`,ch=`# LESSON 01 – Simple Present: Food & Drinks\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1) – Primeira aula  \r
**Objetivo:** Apresentar o Simple Present com os verbos **EAT**, **DRINK** e **LIKE**, usando substantivos + adjetivos.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Cold soda\r
- Hot chocolate\r
- Iced Lemonade\r
- Fresh coconut water\r
- Sweet milkshake\r
- Sparkling water\r
- Warm tea\r
- Natural juice\r
- Creamy smoothie\r
- Refreshing beer\r
- Crispy bacon\r
- Soft bread\r
- Spicy chicken\r
- Sweet pancakes\r
- Salty popcorn\r
- Fresh sushi\r
- Hot pizza\r
- Cold ice cream\r
- Tasty burger\r
- Creamy pasta\r
\r
## VERBOS DA AULA\r
\r
- **TO EAT** (comer)\r
- **TO DRINK** (beber)\r
- **TO LIKE** (gostar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I drink cold soda. | I don't drink cold soda. | Do you drink cold soda? |\r
| I eat hot pizza. | I don't eat hot pizza. | Do you eat hot pizza? |\r
| I like sweet pancakes. | I don't like sweet pancakes. | Do you like sweet pancakes? |\r
\r
## CRONOGRAMA DA AULA\r
\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Apresentar imagens de comidas e bebidas.\r
\r
- Professor mostra a imagem e pergunta: *"What is this?"*\r
- Alunos respondem em português ou inglês.\r
- Professor apresenta o nome em inglês e o adjetivo.\r
\r
**Exemplo:**\r
- Mostra imagem de pizza → *"It's pizza. Hot pizza."*\r
- Mostra imagem de soda → *"It's soda. Cold soda."*\r
\r
**Objetivo:** Apresentar o vocabulário de forma visual e contextualizada.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
**Passo 1 (5 min):** Professor apresenta a tabela de vocabulário.\r
\r
- Lê cada par em voz alta.\r
- Alunos repetem em coro.\r
\r
**Exemplo:**\r
- Professor: *"Cold soda"*\r
- Alunos: *"Cold soda"*\r
- Professor: *"Hot chocolate"*\r
- Alunos: *"Hot chocolate"*\r
\r
### 3. GRAMMAR FOCUS – A / AN (10 minutos)\r
\r
**Explicação no quadro:**\r
\r
| Regra | Exemplo |\r
|-------|---------|\r
| **A** + som de CONSOANTE | a cold soda, a hot pizza |\r
| **AN** + som de VOGAL (a, e, i, o, u) | an iced lemonade, an ice cream |\r
\r
**ATENÇÃO:** A regra é pelo **som**, não pela letra!\r
\r
- ✓ a fresh sushi (som de consoante /s/)\r
- ✓ an iced tea (som de vogal /ai/)\r
\r
**Prática rápida (5 min):**\r
\r
Professor fala o par. Alunos levantam a mão:\r
- Direita = **A**\r
- Esquerda = **AN**\r
\r
| Item | Resposta |\r
|------|----------|\r
| ___ cold soda | A |\r
| ___ iced lemonade | AN |\r
| ___ hot pizza | A |\r
| ___ sweet ice cream | AN |\r
| ___ fresh sushi | A |\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
**Quadro com as 3 estruturas:**\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I drink cold soda. | I don't drink cold soda. | Do you drink cold soda? |\r
| I eat hot pizza. | I don't eat hot pizza. | Do you eat hot pizza? |\r
| I like sweet pancakes. | I don't like sweet pancakes. | Do you like sweet pancakes? |\r
\r
**Explicação:**\r
\r
- **Afirmativa:** *I + verbo + a/an + adjetivo + substantivo*\r
- **Negativa:** *I + don't + verbo + a/an + adjetivo + substantivo*\r
- **Pergunta:** *Do + you + verbo + a/an + adjetivo + substantivo?*\r
\r
**Respostas para perguntas:**\r
- *Yes, I ...*\r
- *No, I don't...*\r
\r
**Perguntas:**\r
- *Do you drink cold soda?*\r
- *Do you drink iced lemonade?*\r
- *Do you eat spicy chicken?*\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. *Do you like creamy pasta?*\r
2. *Do you drink warm tea?*\r
3. *Do you like fresh sushi?*\r
\r
**Exemplo de diálogo:**\r
\r
> A: *Do you drink cold soda?*  \r
> B: *Yes, I do. Do you eat hot pizza?*  \r
> A: *No, I don't. I like sweet pancakes.*\r
\r
**Professor circula pela sala ajudando e corrigindo.**\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
**Revisão rápida:**\r
\r
Professor pergunta a 3 alunos aleatórios:\r
\r
1. *Do you eat hot pizza?*\r
2. *Do you like sweet pancakes?*\r
\r
**Recapitulação no quadro:**\r
\r
- Afirmativa: *I drink cold soda.*\r
- Negativa: *I don't drink cold soda.*\r
- Pergunta: *Do you drink cold soda?*\r
- Respostas: *Yes, I do. / No, I don't.*\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Quebra-gelo  |\r
| Vocabulary | 10 min | Repetição |\r
| Grammar: A/AN | 10 min | Explicação e prática com gestos |\r
| Structure | 10 min | Afirmativa, negativa, pergunta |\r
| Controlled Practice | 20 min | Preenchimento de lacunas |\r
| Wrap-up | 5 min | Revisão e homework |\r
`,mh=`# LESSON 02 - Simple Present: Chores & Needs\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar o Simple Present com need, want e tarefas domesticas simples.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Dirty dishes\r
- Full trash can\r
- Wet floor\r
- Messy bedroom\r
- Clean laundry\r
- Empty fridge\r
- Broken lamp\r
- Open window\r
- Closed curtains\r
- Dead batteries\r
- Soap dispenser\r
- Broom and dustpan\r
- Vacuum cleaner\r
- Ironing board\r
- Washing machine\r
- Dish soap\r
- Trash bags\r
- Cleaning cloth\r
- Rubber gloves\r
- Laundry basket\r
\r
## VERBOS DA AULA\r
\r
- **TO NEED** (precisar)\r
- **TO WANT** (querer)\r
- **TO CLEAN** (limpar)\r
- **TO TAKE OUT** (levar para fora)\r
- **TO ORGANIZE** (organizar)\r
- **TO BUY** (comprar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I need trash bags. | I don't need trash bags. | Do you need trash bags? |\r
| I want to clean the kitchen. | I don't want to clean the kitchen. | Do you want to clean the kitchen? |\r
| I organize the laundry basket. | I don't organize the laundry basket now. | Do you organize the laundry basket? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema chores & needs com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** What do you need? / What do you want?\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I need trash bags. | I don't need trash bags. | Do you need trash bags? |\r
| I want to clean the kitchen. | I don't want to clean the kitchen. | Do you want to clean the kitchen? |\r
| I organize the laundry basket. | I don't organize the laundry basket now. | Do you organize the laundry basket? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Do you need trash bags?\r
2. Do you want to clean the kitchen?\r
3. Do you organize the laundry basket?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Do you need trash bags?\r
2. Do you want to clean the kitchen?\r
3. Do you organize the laundry basket?\r
4. Do you use dirty dishes in your routine?\r
5. Can you make a sentence with full trash can?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: What do you need? / What do you want?\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,dh=`# LESSON 03 - Simple Present: Morning Routines\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Apresentar o Simple Present com rotinas da manha e horarios basicos.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Alarm clock\r
- Soft pillow\r
- Warm shower\r
- Clean towel\r
- Blue toothbrush\r
- Mint toothpaste\r
- School uniform\r
- Black shoes\r
- Bus stop\r
- Coffee mug\r
- Fried eggs\r
- Toast bread\r
- Office badge\r
- Lunch box\r
- Phone charger\r
- Bedroom mirror\r
- Hair brush\r
- Kitchen table\r
- Backpack zipper\r
- Front door\r
\r
## VERBOS DA AULA\r
\r
- **TO WAKE UP** (acordar)\r
- **TO BRUSH** (escovar)\r
- **TO GET DRESSED** (vestir-se)\r
- **TO PACK** (arrumar)\r
- **TO LEAVE** (sair)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I wake up at six. | I don't wake up late. | Do you wake up at six? |\r
| I brush my teeth before breakfast. | I don't brush my teeth after lunch. | Do you brush your teeth before breakfast? |\r
| I leave home at seven. | I don't leave home at eight. | Do you leave home at seven? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema morning routines com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Simple Present com rotina diaria e expressoes de tempo.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I wake up at six. | I don't wake up late. | Do you wake up at six? |\r
| I brush my teeth before breakfast. | I don't brush my teeth after lunch. | Do you brush your teeth before breakfast? |\r
| I leave home at seven. | I don't leave home at eight. | Do you leave home at seven? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Do you wake up at six?\r
2. Do you brush your teeth before breakfast?\r
3. Do you leave home at seven?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Do you wake up at six?\r
2. Do you brush your teeth before breakfast?\r
3. Do you leave home at seven?\r
4. Do you use alarm clock in your routine?\r
5. Can you make a sentence with soft pillow?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Simple Present com rotina diaria e expressoes de tempo.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,ph=`# LESSON 04 - Simple Present: Free Time Habits\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar o Simple Present com hobbies e frequencia no tempo livre.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Funny movie\r
- Long series\r
- Pop playlist\r
- Soccer game\r
- Comic book\r
- Video game\r
- Running shoes\r
- Yoga mat\r
- Beach chair\r
- Cold lemonade\r
- Board game\r
- Family photo\r
- Music speaker\r
- Art class\r
- Dance lesson\r
- Park bench\r
- Tennis racket\r
- Story book\r
- Snack box\r
- Movie ticket\r
\r
## VERBOS DA AULA\r
\r
- **TO RELAX** (relaxar)\r
- **TO WATCH** (assistir)\r
- **TO LISTEN** (ouvir)\r
- **TO TRAIN** (treinar)\r
- **TO READ** (ler)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I watch a funny movie on Friday. | I don't watch TV in the morning. | Do you watch a funny movie on Friday? |\r
| I listen to pop music at home. | I don't listen to loud music at work. | Do you listen to pop music at home? |\r
| I train at the park on weekends. | I don't train at night. | Do you train at the park on weekends? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema free time habits com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Adverbs of frequency: always, usually, sometimes, never.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I watch a funny movie on Friday. | I don't watch TV in the morning. | Do you watch a funny movie on Friday? |\r
| I listen to pop music at home. | I don't listen to loud music at work. | Do you listen to pop music at home? |\r
| I train at the park on weekends. | I don't train at night. | Do you train at the park on weekends? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Do you watch a funny movie on Friday?\r
2. Do you listen to pop music at home?\r
3. Do you train at the park on weekends?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Do you watch a funny movie on Friday?\r
2. Do you listen to pop music at home?\r
3. Do you train at the park on weekends?\r
4. Do you use funny movie in your routine?\r
5. Can you make a sentence with long series?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Adverbs of frequency: always, usually, sometimes, never.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,fh=`# LESSON 05 - Simple Present 3rd: Family Routines\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir a terceira pessoa no Simple Present com rotinas de familiares.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Busy mother\r
- Friendly father\r
- Young brother\r
- Kind sister\r
- Grandma apron\r
- Family car\r
- Office desk\r
- School notebook\r
- Dinner table\r
- Phone call\r
- Garden flowers\r
- Weekend lunch\r
- Clean garage\r
- Shopping list\r
- House keys\r
- Work shoes\r
- Coffee break\r
- TV remote\r
- Dog leash\r
- Rain jacket\r
\r
## VERBOS DA AULA\r
\r
- **TO COOK** (cozinhar)\r
- **TO DRIVE** (dirigir)\r
- **TO WORK** (trabalhar)\r
- **TO HELP** (ajudar)\r
- **TO CALL** (ligar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| My mother cooks dinner every day. | My mother doesn't cook lunch at work. | Does your mother cook dinner every day? |\r
| My father drives to work at eight. | My father doesn't drive on Sunday. | Does your father drive to work at eight? |\r
| My sister helps me with homework. | My sister doesn't help me at night. | Does your sister help you with homework? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema family routines com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** He / She + verb-s no Simple Present.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| My mother cooks dinner every day. | My mother doesn't cook lunch at work. | Does your mother cook dinner every day? |\r
| My father drives to work at eight. | My father doesn't drive on Sunday. | Does your father drive to work at eight? |\r
| My sister helps me with homework. | My sister doesn't help me at night. | Does your sister help you with homework? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Does your mother cook dinner every day?\r
2. Does your father drive to work at eight?\r
3. Does your sister help you with homework?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Does your mother cook dinner every day?\r
2. Does your father drive to work at eight?\r
3. Does your sister help you with homework?\r
4. Do you use busy mother in your routine?\r
5. Can you make a sentence with friendly father?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: He / She + verb-s no Simple Present.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,hh=`# LESSON 06 - Simple Present 3rd: Workplace Habits\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar a terceira pessoa com rotinas de trabalho e escritorio.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Office computer\r
- Meeting room\r
- Paper folder\r
- Company email\r
- Lunch break\r
- Glass elevator\r
- Reception desk\r
- Client list\r
- Printer paper\r
- Desk calendar\r
- Blue pen\r
- Water bottle\r
- Work laptop\r
- Name badge\r
- Coffee machine\r
- Office chair\r
- Project file\r
- Team message\r
- Phone headset\r
- Parking ticket\r
\r
## VERBOS DA AULA\r
\r
- **TO ANSWER** (responder)\r
- **TO SCHEDULE** (agendar)\r
- **TO CHECK** (verificar)\r
- **TO PRINT** (imprimir)\r
- **TO ARRIVE** (chegar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| Lucas answers emails every morning. | Lucas doesn't answer emails at home. | Does Lucas answer emails every morning? |\r
| Ana schedules meetings on Tuesday. | Ana doesn't schedule meetings on Sunday. | Does Ana schedule meetings on Tuesday? |\r
| The manager checks the project file daily. | The manager doesn't check the file at night. | Does the manager check the project file daily? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema workplace habits com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Perguntas com Does e negativas com does not.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| Lucas answers emails every morning. | Lucas doesn't answer emails at home. | Does Lucas answer emails every morning? |\r
| Ana schedules meetings on Tuesday. | Ana doesn't schedule meetings on Sunday. | Does Ana schedule meetings on Tuesday? |\r
| The manager checks the project file daily. | The manager doesn't check the file at night. | Does the manager check the project file daily? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Does Lucas answer emails every morning?\r
2. Does Ana schedule meetings on Tuesday?\r
3. Does the manager check the project file daily?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Does Lucas answer emails every morning?\r
2. Does Ana schedule meetings on Tuesday?\r
3. Does the manager check the project file daily?\r
4. Do you use office computer in your routine?\r
5. Can you make a sentence with meeting room?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Perguntas com Does e negativas com does not.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,gh=`# LESSON 07 - Simple Present 3rd: Neighborhood Life\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar a terceira pessoa com acoes de vizinhos e comunidade.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Corner bakery\r
- Small market\r
- Street vendor\r
- Green garden\r
- Mail box\r
- Front gate\r
- Bus driver\r
- Local park\r
- Trash truck\r
- Fruit stand\r
- Quiet street\r
- Dog walker\r
- Flower pot\r
- Milk bottle\r
- Morning newspaper\r
- Sidewalk bench\r
- City bus\r
- White fence\r
- Car wash\r
- Shop window\r
\r
## VERBOS DA AULA\r
\r
- **TO OPEN** (abrir)\r
- **TO CLOSE** (fechar)\r
- **TO DELIVER** (entregar)\r
- **TO SWEEP** (varrer)\r
- **TO WATER** (regar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| The bakery opens at seven. | The bakery doesn't open at ten. | Does the bakery open at seven? |\r
| The mailman delivers letters every day. | The mailman doesn't deliver letters on Sunday. | Does the mailman deliver letters every day? |\r
| My neighbor waters the plants at night. | My neighbor doesn't water the plants at noon. | Does your neighbor water the plants at night? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema neighborhood life com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Uso de he, she e it em frases curtas.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| The bakery opens at seven. | The bakery doesn't open at ten. | Does the bakery open at seven? |\r
| The mailman delivers letters every day. | The mailman doesn't deliver letters on Sunday. | Does the mailman deliver letters every day? |\r
| My neighbor waters the plants at night. | My neighbor doesn't water the plants at noon. | Does your neighbor water the plants at night? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Does the bakery open at seven?\r
2. Does the mailman deliver letters every day?\r
3. Does your neighbor water the plants at night?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Does the bakery open at seven?\r
2. Does the mailman deliver letters every day?\r
3. Does your neighbor water the plants at night?\r
4. Do you use corner bakery in your routine?\r
5. Can you make a sentence with small market?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Uso de he, she e it em frases curtas.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,vh=`# LESSON 08 - Simple Present 3rd: Pets and Care\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Expandir a terceira pessoa com cuidados diários de animais.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Happy dog\r
- Small cat\r
- Pet bowl\r
- Dog food\r
- Cat toy\r
- Short leash\r
- Pet shampoo\r
- Vet clinic\r
- Water dish\r
- Soft blanket\r
- Pet house\r
- Rubber ball\r
- Clean litter box\r
- Dog collar\r
- Park path\r
- Treat bag\r
- Animal brush\r
- Pet bed\r
- Open yard\r
- Blue carrier\r
\r
## VERBOS DA AULA\r
\r
- **TO FEED** (alimentar)\r
- **TO WALK** (caminhar)\r
- **TO SLEEP** (dormir)\r
- **TO BARK** (latir)\r
- **TO WASH** (lavar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| Pedro feeds the dog every morning. | Pedro doesn't feed the dog at midnight. | Does Pedro feed the dog every morning? |\r
| The cat sleeps on the sofa. | The cat doesn't sleep in the yard. | Does the cat sleep on the sofa? |\r
| Marina walks her dog after work. | Marina doesn't walk her dog before school. | Does Marina walk her dog after work? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema pets and care com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Perguntas curtas com Does he / Does she / Does it.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| Pedro feeds the dog every morning. | Pedro doesn't feed the dog at midnight. | Does Pedro feed the dog every morning? |\r
| The cat sleeps on the sofa. | The cat doesn't sleep in the yard. | Does the cat sleep on the sofa? |\r
| Marina walks her dog after work. | Marina doesn't walk her dog before school. | Does Marina walk her dog after work? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Does Pedro feed the dog every morning?\r
2. Does the cat sleep on the sofa?\r
3. Does Marina walk her dog after work?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Does Pedro feed the dog every morning?\r
2. Does the cat sleep on the sofa?\r
3. Does Marina walk her dog after work?\r
4. Do you use happy dog in your routine?\r
5. Can you make a sentence with small cat?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Perguntas curtas com Does he / Does she / Does it.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,yh=`# LESSON 09 - Revisao 1: Simple Present Review\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Revisar rotinas, terceira pessoa e vocabulario das primeiras unidades.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Cold soda\r
- Dirty dishes\r
- Alarm clock\r
- Funny movie\r
- Busy mother\r
- Office computer\r
- Corner bakery\r
- Happy dog\r
- Warm shower\r
- Pop playlist\r
- Grandma apron\r
- Meeting room\r
- Flower pot\r
- Pet bowl\r
- Lunch box\r
- Movie ticket\r
- Work laptop\r
- Dog collar\r
- Trash bags\r
- Phone call\r
\r
## VERBOS DA AULA\r
\r
- **TO REVIEW** (revisar)\r
- **TO ANSWER** (responder)\r
- **TO COMPARE** (comparar)\r
- **TO CORRECT** (corrigir)\r
- **TO REPEAT** (repetir)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I review my notes in class. | I don't review at home today. | Do you review your notes in class? |\r
| She answers the exercise carefully. | She doesn't answer too fast. | Does she answer the exercise carefully? |\r
| We repeat the questions together. | We don't repeat the answers alone. | Do you repeat the questions together? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema simple present review com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Revisao de do, does, don't e doesn't.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I review my notes in class. | I don't review at home today. | Do you review your notes in class? |\r
| She answers the exercise carefully. | She doesn't answer too fast. | Does she answer the exercise carefully? |\r
| We repeat the questions together. | We don't repeat the answers alone. | Do you repeat the questions together? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Do you review your notes in class?\r
2. Does she answer the exercise carefully?\r
3. Do you repeat the questions together?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Do you review your notes in class?\r
2. Does she answer the exercise carefully?\r
3. Do you repeat the questions together?\r
4. Do you use cold soda in your routine?\r
5. Can you make a sentence with dirty dishes?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Revisao de do, does, don't e doesn't.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Ah=`# LESSON 10 - Prova 1: Simple Present Assessment\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Avaliar o uso de Simple Present, terceira pessoa e vocabulario inicial.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Answer sheet\r
- Pencil case\r
- Quiet classroom\r
- Test paper\r
- School desk\r
- Blue eraser\r
- Wall clock\r
- Simple question\r
- Correct answer\r
- Short sentence\r
- Listening task\r
- Reading text\r
- Grammar chart\r
- Teacher table\r
- Student badge\r
- Black marker\r
- Notebook page\r
- Practice line\r
- Exam folder\r
- Water bottle\r
\r
## VERBOS DA AULA\r
\r
- **TO COMPLETE** (completar)\r
- **TO IDENTIFY** (identificar)\r
- **TO MARK** (marcar)\r
- **TO WRITE** (escrever)\r
- **TO CHECK** (verificar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I complete the test calmly. | I don't complete the test in five minutes. | Do you complete the test calmly? |\r
| The student writes short answers. | The student doesn't write in Portuguese. | Does the student write short answers? |\r
| The teacher checks the answer sheet. | The teacher doesn't check the paper during the first minute. | Does the teacher check the answer sheet? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema simple present assessment com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Leitura, escrita e perguntas curtas no Simple Present.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I complete the test calmly. | I don't complete the test in five minutes. | Do you complete the test calmly? |\r
| The student writes short answers. | The student doesn't write in Portuguese. | Does the student write short answers? |\r
| The teacher checks the answer sheet. | The teacher doesn't check the paper during the first minute. | Does the teacher check the answer sheet? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Do you complete the test calmly?\r
2. Does the student write short answers?\r
3. Does the teacher check the answer sheet?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Do you complete the test calmly?\r
2. Does the student write short answers?\r
3. Does the teacher check the answer sheet?\r
4. Do you use answer sheet in your routine?\r
5. Can you make a sentence with pencil case?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Leitura, escrita e perguntas curtas no Simple Present.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Ph=`# LESSON 11 - Simple Past: Weekend Activities\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir o Simple Past regular com acoes concluídas no fim de semana.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Beach trip\r
- Family lunch\r
- Clean kitchen\r
- Movie night\r
- Park walk\r
- Birthday cake\r
- City museum\r
- Photo album\r
- Bus ticket\r
- Rainy Sunday\r
- Coffee shop\r
- Sports game\r
- Phone photos\r
- Hotel room\r
- Street market\r
- Dinner plate\r
- Travel bag\r
- Museum guide\r
- Weekend plan\r
- Quiet afternoon\r
\r
## VERBOS DA AULA\r
\r
- **TO VISIT** (visitar)\r
- **TO WATCH** (assistir)\r
- **TO COOK** (cozinhar)\r
- **TO CLEAN** (limpar)\r
- **TO REST** (descansar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I visited my aunt on Saturday. | I didn't visit my aunt on Sunday. | Did you visit your aunt on Saturday? |\r
| I watched a movie last night. | I didn't watch TV after midnight. | Did you watch a movie last night? |\r
| I rested at home in the afternoon. | I didn't rest at the office. | Did you rest at home in the afternoon? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema weekend activities com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Simple Past regular com -ed em afirmativas.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I visited my aunt on Saturday. | I didn't visit my aunt on Sunday. | Did you visit your aunt on Saturday? |\r
| I watched a movie last night. | I didn't watch TV after midnight. | Did you watch a movie last night? |\r
| I rested at home in the afternoon. | I didn't rest at the office. | Did you rest at home in the afternoon? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Did you visit your aunt on Saturday?\r
2. Did you watch a movie last night?\r
3. Did you rest at home in the afternoon?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Did you visit your aunt on Saturday?\r
2. Did you watch a movie last night?\r
3. Did you rest at home in the afternoon?\r
4. Do you use beach trip in your routine?\r
5. Can you make a sentence with family lunch?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Simple Past regular com -ed em afirmativas.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,wh=`# LESSON 12 - Simple Past: Last Vacation\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar o passado regular com viagens e ferias.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Beach hotel\r
- Tour guide\r
- Travel ticket\r
- Sunny island\r
- Museum map\r
- City square\r
- Boat ride\r
- Hotel breakfast\r
- Travel passport\r
- Photo camera\r
- Street cafe\r
- Bus station\r
- Souvenir shop\r
- Ocean view\r
- Night market\r
- Travel journal\r
- Sand castle\r
- Pool chair\r
- Hotel key\r
- Travel backpack\r
\r
## VERBOS DA AULA\r
\r
- **TO TRAVEL** (viajar)\r
- **TO STAY** (ficar)\r
- **TO WALK** (caminhar)\r
- **TO ENJOY** (aproveitar)\r
- **TO RENT** (alugar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I traveled to Bahia in January. | I didn't travel in February. | Did you travel to Bahia in January? |\r
| I stayed in a small hotel. | I didn't stay in a big resort. | Did you stay in a small hotel? |\r
| I walked on the beach every morning. | I didn't walk at night. | Did you walk on the beach every morning? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema last vacation com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Negativas e perguntas com did / didn't.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I traveled to Bahia in January. | I didn't travel in February. | Did you travel to Bahia in January? |\r
| I stayed in a small hotel. | I didn't stay in a big resort. | Did you stay in a small hotel? |\r
| I walked on the beach every morning. | I didn't walk at night. | Did you walk on the beach every morning? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Did you travel to Bahia in January?\r
2. Did you stay in a small hotel?\r
3. Did you walk on the beach every morning?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Did you travel to Bahia in January?\r
2. Did you stay in a small hotel?\r
3. Did you walk on the beach every morning?\r
4. Do you use beach hotel in your routine?\r
5. Can you make a sentence with tour guide?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Negativas e perguntas com did / didn't.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Rh=`# LESSON 13 - Simple Past: Busy Day Yesterday\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar o passado regular com sequencia de acoes do dia anterior.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Late meeting\r
- Office report\r
- Dirty car\r
- Phone battery\r
- Lunch receipt\r
- Closed store\r
- Work email\r
- Kitchen sink\r
- Laundry soap\r
- Desk lamp\r
- City traffic\r
- Rainy street\r
- Bus card\r
- Phone charger\r
- Shopping bag\r
- Dinner pan\r
- Desk drawer\r
- Client message\r
- Family call\r
- Broken umbrella\r
\r
## VERBOS DA AULA\r
\r
- **TO FINISH** (terminar)\r
- **TO ANSWER** (responder)\r
- **TO ORGANIZE** (organizar)\r
- **TO WASH** (lavar)\r
- **TO CALL** (ligar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I finished work at six yesterday. | I didn't finish work at eight. | Did you finish work at six yesterday? |\r
| I organized my desk last night. | I didn't organize the kitchen last night. | Did you organize your desk last night? |\r
| I called my friend after dinner. | I didn't call my friend before lunch. | Did you call your friend after dinner? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema busy day yesterday com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Time expressions: yesterday, last night, this morning.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I finished work at six yesterday. | I didn't finish work at eight. | Did you finish work at six yesterday? |\r
| I organized my desk last night. | I didn't organize the kitchen last night. | Did you organize your desk last night? |\r
| I called my friend after dinner. | I didn't call my friend before lunch. | Did you call your friend after dinner? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Did you finish work at six yesterday?\r
2. Did you organize your desk last night?\r
3. Did you call your friend after dinner?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Did you finish work at six yesterday?\r
2. Did you organize your desk last night?\r
3. Did you call your friend after dinner?\r
4. Do you use late meeting in your routine?\r
5. Can you make a sentence with office report?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Time expressions: yesterday, last night, this morning.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Th=`# LESSON 14 - Simple Past: Party Preparation\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar o passado regular com compras, preparacao e eventos.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Birthday balloons\r
- Party table\r
- Paper plates\r
- Fruit juice\r
- Music box\r
- Dance floor\r
- Birthday banner\r
- Party lights\r
- Guest list\r
- Chocolate cake\r
- Plastic cups\r
- Party hat\r
- Gift bag\r
- Photo booth\r
- Doorbell sound\r
- Snack tray\r
- Party speaker\r
- Late guest\r
- Clean living room\r
- Birthday candles\r
\r
## VERBOS DA AULA\r
\r
- **TO DECORATE** (decorar)\r
- **TO INVITE** (convidar)\r
- **TO ARRIVE** (chegar)\r
- **TO DANCE** (dancar)\r
- **TO CELEBRATE** (celebrar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I decorated the living room yesterday. | I didn't decorate the kitchen. | Did you decorate the living room yesterday? |\r
| I invited my cousins by phone. | I didn't invite my boss. | Did you invite your cousins by phone? |\r
| We celebrated my birthday at home. | We didn't celebrate at a restaurant. | Did you celebrate your birthday at home? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema party preparation com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Simple Past regular com verbos de preparacao.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I decorated the living room yesterday. | I didn't decorate the kitchen. | Did you decorate the living room yesterday? |\r
| I invited my cousins by phone. | I didn't invite my boss. | Did you invite your cousins by phone? |\r
| We celebrated my birthday at home. | We didn't celebrate at a restaurant. | Did you celebrate your birthday at home? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Did you decorate the living room yesterday?\r
2. Did you invite your cousins by phone?\r
3. Did you celebrate your birthday at home?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Did you decorate the living room yesterday?\r
2. Did you invite your cousins by phone?\r
3. Did you celebrate your birthday at home?\r
4. Do you use birthday balloons in your routine?\r
5. Can you make a sentence with party table?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Simple Past regular com verbos de preparacao.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,kh=`# LESSON 15 - Simple Past Irregular: City Errands\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir verbos irregulares no passado em tarefas da cidade.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Bank line\r
- Bus card\r
- Market bag\r
- New shoes\r
- Fresh bread\r
- Bus stop\r
- Cash wallet\r
- Store receipt\r
- City center\r
- Taxi ride\r
- Phone credit\r
- Train station\r
- Gift card\r
- Cold rain\r
- Street sign\r
- Bakery counter\r
- Shopping mall\r
- Cash register\r
- Bus ticket\r
- Umbrella stand\r
\r
## VERBOS DA AULA\r
\r
- **TO GO** (ir)\r
- **TO BUY** (comprar)\r
- **TO GET** (chegar/obter)\r
- **TO COME** (vir)\r
- **TO PAY** (pagar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I went to the bank this morning. | I didn't go to the mall. | Did you go to the bank this morning? |\r
| I bought fresh bread after work. | I didn't buy a cake. | Did you buy fresh bread after work? |\r
| I got home at eight last night. | I didn't get home at ten. | Did you get home at eight last night? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema city errands com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Simple Past irregular: go, buy, get, come.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I went to the bank this morning. | I didn't go to the mall. | Did you go to the bank this morning? |\r
| I bought fresh bread after work. | I didn't buy a cake. | Did you buy fresh bread after work? |\r
| I got home at eight last night. | I didn't get home at ten. | Did you get home at eight last night? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Did you go to the bank this morning?\r
2. Did you buy fresh bread after work?\r
3. Did you get home at eight last night?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Did you go to the bank this morning?\r
2. Did you buy fresh bread after work?\r
3. Did you get home at eight last night?\r
4. Do you use bank line in your routine?\r
5. Can you make a sentence with bus card?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Simple Past irregular: go, buy, get, come.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Ch=`# LESSON 16 - Simple Past Irregular: Special Memories\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar verbos irregulares de experiencia e lembrancas.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Old friend\r
- Family photo\r
- School reunion\r
- Warm hug\r
- Coffee shop\r
- Birthday gift\r
- Handmade card\r
- Family dinner\r
- Weekend message\r
- Photo frame\r
- Bus ride\r
- Movie poster\r
- Small present\r
- Happy tears\r
- Phone selfie\r
- Nice surprise\r
- Sunday lunch\r
- Blue notebook\r
- Long conversation\r
- Sweet dessert\r
\r
## VERBOS DA AULA\r
\r
- **TO SEE** (ver)\r
- **TO MEET** (encontrar)\r
- **TO HAVE** (ter)\r
- **TO MAKE** (fazer)\r
- **TO GIVE** (dar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I saw my cousin on Sunday. | I didn't see my teacher. | Did you see your cousin on Sunday? |\r
| I met an old friend downtown. | I didn't meet my boss downtown. | Did you meet an old friend downtown? |\r
| I had dinner with my family. | I didn't have dinner alone. | Did you have dinner with your family? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema special memories com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Simple Past irregular: see, meet, have, make.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I saw my cousin on Sunday. | I didn't see my teacher. | Did you see your cousin on Sunday? |\r
| I met an old friend downtown. | I didn't meet my boss downtown. | Did you meet an old friend downtown? |\r
| I had dinner with my family. | I didn't have dinner alone. | Did you have dinner with your family? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Did you see your cousin on Sunday?\r
2. Did you meet an old friend downtown?\r
3. Did you have dinner with your family?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Did you see your cousin on Sunday?\r
2. Did you meet an old friend downtown?\r
3. Did you have dinner with your family?\r
4. Do you use old friend in your routine?\r
5. Can you make a sentence with family photo?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Simple Past irregular: see, meet, have, make.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Eh=`# LESSON 17 - Simple Past Irregular: Unexpected Problems\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar o passado irregular com situacoes inesperadas.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Lost wallet\r
- Broken phone\r
- House key\r
- Train ticket\r
- Office bag\r
- Street corner\r
- Taxi driver\r
- Phone screen\r
- Small problem\r
- Police station\r
- Work document\r
- City map\r
- Plastic bottle\r
- Bus seat\r
- Heavy backpack\r
- Important message\r
- Late bus\r
- Wet sidewalk\r
- Coffee stain\r
- Travel card\r
\r
## VERBOS DA AULA\r
\r
- **TO LOSE** (perder)\r
- **TO FIND** (encontrar)\r
- **TO BREAK** (quebrar)\r
- **TO TAKE** (tirar/pegar)\r
- **TO TELL** (contar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I lost my wallet on the bus. | I didn't lose my phone. | Did you lose your wallet on the bus? |\r
| I found my keys in the kitchen. | I didn't find my keys in the car. | Did you find your keys in the kitchen? |\r
| I took a taxi after work. | I didn't take the train. | Did you take a taxi after work? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema unexpected problems com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Simple Past irregular: lose, find, break, take.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I lost my wallet on the bus. | I didn't lose my phone. | Did you lose your wallet on the bus? |\r
| I found my keys in the kitchen. | I didn't find my keys in the car. | Did you find your keys in the kitchen? |\r
| I took a taxi after work. | I didn't take the train. | Did you take a taxi after work? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Did you lose your wallet on the bus?\r
2. Did you find your keys in the kitchen?\r
3. Did you take a taxi after work?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Did you lose your wallet on the bus?\r
2. Did you find your keys in the kitchen?\r
3. Did you take a taxi after work?\r
4. Do you use lost wallet in your routine?\r
5. Can you make a sentence with broken phone?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Simple Past irregular: lose, find, break, take.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Sh=`# LESSON 18 - Simple Past Irregular: School Experiences\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Ampliar verbos irregulares com experiencias de estudo e infancia.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- School project\r
- English book\r
- Short story\r
- Class notebook\r
- First lesson\r
- Group activity\r
- Teacher question\r
- Reading task\r
- Study table\r
- School bell\r
- Colored pencil\r
- Notebook cover\r
- Library card\r
- Math class\r
- History test\r
- Open dictionary\r
- Study group\r
- Class board\r
- School trip\r
- English song\r
\r
## VERBOS DA AULA\r
\r
- **TO WRITE** (escrever)\r
- **TO READ** (ler)\r
- **TO SPEAK** (falar)\r
- **TO BEGIN** (comecar)\r
- **TO UNDERSTAND** (entender)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I wrote my homework before dinner. | I didn't write my homework at school. | Did you write your homework before dinner? |\r
| I read a short story in class. | I didn't read a long article. | Did you read a short story in class? |\r
| The lesson began at nine. | The lesson didn't begin at ten. | Did the lesson begin at nine? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema school experiences com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Simple Past irregular: write, read, speak, begin.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I wrote my homework before dinner. | I didn't write my homework at school. | Did you write your homework before dinner? |\r
| I read a short story in class. | I didn't read a long article. | Did you read a short story in class? |\r
| The lesson began at nine. | The lesson didn't begin at ten. | Did the lesson begin at nine? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Did you write your homework before dinner?\r
2. Did you read a short story in class?\r
3. Did the lesson begin at nine?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Did you write your homework before dinner?\r
2. Did you read a short story in class?\r
3. Did the lesson begin at nine?\r
4. Do you use school project in your routine?\r
5. Can you make a sentence with english book?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Simple Past irregular: write, read, speak, begin.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Oh=`# LESSON 19 - Revisao 2: Past Tenses Review\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Revisar passado regular e irregular com atividades acumuladas.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Weekend plan\r
- Travel ticket\r
- Birthday balloons\r
- Fresh bread\r
- Old friend\r
- Lost wallet\r
- School project\r
- Taxi ride\r
- Coffee shop\r
- Movie poster\r
- Study group\r
- Family dinner\r
- Late bus\r
- Beach hotel\r
- Party lights\r
- Bank line\r
- Office report\r
- English book\r
- Broken phone\r
- Photo frame\r
\r
## VERBOS DA AULA\r
\r
- **TO REVIEW** (revisar)\r
- **TO MATCH** (usar em contexto da aula)\r
- **TO RETELL** (usar em contexto da aula)\r
- **TO ANSWER** (responder)\r
- **TO COMPARE** (comparar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I reviewed the past forms today. | I didn't review alone. | Did you review the past forms today? |\r
| She matched the verbs correctly. | She didn't match the answers quickly. | Did she match the verbs correctly? |\r
| We retold the story in class. | We didn't retell the story in Portuguese. | Did you retell the story in class? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema past tenses review com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Revisao de did, didn't e formas irregulares frequentes.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I reviewed the past forms today. | I didn't review alone. | Did you review the past forms today? |\r
| She matched the verbs correctly. | She didn't match the answers quickly. | Did she match the verbs correctly? |\r
| We retold the story in class. | We didn't retell the story in Portuguese. | Did you retell the story in class? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Did you review the past forms today?\r
2. Did she match the verbs correctly?\r
3. Did you retell the story in class?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Did you review the past forms today?\r
2. Did she match the verbs correctly?\r
3. Did you retell the story in class?\r
4. Do you use weekend plan in your routine?\r
5. Can you make a sentence with travel ticket?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Revisao de did, didn't e formas irregulares frequentes.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,bh=`# LESSON 20 - Prova 2: Past Tenses Assessment\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Avaliar o uso de passado regular e irregular em frases e leitura.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Past sentence\r
- Grammar quiz\r
- Answer line\r
- Reading paragraph\r
- Listening audio\r
- Test notebook\r
- Class timer\r
- Correct option\r
- Verb list\r
- Story card\r
- Blue marker\r
- Simple question\r
- Short answer\r
- Exam paper\r
- Quiet room\r
- Teacher note\r
- Student table\r
- Pencil box\r
- Wall poster\r
- Final score\r
\r
## VERBOS DA AULA\r
\r
- **TO COMPLETE** (completar)\r
- **TO SELECT** (selecionar)\r
- **TO WRITE** (escrever)\r
- **TO IDENTIFY** (identificar)\r
- **TO REVISE** (revisar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I completed the past tense test. | I didn't complete the test late. | Did you complete the past tense test? |\r
| The student selected the correct option. | The student didn't select two options. | Did the student select the correct option? |\r
| The class revised the answers together. | The class didn't revise before the test. | Did the class revise the answers together? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema past tenses assessment com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Simple Past regular e irregular em contexto.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I completed the past tense test. | I didn't complete the test late. | Did you complete the past tense test? |\r
| The student selected the correct option. | The student didn't select two options. | Did the student select the correct option? |\r
| The class revised the answers together. | The class didn't revise before the test. | Did the class revise the answers together? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Did you complete the past tense test?\r
2. Did the student select the correct option?\r
3. Did the class revise the answers together?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Did you complete the past tense test?\r
2. Did the student select the correct option?\r
3. Did the class revise the answers together?\r
4. Do you use past sentence in your routine?\r
5. Can you make a sentence with grammar quiz?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Simple Past regular e irregular em contexto.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Ih=`# LESSON 21 - Verb to be: Personal Information\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir o verbo to be para nome, nacionalidade e ocupacao.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Brazilian student\r
- English teacher\r
- Friendly nurse\r
- Busy driver\r
- Tall neighbor\r
- Happy child\r
- Office worker\r
- Short name\r
- Family surname\r
- Student badge\r
- Small city\r
- Phone number\r
- Email address\r
- Quiet classroom\r
- Work uniform\r
- Open notebook\r
- Name tag\r
- Job title\r
- School ID\r
- Blue passport\r
\r
## VERBOS DA AULA\r
\r
- **TO BE** (ser/estar)\r
- **TO INTRODUCE** (apresentar)\r
- **TO DESCRIBE** (descrever)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am a Brazilian student. | I am not a doctor. | Are you a Brazilian student? |\r
| She is an English teacher. | She is not a nurse. | Is she an English teacher? |\r
| They are my classmates. | They are not my cousins. | Are they your classmates? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema personal information com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Am / Is / Are em informacoes pessoais.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am a Brazilian student. | I am not a doctor. | Are you a Brazilian student? |\r
| She is an English teacher. | She is not a nurse. | Is she an English teacher? |\r
| They are my classmates. | They are not my cousins. | Are they your classmates? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you a Brazilian student?\r
2. Is she an English teacher?\r
3. Are they your classmates?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you a Brazilian student?\r
2. Is she an English teacher?\r
3. Are they your classmates?\r
4. Do you use brazilian student in your routine?\r
5. Can you make a sentence with english teacher?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Am / Is / Are em informacoes pessoais.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,xh=`# LESSON 22 - Verb to be: Feelings and States\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar o verbo to be com sentimentos e estados fisicos.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Happy student\r
- Tired worker\r
- Hungry child\r
- Sleepy baby\r
- Nervous driver\r
- Calm teacher\r
- Busy mother\r
- Sad movie\r
- Cold room\r
- Hot kitchen\r
- Open window\r
- Warm blanket\r
- Heavy bag\r
- Late bus\r
- Long day\r
- Short break\r
- Bright light\r
- Quiet street\r
- Clean bed\r
- Fresh water\r
\r
## VERBOS DA AULA\r
\r
- **TO BE** (ser/estar)\r
- **TO FEEL** (sentir)\r
- **TO DESCRIBE** (descrever)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am tired after work. | I am not sleepy now. | Are you tired after work? |\r
| He is hungry before lunch. | He is not thirsty now. | Is he hungry before lunch? |\r
| We are calm in class. | We are not nervous today. | Are you calm in class? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema feelings and states com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Adjectives after am / is / are.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am tired after work. | I am not sleepy now. | Are you tired after work? |\r
| He is hungry before lunch. | He is not thirsty now. | Is he hungry before lunch? |\r
| We are calm in class. | We are not nervous today. | Are you calm in class? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you tired after work?\r
2. Is he hungry before lunch?\r
3. Are you calm in class?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you tired after work?\r
2. Is he hungry before lunch?\r
3. Are you calm in class?\r
4. Do you use happy student in your routine?\r
5. Can you make a sentence with tired worker?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Adjectives after am / is / are.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Nh=`# LESSON 23 - Verb to be: Places and Locations\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar o verbo to be com lugares e localizacao.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- At school\r
- In the kitchen\r
- On the sofa\r
- At work\r
- In the park\r
- At home\r
- Near the bank\r
- Behind the door\r
- Next to the table\r
- In the classroom\r
- At the bus stop\r
- On the second floor\r
- In the bathroom\r
- At the bakery\r
- On the street\r
- In the office\r
- At the market\r
- Near the hospital\r
- In the living room\r
- At the station\r
\r
## VERBOS DA AULA\r
\r
- **TO BE** (ser/estar)\r
- **TO LOCATE** (localizar)\r
- **TO IDENTIFY** (identificar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am at home now. | I am not at the office. | Are you at home now? |\r
| The keys are on the table. | The keys are not in the bag. | Are the keys on the table? |\r
| My mother is at the bakery. | My mother is not at the bank. | Is your mother at the bakery? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema places and locations com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Am / is / are + in, at, on.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am at home now. | I am not at the office. | Are you at home now? |\r
| The keys are on the table. | The keys are not in the bag. | Are the keys on the table? |\r
| My mother is at the bakery. | My mother is not at the bank. | Is your mother at the bakery? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you at home now?\r
2. Are the keys on the table?\r
3. Is your mother at the bakery?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you at home now?\r
2. Are the keys on the table?\r
3. Is your mother at the bakery?\r
4. Do you use at school in your routine?\r
5. Can you make a sentence with in the kitchen?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Am / is / are + in, at, on.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Uh=`# LESSON 24 - Verb to be: Jobs and Roles\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Expandir o verbo to be com profissoes, papeis e descricoes simples.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Bus driver\r
- School principal\r
- Store manager\r
- Office assistant\r
- Dental nurse\r
- Soccer coach\r
- Music student\r
- Math teacher\r
- Restaurant waiter\r
- Police officer\r
- Taxi driver\r
- Hotel receptionist\r
- Coffee barista\r
- Factory worker\r
- Graphic designer\r
- Young intern\r
- Team leader\r
- Project analyst\r
- Friendly cashier\r
- Travel agent\r
\r
## VERBOS DA AULA\r
\r
- **TO BE** (ser/estar)\r
- **TO WORK** (trabalhar)\r
- **TO IDENTIFY** (identificar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| My brother is a taxi driver. | My brother is not a chef. | Is your brother a taxi driver? |\r
| They are office assistants. | They are not sales managers. | Are they office assistants? |\r
| You are a music student. | You are not a history teacher. | Are you a music student? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema jobs and roles com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Questions with What are you? / Who is she?\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| My brother is a taxi driver. | My brother is not a chef. | Is your brother a taxi driver? |\r
| They are office assistants. | They are not sales managers. | Are they office assistants? |\r
| You are a music student. | You are not a history teacher. | Are you a music student? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Is your brother a taxi driver?\r
2. Are they office assistants?\r
3. Are you a music student?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Is your brother a taxi driver?\r
2. Are they office assistants?\r
3. Are you a music student?\r
4. Do you use bus driver in your routine?\r
5. Can you make a sentence with school principal?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Questions with What are you? / Who is she?\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Dh=`# LESSON 25 - There to be: Rooms at Home\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir there is / there are com comodos e objetos da casa.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Big sofa\r
- Wooden table\r
- Clean kitchen\r
- White fridge\r
- Small bathroom\r
- Blue bedroom\r
- Wall mirror\r
- Floor lamp\r
- Kitchen sink\r
- Soft rug\r
- Open shelf\r
- Dining chair\r
- Book cabinet\r
- Laundry room\r
- Front door\r
- Window curtain\r
- TV stand\r
- Coffee table\r
- Dish rack\r
- Family picture\r
\r
## VERBOS DA AULA\r
\r
- **TO HAVE** (ter)\r
- **TO SHOW** (mostrar)\r
- **TO DESCRIBE** (descrever)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There is a big sofa in the living room. | There is not a TV in the kitchen. | Is there a big sofa in the living room? |\r
| There are two chairs in the kitchen. | There are not five chairs in the kitchen. | Are there two chairs in the kitchen? |\r
| There is a mirror on the wall. | There is not a mirror in the garden. | Is there a mirror on the wall? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema rooms at home com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** There is / There are em descricoes de casa.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There is a big sofa in the living room. | There is not a TV in the kitchen. | Is there a big sofa in the living room? |\r
| There are two chairs in the kitchen. | There are not five chairs in the kitchen. | Are there two chairs in the kitchen? |\r
| There is a mirror on the wall. | There is not a mirror in the garden. | Is there a mirror on the wall? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Is there a big sofa in the living room?\r
2. Are there two chairs in the kitchen?\r
3. Is there a mirror on the wall?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Is there a big sofa in the living room?\r
2. Are there two chairs in the kitchen?\r
3. Is there a mirror on the wall?\r
4. Do you use big sofa in your routine?\r
5. Can you make a sentence with wooden table?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: There is / There are em descricoes de casa.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Lh=`# LESSON 26 - There to be: My Classroom\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar there is / there are com itens de sala de aula.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Teacher desk\r
- Student chair\r
- Class board\r
- Blue marker\r
- Open notebook\r
- Wall clock\r
- School backpack\r
- Reading poster\r
- Window fan\r
- Water bottle\r
- Class projector\r
- Door handle\r
- Book shelf\r
- Trash can\r
- Pencil case\r
- Study chart\r
- Paper sheet\r
- School map\r
- Music speaker\r
- Class tablet\r
\r
## VERBOS DA AULA\r
\r
- **TO HAVE** (ter)\r
- **TO COUNT** (contar)\r
- **TO POINT** (apontar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There is a projector in the classroom. | There is not a television in the classroom. | Is there a projector in the classroom? |\r
| There are twenty chairs in the room. | There are not ten chairs in the room. | Are there twenty chairs in the room? |\r
| There is a clock on the wall. | There is not a clock on the floor. | Is there a clock on the wall? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema my classroom com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** There is / there are + articles and numbers.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There is a projector in the classroom. | There is not a television in the classroom. | Is there a projector in the classroom? |\r
| There are twenty chairs in the room. | There are not ten chairs in the room. | Are there twenty chairs in the room? |\r
| There is a clock on the wall. | There is not a clock on the floor. | Is there a clock on the wall? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Is there a projector in the classroom?\r
2. Are there twenty chairs in the room?\r
3. Is there a clock on the wall?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Is there a projector in the classroom?\r
2. Are there twenty chairs in the room?\r
3. Is there a clock on the wall?\r
4. Do you use teacher desk in your routine?\r
5. Can you make a sentence with student chair?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: There is / there are + articles and numbers.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,_h=`# LESSON 27 - There to be: Around the City\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar there is / there are com lugares da cidade.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- City bank\r
- Public park\r
- Bus station\r
- Coffee shop\r
- Corner pharmacy\r
- Small school\r
- Big hospital\r
- Fruit market\r
- City library\r
- Police station\r
- Gas station\r
- Book store\r
- Pet shop\r
- Traffic light\r
- Main avenue\r
- Parking lot\r
- Bus lane\r
- Street corner\r
- Tourist map\r
- Train platform\r
\r
## VERBOS DA AULA\r
\r
- **TO LOCATE** (localizar)\r
- **TO DESCRIBE** (descrever)\r
- **TO ASK** (usar em contexto da aula)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There is a pharmacy near my house. | There is not a bakery near my house. | Is there a pharmacy near your house? |\r
| There are two parks in my neighborhood. | There are not five parks in my neighborhood. | Are there two parks in your neighborhood? |\r
| There is a bus station downtown. | There is not a train station downtown. | Is there a bus station downtown? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema around the city com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** There is / are com preposicoes de lugar.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There is a pharmacy near my house. | There is not a bakery near my house. | Is there a pharmacy near your house? |\r
| There are two parks in my neighborhood. | There are not five parks in my neighborhood. | Are there two parks in your neighborhood? |\r
| There is a bus station downtown. | There is not a train station downtown. | Is there a bus station downtown? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Is there a pharmacy near your house?\r
2. Are there two parks in your neighborhood?\r
3. Is there a bus station downtown?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Is there a pharmacy near your house?\r
2. Are there two parks in your neighborhood?\r
3. Is there a bus station downtown?\r
4. Do you use city bank in your routine?\r
5. Can you make a sentence with public park?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: There is / are com preposicoes de lugar.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Wh=`# LESSON 28 - There to be: At the Supermarket\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Expandir there is / there are com alimentos e setores do mercado.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Fresh apples\r
- Cold milk\r
- Frozen pizza\r
- Rice bag\r
- Bean package\r
- Orange juice\r
- Cleaning aisle\r
- Snack shelf\r
- Fruit section\r
- Checkout line\r
- Shopping cart\r
- Price tag\r
- Cash register\r
- Plastic bag\r
- Store basket\r
- Frozen chicken\r
- Fresh bread\r
- Chocolate bar\r
- Soap bottle\r
- Paper towel\r
\r
## VERBOS DA AULA\r
\r
- **TO BUY** (comprar)\r
- **TO LOOK FOR** (procurar)\r
- **TO COUNT** (contar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There is some milk in the fridge. | There is not any soda in the fridge. | Is there any milk in the fridge? |\r
| There are some apples on the table. | There are not any grapes on the table. | Are there any apples on the table? |\r
| There is a checkout line near the door. | There is not a bakery inside the store. | Is there a checkout line near the door? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema at the supermarket com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Some / any com there is / there are.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There is some milk in the fridge. | There is not any soda in the fridge. | Is there any milk in the fridge? |\r
| There are some apples on the table. | There are not any grapes on the table. | Are there any apples on the table? |\r
| There is a checkout line near the door. | There is not a bakery inside the store. | Is there a checkout line near the door? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Is there any milk in the fridge?\r
2. Are there any apples on the table?\r
3. Is there a checkout line near the door?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Is there any milk in the fridge?\r
2. Are there any apples on the table?\r
3. Is there a checkout line near the door?\r
4. Do you use fresh apples in your routine?\r
5. Can you make a sentence with cold milk?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Some / any com there is / there are.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Mh=`# LESSON 29 - Present Continuous: At Home Right Now\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir o Present Continuous com acoes acontecendo agora em casa.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Hot stove\r
- TV remote\r
- Study notebook\r
- Kitchen sink\r
- Phone charger\r
- Dinner pan\r
- Living room\r
- Clean plate\r
- Open laptop\r
- Laundry basket\r
- Running water\r
- Family sofa\r
- Wall clock\r
- Music speaker\r
- Small table\r
- Blue cup\r
- Reading lamp\r
- Bedroom door\r
- Soft pillow\r
- Coffee mug\r
\r
## VERBOS DA AULA\r
\r
- **TO COOK** (cozinhar)\r
- **TO WATCH** (assistir)\r
- **TO STUDY** (usar em contexto da aula)\r
- **TO WASH** (lavar)\r
- **TO TALK** (usar em contexto da aula)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am cooking dinner now. | I am not cooking lunch now. | Are you cooking dinner now? |\r
| My brother is watching TV now. | My brother is not watching a movie now. | Is your brother watching TV now? |\r
| We are studying in the living room. | We are not studying in the kitchen. | Are you studying in the living room? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema at home right now com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Am / is / are + verb-ing.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am cooking dinner now. | I am not cooking lunch now. | Are you cooking dinner now? |\r
| My brother is watching TV now. | My brother is not watching a movie now. | Is your brother watching TV now? |\r
| We are studying in the living room. | We are not studying in the kitchen. | Are you studying in the living room? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you cooking dinner now?\r
2. Is your brother watching TV now?\r
3. Are you studying in the living room?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you cooking dinner now?\r
2. Is your brother watching TV now?\r
3. Are you studying in the living room?\r
4. Do you use hot stove in your routine?\r
5. Can you make a sentence with tv remote?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Am / is / are + verb-ing.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,zh=`# LESSON 30 - Present Continuous: Office Actions\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar o Present Continuous com acoes do trabalho no momento.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Office laptop\r
- Phone headset\r
- Printer paper\r
- Client email\r
- Meeting room\r
- Reception desk\r
- Company chat\r
- Coffee machine\r
- Blue folder\r
- Desk calendar\r
- Glass door\r
- Waiting chair\r
- Project board\r
- Office badge\r
- Paper file\r
- Water bottle\r
- Desk lamp\r
- White wall\r
- Lunch box\r
- Work notebook\r
\r
## VERBOS DA AULA\r
\r
- **TO TYPE** (digitar)\r
- **TO ANSWER** (responder)\r
- **TO PRINT** (imprimir)\r
- **TO SPEAK** (falar)\r
- **TO WAIT** (esperar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am typing an email now. | I am not typing a report now. | Are you typing an email now? |\r
| The receptionist is answering the phone. | The receptionist is not answering the manager. | Is the receptionist answering the phone? |\r
| They are waiting in the meeting room. | They are not waiting in the hallway. | Are they waiting in the meeting room? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema office actions com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Yes/No questions in the Present Continuous.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am typing an email now. | I am not typing a report now. | Are you typing an email now? |\r
| The receptionist is answering the phone. | The receptionist is not answering the manager. | Is the receptionist answering the phone? |\r
| They are waiting in the meeting room. | They are not waiting in the hallway. | Are they waiting in the meeting room? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you typing an email now?\r
2. Is the receptionist answering the phone?\r
3. Are they waiting in the meeting room?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you typing an email now?\r
2. Is the receptionist answering the phone?\r
3. Are they waiting in the meeting room?\r
4. Do you use office laptop in your routine?\r
5. Can you make a sentence with phone headset?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Yes/No questions in the Present Continuous.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Bh=`# LESSON 31 - Present Continuous: On the Street\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar o Present Continuous com pessoas e movimento na rua.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Busy avenue\r
- Yellow taxi\r
- City bus\r
- Pedestrian crossing\r
- Green umbrella\r
- Street vendor\r
- Phone screen\r
- Heavy bag\r
- Traffic light\r
- Bike lane\r
- Bus stop\r
- Open store\r
- Rain jacket\r
- Street map\r
- Coffee cup\r
- Car window\r
- Small backpack\r
- City square\r
- Newsstand corner\r
- Wet sidewalk\r
\r
## VERBOS DA AULA\r
\r
- **TO WALK** (caminhar)\r
- **TO DRIVE** (dirigir)\r
- **TO CROSS** (atravessar)\r
- **TO CARRY** (carregar)\r
- **TO RAIN** (chover)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| A woman is walking to the bus stop. | A woman is not walking to the bank. | Is a woman walking to the bus stop? |\r
| The taxi is stopping at the corner. | The taxi is not stopping at the station. | Is the taxi stopping at the corner? |\r
| It is raining in the city center. | It is not raining at the beach. | Is it raining in the city center? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema on the street com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Present Continuous com verbos de movimento.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| A woman is walking to the bus stop. | A woman is not walking to the bank. | Is a woman walking to the bus stop? |\r
| The taxi is stopping at the corner. | The taxi is not stopping at the station. | Is the taxi stopping at the corner? |\r
| It is raining in the city center. | It is not raining at the beach. | Is it raining in the city center? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Is a woman walking to the bus stop?\r
2. Is the taxi stopping at the corner?\r
3. Is it raining in the city center?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Is a woman walking to the bus stop?\r
2. Is the taxi stopping at the corner?\r
3. Is it raining in the city center?\r
4. Do you use busy avenue in your routine?\r
5. Can you make a sentence with yellow taxi?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Present Continuous com verbos de movimento.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Fh=`# LESSON 32 - Present Continuous: Leisure Time Now\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Expandir o Present Continuous com lazer e atividades do momento.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Swimming pool\r
- Dance class\r
- Guitar lesson\r
- Beach towel\r
- Music stage\r
- Cold juice\r
- Soccer ball\r
- Beach chair\r
- Phone selfie\r
- Running shoes\r
- Family picnic\r
- Park bench\r
- Sun hat\r
- Snack box\r
- Water bottle\r
- Blue guitar\r
- Music speaker\r
- Photo camera\r
- Art workshop\r
- Ice cream cart\r
\r
## VERBOS DA AULA\r
\r
- **TO SWIM** (nadar)\r
- **TO DANCE** (dancar)\r
- **TO PLAY** (jogar/tocar)\r
- **TO SING** (cantar)\r
- **TO TAKE** (tirar/pegar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| The children are playing soccer now. | The children are not playing volleyball now. | Are the children playing soccer now? |\r
| She is taking photos at the park. | She is not taking photos at home. | Is she taking photos at the park? |\r
| We are dancing in class right now. | We are not dancing in the street. | Are you dancing in class right now? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema leisure time now com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Present Continuous com now, right now, at the moment.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| The children are playing soccer now. | The children are not playing volleyball now. | Are the children playing soccer now? |\r
| She is taking photos at the park. | She is not taking photos at home. | Is she taking photos at the park? |\r
| We are dancing in class right now. | We are not dancing in the street. | Are you dancing in class right now? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are the children playing soccer now?\r
2. Is she taking photos at the park?\r
3. Are you dancing in class right now?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are the children playing soccer now?\r
2. Is she taking photos at the park?\r
3. Are you dancing in class right now?\r
4. Do you use swimming pool in your routine?\r
5. Can you make a sentence with dance class?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Present Continuous com now, right now, at the moment.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,jh=`# LESSON 33 - Revisao 3: Be and Continuous Review\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Revisar verb to be, there to be e present continuous.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Teacher desk\r
- Busy avenue\r
- Happy student\r
- Big sofa\r
- Office laptop\r
- Swimming pool\r
- City bank\r
- Tired worker\r
- Class projector\r
- Traffic light\r
- Family sofa\r
- Taxi driver\r
- Wall clock\r
- Clean kitchen\r
- Phone headset\r
- Beach towel\r
- School backpack\r
- Music speaker\r
- Front door\r
- Bus station\r
\r
## VERBOS DA AULA\r
\r
- **TO REVIEW** (revisar)\r
- **TO DESCRIBE** (descrever)\r
- **TO ANSWER** (responder)\r
- **TO POINT** (apontar)\r
- **TO COMPARE** (comparar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am reviewing the unit now. | I am not reviewing alone now. | Are you reviewing the unit now? |\r
| There is a projector in the classroom. | There is not a TV in the classroom. | Is there a projector in the classroom? |\r
| She is tired after work. | She is not sleepy now. | Is she tired after work? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema be and continuous review com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Revisao de am, is, are, there is/are e verb-ing.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am reviewing the unit now. | I am not reviewing alone now. | Are you reviewing the unit now? |\r
| There is a projector in the classroom. | There is not a TV in the classroom. | Is there a projector in the classroom? |\r
| She is tired after work. | She is not sleepy now. | Is she tired after work? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you reviewing the unit now?\r
2. Is there a projector in the classroom?\r
3. Is she tired after work?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you reviewing the unit now?\r
2. Is there a projector in the classroom?\r
3. Is she tired after work?\r
4. Do you use teacher desk in your routine?\r
5. Can you make a sentence with busy avenue?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Revisao de am, is, are, there is/are e verb-ing.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Vh=`# LESSON 34 - Prova 3: Be and Continuous Assessment\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Avaliar verb to be, there to be e present continuous.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Test picture\r
- Short dialogue\r
- Class timer\r
- Answer grid\r
- Audio task\r
- Reading card\r
- Grammar note\r
- Student chair\r
- Blue marker\r
- Wall poster\r
- City photo\r
- Kitchen image\r
- Office scene\r
- Action verb\r
- Listening line\r
- Question box\r
- Correct option\r
- Open notebook\r
- Teacher folder\r
- Exam sheet\r
\r
## VERBOS DA AULA\r
\r
- **TO COMPLETE** (completar)\r
- **TO IDENTIFY** (identificar)\r
- **TO MARK** (marcar)\r
- **TO READ** (ler)\r
- **TO LISTEN** (ouvir)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am completing the test now. | I am not talking now. | Are you completing the test now? |\r
| There are three chairs in the picture. | There are not four chairs in the picture. | Are there three chairs in the picture? |\r
| The man is at the office. | The man is not at home. | Is the man at the office? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema be and continuous assessment com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Estruturas com am/is/are e descricoes de lugar e acao.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am completing the test now. | I am not talking now. | Are you completing the test now? |\r
| There are three chairs in the picture. | There are not four chairs in the picture. | Are there three chairs in the picture? |\r
| The man is at the office. | The man is not at home. | Is the man at the office? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you completing the test now?\r
2. Are there three chairs in the picture?\r
3. Is the man at the office?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you completing the test now?\r
2. Are there three chairs in the picture?\r
3. Is the man at the office?\r
4. Do you use test picture in your routine?\r
5. Can you make a sentence with short dialogue?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Estruturas com am/is/are e descricoes de lugar e acao.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Gh=`# LESSON 35 - Past to be: Yesterday Feelings\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir was / were com sentimentos e estados no passado.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Tired worker\r
- Happy child\r
- Nervous student\r
- Busy street\r
- Rainy morning\r
- Quiet room\r
- Cold coffee\r
- Late bus\r
- Warm blanket\r
- Family dinner\r
- Long meeting\r
- Heavy bag\r
- Short class\r
- Good movie\r
- Hot soup\r
- Blue notebook\r
- Office desk\r
- Study table\r
- Phone battery\r
- Open window\r
\r
## VERBOS DA AULA\r
\r
- **TO BE** (ser/estar)\r
- **TO FEEL** (sentir)\r
- **TO REMEMBER** (lembrar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I was tired yesterday. | I wasn't sick yesterday. | Were you tired yesterday? |\r
| She was happy after class. | She wasn't sad after class. | Was she happy after class? |\r
| They were nervous before the test. | They weren't calm before the test. | Were they nervous before the test? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema yesterday feelings com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Was / were in affirmative sentences.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I was tired yesterday. | I wasn't sick yesterday. | Were you tired yesterday? |\r
| She was happy after class. | She wasn't sad after class. | Was she happy after class? |\r
| They were nervous before the test. | They weren't calm before the test. | Were they nervous before the test? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Were you tired yesterday?\r
2. Was she happy after class?\r
3. Were they nervous before the test?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Were you tired yesterday?\r
2. Was she happy after class?\r
3. Were they nervous before the test?\r
4. Do you use tired worker in your routine?\r
5. Can you make a sentence with happy child?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Was / were in affirmative sentences.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Hh=`# LESSON 36 - Past to be: Last Weekend Places\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar was / were com localizacao no passado.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- At the beach\r
- In the park\r
- At home\r
- In the office\r
- At the cinema\r
- On the bus\r
- At the market\r
- In the classroom\r
- At the bakery\r
- On the sofa\r
- At the station\r
- In the hotel\r
- At the party\r
- On the street\r
- In the kitchen\r
- At the bank\r
- On the second floor\r
- At the hospital\r
- In the city center\r
- At the museum\r
\r
## VERBOS DA AULA\r
\r
- **TO BE** (ser/estar)\r
- **TO STAY** (ficar)\r
- **TO VISIT** (visitar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I was at home on Saturday. | I wasn't at work on Saturday. | Were you at home on Saturday? |\r
| My parents were at the beach last weekend. | My parents weren't at the office. | Were your parents at the beach last weekend? |\r
| The keys were on the table yesterday. | The keys weren't in the car yesterday. | Were the keys on the table yesterday? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema last weekend places com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Was / were + at, in, on.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I was at home on Saturday. | I wasn't at work on Saturday. | Were you at home on Saturday? |\r
| My parents were at the beach last weekend. | My parents weren't at the office. | Were your parents at the beach last weekend? |\r
| The keys were on the table yesterday. | The keys weren't in the car yesterday. | Were the keys on the table yesterday? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Were you at home on Saturday?\r
2. Were your parents at the beach last weekend?\r
3. Were the keys on the table yesterday?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Were you at home on Saturday?\r
2. Were your parents at the beach last weekend?\r
3. Were the keys on the table yesterday?\r
4. Do you use at the beach in your routine?\r
5. Can you make a sentence with in the park?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Was / were + at, in, on.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,$h=`# LESSON 37 - Past to be: Past Weather and Events\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar was / were com clima e eventos passados.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Sunny beach\r
- Rainy afternoon\r
- Windy night\r
- Cloudy sky\r
- School event\r
- Music festival\r
- Family party\r
- Open tent\r
- Wet street\r
- Cold drink\r
- Hot sun\r
- Traffic jam\r
- Small concert\r
- Long line\r
- City square\r
- Green field\r
- Blue stage\r
- Photo booth\r
- Snack stand\r
- Loud speaker\r
\r
## VERBOS DA AULA\r
\r
- **TO BE** (ser/estar)\r
- **TO HAPPEN** (acontecer)\r
- **TO DESCRIBE** (descrever)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| It was sunny on Sunday. | It wasn't cloudy on Sunday. | Was it sunny on Sunday? |\r
| The festival was crowded at night. | The festival wasn't empty at night. | Was the festival crowded at night? |\r
| The streets were wet after the rain. | The streets weren't dry after the rain. | Were the streets wet after the rain? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema past weather and events com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Was / were with weather and event descriptions.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| It was sunny on Sunday. | It wasn't cloudy on Sunday. | Was it sunny on Sunday? |\r
| The festival was crowded at night. | The festival wasn't empty at night. | Was the festival crowded at night? |\r
| The streets were wet after the rain. | The streets weren't dry after the rain. | Were the streets wet after the rain? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Was it sunny on Sunday?\r
2. Was the festival crowded at night?\r
3. Were the streets wet after the rain?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Was it sunny on Sunday?\r
2. Was the festival crowded at night?\r
3. Were the streets wet after the rain?\r
4. Do you use sunny beach in your routine?\r
5. Can you make a sentence with rainy afternoon?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Was / were with weather and event descriptions.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Yh=`# LESSON 38 - Past to be: Childhood Memories\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Expandir was / were com lembrancas da infancia.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Old school\r
- Small bicycle\r
- Favorite toy\r
- Blue backpack\r
- Funny teacher\r
- Best friend\r
- School yard\r
- Family album\r
- Birthday party\r
- Cartoon show\r
- Soccer field\r
- Ice cream cart\r
- Story book\r
- Drawing class\r
- Music lesson\r
- Tree house\r
- Playground slide\r
- Comic magazine\r
- Summer trip\r
- Photo frame\r
\r
## VERBOS DA AULA\r
\r
- **TO BE** (ser/estar)\r
- **TO REMEMBER** (lembrar)\r
- **TO DESCRIBE** (descrever)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| My school was small. | My school wasn't modern. | Was your school small? |\r
| My best friend was very funny. | My best friend wasn't quiet. | Was your best friend very funny? |\r
| We were happy in the summer. | We weren't bored in the summer. | Were you happy in the summer? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema childhood memories com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Was / were in short personal narratives.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| My school was small. | My school wasn't modern. | Was your school small? |\r
| My best friend was very funny. | My best friend wasn't quiet. | Was your best friend very funny? |\r
| We were happy in the summer. | We weren't bored in the summer. | Were you happy in the summer? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Was your school small?\r
2. Was your best friend very funny?\r
3. Were you happy in the summer?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Was your school small?\r
2. Was your best friend very funny?\r
3. Were you happy in the summer?\r
4. Do you use old school in your routine?\r
5. Can you make a sentence with small bicycle?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Was / were in short personal narratives.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,qh=`# LESSON 39 - There to be past: My Old House\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir there was / there were com casa no passado.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Old kitchen\r
- Wooden table\r
- Small yard\r
- Blue gate\r
- Big window\r
- Family sofa\r
- Wall clock\r
- Old fridge\r
- Laundry room\r
- Bedroom mirror\r
- Front porch\r
- Garden flowers\r
- White fence\r
- TV stand\r
- Dining chair\r
- Book shelf\r
- Bathroom sink\r
- Open garage\r
- Storage box\r
- Coffee table\r
\r
## VERBOS DA AULA\r
\r
- **TO HAVE** (ter)\r
- **TO REMEMBER** (lembrar)\r
- **TO DESCRIBE** (descrever)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There was a blue gate in my old house. | There was not a garage in my old house. | Was there a blue gate in your old house? |\r
| There were two bedrooms upstairs. | There were not three bedrooms upstairs. | Were there two bedrooms upstairs? |\r
| There was a small yard behind the house. | There was not a garden behind the house. | Was there a small yard behind the house? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema my old house com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** There was / there were em descricoes passadas.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There was a blue gate in my old house. | There was not a garage in my old house. | Was there a blue gate in your old house? |\r
| There were two bedrooms upstairs. | There were not three bedrooms upstairs. | Were there two bedrooms upstairs? |\r
| There was a small yard behind the house. | There was not a garden behind the house. | Was there a small yard behind the house? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Was there a blue gate in your old house?\r
2. Were there two bedrooms upstairs?\r
3. Was there a small yard behind the house?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Was there a blue gate in your old house?\r
2. Were there two bedrooms upstairs?\r
3. Was there a small yard behind the house?\r
4. Do you use old kitchen in your routine?\r
5. Can you make a sentence with wooden table?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: There was / there were em descricoes passadas.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Qh=`# LESSON 40 - There to be past: Last Year in My City\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar there was / there were com lugares da cidade no passado.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Old cinema\r
- Bus station\r
- Small park\r
- Coffee shop\r
- Street market\r
- City library\r
- Big hospital\r
- Train line\r
- Traffic light\r
- Book store\r
- Public square\r
- Bike lane\r
- Fruit stand\r
- Police station\r
- Parking lot\r
- River bridge\r
- Main avenue\r
- Old factory\r
- Town hall\r
- Tourist center\r
\r
## VERBOS DA AULA\r
\r
- **TO EXIST** (existir)\r
- **TO CHANGE** (mudar)\r
- **TO COMPARE** (comparar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There was a cinema downtown last year. | There was not a mall downtown last year. | Was there a cinema downtown last year? |\r
| There were two parks in my neighborhood. | There were not five parks in my neighborhood. | Were there two parks in your neighborhood? |\r
| There was a street market on Saturday. | There was not a concert on Saturday. | Was there a street market on Saturday? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema last year in my city com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** There was / were with places and changes.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There was a cinema downtown last year. | There was not a mall downtown last year. | Was there a cinema downtown last year? |\r
| There were two parks in my neighborhood. | There were not five parks in my neighborhood. | Were there two parks in your neighborhood? |\r
| There was a street market on Saturday. | There was not a concert on Saturday. | Was there a street market on Saturday? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Was there a cinema downtown last year?\r
2. Were there two parks in your neighborhood?\r
3. Was there a street market on Saturday?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Was there a cinema downtown last year?\r
2. Were there two parks in your neighborhood?\r
3. Was there a street market on Saturday?\r
4. Do you use old cinema in your routine?\r
5. Can you make a sentence with bus station?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: There was / were with places and changes.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Kh=`# LESSON 41 - There to be past: Past School Facilities\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar there was / there were com escola e infraestrutura.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- School library\r
- Science lab\r
- Computer room\r
- Teacher lounge\r
- Class board\r
- Student desk\r
- Wall poster\r
- Water fountain\r
- Sports court\r
- Music room\r
- Art studio\r
- Cafeteria line\r
- School gate\r
- Tree garden\r
- Reading corner\r
- Study hall\r
- Office printer\r
- Bus stop\r
- Playground slide\r
- School bell\r
\r
## VERBOS DA AULA\r
\r
- **TO HAVE** (ter)\r
- **TO COUNT** (contar)\r
- **TO DESCRIBE** (descrever)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There was a library at my school. | There was not a theater at my school. | Was there a library at your school? |\r
| There were thirty desks in the classroom. | There were not ten desks in the classroom. | Were there thirty desks in the classroom? |\r
| There was a bus stop near the gate. | There was not a train station near the gate. | Was there a bus stop near the gate? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema past school facilities com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Questions and negatives with there was / were.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There was a library at my school. | There was not a theater at my school. | Was there a library at your school? |\r
| There were thirty desks in the classroom. | There were not ten desks in the classroom. | Were there thirty desks in the classroom? |\r
| There was a bus stop near the gate. | There was not a train station near the gate. | Was there a bus stop near the gate? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Was there a library at your school?\r
2. Were there thirty desks in the classroom?\r
3. Was there a bus stop near the gate?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Was there a library at your school?\r
2. Were there thirty desks in the classroom?\r
3. Was there a bus stop near the gate?\r
4. Do you use school library in your routine?\r
5. Can you make a sentence with science lab?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Questions and negatives with there was / were.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Xh=`# LESSON 42 - There to be past: Past Vacation Scenes\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Expandir there was / there were com cenario de viagem no passado.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Beach hotel\r
- Boat tour\r
- Night market\r
- Travel bus\r
- Ocean view\r
- Small island\r
- Street cafe\r
- Tour guide\r
- Photo camera\r
- Pool chair\r
- Travel map\r
- Hotel key\r
- Sand castle\r
- Snack kiosk\r
- Gift shop\r
- Travel bag\r
- Open balcony\r
- City museum\r
- Taxi line\r
- Bus ticket\r
\r
## VERBOS DA AULA\r
\r
- **TO REMEMBER** (lembrar)\r
- **TO DESCRIBE** (descrever)\r
- **TO COMPARE** (comparar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There was a small hotel near the beach. | There was not a hospital near the beach. | Was there a small hotel near the beach? |\r
| There were many tourists in the market. | There were not many tourists in the museum. | Were there many tourists in the market? |\r
| There was a boat tour every morning. | There was not a train tour every morning. | Was there a boat tour every morning? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema past vacation scenes com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** There was / were with travel memories.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There was a small hotel near the beach. | There was not a hospital near the beach. | Was there a small hotel near the beach? |\r
| There were many tourists in the market. | There were not many tourists in the museum. | Were there many tourists in the market? |\r
| There was a boat tour every morning. | There was not a train tour every morning. | Was there a boat tour every morning? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Was there a small hotel near the beach?\r
2. Were there many tourists in the market?\r
3. Was there a boat tour every morning?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Was there a small hotel near the beach?\r
2. Were there many tourists in the market?\r
3. Was there a boat tour every morning?\r
4. Do you use beach hotel in your routine?\r
5. Can you make a sentence with boat tour?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: There was / were with travel memories.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Jh=`# LESSON 43 - Revisao 4: Past Be Review\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Revisar past to be e there to be past com lugares, clima e memorias.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Old cinema\r
- Sunny beach\r
- Small yard\r
- School library\r
- Happy child\r
- Bus station\r
- Rainy afternoon\r
- Family sofa\r
- Travel bus\r
- Wall clock\r
- Photo camera\r
- Teacher lounge\r
- Open garage\r
- Street market\r
- Birthday party\r
- Blue gate\r
- Town hall\r
- Ocean view\r
- Sports court\r
- Best friend\r
\r
## VERBOS DA AULA\r
\r
- **TO REVIEW** (revisar)\r
- **TO DESCRIBE** (descrever)\r
- **TO COMPARE** (comparar)\r
- **TO ANSWER** (responder)\r
- **TO RECALL** (usar em contexto da aula)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I was happy on vacation. | I wasn't tired on vacation. | Were you happy on vacation? |\r
| There was a library at my school. | There was not a theater at my school. | Was there a library at your school? |\r
| There were many tourists at the market. | There were not many tourists at the museum. | Were there many tourists at the market? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema past be review com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Revisao de was, were, there was e there were.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I was happy on vacation. | I wasn't tired on vacation. | Were you happy on vacation? |\r
| There was a library at my school. | There was not a theater at my school. | Was there a library at your school? |\r
| There were many tourists at the market. | There were not many tourists at the museum. | Were there many tourists at the market? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Were you happy on vacation?\r
2. Was there a library at your school?\r
3. Were there many tourists at the market?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Were you happy on vacation?\r
2. Was there a library at your school?\r
3. Were there many tourists at the market?\r
4. Do you use old cinema in your routine?\r
5. Can you make a sentence with sunny beach?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Revisao de was, were, there was e there were.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,Zh=`# LESSON 44 - Prova 4: Past Be Assessment\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Avaliar past to be e there to be past.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Past picture\r
- Answer column\r
- Listening prompt\r
- Reading sentence\r
- Exam card\r
- Grammar line\r
- School photo\r
- Travel scene\r
- Wall poster\r
- Teacher desk\r
- Correct option\r
- Blue pen\r
- Student chair\r
- Story prompt\r
- Quiet room\r
- Short answer\r
- Bus ticket\r
- Open notebook\r
- Final score\r
- Picture clue\r
\r
## VERBOS DA AULA\r
\r
- **TO COMPLETE** (completar)\r
- **TO IDENTIFY** (identificar)\r
- **TO CHOOSE** (escolher)\r
- **TO DESCRIBE** (descrever)\r
- **TO REVISE** (revisar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I was ready for the test. | I wasn't late for the test. | Were you ready for the test? |\r
| There was a market in the picture. | There was not a bank in the picture. | Was there a market in the picture? |\r
| There were two children in the park. | There were not four children in the park. | Were there two children in the park? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema past be assessment com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Leitura, escrita e descricao no passado com was / were.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I was ready for the test. | I wasn't late for the test. | Were you ready for the test? |\r
| There was a market in the picture. | There was not a bank in the picture. | Was there a market in the picture? |\r
| There were two children in the park. | There were not four children in the park. | Were there two children in the park? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Were you ready for the test?\r
2. Was there a market in the picture?\r
3. Were there two children in the park?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Were you ready for the test?\r
2. Was there a market in the picture?\r
3. Were there two children in the park?\r
4. Do you use past picture in your routine?\r
5. Can you make a sentence with answer column?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Leitura, escrita e descricao no passado com was / were.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,eg=`# LESSON 45 - Future Going to: Weekend Plans\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir going to para planos futuros de fim de semana.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Weekend trip\r
- Family lunch\r
- Clean kitchen\r
- Bus ticket\r
- Beach bag\r
- Travel map\r
- Phone charger\r
- Cooking pan\r
- Movie night\r
- Park walk\r
- Shopping list\r
- Laundry basket\r
- Birthday gift\r
- Coffee shop\r
- Study notebook\r
- Picnic blanket\r
- Hotel room\r
- Snack box\r
- Travel backpack\r
- Blue umbrella\r
\r
## VERBOS DA AULA\r
\r
- **TO TRAVEL** (viajar)\r
- **TO VISIT** (visitar)\r
- **TO CLEAN** (limpar)\r
- **TO COOK** (cozinhar)\r
- **TO REST** (descansar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to visit my aunt on Saturday. | I am not going to work on Saturday. | Are you going to visit your aunt on Saturday? |\r
| We are going to cook lunch at home. | We are not going to eat downtown. | Are you going to cook lunch at home? |\r
| They are going to travel next weekend. | They are not going to stay in town. | Are they going to travel next weekend? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema weekend plans com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Be going to para planos e intencoes.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to visit my aunt on Saturday. | I am not going to work on Saturday. | Are you going to visit your aunt on Saturday? |\r
| We are going to cook lunch at home. | We are not going to eat downtown. | Are you going to cook lunch at home? |\r
| They are going to travel next weekend. | They are not going to stay in town. | Are they going to travel next weekend? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you going to visit your aunt on Saturday?\r
2. Are you going to cook lunch at home?\r
3. Are they going to travel next weekend?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you going to visit your aunt on Saturday?\r
2. Are you going to cook lunch at home?\r
3. Are they going to travel next weekend?\r
4. Do you use weekend trip in your routine?\r
5. Can you make a sentence with family lunch?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Be going to para planos e intencoes.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,rg=`# LESSON 46 - Future Going to: Health and Fitness Goals\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar going to com metas de saude e bem-estar.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Running shoes\r
- Water bottle\r
- Healthy salad\r
- Gym bag\r
- Sports watch\r
- Yoga mat\r
- Fruit bowl\r
- Morning alarm\r
- Park path\r
- Fitness app\r
- Protein shake\r
- Training plan\r
- Soft towel\r
- Blue sneakers\r
- Weekend race\r
- Gym locker\r
- Exercise bike\r
- Fresh juice\r
- Workout song\r
- Healthy snack\r
\r
## VERBOS DA AULA\r
\r
- **TO EXERCISE** (exercitar-se)\r
- **TO DRINK** (beber)\r
- **TO SLEEP** (dormir)\r
- **TO EAT** (comer)\r
- **TO START** (comecar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to exercise every morning. | I am not going to skip breakfast. | Are you going to exercise every morning? |\r
| She is going to drink more water. | She is not going to drink soda every day. | Is she going to drink more water? |\r
| We are going to start a new routine. | We are not going to start next month. | Are you going to start a new routine? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema health and fitness goals com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Going to with personal goals.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to exercise every morning. | I am not going to skip breakfast. | Are you going to exercise every morning? |\r
| She is going to drink more water. | She is not going to drink soda every day. | Is she going to drink more water? |\r
| We are going to start a new routine. | We are not going to start next month. | Are you going to start a new routine? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you going to exercise every morning?\r
2. Is she going to drink more water?\r
3. Are you going to start a new routine?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you going to exercise every morning?\r
2. Is she going to drink more water?\r
3. Are you going to start a new routine?\r
4. Do you use running shoes in your routine?\r
5. Can you make a sentence with water bottle?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Going to with personal goals.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,ng=`# LESSON 47 - Future Going to: Study Plans\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar going to com estudos e organizacao.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Study notebook\r
- English book\r
- Review list\r
- Class calendar\r
- Desk lamp\r
- Reading card\r
- Practice sheet\r
- Blue marker\r
- School backpack\r
- Wall schedule\r
- Water bottle\r
- Study app\r
- Phone timer\r
- Grammar chart\r
- Pencil case\r
- Library card\r
- Online class\r
- Study group\r
- Quiet room\r
- Homework folder\r
\r
## VERBOS DA AULA\r
\r
- **TO STUDY** (usar em contexto da aula)\r
- **TO REVIEW** (revisar)\r
- **TO PRACTICE** (praticar)\r
- **TO ORGANIZE** (organizar)\r
- **TO FINISH** (terminar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to study after dinner. | I am not going to study before work. | Are you going to study after dinner? |\r
| My friend is going to review the lesson tonight. | My friend is not going to review tomorrow morning. | Is your friend going to review the lesson tonight? |\r
| We are going to practice together on Friday. | We are not going to practice alone. | Are you going to practice together on Friday? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema study plans com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Questions and negatives with going to.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to study after dinner. | I am not going to study before work. | Are you going to study after dinner? |\r
| My friend is going to review the lesson tonight. | My friend is not going to review tomorrow morning. | Is your friend going to review the lesson tonight? |\r
| We are going to practice together on Friday. | We are not going to practice alone. | Are you going to practice together on Friday? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you going to study after dinner?\r
2. Is your friend going to review the lesson tonight?\r
3. Are you going to practice together on Friday?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you going to study after dinner?\r
2. Is your friend going to review the lesson tonight?\r
3. Are you going to practice together on Friday?\r
4. Do you use study notebook in your routine?\r
5. Can you make a sentence with english book?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Questions and negatives with going to.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,ag=`# LESSON 48 - Future Going to: Home Improvements\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Expandir going to com planos para casa e compras.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Blue paint\r
- New sofa\r
- Wall mirror\r
- Floor lamp\r
- Kitchen shelf\r
- Curtain rod\r
- Wooden table\r
- Tool box\r
- Shopping cart\r
- Home catalog\r
- Bedroom wall\r
- Bathroom sink\r
- Dining chair\r
- Plant vase\r
- Light switch\r
- Door handle\r
- Family picture\r
- Living room\r
- Work gloves\r
- Window curtain\r
\r
## VERBOS DA AULA\r
\r
- **TO PAINT** (pintar)\r
- **TO BUY** (comprar)\r
- **TO FIX** (consertar)\r
- **TO CHANGE** (mudar)\r
- **TO DECORATE** (decorar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to paint the bedroom blue. | I am not going to paint the kitchen. | Are you going to paint the bedroom blue? |\r
| We are going to buy a new sofa. | We are not going to buy a TV. | Are you going to buy a new sofa? |\r
| My father is going to fix the sink tomorrow. | My father is not going to fix the window. | Is your father going to fix the sink tomorrow? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema home improvements com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Going to with house projects and intentions.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to paint the bedroom blue. | I am not going to paint the kitchen. | Are you going to paint the bedroom blue? |\r
| We are going to buy a new sofa. | We are not going to buy a TV. | Are you going to buy a new sofa? |\r
| My father is going to fix the sink tomorrow. | My father is not going to fix the window. | Is your father going to fix the sink tomorrow? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you going to paint the bedroom blue?\r
2. Are you going to buy a new sofa?\r
3. Is your father going to fix the sink tomorrow?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you going to paint the bedroom blue?\r
2. Are you going to buy a new sofa?\r
3. Is your father going to fix the sink tomorrow?\r
4. Do you use blue paint in your routine?\r
5. Can you make a sentence with new sofa?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Going to with house projects and intentions.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,tg=`# LESSON 49 - Future Will: Predictions for Tomorrow\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir will para previsoes simples.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Cloudy sky\r
- Weather app\r
- Morning traffic\r
- City bus\r
- Office meeting\r
- School project\r
- Phone alert\r
- Rain jacket\r
- Coffee mug\r
- Bus stop\r
- Blue umbrella\r
- Street corner\r
- Hot sun\r
- Cold wind\r
- Travel bag\r
- Train line\r
- Work laptop\r
- Wall calendar\r
- Family dinner\r
- Weekend game\r
\r
## VERBOS DA AULA\r
\r
- **TO RAIN** (chover)\r
- **TO ARRIVE** (chegar)\r
- **TO HAPPEN** (acontecer)\r
- **TO STAY** (ficar)\r
- **TO IMPROVE** (melhorar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| It will rain tomorrow. | It won't be sunny all day. | Will it rain tomorrow? |\r
| The bus will arrive soon. | The bus won't arrive late. | Will the bus arrive soon? |\r
| Your English will improve this year. | Your English won't stay the same. | Will your English improve this year? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema predictions for tomorrow com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Will para previsoes e ideias espontaneas.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| It will rain tomorrow. | It won't be sunny all day. | Will it rain tomorrow? |\r
| The bus will arrive soon. | The bus won't arrive late. | Will the bus arrive soon? |\r
| Your English will improve this year. | Your English won't stay the same. | Will your English improve this year? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Will it rain tomorrow?\r
2. Will the bus arrive soon?\r
3. Will your English improve this year?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Will it rain tomorrow?\r
2. Will the bus arrive soon?\r
3. Will your English improve this year?\r
4. Do you use cloudy sky in your routine?\r
5. Can you make a sentence with weather app?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Will para previsoes e ideias espontaneas.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,og=`# LESSON 50 - Future Will: Instant Decisions\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar will para decisoes tomadas no momento.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Heavy bag\r
- Phone battery\r
- Open door\r
- Cold water\r
- Office file\r
- Bus card\r
- Shopping bag\r
- Coffee cup\r
- Teacher notebook\r
- Family phone\r
- Door key\r
- Lunch box\r
- Travel map\r
- Desk drawer\r
- Wall shelf\r
- Small package\r
- Blue folder\r
- Class marker\r
- Water bottle\r
- Snack tray\r
\r
## VERBOS DA AULA\r
\r
- **TO HELP** (ajudar)\r
- **TO CARRY** (carregar)\r
- **TO CALL** (ligar)\r
- **TO OPEN** (abrir)\r
- **TO BRING** (trazer)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I will carry your bag. | I won't leave you alone. | Will you carry my bag? |\r
| She will call the doctor now. | She won't send an email now. | Will she call the doctor now? |\r
| We will open the window. | We won't open the door. | Will you open the window? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema instant decisions com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Will com decisoes espontaneas e offers.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I will carry your bag. | I won't leave you alone. | Will you carry my bag? |\r
| She will call the doctor now. | She won't send an email now. | Will she call the doctor now? |\r
| We will open the window. | We won't open the door. | Will you open the window? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Will you carry my bag?\r
2. Will she call the doctor now?\r
3. Will you open the window?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Will you carry my bag?\r
2. Will she call the doctor now?\r
3. Will you open the window?\r
4. Do you use heavy bag in your routine?\r
5. Can you make a sentence with phone battery?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Will com decisoes espontaneas e offers.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,ig=`# LESSON 51 - Future Will: Promises and Commitments\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar will com promessas e compromissos.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Phone reminder\r
- Study plan\r
- Bus ticket\r
- Monthly bill\r
- Family visit\r
- Office key\r
- Travel card\r
- Blue notebook\r
- Wall calendar\r
- Dinner invitation\r
- Birthday gift\r
- Payment receipt\r
- Coffee break\r
- Doctor appointment\r
- Quiet library\r
- School test\r
- Gym class\r
- Phone message\r
- Bank line\r
- Hotel booking\r
\r
## VERBOS DA AULA\r
\r
- **TO REMEMBER** (lembrar)\r
- **TO STUDY** (usar em contexto da aula)\r
- **TO RETURN** (retornar)\r
- **TO PAY** (pagar)\r
- **TO VISIT** (visitar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I will study tonight. | I won't forget the homework. | Will you study tonight? |\r
| My brother will pay the bill tomorrow. | My brother won't pay it next week. | Will your brother pay the bill tomorrow? |\r
| We will visit grandma on Sunday. | We won't visit her on Monday. | Will you visit grandma on Sunday? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema promises and commitments com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Will / won't in promises.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I will study tonight. | I won't forget the homework. | Will you study tonight? |\r
| My brother will pay the bill tomorrow. | My brother won't pay it next week. | Will your brother pay the bill tomorrow? |\r
| We will visit grandma on Sunday. | We won't visit her on Monday. | Will you visit grandma on Sunday? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Will you study tonight?\r
2. Will your brother pay the bill tomorrow?\r
3. Will you visit grandma on Sunday?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Will you study tonight?\r
2. Will your brother pay the bill tomorrow?\r
3. Will you visit grandma on Sunday?\r
4. Do you use phone reminder in your routine?\r
5. Can you make a sentence with study plan?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Will / won't in promises.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,sg=`# LESSON 52 - Future Will: Offers and Requests\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Expandir will com ofertas de ajuda e pedidos simples.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Coffee cup\r
- Phone message\r
- Blue folder\r
- Bus map\r
- Class notebook\r
- Water bottle\r
- Hotel key\r
- Train ticket\r
- Open document\r
- Small package\r
- Study chair\r
- Teacher table\r
- Snack box\r
- Cold juice\r
- Desk lamp\r
- Parking ticket\r
- Family car\r
- Office badge\r
- Reading glasses\r
- Project file\r
\r
## VERBOS DA AULA\r
\r
- **TO MAKE** (fazer)\r
- **TO GET** (chegar/obter)\r
- **TO SEND** (usar em contexto da aula)\r
- **TO SHOW** (mostrar)\r
- **TO WAIT** (esperar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I will make some coffee. | I won't make tea now. | Will you make some coffee? |\r
| I will send the document tonight. | I won't send it tomorrow morning. | Will you send the document tonight? |\r
| Will you wait for me after class? | I won't leave early. | Will you wait for me after class? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema offers and requests com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Will for offers: I'll..., Will you...?\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I will make some coffee. | I won't make tea now. | Will you make some coffee? |\r
| I will send the document tonight. | I won't send it tomorrow morning. | Will you send the document tonight? |\r
| Will you wait for me after class? | I won't leave early. | Will you wait for me after class? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Will you make some coffee?\r
2. Will you send the document tonight?\r
3. Will you wait for me after class?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Will you make some coffee?\r
2. Will you send the document tonight?\r
3. Will you wait for me after class?\r
4. Do you use coffee cup in your routine?\r
5. Can you make a sentence with phone message?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Will for offers: I'll..., Will you...?\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,lg=`# LESSON 53 - There will be: Future City Changes\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir there will be com mudancas futuras na cidade.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- New park\r
- Bus line\r
- City hospital\r
- Bike lane\r
- Coffee shop\r
- School building\r
- Public library\r
- Train station\r
- Parking lot\r
- Bus terminal\r
- Street light\r
- Green square\r
- Sports center\r
- Open market\r
- River bridge\r
- Medical clinic\r
- Tourist center\r
- Book store\r
- Pet park\r
- Playground area\r
\r
## VERBOS DA AULA\r
\r
- **TO BUILD** (construir)\r
- **TO OPEN** (abrir)\r
- **TO IMPROVE** (melhorar)\r
- **TO CREATE** (criar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There will be a new park in my neighborhood. | There will not be a mall in my street. | Will there be a new park in your neighborhood? |\r
| There will be more buses next year. | There will not be fewer buses next year. | Will there be more buses next year? |\r
| There will be a library near the station. | There will not be a cinema near the station. | Will there be a library near the station? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema future city changes com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** There will be em previsoes sobre lugares.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There will be a new park in my neighborhood. | There will not be a mall in my street. | Will there be a new park in your neighborhood? |\r
| There will be more buses next year. | There will not be fewer buses next year. | Will there be more buses next year? |\r
| There will be a library near the station. | There will not be a cinema near the station. | Will there be a library near the station? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Will there be a new park in your neighborhood?\r
2. Will there be more buses next year?\r
3. Will there be a library near the station?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Will there be a new park in your neighborhood?\r
2. Will there be more buses next year?\r
3. Will there be a library near the station?\r
4. Do you use new park in your routine?\r
5. Can you make a sentence with bus line?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: There will be em previsoes sobre lugares.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,ug=`# LESSON 54 - There will be: Future Events\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar there will be com eventos e programacao futura.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Music festival\r
- School fair\r
- Food truck\r
- Dance show\r
- Art workshop\r
- Book fair\r
- Guest singer\r
- Open stage\r
- Ticket line\r
- Snack stand\r
- Class party\r
- Movie night\r
- Family picnic\r
- Sports day\r
- Town concert\r
- Photo booth\r
- Blue banner\r
- Weekend event\r
- Public square\r
- Travel bus\r
\r
## VERBOS DA AULA\r
\r
- **TO ORGANIZE** (organizar)\r
- **TO ANNOUNCE** (anunciar)\r
- **TO INVITE** (convidar)\r
- **TO PREPARE** (usar em contexto da aula)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There will be a music festival on Friday. | There will not be a concert on Thursday. | Will there be a music festival on Friday? |\r
| There will be three food trucks outside. | There will not be ten food trucks outside. | Will there be three food trucks outside? |\r
| There will be a dance show at school. | There will not be a movie at school. | Will there be a dance show at school? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema future events com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** There will be + dates, events and quantities.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| There will be a music festival on Friday. | There will not be a concert on Thursday. | Will there be a music festival on Friday? |\r
| There will be three food trucks outside. | There will not be ten food trucks outside. | Will there be three food trucks outside? |\r
| There will be a dance show at school. | There will not be a movie at school. | Will there be a dance show at school? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Will there be a music festival on Friday?\r
2. Will there be three food trucks outside?\r
3. Will there be a dance show at school?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Will there be a music festival on Friday?\r
2. Will there be three food trucks outside?\r
3. Will there be a dance show at school?\r
4. Do you use music festival in your routine?\r
5. Can you make a sentence with school fair?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: There will be + dates, events and quantities.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,cg=`# LESSON 55 - Revisao 5: Future Forms Review\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Revisar going to, will e there will be.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Weekend trip\r
- Running shoes\r
- Study notebook\r
- Blue paint\r
- Cloudy sky\r
- Heavy bag\r
- Phone reminder\r
- Coffee cup\r
- New park\r
- Music festival\r
- Bus line\r
- Food truck\r
- Travel backpack\r
- Wall calendar\r
- Open market\r
- Water bottle\r
- Project file\r
- Family visit\r
- Bike lane\r
- Dance show\r
\r
## VERBOS DA AULA\r
\r
- **TO REVIEW** (revisar)\r
- **TO PLAN** (planejar)\r
- **TO PREDICT** (prever)\r
- **TO ANSWER** (responder)\r
- **TO COMPARE** (comparar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to study tonight. | I am not going to rest tonight. | Are you going to study tonight? |\r
| It will rain tomorrow. | It won't be sunny all day. | Will it rain tomorrow? |\r
| There will be a new park downtown. | There will not be a mall downtown. | Will there be a new park downtown? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema future forms review com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Revisao de planos, previsoes e eventos futuros.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to study tonight. | I am not going to rest tonight. | Are you going to study tonight? |\r
| It will rain tomorrow. | It won't be sunny all day. | Will it rain tomorrow? |\r
| There will be a new park downtown. | There will not be a mall downtown. | Will there be a new park downtown? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you going to study tonight?\r
2. Will it rain tomorrow?\r
3. Will there be a new park downtown?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you going to study tonight?\r
2. Will it rain tomorrow?\r
3. Will there be a new park downtown?\r
4. Do you use weekend trip in your routine?\r
5. Can you make a sentence with running shoes?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Revisao de planos, previsoes e eventos futuros.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,mg=`# LESSON 56 - Prova 5: Future Forms Assessment\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Avaliar going to, will e there will be.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Future sentence\r
- Answer card\r
- Reading text\r
- Listening task\r
- Class timer\r
- Exam sheet\r
- Project image\r
- Travel plan\r
- Weather chart\r
- City map\r
- Concert poster\r
- Bus schedule\r
- Practice line\r
- Correct option\r
- Blue pen\r
- Student chair\r
- Open notebook\r
- Teacher folder\r
- Quiet room\r
- Final grade\r
\r
## VERBOS DA AULA\r
\r
- **TO COMPLETE** (completar)\r
- **TO IDENTIFY** (identificar)\r
- **TO CHOOSE** (escolher)\r
- **TO WRITE** (escrever)\r
- **TO REVISE** (revisar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to complete the test now. | I am not going to talk now. | Are you going to complete the test now? |\r
| The weather will change tomorrow. | The weather won't stay the same. | Will the weather change tomorrow? |\r
| There will be a question about plans. | There will not be only one question. | Will there be a question about plans? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema future forms assessment com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Frases futuras em contexto de planos, previsoes e eventos.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am going to complete the test now. | I am not going to talk now. | Are you going to complete the test now? |\r
| The weather will change tomorrow. | The weather won't stay the same. | Will the weather change tomorrow? |\r
| There will be a question about plans. | There will not be only one question. | Will there be a question about plans? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you going to complete the test now?\r
2. Will the weather change tomorrow?\r
3. Will there be a question about plans?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you going to complete the test now?\r
2. Will the weather change tomorrow?\r
3. Will there be a question about plans?\r
4. Do you use future sentence in your routine?\r
5. Can you make a sentence with answer card?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Frases futuras em contexto de planos, previsoes e eventos.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,dg=`# LESSON 57 - Modal Verbs: Can for Ability and Permission\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Introduzir can para habilidade e permissao em contextos simples.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Swimming pool\r
- Driver license\r
- English phrase\r
- Class door\r
- Office computer\r
- Phone camera\r
- Music speaker\r
- Bus card\r
- Blue marker\r
- School lab\r
- Library card\r
- Gym room\r
- Coffee machine\r
- Bike helmet\r
- Travel app\r
- Pet carrier\r
- Art brush\r
- Projector remote\r
- Kitchen knife\r
- Parking gate\r
\r
## VERBOS DA AULA\r
\r
- **TO SWIM** (nadar)\r
- **TO DRIVE** (dirigir)\r
- **TO SPEAK** (falar)\r
- **TO OPEN** (abrir)\r
- **TO USE** (usar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I can swim very well. | I can't swim in cold water. | Can you swim very well? |\r
| She can drive to work. | She can't drive a bus. | Can she drive to work? |\r
| Can I use the office computer? | I can't use the teacher computer now. | Can I use the office computer? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema can for ability and permission com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Can / can't for ability and permission.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I can swim very well. | I can't swim in cold water. | Can you swim very well? |\r
| She can drive to work. | She can't drive a bus. | Can she drive to work? |\r
| Can I use the office computer? | I can't use the teacher computer now. | Can I use the office computer? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Can you swim very well?\r
2. Can she drive to work?\r
3. Can I use the office computer?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Can you swim very well?\r
2. Can she drive to work?\r
3. Can I use the office computer?\r
4. Do you use swimming pool in your routine?\r
5. Can you make a sentence with driver license?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Can / can't for ability and permission.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,pg=`# LESSON 58 - Modal Verbs: Could and Would for Politeness\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Praticar could e would em pedidos educados e preferencias.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Glass of water\r
- Menu card\r
- Bus ticket\r
- Hotel room\r
- Phone charger\r
- Blue pen\r
- Coffee cup\r
- Window seat\r
- Teacher notebook\r
- Project file\r
- Small favor\r
- Shopping bag\r
- Restaurant table\r
- Taxi ride\r
- Travel pillow\r
- Desk chair\r
- Soup bowl\r
- Book shelf\r
- Train ticket\r
- Study guide\r
\r
## VERBOS DA AULA\r
\r
- **TO HELP** (ajudar)\r
- **TO REPEAT** (repetir)\r
- **TO PASS** (usar em contexto da aula)\r
- **TO LIKE** (usar em contexto da aula)\r
- **TO ORDER** (pedir)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| Could you repeat the question, please? | You couldn't hear the audio yesterday. | Could you repeat the question, please? |\r
| Would you like some coffee? | I wouldn't like cold soup. | Would you like some coffee? |\r
| I would like a window seat. | I wouldn't like an aisle seat. | Would you like a window seat? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema could and would for politeness com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Could for polite requests; would for preferences.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| Could you repeat the question, please? | You couldn't hear the audio yesterday. | Could you repeat the question, please? |\r
| Would you like some coffee? | I wouldn't like cold soup. | Would you like some coffee? |\r
| I would like a window seat. | I wouldn't like an aisle seat. | Would you like a window seat? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Could you repeat the question, please?\r
2. Would you like some coffee?\r
3. Would you like a window seat?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Could you repeat the question, please?\r
2. Would you like some coffee?\r
3. Would you like a window seat?\r
4. Do you use glass of water in your routine?\r
5. Can you make a sentence with menu card?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Could for polite requests; would for preferences.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,fg=`# LESSON 59 - Modal Verbs: Should and Must for Advice\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Consolidar should e must para conselhos e obrigacoes.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Study schedule\r
- Doctor note\r
- School uniform\r
- Safety helmet\r
- Bus card\r
- Water bottle\r
- Healthy meal\r
- Warm jacket\r
- Office badge\r
- Class rule\r
- Homework folder\r
- Morning alarm\r
- Gym bag\r
- Work gloves\r
- Traffic sign\r
- Blue mask\r
- Lunch box\r
- Travel document\r
- Quiet room\r
- Exam paper\r
\r
## VERBOS DA AULA\r
\r
- **TO STUDY** (usar em contexto da aula)\r
- **TO REST** (descansar)\r
- **TO WEAR** (usar/vestir)\r
- **TO ARRIVE** (chegar)\r
- **TO BRING** (trazer)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| You should study every day. | You shouldn't study only before the test. | Should you study every day? |\r
| You must wear a helmet here. | You mustn't park in this area. | Must you wear a helmet here? |\r
| We should bring water to class. | We shouldn't forget our notebooks. | Should we bring water to class? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema should and must for advice com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Should for advice; must for obligation and rules.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| You should study every day. | You shouldn't study only before the test. | Should you study every day? |\r
| You must wear a helmet here. | You mustn't park in this area. | Must you wear a helmet here? |\r
| We should bring water to class. | We shouldn't forget our notebooks. | Should we bring water to class? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Should you study every day?\r
2. Must you wear a helmet here?\r
3. Should we bring water to class?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Should you study every day?\r
2. Must you wear a helmet here?\r
3. Should we bring water to class?\r
4. Do you use study schedule in your routine?\r
5. Can you make a sentence with doctor note?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Should for advice; must for obligation and rules.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,hg=`# LESSON 60 - Modal Verbs: May and Might for Possibility\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Expandir may e might para permissao e possibilidade.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Cloudy sky\r
- Travel plan\r
- Library room\r
- Doctor office\r
- Weekend trip\r
- City museum\r
- Blue umbrella\r
- Train ticket\r
- Open calendar\r
- Family lunch\r
- Study plan\r
- Phone message\r
- Bus line\r
- Hotel booking\r
- Art class\r
- Beach bag\r
- Rain jacket\r
- Project date\r
- Coffee break\r
- Traffic alert\r
\r
## VERBOS DA AULA\r
\r
- **TO RAIN** (chover)\r
- **TO TRAVEL** (viajar)\r
- **TO STAY** (ficar)\r
- **TO START** (comecar)\r
- **TO VISIT** (visitar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| May I open the window? | You may not use this room now. | May I open the window? |\r
| It might rain this afternoon. | It might not rain tonight. | Might it rain this afternoon? |\r
| We may visit the museum tomorrow. | We may not visit the beach tomorrow. | May we visit the museum tomorrow? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema may and might for possibility com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** May for permission; might for possibility.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| May I open the window? | You may not use this room now. | May I open the window? |\r
| It might rain this afternoon. | It might not rain tonight. | Might it rain this afternoon? |\r
| We may visit the museum tomorrow. | We may not visit the beach tomorrow. | May we visit the museum tomorrow? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. May I open the window?\r
2. Might it rain this afternoon?\r
3. May we visit the museum tomorrow?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. May I open the window?\r
2. Might it rain this afternoon?\r
3. May we visit the museum tomorrow?\r
4. Do you use cloudy sky in your routine?\r
5. Can you make a sentence with travel plan?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: May for permission; might for possibility.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,gg=`# LESSON 61 - Revisao geral: Course Review\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Revisar os tempos e estruturas principais de todo o curso.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Alarm clock\r
- Busy mother\r
- Travel ticket\r
- Happy student\r
- Big sofa\r
- Office laptop\r
- Sunny beach\r
- Old cinema\r
- Weekend trip\r
- Cloudy sky\r
- Music festival\r
- Swimming pool\r
- Glass of water\r
- Study schedule\r
- Blue umbrella\r
- Phone reminder\r
- Train ticket\r
- Family lunch\r
- School uniform\r
- Open calendar\r
\r
## VERBOS DA AULA\r
\r
- **TO REVIEW** (revisar)\r
- **TO COMPARE** (comparar)\r
- **TO CHOOSE** (escolher)\r
- **TO EXPLAIN** (explicar)\r
- **TO PRACTICE** (praticar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I review all units before the final test. | I don't review only one lesson. | Do you review all units before the final test? |\r
| She can explain the grammar now. | She can't explain every detail alone. | Can she explain the grammar now? |\r
| There will be a final test tomorrow. | There will not be class after the test. | Will there be a final test tomorrow? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema course review com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Revisao geral de present, past, future, there to be e modal verbs.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I review all units before the final test. | I don't review only one lesson. | Do you review all units before the final test? |\r
| She can explain the grammar now. | She can't explain every detail alone. | Can she explain the grammar now? |\r
| There will be a final test tomorrow. | There will not be class after the test. | Will there be a final test tomorrow? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Do you review all units before the final test?\r
2. Can she explain the grammar now?\r
3. Will there be a final test tomorrow?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Do you review all units before the final test?\r
2. Can she explain the grammar now?\r
3. Will there be a final test tomorrow?\r
4. Do you use alarm clock in your routine?\r
5. Can you make a sentence with busy mother?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Revisao geral de present, past, future, there to be e modal verbs.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`,vg=`# LESSON 62 - Prova final: Final Assessment\r
\r
**Duração:** 60 minutos  \r
**Nível:** Iniciante (A1)  \r
**Objetivo:** Avaliar de forma integrada os conteudos principais do curso.\r
\r
---\r
\r
## VOCABULÁRIO (20 palavras)\r
- Final exam\r
- Answer sheet\r
- Listening task\r
- Reading text\r
- Grammar chart\r
- Short dialogue\r
- Picture prompt\r
- Blue pen\r
- Quiet classroom\r
- Teacher table\r
- Student card\r
- Test booklet\r
- Wall clock\r
- Question box\r
- Correct option\r
- Review note\r
- Class timer\r
- Project image\r
- Final score\r
- Open notebook\r
\r
## VERBOS DA AULA\r
\r
- **TO COMPLETE** (completar)\r
- **TO IDENTIFY** (identificar)\r
- **TO ANSWER** (responder)\r
- **TO WRITE** (escrever)\r
- **TO REVISE** (revisar)\r
\r
## ESTRUTURAS DA AULA\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am ready for the final exam. | I am not nervous today. | Are you ready for the final exam? |\r
| The test will include reading and listening. | The test won't include only grammar. | Will the test include reading and listening? |\r
| There are three sections in the exam. | There are not five sections in the exam. | Are there three sections in the exam? |\r
\r
## CRONOGRAMA DA AULA\r
\r
### 1. WARM-UP (5 minutos)\r
\r
**Atividade:** Introduzir o tema final assessment com perguntas simples.\r
\r
- Professor apresenta 2 ou 3 imagens do vocabulario.\r
- Alunos identificam palavras conhecidas em portugues ou ingles.\r
- Professor conecta o tema ao foco gramatical da aula.\r
\r
### 2. VOCABULARY PRESENTATION (10 minutos)\r
\r
- Professor le os 20 itens em voz alta.\r
- Alunos repetem em coro e em duplas.\r
- Professor destaca os 5 itens mais uteis para a pratica oral.\r
\r
### 3. GRAMMAR FOCUS (10 minutos)\r
\r
**Foco:** Leitura, escuta e producao curta com estruturas acumuladas.\r
\r
- Professor escreve exemplos curtos no quadro.\r
- Alunos observam a forma afirmativa, negativa e interrogativa.\r
- Correcao rapida de pronuncia e ordem das palavras.\r
\r
### 4. STRUCTURE PRESENTATION (10 minutos)\r
\r
| Afirmativa | Negativa | Pergunta |\r
|------------|----------|----------|\r
| I am ready for the final exam. | I am not nervous today. | Are you ready for the final exam? |\r
| The test will include reading and listening. | The test won't include only grammar. | Will the test include reading and listening? |\r
| There are three sections in the exam. | There are not five sections in the exam. | Are there three sections in the exam? |\r
\r
### 5. CONTROLLED PRACTICE (10 minutos)\r
\r
1. Are you ready for the final exam?\r
2. Will the test include reading and listening?\r
3. Are there three sections in the exam?\r
\r
- Professor monitora respostas orais e escrita curta.\r
- Alunos trocam perguntas em pares.\r
\r
### 6. PAIR PRACTICE (10 minutos)\r
\r
- Um aluno faz a pergunta e o colega responde com frase completa.\r
- Depois, trocam os papeis usando novo vocabulario da aula.\r
- Professor corrige somente o erro principal para manter fluidez.\r
\r
### 7. WRAP-UP (5 minutos)\r
\r
- Revisar a estrutura principal da aula.\r
- Pedir 2 respostas completas de alunos diferentes.\r
- Encaminhar o homework para consolidacao.\r
\r
\r
## CONTROLLED PRACTICE\r
\r
1. Are you ready for the final exam?\r
2. Will the test include reading and listening?\r
3. Are there three sections in the exam?\r
4. Do you use final exam in your routine?\r
5. Can you make a sentence with answer sheet?\r
\r
## WRAP-UP\r
\r
- Professor revisa o foco gramatical: Leitura, escuta e producao curta com estruturas acumuladas.\r
- Alunos respondem oralmente a uma pergunta final em dupla.\r
- Homework sugerido para fixacao e reutilizacao do vocabulario.\r
\r
## RESUMO DA AULA\r
\r
| Etapa | Tempo | Atividade |\r
|-------|-------|-----------|\r
| Warm-up | 5 min | Ativacao de repertorio |\r
| Vocabulary | 10 min | Repeticao guiada |\r
| Grammar Focus | 10 min | Modelo e explicacao |\r
| Structure | 10 min | Afirmativa, negativa e pergunta |\r
| Controlled Practice | 10 min | Perguntas e respostas |\r
| Pair Practice | 10 min | Conversacao em pares |\r
| Wrap-up | 5 min | Revisao e homework |\r
`;function yg(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Yr(e,r){var a;const n=r.split("|").map(t=>t.trim()).filter(Boolean);for(const t of n){const o=new RegExp(`##\\s*${yg(t)}[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s|$)`,"i"),i=e.match(o);if((a=i==null?void 0:i[1])!=null&&a.trim())return i[1].trim()}return""}function Ag(e){var n;const r=e.match(/\*\*Objetivo:\*\*\s*(.+)/i);return((n=r==null?void 0:r[1])==null?void 0:n.trim())??"Objetivo nao informado"}function Pg(e){var n;const r=e.match(/^#\s+(.+)/m);return((n=r==null?void 0:r[1])==null?void 0:n.trim())??"Aula sem titulo"}function Qa(e){const r=e.split(`
`).map(n=>n.trim()).filter(n=>n.length>0).map(n=>n.replace(/^[-\d.\s]+/,"").trim());return r.length>0?r:["Conteudo de revisao em sala."]}function wg(e,r){return[r??"",e].join(" ").replace(/\s+/g," ").trim().toLowerCase()}function Rg(e){return e.split(`
`).map(n=>n.trim().replace(/^-/,"").trim()).map(n=>{const[a,t]=n.split("|").map(o=>o.trim()).filter(Boolean);return wg(a,t)})}function Tg(e){const r=e.split(`
`).map(n=>n.trim()).find(n=>n.startsWith("-")||n.includes(","));return r?r.replace(/^-\s*/,"").split(",").map(n=>n.trim()).filter(Boolean).map(n=>({verb:n,usage:"aplique em frases da aula"})):[{verb:"review",usage:"revisao"}]}function kg(e){const r=Yr(e,"Gramatica|Gramática|Grammar");return{title:"Foco gramatical",bullets:Qa(r)}}function Cg(e,r){return Array.from(new Set(e.filter(a=>a!==r))).slice(0,2)}function Eg(e,r){const n=r.slice(0,3).map(o=>({prompt:"Complete com o verbo correto: I ______ every day.",answer:o.verb.split(" ")[0].toLowerCase(),tip:`Use o verbo "${o.verb}".`})),a=[...r.map(o=>o.verb.toLowerCase()),"homework","classroom","teacher"],t=e.slice(0,3).map(o=>{const i=Cg(a,o);return{question:"Qual expressao faz parte do vocabulario da aula?",options:[o,...i].sort(),answer:o}});return{fillBlanks:n,multipleChoice:t}}function Sg(e){var n;if(e.toLowerCase().includes("show"))return 0;const r=(n=e.match(/(\d+)/))==null?void 0:n[1];return Number(r??99)}function Og(e,r){const n=Pg(r),a=Ag(r),t=Rg(Yr(r,"Vocabulario|Vocabulário|Vocabulary")),o=Tg(Yr(r,"Verbos|Verbos da aula|Verbs")),i=kg(r),s=Qa(Yr(r,"Preparacao|Preparação|Warm-up|Warm up")),l=Qa(Yr(r,"Desenvolvimento|Development|Structure Presentation|Controlled Practice")),u=Qa(Yr(r,"Homework|Wrap-up|Wrap up")),h=Eg(t,o);return{id:e.toLowerCase().replace(".md",""),order:Sg(e),title:n,objective:a,vocab:t,verbs:o,grammar:i,prep:s,development:l,homework:u,practice:h}}function um(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ir(e,r){var n;for(const a of r){const t=new RegExp(`##\\s*${um(a)}[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s|$)`,"i"),o=e.match(t);if((n=o==null?void 0:o[1])!=null&&n.trim())return o[1].trim()}return""}function yo(e,r,n){var o;const a=new RegExp(`\\*\\*${um(r)}:\\*\\*\\s*(.+)`,"i"),t=e.match(a);return((o=t==null?void 0:t[1])==null?void 0:o.trim())??n}function bg(e){var n;const r=e.match(/^#\s+(.+)/m);return((n=r==null?void 0:r[1])==null?void 0:n.trim())??"Guia sem titulo"}function Bt(e){return e.replace(/\*\*/g,"").replace(/`/g,"").trim()}function gi(e){const r=e.split(`
`).map(n=>Bt(n.trim())).filter(n=>n.length>0);return r.length===0?["Sem conteudo nesta secao."]:r}function La(e){const r=gi(e).filter(n=>n.startsWith("-")||/^\d+\./.test(n)||/^###\s+/i.test(n)).map(n=>n.replace(/^###\s+/,"").replace(/^[-\d.\s]+/,"").trim()).filter(n=>n.length>0);return r.length>0?r:gi(e).slice(0,8)}function Ig(e,r){return[r??"",e].join(" ").replace(/\s+/g," ").trim().toLowerCase()}function xg(e){const r=e.split(`
`).map(n=>n.trim().replace(/^-/,"").trim());return r.length===0?["guided review","classroom practice"]:r.map(n=>{const[a,t]=n.split("|").map(o=>Bt(o.trim())).filter(Boolean);return Ig(a,t)})}function Ng(e){const r=gi(e).filter(n=>n.startsWith("-")).map(n=>n.replace(/^-\s*/,"").trim());return r.length===0?[{verb:"review",usage:"revisao"}]:r.map(n=>{const a=n.match(/\*\*([^*]+)\*\*\s*\(([^)]+)\)/);return a?{verb:a[1].trim().toLowerCase(),usage:"aplicar em frases da aula"}:{verb:Bt(n).replace(/\(.+\)/,"").trim().toLowerCase(),usage:"aplicar em frases da aula"}})}function Ug(e){const n=Ir(e,["ESTRUTURAS DA AULA","STRUCTURE PRESENTATION"]).split(`
`).map(a=>a.trim()).filter(a=>a.includes("|")&&!a.includes("---")&&!a.toLowerCase().includes("afirmativa"));return n.length===0?["Estruturas nao detalhadas no arquivo."]:n.map(a=>{const[t,o,i]=a.split("|").map(s=>Bt(s.trim())).filter(Boolean);return`Afirmativa: ${t} | Negativa: ${o} | Pergunta: ${i}`})}function Dg(e){var n;if(e.toLowerCase().includes("show"))return 0;const r=(n=e.match(/(\d+)/))==null?void 0:n[1];return Number(r??99)}function Lg(e,r){const n=Ir(r,["CRONOGRAMA DA AULA","SCHEDULE"]),a=Ir(r,["CONTROLLED PRACTICE","PRACTICE"]),t=Ir(r,["WRAP-UP","WRAP UP"]),o=Ir(r,["RESUMO DA AULA","CLASS SUMMARY"]);return{id:e.toLowerCase().replace(".md",""),order:Dg(e),title:bg(r),objective:yo(r,"Objetivo","Objetivo pedagogico nao informado"),duration:yo(r,"Duração","60 minutos"),level:yo(r,"Nível","A1"),vocab:xg(Ir(r,["VOCABULÁRIO","VOCABULARIO","VOCABULARY"])),verbs:Ng(Ir(r,["VERBOS DA AULA","VERBOS","VERBS"])),structures:Ug(r),timeline:La(n),controlledPractice:La(a),wrapUp:La(t),lessonSummary:La(o)}}const _g=Object.assign({"../../classes/Aula01.md":Kf,"../../classes/Aula02.md":Xf,"../../classes/Aula03.md":Jf,"../../classes/Aula04.md":Zf,"../../classes/Aula05.md":eh,"../../classes/Aula06.md":rh,"../../classes/Aula07.md":nh,"../../classes/Aula08.md":ah,"../../classes/Aula11.md":th,"../../classes/Aula12.md":oh,"../../classes/Aula13.md":ih,"../../classes/Aula14.md":sh,"../../classes/Aula15.md":lh,"../../classes/Aula16.md":uh}),Wg=Object.assign({"../../teacher-guides/Aula01.md":ch,"../../teacher-guides/Aula02.md":mh,"../../teacher-guides/Aula03.md":dh,"../../teacher-guides/Aula04.md":ph,"../../teacher-guides/Aula05.md":fh,"../../teacher-guides/Aula06.md":hh,"../../teacher-guides/Aula07.md":gh,"../../teacher-guides/Aula08.md":vh,"../../teacher-guides/Aula09.md":yh,"../../teacher-guides/Aula10.md":Ah,"../../teacher-guides/Aula11.md":Ph,"../../teacher-guides/Aula12.md":wh,"../../teacher-guides/Aula13.md":Rh,"../../teacher-guides/Aula14.md":Th,"../../teacher-guides/Aula15.md":kh,"../../teacher-guides/Aula16.md":Ch,"../../teacher-guides/Aula17.md":Eh,"../../teacher-guides/Aula18.md":Sh,"../../teacher-guides/Aula19.md":Oh,"../../teacher-guides/Aula20.md":bh,"../../teacher-guides/Aula21.md":Ih,"../../teacher-guides/Aula22.md":xh,"../../teacher-guides/Aula23.md":Nh,"../../teacher-guides/Aula24.md":Uh,"../../teacher-guides/Aula25.md":Dh,"../../teacher-guides/Aula26.md":Lh,"../../teacher-guides/Aula27.md":_h,"../../teacher-guides/Aula28.md":Wh,"../../teacher-guides/Aula29.md":Mh,"../../teacher-guides/Aula30.md":zh,"../../teacher-guides/Aula31.md":Bh,"../../teacher-guides/Aula32.md":Fh,"../../teacher-guides/Aula33.md":jh,"../../teacher-guides/Aula34.md":Vh,"../../teacher-guides/Aula35.md":Gh,"../../teacher-guides/Aula36.md":Hh,"../../teacher-guides/Aula37.md":$h,"../../teacher-guides/Aula38.md":Yh,"../../teacher-guides/Aula39.md":qh,"../../teacher-guides/Aula40.md":Qh,"../../teacher-guides/Aula41.md":Kh,"../../teacher-guides/Aula42.md":Xh,"../../teacher-guides/Aula43.md":Jh,"../../teacher-guides/Aula44.md":Zh,"../../teacher-guides/Aula45.md":eg,"../../teacher-guides/Aula46.md":rg,"../../teacher-guides/Aula47.md":ng,"../../teacher-guides/Aula48.md":ag,"../../teacher-guides/Aula49.md":tg,"../../teacher-guides/Aula50.md":og,"../../teacher-guides/Aula51.md":ig,"../../teacher-guides/Aula52.md":sg,"../../teacher-guides/Aula53.md":lg,"../../teacher-guides/Aula54.md":ug,"../../teacher-guides/Aula55.md":cg,"../../teacher-guides/Aula56.md":mg,"../../teacher-guides/Aula57.md":dg,"../../teacher-guides/Aula58.md":pg,"../../teacher-guides/Aula59.md":fg,"../../teacher-guides/Aula60.md":hg,"../../teacher-guides/Aula61.md":gg,"../../teacher-guides/Aula62.md":vg});function cm(e){const r=e.split("/");return r[r.length-1]??e}function mm(e){return e.sort((r,n)=>r.order-n.order)}const _l=mm(Object.entries(_g).map(([e,r])=>Og(cm(e),r))),Mg=mm(Object.entries(Wg).map(([e,r])=>Lg(cm(e),r))),dm="english_course_completed_lessons";function zg(){const e=localStorage.getItem(dm);if(!e)return[];try{const r=JSON.parse(e);return Array.isArray(r)?r:[]}catch{return[]}}function Bg(){const[e,r]=R.useState(zg);function n(t){r(o=>{const i=o.includes(t)?o.filter(s=>s!==t):[...o,t];return localStorage.setItem(dm,JSON.stringify(i)),i})}const a=R.useMemo(()=>e.length===0?0:e.length,[e]);return{completedIds:e,progressPercent:a,toggleLesson:n}}function Fg({grammar:e}){return f.jsxs("section",{className:"rounded-2xl bg-white/90 p-5 shadow-lesson",children:[f.jsx("h2",{className:"font-heading text-2xl text-ocean",children:e.title}),f.jsx("ul",{className:"mt-3 space-y-2",children:e.bullets.map(r=>f.jsx("li",{className:"rounded-xl bg-dawn/70 px-3 py-2 text-slate",children:r},r))})]})}function jg({prep:e,development:r,homework:n}){return f.jsxs("section",{className:"grid gap-4 lg:grid-cols-3",children:[f.jsxs("article",{className:"rounded-2xl bg-white/90 p-4 shadow-lesson",children:[f.jsx("h3",{className:"font-heading text-xl text-ocean",children:"Preparacao"}),f.jsx("ul",{className:"mt-3 space-y-2 text-sm text-slate",children:e.map(a=>f.jsxs("li",{children:["- ",a]},a))})]}),f.jsxs("article",{className:"rounded-2xl bg-white/90 p-4 shadow-lesson",children:[f.jsx("h3",{className:"font-heading text-xl text-ocean",children:"Aula em classe"}),f.jsx("ul",{className:"mt-3 space-y-2 text-sm text-slate",children:r.map(a=>f.jsxs("li",{children:["- ",a]},a))})]}),f.jsxs("article",{className:"rounded-2xl bg-white/90 p-4 shadow-lesson",children:[f.jsx("h3",{className:"font-heading text-xl text-ocean",children:"Homework"}),f.jsx("ul",{className:"mt-3 space-y-2 text-sm text-slate",children:n.map(a=>f.jsxs("li",{children:["- ",a]},a))})]})]})}function pm(){var e=Object.create(null);function r(n){delete e[n]}this.set=function(n,a,t){if(t!==void 0&&(typeof t!="number"||isNaN(t)||t<=0))throw new Error("Cache timeout must be a positive number");var o=e[n];o&&clearTimeout(o.timeout);var i={value:a,expire:t+Date.now()};return isNaN(i.expire)||(i.timeout=setTimeout(()=>r(n),t)),e[n]=i,a},this.del=function(n){var a=!0,t=e[n];return t?(clearTimeout(t.timeout),!isNaN(t.expire)&&t.expire<Date.now()&&(a=!1)):a=!1,a&&r(n),a},this.clear=function(){for(var n in e)clearTimeout(e[n].timeout);e=Object.create(null)},this.get=function(n){var a=e[n];if(a!==void 0){if(isNaN(a.expire)||a.expire>=Date.now())return a.value;delete e[n]}return null}}const vi=new pm;vi.Cache=pm;const Vg="https://translate.googleapis.com/translate_a/single";var Gg={fetch:({key:e,from:r,to:n,text:a})=>[`${Vg}?client=gtx&sl=${r}&tl=${n}&dt=t&q=${encodeURIComponent(a)}`],parse:e=>e.json().then(r=>{if(!(r=r&&r[0]&&r[0][0]&&r[0].map(n=>n[0]).join("")))throw new Error("Translation not found");return r})},Hg={needkey:!0,fetch:({key:e,from:r,to:n,text:a})=>[`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${e}&lang=${r}-${n}&text=${encodeURIComponent(a)}`,{method:"POST",body:""}],parse:e=>e.json().then(r=>{if(r.code!==200)throw new Error(r.message);return r.text[0]})};const $g="https://libretranslate.com/translate";var Yg={needkey:!1,fetch:({url:e=$g,key:r,from:n,to:a,text:t})=>[e,{method:"POST",body:JSON.stringify({q:t,source:n,target:a,api_key:r}),headers:{"Content-Type":"application/json"}}],parse:e=>e.json().then(r=>{if(!r)throw new Error("No response found");if(r.error)throw new Error(r.error);if(!r.translatedText)throw new Error("No response found");return r.translatedText})},qg={needkey:!0,fetch:({key:e,from:r,to:n,text:a})=>[`https://api${e.endsWith(":fx")?"-free":""}.deepl.com/v2/translate?auth_key=${e}&source_lang=${r}&target_lang=${n}&text=${a=encodeURIComponent(a)}`,{method:"POST",body:""}],parse:async e=>{if(!e.ok)throw e.status===403?new Error("Auth Error, please review the key for DeepL"):new Error(`Error ${e.status}`);return e.json().then(r=>r.translations[0].text)}},Qg={google:Gg,yandex:Hg,libre:Yg,deepl:qg},fm={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"},Kg={afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese:"zh","church slavic":"cu","old slavonic":"cu","church slavonic":"cu","old bulgarian":"cu","old church slavonic":"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr","western frisian":"fy",fulah:"ff",georgian:"ka",gaelic:"gd","scottish gaelic":"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht","haitian creole":"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi","hiri motu":"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io","sichuan yi":"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk","central khmer":"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv","ndebele, south":"nr","south ndebele":"nr","ndebele, north":"nd","north ndebele":"nd",ndonga:"ng",nepali:"ne","norwegian nynorsk":"nn","nynorsk, norwegian":"nn","norwegian bokmål":"nb","bokmål, norwegian":"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl","northern sami":"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi",volapük:"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};const Xg=Object.values(fm).sort();var Ao=e=>{if(typeof e!="string")throw new Error('The "language" must be a string, received '+typeof e);if(e.length>100)throw new Error(`The "language" is too long at ${e.length} characters`);if(e=e.toLowerCase(),e=Kg[e]||fm[e]||e,!Xg.includes(e))throw new Error(`The language "${e}" is not part of the ISO 639-1`);return e};const wt=function(e={}){if(!(this instanceof wt))return new wt(e);const r={from:"en",to:"en",cache:void 0,engine:"google",key:void 0,url:void 0,languages:Ao,engines:Qg,keys:{}},n=async(a,t={})=>{typeof t=="string"&&(t={to:t});const o=Object.keys(t).find(u=>u!=="from"&&u!=="to");if(o)throw new Error(`Invalid option with the name '${o}'`);t.text=a,t.from=Ao(t.from||n.from),t.to=Ao(t.to||n.to),t.cache=n.cache,t.engine=n.engine,t.url=n.url,t.id=`${t.url}:${t.from}:${t.to}:${t.engine}:${t.text}`,t.keys=n.keys||{};for(let u in n.keys)t.keys[u]=t.keys[u]||n.keys[u];t.key=t.key||n.key||t.keys[t.engine];const i=n.engines[t.engine],s=vi.get(t.id);if(s)return Promise.resolve(s);if(t.to===t.from)return Promise.resolve(t.text);if(i.needkey&&!t.key)throw new Error(`The engine "${t.engine}" needs a key, please provide it`);const l=i.fetch(t);return fetch(...l).then(i.parse).then(u=>vi.set(t.id,u,t.cache))};for(let a in r)n[a]=e[a]===void 0?r[a]:e[a];return n},Ft=new wt;Ft.Translate=wt;Ft.engine="google";Ft.cache=1e3*60*60*24;const _a={};function hm(e){return e.toLowerCase().replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim()}function Wl(e){return hm(e)||"traducao indisponivel"}async function Jg(e){const r=hm(e);if(!r)return"traducao indisponivel";if(_a[r])return _a[r];try{const n=await Ft(r,{from:"en",to:"pt"}),t=String(n).trim().toLowerCase()||Wl(r);return _a[r]=t,t}catch{const n=Wl(r);return _a[r]=n,n}}function vs(e){const[r,n]=R.useState({}),a=R.useMemo(()=>Array.from(new Set(e.map(o=>o.trim()).filter(Boolean))),[e]);R.useEffect(()=>{let o=!0;async function i(){const s=a.filter(u=>!r[u]);if(s.length===0)return;const l=await Promise.all(s.map(async u=>[u,await Jg(u)]));o&&n(u=>{const h={...u};return l.forEach(([p,g])=>{h[p]=g}),h})}return i(),()=>{o=!1}},[a,r]);function t(o){return r[o]??"traduzindo..."}return{getTranslation:t,translations:r}}function Zg({verbs:e}){const{getTranslation:r}=vs(e.map(n=>n.verb));return f.jsxs("section",{children:[f.jsx("h2",{className:"font-heading text-2xl text-ocean",children:"Verbos da aula"}),f.jsx("div",{className:"mt-4 overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-lesson",children:f.jsxs("table",{className:"w-full text-sm",children:[f.jsx("thead",{className:"bg-ocean text-dawn",children:f.jsxs("tr",{children:[f.jsx("th",{className:"px-4 py-3 text-left",children:"Verbo"}),f.jsx("th",{className:"px-4 py-3 text-left",children:"Tradução"}),f.jsx("th",{className:"px-4 py-3 text-left",children:"Como praticar"})]})}),f.jsx("tbody",{children:e.map(n=>f.jsxs("tr",{className:"border-t border-dawn",children:[f.jsx("td",{className:"px-4 py-3 font-bold text-slate",children:n.verb}),f.jsx("td",{className:"px-4 py-3 text-slate",children:r(n.verb)}),f.jsx("td",{className:"px-4 py-3 text-slate",children:n.usage})]},n.verb))})]})})]})}function ev({vocab:e}){const[r,n]=R.useState([]),{getTranslation:a}=vs(e);function t(o){n(i=>i.includes(o)?i.filter(s=>s!==o):[...i,o])}return f.jsxs("section",{children:[f.jsx("h2",{className:"font-heading text-2xl text-ocean",children:"Flashcards de vocabulario"}),f.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:e.map(o=>{const i=r.includes(o);return f.jsxs("button",{className:"rounded-2xl border border-white/70 bg-white/90 p-4 text-left shadow-lesson transition hover:-translate-y-1",onClick:()=>t(o),type:"button",children:[f.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-mint",children:i?"PT-BR":"EN"}),f.jsx("p",{className:"mt-1 font-heading text-xl text-slate",children:i?a(o):o})]},o)})})]})}function rv({lessons:e,completedIds:r,onToggleLesson:n}){const{lessonId:a}=Rf(),t=e.find(i=>i.id===a);if(!t)return f.jsxs("div",{className:"mx-auto mt-16 max-w-xl rounded-3xl bg-white/85 p-8 text-center shadow-lesson",children:[f.jsx("h1",{className:"font-heading text-2xl text-ocean",children:"Aula nao encontrada"}),f.jsx(Fr,{className:"mt-4 inline-block rounded-xl bg-ocean px-4 py-2 font-bold text-dawn",to:"/",children:"Voltar para inicio"})]});const o=r.includes(t.id);return f.jsxs("main",{className:"mx-auto max-w-6xl space-y-6 px-4 py-8",children:[f.jsxs("header",{className:"rounded-3xl bg-gradient-to-r from-sun to-ocean p-7 text-white shadow-lesson",children:[f.jsx(Fr,{className:"text-sm font-bold underline",to:"/",children:"Voltar para trilha"}),f.jsx("p",{className:"mt-4 text-xs uppercase tracking-[0.22em]",children:"Aula individual"}),f.jsx("h1",{className:"mt-2 font-heading text-3xl",children:t.title}),f.jsx("p",{className:"mt-2 max-w-3xl text-sm",children:t.objective}),f.jsx("button",{className:`mt-5 rounded-xl px-4 py-2 text-sm font-bold ${o?"bg-mint text-white":"bg-dawn text-ocean"}`,onClick:()=>n(t.id),type:"button",children:o?"Aula concluida":"Marcar aula como concluida"})]}),f.jsx(ev,{vocab:t.vocab}),f.jsx(Zg,{verbs:t.verbs}),f.jsx(Fg,{grammar:t.grammar}),f.jsx(jg,{development:t.development,homework:t.homework,prep:t.prep})]})}function nv(){return f.jsxs("div",{className:"mx-auto mt-16 max-w-xl rounded-3xl bg-white/80 p-8 text-center shadow-lesson",children:[f.jsx("h1",{className:"font-heading text-3xl text-ocean",children:"Pagina nao encontrada"}),f.jsx("p",{className:"mt-3 text-slate",children:"Esta rota nao existe no curso. Volte para a lista de aulas para continuar sua jornada."}),f.jsx(Fr,{className:"mt-6 inline-block rounded-xl bg-ocean px-5 py-3 font-bold text-dawn",to:"/",children:"Ir para inicio"})]})}function av({completed:e,total:r}){const n=r===0?0:Math.round(e/r*100);return f.jsxs("section",{className:"rounded-2xl bg-white/85 p-4 shadow-lesson",children:[f.jsx("p",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Progresso no curso"}),f.jsxs("h2",{className:"mt-1 font-heading text-2xl text-slate",children:[e," de ",r," aulas concluidas"]}),f.jsx("div",{className:"mt-4 h-4 overflow-hidden rounded-full bg-dawn",children:f.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-mint to-ocean transition-all duration-500",style:{width:`${n}%`}})}),f.jsxs("p",{className:"mt-2 text-sm text-slate",children:[n,"% completo"]})]})}function tv({lesson:e,completed:r,onToggle:n}){return f.jsxs("article",{className:"animate-riseIn rounded-2xl border border-white/50 bg-white/90 p-5 shadow-lesson",children:[f.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-mint",children:e.order===0?"Aula Show":`Aula ${String(e.order).padStart(2,"0")}`}),f.jsx("h3",{className:"mt-2 font-heading text-xl text-ocean",children:e.title}),f.jsx("p",{className:"mt-2 text-sm text-slate",children:e.objective}),f.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[f.jsx("button",{className:`rounded-xl px-4 py-2 text-sm font-bold transition ${r?"bg-mint text-white":"bg-dawn text-ocean"}`,onClick:()=>n(e.id),type:"button",children:r?"Concluida":"Marcar como concluida"}),f.jsx(Fr,{className:"rounded-xl bg-ocean px-4 py-2 text-sm font-bold text-dawn",to:`/lesson/${e.id}`,children:"Abrir aula"})]})]})}function ov({lessons:e,completedIds:r,onToggleLesson:n}){return f.jsxs("main",{className:"mx-auto max-w-6xl space-y-6 px-4 py-8",children:[f.jsxs("header",{className:"rounded-3xl bg-gradient-to-r from-ocean to-mint p-7 text-dawn shadow-lesson",children:[f.jsx("p",{className:"text-sm uppercase tracking-[0.28em]",children:"Curso aberto e gratuito"}),f.jsx("h1",{className:"mt-2 font-heading text-4xl",children:"Ingles Basico Interativo"}),f.jsx("p",{className:"mt-3 max-w-3xl text-sm leading-relaxed sm:text-base",children:"Estude no seu ritmo com trilha guiada, revisoes e praticas objetivas em portugues."}),f.jsx("div",{className:"mt-4",children:f.jsx(Fr,{className:"inline-block rounded-xl bg-dawn px-4 py-2 text-sm font-bold text-ocean",to:"/teacher",children:"Entrar na area do professor"})})]}),f.jsx(av,{completed:r.length,total:e.length}),f.jsx("section",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:e.map(a=>f.jsx(tv,{completed:r.includes(a.id),lesson:a,onToggle:n},a.id))})]})}function iv({lesson:e}){const{getTranslation:r}=vs(e.vocab.concat(e.verbs.map(n=>n.verb)));return f.jsxs("details",{className:"rounded-2xl bg-white/90 p-4 shadow-lesson",open:e.order<=1,children:[f.jsxs("summary",{className:"cursor-pointer list-none",children:[f.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-mint",children:e.order===0?"Aula Show":`Aula ${String(e.order).padStart(2,"0")}`}),f.jsx("h3",{className:"font-heading text-2xl text-ocean",children:e.title})]}),f.jsxs("div",{className:"mt-4 space-y-4",children:[f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h4",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Objetivo pedagogico"}),f.jsx("p",{className:"mt-1 text-sm text-slate",children:e.objective}),f.jsxs("p",{className:"mt-1 text-xs text-slate/80",children:["Duracao: ",e.duration," | Nivel: ",e.level]})]}),f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h4",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Vocabulos e traducoes"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-slate",children:e.vocab.map(n=>f.jsxs("li",{children:[n,": ",r(n)]},`vocab-${n}`))})]}),f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h4",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Verbos alvo"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-slate",children:e.verbs.map(n=>f.jsxs("li",{children:[n.verb,": ",r(n.verb)]},`verb-${n.verb}`))})]}),f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h4",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Estruturas da aula"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-slate",children:e.structures.map(n=>f.jsx("li",{children:n},`structure-${n}`))})]}),f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h4",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Roteiro de apresentacao"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-slate",children:e.timeline.map(n=>f.jsx("li",{children:n},`timeline-${n}`))})]}),f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h5",{className:"mt-3 text-sm font-bold uppercase tracking-wide text-ocean",children:"Resumo da aula"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-slate",children:e.lessonSummary.map(n=>f.jsx("li",{children:n},`summary-${n}`))})]})]})]})}function Ml(e,r){const n=r.getBoundingClientRect();return{x:e.clientX-n.left,y:e.clientY-n.top}}function sv(e){const r=window.devicePixelRatio||1,n=e.clientWidth,a=e.clientHeight;e.width=Math.floor(n*r),e.height=Math.floor(a*r);const t=e.getContext("2d");if(!t)throw new Error("Canvas 2D context not available. Expected browser support for 2d context.");return t.scale(r,r),t.lineCap="round",t.lineJoin="round",t}function lv(){const e=R.useRef(null),r=R.useRef(null),n=R.useRef(null),a=R.useRef(!1),t=R.useRef(null),[o,i]=R.useState(3),[s,l]=R.useState("#1D3557"),[u,h]=R.useState("pen"),[p,g]=R.useState(""),[y,P]=R.useState(16),[A,C]=R.useState(!1);R.useEffect(()=>{const v=r.current,T=n.current;if(!v||!T)return;const k=window.devicePixelRatio||1,E=v.clientWidth,b=v.clientHeight;T.width=Math.floor(E*k),T.height=Math.floor(b*k);const L=sv(v);L.lineCap="round",L.lineJoin="round",L.lineWidth=o,L.strokeStyle=u==="eraser"?"#FFFFFF":s},[]),R.useEffect(()=>{const v=r.current,T=n.current;if(!v||!T)return;const k=v,E=T;function b(ne){const q=E.getContext("2d");if(!q)return;const J=window.devicePixelRatio||1;if(q.clearRect(0,0,E.width,E.height),u==="text"){q.fillStyle="#818181";const Ge=Math.max(2,Math.round(3*J));q.beginPath(),q.arc(ne.x*J,ne.y*J,Ge,0,Math.PI*2),q.fill();return}q.strokeStyle="#818181",q.lineWidth=2,q.beginPath(),q.arc(ne.x*J,ne.y*J,o/2*J,0,Math.PI*2),q.stroke()}function L(ne){a.current=!0,t.current=Ml(ne,k)}function x(ne){const q=Ml(ne,k);if(b(q),!a.current||u==="text")return;const J=k.getContext("2d");if(!J)return;const Ge=t.current;if(!Ge){t.current=q;return}J.lineWidth=o,J.strokeStyle=u==="eraser"?"#FFFFFF":s,J.lineCap="round",J.lineJoin="round",J.beginPath(),J.moveTo(Ge.x,Ge.y),J.lineTo(q.x,q.y),J.stroke(),t.current=q}function fe(){a.current=!1,t.current=null}function nr(){a.current=!1,t.current=null;const ne=E.getContext("2d");ne&&ne.clearRect(0,0,E.width,E.height)}return k.addEventListener("pointerdown",L),k.addEventListener("pointermove",x),k.addEventListener("pointerup",fe),k.addEventListener("pointerleave",nr),()=>{k.removeEventListener("pointerdown",L),k.removeEventListener("pointermove",x),k.removeEventListener("pointerup",fe),k.removeEventListener("pointerleave",nr)}},[o,s,u]);function m(){const v=r.current;if(!v)return;const T=v.getContext("2d");T&&T.clearRect(0,0,v.width,v.height)}function c(v){if(u!=="text"||!p)return;const T=r.current;if(!T)return;const k=T.getContext("2d");if(!k)return;const E=T.getBoundingClientRect(),b=v.clientX-E.left,L=v.clientY-E.top;k.fillStyle=s,k.font=`${y}px Arial`,k.fillText(p,b,L)}function d(){const v=e.current;v&&(A?document.fullscreenElement&&(document.exitFullscreen(),C(!1)):v.requestFullscreen&&(v.requestFullscreen(),C(!0)))}return f.jsxs("section",{className:"rounded-2xl bg-white/90 p-5 shadow-lesson",ref:e,children:[f.jsx("h2",{className:"font-heading text-2xl text-ocean",children:"Whiteboard do professor"}),f.jsx("p",{className:"mt-1 text-sm text-slate",children:"Use esta area para explicar estruturas, exemplos e corrigir respostas ao vivo."}),f.jsxs("div",{className:"mt-4 space-y-3",children:[f.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"mode-select",children:"Ferramenta"}),f.jsxs("select",{id:"mode-select",onChange:v=>h(v.target.value),value:u,className:"rounded-lg border border-ocean/20 px-3 py-2 text-sm",children:[f.jsx("option",{value:"pen",children:"Caneta"}),f.jsx("option",{value:"eraser",children:"Borracha"}),f.jsx("option",{value:"text",children:"Texto"})]})]}),u==="pen"&&f.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"line-width",children:"Espessura"}),f.jsx("input",{id:"line-width",max:10,min:1,onChange:v=>i(Number(v.target.value)),type:"range",value:o}),f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"line-color",children:"Cor"}),f.jsx("input",{id:"line-color",onChange:v=>l(v.target.value),type:"color",value:s})]}),u==="eraser"&&f.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"eraser-width",children:"Tamanho da borracha"}),f.jsx("input",{id:"eraser-width",max:30,min:1,onChange:v=>i(Number(v.target.value)),type:"range",value:o})]}),u==="text"&&f.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[f.jsx("input",{className:"rounded-lg border border-ocean/20 px-3 py-2 text-sm",onChange:v=>g(v.target.value),placeholder:"Digite o texto",type:"text",value:p}),f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"text-size",children:"Tamanho"}),f.jsx("input",{id:"text-size",max:48,min:8,onChange:v=>P(Number(v.target.value)),type:"range",value:y}),f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"text-color",children:"Cor"}),f.jsx("input",{id:"text-color",onChange:v=>l(v.target.value),type:"color",value:s})]}),f.jsxs("div",{className:"flex flex-wrap gap-2",children:[f.jsx("button",{className:"rounded-lg bg-ocean px-4 py-2 text-sm font-bold text-dawn",onClick:m,type:"button",children:"Limpar quadro"}),f.jsx("button",{className:"rounded-lg border border-ocean bg-white px-4 py-2 text-sm font-bold text-ocean",onClick:d,type:"button",children:A?"Sair de tela cheia":"Tela cheia"})]})]}),f.jsxs("div",{className:"relative mt-4",children:[f.jsx("canvas",{className:"mt-4 h-[420px] w-full touch-none rounded-xl border border-ocean/20 bg-white cursor-none",onClick:c,ref:r}),f.jsx("canvas",{className:"absolute inset-0 top-0 h-[420px] w-full touch-none rounded-xl pointer-events-none",ref:n})]})]})}const yi="teacher_area_unlocked",uv="teachersonly";function cv(){return localStorage.getItem(yi)==="yes"}function mv(){const[e,r]=R.useState(cv);function n(o){return o.trim()===uv}function a(){localStorage.setItem(yi,"yes"),r(!0)}function t(){localStorage.removeItem(yi),r(!1)}return{isUnlocked:e,validatePassword:n,unlock:a,lock:t}}function dv({lessons:e}){const{isUnlocked:r,lock:n,unlock:a,validatePassword:t}=mv(),[o,i]=R.useState(""),[s,l]=R.useState("");function u(h){if(h.preventDefault(),t(o)){l(""),a();return}l("Senha invalida. Use a senha compartilhada com professores.")}return r?f.jsxs("main",{className:"mx-auto max-w-6xl space-y-6 px-4 py-8",children:[f.jsxs("header",{className:"rounded-3xl bg-gradient-to-r from-ocean to-slate p-7 text-white shadow-lesson",children:[f.jsx("p",{className:"text-xs uppercase tracking-[0.22em]",children:"Painel do professor"}),f.jsx("h1",{className:"mt-2 font-heading text-3xl",children:"Guia completo + gabarito por aula"}),f.jsx("p",{className:"mt-2 text-sm",children:"Use os blocos abaixo para conduzir cada aula do curso com roteiro, respostas e quadro digital."}),f.jsxs("div",{className:"mt-4 flex flex-wrap gap-3",children:[f.jsx(Fr,{className:"rounded-xl bg-dawn px-4 py-2 text-sm font-bold text-ocean",to:"/",children:"Voltar para inicio"}),f.jsx("button",{className:"rounded-xl border border-white px-4 py-2 text-sm font-bold",onClick:n,type:"button",children:"Sair da area do professor"})]})]}),f.jsx(lv,{}),f.jsx("section",{className:"space-y-4",children:e.map(h=>f.jsx(iv,{lesson:h},h.id))})]}):f.jsx("main",{className:"mx-auto max-w-xl px-4 py-10",children:f.jsxs("section",{className:"rounded-2xl bg-white/90 p-6 shadow-lesson",children:[f.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-mint",children:"Acesso restrito"}),f.jsx("h1",{className:"mt-2 font-heading text-3xl text-ocean",children:"Area do professor"}),f.jsx("p",{className:"mt-2 text-sm text-slate",children:"Esta pagina contem gabaritos e guia de conducao da aula. Digite a senha para continuar."}),f.jsxs("form",{className:"mt-4 space-y-3",onSubmit:u,children:[f.jsx("label",{className:"block text-sm font-bold text-slate",htmlFor:"teacher-password",children:"Senha"}),f.jsx("input",{className:"w-full rounded-xl border border-ocean/20 px-3 py-2",id:"teacher-password",onChange:h=>i(h.target.value),placeholder:"Digite a senha",type:"password",value:o}),s?f.jsx("p",{className:"text-sm font-bold text-red-600",children:s}):null,f.jsx("button",{className:"rounded-xl bg-ocean px-5 py-2 font-bold text-dawn",type:"submit",children:"Entrar"})]}),f.jsx(Fr,{className:"mt-4 inline-block text-sm font-bold text-ocean underline",to:"/",children:"Voltar para curso"})]})})}function pv(){const{completedIds:e,toggleLesson:r}=Bg();return f.jsxs(zf,{children:[f.jsx($r,{element:f.jsx(ov,{completedIds:e,lessons:_l,onToggleLesson:r}),path:"/"}),f.jsx($r,{element:f.jsx(rv,{completedIds:e,lessons:_l,onToggleLesson:r}),path:"/lesson/:lessonId"}),f.jsx($r,{element:f.jsx(dv,{lessons:Mg}),path:"/teacher"}),f.jsx($r,{element:f.jsx(Wf,{replace:!0,to:"/"}),path:"/home"}),f.jsx($r,{element:f.jsx(nv,{}),path:"*"})]})}Po.createRoot(document.getElementById("root")).render(f.jsx(Ql.StrictMode,{children:f.jsx($f,{children:f.jsx(pv,{})})}));
