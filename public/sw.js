if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>n(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"64915f2d02feba98905f55dfe4402a6f"},{url:"/_next/static/QQlJBp1TpLhxq-te1J-v6/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/QQlJBp1TpLhxq-te1J-v6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/69-5145f0ff61baf8ad.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/692-1125bda96ff2b498.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/app/_not-found-875bced379015f4d.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/app/layout-419bbee1f85013a4.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/app/page-740884c5299bec7c.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/fd9d1056-bae087ce0fb9d675.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/main-app-6c0bb54eae09d392.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/main-de56f34cd57c755c.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-69517e1e15b442f9.js",revision:"QQlJBp1TpLhxq-te1J-v6"},{url:"/_next/static/css/f93eba9469430a67.css",revision:"f93eba9469430a67"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icons/images-128.png",revision:"7003c323ff1993982ce3169d9e0044d1"},{url:"/icons/images-144.png",revision:"4d1b1c1ff4e2b9d3d5f73d048d244884"},{url:"/icons/images-152.png",revision:"0ec394cfad07d9dcad69dde66767cba3"},{url:"/icons/images-16.png",revision:"fc0101db979073b16b67b6ee74c784bb"},{url:"/icons/images-180.png",revision:"a2847d5aaf43413289c2f2469b40d5b1"},{url:"/icons/images-192.png",revision:"17fb914903fc39efda8e39a41ce714dd"},{url:"/icons/images-256.png",revision:"b2541e416eb4aecc669a60dc8a3d7916"},{url:"/icons/images-48.png",revision:"ec385fe0d42726f22a35668d542901ee"},{url:"/icons/images-512.png",revision:"0433627c709bbbb5716168b7514debdd"},{url:"/icons/images-64.png",revision:"69f185f5b752f3af205ea12e32716e7e"},{url:"/icons/images-72.png",revision:"f2966fb2d29ff6180e1959d90f34befe"},{url:"/icons/images-96.png",revision:"f6c5de0c4777d3a5f8f3e58b335de1f2"},{url:"/manifest.json",revision:"de91798bc3a6f5fbaa39e9a91f88ae05"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));