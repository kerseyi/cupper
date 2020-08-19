/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","72dda9ed9c7c91200bcdc4cb525bdee5"],["browserconfig.xml","92828d62de7f323d11563be3eef26828"],["categories/index.html","a75d0a1474de9aa9e1a49c3b244d388e"],["categories/index.xml","ad5bc56f4a3c17ad08520b043aa5dc49"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","f1f3ac91665d7427c39a7ab4b551cf31"],["css/images/icon-tick.svg","4bab0777ae9f5081c7f29a0d1175c6b1"],["css/images/stripe.svg","ef03fea85121c7139ec140cd9a60d102"],["css/prism.css","b5f7656c3c392290db17616d8e9cb7a8"],["css/styles.css","6cde701a8761f9a5b510786dbadf9002"],["images/android-chrome-192x192.png","9a5217d9c2f558dc27e10c9bd1df277f"],["images/android-chrome-512x512.png","824a93b245c640f71a97cfda02754811"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/apple-touch-icon.png","1302237db2a4e977caa7b3b45bc09f28"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/browser-chrome-android.svg","a32653815f36daa0d6877798cdfd1dfa"],["images/browser-chrome.svg","86ab1442e7d0796694b584a73488257e"],["images/browser-edge.svg","fd4ab69a946b62784f153b4f729892d9"],["images/browser-firefox-android.svg","5ec1ad3491aad31ac93d5a4fc72c98b7"],["images/browser-firefox.svg","4064d8ab30c474f254a27e4d06b0062f"],["images/browser-ie.svg","c9a6382f7e0f27462dee1cf1699a78aa"],["images/browser-opera.svg","650571954d8269dc63d0679a9deaaa42"],["images/browser-safari-ios.svg","ebcf653ca8f53fd1824969a7fb281c69"],["images/browser-safari.svg","16546b0bcadfc60d4cb71ab9a58fbf19"],["images/browserconfig.xml","a493ba0aa0b8ec8068d786d7248bb92c"],["images/favicon-16x16.png","6a3dc293d1c5cbf767520505d65477c9"],["images/favicon-32x32.png","767567160e0d1d84a969d9715e46f465"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","d8a88e4942c8f5e58143f1d941303db6"],["images/icon-info.svg","d194a783f7ae013633c3962309dc9fa8"],["images/icon-tag.svg","92da070a2ceacf6dc3c7c6a5e831e5b8"],["images/icon-warning.svg","cc46e345dcb26154c0e7966ea974f19c"],["images/logo.svg","d26b396eee5e971723a225ac8fcd833f"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/mstile-150x150.png","28c8988c9be55c9c9708064a724831b9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/safari-pinned-tab.svg","f4fd7744ee003c68e0fd927507ab0701"],["images/samsung_homescreen.jpg","4462178424f5ce79b5757748ba5f1ec4"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["images/site.webmanifest","b9aa277fcfc34c31db6c7a7ea3469b8c"],["index.html","177d3d88e5a47d3692f949752a314954"],["index.xml","1a0c5c23cf36ef2222c4f5554c844ee7"],["js/bootstrap.bundle.min.js","21f815ff6d1883c4e81d821d38ff4070"],["js/dom-scripts.js","65957d64a520ef783c8c8ee7c4e2a676"],["js/jquery.slim.min.js","fb8409a092adc6e8be17e87d59e0595e"],["js/prism.js","67aef10ff8065f32b433477ac58d6fcd"],["js/service-worker-registration.js","a1f2a1b06947660067fda855876f33c5"],["manifest.json","8496c424d9780742d62dca9711f134dd"],["patterns/code-patterns/accordion/index.html","25f7986ad8b3258381afea2f40fc8337"],["patterns/code-patterns/expandable-sections/index.html","84f353c59e5b6bad9c3ec1d572162eba"],["patterns/code-patterns/index.html","263f47d78ba5e68f262e6b5faf61c350"],["patterns/code-patterns/index.xml","4d4e2249c309e66b0402681f5ec26e07"],["patterns/code-patterns/menus/index.html","5b64e8282ec9446ac67fc26193158b3f"],["patterns/code-patterns/modal/index.html","5f1b3476a775e5fb9deb918f7cff9fb2"],["patterns/code-patterns/skiplink/index.html","3bfab71efbdd2215510833ed01a3ba20"],["patterns/index.html","5c54498b8cd0021c597c560de2354e9a"],["patterns/index.xml","f5ba7dad027e244b68fd7a1f21dc181b"],["patterns/reference/alttext/index.html","d4f33bd477e53e7c325df743a9074804"],["patterns/reference/color/index.html","fd78bace09eb4abbc1aa7fda402f297c"],["patterns/reference/index.html","ad135d9d59bd5903680fa18316c89132"],["patterns/reference/index.xml","b80e78c33a48aa1f8c50863d1559d7a3"],["patterns/reference/nav/index.html","2e3c8410d70026efbc0787452d9a61b2"],["patterns/reference/notifications/index.html","12ba5115ed2c9b05ca11d911018d884a"],["patterns/w3c/atag2/index.html","dbf63c6453975bd9cd744b1d5b4e65a8"],["patterns/w3c/index.html","847fbec08428319ba2d674104be3ca26"],["patterns/w3c/index.xml","149cfd6b99d3b83faa3cea64a5c19ec5"],["patterns/w3c/wcagquickref/index.html","30896c2e572f6a52ea439b729b2b9bb4"],["patterns/wcag/index.html","e53ca1b26b016320ea0cf5aea7bffcb2"],["patterns/wcag/index.xml","a09e753bb6623f143e26df9d94d75879"],["patterns/wcag/wcagquickref/index.html","f026376518f35920cbbb0f0a5e98046d"],["print-version/index.html","112c71f68bf53927cf1b30394e027db9"],["sitemap.xml","d3ebb597de8e39328bfbd1a1d6b2ea24"],["tags/accordion-menu-toggle-expand/index.html","2812ec16bb50bbc45b0ac69fdd13fbbc"],["tags/accordion-menu-toggle-expand/index.xml","6020207d9666a207e5170cccc0785896"],["tags/index.html","6e0a8a96da5db4ed03e3463c7cae86c3"],["tags/index.xml","e42505ba4fe8857709893ef6dc805cd1"],["tags/markdown/index.html","cfdbe1bfc43b2a038589723015a2c92a"],["tags/markdown/index.xml","d3e9c7e2f3fdf27549a3a7070d312383"],["tags/menu-toggle-expand/index.html","fb74c0a584bb775a04862f400a040c0f"],["tags/menu-toggle-expand/index.xml","fca76075891e6a1cb49b31273fc74a42"],["tags/metadata/index.html","b33f4cbd73d562f90cf9453e6e2dffff"],["tags/metadata/index.xml","0da6a13762076cff318ff6656d97caed"],["tags/modal-popup/index.html","13720d45b456a0f5f6ce873ed881d528"],["tags/modal-popup/index.xml","ab2e57c2482f7cce7ed4574d47832a5c"],["tags/navigation-skip-link/index.html","e58790cb6442a89abe8e090384519350"],["tags/navigation-skip-link/index.xml","a35d6b61c8171d15be12f2ddfead1432"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







