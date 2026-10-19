const CACHE='cz-customize-v3';
const ROOT=new URL('./',self.location).href;
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([ROOT,ROOT+'index.html',ROOT+'manifest.webmanifest',ROOT+'cz-icon-180.png',ROOT+'cz-icon-192.png',ROOT+'cz-icon-512.png'])).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(self.clients.claim());});
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||(!url.href.startsWith(ROOT)&&!['cdn.tailwindcss.com','unpkg.com'].includes(url.hostname)))return;
 event.respondWith(fetch(event.request).then(response=>{if(response.ok||response.type==='opaque'){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}return response;}).catch(async()=>{const cached=await caches.match(event.request);if(cached)return cached;if(event.request.mode==='navigate')return caches.match(ROOT);return Response.error();}));
});
