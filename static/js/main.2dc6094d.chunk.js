(this["webpackJsonpreporter-react-tailwind-ts"]=this["webpackJsonpreporter-react-tailwind-ts"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n,r=a(1),c=a.n(r),i=a(14),s=a.n(i),o=(a(49),a(12)),l=a.n(o),u=a(15),d=a(5),b=a(6),j=a(4),h=function(e){var t=Object(r.useState)(""),a=Object(d.a)(t,2),n=a[0],c=a[1];return function(){var t=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!=e.lon){t.next=2;break}return t.abrupt("return","");case 2:return t.prev=2,t.next=5,fetch("https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=".concat(e.lat,"&lon=").concat(e.lon,"&accept-language=zh_tw&format=json&polygon_threshold=0.0"),{method:"GET",headers:{"x-rapidapi-host":"forward-reverse-geocoding.p.rapidapi.com","x-rapidapi-key":"764fd260b3msh993f28723a63f85p1ea974jsnaa720e9e39db"}});case 5:return a=t.sent,t.next=8,a.json();case 8:n=t.sent,c(n.address.country?n.address.country:n.address.state),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(2);case 14:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(){return t.apply(this,arguments)}}()(),Object(j.jsx)("span",{children:"undefined"==e.lon?"":"\u5730\u9ede "+n})},p=(a(52),a.p+"static/media/Capture_Side_By_Side_White.fcfe8b8d.svg"),v=a(40),f=a.n(v);a(53);!function(e){e.Dark="Dark",e.Light="Light"}(n||(n={}));var O=Object(r.createContext)({isFilter:!1,searchBar:"",setSearchBar:function(e){return console.warn("no theme provider")},setIsFilter:function(e){return console.warn("no theme provider")},lootDate:new Date,startDate:new Date,endDate:null,setEndDate:function(e){return console.warn("no theme provider")},setStartDate:function(e){return console.warn("no theme provider")},setLootDate:function(e){return console.warn("no theme provider")}}),m=a(39),g=a.n(m),x=function(e){var t=e.images,a=(e.Infos,e.page),n=e.total,i=Object(r.useState)(0),s=Object(d.a)(i,2),o=s[0],l=s[1],u=Object(r.useState)(),b=Object(d.a)(u,2),v=b[0],m=b[1],x=Object(r.useState)(),_=Object(d.a)(x,2),w=(_[0],_[1]),S=Object(r.useRef)([]),D=Object(r.useContext)(O),k=(D.setLootDate,D.setEndDate),N=D.setStartDate,y=D.endDate,C=D.startDate,I=(D.isFilter,D.setIsFilter),B=D.setSearchBar,E=(D.searchBar,c.a.useState(!1)),F=Object(d.a)(E,2),L=(F[0],F[1]),P=c.a.useState(!1),G=Object(d.a)(P,2),T=G[0],A=G[1],M=Object(r.useState)(""),R=Object(d.a)(M,2),z=(R[0],R[1],Object(r.useState)("")),J=Object(d.a)(z,2),V=J[0],W=J[1];Object(r.useEffect)((function(){t&&t[0]&&(S.current=S.current.slice(0,t.length),l(0),m(t[0]),w(t[0]))}),[t]);var q=function(e){var a;t&&t.length>0&&(l(e),(null===S||void 0===S?void 0:S.current[e])&&(null===S||void 0===S||null===(a=S.current[e])||void 0===a||a.scrollIntoView({inline:"center",behavior:"smooth",block:"end"})))},H=function(e){var t=e.value,a=e.onClick;return Object(j.jsx)("button",{className:"content-Button ",onClick:a,children:Object(j.jsxs)("p",{className:"view-all",children:[" ",t]})})};return Object(j.jsxs)("div",{className:"carousel-container",children:[Object(j.jsxs)("div",{className:"carousel",children:[Object(j.jsx)("div",{className:"carousel__images",children:t&&t.map((function(e,a){return Object(j.jsx)("div",{onClick:function(){return function(e){var a;t&&t.length>0&&(m(t[e]),l(e),(null===S||void 0===S?void 0:S.current[e])&&(null===S||void 0===S||null===(a=S.current[e])||void 0===a||a.scrollIntoView({inline:"center",behavior:"smooth",block:"end"})))}(a)},style:{backgroundImage:"url(".concat(e.url,")")},className:"carousel__image",ref:function(e){return S.current[a]=e}},e.id)}))}),Object(j.jsx)("div",{className:"btn-prev carousel__button carousel__button-left",onClick:function(){if(t&&t.length>0){var e=o-1;e<0&&(e=t.length-1),q(e)}},children:Object(j.jsxs)("svg",{width:"15",height:"24",viewBox:"0 0 15 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("title",{children:"Left Arrow"}),Object(j.jsx)("path",{d:"M13 2.308l-10 10 10 10","stroke-width":"4",stroke:"#C3000B",fill:"none","fill-rule":"evenodd"})]})}),Object(j.jsx)("div",{className:"btn-next carousel__button carousel__button-right",onClick:function(){if(t&&t.length>0){var e=o+1;e>=t.length&&(e=0),q(e)}},children:Object(j.jsxs)("svg",{width:"15",height:"24",viewBox:"0 0 15 24",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("title",{children:"Right Arrow"}),Object(j.jsx)("path",{d:"M2 2.308l10 10-10 10","stroke-width":"4",stroke:"#C3000B",fill:"none","fill-rule":"evenodd"})]})})]}),Object(j.jsxs)("div",{className:"category",children:[Object(j.jsxs)("div",{className:"category-line",children:[Object(j.jsx)("div",{className:"content-text",children:Object(j.jsxs)("p",{className:"view-all",children:[" ",a," \u76ee\u524d\u70ba\u7b2c",o+1,"\u5f35/\u7e3d\u5171",n,"\u5f35"]})}),Object(j.jsxs)("div",{className:"category-date",children:[Object(j.jsx)("input",{className:"content-Button ",placeholder:"Enter Caption",type:"text",value:V,onChange:function(e){return W(e.target.value)}}),Object(j.jsx)("button",{className:"content-Button ",onClick:function(){B(V)},children:Object(j.jsx)("p",{className:"view-all",children:"\u641c\u5c0b"})}),Object(j.jsx)("div",{className:"content-text",children:Object(j.jsx)("p",{className:"view-all",children:"OR"})}),Object(j.jsx)("div",{className:"category-DatePicker",children:Object(j.jsx)(f.a,{selected:C,customInput:c.a.createElement(H),dateFormat:"yyyy-MM-dd",startDate:C,endDate:y,selectsRange:!0,onChange:function(e){var t=Object(d.a)(e,2),a=t[0],n=t[1];e&&(N(a),k(n),null!=n&&(I(!0),W(""),B("")))}})}),Object(j.jsx)("button",{className:"content-Button ",onClick:function(){W(""),B(""),N(new Date),k(null),I(!0)},children:Object(j.jsx)("p",{className:"view-all",children:"\u67e5\u770b\u6240\u6709"})})]})]}),Object(j.jsx)("div",{className:"line-top"})]}),Object(j.jsx)("img",{className:"originalimg",onLoad:function(){return L(!0)},onClick:function(){A(!0)},alt:"origina_img",src:null===v||void 0===v?void 0:v.original}),Object(j.jsx)(g.a,{scalable:!1,noFooter:!0,noNavbar:!0,noToolbar:!0,noImgDetails:!0,visible:T,onClose:function(){A(!1)},images:[{src:null===v||void 0===v?void 0:v.asset_file_url,alt:""}]}),Object(j.jsx)("div",{className:"directions",children:Object(j.jsxs)("div",{className:"info",children:[Object(j.jsxs)("div",{className:"user-mini",children:[a,Object(j.jsx)("img",{src:p,className:"Capture-logo-mini",alt:"logo"})," "]}),Object(j.jsxs)("p",{className:"time",children:["\u65e5\u671f "," ",null===v||void 0===v?void 0:v.time.slice(0,10)]}),Object(j.jsxs)("p",{className:"time",children:["\u6642\u9593 "," ",null===v||void 0===v?void 0:v.time.slice(11,19)]}),Object(j.jsxs)("p",{className:"location",children:[Object(j.jsx)(h,{lat:null===v||void 0===v?void 0:v.lat,lon:null===v||void 0===v?void 0:v.lon})," "]}),Object(j.jsxs)("p",{className:"GPS",children:["undefined"===(null===v||void 0===v?void 0:v.lat)?"":"GPS ".concat(null===v||void 0===v?void 0:v.lat)," ","undefined"===(null===v||void 0===v?void 0:v.lon)?"":null===v||void 0===v?void 0:v.lon]}),Object(j.jsxs)("p",{className:"GPS",children:["Web 3.0 \u5f71\u50cf ID :"," ",Object(j.jsx)("a",{target:"_blank",href:"https://ipfs.io/ipfs/"+(null===v||void 0===v?void 0:v.id),children:null===v||void 0===v?void 0:v.id})]}),Object(j.jsxs)("p",{className:"GPS",children:["\u53bb\u4e2d\u5fc3\u5316\u5f71\u50cf\u7db2\u7d61\u8a3b\u518a :"," ",Object(j.jsx)("a",{target:"_blank",href:"https://authmedia.net/public-certificate?mid="+(null===v||void 0===v?void 0:v.id),children:null===v||void 0===v?void 0:v.id})]})]})}),Object(j.jsx)("div",{className:"caption",children:(null===v||void 0===v?void 0:v.caption)?null===v||void 0===v?void 0:v.caption:""})]})};a(38);function _(){var e=Object(r.useState)(),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(new Date),i=Object(d.a)(c,2),s=i[0],o=i[1],h=Object(r.useState)(new Date),p=Object(d.a)(h,2),v=p[0],f=p[1],m=Object(r.useState)(null),g=Object(d.a)(m,2),_=g[0],w=g[1],S=Object(r.useState)(!1),D=Object(d.a)(S,2),k=D[0],N=D[1],y=Object(r.useState)(!0),C=Object(d.a)(y,2),I=C[0],B=C[1],E=Object(r.useState)(""),F=Object(d.a)(E,2),L=F[0],P=F[1],G=Object(r.useState)(0),T=Object(d.a)(G,2),A=T[0],M=T[1];function R(e,t,a,n){var r=[],c=a.toString(),i=n.toString(),s=new Date(c),o=new Date(i);return c&&i?(e.map((function(e){var a=e[t].slice(0,10),n=new Date(a.toString());s<=n&&n<=o&&r.push(e)})),r):[]}var z=Object(b.g)(),J=Object(r.useState)("twreporter-reporter-page/"),V=Object(d.a)(J,2),W=(V[0],V[1]);Object(r.useEffect)((function(){return"twreporter-reporter-page/history"===z["*"]?W("twreporter-reporter-page/history"):W("twreporter-reporter-page/")}),[]);var q=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r,c,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dia-backend.numbersprotocol.io/api/v3/assets/?limit=100&owner=archive-2022@numbersprotocol.io",e.prev=1,e.next=4,fetch("https://dia-backend.numbersprotocol.io/api/v3/assets/?limit=100&owner=archive-2022@numbersprotocol.io",{method:"GET",headers:{Authorization:"token 9a526cef3cea200effa155ee99cb50891e85bf18"}});case 4:if(null===(t=e.sent)||void 0===t){e.next=22;break}return e.next=8,t.json();case 8:if(a=e.sent,r=a.results,c=r.map((function(e){return{id:e.id,asset_file_thumbnail:e.asset_file_thumbnail,asset_file_url:e.asset_file_url,cai_file:e.cai_file,cai_file_url:e.cai_file_url,cid:e.cid,creator:e.creator,creator_name:e.creator_name,thumbnail:e.asset_file_thumbnail,url:e.asset_file_thumbnail,original:e.sharable_copy,time:e.updated_at,caption:e.caption,lat:void 0===e.parsed_meta.capture_latitude?"undefined":e.parsed_meta.capture_latitude,lon:void 0===e.parsed_meta.capture_longitude?"undefined":e.parsed_meta.capture_longitude,location:"ss"}})),""===L){e.next=21;break}if(i=[],c.filter((function(e){e.caption.toLowerCase().includes(L.toLowerCase())&&i.push(e)})),!(i.length<1)){e.next=19;break}return alert("\u6b64\u689d\u4ef6".concat(L,"\u6c92\u6709\u627e\u5230\uff0c\u8f09\u5165\u9810\u8a2d\u7bc4\u570d")),n(c),M(c.length),e.abrupt("return");case 19:n(i),M(i.length);case 21:k?null==_?(N(!1),n(c),M(c.length)):(0!==(s=R(c,"time",v.toISOString().slice(0,10),_.toISOString().slice(0,10))).length?(n(s),M(s.length)):(alert("\u6b64\u65e5\u671f".concat(v.toISOString().slice(0,10)," ~ ").concat(_.toISOString().slice(0,10),"\u6c92\u6709\u627e\u5230\uff0c\u8f09\u5165\u9810\u8a2d\u7bc4\u570d")),n(c),M(s.length)),N(!1)):I&&(n(c),M(c.length),B(!1));case 22:e.next=26;break;case 24:e.prev=24,e.t0=e.catch(1);case 26:case"end":return e.stop()}}),e,null,[[1,24]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){q()}),[k,L]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(O.Provider,{value:{searchBar:L,setSearchBar:P,isFilter:k,setIsFilter:N,lootDate:s,setLootDate:o,startDate:v,setStartDate:f,endDate:_,setEndDate:w},children:Object(j.jsx)(x,{page:"\u8b80\u8005\u6295\u7a3f",images:a,total:A})})})}function w(){var e=Object(r.useState)(),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(new Date),i=Object(d.a)(c,2),s=i[0],o=i[1],h=Object(r.useState)(new Date),p=Object(d.a)(h,2),v=p[0],f=p[1],m=Object(r.useState)(null),g=Object(d.a)(m,2),_=g[0],w=g[1],S=Object(r.useState)(!1),D=Object(d.a)(S,2),k=D[0],N=D[1],y=Object(r.useState)(!0),C=Object(d.a)(y,2),I=C[0],B=C[1],E=Object(r.useState)(""),F=Object(d.a)(E,2),L=F[0],P=F[1],G=Object(r.useState)(0),T=Object(d.a)(G,2),A=T[0],M=T[1];function R(e,t,a,n){var r=[],c=a.toString(),i=n.toString(),s=new Date(c),o=new Date(i);return c&&i?(e.map((function(e){var a=e[t].slice(0,10),n=new Date(a.toString());s<=n&&n<=o&&r.push(e)})),r):[]}var z=Object(b.g)(),J=Object(r.useState)("twreporter-reporter-page/"),V=Object(d.a)(J,2),W=(V[0],V[1]);Object(r.useEffect)((function(){return"twreporter-reporter-page/history"===z["*"]?W("twreporter-reporter-page/history"):W("twreporter-reporter-page/")}),[]);var q=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r,c,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://dia-backend.numbersprotocol.io/api/v3/assets/?limit=100&owner=reporter_archive@numbersprotocol.io",e.prev=1,e.next=4,fetch("https://dia-backend.numbersprotocol.io/api/v3/assets/?limit=100&owner=reporter_archive@numbersprotocol.io",{method:"GET",headers:{Authorization:"token 173e907d3138dd684d67e5f4ec027c9139b9bad5"}});case 4:if(null===(t=e.sent)||void 0===t){e.next=22;break}return e.next=8,t.json();case 8:if(a=e.sent,r=a.results,c=r.map((function(e){return{id:e.id,asset_file_thumbnail:e.asset_file_thumbnail,asset_file_url:e.asset_file_url,cai_file:e.cai_file,cai_file_url:e.cai_file_url,cid:e.cid,creator:e.creator,creator_name:e.creator_name,thumbnail:e.asset_file_thumbnail,url:e.asset_file_thumbnail,original:e.sharable_copy,time:e.updated_at,caption:e.caption,lat:void 0===e.parsed_meta.capture_latitude?"undefined":e.parsed_meta.capture_latitude,lon:void 0===e.parsed_meta.capture_longitude?"undefined":e.parsed_meta.capture_longitude,location:"ss"}})),""===L){e.next=21;break}if(i=[],c.filter((function(e){e.caption.toLowerCase().includes(L.toLowerCase())&&i.push(e)})),!(i.length<1)){e.next=19;break}return alert("\u6b64\u689d\u4ef6".concat(L,"\u6c92\u6709\u627e\u5230\uff0c\u8f09\u5165\u9810\u8a2d\u7bc4\u570d")),n(c),M(c.length),e.abrupt("return");case 19:n(i),M(i.length);case 21:k?null==_?(N(!1),n(c),M(c.length)):(0!==(s=R(c,"time",v.toISOString().slice(0,10),_.toISOString().slice(0,10))).length?(n(s),M(s.length)):(alert("\u6b64\u65e5\u671f".concat(v.toISOString().slice(0,10)," ~ ").concat(_.toISOString().slice(0,10),"\u6c92\u6709\u627e\u5230\uff0c\u8f09\u5165\u9810\u8a2d\u7bc4\u570d")),n(c),M(s.length)),N(!1)):I&&(n(c),M(c.length),B(!1));case 22:e.next=26;break;case 24:e.prev=24,e.t0=e.catch(1);case 26:case"end":return e.stop()}}),e,null,[[1,24]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){q()}),[k,L]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(O.Provider,{value:{searchBar:L,setSearchBar:P,isFilter:k,setIsFilter:N,lootDate:s,setLootDate:o,startDate:v,setStartDate:f,endDate:_,setEndDate:w},children:Object(j.jsx)(x,{page:"\u6b77\u53f2\u5f71\u50cf",images:a,total:A})})})}var S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},D=a(21);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D.a,{children:Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{path:"/",element:Object(j.jsx)(_,{})}),Object(j.jsx)(b.a,{path:"/history",element:Object(j.jsx)(w,{})}),Object(j.jsx)(b.a,{path:"*",element:Object(j.jsx)("main",{style:{padding:"1rem"},children:Object(j.jsx)("p",{children:"There's nothing here!"})})})]})})}),document.getElementById("root")),S()},38:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.2dc6094d.chunk.js.map