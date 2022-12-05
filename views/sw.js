importScripts('./assets/uvscripts/uv.bundle.js');
importScripts('./assets/uvscripts/uv.config.js');
importScripts('./assets/uvscripts/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
