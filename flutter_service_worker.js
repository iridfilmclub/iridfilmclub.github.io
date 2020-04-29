'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "89b74093d9165ffcf88f859bf8b3bc2b",
"assets/assets/fonts/CustomSVGIcons/CustomSVGIcons.ttf": "6672a1f3cda23a36484fca1ed16fc559",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "e3242149669bebf6afc4b0b5d22ec6ae",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "a3b387c93882604792867736aecd56c8",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "e375c6fe9bbeadb38d4911107e480378",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "94603128108f9cf9b26626564265c1d0",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "2f354053d1c9c36f533ebd226698bfa5",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "0098f804fc2d06af52650e0b8ed3390c",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "a8a117360e71de94ae3b0b0f8d15b44d",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "bbcd5bbb5993808a92df01a5dfef77cd",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "b50f5872459e8e17eaffd5d57a2b2f8e",
"assets/assets/html/irid_film_club_privacy_policy.html": "a659939a4fd0a2de85d7a85165b794cf",
"assets/assets/images/png/apple-appstore-badge.png": "f5d74737975b51c5003ec168da3e8f93",
"assets/assets/images/png/google-play-badge.png": "db9b21a1c41f3dcd9731e1e7acfdbb57",
"assets/assets/images/png/IFC_Mockup_Screenshot_1-01.png": "5edc58ddeb539ac5f1444df05230a6d3",
"assets/assets/images/png/Irid_Film_Club_Logo.png": "31ce1bbee380de16a1a82ee07b4b537d",
"assets/assets/images/png/Irid_Film_Club_Logo_Final_Converted.png": "010f880255d0f255dd16b94aabb32a58",
"assets/assets/images/png/lit_Life_Software_Final-01.png": "9a8232ce304c898669c6a2de982cc05c",
"assets/assets/images/png/lit_Life_Software_Smiley-01.png": "099ab04aeff57d4df33789a87cf7629d",
"assets/assets/images/png/lit_Life_Software_Wordmark-01.png": "89d63cfbf7c5997138c036682dceb3ab",
"assets/assets/md/irid_film_club_privacy_policy.md": "62d770dd02e0a24747f4fe656f730415",
"assets/assets/md/lit_life_software_datenschutzerklarung.md": "09ed45b1086f6bc1271227b09d3777dd",
"assets/FontManifest.json": "f17d8d24eaca794232120f989fd1bfc8",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "fe9b2c04f1df5cf681018c707332472d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "19838ee4d2bc25ac4e093a9d684f6b85",
"icons/Icon-192.png": "19838ee4d2bc25ac4e093a9d684f6b85",
"icons/Icon-512.png": "57e1048abe52b9aba69df48f69358711",
"index.html": "2407eef8ca7502f6878d526dae45c166",
"/": "2407eef8ca7502f6878d526dae45c166",
"main.dart.js": "4e6489ff4d2f76739598efe79daf84af",
"manifest.json": "4b1eb20aa6623e4e7030458875b2a7ba"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
