function gm(e,n){for(var a=0;a<n.length;a++){const t=n[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();function vm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zl={exports:{}},Rr={},Bl={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ct=Symbol.for("react.element"),ym=Symbol.for("react.portal"),Am=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),wm=Symbol.for("react.profiler"),Rm=Symbol.for("react.provider"),Tm=Symbol.for("react.context"),km=Symbol.for("react.forward_ref"),Cm=Symbol.for("react.suspense"),Em=Symbol.for("react.memo"),Sm=Symbol.for("react.lazy"),ys=Symbol.iterator;function Om(e){return e===null||typeof e!="object"?null:(e=ys&&e[ys]||e["@@iterator"],typeof e=="function"?e:null)}var Fl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jl=Object.assign,Vl={};function Pa(e,n,a){this.props=e,this.context=n,this.refs=Vl,this.updater=a||Fl}Pa.prototype.isReactComponent={};Pa.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Pa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gl(){}Gl.prototype=Pa.prototype;function Ai(e,n,a){this.props=e,this.context=n,this.refs=Vl,this.updater=a||Fl}var Pi=Ai.prototype=new Gl;Pi.constructor=Ai;jl(Pi,Pa.prototype);Pi.isPureReactComponent=!0;var As=Array.isArray,Hl=Object.prototype.hasOwnProperty,wi={current:null},$l={key:!0,ref:!0,__self:!0,__source:!0};function Yl(e,n,a){var t,r={},o=null,i=null;if(n!=null)for(t in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(o=""+n.key),n)Hl.call(n,t)&&!$l.hasOwnProperty(t)&&(r[t]=n[t]);var s=arguments.length-2;if(s===1)r.children=a;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(e&&e.defaultProps)for(t in s=e.defaultProps,s)r[t]===void 0&&(r[t]=s[t]);return{$$typeof:ct,type:e,key:o,ref:i,props:r,_owner:wi.current}}function Im(e,n){return{$$typeof:ct,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ri(e){return typeof e=="object"&&e!==null&&e.$$typeof===ct}function bm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return n[a]})}var Ps=/\/+/g;function Gr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?bm(""+e.key):n.toString(36)}function Wt(e,n,a,t,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ct:case ym:i=!0}}if(i)return i=e,r=r(i),e=t===""?"."+Gr(i,0):t,As(r)?(a="",e!=null&&(a=e.replace(Ps,"$&/")+"/"),Wt(r,n,a,"",function(u){return u})):r!=null&&(Ri(r)&&(r=Im(r,a+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(Ps,"$&/")+"/")+e)),n.push(r)),1;if(i=0,t=t===""?".":t+":",As(e))for(var s=0;s<e.length;s++){o=e[s];var l=t+Gr(o,s);i+=Wt(o,n,a,l,r)}else if(l=Om(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=t+Gr(o,s++),i+=Wt(o,n,a,l,r);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function yt(e,n,a){if(e==null)return e;var t=[],r=0;return Wt(e,t,"","",function(o){return n.call(a,o,r++)}),t}function xm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Mt={transition:null},Nm={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Mt,ReactCurrentOwner:wi};function ql(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:yt,forEach:function(e,n,a){yt(e,function(){n.apply(this,arguments)},a)},count:function(e){var n=0;return yt(e,function(){n++}),n},toArray:function(e){return yt(e,function(n){return n})||[]},only:function(e){if(!Ri(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Pa;U.Fragment=Am;U.Profiler=wm;U.PureComponent=Ai;U.StrictMode=Pm;U.Suspense=Cm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nm;U.act=ql;U.cloneElement=function(e,n,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=jl({},e.props),r=e.key,o=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,i=wi.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in n)Hl.call(n,l)&&!$l.hasOwnProperty(l)&&(t[l]=n[l]===void 0&&s!==void 0?s[l]:n[l])}var l=arguments.length-2;if(l===1)t.children=a;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];t.children=s}return{$$typeof:ct,type:e.type,key:r,ref:o,props:t,_owner:i}};U.createContext=function(e){return e={$$typeof:Tm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rm,_context:e},e.Consumer=e};U.createElement=Yl;U.createFactory=function(e){var n=Yl.bind(null,e);return n.type=e,n};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:km,render:e}};U.isValidElement=Ri;U.lazy=function(e){return{$$typeof:Sm,_payload:{_status:-1,_result:e},_init:xm}};U.memo=function(e,n){return{$$typeof:Em,type:e,compare:n===void 0?null:n}};U.startTransition=function(e){var n=Mt.transition;Mt.transition={};try{e()}finally{Mt.transition=n}};U.unstable_act=ql;U.useCallback=function(e,n){return de.current.useCallback(e,n)};U.useContext=function(e){return de.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return de.current.useDeferredValue(e)};U.useEffect=function(e,n){return de.current.useEffect(e,n)};U.useId=function(){return de.current.useId()};U.useImperativeHandle=function(e,n,a){return de.current.useImperativeHandle(e,n,a)};U.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};U.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};U.useMemo=function(e,n){return de.current.useMemo(e,n)};U.useReducer=function(e,n,a){return de.current.useReducer(e,n,a)};U.useRef=function(e){return de.current.useRef(e)};U.useState=function(e){return de.current.useState(e)};U.useSyncExternalStore=function(e,n,a){return de.current.useSyncExternalStore(e,n,a)};U.useTransition=function(){return de.current.useTransition()};U.version="18.3.1";Bl.exports=U;var R=Bl.exports;const Ql=vm(R),Um=gm({__proto__:null,default:Ql},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm=R,Lm=Symbol.for("react.element"),_m=Symbol.for("react.fragment"),Wm=Object.prototype.hasOwnProperty,Mm=Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zm={key:!0,ref:!0,__self:!0,__source:!0};function Kl(e,n,a){var t,r={},o=null,i=null;a!==void 0&&(o=""+a),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(i=n.ref);for(t in n)Wm.call(n,t)&&!zm.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)r[t]===void 0&&(r[t]=n[t]);return{$$typeof:Lm,type:e,key:o,ref:i,props:r,_owner:Mm.current}}Rr.Fragment=_m;Rr.jsx=Kl;Rr.jsxs=Kl;zl.exports=Rr;var f=zl.exports,Po={},Xl={exports:{}},ke={},Jl={exports:{}},Zl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(O,b){var N=O.length;O.push(b);e:for(;0<N;){var H=N-1>>>1,Z=O[H];if(0<r(Z,b))O[H]=b,O[N]=Z,N=H;else break e}}function a(O){return O.length===0?null:O[0]}function t(O){if(O.length===0)return null;var b=O[0],N=O.pop();if(N!==b){O[0]=N;e:for(var H=0,Z=O.length,gt=Z>>>1;H<gt;){var Sn=2*(H+1)-1,Vr=O[Sn],On=Sn+1,vt=O[On];if(0>r(Vr,N))On<Z&&0>r(vt,Vr)?(O[H]=vt,O[On]=N,H=On):(O[H]=Vr,O[Sn]=N,H=Sn);else if(On<Z&&0>r(vt,N))O[H]=vt,O[On]=N,H=On;else break e}}return b}function r(O,b){var N=O.sortIndex-b.sortIndex;return N!==0?N:O.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],h=1,p=null,g=3,y=!1,P=!1,A=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(O){for(var b=a(u);b!==null;){if(b.callback===null)t(u);else if(b.startTime<=O)t(u),b.sortIndex=b.expirationTime,n(l,b);else break;b=a(u)}}function v(O){if(A=!1,d(O),!P)if(a(l)!==null)P=!0,Ge(T);else{var b=a(u);b!==null&&jr(v,b.startTime-O)}}function T(O,b){P=!1,A&&(A=!1,m(I),I=-1),y=!0;var N=g;try{for(d(b),p=a(l);p!==null&&(!(p.expirationTime>b)||O&&!fe());){var H=p.callback;if(typeof H=="function"){p.callback=null,g=p.priorityLevel;var Z=H(p.expirationTime<=b);b=e.unstable_now(),typeof Z=="function"?p.callback=Z:p===a(l)&&t(l),d(b)}else t(l);p=a(l)}if(p!==null)var gt=!0;else{var Sn=a(u);Sn!==null&&jr(v,Sn.startTime-b),gt=!1}return gt}finally{p=null,g=N,y=!1}}var k=!1,E=null,I=-1,L=5,x=-1;function fe(){return!(e.unstable_now()-x<L)}function an(){if(E!==null){var O=e.unstable_now();x=O;var b=!0;try{b=E(!0,O)}finally{b?ae():(k=!1,E=null)}}else k=!1}var ae;if(typeof c=="function")ae=function(){c(an)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=an,ae=function(){J.postMessage(null)}}else ae=function(){C(an,0)};function Ge(O){E=O,k||(k=!0,ae())}function jr(O,b){I=C(function(){O(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){P||y||(P=!0,Ge(T))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return a(l)},e.unstable_next=function(O){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var N=g;g=b;try{return O()}finally{g=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,b){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=g;g=O;try{return b()}finally{g=N}},e.unstable_scheduleCallback=function(O,b,N){var H=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?H+N:H):N=H,O){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=N+Z,O={id:h++,callback:b,priorityLevel:O,startTime:N,expirationTime:Z,sortIndex:-1},N>H?(O.sortIndex=N,n(u,O),a(l)===null&&O===a(u)&&(A?(m(I),I=-1):A=!0,jr(v,N-H))):(O.sortIndex=Z,n(l,O),P||y||(P=!0,Ge(T))),O},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(O){var b=g;return function(){var N=g;g=b;try{return O.apply(this,arguments)}finally{g=N}}}})(Zl);Jl.exports=Zl;var Bm=Jl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fm=R,Te=Bm;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eu=new Set,Ha={};function Vn(e,n){pa(e,n),pa(e+"Capture",n)}function pa(e,n){for(Ha[e]=n,e=0;e<n.length;e++)eu.add(n[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wo=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ws={},Rs={};function Vm(e){return wo.call(Rs,e)?!0:wo.call(ws,e)?!1:jm.test(e)?Rs[e]=!0:(ws[e]=!0,!1)}function Gm(e,n,a,t){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hm(e,n,a,t){if(n===null||typeof n>"u"||Gm(e,n,a,t))return!0;if(t)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function pe(e,n,a,t,r,o,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=r,this.mustUseProperty=a,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=i}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new pe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];oe[n]=new pe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new pe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new pe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new pe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new pe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ti=/[\-:]([a-z])/g;function ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ti,ki);oe[n]=new pe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ti,ki);oe[n]=new pe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ti,ki);oe[n]=new pe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ci(e,n,a,t){var r=oe.hasOwnProperty(n)?oe[n]:null;(r!==null?r.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Hm(n,a,r,t)&&(a=null),t||r===null?Vm(n)&&(a===null?e.removeAttribute(n):e.setAttribute(n,""+a)):r.mustUseProperty?e[r.propertyName]=a===null?r.type===3?!1:"":a:(n=r.attributeName,t=r.attributeNamespace,a===null?e.removeAttribute(n):(r=r.type,a=r===3||r===4&&a===!0?"":""+a,t?e.setAttributeNS(t,n,a):e.setAttribute(n,a))))}var en=Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,At=Symbol.for("react.element"),Qn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Ei=Symbol.for("react.strict_mode"),Ro=Symbol.for("react.profiler"),nu=Symbol.for("react.provider"),au=Symbol.for("react.context"),Si=Symbol.for("react.forward_ref"),To=Symbol.for("react.suspense"),ko=Symbol.for("react.suspense_list"),Oi=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),tu=Symbol.for("react.offscreen"),Ts=Symbol.iterator;function ka(e){return e===null||typeof e!="object"?null:(e=Ts&&e[Ts]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Hr;function Na(e){if(Hr===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Hr=n&&n[1]||""}return`
`+Hr+e}var $r=!1;function Yr(e,n){if(!e||$r)return"";$r=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var t=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){t=u}e.call(n.prototype)}else{try{throw Error()}catch(u){t=u}e()}}catch(u){if(u&&t&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=t.stack.split(`
`),i=r.length-1,s=o.length-1;1<=i&&0<=s&&r[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(r[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||r[i]!==o[s]){var l=`
`+r[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{$r=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Na(e):""}function $m(e){switch(e.tag){case 5:return Na(e.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return e=Yr(e.type,!1),e;case 11:return e=Yr(e.type.render,!1),e;case 1:return e=Yr(e.type,!0),e;default:return""}}function Co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Qn:return"Portal";case Ro:return"Profiler";case Ei:return"StrictMode";case To:return"Suspense";case ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case au:return(e.displayName||"Context")+".Consumer";case nu:return(e._context.displayName||"Context")+".Provider";case Si:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oi:return n=e.displayName||null,n!==null?n:Co(e.type)||"Memo";case rn:n=e._payload,e=e._init;try{return Co(e(n))}catch{}}return null}function Ym(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Co(n);case 8:return n===Ei?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ru(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qm(e){var n=ru(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,o=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(i){t=""+i,o.call(this,i)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pt(e){e._valueTracker||(e._valueTracker=qm(e))}function ou(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),t="";return e&&(t=ru(e)?e.checked?"true":"false":e.value),e=t,e!==a?(n.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eo(e,n){var a=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function ks(e,n){var a=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;a=wn(n.value!=null?n.value:a),e._wrapperState={initialChecked:t,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function iu(e,n){n=n.checked,n!=null&&Ci(e,"checked",n,!1)}function So(e,n){iu(e,n);var a=wn(n.value),t=n.type;if(a!=null)t==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Oo(e,n.type,a):n.hasOwnProperty("defaultValue")&&Oo(e,n.type,wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Cs(e,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,a||n===e.value||(e.value=n),e.defaultValue=n}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Oo(e,n,a){(n!=="number"||Kt(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Ua=Array.isArray;function sa(e,n,a,t){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&t&&(e[a].defaultSelected=!0)}else{for(a=""+wn(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,t&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Io(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Es(e,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(w(92));if(Ua(a)){if(1<a.length)throw Error(w(93));a=a[0]}n=a}n==null&&(n=""),a=n}e._wrapperState={initialValue:wn(a)}}function su(e,n){var a=wn(n.value),t=wn(n.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),n.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),t!=null&&(e.defaultValue=""+t)}function Ss(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function lu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?lu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wt,uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,t,r){MSApp.execUnsafeLocalFunction(function(){return e(n,a,t,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wt=wt||document.createElement("div"),wt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $a(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qm=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(e){Qm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),_a[n]=_a[e]})});function cu(e,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||_a.hasOwnProperty(e)&&_a[e]?(""+n).trim():n+"px"}function mu(e,n){e=e.style;for(var a in n)if(n.hasOwnProperty(a)){var t=a.indexOf("--")===0,r=cu(a,n[a],t);a==="float"&&(a="cssFloat"),t?e.setProperty(a,r):e[a]=r}}var Km=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xo(e,n){if(n){if(Km[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function No(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function Ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Do=null,la=null,ua=null;function Os(e){if(e=pt(e)){if(typeof Do!="function")throw Error(w(280));var n=e.stateNode;n&&(n=Sr(n),Do(e.stateNode,e.type,n))}}function du(e){la?ua?ua.push(e):ua=[e]:la=e}function pu(){if(la){var e=la,n=ua;if(ua=la=null,Os(e),n)for(e=0;e<n.length;e++)Os(n[e])}}function fu(e,n){return e(n)}function hu(){}var qr=!1;function gu(e,n,a){if(qr)return e(n,a);qr=!0;try{return fu(e,n,a)}finally{qr=!1,(la!==null||ua!==null)&&(hu(),pu())}}function Ya(e,n){var a=e.stateNode;if(a===null)return null;var t=Sr(a);if(t===null)return null;a=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(w(231,n,typeof a));return a}var Lo=!1;if(Ke)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{Lo=!1}function Xm(e,n,a,t,r,o,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(a,u)}catch(h){this.onError(h)}}var Wa=!1,Xt=null,Jt=!1,_o=null,Jm={onError:function(e){Wa=!0,Xt=e}};function Zm(e,n,a,t,r,o,i,s,l){Wa=!1,Xt=null,Xm.apply(Jm,arguments)}function ed(e,n,a,t,r,o,i,s,l){if(Zm.apply(this,arguments),Wa){if(Wa){var u=Xt;Wa=!1,Xt=null}else throw Error(w(198));Jt||(Jt=!0,_o=u)}}function Gn(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function vu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Is(e){if(Gn(e)!==e)throw Error(w(188))}function nd(e){var n=e.alternate;if(!n){if(n=Gn(e),n===null)throw Error(w(188));return n!==e?null:e}for(var a=e,t=n;;){var r=a.return;if(r===null)break;var o=r.alternate;if(o===null){if(t=r.return,t!==null){a=t;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===a)return Is(r),e;if(o===t)return Is(r),n;o=o.sibling}throw Error(w(188))}if(a.return!==t.return)a=r,t=o;else{for(var i=!1,s=r.child;s;){if(s===a){i=!0,a=r,t=o;break}if(s===t){i=!0,t=r,a=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===a){i=!0,a=o,t=r;break}if(s===t){i=!0,t=o,a=r;break}s=s.sibling}if(!i)throw Error(w(189))}}if(a.alternate!==t)throw Error(w(190))}if(a.tag!==3)throw Error(w(188));return a.stateNode.current===a?e:n}function yu(e){return e=nd(e),e!==null?Au(e):null}function Au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Au(e);if(n!==null)return n;e=e.sibling}return null}var Pu=Te.unstable_scheduleCallback,bs=Te.unstable_cancelCallback,ad=Te.unstable_shouldYield,td=Te.unstable_requestPaint,$=Te.unstable_now,rd=Te.unstable_getCurrentPriorityLevel,bi=Te.unstable_ImmediatePriority,wu=Te.unstable_UserBlockingPriority,Zt=Te.unstable_NormalPriority,od=Te.unstable_LowPriority,Ru=Te.unstable_IdlePriority,Tr=null,je=null;function id(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(Tr,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:ud,sd=Math.log,ld=Math.LN2;function ud(e){return e>>>=0,e===0?32:31-(sd(e)/ld|0)|0}var Rt=64,Tt=4194304;function Da(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function er(e,n){var a=e.pendingLanes;if(a===0)return 0;var t=0,r=e.suspendedLanes,o=e.pingedLanes,i=a&268435455;if(i!==0){var s=i&~r;s!==0?t=Da(s):(o&=i,o!==0&&(t=Da(o)))}else i=a&~r,i!==0?t=Da(i):o!==0&&(t=Da(o));if(t===0)return 0;if(n!==0&&n!==t&&!(n&r)&&(r=t&-t,o=n&-n,r>=o||r===16&&(o&4194240)!==0))return n;if(t&4&&(t|=a&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)a=31-_e(n),r=1<<a,t|=e[a],n&=~r;return t}function cd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function md(e,n){for(var a=e.suspendedLanes,t=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-_e(o),s=1<<i,l=r[i];l===-1?(!(s&a)||s&t)&&(r[i]=cd(s,n)):l<=n&&(e.expiredLanes|=s),o&=~s}}function Wo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tu(){var e=Rt;return Rt<<=1,!(Rt&4194240)&&(Rt=64),e}function Qr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function mt(e,n,a){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-_e(n),e[n]=a}function dd(e,n){var a=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<a;){var r=31-_e(a),o=1<<r;n[r]=0,t[r]=-1,e[r]=-1,a&=~o}}function xi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var t=31-_e(a),r=1<<t;r&n|e[t]&n&&(e[t]|=n),a&=~r}}var _=0;function ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cu,Ni,Eu,Su,Ou,Mo=!1,kt=[],dn=null,pn=null,fn=null,qa=new Map,Qa=new Map,sn=[],pd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xs(e,n){switch(e){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":qa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(n.pointerId)}}function Ea(e,n,a,t,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:a,eventSystemFlags:t,nativeEvent:o,targetContainers:[r]},n!==null&&(n=pt(n),n!==null&&Ni(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function fd(e,n,a,t,r){switch(n){case"focusin":return dn=Ea(dn,e,n,a,t,r),!0;case"dragenter":return pn=Ea(pn,e,n,a,t,r),!0;case"mouseover":return fn=Ea(fn,e,n,a,t,r),!0;case"pointerover":var o=r.pointerId;return qa.set(o,Ea(qa.get(o)||null,e,n,a,t,r)),!0;case"gotpointercapture":return o=r.pointerId,Qa.set(o,Ea(Qa.get(o)||null,e,n,a,t,r)),!0}return!1}function Iu(e){var n=Nn(e.target);if(n!==null){var a=Gn(n);if(a!==null){if(n=a.tag,n===13){if(n=vu(a),n!==null){e.blockedOn=n,Ou(e.priority,function(){Eu(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=zo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var t=new a.constructor(a.type,a);Uo=t,a.target.dispatchEvent(t),Uo=null}else return n=pt(a),n!==null&&Ni(n),e.blockedOn=a,!1;n.shift()}return!0}function Ns(e,n,a){zt(e)&&a.delete(n)}function hd(){Mo=!1,dn!==null&&zt(dn)&&(dn=null),pn!==null&&zt(pn)&&(pn=null),fn!==null&&zt(fn)&&(fn=null),qa.forEach(Ns),Qa.forEach(Ns)}function Sa(e,n){e.blockedOn===n&&(e.blockedOn=null,Mo||(Mo=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,hd)))}function Ka(e){function n(r){return Sa(r,e)}if(0<kt.length){Sa(kt[0],e);for(var a=1;a<kt.length;a++){var t=kt[a];t.blockedOn===e&&(t.blockedOn=null)}}for(dn!==null&&Sa(dn,e),pn!==null&&Sa(pn,e),fn!==null&&Sa(fn,e),qa.forEach(n),Qa.forEach(n),a=0;a<sn.length;a++)t=sn[a],t.blockedOn===e&&(t.blockedOn=null);for(;0<sn.length&&(a=sn[0],a.blockedOn===null);)Iu(a),a.blockedOn===null&&sn.shift()}var ca=en.ReactCurrentBatchConfig,nr=!0;function gd(e,n,a,t){var r=_,o=ca.transition;ca.transition=null;try{_=1,Ui(e,n,a,t)}finally{_=r,ca.transition=o}}function vd(e,n,a,t){var r=_,o=ca.transition;ca.transition=null;try{_=4,Ui(e,n,a,t)}finally{_=r,ca.transition=o}}function Ui(e,n,a,t){if(nr){var r=zo(e,n,a,t);if(r===null)oo(e,n,t,ar,a),xs(e,t);else if(fd(r,e,n,a,t))t.stopPropagation();else if(xs(e,t),n&4&&-1<pd.indexOf(e)){for(;r!==null;){var o=pt(r);if(o!==null&&Cu(o),o=zo(e,n,a,t),o===null&&oo(e,n,t,ar,a),o===r)break;r=o}r!==null&&t.stopPropagation()}else oo(e,n,t,null,a)}}var ar=null;function zo(e,n,a,t){if(ar=null,e=Ii(t),e=Nn(e),e!==null)if(n=Gn(e),n===null)e=null;else if(a=n.tag,a===13){if(e=vu(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ar=e,null}function bu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rd()){case bi:return 1;case wu:return 4;case Zt:case od:return 16;case Ru:return 536870912;default:return 16}default:return 16}}var un=null,Di=null,Bt=null;function xu(){if(Bt)return Bt;var e,n=Di,a=n.length,t,r="value"in un?un.value:un.textContent,o=r.length;for(e=0;e<a&&n[e]===r[e];e++);var i=a-e;for(t=1;t<=i&&n[a-t]===r[o-t];t++);return Bt=r.slice(e,1<t?1-t:void 0)}function Ft(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ct(){return!0}function Us(){return!1}function Ce(e){function n(a,t,r,o,i){this._reactName=a,this._targetInst=r,this.type=t,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ct:Us,this.isPropagationStopped=Us,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ct)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ct)},persist:function(){},isPersistent:Ct}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=Ce(wa),dt=V({},wa,{view:0,detail:0}),yd=Ce(dt),Kr,Xr,Oa,kr=V({},dt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_i,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oa&&(Oa&&e.type==="mousemove"?(Kr=e.screenX-Oa.screenX,Xr=e.screenY-Oa.screenY):Xr=Kr=0,Oa=e),Kr)},movementY:function(e){return"movementY"in e?e.movementY:Xr}}),Ds=Ce(kr),Ad=V({},kr,{dataTransfer:0}),Pd=Ce(Ad),wd=V({},dt,{relatedTarget:0}),Jr=Ce(wd),Rd=V({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Td=Ce(Rd),kd=V({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cd=Ce(kd),Ed=V({},wa,{data:0}),Ls=Ce(Ed),Sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Od={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Id[e])?!!n[e]:!1}function _i(){return bd}var xd=V({},dt,{key:function(e){if(e.key){var n=Sd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ft(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Od[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_i,charCode:function(e){return e.type==="keypress"?Ft(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ft(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nd=Ce(xd),Ud=V({},kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_s=Ce(Ud),Dd=V({},dt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_i}),Ld=Ce(Dd),_d=V({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wd=Ce(_d),Md=V({},kr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=Ce(Md),Bd=[9,13,27,32],Wi=Ke&&"CompositionEvent"in window,Ma=null;Ke&&"documentMode"in document&&(Ma=document.documentMode);var Fd=Ke&&"TextEvent"in window&&!Ma,Nu=Ke&&(!Wi||Ma&&8<Ma&&11>=Ma),Ws=" ",Ms=!1;function Uu(e,n){switch(e){case"keyup":return Bd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Du(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function jd(e,n){switch(e){case"compositionend":return Du(n);case"keypress":return n.which!==32?null:(Ms=!0,Ws);case"textInput":return e=n.data,e===Ws&&Ms?null:e;default:return null}}function Vd(e,n){if(Xn)return e==="compositionend"||!Wi&&Uu(e,n)?(e=xu(),Bt=Di=un=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nu&&n.locale!=="ko"?null:n.data;default:return null}}var Gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gd[e.type]:n==="textarea"}function Lu(e,n,a,t){du(t),n=tr(n,"onChange"),0<n.length&&(a=new Li("onChange","change",null,a,t),e.push({event:a,listeners:n}))}var za=null,Xa=null;function Hd(e){$u(e,0)}function Cr(e){var n=ea(e);if(ou(n))return e}function $d(e,n){if(e==="change")return n}var _u=!1;if(Ke){var Zr;if(Ke){var eo="oninput"in document;if(!eo){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),eo=typeof Bs.oninput=="function"}Zr=eo}else Zr=!1;_u=Zr&&(!document.documentMode||9<document.documentMode)}function Fs(){za&&(za.detachEvent("onpropertychange",Wu),Xa=za=null)}function Wu(e){if(e.propertyName==="value"&&Cr(Xa)){var n=[];Lu(n,Xa,e,Ii(e)),gu(Hd,n)}}function Yd(e,n,a){e==="focusin"?(Fs(),za=n,Xa=a,za.attachEvent("onpropertychange",Wu)):e==="focusout"&&Fs()}function qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cr(Xa)}function Qd(e,n){if(e==="click")return Cr(n)}function Kd(e,n){if(e==="input"||e==="change")return Cr(n)}function Xd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:Xd;function Ja(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),t=Object.keys(n);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++){var r=a[t];if(!wo.call(n,r)||!Me(e[r],n[r]))return!1}return!0}function js(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vs(e,n){var a=js(e);e=0;for(var t;a;){if(a.nodeType===3){if(t=e+a.textContent.length,e<=n&&t>=n)return{node:a,offset:n-e};e=t}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=js(a)}}function Mu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Mu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zu(){for(var e=window,n=Kt();n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kt(e.document)}return n}function Mi(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Jd(e){var n=zu(),a=e.focusedElem,t=e.selectionRange;if(n!==a&&a&&a.ownerDocument&&Mu(a.ownerDocument.documentElement,a)){if(t!==null&&Mi(a)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(e,a.value.length);else if(e=(n=a.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=a.textContent.length,o=Math.min(t.start,r);t=t.end===void 0?o:Math.min(t.end,r),!e.extend&&o>t&&(r=t,t=o,o=r),r=Vs(a,o);var i=Vs(a,t);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),o>t?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=a;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)e=n[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Zd=Ke&&"documentMode"in document&&11>=document.documentMode,Jn=null,Bo=null,Ba=null,Fo=!1;function Gs(e,n,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fo||Jn==null||Jn!==Kt(t)||(t=Jn,"selectionStart"in t&&Mi(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Ba&&Ja(Ba,t)||(Ba=t,t=tr(Bo,"onSelect"),0<t.length&&(n=new Li("onSelect","select",null,n,a),e.push({event:n,listeners:t}),n.target=Jn)))}function Et(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zn={animationend:Et("Animation","AnimationEnd"),animationiteration:Et("Animation","AnimationIteration"),animationstart:Et("Animation","AnimationStart"),transitionend:Et("Transition","TransitionEnd")},no={},Bu={};Ke&&(Bu=document.createElement("div").style,"AnimationEvent"in window||(delete Zn.animationend.animation,delete Zn.animationiteration.animation,delete Zn.animationstart.animation),"TransitionEvent"in window||delete Zn.transitionend.transition);function Er(e){if(no[e])return no[e];if(!Zn[e])return e;var n=Zn[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Bu)return no[e]=n[a];return e}var Fu=Er("animationend"),ju=Er("animationiteration"),Vu=Er("animationstart"),Gu=Er("transitionend"),Hu=new Map,Hs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,n){Hu.set(e,n),Vn(n,[e])}for(var ao=0;ao<Hs.length;ao++){var to=Hs[ao],ep=to.toLowerCase(),np=to[0].toUpperCase()+to.slice(1);Tn(ep,"on"+np)}Tn(Fu,"onAnimationEnd");Tn(ju,"onAnimationIteration");Tn(Vu,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Gu,"onTransitionEnd");pa("onMouseEnter",["mouseout","mouseover"]);pa("onMouseLeave",["mouseout","mouseover"]);pa("onPointerEnter",["pointerout","pointerover"]);pa("onPointerLeave",["pointerout","pointerover"]);Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ap=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function $s(e,n,a){var t=e.type||"unknown-event";e.currentTarget=a,ed(t,n,void 0,e),e.currentTarget=null}function $u(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var t=e[a],r=t.event;t=t.listeners;e:{var o=void 0;if(n)for(var i=t.length-1;0<=i;i--){var s=t[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&r.isPropagationStopped())break e;$s(r,s,u),o=l}else for(i=0;i<t.length;i++){if(s=t[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&r.isPropagationStopped())break e;$s(r,s,u),o=l}}}if(Jt)throw e=_o,Jt=!1,_o=null,e}function M(e,n){var a=n[$o];a===void 0&&(a=n[$o]=new Set);var t=e+"__bubble";a.has(t)||(Yu(n,e,2,!1),a.add(t))}function ro(e,n,a){var t=0;n&&(t|=4),Yu(a,e,t,n)}var St="_reactListening"+Math.random().toString(36).slice(2);function Za(e){if(!e[St]){e[St]=!0,eu.forEach(function(a){a!=="selectionchange"&&(ap.has(a)||ro(a,!1,e),ro(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[St]||(n[St]=!0,ro("selectionchange",!1,n))}}function Yu(e,n,a,t){switch(bu(n)){case 1:var r=gd;break;case 4:r=vd;break;default:r=Ui}a=r.bind(null,n,a,e),r=void 0,!Lo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),t?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function oo(e,n,a,t,r){var o=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var i=t.tag;if(i===3||i===4){var s=t.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(i===4)for(i=t.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;i=i.return}for(;s!==null;){if(i=Nn(s),i===null)return;if(l=i.tag,l===5||l===6){t=o=i;continue e}s=s.parentNode}}t=t.return}gu(function(){var u=o,h=Ii(a),p=[];e:{var g=Hu.get(e);if(g!==void 0){var y=Li,P=e;switch(e){case"keypress":if(Ft(a)===0)break e;case"keydown":case"keyup":y=Nd;break;case"focusin":P="focus",y=Jr;break;case"focusout":P="blur",y=Jr;break;case"beforeblur":case"afterblur":y=Jr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ld;break;case Fu:case ju:case Vu:y=Td;break;case Gu:y=Wd;break;case"scroll":y=yd;break;case"wheel":y=zd;break;case"copy":case"cut":case"paste":y=Cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_s}var A=(n&4)!==0,C=!A&&e==="scroll",m=A?g!==null?g+"Capture":null:g;A=[];for(var c=u,d;c!==null;){d=c;var v=d.stateNode;if(d.tag===5&&v!==null&&(d=v,m!==null&&(v=Ya(c,m),v!=null&&A.push(et(c,v,d)))),C)break;c=c.return}0<A.length&&(g=new y(g,P,null,a,h),p.push({event:g,listeners:A}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&a!==Uo&&(P=a.relatedTarget||a.fromElement)&&(Nn(P)||P[Xe]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(P=a.relatedTarget||a.toElement,y=u,P=P?Nn(P):null,P!==null&&(C=Gn(P),P!==C||P.tag!==5&&P.tag!==6)&&(P=null)):(y=null,P=u),y!==P)){if(A=Ds,v="onMouseLeave",m="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(A=_s,v="onPointerLeave",m="onPointerEnter",c="pointer"),C=y==null?g:ea(y),d=P==null?g:ea(P),g=new A(v,c+"leave",y,a,h),g.target=C,g.relatedTarget=d,v=null,Nn(h)===u&&(A=new A(m,c+"enter",P,a,h),A.target=d,A.relatedTarget=C,v=A),C=v,y&&P)n:{for(A=y,m=P,c=0,d=A;d;d=$n(d))c++;for(d=0,v=m;v;v=$n(v))d++;for(;0<c-d;)A=$n(A),c--;for(;0<d-c;)m=$n(m),d--;for(;c--;){if(A===m||m!==null&&A===m.alternate)break n;A=$n(A),m=$n(m)}A=null}else A=null;y!==null&&Ys(p,g,y,A,!1),P!==null&&C!==null&&Ys(p,C,P,A,!0)}}e:{if(g=u?ea(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var T=$d;else if(zs(g))if(_u)T=Kd;else{T=qd;var k=Yd}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=Qd);if(T&&(T=T(e,u))){Lu(p,T,a,h);break e}k&&k(e,g,u),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&Oo(g,"number",g.value)}switch(k=u?ea(u):window,e){case"focusin":(zs(k)||k.contentEditable==="true")&&(Jn=k,Bo=u,Ba=null);break;case"focusout":Ba=Bo=Jn=null;break;case"mousedown":Fo=!0;break;case"contextmenu":case"mouseup":case"dragend":Fo=!1,Gs(p,a,h);break;case"selectionchange":if(Zd)break;case"keydown":case"keyup":Gs(p,a,h)}var E;if(Wi)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Xn?Uu(e,a)&&(I="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(Nu&&a.locale!=="ko"&&(Xn||I!=="onCompositionStart"?I==="onCompositionEnd"&&Xn&&(E=xu()):(un=h,Di="value"in un?un.value:un.textContent,Xn=!0)),k=tr(u,I),0<k.length&&(I=new Ls(I,e,null,a,h),p.push({event:I,listeners:k}),E?I.data=E:(E=Du(a),E!==null&&(I.data=E)))),(E=Fd?jd(e,a):Vd(e,a))&&(u=tr(u,"onBeforeInput"),0<u.length&&(h=new Ls("onBeforeInput","beforeinput",null,a,h),p.push({event:h,listeners:u}),h.data=E))}$u(p,n)})}function et(e,n,a){return{instance:e,listener:n,currentTarget:a}}function tr(e,n){for(var a=n+"Capture",t=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Ya(e,a),o!=null&&t.unshift(et(e,o,r)),o=Ya(e,n),o!=null&&t.push(et(e,o,r))),e=e.return}return t}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ys(e,n,a,t,r){for(var o=n._reactName,i=[];a!==null&&a!==t;){var s=a,l=s.alternate,u=s.stateNode;if(l!==null&&l===t)break;s.tag===5&&u!==null&&(s=u,r?(l=Ya(a,o),l!=null&&i.unshift(et(a,l,s))):r||(l=Ya(a,o),l!=null&&i.push(et(a,l,s)))),a=a.return}i.length!==0&&e.push({event:n,listeners:i})}var tp=/\r\n?/g,rp=/\u0000|\uFFFD/g;function qs(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(rp,"")}function Ot(e,n,a){if(n=qs(n),qs(e)!==n&&a)throw Error(w(425))}function rr(){}var jo=null,Vo=null;function Go(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ho=typeof setTimeout=="function"?setTimeout:void 0,op=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,ip=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(e){return Qs.resolve(null).then(e).catch(sp)}:Ho;function sp(e){setTimeout(function(){throw e})}function io(e,n){var a=n,t=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0){e.removeChild(r),Ka(n);return}t--}else a!=="$"&&a!=="$?"&&a!=="$!"||t++;a=r}while(a);Ka(n)}function hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}var Ra=Math.random().toString(36).slice(2),Fe="__reactFiber$"+Ra,nt="__reactProps$"+Ra,Xe="__reactContainer$"+Ra,$o="__reactEvents$"+Ra,lp="__reactListeners$"+Ra,up="__reactHandles$"+Ra;function Nn(e){var n=e[Fe];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Xe]||a[Fe]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ks(e);e!==null;){if(a=e[Fe])return a;e=Ks(e)}return n}e=a,a=e.parentNode}return null}function pt(e){return e=e[Fe]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ea(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Sr(e){return e[nt]||null}var Yo=[],na=-1;function kn(e){return{current:e}}function z(e){0>na||(e.current=Yo[na],Yo[na]=null,na--)}function W(e,n){na++,Yo[na]=e.current,e.current=n}var Rn={},ue=kn(Rn),ve=kn(!1),Wn=Rn;function fa(e,n){var a=e.type.contextTypes;if(!a)return Rn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in a)r[o]=n[o];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function ye(e){return e=e.childContextTypes,e!=null}function or(){z(ve),z(ue)}function Xs(e,n,a){if(ue.current!==Rn)throw Error(w(168));W(ue,n),W(ve,a)}function qu(e,n,a){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return a;t=t.getChildContext();for(var r in t)if(!(r in n))throw Error(w(108,Ym(e)||"Unknown",r));return V({},a,t)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,Wn=ue.current,W(ue,e),W(ve,ve.current),!0}function Js(e,n,a){var t=e.stateNode;if(!t)throw Error(w(169));a?(e=qu(e,n,Wn),t.__reactInternalMemoizedMergedChildContext=e,z(ve),z(ue),W(ue,e)):z(ve),W(ve,a)}var $e=null,Or=!1,so=!1;function Qu(e){$e===null?$e=[e]:$e.push(e)}function cp(e){Or=!0,Qu(e)}function Cn(){if(!so&&$e!==null){so=!0;var e=0,n=_;try{var a=$e;for(_=1;e<a.length;e++){var t=a[e];do t=t(!0);while(t!==null)}$e=null,Or=!1}catch(r){throw $e!==null&&($e=$e.slice(e+1)),Pu(bi,Cn),r}finally{_=n,so=!1}}return null}var aa=[],ta=0,sr=null,lr=0,Ee=[],Se=0,Mn=null,Ye=1,qe="";function In(e,n){aa[ta++]=lr,aa[ta++]=sr,sr=e,lr=n}function Ku(e,n,a){Ee[Se++]=Ye,Ee[Se++]=qe,Ee[Se++]=Mn,Mn=e;var t=Ye;e=qe;var r=32-_e(t)-1;t&=~(1<<r),a+=1;var o=32-_e(n)+r;if(30<o){var i=r-r%5;o=(t&(1<<i)-1).toString(32),t>>=i,r-=i,Ye=1<<32-_e(n)+r|a<<r|t,qe=o+e}else Ye=1<<o|a<<r|t,qe=e}function zi(e){e.return!==null&&(In(e,1),Ku(e,1,0))}function Bi(e){for(;e===sr;)sr=aa[--ta],aa[ta]=null,lr=aa[--ta],aa[ta]=null;for(;e===Mn;)Mn=Ee[--Se],Ee[Se]=null,qe=Ee[--Se],Ee[Se]=null,Ye=Ee[--Se],Ee[Se]=null}var Re=null,we=null,B=!1,Le=null;function Xu(e,n){var a=Oe(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=e,n=e.deletions,n===null?(e.deletions=[a],e.flags|=16):n.push(a)}function Zs(e,n){switch(e.tag){case 5:var a=e.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Re=e,we=hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Re=e,we=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=Mn!==null?{id:Ye,overflow:qe}:null,e.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=Oe(18,null,null,0),a.stateNode=n,a.return=e,e.child=a,Re=e,we=null,!0):!1;default:return!1}}function qo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qo(e){if(B){var n=we;if(n){var a=n;if(!Zs(e,n)){if(qo(e))throw Error(w(418));n=hn(a.nextSibling);var t=Re;n&&Zs(e,n)?Xu(t,a):(e.flags=e.flags&-4097|2,B=!1,Re=e)}}else{if(qo(e))throw Error(w(418));e.flags=e.flags&-4097|2,B=!1,Re=e}}}function el(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function It(e){if(e!==Re)return!1;if(!B)return el(e),B=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Go(e.type,e.memoizedProps)),n&&(n=we)){if(qo(e))throw Ju(),Error(w(418));for(;n;)Xu(e,n),n=hn(n.nextSibling)}if(el(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(n===0){we=hn(e.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}e=e.nextSibling}we=null}}else we=Re?hn(e.stateNode.nextSibling):null;return!0}function Ju(){for(var e=we;e;)e=hn(e.nextSibling)}function ha(){we=Re=null,B=!1}function Fi(e){Le===null?Le=[e]:Le.push(e)}var mp=en.ReactCurrentBatchConfig;function Ia(e,n,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(w(309));var t=a.stateNode}if(!t)throw Error(w(147,e));var r=t,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(i){var s=r.refs;i===null?delete s[o]:s[o]=i},n._stringRef=o,n)}if(typeof e!="string")throw Error(w(284));if(!a._owner)throw Error(w(290,e))}return e}function bt(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nl(e){var n=e._init;return n(e._payload)}function Zu(e){function n(m,c){if(e){var d=m.deletions;d===null?(m.deletions=[c],m.flags|=16):d.push(c)}}function a(m,c){if(!e)return null;for(;c!==null;)n(m,c),c=c.sibling;return null}function t(m,c){for(m=new Map;c!==null;)c.key!==null?m.set(c.key,c):m.set(c.index,c),c=c.sibling;return m}function r(m,c){return m=An(m,c),m.index=0,m.sibling=null,m}function o(m,c,d){return m.index=d,e?(d=m.alternate,d!==null?(d=d.index,d<c?(m.flags|=2,c):d):(m.flags|=2,c)):(m.flags|=1048576,c)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,c,d,v){return c===null||c.tag!==6?(c=ho(d,m.mode,v),c.return=m,c):(c=r(c,d),c.return=m,c)}function l(m,c,d,v){var T=d.type;return T===Kn?h(m,c,d.props.children,v,d.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rn&&nl(T)===c.type)?(v=r(c,d.props),v.ref=Ia(m,c,d),v.return=m,v):(v=qt(d.type,d.key,d.props,null,m.mode,v),v.ref=Ia(m,c,d),v.return=m,v)}function u(m,c,d,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=go(d,m.mode,v),c.return=m,c):(c=r(c,d.children||[]),c.return=m,c)}function h(m,c,d,v,T){return c===null||c.tag!==7?(c=_n(d,m.mode,v,T),c.return=m,c):(c=r(c,d),c.return=m,c)}function p(m,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ho(""+c,m.mode,d),c.return=m,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case At:return d=qt(c.type,c.key,c.props,null,m.mode,d),d.ref=Ia(m,null,c),d.return=m,d;case Qn:return c=go(c,m.mode,d),c.return=m,c;case rn:var v=c._init;return p(m,v(c._payload),d)}if(Ua(c)||ka(c))return c=_n(c,m.mode,d,null),c.return=m,c;bt(m,c)}return null}function g(m,c,d,v){var T=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return T!==null?null:s(m,c,""+d,v);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case At:return d.key===T?l(m,c,d,v):null;case Qn:return d.key===T?u(m,c,d,v):null;case rn:return T=d._init,g(m,c,T(d._payload),v)}if(Ua(d)||ka(d))return T!==null?null:h(m,c,d,v,null);bt(m,d)}return null}function y(m,c,d,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(d)||null,s(c,m,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case At:return m=m.get(v.key===null?d:v.key)||null,l(c,m,v,T);case Qn:return m=m.get(v.key===null?d:v.key)||null,u(c,m,v,T);case rn:var k=v._init;return y(m,c,d,k(v._payload),T)}if(Ua(v)||ka(v))return m=m.get(d)||null,h(c,m,v,T,null);bt(c,v)}return null}function P(m,c,d,v){for(var T=null,k=null,E=c,I=c=0,L=null;E!==null&&I<d.length;I++){E.index>I?(L=E,E=null):L=E.sibling;var x=g(m,E,d[I],v);if(x===null){E===null&&(E=L);break}e&&E&&x.alternate===null&&n(m,E),c=o(x,c,I),k===null?T=x:k.sibling=x,k=x,E=L}if(I===d.length)return a(m,E),B&&In(m,I),T;if(E===null){for(;I<d.length;I++)E=p(m,d[I],v),E!==null&&(c=o(E,c,I),k===null?T=E:k.sibling=E,k=E);return B&&In(m,I),T}for(E=t(m,E);I<d.length;I++)L=y(E,m,I,d[I],v),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?I:L.key),c=o(L,c,I),k===null?T=L:k.sibling=L,k=L);return e&&E.forEach(function(fe){return n(m,fe)}),B&&In(m,I),T}function A(m,c,d,v){var T=ka(d);if(typeof T!="function")throw Error(w(150));if(d=T.call(d),d==null)throw Error(w(151));for(var k=T=null,E=c,I=c=0,L=null,x=d.next();E!==null&&!x.done;I++,x=d.next()){E.index>I?(L=E,E=null):L=E.sibling;var fe=g(m,E,x.value,v);if(fe===null){E===null&&(E=L);break}e&&E&&fe.alternate===null&&n(m,E),c=o(fe,c,I),k===null?T=fe:k.sibling=fe,k=fe,E=L}if(x.done)return a(m,E),B&&In(m,I),T;if(E===null){for(;!x.done;I++,x=d.next())x=p(m,x.value,v),x!==null&&(c=o(x,c,I),k===null?T=x:k.sibling=x,k=x);return B&&In(m,I),T}for(E=t(m,E);!x.done;I++,x=d.next())x=y(E,m,I,x.value,v),x!==null&&(e&&x.alternate!==null&&E.delete(x.key===null?I:x.key),c=o(x,c,I),k===null?T=x:k.sibling=x,k=x);return e&&E.forEach(function(an){return n(m,an)}),B&&In(m,I),T}function C(m,c,d,v){if(typeof d=="object"&&d!==null&&d.type===Kn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case At:e:{for(var T=d.key,k=c;k!==null;){if(k.key===T){if(T=d.type,T===Kn){if(k.tag===7){a(m,k.sibling),c=r(k,d.props.children),c.return=m,m=c;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rn&&nl(T)===k.type){a(m,k.sibling),c=r(k,d.props),c.ref=Ia(m,k,d),c.return=m,m=c;break e}a(m,k);break}else n(m,k);k=k.sibling}d.type===Kn?(c=_n(d.props.children,m.mode,v,d.key),c.return=m,m=c):(v=qt(d.type,d.key,d.props,null,m.mode,v),v.ref=Ia(m,c,d),v.return=m,m=v)}return i(m);case Qn:e:{for(k=d.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){a(m,c.sibling),c=r(c,d.children||[]),c.return=m,m=c;break e}else{a(m,c);break}else n(m,c);c=c.sibling}c=go(d,m.mode,v),c.return=m,m=c}return i(m);case rn:return k=d._init,C(m,c,k(d._payload),v)}if(Ua(d))return P(m,c,d,v);if(ka(d))return A(m,c,d,v);bt(m,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(a(m,c.sibling),c=r(c,d),c.return=m,m=c):(a(m,c),c=ho(d,m.mode,v),c.return=m,m=c),i(m)):a(m,c)}return C}var ga=Zu(!0),ec=Zu(!1),ur=kn(null),cr=null,ra=null,ji=null;function Vi(){ji=ra=cr=null}function Gi(e){var n=ur.current;z(ur),e._currentValue=n}function Ko(e,n,a){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===a)break;e=e.return}}function ma(e,n){cr=e,ji=ra=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ge=!0),e.firstContext=null)}function be(e){var n=e._currentValue;if(ji!==e)if(e={context:e,memoizedValue:n,next:null},ra===null){if(cr===null)throw Error(w(308));ra=e,cr.dependencies={lanes:0,firstContext:e}}else ra=ra.next=e;return n}var Un=null;function Hi(e){Un===null?Un=[e]:Un.push(e)}function nc(e,n,a,t){var r=n.interleaved;return r===null?(a.next=a,Hi(n)):(a.next=r.next,r.next=a),n.interleaved=a,Je(e,t)}function Je(e,n){e.lanes|=n;var a=e.alternate;for(a!==null&&(a.lanes|=n),a=e,e=e.return;e!==null;)e.childLanes|=n,a=e.alternate,a!==null&&(a.childLanes|=n),a=e,e=e.return;return a.tag===3?a.stateNode:null}var on=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ac(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gn(e,n,a){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,D&2){var r=t.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n,Je(e,a)}return r=t.interleaved,r===null?(n.next=n,Hi(t)):(n.next=r.next,r.next=n),t.interleaved=n,Je(e,a)}function jt(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,a|=t,n.lanes=a,xi(e,a)}}function al(e,n){var a=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var r=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var i={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};o===null?r=o=i:o=o.next=i,a=a.next}while(a!==null);o===null?r=o=n:o=o.next=n}else r=o=n;a={baseState:t.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:t.shared,effects:t.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}function mr(e,n,a,t){var r=e.updateQueue;on=!1;var o=r.firstBaseUpdate,i=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?o=u:i.next=u,i=l;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=l))}if(o!==null){var p=r.baseState;i=0,h=u=l=null,s=o;do{var g=s.lane,y=s.eventTime;if((t&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var P=e,A=s;switch(g=n,y=a,A.tag){case 1:if(P=A.payload,typeof P=="function"){p=P.call(y,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=A.payload,g=typeof P=="function"?P.call(y,p,g):P,g==null)break e;p=V({},p,g);break e;case 2:on=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=r.effects,g===null?r.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=y,l=p):h=h.next=y,i|=g;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;g=s,s=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,n=r.shared.interleaved,n!==null){r=n;do i|=r.lane,r=r.next;while(r!==n)}else o===null&&(r.shared.lanes=0);Bn|=i,e.lanes=i,e.memoizedState=p}}function tl(e,n,a){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],r=t.callback;if(r!==null){if(t.callback=null,t=a,typeof r!="function")throw Error(w(191,r));r.call(t)}}}var ft={},Ve=kn(ft),at=kn(ft),tt=kn(ft);function Dn(e){if(e===ft)throw Error(w(174));return e}function Yi(e,n){switch(W(tt,n),W(at,e),W(Ve,ft),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:bo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=bo(n,e)}z(Ve),W(Ve,n)}function va(){z(Ve),z(at),z(tt)}function tc(e){Dn(tt.current);var n=Dn(Ve.current),a=bo(n,e.type);n!==a&&(W(at,e),W(Ve,a))}function qi(e){at.current===e&&(z(Ve),z(at))}var F=kn(0);function dr(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var lo=[];function Qi(){for(var e=0;e<lo.length;e++)lo[e]._workInProgressVersionPrimary=null;lo.length=0}var Vt=en.ReactCurrentDispatcher,uo=en.ReactCurrentBatchConfig,zn=0,j=null,K=null,ee=null,pr=!1,Fa=!1,rt=0,dp=0;function ie(){throw Error(w(321))}function Ki(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Me(e[a],n[a]))return!1;return!0}function Xi(e,n,a,t,r,o){if(zn=o,j=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Vt.current=e===null||e.memoizedState===null?gp:vp,e=a(t,r),Fa){o=0;do{if(Fa=!1,rt=0,25<=o)throw Error(w(301));o+=1,ee=K=null,n.updateQueue=null,Vt.current=yp,e=a(t,r)}while(Fa)}if(Vt.current=fr,n=K!==null&&K.next!==null,zn=0,ee=K=j=null,pr=!1,n)throw Error(w(300));return e}function Ji(){var e=rt!==0;return rt=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?j.memoizedState=ee=e:ee=ee.next=e,ee}function xe(){if(K===null){var e=j.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=ee===null?j.memoizedState:ee.next;if(n!==null)ee=n,K=e;else{if(e===null)throw Error(w(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?j.memoizedState=ee=e:ee=ee.next=e}return ee}function ot(e,n){return typeof n=="function"?n(e):n}function co(e){var n=xe(),a=n.queue;if(a===null)throw Error(w(311));a.lastRenderedReducer=e;var t=K,r=t.baseQueue,o=a.pending;if(o!==null){if(r!==null){var i=r.next;r.next=o.next,o.next=i}t.baseQueue=r=o,a.pending=null}if(r!==null){o=r.next,t=t.baseState;var s=i=null,l=null,u=o;do{var h=u.lane;if((zn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),t=u.hasEagerState?u.eagerState:e(t,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=p,i=t):l=l.next=p,j.lanes|=h,Bn|=h}u=u.next}while(u!==null&&u!==o);l===null?i=t:l.next=s,Me(t,n.memoizedState)||(ge=!0),n.memoizedState=t,n.baseState=i,n.baseQueue=l,a.lastRenderedState=t}if(e=a.interleaved,e!==null){r=e;do o=r.lane,j.lanes|=o,Bn|=o,r=r.next;while(r!==e)}else r===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function mo(e){var n=xe(),a=n.queue;if(a===null)throw Error(w(311));a.lastRenderedReducer=e;var t=a.dispatch,r=a.pending,o=n.memoizedState;if(r!==null){a.pending=null;var i=r=r.next;do o=e(o,i.action),i=i.next;while(i!==r);Me(o,n.memoizedState)||(ge=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),a.lastRenderedState=o}return[o,t]}function rc(){}function oc(e,n){var a=j,t=xe(),r=n(),o=!Me(t.memoizedState,r);if(o&&(t.memoizedState=r,ge=!0),t=t.queue,Zi(lc.bind(null,a,t,e),[e]),t.getSnapshot!==n||o||ee!==null&&ee.memoizedState.tag&1){if(a.flags|=2048,it(9,sc.bind(null,a,t,r,n),void 0,null),ne===null)throw Error(w(349));zn&30||ic(a,n,r)}return r}function ic(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=j.updateQueue,n===null?(n={lastEffect:null,stores:null},j.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function sc(e,n,a,t){n.value=a,n.getSnapshot=t,uc(n)&&cc(e)}function lc(e,n,a){return a(function(){uc(n)&&cc(e)})}function uc(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Me(e,a)}catch{return!0}}function cc(e){var n=Je(e,1);n!==null&&We(n,e,1,-1)}function rl(e){var n=Be();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ot,lastRenderedState:e},n.queue=e,e=e.dispatch=hp.bind(null,j,e),[n.memoizedState,e]}function it(e,n,a,t){return e={tag:e,create:n,destroy:a,deps:t,next:null},n=j.updateQueue,n===null?(n={lastEffect:null,stores:null},j.updateQueue=n,n.lastEffect=e.next=e):(a=n.lastEffect,a===null?n.lastEffect=e.next=e:(t=a.next,a.next=e,e.next=t,n.lastEffect=e)),e}function mc(){return xe().memoizedState}function Gt(e,n,a,t){var r=Be();j.flags|=e,r.memoizedState=it(1|n,a,void 0,t===void 0?null:t)}function Ir(e,n,a,t){var r=xe();t=t===void 0?null:t;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,t!==null&&Ki(t,i.deps)){r.memoizedState=it(n,a,o,t);return}}j.flags|=e,r.memoizedState=it(1|n,a,o,t)}function ol(e,n){return Gt(8390656,8,e,n)}function Zi(e,n){return Ir(2048,8,e,n)}function dc(e,n){return Ir(4,2,e,n)}function pc(e,n){return Ir(4,4,e,n)}function fc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hc(e,n,a){return a=a!=null?a.concat([e]):null,Ir(4,4,fc.bind(null,n,e),a)}function es(){}function gc(e,n){var a=xe();n=n===void 0?null:n;var t=a.memoizedState;return t!==null&&n!==null&&Ki(n,t[1])?t[0]:(a.memoizedState=[e,n],e)}function vc(e,n){var a=xe();n=n===void 0?null:n;var t=a.memoizedState;return t!==null&&n!==null&&Ki(n,t[1])?t[0]:(e=e(),a.memoizedState=[e,n],e)}function yc(e,n,a){return zn&21?(Me(a,n)||(a=Tu(),j.lanes|=a,Bn|=a,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=a)}function pp(e,n){var a=_;_=a!==0&&4>a?a:4,e(!0);var t=uo.transition;uo.transition={};try{e(!1),n()}finally{_=a,uo.transition=t}}function Ac(){return xe().memoizedState}function fp(e,n,a){var t=yn(e);if(a={lane:t,action:a,hasEagerState:!1,eagerState:null,next:null},Pc(e))wc(n,a);else if(a=nc(e,n,a,t),a!==null){var r=me();We(a,e,t,r),Rc(a,n,t)}}function hp(e,n,a){var t=yn(e),r={lane:t,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))wc(n,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var i=n.lastRenderedState,s=o(i,a);if(r.hasEagerState=!0,r.eagerState=s,Me(s,i)){var l=n.interleaved;l===null?(r.next=r,Hi(n)):(r.next=l.next,l.next=r),n.interleaved=r;return}}catch{}finally{}a=nc(e,n,r,t),a!==null&&(r=me(),We(a,e,t,r),Rc(a,n,t))}}function Pc(e){var n=e.alternate;return e===j||n!==null&&n===j}function wc(e,n){Fa=pr=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Rc(e,n,a){if(a&4194240){var t=n.lanes;t&=e.pendingLanes,a|=t,n.lanes=a,xi(e,a)}}var fr={readContext:be,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},gp={readContext:be,useCallback:function(e,n){return Be().memoizedState=[e,n===void 0?null:n],e},useContext:be,useEffect:ol,useImperativeHandle:function(e,n,a){return a=a!=null?a.concat([e]):null,Gt(4194308,4,fc.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Gt(4194308,4,e,n)},useInsertionEffect:function(e,n){return Gt(4,2,e,n)},useMemo:function(e,n){var a=Be();return n=n===void 0?null:n,e=e(),a.memoizedState=[e,n],e},useReducer:function(e,n,a){var t=Be();return n=a!==void 0?a(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=fp.bind(null,j,e),[t.memoizedState,e]},useRef:function(e){var n=Be();return e={current:e},n.memoizedState=e},useState:rl,useDebugValue:es,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=rl(!1),n=e[0];return e=pp.bind(null,e[1]),Be().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,a){var t=j,r=Be();if(B){if(a===void 0)throw Error(w(407));a=a()}else{if(a=n(),ne===null)throw Error(w(349));zn&30||ic(t,n,a)}r.memoizedState=a;var o={value:a,getSnapshot:n};return r.queue=o,ol(lc.bind(null,t,o,e),[e]),t.flags|=2048,it(9,sc.bind(null,t,o,a,n),void 0,null),a},useId:function(){var e=Be(),n=ne.identifierPrefix;if(B){var a=qe,t=Ye;a=(t&~(1<<32-_e(t)-1)).toString(32)+a,n=":"+n+"R"+a,a=rt++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=dp++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},vp={readContext:be,useCallback:gc,useContext:be,useEffect:Zi,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:vc,useReducer:co,useRef:mc,useState:function(){return co(ot)},useDebugValue:es,useDeferredValue:function(e){var n=xe();return yc(n,K.memoizedState,e)},useTransition:function(){var e=co(ot)[0],n=xe().memoizedState;return[e,n]},useMutableSource:rc,useSyncExternalStore:oc,useId:Ac,unstable_isNewReconciler:!1},yp={readContext:be,useCallback:gc,useContext:be,useEffect:Zi,useImperativeHandle:hc,useInsertionEffect:dc,useLayoutEffect:pc,useMemo:vc,useReducer:mo,useRef:mc,useState:function(){return mo(ot)},useDebugValue:es,useDeferredValue:function(e){var n=xe();return K===null?n.memoizedState=e:yc(n,K.memoizedState,e)},useTransition:function(){var e=mo(ot)[0],n=xe().memoizedState;return[e,n]},useMutableSource:rc,useSyncExternalStore:oc,useId:Ac,unstable_isNewReconciler:!1};function Ue(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var a in e)n[a]===void 0&&(n[a]=e[a]);return n}return n}function Xo(e,n,a,t){n=e.memoizedState,a=a(t,n),a=a==null?n:V({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var br={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var t=me(),r=yn(e),o=Qe(t,r);o.payload=n,a!=null&&(o.callback=a),n=gn(e,o,r),n!==null&&(We(n,e,r,t),jt(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var t=me(),r=yn(e),o=Qe(t,r);o.tag=1,o.payload=n,a!=null&&(o.callback=a),n=gn(e,o,r),n!==null&&(We(n,e,r,t),jt(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=me(),t=yn(e),r=Qe(a,t);r.tag=2,n!=null&&(r.callback=n),n=gn(e,r,t),n!==null&&(We(n,e,t,a),jt(n,e,t))}};function il(e,n,a,t,r,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,o,i):n.prototype&&n.prototype.isPureReactComponent?!Ja(a,t)||!Ja(r,o):!0}function Tc(e,n,a){var t=!1,r=Rn,o=n.contextType;return typeof o=="object"&&o!==null?o=be(o):(r=ye(n)?Wn:ue.current,t=n.contextTypes,o=(t=t!=null)?fa(e,r):Rn),n=new n(a,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=br,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),n}function sl(e,n,a,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,t),n.state!==e&&br.enqueueReplaceState(n,n.state,null)}function Jo(e,n,a,t){var r=e.stateNode;r.props=a,r.state=e.memoizedState,r.refs={},$i(e);var o=n.contextType;typeof o=="object"&&o!==null?r.context=be(o):(o=ye(n)?Wn:ue.current,r.context=fa(e,o)),r.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Xo(e,n,o,a),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&br.enqueueReplaceState(r,r.state,null),mr(e,a,r,t),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function ya(e,n){try{var a="",t=n;do a+=$m(t),t=t.return;while(t);var r=a}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:r,digest:null}}function po(e,n,a){return{value:e,source:null,stack:a??null,digest:n??null}}function Zo(e,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var Ap=typeof WeakMap=="function"?WeakMap:Map;function kc(e,n,a){a=Qe(-1,a),a.tag=3,a.payload={element:null};var t=n.value;return a.callback=function(){gr||(gr=!0,ui=t),Zo(e,n)},a}function Cc(e,n,a){a=Qe(-1,a),a.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var r=n.value;a.payload=function(){return t(r)},a.callback=function(){Zo(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(a.callback=function(){Zo(e,n),typeof t!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),a}function ll(e,n,a){var t=e.pingCache;if(t===null){t=e.pingCache=new Ap;var r=new Set;t.set(n,r)}else r=t.get(n),r===void 0&&(r=new Set,t.set(n,r));r.has(a)||(r.add(a),e=Up.bind(null,e,n,a),n.then(e,e))}function ul(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function cl(e,n,a,t,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=Qe(-1,1),n.tag=2,gn(a,n,1))),a.lanes|=1),e)}var Pp=en.ReactCurrentOwner,ge=!1;function ce(e,n,a,t){n.child=e===null?ec(n,null,a,t):ga(n,e.child,a,t)}function ml(e,n,a,t,r){a=a.render;var o=n.ref;return ma(n,r),t=Xi(e,n,a,t,o,r),a=Ji(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Ze(e,n,r)):(B&&a&&zi(n),n.flags|=1,ce(e,n,t,r),n.child)}function dl(e,n,a,t,r){if(e===null){var o=a.type;return typeof o=="function"&&!ls(o)&&o.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=o,Ec(e,n,o,t,r)):(e=qt(a.type,null,t,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&r)){var i=o.memoizedProps;if(a=a.compare,a=a!==null?a:Ja,a(i,t)&&e.ref===n.ref)return Ze(e,n,r)}return n.flags|=1,e=An(o,t),e.ref=n.ref,e.return=n,n.child=e}function Ec(e,n,a,t,r){if(e!==null){var o=e.memoizedProps;if(Ja(o,t)&&e.ref===n.ref)if(ge=!1,n.pendingProps=t=o,(e.lanes&r)!==0)e.flags&131072&&(ge=!0);else return n.lanes=e.lanes,Ze(e,n,r)}return ei(e,n,a,t,r)}function Sc(e,n,a){var t=n.pendingProps,r=t.children,o=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(ia,Pe),Pe|=a;else{if(!(a&1073741824))return e=o!==null?o.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,W(ia,Pe),Pe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:a,W(ia,Pe),Pe|=t}else o!==null?(t=o.baseLanes|a,n.memoizedState=null):t=a,W(ia,Pe),Pe|=t;return ce(e,n,r,a),n.child}function Oc(e,n){var a=n.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function ei(e,n,a,t,r){var o=ye(a)?Wn:ue.current;return o=fa(n,o),ma(n,r),a=Xi(e,n,a,t,o,r),t=Ji(),e!==null&&!ge?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Ze(e,n,r)):(B&&t&&zi(n),n.flags|=1,ce(e,n,a,r),n.child)}function pl(e,n,a,t,r){if(ye(a)){var o=!0;ir(n)}else o=!1;if(ma(n,r),n.stateNode===null)Ht(e,n),Tc(n,a,t),Jo(n,a,t,r),t=!0;else if(e===null){var i=n.stateNode,s=n.memoizedProps;i.props=s;var l=i.context,u=a.contextType;typeof u=="object"&&u!==null?u=be(u):(u=ye(a)?Wn:ue.current,u=fa(n,u));var h=a.getDerivedStateFromProps,p=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==t||l!==u)&&sl(n,i,t,u),on=!1;var g=n.memoizedState;i.state=g,mr(n,t,i,r),l=n.memoizedState,s!==t||g!==l||ve.current||on?(typeof h=="function"&&(Xo(n,a,h,t),l=n.memoizedState),(s=on||il(n,a,s,t,g,l,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=l),i.props=t,i.state=l,i.context=u,t=s):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{i=n.stateNode,ac(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Ue(n.type,s),i.props=u,p=n.pendingProps,g=i.context,l=a.contextType,typeof l=="object"&&l!==null?l=be(l):(l=ye(a)?Wn:ue.current,l=fa(n,l));var y=a.getDerivedStateFromProps;(h=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||g!==l)&&sl(n,i,t,l),on=!1,g=n.memoizedState,i.state=g,mr(n,t,i,r);var P=n.memoizedState;s!==p||g!==P||ve.current||on?(typeof y=="function"&&(Xo(n,a,y,t),P=n.memoizedState),(u=on||il(n,a,u,t,g,P,l)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(t,P,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(t,P,l)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=P),i.props=t,i.state=P,i.context=l,t=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),t=!1)}return ni(e,n,a,t,o,r)}function ni(e,n,a,t,r,o){Oc(e,n);var i=(n.flags&128)!==0;if(!t&&!i)return r&&Js(n,a,!1),Ze(e,n,o);t=n.stateNode,Pp.current=n;var s=i&&typeof a.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&i?(n.child=ga(n,e.child,null,o),n.child=ga(n,null,s,o)):ce(e,n,s,o),n.memoizedState=t.state,r&&Js(n,a,!0),n.child}function Ic(e){var n=e.stateNode;n.pendingContext?Xs(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Xs(e,n.context,!1),Yi(e,n.containerInfo)}function fl(e,n,a,t,r){return ha(),Fi(r),n.flags|=256,ce(e,n,a,t),n.child}var ai={dehydrated:null,treeContext:null,retryLane:0};function ti(e){return{baseLanes:e,cachePool:null,transitions:null}}function bc(e,n,a){var t=n.pendingProps,r=F.current,o=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(r&2)!==0),s?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),W(F,r&1),e===null)return Qo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=t.children,e=t.fallback,o?(t=n.mode,o=n.child,i={mode:"hidden",children:i},!(t&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ur(i,t,0,null),e=_n(e,t,a,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=ti(a),n.memoizedState=ai,e):ns(n,i));if(r=e.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return wp(e,n,i,t,s,r,a);if(o){o=t.fallback,i=n.mode,r=e.child,s=r.sibling;var l={mode:"hidden",children:t.children};return!(i&1)&&n.child!==r?(t=n.child,t.childLanes=0,t.pendingProps=l,n.deletions=null):(t=An(r,l),t.subtreeFlags=r.subtreeFlags&14680064),s!==null?o=An(s,o):(o=_n(o,i,a,null),o.flags|=2),o.return=n,t.return=n,t.sibling=o,n.child=t,t=o,o=n.child,i=e.child.memoizedState,i=i===null?ti(a):{baseLanes:i.baseLanes|a,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~a,n.memoizedState=ai,t}return o=e.child,e=o.sibling,t=An(o,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=a),t.return=n,t.sibling=null,e!==null&&(a=n.deletions,a===null?(n.deletions=[e],n.flags|=16):a.push(e)),n.child=t,n.memoizedState=null,t}function ns(e,n){return n=Ur({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function xt(e,n,a,t){return t!==null&&Fi(t),ga(n,e.child,null,a),e=ns(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function wp(e,n,a,t,r,o,i){if(a)return n.flags&256?(n.flags&=-257,t=po(Error(w(422))),xt(e,n,i,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=t.fallback,r=n.mode,t=Ur({mode:"visible",children:t.children},r,0,null),o=_n(o,r,i,null),o.flags|=2,t.return=n,o.return=n,t.sibling=o,n.child=t,n.mode&1&&ga(n,e.child,null,i),n.child.memoizedState=ti(i),n.memoizedState=ai,o);if(!(n.mode&1))return xt(e,n,i,null);if(r.data==="$!"){if(t=r.nextSibling&&r.nextSibling.dataset,t)var s=t.dgst;return t=s,o=Error(w(419)),t=po(o,t,void 0),xt(e,n,i,t)}if(s=(i&e.childLanes)!==0,ge||s){if(t=ne,t!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(t.suspendedLanes|i)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Je(e,r),We(t,e,r,-1))}return ss(),t=po(Error(w(421))),xt(e,n,i,t)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=Dp.bind(null,e),r._reactRetry=n,null):(e=o.treeContext,we=hn(r.nextSibling),Re=n,B=!0,Le=null,e!==null&&(Ee[Se++]=Ye,Ee[Se++]=qe,Ee[Se++]=Mn,Ye=e.id,qe=e.overflow,Mn=n),n=ns(n,t.children),n.flags|=4096,n)}function hl(e,n,a){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),Ko(e.return,n,a)}function fo(e,n,a,t,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:r}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=a,o.tailMode=r)}function xc(e,n,a){var t=n.pendingProps,r=t.revealOrder,o=t.tail;if(ce(e,n,t.children,a),t=F.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hl(e,a,n);else if(e.tag===19)hl(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(W(F,t),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&dr(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),fo(n,!1,r,a,o);break;case"backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&dr(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}fo(n,!0,a,null,o);break;case"together":fo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ht(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Bn|=n.lanes,!(a&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,a=An(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=An(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Rp(e,n,a){switch(n.tag){case 3:Ic(n),ha();break;case 5:tc(n);break;case 1:ye(n.type)&&ir(n);break;case 4:Yi(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,r=n.memoizedProps.value;W(ur,t._currentValue),t._currentValue=r;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(W(F,F.current&1),n.flags|=128,null):a&n.child.childLanes?bc(e,n,a):(W(F,F.current&1),e=Ze(e,n,a),e!==null?e.sibling:null);W(F,F.current&1);break;case 19:if(t=(a&n.childLanes)!==0,e.flags&128){if(t)return xc(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),W(F,F.current),t)break;return null;case 22:case 23:return n.lanes=0,Sc(e,n,a)}return Ze(e,n,a)}var Nc,ri,Uc,Dc;Nc=function(e,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};ri=function(){};Uc=function(e,n,a,t){var r=e.memoizedProps;if(r!==t){e=n.stateNode,Dn(Ve.current);var o=null;switch(a){case"input":r=Eo(e,r),t=Eo(e,t),o=[];break;case"select":r=V({},r,{value:void 0}),t=V({},t,{value:void 0}),o=[];break;case"textarea":r=Io(e,r),t=Io(e,t),o=[];break;default:typeof r.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=rr)}xo(a,t);var i;a=null;for(u in r)if(!t.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(i in s)s.hasOwnProperty(i)&&(a||(a={}),a[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ha.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in t){var l=t[u];if(s=r!=null?r[u]:void 0,t.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(a||(a={}),a[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(a||(a={}),a[i]=l[i])}else a||(o||(o=[]),o.push(u,a)),a=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&M("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}a&&(o=o||[]).push("style",a);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Dc=function(e,n,a,t){a!==t&&(n.flags|=4)};function ba(e,n){if(!B)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,t=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,t|=r.subtreeFlags&14680064,t|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,t|=r.subtreeFlags,t|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=t,e.childLanes=a,n}function Tp(e,n,a){var t=n.pendingProps;switch(Bi(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return ye(n.type)&&or(),se(n),null;case 3:return t=n.stateNode,va(),z(ve),z(ue),Qi(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(It(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Le!==null&&(di(Le),Le=null))),ri(e,n),se(n),null;case 5:qi(n);var r=Dn(tt.current);if(a=n.type,e!==null&&n.stateNode!=null)Uc(e,n,a,t,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(w(166));return se(n),null}if(e=Dn(Ve.current),It(n)){t=n.stateNode,a=n.type;var o=n.memoizedProps;switch(t[Fe]=n,t[nt]=o,e=(n.mode&1)!==0,a){case"dialog":M("cancel",t),M("close",t);break;case"iframe":case"object":case"embed":M("load",t);break;case"video":case"audio":for(r=0;r<La.length;r++)M(La[r],t);break;case"source":M("error",t);break;case"img":case"image":case"link":M("error",t),M("load",t);break;case"details":M("toggle",t);break;case"input":ks(t,o),M("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},M("invalid",t);break;case"textarea":Es(t,o),M("invalid",t)}xo(a,o),r=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?t.textContent!==s&&(o.suppressHydrationWarning!==!0&&Ot(t.textContent,s,e),r=["children",s]):typeof s=="number"&&t.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Ot(t.textContent,s,e),r=["children",""+s]):Ha.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&M("scroll",t)}switch(a){case"input":Pt(t),Cs(t,o,!0);break;case"textarea":Pt(t),Ss(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=rr)}t=r,n.updateQueue=t,t!==null&&(n.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lu(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=i.createElement(a,{is:t.is}):(e=i.createElement(a),a==="select"&&(i=e,t.multiple?i.multiple=!0:t.size&&(i.size=t.size))):e=i.createElementNS(e,a),e[Fe]=n,e[nt]=t,Nc(e,n,!1,!1),n.stateNode=e;e:{switch(i=No(a,t),a){case"dialog":M("cancel",e),M("close",e),r=t;break;case"iframe":case"object":case"embed":M("load",e),r=t;break;case"video":case"audio":for(r=0;r<La.length;r++)M(La[r],e);r=t;break;case"source":M("error",e),r=t;break;case"img":case"image":case"link":M("error",e),M("load",e),r=t;break;case"details":M("toggle",e),r=t;break;case"input":ks(e,t),r=Eo(e,t),M("invalid",e);break;case"option":r=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},r=V({},t,{value:void 0}),M("invalid",e);break;case"textarea":Es(e,t),r=Io(e,t),M("invalid",e);break;default:r=t}xo(a,r),s=r;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?mu(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uu(e,l)):o==="children"?typeof l=="string"?(a!=="textarea"||l!=="")&&$a(e,l):typeof l=="number"&&$a(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ha.hasOwnProperty(o)?l!=null&&o==="onScroll"&&M("scroll",e):l!=null&&Ci(e,o,l,i))}switch(a){case"input":Pt(e),Cs(e,t,!1);break;case"textarea":Pt(e),Ss(e);break;case"option":t.value!=null&&e.setAttribute("value",""+wn(t.value));break;case"select":e.multiple=!!t.multiple,o=t.value,o!=null?sa(e,!!t.multiple,o,!1):t.defaultValue!=null&&sa(e,!!t.multiple,t.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=rr)}switch(a){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)Dc(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(w(166));if(a=Dn(tt.current),Dn(Ve.current),It(n)){if(t=n.stateNode,a=n.memoizedProps,t[Fe]=n,(o=t.nodeValue!==a)&&(e=Re,e!==null))switch(e.tag){case 3:Ot(t.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ot(t.nodeValue,a,(e.mode&1)!==0)}o&&(n.flags|=4)}else t=(a.nodeType===9?a:a.ownerDocument).createTextNode(t),t[Fe]=n,n.stateNode=t}return se(n),null;case 13:if(z(F),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&we!==null&&n.mode&1&&!(n.flags&128))Ju(),ha(),n.flags|=98560,o=!1;else if(o=It(n),t!==null&&t.dehydrated!==null){if(e===null){if(!o)throw Error(w(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(w(317));o[Fe]=n}else ha(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),o=!1}else Le!==null&&(di(Le),Le=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=a,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?X===0&&(X=3):ss())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return va(),ri(e,n),e===null&&Za(n.stateNode.containerInfo),se(n),null;case 10:return Gi(n.type._context),se(n),null;case 17:return ye(n.type)&&or(),se(n),null;case 19:if(z(F),o=n.memoizedState,o===null)return se(n),null;if(t=(n.flags&128)!==0,i=o.rendering,i===null)if(t)ba(o,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=dr(e),i!==null){for(n.flags|=128,ba(o,!1),t=i.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=a,a=n.child;a!==null;)o=a,e=t,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return W(F,F.current&1|2),n.child}e=e.sibling}o.tail!==null&&$()>Aa&&(n.flags|=128,t=!0,ba(o,!1),n.lanes=4194304)}else{if(!t)if(e=dr(i),e!==null){if(n.flags|=128,t=!0,a=e.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),ba(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!B)return se(n),null}else 2*$()-o.renderingStartTime>Aa&&a!==1073741824&&(n.flags|=128,t=!0,ba(o,!1),n.lanes=4194304);o.isBackwards?(i.sibling=n.child,n.child=i):(a=o.last,a!==null?a.sibling=i:n.child=i,o.last=i)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=$(),n.sibling=null,a=F.current,W(F,t?a&1|2:a&1),n):(se(n),null);case 22:case 23:return is(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?Pe&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function kp(e,n){switch(Bi(n),n.tag){case 1:return ye(n.type)&&or(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return va(),z(ve),z(ue),Qi(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return qi(n),null;case 13:if(z(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));ha()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(F),null;case 4:return va(),null;case 10:return Gi(n.type._context),null;case 22:case 23:return is(),null;case 24:return null;default:return null}}var Nt=!1,le=!1,Cp=typeof WeakSet=="function"?WeakSet:Set,S=null;function oa(e,n){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(t){G(e,n,t)}else a.current=null}function oi(e,n,a){try{a()}catch(t){G(e,n,t)}}var gl=!1;function Ep(e,n){if(jo=nr,e=zu(),Mi(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var t=a.getSelection&&a.getSelection();if(t&&t.rangeCount!==0){a=t.anchorNode;var r=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var i=0,s=-1,l=-1,u=0,h=0,p=e,g=null;n:for(;;){for(var y;p!==a||r!==0&&p.nodeType!==3||(s=i+r),p!==o||t!==0&&p.nodeType!==3||(l=i+t),p.nodeType===3&&(i+=p.nodeValue.length),(y=p.firstChild)!==null;)g=p,p=y;for(;;){if(p===e)break n;if(g===a&&++u===r&&(s=i),g===o&&++h===t&&(l=i),(y=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=y}a=s===-1||l===-1?null:{start:s,end:l}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vo={focusedElem:e,selectionRange:a},nr=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var P=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var A=P.memoizedProps,C=P.memoizedState,m=n.stateNode,c=m.getSnapshotBeforeUpdate(n.elementType===n.type?A:Ue(n.type,A),C);m.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){G(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return P=gl,gl=!1,P}function ja(e,n,a){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&oi(n,a,o)}r=r.next}while(r!==t)}}function xr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var t=a.create;a.destroy=t()}a=a.next}while(a!==n)}}function ii(e){var n=e.ref;if(n!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof n=="function"?n(e):n.current=e}}function Lc(e){var n=e.alternate;n!==null&&(e.alternate=null,Lc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Fe],delete n[nt],delete n[$o],delete n[lp],delete n[up])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _c(e){return e.tag===5||e.tag===3||e.tag===4}function vl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function si(e,n,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=rr));else if(t!==4&&(e=e.child,e!==null))for(si(e,n,a),e=e.sibling;e!==null;)si(e,n,a),e=e.sibling}function li(e,n,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(li(e,n,a),e=e.sibling;e!==null;)li(e,n,a),e=e.sibling}var te=null,De=!1;function tn(e,n,a){for(a=a.child;a!==null;)Wc(e,n,a),a=a.sibling}function Wc(e,n,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(Tr,a)}catch{}switch(a.tag){case 5:le||oa(a,n);case 6:var t=te,r=De;te=null,tn(e,n,a),te=t,De=r,te!==null&&(De?(e=te,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):te.removeChild(a.stateNode));break;case 18:te!==null&&(De?(e=te,a=a.stateNode,e.nodeType===8?io(e.parentNode,a):e.nodeType===1&&io(e,a),Ka(e)):io(te,a.stateNode));break;case 4:t=te,r=De,te=a.stateNode.containerInfo,De=!0,tn(e,n,a),te=t,De=r;break;case 0:case 11:case 14:case 15:if(!le&&(t=a.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){r=t=t.next;do{var o=r,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&oi(a,n,i),r=r.next}while(r!==t)}tn(e,n,a);break;case 1:if(!le&&(oa(a,n),t=a.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=a.memoizedProps,t.state=a.memoizedState,t.componentWillUnmount()}catch(s){G(a,n,s)}tn(e,n,a);break;case 21:tn(e,n,a);break;case 22:a.mode&1?(le=(t=le)||a.memoizedState!==null,tn(e,n,a),le=t):tn(e,n,a);break;default:tn(e,n,a)}}function yl(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Cp),n.forEach(function(t){var r=Lp.bind(null,e,t);a.has(t)||(a.add(t),t.then(r,r))})}}function Ne(e,n){var a=n.deletions;if(a!==null)for(var t=0;t<a.length;t++){var r=a[t];try{var o=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,De=!1;break e;case 3:te=s.stateNode.containerInfo,De=!0;break e;case 4:te=s.stateNode.containerInfo,De=!0;break e}s=s.return}if(te===null)throw Error(w(160));Wc(o,i,r),te=null,De=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){G(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Mc(n,e),n=n.sibling}function Mc(e,n){var a=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(n,e),ze(e),t&4){try{ja(3,e,e.return),xr(3,e)}catch(A){G(e,e.return,A)}try{ja(5,e,e.return)}catch(A){G(e,e.return,A)}}break;case 1:Ne(n,e),ze(e),t&512&&a!==null&&oa(a,a.return);break;case 5:if(Ne(n,e),ze(e),t&512&&a!==null&&oa(a,a.return),e.flags&32){var r=e.stateNode;try{$a(r,"")}catch(A){G(e,e.return,A)}}if(t&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,i=a!==null?a.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&iu(r,o),No(s,i);var u=No(s,o);for(i=0;i<l.length;i+=2){var h=l[i],p=l[i+1];h==="style"?mu(r,p):h==="dangerouslySetInnerHTML"?uu(r,p):h==="children"?$a(r,p):Ci(r,h,p,u)}switch(s){case"input":So(r,o);break;case"textarea":su(r,o);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?sa(r,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?sa(r,!!o.multiple,o.defaultValue,!0):sa(r,!!o.multiple,o.multiple?[]:"",!1))}r[nt]=o}catch(A){G(e,e.return,A)}}break;case 6:if(Ne(n,e),ze(e),t&4){if(e.stateNode===null)throw Error(w(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(A){G(e,e.return,A)}}break;case 3:if(Ne(n,e),ze(e),t&4&&a!==null&&a.memoizedState.isDehydrated)try{Ka(n.containerInfo)}catch(A){G(e,e.return,A)}break;case 4:Ne(n,e),ze(e);break;case 13:Ne(n,e),ze(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(rs=$())),t&4&&yl(e);break;case 22:if(h=a!==null&&a.memoizedState!==null,e.mode&1?(le=(u=le)||h,Ne(n,e),le=u):Ne(n,e),ze(e),t&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(p=S=h;S!==null;){switch(g=S,y=g.child,g.tag){case 0:case 11:case 14:case 15:ja(4,g,g.return);break;case 1:oa(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){t=g,a=g.return;try{n=t,P.props=n.memoizedProps,P.state=n.memoizedState,P.componentWillUnmount()}catch(A){G(t,a,A)}}break;case 5:oa(g,g.return);break;case 22:if(g.memoizedState!==null){Pl(p);continue}}y!==null?(y.return=g,S=y):Pl(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=p.stateNode,l=p.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=cu("display",i))}catch(A){G(e,e.return,A)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(A){G(e,e.return,A)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ne(n,e),ze(e),t&4&&yl(e);break;case 21:break;default:Ne(n,e),ze(e)}}function ze(e){var n=e.flags;if(n&2){try{e:{for(var a=e.return;a!==null;){if(_c(a)){var t=a;break e}a=a.return}throw Error(w(160))}switch(t.tag){case 5:var r=t.stateNode;t.flags&32&&($a(r,""),t.flags&=-33);var o=vl(e);li(e,o,r);break;case 3:case 4:var i=t.stateNode.containerInfo,s=vl(e);si(e,s,i);break;default:throw Error(w(161))}}catch(l){G(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sp(e,n,a){S=e,zc(e)}function zc(e,n,a){for(var t=(e.mode&1)!==0;S!==null;){var r=S,o=r.child;if(r.tag===22&&t){var i=r.memoizedState!==null||Nt;if(!i){var s=r.alternate,l=s!==null&&s.memoizedState!==null||le;s=Nt;var u=le;if(Nt=i,(le=l)&&!u)for(S=r;S!==null;)i=S,l=i.child,i.tag===22&&i.memoizedState!==null?wl(r):l!==null?(l.return=i,S=l):wl(r);for(;o!==null;)S=o,zc(o),o=o.sibling;S=r,Nt=s,le=u}Al(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,S=o):Al(e)}}function Al(e){for(;S!==null;){var n=S;if(n.flags&8772){var a=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||xr(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!le)if(a===null)t.componentDidMount();else{var r=n.elementType===n.type?a.memoizedProps:Ue(n.type,a.memoizedProps);t.componentDidUpdate(r,a.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&tl(n,o,t);break;case 3:var i=n.updateQueue;if(i!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}tl(n,i,a)}break;case 5:var s=n.stateNode;if(a===null&&n.flags&4){a=s;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break;case"img":l.src&&(a.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ka(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}le||n.flags&512&&ii(n)}catch(g){G(n,n.return,g)}}if(n===e){S=null;break}if(a=n.sibling,a!==null){a.return=n.return,S=a;break}S=n.return}}function Pl(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var a=n.sibling;if(a!==null){a.return=n.return,S=a;break}S=n.return}}function wl(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{xr(4,n)}catch(l){G(n,a,l)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var r=n.return;try{t.componentDidMount()}catch(l){G(n,r,l)}}var o=n.return;try{ii(n)}catch(l){G(n,o,l)}break;case 5:var i=n.return;try{ii(n)}catch(l){G(n,i,l)}}}catch(l){G(n,n.return,l)}if(n===e){S=null;break}var s=n.sibling;if(s!==null){s.return=n.return,S=s;break}S=n.return}}var Op=Math.ceil,hr=en.ReactCurrentDispatcher,as=en.ReactCurrentOwner,Ie=en.ReactCurrentBatchConfig,D=0,ne=null,Q=null,re=0,Pe=0,ia=kn(0),X=0,st=null,Bn=0,Nr=0,ts=0,Va=null,he=null,rs=0,Aa=1/0,He=null,gr=!1,ui=null,vn=null,Ut=!1,cn=null,vr=0,Ga=0,ci=null,$t=-1,Yt=0;function me(){return D&6?$():$t!==-1?$t:$t=$()}function yn(e){return e.mode&1?D&2&&re!==0?re&-re:mp.transition!==null?(Yt===0&&(Yt=Tu()),Yt):(e=_,e!==0||(e=window.event,e=e===void 0?16:bu(e.type)),e):1}function We(e,n,a,t){if(50<Ga)throw Ga=0,ci=null,Error(w(185));mt(e,a,t),(!(D&2)||e!==ne)&&(e===ne&&(!(D&2)&&(Nr|=a),X===4&&ln(e,re)),Ae(e,t),a===1&&D===0&&!(n.mode&1)&&(Aa=$()+500,Or&&Cn()))}function Ae(e,n){var a=e.callbackNode;md(e,n);var t=er(e,e===ne?re:0);if(t===0)a!==null&&bs(a),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(a!=null&&bs(a),n===1)e.tag===0?cp(Rl.bind(null,e)):Qu(Rl.bind(null,e)),ip(function(){!(D&6)&&Cn()}),a=null;else{switch(ku(t)){case 1:a=bi;break;case 4:a=wu;break;case 16:a=Zt;break;case 536870912:a=Ru;break;default:a=Zt}a=Yc(a,Bc.bind(null,e))}e.callbackPriority=n,e.callbackNode=a}}function Bc(e,n){if($t=-1,Yt=0,D&6)throw Error(w(327));var a=e.callbackNode;if(da()&&e.callbackNode!==a)return null;var t=er(e,e===ne?re:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=yr(e,t);else{n=t;var r=D;D|=2;var o=jc();(ne!==e||re!==n)&&(He=null,Aa=$()+500,Ln(e,n));do try{xp();break}catch(s){Fc(e,s)}while(!0);Vi(),hr.current=o,D=r,Q!==null?n=0:(ne=null,re=0,n=X)}if(n!==0){if(n===2&&(r=Wo(e),r!==0&&(t=r,n=mi(e,r))),n===1)throw a=st,Ln(e,0),ln(e,t),Ae(e,$()),a;if(n===6)ln(e,t);else{if(r=e.current.alternate,!(t&30)&&!Ip(r)&&(n=yr(e,t),n===2&&(o=Wo(e),o!==0&&(t=o,n=mi(e,o))),n===1))throw a=st,Ln(e,0),ln(e,t),Ae(e,$()),a;switch(e.finishedWork=r,e.finishedLanes=t,n){case 0:case 1:throw Error(w(345));case 2:bn(e,he,He);break;case 3:if(ln(e,t),(t&130023424)===t&&(n=rs+500-$(),10<n)){if(er(e,0)!==0)break;if(r=e.suspendedLanes,(r&t)!==t){me(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ho(bn.bind(null,e,he,He),n);break}bn(e,he,He);break;case 4:if(ln(e,t),(t&4194240)===t)break;for(n=e.eventTimes,r=-1;0<t;){var i=31-_e(t);o=1<<i,i=n[i],i>r&&(r=i),t&=~o}if(t=r,t=$()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*Op(t/1960))-t,10<t){e.timeoutHandle=Ho(bn.bind(null,e,he,He),t);break}bn(e,he,He);break;case 5:bn(e,he,He);break;default:throw Error(w(329))}}}return Ae(e,$()),e.callbackNode===a?Bc.bind(null,e):null}function mi(e,n){var a=Va;return e.current.memoizedState.isDehydrated&&(Ln(e,n).flags|=256),e=yr(e,n),e!==2&&(n=he,he=a,n!==null&&di(n)),e}function di(e){he===null?he=e:he.push.apply(he,e)}function Ip(e){for(var n=e;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var t=0;t<a.length;t++){var r=a[t],o=r.getSnapshot;r=r.value;try{if(!Me(o(),r))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ln(e,n){for(n&=~ts,n&=~Nr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var a=31-_e(n),t=1<<a;e[a]=-1,n&=~t}}function Rl(e){if(D&6)throw Error(w(327));da();var n=er(e,0);if(!(n&1))return Ae(e,$()),null;var a=yr(e,n);if(e.tag!==0&&a===2){var t=Wo(e);t!==0&&(n=t,a=mi(e,t))}if(a===1)throw a=st,Ln(e,0),ln(e,n),Ae(e,$()),a;if(a===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,bn(e,he,He),Ae(e,$()),null}function os(e,n){var a=D;D|=1;try{return e(n)}finally{D=a,D===0&&(Aa=$()+500,Or&&Cn())}}function Fn(e){cn!==null&&cn.tag===0&&!(D&6)&&da();var n=D;D|=1;var a=Ie.transition,t=_;try{if(Ie.transition=null,_=1,e)return e()}finally{_=t,Ie.transition=a,D=n,!(D&6)&&Cn()}}function is(){Pe=ia.current,z(ia)}function Ln(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,op(a)),Q!==null)for(a=Q.return;a!==null;){var t=a;switch(Bi(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&or();break;case 3:va(),z(ve),z(ue),Qi();break;case 5:qi(t);break;case 4:va();break;case 13:z(F);break;case 19:z(F);break;case 10:Gi(t.type._context);break;case 22:case 23:is()}a=a.return}if(ne=e,Q=e=An(e.current,null),re=Pe=n,X=0,st=null,ts=Nr=Bn=0,he=Va=null,Un!==null){for(n=0;n<Un.length;n++)if(a=Un[n],t=a.interleaved,t!==null){a.interleaved=null;var r=t.next,o=a.pending;if(o!==null){var i=o.next;o.next=r,t.next=i}a.pending=t}Un=null}return e}function Fc(e,n){do{var a=Q;try{if(Vi(),Vt.current=fr,pr){for(var t=j.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}pr=!1}if(zn=0,ee=K=j=null,Fa=!1,rt=0,as.current=null,a===null||a.return===null){X=1,st=n,Q=null;break}e:{var o=e,i=a.return,s=a,l=n;if(n=re,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=s,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=ul(i);if(y!==null){y.flags&=-257,cl(y,i,s,o,n),y.mode&1&&ll(o,u,n),n=y,l=u;var P=n.updateQueue;if(P===null){var A=new Set;A.add(l),n.updateQueue=A}else P.add(l);break e}else{if(!(n&1)){ll(o,u,n),ss();break e}l=Error(w(426))}}else if(B&&s.mode&1){var C=ul(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),cl(C,i,s,o,n),Fi(ya(l,s));break e}}o=l=ya(l,s),X!==4&&(X=2),Va===null?Va=[o]:Va.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=kc(o,l,n);al(o,m);break e;case 1:s=l;var c=o.type,d=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(vn===null||!vn.has(d)))){o.flags|=65536,n&=-n,o.lanes|=n;var v=Cc(o,s,n);al(o,v);break e}}o=o.return}while(o!==null)}Gc(a)}catch(T){n=T,Q===a&&a!==null&&(Q=a=a.return);continue}break}while(!0)}function jc(){var e=hr.current;return hr.current=fr,e===null?fr:e}function ss(){(X===0||X===3||X===2)&&(X=4),ne===null||!(Bn&268435455)&&!(Nr&268435455)||ln(ne,re)}function yr(e,n){var a=D;D|=2;var t=jc();(ne!==e||re!==n)&&(He=null,Ln(e,n));do try{bp();break}catch(r){Fc(e,r)}while(!0);if(Vi(),D=a,hr.current=t,Q!==null)throw Error(w(261));return ne=null,re=0,X}function bp(){for(;Q!==null;)Vc(Q)}function xp(){for(;Q!==null&&!ad();)Vc(Q)}function Vc(e){var n=$c(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,n===null?Gc(e):Q=n,as.current=null}function Gc(e){var n=e;do{var a=n.alternate;if(e=n.return,n.flags&32768){if(a=kp(a,n),a!==null){a.flags&=32767,Q=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(a=Tp(a,n,Pe),a!==null){Q=a;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);X===0&&(X=5)}function bn(e,n,a){var t=_,r=Ie.transition;try{Ie.transition=null,_=1,Np(e,n,a,t)}finally{Ie.transition=r,_=t}return null}function Np(e,n,a,t){do da();while(cn!==null);if(D&6)throw Error(w(327));a=e.finishedWork;var r=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var o=a.lanes|a.childLanes;if(dd(e,o),e===ne&&(Q=ne=null,re=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Ut||(Ut=!0,Yc(Zt,function(){return da(),null})),o=(a.flags&15990)!==0,a.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var i=_;_=1;var s=D;D|=4,as.current=null,Ep(e,a),Mc(a,e),Jd(Vo),nr=!!jo,Vo=jo=null,e.current=a,Sp(a),td(),D=s,_=i,Ie.transition=o}else e.current=a;if(Ut&&(Ut=!1,cn=e,vr=r),o=e.pendingLanes,o===0&&(vn=null),id(a.stateNode),Ae(e,$()),n!==null)for(t=e.onRecoverableError,a=0;a<n.length;a++)r=n[a],t(r.value,{componentStack:r.stack,digest:r.digest});if(gr)throw gr=!1,e=ui,ui=null,e;return vr&1&&e.tag!==0&&da(),o=e.pendingLanes,o&1?e===ci?Ga++:(Ga=0,ci=e):Ga=0,Cn(),null}function da(){if(cn!==null){var e=ku(vr),n=Ie.transition,a=_;try{if(Ie.transition=null,_=16>e?16:e,cn===null)var t=!1;else{if(e=cn,cn=null,vr=0,D&6)throw Error(w(331));var r=D;for(D|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(S=u;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:ja(8,h,o)}var p=h.child;if(p!==null)p.return=h,S=p;else for(;S!==null;){h=S;var g=h.sibling,y=h.return;if(Lc(h),h===u){S=null;break}if(g!==null){g.return=y,S=g;break}S=y}}}var P=o.alternate;if(P!==null){var A=P.child;if(A!==null){P.child=null;do{var C=A.sibling;A.sibling=null,A=C}while(A!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ja(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,S=m;break e}S=o.return}}var c=e.current;for(S=c;S!==null;){i=S;var d=i.child;if(i.subtreeFlags&2064&&d!==null)d.return=i,S=d;else e:for(i=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xr(9,s)}}catch(T){G(s,s.return,T)}if(s===i){S=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,S=v;break e}S=s.return}}if(D=r,Cn(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(Tr,e)}catch{}t=!0}return t}finally{_=a,Ie.transition=n}}return!1}function Tl(e,n,a){n=ya(a,n),n=kc(e,n,1),e=gn(e,n,1),n=me(),e!==null&&(mt(e,1,n),Ae(e,n))}function G(e,n,a){if(e.tag===3)Tl(e,e,a);else for(;n!==null;){if(n.tag===3){Tl(n,e,a);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(vn===null||!vn.has(t))){e=ya(a,e),e=Cc(n,e,1),n=gn(n,e,1),e=me(),n!==null&&(mt(n,1,e),Ae(n,e));break}}n=n.return}}function Up(e,n,a){var t=e.pingCache;t!==null&&t.delete(n),n=me(),e.pingedLanes|=e.suspendedLanes&a,ne===e&&(re&a)===a&&(X===4||X===3&&(re&130023424)===re&&500>$()-rs?Ln(e,0):ts|=a),Ae(e,n)}function Hc(e,n){n===0&&(e.mode&1?(n=Tt,Tt<<=1,!(Tt&130023424)&&(Tt=4194304)):n=1);var a=me();e=Je(e,n),e!==null&&(mt(e,n,a),Ae(e,a))}function Dp(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Hc(e,a)}function Lp(e,n){var a=0;switch(e.tag){case 13:var t=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(w(314))}t!==null&&t.delete(n),Hc(e,a)}var $c;$c=function(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps||ve.current)ge=!0;else{if(!(e.lanes&a)&&!(n.flags&128))return ge=!1,Rp(e,n,a);ge=!!(e.flags&131072)}else ge=!1,B&&n.flags&1048576&&Ku(n,lr,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;Ht(e,n),e=n.pendingProps;var r=fa(n,ue.current);ma(n,a),r=Xi(null,n,t,e,r,a);var o=Ji();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(t)?(o=!0,ir(n)):o=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$i(n),r.updater=br,n.stateNode=r,r._reactInternals=n,Jo(n,t,e,a),n=ni(null,n,t,!0,o,a)):(n.tag=0,B&&o&&zi(n),ce(null,n,r,a),n=n.child),n;case 16:t=n.elementType;e:{switch(Ht(e,n),e=n.pendingProps,r=t._init,t=r(t._payload),n.type=t,r=n.tag=Wp(t),e=Ue(t,e),r){case 0:n=ei(null,n,t,e,a);break e;case 1:n=pl(null,n,t,e,a);break e;case 11:n=ml(null,n,t,e,a);break e;case 14:n=dl(null,n,t,Ue(t.type,e),a);break e}throw Error(w(306,t,""))}return n;case 0:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:Ue(t,r),ei(e,n,t,r,a);case 1:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:Ue(t,r),pl(e,n,t,r,a);case 3:e:{if(Ic(n),e===null)throw Error(w(387));t=n.pendingProps,o=n.memoizedState,r=o.element,ac(e,n),mr(n,t,null,a);var i=n.memoizedState;if(t=i.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){r=ya(Error(w(423)),n),n=fl(e,n,t,a,r);break e}else if(t!==r){r=ya(Error(w(424)),n),n=fl(e,n,t,a,r);break e}else for(we=hn(n.stateNode.containerInfo.firstChild),Re=n,B=!0,Le=null,a=ec(n,null,t,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ha(),t===r){n=Ze(e,n,a);break e}ce(e,n,t,a)}n=n.child}return n;case 5:return tc(n),e===null&&Qo(n),t=n.type,r=n.pendingProps,o=e!==null?e.memoizedProps:null,i=r.children,Go(t,r)?i=null:o!==null&&Go(t,o)&&(n.flags|=32),Oc(e,n),ce(e,n,i,a),n.child;case 6:return e===null&&Qo(n),null;case 13:return bc(e,n,a);case 4:return Yi(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=ga(n,null,t,a):ce(e,n,t,a),n.child;case 11:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:Ue(t,r),ml(e,n,t,r,a);case 7:return ce(e,n,n.pendingProps,a),n.child;case 8:return ce(e,n,n.pendingProps.children,a),n.child;case 12:return ce(e,n,n.pendingProps.children,a),n.child;case 10:e:{if(t=n.type._context,r=n.pendingProps,o=n.memoizedProps,i=r.value,W(ur,t._currentValue),t._currentValue=i,o!==null)if(Me(o.value,i)){if(o.children===r.children&&!ve.current){n=Ze(e,n,a);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var l=s.firstContext;l!==null;){if(l.context===t){if(o.tag===1){l=Qe(-1,a&-a),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),Ko(o.return,a,n),s.lanes|=a;break}l=l.next}}else if(o.tag===10)i=o.type===n.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(w(341));i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Ko(i,a,n),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===n){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ce(e,n,r.children,a),n=n.child}return n;case 9:return r=n.type,t=n.pendingProps.children,ma(n,a),r=be(r),t=t(r),n.flags|=1,ce(e,n,t,a),n.child;case 14:return t=n.type,r=Ue(t,n.pendingProps),r=Ue(t.type,r),dl(e,n,t,r,a);case 15:return Ec(e,n,n.type,n.pendingProps,a);case 17:return t=n.type,r=n.pendingProps,r=n.elementType===t?r:Ue(t,r),Ht(e,n),n.tag=1,ye(t)?(e=!0,ir(n)):e=!1,ma(n,a),Tc(n,t,r),Jo(n,t,r,a),ni(null,n,t,!0,e,a);case 19:return xc(e,n,a);case 22:return Sc(e,n,a)}throw Error(w(156,n.tag))};function Yc(e,n){return Pu(e,n)}function _p(e,n,a,t){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,n,a,t){return new _p(e,n,a,t)}function ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wp(e){if(typeof e=="function")return ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Si)return 11;if(e===Oi)return 14}return 2}function An(e,n){var a=e.alternate;return a===null?(a=Oe(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function qt(e,n,a,t,r,o){var i=2;if(t=e,typeof e=="function")ls(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Kn:return _n(a.children,r,o,n);case Ei:i=8,r|=8;break;case Ro:return e=Oe(12,a,n,r|2),e.elementType=Ro,e.lanes=o,e;case To:return e=Oe(13,a,n,r),e.elementType=To,e.lanes=o,e;case ko:return e=Oe(19,a,n,r),e.elementType=ko,e.lanes=o,e;case tu:return Ur(a,r,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nu:i=10;break e;case au:i=9;break e;case Si:i=11;break e;case Oi:i=14;break e;case rn:i=16,t=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=Oe(i,a,n,r),n.elementType=e,n.type=t,n.lanes=o,n}function _n(e,n,a,t){return e=Oe(7,e,t,n),e.lanes=a,e}function Ur(e,n,a,t){return e=Oe(22,e,t,n),e.elementType=tu,e.lanes=a,e.stateNode={isHidden:!1},e}function ho(e,n,a){return e=Oe(6,e,null,n),e.lanes=a,e}function go(e,n,a){return n=Oe(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Mp(e,n,a,t,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qr(0),this.expirationTimes=Qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.identifierPrefix=t,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function us(e,n,a,t,r,o,i,s,l){return e=new Mp(e,n,a,s,l),n===1?(n=1,o===!0&&(n|=8)):n=0,o=Oe(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:t,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(o),e}function zp(e,n,a){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qn,key:t==null?null:""+t,children:e,containerInfo:n,implementation:a}}function qc(e){if(!e)return Rn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var a=e.type;if(ye(a))return qu(e,a,n)}return n}function Qc(e,n,a,t,r,o,i,s,l){return e=us(a,t,!0,e,r,o,i,s,l),e.context=qc(null),a=e.current,t=me(),r=yn(a),o=Qe(t,r),o.callback=n??null,gn(a,o,r),e.current.lanes=r,mt(e,r,t),Ae(e,t),e}function Dr(e,n,a,t){var r=n.current,o=me(),i=yn(r);return a=qc(a),n.context===null?n.context=a:n.pendingContext=a,n=Qe(o,i),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=gn(r,n,i),e!==null&&(We(e,r,i,o),jt(e,r,i)),i}function Ar(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function cs(e,n){kl(e,n),(e=e.alternate)&&kl(e,n)}function Bp(){return null}var Kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ms(e){this._internalRoot=e}Lr.prototype.render=ms.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));Dr(e,n,null,null)};Lr.prototype.unmount=ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fn(function(){Dr(null,e,null,null)}),n[Xe]=null}};function Lr(e){this._internalRoot=e}Lr.prototype.unstable_scheduleHydration=function(e){if(e){var n=Su();e={blockedOn:null,target:e,priority:n};for(var a=0;a<sn.length&&n!==0&&n<sn[a].priority;a++);sn.splice(a,0,e),a===0&&Iu(e)}};function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cl(){}function Fp(e,n,a,t,r){if(r){if(typeof t=="function"){var o=t;t=function(){var u=Ar(i);o.call(u)}}var i=Qc(n,t,e,0,null,!1,!1,"",Cl);return e._reactRootContainer=i,e[Xe]=i.current,Za(e.nodeType===8?e.parentNode:e),Fn(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof t=="function"){var s=t;t=function(){var u=Ar(l);s.call(u)}}var l=us(e,0,!1,null,null,!1,!1,"",Cl);return e._reactRootContainer=l,e[Xe]=l.current,Za(e.nodeType===8?e.parentNode:e),Fn(function(){Dr(n,l,a,t)}),l}function Wr(e,n,a,t,r){var o=a._reactRootContainer;if(o){var i=o;if(typeof r=="function"){var s=r;r=function(){var l=Ar(i);s.call(l)}}Dr(n,i,e,r)}else i=Fp(a,n,e,r,t);return Ar(i)}Cu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var a=Da(n.pendingLanes);a!==0&&(xi(n,a|1),Ae(n,$()),!(D&6)&&(Aa=$()+500,Cn()))}break;case 13:Fn(function(){var t=Je(e,1);if(t!==null){var r=me();We(t,e,1,r)}}),cs(e,1)}};Ni=function(e){if(e.tag===13){var n=Je(e,134217728);if(n!==null){var a=me();We(n,e,134217728,a)}cs(e,134217728)}};Eu=function(e){if(e.tag===13){var n=yn(e),a=Je(e,n);if(a!==null){var t=me();We(a,e,n,t)}cs(e,n)}};Su=function(){return _};Ou=function(e,n){var a=_;try{return _=e,n()}finally{_=a}};Do=function(e,n,a){switch(n){case"input":if(So(e,a),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var t=a[n];if(t!==e&&t.form===e.form){var r=Sr(t);if(!r)throw Error(w(90));ou(t),So(t,r)}}}break;case"textarea":su(e,a);break;case"select":n=a.value,n!=null&&sa(e,!!a.multiple,n,!1)}};fu=os;hu=Fn;var jp={usingClientEntryPoint:!1,Events:[pt,ea,Sr,du,pu,os]},xa={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vp={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yu(e),e===null?null:e.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dt.isDisabled&&Dt.supportsFiber)try{Tr=Dt.inject(Vp),je=Dt}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp;ke.createPortal=function(e,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ds(n))throw Error(w(200));return zp(e,n,null,a)};ke.createRoot=function(e,n){if(!ds(e))throw Error(w(299));var a=!1,t="",r=Kc;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=us(e,1,!1,null,null,a,!1,t,r),e[Xe]=n.current,Za(e.nodeType===8?e.parentNode:e),new ms(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=yu(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Fn(e)};ke.hydrate=function(e,n,a){if(!_r(n))throw Error(w(200));return Wr(null,e,n,!0,a)};ke.hydrateRoot=function(e,n,a){if(!ds(e))throw Error(w(405));var t=a!=null&&a.hydratedSources||null,r=!1,o="",i=Kc;if(a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),n=Qc(n,null,e,1,a??null,r,!1,o,i),e[Xe]=n.current,Za(e),t)for(e=0;e<t.length;e++)a=t[e],r=a._getVersion,r=r(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,r]:n.mutableSourceEagerHydrationData.push(a,r);return new Lr(n)};ke.render=function(e,n,a){if(!_r(n))throw Error(w(200));return Wr(null,e,n,!1,a)};ke.unmountComponentAtNode=function(e){if(!_r(e))throw Error(w(40));return e._reactRootContainer?(Fn(function(){Wr(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};ke.unstable_batchedUpdates=os;ke.unstable_renderSubtreeIntoContainer=function(e,n,a,t){if(!_r(a))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Wr(e,n,a,!1,t)};ke.version="18.3.1-next-f1338f8080-20240426";function Xc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc)}catch(e){console.error(e)}}Xc(),Xl.exports=ke;var Gp=Xl.exports,El=Gp;Po.createRoot=El.createRoot,Po.hydrateRoot=El.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lt(){return lt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)({}).hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},lt.apply(null,arguments)}var mn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(mn||(mn={}));const Sl="popstate";function Hp(e){e===void 0&&(e={});function n(r,o){let{pathname:i="/",search:s="",hash:l=""}=Hn(r.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),pi("",{pathname:i,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function a(r,o){let i=r.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let l=r.location.href,u=l.indexOf("#");s=u===-1?l:l.slice(0,u)}return s+"#"+(typeof o=="string"?o:Pr(o))}function t(r,o){Mr(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Yp(n,a,t,e)}function Y(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Mr(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function $p(){return Math.random().toString(36).substr(2,8)}function Ol(e,n){return{usr:e.state,key:e.key,idx:n}}function pi(e,n,a,t){return a===void 0&&(a=null),lt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Hn(n):n,{state:a,key:n&&n.key||t||$p()})}function Pr(e){let{pathname:n="/",search:a="",hash:t=""}=e;return a&&a!=="?"&&(n+=a.charAt(0)==="?"?a:"?"+a),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Hn(e){let n={};if(e){let a=e.indexOf("#");a>=0&&(n.hash=e.substr(a),e=e.substr(0,a));let t=e.indexOf("?");t>=0&&(n.search=e.substr(t),e=e.substr(0,t)),e&&(n.pathname=e)}return n}function Yp(e,n,a,t){t===void 0&&(t={});let{window:r=document.defaultView,v5Compat:o=!1}=t,i=r.history,s=mn.Pop,l=null,u=h();u==null&&(u=0,i.replaceState(lt({},i.state,{idx:u}),""));function h(){return(i.state||{idx:null}).idx}function p(){s=mn.Pop;let C=h(),m=C==null?null:C-u;u=C,l&&l({action:s,location:A.location,delta:m})}function g(C,m){s=mn.Push;let c=pi(A.location,C,m);a&&a(c,C),u=h()+1;let d=Ol(c,u),v=A.createHref(c);try{i.pushState(d,"",v)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;r.location.assign(v)}o&&l&&l({action:s,location:A.location,delta:1})}function y(C,m){s=mn.Replace;let c=pi(A.location,C,m);a&&a(c,C),u=h();let d=Ol(c,u),v=A.createHref(c);i.replaceState(d,"",v),o&&l&&l({action:s,location:A.location,delta:0})}function P(C){let m=r.location.origin!=="null"?r.location.origin:r.location.href,c=typeof C=="string"?C:Pr(C);return c=c.replace(/ $/,"%20"),Y(m,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,m)}let A={get action(){return s},get location(){return e(r,i)},listen(C){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Sl,p),l=C,()=>{r.removeEventListener(Sl,p),l=null}},createHref(C){return n(r,C)},createURL:P,encodeLocation(C){let m=P(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(C){return i.go(C)}};return A}var Il;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Il||(Il={}));function qp(e,n,a){return a===void 0&&(a="/"),Qp(e,n,a)}function Qp(e,n,a,t){let r=typeof n=="string"?Hn(n):n,o=ps(r.pathname||"/",a);if(o==null)return null;let i=Jc(e);Kp(i);let s=null,l=uf(o);for(let u=0;s==null&&u<i.length;++u)s=of(i[u],l);return s}function Jc(e,n,a,t){n===void 0&&(n=[]),a===void 0&&(a=[]),t===void 0&&(t="");let r=(o,i,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(Y(l.relativePath.startsWith(t),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+t+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(t.length));let u=Pn([t,l.relativePath]),h=a.concat(l);o.children&&o.children.length>0&&(Y(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jc(o.children,n,h,u)),!(o.path==null&&!o.index)&&n.push({path:u,score:tf(u,o.index),routesMeta:h})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))r(o,i);else for(let l of Zc(o.path))r(o,i,l)}),n}function Zc(e){let n=e.split("/");if(n.length===0)return[];let[a,...t]=n,r=a.endsWith("?"),o=a.replace(/\?$/,"");if(t.length===0)return r?[o,""]:[o];let i=Zc(t.join("/")),s=[];return s.push(...i.map(l=>l===""?o:[o,l].join("/"))),r&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Kp(e){e.sort((n,a)=>n.score!==a.score?a.score-n.score:rf(n.routesMeta.map(t=>t.childrenIndex),a.routesMeta.map(t=>t.childrenIndex)))}const Xp=/^:[\w-]+$/,Jp=3,Zp=2,ef=1,nf=10,af=-2,bl=e=>e==="*";function tf(e,n){let a=e.split("/"),t=a.length;return a.some(bl)&&(t+=af),n&&(t+=Zp),a.filter(r=>!bl(r)).reduce((r,o)=>r+(Xp.test(o)?Jp:o===""?ef:nf),t)}function rf(e,n){return e.length===n.length&&e.slice(0,-1).every((t,r)=>t===n[r])?e[e.length-1]-n[n.length-1]:0}function of(e,n,a){let{routesMeta:t}=e,r={},o="/",i=[];for(let s=0;s<t.length;++s){let l=t[s],u=s===t.length-1,h=o==="/"?n:n.slice(o.length)||"/",p=sf({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),g=l.route;if(!p)return null;Object.assign(r,p.params),i.push({params:r,pathname:Pn([o,p.pathname]),pathnameBase:ff(Pn([o,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(o=Pn([o,p.pathnameBase]))}return i}function sf(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,t]=lf(e.path,e.caseSensitive,e.end),r=n.match(a);if(!r)return null;let o=r[0],i=o.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:t.reduce((u,h,p)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let A=s[p]||"";i=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const P=s[p];return y&&!P?u[g]=void 0:u[g]=(P||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function lf(e,n,a){n===void 0&&(n=!1),a===void 0&&(a=!0),Mr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let t=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(t.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(t.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),t]}function uf(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Mr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ps(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let a=n.endsWith("/")?n.length-1:n.length,t=e.charAt(a);return t&&t!=="/"?null:e.slice(a)||"/"}const cf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mf=e=>cf.test(e);function df(e,n){n===void 0&&(n="/");let{pathname:a,search:t="",hash:r=""}=typeof e=="string"?Hn(e):e,o;if(a)if(mf(a))o=a;else{if(a.includes("//")){let i=a;a=em(a),Mr(!1,"Pathnames cannot have embedded double slashes - normalizing "+(i+" -> "+a))}a.startsWith("/")?o=xl(a.substring(1),"/"):o=xl(a,n)}else o=n;return{pathname:o,search:hf(t),hash:gf(r)}}function xl(e,n){let a=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?a.length>1&&a.pop():r!=="."&&a.push(r)}),a.length>1?a.join("/"):"/"}function vo(e,n,a,t){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pf(e){return e.filter((n,a)=>a===0||n.route.path&&n.route.path.length>0)}function fs(e,n){let a=pf(e);return n?a.map((t,r)=>r===a.length-1?t.pathname:t.pathnameBase):a.map(t=>t.pathnameBase)}function hs(e,n,a,t){t===void 0&&(t=!1);let r;typeof e=="string"?r=Hn(e):(r=lt({},e),Y(!r.pathname||!r.pathname.includes("?"),vo("?","pathname","search",r)),Y(!r.pathname||!r.pathname.includes("#"),vo("#","pathname","hash",r)),Y(!r.search||!r.search.includes("#"),vo("#","search","hash",r)));let o=e===""||r.pathname==="",i=o?"/":r.pathname,s;if(i==null)s=a;else{let p=n.length-1;if(!t&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),p-=1;r.pathname=g.join("/")}s=p>=0?n[p]:"/"}let l=df(r,s),u=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&a.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const em=e=>e.replace(/\/\/+/g,"/"),Pn=e=>em(e.join("/")),ff=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const nm=["post","put","patch","delete"];new Set(nm);const yf=["get",...nm];new Set(yf);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ut(){return ut=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)({}).hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},ut.apply(null,arguments)}const gs=R.createContext(null),Af=R.createContext(null),En=R.createContext(null),zr=R.createContext(null),nn=R.createContext({outlet:null,matches:[],isDataRoute:!1}),am=R.createContext(null);function Pf(e,n){let{relative:a}=n===void 0?{}:n;Ta()||Y(!1);let{basename:t,navigator:r}=R.useContext(En),{hash:o,pathname:i,search:s}=om(e,{relative:a}),l=i;return t!=="/"&&(l=i==="/"?t:Pn([t,i])),r.createHref({pathname:l,search:s,hash:o})}function Ta(){return R.useContext(zr)!=null}function ht(){return Ta()||Y(!1),R.useContext(zr).location}function tm(e){R.useContext(En).static||R.useLayoutEffect(e)}function rm(){let{isDataRoute:e}=R.useContext(nn);return e?Df():wf()}function wf(){Ta()||Y(!1);let e=R.useContext(gs),{basename:n,future:a,navigator:t}=R.useContext(En),{matches:r}=R.useContext(nn),{pathname:o}=ht(),i=JSON.stringify(fs(r,a.v7_relativeSplatPath)),s=R.useRef(!1);return tm(()=>{s.current=!0}),R.useCallback(function(u,h){if(h===void 0&&(h={}),!s.current)return;if(typeof u=="number"){t.go(u);return}let p=hs(u,JSON.parse(i),o,h.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:Pn([n,p.pathname])),(h.replace?t.replace:t.push)(p,h.state,h)},[n,t,i,o,e])}function Rf(){let{matches:e}=R.useContext(nn),n=e[e.length-1];return n?n.params:{}}function om(e,n){let{relative:a}=n===void 0?{}:n,{future:t}=R.useContext(En),{matches:r}=R.useContext(nn),{pathname:o}=ht(),i=JSON.stringify(fs(r,t.v7_relativeSplatPath));return R.useMemo(()=>hs(e,JSON.parse(i),o,a==="path"),[e,i,o,a])}function Tf(e,n){return kf(e,n)}function kf(e,n,a,t){Ta()||Y(!1);let{navigator:r}=R.useContext(En),{matches:o}=R.useContext(nn),i=o[o.length-1],s=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let u=ht(),h;if(n){var p;let C=typeof n=="string"?Hn(n):n;l==="/"||(p=C.pathname)!=null&&p.startsWith(l)||Y(!1),h=C}else h=u;let g=h.pathname||"/",y=g;if(l!=="/"){let C=l.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let P=qp(e,{pathname:y}),A=If(P&&P.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Pn([l,r.encodeLocation?r.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:Pn([l,r.encodeLocation?r.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,a,t);return n&&A?R.createElement(zr.Provider,{value:{location:ut({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:mn.Pop}},A):A}function Cf(){let e=Uf(),n=vf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},n),a?R.createElement("pre",{style:r},a):null,null)}const Ef=R.createElement(Cf,null);class Sf extends R.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,a){return a.location!==n.location||a.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:a.error,location:a.location,revalidation:n.revalidation||a.revalidation}}componentDidCatch(n,a){console.error("React Router caught the following error during render",n,a)}render(){return this.state.error!==void 0?R.createElement(nn.Provider,{value:this.props.routeContext},R.createElement(am.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Of(e){let{routeContext:n,match:a,children:t}=e,r=R.useContext(gs);return r&&r.static&&r.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=a.route.id),R.createElement(nn.Provider,{value:n},t)}function If(e,n,a,t){var r;if(n===void 0&&(n=[]),a===void 0&&(a=null),t===void 0&&(t=null),e==null){var o;if(!a)return null;if(a.errors)e=a.matches;else if((o=t)!=null&&o.v7_partialHydration&&n.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let i=e,s=(r=a)==null?void 0:r.errors;if(s!=null){let h=i.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);h>=0||Y(!1),i=i.slice(0,Math.min(i.length,h+1))}let l=!1,u=-1;if(a&&t&&t.v7_partialHydration)for(let h=0;h<i.length;h++){let p=i[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=h),p.route.id){let{loaderData:g,errors:y}=a,P=p.route.loader&&g[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||P){l=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((h,p,g)=>{let y,P=!1,A=null,C=null;a&&(y=s&&p.route.id?s[p.route.id]:void 0,A=p.route.errorElement||Ef,l&&(u<0&&g===0?(Lf("route-fallback"),P=!0,C=null):u===g&&(P=!0,C=p.route.hydrateFallbackElement||null)));let m=n.concat(i.slice(0,g+1)),c=()=>{let d;return y?d=A:P?d=C:p.route.Component?d=R.createElement(p.route.Component,null):p.route.element?d=p.route.element:d=h,R.createElement(Of,{match:p,routeContext:{outlet:h,matches:m,isDataRoute:a!=null},children:d})};return a&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?R.createElement(Sf,{location:a.location,revalidation:a.revalidation,component:A,error:y,children:c(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):c()},null)}var im=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(im||{}),sm=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sm||{});function bf(e){let n=R.useContext(gs);return n||Y(!1),n}function xf(e){let n=R.useContext(Af);return n||Y(!1),n}function Nf(e){let n=R.useContext(nn);return n||Y(!1),n}function lm(e){let n=Nf(),a=n.matches[n.matches.length-1];return a.route.id||Y(!1),a.route.id}function Uf(){var e;let n=R.useContext(am),a=xf(),t=lm();return n!==void 0?n:(e=a.errors)==null?void 0:e[t]}function Df(){let{router:e}=bf(im.UseNavigateStable),n=lm(sm.UseNavigateStable),a=R.useRef(!1);return tm(()=>{a.current=!0}),R.useCallback(function(r,o){o===void 0&&(o={}),a.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,ut({fromRouteId:n},o)))},[e,n])}const Nl={};function Lf(e,n,a){Nl[e]||(Nl[e]=!0)}function _f(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Wf(e){let{to:n,replace:a,state:t,relative:r}=e;Ta()||Y(!1);let{future:o,static:i}=R.useContext(En),{matches:s}=R.useContext(nn),{pathname:l}=ht(),u=rm(),h=hs(n,fs(s,o.v7_relativeSplatPath),l,r==="path"),p=JSON.stringify(h);return R.useEffect(()=>u(JSON.parse(p),{replace:a,state:t,relative:r}),[u,p,r,a,t]),null}function Yn(e){Y(!1)}function Mf(e){let{basename:n="/",children:a=null,location:t,navigationType:r=mn.Pop,navigator:o,static:i=!1,future:s}=e;Ta()&&Y(!1);let l=n.replace(/^\/*/,"/"),u=R.useMemo(()=>({basename:l,navigator:o,static:i,future:ut({v7_relativeSplatPath:!1},s)}),[l,s,o,i]);typeof t=="string"&&(t=Hn(t));let{pathname:h="/",search:p="",hash:g="",state:y=null,key:P="default"}=t,A=R.useMemo(()=>{let C=ps(h,l);return C==null?null:{location:{pathname:C,search:p,hash:g,state:y,key:P},navigationType:r}},[l,h,p,g,y,P,r]);return A==null?null:R.createElement(En.Provider,{value:u},R.createElement(zr.Provider,{children:a,value:A}))}function zf(e){let{children:n,location:a}=e;return Tf(fi(n),a)}new Promise(()=>{});function fi(e,n){n===void 0&&(n=[]);let a=[];return R.Children.forEach(e,(t,r)=>{if(!R.isValidElement(t))return;let o=[...n,r];if(t.type===R.Fragment){a.push.apply(a,fi(t.props.children,o));return}t.type!==Yn&&Y(!1),!t.props.index||!t.props.children||Y(!1);let i={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:t.props.ErrorBoundary!=null||t.props.errorElement!=null,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(i.children=fi(t.props.children,o)),a.push(i)}),a}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)({}).hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},hi.apply(null,arguments)}function Bf(e,n){if(e==null)return{};var a={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(n.indexOf(t)!==-1)continue;a[t]=e[t]}return a}function Ff(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jf(e,n){return e.button===0&&(!n||n==="_self")&&!Ff(e)}const Vf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Gf="6";try{window.__reactRouterVersion=Gf}catch{}const Hf="startTransition",Ul=Um[Hf];function $f(e){let{basename:n,children:a,future:t,window:r}=e,o=R.useRef();o.current==null&&(o.current=Hp({window:r,v5Compat:!0}));let i=o.current,[s,l]=R.useState({action:i.action,location:i.location}),{v7_startTransition:u}=t||{},h=R.useCallback(p=>{u&&Ul?Ul(()=>l(p)):l(p)},[l,u]);return R.useLayoutEffect(()=>i.listen(h),[i,h]),R.useEffect(()=>_f(t),[t]),R.createElement(Mf,{basename:n,children:a,location:s.location,navigationType:s.action,navigator:i,future:t})}const Yf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jn=R.forwardRef(function(n,a){let{onClick:t,relative:r,reloadDocument:o,replace:i,state:s,target:l,to:u,preventScrollReset:h,viewTransition:p}=n,g=Bf(n,Vf),{basename:y}=R.useContext(En),P,A=!1;if(typeof u=="string"&&qf.test(u)&&(P=u,Yf))try{let d=new URL(window.location.href),v=u.startsWith("//")?new URL(d.protocol+u):new URL(u),T=ps(v.pathname,y);v.origin===d.origin&&T!=null?u=T+v.search+v.hash:A=!0}catch{}let C=Pf(u,{relative:r}),m=Qf(u,{replace:i,state:s,target:l,preventScrollReset:h,relative:r,viewTransition:p});function c(d){t&&t(d),d.defaultPrevented||m(d)}return R.createElement("a",hi({},g,{href:P||C,onClick:A||o?t:c,ref:a,target:l}))});var Dl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Dl||(Dl={}));var Ll;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ll||(Ll={}));function Qf(e,n){let{target:a,replace:t,state:r,preventScrollReset:o,relative:i,viewTransition:s}=n===void 0?{}:n,l=rm(),u=ht(),h=om(e,{relative:i});return R.useCallback(p=>{if(jf(p,a)){p.preventDefault();let g=t!==void 0?t:Pr(u)===Pr(h);l(e,{replace:g,state:r,preventScrollReset:o,relative:i,viewTransition:s})}},[u,l,h,t,r,a,e,o,i,s])}const Kf=`# Lesson 01 – Simple Present: Routines

## Vocabulário (20)
- Cold soda
- Hot chocolate
- Iced Lemonade
- Fresh coconut water
- Sweet milkshake
- Sparkling water
- Warm tea
- Natural juice
- Creamy smoothie
- Refreshing beer
- Crispy bacon
- Soft bread
- Spicy chicken
- Sweet pancakes
- Salty popcorn
- Fresh sushi
- Hot pizza
- Cold ice cream
- Tasty burger
- Creamy pasta

## Verbos
- To drink, To eat, To like

## Gramática
- A or An

## Preparação
- I drink _______
- I don't eat _____
- Do you like to eat _____?

## Homework
1. Do you drink sparkling water?
2. Do you like to eat salty sushi?
3. Do you like smoothie?
4. Do you eat creamy pasta?
5. Do you like to eat bacon?`,Xf=`# Lesson 02 – Simple Present: Chores & Needs

## Vocabulário (20)
- Dirty dishes
- Full trash can
- Wet floor
- Messy bedroom
- Clean laundry
- Empty fridge
- Broken lamp
- Open window
- Closed curtains
- Dead batteries
- Soap dispenser
- Broom and dustpan
- Vacuum cleaner
- Ironing board
- Washing machine
- Dish soap
- Trash bags
- Cleaning cloth
- Rubber gloves
- Laundry basket

## Verbos
- To need, To want, To clean, To take out, To organize, To buy

## Gramática
- What do you need? / What do you want?

## Preparação
- I need _______
- I don't want to clean _____
- Do you need to buy _____?

## Homework
1. Do you need to take out the trash?
2. What do you want to clean?
3. Do you need new trash bags?
4. What do you want to organize?
5. Do you need to buy dish soap?`,Jf=`# Lesson 03 - Simple Present: Morning Routines

## Vocabulário (20)
- Alarm clock
- Soft pillow
- Warm shower
- Clean towel
- Blue toothbrush
- Mint toothpaste
- School uniform
- Black shoes
- Bus stop
- Coffee mug
- Fried eggs
- Toast bread
- Office badge
- Lunch box
- Phone charger
- Bedroom mirror
- Hair brush
- Kitchen table
- Backpack zipper
- Front door

## Verbos
- To wake up, To brush, To get dressed, To pack, To leave

## Gramática
- Simple Present com rotina diaria e expressoes de tempo.

## Preparação
- I wake up _____
- I don't brush my teeth _____
- Do you leave home _____

## Homework
1. Do you wake up at six?
2. Do you brush your teeth before breakfast?
3. Do you leave home at seven?
4. Do you use alarm clock in your routine?
5. Can you make a sentence with soft pillow?
`,Zf=`# Lesson 04 - Simple Present: Free Time Habits

## Vocabulário (20)
- Funny movie
- Long series
- Pop playlist
- Soccer game
- Comic book
- Video game
- Running shoes
- Yoga mat
- Beach chair
- Cold lemonade
- Board game
- Family photo
- Music speaker
- Art class
- Dance lesson
- Park bench
- Tennis racket
- Story book
- Snack box
- Movie ticket

## Verbos
- To relax, To watch, To listen, To train, To read

## Gramática
- Adverbs of frequency: always, usually, sometimes, never.

## Preparação
- I watch a funny movie _____
- I don't listen to loud music _____
- Do you train at the park _____

## Homework
1. Do you watch a funny movie on Friday?
2. Do you listen to pop music at home?
3. Do you train at the park on weekends?
4. Do you use funny movie in your routine?
5. Can you make a sentence with long series?
`,eh=`# Lesson 05 - Simple Present 3rd: Family Routines

## Vocabulário (20)
- Busy mother
- Friendly father
- Young brother
- Kind sister
- Grandma apron
- Family car
- Office desk
- School notebook
- Dinner table
- Phone call
- Garden flowers
- Weekend lunch
- Clean garage
- Shopping list
- House keys
- Work shoes
- Coffee break
- TV remote
- Dog leash
- Rain jacket

## Verbos
- To cook, To drive, To work, To help, To call

## Gramática
- He / She + verb-s no Simple Present.

## Preparação
- My mother cooks dinner _____
- My father doesn't drive _____
- Does your sister help you _____

## Homework
1. Does your mother cook dinner every day?
2. Does your father drive to work at eight?
3. Does your sister help you with homework?
4. Do you use busy mother in your routine?
5. Can you make a sentence with friendly father?
`,nh=`# Lesson 06 - Simple Present 3rd: Workplace Habits

## Vocabulário (20)
- Office computer
- Meeting room
- Paper folder
- Company email
- Lunch break
- Glass elevator
- Reception desk
- Client list
- Printer paper
- Desk calendar
- Blue pen
- Water bottle
- Work laptop
- Name badge
- Coffee machine
- Office chair
- Project file
- Team message
- Phone headset
- Parking ticket

## Verbos
- To answer, To schedule, To check, To print, To arrive

## Gramática
- Perguntas com Does e negativas com does not.

## Preparação
- Lucas answers emails _____
- Ana doesn't schedule meetings _____
- Does the manager check the project _____

## Homework
1. Does Lucas answer emails every morning?
2. Does Ana schedule meetings on Tuesday?
3. Does the manager check the project file daily?
4. Do you use office computer in your routine?
5. Can you make a sentence with meeting room?
`,ah=`# Lesson 07 - Simple Present 3rd: Neighborhood Life

## Vocabulário (20)
- Corner bakery
- Small market
- Street vendor
- Green garden
- Mail box
- Front gate
- Bus driver
- Local park
- Trash truck
- Fruit stand
- Quiet street
- Dog walker
- Flower pot
- Milk bottle
- Morning newspaper
- Sidewalk bench
- City bus
- White fence
- Car wash
- Shop window

## Verbos
- To open, To close, To deliver, To sweep, To water

## Gramática
- Uso de he, she e it em frases curtas.

## Preparação
- The bakery opens _____
- The mailman doesn't deliver letters _____
- Does your neighbor water the plants _____

## Homework
1. Does the bakery open at seven?
2. Does the mailman deliver letters every day?
3. Does your neighbor water the plants at night?
4. Do you use corner bakery in your routine?
5. Can you make a sentence with small market?
`,th=`# Lesson 08 - Simple Present 3rd: Pets and Care

## Vocabulário (20)
- Happy dog
- Small cat
- Pet bowl
- Dog food
- Cat toy
- Short leash
- Pet shampoo
- Vet clinic
- Water dish
- Soft blanket
- Pet house
- Rubber ball
- Clean litter box
- Dog collar
- Park path
- Treat bag
- Animal brush
- Pet bed
- Open yard
- Blue carrier

## Verbos
- To feed, To walk, To sleep, To bark, To wash

## Gramática
- Perguntas curtas com Does he / Does she / Does it.

## Preparação
- Pedro feeds the dog _____
- The cat doesn't sleep in _____
- Does Marina walk her dog _____

## Homework
1. Does Pedro feed the dog every morning?
2. Does the cat sleep on the sofa?
3. Does Marina walk her dog after work?
4. Do you use happy dog in your routine?
5. Can you make a sentence with small cat?
`,rh=`# Lesson 11 - Simple Past: Weekend Activities

## Vocabulário (20)
- Beach trip
- Family lunch
- Clean kitchen
- Movie night
- Park walk
- Birthday cake
- City museum
- Photo album
- Bus ticket
- Rainy Sunday
- Coffee shop
- Sports game
- Phone photos
- Hotel room
- Street market
- Dinner plate
- Travel bag
- Museum guide
- Weekend plan
- Quiet afternoon

## Verbos
- To visit, To watch, To cook, To clean, To rest

## Gramática
- Simple Past regular com -ed em afirmativas.

## Preparação
- I visited my aunt _____
- I didn't watch TV _____
- Did you rest at home in _____

## Homework
1. Did you visit your aunt on Saturday?
2. Did you watch a movie last night?
3. Did you rest at home in the afternoon?
4. Do you use beach trip in your routine?
5. Can you make a sentence with family lunch?
`,oh=`# Lesson 12 - Simple Past: Last Vacation

## Vocabulário (20)
- Beach hotel
- Tour guide
- Travel ticket
- Sunny island
- Museum map
- City square
- Boat ride
- Hotel breakfast
- Travel passport
- Photo camera
- Street cafe
- Bus station
- Souvenir shop
- Ocean view
- Night market
- Travel journal
- Sand castle
- Pool chair
- Hotel key
- Travel backpack

## Verbos
- To travel, To stay, To walk, To enjoy, To rent

## Gramática
- Negativas e perguntas com did / didn't.

## Preparação
- I traveled to Bahia _____
- I didn't stay in a _____
- Did you walk on the beach _____

## Homework
1. Did you travel to Bahia in January?
2. Did you stay in a small hotel?
3. Did you walk on the beach every morning?
4. Do you use beach hotel in your routine?
5. Can you make a sentence with tour guide?
`,ih=`# Lesson 13 - Simple Past: Busy Day Yesterday

## Vocabulário (20)
- Late meeting
- Office report
- Dirty car
- Phone battery
- Lunch receipt
- Closed store
- Work email
- Kitchen sink
- Laundry soap
- Desk lamp
- City traffic
- Rainy street
- Bus card
- Phone charger
- Shopping bag
- Dinner pan
- Desk drawer
- Client message
- Family call
- Broken umbrella

## Verbos
- To finish, To answer, To organize, To wash, To call

## Gramática
- Time expressions: yesterday, last night, this morning.

## Preparação
- I finished work at _____
- I didn't organize the kitchen _____
- Did you call your friend _____

## Homework
1. Did you finish work at six yesterday?
2. Did you organize your desk last night?
3. Did you call your friend after dinner?
4. Do you use late meeting in your routine?
5. Can you make a sentence with office report?
`,sh=`# Lesson 14 - Simple Past: Party Preparation

## Vocabulário (20)
- Birthday balloons
- Party table
- Paper plates
- Fruit juice
- Music box
- Dance floor
- Birthday banner
- Party lights
- Guest list
- Chocolate cake
- Plastic cups
- Party hat
- Gift bag
- Photo booth
- Doorbell sound
- Snack tray
- Party speaker
- Late guest
- Clean living room
- Birthday candles

## Verbos
- To decorate, To invite, To arrive, To dance, To celebrate

## Gramática
- Simple Past regular com verbos de preparacao.

## Preparação
- I decorated the living _____
- I didn't invite _____
- Did you celebrate your birthday _____

## Homework
1. Did you decorate the living room yesterday?
2. Did you invite your cousins by phone?
3. Did you celebrate your birthday at home?
4. Do you use birthday balloons in your routine?
5. Can you make a sentence with party table?
`,lh=`# LESSON 01 – Simple Present: Food & Drinks

**Duração:** 60 minutos  
**Nível:** Iniciante (A1) – Primeira aula  
**Objetivo:** Apresentar o Simple Present com os verbos **EAT**, **DRINK** e **LIKE**, usando substantivos + adjetivos.

---

## VOCABULÁRIO (20 palavras)
- Cold soda
- Hot chocolate
- Iced Lemonade
- Fresh coconut water
- Sweet milkshake
- Sparkling water
- Warm tea
- Natural juice
- Creamy smoothie
- Refreshing beer
- Crispy bacon
- Soft bread
- Spicy chicken
- Sweet pancakes
- Salty popcorn
- Fresh sushi
- Hot pizza
- Cold ice cream
- Tasty burger
- Creamy pasta

## VERBOS DA AULA

- **TO EAT** (comer)
- **TO DRINK** (beber)
- **TO LIKE** (gostar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I drink cold soda. | I don't drink cold soda. | Do you drink cold soda? |
| I eat hot pizza. | I don't eat hot pizza. | Do you eat hot pizza? |
| I like sweet pancakes. | I don't like sweet pancakes. | Do you like sweet pancakes? |

## CRONOGRAMA DA AULA


### 1. WARM-UP (5 minutos)

**Atividade:** Apresentar imagens de comidas e bebidas.

- Professor mostra a imagem e pergunta: *"What is this?"*
- Alunos respondem em português ou inglês.
- Professor apresenta o nome em inglês e o adjetivo.

**Exemplo:**
- Mostra imagem de pizza → *"It's pizza. Hot pizza."*
- Mostra imagem de soda → *"It's soda. Cold soda."*

**Objetivo:** Apresentar o vocabulário de forma visual e contextualizada.

### 2. VOCABULARY PRESENTATION (10 minutos)

**Passo 1 (5 min):** Professor apresenta a tabela de vocabulário.

- Lê cada par em voz alta.
- Alunos repetem em coro.

**Exemplo:**
- Professor: *"Cold soda"*
- Alunos: *"Cold soda"*
- Professor: *"Hot chocolate"*
- Alunos: *"Hot chocolate"*

### 3. GRAMMAR FOCUS – A / AN (10 minutos)

**Explicação no quadro:**

| Regra | Exemplo |
|-------|---------|
| **A** + som de CONSOANTE | a cold soda, a hot pizza |
| **AN** + som de VOGAL (a, e, i, o, u) | an iced lemonade, an ice cream |

**ATENÇÃO:** A regra é pelo **som**, não pela letra!

- ✓ a fresh sushi (som de consoante /s/)
- ✓ an iced tea (som de vogal /ai/)

**Prática rápida (5 min):**

Professor fala o par. Alunos levantam a mão:
- Direita = **A**
- Esquerda = **AN**

| Item | Resposta |
|------|----------|
| ___ cold soda | A |
| ___ iced lemonade | AN |
| ___ hot pizza | A |
| ___ sweet ice cream | AN |
| ___ fresh sushi | A |

### 4. STRUCTURE PRESENTATION (10 minutos)

**Quadro com as 3 estruturas:**

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I drink cold soda. | I don't drink cold soda. | Do you drink cold soda? |
| I eat hot pizza. | I don't eat hot pizza. | Do you eat hot pizza? |
| I like sweet pancakes. | I don't like sweet pancakes. | Do you like sweet pancakes? |

**Explicação:**

- **Afirmativa:** *I + verbo + a/an + adjetivo + substantivo*
- **Negativa:** *I + don't + verbo + a/an + adjetivo + substantivo*
- **Pergunta:** *Do + you + verbo + a/an + adjetivo + substantivo?*

**Respostas para perguntas:**
- *Yes, I ...*
- *No, I don't...*

**Perguntas:**
- *Do you drink cold soda?*
- *Do you drink iced lemonade?*
- *Do you eat spicy chicken?*

### 5. CONTROLLED PRACTICE (10 minutos)

1. *Do you like creamy pasta?*
2. *Do you drink warm tea?*
3. *Do you like fresh sushi?*

**Exemplo de diálogo:**

> A: *Do you drink cold soda?*  
> B: *Yes, I do. Do you eat hot pizza?*  
> A: *No, I don't. I like sweet pancakes.*

**Professor circula pela sala ajudando e corrigindo.**

### 7. WRAP-UP (5 minutos)

**Revisão rápida:**

Professor pergunta a 3 alunos aleatórios:

1. *Do you eat hot pizza?*
2. *Do you like sweet pancakes?*

**Recapitulação no quadro:**

- Afirmativa: *I drink cold soda.*
- Negativa: *I don't drink cold soda.*
- Pergunta: *Do you drink cold soda?*
- Respostas: *Yes, I do. / No, I don't.*

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Quebra-gelo  |
| Vocabulary | 10 min | Repetição |
| Grammar: A/AN | 10 min | Explicação e prática com gestos |
| Structure | 10 min | Afirmativa, negativa, pergunta |
| Controlled Practice | 20 min | Preenchimento de lacunas |
| Wrap-up | 5 min | Revisão e homework |
`,uh=`# LESSON 02 - Simple Present: Chores & Needs

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar o Simple Present com need, want e tarefas domesticas simples.

---

## VOCABULÁRIO (20 palavras)
- Dirty dishes
- Full trash can
- Wet floor
- Messy bedroom
- Clean laundry
- Empty fridge
- Broken lamp
- Open window
- Closed curtains
- Dead batteries
- Soap dispenser
- Broom and dustpan
- Vacuum cleaner
- Ironing board
- Washing machine
- Dish soap
- Trash bags
- Cleaning cloth
- Rubber gloves
- Laundry basket

## VERBOS DA AULA

- **TO NEED** (precisar)
- **TO WANT** (querer)
- **TO CLEAN** (limpar)
- **TO TAKE OUT** (levar para fora)
- **TO ORGANIZE** (organizar)
- **TO BUY** (comprar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I need trash bags. | I don't need trash bags. | Do you need trash bags? |
| I want to clean the kitchen. | I don't want to clean the kitchen. | Do you want to clean the kitchen? |
| I organize the laundry basket. | I don't organize the laundry basket now. | Do you organize the laundry basket? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema chores & needs com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** What do you need? / What do you want?

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I need trash bags. | I don't need trash bags. | Do you need trash bags? |
| I want to clean the kitchen. | I don't want to clean the kitchen. | Do you want to clean the kitchen? |
| I organize the laundry basket. | I don't organize the laundry basket now. | Do you organize the laundry basket? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Do you need trash bags?
2. Do you want to clean the kitchen?
3. Do you organize the laundry basket?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Do you need trash bags?
2. Do you want to clean the kitchen?
3. Do you organize the laundry basket?
4. Do you use dirty dishes in your routine?
5. Can you make a sentence with full trash can?

## WRAP-UP

- Professor revisa o foco gramatical: What do you need? / What do you want?
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,ch=`# LESSON 03 - Simple Present: Morning Routines

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Apresentar o Simple Present com rotinas da manha e horarios basicos.

---

## VOCABULÁRIO (20 palavras)
- Alarm clock
- Soft pillow
- Warm shower
- Clean towel
- Blue toothbrush
- Mint toothpaste
- School uniform
- Black shoes
- Bus stop
- Coffee mug
- Fried eggs
- Toast bread
- Office badge
- Lunch box
- Phone charger
- Bedroom mirror
- Hair brush
- Kitchen table
- Backpack zipper
- Front door

## VERBOS DA AULA

- **TO WAKE UP** (acordar)
- **TO BRUSH** (escovar)
- **TO GET DRESSED** (vestir-se)
- **TO PACK** (arrumar)
- **TO LEAVE** (sair)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I wake up at six. | I don't wake up late. | Do you wake up at six? |
| I brush my teeth before breakfast. | I don't brush my teeth after lunch. | Do you brush your teeth before breakfast? |
| I leave home at seven. | I don't leave home at eight. | Do you leave home at seven? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema morning routines com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Simple Present com rotina diaria e expressoes de tempo.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I wake up at six. | I don't wake up late. | Do you wake up at six? |
| I brush my teeth before breakfast. | I don't brush my teeth after lunch. | Do you brush your teeth before breakfast? |
| I leave home at seven. | I don't leave home at eight. | Do you leave home at seven? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Do you wake up at six?
2. Do you brush your teeth before breakfast?
3. Do you leave home at seven?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Do you wake up at six?
2. Do you brush your teeth before breakfast?
3. Do you leave home at seven?
4. Do you use alarm clock in your routine?
5. Can you make a sentence with soft pillow?

## WRAP-UP

- Professor revisa o foco gramatical: Simple Present com rotina diaria e expressoes de tempo.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,mh=`# LESSON 04 - Simple Present: Free Time Habits

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar o Simple Present com hobbies e frequencia no tempo livre.

---

## VOCABULÁRIO (20 palavras)
- Funny movie
- Long series
- Pop playlist
- Soccer game
- Comic book
- Video game
- Running shoes
- Yoga mat
- Beach chair
- Cold lemonade
- Board game
- Family photo
- Music speaker
- Art class
- Dance lesson
- Park bench
- Tennis racket
- Story book
- Snack box
- Movie ticket

## VERBOS DA AULA

- **TO RELAX** (relaxar)
- **TO WATCH** (assistir)
- **TO LISTEN** (ouvir)
- **TO TRAIN** (treinar)
- **TO READ** (ler)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I watch a funny movie on Friday. | I don't watch TV in the morning. | Do you watch a funny movie on Friday? |
| I listen to pop music at home. | I don't listen to loud music at work. | Do you listen to pop music at home? |
| I train at the park on weekends. | I don't train at night. | Do you train at the park on weekends? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema free time habits com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Adverbs of frequency: always, usually, sometimes, never.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I watch a funny movie on Friday. | I don't watch TV in the morning. | Do you watch a funny movie on Friday? |
| I listen to pop music at home. | I don't listen to loud music at work. | Do you listen to pop music at home? |
| I train at the park on weekends. | I don't train at night. | Do you train at the park on weekends? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Do you watch a funny movie on Friday?
2. Do you listen to pop music at home?
3. Do you train at the park on weekends?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Do you watch a funny movie on Friday?
2. Do you listen to pop music at home?
3. Do you train at the park on weekends?
4. Do you use funny movie in your routine?
5. Can you make a sentence with long series?

## WRAP-UP

- Professor revisa o foco gramatical: Adverbs of frequency: always, usually, sometimes, never.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,dh=`# LESSON 05 - Simple Present 3rd: Family Routines

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir a terceira pessoa no Simple Present com rotinas de familiares.

---

## VOCABULÁRIO (20 palavras)
- Busy mother
- Friendly father
- Young brother
- Kind sister
- Grandma apron
- Family car
- Office desk
- School notebook
- Dinner table
- Phone call
- Garden flowers
- Weekend lunch
- Clean garage
- Shopping list
- House keys
- Work shoes
- Coffee break
- TV remote
- Dog leash
- Rain jacket

## VERBOS DA AULA

- **TO COOK** (cozinhar)
- **TO DRIVE** (dirigir)
- **TO WORK** (trabalhar)
- **TO HELP** (ajudar)
- **TO CALL** (ligar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| My mother cooks dinner every day. | My mother doesn't cook lunch at work. | Does your mother cook dinner every day? |
| My father drives to work at eight. | My father doesn't drive on Sunday. | Does your father drive to work at eight? |
| My sister helps me with homework. | My sister doesn't help me at night. | Does your sister help you with homework? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema family routines com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** He / She + verb-s no Simple Present.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| My mother cooks dinner every day. | My mother doesn't cook lunch at work. | Does your mother cook dinner every day? |
| My father drives to work at eight. | My father doesn't drive on Sunday. | Does your father drive to work at eight? |
| My sister helps me with homework. | My sister doesn't help me at night. | Does your sister help you with homework? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Does your mother cook dinner every day?
2. Does your father drive to work at eight?
3. Does your sister help you with homework?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Does your mother cook dinner every day?
2. Does your father drive to work at eight?
3. Does your sister help you with homework?
4. Do you use busy mother in your routine?
5. Can you make a sentence with friendly father?

## WRAP-UP

- Professor revisa o foco gramatical: He / She + verb-s no Simple Present.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,ph=`# LESSON 06 - Simple Present 3rd: Workplace Habits

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar a terceira pessoa com rotinas de trabalho e escritorio.

---

## VOCABULÁRIO (20 palavras)
- Office computer
- Meeting room
- Paper folder
- Company email
- Lunch break
- Glass elevator
- Reception desk
- Client list
- Printer paper
- Desk calendar
- Blue pen
- Water bottle
- Work laptop
- Name badge
- Coffee machine
- Office chair
- Project file
- Team message
- Phone headset
- Parking ticket

## VERBOS DA AULA

- **TO ANSWER** (responder)
- **TO SCHEDULE** (agendar)
- **TO CHECK** (verificar)
- **TO PRINT** (imprimir)
- **TO ARRIVE** (chegar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| Lucas answers emails every morning. | Lucas doesn't answer emails at home. | Does Lucas answer emails every morning? |
| Ana schedules meetings on Tuesday. | Ana doesn't schedule meetings on Sunday. | Does Ana schedule meetings on Tuesday? |
| The manager checks the project file daily. | The manager doesn't check the file at night. | Does the manager check the project file daily? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema workplace habits com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Perguntas com Does e negativas com does not.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| Lucas answers emails every morning. | Lucas doesn't answer emails at home. | Does Lucas answer emails every morning? |
| Ana schedules meetings on Tuesday. | Ana doesn't schedule meetings on Sunday. | Does Ana schedule meetings on Tuesday? |
| The manager checks the project file daily. | The manager doesn't check the file at night. | Does the manager check the project file daily? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Does Lucas answer emails every morning?
2. Does Ana schedule meetings on Tuesday?
3. Does the manager check the project file daily?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Does Lucas answer emails every morning?
2. Does Ana schedule meetings on Tuesday?
3. Does the manager check the project file daily?
4. Do you use office computer in your routine?
5. Can you make a sentence with meeting room?

## WRAP-UP

- Professor revisa o foco gramatical: Perguntas com Does e negativas com does not.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,fh=`# LESSON 07 - Simple Present 3rd: Neighborhood Life

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar a terceira pessoa com acoes de vizinhos e comunidade.

---

## VOCABULÁRIO (20 palavras)
- Corner bakery
- Small market
- Street vendor
- Green garden
- Mail box
- Front gate
- Bus driver
- Local park
- Trash truck
- Fruit stand
- Quiet street
- Dog walker
- Flower pot
- Milk bottle
- Morning newspaper
- Sidewalk bench
- City bus
- White fence
- Car wash
- Shop window

## VERBOS DA AULA

- **TO OPEN** (abrir)
- **TO CLOSE** (fechar)
- **TO DELIVER** (entregar)
- **TO SWEEP** (varrer)
- **TO WATER** (regar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| The bakery opens at seven. | The bakery doesn't open at ten. | Does the bakery open at seven? |
| The mailman delivers letters every day. | The mailman doesn't deliver letters on Sunday. | Does the mailman deliver letters every day? |
| My neighbor waters the plants at night. | My neighbor doesn't water the plants at noon. | Does your neighbor water the plants at night? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema neighborhood life com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Uso de he, she e it em frases curtas.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| The bakery opens at seven. | The bakery doesn't open at ten. | Does the bakery open at seven? |
| The mailman delivers letters every day. | The mailman doesn't deliver letters on Sunday. | Does the mailman deliver letters every day? |
| My neighbor waters the plants at night. | My neighbor doesn't water the plants at noon. | Does your neighbor water the plants at night? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Does the bakery open at seven?
2. Does the mailman deliver letters every day?
3. Does your neighbor water the plants at night?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Does the bakery open at seven?
2. Does the mailman deliver letters every day?
3. Does your neighbor water the plants at night?
4. Do you use corner bakery in your routine?
5. Can you make a sentence with small market?

## WRAP-UP

- Professor revisa o foco gramatical: Uso de he, she e it em frases curtas.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,hh=`# LESSON 08 - Simple Present 3rd: Pets and Care

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Expandir a terceira pessoa com cuidados diários de animais.

---

## VOCABULÁRIO (20 palavras)
- Happy dog
- Small cat
- Pet bowl
- Dog food
- Cat toy
- Short leash
- Pet shampoo
- Vet clinic
- Water dish
- Soft blanket
- Pet house
- Rubber ball
- Clean litter box
- Dog collar
- Park path
- Treat bag
- Animal brush
- Pet bed
- Open yard
- Blue carrier

## VERBOS DA AULA

- **TO FEED** (alimentar)
- **TO WALK** (caminhar)
- **TO SLEEP** (dormir)
- **TO BARK** (latir)
- **TO WASH** (lavar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| Pedro feeds the dog every morning. | Pedro doesn't feed the dog at midnight. | Does Pedro feed the dog every morning? |
| The cat sleeps on the sofa. | The cat doesn't sleep in the yard. | Does the cat sleep on the sofa? |
| Marina walks her dog after work. | Marina doesn't walk her dog before school. | Does Marina walk her dog after work? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema pets and care com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Perguntas curtas com Does he / Does she / Does it.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| Pedro feeds the dog every morning. | Pedro doesn't feed the dog at midnight. | Does Pedro feed the dog every morning? |
| The cat sleeps on the sofa. | The cat doesn't sleep in the yard. | Does the cat sleep on the sofa? |
| Marina walks her dog after work. | Marina doesn't walk her dog before school. | Does Marina walk her dog after work? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Does Pedro feed the dog every morning?
2. Does the cat sleep on the sofa?
3. Does Marina walk her dog after work?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Does Pedro feed the dog every morning?
2. Does the cat sleep on the sofa?
3. Does Marina walk her dog after work?
4. Do you use happy dog in your routine?
5. Can you make a sentence with small cat?

## WRAP-UP

- Professor revisa o foco gramatical: Perguntas curtas com Does he / Does she / Does it.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,gh=`# LESSON 09 - Revisao 1: Simple Present Review

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Revisar rotinas, terceira pessoa e vocabulario das primeiras unidades.

---

## VOCABULÁRIO (20 palavras)
- Cold soda
- Dirty dishes
- Alarm clock
- Funny movie
- Busy mother
- Office computer
- Corner bakery
- Happy dog
- Warm shower
- Pop playlist
- Grandma apron
- Meeting room
- Flower pot
- Pet bowl
- Lunch box
- Movie ticket
- Work laptop
- Dog collar
- Trash bags
- Phone call

## VERBOS DA AULA

- **TO REVIEW** (revisar)
- **TO ANSWER** (responder)
- **TO COMPARE** (comparar)
- **TO CORRECT** (corrigir)
- **TO REPEAT** (repetir)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I review my notes in class. | I don't review at home today. | Do you review your notes in class? |
| She answers the exercise carefully. | She doesn't answer too fast. | Does she answer the exercise carefully? |
| We repeat the questions together. | We don't repeat the answers alone. | Do you repeat the questions together? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema simple present review com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Revisao de do, does, don't e doesn't.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I review my notes in class. | I don't review at home today. | Do you review your notes in class? |
| She answers the exercise carefully. | She doesn't answer too fast. | Does she answer the exercise carefully? |
| We repeat the questions together. | We don't repeat the answers alone. | Do you repeat the questions together? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Do you review your notes in class?
2. Does she answer the exercise carefully?
3. Do you repeat the questions together?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Do you review your notes in class?
2. Does she answer the exercise carefully?
3. Do you repeat the questions together?
4. Do you use cold soda in your routine?
5. Can you make a sentence with dirty dishes?

## WRAP-UP

- Professor revisa o foco gramatical: Revisao de do, does, don't e doesn't.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,vh=`# LESSON 10 - Prova 1: Simple Present Assessment

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Avaliar o uso de Simple Present, terceira pessoa e vocabulario inicial.

---

## VOCABULÁRIO (20 palavras)
- Answer sheet
- Pencil case
- Quiet classroom
- Test paper
- School desk
- Blue eraser
- Wall clock
- Simple question
- Correct answer
- Short sentence
- Listening task
- Reading text
- Grammar chart
- Teacher table
- Student badge
- Black marker
- Notebook page
- Practice line
- Exam folder
- Water bottle

## VERBOS DA AULA

- **TO COMPLETE** (completar)
- **TO IDENTIFY** (identificar)
- **TO MARK** (marcar)
- **TO WRITE** (escrever)
- **TO CHECK** (verificar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I complete the test calmly. | I don't complete the test in five minutes. | Do you complete the test calmly? |
| The student writes short answers. | The student doesn't write in Portuguese. | Does the student write short answers? |
| The teacher checks the answer sheet. | The teacher doesn't check the paper during the first minute. | Does the teacher check the answer sheet? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema simple present assessment com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Leitura, escrita e perguntas curtas no Simple Present.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I complete the test calmly. | I don't complete the test in five minutes. | Do you complete the test calmly? |
| The student writes short answers. | The student doesn't write in Portuguese. | Does the student write short answers? |
| The teacher checks the answer sheet. | The teacher doesn't check the paper during the first minute. | Does the teacher check the answer sheet? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Do you complete the test calmly?
2. Does the student write short answers?
3. Does the teacher check the answer sheet?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Do you complete the test calmly?
2. Does the student write short answers?
3. Does the teacher check the answer sheet?
4. Do you use answer sheet in your routine?
5. Can you make a sentence with pencil case?

## WRAP-UP

- Professor revisa o foco gramatical: Leitura, escrita e perguntas curtas no Simple Present.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,yh=`# LESSON 11 - Simple Past: Weekend Activities

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir o Simple Past regular com acoes concluídas no fim de semana.

---

## VOCABULÁRIO (20 palavras)
- Beach trip
- Family lunch
- Clean kitchen
- Movie night
- Park walk
- Birthday cake
- City museum
- Photo album
- Bus ticket
- Rainy Sunday
- Coffee shop
- Sports game
- Phone photos
- Hotel room
- Street market
- Dinner plate
- Travel bag
- Museum guide
- Weekend plan
- Quiet afternoon

## VERBOS DA AULA

- **TO VISIT** (visitar)
- **TO WATCH** (assistir)
- **TO COOK** (cozinhar)
- **TO CLEAN** (limpar)
- **TO REST** (descansar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I visited my aunt on Saturday. | I didn't visit my aunt on Sunday. | Did you visit your aunt on Saturday? |
| I watched a movie last night. | I didn't watch TV after midnight. | Did you watch a movie last night? |
| I rested at home in the afternoon. | I didn't rest at the office. | Did you rest at home in the afternoon? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema weekend activities com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Simple Past regular com -ed em afirmativas.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I visited my aunt on Saturday. | I didn't visit my aunt on Sunday. | Did you visit your aunt on Saturday? |
| I watched a movie last night. | I didn't watch TV after midnight. | Did you watch a movie last night? |
| I rested at home in the afternoon. | I didn't rest at the office. | Did you rest at home in the afternoon? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Did you visit your aunt on Saturday?
2. Did you watch a movie last night?
3. Did you rest at home in the afternoon?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Did you visit your aunt on Saturday?
2. Did you watch a movie last night?
3. Did you rest at home in the afternoon?
4. Do you use beach trip in your routine?
5. Can you make a sentence with family lunch?

## WRAP-UP

- Professor revisa o foco gramatical: Simple Past regular com -ed em afirmativas.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Ah=`# LESSON 12 - Simple Past: Last Vacation

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar o passado regular com viagens e ferias.

---

## VOCABULÁRIO (20 palavras)
- Beach hotel
- Tour guide
- Travel ticket
- Sunny island
- Museum map
- City square
- Boat ride
- Hotel breakfast
- Travel passport
- Photo camera
- Street cafe
- Bus station
- Souvenir shop
- Ocean view
- Night market
- Travel journal
- Sand castle
- Pool chair
- Hotel key
- Travel backpack

## VERBOS DA AULA

- **TO TRAVEL** (viajar)
- **TO STAY** (ficar)
- **TO WALK** (caminhar)
- **TO ENJOY** (aproveitar)
- **TO RENT** (alugar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I traveled to Bahia in January. | I didn't travel in February. | Did you travel to Bahia in January? |
| I stayed in a small hotel. | I didn't stay in a big resort. | Did you stay in a small hotel? |
| I walked on the beach every morning. | I didn't walk at night. | Did you walk on the beach every morning? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema last vacation com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Negativas e perguntas com did / didn't.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I traveled to Bahia in January. | I didn't travel in February. | Did you travel to Bahia in January? |
| I stayed in a small hotel. | I didn't stay in a big resort. | Did you stay in a small hotel? |
| I walked on the beach every morning. | I didn't walk at night. | Did you walk on the beach every morning? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Did you travel to Bahia in January?
2. Did you stay in a small hotel?
3. Did you walk on the beach every morning?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Did you travel to Bahia in January?
2. Did you stay in a small hotel?
3. Did you walk on the beach every morning?
4. Do you use beach hotel in your routine?
5. Can you make a sentence with tour guide?

## WRAP-UP

- Professor revisa o foco gramatical: Negativas e perguntas com did / didn't.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Ph=`# LESSON 13 - Simple Past: Busy Day Yesterday

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar o passado regular com sequencia de acoes do dia anterior.

---

## VOCABULÁRIO (20 palavras)
- Late meeting
- Office report
- Dirty car
- Phone battery
- Lunch receipt
- Closed store
- Work email
- Kitchen sink
- Laundry soap
- Desk lamp
- City traffic
- Rainy street
- Bus card
- Phone charger
- Shopping bag
- Dinner pan
- Desk drawer
- Client message
- Family call
- Broken umbrella

## VERBOS DA AULA

- **TO FINISH** (terminar)
- **TO ANSWER** (responder)
- **TO ORGANIZE** (organizar)
- **TO WASH** (lavar)
- **TO CALL** (ligar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I finished work at six yesterday. | I didn't finish work at eight. | Did you finish work at six yesterday? |
| I organized my desk last night. | I didn't organize the kitchen last night. | Did you organize your desk last night? |
| I called my friend after dinner. | I didn't call my friend before lunch. | Did you call your friend after dinner? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema busy day yesterday com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Time expressions: yesterday, last night, this morning.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I finished work at six yesterday. | I didn't finish work at eight. | Did you finish work at six yesterday? |
| I organized my desk last night. | I didn't organize the kitchen last night. | Did you organize your desk last night? |
| I called my friend after dinner. | I didn't call my friend before lunch. | Did you call your friend after dinner? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Did you finish work at six yesterday?
2. Did you organize your desk last night?
3. Did you call your friend after dinner?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Did you finish work at six yesterday?
2. Did you organize your desk last night?
3. Did you call your friend after dinner?
4. Do you use late meeting in your routine?
5. Can you make a sentence with office report?

## WRAP-UP

- Professor revisa o foco gramatical: Time expressions: yesterday, last night, this morning.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,wh=`# LESSON 14 - Simple Past: Party Preparation

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar o passado regular com compras, preparacao e eventos.

---

## VOCABULÁRIO (20 palavras)
- Birthday balloons
- Party table
- Paper plates
- Fruit juice
- Music box
- Dance floor
- Birthday banner
- Party lights
- Guest list
- Chocolate cake
- Plastic cups
- Party hat
- Gift bag
- Photo booth
- Doorbell sound
- Snack tray
- Party speaker
- Late guest
- Clean living room
- Birthday candles

## VERBOS DA AULA

- **TO DECORATE** (decorar)
- **TO INVITE** (convidar)
- **TO ARRIVE** (chegar)
- **TO DANCE** (dancar)
- **TO CELEBRATE** (celebrar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I decorated the living room yesterday. | I didn't decorate the kitchen. | Did you decorate the living room yesterday? |
| I invited my cousins by phone. | I didn't invite my boss. | Did you invite your cousins by phone? |
| We celebrated my birthday at home. | We didn't celebrate at a restaurant. | Did you celebrate your birthday at home? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema party preparation com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Simple Past regular com verbos de preparacao.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I decorated the living room yesterday. | I didn't decorate the kitchen. | Did you decorate the living room yesterday? |
| I invited my cousins by phone. | I didn't invite my boss. | Did you invite your cousins by phone? |
| We celebrated my birthday at home. | We didn't celebrate at a restaurant. | Did you celebrate your birthday at home? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Did you decorate the living room yesterday?
2. Did you invite your cousins by phone?
3. Did you celebrate your birthday at home?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Did you decorate the living room yesterday?
2. Did you invite your cousins by phone?
3. Did you celebrate your birthday at home?
4. Do you use birthday balloons in your routine?
5. Can you make a sentence with party table?

## WRAP-UP

- Professor revisa o foco gramatical: Simple Past regular com verbos de preparacao.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Rh=`# LESSON 15 - Simple Past Irregular: City Errands

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir verbos irregulares no passado em tarefas da cidade.

---

## VOCABULÁRIO (20 palavras)
- Bank line
- Bus card
- Market bag
- New shoes
- Fresh bread
- Bus stop
- Cash wallet
- Store receipt
- City center
- Taxi ride
- Phone credit
- Train station
- Gift card
- Cold rain
- Street sign
- Bakery counter
- Shopping mall
- Cash register
- Bus ticket
- Umbrella stand

## VERBOS DA AULA

- **TO GO** (ir)
- **TO BUY** (comprar)
- **TO GET** (chegar/obter)
- **TO COME** (vir)
- **TO PAY** (pagar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I went to the bank this morning. | I didn't go to the mall. | Did you go to the bank this morning? |
| I bought fresh bread after work. | I didn't buy a cake. | Did you buy fresh bread after work? |
| I got home at eight last night. | I didn't get home at ten. | Did you get home at eight last night? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema city errands com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Simple Past irregular: go, buy, get, come.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I went to the bank this morning. | I didn't go to the mall. | Did you go to the bank this morning? |
| I bought fresh bread after work. | I didn't buy a cake. | Did you buy fresh bread after work? |
| I got home at eight last night. | I didn't get home at ten. | Did you get home at eight last night? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Did you go to the bank this morning?
2. Did you buy fresh bread after work?
3. Did you get home at eight last night?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Did you go to the bank this morning?
2. Did you buy fresh bread after work?
3. Did you get home at eight last night?
4. Do you use bank line in your routine?
5. Can you make a sentence with bus card?

## WRAP-UP

- Professor revisa o foco gramatical: Simple Past irregular: go, buy, get, come.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Th=`# LESSON 16 - Simple Past Irregular: Special Memories

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar verbos irregulares de experiencia e lembrancas.

---

## VOCABULÁRIO (20 palavras)
- Old friend
- Family photo
- School reunion
- Warm hug
- Coffee shop
- Birthday gift
- Handmade card
- Family dinner
- Weekend message
- Photo frame
- Bus ride
- Movie poster
- Small present
- Happy tears
- Phone selfie
- Nice surprise
- Sunday lunch
- Blue notebook
- Long conversation
- Sweet dessert

## VERBOS DA AULA

- **TO SEE** (ver)
- **TO MEET** (encontrar)
- **TO HAVE** (ter)
- **TO MAKE** (fazer)
- **TO GIVE** (dar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I saw my cousin on Sunday. | I didn't see my teacher. | Did you see your cousin on Sunday? |
| I met an old friend downtown. | I didn't meet my boss downtown. | Did you meet an old friend downtown? |
| I had dinner with my family. | I didn't have dinner alone. | Did you have dinner with your family? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema special memories com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Simple Past irregular: see, meet, have, make.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I saw my cousin on Sunday. | I didn't see my teacher. | Did you see your cousin on Sunday? |
| I met an old friend downtown. | I didn't meet my boss downtown. | Did you meet an old friend downtown? |
| I had dinner with my family. | I didn't have dinner alone. | Did you have dinner with your family? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Did you see your cousin on Sunday?
2. Did you meet an old friend downtown?
3. Did you have dinner with your family?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Did you see your cousin on Sunday?
2. Did you meet an old friend downtown?
3. Did you have dinner with your family?
4. Do you use old friend in your routine?
5. Can you make a sentence with family photo?

## WRAP-UP

- Professor revisa o foco gramatical: Simple Past irregular: see, meet, have, make.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,kh=`# LESSON 17 - Simple Past Irregular: Unexpected Problems

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar o passado irregular com situacoes inesperadas.

---

## VOCABULÁRIO (20 palavras)
- Lost wallet
- Broken phone
- House key
- Train ticket
- Office bag
- Street corner
- Taxi driver
- Phone screen
- Small problem
- Police station
- Work document
- City map
- Plastic bottle
- Bus seat
- Heavy backpack
- Important message
- Late bus
- Wet sidewalk
- Coffee stain
- Travel card

## VERBOS DA AULA

- **TO LOSE** (perder)
- **TO FIND** (encontrar)
- **TO BREAK** (quebrar)
- **TO TAKE** (tirar/pegar)
- **TO TELL** (contar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I lost my wallet on the bus. | I didn't lose my phone. | Did you lose your wallet on the bus? |
| I found my keys in the kitchen. | I didn't find my keys in the car. | Did you find your keys in the kitchen? |
| I took a taxi after work. | I didn't take the train. | Did you take a taxi after work? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema unexpected problems com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Simple Past irregular: lose, find, break, take.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I lost my wallet on the bus. | I didn't lose my phone. | Did you lose your wallet on the bus? |
| I found my keys in the kitchen. | I didn't find my keys in the car. | Did you find your keys in the kitchen? |
| I took a taxi after work. | I didn't take the train. | Did you take a taxi after work? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Did you lose your wallet on the bus?
2. Did you find your keys in the kitchen?
3. Did you take a taxi after work?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Did you lose your wallet on the bus?
2. Did you find your keys in the kitchen?
3. Did you take a taxi after work?
4. Do you use lost wallet in your routine?
5. Can you make a sentence with broken phone?

## WRAP-UP

- Professor revisa o foco gramatical: Simple Past irregular: lose, find, break, take.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Ch=`# LESSON 18 - Simple Past Irregular: School Experiences

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Ampliar verbos irregulares com experiencias de estudo e infancia.

---

## VOCABULÁRIO (20 palavras)
- School project
- English book
- Short story
- Class notebook
- First lesson
- Group activity
- Teacher question
- Reading task
- Study table
- School bell
- Colored pencil
- Notebook cover
- Library card
- Math class
- History test
- Open dictionary
- Study group
- Class board
- School trip
- English song

## VERBOS DA AULA

- **TO WRITE** (escrever)
- **TO READ** (ler)
- **TO SPEAK** (falar)
- **TO BEGIN** (comecar)
- **TO UNDERSTAND** (entender)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I wrote my homework before dinner. | I didn't write my homework at school. | Did you write your homework before dinner? |
| I read a short story in class. | I didn't read a long article. | Did you read a short story in class? |
| The lesson began at nine. | The lesson didn't begin at ten. | Did the lesson begin at nine? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema school experiences com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Simple Past irregular: write, read, speak, begin.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I wrote my homework before dinner. | I didn't write my homework at school. | Did you write your homework before dinner? |
| I read a short story in class. | I didn't read a long article. | Did you read a short story in class? |
| The lesson began at nine. | The lesson didn't begin at ten. | Did the lesson begin at nine? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Did you write your homework before dinner?
2. Did you read a short story in class?
3. Did the lesson begin at nine?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Did you write your homework before dinner?
2. Did you read a short story in class?
3. Did the lesson begin at nine?
4. Do you use school project in your routine?
5. Can you make a sentence with english book?

## WRAP-UP

- Professor revisa o foco gramatical: Simple Past irregular: write, read, speak, begin.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Eh=`# LESSON 19 - Revisao 2: Past Tenses Review

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Revisar passado regular e irregular com atividades acumuladas.

---

## VOCABULÁRIO (20 palavras)
- Weekend plan
- Travel ticket
- Birthday balloons
- Fresh bread
- Old friend
- Lost wallet
- School project
- Taxi ride
- Coffee shop
- Movie poster
- Study group
- Family dinner
- Late bus
- Beach hotel
- Party lights
- Bank line
- Office report
- English book
- Broken phone
- Photo frame

## VERBOS DA AULA

- **TO REVIEW** (revisar)
- **TO MATCH** (usar em contexto da aula)
- **TO RETELL** (usar em contexto da aula)
- **TO ANSWER** (responder)
- **TO COMPARE** (comparar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I reviewed the past forms today. | I didn't review alone. | Did you review the past forms today? |
| She matched the verbs correctly. | She didn't match the answers quickly. | Did she match the verbs correctly? |
| We retold the story in class. | We didn't retell the story in Portuguese. | Did you retell the story in class? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema past tenses review com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Revisao de did, didn't e formas irregulares frequentes.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I reviewed the past forms today. | I didn't review alone. | Did you review the past forms today? |
| She matched the verbs correctly. | She didn't match the answers quickly. | Did she match the verbs correctly? |
| We retold the story in class. | We didn't retell the story in Portuguese. | Did you retell the story in class? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Did you review the past forms today?
2. Did she match the verbs correctly?
3. Did you retell the story in class?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Did you review the past forms today?
2. Did she match the verbs correctly?
3. Did you retell the story in class?
4. Do you use weekend plan in your routine?
5. Can you make a sentence with travel ticket?

## WRAP-UP

- Professor revisa o foco gramatical: Revisao de did, didn't e formas irregulares frequentes.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Sh=`# LESSON 20 - Prova 2: Past Tenses Assessment

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Avaliar o uso de passado regular e irregular em frases e leitura.

---

## VOCABULÁRIO (20 palavras)
- Past sentence
- Grammar quiz
- Answer line
- Reading paragraph
- Listening audio
- Test notebook
- Class timer
- Correct option
- Verb list
- Story card
- Blue marker
- Simple question
- Short answer
- Exam paper
- Quiet room
- Teacher note
- Student table
- Pencil box
- Wall poster
- Final score

## VERBOS DA AULA

- **TO COMPLETE** (completar)
- **TO SELECT** (selecionar)
- **TO WRITE** (escrever)
- **TO IDENTIFY** (identificar)
- **TO REVISE** (revisar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I completed the past tense test. | I didn't complete the test late. | Did you complete the past tense test? |
| The student selected the correct option. | The student didn't select two options. | Did the student select the correct option? |
| The class revised the answers together. | The class didn't revise before the test. | Did the class revise the answers together? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema past tenses assessment com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Simple Past regular e irregular em contexto.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I completed the past tense test. | I didn't complete the test late. | Did you complete the past tense test? |
| The student selected the correct option. | The student didn't select two options. | Did the student select the correct option? |
| The class revised the answers together. | The class didn't revise before the test. | Did the class revise the answers together? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Did you complete the past tense test?
2. Did the student select the correct option?
3. Did the class revise the answers together?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Did you complete the past tense test?
2. Did the student select the correct option?
3. Did the class revise the answers together?
4. Do you use past sentence in your routine?
5. Can you make a sentence with grammar quiz?

## WRAP-UP

- Professor revisa o foco gramatical: Simple Past regular e irregular em contexto.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Oh=`# LESSON 21 - Verb to be: Personal Information

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir o verbo to be para nome, nacionalidade e ocupacao.

---

## VOCABULÁRIO (20 palavras)
- Brazilian student
- English teacher
- Friendly nurse
- Busy driver
- Tall neighbor
- Happy child
- Office worker
- Short name
- Family surname
- Student badge
- Small city
- Phone number
- Email address
- Quiet classroom
- Work uniform
- Open notebook
- Name tag
- Job title
- School ID
- Blue passport

## VERBOS DA AULA

- **TO BE** (ser/estar)
- **TO INTRODUCE** (apresentar)
- **TO DESCRIBE** (descrever)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am a Brazilian student. | I am not a doctor. | Are you a Brazilian student? |
| She is an English teacher. | She is not a nurse. | Is she an English teacher? |
| They are my classmates. | They are not my cousins. | Are they your classmates? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema personal information com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Am / Is / Are em informacoes pessoais.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am a Brazilian student. | I am not a doctor. | Are you a Brazilian student? |
| She is an English teacher. | She is not a nurse. | Is she an English teacher? |
| They are my classmates. | They are not my cousins. | Are they your classmates? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you a Brazilian student?
2. Is she an English teacher?
3. Are they your classmates?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you a Brazilian student?
2. Is she an English teacher?
3. Are they your classmates?
4. Do you use brazilian student in your routine?
5. Can you make a sentence with english teacher?

## WRAP-UP

- Professor revisa o foco gramatical: Am / Is / Are em informacoes pessoais.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Ih=`# LESSON 22 - Verb to be: Feelings and States

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar o verbo to be com sentimentos e estados fisicos.

---

## VOCABULÁRIO (20 palavras)
- Happy student
- Tired worker
- Hungry child
- Sleepy baby
- Nervous driver
- Calm teacher
- Busy mother
- Sad movie
- Cold room
- Hot kitchen
- Open window
- Warm blanket
- Heavy bag
- Late bus
- Long day
- Short break
- Bright light
- Quiet street
- Clean bed
- Fresh water

## VERBOS DA AULA

- **TO BE** (ser/estar)
- **TO FEEL** (sentir)
- **TO DESCRIBE** (descrever)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am tired after work. | I am not sleepy now. | Are you tired after work? |
| He is hungry before lunch. | He is not thirsty now. | Is he hungry before lunch? |
| We are calm in class. | We are not nervous today. | Are you calm in class? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema feelings and states com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Adjectives after am / is / are.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am tired after work. | I am not sleepy now. | Are you tired after work? |
| He is hungry before lunch. | He is not thirsty now. | Is he hungry before lunch? |
| We are calm in class. | We are not nervous today. | Are you calm in class? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you tired after work?
2. Is he hungry before lunch?
3. Are you calm in class?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you tired after work?
2. Is he hungry before lunch?
3. Are you calm in class?
4. Do you use happy student in your routine?
5. Can you make a sentence with tired worker?

## WRAP-UP

- Professor revisa o foco gramatical: Adjectives after am / is / are.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,bh=`# LESSON 23 - Verb to be: Places and Locations

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar o verbo to be com lugares e localizacao.

---

## VOCABULÁRIO (20 palavras)
- At school
- In the kitchen
- On the sofa
- At work
- In the park
- At home
- Near the bank
- Behind the door
- Next to the table
- In the classroom
- At the bus stop
- On the second floor
- In the bathroom
- At the bakery
- On the street
- In the office
- At the market
- Near the hospital
- In the living room
- At the station

## VERBOS DA AULA

- **TO BE** (ser/estar)
- **TO LOCATE** (localizar)
- **TO IDENTIFY** (identificar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am at home now. | I am not at the office. | Are you at home now? |
| The keys are on the table. | The keys are not in the bag. | Are the keys on the table? |
| My mother is at the bakery. | My mother is not at the bank. | Is your mother at the bakery? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema places and locations com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Am / is / are + in, at, on.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am at home now. | I am not at the office. | Are you at home now? |
| The keys are on the table. | The keys are not in the bag. | Are the keys on the table? |
| My mother is at the bakery. | My mother is not at the bank. | Is your mother at the bakery? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you at home now?
2. Are the keys on the table?
3. Is your mother at the bakery?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you at home now?
2. Are the keys on the table?
3. Is your mother at the bakery?
4. Do you use at school in your routine?
5. Can you make a sentence with in the kitchen?

## WRAP-UP

- Professor revisa o foco gramatical: Am / is / are + in, at, on.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,xh=`# LESSON 24 - Verb to be: Jobs and Roles

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Expandir o verbo to be com profissoes, papeis e descricoes simples.

---

## VOCABULÁRIO (20 palavras)
- Bus driver
- School principal
- Store manager
- Office assistant
- Dental nurse
- Soccer coach
- Music student
- Math teacher
- Restaurant waiter
- Police officer
- Taxi driver
- Hotel receptionist
- Coffee barista
- Factory worker
- Graphic designer
- Young intern
- Team leader
- Project analyst
- Friendly cashier
- Travel agent

## VERBOS DA AULA

- **TO BE** (ser/estar)
- **TO WORK** (trabalhar)
- **TO IDENTIFY** (identificar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| My brother is a taxi driver. | My brother is not a chef. | Is your brother a taxi driver? |
| They are office assistants. | They are not sales managers. | Are they office assistants? |
| You are a music student. | You are not a history teacher. | Are you a music student? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema jobs and roles com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Questions with What are you? / Who is she?

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| My brother is a taxi driver. | My brother is not a chef. | Is your brother a taxi driver? |
| They are office assistants. | They are not sales managers. | Are they office assistants? |
| You are a music student. | You are not a history teacher. | Are you a music student? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Is your brother a taxi driver?
2. Are they office assistants?
3. Are you a music student?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Is your brother a taxi driver?
2. Are they office assistants?
3. Are you a music student?
4. Do you use bus driver in your routine?
5. Can you make a sentence with school principal?

## WRAP-UP

- Professor revisa o foco gramatical: Questions with What are you? / Who is she?
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Nh=`# LESSON 25 - There to be: Rooms at Home

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir there is / there are com comodos e objetos da casa.

---

## VOCABULÁRIO (20 palavras)
- Big sofa
- Wooden table
- Clean kitchen
- White fridge
- Small bathroom
- Blue bedroom
- Wall mirror
- Floor lamp
- Kitchen sink
- Soft rug
- Open shelf
- Dining chair
- Book cabinet
- Laundry room
- Front door
- Window curtain
- TV stand
- Coffee table
- Dish rack
- Family picture

## VERBOS DA AULA

- **TO HAVE** (ter)
- **TO SHOW** (mostrar)
- **TO DESCRIBE** (descrever)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There is a big sofa in the living room. | There is not a TV in the kitchen. | Is there a big sofa in the living room? |
| There are two chairs in the kitchen. | There are not five chairs in the kitchen. | Are there two chairs in the kitchen? |
| There is a mirror on the wall. | There is not a mirror in the garden. | Is there a mirror on the wall? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema rooms at home com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** There is / There are em descricoes de casa.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There is a big sofa in the living room. | There is not a TV in the kitchen. | Is there a big sofa in the living room? |
| There are two chairs in the kitchen. | There are not five chairs in the kitchen. | Are there two chairs in the kitchen? |
| There is a mirror on the wall. | There is not a mirror in the garden. | Is there a mirror on the wall? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Is there a big sofa in the living room?
2. Are there two chairs in the kitchen?
3. Is there a mirror on the wall?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Is there a big sofa in the living room?
2. Are there two chairs in the kitchen?
3. Is there a mirror on the wall?
4. Do you use big sofa in your routine?
5. Can you make a sentence with wooden table?

## WRAP-UP

- Professor revisa o foco gramatical: There is / There are em descricoes de casa.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Uh=`# LESSON 26 - There to be: My Classroom

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar there is / there are com itens de sala de aula.

---

## VOCABULÁRIO (20 palavras)
- Teacher desk
- Student chair
- Class board
- Blue marker
- Open notebook
- Wall clock
- School backpack
- Reading poster
- Window fan
- Water bottle
- Class projector
- Door handle
- Book shelf
- Trash can
- Pencil case
- Study chart
- Paper sheet
- School map
- Music speaker
- Class tablet

## VERBOS DA AULA

- **TO HAVE** (ter)
- **TO COUNT** (contar)
- **TO POINT** (apontar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There is a projector in the classroom. | There is not a television in the classroom. | Is there a projector in the classroom? |
| There are twenty chairs in the room. | There are not ten chairs in the room. | Are there twenty chairs in the room? |
| There is a clock on the wall. | There is not a clock on the floor. | Is there a clock on the wall? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema my classroom com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** There is / there are + articles and numbers.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There is a projector in the classroom. | There is not a television in the classroom. | Is there a projector in the classroom? |
| There are twenty chairs in the room. | There are not ten chairs in the room. | Are there twenty chairs in the room? |
| There is a clock on the wall. | There is not a clock on the floor. | Is there a clock on the wall? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Is there a projector in the classroom?
2. Are there twenty chairs in the room?
3. Is there a clock on the wall?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Is there a projector in the classroom?
2. Are there twenty chairs in the room?
3. Is there a clock on the wall?
4. Do you use teacher desk in your routine?
5. Can you make a sentence with student chair?

## WRAP-UP

- Professor revisa o foco gramatical: There is / there are + articles and numbers.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Dh=`# LESSON 27 - There to be: Around the City

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar there is / there are com lugares da cidade.

---

## VOCABULÁRIO (20 palavras)
- City bank
- Public park
- Bus station
- Coffee shop
- Corner pharmacy
- Small school
- Big hospital
- Fruit market
- City library
- Police station
- Gas station
- Book store
- Pet shop
- Traffic light
- Main avenue
- Parking lot
- Bus lane
- Street corner
- Tourist map
- Train platform

## VERBOS DA AULA

- **TO LOCATE** (localizar)
- **TO DESCRIBE** (descrever)
- **TO ASK** (usar em contexto da aula)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There is a pharmacy near my house. | There is not a bakery near my house. | Is there a pharmacy near your house? |
| There are two parks in my neighborhood. | There are not five parks in my neighborhood. | Are there two parks in your neighborhood? |
| There is a bus station downtown. | There is not a train station downtown. | Is there a bus station downtown? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema around the city com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** There is / are com preposicoes de lugar.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There is a pharmacy near my house. | There is not a bakery near my house. | Is there a pharmacy near your house? |
| There are two parks in my neighborhood. | There are not five parks in my neighborhood. | Are there two parks in your neighborhood? |
| There is a bus station downtown. | There is not a train station downtown. | Is there a bus station downtown? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Is there a pharmacy near your house?
2. Are there two parks in your neighborhood?
3. Is there a bus station downtown?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Is there a pharmacy near your house?
2. Are there two parks in your neighborhood?
3. Is there a bus station downtown?
4. Do you use city bank in your routine?
5. Can you make a sentence with public park?

## WRAP-UP

- Professor revisa o foco gramatical: There is / are com preposicoes de lugar.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Lh=`# LESSON 28 - There to be: At the Supermarket

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Expandir there is / there are com alimentos e setores do mercado.

---

## VOCABULÁRIO (20 palavras)
- Fresh apples
- Cold milk
- Frozen pizza
- Rice bag
- Bean package
- Orange juice
- Cleaning aisle
- Snack shelf
- Fruit section
- Checkout line
- Shopping cart
- Price tag
- Cash register
- Plastic bag
- Store basket
- Frozen chicken
- Fresh bread
- Chocolate bar
- Soap bottle
- Paper towel

## VERBOS DA AULA

- **TO BUY** (comprar)
- **TO LOOK FOR** (procurar)
- **TO COUNT** (contar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There is some milk in the fridge. | There is not any soda in the fridge. | Is there any milk in the fridge? |
| There are some apples on the table. | There are not any grapes on the table. | Are there any apples on the table? |
| There is a checkout line near the door. | There is not a bakery inside the store. | Is there a checkout line near the door? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema at the supermarket com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Some / any com there is / there are.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There is some milk in the fridge. | There is not any soda in the fridge. | Is there any milk in the fridge? |
| There are some apples on the table. | There are not any grapes on the table. | Are there any apples on the table? |
| There is a checkout line near the door. | There is not a bakery inside the store. | Is there a checkout line near the door? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Is there any milk in the fridge?
2. Are there any apples on the table?
3. Is there a checkout line near the door?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Is there any milk in the fridge?
2. Are there any apples on the table?
3. Is there a checkout line near the door?
4. Do you use fresh apples in your routine?
5. Can you make a sentence with cold milk?

## WRAP-UP

- Professor revisa o foco gramatical: Some / any com there is / there are.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,_h=`# LESSON 29 - Present Continuous: At Home Right Now

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir o Present Continuous com acoes acontecendo agora em casa.

---

## VOCABULÁRIO (20 palavras)
- Hot stove
- TV remote
- Study notebook
- Kitchen sink
- Phone charger
- Dinner pan
- Living room
- Clean plate
- Open laptop
- Laundry basket
- Running water
- Family sofa
- Wall clock
- Music speaker
- Small table
- Blue cup
- Reading lamp
- Bedroom door
- Soft pillow
- Coffee mug

## VERBOS DA AULA

- **TO COOK** (cozinhar)
- **TO WATCH** (assistir)
- **TO STUDY** (usar em contexto da aula)
- **TO WASH** (lavar)
- **TO TALK** (usar em contexto da aula)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am cooking dinner now. | I am not cooking lunch now. | Are you cooking dinner now? |
| My brother is watching TV now. | My brother is not watching a movie now. | Is your brother watching TV now? |
| We are studying in the living room. | We are not studying in the kitchen. | Are you studying in the living room? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema at home right now com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Am / is / are + verb-ing.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am cooking dinner now. | I am not cooking lunch now. | Are you cooking dinner now? |
| My brother is watching TV now. | My brother is not watching a movie now. | Is your brother watching TV now? |
| We are studying in the living room. | We are not studying in the kitchen. | Are you studying in the living room? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you cooking dinner now?
2. Is your brother watching TV now?
3. Are you studying in the living room?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you cooking dinner now?
2. Is your brother watching TV now?
3. Are you studying in the living room?
4. Do you use hot stove in your routine?
5. Can you make a sentence with tv remote?

## WRAP-UP

- Professor revisa o foco gramatical: Am / is / are + verb-ing.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Wh=`# LESSON 30 - Present Continuous: Office Actions

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar o Present Continuous com acoes do trabalho no momento.

---

## VOCABULÁRIO (20 palavras)
- Office laptop
- Phone headset
- Printer paper
- Client email
- Meeting room
- Reception desk
- Company chat
- Coffee machine
- Blue folder
- Desk calendar
- Glass door
- Waiting chair
- Project board
- Office badge
- Paper file
- Water bottle
- Desk lamp
- White wall
- Lunch box
- Work notebook

## VERBOS DA AULA

- **TO TYPE** (digitar)
- **TO ANSWER** (responder)
- **TO PRINT** (imprimir)
- **TO SPEAK** (falar)
- **TO WAIT** (esperar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am typing an email now. | I am not typing a report now. | Are you typing an email now? |
| The receptionist is answering the phone. | The receptionist is not answering the manager. | Is the receptionist answering the phone? |
| They are waiting in the meeting room. | They are not waiting in the hallway. | Are they waiting in the meeting room? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema office actions com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Yes/No questions in the Present Continuous.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am typing an email now. | I am not typing a report now. | Are you typing an email now? |
| The receptionist is answering the phone. | The receptionist is not answering the manager. | Is the receptionist answering the phone? |
| They are waiting in the meeting room. | They are not waiting in the hallway. | Are they waiting in the meeting room? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you typing an email now?
2. Is the receptionist answering the phone?
3. Are they waiting in the meeting room?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you typing an email now?
2. Is the receptionist answering the phone?
3. Are they waiting in the meeting room?
4. Do you use office laptop in your routine?
5. Can you make a sentence with phone headset?

## WRAP-UP

- Professor revisa o foco gramatical: Yes/No questions in the Present Continuous.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Mh=`# LESSON 31 - Present Continuous: On the Street

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar o Present Continuous com pessoas e movimento na rua.

---

## VOCABULÁRIO (20 palavras)
- Busy avenue
- Yellow taxi
- City bus
- Pedestrian crossing
- Green umbrella
- Street vendor
- Phone screen
- Heavy bag
- Traffic light
- Bike lane
- Bus stop
- Open store
- Rain jacket
- Street map
- Coffee cup
- Car window
- Small backpack
- City square
- Newsstand corner
- Wet sidewalk

## VERBOS DA AULA

- **TO WALK** (caminhar)
- **TO DRIVE** (dirigir)
- **TO CROSS** (atravessar)
- **TO CARRY** (carregar)
- **TO RAIN** (chover)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| A woman is walking to the bus stop. | A woman is not walking to the bank. | Is a woman walking to the bus stop? |
| The taxi is stopping at the corner. | The taxi is not stopping at the station. | Is the taxi stopping at the corner? |
| It is raining in the city center. | It is not raining at the beach. | Is it raining in the city center? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema on the street com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Present Continuous com verbos de movimento.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| A woman is walking to the bus stop. | A woman is not walking to the bank. | Is a woman walking to the bus stop? |
| The taxi is stopping at the corner. | The taxi is not stopping at the station. | Is the taxi stopping at the corner? |
| It is raining in the city center. | It is not raining at the beach. | Is it raining in the city center? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Is a woman walking to the bus stop?
2. Is the taxi stopping at the corner?
3. Is it raining in the city center?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Is a woman walking to the bus stop?
2. Is the taxi stopping at the corner?
3. Is it raining in the city center?
4. Do you use busy avenue in your routine?
5. Can you make a sentence with yellow taxi?

## WRAP-UP

- Professor revisa o foco gramatical: Present Continuous com verbos de movimento.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,zh=`# LESSON 32 - Present Continuous: Leisure Time Now

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Expandir o Present Continuous com lazer e atividades do momento.

---

## VOCABULÁRIO (20 palavras)
- Swimming pool
- Dance class
- Guitar lesson
- Beach towel
- Music stage
- Cold juice
- Soccer ball
- Beach chair
- Phone selfie
- Running shoes
- Family picnic
- Park bench
- Sun hat
- Snack box
- Water bottle
- Blue guitar
- Music speaker
- Photo camera
- Art workshop
- Ice cream cart

## VERBOS DA AULA

- **TO SWIM** (nadar)
- **TO DANCE** (dancar)
- **TO PLAY** (jogar/tocar)
- **TO SING** (cantar)
- **TO TAKE** (tirar/pegar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| The children are playing soccer now. | The children are not playing volleyball now. | Are the children playing soccer now? |
| She is taking photos at the park. | She is not taking photos at home. | Is she taking photos at the park? |
| We are dancing in class right now. | We are not dancing in the street. | Are you dancing in class right now? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema leisure time now com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Present Continuous com now, right now, at the moment.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| The children are playing soccer now. | The children are not playing volleyball now. | Are the children playing soccer now? |
| She is taking photos at the park. | She is not taking photos at home. | Is she taking photos at the park? |
| We are dancing in class right now. | We are not dancing in the street. | Are you dancing in class right now? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are the children playing soccer now?
2. Is she taking photos at the park?
3. Are you dancing in class right now?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are the children playing soccer now?
2. Is she taking photos at the park?
3. Are you dancing in class right now?
4. Do you use swimming pool in your routine?
5. Can you make a sentence with dance class?

## WRAP-UP

- Professor revisa o foco gramatical: Present Continuous com now, right now, at the moment.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Bh=`# LESSON 33 - Revisao 3: Be and Continuous Review

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Revisar verb to be, there to be e present continuous.

---

## VOCABULÁRIO (20 palavras)
- Teacher desk
- Busy avenue
- Happy student
- Big sofa
- Office laptop
- Swimming pool
- City bank
- Tired worker
- Class projector
- Traffic light
- Family sofa
- Taxi driver
- Wall clock
- Clean kitchen
- Phone headset
- Beach towel
- School backpack
- Music speaker
- Front door
- Bus station

## VERBOS DA AULA

- **TO REVIEW** (revisar)
- **TO DESCRIBE** (descrever)
- **TO ANSWER** (responder)
- **TO POINT** (apontar)
- **TO COMPARE** (comparar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am reviewing the unit now. | I am not reviewing alone now. | Are you reviewing the unit now? |
| There is a projector in the classroom. | There is not a TV in the classroom. | Is there a projector in the classroom? |
| She is tired after work. | She is not sleepy now. | Is she tired after work? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema be and continuous review com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Revisao de am, is, are, there is/are e verb-ing.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am reviewing the unit now. | I am not reviewing alone now. | Are you reviewing the unit now? |
| There is a projector in the classroom. | There is not a TV in the classroom. | Is there a projector in the classroom? |
| She is tired after work. | She is not sleepy now. | Is she tired after work? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you reviewing the unit now?
2. Is there a projector in the classroom?
3. Is she tired after work?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you reviewing the unit now?
2. Is there a projector in the classroom?
3. Is she tired after work?
4. Do you use teacher desk in your routine?
5. Can you make a sentence with busy avenue?

## WRAP-UP

- Professor revisa o foco gramatical: Revisao de am, is, are, there is/are e verb-ing.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Fh=`# LESSON 34 - Prova 3: Be and Continuous Assessment

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Avaliar verb to be, there to be e present continuous.

---

## VOCABULÁRIO (20 palavras)
- Test picture
- Short dialogue
- Class timer
- Answer grid
- Audio task
- Reading card
- Grammar note
- Student chair
- Blue marker
- Wall poster
- City photo
- Kitchen image
- Office scene
- Action verb
- Listening line
- Question box
- Correct option
- Open notebook
- Teacher folder
- Exam sheet

## VERBOS DA AULA

- **TO COMPLETE** (completar)
- **TO IDENTIFY** (identificar)
- **TO MARK** (marcar)
- **TO READ** (ler)
- **TO LISTEN** (ouvir)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am completing the test now. | I am not talking now. | Are you completing the test now? |
| There are three chairs in the picture. | There are not four chairs in the picture. | Are there three chairs in the picture? |
| The man is at the office. | The man is not at home. | Is the man at the office? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema be and continuous assessment com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Estruturas com am/is/are e descricoes de lugar e acao.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am completing the test now. | I am not talking now. | Are you completing the test now? |
| There are three chairs in the picture. | There are not four chairs in the picture. | Are there three chairs in the picture? |
| The man is at the office. | The man is not at home. | Is the man at the office? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you completing the test now?
2. Are there three chairs in the picture?
3. Is the man at the office?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you completing the test now?
2. Are there three chairs in the picture?
3. Is the man at the office?
4. Do you use test picture in your routine?
5. Can you make a sentence with short dialogue?

## WRAP-UP

- Professor revisa o foco gramatical: Estruturas com am/is/are e descricoes de lugar e acao.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,jh=`# LESSON 35 - Past to be: Yesterday Feelings

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir was / were com sentimentos e estados no passado.

---

## VOCABULÁRIO (20 palavras)
- Tired worker
- Happy child
- Nervous student
- Busy street
- Rainy morning
- Quiet room
- Cold coffee
- Late bus
- Warm blanket
- Family dinner
- Long meeting
- Heavy bag
- Short class
- Good movie
- Hot soup
- Blue notebook
- Office desk
- Study table
- Phone battery
- Open window

## VERBOS DA AULA

- **TO BE** (ser/estar)
- **TO FEEL** (sentir)
- **TO REMEMBER** (lembrar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I was tired yesterday. | I wasn't sick yesterday. | Were you tired yesterday? |
| She was happy after class. | She wasn't sad after class. | Was she happy after class? |
| They were nervous before the test. | They weren't calm before the test. | Were they nervous before the test? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema yesterday feelings com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Was / were in affirmative sentences.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I was tired yesterday. | I wasn't sick yesterday. | Were you tired yesterday? |
| She was happy after class. | She wasn't sad after class. | Was she happy after class? |
| They were nervous before the test. | They weren't calm before the test. | Were they nervous before the test? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Were you tired yesterday?
2. Was she happy after class?
3. Were they nervous before the test?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Were you tired yesterday?
2. Was she happy after class?
3. Were they nervous before the test?
4. Do you use tired worker in your routine?
5. Can you make a sentence with happy child?

## WRAP-UP

- Professor revisa o foco gramatical: Was / were in affirmative sentences.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Vh=`# LESSON 36 - Past to be: Last Weekend Places

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar was / were com localizacao no passado.

---

## VOCABULÁRIO (20 palavras)
- At the beach
- In the park
- At home
- In the office
- At the cinema
- On the bus
- At the market
- In the classroom
- At the bakery
- On the sofa
- At the station
- In the hotel
- At the party
- On the street
- In the kitchen
- At the bank
- On the second floor
- At the hospital
- In the city center
- At the museum

## VERBOS DA AULA

- **TO BE** (ser/estar)
- **TO STAY** (ficar)
- **TO VISIT** (visitar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I was at home on Saturday. | I wasn't at work on Saturday. | Were you at home on Saturday? |
| My parents were at the beach last weekend. | My parents weren't at the office. | Were your parents at the beach last weekend? |
| The keys were on the table yesterday. | The keys weren't in the car yesterday. | Were the keys on the table yesterday? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema last weekend places com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Was / were + at, in, on.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I was at home on Saturday. | I wasn't at work on Saturday. | Were you at home on Saturday? |
| My parents were at the beach last weekend. | My parents weren't at the office. | Were your parents at the beach last weekend? |
| The keys were on the table yesterday. | The keys weren't in the car yesterday. | Were the keys on the table yesterday? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Were you at home on Saturday?
2. Were your parents at the beach last weekend?
3. Were the keys on the table yesterday?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Were you at home on Saturday?
2. Were your parents at the beach last weekend?
3. Were the keys on the table yesterday?
4. Do you use at the beach in your routine?
5. Can you make a sentence with in the park?

## WRAP-UP

- Professor revisa o foco gramatical: Was / were + at, in, on.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Gh=`# LESSON 37 - Past to be: Past Weather and Events

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar was / were com clima e eventos passados.

---

## VOCABULÁRIO (20 palavras)
- Sunny beach
- Rainy afternoon
- Windy night
- Cloudy sky
- School event
- Music festival
- Family party
- Open tent
- Wet street
- Cold drink
- Hot sun
- Traffic jam
- Small concert
- Long line
- City square
- Green field
- Blue stage
- Photo booth
- Snack stand
- Loud speaker

## VERBOS DA AULA

- **TO BE** (ser/estar)
- **TO HAPPEN** (acontecer)
- **TO DESCRIBE** (descrever)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| It was sunny on Sunday. | It wasn't cloudy on Sunday. | Was it sunny on Sunday? |
| The festival was crowded at night. | The festival wasn't empty at night. | Was the festival crowded at night? |
| The streets were wet after the rain. | The streets weren't dry after the rain. | Were the streets wet after the rain? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema past weather and events com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Was / were with weather and event descriptions.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| It was sunny on Sunday. | It wasn't cloudy on Sunday. | Was it sunny on Sunday? |
| The festival was crowded at night. | The festival wasn't empty at night. | Was the festival crowded at night? |
| The streets were wet after the rain. | The streets weren't dry after the rain. | Were the streets wet after the rain? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Was it sunny on Sunday?
2. Was the festival crowded at night?
3. Were the streets wet after the rain?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Was it sunny on Sunday?
2. Was the festival crowded at night?
3. Were the streets wet after the rain?
4. Do you use sunny beach in your routine?
5. Can you make a sentence with rainy afternoon?

## WRAP-UP

- Professor revisa o foco gramatical: Was / were with weather and event descriptions.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Hh=`# LESSON 38 - Past to be: Childhood Memories

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Expandir was / were com lembrancas da infancia.

---

## VOCABULÁRIO (20 palavras)
- Old school
- Small bicycle
- Favorite toy
- Blue backpack
- Funny teacher
- Best friend
- School yard
- Family album
- Birthday party
- Cartoon show
- Soccer field
- Ice cream cart
- Story book
- Drawing class
- Music lesson
- Tree house
- Playground slide
- Comic magazine
- Summer trip
- Photo frame

## VERBOS DA AULA

- **TO BE** (ser/estar)
- **TO REMEMBER** (lembrar)
- **TO DESCRIBE** (descrever)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| My school was small. | My school wasn't modern. | Was your school small? |
| My best friend was very funny. | My best friend wasn't quiet. | Was your best friend very funny? |
| We were happy in the summer. | We weren't bored in the summer. | Were you happy in the summer? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema childhood memories com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Was / were in short personal narratives.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| My school was small. | My school wasn't modern. | Was your school small? |
| My best friend was very funny. | My best friend wasn't quiet. | Was your best friend very funny? |
| We were happy in the summer. | We weren't bored in the summer. | Were you happy in the summer? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Was your school small?
2. Was your best friend very funny?
3. Were you happy in the summer?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Was your school small?
2. Was your best friend very funny?
3. Were you happy in the summer?
4. Do you use old school in your routine?
5. Can you make a sentence with small bicycle?

## WRAP-UP

- Professor revisa o foco gramatical: Was / were in short personal narratives.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,$h=`# LESSON 39 - There to be past: My Old House

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir there was / there were com casa no passado.

---

## VOCABULÁRIO (20 palavras)
- Old kitchen
- Wooden table
- Small yard
- Blue gate
- Big window
- Family sofa
- Wall clock
- Old fridge
- Laundry room
- Bedroom mirror
- Front porch
- Garden flowers
- White fence
- TV stand
- Dining chair
- Book shelf
- Bathroom sink
- Open garage
- Storage box
- Coffee table

## VERBOS DA AULA

- **TO HAVE** (ter)
- **TO REMEMBER** (lembrar)
- **TO DESCRIBE** (descrever)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There was a blue gate in my old house. | There was not a garage in my old house. | Was there a blue gate in your old house? |
| There were two bedrooms upstairs. | There were not three bedrooms upstairs. | Were there two bedrooms upstairs? |
| There was a small yard behind the house. | There was not a garden behind the house. | Was there a small yard behind the house? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema my old house com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** There was / there were em descricoes passadas.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There was a blue gate in my old house. | There was not a garage in my old house. | Was there a blue gate in your old house? |
| There were two bedrooms upstairs. | There were not three bedrooms upstairs. | Were there two bedrooms upstairs? |
| There was a small yard behind the house. | There was not a garden behind the house. | Was there a small yard behind the house? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Was there a blue gate in your old house?
2. Were there two bedrooms upstairs?
3. Was there a small yard behind the house?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Was there a blue gate in your old house?
2. Were there two bedrooms upstairs?
3. Was there a small yard behind the house?
4. Do you use old kitchen in your routine?
5. Can you make a sentence with wooden table?

## WRAP-UP

- Professor revisa o foco gramatical: There was / there were em descricoes passadas.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Yh=`# LESSON 40 - There to be past: Last Year in My City

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar there was / there were com lugares da cidade no passado.

---

## VOCABULÁRIO (20 palavras)
- Old cinema
- Bus station
- Small park
- Coffee shop
- Street market
- City library
- Big hospital
- Train line
- Traffic light
- Book store
- Public square
- Bike lane
- Fruit stand
- Police station
- Parking lot
- River bridge
- Main avenue
- Old factory
- Town hall
- Tourist center

## VERBOS DA AULA

- **TO EXIST** (existir)
- **TO CHANGE** (mudar)
- **TO COMPARE** (comparar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There was a cinema downtown last year. | There was not a mall downtown last year. | Was there a cinema downtown last year? |
| There were two parks in my neighborhood. | There were not five parks in my neighborhood. | Were there two parks in your neighborhood? |
| There was a street market on Saturday. | There was not a concert on Saturday. | Was there a street market on Saturday? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema last year in my city com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** There was / were with places and changes.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There was a cinema downtown last year. | There was not a mall downtown last year. | Was there a cinema downtown last year? |
| There were two parks in my neighborhood. | There were not five parks in my neighborhood. | Were there two parks in your neighborhood? |
| There was a street market on Saturday. | There was not a concert on Saturday. | Was there a street market on Saturday? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Was there a cinema downtown last year?
2. Were there two parks in your neighborhood?
3. Was there a street market on Saturday?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Was there a cinema downtown last year?
2. Were there two parks in your neighborhood?
3. Was there a street market on Saturday?
4. Do you use old cinema in your routine?
5. Can you make a sentence with bus station?

## WRAP-UP

- Professor revisa o foco gramatical: There was / were with places and changes.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,qh=`# LESSON 41 - There to be past: Past School Facilities

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar there was / there were com escola e infraestrutura.

---

## VOCABULÁRIO (20 palavras)
- School library
- Science lab
- Computer room
- Teacher lounge
- Class board
- Student desk
- Wall poster
- Water fountain
- Sports court
- Music room
- Art studio
- Cafeteria line
- School gate
- Tree garden
- Reading corner
- Study hall
- Office printer
- Bus stop
- Playground slide
- School bell

## VERBOS DA AULA

- **TO HAVE** (ter)
- **TO COUNT** (contar)
- **TO DESCRIBE** (descrever)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There was a library at my school. | There was not a theater at my school. | Was there a library at your school? |
| There were thirty desks in the classroom. | There were not ten desks in the classroom. | Were there thirty desks in the classroom? |
| There was a bus stop near the gate. | There was not a train station near the gate. | Was there a bus stop near the gate? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema past school facilities com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Questions and negatives with there was / were.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There was a library at my school. | There was not a theater at my school. | Was there a library at your school? |
| There were thirty desks in the classroom. | There were not ten desks in the classroom. | Were there thirty desks in the classroom? |
| There was a bus stop near the gate. | There was not a train station near the gate. | Was there a bus stop near the gate? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Was there a library at your school?
2. Were there thirty desks in the classroom?
3. Was there a bus stop near the gate?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Was there a library at your school?
2. Were there thirty desks in the classroom?
3. Was there a bus stop near the gate?
4. Do you use school library in your routine?
5. Can you make a sentence with science lab?

## WRAP-UP

- Professor revisa o foco gramatical: Questions and negatives with there was / were.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Qh=`# LESSON 42 - There to be past: Past Vacation Scenes

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Expandir there was / there were com cenario de viagem no passado.

---

## VOCABULÁRIO (20 palavras)
- Beach hotel
- Boat tour
- Night market
- Travel bus
- Ocean view
- Small island
- Street cafe
- Tour guide
- Photo camera
- Pool chair
- Travel map
- Hotel key
- Sand castle
- Snack kiosk
- Gift shop
- Travel bag
- Open balcony
- City museum
- Taxi line
- Bus ticket

## VERBOS DA AULA

- **TO REMEMBER** (lembrar)
- **TO DESCRIBE** (descrever)
- **TO COMPARE** (comparar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There was a small hotel near the beach. | There was not a hospital near the beach. | Was there a small hotel near the beach? |
| There were many tourists in the market. | There were not many tourists in the museum. | Were there many tourists in the market? |
| There was a boat tour every morning. | There was not a train tour every morning. | Was there a boat tour every morning? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema past vacation scenes com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** There was / were with travel memories.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There was a small hotel near the beach. | There was not a hospital near the beach. | Was there a small hotel near the beach? |
| There were many tourists in the market. | There were not many tourists in the museum. | Were there many tourists in the market? |
| There was a boat tour every morning. | There was not a train tour every morning. | Was there a boat tour every morning? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Was there a small hotel near the beach?
2. Were there many tourists in the market?
3. Was there a boat tour every morning?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Was there a small hotel near the beach?
2. Were there many tourists in the market?
3. Was there a boat tour every morning?
4. Do you use beach hotel in your routine?
5. Can you make a sentence with boat tour?

## WRAP-UP

- Professor revisa o foco gramatical: There was / were with travel memories.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Kh=`# LESSON 43 - Revisao 4: Past Be Review

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Revisar past to be e there to be past com lugares, clima e memorias.

---

## VOCABULÁRIO (20 palavras)
- Old cinema
- Sunny beach
- Small yard
- School library
- Happy child
- Bus station
- Rainy afternoon
- Family sofa
- Travel bus
- Wall clock
- Photo camera
- Teacher lounge
- Open garage
- Street market
- Birthday party
- Blue gate
- Town hall
- Ocean view
- Sports court
- Best friend

## VERBOS DA AULA

- **TO REVIEW** (revisar)
- **TO DESCRIBE** (descrever)
- **TO COMPARE** (comparar)
- **TO ANSWER** (responder)
- **TO RECALL** (usar em contexto da aula)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I was happy on vacation. | I wasn't tired on vacation. | Were you happy on vacation? |
| There was a library at my school. | There was not a theater at my school. | Was there a library at your school? |
| There were many tourists at the market. | There were not many tourists at the museum. | Were there many tourists at the market? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema past be review com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Revisao de was, were, there was e there were.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I was happy on vacation. | I wasn't tired on vacation. | Were you happy on vacation? |
| There was a library at my school. | There was not a theater at my school. | Was there a library at your school? |
| There were many tourists at the market. | There were not many tourists at the museum. | Were there many tourists at the market? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Were you happy on vacation?
2. Was there a library at your school?
3. Were there many tourists at the market?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Were you happy on vacation?
2. Was there a library at your school?
3. Were there many tourists at the market?
4. Do you use old cinema in your routine?
5. Can you make a sentence with sunny beach?

## WRAP-UP

- Professor revisa o foco gramatical: Revisao de was, were, there was e there were.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Xh=`# LESSON 44 - Prova 4: Past Be Assessment

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Avaliar past to be e there to be past.

---

## VOCABULÁRIO (20 palavras)
- Past picture
- Answer column
- Listening prompt
- Reading sentence
- Exam card
- Grammar line
- School photo
- Travel scene
- Wall poster
- Teacher desk
- Correct option
- Blue pen
- Student chair
- Story prompt
- Quiet room
- Short answer
- Bus ticket
- Open notebook
- Final score
- Picture clue

## VERBOS DA AULA

- **TO COMPLETE** (completar)
- **TO IDENTIFY** (identificar)
- **TO CHOOSE** (escolher)
- **TO DESCRIBE** (descrever)
- **TO REVISE** (revisar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I was ready for the test. | I wasn't late for the test. | Were you ready for the test? |
| There was a market in the picture. | There was not a bank in the picture. | Was there a market in the picture? |
| There were two children in the park. | There were not four children in the park. | Were there two children in the park? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema past be assessment com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Leitura, escrita e descricao no passado com was / were.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I was ready for the test. | I wasn't late for the test. | Were you ready for the test? |
| There was a market in the picture. | There was not a bank in the picture. | Was there a market in the picture? |
| There were two children in the park. | There were not four children in the park. | Were there two children in the park? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Were you ready for the test?
2. Was there a market in the picture?
3. Were there two children in the park?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Were you ready for the test?
2. Was there a market in the picture?
3. Were there two children in the park?
4. Do you use past picture in your routine?
5. Can you make a sentence with answer column?

## WRAP-UP

- Professor revisa o foco gramatical: Leitura, escrita e descricao no passado com was / were.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Jh=`# LESSON 45 - Future Going to: Weekend Plans

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir going to para planos futuros de fim de semana.

---

## VOCABULÁRIO (20 palavras)
- Weekend trip
- Family lunch
- Clean kitchen
- Bus ticket
- Beach bag
- Travel map
- Phone charger
- Cooking pan
- Movie night
- Park walk
- Shopping list
- Laundry basket
- Birthday gift
- Coffee shop
- Study notebook
- Picnic blanket
- Hotel room
- Snack box
- Travel backpack
- Blue umbrella

## VERBOS DA AULA

- **TO TRAVEL** (viajar)
- **TO VISIT** (visitar)
- **TO CLEAN** (limpar)
- **TO COOK** (cozinhar)
- **TO REST** (descansar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to visit my aunt on Saturday. | I am not going to work on Saturday. | Are you going to visit your aunt on Saturday? |
| We are going to cook lunch at home. | We are not going to eat downtown. | Are you going to cook lunch at home? |
| They are going to travel next weekend. | They are not going to stay in town. | Are they going to travel next weekend? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema weekend plans com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Be going to para planos e intencoes.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to visit my aunt on Saturday. | I am not going to work on Saturday. | Are you going to visit your aunt on Saturday? |
| We are going to cook lunch at home. | We are not going to eat downtown. | Are you going to cook lunch at home? |
| They are going to travel next weekend. | They are not going to stay in town. | Are they going to travel next weekend? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you going to visit your aunt on Saturday?
2. Are you going to cook lunch at home?
3. Are they going to travel next weekend?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you going to visit your aunt on Saturday?
2. Are you going to cook lunch at home?
3. Are they going to travel next weekend?
4. Do you use weekend trip in your routine?
5. Can you make a sentence with family lunch?

## WRAP-UP

- Professor revisa o foco gramatical: Be going to para planos e intencoes.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,Zh=`# LESSON 46 - Future Going to: Health and Fitness Goals

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar going to com metas de saude e bem-estar.

---

## VOCABULÁRIO (20 palavras)
- Running shoes
- Water bottle
- Healthy salad
- Gym bag
- Sports watch
- Yoga mat
- Fruit bowl
- Morning alarm
- Park path
- Fitness app
- Protein shake
- Training plan
- Soft towel
- Blue sneakers
- Weekend race
- Gym locker
- Exercise bike
- Fresh juice
- Workout song
- Healthy snack

## VERBOS DA AULA

- **TO EXERCISE** (exercitar-se)
- **TO DRINK** (beber)
- **TO SLEEP** (dormir)
- **TO EAT** (comer)
- **TO START** (comecar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to exercise every morning. | I am not going to skip breakfast. | Are you going to exercise every morning? |
| She is going to drink more water. | She is not going to drink soda every day. | Is she going to drink more water? |
| We are going to start a new routine. | We are not going to start next month. | Are you going to start a new routine? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema health and fitness goals com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Going to with personal goals.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to exercise every morning. | I am not going to skip breakfast. | Are you going to exercise every morning? |
| She is going to drink more water. | She is not going to drink soda every day. | Is she going to drink more water? |
| We are going to start a new routine. | We are not going to start next month. | Are you going to start a new routine? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you going to exercise every morning?
2. Is she going to drink more water?
3. Are you going to start a new routine?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you going to exercise every morning?
2. Is she going to drink more water?
3. Are you going to start a new routine?
4. Do you use running shoes in your routine?
5. Can you make a sentence with water bottle?

## WRAP-UP

- Professor revisa o foco gramatical: Going to with personal goals.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,eg=`# LESSON 47 - Future Going to: Study Plans

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar going to com estudos e organizacao.

---

## VOCABULÁRIO (20 palavras)
- Study notebook
- English book
- Review list
- Class calendar
- Desk lamp
- Reading card
- Practice sheet
- Blue marker
- School backpack
- Wall schedule
- Water bottle
- Study app
- Phone timer
- Grammar chart
- Pencil case
- Library card
- Online class
- Study group
- Quiet room
- Homework folder

## VERBOS DA AULA

- **TO STUDY** (usar em contexto da aula)
- **TO REVIEW** (revisar)
- **TO PRACTICE** (praticar)
- **TO ORGANIZE** (organizar)
- **TO FINISH** (terminar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to study after dinner. | I am not going to study before work. | Are you going to study after dinner? |
| My friend is going to review the lesson tonight. | My friend is not going to review tomorrow morning. | Is your friend going to review the lesson tonight? |
| We are going to practice together on Friday. | We are not going to practice alone. | Are you going to practice together on Friday? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema study plans com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Questions and negatives with going to.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to study after dinner. | I am not going to study before work. | Are you going to study after dinner? |
| My friend is going to review the lesson tonight. | My friend is not going to review tomorrow morning. | Is your friend going to review the lesson tonight? |
| We are going to practice together on Friday. | We are not going to practice alone. | Are you going to practice together on Friday? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you going to study after dinner?
2. Is your friend going to review the lesson tonight?
3. Are you going to practice together on Friday?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you going to study after dinner?
2. Is your friend going to review the lesson tonight?
3. Are you going to practice together on Friday?
4. Do you use study notebook in your routine?
5. Can you make a sentence with english book?

## WRAP-UP

- Professor revisa o foco gramatical: Questions and negatives with going to.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,ng=`# LESSON 48 - Future Going to: Home Improvements

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Expandir going to com planos para casa e compras.

---

## VOCABULÁRIO (20 palavras)
- Blue paint
- New sofa
- Wall mirror
- Floor lamp
- Kitchen shelf
- Curtain rod
- Wooden table
- Tool box
- Shopping cart
- Home catalog
- Bedroom wall
- Bathroom sink
- Dining chair
- Plant vase
- Light switch
- Door handle
- Family picture
- Living room
- Work gloves
- Window curtain

## VERBOS DA AULA

- **TO PAINT** (pintar)
- **TO BUY** (comprar)
- **TO FIX** (consertar)
- **TO CHANGE** (mudar)
- **TO DECORATE** (decorar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to paint the bedroom blue. | I am not going to paint the kitchen. | Are you going to paint the bedroom blue? |
| We are going to buy a new sofa. | We are not going to buy a TV. | Are you going to buy a new sofa? |
| My father is going to fix the sink tomorrow. | My father is not going to fix the window. | Is your father going to fix the sink tomorrow? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema home improvements com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Going to with house projects and intentions.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to paint the bedroom blue. | I am not going to paint the kitchen. | Are you going to paint the bedroom blue? |
| We are going to buy a new sofa. | We are not going to buy a TV. | Are you going to buy a new sofa? |
| My father is going to fix the sink tomorrow. | My father is not going to fix the window. | Is your father going to fix the sink tomorrow? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you going to paint the bedroom blue?
2. Are you going to buy a new sofa?
3. Is your father going to fix the sink tomorrow?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you going to paint the bedroom blue?
2. Are you going to buy a new sofa?
3. Is your father going to fix the sink tomorrow?
4. Do you use blue paint in your routine?
5. Can you make a sentence with new sofa?

## WRAP-UP

- Professor revisa o foco gramatical: Going to with house projects and intentions.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,ag=`# LESSON 49 - Future Will: Predictions for Tomorrow

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir will para previsoes simples.

---

## VOCABULÁRIO (20 palavras)
- Cloudy sky
- Weather app
- Morning traffic
- City bus
- Office meeting
- School project
- Phone alert
- Rain jacket
- Coffee mug
- Bus stop
- Blue umbrella
- Street corner
- Hot sun
- Cold wind
- Travel bag
- Train line
- Work laptop
- Wall calendar
- Family dinner
- Weekend game

## VERBOS DA AULA

- **TO RAIN** (chover)
- **TO ARRIVE** (chegar)
- **TO HAPPEN** (acontecer)
- **TO STAY** (ficar)
- **TO IMPROVE** (melhorar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| It will rain tomorrow. | It won't be sunny all day. | Will it rain tomorrow? |
| The bus will arrive soon. | The bus won't arrive late. | Will the bus arrive soon? |
| Your English will improve this year. | Your English won't stay the same. | Will your English improve this year? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema predictions for tomorrow com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Will para previsoes e ideias espontaneas.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| It will rain tomorrow. | It won't be sunny all day. | Will it rain tomorrow? |
| The bus will arrive soon. | The bus won't arrive late. | Will the bus arrive soon? |
| Your English will improve this year. | Your English won't stay the same. | Will your English improve this year? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Will it rain tomorrow?
2. Will the bus arrive soon?
3. Will your English improve this year?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Will it rain tomorrow?
2. Will the bus arrive soon?
3. Will your English improve this year?
4. Do you use cloudy sky in your routine?
5. Can you make a sentence with weather app?

## WRAP-UP

- Professor revisa o foco gramatical: Will para previsoes e ideias espontaneas.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,tg=`# LESSON 50 - Future Will: Instant Decisions

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar will para decisoes tomadas no momento.

---

## VOCABULÁRIO (20 palavras)
- Heavy bag
- Phone battery
- Open door
- Cold water
- Office file
- Bus card
- Shopping bag
- Coffee cup
- Teacher notebook
- Family phone
- Door key
- Lunch box
- Travel map
- Desk drawer
- Wall shelf
- Small package
- Blue folder
- Class marker
- Water bottle
- Snack tray

## VERBOS DA AULA

- **TO HELP** (ajudar)
- **TO CARRY** (carregar)
- **TO CALL** (ligar)
- **TO OPEN** (abrir)
- **TO BRING** (trazer)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I will carry your bag. | I won't leave you alone. | Will you carry my bag? |
| She will call the doctor now. | She won't send an email now. | Will she call the doctor now? |
| We will open the window. | We won't open the door. | Will you open the window? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema instant decisions com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Will com decisoes espontaneas e offers.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I will carry your bag. | I won't leave you alone. | Will you carry my bag? |
| She will call the doctor now. | She won't send an email now. | Will she call the doctor now? |
| We will open the window. | We won't open the door. | Will you open the window? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Will you carry my bag?
2. Will she call the doctor now?
3. Will you open the window?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Will you carry my bag?
2. Will she call the doctor now?
3. Will you open the window?
4. Do you use heavy bag in your routine?
5. Can you make a sentence with phone battery?

## WRAP-UP

- Professor revisa o foco gramatical: Will com decisoes espontaneas e offers.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,rg=`# LESSON 51 - Future Will: Promises and Commitments

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar will com promessas e compromissos.

---

## VOCABULÁRIO (20 palavras)
- Phone reminder
- Study plan
- Bus ticket
- Monthly bill
- Family visit
- Office key
- Travel card
- Blue notebook
- Wall calendar
- Dinner invitation
- Birthday gift
- Payment receipt
- Coffee break
- Doctor appointment
- Quiet library
- School test
- Gym class
- Phone message
- Bank line
- Hotel booking

## VERBOS DA AULA

- **TO REMEMBER** (lembrar)
- **TO STUDY** (usar em contexto da aula)
- **TO RETURN** (retornar)
- **TO PAY** (pagar)
- **TO VISIT** (visitar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I will study tonight. | I won't forget the homework. | Will you study tonight? |
| My brother will pay the bill tomorrow. | My brother won't pay it next week. | Will your brother pay the bill tomorrow? |
| We will visit grandma on Sunday. | We won't visit her on Monday. | Will you visit grandma on Sunday? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema promises and commitments com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Will / won't in promises.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I will study tonight. | I won't forget the homework. | Will you study tonight? |
| My brother will pay the bill tomorrow. | My brother won't pay it next week. | Will your brother pay the bill tomorrow? |
| We will visit grandma on Sunday. | We won't visit her on Monday. | Will you visit grandma on Sunday? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Will you study tonight?
2. Will your brother pay the bill tomorrow?
3. Will you visit grandma on Sunday?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Will you study tonight?
2. Will your brother pay the bill tomorrow?
3. Will you visit grandma on Sunday?
4. Do you use phone reminder in your routine?
5. Can you make a sentence with study plan?

## WRAP-UP

- Professor revisa o foco gramatical: Will / won't in promises.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,og=`# LESSON 52 - Future Will: Offers and Requests

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Expandir will com ofertas de ajuda e pedidos simples.

---

## VOCABULÁRIO (20 palavras)
- Coffee cup
- Phone message
- Blue folder
- Bus map
- Class notebook
- Water bottle
- Hotel key
- Train ticket
- Open document
- Small package
- Study chair
- Teacher table
- Snack box
- Cold juice
- Desk lamp
- Parking ticket
- Family car
- Office badge
- Reading glasses
- Project file

## VERBOS DA AULA

- **TO MAKE** (fazer)
- **TO GET** (chegar/obter)
- **TO SEND** (usar em contexto da aula)
- **TO SHOW** (mostrar)
- **TO WAIT** (esperar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I will make some coffee. | I won't make tea now. | Will you make some coffee? |
| I will send the document tonight. | I won't send it tomorrow morning. | Will you send the document tonight? |
| Will you wait for me after class? | I won't leave early. | Will you wait for me after class? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema offers and requests com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Will for offers: I'll..., Will you...?

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I will make some coffee. | I won't make tea now. | Will you make some coffee? |
| I will send the document tonight. | I won't send it tomorrow morning. | Will you send the document tonight? |
| Will you wait for me after class? | I won't leave early. | Will you wait for me after class? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Will you make some coffee?
2. Will you send the document tonight?
3. Will you wait for me after class?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Will you make some coffee?
2. Will you send the document tonight?
3. Will you wait for me after class?
4. Do you use coffee cup in your routine?
5. Can you make a sentence with phone message?

## WRAP-UP

- Professor revisa o foco gramatical: Will for offers: I'll..., Will you...?
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,ig=`# LESSON 53 - There will be: Future City Changes

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir there will be com mudancas futuras na cidade.

---

## VOCABULÁRIO (20 palavras)
- New park
- Bus line
- City hospital
- Bike lane
- Coffee shop
- School building
- Public library
- Train station
- Parking lot
- Bus terminal
- Street light
- Green square
- Sports center
- Open market
- River bridge
- Medical clinic
- Tourist center
- Book store
- Pet park
- Playground area

## VERBOS DA AULA

- **TO BUILD** (construir)
- **TO OPEN** (abrir)
- **TO IMPROVE** (melhorar)
- **TO CREATE** (criar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There will be a new park in my neighborhood. | There will not be a mall in my street. | Will there be a new park in your neighborhood? |
| There will be more buses next year. | There will not be fewer buses next year. | Will there be more buses next year? |
| There will be a library near the station. | There will not be a cinema near the station. | Will there be a library near the station? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema future city changes com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** There will be em previsoes sobre lugares.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There will be a new park in my neighborhood. | There will not be a mall in my street. | Will there be a new park in your neighborhood? |
| There will be more buses next year. | There will not be fewer buses next year. | Will there be more buses next year? |
| There will be a library near the station. | There will not be a cinema near the station. | Will there be a library near the station? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Will there be a new park in your neighborhood?
2. Will there be more buses next year?
3. Will there be a library near the station?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Will there be a new park in your neighborhood?
2. Will there be more buses next year?
3. Will there be a library near the station?
4. Do you use new park in your routine?
5. Can you make a sentence with bus line?

## WRAP-UP

- Professor revisa o foco gramatical: There will be em previsoes sobre lugares.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,sg=`# LESSON 54 - There will be: Future Events

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar there will be com eventos e programacao futura.

---

## VOCABULÁRIO (20 palavras)
- Music festival
- School fair
- Food truck
- Dance show
- Art workshop
- Book fair
- Guest singer
- Open stage
- Ticket line
- Snack stand
- Class party
- Movie night
- Family picnic
- Sports day
- Town concert
- Photo booth
- Blue banner
- Weekend event
- Public square
- Travel bus

## VERBOS DA AULA

- **TO ORGANIZE** (organizar)
- **TO ANNOUNCE** (anunciar)
- **TO INVITE** (convidar)
- **TO PREPARE** (usar em contexto da aula)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There will be a music festival on Friday. | There will not be a concert on Thursday. | Will there be a music festival on Friday? |
| There will be three food trucks outside. | There will not be ten food trucks outside. | Will there be three food trucks outside? |
| There will be a dance show at school. | There will not be a movie at school. | Will there be a dance show at school? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema future events com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** There will be + dates, events and quantities.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| There will be a music festival on Friday. | There will not be a concert on Thursday. | Will there be a music festival on Friday? |
| There will be three food trucks outside. | There will not be ten food trucks outside. | Will there be three food trucks outside? |
| There will be a dance show at school. | There will not be a movie at school. | Will there be a dance show at school? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Will there be a music festival on Friday?
2. Will there be three food trucks outside?
3. Will there be a dance show at school?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Will there be a music festival on Friday?
2. Will there be three food trucks outside?
3. Will there be a dance show at school?
4. Do you use music festival in your routine?
5. Can you make a sentence with school fair?

## WRAP-UP

- Professor revisa o foco gramatical: There will be + dates, events and quantities.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,lg=`# LESSON 55 - Revisao 5: Future Forms Review

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Revisar going to, will e there will be.

---

## VOCABULÁRIO (20 palavras)
- Weekend trip
- Running shoes
- Study notebook
- Blue paint
- Cloudy sky
- Heavy bag
- Phone reminder
- Coffee cup
- New park
- Music festival
- Bus line
- Food truck
- Travel backpack
- Wall calendar
- Open market
- Water bottle
- Project file
- Family visit
- Bike lane
- Dance show

## VERBOS DA AULA

- **TO REVIEW** (revisar)
- **TO PLAN** (planejar)
- **TO PREDICT** (prever)
- **TO ANSWER** (responder)
- **TO COMPARE** (comparar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to study tonight. | I am not going to rest tonight. | Are you going to study tonight? |
| It will rain tomorrow. | It won't be sunny all day. | Will it rain tomorrow? |
| There will be a new park downtown. | There will not be a mall downtown. | Will there be a new park downtown? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema future forms review com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Revisao de planos, previsoes e eventos futuros.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to study tonight. | I am not going to rest tonight. | Are you going to study tonight? |
| It will rain tomorrow. | It won't be sunny all day. | Will it rain tomorrow? |
| There will be a new park downtown. | There will not be a mall downtown. | Will there be a new park downtown? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you going to study tonight?
2. Will it rain tomorrow?
3. Will there be a new park downtown?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you going to study tonight?
2. Will it rain tomorrow?
3. Will there be a new park downtown?
4. Do you use weekend trip in your routine?
5. Can you make a sentence with running shoes?

## WRAP-UP

- Professor revisa o foco gramatical: Revisao de planos, previsoes e eventos futuros.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,ug=`# LESSON 56 - Prova 5: Future Forms Assessment

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Avaliar going to, will e there will be.

---

## VOCABULÁRIO (20 palavras)
- Future sentence
- Answer card
- Reading text
- Listening task
- Class timer
- Exam sheet
- Project image
- Travel plan
- Weather chart
- City map
- Concert poster
- Bus schedule
- Practice line
- Correct option
- Blue pen
- Student chair
- Open notebook
- Teacher folder
- Quiet room
- Final grade

## VERBOS DA AULA

- **TO COMPLETE** (completar)
- **TO IDENTIFY** (identificar)
- **TO CHOOSE** (escolher)
- **TO WRITE** (escrever)
- **TO REVISE** (revisar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to complete the test now. | I am not going to talk now. | Are you going to complete the test now? |
| The weather will change tomorrow. | The weather won't stay the same. | Will the weather change tomorrow? |
| There will be a question about plans. | There will not be only one question. | Will there be a question about plans? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema future forms assessment com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Frases futuras em contexto de planos, previsoes e eventos.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am going to complete the test now. | I am not going to talk now. | Are you going to complete the test now? |
| The weather will change tomorrow. | The weather won't stay the same. | Will the weather change tomorrow? |
| There will be a question about plans. | There will not be only one question. | Will there be a question about plans? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you going to complete the test now?
2. Will the weather change tomorrow?
3. Will there be a question about plans?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you going to complete the test now?
2. Will the weather change tomorrow?
3. Will there be a question about plans?
4. Do you use future sentence in your routine?
5. Can you make a sentence with answer card?

## WRAP-UP

- Professor revisa o foco gramatical: Frases futuras em contexto de planos, previsoes e eventos.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,cg=`# LESSON 57 - Modal Verbs: Can for Ability and Permission

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Introduzir can para habilidade e permissao em contextos simples.

---

## VOCABULÁRIO (20 palavras)
- Swimming pool
- Driver license
- English phrase
- Class door
- Office computer
- Phone camera
- Music speaker
- Bus card
- Blue marker
- School lab
- Library card
- Gym room
- Coffee machine
- Bike helmet
- Travel app
- Pet carrier
- Art brush
- Projector remote
- Kitchen knife
- Parking gate

## VERBOS DA AULA

- **TO SWIM** (nadar)
- **TO DRIVE** (dirigir)
- **TO SPEAK** (falar)
- **TO OPEN** (abrir)
- **TO USE** (usar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I can swim very well. | I can't swim in cold water. | Can you swim very well? |
| She can drive to work. | She can't drive a bus. | Can she drive to work? |
| Can I use the office computer? | I can't use the teacher computer now. | Can I use the office computer? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema can for ability and permission com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Can / can't for ability and permission.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I can swim very well. | I can't swim in cold water. | Can you swim very well? |
| She can drive to work. | She can't drive a bus. | Can she drive to work? |
| Can I use the office computer? | I can't use the teacher computer now. | Can I use the office computer? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Can you swim very well?
2. Can she drive to work?
3. Can I use the office computer?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Can you swim very well?
2. Can she drive to work?
3. Can I use the office computer?
4. Do you use swimming pool in your routine?
5. Can you make a sentence with driver license?

## WRAP-UP

- Professor revisa o foco gramatical: Can / can't for ability and permission.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,mg=`# LESSON 58 - Modal Verbs: Could and Would for Politeness

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Praticar could e would em pedidos educados e preferencias.

---

## VOCABULÁRIO (20 palavras)
- Glass of water
- Menu card
- Bus ticket
- Hotel room
- Phone charger
- Blue pen
- Coffee cup
- Window seat
- Teacher notebook
- Project file
- Small favor
- Shopping bag
- Restaurant table
- Taxi ride
- Travel pillow
- Desk chair
- Soup bowl
- Book shelf
- Train ticket
- Study guide

## VERBOS DA AULA

- **TO HELP** (ajudar)
- **TO REPEAT** (repetir)
- **TO PASS** (usar em contexto da aula)
- **TO LIKE** (usar em contexto da aula)
- **TO ORDER** (pedir)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| Could you repeat the question, please? | You couldn't hear the audio yesterday. | Could you repeat the question, please? |
| Would you like some coffee? | I wouldn't like cold soup. | Would you like some coffee? |
| I would like a window seat. | I wouldn't like an aisle seat. | Would you like a window seat? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema could and would for politeness com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Could for polite requests; would for preferences.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| Could you repeat the question, please? | You couldn't hear the audio yesterday. | Could you repeat the question, please? |
| Would you like some coffee? | I wouldn't like cold soup. | Would you like some coffee? |
| I would like a window seat. | I wouldn't like an aisle seat. | Would you like a window seat? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Could you repeat the question, please?
2. Would you like some coffee?
3. Would you like a window seat?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Could you repeat the question, please?
2. Would you like some coffee?
3. Would you like a window seat?
4. Do you use glass of water in your routine?
5. Can you make a sentence with menu card?

## WRAP-UP

- Professor revisa o foco gramatical: Could for polite requests; would for preferences.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,dg=`# LESSON 59 - Modal Verbs: Should and Must for Advice

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Consolidar should e must para conselhos e obrigacoes.

---

## VOCABULÁRIO (20 palavras)
- Study schedule
- Doctor note
- School uniform
- Safety helmet
- Bus card
- Water bottle
- Healthy meal
- Warm jacket
- Office badge
- Class rule
- Homework folder
- Morning alarm
- Gym bag
- Work gloves
- Traffic sign
- Blue mask
- Lunch box
- Travel document
- Quiet room
- Exam paper

## VERBOS DA AULA

- **TO STUDY** (usar em contexto da aula)
- **TO REST** (descansar)
- **TO WEAR** (usar/vestir)
- **TO ARRIVE** (chegar)
- **TO BRING** (trazer)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| You should study every day. | You shouldn't study only before the test. | Should you study every day? |
| You must wear a helmet here. | You mustn't park in this area. | Must you wear a helmet here? |
| We should bring water to class. | We shouldn't forget our notebooks. | Should we bring water to class? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema should and must for advice com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Should for advice; must for obligation and rules.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| You should study every day. | You shouldn't study only before the test. | Should you study every day? |
| You must wear a helmet here. | You mustn't park in this area. | Must you wear a helmet here? |
| We should bring water to class. | We shouldn't forget our notebooks. | Should we bring water to class? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Should you study every day?
2. Must you wear a helmet here?
3. Should we bring water to class?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Should you study every day?
2. Must you wear a helmet here?
3. Should we bring water to class?
4. Do you use study schedule in your routine?
5. Can you make a sentence with doctor note?

## WRAP-UP

- Professor revisa o foco gramatical: Should for advice; must for obligation and rules.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,pg=`# LESSON 60 - Modal Verbs: May and Might for Possibility

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Expandir may e might para permissao e possibilidade.

---

## VOCABULÁRIO (20 palavras)
- Cloudy sky
- Travel plan
- Library room
- Doctor office
- Weekend trip
- City museum
- Blue umbrella
- Train ticket
- Open calendar
- Family lunch
- Study plan
- Phone message
- Bus line
- Hotel booking
- Art class
- Beach bag
- Rain jacket
- Project date
- Coffee break
- Traffic alert

## VERBOS DA AULA

- **TO RAIN** (chover)
- **TO TRAVEL** (viajar)
- **TO STAY** (ficar)
- **TO START** (comecar)
- **TO VISIT** (visitar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| May I open the window? | You may not use this room now. | May I open the window? |
| It might rain this afternoon. | It might not rain tonight. | Might it rain this afternoon? |
| We may visit the museum tomorrow. | We may not visit the beach tomorrow. | May we visit the museum tomorrow? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema may and might for possibility com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** May for permission; might for possibility.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| May I open the window? | You may not use this room now. | May I open the window? |
| It might rain this afternoon. | It might not rain tonight. | Might it rain this afternoon? |
| We may visit the museum tomorrow. | We may not visit the beach tomorrow. | May we visit the museum tomorrow? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. May I open the window?
2. Might it rain this afternoon?
3. May we visit the museum tomorrow?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. May I open the window?
2. Might it rain this afternoon?
3. May we visit the museum tomorrow?
4. Do you use cloudy sky in your routine?
5. Can you make a sentence with travel plan?

## WRAP-UP

- Professor revisa o foco gramatical: May for permission; might for possibility.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,fg=`# LESSON 61 - Revisao geral: Course Review

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Revisar os tempos e estruturas principais de todo o curso.

---

## VOCABULÁRIO (20 palavras)
- Alarm clock
- Busy mother
- Travel ticket
- Happy student
- Big sofa
- Office laptop
- Sunny beach
- Old cinema
- Weekend trip
- Cloudy sky
- Music festival
- Swimming pool
- Glass of water
- Study schedule
- Blue umbrella
- Phone reminder
- Train ticket
- Family lunch
- School uniform
- Open calendar

## VERBOS DA AULA

- **TO REVIEW** (revisar)
- **TO COMPARE** (comparar)
- **TO CHOOSE** (escolher)
- **TO EXPLAIN** (explicar)
- **TO PRACTICE** (praticar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I review all units before the final test. | I don't review only one lesson. | Do you review all units before the final test? |
| She can explain the grammar now. | She can't explain every detail alone. | Can she explain the grammar now? |
| There will be a final test tomorrow. | There will not be class after the test. | Will there be a final test tomorrow? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema course review com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Revisao geral de present, past, future, there to be e modal verbs.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I review all units before the final test. | I don't review only one lesson. | Do you review all units before the final test? |
| She can explain the grammar now. | She can't explain every detail alone. | Can she explain the grammar now? |
| There will be a final test tomorrow. | There will not be class after the test. | Will there be a final test tomorrow? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Do you review all units before the final test?
2. Can she explain the grammar now?
3. Will there be a final test tomorrow?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Do you review all units before the final test?
2. Can she explain the grammar now?
3. Will there be a final test tomorrow?
4. Do you use alarm clock in your routine?
5. Can you make a sentence with busy mother?

## WRAP-UP

- Professor revisa o foco gramatical: Revisao geral de present, past, future, there to be e modal verbs.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`,hg=`# LESSON 62 - Prova final: Final Assessment

**Duração:** 60 minutos  
**Nível:** Iniciante (A1)  
**Objetivo:** Avaliar de forma integrada os conteudos principais do curso.

---

## VOCABULÁRIO (20 palavras)
- Final exam
- Answer sheet
- Listening task
- Reading text
- Grammar chart
- Short dialogue
- Picture prompt
- Blue pen
- Quiet classroom
- Teacher table
- Student card
- Test booklet
- Wall clock
- Question box
- Correct option
- Review note
- Class timer
- Project image
- Final score
- Open notebook

## VERBOS DA AULA

- **TO COMPLETE** (completar)
- **TO IDENTIFY** (identificar)
- **TO ANSWER** (responder)
- **TO WRITE** (escrever)
- **TO REVISE** (revisar)

## ESTRUTURAS DA AULA

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am ready for the final exam. | I am not nervous today. | Are you ready for the final exam? |
| The test will include reading and listening. | The test won't include only grammar. | Will the test include reading and listening? |
| There are three sections in the exam. | There are not five sections in the exam. | Are there three sections in the exam? |

## CRONOGRAMA DA AULA

### 1. WARM-UP (5 minutos)

**Atividade:** Introduzir o tema final assessment com perguntas simples.

- Professor apresenta 2 ou 3 imagens do vocabulario.
- Alunos identificam palavras conhecidas em portugues ou ingles.
- Professor conecta o tema ao foco gramatical da aula.

### 2. VOCABULARY PRESENTATION (10 minutos)

- Professor le os 20 itens em voz alta.
- Alunos repetem em coro e em duplas.
- Professor destaca os 5 itens mais uteis para a pratica oral.

### 3. GRAMMAR FOCUS (10 minutos)

**Foco:** Leitura, escuta e producao curta com estruturas acumuladas.

- Professor escreve exemplos curtos no quadro.
- Alunos observam a forma afirmativa, negativa e interrogativa.
- Correcao rapida de pronuncia e ordem das palavras.

### 4. STRUCTURE PRESENTATION (10 minutos)

| Afirmativa | Negativa | Pergunta |
|------------|----------|----------|
| I am ready for the final exam. | I am not nervous today. | Are you ready for the final exam? |
| The test will include reading and listening. | The test won't include only grammar. | Will the test include reading and listening? |
| There are three sections in the exam. | There are not five sections in the exam. | Are there three sections in the exam? |

### 5. CONTROLLED PRACTICE (10 minutos)

1. Are you ready for the final exam?
2. Will the test include reading and listening?
3. Are there three sections in the exam?

- Professor monitora respostas orais e escrita curta.
- Alunos trocam perguntas em pares.

### 6. PAIR PRACTICE (10 minutos)

- Um aluno faz a pergunta e o colega responde com frase completa.
- Depois, trocam os papeis usando novo vocabulario da aula.
- Professor corrige somente o erro principal para manter fluidez.

### 7. WRAP-UP (5 minutos)

- Revisar a estrutura principal da aula.
- Pedir 2 respostas completas de alunos diferentes.
- Encaminhar o homework para consolidacao.


## CONTROLLED PRACTICE

1. Are you ready for the final exam?
2. Will the test include reading and listening?
3. Are there three sections in the exam?
4. Do you use final exam in your routine?
5. Can you make a sentence with answer sheet?

## WRAP-UP

- Professor revisa o foco gramatical: Leitura, escuta e producao curta com estruturas acumuladas.
- Alunos respondem oralmente a uma pergunta final em dupla.
- Homework sugerido para fixacao e reutilizacao do vocabulario.

## RESUMO DA AULA

| Etapa | Tempo | Atividade |
|-------|-------|-----------|
| Warm-up | 5 min | Ativacao de repertorio |
| Vocabulary | 10 min | Repeticao guiada |
| Grammar Focus | 10 min | Modelo e explicacao |
| Structure | 10 min | Afirmativa, negativa e pergunta |
| Controlled Practice | 10 min | Perguntas e respostas |
| Pair Practice | 10 min | Conversacao em pares |
| Wrap-up | 5 min | Revisao e homework |
`;function gg(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qn(e,n){var t;const a=n.split("|").map(r=>r.trim()).filter(Boolean);for(const r of a){const o=new RegExp(`##\\s*${gg(r)}[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s|$)`,"i"),i=e.match(o);if((t=i==null?void 0:i[1])!=null&&t.trim())return i[1].trim()}return""}function vg(e){var a;const n=e.match(/\*\*Objetivo:\*\*\s*(.+)/i);return((a=n==null?void 0:n[1])==null?void 0:a.trim())??"Objetivo nao informado"}function yg(e){var a;const n=e.match(/^#\s+(.+)/m);return((a=n==null?void 0:n[1])==null?void 0:a.trim())??"Aula sem titulo"}function Qt(e){const n=e.split(`
`).map(a=>a.trim()).filter(a=>a.length>0).map(a=>a.replace(/^[-\d.\s]+/,"").trim());return n.length>0?n:["Conteudo de revisao em sala."]}function Ag(e,n){return[n??"",e].join(" ").replace(/\s+/g," ").trim().toLowerCase()}function Pg(e){return e.split(`
`).map(a=>a.trim().replace(/^-/,"").trim()).map(a=>{const[t,r]=a.split("|").map(o=>o.trim()).filter(Boolean);return Ag(t,r)})}function wg(e){const n=e.split(`
`).map(a=>a.trim()).find(a=>a.startsWith("-")||a.includes(","));return n?n.replace(/^-\s*/,"").split(",").map(a=>a.trim()).filter(Boolean).map(a=>({verb:a,usage:"aplique em frases da aula"})):[{verb:"review",usage:"revisao"}]}function Rg(e){const n=qn(e,"Gramatica|Gramática|Grammar");return{title:"Foco gramatical",bullets:Qt(n)}}function Tg(e,n){return Array.from(new Set(e.filter(t=>t!==n))).slice(0,2)}function kg(e,n){const a=n.slice(0,3).map(o=>({prompt:"Complete com o verbo correto: I ______ every day.",answer:o.verb.split(" ")[0].toLowerCase(),tip:`Use o verbo "${o.verb}".`})),t=[...n.map(o=>o.verb.toLowerCase()),"homework","classroom","teacher"],r=e.slice(0,3).map(o=>{const i=Tg(t,o);return{question:"Qual expressao faz parte do vocabulario da aula?",options:[o,...i].sort(),answer:o}});return{fillBlanks:a,multipleChoice:r}}function Cg(e){var a;if(e.toLowerCase().includes("show"))return 0;const n=(a=e.match(/(\d+)/))==null?void 0:a[1];return Number(n??99)}function Eg(e,n){const a=yg(n),t=vg(n),r=Pg(qn(n,"Vocabulario|Vocabulário|Vocabulary")),o=wg(qn(n,"Verbos|Verbos da aula|Verbs")),i=Rg(n),s=Qt(qn(n,"Preparacao|Preparação|Warm-up|Warm up")),l=Qt(qn(n,"Desenvolvimento|Development|Structure Presentation|Controlled Practice")),u=Qt(qn(n,"Homework|Wrap-up|Wrap up")),h=kg(r,o);return{id:e.toLowerCase().replace(".md",""),order:Cg(e),title:a,objective:t,vocab:r,verbs:o,grammar:i,prep:s,development:l,homework:u,practice:h}}function um(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function xn(e,n){var a;for(const t of n){const r=new RegExp(`##\\s*${um(t)}[^\\n]*\\n([\\s\\S]*?)(?=\\n##\\s|$)`,"i"),o=e.match(r);if((a=o==null?void 0:o[1])!=null&&a.trim())return o[1].trim()}return""}function yo(e,n,a){var o;const t=new RegExp(`\\*\\*${um(n)}:\\*\\*\\s*(.+)`,"i"),r=e.match(t);return((o=r==null?void 0:r[1])==null?void 0:o.trim())??a}function Sg(e){var a;const n=e.match(/^#\s+(.+)/m);return((a=n==null?void 0:n[1])==null?void 0:a.trim())??"Guia sem titulo"}function Br(e){return e.replace(/\*\*/g,"").replace(/`/g,"").trim()}function gi(e){const n=e.split(`
`).map(a=>Br(a.trim())).filter(a=>a.length>0);return n.length===0?["Sem conteudo nesta secao."]:n}function Lt(e){const n=gi(e).filter(a=>a.startsWith("-")||/^\d+\./.test(a)||/^###\s+/i.test(a)).map(a=>a.replace(/^###\s+/,"").replace(/^[-\d.\s]+/,"").trim()).filter(a=>a.length>0);return n.length>0?n:gi(e).slice(0,8)}function Og(e,n){return[n??"",e].join(" ").replace(/\s+/g," ").trim().toLowerCase()}function Ig(e){const n=e.split(`
`).map(a=>a.trim().replace(/^-/,"").trim());return n.length===0?["guided review","classroom practice"]:n.map(a=>{const[t,r]=a.split("|").map(o=>Br(o.trim())).filter(Boolean);return Og(t,r)})}function bg(e){const n=gi(e).filter(a=>a.startsWith("-")).map(a=>a.replace(/^-\s*/,"").trim());return n.length===0?[{verb:"review",usage:"revisao"}]:n.map(a=>{const t=a.match(/\*\*([^*]+)\*\*\s*\(([^)]+)\)/);return t?{verb:t[1].trim().toLowerCase(),usage:"aplicar em frases da aula"}:{verb:Br(a).replace(/\(.+\)/,"").trim().toLowerCase(),usage:"aplicar em frases da aula"}})}function xg(e){const a=xn(e,["ESTRUTURAS DA AULA","STRUCTURE PRESENTATION"]).split(`
`).map(t=>t.trim()).filter(t=>t.includes("|")&&!t.includes("---")&&!t.toLowerCase().includes("afirmativa"));return a.length===0?["Estruturas nao detalhadas no arquivo."]:a.map(t=>{const[r,o,i]=t.split("|").map(s=>Br(s.trim())).filter(Boolean);return`Afirmativa: ${r} | Negativa: ${o} | Pergunta: ${i}`})}function Ng(e){var a;if(e.toLowerCase().includes("show"))return 0;const n=(a=e.match(/(\d+)/))==null?void 0:a[1];return Number(n??99)}function Ug(e,n){const a=xn(n,["CRONOGRAMA DA AULA","SCHEDULE"]),t=xn(n,["CONTROLLED PRACTICE","PRACTICE"]),r=xn(n,["WRAP-UP","WRAP UP"]),o=xn(n,["RESUMO DA AULA","CLASS SUMMARY"]);return{id:e.toLowerCase().replace(".md",""),order:Ng(e),title:Sg(n),objective:yo(n,"Objetivo","Objetivo pedagogico nao informado"),duration:yo(n,"Duração","60 minutos"),level:yo(n,"Nível","A1"),vocab:Ig(xn(n,["VOCABULÁRIO","VOCABULARIO","VOCABULARY"])),verbs:bg(xn(n,["VERBOS DA AULA","VERBOS","VERBS"])),structures:xg(n),timeline:Lt(a),controlledPractice:Lt(t),wrapUp:Lt(r),lessonSummary:Lt(o)}}const Dg=Object.assign({"../../classes/Aula01.md":Kf,"../../classes/Aula02.md":Xf,"../../classes/Aula03.md":Jf,"../../classes/Aula04.md":Zf,"../../classes/Aula05.md":eh,"../../classes/Aula06.md":nh,"../../classes/Aula07.md":ah,"../../classes/Aula08.md":th,"../../classes/Aula11.md":rh,"../../classes/Aula12.md":oh,"../../classes/Aula13.md":ih,"../../classes/Aula14.md":sh}),Lg=Object.assign({"../../teacher-guides/Aula01.md":lh,"../../teacher-guides/Aula02.md":uh,"../../teacher-guides/Aula03.md":ch,"../../teacher-guides/Aula04.md":mh,"../../teacher-guides/Aula05.md":dh,"../../teacher-guides/Aula06.md":ph,"../../teacher-guides/Aula07.md":fh,"../../teacher-guides/Aula08.md":hh,"../../teacher-guides/Aula09.md":gh,"../../teacher-guides/Aula10.md":vh,"../../teacher-guides/Aula11.md":yh,"../../teacher-guides/Aula12.md":Ah,"../../teacher-guides/Aula13.md":Ph,"../../teacher-guides/Aula14.md":wh,"../../teacher-guides/Aula15.md":Rh,"../../teacher-guides/Aula16.md":Th,"../../teacher-guides/Aula17.md":kh,"../../teacher-guides/Aula18.md":Ch,"../../teacher-guides/Aula19.md":Eh,"../../teacher-guides/Aula20.md":Sh,"../../teacher-guides/Aula21.md":Oh,"../../teacher-guides/Aula22.md":Ih,"../../teacher-guides/Aula23.md":bh,"../../teacher-guides/Aula24.md":xh,"../../teacher-guides/Aula25.md":Nh,"../../teacher-guides/Aula26.md":Uh,"../../teacher-guides/Aula27.md":Dh,"../../teacher-guides/Aula28.md":Lh,"../../teacher-guides/Aula29.md":_h,"../../teacher-guides/Aula30.md":Wh,"../../teacher-guides/Aula31.md":Mh,"../../teacher-guides/Aula32.md":zh,"../../teacher-guides/Aula33.md":Bh,"../../teacher-guides/Aula34.md":Fh,"../../teacher-guides/Aula35.md":jh,"../../teacher-guides/Aula36.md":Vh,"../../teacher-guides/Aula37.md":Gh,"../../teacher-guides/Aula38.md":Hh,"../../teacher-guides/Aula39.md":$h,"../../teacher-guides/Aula40.md":Yh,"../../teacher-guides/Aula41.md":qh,"../../teacher-guides/Aula42.md":Qh,"../../teacher-guides/Aula43.md":Kh,"../../teacher-guides/Aula44.md":Xh,"../../teacher-guides/Aula45.md":Jh,"../../teacher-guides/Aula46.md":Zh,"../../teacher-guides/Aula47.md":eg,"../../teacher-guides/Aula48.md":ng,"../../teacher-guides/Aula49.md":ag,"../../teacher-guides/Aula50.md":tg,"../../teacher-guides/Aula51.md":rg,"../../teacher-guides/Aula52.md":og,"../../teacher-guides/Aula53.md":ig,"../../teacher-guides/Aula54.md":sg,"../../teacher-guides/Aula55.md":lg,"../../teacher-guides/Aula56.md":ug,"../../teacher-guides/Aula57.md":cg,"../../teacher-guides/Aula58.md":mg,"../../teacher-guides/Aula59.md":dg,"../../teacher-guides/Aula60.md":pg,"../../teacher-guides/Aula61.md":fg,"../../teacher-guides/Aula62.md":hg});function cm(e){const n=e.split("/");return n[n.length-1]??e}function mm(e){return e.sort((n,a)=>n.order-a.order)}const _l=mm(Object.entries(Dg).map(([e,n])=>Eg(cm(e),n))),_g=mm(Object.entries(Lg).map(([e,n])=>Ug(cm(e),n))),dm="english_course_completed_lessons";function Wg(){const e=localStorage.getItem(dm);if(!e)return[];try{const n=JSON.parse(e);return Array.isArray(n)?n:[]}catch{return[]}}function Mg(){const[e,n]=R.useState(Wg);function a(r){n(o=>{const i=o.includes(r)?o.filter(s=>s!==r):[...o,r];return localStorage.setItem(dm,JSON.stringify(i)),i})}const t=R.useMemo(()=>e.length===0?0:e.length,[e]);return{completedIds:e,progressPercent:t,toggleLesson:a}}function zg({grammar:e}){return f.jsxs("section",{className:"rounded-2xl bg-white/90 p-5 shadow-lesson",children:[f.jsx("h2",{className:"font-heading text-2xl text-ocean",children:e.title}),f.jsx("ul",{className:"mt-3 space-y-2",children:e.bullets.map(n=>f.jsx("li",{className:"rounded-xl bg-dawn/70 px-3 py-2 text-slate",children:n},n))})]})}function Bg({prep:e,development:n,homework:a}){return f.jsxs("section",{className:"grid gap-4 lg:grid-cols-3",children:[f.jsxs("article",{className:"rounded-2xl bg-white/90 p-4 shadow-lesson",children:[f.jsx("h3",{className:"font-heading text-xl text-ocean",children:"Preparacao"}),f.jsx("ul",{className:"mt-3 space-y-2 text-sm text-slate",children:e.map(t=>f.jsxs("li",{children:["- ",t]},t))})]}),f.jsxs("article",{className:"rounded-2xl bg-white/90 p-4 shadow-lesson",children:[f.jsx("h3",{className:"font-heading text-xl text-ocean",children:"Aula em classe"}),f.jsx("ul",{className:"mt-3 space-y-2 text-sm text-slate",children:n.map(t=>f.jsxs("li",{children:["- ",t]},t))})]}),f.jsxs("article",{className:"rounded-2xl bg-white/90 p-4 shadow-lesson",children:[f.jsx("h3",{className:"font-heading text-xl text-ocean",children:"Homework"}),f.jsx("ul",{className:"mt-3 space-y-2 text-sm text-slate",children:a.map(t=>f.jsxs("li",{children:["- ",t]},t))})]})]})}function pm(){var e=Object.create(null);function n(a){delete e[a]}this.set=function(a,t,r){if(r!==void 0&&(typeof r!="number"||isNaN(r)||r<=0))throw new Error("Cache timeout must be a positive number");var o=e[a];o&&clearTimeout(o.timeout);var i={value:t,expire:r+Date.now()};return isNaN(i.expire)||(i.timeout=setTimeout(()=>n(a),r)),e[a]=i,t},this.del=function(a){var t=!0,r=e[a];return r?(clearTimeout(r.timeout),!isNaN(r.expire)&&r.expire<Date.now()&&(t=!1)):t=!1,t&&n(a),t},this.clear=function(){for(var a in e)clearTimeout(e[a].timeout);e=Object.create(null)},this.get=function(a){var t=e[a];if(t!==void 0){if(isNaN(t.expire)||t.expire>=Date.now())return t.value;delete e[a]}return null}}const vi=new pm;vi.Cache=pm;const Fg="https://translate.googleapis.com/translate_a/single";var jg={fetch:({key:e,from:n,to:a,text:t})=>[`${Fg}?client=gtx&sl=${n}&tl=${a}&dt=t&q=${encodeURIComponent(t)}`],parse:e=>e.json().then(n=>{if(!(n=n&&n[0]&&n[0][0]&&n[0].map(a=>a[0]).join("")))throw new Error("Translation not found");return n})},Vg={needkey:!0,fetch:({key:e,from:n,to:a,text:t})=>[`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${e}&lang=${n}-${a}&text=${encodeURIComponent(t)}`,{method:"POST",body:""}],parse:e=>e.json().then(n=>{if(n.code!==200)throw new Error(n.message);return n.text[0]})};const Gg="https://libretranslate.com/translate";var Hg={needkey:!1,fetch:({url:e=Gg,key:n,from:a,to:t,text:r})=>[e,{method:"POST",body:JSON.stringify({q:r,source:a,target:t,api_key:n}),headers:{"Content-Type":"application/json"}}],parse:e=>e.json().then(n=>{if(!n)throw new Error("No response found");if(n.error)throw new Error(n.error);if(!n.translatedText)throw new Error("No response found");return n.translatedText})},$g={needkey:!0,fetch:({key:e,from:n,to:a,text:t})=>[`https://api${e.endsWith(":fx")?"-free":""}.deepl.com/v2/translate?auth_key=${e}&source_lang=${n}&target_lang=${a}&text=${t=encodeURIComponent(t)}`,{method:"POST",body:""}],parse:async e=>{if(!e.ok)throw e.status===403?new Error("Auth Error, please review the key for DeepL"):new Error(`Error ${e.status}`);return e.json().then(n=>n.translations[0].text)}},Yg={google:jg,yandex:Vg,libre:Hg,deepl:$g},fm={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"},qg={afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese:"zh","church slavic":"cu","old slavonic":"cu","church slavonic":"cu","old bulgarian":"cu","old church slavonic":"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr","western frisian":"fy",fulah:"ff",georgian:"ka",gaelic:"gd","scottish gaelic":"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht","haitian creole":"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi","hiri motu":"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io","sichuan yi":"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk","central khmer":"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv","ndebele, south":"nr","south ndebele":"nr","ndebele, north":"nd","north ndebele":"nd",ndonga:"ng",nepali:"ne","norwegian nynorsk":"nn","nynorsk, norwegian":"nn","norwegian bokmål":"nb","bokmål, norwegian":"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl","northern sami":"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi",volapük:"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};const Qg=Object.values(fm).sort();var Ao=e=>{if(typeof e!="string")throw new Error('The "language" must be a string, received '+typeof e);if(e.length>100)throw new Error(`The "language" is too long at ${e.length} characters`);if(e=e.toLowerCase(),e=qg[e]||fm[e]||e,!Qg.includes(e))throw new Error(`The language "${e}" is not part of the ISO 639-1`);return e};const wr=function(e={}){if(!(this instanceof wr))return new wr(e);const n={from:"en",to:"en",cache:void 0,engine:"google",key:void 0,url:void 0,languages:Ao,engines:Yg,keys:{}},a=async(t,r={})=>{typeof r=="string"&&(r={to:r});const o=Object.keys(r).find(u=>u!=="from"&&u!=="to");if(o)throw new Error(`Invalid option with the name '${o}'`);r.text=t,r.from=Ao(r.from||a.from),r.to=Ao(r.to||a.to),r.cache=a.cache,r.engine=a.engine,r.url=a.url,r.id=`${r.url}:${r.from}:${r.to}:${r.engine}:${r.text}`,r.keys=a.keys||{};for(let u in a.keys)r.keys[u]=r.keys[u]||a.keys[u];r.key=r.key||a.key||r.keys[r.engine];const i=a.engines[r.engine],s=vi.get(r.id);if(s)return Promise.resolve(s);if(r.to===r.from)return Promise.resolve(r.text);if(i.needkey&&!r.key)throw new Error(`The engine "${r.engine}" needs a key, please provide it`);const l=i.fetch(r);return fetch(...l).then(i.parse).then(u=>vi.set(r.id,u,r.cache))};for(let t in n)a[t]=e[t]===void 0?n[t]:e[t];return a},Fr=new wr;Fr.Translate=wr;Fr.engine="google";Fr.cache=1e3*60*60*24;const _t={};function hm(e){return e.toLowerCase().replace(/\([^)]*\)/g,"").replace(/\s+/g," ").trim()}function Wl(e){return hm(e)||"traducao indisponivel"}async function Kg(e){const n=hm(e);if(!n)return"traducao indisponivel";if(_t[n])return _t[n];try{const a=await Fr(n,{from:"en",to:"pt"}),r=String(a).trim().toLowerCase()||Wl(n);return _t[n]=r,r}catch{const a=Wl(n);return _t[n]=a,a}}function vs(e){const[n,a]=R.useState({}),t=R.useMemo(()=>Array.from(new Set(e.map(o=>o.trim()).filter(Boolean))),[e]);R.useEffect(()=>{let o=!0;async function i(){const s=t.filter(u=>!n[u]);if(s.length===0)return;const l=await Promise.all(s.map(async u=>[u,await Kg(u)]));o&&a(u=>{const h={...u};return l.forEach(([p,g])=>{h[p]=g}),h})}return i(),()=>{o=!1}},[t,n]);function r(o){return n[o]??"traduzindo..."}return{getTranslation:r,translations:n}}function Xg({verbs:e}){const{getTranslation:n}=vs(e.map(a=>a.verb));return f.jsxs("section",{children:[f.jsx("h2",{className:"font-heading text-2xl text-ocean",children:"Verbos da aula"}),f.jsx("div",{className:"mt-4 overflow-hidden rounded-2xl border border-white/70 bg-white/90 shadow-lesson",children:f.jsxs("table",{className:"w-full text-sm",children:[f.jsx("thead",{className:"bg-ocean text-dawn",children:f.jsxs("tr",{children:[f.jsx("th",{className:"px-4 py-3 text-left",children:"Verbo"}),f.jsx("th",{className:"px-4 py-3 text-left",children:"Tradução"}),f.jsx("th",{className:"px-4 py-3 text-left",children:"Como praticar"})]})}),f.jsx("tbody",{children:e.map(a=>f.jsxs("tr",{className:"border-t border-dawn",children:[f.jsx("td",{className:"px-4 py-3 font-bold text-slate",children:a.verb}),f.jsx("td",{className:"px-4 py-3 text-slate",children:n(a.verb)}),f.jsx("td",{className:"px-4 py-3 text-slate",children:a.usage})]},a.verb))})]})})]})}function Jg({vocab:e}){const[n,a]=R.useState([]),{getTranslation:t}=vs(e);function r(o){a(i=>i.includes(o)?i.filter(s=>s!==o):[...i,o])}return f.jsxs("section",{children:[f.jsx("h2",{className:"font-heading text-2xl text-ocean",children:"Flashcards de vocabulario"}),f.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:e.map(o=>{const i=n.includes(o);return f.jsxs("button",{className:"rounded-2xl border border-white/70 bg-white/90 p-4 text-left shadow-lesson transition hover:-translate-y-1",onClick:()=>r(o),type:"button",children:[f.jsx("p",{className:"text-xs font-bold uppercase tracking-wide text-mint",children:i?"PT-BR":"EN"}),f.jsx("p",{className:"mt-1 font-heading text-xl text-slate",children:i?t(o):o})]},o)})})]})}function Zg({lessons:e,completedIds:n,onToggleLesson:a}){const{lessonId:t}=Rf(),r=e.find(i=>i.id===t);if(!r)return f.jsxs("div",{className:"mx-auto mt-16 max-w-xl rounded-3xl bg-white/85 p-8 text-center shadow-lesson",children:[f.jsx("h1",{className:"font-heading text-2xl text-ocean",children:"Aula nao encontrada"}),f.jsx(jn,{className:"mt-4 inline-block rounded-xl bg-ocean px-4 py-2 font-bold text-dawn",to:"/",children:"Voltar para inicio"})]});const o=n.includes(r.id);return f.jsxs("main",{className:"mx-auto max-w-6xl space-y-6 px-4 py-8",children:[f.jsxs("header",{className:"rounded-3xl bg-gradient-to-r from-sun to-ocean p-7 text-white shadow-lesson",children:[f.jsx(jn,{className:"text-sm font-bold underline",to:"/",children:"Voltar para trilha"}),f.jsx("p",{className:"mt-4 text-xs uppercase tracking-[0.22em]",children:"Aula individual"}),f.jsx("h1",{className:"mt-2 font-heading text-3xl",children:r.title}),f.jsx("p",{className:"mt-2 max-w-3xl text-sm",children:r.objective}),f.jsx("button",{className:`mt-5 rounded-xl px-4 py-2 text-sm font-bold ${o?"bg-mint text-white":"bg-dawn text-ocean"}`,onClick:()=>a(r.id),type:"button",children:o?"Aula concluida":"Marcar aula como concluida"})]}),f.jsx(Jg,{vocab:r.vocab}),f.jsx(Xg,{verbs:r.verbs}),f.jsx(zg,{grammar:r.grammar}),f.jsx(Bg,{development:r.development,homework:r.homework,prep:r.prep})]})}function ev(){return f.jsxs("div",{className:"mx-auto mt-16 max-w-xl rounded-3xl bg-white/80 p-8 text-center shadow-lesson",children:[f.jsx("h1",{className:"font-heading text-3xl text-ocean",children:"Pagina nao encontrada"}),f.jsx("p",{className:"mt-3 text-slate",children:"Esta rota nao existe no curso. Volte para a lista de aulas para continuar sua jornada."}),f.jsx(jn,{className:"mt-6 inline-block rounded-xl bg-ocean px-5 py-3 font-bold text-dawn",to:"/",children:"Ir para inicio"})]})}function nv({completed:e,total:n}){const a=n===0?0:Math.round(e/n*100);return f.jsxs("section",{className:"rounded-2xl bg-white/85 p-4 shadow-lesson",children:[f.jsx("p",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Progresso no curso"}),f.jsxs("h2",{className:"mt-1 font-heading text-2xl text-slate",children:[e," de ",n," aulas concluidas"]}),f.jsx("div",{className:"mt-4 h-4 overflow-hidden rounded-full bg-dawn",children:f.jsx("div",{className:"h-full rounded-full bg-gradient-to-r from-mint to-ocean transition-all duration-500",style:{width:`${a}%`}})}),f.jsxs("p",{className:"mt-2 text-sm text-slate",children:[a,"% completo"]})]})}function av({lesson:e,completed:n,onToggle:a}){return f.jsxs("article",{className:"animate-riseIn rounded-2xl border border-white/50 bg-white/90 p-5 shadow-lesson",children:[f.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-mint",children:e.order===0?"Aula Show":`Aula ${String(e.order).padStart(2,"0")}`}),f.jsx("h3",{className:"mt-2 font-heading text-xl text-ocean",children:e.title}),f.jsx("p",{className:"mt-2 text-sm text-slate",children:e.objective}),f.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[f.jsx("button",{className:`rounded-xl px-4 py-2 text-sm font-bold transition ${n?"bg-mint text-white":"bg-dawn text-ocean"}`,onClick:()=>a(e.id),type:"button",children:n?"Concluida":"Marcar como concluida"}),f.jsx(jn,{className:"rounded-xl bg-ocean px-4 py-2 text-sm font-bold text-dawn",to:`/lesson/${e.id}`,children:"Abrir aula"})]})]})}function tv({lessons:e,completedIds:n,onToggleLesson:a}){return f.jsxs("main",{className:"mx-auto max-w-6xl space-y-6 px-4 py-8",children:[f.jsxs("header",{className:"rounded-3xl bg-gradient-to-r from-ocean to-mint p-7 text-dawn shadow-lesson",children:[f.jsx("p",{className:"text-sm uppercase tracking-[0.28em]",children:"Curso aberto e gratuito"}),f.jsx("h1",{className:"mt-2 font-heading text-4xl",children:"Ingles Basico Interativo"}),f.jsx("p",{className:"mt-3 max-w-3xl text-sm leading-relaxed sm:text-base",children:"Estude no seu ritmo com trilha guiada, revisoes e praticas objetivas em portugues."}),f.jsx("div",{className:"mt-4",children:f.jsx(jn,{className:"inline-block rounded-xl bg-dawn px-4 py-2 text-sm font-bold text-ocean",to:"/teacher",children:"Entrar na area do professor"})})]}),f.jsx(nv,{completed:n.length,total:e.length}),f.jsx("section",{className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:e.map(t=>f.jsx(av,{completed:n.includes(t.id),lesson:t,onToggle:a},t.id))})]})}function rv({lesson:e}){const{getTranslation:n}=vs(e.vocab.concat(e.verbs.map(a=>a.verb)));return f.jsxs("details",{className:"rounded-2xl bg-white/90 p-4 shadow-lesson",open:e.order<=1,children:[f.jsxs("summary",{className:"cursor-pointer list-none",children:[f.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-mint",children:e.order===0?"Aula Show":`Aula ${String(e.order).padStart(2,"0")}`}),f.jsx("h3",{className:"font-heading text-2xl text-ocean",children:e.title})]}),f.jsxs("div",{className:"mt-4 space-y-4",children:[f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h4",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Objetivo pedagogico"}),f.jsx("p",{className:"mt-1 text-sm text-slate",children:e.objective}),f.jsxs("p",{className:"mt-1 text-xs text-slate/80",children:["Duracao: ",e.duration," | Nivel: ",e.level]})]}),f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h4",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Vocabulos e traducoes"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-slate",children:e.vocab.map(a=>f.jsxs("li",{children:[a,": ",n(a)]},`vocab-${a}`))})]}),f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h4",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Verbos alvo"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-slate",children:e.verbs.map(a=>f.jsxs("li",{children:[a.verb,": ",n(a.verb)]},`verb-${a.verb}`))})]}),f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h4",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Estruturas da aula"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-slate",children:e.structures.map(a=>f.jsx("li",{children:a},`structure-${a}`))})]}),f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h4",{className:"text-sm font-bold uppercase tracking-wide text-ocean",children:"Roteiro de apresentacao"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-slate",children:e.timeline.map(a=>f.jsx("li",{children:a},`timeline-${a}`))})]}),f.jsxs("article",{className:"rounded-xl bg-dawn/70 p-3",children:[f.jsx("h5",{className:"mt-3 text-sm font-bold uppercase tracking-wide text-ocean",children:"Resumo da aula"}),f.jsx("ul",{className:"mt-2 space-y-1 text-sm text-slate",children:e.lessonSummary.map(a=>f.jsx("li",{children:a},`summary-${a}`))})]})]})]})}function Ml(e,n){const a=n.getBoundingClientRect();return{x:e.clientX-a.left,y:e.clientY-a.top}}function ov(e){const n=window.devicePixelRatio||1,a=e.clientWidth,t=e.clientHeight;e.width=Math.floor(a*n),e.height=Math.floor(t*n);const r=e.getContext("2d");if(!r)throw new Error("Canvas 2D context not available. Expected browser support for 2d context.");return r.scale(n,n),r.lineCap="round",r.lineJoin="round",r}function iv(){const e=R.useRef(null),n=R.useRef(null),a=R.useRef(null),t=R.useRef(!1),r=R.useRef(null),[o,i]=R.useState(3),[s,l]=R.useState("#1D3557"),[u,h]=R.useState("pen"),[p,g]=R.useState(""),[y,P]=R.useState(16),[A,C]=R.useState(!1);R.useEffect(()=>{const v=n.current,T=a.current;if(!v||!T)return;const k=window.devicePixelRatio||1,E=v.clientWidth,I=v.clientHeight;T.width=Math.floor(E*k),T.height=Math.floor(I*k);const L=ov(v);L.lineCap="round",L.lineJoin="round",L.lineWidth=o,L.strokeStyle=u==="eraser"?"#FFFFFF":s},[]),R.useEffect(()=>{const v=n.current,T=a.current;if(!v||!T)return;const k=v,E=T;function I(ae){const q=E.getContext("2d");if(!q)return;const J=window.devicePixelRatio||1;if(q.clearRect(0,0,E.width,E.height),u==="text"){q.fillStyle="#818181";const Ge=Math.max(2,Math.round(3*J));q.beginPath(),q.arc(ae.x*J,ae.y*J,Ge,0,Math.PI*2),q.fill();return}q.strokeStyle="#818181",q.lineWidth=2,q.beginPath(),q.arc(ae.x*J,ae.y*J,o/2*J,0,Math.PI*2),q.stroke()}function L(ae){t.current=!0,r.current=Ml(ae,k)}function x(ae){const q=Ml(ae,k);if(I(q),!t.current||u==="text")return;const J=k.getContext("2d");if(!J)return;const Ge=r.current;if(!Ge){r.current=q;return}J.lineWidth=o,J.strokeStyle=u==="eraser"?"#FFFFFF":s,J.lineCap="round",J.lineJoin="round",J.beginPath(),J.moveTo(Ge.x,Ge.y),J.lineTo(q.x,q.y),J.stroke(),r.current=q}function fe(){t.current=!1,r.current=null}function an(){t.current=!1,r.current=null;const ae=E.getContext("2d");ae&&ae.clearRect(0,0,E.width,E.height)}return k.addEventListener("pointerdown",L),k.addEventListener("pointermove",x),k.addEventListener("pointerup",fe),k.addEventListener("pointerleave",an),()=>{k.removeEventListener("pointerdown",L),k.removeEventListener("pointermove",x),k.removeEventListener("pointerup",fe),k.removeEventListener("pointerleave",an)}},[o,s,u]);function m(){const v=n.current;if(!v)return;const T=v.getContext("2d");T&&T.clearRect(0,0,v.width,v.height)}function c(v){if(u!=="text"||!p)return;const T=n.current;if(!T)return;const k=T.getContext("2d");if(!k)return;const E=T.getBoundingClientRect(),I=v.clientX-E.left,L=v.clientY-E.top;k.fillStyle=s,k.font=`${y}px Arial`,k.fillText(p,I,L)}function d(){const v=e.current;v&&(A?document.fullscreenElement&&(document.exitFullscreen(),C(!1)):v.requestFullscreen&&(v.requestFullscreen(),C(!0)))}return f.jsxs("section",{className:"rounded-2xl bg-white/90 p-5 shadow-lesson",ref:e,children:[f.jsx("h2",{className:"font-heading text-2xl text-ocean",children:"Whiteboard do professor"}),f.jsx("p",{className:"mt-1 text-sm text-slate",children:"Use esta area para explicar estruturas, exemplos e corrigir respostas ao vivo."}),f.jsxs("div",{className:"mt-4 space-y-3",children:[f.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"mode-select",children:"Ferramenta"}),f.jsxs("select",{id:"mode-select",onChange:v=>h(v.target.value),value:u,className:"rounded-lg border border-ocean/20 px-3 py-2 text-sm",children:[f.jsx("option",{value:"pen",children:"Caneta"}),f.jsx("option",{value:"eraser",children:"Borracha"}),f.jsx("option",{value:"text",children:"Texto"})]})]}),u==="pen"&&f.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"line-width",children:"Espessura"}),f.jsx("input",{id:"line-width",max:10,min:1,onChange:v=>i(Number(v.target.value)),type:"range",value:o}),f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"line-color",children:"Cor"}),f.jsx("input",{id:"line-color",onChange:v=>l(v.target.value),type:"color",value:s})]}),u==="eraser"&&f.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"eraser-width",children:"Tamanho da borracha"}),f.jsx("input",{id:"eraser-width",max:30,min:1,onChange:v=>i(Number(v.target.value)),type:"range",value:o})]}),u==="text"&&f.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[f.jsx("input",{className:"rounded-lg border border-ocean/20 px-3 py-2 text-sm",onChange:v=>g(v.target.value),placeholder:"Digite o texto",type:"text",value:p}),f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"text-size",children:"Tamanho"}),f.jsx("input",{id:"text-size",max:48,min:8,onChange:v=>P(Number(v.target.value)),type:"range",value:y}),f.jsx("label",{className:"text-sm font-bold text-slate",htmlFor:"text-color",children:"Cor"}),f.jsx("input",{id:"text-color",onChange:v=>l(v.target.value),type:"color",value:s})]}),f.jsxs("div",{className:"flex flex-wrap gap-2",children:[f.jsx("button",{className:"rounded-lg bg-ocean px-4 py-2 text-sm font-bold text-dawn",onClick:m,type:"button",children:"Limpar quadro"}),f.jsx("button",{className:"rounded-lg border border-ocean bg-white px-4 py-2 text-sm font-bold text-ocean",onClick:d,type:"button",children:A?"Sair de tela cheia":"Tela cheia"})]})]}),f.jsxs("div",{className:"relative mt-4",children:[f.jsx("canvas",{className:"mt-4 h-[420px] w-full touch-none rounded-xl border border-ocean/20 bg-white cursor-none",onClick:c,ref:n}),f.jsx("canvas",{className:"absolute inset-0 top-0 h-[420px] w-full touch-none rounded-xl pointer-events-none",ref:a})]})]})}const yi="teacher_area_unlocked",sv="teachersonly";function lv(){return localStorage.getItem(yi)==="yes"}function uv(){const[e,n]=R.useState(lv);function a(o){return o.trim()===sv}function t(){localStorage.setItem(yi,"yes"),n(!0)}function r(){localStorage.removeItem(yi),n(!1)}return{isUnlocked:e,validatePassword:a,unlock:t,lock:r}}function cv({lessons:e}){const{isUnlocked:n,lock:a,unlock:t,validatePassword:r}=uv(),[o,i]=R.useState(""),[s,l]=R.useState("");function u(h){if(h.preventDefault(),r(o)){l(""),t();return}l("Senha invalida. Use a senha compartilhada com professores.")}return n?f.jsxs("main",{className:"mx-auto max-w-6xl space-y-6 px-4 py-8",children:[f.jsxs("header",{className:"rounded-3xl bg-gradient-to-r from-ocean to-slate p-7 text-white shadow-lesson",children:[f.jsx("p",{className:"text-xs uppercase tracking-[0.22em]",children:"Painel do professor"}),f.jsx("h1",{className:"mt-2 font-heading text-3xl",children:"Guia completo + gabarito por aula"}),f.jsx("p",{className:"mt-2 text-sm",children:"Use os blocos abaixo para conduzir cada aula do curso com roteiro, respostas e quadro digital."}),f.jsxs("div",{className:"mt-4 flex flex-wrap gap-3",children:[f.jsx(jn,{className:"rounded-xl bg-dawn px-4 py-2 text-sm font-bold text-ocean",to:"/",children:"Voltar para inicio"}),f.jsx("button",{className:"rounded-xl border border-white px-4 py-2 text-sm font-bold",onClick:a,type:"button",children:"Sair da area do professor"})]})]}),f.jsx(iv,{}),f.jsx("section",{className:"space-y-4",children:e.map(h=>f.jsx(rv,{lesson:h},h.id))})]}):f.jsx("main",{className:"mx-auto max-w-xl px-4 py-10",children:f.jsxs("section",{className:"rounded-2xl bg-white/90 p-6 shadow-lesson",children:[f.jsx("p",{className:"text-xs font-bold uppercase tracking-wider text-mint",children:"Acesso restrito"}),f.jsx("h1",{className:"mt-2 font-heading text-3xl text-ocean",children:"Area do professor"}),f.jsx("p",{className:"mt-2 text-sm text-slate",children:"Esta pagina contem gabaritos e guia de conducao da aula. Digite a senha para continuar."}),f.jsxs("form",{className:"mt-4 space-y-3",onSubmit:u,children:[f.jsx("label",{className:"block text-sm font-bold text-slate",htmlFor:"teacher-password",children:"Senha"}),f.jsx("input",{className:"w-full rounded-xl border border-ocean/20 px-3 py-2",id:"teacher-password",onChange:h=>i(h.target.value),placeholder:"Digite a senha",type:"password",value:o}),s?f.jsx("p",{className:"text-sm font-bold text-red-600",children:s}):null,f.jsx("button",{className:"rounded-xl bg-ocean px-5 py-2 font-bold text-dawn",type:"submit",children:"Entrar"})]}),f.jsx(jn,{className:"mt-4 inline-block text-sm font-bold text-ocean underline",to:"/",children:"Voltar para curso"})]})})}function mv(){const{completedIds:e,toggleLesson:n}=Mg();return f.jsxs(zf,{children:[f.jsx(Yn,{element:f.jsx(tv,{completedIds:e,lessons:_l,onToggleLesson:n}),path:"/"}),f.jsx(Yn,{element:f.jsx(Zg,{completedIds:e,lessons:_l,onToggleLesson:n}),path:"/lesson/:lessonId"}),f.jsx(Yn,{element:f.jsx(cv,{lessons:_g}),path:"/teacher"}),f.jsx(Yn,{element:f.jsx(Wf,{replace:!0,to:"/"}),path:"/home"}),f.jsx(Yn,{element:f.jsx(ev,{}),path:"*"})]})}Po.createRoot(document.getElementById("root")).render(f.jsx(Ql.StrictMode,{children:f.jsx($f,{children:f.jsx(mv,{})})}));
