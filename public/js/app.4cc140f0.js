(function(t){function e(e){for(var a,i,s=e[0],u=e[1],c=e[2],l=0,p=[];l<s.length;l++)i=s[l],r[i]&&p.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4707bff6"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t),o=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[n("NavBar")]},proxy:!0},{key:"default",fn:function(){return[n("router-view")]},proxy:!0},{key:"footer",fn:function(){return[n("p",[t._v("Build with Vue by ©petar")])]},proxy:!0}])})},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"App",attrs:{id:"app"}},[n("header",[t._t("header")],2),n("main",[t._t("default")],2),n("footer",[t._t("footer")],2)])},s=[],u={name:"app-layout"},c=u,l=(n("fd32"),n("2877")),f=Object(l["a"])(c,i,s,!1,null,"6bf6a23b",null),p=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-brand"},[n("router-link",{staticClass:"navbar-item",attrs:{to:{name:"home"}}},[n("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"}})]),n("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"mainNav"},on:{click:function(e){return e.preventDefault(),t.setIsActive(e)}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])],1),n("div",{staticClass:"navbar-menu main-menu",class:{"is-active":t.isActive},attrs:{id:"mainNav"}},[n("div",{staticClass:"navbar-end"},[n("router-link",{staticClass:"navbar-item",attrs:{exact:"",tag:"li",to:{name:"home"}}},[n("a",[t._v("Home")])]),n("router-link",{staticClass:"navbar-item",attrs:{tag:"li",to:{name:"about"}}},[n("a",[t._v("About")])])],1)])])])},d=[],b={name:"NavBar",data:function(){return{isActive:!1}},methods:{setIsActive:function(){this.isActive=!this.isActive}}},m=b,h=(n("9abc"),Object(l["a"])(m,v,d,!1,null,"b7d43c16",null)),g=h.exports,y={name:"app",components:{AppLayout:p,NavBar:g}},_=y,w=(n("5c0b"),Object(l["a"])(_,r,o,!1,null,null,null)),x=w.exports,j=n("8c4f"),C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],A={name:"home",components:{}},O=A,E=(n("7c83"),Object(l["a"])(O,C,k,!1,null,"56d0e5bc",null)),P=E.exports;a["a"].use(j["a"]);var S=new j["a"]({mode:"history",base:"/",linkExactActiveClass:"is-active",linkActiveClass:"is-active",routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),$=n("2f62");a["a"].use($["a"]);var N=new $["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:S,store:N,render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5e27":function(t,e,n){},6958:function(t,e,n){},"7c83":function(t,e,n){"use strict";var a=n("bd78"),r=n.n(a);r.a},"9abc":function(t,e,n){"use strict";var a=n("6958"),r=n.n(a);r.a},bd78:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},e29a:function(t,e,n){},fd32:function(t,e,n){"use strict";var a=n("e29a"),r=n.n(a);r.a}});
//# sourceMappingURL=app.4cc140f0.js.map