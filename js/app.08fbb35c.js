(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9348a4c8","chunk-3e08d9a4":"e270bbe8","chunk-a4bd06f4":"836b5e08"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-3e08d9a4":1,"chunk-a4bd06f4":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-3e08d9a4":"6d09b862","chunk-a4bd06f4":"218f0ff3"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/F2EW1/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"485c":function(t,e,n){"use strict";n("c12d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HeadWrapper"),n("router-view"),n("FootWrapper")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[t._m(0),n("ul",{staticClass:"list"},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),n("li",[n("router-link",{attrs:{to:"/ScenicSpot"}},[t._v("景點導覽")])],1),n("li",[n("router-link",{attrs:{to:"/Activity"}},[t._v("觀光活動")])],1)])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"logo"},[r("img",{attrs:{src:n("c2e4"),alt:"Travel Taiwan"}}),r("p",[t._v("Travel Taiwan")])])}],c={},l=c,u=(n("6365"),n("2877")),p=Object(u["a"])(l,i,s,!1,null,"ee870192",null),f=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("p",[t._v("Copyright©2021F2ESandra")])])}],v={},h=v,b=(n("ba58"),Object(u["a"])(h,d,m,!1,null,"1b494e76",null)),_=b.exports,g={components:{HeadWrapper:f,FootWrapper:_}},w=g,C=(n("5c0b"),Object(u["a"])(w,a,o,!1,null,null,null)),y=C.exports,S=n("9483");Object(S["a"])("".concat("/F2EW1/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var x=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("SelectWrapper"),n("div",{staticClass:"container"},[n("h2",[t._v("熱門景點")]),t._v(" \b"),n("p",[t._v("台灣的各個美景，都美不勝收。")]),n("p",[t._v(" 等你一同來發現這座寶島的奧妙！")]),t._l(t.list,(function(t,e){return n("CardsWrapper",{key:e,attrs:{name:t.Name,img:t.Picture.PictureUrl1}})})),n("h2",[t._v("活動類別")]),t._v(" \b"),n("p",[t._v("各種不同的活動內容")]),n("p",[t._v("邀請您一銅來共襄盛舉！")]),n("ActivityWrapper")],2),t._m(0)],1)},k=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slogn"},[r("img",{attrs:{src:n("878b"),alt:""}}),r("div",{staticClass:"text"},[r("p",[t._v("“To travel is to live” ")]),r("p",[t._v("– Hans Christian Anderson- ")])])])}],A=n("eda9"),O=n("9e9f"),j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view"},[n("ul",{staticClass:"list"},[n("li",{staticClass:"item"},[n("img",{attrs:{src:"https://source.unsplash.com/random/",alt:"img"}}),n("p",[t._v("年度活動")])]),n("li",{staticClass:"item"},[n("img",{attrs:{src:"https://source.unsplash.com/random/",alt:"img"}}),n("p",[t._v("藝文活動")])]),n("li",{staticClass:"item"},[n("img",{attrs:{src:"https://source.unsplash.com/random/",alt:"img"}}),n("p",[t._v("節慶活動")])]),n("li",{staticClass:"item"},[n("img",{attrs:{src:"https://source.unsplash.com/random/",alt:"img"}}),n("p",[t._v("其他活動")])])])])}],$={},W=$,P=(n("a9be"),Object(u["a"])(W,j,T,!1,null,"3afb8b8b",null)),H=P.exports,M=n("bc3a"),N=n.n(M),F=n("6c2d");function B(){return new Promise((function(t,e){N.a.get("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=8&$format=JSON",{headers:D()}).then((function(e){t(e.data)})).catch((function(t){e(t)}))}))}function D(){var t="847eb7ec3d9d4e528b8a036f32677810",e="17aOpeKrCslp6j4p7GQQMZkIMtY",n=(new Date).toGMTString(),r=new F["a"]("SHA-1","TEXT");r.setHMACKey(e,"TEXT"),r.update("x-date: "+n);var a=r.getHMAC("B64"),o='hmac username="'+t+'", algorithm="hmac-sha1", headers="x-date", signature="'+a+'"';return{Authorization:o,"X-Date":n}}var L={name:"Home",components:{SelectWrapper:A["a"],CardsWrapper:O["a"],ActivityWrapper:H},created:function(){var t=this;B().then((function(e){t.list=e}))},data:function(){return{list:[]}}},X=L,q=(n("9831"),Object(u["a"])(X,E,k,!1,null,"5bef0576",null)),J=q.exports;r["default"].use(x["a"]);var K=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/ScenicSpot",name:"ScenicSpot",component:function(){return n.e("chunk-a4bd06f4").then(n.bind(null,"dcdd"))}},{path:"/Activity",name:"Activity",component:function(){return n.e("chunk-3e08d9a4").then(n.bind(null,"abae"))}}],Q=new x["a"]({routes:K}),G=Q,I=n("2f62");r["default"].use(I["a"]);var U=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}}),z=(n("b059"),n("f9d5")),V=n.n(z);n("4413");r["default"].use(V.a),r["default"].config.productionTip=!1,new r["default"]({router:G,store:U,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6365:function(t,e,n){"use strict";n("c3e2")},"752e":function(t,e,n){},"809d":function(t,e,n){},"878b":function(t,e,n){t.exports=n.p+"img/unsplash_dQejX2ucPBs.de1987d9.png"},9831:function(t,e,n){"use strict";n("ee1e")},"9c0c":function(t,e,n){},"9e9f":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-container"},[n("div",{staticClass:"card"},[n("img",{attrs:{src:t.img,alt:"trawel"}}),n("div",{staticClass:"card-info"},[n("ul",[n("li",{staticClass:"name"},[t._v(t._s(t.name))]),t._m(0)]),t._m(1),n("AlertWrapper")],1)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"time-box"},[n("i",{staticClass:"bx bx-time-five"}),n("span",{staticClass:"time"},[t._v("全天候開放")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"locationn-box"},[n("i",{staticClass:"bx bxs-map"}),n("span",{staticClass:"location"},[t._v("臺東縣951綠島鄉")])])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:t.showAlert}},[t._v("了解更多")])},i=[],s={methods:{showAlert:function(){this.$swal("Hello Vue world!!!")}}},c=s,l=n("2877"),u=Object(l["a"])(c,o,i,!1,null,null,null),p=u.exports,f={components:{AlertWrapper:p},props:["name","img"]},d=f,m=(n("f5d7"),Object(l["a"])(d,r,a,!1,null,"3a7bdbb1",null));e["a"]=m.exports},a9be:function(t,e,n){"use strict";n("752e")},b059:function(t,e,n){},ba58:function(t,e,n){"use strict";n("f817")},c12d:function(t,e,n){},c2e4:function(t,e,n){t.exports=n.p+"img/3.85c26c24.png"},c3e2:function(t,e,n){},eda9:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("Swiper",{staticClass:"mySwiper"},[n("SwiperSlide",[n("img",{attrs:{src:"https://source.unsplash.com/random/1440x600/?travel",alt:"輪播"}})]),n("SwiperSlide",[n("img",{attrs:{src:"https://source.unsplash.com/random/1440x600/?city",alt:"輪播"}})]),n("SwiperSlide",[n("img",{attrs:{src:"https://source.unsplash.com/random/1440x600/?walk",alt:"輪播"}})])],1),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("Welcome to Travel Taiwan")]),n("div",{staticClass:"selectbox"},[n("select",[n("option",[t._v("類別")]),n("option",[t._v("Dog")]),n("option",[t._v("Cat")])]),n("select",[n("option",[t._v("所有縣市")]),n("option",[t._v("Dog")]),n("option",[t._v("Cat")])]),n("span",{staticClass:"icon"},[n("i",{staticClass:"bx bx-search-alt"})])])])}],o=n("7212"),i=(n("bbe3"),{components:{Swiper:o["Swiper"],SwiperSlide:o["SwiperSlide"]},directives:{swiper:o["directive"]}}),s=i,c=(n("485c"),n("2877")),l=Object(c["a"])(s,r,a,!1,null,"214b25e8",null);e["a"]=l.exports},ee1e:function(t,e,n){},f5d7:function(t,e,n){"use strict";n("809d")},f817:function(t,e,n){}});
//# sourceMappingURL=app.08fbb35c.js.map