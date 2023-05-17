/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{554:function(t,e,n){"use strict";var r=n(528),o=n(523),c=n(522);const f=(object,t)=>t.some((t=>object instanceof t));let d,l;const w=new WeakMap,m=new WeakMap,h=new WeakMap,y=new WeakMap,v=new WeakMap;let I={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return m.get(t);if("objectStoreNames"===e)return t.objectStoreNames||h.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return j(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function S(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(k(this),e),j(w.get(this))}:function(...e){return j(t.apply(k(this),e))}:function(e,...n){const r=t.call(k(this),e,...n);return h.set(r,e.sort?e.sort():[e]),j(r)}}function C(t){return"function"==typeof t?S(t):(t instanceof IDBTransaction&&function(t){if(m.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",c),t.removeEventListener("abort",c)},o=()=>{e(),r()},c=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",c),t.addEventListener("abort",c)}));m.set(t,e)}(t),f(t,d||(d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,I):t)}function j(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",c)},o=()=>{e(j(t.result)),r()},c=()=>{n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",c)}));return e.then((e=>{e instanceof IDBCursor&&w.set(e,t)})).catch((()=>{})),v.set(e,t),e}(t);if(y.has(t))return y.get(t);const e=C(t);return e!==t&&(y.set(t,e),v.set(e,t)),e}const k=t=>v.get(t);const T=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],E=new Map;function P(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(E.get(e))return E.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=D.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!T.includes(n))return;const c=async function(t,...e){const c=this.transaction(t,o?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(e.shift())),(await Promise.all([f[n](...e),o&&c.done]))[0]};return E.set(e,c),c}I=(t=>({...t,get:(e,n,r)=>P(e,n)||t.get(e,n,r),has:(e,n)=>!!P(e,n)||t.has(e,n)}))(I);const B="@firebase/installations",O="0.6.4",L=1e4,$=`w:${O}`,N="FIS_v2",x="https://firebaseinstallations.googleapis.com/v1",A=36e5,M={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},V=new c.b("installations","Installations",M);function K(t){return t instanceof c.c&&t.code.includes("request-failed")}function _({projectId:t}){return`${x}/projects/${t}/installations`}function F(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function H(t,e){const n=(await e.json()).error;return V.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function W({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function J(t,{refreshToken:e}){const n=W(t);return n.append("Authorization",function(t){return`${N} ${t}`}(e)),n}async function R(t){const e=await t();return e.status>=500&&e.status<600?t():e}function z(t){return new Promise((e=>{setTimeout(e,t)}))}const U=/^[cdef][\w-]{21}$/,G="";function Q(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){const e=(n=t,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return e.substr(0,22)}(t);return U.test(e)?e:G}catch(t){return G}}function X(t){return`${t.appName}!${t.appId}`}const Y=new Map;function Z(t,e){const n=X(t);tt(n,e),function(t,e){const n=nt();n&&n.postMessage({key:t,fid:e});at()}(n,e)}function tt(t,e){const n=Y.get(t);if(n)for(const t of n)t(e)}let et=null;function nt(){return!et&&"BroadcastChannel"in self&&(et=new BroadcastChannel("[Firebase] FID Change"),et.onmessage=t=>{tt(t.data.key,t.data.fid)}),et}function at(){0===Y.size&&et&&(et.close(),et=null)}const ot="firebase-installations-database",it=1,st="firebase-installations-store";let ct=null;function ut(){return ct||(ct=function(t,e,{blocked:n,upgrade:r,blocking:o,terminated:c}={}){const f=indexedDB.open(t,e),d=j(f);return r&&f.addEventListener("upgradeneeded",(t=>{r(j(f.result),t.oldVersion,t.newVersion,j(f.transaction))})),n&&f.addEventListener("blocked",(()=>n())),d.then((t=>{c&&t.addEventListener("close",(()=>c())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),d}(ot,it,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(st)}})),ct}async function ft(t,e){const n=X(t),r=(await ut()).transaction(st,"readwrite"),o=r.objectStore(st),c=await o.get(n);return await o.put(e,n),await r.done,c&&c.fid===e.fid||Z(t,e.fid),e}async function pt(t){const e=X(t),n=(await ut()).transaction(st,"readwrite");await n.objectStore(st).delete(e),await n.done}async function lt(t,e){const n=X(t),r=(await ut()).transaction(st,"readwrite"),o=r.objectStore(st),c=await o.get(n),f=e(c);return void 0===f?await o.delete(n):await o.put(f,n),await r.done,!f||c&&c.fid===f.fid||Z(t,f.fid),f}async function gt(t){let e;const n=await lt(t.appConfig,(n=>{const r=function(t){const e=t||{fid:Q(),registrationStatus:0};return ht(e)}(n),o=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){return{installationEntry:e,registrationPromise:Promise.reject(V.create("app-offline"))}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(t,e){try{const n=await async function({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=_(t),o=W(t),c=e.getImmediate({optional:!0});if(c){const t=await c.getHeartbeatsHeader();t&&o.append("x-firebase-client",t)}const body={fid:n,authVersion:N,appId:t.appId,sdkVersion:$},f={method:"POST",headers:o,body:JSON.stringify(body)},d=await R((()=>fetch(r,f)));if(d.ok){const t=await d.json();return{fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:F(t.authToken)}}throw await H("Create Installation",d)}(t,e);return ft(t.appConfig,n)}catch(n){throw K(n)&&409===n.customData.serverCode?await pt(t.appConfig):await ft(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:wt(t)}:{installationEntry:e}}(t,r);return e=o.registrationPromise,o.installationEntry}));return n.fid===G?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function wt(t){let e=await mt(t.appConfig);for(;1===e.registrationStatus;)await z(100),e=await mt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await gt(t);return n||e}return e}function mt(t){return lt(t,(t=>{if(!t)throw V.create("installation-not-found");return ht(t)}))}function ht(t){return 1===(e=t).registrationStatus&&e.registrationTime+L<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}async function bt({appConfig:t,heartbeatServiceProvider:e},n){const r=function(t,{fid:e}){return`${_(t)}/${e}/authTokens:generate`}(t,n),o=J(t,n),c=e.getImmediate({optional:!0});if(c){const t=await c.getHeartbeatsHeader();t&&o.append("x-firebase-client",t)}const body={installation:{sdkVersion:$,appId:t.appId}},f={method:"POST",headers:o,body:JSON.stringify(body)},d=await R((()=>fetch(r,f)));if(d.ok){return F(await d.json())}throw await H("Generate Auth Token",d)}async function yt(t,e=!1){let n;const r=await lt(t.appConfig,(r=>{if(!It(r))throw V.create("not-registered");const o=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+A}(t)}(o))return r;if(1===o.requestStatus)return n=async function(t,e){let n=await vt(t.appConfig);for(;1===n.authToken.requestStatus;)await z(100),n=await vt(t.appConfig);const r=n.authToken;return 0===r.requestStatus?yt(t,e):r}(t,e),r;{if(!navigator.onLine)throw V.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function(t,e){try{const n=await bt(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ft(t.appConfig,r),n}catch(n){if(!K(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ft(t.appConfig,n)}else await pt(t.appConfig);throw n}}(t,e),e}}));return n?await n:r.authToken}function vt(t){return lt(t,(t=>{if(!It(t))throw V.create("not-registered");const e=t.authToken;return 1===(n=e).requestStatus&&n.requestTime+L<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n}))}function It(t){return void 0!==t&&2===t.registrationStatus}async function St(t,e=!1){const n=t;await async function(t){const{registrationPromise:e}=await gt(t);e&&await e}(n);return(await yt(n,e)).token}function Ct(t){return V.create("missing-app-config-values",{valueName:t})}const jt="installations",kt=t=>{const e=t.getProvider("app").getImmediate(),n=function(t){if(!t||!t.options)throw Ct("App Configuration");if(!t.name)throw Ct("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ct(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e);return{app:e,appConfig:n,heartbeatServiceProvider:Object(r._getProvider)(e,"heartbeat"),_delete:()=>Promise.resolve()}},Tt=t=>{const e=t.getProvider("app").getImmediate(),n=Object(r._getProvider)(e,jt).getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:n,registrationPromise:r}=await gt(e);return r?r.catch(console.error):yt(e).catch(console.error),n.fid}(n),getToken:t=>St(n,t)}};Object(r._registerComponent)(new o.a(jt,kt,"PUBLIC")),Object(r._registerComponent)(new o.a("installations-internal",Tt,"PRIVATE")),Object(r.registerVersion)(B,O),Object(r.registerVersion)(B,O,"esm2017")}}]);