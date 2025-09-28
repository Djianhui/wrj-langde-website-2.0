/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function eh(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const me={},Ls=[],pi=()=>{},Gv=()=>!1,Gl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),nh=n=>n.startsWith("onUpdate:"),ke=Object.assign,ih=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Wv=Object.prototype.hasOwnProperty,oe=(n,t)=>Wv.call(n,t),Bt=Array.isArray,Is=n=>oa(n)==="[object Map]",Wl=n=>oa(n)==="[object Set]",fd=n=>oa(n)==="[object Date]",Wt=n=>typeof n=="function",we=n=>typeof n=="string",_i=n=>typeof n=="symbol",he=n=>n!==null&&typeof n=="object",Zm=n=>(he(n)||Wt(n))&&Wt(n.then)&&Wt(n.catch),Jm=Object.prototype.toString,oa=n=>Jm.call(n),Xv=n=>oa(n).slice(8,-1),Qm=n=>oa(n)==="[object Object]",rh=n=>we(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,bo=eh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xl=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},qv=/-(\w)/g,Wn=Xl(n=>n.replace(qv,(t,e)=>e?e.toUpperCase():"")),jv=/\B([A-Z])/g,ss=Xl(n=>n.replace(jv,"-$1").toLowerCase()),ql=Xl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Tc=Xl(n=>n?`on${ql(n)}`:""),cr=(n,t)=>!Object.is(n,t),Ja=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Pu=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},_l=n=>{const t=parseFloat(n);return isNaN(t)?n:t},Yv=n=>{const t=we(n)?Number(n):NaN;return isNaN(t)?n:t};let hd;const jl=()=>hd||(hd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sh(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=we(i)?Jv(i):sh(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(we(n)||he(n))return n}const $v=/;(?![^(]*\))/g,Kv=/:([^]+)/,Zv=/\/\*[^]*?\*\//g;function Jv(n){const t={};return n.replace(Zv,"").split($v).forEach(e=>{if(e){const i=e.split(Kv);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function oh(n){let t="";if(we(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=oh(n[e]);i&&(t+=i+" ")}else if(he(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Qv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tx=eh(Qv);function t_(n){return!!n||n===""}function ex(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Yl(n[i],t[i]);return e}function Yl(n,t){if(n===t)return!0;let e=fd(n),i=fd(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=_i(n),i=_i(t),e||i)return n===t;if(e=Bt(n),i=Bt(t),e||i)return e&&i?ex(n,t):!1;if(e=he(n),i=he(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Yl(n[o],t[o]))return!1}}return String(n)===String(t)}function nx(n,t){return n.findIndex(e=>Yl(e,t))}const e_=n=>!!(n&&n.__v_isRef===!0),ix=n=>we(n)?n:n==null?"":Bt(n)||he(n)&&(n.toString===Jm||!Wt(n.toString))?e_(n)?ix(n.value):JSON.stringify(n,n_,2):String(n),n_=(n,t)=>e_(t)?n_(n,t.value):Is(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[bc(i,s)+" =>"]=r,e),{})}:Wl(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>bc(e))}:_i(t)?bc(t):he(t)&&!Bt(t)&&!Qm(t)?String(t):t,bc=(n,t="")=>{var e;return _i(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class i_{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=je;try{return je=this,t()}finally{je=e}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function r_(n){return new i_(n)}function s_(){return je}function rx(n,t=!1){je&&je.cleanups.push(n)}let _e;const Ac=new WeakSet;class o_{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ac.has(this)&&(Ac.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||l_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dd(this),c_(this);const t=_e,e=Jn;_e=this,Jn=!0;try{return this.fn()}finally{u_(this),_e=t,Jn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ch(t);this.deps=this.depsTail=void 0,dd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ac.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Du(this)&&this.run()}get dirty(){return Du(this)}}let a_=0,Ao,wo;function l_(n,t=!1){if(n.flags|=8,t){n.next=wo,wo=n;return}n.next=Ao,Ao=n}function ah(){a_++}function lh(){if(--a_>0)return;if(wo){let t=wo;for(wo=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Ao;){let t=Ao;for(Ao=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function c_(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function u_(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),ch(i),sx(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function Du(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(f_(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function f_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===zo)||(n.globalVersion=zo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Du(n))))return;n.flags|=2;const t=n.dep,e=_e,i=Jn;_e=n,Jn=!0;try{c_(n);const r=n.fn(n._value);(t.version===0||cr(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{_e=e,Jn=i,u_(n),n.flags&=-3}}function ch(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)ch(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function sx(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Jn=!0;const h_=[];function ki(){h_.push(Jn),Jn=!1}function Hi(){const n=h_.pop();Jn=n===void 0?!0:n}function dd(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=_e;_e=void 0;try{t()}finally{_e=e}}}let zo=0;class ox{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uh{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!Jn||_e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==_e)e=this.activeLink=new ox(_e,this),_e.deps?(e.prevDep=_e.depsTail,_e.depsTail.nextDep=e,_e.depsTail=e):_e.deps=_e.depsTail=e,d_(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=_e.depsTail,e.nextDep=void 0,_e.depsTail.nextDep=e,_e.depsTail=e,_e.deps===e&&(_e.deps=i)}return e}trigger(t){this.version++,zo++,this.notify(t)}notify(t){ah();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{lh()}}}function d_(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)d_(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const gl=new WeakMap,jr=Symbol(""),Lu=Symbol(""),ko=Symbol("");function Ye(n,t,e){if(Jn&&_e){let i=gl.get(n);i||gl.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new uh),r.map=i,r.key=e),r.track()}}function Li(n,t,e,i,r,s){const o=gl.get(n);if(!o){zo++;return}const a=l=>{l&&l.trigger()};if(ah(),t==="clear")o.forEach(a);else{const l=Bt(n),c=l&&rh(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===ko||!_i(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(ko)),t){case"add":l?c&&a(o.get("length")):(a(o.get(jr)),Is(n)&&a(o.get(Lu)));break;case"delete":l||(a(o.get(jr)),Is(n)&&a(o.get(Lu)));break;case"set":Is(n)&&a(o.get(jr));break}}lh()}function ax(n,t){const e=gl.get(n);return e&&e.get(t)}function cs(n){const t=ee(n);return t===n?t:(Ye(t,"iterate",ko),Vn(n)?t:t.map(Ge))}function $l(n){return Ye(n=ee(n),"iterate",ko),n}const lx={__proto__:null,[Symbol.iterator](){return wc(this,Symbol.iterator,Ge)},concat(...n){return cs(this).concat(...n.map(t=>Bt(t)?cs(t):t))},entries(){return wc(this,"entries",n=>(n[1]=Ge(n[1]),n))},every(n,t){return yi(this,"every",n,t,void 0,arguments)},filter(n,t){return yi(this,"filter",n,t,e=>e.map(Ge),arguments)},find(n,t){return yi(this,"find",n,t,Ge,arguments)},findIndex(n,t){return yi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return yi(this,"findLast",n,t,Ge,arguments)},findLastIndex(n,t){return yi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return yi(this,"forEach",n,t,void 0,arguments)},includes(...n){return Rc(this,"includes",n)},indexOf(...n){return Rc(this,"indexOf",n)},join(n){return cs(this).join(n)},lastIndexOf(...n){return Rc(this,"lastIndexOf",n)},map(n,t){return yi(this,"map",n,t,void 0,arguments)},pop(){return ao(this,"pop")},push(...n){return ao(this,"push",n)},reduce(n,...t){return pd(this,"reduce",n,t)},reduceRight(n,...t){return pd(this,"reduceRight",n,t)},shift(){return ao(this,"shift")},some(n,t){return yi(this,"some",n,t,void 0,arguments)},splice(...n){return ao(this,"splice",n)},toReversed(){return cs(this).toReversed()},toSorted(n){return cs(this).toSorted(n)},toSpliced(...n){return cs(this).toSpliced(...n)},unshift(...n){return ao(this,"unshift",n)},values(){return wc(this,"values",Ge)}};function wc(n,t,e){const i=$l(n),r=i[t]();return i!==n&&!Vn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=e(s.value)),s}),r}const cx=Array.prototype;function yi(n,t,e,i,r,s){const o=$l(n),a=o!==n&&!Vn(n),l=o[t];if(l!==cx[t]){const f=l.apply(n,s);return a?Ge(f):f}let c=e;o!==n&&(a?c=function(f,h){return e.call(this,Ge(f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function pd(n,t,e,i){const r=$l(n);let s=e;return r!==n&&(Vn(n)?e.length>3&&(s=function(o,a,l){return e.call(this,o,a,l,n)}):s=function(o,a,l){return e.call(this,o,Ge(a),l,n)}),r[t](s,...i)}function Rc(n,t,e){const i=ee(n);Ye(i,"iterate",ko);const r=i[t](...e);return(r===-1||r===!1)&&dh(e[0])?(e[0]=ee(e[0]),i[t](...e)):r}function ao(n,t,e=[]){ki(),ah();const i=ee(n)[t].apply(n,e);return lh(),Hi(),i}const ux=eh("__proto__,__v_isRef,__isVue"),p_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(_i));function fx(n){_i(n)||(n=String(n));const t=ee(this);return Ye(t,"has",n),t.hasOwnProperty(n)}class m_{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?Sx:x_:s?v_:g_).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!r){let l;if(o&&(l=lx[e]))return l;if(e==="hasOwnProperty")return fx}const a=Reflect.get(t,e,Te(t)?t:i);return(_i(e)?p_.has(e):ux(e))||(r||Ye(t,"get",e),s)?a:Te(a)?o&&rh(e)?a:a.value:he(a)?r?S_(a):aa(a):a}}class __ extends m_{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];if(!this._isShallow){const l=pr(s);if(!Vn(i)&&!pr(i)&&(s=ee(s),i=ee(i)),!Bt(t)&&Te(s)&&!Te(i))return l?!1:(s.value=i,!0)}const o=Bt(t)&&rh(e)?Number(e)<t.length:oe(t,e),a=Reflect.set(t,e,i,Te(t)?t:r);return t===ee(r)&&(o?cr(i,s)&&Li(t,"set",e,i):Li(t,"add",e,i)),a}deleteProperty(t,e){const i=oe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&Li(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!_i(e)||!p_.has(e))&&Ye(t,"has",e),i}ownKeys(t){return Ye(t,"iterate",Bt(t)?"length":jr),Reflect.ownKeys(t)}}class hx extends m_{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const dx=new __,px=new hx,mx=new __(!0);const Iu=n=>n,ya=n=>Reflect.getPrototypeOf(n);function _x(n,t,e){return function(...i){const r=this.__v_raw,s=ee(r),o=Is(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?Iu:t?vl:Ge;return!t&&Ye(s,"iterate",l?Lu:jr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Sa(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function gx(n,t){const e={get(r){const s=this.__v_raw,o=ee(s),a=ee(r);n||(cr(r,a)&&Ye(o,"get",r),Ye(o,"get",a));const{has:l}=ya(o),c=t?Iu:n?vl:Ge;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ye(ee(r),"iterate",jr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=ee(s),a=ee(r);return n||(cr(r,a)&&Ye(o,"has",r),Ye(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ee(a),c=t?Iu:n?vl:Ge;return!n&&Ye(l,"iterate",jr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return ke(e,n?{add:Sa("add"),set:Sa("set"),delete:Sa("delete"),clear:Sa("clear")}:{add(r){!t&&!Vn(r)&&!pr(r)&&(r=ee(r));const s=ee(this);return ya(s).has.call(s,r)||(s.add(r),Li(s,"add",r,r)),this},set(r,s){!t&&!Vn(s)&&!pr(s)&&(s=ee(s));const o=ee(this),{has:a,get:l}=ya(o);let c=a.call(o,r);c||(r=ee(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?cr(s,u)&&Li(o,"set",r,s):Li(o,"add",r,s),this},delete(r){const s=ee(this),{has:o,get:a}=ya(s);let l=o.call(s,r);l||(r=ee(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Li(s,"delete",r,void 0),c},clear(){const r=ee(this),s=r.size!==0,o=r.clear();return s&&Li(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=_x(r,n,t)}),e}function fh(n,t){const e=gx(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(oe(e,r)&&r in i?e:i,r,s)}const vx={get:fh(!1,!1)},xx={get:fh(!1,!0)},yx={get:fh(!0,!1)};const g_=new WeakMap,v_=new WeakMap,x_=new WeakMap,Sx=new WeakMap;function Mx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ex(n){return n.__v_skip||!Object.isExtensible(n)?0:Mx(Xv(n))}function aa(n){return pr(n)?n:hh(n,!1,dx,vx,g_)}function y_(n){return hh(n,!1,mx,xx,v_)}function S_(n){return hh(n,!0,px,yx,x_)}function hh(n,t,e,i,r){if(!he(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const s=Ex(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:e);return r.set(n,a),a}function Bi(n){return pr(n)?Bi(n.__v_raw):!!(n&&n.__v_isReactive)}function pr(n){return!!(n&&n.__v_isReadonly)}function Vn(n){return!!(n&&n.__v_isShallow)}function dh(n){return n?!!n.__v_raw:!1}function ee(n){const t=n&&n.__v_raw;return t?ee(t):n}function ph(n){return!oe(n,"__v_skip")&&Object.isExtensible(n)&&Pu(n,"__v_skip",!0),n}const Ge=n=>he(n)?aa(n):n,vl=n=>he(n)?S_(n):n;function Te(n){return n?n.__v_isRef===!0:!1}function Kl(n){return M_(n,!1)}function Tx(n){return M_(n,!0)}function M_(n,t){return Te(n)?n:new bx(n,t)}class bx{constructor(t,e){this.dep=new uh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ee(t),this._value=e?t:Ge(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Vn(t)||pr(t);t=i?t:ee(t),cr(t,e)&&(this._rawValue=t,this._value=i?t:Ge(t),this.dep.trigger())}}function Us(n){return Te(n)?n.value:n}const Ax={get:(n,t,e)=>t==="__v_raw"?n:Us(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Te(r)&&!Te(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function E_(n){return Bi(n)?n:new Proxy(n,Ax)}function wx(n){const t=Bt(n)?new Array(n.length):{};for(const e in n)t[e]=T_(n,e);return t}class Rx{constructor(t,e,i){this._object=t,this._key=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ax(ee(this._object),this._key)}}class Cx{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Px(n,t,e){return Te(n)?n:Wt(n)?new Cx(n):he(n)&&arguments.length>1?T_(n,t,e):Kl(n)}function T_(n,t,e){const i=n[t];return Te(i)?i:new Rx(n,t,e)}class Dx{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new uh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return l_(this,!0),!0}get value(){const t=this.dep.track();return f_(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Lx(n,t,e=!1){let i,r;return Wt(n)?i=n:(i=n.get,r=n.set),new Dx(i,r,e)}const Ma={},xl=new WeakMap;let Nr;function Ix(n,t=!1,e=Nr){if(e){let i=xl.get(e);i||xl.set(e,i=[]),i.push(n)}}function Ux(n,t,e=me){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,c=x=>r?x:Vn(x)||r===!1||r===0?Ii(x,1):Ii(x);let u,f,h,d,g=!1,_=!1;if(Te(n)?(f=()=>n.value,g=Vn(n)):Bi(n)?(f=()=>c(n),g=!0):Bt(n)?(_=!0,g=n.some(x=>Bi(x)||Vn(x)),f=()=>n.map(x=>{if(Te(x))return x.value;if(Bi(x))return c(x);if(Wt(x))return l?l(x,2):x()})):Wt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){ki();try{h()}finally{Hi()}}const x=Nr;Nr=u;try{return l?l(n,3,[d]):n(d)}finally{Nr=x}}:f=pi,t&&r){const x=f,b=r===!0?1/0:r;f=()=>Ii(x(),b)}const m=s_(),p=()=>{u.stop(),m&&m.active&&ih(m.effects,u)};if(s&&t){const x=t;t=(...b)=>{x(...b),p()}}let M=_?new Array(n.length).fill(Ma):Ma;const S=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const b=u.run();if(r||g||(_?b.some((R,C)=>cr(R,M[C])):cr(b,M))){h&&h();const R=Nr;Nr=u;try{const C=[b,M===Ma?void 0:_&&M[0]===Ma?[]:M,d];M=b,l?l(t,3,C):t(...C)}finally{Nr=R}}}else u.run()};return a&&a(S),u=new o_(f),u.scheduler=o?()=>o(S,!1):S,d=x=>Ix(x,!1,u),h=u.onStop=()=>{const x=xl.get(u);if(x){if(l)l(x,4);else for(const b of x)b();xl.delete(u)}},t?i?S(!0):M=u.run():o?o(S.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ii(n,t=1/0,e){if(t<=0||!he(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,Te(n))Ii(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)Ii(n[i],t,e);else if(Wl(n)||Is(n))n.forEach(i=>{Ii(i,t,e)});else if(Qm(n)){for(const i in n)Ii(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ii(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function la(n,t,e,i){try{return i?n(...i):n()}catch(r){Zl(r,t,e)}}function ti(n,t,e,i){if(Wt(n)){const r=la(n,t,e,i);return r&&Zm(r)&&r.catch(s=>{Zl(s,t,e)}),r}if(Bt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ti(n[s],t,e,i));return r}}function Zl(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||me;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){ki(),la(s,null,10,[n,l,c]),Hi();return}}Ox(n,e,r,i,o)}function Ox(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const en=[];let oi=-1;const Os=[];let tr=null,As=0;const b_=Promise.resolve();let yl=null;function Jl(n){const t=yl||b_;return n?t.then(this?n.bind(this):n):t}function Nx(n){let t=oi+1,e=en.length;for(;t<e;){const i=t+e>>>1,r=en[i],s=Ho(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function mh(n){if(!(n.flags&1)){const t=Ho(n),e=en[en.length-1];!e||!(n.flags&2)&&t>=Ho(e)?en.push(n):en.splice(Nx(t),0,n),n.flags|=1,A_()}}function A_(){yl||(yl=b_.then(R_))}function Fx(n){Bt(n)?Os.push(...n):tr&&n.id===-1?tr.splice(As+1,0,n):n.flags&1||(Os.push(n),n.flags|=1),A_()}function md(n,t,e=oi+1){for(;e<en.length;e++){const i=en[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function w_(n){if(Os.length){const t=[...new Set(Os)].sort((e,i)=>Ho(e)-Ho(i));if(Os.length=0,tr){tr.push(...t);return}for(tr=t,As=0;As<tr.length;As++){const e=tr[As];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}tr=null,As=0}}const Ho=n=>n.id==null?n.flags&2?-1:1/0:n.id;function R_(n){try{for(oi=0;oi<en.length;oi++){const t=en[oi];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),la(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;oi<en.length;oi++){const t=en[oi];t&&(t.flags&=-2)}oi=-1,en.length=0,w_(),yl=null,(en.length||Os.length)&&R_()}}let sn=null,C_=null;function Sl(n){const t=sn;return sn=n,C_=n&&n.type.__scopeId||null,t}function Bx(n,t=sn,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&Ad(-1);const s=Sl(t);let o;try{o=n(...r)}finally{Sl(s),i._d&&Ad(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function GP(n,t){if(sn===null)return n;const e=ic(sn),i=n.dirs||(n.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=me]=t[r];s&&(Wt(s)&&(s={mounted:s,updated:s}),s.deep&&Ii(o),i.push({dir:s,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Tr(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ki(),ti(l,e,8,[n.el,a,n,t]),Hi())}}const zx=Symbol("_vte"),P_=n=>n.__isTeleport,er=Symbol("_leaveCb"),Ea=Symbol("_enterCb");function kx(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return z_(()=>{n.isMounted=!0}),k_(()=>{n.isUnmounting=!0}),n}const On=[Function,Array],D_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:On,onEnter:On,onAfterEnter:On,onEnterCancelled:On,onBeforeLeave:On,onLeave:On,onAfterLeave:On,onLeaveCancelled:On,onBeforeAppear:On,onAppear:On,onAfterAppear:On,onAppearCancelled:On},L_=n=>{const t=n.subTree;return t.component?L_(t.component):t},Hx={name:"BaseTransition",props:D_,setup(n,{slots:t}){const e=By(),i=kx();return()=>{const r=t.default&&O_(t.default(),!0);if(!r||!r.length)return;const s=I_(r),o=ee(n),{mode:a}=o;if(i.isLeaving)return Cc(s);const l=_d(s);if(!l)return Cc(s);let c=Uu(l,o,i,e,f=>c=f);l.type!==nn&&Vo(l,c);let u=e.subTree&&_d(e.subTree);if(u&&u.type!==nn&&!zr(l,u)&&L_(e).type!==nn){let f=Uu(u,o,i,e);if(Vo(u,f),a==="out-in"&&l.type!==nn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,e.job.flags&8||e.update(),delete f.afterLeave,u=void 0},Cc(s);a==="in-out"&&l.type!==nn?f.delayLeave=(h,d,g)=>{const _=U_(i,u);_[String(u.key)]=u,h[er]=()=>{d(),h[er]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function I_(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==nn){t=e;break}}return t}const Vx=Hx;function U_(n,t){const{leavingVNodes:e}=n;let i=e.get(t.type);return i||(i=Object.create(null),e.set(t.type,i)),i}function Uu(n,t,e,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:M,onAppearCancelled:S}=t,x=String(n.key),b=U_(e,n),R=(v,E)=>{v&&ti(v,i,9,E)},C=(v,E)=>{const I=E[1];R(v,E),Bt(v)?v.every(U=>U.length<=1)&&I():v.length<=1&&I()},P={mode:o,persisted:a,beforeEnter(v){let E=l;if(!e.isMounted)if(s)E=m||l;else return;v[er]&&v[er](!0);const I=b[x];I&&zr(n,I)&&I.el[er]&&I.el[er](),R(E,[v])},enter(v){let E=c,I=u,U=f;if(!e.isMounted)if(s)E=p||c,I=M||u,U=S||f;else return;let O=!1;const W=v[Ea]=Q=>{O||(O=!0,Q?R(U,[v]):R(I,[v]),P.delayedLeave&&P.delayedLeave(),v[Ea]=void 0)};E?C(E,[v,W]):W()},leave(v,E){const I=String(n.key);if(v[Ea]&&v[Ea](!0),e.isUnmounting)return E();R(h,[v]);let U=!1;const O=v[er]=W=>{U||(U=!0,E(),W?R(_,[v]):R(g,[v]),v[er]=void 0,b[I]===n&&delete b[I])};b[I]=n,d?C(d,[v,O]):O()},clone(v){const E=Uu(v,t,e,i,r);return r&&r(E),E}};return P}function Cc(n){if(Ql(n))return n=mr(n),n.children=null,n}function _d(n){if(!Ql(n))return P_(n.type)&&n.children?I_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Wt(e.default))return e.default()}}function Vo(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Vo(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function O_(n,t=!1,e){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=e==null?o.key:String(e)+String(o.key!=null?o.key:s);o.type===li?(o.patchFlag&128&&r++,i=i.concat(O_(o.children,t,a))):(t||o.type!==nn)&&i.push(a!=null?mr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function N_(n,t){return Wt(n)?ke({name:n.name},t,{setup:n}):n}function F_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ro(n,t,e,i,r=!1){if(Bt(n)){n.forEach((g,_)=>Ro(g,t&&(Bt(t)?t[_]:t),e,i,r));return}if(Co(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ro(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?ic(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===me?a.refs={}:a.refs,f=a.setupState,h=ee(f),d=f===me?()=>!1:g=>oe(h,g);if(c!=null&&c!==l&&(we(c)?(u[c]=null,d(c)&&(f[c]=null)):Te(c)&&(c.value=null)),Wt(l))la(l,a,12,[o,u]);else{const g=we(l),_=Te(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;r?Bt(p)&&ih(p,s):Bt(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Mn(m,e)):m()}}}jl().requestIdleCallback;jl().cancelIdleCallback;const Co=n=>!!n.type.__asyncLoader,Ql=n=>n.type.__isKeepAlive;function Gx(n,t){B_(n,"a",t)}function Wx(n,t){B_(n,"da",t)}function B_(n,t,e=ze){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(tc(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Ql(r.parent.vnode)&&Xx(i,t,e,r),r=r.parent}}function Xx(n,t,e,i){const r=tc(t,n,i,!0);H_(()=>{ih(i[t],r)},e)}function tc(n,t,e=ze,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{ki();const a=ca(e),l=ti(t,e,n,o);return a(),Hi(),l});return i?r.unshift(s):r.push(s),s}}const Wi=n=>(t,e=ze)=>{(!Wo||n==="sp")&&tc(n,(...i)=>t(...i),e)},qx=Wi("bm"),z_=Wi("m"),jx=Wi("bu"),Yx=Wi("u"),k_=Wi("bum"),H_=Wi("um"),$x=Wi("sp"),Kx=Wi("rtg"),Zx=Wi("rtc");function Jx(n,t=ze){tc("ec",n,t)}const V_="components";function WP(n,t){return W_(V_,n,!0,t)||n}const G_=Symbol.for("v-ndc");function XP(n){return we(n)?W_(V_,n,!1)||n:n||G_}function W_(n,t,e=!0,i=!1){const r=sn||ze;if(r){const s=r.type;{const a=Gy(s,!1);if(a&&(a===t||a===Wn(t)||a===ql(Wn(t))))return s}const o=gd(r[n]||s[n],t)||gd(r.appContext[n],t);return!o&&i?s:o}}function gd(n,t){return n&&(n[t]||n[Wn(t)]||n[ql(Wn(t))])}function qP(n,t,e,i){let r;const s=e,o=Bt(n);if(o||we(n)){const a=o&&Bi(n);let l=!1,c=!1;a&&(l=!Vn(n),c=pr(n),n=$l(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=t(l?c?vl(Ge(n[u])):Ge(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(he(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(n[u],u,l,s)}}else r=[];return r}const Ou=n=>n?fg(n)?ic(n):Ou(n.parent):null,Po=ke(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ou(n.parent),$root:n=>Ou(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>q_(n),$forceUpdate:n=>n.f||(n.f=()=>{mh(n.update)}),$nextTick:n=>n.n||(n.n=Jl.bind(n.proxy)),$watch:n=>yy.bind(n)}),Pc=(n,t)=>n!==me&&!n.__isScriptSetup&&oe(n,t),Qx={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Pc(i,t))return o[t]=1,i[t];if(r!==me&&oe(r,t))return o[t]=2,r[t];if((c=n.propsOptions[0])&&oe(c,t))return o[t]=3,s[t];if(e!==me&&oe(e,t))return o[t]=4,e[t];Nu&&(o[t]=0)}}const u=Po[t];let f,h;if(u)return t==="$attrs"&&Ye(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[t]))return f;if(e!==me&&oe(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,oe(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Pc(r,t)?(r[t]=e,!0):i!==me&&oe(i,t)?(i[t]=e,!0):oe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!e[o]||n!==me&&oe(n,o)||Pc(t,o)||(a=s[0])&&oe(a,o)||oe(i,o)||oe(Po,o)||oe(r.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:oe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function vd(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Nu=!0;function ty(n){const t=q_(n),e=n.proxy,i=n.ctx;Nu=!1,t.beforeCreate&&xd(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:S,unmounted:x,render:b,renderTracked:R,renderTriggered:C,errorCaptured:P,serverPrefetch:v,expose:E,inheritAttrs:I,components:U,directives:O,filters:W}=t;if(c&&ey(c,i,null),o)for(const j in o){const G=o[j];Wt(G)&&(i[j]=G.bind(e))}if(r){const j=r.call(e,e);he(j)&&(n.data=aa(j))}if(Nu=!0,s)for(const j in s){const G=s[j],gt=Wt(G)?G.bind(e,e):Wt(G.get)?G.get.bind(e,e):pi,vt=!Wt(G)&&Wt(G.set)?G.set.bind(e):pi,bt=bn({get:gt,set:vt});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>bt.value,set:Nt=>bt.value=Nt})}if(a)for(const j in a)X_(a[j],i,e,j);if(l){const j=Wt(l)?l.call(e):l;Reflect.ownKeys(j).forEach(G=>{Qa(G,j[G])})}u&&xd(u,n,"c");function V(j,G){Bt(G)?G.forEach(gt=>j(gt.bind(e))):G&&j(G.bind(e))}if(V(qx,f),V(z_,h),V(jx,d),V(Yx,g),V(Gx,_),V(Wx,m),V(Jx,P),V(Zx,R),V(Kx,C),V(k_,M),V(H_,x),V($x,v),Bt(E))if(E.length){const j=n.exposed||(n.exposed={});E.forEach(G=>{Object.defineProperty(j,G,{get:()=>e[G],set:gt=>e[G]=gt})})}else n.exposed||(n.exposed={});b&&n.render===pi&&(n.render=b),I!=null&&(n.inheritAttrs=I),U&&(n.components=U),O&&(n.directives=O),v&&F_(n)}function ey(n,t,e=pi){Bt(n)&&(n=Fu(n));for(const i in n){const r=n[i];let s;he(r)?"default"in r?s=Gn(r.from||i,r.default,!0):s=Gn(r.from||i):s=Gn(r),Te(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function xd(n,t,e){ti(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function X_(n,t,e,i){let r=i.includes(".")?sg(e,i):()=>e[i];if(we(n)){const s=t[n];Wt(s)&&Do(r,s)}else if(Wt(n))Do(r,n.bind(e));else if(he(n))if(Bt(n))n.forEach(s=>X_(s,t,e,i));else{const s=Wt(n.handler)?n.handler.bind(e):t[n.handler];Wt(s)&&Do(r,s,n)}}function q_(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>Ml(l,c,o,!0)),Ml(l,t,o)),he(t)&&s.set(t,l),l}function Ml(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&Ml(n,s,e,!0),r&&r.forEach(o=>Ml(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=ny[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const ny={data:yd,props:Sd,emits:Sd,methods:So,computed:So,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:So,directives:So,watch:ry,provide:yd,inject:iy};function yd(n,t){return t?n?function(){return ke(Wt(n)?n.call(this,this):n,Wt(t)?t.call(this,this):t)}:t:n}function iy(n,t){return So(Fu(n),Fu(t))}function Fu(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Qe(n,t){return n?[...new Set([].concat(n,t))]:t}function So(n,t){return n?ke(Object.create(null),n,t):t}function Sd(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:ke(Object.create(null),vd(n),vd(t??{})):t}function ry(n,t){if(!n)return t;if(!t)return n;const e=ke(Object.create(null),n);for(const i in t)e[i]=Qe(n[i],t[i]);return e}function j_(){return{app:null,config:{isNativeTag:Gv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sy=0;function oy(n,t){return function(i,r=null){Wt(i)||(i=ke({},i)),r!=null&&!he(r)&&(r=null);const s=j_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:sy++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Xy,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Wt(u.install)?(o.add(u),u.install(c,...f)):Wt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||un(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,ic(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ti(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Yr;Yr=c;try{return u()}finally{Yr=f}}};return c}}let Yr=null;function Qa(n,t){if(ze){let e=ze.provides;const i=ze.parent&&ze.parent.provides;i===e&&(e=ze.provides=Object.create(i)),e[n]=t}}function Gn(n,t,e=!1){const i=ze||sn;if(i||Yr){let r=Yr?Yr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Wt(t)?t.call(i&&i.proxy):t}}function ay(){return!!(ze||sn||Yr)}const Y_={},$_=()=>Object.create(Y_),K_=n=>Object.getPrototypeOf(n)===Y_;function ly(n,t,e,i=!1){const r={},s=$_();n.propsDefaults=Object.create(null),Z_(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:y_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function cy(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=ee(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ec(n.emitsOptions,h))continue;const d=t[h];if(l)if(oe(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Wn(h);r[g]=Bu(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Z_(n,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!oe(t,f)&&((u=ss(f))===f||!oe(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=Bu(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!oe(t,f))&&(delete s[f],c=!0)}c&&Li(n.attrs,"set","")}function Z_(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(bo(l))continue;const c=t[l];let u;r&&oe(r,u=Wn(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:ec(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ee(e),c=a||me;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Bu(r,l,f,c[f],n,!oe(c,f))}}return o}function Bu(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=oe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Wt(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=ca(r);i=c[e]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ss(e))&&(i=!0))}return i}const uy=new WeakMap;function J_(n,t,e=!1){const i=e?uy:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Wt(n)){const u=f=>{l=!0;const[h,d]=J_(f,t,!0);ke(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return he(n)&&i.set(n,Ls),Ls;if(Bt(s))for(let u=0;u<s.length;u++){const f=Wn(s[u]);Md(f)&&(o[f]=me)}else if(s)for(const u in s){const f=Wn(u);if(Md(f)){const h=s[u],d=o[f]=Bt(h)||Wt(h)?{type:h}:ke({},h),g=d.type;let _=!1,m=!0;if(Bt(g))for(let p=0;p<g.length;++p){const M=g[p],S=Wt(M)&&M.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(m=!1)}else _=Wt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||oe(d,"default"))&&a.push(f)}}const c=[o,a];return he(n)&&i.set(n,c),c}function Md(n){return n[0]!=="$"&&!bo(n)}const _h=n=>n[0]==="_"||n==="$stable",gh=n=>Bt(n)?n.map(ci):[ci(n)],fy=(n,t,e)=>{if(t._n)return t;const i=Bx((...r)=>gh(t(...r)),e);return i._c=!1,i},Q_=(n,t,e)=>{const i=n._ctx;for(const r in n){if(_h(r))continue;const s=n[r];if(Wt(s))t[r]=fy(r,s,i);else if(s!=null){const o=gh(s);t[r]=()=>o}}},tg=(n,t)=>{const e=gh(t);n.slots.default=()=>e},eg=(n,t,e)=>{for(const i in t)(e||!_h(i))&&(n[i]=t[i])},hy=(n,t,e)=>{const i=n.slots=$_();if(n.vnode.shapeFlag&32){const r=t.__;r&&Pu(i,"__",r,!0);const s=t._;s?(eg(i,t,e),e&&Pu(i,"_",s,!0)):Q_(t,i)}else t&&tg(n,t)},dy=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=me;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:eg(r,t,e):(s=!t.$stable,Q_(t,r)),o=t}else t&&(tg(n,t),o={default:1});if(s)for(const a in r)!_h(a)&&o[a]==null&&delete r[a]},Mn=wy;function py(n){return my(n)}function my(n,t){const e=jl();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=pi,insertStaticContent:g}=n,_=(D,L,T,st=null,Z=null,K=null,nt=void 0,at=null,et=!!L.dynamicChildren)=>{if(D===L)return;D&&!zr(D,L)&&(st=B(D),Nt(D,Z,K,!0),D=null),L.patchFlag===-2&&(et=!1,L.dynamicChildren=null);const{type:tt,ref:St,shapeFlag:w}=L;switch(tt){case nc:m(D,L,T,st);break;case nn:p(D,L,T,st);break;case tl:D==null&&M(L,T,st,nt);break;case li:U(D,L,T,st,Z,K,nt,at,et);break;default:w&1?b(D,L,T,st,Z,K,nt,at,et):w&6?O(D,L,T,st,Z,K,nt,at,et):(w&64||w&128)&&tt.process(D,L,T,st,Z,K,nt,at,et,ct)}St!=null&&Z?Ro(St,D&&D.ref,K,L||D,!L):St==null&&D&&D.ref!=null&&Ro(D.ref,null,K,D,!0)},m=(D,L,T,st)=>{if(D==null)i(L.el=a(L.children),T,st);else{const Z=L.el=D.el;L.children!==D.children&&c(Z,L.children)}},p=(D,L,T,st)=>{D==null?i(L.el=l(L.children||""),T,st):L.el=D.el},M=(D,L,T,st)=>{[D.el,D.anchor]=g(D.children,L,T,st,D.el,D.anchor)},S=({el:D,anchor:L},T,st)=>{let Z;for(;D&&D!==L;)Z=h(D),i(D,T,st),D=Z;i(L,T,st)},x=({el:D,anchor:L})=>{let T;for(;D&&D!==L;)T=h(D),r(D),D=T;r(L)},b=(D,L,T,st,Z,K,nt,at,et)=>{L.type==="svg"?nt="svg":L.type==="math"&&(nt="mathml"),D==null?R(L,T,st,Z,K,nt,at,et):v(D,L,Z,K,nt,at,et)},R=(D,L,T,st,Z,K,nt,at)=>{let et,tt;const{props:St,shapeFlag:w,transition:y,dirs:N}=D;if(et=D.el=o(D.type,K,St&&St.is,St),w&8?u(et,D.children):w&16&&P(D.children,et,null,st,Z,Dc(D,K),nt,at),N&&Tr(D,null,st,"created"),C(et,D,D.scopeId,nt,st),St){for(const it in St)it!=="value"&&!bo(it)&&s(et,it,null,St[it],K,st);"value"in St&&s(et,"value",null,St.value,K),(tt=St.onVnodeBeforeMount)&&ri(tt,st,D)}N&&Tr(D,null,st,"beforeMount");const q=_y(Z,y);q&&y.beforeEnter(et),i(et,L,T),((tt=St&&St.onVnodeMounted)||q||N)&&Mn(()=>{tt&&ri(tt,st,D),q&&y.enter(et),N&&Tr(D,null,st,"mounted")},Z)},C=(D,L,T,st,Z)=>{if(T&&d(D,T),st)for(let K=0;K<st.length;K++)d(D,st[K]);if(Z){let K=Z.subTree;if(L===K||ag(K.type)&&(K.ssContent===L||K.ssFallback===L)){const nt=Z.vnode;C(D,nt,nt.scopeId,nt.slotScopeIds,Z.parent)}}},P=(D,L,T,st,Z,K,nt,at,et=0)=>{for(let tt=et;tt<D.length;tt++){const St=D[tt]=at?nr(D[tt]):ci(D[tt]);_(null,St,L,T,st,Z,K,nt,at)}},v=(D,L,T,st,Z,K,nt)=>{const at=L.el=D.el;let{patchFlag:et,dynamicChildren:tt,dirs:St}=L;et|=D.patchFlag&16;const w=D.props||me,y=L.props||me;let N;if(T&&br(T,!1),(N=y.onVnodeBeforeUpdate)&&ri(N,T,L,D),St&&Tr(L,D,T,"beforeUpdate"),T&&br(T,!0),(w.innerHTML&&y.innerHTML==null||w.textContent&&y.textContent==null)&&u(at,""),tt?E(D.dynamicChildren,tt,at,T,st,Dc(L,Z),K):nt||G(D,L,at,null,T,st,Dc(L,Z),K,!1),et>0){if(et&16)I(at,w,y,T,Z);else if(et&2&&w.class!==y.class&&s(at,"class",null,y.class,Z),et&4&&s(at,"style",w.style,y.style,Z),et&8){const q=L.dynamicProps;for(let it=0;it<q.length;it++){const X=q[it],Tt=w[X],_t=y[X];(_t!==Tt||X==="value")&&s(at,X,Tt,_t,Z,T)}}et&1&&D.children!==L.children&&u(at,L.children)}else!nt&&tt==null&&I(at,w,y,T,Z);((N=y.onVnodeUpdated)||St)&&Mn(()=>{N&&ri(N,T,L,D),St&&Tr(L,D,T,"updated")},st)},E=(D,L,T,st,Z,K,nt)=>{for(let at=0;at<L.length;at++){const et=D[at],tt=L[at],St=et.el&&(et.type===li||!zr(et,tt)||et.shapeFlag&198)?f(et.el):T;_(et,tt,St,null,st,Z,K,nt,!0)}},I=(D,L,T,st,Z)=>{if(L!==T){if(L!==me)for(const K in L)!bo(K)&&!(K in T)&&s(D,K,L[K],null,Z,st);for(const K in T){if(bo(K))continue;const nt=T[K],at=L[K];nt!==at&&K!=="value"&&s(D,K,at,nt,Z,st)}"value"in T&&s(D,"value",L.value,T.value,Z)}},U=(D,L,T,st,Z,K,nt,at,et)=>{const tt=L.el=D?D.el:a(""),St=L.anchor=D?D.anchor:a("");let{patchFlag:w,dynamicChildren:y,slotScopeIds:N}=L;N&&(at=at?at.concat(N):N),D==null?(i(tt,T,st),i(St,T,st),P(L.children||[],T,St,Z,K,nt,at,et)):w>0&&w&64&&y&&D.dynamicChildren?(E(D.dynamicChildren,y,T,Z,K,nt,at),(L.key!=null||Z&&L===Z.subTree)&&ng(D,L,!0)):G(D,L,T,St,Z,K,nt,at,et)},O=(D,L,T,st,Z,K,nt,at,et)=>{L.slotScopeIds=at,D==null?L.shapeFlag&512?Z.ctx.activate(L,T,st,nt,et):W(L,T,st,Z,K,nt,et):Q(D,L,et)},W=(D,L,T,st,Z,K,nt)=>{const at=D.component=Fy(D,st,Z);if(Ql(D)&&(at.ctx.renderer=ct),zy(at,!1,nt),at.asyncDep){if(Z&&Z.registerDep(at,V,nt),!D.el){const et=at.subTree=un(nn);p(null,et,L,T)}}else V(at,D,L,T,Z,K,nt)},Q=(D,L,T)=>{const st=L.component=D.component;if(by(D,L,T))if(st.asyncDep&&!st.asyncResolved){j(st,L,T);return}else st.next=L,st.update();else L.el=D.el,st.vnode=L},V=(D,L,T,st,Z,K,nt)=>{const at=()=>{if(D.isMounted){let{next:w,bu:y,u:N,parent:q,vnode:it}=D;{const Ct=ig(D);if(Ct){w&&(w.el=it.el,j(D,w,nt)),Ct.asyncDep.then(()=>{D.isUnmounted||at()});return}}let X=w,Tt;br(D,!1),w?(w.el=it.el,j(D,w,nt)):w=it,y&&Ja(y),(Tt=w.props&&w.props.onVnodeBeforeUpdate)&&ri(Tt,q,w,it),br(D,!0);const _t=Td(D),At=D.subTree;D.subTree=_t,_(At,_t,f(At.el),B(At),D,Z,K),w.el=_t.el,X===null&&Ay(D,_t.el),N&&Mn(N,Z),(Tt=w.props&&w.props.onVnodeUpdated)&&Mn(()=>ri(Tt,q,w,it),Z)}else{let w;const{el:y,props:N}=L,{bm:q,m:it,parent:X,root:Tt,type:_t}=D,At=Co(L);br(D,!1),q&&Ja(q),!At&&(w=N&&N.onVnodeBeforeMount)&&ri(w,X,L),br(D,!0);{Tt.ce&&Tt.ce._def.shadowRoot!==!1&&Tt.ce._injectChildStyle(_t);const Ct=D.subTree=Td(D);_(null,Ct,T,st,D,Z,K),L.el=Ct.el}if(it&&Mn(it,Z),!At&&(w=N&&N.onVnodeMounted)){const Ct=L;Mn(()=>ri(w,X,Ct),Z)}(L.shapeFlag&256||X&&Co(X.vnode)&&X.vnode.shapeFlag&256)&&D.a&&Mn(D.a,Z),D.isMounted=!0,L=T=st=null}};D.scope.on();const et=D.effect=new o_(at);D.scope.off();const tt=D.update=et.run.bind(et),St=D.job=et.runIfDirty.bind(et);St.i=D,St.id=D.uid,et.scheduler=()=>mh(St),br(D,!0),tt()},j=(D,L,T)=>{L.component=D;const st=D.vnode.props;D.vnode=L,D.next=null,cy(D,L.props,st,T),dy(D,L.children,T),ki(),md(D),Hi()},G=(D,L,T,st,Z,K,nt,at,et=!1)=>{const tt=D&&D.children,St=D?D.shapeFlag:0,w=L.children,{patchFlag:y,shapeFlag:N}=L;if(y>0){if(y&128){vt(tt,w,T,st,Z,K,nt,at,et);return}else if(y&256){gt(tt,w,T,st,Z,K,nt,at,et);return}}N&8?(St&16&&wt(tt,Z,K),w!==tt&&u(T,w)):St&16?N&16?vt(tt,w,T,st,Z,K,nt,at,et):wt(tt,Z,K,!0):(St&8&&u(T,""),N&16&&P(w,T,st,Z,K,nt,at,et))},gt=(D,L,T,st,Z,K,nt,at,et)=>{D=D||Ls,L=L||Ls;const tt=D.length,St=L.length,w=Math.min(tt,St);let y;for(y=0;y<w;y++){const N=L[y]=et?nr(L[y]):ci(L[y]);_(D[y],N,T,null,Z,K,nt,at,et)}tt>St?wt(D,Z,K,!0,!1,w):P(L,T,st,Z,K,nt,at,et,w)},vt=(D,L,T,st,Z,K,nt,at,et)=>{let tt=0;const St=L.length;let w=D.length-1,y=St-1;for(;tt<=w&&tt<=y;){const N=D[tt],q=L[tt]=et?nr(L[tt]):ci(L[tt]);if(zr(N,q))_(N,q,T,null,Z,K,nt,at,et);else break;tt++}for(;tt<=w&&tt<=y;){const N=D[w],q=L[y]=et?nr(L[y]):ci(L[y]);if(zr(N,q))_(N,q,T,null,Z,K,nt,at,et);else break;w--,y--}if(tt>w){if(tt<=y){const N=y+1,q=N<St?L[N].el:st;for(;tt<=y;)_(null,L[tt]=et?nr(L[tt]):ci(L[tt]),T,q,Z,K,nt,at,et),tt++}}else if(tt>y)for(;tt<=w;)Nt(D[tt],Z,K,!0),tt++;else{const N=tt,q=tt,it=new Map;for(tt=q;tt<=y;tt++){const Lt=L[tt]=et?nr(L[tt]):ci(L[tt]);Lt.key!=null&&it.set(Lt.key,tt)}let X,Tt=0;const _t=y-q+1;let At=!1,Ct=0;const ft=new Array(_t);for(tt=0;tt<_t;tt++)ft[tt]=0;for(tt=N;tt<=w;tt++){const Lt=D[tt];if(Tt>=_t){Nt(Lt,Z,K,!0);continue}let It;if(Lt.key!=null)It=it.get(Lt.key);else for(X=q;X<=y;X++)if(ft[X-q]===0&&zr(Lt,L[X])){It=X;break}It===void 0?Nt(Lt,Z,K,!0):(ft[It-q]=tt+1,It>=Ct?Ct=It:At=!0,_(Lt,L[It],T,null,Z,K,nt,at,et),Tt++)}const Rt=At?gy(ft):Ls;for(X=Rt.length-1,tt=_t-1;tt>=0;tt--){const Lt=q+tt,It=L[Lt],xt=Lt+1<St?L[Lt+1].el:st;ft[tt]===0?_(null,It,T,xt,Z,K,nt,at,et):At&&(X<0||tt!==Rt[X]?bt(It,T,xt,2):X--)}}},bt=(D,L,T,st,Z=null)=>{const{el:K,type:nt,transition:at,children:et,shapeFlag:tt}=D;if(tt&6){bt(D.component.subTree,L,T,st);return}if(tt&128){D.suspense.move(L,T,st);return}if(tt&64){nt.move(D,L,T,ct);return}if(nt===li){i(K,L,T);for(let w=0;w<et.length;w++)bt(et[w],L,T,st);i(D.anchor,L,T);return}if(nt===tl){S(D,L,T);return}if(st!==2&&tt&1&&at)if(st===0)at.beforeEnter(K),i(K,L,T),Mn(()=>at.enter(K),Z);else{const{leave:w,delayLeave:y,afterLeave:N}=at,q=()=>{D.ctx.isUnmounted?r(K):i(K,L,T)},it=()=>{w(K,()=>{q(),N&&N()})};y?y(K,q,it):it()}else i(K,L,T)},Nt=(D,L,T,st=!1,Z=!1)=>{const{type:K,props:nt,ref:at,children:et,dynamicChildren:tt,shapeFlag:St,patchFlag:w,dirs:y,cacheIndex:N}=D;if(w===-2&&(Z=!1),at!=null&&(ki(),Ro(at,null,T,D,!0),Hi()),N!=null&&(L.renderCache[N]=void 0),St&256){L.ctx.deactivate(D);return}const q=St&1&&y,it=!Co(D);let X;if(it&&(X=nt&&nt.onVnodeBeforeUnmount)&&ri(X,L,D),St&6)dt(D.component,T,st);else{if(St&128){D.suspense.unmount(T,st);return}q&&Tr(D,null,L,"beforeUnmount"),St&64?D.type.remove(D,L,T,ct,st):tt&&!tt.hasOnce&&(K!==li||w>0&&w&64)?wt(tt,L,T,!1,!0):(K===li&&w&384||!Z&&St&16)&&wt(et,L,T),st&&Zt(D)}(it&&(X=nt&&nt.onVnodeUnmounted)||q)&&Mn(()=>{X&&ri(X,L,D),q&&Tr(D,null,L,"unmounted")},T)},Zt=D=>{const{type:L,el:T,anchor:st,transition:Z}=D;if(L===li){rt(T,st);return}if(L===tl){x(D);return}const K=()=>{r(T),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:nt,delayLeave:at}=Z,et=()=>nt(T,K);at?at(D.el,K,et):et()}else K()},rt=(D,L)=>{let T;for(;D!==L;)T=h(D),r(D),D=T;r(L)},dt=(D,L,T)=>{const{bum:st,scope:Z,job:K,subTree:nt,um:at,m:et,a:tt,parent:St,slots:{__:w}}=D;Ed(et),Ed(tt),st&&Ja(st),St&&Bt(w)&&w.forEach(y=>{St.renderCache[y]=void 0}),Z.stop(),K&&(K.flags|=8,Nt(nt,D,L,T)),at&&Mn(at,L),Mn(()=>{D.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},wt=(D,L,T,st=!1,Z=!1,K=0)=>{for(let nt=K;nt<D.length;nt++)Nt(D[nt],L,T,st,Z)},B=D=>{if(D.shapeFlag&6)return B(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const L=h(D.anchor||D.el),T=L&&L[zx];return T?h(T):L};let ot=!1;const ut=(D,L,T)=>{D==null?L._vnode&&Nt(L._vnode,null,null,!0):_(L._vnode||null,D,L,null,null,null,T),L._vnode=D,ot||(ot=!0,md(),w_(),ot=!1)},ct={p:_,um:Nt,m:bt,r:Zt,mt:W,mc:P,pc:G,pbc:E,n:B,o:n};return{render:ut,hydrate:void 0,createApp:oy(ut)}}function Dc({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function br({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function _y(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function ng(n,t,e=!1){const i=n.children,r=t.children;if(Bt(i)&&Bt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=nr(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&ng(o,a)),a.type===nc&&(a.el=o.el),a.type===nn&&!a.el&&(a.el=o.el)}}function gy(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function ig(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ig(t)}function Ed(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const vy=Symbol.for("v-scx"),xy=()=>Gn(vy);function Do(n,t,e){return rg(n,t,e)}function rg(n,t,e=me){const{immediate:i,deep:r,flush:s,once:o}=e,a=ke({},e),l=t&&i||!t&&s!=="post";let c;if(Wo){if(s==="sync"){const d=xy();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=pi,d.resume=pi,d.pause=pi,d}}const u=ze;a.call=(d,g,_)=>ti(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{Mn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():mh(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Ux(n,t,a);return Wo&&(c?c.push(h):l&&h()),h}function yy(n,t,e){const i=this.proxy,r=we(n)?n.includes(".")?sg(i,n):()=>i[n]:n.bind(i,i);let s;Wt(t)?s=t:(s=t.handler,e=t);const o=ca(this),a=rg(r,s.bind(i),e);return o(),a}function sg(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const Sy=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Wn(t)}Modifiers`]||n[`${ss(t)}Modifiers`];function My(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||me;let r=e;const s=t.startsWith("update:"),o=s&&Sy(i,t.slice(7));o&&(o.trim&&(r=e.map(u=>we(u)?u.trim():u)),o.number&&(r=e.map(_l)));let a,l=i[a=Tc(t)]||i[a=Tc(Wn(t))];!l&&s&&(l=i[a=Tc(ss(t))]),l&&ti(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ti(c,n,6,r)}}function og(n,t,e=!1){const i=t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Wt(n)){const l=c=>{const u=og(c,t,!0);u&&(a=!0,ke(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(he(n)&&i.set(n,null),null):(Bt(s)?s.forEach(l=>o[l]=null):ke(o,s),he(n)&&i.set(n,o),o)}function ec(n,t){return!n||!Gl(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(n,t[0].toLowerCase()+t.slice(1))||oe(n,ss(t))||oe(n,t))}function Td(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=Sl(n);let p,M;try{if(e.shapeFlag&4){const x=r||i,b=x;p=ci(c.call(b,x,u,f,d,h,g)),M=a}else{const x=t;p=ci(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),M=t.props?a:Ey(a)}}catch(x){Lo.length=0,Zl(x,n,1),p=un(nn)}let S=p;if(M&&_!==!1){const x=Object.keys(M),{shapeFlag:b}=S;x.length&&b&7&&(s&&x.some(nh)&&(M=Ty(M,s)),S=mr(S,M,!1,!0))}return e.dirs&&(S=mr(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&Vo(S,e.transition),p=S,Sl(m),p}const Ey=n=>{let t;for(const e in n)(e==="class"||e==="style"||Gl(e))&&((t||(t={}))[e]=n[e]);return t},Ty=(n,t)=>{const e={};for(const i in n)(!nh(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function by(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?bd(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ec(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?bd(i,o,c):!0:!!o;return!1}function bd(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==n[s]&&!ec(e,s))return!0}return!1}function Ay({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const ag=n=>n.__isSuspense;function wy(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):Fx(n)}const li=Symbol.for("v-fgt"),nc=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),tl=Symbol.for("v-stc"),Lo=[];let wn=null;function Ry(n=!1){Lo.push(wn=n?null:[])}function Cy(){Lo.pop(),wn=Lo[Lo.length-1]||null}let Go=1;function Ad(n,t=!1){Go+=n,n<0&&wn&&t&&(wn.hasOnce=!0)}function lg(n){return n.dynamicChildren=Go>0?wn||Ls:null,Cy(),Go>0&&wn&&wn.push(n),n}function jP(n,t,e,i,r,s){return lg(ug(n,t,e,i,r,s,!0))}function Py(n,t,e,i,r){return lg(un(n,t,e,i,r,!0))}function El(n){return n?n.__v_isVNode===!0:!1}function zr(n,t){return n.type===t.type&&n.key===t.key}const cg=({key:n})=>n??null,el=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?we(n)||Te(n)||Wt(n)?{i:sn,r:n,k:t,f:!!e}:n:null);function ug(n,t=null,e=null,i=0,r=null,s=n===li?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&cg(t),ref:t&&el(t),scopeId:C_,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:sn};return a?(vh(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=we(e)?8:16),Go>0&&!o&&wn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&wn.push(l),l}const un=Dy;function Dy(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===G_)&&(n=nn),El(n)){const a=mr(n,t,!0);return e&&vh(a,e),Go>0&&!s&&wn&&(a.shapeFlag&6?wn[wn.indexOf(n)]=a:wn.push(a)),a.patchFlag=-2,a}if(Wy(n)&&(n=n.__vccOpts),t){t=Ly(t);let{class:a,style:l}=t;a&&!we(a)&&(t.class=oh(a)),he(l)&&(dh(l)&&!Bt(l)&&(l=ke({},l)),t.style=sh(l))}const o=we(n)?1:ag(n)?128:P_(n)?64:he(n)?4:Wt(n)?2:0;return ug(n,t,e,i,r,o,s,!0)}function Ly(n){return n?dh(n)||K_(n)?ke({},n):n:null}function mr(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=t?Uy(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&cg(c),ref:t&&t.ref?e&&s?Bt(s)?s.concat(el(t)):[s,el(t)]:el(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==li?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&mr(n.ssContent),ssFallback:n.ssFallback&&mr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Vo(u,l.clone(u)),u}function Iy(n=" ",t=0){return un(nc,null,n,t)}function YP(n,t){const e=un(tl,null,n);return e.staticCount=t,e}function $P(n="",t=!1){return t?(Ry(),Py(nn,null,n)):un(nn,null,n)}function ci(n){return n==null||typeof n=="boolean"?un(nn):Bt(n)?un(li,null,n.slice()):El(n)?nr(n):un(nc,null,String(n))}function nr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:mr(n)}function vh(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),vh(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!K_(t)?t._ctx=sn:r===3&&sn&&(sn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Wt(t)?(t={default:t,_ctx:sn},e=32):(t=String(t),i&64?(e=16,t=[Iy(t)]):e=8);n.children=t,n.shapeFlag|=e}function Uy(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=oh([t.class,i.class]));else if(r==="style")t.style=sh([t.style,i.style]);else if(Gl(r)){const s=t[r],o=i[r];o&&s!==o&&!(Bt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function ri(n,t,e,i=null){ti(n,t,7,[e,i])}const Oy=j_();let Ny=0;function Fy(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Oy,s={uid:Ny++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new i_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:J_(i,r),emitsOptions:og(i,r),emit:null,emitted:null,propsDefaults:me,inheritAttrs:i.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=My.bind(null,s),n.ce&&n.ce(s),s}let ze=null;const By=()=>ze||sn;let Tl,zu;{const n=jl(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Tl=t("__VUE_INSTANCE_SETTERS__",e=>ze=e),zu=t("__VUE_SSR_SETTERS__",e=>Wo=e)}const ca=n=>{const t=ze;return Tl(n),n.scope.on(),()=>{n.scope.off(),Tl(t)}},wd=()=>{ze&&ze.scope.off(),Tl(null)};function fg(n){return n.vnode.shapeFlag&4}let Wo=!1;function zy(n,t=!1,e=!1){t&&zu(t);const{props:i,children:r}=n.vnode,s=fg(n);ly(n,i,s,t),hy(n,r,e||t);const o=s?ky(n,t):void 0;return t&&zu(!1),o}function ky(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Qx);const{setup:i}=e;if(i){ki();const r=n.setupContext=i.length>1?Vy(n):null,s=ca(n),o=la(i,n,0,[n.props,r]),a=Zm(o);if(Hi(),s(),(a||n.sp)&&!Co(n)&&F_(n),a){if(o.then(wd,wd),t)return o.then(l=>{Rd(n,l)}).catch(l=>{Zl(l,n,0)});n.asyncDep=o}else Rd(n,o)}else hg(n)}function Rd(n,t,e){Wt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:he(t)&&(n.setupState=E_(t)),hg(n)}function hg(n,t,e){const i=n.type;n.render||(n.render=i.render||pi);{const r=ca(n);ki();try{ty(n)}finally{Hi(),r()}}}const Hy={get(n,t){return Ye(n,"get",""),n[t]}};function Vy(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Hy),slots:n.slots,emit:n.emit,expose:t}}function ic(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(E_(ph(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Po)return Po[e](n)},has(t,e){return e in t||e in Po}})):n.proxy}function Gy(n,t=!0){return Wt(n)?n.displayName||n.name:n.name||t&&n.__name}function Wy(n){return Wt(n)&&"__vccOpts"in n}const bn=(n,t)=>Lx(n,t,Wo);function xh(n,t,e){const i=arguments.length;return i===2?he(t)&&!Bt(t)?El(t)?un(n,null,[t]):un(n,t):un(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&El(e)&&(e=[e]),un(n,t,e))}const Xy="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ku;const Cd=typeof window<"u"&&window.trustedTypes;if(Cd)try{ku=Cd.createPolicy("vue",{createHTML:n=>n})}catch{}const dg=ku?n=>ku.createHTML(n):n=>n,qy="http://www.w3.org/2000/svg",jy="http://www.w3.org/1998/Math/MathML",Ci=typeof document<"u"?document:null,Pd=Ci&&Ci.createElement("template"),Yy={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Ci.createElementNS(qy,n):t==="mathml"?Ci.createElementNS(jy,n):e?Ci.createElement(n,{is:e}):Ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ci.createTextNode(n),createComment:n=>Ci.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ci.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Pd.innerHTML=dg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Pd.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Xi="transition",lo="animation",Xo=Symbol("_vtc"),pg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$y=ke({},D_,pg),Ky=n=>(n.displayName="Transition",n.props=$y,n),KP=Ky((n,{slots:t})=>xh(Vx,Zy(n),t)),Ar=(n,t=[])=>{Bt(n)?n.forEach(e=>e(...t)):n&&n(...t)},Dd=n=>n?Bt(n)?n.some(t=>t.length>1):n.length>1:!1;function Zy(n){const t={};for(const U in n)U in pg||(t[U]=n[U]);if(n.css===!1)return t;const{name:e="v",type:i,duration:r,enterFromClass:s=`${e}-enter-from`,enterActiveClass:o=`${e}-enter-active`,enterToClass:a=`${e}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${e}-leave-from`,leaveActiveClass:h=`${e}-leave-active`,leaveToClass:d=`${e}-leave-to`}=n,g=Jy(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:S,onLeave:x,onLeaveCancelled:b,onBeforeAppear:R=p,onAppear:C=M,onAppearCancelled:P=S}=t,v=(U,O,W,Q)=>{U._enterCancelled=Q,wr(U,O?u:a),wr(U,O?c:o),W&&W()},E=(U,O)=>{U._isLeaving=!1,wr(U,f),wr(U,d),wr(U,h),O&&O()},I=U=>(O,W)=>{const Q=U?C:M,V=()=>v(O,U,W);Ar(Q,[O,V]),Ld(()=>{wr(O,U?l:s),Si(O,U?u:a),Dd(Q)||Id(O,i,_,V)})};return ke(t,{onBeforeEnter(U){Ar(p,[U]),Si(U,s),Si(U,o)},onBeforeAppear(U){Ar(R,[U]),Si(U,l),Si(U,c)},onEnter:I(!1),onAppear:I(!0),onLeave(U,O){U._isLeaving=!0;const W=()=>E(U,O);Si(U,f),U._enterCancelled?(Si(U,h),Nd()):(Nd(),Si(U,h)),Ld(()=>{U._isLeaving&&(wr(U,f),Si(U,d),Dd(x)||Id(U,i,m,W))}),Ar(x,[U,W])},onEnterCancelled(U){v(U,!1,void 0,!0),Ar(S,[U])},onAppearCancelled(U){v(U,!0,void 0,!0),Ar(P,[U])},onLeaveCancelled(U){E(U),Ar(b,[U])}})}function Jy(n){if(n==null)return null;if(he(n))return[Lc(n.enter),Lc(n.leave)];{const t=Lc(n);return[t,t]}}function Lc(n){return Yv(n)}function Si(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n[Xo]||(n[Xo]=new Set)).add(t)}function wr(n,t){t.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const e=n[Xo];e&&(e.delete(t),e.size||(n[Xo]=void 0))}function Ld(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Qy=0;function Id(n,t,e,i){const r=n._endId=++Qy,s=()=>{r===n._endId&&i()};if(e!=null)return setTimeout(s,e);const{type:o,timeout:a,propCount:l}=tS(n,t);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function tS(n,t){const e=window.getComputedStyle(n),i=g=>(e[g]||"").split(", "),r=i(`${Xi}Delay`),s=i(`${Xi}Duration`),o=Ud(r,s),a=i(`${lo}Delay`),l=i(`${lo}Duration`),c=Ud(a,l);let u=null,f=0,h=0;t===Xi?o>0&&(u=Xi,f=o,h=s.length):t===lo?c>0&&(u=lo,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Xi:lo:null,h=u?u===Xi?s.length:l.length:0);const d=u===Xi&&/\b(transform|all)(,|$)/.test(i(`${Xi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Ud(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,i)=>Od(e)+Od(n[i])))}function Od(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Nd(){return document.body.offsetHeight}function eS(n,t,e){const i=n[Xo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const bl=Symbol("_vod"),mg=Symbol("_vsh"),ZP={beforeMount(n,{value:t},{transition:e}){n[bl]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):co(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),co(n,!0),i.enter(n)):i.leave(n,()=>{co(n,!1)}):co(n,t))},beforeUnmount(n,{value:t}){co(n,t)}};function co(n,t){n.style.display=t?n[bl]:"none",n[mg]=!t}const nS=Symbol(""),iS=/(^|;)\s*display\s*:/;function rS(n,t,e){const i=n.style,r=we(e);let s=!1;if(e&&!r){if(t)if(we(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&nl(i,a,"")}else for(const o in t)e[o]==null&&nl(i,o,"");for(const o in e)o==="display"&&(s=!0),nl(i,o,e[o])}else if(r){if(t!==e){const o=i[nS];o&&(e+=";"+o),i.cssText=e,s=iS.test(e)}}else t&&n.removeAttribute("style");bl in n&&(n[bl]=s?i.display:"",n[mg]&&(i.display="none"))}const Fd=/\s*!important$/;function nl(n,t,e){if(Bt(e))e.forEach(i=>nl(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=sS(n,t);Fd.test(e)?n.setProperty(ss(i),e.replace(Fd,""),"important"):n[i]=e}}const Bd=["Webkit","Moz","ms"],Ic={};function sS(n,t){const e=Ic[t];if(e)return e;let i=Wn(t);if(i!=="filter"&&i in n)return Ic[t]=i;i=ql(i);for(let r=0;r<Bd.length;r++){const s=Bd[r]+i;if(s in n)return Ic[t]=s}return t}const zd="http://www.w3.org/1999/xlink";function kd(n,t,e,i,r,s=tx(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(zd,t.slice(6,t.length)):n.setAttributeNS(zd,t,e):e==null||s&&!t_(e)?n.removeAttribute(t):n.setAttribute(t,s?"":_i(e)?String(e):e)}function Hd(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?dg(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=t_(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function kr(n,t,e,i){n.addEventListener(t,e,i)}function oS(n,t,e,i){n.removeEventListener(t,e,i)}const Vd=Symbol("_vei");function aS(n,t,e,i,r=null){const s=n[Vd]||(n[Vd]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=lS(t);if(i){const c=s[t]=fS(i,r);kr(n,a,c,l)}else o&&(oS(n,a,o,l),s[t]=void 0)}}const Gd=/(?:Once|Passive|Capture)$/;function lS(n){let t;if(Gd.test(n)){t={};let i;for(;i=n.match(Gd);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ss(n.slice(2)),t]}let Uc=0;const cS=Promise.resolve(),uS=()=>Uc||(cS.then(()=>Uc=0),Uc=Date.now());function fS(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;ti(hS(i,e.value),t,5,[i])};return e.value=n,e.attached=uS(),e}function hS(n,t){if(Bt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Wd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,dS=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?eS(n,i,o):t==="style"?rS(n,e,i):Gl(t)?nh(t)||aS(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):pS(n,t,i,o))?(Hd(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&kd(n,t,i,o,s,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!we(i))?Hd(n,Wn(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),kd(n,t,i,o))};function pS(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Wd(t)&&Wt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wd(t)&&we(e)?!1:t in n}const Al=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Bt(t)?e=>Ja(t,e):t};function mS(n){n.target.composing=!0}function Xd(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ns=Symbol("_assign"),JP={created(n,{modifiers:{lazy:t,trim:e,number:i}},r){n[Ns]=Al(r);const s=i||r.props&&r.props.type==="number";kr(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),s&&(a=_l(a)),n[Ns](a)}),e&&kr(n,"change",()=>{n.value=n.value.trim()}),t||(kr(n,"compositionstart",mS),kr(n,"compositionend",Xd),kr(n,"change",Xd))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Ns]=Al(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?_l(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||r&&n.value.trim()===l)||(n.value=l))}},QP={deep:!0,created(n,{value:t,modifiers:{number:e}},i){const r=Wl(t);kr(n,"change",()=>{const s=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>e?_l(wl(o)):wl(o));n[Ns](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,Jl(()=>{n._assigning=!1})}),n[Ns]=Al(i)},mounted(n,{value:t}){qd(n,t)},beforeUpdate(n,t,e){n[Ns]=Al(e)},updated(n,{value:t}){n._assigning||qd(n,t)}};function qd(n,t){const e=n.multiple,i=Bt(t);if(!(e&&!i&&!Wl(t))){for(let r=0,s=n.options.length;r<s;r++){const o=n.options[r],a=wl(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=nx(t,a)>-1}else o.selected=t.has(a);else if(Yl(wl(o),t)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function wl(n){return"_value"in n?n._value:n.value}const _S=["ctrl","shift","alt","meta"],gS={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>_S.some(e=>n[`${e}Key`]&&!t.includes(e))},tD=(n,t)=>{const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=gS[t[o]];if(a&&a(r,t))return}return n(r,...s)})},vS=ke({patchProp:dS},Yy);let jd;function xS(){return jd||(jd=py(vS))}const eD=(...n)=>{const t=xS().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=SS(i);if(!r)return;const s=t._component;!Wt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,yS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function yS(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function SS(n){return we(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let _g;const rc=n=>_g=n,gg=Symbol();function Hu(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Io;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Io||(Io={}));function nD(){const n=r_(!0),t=n.run(()=>Kl({}));let e=[],i=[];const r=ph({install(s){rc(r),r._a=s,s.provide(gg,r),s.config.globalProperties.$pinia=r,i.forEach(o=>e.push(o)),i=[]},use(s){return this._a?e.push(s):i.push(s),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return r}const vg=()=>{};function Yd(n,t,e,i=vg){n.push(t);const r=()=>{const s=n.indexOf(t);s>-1&&(n.splice(s,1),i())};return!e&&s_()&&rx(r),r}function us(n,...t){n.slice().forEach(e=>{e(...t)})}const MS=n=>n(),$d=Symbol(),Oc=Symbol();function Vu(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,i)=>n.set(i,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const i=t[e],r=n[e];Hu(r)&&Hu(i)&&n.hasOwnProperty(e)&&!Te(i)&&!Bi(i)?n[e]=Vu(r,i):n[e]=i}return n}const ES=Symbol();function TS(n){return!Hu(n)||!n.hasOwnProperty(ES)}const{assign:Qi}=Object;function bS(n){return!!(Te(n)&&n.effect)}function AS(n,t,e,i){const{state:r,actions:s,getters:o}=t,a=e.state.value[n];let l;function c(){a||(e.state.value[n]=r?r():{});const u=wx(e.state.value[n]);return Qi(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=ph(bn(()=>{rc(e);const d=e._s.get(n);return o[h].call(d,d)})),f),{}))}return l=xg(n,c,t,e,i,!0),l}function xg(n,t,e={},i,r,s){let o;const a=Qi({actions:{}},e),l={deep:!0};let c,u,f=[],h=[],d;const g=i.state.value[n];!s&&!g&&(i.state.value[n]={}),Kl({});let _;function m(P){let v;c=u=!1,typeof P=="function"?(P(i.state.value[n]),v={type:Io.patchFunction,storeId:n,events:d}):(Vu(i.state.value[n],P),v={type:Io.patchObject,payload:P,storeId:n,events:d});const E=_=Symbol();Jl().then(()=>{_===E&&(c=!0)}),u=!0,us(f,v,i.state.value[n])}const p=s?function(){const{state:v}=e,E=v?v():{};this.$patch(I=>{Qi(I,E)})}:vg;function M(){o.stop(),f=[],h=[],i._s.delete(n)}const S=(P,v="")=>{if($d in P)return P[Oc]=v,P;const E=function(){rc(i);const I=Array.from(arguments),U=[],O=[];function W(j){U.push(j)}function Q(j){O.push(j)}us(h,{args:I,name:E[Oc],store:b,after:W,onError:Q});let V;try{V=P.apply(this&&this.$id===n?this:b,I)}catch(j){throw us(O,j),j}return V instanceof Promise?V.then(j=>(us(U,j),j)).catch(j=>(us(O,j),Promise.reject(j))):(us(U,V),V)};return E[$d]=!0,E[Oc]=v,E},x={_p:i,$id:n,$onAction:Yd.bind(null,h),$patch:m,$reset:p,$subscribe(P,v={}){const E=Yd(f,P,v.detached,()=>I()),I=o.run(()=>Do(()=>i.state.value[n],U=>{(v.flush==="sync"?u:c)&&P({storeId:n,type:Io.direct,events:d},U)},Qi({},l,v)));return E},$dispose:M},b=aa(x);i._s.set(n,b);const C=(i._a&&i._a.runWithContext||MS)(()=>i._e.run(()=>(o=r_()).run(()=>t({action:S}))));for(const P in C){const v=C[P];if(Te(v)&&!bS(v)||Bi(v))s||(g&&TS(v)&&(Te(v)?v.value=g[P]:Vu(v,g[P])),i.state.value[n][P]=v);else if(typeof v=="function"){const E=S(v,P);C[P]=E,a.actions[P]=v}}return Qi(b,C),Qi(ee(b),C),Object.defineProperty(b,"$state",{get:()=>i.state.value[n],set:P=>{m(v=>{Qi(v,P)})}}),i._p.forEach(P=>{Qi(b,o.run(()=>P({store:b,app:i._a,pinia:i,options:a})))}),g&&s&&e.hydrate&&e.hydrate(b.$state,g),c=!0,u=!0,b}/*! #__NO_SIDE_EFFECTS__ */function iD(n,t,e){let i,r;const s=typeof t=="function";typeof n=="string"?(i=n,r=s?e:t):(r=n,i=n.id);function o(a,l){const c=ay();return a=a||(c?Gn(gg,null):null),a&&rc(a),a=_g,a._s.has(i)||(s?xg(i,t,r,a):AS(i,r,a)),a._s.get(i)}return o.$id=i,o}function rD(n){{const t=ee(n),e={};for(const i in t){const r=t[i];r.effect?e[i]=bn({get:()=>n[i],set(s){n[i]=s}}):(Te(r)||Bi(r))&&(e[i]=Px(n,i))}return e}}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ws=typeof document<"u";function yg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function wS(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&yg(n.default)}const se=Object.assign;function Nc(n,t){const e={};for(const i in t){const r=t[i];e[i]=ei(r)?r.map(n):n(r)}return e}const Uo=()=>{},ei=Array.isArray,Sg=/#/g,RS=/&/g,CS=/\//g,PS=/=/g,DS=/\?/g,Mg=/\+/g,LS=/%5B/g,IS=/%5D/g,Eg=/%5E/g,US=/%60/g,Tg=/%7B/g,OS=/%7C/g,bg=/%7D/g,NS=/%20/g;function yh(n){return encodeURI(""+n).replace(OS,"|").replace(LS,"[").replace(IS,"]")}function FS(n){return yh(n).replace(Tg,"{").replace(bg,"}").replace(Eg,"^")}function Gu(n){return yh(n).replace(Mg,"%2B").replace(NS,"+").replace(Sg,"%23").replace(RS,"%26").replace(US,"`").replace(Tg,"{").replace(bg,"}").replace(Eg,"^")}function BS(n){return Gu(n).replace(PS,"%3D")}function zS(n){return yh(n).replace(Sg,"%23").replace(DS,"%3F")}function kS(n){return n==null?"":zS(n).replace(CS,"%2F")}function qo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const HS=/\/$/,VS=n=>n.replace(HS,"");function Fc(n,t,e="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=n(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=qS(i??t,e),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:qo(o)}}function GS(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function Kd(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function WS(n,t,e){const i=t.matched.length-1,r=e.matched.length-1;return i>-1&&i===r&&Ws(t.matched[i],e.matched[r])&&Ag(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Ws(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Ag(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!XS(n[e],t[e]))return!1;return!0}function XS(n,t){return ei(n)?Zd(n,t):ei(t)?Zd(t,n):n===t}function Zd(n,t){return ei(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function qS(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const qi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var jo;(function(n){n.pop="pop",n.push="push"})(jo||(jo={}));var Oo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Oo||(Oo={}));function jS(n){if(!n)if(ws){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),VS(n)}const YS=/^[^#]+#/;function $S(n,t){return n.replace(YS,"#")+t}function KS(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const sc=()=>({left:window.scrollX,top:window.scrollY});function ZS(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=KS(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Jd(n,t){return(history.state?history.state.position-t:-1)+n}const Wu=new Map;function JS(n,t){Wu.set(n,t)}function QS(n){const t=Wu.get(n);return Wu.delete(n),t}let tM=()=>location.protocol+"//"+location.host;function wg(n,t){const{pathname:e,search:i,hash:r}=t,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Kd(l,"")}return Kd(e,n)+i+r}function eM(n,t,e,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=wg(n,location),g=e.value,_=t.value;let m=0;if(h){if(e.value=d,t.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);r.forEach(p=>{p(e.value,g,{delta:m,type:jo.pop,direction:m?m>0?Oo.forward:Oo.back:Oo.unknown})})};function l(){o=e.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(se({},h.state,{scroll:sc()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Qd(n,t,e,i=!1,r=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:r?sc():null}}function nM(n){const{history:t,location:e}=window,i={value:wg(n,e)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(e.host&&document.querySelector("base")?n:n.slice(f))+l:tM()+n+l;try{t[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),e[u?"replace":"assign"](h)}}function o(l,c){const u=se({},t.state,Qd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=se({},r.value,t.state,{forward:l,scroll:sc()});s(u.current,u,!0);const f=se({},Qd(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function sD(n){n=jS(n);const t=nM(n),e=eM(n,t.state,t.location,t.replace);function i(s,o=!0){o||e.pauseListeners(),history.go(s)}const r=se({location:"",base:n,go:i,createHref:$S.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function iM(n){return typeof n=="string"||n&&typeof n=="object"}function Rg(n){return typeof n=="string"||typeof n=="symbol"}const Cg=Symbol("");var tp;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(tp||(tp={}));function Xs(n,t){return se(new Error,{type:n,[Cg]:!0},t)}function Mi(n,t){return n instanceof Error&&Cg in n&&(t==null||!!(n.type&t))}const ep="[^/]+?",rM={sensitive:!1,strict:!1,start:!0,end:!0},sM=/[.+*?^${}()[\]/\\]/g;function oM(n,t){const e=se({},rM,t),i=[];let r=e.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];e.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(e.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(sM,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const M=p||ep;if(M!==ep){d+=10;try{new RegExp(`(${M})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+x.message)}}let S=_?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,d+=20,m&&(d+=-8),_&&(d+=-20),M===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,e.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(ei(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=ei(p)?p.join("/"):p;if(!M)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function aM(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===80?-1:1:n.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Pg(n,t){let e=0;const i=n.score,r=t.score;for(;e<i.length&&e<r.length;){const s=aM(i[e],r[e]);if(s)return s;e++}if(Math.abs(r.length-i.length)===1){if(np(i))return 1;if(np(r))return-1}return r.length-i.length}function np(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const lM={type:0,value:""},cM=/[a-zA-Z0-9_]/;function uM(n){if(!n)return[[]];if(n==="/")return[[lM]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${c}": ${d}`)}let e=0,i=e;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(e===0?s.push({type:0,value:c}):e===1||e===2||e===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==2){i=e,e=4;continue}switch(e){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),e=1):h();break;case 4:h(),e=i;break;case 1:l==="("?e=2:cM.test(l)?h():(f(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=3:u+=l;break;case 3:f(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function fM(n,t,e){const i=oM(uM(n.path),e),r=se(i,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function hM(n,t){const e=[],i=new Map;t=op({strict:!1,end:!0,sensitive:!1},t);function r(f){return i.get(f)}function s(f,h,d){const g=!d,_=rp(f);_.aliasOf=d&&d.record;const m=op(t,f),p=[_];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of x)p.push(rp(se({},_,{components:d?d.record.components:_.components,path:b,aliasOf:d?d.record:_})))}let M,S;for(const x of p){const{path:b}=x;if(h&&b[0]!=="/"){const R=h.record.path,C=R[R.length-1]==="/"?"":"/";x.path=h.record.path+(b&&C+b)}if(M=fM(x,h,m),d?d.alias.push(M):(S=S||M,S!==M&&S.alias.push(M),g&&f.name&&!sp(M)&&o(f.name)),Dg(M)&&l(M),_.children){const R=_.children;for(let C=0;C<R.length;C++)s(R[C],M,d&&d.children[C])}d=d||M}return S?()=>{o(S)}:Uo}function o(f){if(Rg(f)){const h=i.get(f);h&&(i.delete(f),e.splice(e.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=e.indexOf(f);h>-1&&(e.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return e}function l(f){const h=mM(f,e);e.splice(h,0,f),f.record.name&&!sp(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},_,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Xs(1,{location:f});m=d.record.name,g=se(ip(h.params,d.keys.filter(S=>!S.optional).concat(d.parent?d.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&ip(f.params,d.keys.map(S=>S.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=e.find(S=>S.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=h.name?i.get(h.name):e.find(S=>S.re.test(h.path)),!d)throw Xs(1,{location:f,currentLocation:h});m=d.record.name,g=se({},h.params,f.params),_=d.stringify(g)}const p=[];let M=d;for(;M;)p.unshift(M.record),M=M.parent;return{name:m,path:_,params:g,matched:p,meta:pM(p)}}n.forEach(f=>s(f));function u(){e.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ip(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function rp(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:dM(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function dM(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function sp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function pM(n){return n.reduce((t,e)=>se(t,e.meta),{})}function op(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}function mM(n,t){let e=0,i=t.length;for(;e!==i;){const s=e+i>>1;Pg(n,t[s])<0?i=s:e=s+1}const r=_M(n);return r&&(i=t.lastIndexOf(r,i-1)),i}function _M(n){let t=n;for(;t=t.parent;)if(Dg(t)&&Pg(n,t)===0)return t}function Dg({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function gM(n){const t={};if(n===""||n==="?")return t;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Mg," "),o=s.indexOf("="),a=qo(o<0?s:s.slice(0,o)),l=o<0?null:qo(s.slice(o+1));if(a in t){let c=t[a];ei(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function ap(n){let t="";for(let e in n){const i=n[e];if(e=BS(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(ei(i)?i.map(s=>s&&Gu(s)):[i&&Gu(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function vM(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=ei(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const xM=Symbol(""),lp=Symbol(""),oc=Symbol(""),Sh=Symbol(""),Xu=Symbol("");function uo(){let n=[];function t(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function ir(n,t,e,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Xs(4,{from:e,to:t})):h instanceof Error?l(h):iM(h)?l(Xs(2,{from:t,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],t,e,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Bc(n,t,e,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(yg(l)){const u=(l.__vccOpts||l)[t];u&&s.push(ir(u,e,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=wS(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[t];return d&&ir(d,e,i,o,a,r)()}))}}return s}function cp(n){const t=Gn(oc),e=Gn(Sh),i=bn(()=>{const l=Us(n.to);return t.resolve(l)}),r=bn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=e.matched;if(!u||!f.length)return-1;const h=f.findIndex(Ws.bind(null,u));if(h>-1)return h;const d=up(l[c-2]);return c>1&&up(u)===d&&f[f.length-1].path!==d?f.findIndex(Ws.bind(null,l[c-2])):h}),s=bn(()=>r.value>-1&&TM(e.params,i.value.params)),o=bn(()=>r.value>-1&&r.value===e.matched.length-1&&Ag(e.params,i.value.params));function a(l={}){if(EM(l)){const c=t[Us(n.replace)?"replace":"push"](Us(n.to)).catch(Uo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:bn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function yM(n){return n.length===1?n[0]:n}const SM=N_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:cp,setup(n,{slots:t}){const e=aa(cp(n)),{options:i}=Gn(oc),r=bn(()=>({[fp(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[fp(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&yM(t.default(e));return n.custom?s:xh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},s)}}}),MM=SM;function EM(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function TM(n,t){for(const e in t){const i=t[e],r=n[e];if(typeof i=="string"){if(i!==r)return!1}else if(!ei(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function up(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const fp=(n,t,e)=>n??t??e,bM=N_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Gn(Xu),r=bn(()=>n.route||i.value),s=Gn(lp,0),o=bn(()=>{let c=Us(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=bn(()=>r.value.matched[o.value]);Qa(lp,bn(()=>o.value+1)),Qa(xM,a),Qa(Xu,r);const l=Kl();return Do(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ws(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return hp(e.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=xh(h,se({},g,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return hp(e.default,{Component:m,route:c})||m}}});function hp(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const AM=bM;function oD(n){const t=hM(n.routes,n),e=n.parseQuery||gM,i=n.stringifyQuery||ap,r=n.history,s=uo(),o=uo(),a=uo(),l=Tx(qi);let c=qi;ws&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Nc.bind(null,B=>""+B),f=Nc.bind(null,kS),h=Nc.bind(null,qo);function d(B,ot){let ut,ct;return Rg(B)?(ut=t.getRecordMatcher(B),ct=ot):ct=B,t.addRoute(ct,ut)}function g(B){const ot=t.getRecordMatcher(B);ot&&t.removeRoute(ot)}function _(){return t.getRoutes().map(B=>B.record)}function m(B){return!!t.getRecordMatcher(B)}function p(B,ot){if(ot=se({},ot||l.value),typeof B=="string"){const T=Fc(e,B,ot.path),st=t.resolve({path:T.path},ot),Z=r.createHref(T.fullPath);return se(T,st,{params:h(st.params),hash:qo(T.hash),redirectedFrom:void 0,href:Z})}let ut;if(B.path!=null)ut=se({},B,{path:Fc(e,B.path,ot.path).path});else{const T=se({},B.params);for(const st in T)T[st]==null&&delete T[st];ut=se({},B,{params:f(T)}),ot.params=f(ot.params)}const ct=t.resolve(ut,ot),zt=B.hash||"";ct.params=u(h(ct.params));const D=GS(i,se({},B,{hash:FS(zt),path:ct.path})),L=r.createHref(D);return se({fullPath:D,hash:zt,query:i===ap?vM(B.query):B.query||{}},ct,{redirectedFrom:void 0,href:L})}function M(B){return typeof B=="string"?Fc(e,B,l.value.path):se({},B)}function S(B,ot){if(c!==B)return Xs(8,{from:ot,to:B})}function x(B){return C(B)}function b(B){return x(se(M(B),{replace:!0}))}function R(B){const ot=B.matched[B.matched.length-1];if(ot&&ot.redirect){const{redirect:ut}=ot;let ct=typeof ut=="function"?ut(B):ut;return typeof ct=="string"&&(ct=ct.includes("?")||ct.includes("#")?ct=M(ct):{path:ct},ct.params={}),se({query:B.query,hash:B.hash,params:ct.path!=null?{}:B.params},ct)}}function C(B,ot){const ut=c=p(B),ct=l.value,zt=B.state,D=B.force,L=B.replace===!0,T=R(ut);if(T)return C(se(M(T),{state:typeof T=="object"?se({},zt,T.state):zt,force:D,replace:L}),ot||ut);const st=ut;st.redirectedFrom=ot;let Z;return!D&&WS(i,ct,ut)&&(Z=Xs(16,{to:st,from:ct}),bt(ct,ct,!0,!1)),(Z?Promise.resolve(Z):E(st,ct)).catch(K=>Mi(K)?Mi(K,2)?K:vt(K):G(K,st,ct)).then(K=>{if(K){if(Mi(K,2))return C(se({replace:L},M(K.to),{state:typeof K.to=="object"?se({},zt,K.to.state):zt,force:D}),ot||st)}else K=U(st,ct,!0,L,zt);return I(st,ct,K),K})}function P(B,ot){const ut=S(B,ot);return ut?Promise.reject(ut):Promise.resolve()}function v(B){const ot=rt.values().next().value;return ot&&typeof ot.runWithContext=="function"?ot.runWithContext(B):B()}function E(B,ot){let ut;const[ct,zt,D]=wM(B,ot);ut=Bc(ct.reverse(),"beforeRouteLeave",B,ot);for(const T of ct)T.leaveGuards.forEach(st=>{ut.push(ir(st,B,ot))});const L=P.bind(null,B,ot);return ut.push(L),wt(ut).then(()=>{ut=[];for(const T of s.list())ut.push(ir(T,B,ot));return ut.push(L),wt(ut)}).then(()=>{ut=Bc(zt,"beforeRouteUpdate",B,ot);for(const T of zt)T.updateGuards.forEach(st=>{ut.push(ir(st,B,ot))});return ut.push(L),wt(ut)}).then(()=>{ut=[];for(const T of D)if(T.beforeEnter)if(ei(T.beforeEnter))for(const st of T.beforeEnter)ut.push(ir(st,B,ot));else ut.push(ir(T.beforeEnter,B,ot));return ut.push(L),wt(ut)}).then(()=>(B.matched.forEach(T=>T.enterCallbacks={}),ut=Bc(D,"beforeRouteEnter",B,ot,v),ut.push(L),wt(ut))).then(()=>{ut=[];for(const T of o.list())ut.push(ir(T,B,ot));return ut.push(L),wt(ut)}).catch(T=>Mi(T,8)?T:Promise.reject(T))}function I(B,ot,ut){a.list().forEach(ct=>v(()=>ct(B,ot,ut)))}function U(B,ot,ut,ct,zt){const D=S(B,ot);if(D)return D;const L=ot===qi,T=ws?history.state:{};ut&&(ct||L?r.replace(B.fullPath,se({scroll:L&&T&&T.scroll},zt)):r.push(B.fullPath,zt)),l.value=B,bt(B,ot,ut,L),vt()}let O;function W(){O||(O=r.listen((B,ot,ut)=>{if(!dt.listening)return;const ct=p(B),zt=R(ct);if(zt){C(se(zt,{replace:!0,force:!0}),ct).catch(Uo);return}c=ct;const D=l.value;ws&&JS(Jd(D.fullPath,ut.delta),sc()),E(ct,D).catch(L=>Mi(L,12)?L:Mi(L,2)?(C(se(M(L.to),{force:!0}),ct).then(T=>{Mi(T,20)&&!ut.delta&&ut.type===jo.pop&&r.go(-1,!1)}).catch(Uo),Promise.reject()):(ut.delta&&r.go(-ut.delta,!1),G(L,ct,D))).then(L=>{L=L||U(ct,D,!1),L&&(ut.delta&&!Mi(L,8)?r.go(-ut.delta,!1):ut.type===jo.pop&&Mi(L,20)&&r.go(-1,!1)),I(ct,D,L)}).catch(Uo)}))}let Q=uo(),V=uo(),j;function G(B,ot,ut){vt(B);const ct=V.list();return ct.length?ct.forEach(zt=>zt(B,ot,ut)):console.error(B),Promise.reject(B)}function gt(){return j&&l.value!==qi?Promise.resolve():new Promise((B,ot)=>{Q.add([B,ot])})}function vt(B){return j||(j=!B,W(),Q.list().forEach(([ot,ut])=>B?ut(B):ot()),Q.reset()),B}function bt(B,ot,ut,ct){const{scrollBehavior:zt}=n;if(!ws||!zt)return Promise.resolve();const D=!ut&&QS(Jd(B.fullPath,0))||(ct||!ut)&&history.state&&history.state.scroll||null;return Jl().then(()=>zt(B,ot,D)).then(L=>L&&ZS(L)).catch(L=>G(L,B,ot))}const Nt=B=>r.go(B);let Zt;const rt=new Set,dt={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:x,replace:b,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:gt,install(B){const ot=this;B.component("RouterLink",MM),B.component("RouterView",AM),B.config.globalProperties.$router=ot,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Us(l)}),ws&&!Zt&&l.value===qi&&(Zt=!0,x(r.location).catch(zt=>{}));const ut={};for(const zt in qi)Object.defineProperty(ut,zt,{get:()=>l.value[zt],enumerable:!0});B.provide(oc,ot),B.provide(Sh,y_(ut)),B.provide(Xu,l);const ct=B.unmount;rt.add(B),B.unmount=function(){rt.delete(B),rt.size<1&&(c=qi,O&&O(),O=null,l.value=qi,Zt=!1,j=!1),ct()}}};function wt(B){return B.reduce((ot,ut)=>ot.then(()=>v(ut)),Promise.resolve())}return dt}function wM(n,t){const e=[],i=[],r=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(n.matched.find(c=>Ws(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>Ws(c,l))||r.push(l))}return[e,i,r]}function aD(){return Gn(oc)}function lD(n){return Gn(Sh)}function Lg(n,t){return function(){return n.apply(t,arguments)}}const{toString:RM}=Object.prototype,{getPrototypeOf:Mh}=Object,{iterator:ac,toStringTag:Ig}=Symbol,lc=(n=>t=>{const e=RM.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),ii=n=>(n=n.toLowerCase(),t=>lc(t)===n),cc=n=>t=>typeof t===n,{isArray:io}=Array,Yo=cc("undefined");function CM(n){return n!==null&&!Yo(n)&&n.constructor!==null&&!Yo(n.constructor)&&fn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Ug=ii("ArrayBuffer");function PM(n){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(n):t=n&&n.buffer&&Ug(n.buffer),t}const DM=cc("string"),fn=cc("function"),Og=cc("number"),uc=n=>n!==null&&typeof n=="object",LM=n=>n===!0||n===!1,il=n=>{if(lc(n)!=="object")return!1;const t=Mh(n);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ig in n)&&!(ac in n)},IM=ii("Date"),UM=ii("File"),OM=ii("Blob"),NM=ii("FileList"),FM=n=>uc(n)&&fn(n.pipe),BM=n=>{let t;return n&&(typeof FormData=="function"&&n instanceof FormData||fn(n.append)&&((t=lc(n))==="formdata"||t==="object"&&fn(n.toString)&&n.toString()==="[object FormData]"))},zM=ii("URLSearchParams"),[kM,HM,VM,GM]=["ReadableStream","Request","Response","Headers"].map(ii),WM=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ua(n,t,{allOwnKeys:e=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),io(n))for(i=0,r=n.length;i<r;i++)t.call(null,n[i],i,n);else{const s=e?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let a;for(i=0;i<o;i++)a=s[i],t.call(null,n[a],a,n)}}function Ng(n,t){t=t.toLowerCase();const e=Object.keys(n);let i=e.length,r;for(;i-- >0;)if(r=e[i],t===r.toLowerCase())return r;return null}const Gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Fg=n=>!Yo(n)&&n!==Gr;function qu(){const{caseless:n}=Fg(this)&&this||{},t={},e=(i,r)=>{const s=n&&Ng(t,r)||r;il(t[s])&&il(i)?t[s]=qu(t[s],i):il(i)?t[s]=qu({},i):io(i)?t[s]=i.slice():t[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&ua(arguments[i],e);return t}const XM=(n,t,e,{allOwnKeys:i}={})=>(ua(t,(r,s)=>{e&&fn(r)?n[s]=Lg(r,e):n[s]=r},{allOwnKeys:i}),n),qM=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),jM=(n,t,e,i)=>{n.prototype=Object.create(t.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:t.prototype}),e&&Object.assign(n.prototype,e)},YM=(n,t,e,i)=>{let r,s,o;const a={};if(t=t||{},n==null)return t;do{for(r=Object.getOwnPropertyNames(n),s=r.length;s-- >0;)o=r[s],(!i||i(o,n,t))&&!a[o]&&(t[o]=n[o],a[o]=!0);n=e!==!1&&Mh(n)}while(n&&(!e||e(n,t))&&n!==Object.prototype);return t},$M=(n,t,e)=>{n=String(n),(e===void 0||e>n.length)&&(e=n.length),e-=t.length;const i=n.indexOf(t,e);return i!==-1&&i===e},KM=n=>{if(!n)return null;if(io(n))return n;let t=n.length;if(!Og(t))return null;const e=new Array(t);for(;t-- >0;)e[t]=n[t];return e},ZM=(n=>t=>n&&t instanceof n)(typeof Uint8Array<"u"&&Mh(Uint8Array)),JM=(n,t)=>{const i=(n&&n[ac]).call(n);let r;for(;(r=i.next())&&!r.done;){const s=r.value;t.call(n,s[0],s[1])}},QM=(n,t)=>{let e;const i=[];for(;(e=n.exec(t))!==null;)i.push(e);return i},tE=ii("HTMLFormElement"),eE=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,i,r){return i.toUpperCase()+r}),dp=(({hasOwnProperty:n})=>(t,e)=>n.call(t,e))(Object.prototype),nE=ii("RegExp"),Bg=(n,t)=>{const e=Object.getOwnPropertyDescriptors(n),i={};ua(e,(r,s)=>{let o;(o=t(r,s,n))!==!1&&(i[s]=o||r)}),Object.defineProperties(n,i)},iE=n=>{Bg(n,(t,e)=>{if(fn(n)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const i=n[e];if(fn(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},rE=(n,t)=>{const e={},i=r=>{r.forEach(s=>{e[s]=!0})};return io(n)?i(n):i(String(n).split(t)),e},sE=()=>{},oE=(n,t)=>n!=null&&Number.isFinite(n=+n)?n:t;function aE(n){return!!(n&&fn(n.append)&&n[Ig]==="FormData"&&n[ac])}const lE=n=>{const t=new Array(10),e=(i,r)=>{if(uc(i)){if(t.indexOf(i)>=0)return;if(!("toJSON"in i)){t[r]=i;const s=io(i)?[]:{};return ua(i,(o,a)=>{const l=e(o,r+1);!Yo(l)&&(s[a]=l)}),t[r]=void 0,s}}return i};return e(n,0)},cE=ii("AsyncFunction"),uE=n=>n&&(uc(n)||fn(n))&&fn(n.then)&&fn(n.catch),zg=((n,t)=>n?setImmediate:t?((e,i)=>(Gr.addEventListener("message",({source:r,data:s})=>{r===Gr&&s===e&&i.length&&i.shift()()},!1),r=>{i.push(r),Gr.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate=="function",fn(Gr.postMessage)),fE=typeof queueMicrotask<"u"?queueMicrotask.bind(Gr):typeof process<"u"&&process.nextTick||zg,hE=n=>n!=null&&fn(n[ac]),J={isArray:io,isArrayBuffer:Ug,isBuffer:CM,isFormData:BM,isArrayBufferView:PM,isString:DM,isNumber:Og,isBoolean:LM,isObject:uc,isPlainObject:il,isReadableStream:kM,isRequest:HM,isResponse:VM,isHeaders:GM,isUndefined:Yo,isDate:IM,isFile:UM,isBlob:OM,isRegExp:nE,isFunction:fn,isStream:FM,isURLSearchParams:zM,isTypedArray:ZM,isFileList:NM,forEach:ua,merge:qu,extend:XM,trim:WM,stripBOM:qM,inherits:jM,toFlatObject:YM,kindOf:lc,kindOfTest:ii,endsWith:$M,toArray:KM,forEachEntry:JM,matchAll:QM,isHTMLForm:tE,hasOwnProperty:dp,hasOwnProp:dp,reduceDescriptors:Bg,freezeMethods:iE,toObjectSet:rE,toCamelCase:eE,noop:sE,toFiniteNumber:oE,findKey:Ng,global:Gr,isContextDefined:Fg,isSpecCompliantForm:aE,toJSONObject:lE,isAsyncFn:cE,isThenable:uE,setImmediate:zg,asap:fE,isIterable:hE};function jt(n,t,e,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",t&&(this.code=t),e&&(this.config=e),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}J.inherits(jt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}});const kg=jt.prototype,Hg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Hg[n]={value:n}});Object.defineProperties(jt,Hg);Object.defineProperty(kg,"isAxiosError",{value:!0});jt.from=(n,t,e,i,r,s)=>{const o=Object.create(kg);return J.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),jt.call(o,n.message,t,e,i,r),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};const dE=null;function ju(n){return J.isPlainObject(n)||J.isArray(n)}function Vg(n){return J.endsWith(n,"[]")?n.slice(0,-2):n}function pp(n,t,e){return n?n.concat(t).map(function(r,s){return r=Vg(r),!e&&s?"["+r+"]":r}).join(e?".":""):t}function pE(n){return J.isArray(n)&&!n.some(ju)}const mE=J.toFlatObject(J,{},null,function(t){return/^is[A-Z]/.test(t)});function fc(n,t,e){if(!J.isObject(n))throw new TypeError("target must be an object");t=t||new FormData,e=J.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,m){return!J.isUndefined(m[_])});const i=e.metaTokens,r=e.visitor||u,s=e.dots,o=e.indexes,l=(e.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(t);if(!J.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(J.isDate(g))return g.toISOString();if(J.isBoolean(g))return g.toString();if(!l&&J.isBlob(g))throw new jt("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(g)||J.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,m){let p=g;if(g&&!m&&typeof g=="object"){if(J.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(J.isArray(g)&&pE(g)||(J.isFileList(g)||J.endsWith(_,"[]"))&&(p=J.toArray(g)))return _=Vg(_),p.forEach(function(S,x){!(J.isUndefined(S)||S===null)&&t.append(o===!0?pp([_],x,s):o===null?_:_+"[]",c(S))}),!1}return ju(g)?!0:(t.append(pp(m,_,s),c(g)),!1)}const f=[],h=Object.assign(mE,{defaultVisitor:u,convertValue:c,isVisitable:ju});function d(g,_){if(!J.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(g),J.forEach(g,function(p,M){(!(J.isUndefined(p)||p===null)&&r.call(t,p,J.isString(M)?M.trim():M,_,h))===!0&&d(p,_?_.concat(M):[M])}),f.pop()}}if(!J.isObject(n))throw new TypeError("data must be an object");return d(n),t}function mp(n){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return t[i]})}function Eh(n,t){this._pairs=[],n&&fc(n,this,t)}const Gg=Eh.prototype;Gg.append=function(t,e){this._pairs.push([t,e])};Gg.toString=function(t){const e=t?function(i){return t.call(this,i,mp)}:mp;return this._pairs.map(function(r){return e(r[0])+"="+e(r[1])},"").join("&")};function _E(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Wg(n,t,e){if(!t)return n;const i=e&&e.encode||_E;J.isFunction(e)&&(e={serialize:e});const r=e&&e.serialize;let s;if(r?s=r(t,e):s=J.isURLSearchParams(t)?t.toString():new Eh(t,e).toString(i),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class _p{constructor(){this.handlers=[]}use(t,e,i){return this.handlers.push({fulfilled:t,rejected:e,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){J.forEach(this.handlers,function(i){i!==null&&t(i)})}}const Xg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gE=typeof URLSearchParams<"u"?URLSearchParams:Eh,vE=typeof FormData<"u"?FormData:null,xE=typeof Blob<"u"?Blob:null,yE={isBrowser:!0,classes:{URLSearchParams:gE,FormData:vE,Blob:xE},protocols:["http","https","file","blob","url","data"]},Th=typeof window<"u"&&typeof document<"u",Yu=typeof navigator=="object"&&navigator||void 0,SE=Th&&(!Yu||["ReactNative","NativeScript","NS"].indexOf(Yu.product)<0),ME=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",EE=Th&&window.location.href||"http://localhost",TE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Th,hasStandardBrowserEnv:SE,hasStandardBrowserWebWorkerEnv:ME,navigator:Yu,origin:EE},Symbol.toStringTag,{value:"Module"})),$e={...TE,...yE};function bE(n,t){return fc(n,new $e.classes.URLSearchParams,Object.assign({visitor:function(e,i,r,s){return $e.isNode&&J.isBuffer(e)?(this.append(i,e.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function AE(n){return J.matchAll(/\w+|\[(\w*)]/g,n).map(t=>t[0]==="[]"?"":t[1]||t[0])}function wE(n){const t={},e=Object.keys(n);let i;const r=e.length;let s;for(i=0;i<r;i++)s=e[i],t[s]=n[s];return t}function qg(n){function t(e,i,r,s){let o=e[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=e.length;return o=!o&&J.isArray(r)?r.length:o,l?(J.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!J.isObject(r[o]))&&(r[o]=[]),t(e,i,r[o],s)&&J.isArray(r[o])&&(r[o]=wE(r[o])),!a)}if(J.isFormData(n)&&J.isFunction(n.entries)){const e={};return J.forEachEntry(n,(i,r)=>{t(AE(i),r,e,0)}),e}return null}function RE(n,t,e){if(J.isString(n))try{return(t||JSON.parse)(n),J.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(e||JSON.stringify)(n)}const fa={transitional:Xg,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const i=e.getContentType()||"",r=i.indexOf("application/json")>-1,s=J.isObject(t);if(s&&J.isHTMLForm(t)&&(t=new FormData(t)),J.isFormData(t))return r?JSON.stringify(qg(t)):t;if(J.isArrayBuffer(t)||J.isBuffer(t)||J.isStream(t)||J.isFile(t)||J.isBlob(t)||J.isReadableStream(t))return t;if(J.isArrayBufferView(t))return t.buffer;if(J.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return bE(t,this.formSerializer).toString();if((a=J.isFileList(t))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return fc(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return s||r?(e.setContentType("application/json",!1),RE(t)):t}],transformResponse:[function(t){const e=this.transitional||fa.transitional,i=e&&e.forcedJSONParsing,r=this.responseType==="json";if(J.isResponse(t)||J.isReadableStream(t))return t;if(t&&J.isString(t)&&(i&&!this.responseType||r)){const o=!(e&&e.silentJSONParsing)&&r;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?jt.from(a,jt.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$e.classes.FormData,Blob:$e.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],n=>{fa.headers[n]={}});const CE=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),PE=n=>{const t={};let e,i,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),e=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!e||t[e]&&CE[e])&&(e==="set-cookie"?t[e]?t[e].push(i):t[e]=[i]:t[e]=t[e]?t[e]+", "+i:i)}),t},gp=Symbol("internals");function fo(n){return n&&String(n).trim().toLowerCase()}function rl(n){return n===!1||n==null?n:J.isArray(n)?n.map(rl):String(n)}function DE(n){const t=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=e.exec(n);)t[i[1]]=i[2];return t}const LE=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function zc(n,t,e,i,r){if(J.isFunction(i))return i.call(this,t,e);if(r&&(t=e),!!J.isString(t)){if(J.isString(i))return t.indexOf(i)!==-1;if(J.isRegExp(i))return i.test(t)}}function IE(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,e,i)=>e.toUpperCase()+i)}function UE(n,t){const e=J.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+e,{value:function(r,s,o){return this[i].call(this,t,r,s,o)},configurable:!0})})}let hn=class{constructor(t){t&&this.set(t)}set(t,e,i){const r=this;function s(a,l,c){const u=fo(l);if(!u)throw new Error("header name must be a non-empty string");const f=J.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=rl(a))}const o=(a,l)=>J.forEach(a,(c,u)=>s(c,u,l));if(J.isPlainObject(t)||t instanceof this.constructor)o(t,e);else if(J.isString(t)&&(t=t.trim())&&!LE(t))o(PE(t),e);else if(J.isObject(t)&&J.isIterable(t)){let a={},l,c;for(const u of t){if(!J.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?J.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,e)}else t!=null&&s(e,t,i);return this}get(t,e){if(t=fo(t),t){const i=J.findKey(this,t);if(i){const r=this[i];if(!e)return r;if(e===!0)return DE(r);if(J.isFunction(e))return e.call(this,r,i);if(J.isRegExp(e))return e.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=fo(t),t){const i=J.findKey(this,t);return!!(i&&this[i]!==void 0&&(!e||zc(this,this[i],i,e)))}return!1}delete(t,e){const i=this;let r=!1;function s(o){if(o=fo(o),o){const a=J.findKey(i,o);a&&(!e||zc(i,i[a],a,e))&&(delete i[a],r=!0)}}return J.isArray(t)?t.forEach(s):s(t),r}clear(t){const e=Object.keys(this);let i=e.length,r=!1;for(;i--;){const s=e[i];(!t||zc(this,this[s],s,t,!0))&&(delete this[s],r=!0)}return r}normalize(t){const e=this,i={};return J.forEach(this,(r,s)=>{const o=J.findKey(i,s);if(o){e[o]=rl(r),delete e[s];return}const a=t?IE(s):String(s).trim();a!==s&&delete e[s],e[a]=rl(r),i[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return J.forEach(this,(i,r)=>{i!=null&&i!==!1&&(e[r]=t&&J.isArray(i)?i.join(", "):i)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,e])=>t+": "+e).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const i=new this(t);return e.forEach(r=>i.set(r)),i}static accessor(t){const i=(this[gp]=this[gp]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=fo(o);i[a]||(UE(r,o),i[a]=!0)}return J.isArray(t)?t.forEach(s):s(t),this}};hn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(hn.prototype,({value:n},t)=>{let e=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(i){this[e]=i}}});J.freezeMethods(hn);function kc(n,t){const e=this||fa,i=t||e,r=hn.from(i.headers);let s=i.data;return J.forEach(n,function(a){s=a.call(e,s,r.normalize(),t?t.status:void 0)}),r.normalize(),s}function jg(n){return!!(n&&n.__CANCEL__)}function ro(n,t,e){jt.call(this,n??"canceled",jt.ERR_CANCELED,t,e),this.name="CanceledError"}J.inherits(ro,jt,{__CANCEL__:!0});function Yg(n,t,e){const i=e.config.validateStatus;!e.status||!i||i(e.status)?n(e):t(new jt("Request failed with status code "+e.status,[jt.ERR_BAD_REQUEST,jt.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}function OE(n){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return t&&t[1]||""}function NE(n,t){n=n||10;const e=new Array(n),i=new Array(n);let r=0,s=0,o;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),e[r]=l,i[r]=c;let f=s,h=0;for(;f!==r;)h+=e[f++],f=f%n;if(r=(r+1)%n,r===s&&(s=(s+1)%n),c-o<t)return;const d=u&&c-u;return d?Math.round(h*1e3/d):void 0}}function FE(n,t){let e=0,i=1e3/t,r,s;const o=(c,u=Date.now())=>{e=u,r=null,s&&(clearTimeout(s),s=null),n.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-e;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Rl=(n,t,e=3)=>{let i=0;const r=NE(50,250);return FE(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[t?"download":"upload"]:!0};n(f)},e)},vp=(n,t)=>{const e=n!=null;return[i=>t[0]({lengthComputable:e,total:n,loaded:i}),t[1]]},xp=n=>(...t)=>J.asap(()=>n(...t)),BE=$e.hasStandardBrowserEnv?((n,t)=>e=>(e=new URL(e,$e.origin),n.protocol===e.protocol&&n.host===e.host&&(t||n.port===e.port)))(new URL($e.origin),$e.navigator&&/(msie|trident)/i.test($e.navigator.userAgent)):()=>!0,zE=$e.hasStandardBrowserEnv?{write(n,t,e,i,r,s){const o=[n+"="+encodeURIComponent(t)];J.isNumber(e)&&o.push("expires="+new Date(e).toGMTString()),J.isString(i)&&o.push("path="+i),J.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const t=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function kE(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function HE(n,t){return t?n.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):n}function $g(n,t,e){let i=!kE(t);return n&&(i||e==!1)?HE(n,t):t}const yp=n=>n instanceof hn?{...n}:n;function ts(n,t){t=t||{};const e={};function i(c,u,f,h){return J.isPlainObject(c)&&J.isPlainObject(u)?J.merge.call({caseless:h},c,u):J.isPlainObject(u)?J.merge({},u):J.isArray(u)?u.slice():u}function r(c,u,f,h){if(J.isUndefined(u)){if(!J.isUndefined(c))return i(void 0,c,f,h)}else return i(c,u,f,h)}function s(c,u){if(!J.isUndefined(u))return i(void 0,u)}function o(c,u){if(J.isUndefined(u)){if(!J.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in t)return i(c,u);if(f in n)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(yp(c),yp(u),f,!0)};return J.forEach(Object.keys(Object.assign({},n,t)),function(u){const f=l[u]||r,h=f(n[u],t[u],u);J.isUndefined(h)&&f!==a||(e[u]=h)}),e}const Kg=n=>{const t=ts({},n);let{data:e,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=t;t.headers=o=hn.from(o),t.url=Wg($g(t.baseURL,t.url,t.allowAbsoluteUrls),n.params,n.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(J.isFormData(e)){if($e.hasStandardBrowserEnv||$e.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if($e.hasStandardBrowserEnv&&(i&&J.isFunction(i)&&(i=i(t)),i||i!==!1&&BE(t.url))){const c=r&&s&&zE.read(s);c&&o.set(r,c)}return t},VE=typeof XMLHttpRequest<"u",GE=VE&&function(n){return new Promise(function(e,i){const r=Kg(n);let s=r.data;const o=hn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,h,d,g;function _(){d&&d(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function p(){if(!m)return;const S=hn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),b={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:S,config:n,request:m};Yg(function(C){e(C),_()},function(C){i(C),_()},b),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(p)},m.onabort=function(){m&&(i(new jt("Request aborted",jt.ECONNABORTED,n,m)),m=null)},m.onerror=function(){i(new jt("Network Error",jt.ERR_NETWORK,n,m)),m=null},m.ontimeout=function(){let x=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const b=r.transitional||Xg;r.timeoutErrorMessage&&(x=r.timeoutErrorMessage),i(new jt(x,b.clarifyTimeoutError?jt.ETIMEDOUT:jt.ECONNABORTED,n,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&J.forEach(o.toJSON(),function(x,b){m.setRequestHeader(b,x)}),J.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([h,g]=Rl(c,!0),m.addEventListener("progress",h)),l&&m.upload&&([f,d]=Rl(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",d)),(r.cancelToken||r.signal)&&(u=S=>{m&&(i(!S||S.type?new ro(null,n,m):S),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const M=OE(r.url);if(M&&$e.protocols.indexOf(M)===-1){i(new jt("Unsupported protocol "+M+":",jt.ERR_BAD_REQUEST,n));return}m.send(s||null)})},WE=(n,t)=>{const{length:e}=n=n?n.filter(Boolean):[];if(t||e){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof jt?u:new ro(u instanceof Error?u.message:u))}};let o=t&&setTimeout(()=>{o=null,s(new jt(`timeout ${t} of ms exceeded`,jt.ETIMEDOUT))},t);const a=()=>{n&&(o&&clearTimeout(o),o=null,n.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),n=null)};n.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>J.asap(a),l}},XE=function*(n,t){let e=n.byteLength;if(e<t){yield n;return}let i=0,r;for(;i<e;)r=i+t,yield n.slice(i,r),i=r},qE=async function*(n,t){for await(const e of jE(n))yield*XE(e,t)},jE=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const t=n.getReader();try{for(;;){const{done:e,value:i}=await t.read();if(e)break;yield i}}finally{await t.cancel()}},Sp=(n,t,e,i)=>{const r=qE(n,t);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(e){let h=s+=f;e(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},hc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Zg=hc&&typeof ReadableStream=="function",YE=hc&&(typeof TextEncoder=="function"?(n=>t=>n.encode(t))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),Jg=(n,...t)=>{try{return!!n(...t)}catch{return!1}},$E=Zg&&Jg(()=>{let n=!1;const t=new Request($e.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!t}),Mp=64*1024,$u=Zg&&Jg(()=>J.isReadableStream(new Response("").body)),Cl={stream:$u&&(n=>n.body)};hc&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Cl[t]&&(Cl[t]=J.isFunction(n[t])?e=>e[t]():(e,i)=>{throw new jt(`Response type '${t}' is not supported`,jt.ERR_NOT_SUPPORT,i)})})})(new Response);const KE=async n=>{if(n==null)return 0;if(J.isBlob(n))return n.size;if(J.isSpecCompliantForm(n))return(await new Request($e.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(J.isArrayBufferView(n)||J.isArrayBuffer(n))return n.byteLength;if(J.isURLSearchParams(n)&&(n=n+""),J.isString(n))return(await YE(n)).byteLength},ZE=async(n,t)=>{const e=J.toFiniteNumber(n.getContentLength());return e??KE(t)},JE=hc&&(async n=>{let{url:t,method:e,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:h}=Kg(n);c=c?(c+"").toLowerCase():"text";let d=WE([r,s&&s.toAbortSignal()],o),g;const _=d&&d.unsubscribe&&(()=>{d.unsubscribe()});let m;try{if(l&&$E&&e!=="get"&&e!=="head"&&(m=await ZE(u,i))!==0){let b=new Request(t,{method:"POST",body:i,duplex:"half"}),R;if(J.isFormData(i)&&(R=b.headers.get("content-type"))&&u.setContentType(R),b.body){const[C,P]=vp(m,Rl(xp(l)));i=Sp(b.body,Mp,C,P)}}J.isString(f)||(f=f?"include":"omit");const p="credentials"in Request.prototype;g=new Request(t,{...h,signal:d,method:e.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:p?f:void 0});let M=await fetch(g,h);const S=$u&&(c==="stream"||c==="response");if($u&&(a||S&&_)){const b={};["status","statusText","headers"].forEach(v=>{b[v]=M[v]});const R=J.toFiniteNumber(M.headers.get("content-length")),[C,P]=a&&vp(R,Rl(xp(a),!0))||[];M=new Response(Sp(M.body,Mp,C,()=>{P&&P(),_&&_()}),b)}c=c||"text";let x=await Cl[J.findKey(Cl,c)||"text"](M,n);return!S&&_&&_(),await new Promise((b,R)=>{Yg(b,R,{data:x,headers:hn.from(M.headers),status:M.status,statusText:M.statusText,config:n,request:g})})}catch(p){throw _&&_(),p&&p.name==="TypeError"&&/Load failed|fetch/i.test(p.message)?Object.assign(new jt("Network Error",jt.ERR_NETWORK,n,g),{cause:p.cause||p}):jt.from(p,p&&p.code,n,g)}}),Ku={http:dE,xhr:GE,fetch:JE};J.forEach(Ku,(n,t)=>{if(n){try{Object.defineProperty(n,"name",{value:t})}catch{}Object.defineProperty(n,"adapterName",{value:t})}});const Ep=n=>`- ${n}`,QE=n=>J.isFunction(n)||n===null||n===!1,Qg={getAdapter:n=>{n=J.isArray(n)?n:[n];const{length:t}=n;let e,i;const r={};for(let s=0;s<t;s++){e=n[s];let o;if(i=e,!QE(e)&&(i=Ku[(o=String(e)).toLowerCase()],i===void 0))throw new jt(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?s.length>1?`since :
`+s.map(Ep).join(`
`):" "+Ep(s[0]):"as no adapter specified";throw new jt("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Ku};function Hc(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new ro(null,n)}function Tp(n){return Hc(n),n.headers=hn.from(n.headers),n.data=kc.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Qg.getAdapter(n.adapter||fa.adapter)(n).then(function(i){return Hc(n),i.data=kc.call(n,n.transformResponse,i),i.headers=hn.from(i.headers),i},function(i){return jg(i)||(Hc(n),i&&i.response&&(i.response.data=kc.call(n,n.transformResponse,i.response),i.response.headers=hn.from(i.response.headers))),Promise.reject(i)})}const t0="1.10.0",dc={};["object","boolean","number","function","string","symbol"].forEach((n,t)=>{dc[n]=function(i){return typeof i===n||"a"+(t<1?"n ":" ")+n}});const bp={};dc.transitional=function(t,e,i){function r(s,o){return"[Axios v"+t0+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(t===!1)throw new jt(r(o," has been removed"+(e?" in "+e:"")),jt.ERR_DEPRECATED);return e&&!bp[o]&&(bp[o]=!0,console.warn(r(o," has been deprecated since v"+e+" and will be removed in the near future"))),t?t(s,o,a):!0}};dc.spelling=function(t){return(e,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function tT(n,t,e){if(typeof n!="object")throw new jt("options must be an object",jt.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const a=n[s],l=a===void 0||o(a,s,n);if(l!==!0)throw new jt("option "+s+" must be "+l,jt.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new jt("Unknown option "+s,jt.ERR_BAD_OPTION)}}const sl={assertOptions:tT,validators:dc},si=sl.validators;let $r=class{constructor(t){this.defaults=t||{},this.interceptors={request:new _p,response:new _p}}async request(t,e){try{return await this._request(t,e)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(t,e){typeof t=="string"?(e=e||{},e.url=t):e=t||{},e=ts(this.defaults,e);const{transitional:i,paramsSerializer:r,headers:s}=e;i!==void 0&&sl.assertOptions(i,{silentJSONParsing:si.transitional(si.boolean),forcedJSONParsing:si.transitional(si.boolean),clarifyTimeoutError:si.transitional(si.boolean)},!1),r!=null&&(J.isFunction(r)?e.paramsSerializer={serialize:r}:sl.assertOptions(r,{encode:si.function,serialize:si.function},!0)),e.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?e.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:e.allowAbsoluteUrls=!0),sl.assertOptions(e,{baseUrl:si.spelling("baseURL"),withXsrfToken:si.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let o=s&&J.merge(s.common,s[e.method]);s&&J.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),e.headers=hn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(e)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,f=0,h;if(!l){const g=[Tp.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),h=g.length,u=Promise.resolve(e);f<h;)u=u.then(g[f++],g[f++]);return u}h=a.length;let d=e;for(f=0;f<h;){const g=a[f++],_=a[f++];try{d=g(d)}catch(m){_.call(this,m);break}}try{u=Tp.call(this,d)}catch(g){return Promise.reject(g)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(t){t=ts(this.defaults,t);const e=$g(t.baseURL,t.url,t.allowAbsoluteUrls);return Wg(e,t.params,t.paramsSerializer)}};J.forEach(["delete","get","head","options"],function(t){$r.prototype[t]=function(e,i){return this.request(ts(i||{},{method:t,url:e,data:(i||{}).data}))}});J.forEach(["post","put","patch"],function(t){function e(i){return function(s,o,a){return this.request(ts(a||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}$r.prototype[t]=e(),$r.prototype[t+"Form"]=e(!0)});let eT=class e0{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(s){e=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},t(function(s,o,a){i.reason||(i.reason=new ro(s,o,a),e(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);e!==-1&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=i=>{t.abort(i)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;return{token:new e0(function(r){t=r}),cancel:t}}};function nT(n){return function(e){return n.apply(null,e)}}function iT(n){return J.isObject(n)&&n.isAxiosError===!0}const Zu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zu).forEach(([n,t])=>{Zu[t]=n});function n0(n){const t=new $r(n),e=Lg($r.prototype.request,t);return J.extend(e,$r.prototype,t,{allOwnKeys:!0}),J.extend(e,t,null,{allOwnKeys:!0}),e.create=function(r){return n0(ts(n,r))},e}const Ue=n0(fa);Ue.Axios=$r;Ue.CanceledError=ro;Ue.CancelToken=eT;Ue.isCancel=jg;Ue.VERSION=t0;Ue.toFormData=fc;Ue.AxiosError=jt;Ue.Cancel=Ue.CanceledError;Ue.all=function(t){return Promise.all(t)};Ue.spread=nT;Ue.isAxiosError=iT;Ue.mergeConfig=ts;Ue.AxiosHeaders=hn;Ue.formToJSON=n=>qg(J.isHTMLForm(n)?new FormData(n):n);Ue.getAdapter=Qg.getAdapter;Ue.HttpStatusCode=Zu;Ue.default=Ue;const{Axios:fD,AxiosError:hD,CanceledError:dD,isCancel:pD,CancelToken:mD,VERSION:_D,all:gD,Cancel:vD,isAxiosError:xD,spread:yD,toFormData:SD,AxiosHeaders:MD,HttpStatusCode:ED,formToJSON:TD,getAdapter:bD,mergeConfig:AD}=Ue;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="177",Fs={ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rT=0,Ap=1,sT=2,i0=1,oT=2,Ri=3,_r=0,dn=1,Ui=2,ur=0,Bs=1,wp=2,Rp=3,Cp=4,aT=5,Hr=100,lT=101,cT=102,uT=103,fT=104,hT=200,dT=201,pT=202,mT=203,Ju=204,Qu=205,_T=206,gT=207,vT=208,xT=209,yT=210,ST=211,MT=212,ET=213,TT=214,tf=0,ef=1,nf=2,qs=3,rf=4,sf=5,of=6,af=7,Ah=0,bT=1,AT=2,fr=0,wT=1,RT=2,CT=3,PT=4,DT=5,LT=6,IT=7,r0=300,js=301,Ys=302,lf=303,cf=304,pc=306,uf=1e3,Wr=1001,ff=1002,Qn=1003,UT=1004,Ta=1005,hi=1006,Vc=1007,Xr=1008,gi=1009,s0=1010,o0=1011,$o=1012,wh=1013,es=1014,Oi=1015,ha=1016,Rh=1017,Ch=1018,Ko=1020,a0=35902,l0=1021,c0=1022,Zn=1023,Zo=1026,Jo=1027,u0=1028,Ph=1029,f0=1030,Dh=1031,Lh=1033,ol=33776,al=33777,ll=33778,cl=33779,hf=35840,df=35841,pf=35842,mf=35843,_f=36196,gf=37492,vf=37496,xf=37808,yf=37809,Sf=37810,Mf=37811,Ef=37812,Tf=37813,bf=37814,Af=37815,wf=37816,Rf=37817,Cf=37818,Pf=37819,Df=37820,Lf=37821,ul=36492,If=36494,Uf=36495,h0=36283,Of=36284,Nf=36285,Ff=36286,OT=3200,NT=3201,Ih=0,FT=1,sr="",Bn="srgb",$s="srgb-linear",Pl="linear",ce="srgb",fs=7680,Pp=519,BT=512,zT=513,kT=514,d0=515,HT=516,VT=517,GT=518,WT=519,Dp=35044,Lp="300 es",Ni=2e3,Dl=2001;class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,Ll=180/Math.PI;function da(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]).toLowerCase()}function Jt(n,t,e){return Math.max(t,Math.min(e,n))}function XT(n,t){return(n%t+t)%t}function Gc(n,t,e){return(1-e)*n+e*t}function ho(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ln(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qT={DEG2RAD:fl};class Gt{constructor(t=0,e=0){Gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ns{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const b=Math.sqrt(S),R=Math.atan2(b,p*M);m=Math.sin(m*R)/b,a=Math.sin(a*R)/b}const x=a*M;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ip.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ip.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Wc.copy(this).projectOnVector(t),this.sub(Wc)}reflect(t){return this.sub(Wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new z,Ip=new ns;class Yt{constructor(t,e,i,r,s,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],S=r[4],x=r[7],b=r[2],R=r[5],C=r[8];return s[0]=o*_+a*M+l*b,s[3]=o*m+a*S+l*R,s[6]=o*p+a*x+l*C,s[1]=c*_+u*M+f*b,s[4]=c*m+u*S+f*R,s[7]=c*p+u*x+f*C,s[2]=h*_+d*M+g*b,s[5]=h*m+d*S+g*R,s[8]=h*p+d*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=e*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xc.makeScale(t,e)),this}rotate(t){return this.premultiply(Xc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new Yt;function p0(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Il(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function jT(){const n=Il("canvas");return n.style.display="block",n}const Up={};function zs(n){n in Up||(Up[n]=!0,console.warn(n))}function YT(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function $T(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function KT(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Op=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Np=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZT(){const n={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ce&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===sr?Pl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$s]:{primaries:t,whitePoint:i,transfer:Pl,toXYZ:Op,fromXYZ:Np,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:Op,fromXYZ:Np,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),n}const ie=ZT();function zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hs;class JT{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hs===void 0&&(hs=Il("canvas")),hs.width=t.width,hs.height=t.height;const r=hs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Il("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zi(e[i]/255)*255):e[i]=zi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QT=0;class Uh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=da(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qc(r[o].image)):s.push(qc(r[o]))}else s=qc(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?JT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tb=0;const jc=new z;class on extends os{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,i=Wr,r=Wr,s=hi,o=Xr,a=Zn,l=gi,c=on.DEFAULT_ANISOTROPY,u=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=da(),this.name="",this.source=new Uh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jc).x}get height(){return this.source.getSize(jc).y}get depth(){return this.source.getSize(jc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==r0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uf:t.x=t.x-Math.floor(t.x);break;case Wr:t.x=t.x<0?0:1;break;case ff:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uf:t.y=t.y-Math.floor(t.y);break;case Wr:t.y=t.y<0?0:1;break;case ff:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=r0;on.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,r=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(d+1)/2,b=(p+1)/2,R=(u+h)/4,C=(f+_)/4,P=(g+m)/4;return S>x&&S>b?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=C/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=P/s),this.set(i,r,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eb extends os{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new on(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:hi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Uh(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends eb{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class m0 extends on{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nb extends on{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pa{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(po),Aa.subVectors(this.max,po),ds.subVectors(t.a,po),ps.subVectors(t.b,po),ms.subVectors(t.c,po),ji.subVectors(ps,ds),Yi.subVectors(ms,ps),Rr.subVectors(ds,ms);let e=[0,-ji.z,ji.y,0,-Yi.z,Yi.y,0,-Rr.z,Rr.y,ji.z,0,-ji.x,Yi.z,0,-Yi.x,Rr.z,0,-Rr.x,-ji.y,ji.x,0,-Yi.y,Yi.x,0,-Rr.y,Rr.x,0];return!Yc(e,ds,ps,ms,Aa)||(e=[1,0,0,0,1,0,0,0,1],!Yc(e,ds,ps,ms,Aa))?!1:(wa.crossVectors(ji,Yi),e=[wa.x,wa.y,wa.z],Yc(e,ds,ps,ms,Aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ei=[new z,new z,new z,new z,new z,new z,new z,new z],jn=new z,ba=new pa,ds=new z,ps=new z,ms=new z,ji=new z,Yi=new z,Rr=new z,po=new z,Aa=new z,wa=new z,Cr=new z;function Yc(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Cr.fromArray(n,s);const a=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=t.dot(Cr),c=e.dot(Cr),u=i.dot(Cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ib=new pa,mo=new z,$c=new z;class ma{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ib.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mo.subVectors(t,this.center);const e=mo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(mo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mo.copy(t.center).add($c)),this.expandByPoint(mo.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ti=new z,Kc=new z,Ra=new z,$i=new z,Zc=new z,Ca=new z,Jc=new z;class mc{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Kc.copy(t).add(e).multiplyScalar(.5),Ra.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(Kc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ra),a=$i.dot(this.direction),l=-$i.dot(Ra),c=$i.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Kc).addScaledVector(Ra,h),d}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,i,r,s){Zc.subVectors(e,t),Ca.subVectors(i,t),Jc.crossVectors(Zc,Ca);let o=this.direction.dot(Jc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,t);const l=a*this.direction.dot(Ca.crossVectors($i,Ca));if(l<0)return null;const c=a*this.direction.dot(Zc.cross($i));if(c<0||l+c>o)return null;const u=-a*$i.dot(Jc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,i,r,s,o,a,l,c,u,f,h,d,g,_,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(t,e,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/_s.setFromMatrixColumn(t,0).length(),s=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rb,t,sb)}lookAt(t,e,i){const r=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ki.crossVectors(i,yn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ki.crossVectors(i,yn)),Ki.normalize(),Pa.crossVectors(yn,Ki),r[0]=Ki.x,r[4]=Pa.x,r[8]=yn.x,r[1]=Ki.y,r[5]=Pa.y,r[9]=yn.y,r[2]=Ki.z,r[6]=Pa.z,r[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],S=i[7],x=i[11],b=i[15],R=r[0],C=r[4],P=r[8],v=r[12],E=r[1],I=r[5],U=r[9],O=r[13],W=r[2],Q=r[6],V=r[10],j=r[14],G=r[3],gt=r[7],vt=r[11],bt=r[15];return s[0]=o*R+a*E+l*W+c*G,s[4]=o*C+a*I+l*Q+c*gt,s[8]=o*P+a*U+l*V+c*vt,s[12]=o*v+a*O+l*j+c*bt,s[1]=u*R+f*E+h*W+d*G,s[5]=u*C+f*I+h*Q+d*gt,s[9]=u*P+f*U+h*V+d*vt,s[13]=u*v+f*O+h*j+d*bt,s[2]=g*R+_*E+m*W+p*G,s[6]=g*C+_*I+m*Q+p*gt,s[10]=g*P+_*U+m*V+p*vt,s[14]=g*v+_*O+m*j+p*bt,s[3]=M*R+S*E+x*W+b*G,s[7]=M*C+S*I+x*Q+b*gt,s[11]=M*P+S*U+x*V+b*vt,s[15]=M*v+S*O+x*j+b*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+e*l*d-e*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+e*c*f-e*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-e*l*f+e*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,S=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,x=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,b=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,R=e*M+i*S+r*x+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=M*C,t[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*C,t[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*C,t[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*C,t[4]=S*C,t[5]=(u*m*s-g*h*s+g*r*d-e*m*d-u*r*p+e*h*p)*C,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*C,t[7]=(o*h*s-u*l*s+u*r*c-e*h*c-o*r*d+e*l*d)*C,t[8]=x*C,t[9]=(g*f*s-u*_*s-g*i*d+e*_*d+u*i*p-e*f*p)*C,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*p+e*a*p)*C,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*d-e*a*d)*C,t[12]=b*C,t[13]=(u*_*r-g*f*r+g*i*h-e*_*h-u*i*m+e*f*m)*C,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*C,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*h+e*a*h)*C,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,M=l*c,S=l*u,x=l*f,b=i.x,R=i.y,C=i.z;return r[0]=(1-(_+p))*b,r[1]=(d+x)*b,r[2]=(g-S)*b,r[3]=0,r[4]=(d-x)*R,r[5]=(1-(h+p))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(g+S)*C,r[9]=(m-M)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=_s.set(r[0],r[1],r[2]).length();const o=_s.set(r[4],r[5],r[6]).length(),a=_s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Yn.copy(this);const c=1/s,u=1/o,f=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,e.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Ni){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),h=(i+r)/(i-r);let d,g;if(a===Ni)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Dl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Ni){const l=this.elements,c=1/(e-t),u=1/(i-r),f=1/(o-s),h=(e+t)*c,d=(i+r)*u;let g,_;if(a===Ni)g=(o+s)*f,_=-2*f;else if(a===Dl)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const _s=new z,Yn=new ve,rb=new z(0,0,0),sb=new z(1,1,1),Ki=new z,Pa=new z,yn=new z,Fp=new ve,Bp=new ns;class ni{constructor(t=0,e=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class _0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ob=0;const zp=new z,gs=new ns,bi=new ve,Da=new z,_o=new z,ab=new z,lb=new ns,kp=new z(1,0,0),Hp=new z(0,1,0),Vp=new z(0,0,1),Gp={type:"added"},cb={type:"removed"},vs={type:"childadded",child:null},Qc={type:"childremoved",child:null};class Le extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new z,e=new ni,i=new ns,r=new z(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new Yt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(kp,t)}rotateY(t){return this.rotateOnAxis(Hp,t)}rotateZ(t){return this.rotateOnAxis(Vp,t)}translateOnAxis(t,e){return zp.copy(t).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kp,t)}translateY(t){return this.translateOnAxis(Hp,t)}translateZ(t){return this.translateOnAxis(Vp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Da.copy(t):Da.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(_o,Da,this.up):bi.lookAt(Da,_o,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(bi),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gp),vs.child=t,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cb),Qc.child=t,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gp),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,t,ab),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,lb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Le.DEFAULT_UP=new z(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new z,Ai=new z,tu=new z,wi=new z,xs=new z,ys=new z,Wp=new z,eu=new z,nu=new z,iu=new z,ru=new fe,su=new fe,ou=new fe;class Kn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),$n.subVectors(t,e),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){$n.subVectors(r,e),Ai.subVectors(i,e),tu.subVectors(t,e);const o=$n.dot($n),a=$n.dot(Ai),l=$n.dot(tu),c=Ai.dot(Ai),u=Ai.dot(tu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return ru.setScalar(0),su.setScalar(0),ou.setScalar(0),ru.fromBufferAttribute(t,e),su.fromBufferAttribute(t,i),ou.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(ru,s.x),o.addScaledVector(su,s.y),o.addScaledVector(ou,s.z),o}static isFrontFacing(t,e,i,r){return $n.subVectors(i,e),Ai.subVectors(t,e),$n.cross(Ai).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Kn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;xs.subVectors(r,i),ys.subVectors(s,i),eu.subVectors(t,i);const l=xs.dot(eu),c=ys.dot(eu);if(l<=0&&c<=0)return e.copy(i);nu.subVectors(t,r);const u=xs.dot(nu),f=ys.dot(nu);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(xs,o);iu.subVectors(t,s);const d=xs.dot(iu),g=ys.dot(iu);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(ys,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Wp.subVectors(s,r),a=(f-u)/(f-u+(d-g)),e.copy(r).addScaledVector(Wp,a);const p=1/(m+_+h);return o=_*p,a=h*p,e.copy(i).addScaledVector(xs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const g0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},La={h:0,s:0,l:0};function au(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=ie.workingColorSpace){if(t=XT(t,1),e=Jt(e,0,1),i=Jt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=au(o,s,t+1/3),this.g=au(o,s,t),this.b=au(o,s,t-1/3)}return ie.colorSpaceToWorking(this,r),this}setStyle(t,e=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){const i=g0[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return ie.workingToColorSpace(qe.copy(this),t),Math.round(Jt(qe.r*255,0,255))*65536+Math.round(Jt(qe.g*255,0,255))*256+Math.round(Jt(qe.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(qe.copy(this),e);const i=qe.r,r=qe.g,s=qe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=Bn){ie.workingToColorSpace(qe.copy(this),t);const e=qe.r,i=qe.g,r=qe.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(La);const i=Gc(Zi.h,La.h,e),r=Gc(Zi.s,La.s,e),s=Gc(Zi.l,La.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Kt;Kt.NAMES=g0;let ub=0;class yr extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=da(),this.name="",this.type="Material",this.blending=Bs,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ju,this.blendDst=Qu,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ju&&(i.blendSrc=this.blendSrc),this.blendDst!==Qu&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class v0 extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new z,Ia=new Gt;let fb=0;class mi{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Dp,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ia.fromBufferAttribute(this,e),Ia.applyMatrix3(t),this.setXY(e,Ia.x,Ia.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ho(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ln(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ho(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ho(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ho(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ho(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dp&&(t.usage=this.usage),t}}class x0 extends mi{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class y0 extends mi{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ie extends mi{constructor(t,e,i){super(new Float32Array(t),e,i)}}let hb=0;const Nn=new ve,lu=new Le,Ss=new z,Sn=new pa,go=new pa,Be=new z;class Ln extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(p0(t)?y0:x0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Nn.makeRotationFromQuaternion(t),this.applyMatrix4(Nn),this}rotateX(t){return Nn.makeRotationX(t),this.applyMatrix4(Nn),this}rotateY(t){return Nn.makeRotationY(t),this.applyMatrix4(Nn),this}rotateZ(t){return Nn.makeRotationZ(t),this.applyMatrix4(Nn),this}translate(t,e,i){return Nn.makeTranslation(t,e,i),this.applyMatrix4(Nn),this}scale(t,e,i){return Nn.makeScale(t,e,i),this.applyMatrix4(Nn),this}lookAt(t){return lu.lookAt(t),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ie(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(Sn.min,go.min),Sn.expandByPoint(Be),Be.addVectors(Sn.max,go.max),Sn.expandByPoint(Be)):(Sn.expandByPoint(go.min),Sn.expandByPoint(go.max))}Sn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Be.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Be));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Be.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(t,c),Be.add(Ss)),r=Math.max(r,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new z,l[P]=new z;const c=new z,u=new z,f=new z,h=new Gt,d=new Gt,g=new Gt,_=new z,m=new z;function p(P,v,E){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,v),g.fromBufferAttribute(s,E),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[P].add(_),a[v].add(_),a[E].add(_),l[P].add(m),l[v].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,v=M.length;P<v;++P){const E=M[P],I=E.start,U=E.count;for(let O=I,W=I+U;O<W;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new z,x=new z,b=new z,R=new z;function C(P){b.fromBufferAttribute(r,P),R.copy(b);const v=a[P];S.copy(v),S.sub(b.multiplyScalar(b.dot(v))).normalize(),x.crossVectors(R,v);const I=x.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,I)}for(let P=0,v=M.length;P<v;++P){const E=M[P],I=E.start,U=E.count;for(let O=I,W=I+U;O<W;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new mi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new ve,Pr=new mc,Ua=new ma,qp=new z,Oa=new z,Na=new z,Fa=new z,cu=new z,Ba=new z,jp=new z,za=new z;class Fi extends Le{constructor(t=new Ln,e=new v0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Ba.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(cu.fromBufferAttribute(f,t),o?Ba.addScaledVector(cu,u):Ba.addScaledVector(cu.sub(e),u))}e.add(Ba)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(Ua.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Ua,qp)===null||Pr.origin.distanceToSquared(qp)>(t.far-t.near)**2))&&(Xp.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Xp),!(i.boundingBox!==null&&Pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,b=S;x<b;x+=3){const R=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);r=ka(this,p,t,i,c,u,f,R,C,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);r=ka(this,o,t,i,c,u,f,M,S,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,b=S;x<b;x+=3){const R=x,C=x+1,P=x+2;r=ka(this,p,t,i,c,u,f,R,C,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const M=m,S=m+1,x=m+2;r=ka(this,o,t,i,c,u,f,M,S,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function db(n,t,e,i,r,s,o,a){let l;if(t.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===_r,a),l===null)return null;za.copy(a),za.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(za);return c<e.near||c>e.far?null:{distance:c,point:za.clone(),object:n}}function ka(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Oa),n.getVertexPosition(l,Na),n.getVertexPosition(c,Fa);const u=db(n,t,e,i,Oa,Na,Fa,jp);if(u){const f=new z;Kn.getBarycoord(jp,Oa,Na,Fa,f),r&&(u.uv=Kn.getInterpolatedAttribute(r,a,l,c,f,new Gt)),s&&(u.uv1=Kn.getInterpolatedAttribute(s,a,l,c,f,new Gt)),o&&(u.normal=Kn.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};Kn.getNormal(Oa,Na,Fa,h.normal),u.face=h,u.barycoord=f}return u}class _a extends Ln{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(u,3)),this.setAttribute("uv",new Ie(f,2));function g(_,m,p,M,S,x,b,R,C,P,v){const E=x/C,I=b/P,U=x/2,O=b/2,W=R/2,Q=C+1,V=P+1;let j=0,G=0;const gt=new z;for(let vt=0;vt<V;vt++){const bt=vt*I-O;for(let Nt=0;Nt<Q;Nt++){const Zt=Nt*E-U;gt[_]=Zt*M,gt[m]=bt*S,gt[p]=W,c.push(gt.x,gt.y,gt.z),gt[_]=0,gt[m]=0,gt[p]=R>0?1:-1,u.push(gt.x,gt.y,gt.z),f.push(Nt/C),f.push(1-vt/P),j+=1}}for(let vt=0;vt<P;vt++)for(let bt=0;bt<C;bt++){const Nt=h+bt+Q*vt,Zt=h+bt+Q*(vt+1),rt=h+(bt+1)+Q*(vt+1),dt=h+(bt+1)+Q*vt;l.push(Nt,Zt,dt),l.push(Zt,rt,dt),G+=6}a.addGroup(d,G,v),d+=G,h+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ks(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function tn(n){const t={};for(let e=0;e<n.length;e++){const i=Ks(n[e]);for(const r in i)t[r]=i[r]}return t}function pb(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function S0(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const mb={clone:Ks,merge:tn};var _b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_b,this.fragmentShader=gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ks(t.uniforms),this.uniformsGroups=pb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class M0 extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new z,Yp=new Gt,$p=new Gt;class Tn extends M0{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ll*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ll*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,Yp,$p),e.subVectors($p,Yp)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fl*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ms=-90,Es=1;class vb extends Le{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Ms,Es,t,e);r.layers=this.layers,this.add(r);const s=new Tn(Ms,Es,t,e);s.layers=this.layers,this.add(s);const o=new Tn(Ms,Es,t,e);o.layers=this.layers,this.add(o);const a=new Tn(Ms,Es,t,e);a.layers=this.layers,this.add(a);const l=new Tn(Ms,Es,t,e);l.layers=this.layers,this.add(l);const c=new Tn(Ms,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class E0 extends on{constructor(t=[],e=js,i,r,s,o,a,l,c,u){super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xb extends is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new E0(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _a(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:ur});s.uniforms.tEquirect.value=e;const o=new Fi(r,s),a=e.minFilter;return e.minFilter===Xr&&(e.minFilter=hi),new vb(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class Ha extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yb={type:"move"};class uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ha;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class T0{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Kt(t),this.density=e}clone(){return new T0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class b0{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=i}clone(){return new b0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wD extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const fu=new z,Sb=new z,Mb=new Yt;class rr{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=fu.subVectors(i,e).cross(Sb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Mb.getNormalMatrix(t),r=this.coplanarPoint(fu).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new ma,Va=new z;class Oh{constructor(t=new rr,e=new rr,i=new rr,r=new rr,s=new rr,o=new rr){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],S=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,m-d,x-p).normalize(),i[1].setComponents(l+s,h+c,m+d,x+p).normalize(),i[2].setComponents(l+o,h+u,m+g,x+M).normalize(),i[3].setComponents(l-o,h-u,m-g,x-M).normalize(),i[4].setComponents(l-a,h-f,m-_,x-S).normalize(),e===Ni)i[5].setComponents(l+a,h+f,m+_,x+S).normalize();else if(e===Dl)i[5].setComponents(a,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Va.x=r.normal.x>0?t.max.x:t.min.x,Va.y=r.normal.y>0?t.max.y:t.min.y,Va.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Va)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class A0 extends yr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ul=new z,Ol=new z,Kp=new ve,vo=new mc,Ga=new ma,hu=new z,Zp=new z;class Eb extends Le{constructor(t=new Ln,e=new A0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ul.fromBufferAttribute(e,r-1),Ol.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ul.distanceTo(Ol);t.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=s,t.ray.intersectsSphere(Ga)===!1)return;Kp.copy(r).invert(),vo.copy(t.ray).applyMatrix4(Kp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),M=u.getX(_+1),S=Wa(this,t,vo,l,p,M,_);S&&e.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Wa(this,t,vo,l,_,m,g-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Wa(this,t,vo,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Wa(this,t,vo,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wa(n,t,e,i,r,s,o){const a=n.geometry.attributes.position;if(Ul.fromBufferAttribute(a,r),Ol.fromBufferAttribute(a,s),e.distanceSqToSegment(Ul,Ol,hu,Zp)>i)return;hu.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(hu);if(!(c<t.near||c>t.far))return{distance:c,point:Zp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Jp=new z,Qp=new z;class Tb extends Eb{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)Jp.fromBufferAttribute(e,r),Qp.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Jp.distanceTo(Qp);t.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bb extends yr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tm=new ve,Bf=new mc,Xa=new ma,qa=new z;class RD extends Le{constructor(t=new Ln,e=new bb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=s,t.ray.intersectsSphere(Xa)===!1)return;tm.copy(r).invert(),Bf.copy(t.ray).applyMatrix4(tm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);qa.fromBufferAttribute(f,m),em(qa,m,l,r,t,e,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)qa.fromBufferAttribute(f,g),em(qa,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function em(n,t,e,i,r,s,o){const a=Bf.distanceSqToPoint(n);if(a<e){const l=new z;Bf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class CD extends on{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class w0 extends on{constructor(t,e,i=es,r,s,o,a=Qn,l=Qn,c,u=Zo,f=1){if(u!==Zo&&u!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Nh extends Ln{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=i/2;let p=0;M(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ie(f,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(d,2));function M(){const x=new z,b=new z;let R=0;const C=(e-t)/i;for(let P=0;P<=s;P++){const v=[],E=P/s,I=E*(e-t)+t;for(let U=0;U<=r;U++){const O=U/r,W=O*l+a,Q=Math.sin(W),V=Math.cos(W);b.x=I*Q,b.y=-E*i+m,b.z=I*V,f.push(b.x,b.y,b.z),x.set(Q,C,V).normalize(),h.push(x.x,x.y,x.z),d.push(O,1-E),v.push(g++)}_.push(v)}for(let P=0;P<r;P++)for(let v=0;v<s;v++){const E=_[v][P],I=_[v+1][P],U=_[v+1][P+1],O=_[v][P+1];(t>0||v!==0)&&(u.push(E,I,O),R+=3),(e>0||v!==s-1)&&(u.push(I,U,O),R+=3)}c.addGroup(p,R,0),p+=R}function S(x){const b=g,R=new Gt,C=new z;let P=0;const v=x===!0?t:e,E=x===!0?1:-1;for(let U=1;U<=r;U++)f.push(0,m*E,0),h.push(0,E,0),d.push(.5,.5),g++;const I=g;for(let U=0;U<=r;U++){const W=U/r*l+a,Q=Math.cos(W),V=Math.sin(W);C.x=v*V,C.y=m*E,C.z=v*Q,f.push(C.x,C.y,C.z),h.push(0,E,0),R.x=Q*.5+.5,R.y=V*.5*E+.5,d.push(R.x,R.y),g++}for(let U=0;U<r;U++){const O=b+U,W=I+U;x===!0?u.push(W,W+1,O):u.push(W+1,W,O),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class R0 extends Nh{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new R0(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _c extends Ln{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*h-o;for(let S=0;S<c;S++){const x=S*f-s;g.push(x,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,x=M+c*(p+1),b=M+1+c*(p+1),R=M+1+c*p;d.push(S,x,R),d.push(x,b,R)}this.setIndex(d),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.width,t.height,t.widthSegments,t.heightSegments)}}class C0 extends Ln{constructor(t=.5,e=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=t;const h=(e-t)/r,d=new z,g=new Gt;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const p=s+m/i*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let _=0;_<r;_++){const m=_*(i+1);for(let p=0;p<i;p++){const M=p+m,S=M,x=M+i+1,b=M+i+2,R=M+1;a.push(S,x,R),a.push(x,b,R)}}this.setIndex(a),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(c,3)),this.setAttribute("uv",new Ie(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new C0(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class P0 extends Ln{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new z,h=new z,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const M=[],S=p/i;let x=0;p===0&&o===0?x=.5/e:p===i&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){const R=b/e;f.x=-t*Math.cos(r+R*s)*Math.sin(o+S*a),f.y=t*Math.cos(o+S*a),f.z=t*Math.sin(r+R*s)*Math.sin(o+S*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(R+x,1-S),M.push(c++)}u.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const S=u[p][M+1],x=u[p][M],b=u[p+1][M],R=u[p+1][M+1];(p!==0||o>0)&&d.push(S,x,R),(p!==i-1||l<Math.PI)&&d.push(x,b,R)}this.setIndex(d),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new P0(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class PD extends yr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class DD extends yr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Kt(16777215),this.specular=new Kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ab extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wb extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gc extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const du=new ve,nm=new z,im=new z;class Fh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oh,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;nm.setFromMatrixPosition(t.matrixWorld),e.position.copy(nm),im.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(im),e.updateMatrixWorld(),du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(du)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Rb extends Fh{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Ll*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class LD extends gc{constructor(t,e,i=0,r=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Rb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const rm=new ve,xo=new z,pu=new z;class Cb extends Fh{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Gt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xo.setFromMatrixPosition(t.matrixWorld),i.position.copy(xo),pu.copy(i.position),pu.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(pu),i.updateMatrixWorld(),r.makeTranslation(-xo.x,-xo.y,-xo.z),rm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rm)}}class ID extends gc{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Cb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class D0 extends M0{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pb extends Fh{constructor(){super(new D0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class UD extends gc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Pb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class OD extends gc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Db extends Tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ND{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=sm();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function sm(){return performance.now()}class om{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class FD extends Tb{constructor(t=10,e=10,i=4473924,r=8947848){i=new Kt(i),r=new Kt(r);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let h=0,d=0,g=-a;h<=e;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=h===s?i:r;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const u=new Ln;u.setAttribute("position",new Ie(l,3)),u.setAttribute("color",new Ie(c,3));const f=new A0({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Lb extends os{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function am(n,t,e,i){const r=Ib(i);switch(e){case l0:return n*t;case u0:return n*t/r.components*r.byteLength;case Ph:return n*t/r.components*r.byteLength;case f0:return n*t*2/r.components*r.byteLength;case Dh:return n*t*2/r.components*r.byteLength;case c0:return n*t*3/r.components*r.byteLength;case Zn:return n*t*4/r.components*r.byteLength;case Lh:return n*t*4/r.components*r.byteLength;case ol:case al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ll:case cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case df:case mf:return Math.max(n,16)*Math.max(t,8)/4;case hf:case pf:return Math.max(n,8)*Math.max(t,8)/2;case _f:case gf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xf:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yf:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sf:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Mf:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ef:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Tf:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case bf:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Af:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wf:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Rf:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cf:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Pf:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Df:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Lf:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ul:case If:case Uf:return Math.ceil(n/4)*Math.ceil(t/4)*16;case h0:case Of:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Nf:case Ff:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ib(n){switch(n){case gi:case s0:return{byteLength:1,components:1};case $o:case o0:case ha:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case es:case wh:case Oi:return{byteLength:4,components:1};case a0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L0(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Ub(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$b=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fA="gl_FragColor = linearToOutputTexel( gl_FragColor );",hA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_A=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$A=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ew=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ww=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ow=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$w=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:Ob,alphahash_pars_fragment:Nb,alphamap_fragment:Fb,alphamap_pars_fragment:Bb,alphatest_fragment:zb,alphatest_pars_fragment:kb,aomap_fragment:Hb,aomap_pars_fragment:Vb,batching_pars_vertex:Gb,batching_vertex:Wb,begin_vertex:Xb,beginnormal_vertex:qb,bsdfs:jb,iridescence_fragment:Yb,bumpmap_pars_fragment:$b,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:Zb,clipping_planes_pars_vertex:Jb,clipping_planes_vertex:Qb,color_fragment:tA,color_pars_fragment:eA,color_pars_vertex:nA,color_vertex:iA,common:rA,cube_uv_reflection_fragment:sA,defaultnormal_vertex:oA,displacementmap_pars_vertex:aA,displacementmap_vertex:lA,emissivemap_fragment:cA,emissivemap_pars_fragment:uA,colorspace_fragment:fA,colorspace_pars_fragment:hA,envmap_fragment:dA,envmap_common_pars_fragment:pA,envmap_pars_fragment:mA,envmap_pars_vertex:_A,envmap_physical_pars_fragment:wA,envmap_vertex:gA,fog_vertex:vA,fog_pars_vertex:xA,fog_fragment:yA,fog_pars_fragment:SA,gradientmap_pars_fragment:MA,lightmap_pars_fragment:EA,lights_lambert_fragment:TA,lights_lambert_pars_fragment:bA,lights_pars_begin:AA,lights_toon_fragment:RA,lights_toon_pars_fragment:CA,lights_phong_fragment:PA,lights_phong_pars_fragment:DA,lights_physical_fragment:LA,lights_physical_pars_fragment:IA,lights_fragment_begin:UA,lights_fragment_maps:OA,lights_fragment_end:NA,logdepthbuf_fragment:FA,logdepthbuf_pars_fragment:BA,logdepthbuf_pars_vertex:zA,logdepthbuf_vertex:kA,map_fragment:HA,map_pars_fragment:VA,map_particle_fragment:GA,map_particle_pars_fragment:WA,metalnessmap_fragment:XA,metalnessmap_pars_fragment:qA,morphinstance_vertex:jA,morphcolor_vertex:YA,morphnormal_vertex:$A,morphtarget_pars_vertex:KA,morphtarget_vertex:ZA,normal_fragment_begin:JA,normal_fragment_maps:QA,normal_pars_fragment:tw,normal_pars_vertex:ew,normal_vertex:nw,normalmap_pars_fragment:iw,clearcoat_normal_fragment_begin:rw,clearcoat_normal_fragment_maps:sw,clearcoat_pars_fragment:ow,iridescence_pars_fragment:aw,opaque_fragment:lw,packing:cw,premultiplied_alpha_fragment:uw,project_vertex:fw,dithering_fragment:hw,dithering_pars_fragment:dw,roughnessmap_fragment:pw,roughnessmap_pars_fragment:mw,shadowmap_pars_fragment:_w,shadowmap_pars_vertex:gw,shadowmap_vertex:vw,shadowmask_pars_fragment:xw,skinbase_vertex:yw,skinning_pars_vertex:Sw,skinning_vertex:Mw,skinnormal_vertex:Ew,specularmap_fragment:Tw,specularmap_pars_fragment:bw,tonemapping_fragment:Aw,tonemapping_pars_fragment:ww,transmission_fragment:Rw,transmission_pars_fragment:Cw,uv_pars_fragment:Pw,uv_pars_vertex:Dw,uv_vertex:Lw,worldpos_vertex:Iw,background_vert:Uw,background_frag:Ow,backgroundCube_vert:Nw,backgroundCube_frag:Fw,cube_vert:Bw,cube_frag:zw,depth_vert:kw,depth_frag:Hw,distanceRGBA_vert:Vw,distanceRGBA_frag:Gw,equirect_vert:Ww,equirect_frag:Xw,linedashed_vert:qw,linedashed_frag:jw,meshbasic_vert:Yw,meshbasic_frag:$w,meshlambert_vert:Kw,meshlambert_frag:Zw,meshmatcap_vert:Jw,meshmatcap_frag:Qw,meshnormal_vert:tR,meshnormal_frag:eR,meshphong_vert:nR,meshphong_frag:iR,meshphysical_vert:rR,meshphysical_frag:sR,meshtoon_vert:oR,meshtoon_frag:aR,points_vert:lR,points_frag:cR,shadow_vert:uR,shadow_frag:fR,sprite_vert:hR,sprite_frag:dR},yt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},ui={basic:{uniforms:tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:tn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:tn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:tn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:tn([yt.points,yt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:tn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:tn([yt.common,yt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:tn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:tn([yt.sprite,yt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:tn([yt.common,yt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:tn([yt.lights,yt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};ui.physical={uniforms:tn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const ja={r:0,b:0,g:0},Lr=new ni,pR=new ve;function mR(n,t,e,i,r,s,o){const a=new Kt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const b=g(S);b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===pc)?(u===void 0&&(u=new Fi(new _a(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:Ks(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Lr.copy(x.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pR.makeRotationFromEuler(Lr)),u.material.toneMapped=ie.getTransfer(b.colorSpace)!==ce,(f!==b||h!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Fi(new _c(2,2),new gr({name:"BackgroundMaterial",uniforms:Ks(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ie.getTransfer(b.colorSpace)!==ce,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(ja,S0(n)),i.buffers.color.setClear(ja.r,ja.g,ja.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:M}}function _R(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,I,U,O,W){let Q=!1;const V=f(O,U,I);s!==V&&(s=V,c(s.object)),Q=d(E,O,U,W),Q&&g(E,O,U,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,x(E,I,U,O),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,I,U){const O=U.wireframe===!0;let W=i[E.id];W===void 0&&(W={},i[E.id]=W);let Q=W[I.id];Q===void 0&&(Q={},W[I.id]=Q);let V=Q[O];return V===void 0&&(V=h(l()),Q[O]=V),V}function h(E){const I=[],U=[],O=[];for(let W=0;W<e;W++)I[W]=0,U[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:O,object:E,attributes:{},index:null}}function d(E,I,U,O){const W=s.attributes,Q=I.attributes;let V=0;const j=U.getAttributes();for(const G in j)if(j[G].location>=0){const vt=W[G];let bt=Q[G];if(bt===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(bt=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(bt=E.instanceColor)),vt===void 0||vt.attribute!==bt||bt&&vt.data!==bt.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function g(E,I,U,O){const W={},Q=I.attributes;let V=0;const j=U.getAttributes();for(const G in j)if(j[G].location>=0){let vt=Q[G];vt===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor));const bt={};bt.attribute=vt,vt&&vt.data&&(bt.data=vt.data),W[G]=bt,V++}s.attributes=W,s.attributesNum=V,s.index=O}function _(){const E=s.newAttributes;for(let I=0,U=E.length;I<U;I++)E[I]=0}function m(E){p(E,0)}function p(E,I){const U=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;U[E]=1,O[E]===0&&(n.enableVertexAttribArray(E),O[E]=1),W[E]!==I&&(n.vertexAttribDivisor(E,I),W[E]=I)}function M(){const E=s.newAttributes,I=s.enabledAttributes;for(let U=0,O=I.length;U<O;U++)I[U]!==E[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function S(E,I,U,O,W,Q,V){V===!0?n.vertexAttribIPointer(E,I,U,W,Q):n.vertexAttribPointer(E,I,U,O,W,Q)}function x(E,I,U,O){_();const W=O.attributes,Q=U.getAttributes(),V=I.defaultAttributeValues;for(const j in Q){const G=Q[j];if(G.location>=0){let gt=W[j];if(gt===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(gt=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(gt=E.instanceColor)),gt!==void 0){const vt=gt.normalized,bt=gt.itemSize,Nt=t.get(gt);if(Nt===void 0)continue;const Zt=Nt.buffer,rt=Nt.type,dt=Nt.bytesPerElement,wt=rt===n.INT||rt===n.UNSIGNED_INT||gt.gpuType===wh;if(gt.isInterleavedBufferAttribute){const B=gt.data,ot=B.stride,ut=gt.offset;if(B.isInstancedInterleavedBuffer){for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct,B.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ct=0;ct<G.locationSize;ct++)m(G.location+ct);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let ct=0;ct<G.locationSize;ct++)S(G.location+ct,bt/G.locationSize,rt,vt,ot*dt,(ut+bt/G.locationSize*ct)*dt,wt)}else{if(gt.isInstancedBufferAttribute){for(let B=0;B<G.locationSize;B++)p(G.location+B,gt.meshPerAttribute);E.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let B=0;B<G.locationSize;B++)m(G.location+B);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let B=0;B<G.locationSize;B++)S(G.location+B,bt/G.locationSize,rt,vt,bt*dt,bt/G.locationSize*B*dt,wt)}}else if(V!==void 0){const vt=V[j];if(vt!==void 0)switch(vt.length){case 2:n.vertexAttrib2fv(G.location,vt);break;case 3:n.vertexAttrib3fv(G.location,vt);break;case 4:n.vertexAttrib4fv(G.location,vt);break;default:n.vertexAttrib1fv(G.location,vt)}}}}M()}function b(){P();for(const E in i){const I=i[E];for(const U in I){const O=I[U];for(const W in O)u(O[W].object),delete O[W];delete I[U]}delete i[E]}}function R(E){if(i[E.id]===void 0)return;const I=i[E.id];for(const U in I){const O=I[U];for(const W in O)u(O[W].object),delete O[W];delete I[U]}delete i[E.id]}function C(E){for(const I in i){const U=i[I];if(U[E.id]===void 0)continue;const O=U[E.id];for(const W in O)u(O[W].object),delete O[W];delete U[E.id]}}function P(){v(),o=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function gR(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];e.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vR(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Zn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===ha&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==gi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Oi&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:b,maxSamples:R}}function xR(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new rr,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,S=M*4;let x=p.clippingState||null;l.value=x,x=u(g,h,S,d);for(let b=0;b!==S;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==_;++S,x+=4)o.copy(f[S]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function yR(n){let t=new WeakMap;function e(o,a){return a===lf?o.mapping=js:a===cf&&(o.mapping=Ys),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lf||a===cf)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xb(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Cs=4,lm=[.125,.215,.35,.446,.526,.582],Vr=20,mu=new D0,cm=new Kt;let _u=null,gu=0,vu=0,xu=!1;const Fr=(1+Math.sqrt(5))/2,Ts=1/Fr,um=[new z(-Fr,Ts,0),new z(Fr,Ts,0),new z(-Ts,0,Fr),new z(Ts,0,Fr),new z(0,Fr,-Ts),new z(0,Fr,Ts),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],SR=new z;class fm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:o=256,position:a=SR}=s;_u=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_u,gu,vu),this._renderer.xr.enabled=xu,t.scissorTest=!1,Ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===js||t.mapping===Ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_u=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:ha,format:Zn,colorSpace:$s,depthBuffer:!1},r=hm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MR(s)),this._blurMaterial=ER(s,t,e)}return r}_compileMaterial(t){const e=new Fi(this._lodPlanes[0],t);this._renderer.compile(e,mu)}_sceneToCubeUV(t,e,i,r,s){const l=new Tn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(cm),f.toneMapping=fr,f.autoClear=!1;const g=new v0({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new Fi(new _a,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(cm),m=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const x=this._cubeSize;Ya(r,S*x,M>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(_,l),f.render(t,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===js||t.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ya(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,mu)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=um[(r-s-1)%um.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Fi(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Vr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const p=[];let M=0;for(let C=0;C<Vr;++C){const P=C/_,v=Math.exp(-P*P/2);p.push(v),C===0?M+=v:C<m&&(M+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;const x=this._sizeLods[r],b=3*x*(r>S-Cs?r-S+Cs:0),R=4*(this._cubeSize-x);Ya(e,b,R,3*x,2*x),l.setRenderTarget(e),l.render(f,mu)}}function MR(n){const t=[],e=[],i=[];let r=n;const s=n-Cs+1+lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Cs?l=lm[o-n+Cs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*d),S=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,P=R>2?0:-1,v=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(v,_*g*R),S.set(h,m*g*R);const E=[R,R,R,R,R,R];x.set(E,p*g*R)}const b=new Ln;b.setAttribute("position",new mi(M,_)),b.setAttribute("uv",new mi(S,m)),b.setAttribute("faceIndex",new mi(x,p)),t.push(b),r>Cs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function hm(n,t,e){const i=new is(n,t,e);return i.texture.mapping=pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function ER(n,t,e){const i=new Float32Array(Vr),r=new z(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function dm(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function pm(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TR(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lf||l===cf,u=l===js||l===Ys;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new fm(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new fm(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function bR(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&zs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AR(n,t,e,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let S=0,x=M.length;S<x;S+=3){const b=M[S+0],R=M[S+1],C=M[S+2];h.push(b,R,R,C,C,b)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const b=S+0,R=S+1,C=S+2;h.push(b,R,R,C,C,b)}}else return;const m=new(p0(h)?y0:x0)(h,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function wR(n,t,e){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),e.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),e.update(d,i,g))}function u(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=d[M]*_[M];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function RR(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function CR(n,t,e){const i=new WeakMap,r=new fe;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let v=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",v)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const R=new Float32Array(x*b*4*f),C=new m0(R,x,b,f);C.type=Oi,C.needsUpdate=!0;const P=S*4;for(let E=0;E<f;E++){const I=m[E],U=p[E],O=M[E],W=x*b*4*E;for(let Q=0;Q<I.count;Q++){const V=Q*P;d===!0&&(r.fromBufferAttribute(I,Q),R[W+V+0]=r.x,R[W+V+1]=r.y,R[W+V+2]=r.z,R[W+V+3]=0),g===!0&&(r.fromBufferAttribute(U,Q),R[W+V+4]=r.x,R[W+V+5]=r.y,R[W+V+6]=r.z,R[W+V+7]=0),_===!0&&(r.fromBufferAttribute(O,Q),R[W+V+8]=r.x,R[W+V+9]=r.y,R[W+V+10]=r.z,R[W+V+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new Gt(x,b)},i.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function PR(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const I0=new on,mm=new w0(1,1),U0=new m0,O0=new nb,N0=new E0,_m=[],gm=[],vm=new Float32Array(16),xm=new Float32Array(9),ym=new Float32Array(4);function so(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=_m[r];if(s===void 0&&(s=new Float32Array(r),_m[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vc(n,t){let e=gm[t];e===void 0&&(e=new Int32Array(t),gm[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function DR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function LR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function IR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function UR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function OR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;ym.set(i),n.uniformMatrix2fv(this.addr,!1,ym),Fe(e,i)}}function NR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;xm.set(i),n.uniformMatrix3fv(this.addr,!1,xm),Fe(e,i)}}function FR(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;vm.set(i),n.uniformMatrix4fv(this.addr,!1,vm),Fe(e,i)}}function BR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function zR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function kR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function HR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function VR(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function GR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function WR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function XR(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function qR(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(mm.compareFunction=d0,s=mm):s=I0,e.setTexture2D(t||s,r)}function jR(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||O0,r)}function YR(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||N0,r)}function $R(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||U0,r)}function KR(n){switch(n){case 5126:return DR;case 35664:return LR;case 35665:return IR;case 35666:return UR;case 35674:return OR;case 35675:return NR;case 35676:return FR;case 5124:case 35670:return BR;case 35667:case 35671:return zR;case 35668:case 35672:return kR;case 35669:case 35673:return HR;case 5125:return VR;case 36294:return GR;case 36295:return WR;case 36296:return XR;case 35678:case 36198:case 36298:case 36306:case 35682:return qR;case 35679:case 36299:case 36307:return jR;case 35680:case 36300:case 36308:case 36293:return YR;case 36289:case 36303:case 36311:case 36292:return $R}}function ZR(n,t){n.uniform1fv(this.addr,t)}function JR(n,t){const e=so(t,this.size,2);n.uniform2fv(this.addr,e)}function QR(n,t){const e=so(t,this.size,3);n.uniform3fv(this.addr,e)}function t1(n,t){const e=so(t,this.size,4);n.uniform4fv(this.addr,e)}function e1(n,t){const e=so(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function n1(n,t){const e=so(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function i1(n,t){const e=so(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function r1(n,t){n.uniform1iv(this.addr,t)}function s1(n,t){n.uniform2iv(this.addr,t)}function o1(n,t){n.uniform3iv(this.addr,t)}function a1(n,t){n.uniform4iv(this.addr,t)}function l1(n,t){n.uniform1uiv(this.addr,t)}function c1(n,t){n.uniform2uiv(this.addr,t)}function u1(n,t){n.uniform3uiv(this.addr,t)}function f1(n,t){n.uniform4uiv(this.addr,t)}function h1(n,t,e){const i=this.cache,r=t.length,s=vc(e,r);Ne(i,s)||(n.uniform1iv(this.addr,s),Fe(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||I0,s[o])}function d1(n,t,e){const i=this.cache,r=t.length,s=vc(e,r);Ne(i,s)||(n.uniform1iv(this.addr,s),Fe(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||O0,s[o])}function p1(n,t,e){const i=this.cache,r=t.length,s=vc(e,r);Ne(i,s)||(n.uniform1iv(this.addr,s),Fe(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||N0,s[o])}function m1(n,t,e){const i=this.cache,r=t.length,s=vc(e,r);Ne(i,s)||(n.uniform1iv(this.addr,s),Fe(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||U0,s[o])}function _1(n){switch(n){case 5126:return ZR;case 35664:return JR;case 35665:return QR;case 35666:return t1;case 35674:return e1;case 35675:return n1;case 35676:return i1;case 5124:case 35670:return r1;case 35667:case 35671:return s1;case 35668:case 35672:return o1;case 35669:case 35673:return a1;case 5125:return l1;case 36294:return c1;case 36295:return u1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return p1;case 36289:case 36303:case 36311:case 36292:return m1}}class g1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=KR(e.type)}}class v1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_1(e.type)}}class x1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const yu=/(\w+)(\])?(\[|\.)?/g;function Sm(n,t){n.seq.push(t),n.map[t.id]=t}function y1(n,t,e){const i=n.name,r=i.length;for(yu.lastIndex=0;;){const s=yu.exec(i),o=yu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sm(e,c===void 0?new g1(a,n,t):new v1(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new x1(a),Sm(e,f)),e=f}}}class hl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);y1(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Mm(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const S1=37297;let M1=0;function E1(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Em=new Yt;function T1(n){ie._getMatrix(Em,ie.workingColorSpace,n);const t=`mat3( ${Em.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Pl:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Tm(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+E1(n.getShaderSource(t),o)}else return r}function b1(n,t){const e=T1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function A1(n,t){let e;switch(t){case wT:e="Linear";break;case RT:e="Reinhard";break;case CT:e="Cineon";break;case PT:e="ACESFilmic";break;case LT:e="AgX";break;case IT:e="Neutral";break;case DT:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $a=new z;function w1(){ie.getLuminanceCoefficients($a);const n=$a.x.toFixed(4),t=$a.y.toFixed(4),e=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function C1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function P1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Mo(n){return n!==""}function bm(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Am(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const D1=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(n){return n.replace(D1,I1)}const L1=new Map;function I1(n,t){let e=$t[t];if(e===void 0){const i=L1.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zf(e)}const U1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(n){return n.replace(U1,O1)}function O1(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rm(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function N1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===i0?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===oT?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function F1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case Ys:t="ENVMAP_TYPE_CUBE";break;case pc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ys:t="ENVMAP_MODE_REFRACTION";break}return t}function z1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ah:t="ENVMAP_BLENDING_MULTIPLY";break;case bT:t="ENVMAP_BLENDING_MIX";break;case AT:t="ENVMAP_BLENDING_ADD";break}return t}function k1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function H1(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=N1(e),c=F1(e),u=B1(e),f=z1(e),h=k1(e),d=R1(e),g=C1(s),_=r.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mo).join(`
`),p.length>0&&(p+=`
`)):(m=[Rm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),p=[Rm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fr?"#define TONE_MAPPING":"",e.toneMapping!==fr?$t.tonemapping_pars_fragment:"",e.toneMapping!==fr?A1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,b1("linearToOutputTexel",e.outputColorSpace),w1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mo).join(`
`)),o=zf(o),o=bm(o,e),o=Am(o,e),a=zf(a),a=bm(a,e),a=Am(a,e),o=wm(o),a=wm(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,x=M+p+a,b=Mm(r,r.VERTEX_SHADER,S),R=Mm(r,r.FRAGMENT_SHADER,x);r.attachShader(_,b),r.attachShader(_,R),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(I){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(b).trim(),W=r.getShaderInfoLog(R).trim();let Q=!0,V=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,R);else{const j=Tm(r,b,"vertex"),G=Tm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+j+`
`+G)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||W==="")&&(V=!1);V&&(I.diagnostics={runnable:Q,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}r.deleteShader(b),r.deleteShader(R),P=new hl(r,_),v=P1(r,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,S1)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}let V1=0;class G1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new W1(t),e.set(t,i)),i}}class W1{constructor(t){this.id=V1++,this.code=t,this.usedTimes=0}}function X1(n,t,e,i,r,s,o){const a=new _0,l=new G1,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,I,U,O){const W=U.fog,Q=O.geometry,V=v.isMeshStandardMaterial?U.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),G=j&&j.mapping===pc?j.image.height:null,gt=g[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const vt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,bt=vt!==void 0?vt.length:0;let Nt=0;Q.morphAttributes.position!==void 0&&(Nt=1),Q.morphAttributes.normal!==void 0&&(Nt=2),Q.morphAttributes.color!==void 0&&(Nt=3);let Zt,rt,dt,wt;if(gt){const ae=ui[gt];Zt=ae.vertexShader,rt=ae.fragmentShader}else Zt=v.vertexShader,rt=v.fragmentShader,l.update(v),dt=l.getVertexShaderID(v),wt=l.getFragmentShaderID(v);const B=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),ut=O.isInstancedMesh===!0,ct=O.isBatchedMesh===!0,zt=!!v.map,D=!!v.matcap,L=!!j,T=!!v.aoMap,st=!!v.lightMap,Z=!!v.bumpMap,K=!!v.normalMap,nt=!!v.displacementMap,at=!!v.emissiveMap,et=!!v.metalnessMap,tt=!!v.roughnessMap,St=v.anisotropy>0,w=v.clearcoat>0,y=v.dispersion>0,N=v.iridescence>0,q=v.sheen>0,it=v.transmission>0,X=St&&!!v.anisotropyMap,Tt=w&&!!v.clearcoatMap,_t=w&&!!v.clearcoatNormalMap,At=w&&!!v.clearcoatRoughnessMap,Ct=N&&!!v.iridescenceMap,ft=N&&!!v.iridescenceThicknessMap,Rt=q&&!!v.sheenColorMap,Lt=q&&!!v.sheenRoughnessMap,It=!!v.specularMap,xt=!!v.specularColorMap,Xt=!!v.specularIntensityMap,F=it&&!!v.transmissionMap,Mt=it&&!!v.thicknessMap,ht=!!v.gradientMap,Dt=!!v.alphaMap,pt=v.alphaTest>0,lt=!!v.alphaHash,Ut=!!v.extensions;let qt=fr;v.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(qt=n.toneMapping);const ge={shaderID:gt,shaderType:v.type,shaderName:v.name,vertexShader:Zt,fragmentShader:rt,defines:v.defines,customVertexShaderID:dt,customFragmentShaderID:wt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:ct,batchingColor:ct&&O._colorsTexture!==null,instancing:ut,instancingColor:ut&&O.instanceColor!==null,instancingMorph:ut&&O.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:$s,alphaToCoverage:!!v.alphaToCoverage,map:zt,matcap:D,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:G,aoMap:T,lightMap:st,bumpMap:Z,normalMap:K,displacementMap:h&&nt,emissiveMap:at,normalMapObjectSpace:K&&v.normalMapType===FT,normalMapTangentSpace:K&&v.normalMapType===Ih,metalnessMap:et,roughnessMap:tt,anisotropy:St,anisotropyMap:X,clearcoat:w,clearcoatMap:Tt,clearcoatNormalMap:_t,clearcoatRoughnessMap:At,dispersion:y,iridescence:N,iridescenceMap:Ct,iridescenceThicknessMap:ft,sheen:q,sheenColorMap:Rt,sheenRoughnessMap:Lt,specularMap:It,specularColorMap:xt,specularIntensityMap:Xt,transmission:it,transmissionMap:F,thicknessMap:Mt,gradientMap:ht,opaque:v.transparent===!1&&v.blending===Bs&&v.alphaToCoverage===!1,alphaMap:Dt,alphaTest:pt,alphaHash:lt,combine:v.combine,mapUv:zt&&_(v.map.channel),aoMapUv:T&&_(v.aoMap.channel),lightMapUv:st&&_(v.lightMap.channel),bumpMapUv:Z&&_(v.bumpMap.channel),normalMapUv:K&&_(v.normalMap.channel),displacementMapUv:nt&&_(v.displacementMap.channel),emissiveMapUv:at&&_(v.emissiveMap.channel),metalnessMapUv:et&&_(v.metalnessMap.channel),roughnessMapUv:tt&&_(v.roughnessMap.channel),anisotropyMapUv:X&&_(v.anisotropyMap.channel),clearcoatMapUv:Tt&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:_t&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&_(v.sheenRoughnessMap.channel),specularMapUv:It&&_(v.specularMap.channel),specularColorMapUv:xt&&_(v.specularColorMap.channel),specularIntensityMapUv:Xt&&_(v.specularIntensityMap.channel),transmissionMapUv:F&&_(v.transmissionMap.channel),thicknessMapUv:Mt&&_(v.thicknessMap.channel),alphaMapUv:Dt&&_(v.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(K||St),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Q.attributes.uv&&(zt||Dt),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ot,skinning:O.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Nt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,decodeVideoTexture:zt&&v.map.isVideoTexture===!0&&ie.getTransfer(v.map.colorSpace)===ce,decodeVideoTextureEmissive:at&&v.emissiveMap.isVideoTexture===!0&&ie.getTransfer(v.emissiveMap.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ui,flipSided:v.side===dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ut&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&v.extensions.multiDraw===!0||ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(M(E,v),S(E,v),E.push(n.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function M(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const E=g[v.type];let I;if(E){const U=ui[E];I=mb.clone(U.uniforms)}else I=v.uniforms;return I}function b(v,E){let I;for(let U=0,O=u.length;U<O;U++){const W=u[U];if(W.cacheKey===E){I=W,++I.usedTimes;break}}return I===void 0&&(I=new H1(n,E,v,s),u.push(I)),I}function R(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),v.destroy()}}function C(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:P}}function q1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function j1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pm(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||j1),i.length>1&&i.sort(h||Cm),r.length>1&&r.sort(h||Cm)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Y1(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Pm,n.set(i,[o])):r>=s.length?(o=new Pm,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function $1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Kt};break;case"SpotLight":e={position:new z,direction:new z,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function K1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Z1=0;function J1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Q1(n){const t=new $1,e=K1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new ve,o=new ve;function a(c){let u=0,f=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,M=0,S=0,x=0,b=0,R=0,C=0;c.sort(J1);for(let v=0,E=c.length;v<E;v++){const I=c[v],U=I.color,O=I.intensity,W=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=U.r*O,f+=U.g*O,h+=U.b*O;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],O);C++}else if(I.isDirectionalLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,G=e.get(I);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=Q,i.directionalShadowMatrix[d]=I.shadow.matrix,M++}i.directional[d]=V,d++}else if(I.isSpotLight){const V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(U).multiplyScalar(O),V.distance=W,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[_]=V;const j=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,j.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[_]=j.matrix,I.castShadow){const G=e.get(I);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Q,x++}_++}else if(I.isRectAreaLight){const V=t.get(I);V.color.copy(U).multiplyScalar(O),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){const V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const j=I.shadow,G=e.get(I);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=I.shadow.matrix,S++}i.point[g]=V,g++}else if(I.isHemisphereLight){const V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(O),V.groundColor.copy(I.groundColor).multiplyScalar(O),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==x||P.numSpotMaps!==b||P.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=x,P.numSpotMaps=b,P.numLightProbes=C,i.version=Z1++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(S.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Dm(n){const t=new Q1(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function tC(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Dm(n),t.set(r,[a])):s>=o.length?(a=new Dm(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const eC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iC(n,t,e){let i=new Oh;const r=new Gt,s=new Gt,o=new fe,a=new Ab({depthPacking:NT}),l=new wb,c={},u=e.maxTextureSize,f={[_r]:dn,[dn]:_r,[Ui]:Ui},h=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:eC,fragmentShader:nC}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ln;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0;let p=this.type;this.render=function(R,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const v=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ur),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==Ri&&this.type===Ri,W=p===Ri&&this.type!==Ri;for(let Q=0,V=R.length;Q<V;Q++){const j=R[Q],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const gt=G.getFrameExtents();if(r.multiply(gt),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/gt.x),r.x=s.x*gt.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/gt.y),r.y=s.y*gt.y,G.mapSize.y=s.y)),G.map===null||O===!0||W===!0){const bt=this.type!==Ri?{minFilter:Qn,magFilter:Qn}:{};G.map!==null&&G.map.dispose(),G.map=new is(r.x,r.y,bt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const vt=G.getViewportCount();for(let bt=0;bt<vt;bt++){const Nt=G.getViewport(bt);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),U.viewport(o),G.updateMatrices(j,bt),i=G.getFrustum(),x(C,P,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===Ri&&M(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,E,I)};function M(R,C){const P=t.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new is(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,P,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,P,d,_,null)}function S(R,C,P,v){let E=null;const I=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)E=I;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=E.uuid,O=C.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let Q=W[O];Q===void 0&&(Q=E.clone(),W[O]=Q,C.addEventListener("dispose",b)),E=Q}if(E.visible=C.visible,E.wireframe=C.wireframe,v===Ri?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=n.properties.get(E);U.light=P}return E}function x(R,C,P,v,E){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Ri)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const O=t.update(R),W=R.material;if(Array.isArray(W)){const Q=O.groups;for(let V=0,j=Q.length;V<j;V++){const G=Q[V],gt=W[G.materialIndex];if(gt&&gt.visible){const vt=S(R,gt,v,E);R.onBeforeShadow(n,R,C,P,O,vt,G),n.renderBufferDirect(P,null,O,vt,R,G),R.onAfterShadow(n,R,C,P,O,vt,G)}}}else if(W.visible){const Q=S(R,W,v,E);R.onBeforeShadow(n,R,C,P,O,Q,null),n.renderBufferDirect(P,null,O,Q,R,null),R.onAfterShadow(n,R,C,P,O,Q,null)}}const U=R.children;for(let O=0,W=U.length;O<W;O++)x(U[O],C,P,v,E)}function b(R){R.target.removeEventListener("dispose",b);for(const P in c){const v=c[P],E=R.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}const rC={[tf]:ef,[nf]:of,[rf]:af,[qs]:sf,[ef]:tf,[of]:nf,[af]:rf,[sf]:qs};function sC(n,t){function e(){let F=!1;const Mt=new fe;let ht=null;const Dt=new fe(0,0,0,0);return{setMask:function(pt){ht!==pt&&!F&&(n.colorMask(pt,pt,pt,pt),ht=pt)},setLocked:function(pt){F=pt},setClear:function(pt,lt,Ut,qt,ge){ge===!0&&(pt*=qt,lt*=qt,Ut*=qt),Mt.set(pt,lt,Ut,qt),Dt.equals(Mt)===!1&&(n.clearColor(pt,lt,Ut,qt),Dt.copy(Mt))},reset:function(){F=!1,ht=null,Dt.set(-1,0,0,0)}}}function i(){let F=!1,Mt=!1,ht=null,Dt=null,pt=null;return{setReversed:function(lt){if(Mt!==lt){const Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),Mt=lt;const qt=pt;pt=null,this.setClear(qt)}},getReversed:function(){return Mt},setTest:function(lt){lt?B(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(lt){ht!==lt&&!F&&(n.depthMask(lt),ht=lt)},setFunc:function(lt){if(Mt&&(lt=rC[lt]),Dt!==lt){switch(lt){case tf:n.depthFunc(n.NEVER);break;case ef:n.depthFunc(n.ALWAYS);break;case nf:n.depthFunc(n.LESS);break;case qs:n.depthFunc(n.LEQUAL);break;case rf:n.depthFunc(n.EQUAL);break;case sf:n.depthFunc(n.GEQUAL);break;case of:n.depthFunc(n.GREATER);break;case af:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Dt=lt}},setLocked:function(lt){F=lt},setClear:function(lt){pt!==lt&&(Mt&&(lt=1-lt),n.clearDepth(lt),pt=lt)},reset:function(){F=!1,ht=null,Dt=null,pt=null,Mt=!1}}}function r(){let F=!1,Mt=null,ht=null,Dt=null,pt=null,lt=null,Ut=null,qt=null,ge=null;return{setTest:function(ae){F||(ae?B(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(ae){Mt!==ae&&!F&&(n.stencilMask(ae),Mt=ae)},setFunc:function(ae,Xn,xi){(ht!==ae||Dt!==Xn||pt!==xi)&&(n.stencilFunc(ae,Xn,xi),ht=ae,Dt=Xn,pt=xi)},setOp:function(ae,Xn,xi){(lt!==ae||Ut!==Xn||qt!==xi)&&(n.stencilOp(ae,Xn,xi),lt=ae,Ut=Xn,qt=xi)},setLocked:function(ae){F=ae},setClear:function(ae){ge!==ae&&(n.clearStencil(ae),ge=ae)},reset:function(){F=!1,Mt=null,ht=null,Dt=null,pt=null,lt=null,Ut=null,qt=null,ge=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,b=null,R=null,C=new Kt(0,0,0),P=0,v=!1,E=null,I=null,U=null,O=null,W=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,j=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=j>=2);let gt=null,vt={};const bt=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),Zt=new fe().fromArray(bt),rt=new fe().fromArray(Nt);function dt(F,Mt,ht,Dt){const pt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(F,lt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ut=0;Ut<ht;Ut++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(Mt+Ut,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return lt}const wt={};wt[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(n.DEPTH_TEST),o.setFunc(qs),Z(!1),K(Ap),B(n.CULL_FACE),T(ur);function B(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ot(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function ut(F,Mt){return f[F]!==Mt?(n.bindFramebuffer(F,Mt),f[F]=Mt,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Mt),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function ct(F,Mt){let ht=d,Dt=!1;if(F){ht=h.get(Mt),ht===void 0&&(ht=[],h.set(Mt,ht));const pt=F.textures;if(ht.length!==pt.length||ht[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Ut=pt.length;lt<Ut;lt++)ht[lt]=n.COLOR_ATTACHMENT0+lt;ht.length=pt.length,Dt=!0}}else ht[0]!==n.BACK&&(ht[0]=n.BACK,Dt=!0);Dt&&n.drawBuffers(ht)}function zt(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const D={[Hr]:n.FUNC_ADD,[lT]:n.FUNC_SUBTRACT,[cT]:n.FUNC_REVERSE_SUBTRACT};D[uT]=n.MIN,D[fT]=n.MAX;const L={[hT]:n.ZERO,[dT]:n.ONE,[pT]:n.SRC_COLOR,[Ju]:n.SRC_ALPHA,[yT]:n.SRC_ALPHA_SATURATE,[vT]:n.DST_COLOR,[_T]:n.DST_ALPHA,[mT]:n.ONE_MINUS_SRC_COLOR,[Qu]:n.ONE_MINUS_SRC_ALPHA,[xT]:n.ONE_MINUS_DST_COLOR,[gT]:n.ONE_MINUS_DST_ALPHA,[ST]:n.CONSTANT_COLOR,[MT]:n.ONE_MINUS_CONSTANT_COLOR,[ET]:n.CONSTANT_ALPHA,[TT]:n.ONE_MINUS_CONSTANT_ALPHA};function T(F,Mt,ht,Dt,pt,lt,Ut,qt,ge,ae){if(F===ur){_===!0&&(ot(n.BLEND),_=!1);return}if(_===!1&&(B(n.BLEND),_=!0),F!==aT){if(F!==m||ae!==v){if((p!==Hr||x!==Hr)&&(n.blendEquation(n.FUNC_ADD),p=Hr,x=Hr),ae)switch(F){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wp:n.blendFunc(n.ONE,n.ONE);break;case Rp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,S=null,b=null,R=null,C.set(0,0,0),P=0,m=F,v=ae}return}pt=pt||Mt,lt=lt||ht,Ut=Ut||Dt,(Mt!==p||pt!==x)&&(n.blendEquationSeparate(D[Mt],D[pt]),p=Mt,x=pt),(ht!==M||Dt!==S||lt!==b||Ut!==R)&&(n.blendFuncSeparate(L[ht],L[Dt],L[lt],L[Ut]),M=ht,S=Dt,b=lt,R=Ut),(qt.equals(C)===!1||ge!==P)&&(n.blendColor(qt.r,qt.g,qt.b,ge),C.copy(qt),P=ge),m=F,v=!1}function st(F,Mt){F.side===Ui?ot(n.CULL_FACE):B(n.CULL_FACE);let ht=F.side===dn;Mt&&(ht=!ht),Z(ht),F.blending===Bs&&F.transparent===!1?T(ur):T(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Dt=F.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),at(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(F){E!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),E=F)}function K(F){F!==rT?(B(n.CULL_FACE),F!==I&&(F===Ap?n.cullFace(n.BACK):F===sT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),I=F}function nt(F){F!==U&&(V&&n.lineWidth(F),U=F)}function at(F,Mt,ht){F?(B(n.POLYGON_OFFSET_FILL),(O!==Mt||W!==ht)&&(n.polygonOffset(Mt,ht),O=Mt,W=ht)):ot(n.POLYGON_OFFSET_FILL)}function et(F){F?B(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function tt(F){F===void 0&&(F=n.TEXTURE0+Q-1),gt!==F&&(n.activeTexture(F),gt=F)}function St(F,Mt,ht){ht===void 0&&(gt===null?ht=n.TEXTURE0+Q-1:ht=gt);let Dt=vt[ht];Dt===void 0&&(Dt={type:void 0,texture:void 0},vt[ht]=Dt),(Dt.type!==F||Dt.texture!==Mt)&&(gt!==ht&&(n.activeTexture(ht),gt=ht),n.bindTexture(F,Mt||wt[F]),Dt.type=F,Dt.texture=Mt)}function w(){const F=vt[gt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function At(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ct(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(F){Zt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Zt.copy(F))}function Lt(F){rt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),rt.copy(F))}function It(F,Mt){let ht=c.get(Mt);ht===void 0&&(ht=new WeakMap,c.set(Mt,ht));let Dt=ht.get(F);Dt===void 0&&(Dt=n.getUniformBlockIndex(Mt,F.name),ht.set(F,Dt))}function xt(F,Mt){const Dt=c.get(Mt).get(F);l.get(Mt)!==Dt&&(n.uniformBlockBinding(Mt,Dt,F.__bindingPointIndex),l.set(Mt,Dt))}function Xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},gt=null,vt={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,b=null,R=null,C=new Kt(0,0,0),P=0,v=!1,E=null,I=null,U=null,O=null,W=null,Zt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:B,disable:ot,bindFramebuffer:ut,drawBuffers:ct,useProgram:zt,setBlending:T,setMaterial:st,setFlipSided:Z,setCullFace:K,setLineWidth:nt,setPolygonOffset:at,setScissorTest:et,activeTexture:tt,bindTexture:St,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:Ct,texImage3D:ft,updateUBOMapping:It,uniformBlockBinding:xt,texStorage2D:_t,texStorage3D:At,texSubImage2D:q,texSubImage3D:it,compressedTexSubImage2D:X,compressedTexSubImage3D:Tt,scissor:Rt,viewport:Lt,reset:Xt}}function oC(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return d?new OffscreenCanvas(w,y):Il("canvas")}function _(w,y,N){let q=1;const it=St(w);if((it.width>N||it.height>N)&&(q=N/Math.max(it.width,it.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(q*it.width),Tt=Math.floor(q*it.height);f===void 0&&(f=g(X,Tt));const _t=y?g(X,Tt):f;return _t.width=X,_t.height=Tt,_t.getContext("2d").drawImage(w,0,0,X,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+X+"x"+Tt+")."),_t}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function M(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(w,y,N,q,it=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=y;if(y===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8)),y===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),y===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8)),y===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),y===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),y===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),y===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),y===n.RGBA){const Tt=it?Pl:ie.getTransfer(q);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=Tt===ce?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(w,y){let N;return w?y===null||y===es||y===Ko?N=n.DEPTH24_STENCIL8:y===Oi?N=n.DEPTH32F_STENCIL8:y===$o&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===es||y===Ko?N=n.DEPTH_COMPONENT24:y===Oi?N=n.DEPTH_COMPONENT32F:y===$o&&(N=n.DEPTH_COMPONENT16),N}function b(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Qn&&w.minFilter!==hi?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function R(w){const y=w.target;y.removeEventListener("dispose",R),P(y),y.isVideoTexture&&u.delete(y)}function C(w){const y=w.target;y.removeEventListener("dispose",C),E(y)}function P(w){const y=i.get(w);if(y.__webglInit===void 0)return;const N=w.source,q=h.get(N);if(q){const it=q[y.__cacheKey];it.usedTimes--,it.usedTimes===0&&v(w),Object.keys(q).length===0&&h.delete(N)}i.remove(w)}function v(w){const y=i.get(w);n.deleteTexture(y.__webglTexture);const N=w.source,q=h.get(N);delete q[y.__cacheKey],o.memory.textures--}function E(w){const y=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let it=0;it<y.__webglFramebuffer[q].length;it++)n.deleteFramebuffer(y.__webglFramebuffer[q][it]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=w.textures;for(let q=0,it=N.length;q<it;q++){const X=i.get(N[q]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(N[q])}i.remove(w)}let I=0;function U(){I=0}function O(){const w=I;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function W(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function Q(w,y){const N=i.get(w);if(w.isVideoTexture&&et(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(N,w,y);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+y)}function V(w,y){const N=i.get(w);if(w.version>0&&N.__version!==w.version){wt(N,w,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+y)}function j(w,y){const N=i.get(w);if(w.version>0&&N.__version!==w.version){wt(N,w,y);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+y)}function G(w,y){const N=i.get(w);if(w.version>0&&N.__version!==w.version){B(N,w,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+y)}const gt={[uf]:n.REPEAT,[Wr]:n.CLAMP_TO_EDGE,[ff]:n.MIRRORED_REPEAT},vt={[Qn]:n.NEAREST,[UT]:n.NEAREST_MIPMAP_NEAREST,[Ta]:n.NEAREST_MIPMAP_LINEAR,[hi]:n.LINEAR,[Vc]:n.LINEAR_MIPMAP_NEAREST,[Xr]:n.LINEAR_MIPMAP_LINEAR},bt={[BT]:n.NEVER,[WT]:n.ALWAYS,[zT]:n.LESS,[d0]:n.LEQUAL,[kT]:n.EQUAL,[GT]:n.GEQUAL,[HT]:n.GREATER,[VT]:n.NOTEQUAL};function Nt(w,y){if(y.type===Oi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===hi||y.magFilter===Vc||y.magFilter===Ta||y.magFilter===Xr||y.minFilter===hi||y.minFilter===Vc||y.minFilter===Ta||y.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,gt[y.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,gt[y.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,gt[y.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,vt[y.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,vt[y.minFilter]),y.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,bt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qn||y.minFilter!==Ta&&y.minFilter!==Xr||y.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Zt(w,y){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",R));const q=y.source;let it=h.get(q);it===void 0&&(it={},h.set(q,it));const X=W(y);if(X!==w.__cacheKey){it[X]===void 0&&(it[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),it[X].usedTimes++;const Tt=it[w.__cacheKey];Tt!==void 0&&(it[w.__cacheKey].usedTimes--,Tt.usedTimes===0&&v(y)),w.__cacheKey=X,w.__webglTexture=it[X].texture}return N}function rt(w,y,N){return Math.floor(Math.floor(w/N)/y)}function dt(w,y,N,q){const X=w.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,N,q,y.data);else{X.sort((ft,Rt)=>ft.start-Rt.start);let Tt=0;for(let ft=1;ft<X.length;ft++){const Rt=X[Tt],Lt=X[ft],It=Rt.start+Rt.count,xt=rt(Lt.start,y.width,4),Xt=rt(Rt.start,y.width,4);Lt.start<=It+1&&xt===Xt&&rt(Lt.start+Lt.count-1,y.width,4)===xt?Rt.count=Math.max(Rt.count,Lt.start+Lt.count-Rt.start):(++Tt,X[Tt]=Lt)}X.length=Tt+1;const _t=n.getParameter(n.UNPACK_ROW_LENGTH),At=n.getParameter(n.UNPACK_SKIP_PIXELS),Ct=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ft=0,Rt=X.length;ft<Rt;ft++){const Lt=X[ft],It=Math.floor(Lt.start/4),xt=Math.ceil(Lt.count/4),Xt=It%y.width,F=Math.floor(It/y.width),Mt=xt,ht=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xt),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,Xt,F,Mt,ht,N,q,y.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_t),n.pixelStorei(n.UNPACK_SKIP_PIXELS,At),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ct)}}function wt(w,y,N){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);const it=Zt(w,y),X=y.source;e.bindTexture(q,w.__webglTexture,n.TEXTURE0+N);const Tt=i.get(X);if(X.version!==Tt.__version||it===!0){e.activeTexture(n.TEXTURE0+N);const _t=ie.getPrimaries(ie.workingColorSpace),At=y.colorSpace===sr?null:ie.getPrimaries(y.colorSpace),Ct=y.colorSpace===sr||_t===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let ft=_(y.image,!1,r.maxTextureSize);ft=tt(y,ft);const Rt=s.convert(y.format,y.colorSpace),Lt=s.convert(y.type);let It=S(y.internalFormat,Rt,Lt,y.colorSpace,y.isVideoTexture);Nt(q,y);let xt;const Xt=y.mipmaps,F=y.isVideoTexture!==!0,Mt=Tt.__version===void 0||it===!0,ht=X.dataReady,Dt=b(y,ft);if(y.isDepthTexture)It=x(y.format===Jo,y.type),Mt&&(F?e.texStorage2D(n.TEXTURE_2D,1,It,ft.width,ft.height):e.texImage2D(n.TEXTURE_2D,0,It,ft.width,ft.height,0,Rt,Lt,null));else if(y.isDataTexture)if(Xt.length>0){F&&Mt&&e.texStorage2D(n.TEXTURE_2D,Dt,It,Xt[0].width,Xt[0].height);for(let pt=0,lt=Xt.length;pt<lt;pt++)xt=Xt[pt],F?ht&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,xt.width,xt.height,Rt,Lt,xt.data):e.texImage2D(n.TEXTURE_2D,pt,It,xt.width,xt.height,0,Rt,Lt,xt.data);y.generateMipmaps=!1}else F?(Mt&&e.texStorage2D(n.TEXTURE_2D,Dt,It,ft.width,ft.height),ht&&dt(y,ft,Rt,Lt)):e.texImage2D(n.TEXTURE_2D,0,It,ft.width,ft.height,0,Rt,Lt,ft.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,It,Xt[0].width,Xt[0].height,ft.depth);for(let pt=0,lt=Xt.length;pt<lt;pt++)if(xt=Xt[pt],y.format!==Zn)if(Rt!==null)if(F){if(ht)if(y.layerUpdates.size>0){const Ut=am(xt.width,xt.height,y.format,y.type);for(const qt of y.layerUpdates){const ge=xt.data.subarray(qt*Ut/xt.data.BYTES_PER_ELEMENT,(qt+1)*Ut/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,qt,xt.width,xt.height,1,Rt,ge)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,xt.width,xt.height,ft.depth,Rt,xt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pt,It,xt.width,xt.height,ft.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ht&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,xt.width,xt.height,ft.depth,Rt,Lt,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,pt,It,xt.width,xt.height,ft.depth,0,Rt,Lt,xt.data)}else{F&&Mt&&e.texStorage2D(n.TEXTURE_2D,Dt,It,Xt[0].width,Xt[0].height);for(let pt=0,lt=Xt.length;pt<lt;pt++)xt=Xt[pt],y.format!==Zn?Rt!==null?F?ht&&e.compressedTexSubImage2D(n.TEXTURE_2D,pt,0,0,xt.width,xt.height,Rt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,pt,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ht&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,xt.width,xt.height,Rt,Lt,xt.data):e.texImage2D(n.TEXTURE_2D,pt,It,xt.width,xt.height,0,Rt,Lt,xt.data)}else if(y.isDataArrayTexture)if(F){if(Mt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Dt,It,ft.width,ft.height,ft.depth),ht)if(y.layerUpdates.size>0){const pt=am(ft.width,ft.height,y.format,y.type);for(const lt of y.layerUpdates){const Ut=ft.data.subarray(lt*pt/ft.data.BYTES_PER_ELEMENT,(lt+1)*pt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,lt,ft.width,ft.height,1,Rt,Lt,Ut)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Rt,Lt,ft.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,ft.width,ft.height,ft.depth,0,Rt,Lt,ft.data);else if(y.isData3DTexture)F?(Mt&&e.texStorage3D(n.TEXTURE_3D,Dt,It,ft.width,ft.height,ft.depth),ht&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Rt,Lt,ft.data)):e.texImage3D(n.TEXTURE_3D,0,It,ft.width,ft.height,ft.depth,0,Rt,Lt,ft.data);else if(y.isFramebufferTexture){if(Mt)if(F)e.texStorage2D(n.TEXTURE_2D,Dt,It,ft.width,ft.height);else{let pt=ft.width,lt=ft.height;for(let Ut=0;Ut<Dt;Ut++)e.texImage2D(n.TEXTURE_2D,Ut,It,pt,lt,0,Rt,Lt,null),pt>>=1,lt>>=1}}else if(Xt.length>0){if(F&&Mt){const pt=St(Xt[0]);e.texStorage2D(n.TEXTURE_2D,Dt,It,pt.width,pt.height)}for(let pt=0,lt=Xt.length;pt<lt;pt++)xt=Xt[pt],F?ht&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Rt,Lt,xt):e.texImage2D(n.TEXTURE_2D,pt,It,Rt,Lt,xt);y.generateMipmaps=!1}else if(F){if(Mt){const pt=St(ft);e.texStorage2D(n.TEXTURE_2D,Dt,It,pt.width,pt.height)}ht&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Rt,Lt,ft)}else e.texImage2D(n.TEXTURE_2D,0,It,Rt,Lt,ft);m(y)&&p(q),Tt.__version=X.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function B(w,y,N){if(y.image.length!==6)return;const q=Zt(w,y),it=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+N);const X=i.get(it);if(it.version!==X.__version||q===!0){e.activeTexture(n.TEXTURE0+N);const Tt=ie.getPrimaries(ie.workingColorSpace),_t=y.colorSpace===sr?null:ie.getPrimaries(y.colorSpace),At=y.colorSpace===sr||Tt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ct=y.isCompressedTexture||y.image[0].isCompressedTexture,ft=y.image[0]&&y.image[0].isDataTexture,Rt=[];for(let lt=0;lt<6;lt++)!Ct&&!ft?Rt[lt]=_(y.image[lt],!0,r.maxCubemapSize):Rt[lt]=ft?y.image[lt].image:y.image[lt],Rt[lt]=tt(y,Rt[lt]);const Lt=Rt[0],It=s.convert(y.format,y.colorSpace),xt=s.convert(y.type),Xt=S(y.internalFormat,It,xt,y.colorSpace),F=y.isVideoTexture!==!0,Mt=X.__version===void 0||q===!0,ht=it.dataReady;let Dt=b(y,Lt);Nt(n.TEXTURE_CUBE_MAP,y);let pt;if(Ct){F&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Xt,Lt.width,Lt.height);for(let lt=0;lt<6;lt++){pt=Rt[lt].mipmaps;for(let Ut=0;Ut<pt.length;Ut++){const qt=pt[Ut];y.format!==Zn?It!==null?F?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,qt.width,qt.height,It,qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,Xt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,qt.width,qt.height,It,xt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,Xt,qt.width,qt.height,0,It,xt,qt.data)}}}else{if(pt=y.mipmaps,F&&Mt){pt.length>0&&Dt++;const lt=St(Rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Xt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ft){F?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Rt[lt].width,Rt[lt].height,It,xt,Rt[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Xt,Rt[lt].width,Rt[lt].height,0,It,xt,Rt[lt].data);for(let Ut=0;Ut<pt.length;Ut++){const ge=pt[Ut].image[lt].image;F?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,ge.width,ge.height,It,xt,ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,Xt,ge.width,ge.height,0,It,xt,ge.data)}}else{F?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,It,xt,Rt[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Xt,It,xt,Rt[lt]);for(let Ut=0;Ut<pt.length;Ut++){const qt=pt[Ut];F?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,It,xt,qt.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,Xt,It,xt,qt.image[lt])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),X.__version=it.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ot(w,y,N,q,it,X){const Tt=s.convert(N.format,N.colorSpace),_t=s.convert(N.type),At=S(N.internalFormat,Tt,_t,N.colorSpace),Ct=i.get(y),ft=i.get(N);if(ft.__renderTarget=y,!Ct.__hasExternalTextures){const Rt=Math.max(1,y.width>>X),Lt=Math.max(1,y.height>>X);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,X,At,Rt,Lt,y.depth,0,Tt,_t,null):e.texImage2D(it,X,At,Rt,Lt,0,Tt,_t,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),at(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,it,ft.__webglTexture,0,nt(y)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,it,ft.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(w,y,N){if(n.bindRenderbuffer(n.RENDERBUFFER,w),y.depthBuffer){const q=y.depthTexture,it=q&&q.isDepthTexture?q.type:null,X=x(y.stencilBuffer,it),Tt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=nt(y);at(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,X,y.width,y.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,X,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,X,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,w)}else{const q=y.textures;for(let it=0;it<q.length;it++){const X=q[it],Tt=s.convert(X.format,X.colorSpace),_t=s.convert(X.type),At=S(X.internalFormat,Tt,_t,X.colorSpace),Ct=nt(y);N&&at(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct,At,y.width,y.height):at(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct,At,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,At,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ct(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q(y.depthTexture,0);const it=q.__webglTexture,X=nt(y);if(y.depthTexture.format===Zo)at(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(y.depthTexture.format===Jo)at(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function zt(w){const y=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const it=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",it)};q.addEventListener("dispose",it),y.__depthDisposeCallback=it}y.__boundDepthTexture=q}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const q=w.texture.mipmaps;q&&q.length>0?ct(y.__webglFramebuffer[0],w):ct(y.__webglFramebuffer,w)}else if(N){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),ut(y.__webglDepthbuffer[q],w,!1);else{const it=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,X)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ut(y.__webglDepthbuffer,w,!1);else{const it=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function D(w,y,N){const q=i.get(w);y!==void 0&&ot(q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&zt(w)}function L(w){const y=w.texture,N=i.get(w),q=i.get(y);w.addEventListener("dispose",C);const it=w.textures,X=w.isWebGLCubeRenderTarget===!0,Tt=it.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[_t]=[];for(let At=0;At<y.mipmaps.length;At++)N.__webglFramebuffer[_t][At]=n.createFramebuffer()}else N.__webglFramebuffer[_t]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let _t=0;_t<y.mipmaps.length;_t++)N.__webglFramebuffer[_t]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let _t=0,At=it.length;_t<At;_t++){const Ct=i.get(it[_t]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&at(w)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let _t=0;_t<it.length;_t++){const At=it[_t];N.__webglColorRenderbuffer[_t]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[_t]);const Ct=s.convert(At.format,At.colorSpace),ft=s.convert(At.type),Rt=S(At.internalFormat,Ct,ft,At.colorSpace,w.isXRRenderTarget===!0),Lt=nt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,Rt,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,N.__webglColorRenderbuffer[_t])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),ut(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,y);for(let _t=0;_t<6;_t++)if(y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)ot(N.__webglFramebuffer[_t][At],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At);else ot(N.__webglFramebuffer[_t],w,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(y)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let _t=0,At=it.length;_t<At;_t++){const Ct=it[_t],ft=i.get(Ct);e.bindTexture(n.TEXTURE_2D,ft.__webglTexture),Nt(n.TEXTURE_2D,Ct),ot(N.__webglFramebuffer,w,Ct,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,0),m(Ct)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let _t=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_t=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,q.__webglTexture),Nt(_t,y),y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)ot(N.__webglFramebuffer[At],w,y,n.COLOR_ATTACHMENT0,_t,At);else ot(N.__webglFramebuffer,w,y,n.COLOR_ATTACHMENT0,_t,0);m(y)&&p(_t),e.unbindTexture()}w.depthBuffer&&zt(w)}function T(w){const y=w.textures;for(let N=0,q=y.length;N<q;N++){const it=y[N];if(m(it)){const X=M(w),Tt=i.get(it).__webglTexture;e.bindTexture(X,Tt),p(X),e.unbindTexture()}}}const st=[],Z=[];function K(w){if(w.samples>0){if(at(w)===!1){const y=w.textures,N=w.width,q=w.height;let it=n.COLOR_BUFFER_BIT;const X=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(w),_t=y.length>1;if(_t)for(let Ct=0;Ct<y.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const At=w.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Ct=0;Ct<y.length;Ct++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),_t){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ct]);const ft=i.get(y[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ft,0)}n.blitFramebuffer(0,0,N,q,0,0,N,q,it,n.NEAREST),l===!0&&(st.length=0,Z.length=0,st.push(n.COLOR_ATTACHMENT0+Ct),w.depthBuffer&&w.resolveDepthBuffer===!1&&(st.push(X),Z.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_t)for(let Ct=0;Ct<y.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[Ct]);const ft=i.get(y[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function nt(w){return Math.min(r.maxSamples,w.samples)}function at(w){const y=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function et(w){const y=o.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function tt(w,y){const N=w.colorSpace,q=w.format,it=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==$s&&N!==sr&&(ie.getTransfer(N)===ce?(q!==Zn||it!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function St(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=Q,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=D,this.setupRenderTarget=L,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=at}function aC(n,t){function e(i,r=sr){let s;const o=ie.getTransfer(r);if(i===gi)return n.UNSIGNED_BYTE;if(i===Rh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ch)return n.UNSIGNED_SHORT_5_5_5_1;if(i===a0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===s0)return n.BYTE;if(i===o0)return n.SHORT;if(i===$o)return n.UNSIGNED_SHORT;if(i===wh)return n.INT;if(i===es)return n.UNSIGNED_INT;if(i===Oi)return n.FLOAT;if(i===ha)return n.HALF_FLOAT;if(i===l0)return n.ALPHA;if(i===c0)return n.RGB;if(i===Zn)return n.RGBA;if(i===Zo)return n.DEPTH_COMPONENT;if(i===Jo)return n.DEPTH_STENCIL;if(i===u0)return n.RED;if(i===Ph)return n.RED_INTEGER;if(i===f0)return n.RG;if(i===Dh)return n.RG_INTEGER;if(i===Lh)return n.RGBA_INTEGER;if(i===ol||i===al||i===ll||i===cl)if(o===ce)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hf||i===df||i===pf||i===mf)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===df)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_f||i===gf||i===vf)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_f||i===gf)return o===ce?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xf||i===yf||i===Sf||i===Mf||i===Ef||i===Tf||i===bf||i===Af||i===wf||i===Rf||i===Cf||i===Pf||i===Df||i===Lf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ef)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Af)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Df)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lf)return o===ce?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ul||i===If||i===Uf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ul)return o===ce?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===If)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===h0||i===Of||i===Nf||i===Ff)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ul)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Of)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ff)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const lC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new on,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new gr({vertexShader:lC,fragmentShader:cC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Fi(new _c(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fC extends os{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new uC,m=e.getContextAttributes();let p=null,M=null;const S=[],x=[],b=new Gt;let R=null;const C=new Tn;C.viewport=new fe;const P=new Tn;P.viewport=new fe;const v=[C,P],E=new Db;let I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let dt=S[rt];return dt===void 0&&(dt=new uu,S[rt]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(rt){let dt=S[rt];return dt===void 0&&(dt=new uu,S[rt]=dt),dt.getGripSpace()},this.getHand=function(rt){let dt=S[rt];return dt===void 0&&(dt=new uu,S[rt]=dt),dt.getHandSpace()};function O(rt){const dt=x.indexOf(rt.inputSource);if(dt===-1)return;const wt=S[dt];wt!==void 0&&(wt.update(rt.inputSource,rt.frame,c||o),wt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Q);for(let rt=0;rt<S.length;rt++){const dt=x[rt];dt!==null&&(x[rt]=null,S[rt].disconnect(dt))}I=null,U=null,_.reset(),t.setRenderTarget(p),d=null,h=null,f=null,r=null,M=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){s=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(rt){if(r=rt,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,B=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=m.stencil?Jo:Zo,B=m.stencil?Ko:es);const ut={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(ut),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new is(h.textureWidth,h.textureHeight,{format:Zn,type:gi,depthTexture:new w0(h.textureWidth,h.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const wt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,wt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new is(d.framebufferWidth,d.framebufferHeight,{format:Zn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Zt.setContext(r),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Q(rt){for(let dt=0;dt<rt.removed.length;dt++){const wt=rt.removed[dt],B=x.indexOf(wt);B>=0&&(x[B]=null,S[B].disconnect(wt))}for(let dt=0;dt<rt.added.length;dt++){const wt=rt.added[dt];let B=x.indexOf(wt);if(B===-1){for(let ut=0;ut<S.length;ut++)if(ut>=x.length){x.push(wt),B=ut;break}else if(x[ut]===null){x[ut]=wt,B=ut;break}if(B===-1)break}const ot=S[B];ot&&ot.connect(wt)}}const V=new z,j=new z;function G(rt,dt,wt){V.setFromMatrixPosition(dt.matrixWorld),j.setFromMatrixPosition(wt.matrixWorld);const B=V.distanceTo(j),ot=dt.projectionMatrix.elements,ut=wt.projectionMatrix.elements,ct=ot[14]/(ot[10]-1),zt=ot[14]/(ot[10]+1),D=(ot[9]+1)/ot[5],L=(ot[9]-1)/ot[5],T=(ot[8]-1)/ot[0],st=(ut[8]+1)/ut[0],Z=ct*T,K=ct*st,nt=B/(-T+st),at=nt*-T;if(dt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(at),rt.translateZ(nt),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),ot[10]===-1)rt.projectionMatrix.copy(dt.projectionMatrix),rt.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const et=ct+nt,tt=zt+nt,St=Z-at,w=K+(B-at),y=D*zt/tt*et,N=L*zt/tt*et;rt.projectionMatrix.makePerspective(St,w,y,N,et,tt),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function gt(rt,dt){dt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(dt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(r===null)return;let dt=rt.near,wt=rt.far;_.texture!==null&&(_.depthNear>0&&(dt=_.depthNear),_.depthFar>0&&(wt=_.depthFar)),E.near=P.near=C.near=dt,E.far=P.far=C.far=wt,(I!==E.near||U!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,U=E.far),C.layers.mask=rt.layers.mask|2,P.layers.mask=rt.layers.mask|4,E.layers.mask=C.layers.mask|P.layers.mask;const B=rt.parent,ot=E.cameras;gt(E,B);for(let ut=0;ut<ot.length;ut++)gt(ot[ut],B);ot.length===2?G(E,C,P):E.projectionMatrix.copy(C.projectionMatrix),vt(rt,E,B)};function vt(rt,dt,wt){wt===null?rt.matrix.copy(dt.matrixWorld):(rt.matrix.copy(wt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(dt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(dt.projectionMatrix),rt.projectionMatrixInverse.copy(dt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Ll*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(rt){l=rt,h!==null&&(h.fixedFoveation=rt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=rt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let bt=null;function Nt(rt,dt){if(u=dt.getViewerPose(c||o),g=dt,u!==null){const wt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let B=!1;wt.length!==E.cameras.length&&(E.cameras.length=0,B=!0);for(let ct=0;ct<wt.length;ct++){const zt=wt[ct];let D=null;if(d!==null)D=d.getViewport(zt);else{const T=f.getViewSubImage(h,zt);D=T.viewport,ct===0&&(t.setRenderTargetTextures(M,T.colorTexture,T.depthStencilTexture),t.setRenderTarget(M))}let L=v[ct];L===void 0&&(L=new Tn,L.layers.enable(ct),L.viewport=new fe,v[ct]=L),L.matrix.fromArray(zt.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(zt.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(D.x,D.y,D.width,D.height),ct===0&&(E.matrix.copy(L.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),B===!0&&E.cameras.push(L)}const ot=r.enabledFeatures;if(ot&&ot.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ct=f.getDepthInformation(wt[0]);ct&&ct.isValid&&ct.texture&&_.init(t,ct,r.renderState)}}for(let wt=0;wt<S.length;wt++){const B=x[wt],ot=S[wt];B!==null&&ot!==void 0&&ot.update(B,dt,c||o)}bt&&bt(rt,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),g=null}const Zt=new L0;Zt.setAnimationLoop(Nt),this.setAnimationLoop=function(rt){bt=rt},this.dispose=function(){}}}const Ir=new ni,hC=new ve;function dC(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,S0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,Ir.copy(x),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),m.envMapRotation.value.setFromMatrix4(hC.makeRotationFromEuler(Ir)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pC(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const x=S.program;i.uniformBlockBinding(M,x)}function c(M,S){let x=r[M.id];x===void 0&&(g(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",m));const b=S.program;i.updateUBOMapping(M,b);const R=t.render.frame;s[M.id]!==R&&(h(M),s[M.id]=R)}function u(M){const S=f();M.__bindingPointIndex=S;const x=n.createBuffer(),b=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,b,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,x),x}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const S=r[M.id],x=M.uniforms,b=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,C=x.length;R<C;R++){const P=Array.isArray(x[R])?x[R]:[x[R]];for(let v=0,E=P.length;v<E;v++){const I=P[v];if(d(I,R,v,b)===!0){const U=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let Q=0;Q<O.length;Q++){const V=O[Q],j=_(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,U+W,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,S,x,b){const R=M.value,C=S+"_"+x;if(b[C]===void 0)return typeof R=="number"||typeof R=="boolean"?b[C]=R:b[C]=R.clone(),!0;{const P=b[C];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return b[C]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(M){const S=M.uniforms;let x=0;const b=16;for(let C=0,P=S.length;C<P;C++){const v=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,I=v.length;E<I;E++){const U=v[E],O=Array.isArray(U.value)?U.value:[U.value];for(let W=0,Q=O.length;W<Q;W++){const V=O[W],j=_(V),G=x%b,gt=G%j.boundary,vt=G+gt;x+=gt,vt!==0&&b-vt<j.storage&&(x+=b-vt),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=j.storage}}}const R=x%b;return R>0&&(x+=b-R),M.__size=x,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class BD{constructor(t={}){const{canvas:e=jT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=Bn;let R=0,C=0,P=null,v=-1,E=null;const I=new fe,U=new fe;let O=null;const W=new Kt(0);let Q=0,V=e.width,j=e.height,G=1,gt=null,vt=null;const bt=new fe(0,0,V,j),Nt=new fe(0,0,V,j);let Zt=!1;const rt=new Oh;let dt=!1,wt=!1;const B=new ve,ot=new ve,ut=new z,ct=new fe,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function L(){return P===null?G:1}let T=i;function st(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bh}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),T===null){const k="webgl2";if(T=st(k,A),T===null)throw st(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,K,nt,at,et,tt,St,w,y,N,q,it,X,Tt,_t,At,Ct,ft,Rt,Lt,It,xt,Xt,F;function Mt(){Z=new bR(T),Z.init(),xt=new aC(T,Z),K=new vR(T,Z,t,xt),nt=new sC(T,Z),K.reverseDepthBuffer&&h&&nt.buffers.depth.setReversed(!0),at=new RR(T),et=new q1,tt=new oC(T,Z,nt,et,K,xt,at),St=new yR(x),w=new TR(x),y=new Ub(T),Xt=new _R(T,y),N=new AR(T,y,at,Xt),q=new PR(T,N,y,at),Rt=new CR(T,K,tt),At=new xR(et),it=new X1(x,St,w,Z,K,Xt,At),X=new dC(x,et),Tt=new Y1,_t=new tC(Z),ft=new mR(x,St,w,nt,q,d,l),Ct=new iC(x,q,K),F=new pC(T,at,K,nt),Lt=new gR(T,Z,at),It=new wR(T,Z,at),at.programs=it.programs,x.capabilities=K,x.extensions=Z,x.properties=et,x.renderLists=Tt,x.shadowMap=Ct,x.state=nt,x.info=at}Mt();const ht=new fC(x,T);this.xr=ht,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(V,j,!1))},this.getSize=function(A){return A.set(V,j)},this.setSize=function(A,k,Y=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,j=k,e.width=Math.floor(A*G),e.height=Math.floor(k*G),Y===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(V*G,j*G).floor()},this.setDrawingBufferSize=function(A,k,Y){V=A,j=k,G=Y,e.width=Math.floor(A*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,k,Y,$){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,k,Y,$),nt.viewport(I.copy(bt).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(Nt)},this.setScissor=function(A,k,Y,$){A.isVector4?Nt.set(A.x,A.y,A.z,A.w):Nt.set(A,k,Y,$),nt.scissor(U.copy(Nt).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(A){nt.setScissorTest(Zt=A)},this.setOpaqueSort=function(A){gt=A},this.setTransparentSort=function(A){vt=A},this.getClearColor=function(A){return A.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,Y=!0){let $=0;if(A){let H=!1;if(P!==null){const mt=P.texture.format;H=mt===Lh||mt===Dh||mt===Ph}if(H){const mt=P.texture.type,Et=mt===gi||mt===es||mt===$o||mt===Ko||mt===Rh||mt===Ch,Ot=ft.getClearColor(),Pt=ft.getClearAlpha(),Ht=Ot.r,Vt=Ot.g,Ft=Ot.b;Et?(g[0]=Ht,g[1]=Vt,g[2]=Ft,g[3]=Pt,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Ht,_[1]=Vt,_[2]=Ft,_[3]=Pt,T.clearBufferiv(T.COLOR,0,_))}else $|=T.COLOR_BUFFER_BIT}k&&($|=T.DEPTH_BUFFER_BIT),Y&&($|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),Tt.dispose(),_t.dispose(),et.dispose(),St.dispose(),w.dispose(),q.dispose(),Xt.dispose(),F.dispose(),it.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",rd),ht.removeEventListener("sessionend",sd),Mr.stop()};function Dt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=at.autoReset,k=Ct.enabled,Y=Ct.autoUpdate,$=Ct.needsUpdate,H=Ct.type;Mt(),at.autoReset=A,Ct.enabled=k,Ct.autoUpdate=Y,Ct.needsUpdate=$,Ct.type=H}function lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ut(A){const k=A.target;k.removeEventListener("dispose",Ut),qt(k)}function qt(A){ge(A),et.remove(A)}function ge(A){const k=et.get(A).programs;k!==void 0&&(k.forEach(function(Y){it.releaseProgram(Y)}),A.isShaderMaterial&&it.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Y,$,H,mt){k===null&&(k=zt);const Et=H.isMesh&&H.matrixWorld.determinant()<0,Ot=Fv(A,k,Y,$,H);nt.setMaterial($,Et);let Pt=Y.index,Ht=1;if($.wireframe===!0){if(Pt=N.getWireframeAttribute(Y),Pt===void 0)return;Ht=2}const Vt=Y.drawRange,Ft=Y.attributes.position;let Qt=Vt.start*Ht,le=(Vt.start+Vt.count)*Ht;mt!==null&&(Qt=Math.max(Qt,mt.start*Ht),le=Math.min(le,(mt.start+mt.count)*Ht)),Pt!==null?(Qt=Math.max(Qt,0),le=Math.min(le,Pt.count)):Ft!=null&&(Qt=Math.max(Qt,0),le=Math.min(le,Ft.count));const Se=le-Qt;if(Se<0||Se===1/0)return;Xt.setup(H,$,Ot,Y,Pt);let be,ne=Lt;if(Pt!==null&&(be=y.get(Pt),ne=It,ne.setIndex(be)),H.isMesh)$.wireframe===!0?(nt.setLineWidth($.wireframeLinewidth*L()),ne.setMode(T.LINES)):ne.setMode(T.TRIANGLES);else if(H.isLine){let kt=$.linewidth;kt===void 0&&(kt=1),nt.setLineWidth(kt*L()),H.isLineSegments?ne.setMode(T.LINES):H.isLineLoop?ne.setMode(T.LINE_LOOP):ne.setMode(T.LINE_STRIP)}else H.isPoints?ne.setMode(T.POINTS):H.isSprite&&ne.setMode(T.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ne.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const kt=H._multiDrawStarts,Ve=H._multiDrawCounts,re=H._multiDrawCount,qn=Pt?y.get(Pt).bytesPerElement:1,ls=et.get($).currentProgram.getUniforms();for(let xn=0;xn<re;xn++)ls.setValue(T,"_gl_DrawID",xn),ne.render(kt[xn]/qn,Ve[xn])}else if(H.isInstancedMesh)ne.renderInstances(Qt,Se,H.count);else if(Y.isInstancedBufferGeometry){const kt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ve=Math.min(Y.instanceCount,kt);ne.renderInstances(Qt,Se,Ve)}else ne.render(Qt,Se)};function ae(A,k,Y){A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,xa(A,k,Y),A.side=_r,A.needsUpdate=!0,xa(A,k,Y),A.side=Ui):xa(A,k,Y)}this.compile=function(A,k,Y=null){Y===null&&(Y=A),p=_t.get(Y),p.init(k),S.push(p),Y.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==Y&&A.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const $=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const mt=H.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const Ot=mt[Et];ae(Ot,Y,H),$.add(Ot)}else ae(mt,Y,H),$.add(mt)}),p=S.pop(),$},this.compileAsync=function(A,k,Y=null){const $=this.compile(A,k,Y);return new Promise(H=>{function mt(){if($.forEach(function(Et){et.get(Et).currentProgram.isReady()&&$.delete(Et)}),$.size===0){H(A);return}setTimeout(mt,10)}Z.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Xn=null;function xi(A){Xn&&Xn(A)}function rd(){Mr.stop()}function sd(){Mr.start()}const Mr=new L0;Mr.setAnimationLoop(xi),typeof self<"u"&&Mr.setContext(self),this.setAnimationLoop=function(A){Xn=A,ht.setAnimationLoop(A),A===null?Mr.stop():Mr.start()},ht.addEventListener("sessionstart",rd),ht.addEventListener("sessionend",sd),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(k),k=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,k,P),p=_t.get(A,S.length),p.init(k),S.push(p),ot.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),rt.setFromProjectionMatrix(ot),wt=this.localClippingEnabled,dt=At.init(this.clippingPlanes,wt),m=Tt.get(A,M.length),m.init(),M.push(m),ht.enabled===!0&&ht.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&Mc(mt,k,-1/0,x.sortObjects)}Mc(A,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(gt,vt),D=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,D&&ft.addToRenderList(m,A),this.info.render.frame++,dt===!0&&At.beginShadows();const Y=p.state.shadowsArray;Ct.render(Y,A,k),dt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const mt=k.cameras;if(H.length>0)for(let Et=0,Ot=mt.length;Et<Ot;Et++){const Pt=mt[Et];ad($,H,A,Pt)}D&&ft.render(A);for(let Et=0,Ot=mt.length;Et<Ot;Et++){const Pt=mt[Et];od(m,A,Pt,Pt.viewport)}}else H.length>0&&ad($,H,A,k),D&&ft.render(A),od(m,A,k);P!==null&&C===0&&(tt.updateMultisampleRenderTarget(P),tt.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,k),Xt.resetDefaultState(),v=-1,E=null,S.pop(),S.length>0?(p=S[S.length-1],dt===!0&&At.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Mc(A,k,Y,$){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||rt.intersectsSprite(A)){$&&ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);const Et=q.update(A),Ot=A.material;Ot.visible&&m.push(A,Et,Ot,Y,ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||rt.intersectsObject(A))){const Et=q.update(A),Ot=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ct.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),ct.copy(Et.boundingSphere.center)),ct.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(Ot)){const Pt=Et.groups;for(let Ht=0,Vt=Pt.length;Ht<Vt;Ht++){const Ft=Pt[Ht],Qt=Ot[Ft.materialIndex];Qt&&Qt.visible&&m.push(A,Et,Qt,Y,ct.z,Ft)}}else Ot.visible&&m.push(A,Et,Ot,Y,ct.z,null)}}const mt=A.children;for(let Et=0,Ot=mt.length;Et<Ot;Et++)Mc(mt[Et],k,Y,$)}function od(A,k,Y,$){const H=A.opaque,mt=A.transmissive,Et=A.transparent;p.setupLightsView(Y),dt===!0&&At.setGlobalState(x.clippingPlanes,Y),$&&nt.viewport(I.copy($)),H.length>0&&va(H,k,Y),mt.length>0&&va(mt,k,Y),Et.length>0&&va(Et,k,Y),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function ad(A,k,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new is(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?ha:gi,minFilter:Xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const mt=p.state.transmissionRenderTarget[$.id],Et=$.viewport||I;mt.setSize(Et.z*x.transmissionResolutionScale,Et.w*x.transmissionResolutionScale);const Ot=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(W),Q=x.getClearAlpha(),Q<1&&x.setClearColor(16777215,.5),x.clear(),D&&ft.render(Y);const Pt=x.toneMapping;x.toneMapping=fr;const Ht=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),dt===!0&&At.setGlobalState(x.clippingPlanes,$),va(A,Y,$),tt.updateMultisampleRenderTarget(mt),tt.updateRenderTargetMipmap(mt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Ft=0,Qt=k.length;Ft<Qt;Ft++){const le=k[Ft],Se=le.object,be=le.geometry,ne=le.material,kt=le.group;if(ne.side===Ui&&Se.layers.test($.layers)){const Ve=ne.side;ne.side=dn,ne.needsUpdate=!0,ld(Se,Y,$,be,ne,kt),ne.side=Ve,ne.needsUpdate=!0,Vt=!0}}Vt===!0&&(tt.updateMultisampleRenderTarget(mt),tt.updateRenderTargetMipmap(mt))}x.setRenderTarget(Ot),x.setClearColor(W,Q),Ht!==void 0&&($.viewport=Ht),x.toneMapping=Pt}function va(A,k,Y){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,mt=A.length;H<mt;H++){const Et=A[H],Ot=Et.object,Pt=Et.geometry,Ht=Et.group;let Vt=Et.material;Vt.allowOverride===!0&&$!==null&&(Vt=$),Ot.layers.test(Y.layers)&&ld(Ot,k,Y,Pt,Vt,Ht)}}function ld(A,k,Y,$,H,mt){A.onBeforeRender(x,k,Y,$,H,mt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,k,Y,$,A,mt),H.transparent===!0&&H.side===Ui&&H.forceSinglePass===!1?(H.side=dn,H.needsUpdate=!0,x.renderBufferDirect(Y,k,$,H,A,mt),H.side=_r,H.needsUpdate=!0,x.renderBufferDirect(Y,k,$,H,A,mt),H.side=Ui):x.renderBufferDirect(Y,k,$,H,A,mt),A.onAfterRender(x,k,Y,$,H,mt)}function xa(A,k,Y){k.isScene!==!0&&(k=zt);const $=et.get(A),H=p.state.lights,mt=p.state.shadowsArray,Et=H.state.version,Ot=it.getParameters(A,H.state,mt,k,Y),Pt=it.getProgramCacheKey(Ot);let Ht=$.programs;$.environment=A.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(A.isMeshStandardMaterial?w:St).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ht===void 0&&(A.addEventListener("dispose",Ut),Ht=new Map,$.programs=Ht);let Vt=Ht.get(Pt);if(Vt!==void 0){if($.currentProgram===Vt&&$.lightsStateVersion===Et)return ud(A,Ot),Vt}else Ot.uniforms=it.getUniforms(A),A.onBeforeCompile(Ot,x),Vt=it.acquireProgram(Ot,Pt),Ht.set(Pt,Vt),$.uniforms=Ot.uniforms;const Ft=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ft.clippingPlanes=At.uniform),ud(A,Ot),$.needsLights=zv(A),$.lightsStateVersion=Et,$.needsLights&&(Ft.ambientLightColor.value=H.state.ambient,Ft.lightProbe.value=H.state.probe,Ft.directionalLights.value=H.state.directional,Ft.directionalLightShadows.value=H.state.directionalShadow,Ft.spotLights.value=H.state.spot,Ft.spotLightShadows.value=H.state.spotShadow,Ft.rectAreaLights.value=H.state.rectArea,Ft.ltc_1.value=H.state.rectAreaLTC1,Ft.ltc_2.value=H.state.rectAreaLTC2,Ft.pointLights.value=H.state.point,Ft.pointLightShadows.value=H.state.pointShadow,Ft.hemisphereLights.value=H.state.hemi,Ft.directionalShadowMap.value=H.state.directionalShadowMap,Ft.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ft.spotShadowMap.value=H.state.spotShadowMap,Ft.spotLightMatrix.value=H.state.spotLightMatrix,Ft.spotLightMap.value=H.state.spotLightMap,Ft.pointShadowMap.value=H.state.pointShadowMap,Ft.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Vt,$.uniformsList=null,Vt}function cd(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=hl.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function ud(A,k){const Y=et.get(A);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Fv(A,k,Y,$,H){k.isScene!==!0&&(k=zt),tt.resetTextureUnits();const mt=k.fog,Et=$.isMeshStandardMaterial?k.environment:null,Ot=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:$s,Pt=($.isMeshStandardMaterial?w:St).get($.envMap||Et),Ht=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Vt=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ft=!!Y.morphAttributes.position,Qt=!!Y.morphAttributes.normal,le=!!Y.morphAttributes.color;let Se=fr;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Se=x.toneMapping);const be=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ne=be!==void 0?be.length:0,kt=et.get($),Ve=p.state.lights;if(dt===!0&&(wt===!0||A!==E)){const Je=A===E&&$.id===v;At.setState($,A,Je)}let re=!1;$.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ve.state.version||kt.outputColorSpace!==Ot||H.isBatchedMesh&&kt.batching===!1||!H.isBatchedMesh&&kt.batching===!0||H.isBatchedMesh&&kt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&kt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&kt.instancing===!1||!H.isInstancedMesh&&kt.instancing===!0||H.isSkinnedMesh&&kt.skinning===!1||!H.isSkinnedMesh&&kt.skinning===!0||H.isInstancedMesh&&kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&kt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&kt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&kt.instancingMorph===!1&&H.morphTexture!==null||kt.envMap!==Pt||$.fog===!0&&kt.fog!==mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==At.numPlanes||kt.numIntersection!==At.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Vt||kt.morphTargets!==Ft||kt.morphNormals!==Qt||kt.morphColors!==le||kt.toneMapping!==Se||kt.morphTargetsCount!==ne)&&(re=!0):(re=!0,kt.__version=$.version);let qn=kt.currentProgram;re===!0&&(qn=xa($,k,H));let ls=!1,xn=!1,oo=!1;const xe=qn.getUniforms(),In=kt.uniforms;if(nt.useProgram(qn.program)&&(ls=!0,xn=!0,oo=!0),$.id!==v&&(v=$.id,xn=!0),ls||E!==A){nt.buffers.depth.getReversed()?(B.copy(A.projectionMatrix),$T(B),KT(B),xe.setValue(T,"projectionMatrix",B)):xe.setValue(T,"projectionMatrix",A.projectionMatrix),xe.setValue(T,"viewMatrix",A.matrixWorldInverse);const an=xe.map.cameraPosition;an!==void 0&&an.setValue(T,ut.setFromMatrixPosition(A.matrixWorld)),K.logarithmicDepthBuffer&&xe.setValue(T,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&xe.setValue(T,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,xn=!0,oo=!0)}if(H.isSkinnedMesh){xe.setOptional(T,H,"bindMatrix"),xe.setOptional(T,H,"bindMatrixInverse");const Je=H.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),xe.setValue(T,"boneTexture",Je.boneTexture,tt))}H.isBatchedMesh&&(xe.setOptional(T,H,"batchingTexture"),xe.setValue(T,"batchingTexture",H._matricesTexture,tt),xe.setOptional(T,H,"batchingIdTexture"),xe.setValue(T,"batchingIdTexture",H._indirectTexture,tt),xe.setOptional(T,H,"batchingColorTexture"),H._colorsTexture!==null&&xe.setValue(T,"batchingColorTexture",H._colorsTexture,tt));const Un=Y.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Rt.update(H,Y,qn),(xn||kt.receiveShadow!==H.receiveShadow)&&(kt.receiveShadow=H.receiveShadow,xe.setValue(T,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(In.envMap.value=Pt,In.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(In.envMapIntensity.value=k.environmentIntensity),xn&&(xe.setValue(T,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Bv(In,oo),mt&&$.fog===!0&&X.refreshFogUniforms(In,mt),X.refreshMaterialUniforms(In,$,G,j,p.state.transmissionRenderTarget[A.id]),hl.upload(T,cd(kt),In,tt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(hl.upload(T,cd(kt),In,tt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&xe.setValue(T,"center",H.center),xe.setValue(T,"modelViewMatrix",H.modelViewMatrix),xe.setValue(T,"normalMatrix",H.normalMatrix),xe.setValue(T,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Je=$.uniformsGroups;for(let an=0,Ec=Je.length;an<Ec;an++){const Er=Je[an];F.update(Er,qn),F.bind(Er,qn)}}return qn}function Bv(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function zv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,k,Y){const $=et.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),et.get(A.texture).__webglTexture=k,et.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const Y=et.get(A);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const kv=T.createFramebuffer();this.setRenderTarget=function(A,k=0,Y=0){P=A,R=k,C=Y;let $=!0,H=null,mt=!1,Et=!1;if(A){const Pt=et.get(A);if(Pt.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(T.FRAMEBUFFER,null),$=!1;else if(Pt.__webglFramebuffer===void 0)tt.setupRenderTarget(A);else if(Pt.__hasExternalTextures)tt.rebindTextures(A,et.get(A.texture).__webglTexture,et.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ft=A.depthTexture;if(Pt.__boundDepthTexture!==Ft){if(Ft!==null&&et.has(Ft)&&(A.width!==Ft.image.width||A.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(A)}}const Ht=A.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Et=!0);const Vt=et.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?H=Vt[k][Y]:H=Vt[k],mt=!0):A.samples>0&&tt.useMultisampledRTT(A)===!1?H=et.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[Y]:H=Vt,I.copy(A.viewport),U.copy(A.scissor),O=A.scissorTest}else I.copy(bt).multiplyScalar(G).floor(),U.copy(Nt).multiplyScalar(G).floor(),O=Zt;if(Y!==0&&(H=kv),nt.bindFramebuffer(T.FRAMEBUFFER,H)&&$&&nt.drawBuffers(A,H),nt.viewport(I),nt.scissor(U),nt.setScissorTest(O),mt){const Pt=et.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pt.__webglTexture,Y)}else if(Et){const Pt=et.get(A.texture),Ht=k;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Pt.__webglTexture,Y,Ht)}else if(A!==null&&Y!==0){const Pt=et.get(A.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Pt.__webglTexture,Y)}v=-1},this.readRenderTargetPixels=function(A,k,Y,$,H,mt,Et,Ot=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){nt.bindFramebuffer(T.FRAMEBUFFER,Pt);try{const Ht=A.textures[Ot],Vt=Ht.format,Ft=Ht.type;if(!K.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-$&&Y>=0&&Y<=A.height-H&&(A.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ot),T.readPixels(k,Y,$,H,xt.convert(Vt),xt.convert(Ft),mt))}finally{const Ht=P!==null?et.get(P).__webglFramebuffer:null;nt.bindFramebuffer(T.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(A,k,Y,$,H,mt,Et,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=et.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt)if(k>=0&&k<=A.width-$&&Y>=0&&Y<=A.height-H){nt.bindFramebuffer(T.FRAMEBUFFER,Pt);const Ht=A.textures[Ot],Vt=Ht.format,Ft=Ht.type;if(!K.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Qt),T.bufferData(T.PIXEL_PACK_BUFFER,mt.byteLength,T.STREAM_READ),A.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ot),T.readPixels(k,Y,$,H,xt.convert(Vt),xt.convert(Ft),0);const le=P!==null?et.get(P).__webglFramebuffer:null;nt.bindFramebuffer(T.FRAMEBUFFER,le);const Se=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await YT(T,Se,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Qt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,mt),T.deleteBuffer(Qt),T.deleteSync(Se),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,Y=0){const $=Math.pow(2,-Y),H=Math.floor(A.image.width*$),mt=Math.floor(A.image.height*$),Et=k!==null?k.x:0,Ot=k!==null?k.y:0;tt.setTexture2D(A,0),T.copyTexSubImage2D(T.TEXTURE_2D,Y,0,0,Et,Ot,H,mt),nt.unbindTexture()};const Hv=T.createFramebuffer(),Vv=T.createFramebuffer();this.copyTextureToTexture=function(A,k,Y=null,$=null,H=0,mt=null){mt===null&&(H!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=H,H=0):mt=0);let Et,Ot,Pt,Ht,Vt,Ft,Qt,le,Se;const be=A.isCompressedTexture?A.mipmaps[mt]:A.image;if(Y!==null)Et=Y.max.x-Y.min.x,Ot=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,Ht=Y.min.x,Vt=Y.min.y,Ft=Y.isBox3?Y.min.z:0;else{const Un=Math.pow(2,-H);Et=Math.floor(be.width*Un),Ot=Math.floor(be.height*Un),A.isDataArrayTexture?Pt=be.depth:A.isData3DTexture?Pt=Math.floor(be.depth*Un):Pt=1,Ht=0,Vt=0,Ft=0}$!==null?(Qt=$.x,le=$.y,Se=$.z):(Qt=0,le=0,Se=0);const ne=xt.convert(k.format),kt=xt.convert(k.type);let Ve;k.isData3DTexture?(tt.setTexture3D(k,0),Ve=T.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(tt.setTexture2DArray(k,0),Ve=T.TEXTURE_2D_ARRAY):(tt.setTexture2D(k,0),Ve=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,k.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,k.unpackAlignment);const re=T.getParameter(T.UNPACK_ROW_LENGTH),qn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),ls=T.getParameter(T.UNPACK_SKIP_PIXELS),xn=T.getParameter(T.UNPACK_SKIP_ROWS),oo=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,be.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,be.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ht),T.pixelStorei(T.UNPACK_SKIP_ROWS,Vt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ft);const xe=A.isDataArrayTexture||A.isData3DTexture,In=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const Un=et.get(A),Je=et.get(k),an=et.get(Un.__renderTarget),Ec=et.get(Je.__renderTarget);nt.bindFramebuffer(T.READ_FRAMEBUFFER,an.__webglFramebuffer),nt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ec.__webglFramebuffer);for(let Er=0;Er<Pt;Er++)xe&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,et.get(A).__webglTexture,H,Ft+Er),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,et.get(k).__webglTexture,mt,Se+Er)),T.blitFramebuffer(Ht,Vt,Et,Ot,Qt,le,Et,Ot,T.DEPTH_BUFFER_BIT,T.NEAREST);nt.bindFramebuffer(T.READ_FRAMEBUFFER,null),nt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||et.has(A)){const Un=et.get(A),Je=et.get(k);nt.bindFramebuffer(T.READ_FRAMEBUFFER,Hv),nt.bindFramebuffer(T.DRAW_FRAMEBUFFER,Vv);for(let an=0;an<Pt;an++)xe?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Un.__webglTexture,H,Ft+an):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Un.__webglTexture,H),In?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Je.__webglTexture,mt,Se+an):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Je.__webglTexture,mt),H!==0?T.blitFramebuffer(Ht,Vt,Et,Ot,Qt,le,Et,Ot,T.COLOR_BUFFER_BIT,T.NEAREST):In?T.copyTexSubImage3D(Ve,mt,Qt,le,Se+an,Ht,Vt,Et,Ot):T.copyTexSubImage2D(Ve,mt,Qt,le,Ht,Vt,Et,Ot);nt.bindFramebuffer(T.READ_FRAMEBUFFER,null),nt.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else In?A.isDataTexture||A.isData3DTexture?T.texSubImage3D(Ve,mt,Qt,le,Se,Et,Ot,Pt,ne,kt,be.data):k.isCompressedArrayTexture?T.compressedTexSubImage3D(Ve,mt,Qt,le,Se,Et,Ot,Pt,ne,be.data):T.texSubImage3D(Ve,mt,Qt,le,Se,Et,Ot,Pt,ne,kt,be):A.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,mt,Qt,le,Et,Ot,ne,kt,be.data):A.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,mt,Qt,le,be.width,be.height,ne,be.data):T.texSubImage2D(T.TEXTURE_2D,mt,Qt,le,Et,Ot,ne,kt,be);T.pixelStorei(T.UNPACK_ROW_LENGTH,re),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,qn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,ls),T.pixelStorei(T.UNPACK_SKIP_ROWS,xn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,oo),mt===0&&k.generateMipmaps&&T.generateMipmap(Ve),nt.unbindTexture()},this.copyTextureToTexture3D=function(A,k,Y=null,$=null,H=0){return zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,Y,$,H)},this.initRenderTarget=function(A){et.get(A).__webglFramebuffer===void 0&&tt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?tt.setTextureCube(A,0):A.isData3DTexture?tt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?tt.setTexture2DArray(A,0):tt.setTexture2D(A,0),nt.unbindTexture()},this.resetState=function(){R=0,C=0,P=null,nt.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const Lm={type:"change"},zh={type:"start"},F0={type:"end"},Ka=new mc,Im=new rr,mC=Math.cos(70*qT.DEG2RAD),Oe=new z,cn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Su=1e-6;class zD extends Lb{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fs.ROTATE,MIDDLE:Fs.DOLLY,RIGHT:Fs.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new ns,this._lastTargetPosition=new z,this._quat=new ns().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new om,this._sphericalDelta=new om,this._scale=1,this._panOffset=new z,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new z,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gC.bind(this),this._onPointerDown=_C.bind(this),this._onPointerUp=vC.bind(this),this._onContextMenu=bC.bind(this),this._onMouseWheel=SC.bind(this),this._onKeyDown=MC.bind(this),this._onTouchStart=EC.bind(this),this._onTouchMove=TC.bind(this),this._onMouseDown=xC.bind(this),this._onMouseMove=yC.bind(this),this._interceptControlDown=AC.bind(this),this._interceptControlUp=wC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Lm),this.update(),this.state=ue.NONE}update(t=null){const e=this.object.position;Oe.copy(e).sub(this.target),Oe.applyQuaternion(this._quat),this._spherical.setFromVector3(Oe),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),r<-Math.PI?r+=cn:r>Math.PI&&(r-=cn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Oe.setFromSpherical(this._spherical),Oe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Oe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Oe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Oe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ka.origin.copy(this.object.position),Ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ka.direction))<mC?this.object.lookAt(this.target):(Im.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ka.intersectPlane(Im,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Su||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Su||this._lastTargetPosition.distanceToSquared(this.target)>Su?(this.dispatchEvent(Lm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?cn/60*this.autoRotateSpeed*t:cn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Oe.setFromMatrixColumn(e,0),Oe.multiplyScalar(-t),this._panOffset.add(Oe)}_panUp(t,e){this.screenSpacePanning===!0?Oe.setFromMatrixColumn(e,1):(Oe.setFromMatrixColumn(e,0),Oe.crossVectors(this.object.up,Oe)),Oe.multiplyScalar(t),this._panOffset.add(Oe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Oe.copy(r).sub(this.target);let s=Oe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _C(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function gC(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function vC(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(F0),this.state=ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xC(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ue.DOLLY;break;case Fs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}break;case Fs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(zh)}function yC(n){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function SC(n){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(n.preventDefault(),this.dispatchEvent(zh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(F0))}function MC(n){this.enabled!==!1&&this._handleKeyDown(n)}function EC(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ue.TOUCH_ROTATE;break;case Rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ue.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(zh)}function TC(n){switch(this._trackPointer(n),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ue.NONE}}function bC(n){this.enabled!==!1&&n.preventDefault()}function AC(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wC(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function B0(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Cn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zs={duration:.5,overwrite:!1,delay:0},kh,We,ye,zn=1e8,pe=1/zn,kf=Math.PI*2,RC=kf/4,CC=0,z0=Math.sqrt,PC=Math.cos,DC=Math.sin,He=function(t){return typeof t=="string"},Ae=function(t){return typeof t=="function"},Vi=function(t){return typeof t=="number"},Hh=function(t){return typeof t>"u"},vi=function(t){return typeof t=="object"},pn=function(t){return t!==!1},Vh=function(){return typeof window<"u"},Za=function(t){return Ae(t)||He(t)},k0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ze=Array.isArray,Hf=/(?:-?\.?\d|\.)+/gi,H0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,V0=/[+-]=-?[.\d]+/,G0=/[^,'"\[\]\s]+/gi,LC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Me,ai,Vf,Gh,Pn={},Nl={},W0,X0=function(t){return(Nl=Js(t,Pn))&&vn},Wh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Qo=function(t,e){return!e&&console.warn(t)},q0=function(t,e){return t&&(Pn[t]=e)&&Nl&&(Nl[t]=e)||Pn},ta=function(){return 0},IC={suppressEvents:!0,isStart:!0,kill:!1},dl={suppressEvents:!0,kill:!1},UC={suppressEvents:!0},Xh={},hr=[],Gf={},j0,En={},Eu={},Um=30,pl=[],qh="",jh=function(t){var e=t[0],i,r;if(vi(e)||Ae(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=pl.length;r--&&!pl[r].targetTest(e););i=pl[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new gv(t[r],i)))||t.splice(r,1);return t},Kr=function(t){return t._gsap||jh(kn(t))[0]._gsap},Y0=function(t,e,i){return(i=t[e])&&Ae(i)?t[e]():Hh(i)&&t.getAttribute&&t.getAttribute(e)||i},mn=function(t,e){return(t=t.split(",")).forEach(e)||t},Re=function(t){return Math.round(t*1e5)/1e5||0},De=function(t){return Math.round(t*1e7)/1e7||0},Hs=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},OC=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},Fl=function(){var t=hr.length,e=hr.slice(0),i,r;for(Gf={},hr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Yh=function(t){return!!(t._initted||t._startAt||t.add)},$0=function(t,e,i,r){hr.length&&!We&&Fl(),t.render(e,i,!!(We&&e<0&&Yh(t))),hr.length&&!We&&Fl()},K0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(G0).length<2?e:He(t)?t.trim():t},Z0=function(t){return t},Dn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},NC=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Js=function(t,e){for(var i in e)t[i]=e[i];return t},Om=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=vi(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},Bl=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},No=function(t){var e=t.parent||Me,i=t.keyframes?NC(Ze(t.keyframes)):Dn;if(pn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},FC=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},J0=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},xc=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},vr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Zr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},BC=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Wf=function(t,e,i,r){return t._startAt&&(We?t._startAt.revert(dl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},zC=function n(t){return!t||t._ts&&n(t.parent)},Nm=function(t){return t._repeat?Qs(t._tTime,t=t.duration()+t._rDelay)*t:0},Qs=function(t,e){var i=Math.floor(t=De(t/e));return t&&i===t?i-1:i},zl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},yc=function(t){return t._end=De(t._start+(t._tDur/Math.abs(t._ts||t._rts||pe)||0))},Sc=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=De(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),yc(t),i._dirty||Zr(i,t)),t},Q0=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=zl(t.rawTime(),e),(!e._dur||ga(0,e.totalDuration(),i)-e._tTime>pe)&&e.render(i,!0)),Zr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-pe}},fi=function(t,e,i,r){return e.parent&&vr(e),e._start=De((Vi(i)?i:i||t!==Me?Fn(t,i,e):t._time)+e._delay),e._end=De(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),J0(t,e,"_first","_last",t._sort?"_start":0),Xf(e)||(t._recent=e),r||Q0(t,e),t._ts<0&&Sc(t,t._tTime),t},tv=function(t,e){return(Pn.ScrollTrigger||Wh("scrollTrigger",e))&&Pn.ScrollTrigger.create(e,t)},ev=function(t,e,i,r,s){if(Kh(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!We&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&j0!==An.frame)return hr.push(t),t._lazy=[s,r],1},kC=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},Xf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},HC=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&kC(t)&&!(!t._initted&&Xf(t))||(t._ts<0||t._dp._ts<0)&&!Xf(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=ga(0,t._tDur,e),u=Qs(l,a),t._yoyo&&u&1&&(o=1-o),u!==Qs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||We||r||t._zTime===pe||!e&&t._zTime){if(!t._initted&&ev(t,e,r,i,l))return;for(f=t._zTime,t._zTime=e||(i?pe:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Wf(t,e,i,!0),t._onUpdate&&!i&&Rn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Rn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&vr(t,1),!i&&!We&&(Rn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},VC=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},to=function(t,e,i,r){var s=t._repeat,o=De(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:De(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Sc(t,t._tTime=t._tDur*a),t.parent&&yc(t),i||Zr(t.parent,t),t},Fm=function(t){return t instanceof rn?Zr(t):to(t,t._dur)},GC={_start:0,endTime:ta,totalDuration:ta},Fn=function n(t,e,i){var r=t.labels,s=t._recent||GC,o=t.duration()>=zn?s.endTime(!1):t._dur,a,l,c;return He(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Ze(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},Fo=function(t,e,i){var r=Vi(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=pn(l.vars.inherit)&&l.parent;o.immediateRender=pn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Pe(e[0],o,e[s+1])},Sr=function(t,e){return t||t===0?e(t):e},ga=function(t,e,i){return i<t?t:i>e?e:i},Ke=function(t,e){return!He(t)||!(e=LC.exec(t))?"":e[1]},WC=function(t,e,i){return Sr(i,function(r){return ga(t,e,r)})},qf=[].slice,nv=function(t,e){return t&&vi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&vi(t[0]))&&!t.nodeType&&t!==ai},XC=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return He(r)&&!e||nv(r,1)?(s=i).push.apply(s,kn(r)):i.push(r)})||i},kn=function(t,e,i){return ye&&!e&&ye.selector?ye.selector(t):He(t)&&!i&&(Vf||!eo())?qf.call((e||Gh).querySelectorAll(t),0):Ze(t)?XC(t,i):nv(t)?qf.call(t,0):t?[t]:[]},jf=function(t){return t=kn(t)[0]||Qo("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return kn(e,i.querySelectorAll?i:i===t?Qo("Invalid scope")||Gh.createElement("div"):t)}},iv=function(t){return t.sort(function(){return .5-Math.random()})},rv=function(t){if(Ae(t))return t;var e=vi(t)?t:{each:t},i=Jr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,f=r;return He(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||e).length,m=o[_],p,M,S,x,b,R,C,P,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,zn])[1],!v){for(C=-zn;C<(C=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=o[_]=[],p=l?Math.min(v,_)*u-.5:r%v,M=v===zn?0:l?_*f/v-.5:r/v|0,C=0,P=zn,R=0;R<_;R++)S=R%v-p,x=M-(R/v|0),m[R]=b=c?Math.abs(c==="y"?x:S):z0(S*S+x*x),b>C&&(C=b),b<P&&(P=b);r==="random"&&iv(m),m.max=C-P,m.min=P,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Ke(e.amount||e.each)||0,i=i&&_<0?pv(i):i}return _=(m[h]-m.min)/m.max||0,De(m.b+(i?i(_):_)*m.v)+m.u}},Yf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=De(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(Vi(i)?0:Ke(i))}},sv=function(t,e){var i=Ze(t),r,s;return!i&&vi(t)&&(r=i=t.radius||zn,t.values?(t=kn(t.values),(s=!Vi(t[0]))&&(r*=r)):t=Yf(t.increment)),Sr(e,i?Ae(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=zn,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-a,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?t[u]:o,s||u===o||Vi(o)?u:u+Ke(o)}:Yf(t))},ov=function(t,e,i,r){return Sr(Ze(t)?!e:i===!0?!!(i=0):!r,function(){return Ze(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},qC=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},jC=function(t,e){return function(i){return t(parseFloat(i))+(e||Ke(i))}},YC=function(t,e,i){return lv(t,e,0,1,i)},av=function(t,e,i){return Sr(i,function(r){return t[~~e(r)]})},$C=function n(t,e,i){var r=e-t;return Ze(t)?av(t,n(0,t.length),e):Sr(i,function(s){return(r+(s-t)%r)%r+t})},KC=function n(t,e,i){var r=e-t,s=r*2;return Ze(t)?av(t,n(0,t.length-1),e):Sr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},ea=function(t){for(var e=0,i="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?G0:Hf),i+=t.substr(e,r-e)+ov(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return i+t.substr(e,t.length-e)},lv=function(t,e,i,r,s){var o=e-t,a=r-i;return Sr(s,function(l){return i+((l-t)/o*a||0)})},ZC=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=He(t),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(Ze(t)&&!Ze(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(n(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=e}else r||(t=Js(Ze(t)?[]:{},t));if(!u){for(l in e)$h.call(a,t,l,"get",e[l]);s=function(g){return Qh(g,a)||(o?t.p:t)}}}return Sr(i,s)},Bm=function(t,e,i){var r=t.labels,s=zn,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Rn=function(t,e,i){var r=t.vars,s=r[e],o=ye,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,i&&hr.length&&Fl(),a&&(ye=a),u=l?s.apply(c,l):s.call(c),ye=o,u},Eo=function(t){return vr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!We),t.progress()<1&&Rn(t,"onInterrupt"),t},Ds,cv=[],uv=function(t){if(t)if(t=!t.name&&t.default||t,Vh()||t.headless){var e=t.name,i=Ae(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:ta,render:Qh,add:$h,kill:dP,modifier:hP,rawVars:0},o={targetTest:0,get:0,getSetter:Jh,aliases:{},register:0};if(eo(),t!==r){if(En[e])return;Dn(r,Dn(Bl(t,s),o)),Js(r.prototype,Js(s,Bl(t,o))),En[r.prop=e]=r,t.targetTest&&(pl.push(r),Xh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}q0(e,r),t.register&&t.register(vn,r,_n)}else cv.push(t)},de=255,To={aqua:[0,de,de],lime:[0,de,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,de],navy:[0,0,128],white:[de,de,de],olive:[128,128,0],yellow:[de,de,0],orange:[de,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[de,0,0],pink:[de,192,203],cyan:[0,de,de],transparent:[de,de,de,0]},Tu=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*de+.5|0},fv=function(t,e,i){var r=t?Vi(t)?[t>>16,t>>8&de,t&de]:0:To.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),To[t])r=To[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&de,r&de,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&de,t&de]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(Hf),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Tu(l+1/3,s,o),r[1]=Tu(l,s,o),r[2]=Tu(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(H0),i&&r.length<4&&(r[3]=1),r}else r=t.match(Hf)||To.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/de,o=r[1]/de,a=r[2]/de,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},hv=function(t){var e=[],i=[],r=-1;return t.split(dr).forEach(function(s){var o=s.match(Ps)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},zm=function(t,e,i){var r="",s=(t+r).match(dr),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=fv(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=hv(t),l=i.c,l.join(r)!==u.c.join(r)))for(c=t.replace(dr,"1").split(Ps),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(dr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},dr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in To)n+="|"+t+"\\b";return new RegExp(n+")","gi")}(),JC=/hsl[a]?\(/,dv=function(t){var e=t.join(" "),i;if(dr.lastIndex=0,dr.test(e))return i=JC.test(e),t[1]=zm(t[1],i),t[0]=zm(t[0],i,hv(t[1])),!0},na,An=function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=n()-r,M=m===!0,S,x,b,R;if((p>t||p<0)&&(i+=p-e),r+=p,b=r-i,S=b-o,(S>0||M)&&(R=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,o+=S+(S>=s?4:s-S),x=1),M||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](b,h,R,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){W0&&(!Vf&&Vh()&&(ai=Vf=window,Gh=ai.document||{},Pn.gsap=vn,(ai.gsapVersions||(ai.gsapVersions=[])).push(vn.version),X0(Nl||ai.GreenSockGlobals||!ai.gsap&&ai||{}),cv.forEach(uv)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},na=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),na=0,c=ta},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,M){var S=p?function(x,b,R,C){m(x,b,R,C),f.remove(S)}:m;return f.remove(m),a[M?"unshift":"push"](S),eo(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),eo=function(){return!na&&An.wake()},te={},QC=/^[\d.\-M][\d.\-,\s]/,tP=/["']/g,eP=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(tP,"").trim():+c,r=l.substr(a+1).trim();return e},nP=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},iP=function(t){var e=(t+"").split("("),i=te[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[eP(e[1])]:nP(t).split(",").map(K0)):te._CE&&QC.test(t)?te._CE("",t):i},pv=function(t){return function(e){return 1-t(1-e)}},mv=function n(t,e){for(var i=t._first,r;i;)i instanceof rn?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},Jr=function(t,e){return t&&(Ae(t)?t:te[t]||iP(t))||e},as=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return mn(t,function(a){te[a]=Pn[a]=s,te[o=a.toLowerCase()]=i;for(var l in s)te[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=te[a+"."+l]=s[l]}),s},_v=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},bu=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/kf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*DC((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:_v(a);return s=kf/s,l.config=function(c,u){return n(t,c,u)},l},Au=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:_v(i);return r.config=function(s){return n(t,s)},r};mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;as(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});te.Linear.easeNone=te.none=te.Linear.easeIn;as("Elastic",bu("in"),bu("out"),bu());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};as("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);as("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});as("Circ",function(n){return-(z0(1-n*n)-1)});as("Sine",function(n){return n===1?1:-PC(n*RC)+1});as("Back",Au("in"),Au("out"),Au());te.SteppedEase=te.steps=Pn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-pe;return function(a){return((r*ga(0,o,a)|0)+s)*i}}};Zs.ease=te["quad.out"];mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return qh+=n+","+n+"Params,"});var gv=function(t,e){this.id=CC++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Y0,this.set=e?e.getSetter:Jh},ia=function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,to(this,+e.duration,1,1),this.data=e.data,ye&&(this._ctx=ye,ye.data.push(this)),na||An.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,to(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(eo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sc(this,i),!s._dp||s.parent||Q0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===pe||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),$0(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Nm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Nm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Qs(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-pe?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?zl(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-pe?0:this._rts,this.totalTime(ga(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),yc(this),BC(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pe&&(this._tTime-=pe)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&fi(r,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(pn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zl(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=UC);var r=We;return We=i,Yh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),We=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Fm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Fm(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Fn(this,i),pn(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,pn(r)),this._dur||(this._zTime=-pe),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-pe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-pe,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-pe)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this;return new Promise(function(s){var o=Ae(i)?i:Z0,a=function(){var c=r.then;r.then=null,Ae(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){Eo(this)},n}();Dn(ia.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pe,_prom:0,_ps:!1,_rts:1});var rn=function(n){B0(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=pn(i.sortChildren),Me&&fi(i.parent||Me,Pi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&tv(Pi(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Fo(0,arguments,this),this},e.from=function(r,s,o){return Fo(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Fo(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,No(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pe(r,s,Fn(this,o),1),this},e.call=function(r,s,o){return fi(this,Pe.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Pe(r,o,Fn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,No(o).immediateRender=pn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,No(a).immediateRender=pn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:De(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,M,S,x,b,R,C;if(this!==Me&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,x=this._start,S=this._ts,p=!S,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=De(u%m),u===l?(_=this._repeat,h=c):(b=De(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=Qs(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),R&&_&1&&(h=c-h,C=1),_!==b&&!this._lock){var P=R&&b&1,v=P===(R&&_&1);if(_<b&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(C?0:De(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Rn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;mv(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=VC(this,De(a),De(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&!s&&!b&&(Rn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-pe);break}}d=g}else{d=this._last;for(var E=r<0?r:h;d;){if(g=d._prev,(d._act||E<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||We&&Yh(d)),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=E?-pe:pe);break}}d=g}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-pe)._zTime=h>=a?1:-1,this._ts))return this._start=x,yc(this),this.render(r,s,o);this._onUpdate&&!s&&Rn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&vr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Rn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(Vi(s)||(s=Fn(this,s,r)),!(r instanceof ia)){if(Ze(r))return r.forEach(function(a){return o.add(a,s)}),this;if(He(r))return this.addLabel(r,s);if(Ae(r))r=Pe.delayedCall(0,r);else return this}return this!==r?fi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Pe?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return He(r)?this.removeLabel(r):Ae(r)?this.killTweensOf(r):(r.parent===this&&xc(this,r),r===this._recent&&(this._recent=this._last),Zr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=De(An.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Fn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Pe.delayedCall(0,s||ta,o);return a.data="isPause",this._hasPause=1,fi(this,a,Fn(this,r))},e.removePause=function(r){var s=this._first;for(r=Fn(this,r);s;)s._start===r&&s.data==="isPause"&&vr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)or!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=kn(r),l=this._first,c=Vi(s),u;l;)l instanceof Pe?OC(l._targets,a)&&(c?(!or||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Fn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Pe.to(o,Dn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||pe,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&to(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,Dn({startAt:{time:Fn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Bm(this,Fn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Bm(this,Fn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+pe)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Zr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Zr(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=zn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;to(o,o===Me&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Me._ts&&($0(Me,zl(r,Me)),j0=An.frame),An.frame>=Um){Um+=Cn.autoSleep||120;var s=Me._first;if((!s||!s._ts)&&Cn.autoSleep&&An._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||An.sleep()}}},t}(ia);Dn(rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var rP=function(t,e,i,r,s,o,a){var l=new _n(this._pt,t,e,0,1,Ev,null,s),c=0,u=0,f,h,d,g,_,m,p,M;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=ea(r)),o&&(M=[i,r],o(M,t,e),i=M[0],r=M[1]),h=i.match(Mu)||[];f=Mu.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Hs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Mu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(V0.test(r)||p)&&(l.e=0),this._pt=l,l},$h=function(t,e,i,r,s,o,a,l,c,u){Ae(r)&&(r=r(s||0,t,o));var f=t[e],h=i!=="get"?i:Ae(f)?c?t[e.indexOf("set")||!Ae(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=Ae(f)?c?cP:Sv:Zh,g;if(He(r)&&(~r.indexOf("random(")&&(r=ea(r)),r.charAt(1)==="="&&(g=Hs(h,r)+(Ke(h)||0),(g||g===0)&&(r=g))),!u||h!==r||$f)return!isNaN(h*r)&&r!==""?(g=new _n(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?fP:Mv,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Wh(e,r),rP.call(this,t,e,h,r,d,l||Cn.stringFilter,c))},sP=function(t,e,i,r,s){if(Ae(t)&&(t=Bo(t,s,e,i,r)),!vi(t)||t.style&&t.nodeType||Ze(t)||k0(t))return He(t)?Bo(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=Bo(t[a],s,e,i,r);return o},vv=function(t,e,i,r,s,o){var a,l,c,u;if(En[t]&&(a=new En[t]).init(s,a.rawVars?e[t]:sP(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new _n(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==Ds))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},or,$f,Kh=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!kh,x=t.timeline,b,R,C,P,v,E,I,U,O,W,Q,V,j;if(x&&(!h||!s)&&(s="none"),t._ease=Jr(s,Zs.ease),t._yEase=f?pv(Jr(f===!0?s:f,Zs.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!x&&!!r.runBackwards,!x||h&&!r.stagger){if(U=m[0]?Kr(m[0]).harness:0,V=U&&r[U.prop],b=Bl(r,Xh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?dl:IC),_._lazy=0),o){if(vr(t._startAt=Pe.set(m,Dn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&pn(l),startAt:null,delay:0,onUpdate:c&&function(){return Rn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(We||!a&&!d)&&t._startAt.revert(dl),a&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),C=Dn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&pn(l),immediateRender:a,stagger:0,parent:p},b),V&&(C[U.prop]=V),vr(t._startAt=Pe.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(We?t._startAt.revert(dl):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,pe,pe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&pn(l)||l&&!g,R=0;R<m.length;R++){if(v=m[R],I=v._gsap||jh(m)[R]._gsap,t._ptLookup[R]=W={},Gf[I.id]&&hr.length&&Fl(),Q=M===m?R:M.indexOf(v),U&&(O=new U).init(v,V||b,t,Q,M)!==!1&&(t._pt=P=new _n(t._pt,v,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(G){W[G]=P}),O.priority&&(E=1)),!U||V)for(C in b)En[C]&&(O=vv(C,b,t,Q,v,M))?O.priority&&(E=1):W[C]=P=$h.call(t,v,C,"get",b[C],Q,M,0,r.stringFilter);t._op&&t._op[R]&&t.kill(v,t._op[R]),S&&t._pt&&(or=t,Me.killTweensOf(v,W,t.globalTime(e)),j=!t.parent,or=0),t._pt&&l&&(Gf[I.id]=1)}E&&Tv(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!j,h&&e<=0&&x.render(zn,!0,!0)},oP=function(t,e,i,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,h,d;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,d=t._targets.length;d--;){if(u=h[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return $f=1,t.vars[e]="+=0",Kh(t,a),$f=0,l?Qo(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=Re(i)+Ke(f.e)),f.b&&(f.b=u.s+Ke(f.b))},aP=function(t,e){var i=t[0]?Kr(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=Js({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},lP=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(Ze(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Bo=function(t,e,i,r,s){return Ae(t)?t.call(e,i,r,s):He(t)&&~t.indexOf("random(")?ea(t):t},xv=qh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yv={};mn(xv+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return yv[n]=1});var Pe=function(n){B0(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:No(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=r.parent||Me,S=(Ze(i)||k0(i)?Vi(i[0]):"length"in r)?[i]:kn(i),x,b,R,C,P,v,E,I;if(a._targets=S.length?jh(S):Qo("GSAP target "+i+" not found. https://gsap.com",!Cn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Za(c)||Za(u)){if(r=a.vars,x=a.timeline=new rn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:S}),x.kill(),x.parent=x._dp=Pi(a),x._start=0,h||Za(c)||Za(u)){if(C=S.length,E=h&&rv(h),vi(h))for(P in h)~xv.indexOf(P)&&(I||(I={}),I[P]=h[P]);for(b=0;b<C;b++)R=Bl(r,yv),R.stagger=0,p&&(R.yoyoEase=p),I&&Js(R,I),v=S[b],R.duration=+Bo(c,Pi(a),b,v,S),R.delay=(+Bo(u,Pi(a),b,v,S)||0)-a._delay,!h&&C===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),x.to(v,R,E?E(b,v,S):0),x._ease=te.none;x.duration()?c=u=0:a.timeline=0}else if(g){No(Dn(x.vars.defaults,{ease:"none"})),x._ease=Jr(g.ease||r.ease||"none");var U=0,O,W,Q;if(Ze(g))g.forEach(function(V){return x.to(S,V,">")}),x.duration();else{R={};for(P in g)P==="ease"||P==="easeEach"||lP(P,g[P],R,g.easeEach);for(P in R)for(O=R[P].sort(function(V,j){return V.t-j.t}),U=0,b=0;b<O.length;b++)W=O[b],Q={ease:W.e,duration:(W.t-(b?O[b-1].t:0))/100*c},Q[P]=W.v,x.to(S,Q,U),U+=Q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!kh&&(or=Pi(a),Me.killTweensOf(S),or=0),fi(M,Pi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===De(M._time)&&pn(f)&&zC(Pi(a))&&M.data!=="nested")&&(a._tTime=-pe,a.render(Math.max(0,-u)||0)),m&&tv(Pi(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-pe&&!u?l:r<pe?0:r,h,d,g,_,m,p,M,S,x;if(!c)HC(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=De(f%_),f===l?(g=this._repeat,h=c):(m=De(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,h=c-h),m=Qs(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(S&&this._yEase&&mv(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(De(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(ev(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(h/c),this._from&&(this.ratio=M=1-M),!a&&f&&!s&&!m&&(Rn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;S&&S.render(r<0?r:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Wf(this,r,s,o),Rn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Rn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Wf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&vr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Rn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){na||An.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Kh(this,c),u=this._ease(c/this._dur),oP(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Sc(this,0),this.parent||J0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Eo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!We),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,or&&or.vars.overwrite!==!0)._first||Eo(this),this.parent&&o!==this.timeline.totalDuration()&&to(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?kn(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&FC(a,l))return s==="all"&&(this._pt=0),Eo(this);for(f=this._op=this._op||[],s!=="all"&&(He(s)&&(_={},mn(s,function(M){return _[M]=1}),s=_),s=aP(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&xc(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Eo(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Fo(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Fo(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Me.killTweensOf(r,s,o)},t}(ia);Dn(Pe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});mn("staggerTo,staggerFrom,staggerFromTo",function(n){Pe[n]=function(){var t=new rn,e=qf.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Zh=function(t,e,i){return t[e]=i},Sv=function(t,e,i){return t[e](i)},cP=function(t,e,i,r){return t[e](r.fp,i)},uP=function(t,e,i){return t.setAttribute(e,i)},Jh=function(t,e){return Ae(t[e])?Sv:Hh(t[e])&&t.setAttribute?uP:Zh},Mv=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},fP=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ev=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},Qh=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},hP=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},dP=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?xc(this,e,"_pt"):e.dep||(i=1),e=r;return!i},pP=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},Tv=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},_n=function(){function n(e,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Mv,this.d=l||this,this.set=c||Zh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=pP,this.m=i,this.mt=s,this.tween=r},n}();mn(qh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Xh[n]=1});Pn.TweenMax=Pn.TweenLite=Pe;Pn.TimelineLite=Pn.TimelineMax=rn;Me=new rn({sortChildren:!1,defaults:Zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Cn.stringFilter=dv;var Qr=[],ml={},mP=[],km=0,_P=0,wu=function(t){return(ml[t]||mP).map(function(e){return e()})},Kf=function(){var t=Date.now(),e=[];t-km>2&&(wu("matchMediaInit"),Qr.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=ai.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),wu("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),km=t,wu("matchMedia"))},bv=function(){function n(e,i){this.selector=i&&jf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=_P++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Ae(i)&&(s=r,r=i,i=Ae);var o=this,a=function(){var c=ye,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=jf(s)),ye=o,f=r.apply(o,arguments),Ae(f)&&o._r.push(f),ye=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Ae?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=ye;ye=null,i(this),ye=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Pe&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pe)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Qr.length;o--;)Qr[o].id===this.id&&Qr.splice(o,1)},t.revert=function(i){this.kill(i||{})},n}(),gP=function(){function n(e){this.contexts=[],this.scope=e,ye&&ye.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){vi(i)||(i={matches:i});var o=new bv(0,s||this.scope),a=o.conditions={},l,c,u;ye&&!o.selector&&(o.selector=ye.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ai.matchMedia(i[c]),l&&(Qr.indexOf(o)<0&&Qr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Kf):l.addEventListener("change",Kf)));return u&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),kl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return uv(r)})},timeline:function(t){return new rn(t)},getTweensOf:function(t,e){return Me.getTweensOf(t,e)},getProperty:function(t,e,i,r){He(t)&&(t=kn(t)[0]);var s=Kr(t||{}).get,o=i?Z0:K0;return i==="native"&&(i=""),t&&(e?o((En[e]&&En[e].get||s)(t,e,i,r)):function(a,l,c){return o((En[a]&&En[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=kn(t),t.length>1){var r=t.map(function(u){return vn.quickSetter(u,e,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var o=En[e],a=Kr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;Ds._pt=0,f.init(t,i?u+i:u,Ds,0,[t]),f.render(1,f),Ds._pt&&Qh(1,Ds)}:a.set(t,l);return o?c:function(u){return c(t,l,i?u+i:u,a,1)}},quickTo:function(t,e,i){var r,s=vn.to(t,Dn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Jr(t.ease,Zs.ease)),Om(Zs,t||{})},config:function(t){return Om(Cn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!En[a]&&!Pn[a]&&Qo(e+" effect requires "+a+" plugin.")}),Eu[e]=function(a,l,c){return i(kn(a),Dn(l||{},s),c)},o&&(rn.prototype[e]=function(a,l,c){return this.add(Eu[e](a,vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){te[t]=Jr(e)},parseEase:function(t,e){return arguments.length?Jr(t,e):te},getById:function(t){return Me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new rn(t),r,s;for(i.smoothChildTiming=pn(t.smoothChildTiming),Me.remove(i),i._dp=0,i._time=i._tTime=Me._time,r=Me._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Pe&&r.vars.onComplete===r._targets[0]))&&fi(i,r,r._start-r._delay),r=s;return fi(Me,i,0),i},context:function(t,e){return t?new bv(t,e):ye},matchMedia:function(t){return new gP(t)},matchMediaRefresh:function(){return Qr.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||Kf()},addEventListener:function(t,e){var i=ml[t]||(ml[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=ml[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:$C,wrapYoyo:KC,distribute:rv,random:ov,snap:sv,normalize:YC,getUnit:Ke,clamp:WC,splitColor:fv,toArray:kn,selector:jf,mapRange:lv,pipe:qC,unitize:jC,interpolate:ZC,shuffle:iv},install:X0,effects:Eu,ticker:An,updateRoot:rn.updateRoot,plugins:En,globalTimeline:Me,core:{PropTween:_n,globals:q0,Tween:Pe,Timeline:rn,Animation:ia,getCache:Kr,_removeLinkedListItem:xc,reverting:function(){return We},context:function(t){return t&&ye&&(ye.data.push(t),t._ctx=ye),ye},suppressOverwrites:function(t){return kh=t}}};mn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return kl[n]=Pe[n]});An.add(rn.updateRoot);Ds=kl.to({},{duration:0});var vP=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},xP=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=vP(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},Ru=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(He(s)&&(l={},mn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}xP(a,s)}}}},vn=kl.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)We?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Ru("roundProps",Yf),Ru("modifiers"),Ru("snap",sv))||kl;Pe.version=rn.version=vn.version="3.13.0";W0=1;Vh()&&eo();te.Power0;te.Power1;te.Power2;te.Power3;te.Power4;te.Linear;te.Quad;te.Cubic;te.Quart;te.Quint;te.Strong;te.Elastic;te.Back;te.SteppedEase;te.Bounce;te.Sine;te.Expo;te.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hm,ar,Vs,td,qr,Vm,ed,yP=function(){return typeof window<"u"},Gi={},Br=180/Math.PI,Gs=Math.PI/180,bs=Math.atan2,Gm=1e8,nd=/([A-Z])/g,SP=/(left|right|width|margin|padding|x)/i,MP=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},EP=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},TP=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},bP=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Av=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},wv=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},AP=function(t,e,i){return t.style[e]=i},wP=function(t,e,i){return t.style.setProperty(e,i)},RP=function(t,e,i){return t._gsap[e]=i},CP=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},PP=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},DP=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Ee="transform",gn=Ee+"Origin",LP=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in Gi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=di[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Di(r,a)}):this.tfm[t]=o.x?o[t]:Di(r,t),t===gn&&(this.tfm.zOrigin=o.zOrigin);else return di.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(Ee)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(gn,e,"")),t=Ee}(s||e)&&this.props.push(t,e,s[t])},Rv=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},IP=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(nd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ed(),(!s||!s.isStart)&&!i[Ee]&&(Rv(i),r.zOrigin&&i[gn]&&(i[gn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Cv=function(t,e){var i={target:t,props:[],revert:IP,save:LP};return t._gsap||vn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},Pv,Jf=function(t,e){var i=ar.createElementNS?ar.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ar.createElement(t);return i&&i.style?i:ar.createElement(t)},Hn=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(nd,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,no(e)||e,1)||""},Wm="O,Moz,ms,Ms,Webkit".split(","),no=function(t,e,i){var r=e||qr,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Wm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Wm[o]:"")+t},Qf=function(){yP()&&window.document&&(Hm=window,ar=Hm.document,Vs=ar.documentElement,qr=Jf("div")||{style:{}},Jf("div"),Ee=no(Ee),gn=Ee+"Origin",qr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pv=!!no("perspective"),ed=vn.core.reverting,td=1)},Xm=function(t){var e=t.ownerSVGElement,i=Jf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Vs.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Vs.removeChild(i),s},qm=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Dv=function(t){var e,i;try{e=t.getBBox()}catch{e=Xm(t),i=1}return e&&(e.width||e.height)||i||(e=Xm(t)),e&&!e.width&&!e.x&&!e.y?{x:+qm(t,["x","cx","x1"])||0,y:+qm(t,["y","cy","y1"])||0,width:0,height:0}:e},Lv=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Dv(t))},rs=function(t,e){if(e){var i=t.style,r;e in Gi&&e!==gn&&(e=Ee),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(nd,"-$1").toLowerCase())):i.removeAttribute(e)}},lr=function(t,e,i,r,s,o){var a=new _n(t._pt,e,i,0,1,o?wv:Av);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},jm={deg:1,rad:1,turn:1},UP={grid:1,flex:1},xr=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=qr.style,l=SP.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||jm[r]||jm[o])return s;if(o!=="px"&&!h&&(s=n(t,e,i,"px")),p=t.getCTM&&Lv(t),(d||o==="%")&&(Gi[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],Re(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ar||!_.appendChild)&&(_=ar.body),m=_._gsap,m&&d&&m.width&&l&&m.time===An.time&&!m.uncache)return Re(s/m.width*f);if(d&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=f+r,g=t[u],M?t.style[e]=M:rs(t,e)}else(d||o==="%")&&!UP[Hn(_,"display")]&&(a.position=Hn(t,"position")),_===t&&(a.position="static"),_.appendChild(qr),g=qr[u],_.removeChild(qr),a.position="absolute";return l&&d&&(m=Kr(_),m.time=An.time,m.width=_[u]),Re(h?g*s/f:g&&s?f/g*s:0)},Di=function(t,e,i,r){var s;return td||Qf(),e in di&&e!=="transform"&&(e=di[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gi[e]&&e!=="transform"?(s=sa(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Vl(Hn(t,gn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Hl[e]&&Hl[e](t,e,i)||Hn(t,e)||Y0(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?xr(t,e,s,i)+i:s},OP=function(t,e,i,r){if(!i||i==="none"){var s=no(e,t,1),o=s&&Hn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=Hn(t,"borderTopColor"))}var a=new _n(this._pt,t.style,e,0,1,Ev),l=0,c=0,u,f,h,d,g,_,m,p,M,S,x,b;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Hn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=Hn(t,e)||r,_?t.style[e]=_:rs(t,e)),u=[i,r],dv(u),i=u[0],r=u[1],h=i.match(Ps)||[],b=r.match(Ps)||[],b.length){for(;f=Ps.exec(r);)m=f[0],M=r.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=Hs(d,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=Ps.lastIndex-S.length,S||(S=S||Cn.units[e]||x,l===r.length&&(r+=S,a.e+=S)),x!==S&&(d=xr(t,e,_,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?wv:Av;return V0.test(r)&&(a.e=0),this._pt=a,a},Ym={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NP=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=Ym[i]||i,e[1]=Ym[r]||r,e.join(" ")},FP=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Gi[a]&&(l=1,a=a==="transformOrigin"?gn:Ee),rs(i,a);l&&(rs(i,Ee),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",sa(i,1),o.uncache=1,Rv(r)))}},Hl={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new _n(t._pt,e,i,0,0,FP);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},ra=[1,0,0,1,0,0],Iv={},Uv=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},$m=function(t){var e=Hn(t,Ee);return Uv(e)?ra:e.substr(7).match(H0).map(Re)},id=function(t,e){var i=t._gsap||Kr(t),r=t.style,s=$m(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ra:s):(s===ra&&!t.offsetParent&&t!==Vs&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Vs.appendChild(t)),s=$m(t),l?r.display=l:rs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Vs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},th=function(t,e,i,r,s,o){var a=t._gsap,l=s||id(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],S=e.split(" "),x=parseFloat(S[0])||0,b=parseFloat(S[1])||0,R,C,P,v;i?l!==ra&&(C=d*m-g*_)&&(P=x*(m/C)+b*(-_/C)+(_*M-m*p)/C,v=x*(-g/C)+b*(d/C)-(d*M-g*p)/C,x=P,b=v):(R=Dv(t),x=R.x+(~S[0].indexOf("%")?x/100*R.width:x),b=R.y+(~(S[1]||S[0]).indexOf("%")?b/100*R.height:b)),r||r!==!1&&a.smooth?(p=x-c,M=b-u,a.xOffset=f+(p*d+M*_)-p,a.yOffset=h+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[gn]="0px 0px",o&&(lr(o,a,"xOrigin",c,x),lr(o,a,"yOrigin",u,b),lr(o,a,"xOffset",f,a.xOffset),lr(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},sa=function(t,e){var i=t._gsap||new gv(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Hn(t,gn)||"0",u,f,h,d,g,_,m,p,M,S,x,b,R,C,P,v,E,I,U,O,W,Q,V,j,G,gt,vt,bt,Nt,Zt,rt,dt;return u=f=h=_=m=p=M=S=x=0,d=g=1,i.svg=!!(t.getCTM&&Lv(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ee]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ee]!=="none"?l[Ee]:"")),r.scale=r.rotate=r.translate="none"),C=id(t,i.svg),i.svg&&(i.uncache?(G=t.getBBox(),c=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),th(t,j||c,!!j||i.originIsAbsolute,i.smooth!==!1,C)),b=i.xOrigin||0,R=i.yOrigin||0,C!==ra&&(I=C[0],U=C[1],O=C[2],W=C[3],u=Q=C[4],f=V=C[5],C.length===6?(d=Math.sqrt(I*I+U*U),g=Math.sqrt(W*W+O*O),_=I||U?bs(U,I)*Br:0,M=O||W?bs(O,W)*Br+_:0,M&&(g*=Math.abs(Math.cos(M*Gs))),i.svg&&(u-=b-(b*I+R*O),f-=R-(b*U+R*W))):(dt=C[6],Zt=C[7],vt=C[8],bt=C[9],Nt=C[10],rt=C[11],u=C[12],f=C[13],h=C[14],P=bs(dt,Nt),m=P*Br,P&&(v=Math.cos(-P),E=Math.sin(-P),j=Q*v+vt*E,G=V*v+bt*E,gt=dt*v+Nt*E,vt=Q*-E+vt*v,bt=V*-E+bt*v,Nt=dt*-E+Nt*v,rt=Zt*-E+rt*v,Q=j,V=G,dt=gt),P=bs(-O,Nt),p=P*Br,P&&(v=Math.cos(-P),E=Math.sin(-P),j=I*v-vt*E,G=U*v-bt*E,gt=O*v-Nt*E,rt=W*E+rt*v,I=j,U=G,O=gt),P=bs(U,I),_=P*Br,P&&(v=Math.cos(P),E=Math.sin(P),j=I*v+U*E,G=Q*v+V*E,U=U*v-I*E,V=V*v-Q*E,I=j,Q=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Re(Math.sqrt(I*I+U*U+O*O)),g=Re(Math.sqrt(V*V+dt*dt)),P=bs(Q,V),M=Math.abs(P)>2e-4?P*Br:0,x=rt?1/(rt<0?-rt:rt):0),i.svg&&(j=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Uv(Hn(t,Ee)),j&&t.setAttribute("transform",j))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(d*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Re(d),i.scaleY=Re(g),i.rotation=Re(_)+a,i.rotationX=Re(m)+a,i.rotationY=Re(p)+a,i.skewX=M+a,i.skewY=S+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(r[gn]=Vl(c)),i.xOffset=i.yOffset=0,i.force3D=Cn.force3D,i.renderTransform=i.svg?zP:Pv?Ov:BP,i.uncache=0,i},Vl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Cu=function(t,e,i){var r=Ke(e);return Re(parseFloat(e)+parseFloat(xr(t,"x",i+"px",r)))+r},BP=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ov(t,e)},Ur="0deg",yo="0px",Or=") ",Ov=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,S=i.zOrigin,x="",b=p==="auto"&&t&&t!==1||p===!0;if(S&&(f!==Ur||u!==Ur)){var R=parseFloat(u)*Gs,C=Math.sin(R),P=Math.cos(R),v;R=parseFloat(f)*Gs,v=Math.cos(R),o=Cu(M,o,C*v*-S),a=Cu(M,a,-Math.sin(R)*-S),l=Cu(M,l,P*v*-S+S)}m!==yo&&(x+="perspective("+m+Or),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(b||o!==yo||a!==yo||l!==yo)&&(x+=l!==yo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Or),c!==Ur&&(x+="rotate("+c+Or),u!==Ur&&(x+="rotateY("+u+Or),f!==Ur&&(x+="rotateX("+f+Or),(h!==Ur||d!==Ur)&&(x+="skew("+h+", "+d+Or),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Or),M.style[Ee]=x||"translate(0, 0)"},zP=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,S=parseFloat(o),x=parseFloat(a),b,R,C,P,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Gs,c*=Gs,b=Math.cos(l)*f,R=Math.sin(l)*f,C=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=Gs,v=Math.tan(c-u),v=Math.sqrt(1+v*v),C*=v,P*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),b*=v,R*=v)),b=Re(b),R=Re(R),C=Re(C),P=Re(P)):(b=f,P=h,R=C=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=xr(d,"x",o,"px"),x=xr(d,"y",a,"px")),(g||_||m||p)&&(S=Re(S+g-(g*b+_*C)+m),x=Re(x+_-(g*R+_*P)+p)),(r||s)&&(v=d.getBBox(),S=Re(S+r/100*v.width),x=Re(x+s/100*v.height)),v="matrix("+b+","+R+","+C+","+P+","+S+","+x+")",d.setAttribute("transform",v),M&&(d.style[Ee]=v)},kP=function(t,e,i,r,s){var o=360,a=He(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Br:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Gm)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Gm)%o-~~(c/o)*o)),t._pt=h=new _n(t._pt,e,i,r,c,EP),h.e=u,h.u="deg",t._props.push(i),h},Km=function(t,e){for(var i in e)t[i]=e[i];return t},HP=function(t,e,i){var r=Km({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ee]=e,a=sa(i,1),rs(i,Ee),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Ee],o[Ee]=e,a=sa(i,1),o[Ee]=c);for(l in Gi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ke(c),g=Ke(u),f=d!==g?xr(i,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new _n(t._pt,a,l,f,h-f,Zf),t._pt.u=g||0,t._props.push(l));Km(a,r)};mn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});Hl[t>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Di(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Nv={name:"css",register:Qf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,c,u,f,h,d,g,_,m,p,M,S,x,b,R,C,P;td||Qf(),this.styles=this.styles||Cv(t),P=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(En[_]&&vv(_,e,i,r,t,s)))){if(d=typeof u,g=Hl[_],d==="function"&&(u=u.call(i,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ea(u)),g)g(this,t,_,u,i)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",dr.lastIndex=0,dr.test(c)||(m=Ke(c),p=Ke(u)),p?m!==p&&(c=xr(t,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],He(c)&&~c.indexOf("random(")&&(c=ea(c)),Ke(c+"")||c==="auto"||(c+=Cn.units[_]||Ke(Di(t,_))||""),(c+"").charAt(1)==="="&&(c=Di(t,_))):c=Di(t,_),h=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in di&&(_==="autoAlpha"&&(h===1&&Di(t,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,a.visibility),lr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Gi,S){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=Hn(t,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),x||(b=t._gsap,b.renderTransform&&!e.parseTransform||sa(t,e.parseTransform),R=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new _n(this._pt,a,Ee,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new _n(this._pt,b,"scaleY",b.scaleY,(M?Hs(b.scaleY,M+f):f)-b.scaleY||0,Zf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(gn,0,a[gn]),u=NP(u),b.svg?th(t,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&lr(this,b,"zOrigin",b.zOrigin,p),lr(this,a,_,Vl(c),Vl(u)));continue}else if(_==="svgOrigin"){th(t,u,1,R,0,this);continue}else if(_ in Iv){kP(this,b,_,h,M?Hs(h,M+u):u);continue}else if(_==="smoothOrigin"){lr(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){HP(this,u,t);continue}}else _ in a||(_=no(_)||_);if(S||(f||f===0)&&(h||h===0)&&!MP.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=Ke(u)||(_ in Cn.units?Cn.units[_]:m),m!==p&&(h=xr(t,_,c,p)),this._pt=new _n(this._pt,S?b:a,_,h,(M?Hs(h,M+f):f)-h,!S&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?bP:Zf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=TP);else if(_ in a)OP.call(this,t,_,c,M?M+u:u);else if(_ in t)this.add(t,_,c||t[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Wh(_,u);continue}S||(_ in a?P.push(_,0,a[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),o.push(_)}}C&&Tv(this)},render:function(t,e){if(e.tween._time||!ed())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Di,aliases:di,getSetter:function(t,e,i){var r=di[e];return r&&r.indexOf(",")<0&&(e=r),e in Gi&&e!==gn&&(t._gsap.x||Di(t,"x"))?i&&Vm===i?e==="scale"?CP:RP:(Vm=i||{})&&(e==="scale"?PP:DP):t.style&&!Hh(t.style[e])?AP:~e.indexOf("-")?wP:Jh(t,e)},core:{_removeProperty:rs,_getMatrix:id}};vn.utils.checkPrefix=no;vn.core.getStyleSaver=Cv;(function(n,t,e,i){var r=mn(n+","+t+","+e,function(s){Gi[s]=1});mn(t,function(s){Cn.units[s]="deg",Iv[s]=1}),di[r[13]]=n+","+t,mn(i,function(s){var o=s.split(":");di[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Cn.units[n]="px"});vn.registerPlugin(Nv);var VP=vn.registerPlugin(Nv)||vn;VP.core.Tween;export{CD as $,H_ as A,Qa as B,rD as C,JP as D,QP as E,li as F,k_ as G,T0 as H,OD as I,UD as J,LD as K,Ha as L,_a as M,DD as N,Fi as O,Tn as P,v0 as Q,AM as R,wD as S,_c as T,Ui as U,FD as V,BD as W,Nh as X,P0 as Y,C0 as Z,z as _,aa as a,ND as a0,VP as a1,Kt as a2,b0 as a3,zD as a4,ID as a5,PD as a6,R0 as a7,Ln as a8,mi as a9,bb as aa,wp as ab,RD as ac,WP as ad,oD as ae,sD as af,eD as ag,nD as ah,YP as ai,KP as aj,Py as ak,XP as al,Ue as b,bn as c,iD as d,jP as e,ug as f,Us as g,Ry as h,Gn as i,lD as j,$P as k,GP as l,qP as m,oh as n,z_ as o,tD as p,un as q,Kl as r,Jl as s,ix as t,aD as u,ZP as v,Do as w,Bx as x,MM as y,Iy as z};
