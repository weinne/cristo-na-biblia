// Nome do cache
const CACHE_NAME = 'liturgia-reformada-v1';

// Arquivos para serem cacheados inicialmente
const urlsToCache = [
  '/',
  '/manifest.json',
  '/icon.png',
];

// Instalar o service worker e cachear os arquivos principais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Estratégia de cache: Cache First, depois Network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - retorna a resposta do cache
        if (response) {
          return response;
        }

        // Clona a requisição porque é consumida apenas uma vez
        return fetch(event.request.clone())
          .then((response) => {
            // Verifica se temos uma resposta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona a resposta porque é consumida apenas uma vez
            const responseToCache = response.clone();

            // Guarda a resposta no cache para futuras requisições
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
});

// Limpa caches antigos quando uma nova versão é ativada
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
