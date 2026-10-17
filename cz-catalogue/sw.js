const CACHE='cz-customize-no-login-v4';
const BASE=new URL('./',self.location).href;
const FILES=['./','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('cz-customize-')&&k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin||!u.href.startsWith(BASE)||u.pathname.includes('/api/'))return;if(e.request.mode==='navigate')e.respondWith(fetch(e.request).catch(()=>caches.match(BASE)));else if(FILES.some(f=>new URL(f,BASE).href===e.request.url))e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
