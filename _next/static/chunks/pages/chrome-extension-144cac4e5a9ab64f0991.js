_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}},Aiso:function(e,t,n){e.exports=n("dQHF")},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},VlKB:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var i=n("nKUr"),o=n("q1tI"),a=n.n(o),s=n("Qfuz"),r=n("1OyB"),c=n("vuIU"),l=n("Ji7U"),u=n("md7G"),d=n("foSv"),p=n("Hr6H"),y=n("Aiso"),h=n.n(y),m=n("kriW");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return Object(u.a)(this,n)}}var b=function(e){Object(l.a)(n,e);var t=f(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"fb-howto",children:Object(i.jsxs)(p.Base.Layout.Container,{children:[Object(i.jsxs)(p.Base.Layout.Row,{textAlignType:p.Base.Layout.TextAlignType.Center,children:[Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:2}),Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:8,children:Object(i.jsx)("h1",{children:this.props.title})}),Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:2})]}),Object(i.jsxs)(p.Base.Layout.Row,{textAlignType:p.Base.Layout.TextAlignType.Center,children:[Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:1}),Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:10,children:Object(i.jsx)("p",{children:this.props.subTitle})}),Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:1})]}),this.props.steps.map((function(e,t){return Object(i.jsxs)("div",{className:"step",children:[!!e.screenshotUrl&&Object(i.jsxs)(p.Base.Layout.Row,{textAlignType:p.Base.Layout.TextAlignType.Center,children:[Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:2}),Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:8,children:Object(i.jsx)(h.a,{src:e.screenshotUrl,alt:"step".concat(t+1),layout:"responsive",width:e.screenWidth,height:e.screenHeight})}),Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:2})]}),Object(i.jsxs)(p.Base.Layout.Row,{textAlignType:p.Base.Layout.TextAlignType.Center,children:[Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:1}),Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:10,children:Object(i.jsx)("p",{children:e.description})}),Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:1})]}),!!e.downloadUrl&&Object(i.jsxs)(p.Base.Layout.Row,{textAlignType:p.Base.Layout.TextAlignType.Center,children:[Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:1}),Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:10,children:Object(i.jsx)("a",{href:e.downloadUrl,children:Object(i.jsx)("div",{className:"download",children:Object(i.jsx)(m.a,{id:"Label.Download"})})})}),Object(i.jsx)(p.Base.Layout.Col,{type:p.Base.Layout.ColType.Medium,columnCount:1})]})]},"step".concat(t))}))]})})}}]),n}(a.a.Component);function j(){return Object(i.jsxs)(s.a,{children:[Object(i.jsx)(b,{title:Object(i.jsx)(m.a,{id:"Label.InstallChromeExtensionTitle"}),subTitle:Object(i.jsx)(m.a,{id:"Label.InstallChromeExtensionSubTitle"}),steps:[{screenWidth:500,screenHeight:400,description:Object(i.jsx)(m.a,{id:"Label.InstallChromeExtensionStep1"}),downloadUrl:"/download/yil.ink-chrome-extension.zip"},{screenWidth:500,screenHeight:400,description:Object(i.jsx)(m.a,{id:"Label.InstallChromeExtensionStep2"})},{screenshotUrl:"/images/chrome-extensions.png",screenWidth:753,screenHeight:53,description:Object(i.jsx)(m.a,{id:"Label.InstallChromeExtensionStep3"})},{screenshotUrl:"/images/developer-mode.png",screenWidth:280,screenHeight:67,description:Object(i.jsx)(m.a,{id:"Label.InstallChromeExtensionStep4"})},{screenshotUrl:"/images/load-unpacked.png",screenWidth:603,screenHeight:80,description:Object(i.jsx)(m.a,{id:"Label.InstallChromeExtensionStep5"})}]}),Object(i.jsx)(b,{title:Object(i.jsx)(m.a,{id:"Label.UseChromeExtensionTitle"}),subTitle:Object(i.jsx)(m.a,{id:"Label.UseChromeExtensionSubTitle"}),steps:[{screenshotUrl:"/images/hover-image.png",screenWidth:568,screenHeight:362,description:Object(i.jsx)(m.a,{id:"Label.UseChromeExtensionStep1"})},{screenshotUrl:"/images/hover-imageurl.png",screenWidth:580,screenHeight:310,description:Object(i.jsx)(m.a,{id:"Label.UseChromeExtensionStep2"})}]})]})}},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var i=n("J4zp"),o=n("RIqP"),a=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,a=void 0!==o&&o,r=e.priority,d=void 0!==r&&r,y=e.loading,h=e.className,m=e.quality,f=e.width,b=e.height,j=e.objectFit,x=e.objectPosition,C=e.loader,L=void 0===C?w:C,O=(0,s.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),B=n?"responsive":"intrinsic",A=!1;"unsized"in O?(A=Boolean(O.unsized),delete O.unsized):"layout"in O&&(O.layout&&(B=O.layout),delete O.layout);0;var T=!d&&("lazy"===y||"undefined"===typeof y);t&&t.startsWith("data:")&&(a=!0,T=!1);var z,S,E,_=(0,p.useIntersection)({rootMargin:"200px",disabled:!T}),k=i(_,2),U=k[0],M=k[1],I=!T||M,R=v(f),q=v(b),H=v(m),W={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:x};if("undefined"!==typeof R&&"undefined"!==typeof q&&"fill"!==B){var N=q/R,D=isNaN(N)?"100%":"".concat(100*N,"%");"responsive"===B?(z={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},S={display:"block",boxSizing:"border-box",paddingTop:D}):"intrinsic"===B?(z={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},S={boxSizing:"border-box",display:"block",maxWidth:"100%"},E='<svg width="'.concat(R,'" height="').concat(q,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===B&&(z={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:R,height:q})}else"undefined"===typeof R&&"undefined"===typeof q&&"fill"===B&&(z={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var P={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};I&&(P=g({src:t,unoptimized:a,layout:B,width:R,quality:H,sizes:n,loader:L}));A&&(z=void 0,S=void 0,W=void 0);return c.default.createElement("div",{style:z},S?c.default.createElement("div",{style:S},E?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,u.toBase64)(E))}):null):null,!I&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},O,g({src:t,unoptimized:a,layout:B,width:R,quality:H,sizes:n,loader:L}),{src:t,decoding:"async",sizes:n,style:W,className:h}))),c.default.createElement("img",Object.assign({},O,P,{decoding:"async",className:h,ref:U,style:W})),d?c.default.createElement(l.default,null,c.default.createElement("link",{key:"__nimg-"+P.src+P.srcSet+P.sizes,rel:"preload",as:"image",href:P.srcSet?void 0:P.src,imagesrcset:P.srcSet,imagesizes:P.sizes})):null)};var s=a(n("8OQS")),r=a(n("pVnL")),c=a(n("q1tI")),l=a(n("8Kt/")),u=n("dEHY"),d=n("UWYU"),p=n("vNVm");var y=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality,a=["auto=format","fit=max","w="+i],s="";o&&a.push("q="+o);a.length&&(s="?"+a.join("&"));return"".concat(t).concat(C(n)).concat(s)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality,a=["f_auto","c_limit","w_"+i,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(C(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(C(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://yil.ink/",loader:"imgix"}||d.imageConfigDefault,m=h.deviceSizes,f=h.imageSizes,b=h.loader,j=h.path,x=(h.domains,[].concat(o(m),o(f)));function g(e){var t=e.src,n=e.unoptimized,i=e.layout,a=e.width,s=e.quality,r=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){var i=o(n.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(i.length){var a=.01*Math.min.apply(Math,o(i));return{widths:x.filter((function(e){return e>=m[0]*a})),kind:"w"}}return{widths:x,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:m,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return x.find((function(t){return t>=e}))||x[x.length-1]})))),kind:"x"}}(a,i,r),u=l.widths,d=l.kind,p=u.length-1;return{sizes:r||"w"!==d?r:"100vw",srcSet:u.map((function(e,n){return"".concat(c({src:t,quality:s,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({src:t,quality:s,width:u[p]})}}function v(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function w(e){var t=y.get(b);if(t)return t((0,r.default)({root:j},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(b))}function C(e){return"/"===e[0]?e.slice(1):e}m.sort((function(e,t){return e-t})),x.sort((function(e,t){return e-t}))},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n.apply(this,arguments)}e.exports=n},sLtt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chrome-extension",function(){return n("VlKB")}])}},[["sLtt",0,1,3,2,4,5]]]);