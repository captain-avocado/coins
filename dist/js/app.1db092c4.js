(function(e){function t(t){for(var l,o,i=t[0],c=t[1],s=t[2],_=0,u=[];_<i.length;_++)o=i[_],n[o]&&u.push(n[o][0]),n[o]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(l=!1)}l&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var l={},n={app:0},r=[];function o(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=l,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(a,l,function(t){return e[t]}.bind(null,l));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/<coins>/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"41cb":function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var l=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header",{staticClass:"app__header",class:e.scrolled>0?"active":""}),a("div",{staticClass:"app__container"},[a("Table",{staticClass:"app__content"})],1)],1)},r=[],o=(a("9299"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),i=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"header"},[l("div",{staticClass:"header__container container"},[l("a",{attrs:{href:"#"}},[l("img",{staticClass:"header__logo",attrs:{src:a("a5f7")}})])])])}],c=(a("b0cf"),{}),s=c,d=(a("de5f"),a("2877")),_=Object(d["a"])(s,o,i,!1,null,"3b20c8c2",null),u=_.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrap"},[a("table",{staticClass:"table"},[e._m(0),a("tbody",[e._l(e.coins,function(t){return[a("tr",{staticClass:"table__row"},[a("td",{staticClass:"table__cell table__cell--center-aligned"},[e._v(e._s(t.rank))]),a("td",{staticClass:"table__cell table__cell--left-aligned"},[e._v(e._s(t.name))]),a("td",{staticClass:"table__cell table__cell--right-aligned"},[e._v(e._s(t.priceUsd))]),a("td",{staticClass:"table__cell table__cell--right-aligned"},[e._v(e._s(t.marketCapUsd))]),a("td",{staticClass:"table__cell table__cell--right-aligned"},[e._v(e._s(t.volumeUsd24Hr))])])]})],2)])])},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"table__head"},[a("tr",{staticClass:"table__row"},[a("td",{staticClass:"table__cell table__cell--head table__cell--center-aligned"},[e._v("Rank")]),a("td",{staticClass:"table__cell table__cell--head table__cell--left-aligned"},[e._v("Name")]),a("td",{staticClass:"table__cell table__cell--head table__cell--right-aligned"},[e._v("Price")]),a("td",{staticClass:"table__cell table__cell--head table__cell--right-aligned"},[e._v("Market Cap")]),a("td",{staticClass:"table__cell table__cell--head table__cell--right-aligned"},[e._v("Volume (24Hr)")])])])}],g=(a("7f7f"),a("7514"),a("c5f6"),{data:function(){return{coins:[]}},methods:{moneyConvert:function(e){return console.log(e),Math.abs(Number(e))>=1e9?Math.abs(Number(e))/1e9+"B":Math.abs(Number(e))>=1e6?Math.abs(Number(e))/1e6+"M":Math.abs(Number(e))>=1e3?Math.abs(Number(e))/1e3+"K":Math.abs(Number(e))},updateNums:function(e){console.log(e);for(var t=0;t<e.length;t++)e[t].marketCapUsd=moneyConvert(e[t].marketCapUsd);return e}},beforeCreate:function(){var e=this;fetch("https://api.coincap.io/v2/assets/").then(function(e){return e.json()}).then(function(t){e.coins=t.data.slice(0,15)}).catch(function(e){return e});var t=new WebSocket("wss://ws.coincap.io/trades/binance");t.onmessage=function(t){var a=JSON.parse(t.data),l=e.coins.find(function(e){return e.name.toLowerCase()===a.base});l&&(l.priceUsd=a.priceUsd,console.log(a),l.volumeUsd24Hr="buy"===a.direction?parseFloat(l.volumeUsd24Hr)+parseFloat(a.volume):parseFloat(l.volumeUsd24Hr)-parseFloat(a.volume),console.log(a.direction))}}}),v=g,h=(a("d950"),Object(d["a"])(v,f,p,!1,null,"77cba171",null)),b=h.exports,m={components:{Header:u,Table:b},data:function(){return{scrolled:!1}},methods:{handleScroll:function(){this.scrolled=window.scrollY}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},x=m,y=(a("5c0b"),Object(d["a"])(x,n,r,!1,null,null,null)),w=y.exports,C=a("41cb"),M=a.n(C),k=a("2f62");l["a"].use(k["a"]);var O=new k["a"].Store({state:{},mutations:{},actions:{}}),U=a("038a"),S=a.n(U);l["a"].use(S.a,{tagName:"svgicon"}),l["a"].config.productionTip=!1,new l["a"]({router:M.a,store:O,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var l=a("5e27"),n=a.n(l);n.a},"5e27":function(e,t,a){},9299:function(e,t,a){},a5f7:function(e,t,a){e.exports=a.p+"img/logo.e3920e91.svg"},b0cf:function(e,t,a){var l=a("038a");l.register({logo:{width:16,height:16,viewBox:"0 0 190.57 102.88",data:'<linearGradient id="svgicon_logo_a" gradientTransform="matrix(1 0 0 -1 0 127)" gradientUnits="userSpaceOnUse" x1="33.34" x2="33.34" y1="49.84" y2="84.13"><stop offset="0" stop-color="#5061ac"/><stop offset=".75" stop-color="#6ccef5" stop-opacity="0"/></linearGradient><linearGradient id="svgicon_logo_c" x1="8.57" x2="8.57" xlink:href="#svgicon_logo_a" y1="66.99" y2="84.13"/><linearGradient id="svgicon_logo_d" x1="58.1" x2="58.1" xlink:href="#svgicon_logo_a" y1="24.12" y2="84.13"/><linearGradient id="svgicon_logo_e" x1="82.88" x2="82.88" xlink:href="#svgicon_logo_a" y1="49.84" y2="84.13"/><linearGradient id="svgicon_logo_b" gradientTransform="matrix(1 0 0 -1 0 127)" gradientUnits="userSpaceOnUse" x1="107.65" x2="107.65" y1="66.99" y2="101.28"><stop offset="0" stop-color="#40b981"/><stop offset="1" stop-color="#77c7a0" stop-opacity="0"/></linearGradient><linearGradient id="svgicon_logo_f" x1="132.41" x2="132.41" xlink:href="#svgicon_logo_b" y1="66.99" y2="127"/><linearGradient id="svgicon_logo_g" x1="157.17" x2="157.17" xlink:href="#svgicon_logo_b" y1="66.99" y2="101.28"/><linearGradient id="svgicon_logo_h" x1="181.95" x2="181.95" xlink:href="#svgicon_logo_b" y1="66.99" y2="84.13"/><g _fill="#6ccef5"><rect pid="0" height="34.29" rx="8.57" width="17.15" x="24.77" y="42.87"/><circle pid="1" cx="8.58" cy="51.44" r="8.57"/><path pid="2" d="M58.11 42.87a8.59 8.59 0 0 0-8.57 8.57v42.87a8.57 8.57 0 0 0 17.14 0V51.44a8.59 8.59 0 0 0-8.57-8.57zM82.88 42.87a8.6 8.6 0 0 0-8.58 8.57v17.15a8.58 8.58 0 0 0 17.15 0V51.44a8.6 8.6 0 0 0-8.57-8.57z"/></g><rect pid="3" _fill="url(#svgicon_logo_a)" height="34.29" rx="8.57" width="17.15" x="24.77" y="42.87"/><circle pid="4" cx="8.57" cy="51.44" _fill="url(#svgicon_logo_c)" r="8.57"/><path pid="5" d="M58.11 42.87a8.6 8.6 0 0 0-8.58 8.57v42.87a8.58 8.58 0 0 0 17.15 0V51.44a8.6 8.6 0 0 0-8.57-8.57z" _fill="url(#svgicon_logo_d)"/><path pid="6" d="M82.87 42.87a8.6 8.6 0 0 0-8.57 8.57v17.15a8.58 8.58 0 0 0 17.15 0V51.44a8.6 8.6 0 0 0-8.58-8.57z" _fill="url(#svgicon_logo_e)"/><path pid="7" d="M107.64 25.72a8.6 8.6 0 0 0-8.57 8.57v17.15a8.58 8.58 0 0 0 17.15 0V34.29a8.6 8.6 0 0 0-8.58-8.57z" _fill="#64c3a4"/><rect pid="8" _fill="#64c3a4" height="60.01" rx="8.57" width="17.15" x="123.84"/><path pid="9" d="M157.18 25.72a8.59 8.59 0 0 0-8.57 8.57v17.15a8.57 8.57 0 0 0 17.14 0V34.29a8.6 8.6 0 0 0-8.57-8.57zM182 42.87a8.57 8.57 0 1 0 8.57 8.57 8.57 8.57 0 0 0-8.57-8.57z" _fill="#64c3a4"/><path pid="10" d="M107.64 25.72a8.6 8.6 0 0 0-8.57 8.57v17.15a8.58 8.58 0 0 0 17.15 0V34.29a8.6 8.6 0 0 0-8.58-8.57z" _fill="url(#svgicon_logo_b)"/><rect pid="11" _fill="url(#svgicon_logo_f)" height="60.01" rx="8.57" width="17.15" x="123.84"/><path pid="12" d="M157.18 25.72a8.6 8.6 0 0 0-8.58 8.57v17.15a8.58 8.58 0 0 0 17.15 0V34.29a8.6 8.6 0 0 0-8.57-8.57z" _fill="url(#svgicon_logo_g)"/><path pid="13" d="M181.94 42.87a8.57 8.57 0 1 0 8.58 8.57 8.57 8.57 0 0 0-8.58-8.57z" _fill="url(#svgicon_logo_h)"/>'}})},d950:function(e,t,a){"use strict";var l=a("edde"),n=a.n(l);n.a},de5f:function(e,t,a){"use strict";var l=a("f543"),n=a.n(l);n.a},edde:function(e,t,a){},f543:function(e,t,a){}});
//# sourceMappingURL=app.1db092c4.js.map