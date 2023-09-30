(()=>{"use strict";const e=function(){document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".sidebar-tab"),t=document.querySelectorAll(".main-content-container");e.forEach((t=>{t.addEventListener("click",(()=>{const n=`${t.id}-page`;document.querySelector(`#${n}`)&&(e.forEach((e=>{e.classList.remove("active")})),t.classList.add("active"))}))})),document.querySelectorAll(".page-tab").forEach((e=>{e.addEventListener("click",(()=>{const n=`${e.id}-page`,a=document.querySelector(`#${n}`);a&&(t.forEach((e=>{e!==a&&e.classList.add("hide")})),a.classList.remove("hide"))}))}))}))},t=function(e){const t=localStorage.getItem("projects");if(t){console.log(t);const e=JSON.parse(t);return console.log("Loaded data from Local Storage:",e),e}return console.log("Local Storage is empty or data is missing."),[]};function n(e){const t=`tasks_${e}`,n=localStorage.getItem(t);if(n){const t=JSON.parse(n);return console.log(`Loaded tasks from Local Storage (${e}):`,t),t}return console.log(`Local Storage for tasks (${e}) is empty or data is missing.`),[]}function a(e,t){const n=`tasks_${e}`;localStorage.setItem(n,JSON.stringify(t)),console.log(`Tasks saved for ${e}:`,t)}function d(e,t){const d=n(e);t>=0&&t<d.length&&(d.splice(t,1),a(e,d))}function o(e,t,d){const o=n(e);if(t>=0&&t<o.length){for(const e in d)d.hasOwnProperty(e)&&(o[t][e]=d[e]);a(e,o),console.log("UPDATED TASK",o[t])}}function s(e){localStorage.removeItem(`tasks_${e}`),console.log(`All tasks for ${e} cleared from Local Storage.`)}Math.pow(10,8);var c=36e5;function l(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function r(e,t){var n;l(1,arguments);var a=i(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var d,o=function(e){var t,n={},a=e.split(u.dateTimeDelimiter);if(a.length>2)return n;if(/:/.test(a[0])?t=a[0]:(n.date=a[0],t=a[1],u.timeZoneDelimiter.test(n.date)&&(n.date=e.split(u.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var d=u.timezone.exec(t);d?(n.time=t.replace(d[1],""),n.timezone=d[1]):n.time=t}return n}(e);if(o.date){var s=function(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=e.match(n);if(!a)return{year:NaN,restDateString:""};var d=a[1]?parseInt(a[1]):null,o=a[2]?parseInt(a[2]):null;return{year:null===o?d:100*o,restDateString:e.slice((a[1]||a[2]).length)}}(o.date,a);d=function(e,t){if(null===t)return new Date(NaN);var n=e.match(p);if(!n)return new Date(NaN);var a=!!n[4],d=C(n[1]),o=C(n[2])-1,s=C(n[3]),c=C(n[4]),l=C(n[5])-1;if(a)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,c,l)?function(e,t,n){var a=new Date(0);a.setUTCFullYear(e,0,4);var d=7*(t-1)+n+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+d),a}(t,c,l):new Date(NaN);var i=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(L[t]||(g(e)?29:28))}(t,o,s)&&function(e,t){return t>=1&&t<=(g(e)?366:365)}(t,d)?(i.setUTCFullYear(t,o,Math.max(d,s)),i):new Date(NaN)}(s.restDateString,s.year)}if(!d||isNaN(d.getTime()))return new Date(NaN);var r,b=d.getTime(),E=0;if(o.time&&(E=function(e){var t=e.match(m);if(!t)return NaN;var n=h(t[1]),a=h(t[2]),d=h(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,a,d)?n*c+6e4*a+1e3*d:NaN}(o.time),isNaN(E)))return new Date(NaN);if(!o.timezone){var N=new Date(b+E),k=new Date(0);return k.setFullYear(N.getUTCFullYear(),N.getUTCMonth(),N.getUTCDate()),k.setHours(N.getUTCHours(),N.getUTCMinutes(),N.getUTCSeconds(),N.getUTCMilliseconds()),k}return r=function(e){if("Z"===e)return 0;var t=e.match(v);if(!t)return 0;var n="+"===t[1]?-1:1,a=parseInt(t[2]),d=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,d)?n*(a*c+6e4*d):NaN}(o.timezone),isNaN(r)?new Date(NaN):new Date(b+E+r)}var u={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},p=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,m=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,v=/^([+-])(\d{2})(?::?(\d{2}))?$/;function C(e){return e?parseInt(e):1}function h(e){return e&&parseFloat(e.replace(",","."))||0}var L=[31,null,31,30,31,30,31,31,30,31,30,31];function g(e){return e%400==0||e%4==0&&e%100!=0}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function E(e){l(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===b(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function N(e){l(1,arguments);var t=E(e);return t.setHours(0,0,0,0),t}function k(e,t){l(2,arguments);var n=E(e),a=i(t);return isNaN(a)?new Date(NaN):a?(n.setDate(n.getDate()+a),n):n}function f(e,t){l(2,arguments);var n=E(e).getTime(),a=E(t.start).getTime(),d=E(t.end).getTime();if(!(a<=d))throw new RangeError("Invalid interval");return n>=a&&n<=d}function D(e){return l(1,arguments),function(e,t){l(2,arguments);var n=N(e),a=N(t);return n.getTime()===a.getTime()}(e,Date.now())}const y=function(e){let t=n(e);Array.isArray(t)||(t=[]);const s=document.querySelector(`#${e}-add-task`),c=document.querySelector("#all-page-header");s.addEventListener("click",(()=>{const n=prompt("Enter task name:");if(n){const l={taskName:n,isComplete:!1,isImportant:!1,dueDate:new Date};t.push(l),a(e,t),document.querySelector("#all-tab-page");const i=document.createElement("button");i.classList.add("task");const u=document.createElement("button");u.classList.add("task");const p=document.querySelector("#today-header"),m=document.createElement("button");m.classList.add("task");const v=document.querySelector("#week-header"),C=document.createElement("button");C.classList.add("task"),i.textContent=n,u.textContent=n,m.textContent=n,C.textContent=n;const h=t.findIndex((e=>e.taskName===l.taskName)),L=document.createElement("div");L.classList.add("task-btns-container"),i.appendChild(L);const g=document.createElement("div");g.classList.add("task-btns-container"),u.appendChild(g);const b=document.createElement("div");b.classList.add("task-btns-container"),m.appendChild(b);const E=document.createElement("div");E.classList.add("task-btns-container"),C.appendChild(E);const y=document.createElement("button");y.classList.add("del-task"),y.textContent="Delete";const x=document.createElement("button");x.classList.add("del-task"),x.textContent="Delete";const S=document.createElement("button");S.classList.add("del-task"),S.textContent="Delete";const w=document.createElement("button");w.classList.add("del-task"),w.textContent="Delete";const I=document.createElement("button");I.classList.add("important-toggle"),I.textContent="Important";const q=document.createElement("button");q.classList.add("important-toggle"),q.textContent="Important";const A=document.createElement("button");A.classList.add("important-toggle"),A.textContent="Important";const $=document.createElement("button");$.classList.add("important-toggle"),$.textContent="Important";const T=document.createElement("button");T.classList.add("incomplete"),T.textContent="Incomplete";const j=document.createElement("button");j.classList.add("incomplete"),j.textContent="Incomplete";const U=document.createElement("button");U.classList.add("incomplete"),U.textContent="Incomplete";const O=document.createElement("button");O.classList.add("incomplete"),O.textContent="Incomplete";const M=document.createElement("button");M.classList.add("incomplete"),M.textContent="Incomplete";const J=document.createElement("input");J.type="date",J.classList.add("pick-date");const P=document.createElement("input");P.type="date",P.classList.add("pick-date");const Z=document.createElement("input");Z.type="date",Z.classList.add("pick-date");const z=document.createElement("input");z.type="date",z.classList.add("pick-date");const B=document.createElement("input");B.type="date",B.classList.add("pick-date");const _=document.createElement("input");_.type="date",_.classList.add("pick-date"),L.appendChild(J),g.appendChild(P),g.appendChild(q),L.appendChild(I),g.appendChild(j),L.appendChild(T),g.appendChild(x),L.appendChild(y),b.appendChild(B),b.appendChild(A),b.appendChild(O),b.appendChild(S),E.appendChild(_),E.appendChild($),E.appendChild(M),E.appendChild(w),s.parentNode.insertBefore(i,s),c.parentNode.appendChild(u),document.querySelector("#importatn-tab-page");const F=document.createElement("button");F.classList.add("task"),F.textContent=n;const H=document.createElement("div");H.classList.add("task-btns-container"),F.appendChild(H);const Y=document.createElement("button");Y.classList.add("del-task"),Y.textContent="Delete";const R=document.createElement("button");R.classList.add("important-toggle"),R.textContent="Important",H.appendChild(Z),H.appendChild(R),H.appendChild(U),H.appendChild(Y);const W=document.querySelector("#important-header"),G=document.createElement("button");G.classList.add("task"),G.textContent=n;const K=document.createElement("div");K.classList.add("task-btns-container"),G.appendChild(K);const Q=document.createElement("button");Q.classList.add("del-task"),Q.textContent="Delete";const V=document.createElement("button");V.classList.add("incomplete"),V.textContent="Incomplete";const X=document.createElement("button");X.classList.add("important-toggle"),X.textContent="Important",K.appendChild(z),K.appendChild(X),K.appendChild(V),K.appendChild(Q);const ee=document.querySelector("#comp-header");function te(){J.addEventListener("input",(()=>{const t=r(J.value);l.dueDate=J.value;const n=new Date,a=N(n),d=k(n,7);P.value=J.value,Z.value=J.value,z.value=J.value,B.value=J.value,_.value=J.value,l.dueDate=J.value,o(e,h,{dueDate:l.dueDate}),f(t,{start:a,end:d})?v.parentNode.appendChild(C):v.parentNode.contains(C)&&v.parentNode.removeChild(C),D(t)?p.parentNode.appendChild(m):p.parentNode.contains(m)&&p.parentNode.removeChild(m)})),P.addEventListener("input",(()=>{const t=r(P.value);l.dueDate=P.value;const n=new Date,a=N(n),d=k(n,7);J.value=P.value,Z.value=P.value,z.value=P.value,B.value=P.value,_.value=P.value,l.dueDate=J.value,o(e,h,{dueDate:l.dueDate}),f(t,{start:a,end:d})?v.parentNode.appendChild(C):v.parentNode.contains(C)&&v.parentNode.removeChild(C),D(t)?p.parentNode.appendChild(m):p.parentNode.contains(m)&&p.parentNode.removeChild(m)})),Z.addEventListener("input",(()=>{const t=r(Z.value);l.dueDate=Z.value;const n=new Date,a=N(n),d=k(n,7);J.value=Z.value,P.value=Z.value,z.value=Z.value,B.value=Z.value,_.value=Z.value,l.dueDate=J.value,o(e,h,{dueDate:l.dueDate}),f(t,{start:a,end:d})?v.parentNode.appendChild(C):v.parentNode.contains(C)&&v.parentNode.removeChild(C),D(t)?p.parentNode.appendChild(m):p.parentNode.contains(m)&&p.parentNode.removeChild(m)})),z.addEventListener("input",(()=>{const t=r(z.value);l.dueDate=z.value;const n=new Date,a=N(n),d=k(n,7);J.value=z.value,P.value=z.value,Z.value=z.value,B.value=z.value,_.value=z.value,l.dueDate=J.value,o(e,h,{dueDate:l.dueDate}),f(t,{start:a,end:d})?v.parentNode.appendChild(C):v.parentNode.contains(C)&&v.parentNode.removeChild(C),D(t)?p.parentNode.appendChild(m):p.parentNode.contains(m)&&p.parentNode.removeChild(m)})),B.addEventListener("input",(()=>{const t=r(B.value);l.dueDate=B.value;const n=new Date,a=N(n),d=k(n,7);J.value=B.value,P.value=B.value,Z.value=B.value,z.value=B.value,_.value=B.value,l.dueDate=J.value,o(e,h,{dueDate:l.dueDate}),f(t,{start:a,end:d})?v.parentNode.appendChild(C):v.parentNode.contains(C)&&v.parentNode.removeChild(C),D(t)?p.parentNode.appendChild(m):p.parentNode.contains(m)&&p.parentNode.removeChild(m)})),_.addEventListener("input",(()=>{const t=r(_.value);l.dueDate=_.value;const n=new Date,a=N(n),d=k(n,7);J.value=_.value,P.value=_.value,Z.value=_.value,z.value=_.value,B.value=_.value,l.dueDate=J.value,o(e,h,{dueDate:l.dueDate}),f(t,{start:a,end:d})?v.parentNode.appendChild(C):v.parentNode.contains(C)&&v.parentNode.removeChild(C),D(t)?p.parentNode.appendChild(m):p.parentNode.contains(m)&&p.parentNode.removeChild(m)}))}function ne(){T.addEventListener("click",(()=>{oe()})),j.addEventListener("click",(()=>{oe()})),U.addEventListener("click",(()=>{oe()})),V.addEventListener("click",(()=>{oe()})),O.addEventListener("click",(()=>{oe()})),M.addEventListener("click",(()=>{oe()}))}function ae(){I.addEventListener("click",(()=>{se()})),q.addEventListener("click",(()=>{se()})),R.addEventListener("click",(()=>{se()})),X.addEventListener("click",(()=>{se()})),A.addEventListener("click",(()=>{se()})),$.addEventListener("click",(()=>{se()}))}function de(){y.addEventListener("click",(()=>{ce()})),x.addEventListener("click",(()=>{ce()})),Y.addEventListener("click",(()=>{ce()})),Q.addEventListener("click",(()=>{ce()})),S.addEventListener("click",(()=>{ce()})),w.addEventListener("click",(()=>{ce()}))}function oe(){l.isComplete?(T.classList.remove("complete"),T.textContent="Incomplete",j.classList.remove("complete"),j.textContent="Incomplete",U.classList.remove("complete"),U.textContent="Incomplete",ee.parentNode.contains(G)&&ee.parentElement.removeChild(G),l.isComplete=!1):(T.classList.add("complete"),T.textContent="Complete",j.classList.add("complete"),j.textContent="Complete",U.classList.add("complete"),U.textContent="Complete",V.classList.add("complete"),V.textContent="Complete",ee.parentElement.appendChild(G),l.isComplete=!0),o(e,h,{isComplete:l.isComplete})}function se(){I.classList.contains("toggle-on")?(I.classList.remove("toggle-on"),q.classList.remove("toggle-on"),W.parentNode.removeChild(F),X.classList.remove("toggle-on"),A.classList.remove("toggle-on"),$.classList.remove("toggle-on"),l.isImportant=!1):(I.classList.add("toggle-on"),q.classList.add("toggle-on"),W.parentNode.appendChild(F),R.classList.add("toggle-on"),X.classList.add("toggle-on"),A.classList.add("toggle-on"),$.classList.add("toggle-on"),l.isImportant=!0),o(e,h,{isImportant:l.isImportant})}function ce(){-1!==h&&(d(e,h),i.parentNode.removeChild(i),u.parentNode.removeChild(u),W.parentNode.contains(F)&&W.parentNode.removeChild(F),ee.parentNode.contains(G)&&ee.parentElement.removeChild(G),p.parentNode.contains(m)&&p.parentElement.removeChild(m),v.parentNode.contains(C)&&v.parentElement.removeChild(C))}o(e,h,l.taskName),te(),ne(),ae(),de()}}))},x=function(){document.addEventListener("DOMContentLoaded",(()=>{t().forEach((e=>{document.querySelector(".new-proj"),e.tabName;const t=e.tabNameDash,a=document.querySelector(`#${t}-tab-page`),s=document.querySelector("#all-page-header");let c=n(t);const l=document.querySelector(`#${t}-add-task`);n(t).forEach((e=>{const n=e.taskName;e.isImportant,e.isComplete,e.dueDate;const i=c.findIndex((t=>t.taskName===e.taskName));o(t,i,e.taskName),document.querySelector("#all-tab-page");const u=document.createElement("button");u.classList.add("task");const p=document.createElement("button");p.classList.add("task");const m=document.querySelector("#today-header"),v=document.createElement("button");v.classList.add("task");const C=document.querySelector("#week-header"),h=document.createElement("button");h.classList.add("task"),u.textContent=n,p.textContent=n,v.textContent=n,h.textContent=n;const L=document.createElement("div");L.classList.add("task-btns-container"),u.appendChild(L);const g=document.createElement("div");g.classList.add("task-btns-container"),p.appendChild(g);const b=document.createElement("div");b.classList.add("task-btns-container"),v.appendChild(b);const E=document.createElement("div");E.classList.add("task-btns-container"),h.appendChild(E);const y=document.createElement("button");y.classList.add("del-task"),y.textContent="Delete";const x=document.createElement("button");x.classList.add("del-task"),x.textContent="Delete";const S=document.createElement("button");S.classList.add("del-task"),S.textContent="Delete";const w=document.createElement("button");w.classList.add("del-task"),w.textContent="Delete";const I=document.createElement("button");I.classList.add("important-toggle"),e.isImportant&&I.classList.add("toggle-on"),I.textContent="Important";const q=document.createElement("button");q.classList.add("important-toggle"),e.isImportant&&q.classList.add("toggle-on"),q.textContent="Important";const A=document.createElement("button");A.classList.add("important-toggle"),e.isImportant&&A.classList.add("toggle-on"),A.textContent="Important";const $=document.createElement("button");$.classList.add("important-toggle"),e.isImportant&&$.classList.add("toggle-on"),$.textContent="Important";const T=document.createElement("button");T.classList.add("important-toggle"),e.isImportant&&T.classList.add("toggle-on"),T.textContent="Important";const j=document.createElement("button");j.classList.add("important-toggle"),e.isImportant&&j.classList.add("toggle-on"),j.textContent="Important";const U=document.createElement("button");U.classList.add("incomplete"),e.isComplete?(U.classList.add("complete"),U.textContent="Complete"):U.textContent="Incomplete";const O=document.createElement("button");O.classList.add("incomplete"),O.textContent="Incomplete",e.isComplete?(O.classList.add("complete"),O.textContent="Complete"):O.textContent="Incomplete";const M=document.createElement("button");M.classList.add("incomplete"),M.textContent="Incomplete",e.isComplete?(M.classList.add("complete"),M.textContent="Complete"):M.textContent="Incomplete";const J=document.createElement("button");J.classList.add("incomplete"),J.textContent="Incomplete",e.isComplete?(J.classList.add("complete"),J.textContent="Complete"):J.textContent="Incomplete";const P=document.createElement("button");P.classList.add("incomplete"),P.textContent="Incomplete",e.isComplete?(P.classList.add("complete"),P.textContent="Complete"):P.textContent="Incomplete";const Z=document.createElement("button");Z.classList.add("incomplete"),e.isComplete?(Z.classList.add("complete"),Z.textContent="Complete"):Z.textContent="Incomplete";const z=document.createElement("input");z.type="date",z.classList.add("pick-date"),z.value=e.dueDate;const B=document.createElement("input");B.type="date",B.classList.add("pick-date"),B.value=e.dueDate;const _=document.createElement("input");_.type="date",_.classList.add("pick-date"),_.value=e.dueDate;const F=document.createElement("input");F.type="date",F.classList.add("pick-date"),F.value=e.dueDate;const H=document.createElement("input");H.type="date",H.classList.add("pick-date"),H.value=e.dueDate;const Y=document.createElement("input");Y.type="date",Y.classList.add("pick-date"),Y.value=e.dueDate;const R=r(z.value),W=new Date;f(R,{start:N(W),end:k(W,7)})?C.parentNode.appendChild(h):C.parentNode.contains(h)&&C.parentNode.removeChild(h),D(R)?m.parentNode.appendChild(v):m.parentNode.contains(v)&&m.parentNode.removeChild(v),L.appendChild(z),g.appendChild(B),g.appendChild(q),L.appendChild(I),g.appendChild(O),L.appendChild(U),g.appendChild(x),L.appendChild(y),b.appendChild(H),b.appendChild(A),b.appendChild(J),b.appendChild(S),E.appendChild(Y),E.appendChild($),E.appendChild(P),E.appendChild(w),a.insertBefore(u,l),s.parentNode.appendChild(p),document.querySelector("#importatn-tab-page");const G=document.createElement("button");G.classList.add("task"),G.textContent=n;const K=document.createElement("div");K.classList.add("task-btns-container"),G.appendChild(K);const Q=document.createElement("button");Q.classList.add("del-task"),Q.textContent="Delete",K.appendChild(_),K.appendChild(T),K.appendChild(M),K.appendChild(Q);const V=document.querySelector("#important-header"),X=document.createElement("button");X.classList.add("task"),X.textContent=n;const ee=document.createElement("div");ee.classList.add("task-btns-container"),X.appendChild(ee);const te=document.createElement("button");te.classList.add("del-task"),te.textContent="Delete",ee.appendChild(F),ee.appendChild(j),ee.appendChild(Z),ee.appendChild(te),I.classList.contains("toggle-on")&&V.parentNode.appendChild(G);const ne=document.querySelector("#comp-header");function ae(){e.isComplete?(U.classList.remove("complete"),U.textContent="Incomplete",O.classList.remove("complete"),O.textContent="Incomplete",M.classList.remove("complete"),M.textContent="Incomplete",ne.parentNode.contains(X)&&ne.parentElement.removeChild(X),e.isComplete=!1):(U.classList.add("complete"),U.textContent="Complete",O.classList.add("complete"),O.textContent="Complete",M.classList.add("complete"),M.textContent="Complete",Z.classList.add("complete"),Z.textContent="Complete",ne.parentElement.appendChild(X),e.isComplete=!0),o(t,i,{isComplete:e.isComplete})}function de(){I.classList.contains("toggle-on")?(I.classList.remove("toggle-on"),q.classList.remove("toggle-on"),V.parentNode.removeChild(G),j.classList.remove("toggle-on"),A.classList.remove("toggle-on"),$.classList.remove("toggle-on"),e.isImportant=!1):(I.classList.add("toggle-on"),q.classList.add("toggle-on"),V.parentNode.appendChild(G),T.classList.add("toggle-on"),j.classList.add("toggle-on"),A.classList.add("toggle-on"),$.classList.add("toggle-on"),e.isImportant=!0),o(t,i,{isImportant:e.isImportant})}function oe(){-1!==i&&(d(t,i),u.parentNode.removeChild(u),p.parentNode.removeChild(p),V.parentNode.contains(G)&&V.parentNode.removeChild(G),ne.parentNode.contains(X)&&ne.parentElement.removeChild(X),m.parentNode.contains(v)&&m.parentElement.removeChild(v),C.parentNode.contains(h)&&C.parentElement.removeChild(h))}Z.classList.contains("complete")&&ne.parentNode.appendChild(X),u.setAttribute("id",`${t}-task`),p.setAttribute("id",`${t}-task-all`),v.setAttribute("id",`${t}-task-today`),h.setAttribute("id",`${t}-task-week`),G.setAttribute("id",`${t}-task-important`),X.setAttribute("id",`${t}-task-complete`),z.addEventListener("input",(()=>{const n=r(z.value);e.dueDate=z.value;const a=new Date,d=N(a),s=k(a,7);B.value=z.value,_.value=z.value,F.value=z.value,H.value=z.value,Y.value=z.value,e.dueDate=z.value,o(t,i,{dueDate:e.dueDate}),f(n,{start:d,end:s})?C.parentNode.appendChild(h):C.parentNode.contains(h)&&C.parentNode.removeChild(h),D(n)?m.parentNode.appendChild(v):m.parentNode.contains(v)&&m.parentNode.removeChild(v)})),B.addEventListener("input",(()=>{const n=r(B.value);e.dueDate=B.value;const a=new Date,d=N(a),s=k(a,7);z.value=B.value,_.value=B.value,F.value=B.value,H.value=B.value,Y.value=B.value,e.dueDate=z.value,o(t,i,{dueDate:e.dueDate}),f(n,{start:d,end:s})?C.parentNode.appendChild(h):C.parentNode.contains(h)&&C.parentNode.removeChild(h),D(n)?m.parentNode.appendChild(v):m.parentNode.contains(v)&&m.parentNode.removeChild(v)})),_.addEventListener("input",(()=>{const n=r(_.value);e.dueDate=_.value;const a=new Date,d=N(a),s=k(a,7);z.value=_.value,B.value=_.value,F.value=_.value,H.value=_.value,Y.value=_.value,e.dueDate=z.value,o(t,i,{dueDate:e.dueDate}),f(n,{start:d,end:s})?C.parentNode.appendChild(h):C.parentNode.contains(h)&&C.parentNode.removeChild(h),D(n)?m.parentNode.appendChild(v):m.parentNode.contains(v)&&m.parentNode.removeChild(v)})),F.addEventListener("input",(()=>{const n=r(F.value);e.dueDate=F.value;const a=new Date,d=N(a),s=k(a,7);z.value=F.value,B.value=F.value,_.value=F.value,H.value=F.value,Y.value=F.value,e.dueDate=z.value,o(t,i,{dueDate:e.dueDate}),f(n,{start:d,end:s})?C.parentNode.appendChild(h):C.parentNode.contains(h)&&C.parentNode.removeChild(h),D(n)?m.parentNode.appendChild(v):m.parentNode.contains(v)&&m.parentNode.removeChild(v)})),H.addEventListener("input",(()=>{const n=r(H.value);e.dueDate=H.value;const a=new Date,d=N(a),s=k(a,7);z.value=H.value,B.value=H.value,_.value=H.value,F.value=H.value,Y.value=H.value,e.dueDate=z.value,o(t,i,{dueDate:e.dueDate}),f(n,{start:d,end:s})?C.parentNode.appendChild(h):C.parentNode.contains(h)&&C.parentNode.removeChild(h),D(n)?m.parentNode.appendChild(v):m.parentNode.contains(v)&&m.parentNode.removeChild(v)})),Y.addEventListener("input",(()=>{const n=r(Y.value);e.dueDate=Y.value;const a=new Date,d=N(a),s=k(a,7);z.value=Y.value,B.value=Y.value,_.value=Y.value,F.value=Y.value,H.value=Y.value,e.dueDate=z.value,o(t,i,{dueDate:e.dueDate}),f(n,{start:d,end:s})?C.parentNode.appendChild(h):C.parentNode.contains(h)&&C.parentNode.removeChild(h),D(n)?m.parentNode.appendChild(v):m.parentNode.contains(v)&&m.parentNode.removeChild(v)})),U.addEventListener("click",(()=>{ae()})),O.addEventListener("click",(()=>{ae()})),M.addEventListener("click",(()=>{ae()})),Z.addEventListener("click",(()=>{ae()})),J.addEventListener("click",(()=>{ae()})),P.addEventListener("click",(()=>{ae()})),I.addEventListener("click",(()=>{de()})),q.addEventListener("click",(()=>{de()})),T.addEventListener("click",(()=>{de()})),j.addEventListener("click",(()=>{de()})),A.addEventListener("click",(()=>{de()})),$.addEventListener("click",(()=>{de()})),y.addEventListener("click",(()=>{oe()})),x.addEventListener("click",(()=>{oe()})),Q.addEventListener("click",(()=>{oe()})),te.addEventListener("click",(()=>{oe()})),S.addEventListener("click",(()=>{oe()})),w.addEventListener("click",(()=>{oe()}))}))}))}))},S=function(){document.addEventListener("DOMContentLoaded",(()=>{let e=t();Array.isArray(e)||(e=[]),e.forEach((e=>{const a=document.querySelector(".new-proj"),d=e.tabName,o=e.tabNameDash,c=document.createElement("button");c.classList.add("sidebar-tab","new-tab"),c.setAttribute("id",`${o}-tab`),c.textContent=d,a.parentNode.insertBefore(c,a);const l=document.querySelector("#body-container"),i=document.createElement("div");i.setAttribute("id",`${o}-tab-page`),i.classList.add("main-content-container","show-hide","hide"),l.appendChild(i);const r=document.createElement("h1");r.classList.add("page-header"),r.textContent=`${d}`,i.appendChild(r),x();const u=document.createElement("button");document.querySelector("#all-page-header"),u.textContent="+ Add Task",u.setAttribute("id",`${o}-add-task`),u.classList.add("add-task");const p=document.querySelector(`#${o}-tab-page`);if("Unassigned"!=e.tabNameDash){const d=document.createElement("button");d.classList.add("delete-project"),d.textContent="Delete Project",r.appendChild(d),document.querySelector(".sidebar"),a.parentNode.insertBefore(c,a),d.addEventListener("click",(()=>{const a=e.tabNameDash,d=n(a);(function(e){const t=JSON.parse(localStorage.getItem("projects"))||[],n=t.findIndex((t=>t.tabNameDash===e));-1!==n&&(t.splice(n,1),localStorage.setItem("projects",JSON.stringify(t)))})(a),s(a);const o=document.querySelector(`#${a}-tab-page`);o&&o.remove(),c.remove(),d.forEach((e=>{const t=document.querySelector(`#${e.taskName}-task-all`),n=document.querySelector(`#${e.taskName}-task-today`),a=document.querySelector(`#${e.taskName}-task-week`),d=document.querySelector(`#${e.taskName}-task-important`),o=document.querySelector(`#${e.taskName}-task-complete`);t&&t.remove(),n&&n.remove(),a&&a.remove(),d&&d.remove(),o&&o.remove()})),t(),window.location.reload()}))}p.contains(u)||p.appendChild(u),c.addEventListener("click",(()=>{y(o)}))}))}))},w=function(){t(),n(),x(),S();let a=t();const d=document.querySelector(".sidebar");Array.isArray(a)||(a=[]),a.some((e=>"Unassigned"===e.tabName));const o=document.querySelector(".new-proj"),c=document.createElement("div");c.classList.add("proj-container");const l=document.createElement("input");l.classList.add("proj-name"),c.classList.add("sidebar-tab"),l.placeholder="Project Name";const i=document.createElement("button"),r=document.createElement("button");i.textContent="Add",i.type="submit",r.textContent="Cancel",i.classList.add("proj-btn"),r.classList.add("proj-btn"),c.appendChild(l),c.appendChild(i),c.appendChild(r),o.parentNode.insertBefore(c,o);const u=c.querySelector(".proj-name");i.addEventListener("click",(()=>{const e=u.value;let l;if(l=e.includes(" ")?e.replace(/\s+/g,"-"):e,l=function(e){const t=e.replace(/[^A-Za-z0-9-_]/g,"");return/^[^A-Za-z_]/.test(t)?"_"+t:t}(l),""==e||" "==e.charAt(0))return void alert("Enter a valid name");const i={tabName:e,tabNameDash:l};a.push(i),function(e){localStorage.setItem("projects",JSON.stringify(e)),console.log("Data saved",e)}(a);const r=t();r?console.log("loaded projects data: ",r):console.log("Project data ot found in local storage");const p=document.createElement("button");p.classList.add("sidebar-tab","new-tab"),p.setAttribute("id",`${l}-tab`),p.textContent=e;const m=document.querySelector("#body-container"),v=document.createElement("div");v.setAttribute("id",`${l}-tab-page`),v.classList.add("main-content-container","show-hide","hide"),m.appendChild(v);const C=document.createElement("h1");C.classList.add("page-header"),C.textContent=`${e}`,v.appendChild(C);const h=document.createElement("button");h.classList.add("delete-project"),h.textContent="Delete Project",C.appendChild(h),d.removeChild(c),o.parentNode.insertBefore(p,o);const L=document.createElement("button");document.querySelector("#all-page-header"),L.textContent="+ Add Task",L.setAttribute("id",`${l}-add-task`),L.classList.add("add-task");const g=document.querySelector(`#${l}-tab-page`);g.contains(L)||g.appendChild(L),y(l),h.addEventListener("click",(()=>{const e=i.tabNameDash,a=n(e);!function(e){const t=JSON.parse(localStorage.getItem("projects"))||[],n=t.findIndex((t=>t.tabNameDash===e));-1!==n&&(t.splice(n,1),localStorage.setItem("projects",JSON.stringify(t)))}(e),s(e);const d=document.querySelector(`#${e}-tab-page`);d&&d.remove(),p.remove(),a.forEach((e=>{const t=document.querySelector(`#${e.taskName}-task-all`),n=document.querySelector(`#${e.taskName}-task-today`),a=document.querySelector(`#${e.taskName}-task-week`),d=document.querySelector(`#${e.taskName}-task-important`),o=document.querySelector(`#${e.taskName}-task-complete`);t&&t.remove(),n&&n.remove(),a&&a.remove(),d&&d.remove(),o&&o.remove()})),t(),window.location.reload()}))})),r.addEventListener("click",(()=>{d.removeChild(c)})),e()};console.log([]);!function(){let n=t();const a=document.querySelector("#Unassigned-tab-page"),d=n.some((e=>"Unassigned"===e.tabName));if(!a&&!d){const e={tabName:"Unassigned",tabNameDash:"Unassigned"},t=document.createElement("div");t.setAttribute("id","Unassigned-tab-page"),t.classList.add("main-content-container","show-hide","hide");const a=document.createElement("h1");a.classList.add("page-header"),a.textContent="Unassigned",t.appendChild(a),n.push(e),function(e){localStorage.setItem("projects",JSON.stringify(e)),console.log("Data saved",e)}(n)}S(),x(),function(){const t=document.querySelector("#body-container"),n=document.createElement("div");n.classList.add("sidebar"),t.appendChild(n);const a=document.createElement("div");a.classList.add("sidebar-header"),a.setAttribute("id","home"),a.textContent="Home",n.appendChild(a);const d=document.createElement("button"),o=document.createElement("button"),s=document.createElement("button"),c=document.createElement("button");d.classList.add("sidebar-tab","active","page-tab"),d.setAttribute("id","all-tab"),o.classList.add("sidebar-tab","page-tab"),o.setAttribute("id","today-tab"),s.classList.add("sidebar-tab","page-tab"),s.setAttribute("id","week-tab"),c.classList.add("sidebar-tab","page-tab"),c.setAttribute("id","important-tab"),d.textContent="All Tasks",o.textContent="Today",s.textContent="Week",c.textContent="Important",n.appendChild(d),n.appendChild(o),n.appendChild(s),n.appendChild(c);const l=document.createElement("div");l.classList.add("sidebar-header"),l.setAttribute("id","projects"),l.textContent="Projects",n.appendChild(l);const i=document.createElement("button");i.classList.add("sidebar-tab","page-tab"),i.setAttribute("id","unassigned-tab"),i.textContent="Unassigned";const r=document.createElement("button");r.classList.add("new-proj"),r.classList.add("sidebar-tab"),r.textContent="+ New Project",n.appendChild(r);const u=document.createElement("div");u.classList.add("sidebar-header"),u.textContent="Completed",n.appendChild(u);const p=document.createElement("button");p.classList.add("sidebar-tab","page-tab"),p.setAttribute("id","all-completed-tab"),p.textContent="All",n.appendChild(p),r.addEventListener("click",(()=>{document.querySelector(".proj-container")||w()})),n.addEventListener("click",(e=>{const t=e.target;t.classList.contains("sidebar-tab")&&function(e){const t=`${e.id}-page`,n=document.querySelector(`#${t}`);n&&(document.querySelectorAll(".sidebar-tab").forEach((e=>{e.classList.remove("active")})),e.classList.add("active"),document.querySelectorAll(".main-content-container").forEach((e=>{e.classList.add("hide")})),n.classList.remove("hide"))}(t)})),document.querySelector(".new-proj").addEventListener("click",(()=>{document.querySelector(".proj-container")||w()})),e()}(),function(){const e=document.querySelector("#body-container"),t=document.createElement("div");t.setAttribute("id","all-tab-page"),t.classList.add("main-content-container","show-hide");const n=document.createElement("div");n.classList.add("show-hide"),t.appendChild(n),e.appendChild(t);const a=document.createElement("h1");a.classList.add("page-header"),a.setAttribute("id","all-page-header"),a.textContent="All Tasks",t.appendChild(a)}(),function(){const e=document.querySelector("#body-container"),t=document.createElement("div");t.classList.add("main-content-container","show-hide","hide"),t.setAttribute("id","all-completed-tab-page");const n=document.createElement("div");n.classList.add("show-hide"),t.appendChild(n),e.appendChild(t);const a=document.createElement("h1");a.classList.add("page-header"),a.setAttribute("id","comp-header"),a.textContent="Completed Tasks",t.appendChild(a)}(),function(){const e=document.querySelector("#body-container"),t=document.createElement("div");t.classList.add("main-content-container","show-hide","hide"),t.setAttribute("id","today-tab-page"),e.appendChild(t);const n=document.createElement("h1");n.classList.add("page-header"),n.setAttribute("id","today-header"),n.textContent="Today's Tasks",t.appendChild(n)}(),function(){const e=document.querySelector("#body-container"),t=document.createElement("div");t.setAttribute("id","week-tab-page"),t.classList.add("main-content-container","show-hide","hide");const n=document.createElement("div");n.classList.add("show-hide"),t.appendChild(n),e.appendChild(t);const a=document.createElement("h1");a.classList.add("page-header"),a.setAttribute("id","week-header"),a.textContent="Week's Tasks",t.appendChild(a)}(),function(){const e=document.querySelector("#body-container"),t=document.createElement("div");t.setAttribute("id","important-tab-page"),t.classList.add("main-content-container","show-hide","hide");const n=document.createElement("div");n.classList.add("show-hide"),t.appendChild(n),e.appendChild(t);const a=document.createElement("h1");a.classList.add("page-header"),a.setAttribute("id","important-header"),a.textContent="Important Tasks",t.appendChild(a)}()}()})();