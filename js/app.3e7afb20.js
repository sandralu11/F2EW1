(function(e){function n(n){for(var r,c,i=n[0],u=n[1],s=n[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(n);while(p.length)p.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"878a7f28"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(n){u.onerror=u.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var f=s;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0fdc":function(e,n,t){},1301:function(e,n,t){"use strict";t("0fdc")},"2d53":function(e,n,t){},"41e3":function(e,n,t){"use strict";t("2d53")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("HeadWrapper"),t("router-view"),t("FootWrapper")],1)},a=[],c=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("header",[r("nav",[r("ul",{staticClass:"logo"},[r("img",{attrs:{src:t("c2e4"),alt:"Travel Taiwan"}}),r("p",[e._v("Travel Taiwan")])]),r("ul",[r("li",[r("a",{attrs:{href:"#"}},[e._v("首頁")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("景點導覽")])]),r("li",[r("a",{attrs:{href:"#"}},[e._v("觀光活動")])])])])])}],u={},s=u,l=(t("1301"),t("2877")),f=Object(l["a"])(s,c,i,!1,null,"68ca2091",null),p=f.exports,d=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("footer",[t("p",[e._v("Copyright©2021F2ESandra")])])}],h={},b=h,m=(t("41e3"),Object(l["a"])(b,d,v,!1,null,"6c3b5f2d",null)),g=m.exports,w={components:{HeadWrapper:p,FootWrapper:g}},_=w,y=(t("5c0b"),Object(l["a"])(_,o,a,!1,null,null,null)),j=y.exports,O=t("9483");Object(O["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7"),t("3ca3"),t("ddb0");var x=t("8c4f"),E=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"})},k=[],P={name:"Home",components:{}},T=P,S=Object(l["a"])(T,E,k,!1,null,null,null),$=S.exports;r["a"].use(x["a"]);var C=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],A=new x["a"]({routes:C}),F=A,H=t("2f62");r["a"].use(H["a"]);var M=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}});t("b059");r["a"].config.productionTip=!1,new r["a"]({router:F,store:M,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){},b059:function(e,n,t){},c2e4:function(e,n,t){e.exports=t.p+"img/3.85c26c24.png"}});
//# sourceMappingURL=app.3e7afb20.js.map