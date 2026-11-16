<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#8B1E1E" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Sumber Redjeki" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/icon-192x192.png" />
    <title>Warkop Sumber Redjeki - Sistem Kasir & Stok</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-[#110F0E] text-stone-100">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js')
            .then((reg) => console.log('Service Worker terdaftar:', reg.scope))
            .catch((err) => console.log('Service Worker gagal:', err));
        });
      }
    </script>
  </body>
</html>
