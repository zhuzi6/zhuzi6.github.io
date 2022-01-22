/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","eb072477d91abc18febf72e04d7eece8"],["/archives/2021/11/index.html","fbe3b04df39351c552e53de04f0d1c45"],["/archives/2021/11/page/2/index.html","7cbc426dd833635ab47626052236fefc"],["/archives/2021/12/index.html","6182f3bf41a475de39f8e1abbc9a1ef2"],["/archives/2021/12/page/2/index.html","24090b1a137298e4fd3fded899eea1ef"],["/archives/2021/index.html","1a7a9264c6fb9a2a33c0c28c65364eb1"],["/archives/2021/page/2/index.html","47fc95026904d554820bf73ec2c493b1"],["/archives/2021/page/3/index.html","58026ef8f075413687dd0020f7e640a6"],["/archives/2021/page/4/index.html","429413de742e2fbb49d32709c35cfb80"],["/archives/2022/01/index.html","906e4d7dbdcdadcb7eacfbcbc44abfe8"],["/archives/2022/index.html","cc86445bd8dbe3a05f0026f15e81c85e"],["/archives/index.html","0f25be6908a8ceb15ef44a3f0ae91594"],["/archives/page/2/index.html","0171b40ff77c795e9982a5b4230d47cb"],["/archives/page/3/index.html","28d006d51491c62e6f08a78cad16f5c8"],["/archives/page/4/index.html","ca138fba2728fa37bc00799d9c3234ef"],["/categories/index.html","274ed5ff7cf86ef95904ae88a7bea538"],["/comments/index.html","07dc15d1fe2698620f9c8623b15c842f"],["/cover/index.html","1a2a1b34e379c8e621d09f4bbc4690ab"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","77451e069c0ccddb011102df920731f4"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","cb7d44dc26b4cd42718340ebfd3d4641"],["/page/2/index.html","dc0f0861ffca655835cb9e0fd7cc4eaa"],["/page/3/index.html","febd64ac3e0177a554c4df5fe3349685"],["/page/4/index.html","94b58c40e9b2add1026bcee745f7e0e9"],["/posts/1/index.html","cea23c9ce792e68707774605ec9b7e33"],["/posts/10250/index.html","6389bc730946e999825c9796cff2ef0a"],["/posts/11812/index.html","f644e9598c132092050317819d037c9a"],["/posts/12811/index.html","eb1383b797ef3d896523c76165403d7e"],["/posts/1647/index.html","b67ac62c199608ca53aa2005063d2171"],["/posts/17/index.html","4e8d670323c627da9a599c35d75f8c2e"],["/posts/19914/index.html","8c8952c15ec5f7d99f1bfc0c97c8371e"],["/posts/20777/index.html","05329443c4c0171420c043eee9cf7944"],["/posts/21874/index.html","33457291be13186e92f987e1d8b94157"],["/posts/24608/index.html","dc9799834195d39d767ec0417b485ccc"],["/posts/25781/index.html","fd5d797aa548a4b6002f9599ab997cb8"],["/posts/27099/index.html","a016098fdb8f2255dda67968ff2e14ab"],["/posts/27776/index.html","52b11ac2028a36dc5588638fffa9c113"],["/posts/27817/index.html","45139554583acbbc65a17bd8e86bf194"],["/posts/34183/index.html","0c1529b5e00ade2521071cb31da80eb0"],["/posts/34536/index.html","a2f979f8a352fe0e37fd76c02a727428"],["/posts/36110/index.html","4027e546e452089babad53aeaaf990c2"],["/posts/36978/index.html","e9b3d4abd77ce0571d888914cb4bb264"],["/posts/37060/index.html","b36a65a51215237fe84fea80e6c1bf83"],["/posts/38125/index.html","ff70979140af90636096e50021f8e7d9"],["/posts/39413/index.html","69b6a0d9f7896382ee34f27f04e38d06"],["/posts/40759/index.html","92eba467ef3ea68bf7f69d9800929592"],["/posts/41157/index.html","8e01459603985e4b6b83634dc99ff0f2"],["/posts/42327/index.html","8a2c68933c7301d283aa25acc2e3ffda"],["/posts/45698/index.html","8643dfe27622bbdbf382178bca826307"],["/posts/48470/index.html","1d27d46206526fa0c54ba0a30e394651"],["/posts/49122/index.html","e8317e67c893594218e96f922e5a7369"],["/posts/49370/index.html","c039b433a69bcb7404a633e7d7d9e3ab"],["/posts/50467/index.html","d213ee56e7668be6fddd19475297b77c"],["/posts/56727/index.html","599c63e2ee674d4e4f499e6a9770da81"],["/posts/60038/index.html","964cf5e23ee94b04f851a77cfab72d11"],["/posts/60039/index.html","077cfa4fb426c1ecab5561e187cc8fe1"],["/posts/60166/index.html","2870b72be7967f05f5044a84f2dabe5f"],["/posts/60716/index.html","61251e7ed970aabf204e9c11cd6cd4d6"],["/posts/60766/index.html","7c45a2050b264f0304b86cef8a07045d"],["/posts/63489/index.html","f6df6c3e60a4993439975082c88f0aad"],["/posts/undefined/index.html","ce68a74873426a716a95c88af988a732"],["/sw-register.js","7f4c2df5836d00d4af56783f1a409352"],["/tags/AAD/index.html","027e86544ee879f3c1e52366613fba2d"],["/tags/AutoRclone/index.html","5b59e7e9d2f72193584166a20414bd76"],["/tags/Azure/index.html","69c7d73b3888b0463ba344409cf4f4f5"],["/tags/CDN/index.html","d1cc81004f3893be716481958a7c2b12"],["/tags/CDN加速/index.html","4f32e3bdf7a5a39a07754c6dfcbb7404"],["/tags/DD系统/index.html","11177e11aaad276da5d0ed0315ce4859"],["/tags/Github/index.html","72dc9e41e0c82b95aa9ed602c2825e0d"],["/tags/Okteto/index.html","bef08bb9afe40486e81eeb35abb9f8b0"],["/tags/Oracle/index.html","e67345ca1bd1144e09e19e9581109801"],["/tags/Rclone/index.html","8301c426ec74144364d6cc153420355a"],["/tags/VPS/index.html","d93bb8f395f8ebd10d020d6f511e3828"],["/tags/Vercel/index.html","19ae48a4abb72b87e94632ef07ff2003"],["/tags/cloudflare/index.html","153902759232dd31b9a099a37ab5ab16"],["/tags/freenom/index.html","86425a04b02074e5d01c3f9eac5a6905"],["/tags/google-drive/index.html","c8d649e97cad71e0532149984969f7fc"],["/tags/google/index.html","23be7758606c02462912af9a9a8097c7"],["/tags/heroku/index.html","7f6986c41df702afd7df43a8a3103ab5"],["/tags/hostloc/index.html","71ae977ebf89b57907d9b2f2824e8539"],["/tags/index.html","8afb435f864c4859b0e0160232c122f2"],["/tags/onedrive/index.html","bb00870f03f77287addfab5db638e46d"],["/tags/telegram/index.html","78e81250873b3d5716e89c8f53485bcd"],["/tags/wordpress/index.html","91de3d40ef99505f87f3770b24cdd042"],["/tags/免费/index.html","6046e465bcc8c20d25e775b096f5cd59"],["/tags/全局管理/index.html","0b397e8d7c487c2bb89f66069794a7c1"],["/tags/升级/index.html","d7cc947599982d846302344a65d7ad5f"],["/tags/图片收藏/index.html","6d14eac577f06c02aa86fffea179a633"],["/tags/域名/index.html","624fc62efb647fa298328ffd1180683a"],["/tags/域名续期/index.html","259f5a4bdaa162fbcec57d5186475a72"],["/tags/富强/index.html","e4a55f55c62fef259f5815668f2ffaa5"],["/tags/建站/index.html","df67030cf1e2e325202ccd3405f6c69f"],["/tags/挖矿/index.html","822d8324524cb0e917a588f616e4a9e7"],["/tags/搜图/index.html","a184cf82d2c79bdb14dbe2dfa6b1f253"],["/tags/目录程序/index.html","b39ff17ff4fe964ede715c5af983c4a3"],["/tags/自建网盘/index.html","69c532544f84cea8ca58a42be497f544"],["/tags/自建网站/index.html","9a6cb11f300f110ff10b92b37857dd68"],["/tags/虚拟空间/index.html","9e6111ca83b4861ad05422daf2f8d9e1"],["/tags/转存/index.html","f44d7dc90d52eeee3834302784844468"],["/tags/随机图/index.html","4b30c8cd276da2232ad1e51403eaa7a7"],["/tags/随机图片/index.html","7d299f30174c8f860293a77303793ba4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
