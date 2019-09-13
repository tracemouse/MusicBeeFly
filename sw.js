// configuration
`use strict`;

const
  version = '1.0.0',
  CACHE = version + '::PWAsite',
  offlineURL = '/offline.html',
  installFilesEssential = [
    '/',
    '/1-es2015.7f8bfe3c7a3e1fb4702e.js',
    '/1-es5.79de73ea9850e081b9eb.js',
    '/100-es2015.bf7f8889e3fff2318212.js',
    '/100-es5.e0e7b9cc92e47449982b.js',
    '/101-es2015.7273c36bdcbe1cec0dd6.js',
    '/101-es5.00892222f9ab3ee303aa.js',
    '/102-es2015.5ed67adf00457c222776.js',
    '/102-es5.ec93a473a7bf0d73bb86.js',
    '/103-es2015.f0e13e4c336cb8725937.js',
    '/103-es5.9b5c64112d0b3243cf9d.js',
    '/104-es2015.4931cb643c60400984f9.js',
    '/104-es5.7d55c06b85e072f0270d.js',
    '/105-es2015.75431ba7eee268cfcc03.js',
    '/12-es5.593e2c76c523a498f7b8.js',
    '/13-es2015.f2827774e26fa77e27f8.js',
    '/13-es5.4468e757d154f22f1d3a.js',
    '/14-es2015.f80f2d27acccf12af98c.js',
    '/14-es5.496bc568323bceb2e155.js',
    '/15-es2015.e2e39dc1ac2feccd3aab.js',
    '/15-es5.a63ccf5f4419888b0af9.js',
    '/16-es2015.17e004f564fdc822ed06.js',
    '/16-es5.8b28ac6fc053dd5d7eb7.js',
    '/17-es2015.c697d2676da13356c763.js',
    '/17-es5.bf4c666c0148c60b7442.js',
    '/18-es2015.e830fc55da90c66b7844.js',
    '/18-es5.094226cc18661ccb6373.js',
    '/19-es2015.274da6d11794ffc9629c.js',
    '/19-es5.d07ad18a87af56553ac3.js',
    '/2-es5.9771e6f8b3cfe794de25.js',
    '/20-es2015.2f598342e465e890210c.js',
    '/20-es5.bb3d3e6102858cca7915.js',
    '/21-es2015.c530cd4765cf69e0dcee.js',
    '/21-es5.f316c9ecf8030e8a8bf0.js',
    '/22-es2015.4cff1347758eeca6c42c.js',
    '/22-es5.aa3599591ae7f4331743.js',
    '/23-es2015.d56aec5bf87ce2bb6994.js',
    '/23-es5.444dee06dbfa83f06a9c.js',
    '/24-es2015.471417de57841347da09.js',
    '/24-es5.9e9f39edb297e98e6081.js',
    '/25-es2015.f8f1b55ae970954665ad.js',
    '/25-es5.b12b3a3986ec4a5178e3.js',
    '/26-es2015.e30d4df95bd0428e95de.js',
    '/26-es5.179b97bd5749343475a5.js',
    '/27-es2015.457386bfd4323c4b0d73.js',
    '/27-es5.065654271681c87e0670.js',
    '/28-es2015.1ce0a7a3a82b70bed929.js',
    '/28-es5.fc9854e6dc0fd1b423d8.js',
    '/29-es2015.3b81c01dae301d8e7f41.js',
    '/29-es5.a8b5f46933efcb753d77.js',
    '/3-es2015.6bb8b31d839d21924834.js',
    '/30-es2015.7075e3185b778293c35d.js',
    '/30-es5.4085389e9d21f1c620b7.js',
    '/31-es2015.43d92ede5e9346d8c028.js',
    '/31-es5.6fdc8f452743ec292534.js',
    '/32-es2015.b2e05e24357787e128e0.js',
    '/32-es5.8bdfd4011fef4b9c1f28.js',
    '/33-es2015.058fc92e7fe6f5fee5f8.js',
    '/33-es5.f7d89d39e382d04fcf12.js',
    '/34-es2015.a640f40ecb096bc93c43.js',
    '/34-es5.0b2b4d9a2339fd6c76d7.js',
    '/35-es2015.35ea6b2d37ccfd616c05.js',
    '/35-es5.c11a23444947d1911ba5.js',
    '/36-es2015.3d920a6f50e8dfb7dff4.js',
    '/36-es5.771e60bd4f5b79070a3b.js',
    '/37-es2015.4cbef6adbe57a25f0920.js',
    '/37-es5.724bdd91eb62fc21cec7.js',
    '/38-es2015.6e99ddabb669e801048d.js',
    '/38-es5.83a03637e0ffeb2ed1ba.js',
    '/39-es2015.79730c7db5f3e3dc87a3.js',
    '/39-es5.98ba8821e40b669eb413.js',
    '/3rdpartylicenses.txt',
    '/4-es2015.653310dd52e6f409f471.js',
    '/4-es5.98f1cf6e38d7fbf19f16.js',
    '/40-es2015.1c0a3e87b81f8b92b3ed.js',
    '/40-es5.f6ac19d637edeb421f16.js',
    '/41-es2015.4620808f17f0ee6f60e6.js',
    '/41-es5.46b87dc719d017381778.js',
    '/42-es2015.1363f59c47f0f060b27b.js',
    '/42-es5.271098e23655e76db375.js',
    '/43-es2015.f079b4135ad42a3f849d.js',
    '/43-es5.cd21a4038f3bc3507b02.js',
    '/44-es2015.5296a5518c622c253449.js',
    '/44-es5.b007fb4c520261f26e2a.js',
    '/45-es2015.b19fc0faf163f1da501d.js',
    '/45-es5.0b28455f4d35f91cb8fb.js',
    '/46-es2015.d79934c203b8d53460c6.js',
    '/46-es5.7f6a5802559d3fe62294.js',
    '/47-es2015.98512e74669ad6b637e2.js',
    '/47-es5.b18dc276d65a27684ae5.js',
    '/48-es2015.efab29b725d5972b943c.js',
    '/48-es5.cd602007e16d7d59bafd.js',
    '/49-es2015.e5536720e2dc79210ba0.js',
    '/49-es5.bdfdf9d870e076181736.js',
    '/5-es2015.14913d630e1351bfacaa.js',
    '/5-es5.f4d645f2843b0d206483.js',
    '/50-es2015.9384724ff0eaaea04dbb.js',
    '/50-es5.161c3539f83d924d79bb.js',
    '/51-es2015.a54167bf59ab47a6fb15.js',
    '/51-es5.d7622f50550d30320529.js',
    '/52-es2015.3114781ff991efe094bb.js',
    '/52-es5.c3bcb027e753ccd8692d.js',
    '/53-es2015.e7d3238499d219450b2b.js',
    '/53-es5.ead080072d0d1ea439d7.js',
    '/54-es2015.df689635c4acea26c4e5.js',
    '/54-es5.b1399d9e5588c6d336ab.js',
    '/55-es2015.fcf8abc62af2febc961c.js',
    '/55-es5.d8850b75f232006a654d.js',
    '/56-es2015.2769b4382332fbf4fc59.js',
    '/56-es5.325b2d519738319ecba2.js',
    '/57-es2015.f4d9f6d47ef49e100eba.js',
    '/57-es5.3b7c793df8dd8cde1dce.js',
    '/58-es2015.7bc6b29aa2f0fea350fd.js',
    '/58-es5.8ba0ebadc6c448aaebc5.js',
    '/59-es2015.48fe6cdf9a07c65ba6d3.js',
    '/59-es5.1452631574b10673e660.js',
    '/6-es2015.e399da80b33f3497a157.js',
    '/6-es5.e7aaa0b2b69617538c12.js',
    '/60-es2015.d8d7b50fa5eb0f4f8d24.js',
    '/60-es5.7db53061c4a40ff2b3d8.js',
    '/61-es2015.9a8aa3406ec4c54c02f0.js',
    '/61-es5.a1bfb739a4a099f81c76.js',
    '/62-es2015.78c52fa4c8d43a06815a.js',
    '/62-es5.5a927b06012bec275fcd.js',
    '/63-es2015.fa2cff3326549eb30e99.js',
    '/63-es5.a50220fbc41a49c8be3c.js',
    '/64-es2015.3f9b077c5e8de21aeb62.js',
    '/64-es5.6a0946c657a47ed4ac40.js',
    '/65-es2015.66f18976afea8f557bb3.js',
    '/65-es5.1ae5351aca84d7b1ef2a.js',
    '/66-es2015.37c6c16ea153609cfb74.js',
    '/66-es5.10d2cc0f65afe3ec0e7e.js',
    '/67-es2015.10fb373006ebbcb609b5.js',
    '/67-es5.d6b5c923ec00b4b00361.js',
    '/68-es2015.c89c21fb6e207c884388.js',
    '/68-es5.3d28d37975cdb7e32b14.js',
    '/69-es2015.b3a545a53210e821e35e.js',
    '/69-es5.bec3b9a730747db0dc0f.js',
    '/7-es2015.867c18d2a4eda7e76feb.js',
    '/7-es5.09450ee4ea746559b069.js',
    '/70-es2015.18f3f742a3884c709b88.js',
    '/70-es5.fe715fadf1300b6b8a0f.js',
    '/71-es2015.1423444f9130470e0a55.js',
    '/71-es5.9170d3cf1ff7a4bee434.js',
    '/72-es2015.3b9a9a12454b9c027a9b.js',
    '/72-es5.8d47e9927dba432add96.js',
    '/73-es2015.f5560d081b0305dfcca0.js',
    '/73-es5.50d2cf1e84acef9a0813.js',
    '/74-es2015.1996a2c17f7c9ba055e6.js',
    '/74-es5.270623a752becd9acb06.js',
    '/75-es2015.82741a3ee59ed2fbf591.js',
    '/75-es5.923d1b05683fed8c51f0.js',
    '/76-es2015.5dd3ae5c1f8f278aa597.js',
    '/76-es5.4cfea00d294e091c8875.js',
    '/77-es2015.f0fe3cfb27a2bbd92c5c.js',
    '/77-es5.14e49220dd21b526e133.js',
    '/78-es2015.94e217c380471c49841b.js',
    '/78-es5.bdc8141dfc6c4351a3bb.js',
    '/79-es2015.dde63848671d2d9193e1.js',
    '/79-es5.def20efabc2501395fc7.js',
    '/8-es2015.07511290b9d5bbc4414d.js',
    '/8-es5.b0015134db9b382a7240.js',
    '/80-es2015.0ebf0ba6dafc41f6d59e.js',
    '/80-es5.35618158ca596b07e548.js',
    '/81-es2015.24c3567ea3897c599f01.js',
    '/81-es5.5acdd06cbcff71917e87.js',
    '/82-es2015.a0c88b24001abef24640.js',
    '/82-es5.4284e2704245e975ac19.js',
    '/83-es2015.06fc1727b5b6c5084704.js',
    '/83-es5.ee24aebdfa3eade4c1e7.js',
    '/84-es2015.8bf4aa141a3994c4f268.js',
    '/84-es5.570df894fbf7878c724d.js',
    '/85-es2015.8b1c80119454dafc3894.js',
    '/85-es5.6c30c8ebaca328fe9f13.js',
    '/86-es2015.30f4e615b8c49d3740a8.js',
    '/86-es5.dc54ca048f74a811ebb1.js',
    '/87-es2015.99ff6932fe9ff60005ff.js',
    '/87-es5.f18a65e6cc14546c276c.js',
    '/88-es2015.5a183faf611890acee3a.js',
    '/88-es5.8e1e72242ada723c99f3.js',
    '/89-es2015.bafa7e5fa610412a5f71.js',
    '/89-es5.36161dfea42f982c9ac6.js',
    '/9-es2015.e1e52eaea88b7ec92cfe.js',
    '/9-es5.0c723afaefda3d77fb89.js',
    '/90-es2015.8f39cc7140ff2f7525c8.js',
    '/90-es5.e32e43937f25ce24e6eb.js',
    '/91-es2015.a05ef65f0e3946f9f7ea.js',
    '/91-es5.550d8ec6462baed43295.js',
    '/92-es2015.ba52b62e02dfea47314c.js',
    '/92-es5.91bef6c22473ad4cfac2.js',
    '/93-es2015.c646a8d185643863b85c.js',
    '/93-es5.581621ce9b05f6c0ca24.js',
    '/94-es2015.7f7dcea9c64402fc3528.js',
    '/94-es5.17451c89a4831af3c814.js',
    '/95-es2015.1ed1951478eada0e09c2.js',
    '/95-es5.3a427f00ea4e7fc8fba5.js',
    '/96-es2015.76c43007d0ff47270a14.js',
    '/96-es5.461e346a7facb6b45c13.js',
    '/97-es2015.311ab7ab4e915f8fdcfe.js',
    '/97-es5.611dd383a9703cae9d37.js',
    '/98-es2015.5dfdd2e66260da6a51e8.js',
    '/98-es5.c7e8440cf7c9ca4803ce.js',
    '/99-es2015.108678c0160dd175700d.js',
    '/99-es5.f7adae2ddd6641cab21d.js',
    '/common-es2015.091e0979e782953d58dc.js',
    '/common-es5.bc8fa262a65e9328de6f.js',
    '/index.html',
    '/main-es2015.5c6aa2df7b7a848f8f10.js',
    '/main-es5.ca69de920f3c5b3bdff2.js',
    '/manifest.json',
    '/offline.html',
    '/polyfills-es2015.cd1cd19bc2d392519ace.js',
    '/polyfills-es5.cb4c97a376aa42d2b903.js',
    '/pwa.js',
    '/runtime-es2015.ba03180dbea907fe0802.js',
    '/runtime-es5.1be43c3eae7b380d69ca.js',
    '/styles.8d77051194a4a58fc37c.css',
    '/sw.js'
  ].concat(offlineURL),
  installFilesDesirable = [
    '/assets/i18n/en-US.json',
    '/assets/i18n/en.json',
    '/assets/i18n/languages.json',
    '/assets/i18n/zh-TW.json',
    '/assets/i18n/zh.json',
    '/assets/icons/apple-touch-icon-152.png',
    '/assets/icons/apple-touch-icon.png',
    '/assets/icons/favicon.png',
    '/assets/img/cover.jpg',
    '/assets/img/launch.png',
    '/assets/svg/language.svg',
    '/assets/svg/menu-shutdown.svg',
    '/assets/svg/monitor.svg',
    '/assets/svg/pause.svg',
    '/assets/svg/play.svg',
    '/assets/svg/playing-animated.svg',
    '/assets/svg/playing-fixed.svg',
    '/assets/svg/playing.svg',
    '/assets/svg/playlist.svg',
    '/assets/svg/refresh.svg',
    '/assets/svg/search.svg',
    '/assets/svg/shutdown.svg',
    '/assets/svg/tab1-0.svg',
    '/assets/svg/tab1-1.svg',
    '/assets/svg/tab2-0.svg',
    '/assets/svg/tab2-1.svg',
    '/assets/svg/tab3-0.svg',
    '/assets/svg/tab3-1.svg',
    '/assets/svg/tab4-0.svg',
    '/assets/svg/tab4-1.svg'
  ];

// install static assets
function installStaticFiles() {

  return caches.open(CACHE)
    .then(cache => {

      // console.log(installFilesDesirable);
      // console.log(installFilesEssential);
      // cache desirable files
      cache.addAll(installFilesDesirable);

      // cache essential files
      return cache.addAll(installFilesEssential);

    });

}

// clear old caches
function clearOldCaches() {

  return caches.keys()
    .then(keylist => {

      return Promise.all(
        keylist
          .filter(key => key !== CACHE)
          .map(key => caches.delete(key))
      );

    });

}

// application installation
self.addEventListener('install', event => {

  console.log('service worker: install');

  // cache core files
  event.waitUntil(
    installStaticFiles()
    .then(() => self.skipWaiting())
  );

});


// application activated
self.addEventListener('activate', event => {

  console.log('service worker: activate');

	// delete old caches
  event.waitUntil(
    clearOldCaches()
    .then(() => self.clients.claim())
	);

});


// is image URL?
let iExt = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp'].map(f => '.' + f);
function isImage(url) {

  return iExt.reduce((ret, ext) => ret || url.endsWith(ext), false);

}


// return offline asset
function offlineAsset(url) {

  if (isImage(url)) {

    // return image
    return new Response(
      '<svg role="img" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title>offline</title><path d="M0 0h400v300H0z" fill="#eee" /><text x="200" y="150" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="50" fill="#ccc">offline</text></svg>',
      { headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-store'
      }}
    );

  }
  else {

    // return page
    return caches.match(offlineURL);

  }

}


// application fetch network data
self.addEventListener('fetch', event => {

  // abandon non-GET requests
  if (event.request.method !== 'GET') return;

  let url = event.request.url;

  event.respondWith(

    caches.open(CACHE)
      .then(cache => {

        return cache.match(event.request)
          .then(response => {

            if (response) {
              // return cached file
              console.log('cache fetch: ' + url);
              return response;
            }

            // make network request
            return fetch(event.request)
              .then(newreq => {

                console.log('network fetch: ' + url);
                if (newreq.ok) cache.put(event.request, newreq.clone());
                return newreq;

              })
              // app is offline
              .catch(() => offlineAsset(url));

          });

      })

  );

});
