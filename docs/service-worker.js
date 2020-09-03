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

var precacheConfig = [["404.html","0de4bd9680d0beba7921276873a77c75"],["browserconfig.xml","92828d62de7f323d11563be3eef26828"],["categories/index.html","ce4b202764ffda5f356d5ad8330f47b5"],["categories/index.xml","e925d64efafd36e6ca25bfb29f2ab2dd"],["css/bootstrap.min.css","816af0eddd3b4822c2756227c7e7b7ee"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","f1f3ac91665d7427c39a7ab4b551cf31"],["css/images/icon-tick.svg","4bab0777ae9f5081c7f29a0d1175c6b1"],["css/images/stripe.svg","ef03fea85121c7139ec140cd9a60d102"],["css/prism.css","b5f7656c3c392290db17616d8e9cb7a8"],["css/styles.css","d31239da7a81730d34f8df24962657d0"],["images/android-chrome-192x192.png","9a5217d9c2f558dc27e10c9bd1df277f"],["images/android-chrome-512x512.png","824a93b245c640f71a97cfda02754811"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/apple-touch-icon.png","1302237db2a4e977caa7b3b45bc09f28"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/browser-chrome-android.svg","a32653815f36daa0d6877798cdfd1dfa"],["images/browser-chrome.svg","86ab1442e7d0796694b584a73488257e"],["images/browser-edge.svg","fd4ab69a946b62784f153b4f729892d9"],["images/browser-firefox-android.svg","5ec1ad3491aad31ac93d5a4fc72c98b7"],["images/browser-firefox.svg","4064d8ab30c474f254a27e4d06b0062f"],["images/browser-ie.svg","c9a6382f7e0f27462dee1cf1699a78aa"],["images/browser-opera.svg","650571954d8269dc63d0679a9deaaa42"],["images/browser-safari-ios.svg","ebcf653ca8f53fd1824969a7fb281c69"],["images/browser-safari.svg","16546b0bcadfc60d4cb71ab9a58fbf19"],["images/browserconfig.xml","a493ba0aa0b8ec8068d786d7248bb92c"],["images/favicon-16x16.png","6a3dc293d1c5cbf767520505d65477c9"],["images/favicon-32x32.png","767567160e0d1d84a969d9715e46f465"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","d8a88e4942c8f5e58143f1d941303db6"],["images/icon-info.svg","d194a783f7ae013633c3962309dc9fa8"],["images/icon-tag.svg","92da070a2ceacf6dc3c7c6a5e831e5b8"],["images/icon-warning.svg","cc46e345dcb26154c0e7966ea974f19c"],["images/logo.svg","d26b396eee5e971723a225ac8fcd833f"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/mstile-150x150.png","28c8988c9be55c9c9708064a724831b9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/safari-pinned-tab.svg","f4fd7744ee003c68e0fd927507ab0701"],["images/samsung_homescreen.jpg","4462178424f5ce79b5757748ba5f1ec4"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["images/site.webmanifest","b9aa277fcfc34c31db6c7a7ea3469b8c"],["index.html","c5365c7d8afd08707240bbda7e869b88"],["index.xml","6720db387192890c0a0f3ecab115f9f3"],["js/bootstrap.bundle.min.js","21f815ff6d1883c4e81d821d38ff4070"],["js/dom-scripts.js","65957d64a520ef783c8c8ee7c4e2a676"],["js/jquery.slim.min.js","fb8409a092adc6e8be17e87d59e0595e"],["js/prism.js","67aef10ff8065f32b433477ac58d6fcd"],["js/service-worker-registration.js","a1f2a1b06947660067fda855876f33c5"],["manifest.json","8496c424d9780742d62dca9711f134dd"],["patterns/aria/index.html","868c66a6682cfd6f2c67ae6dac8d1b14"],["patterns/aria/index.xml","0b48c0de791069fdf705ac2a405a39ea"],["patterns/aria/name/index.html","3d6ee1b2ce375b853e71bb41b29ad0a1"],["patterns/aria/name/index.xml","58d9650893ace1fc0e0f4d03c7b8dfa8"],["patterns/aria/name/name/index.html","5e27e6ec581d4d2bfda26273c4637bbb"],["patterns/aria/name/name2/index.html","38273a56309d36be84886e1a540eb61c"],["patterns/aria/roles/application/index.html","3c31fd4e29220b321ba89e0b68139cfe"],["patterns/aria/roles/index.html","984a69ac18397a05f7d1a3b2728d82ee"],["patterns/aria/roles/index.xml","901bce29376c8963ed42583cc22df91c"],["patterns/code-patterns/accordion/index.html","835770a80ab8708615d7e281b8ea3f0d"],["patterns/code-patterns/alerts/index.html","11bd7ea9b016e6f21e19cc4b066fa977"],["patterns/code-patterns/datepicker/index.html","180d32809580d96969d87c7e93433ad8"],["patterns/code-patterns/expandable-sections/index.html","5e68ea5291593b22fa09f2b16950ec7d"],["patterns/code-patterns/index.html","1de72be74364f101ea149cb79cdeb2dc"],["patterns/code-patterns/index.xml","1a0258a4a0aef8eac53d608d626728bc"],["patterns/code-patterns/menus/index.html","02d6eceec7fd41b4d5395ba2efdf25c4"],["patterns/code-patterns/modal/index.html","c3f5ae2d779298c908d83646108f87e1"],["patterns/code-patterns/skiplink/index.html","40e03656f2a354bb630cecd1253a1c3b"],["patterns/code-patterns/sort-table/index.html","1ec64963944facd28a845193063cbe94"],["patterns/code-patterns/tables/index.html","9ce8c9d42ff809292d8fa8d0387c470d"],["patterns/index.html","15802bb063e23138dcda41d8dfe645fc"],["patterns/index.xml","375df2b551cc07225d148347d5025f50"],["patterns/reference/alttext/index.html","773c87a209655bb888d46f204e919508"],["patterns/reference/aria/index.html","b2885c8c03c6b048943bba4b4453f223"],["patterns/reference/color/index.html","73105bd93e80d0ee7f24c7acbb0844da"],["patterns/reference/dev_resources/index.html","545ae6f224963bb5368b41fc467946b3"],["patterns/reference/index.html","16355565091c16a71f461c4c434bddd6"],["patterns/reference/index.xml","9191d8667bbbac07373d43ddc41db88d"],["patterns/reference/nav/index.html","cc188ac29484babed97dbd1e7e762dce"],["patterns/reference/notifications/index.html","cfc02b806951645b2f6f3cb7baa1e1a7"],["patterns/reference/plugins/index.html","04e9e2507da6524b2feadbec1df8d6b6"],["patterns/reference/sr/index.html","0cc6615b8587df639848f2bcd5233641"],["patterns/w3c/atag2/index.html","c2d6447941f1af03fe37528e5abb49dc"],["patterns/w3c/index.html","7bebe12ae1ee8b3e94b308692c665591"],["patterns/w3c/index.xml","bd6023a9306c66669408c0b3b10ed8b1"],["patterns/w3c/wcagquickref/index.html","993daaf96c221d1c2baf3042b5aae357"],["patterns/wcag/index.html","e53ca1b26b016320ea0cf5aea7bffcb2"],["patterns/wcag/index.xml","a09e753bb6623f143e26df9d94d75879"],["patterns/wcag/wcagquickref/index.html","f026376518f35920cbbb0f0a5e98046d"],["print-version/index.html","e4d41e0a5aaf7974cd21e199082879cb"],["sitemap.xml","59c092a02a73634efb1d7db330a3fb2c"],["tags/accordion-menu-toggle-expand/index.html","2203560fb70d8af9b1d365c4242ad3bc"],["tags/accordion-menu-toggle-expand/index.xml","9de94ee733e7513ff06f2c78c03f12c2"],["tags/datepicker-skip-link/index.html","8a758660cacd06d63e8ee3d12a07a357"],["tags/datepicker-skip-link/index.xml","433c5b58a14fab5066e82a77486326c0"],["tags/datepicker/index.html","5acc8332639b3890d13fe9f66258a2d8"],["tags/datepicker/index.xml","a5bfd38c587aae1529d1fc02913cb649"],["tags/index.html","857f60c46d14ffb35d3384ab734d8940"],["tags/index.xml","be13400bdefbeb6ec2ea4c40e155d616"],["tags/markdown/index.html","cfdbe1bfc43b2a038589723015a2c92a"],["tags/markdown/index.xml","d3e9c7e2f3fdf27549a3a7070d312383"],["tags/menu-toggle-expand/index.html","a2913af2bdb2548a91f215c5dc647953"],["tags/menu-toggle-expand/index.xml","3939d2e91f6cbefc400068e6fff6c7e3"],["tags/metadata/index.html","b33f4cbd73d562f90cf9453e6e2dffff"],["tags/metadata/index.xml","0da6a13762076cff318ff6656d97caed"],["tags/modal-popup/index.html","e183ac025e08379497eaab76fdb0d0f2"],["tags/modal-popup/index.xml","e41a00098818bb5694781744c08b5527"],["tags/navigation-skip-link/index.html","363db6da2dc72a72855c93d3e24d59d9"],["tags/navigation-skip-link/index.xml","cc04f23d33b34bf807bfba6788e1e04a"],["tags/table-grid-sorting/index.html","8f59709c35d86bc8b1b7e8ab4a583876"],["tags/table-grid-sorting/index.xml","27bb9d539d92db662adfec842093ff4f"],["tags/table/index.html","75fbdf35f47d29889e5ee93e5a68f7f3"],["tags/table/index.xml","e5f04cb6bdd421f95cdf33ba5554b1ce"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
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

var createCacheKey = function(originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function(originalUrl,
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







