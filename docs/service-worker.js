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

var precacheConfig = [["404.html","1b7b36e1b929dcfe9ce2a6899922a08a"],["browserconfig.xml","92828d62de7f323d11563be3eef26828"],["categories/index.html","42ee6e7d054577fbeb9b841f665d23e1"],["categories/index.xml","ca49bbcbb961fd67c13ff2faf56a84fb"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","f1f3ac91665d7427c39a7ab4b551cf31"],["css/images/icon-tick.svg","4bab0777ae9f5081c7f29a0d1175c6b1"],["css/images/stripe.svg","ef03fea85121c7139ec140cd9a60d102"],["css/prism.css","2b0c205b40b8af76743806118004bef4"],["css/styles.css","6cde701a8761f9a5b510786dbadf9002"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/browser-chrome-android.svg","a32653815f36daa0d6877798cdfd1dfa"],["images/browser-chrome.svg","86ab1442e7d0796694b584a73488257e"],["images/browser-edge.svg","fd4ab69a946b62784f153b4f729892d9"],["images/browser-firefox-android.svg","5ec1ad3491aad31ac93d5a4fc72c98b7"],["images/browser-firefox.svg","4064d8ab30c474f254a27e4d06b0062f"],["images/browser-ie.svg","c9a6382f7e0f27462dee1cf1699a78aa"],["images/browser-opera.svg","650571954d8269dc63d0679a9deaaa42"],["images/browser-safari-ios.svg","ebcf653ca8f53fd1824969a7fb281c69"],["images/browser-safari.svg","16546b0bcadfc60d4cb71ab9a58fbf19"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/icon-info.svg","d194a783f7ae013633c3962309dc9fa8"],["images/icon-tag.svg","92da070a2ceacf6dc3c7c6a5e831e5b8"],["images/icon-warning.svg","cc46e345dcb26154c0e7966ea974f19c"],["images/logo.svg","62118ed7973ab8d035c3925357a40096"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/samsung_homescreen.jpg","4462178424f5ce79b5757748ba5f1ec4"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["index.html","15f712ed565924bfb766ff330f898e7c"],["index.xml","cb5f58d956c62dba727b087f966b9a35"],["js/dom-scripts.js","65957d64a520ef783c8c8ee7c4e2a676"],["js/prism.js","fdcc87318070d0b4eb7efdfb99be7bc2"],["js/service-worker-registration.js","a1f2a1b06947660067fda855876f33c5"],["manifest.json","ea80deeb4622020215c3d56dff8e13dc"],["patterns/code-patterns/expandable-sections/index.html","98752c8482c57fb637d703ceacd20a06"],["patterns/code-patterns/index.html","a1539b1f1fb5c2bd58d5d5117f3362a9"],["patterns/code-patterns/index.xml","d5869e6ee49f4aa791da224fd7ef9c9a"],["patterns/coding/code-blocks/index.html","95b79de8c2b01f03b7a574d1b81668b6"],["patterns/coding/color-palettes/index.html","22700dfc12d341e725fb60be2580ecfc"],["patterns/coding/command-line/index.html","628bdb34ccbf4205342fa49b0745ec73"],["patterns/coding/demo-embedding/index.html","5e0f32e441f802bc9ac71d37f81b1d4a"],["patterns/coding/file-trees/index.html","f03e2fee47d669698ff2fd83b7d4ef62"],["patterns/coding/index.html","a232ac610059d9921b1ead3a91153cbc"],["patterns/coding/index.xml","1b316adf9d72cab08c500e483cafc74a"],["patterns/coding/tested/index.html","d4611a7cbea30fd8725d51d8a0ecf20d"],["patterns/coding/writing-inline-demos/index.html","73ef297c9ba49cf42ec414a5c47e6c8f"],["patterns/index.html","1dcd7bdecee4f5e77ad149d839d244dd"],["patterns/index.xml","a1821c55141d347b97c7eccef7d7a470"],["patterns/installation/index.html","6835dd41971ed4b3dd7e1cf7767ac628"],["patterns/media/including-images/index.html","d0563d74412172b6c56e5bd3791411e2"],["patterns/media/including-videos/index.html","eeedf1484c92d9c38b7518e26cd4b9ce"],["patterns/media/index.html","4d6d4a31f3e2d518ce8d1e3ddcf0e1eb"],["patterns/media/index.xml","e91d04f14d7620be48eb100295f1b294"],["patterns/printing/index.html","37742d0b41e927941f62d56cf48a19f2"],["patterns/serving/index.html","c4a6b1a02d7bda7283a2d91e66482aae"],["patterns/setup/index.html","8b5d866b3fb6af996506d8f466c31efc"],["patterns/updating/index.html","334edab3d3267589832d6223f743e251"],["patterns/writing/expandable-sections/index.html","ca65e8d4088ae2b53ca54075a5fc42d7"],["patterns/writing/index.html","750e38289a80990fadceb403447600a3"],["patterns/writing/index.xml","9044d4a4aff6c28e1b4d4c0c6f7f366d"],["patterns/writing/markdown-and-metadata/index.html","db1d0c31fb6f924910654e023eb6b68e"],["patterns/writing/notes-and-warnings/index.html","0722ecabcfffb35ae7d80027b55d789f"],["patterns/writing/project-structure/index.html","2031fdf9436d92c7683ee64cd9261602"],["patterns/writing/references/index.html","0a3f1da0573b7f9bb14c0446ca433c60"],["patterns/writing/snippets/index.html","f02ab5e2f65a34910e207d13b99486a8"],["patterns/writing/tables-of-contents/index.html","f20932a7258ad0682048fd5febbf74df"],["print-version/index.html","6c6856b536fe7499369121aa0deea715"],["sitemap.xml","ec491593b95be6f39b79eab2ab4ceed6"],["tags/index.html","fb0311a41b33cc7e11fd98c69ede36f0"],["tags/index.xml","30480c530f20f98debf97a3b4b846ac2"],["tags/markdown/index.html","cfdbe1bfc43b2a038589723015a2c92a"],["tags/markdown/index.xml","d3e9c7e2f3fdf27549a3a7070d312383"],["tags/metadata/index.html","b33f4cbd73d562f90cf9453e6e2dffff"],["tags/metadata/index.xml","0da6a13762076cff318ff6656d97caed"]];
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







