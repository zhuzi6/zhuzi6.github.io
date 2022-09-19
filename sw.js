/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","130a1b9d095fb54ce2e2c335a8e00c78"],["/archives/2021/11/index.html","2fe9ca230ed886f4afb04e80c09d4a7c"],["/archives/2021/11/page/2/index.html","d096b55aee944a2ed77f2132ac001435"],["/archives/2021/12/index.html","f2d5f919723ba061c09426e8009c8956"],["/archives/2021/12/page/2/index.html","e5b90ce6c9566121e9f816b135ff1d42"],["/archives/2021/index.html","932d78fd90ce0ca8ce117754aa530666"],["/archives/2021/page/2/index.html","eee06ddae08d05133a49e55f2b75bf7d"],["/archives/2021/page/3/index.html","d4b87357397b96e08c18391b3a28a709"],["/archives/2021/page/4/index.html","6e429b5d87300de4d8d5c65932105430"],["/archives/2022/01/index.html","bbfa3816ba2833c9e93c2fa6c6da3e80"],["/archives/2022/02/index.html","45a0b5bb8bea7392a66de4bd125ce173"],["/archives/2022/03/index.html","6e451138a8c50660d111b3f663524969"],["/archives/2022/09/index.html","16ec6cd947bef796b6b84d1e386abbf7"],["/archives/2022/index.html","e12a83e4811bb46838527078d4702552"],["/archives/2022/page/2/index.html","e16db0d6d9d1c512dc6ab470a2aead5d"],["/archives/index.html","469d801be5266e9e107de91e3d688139"],["/archives/page/2/index.html","1ddc526c16c83aa57460625c13dc6d06"],["/archives/page/3/index.html","bbc50ea72e1d17edb05d117afabf412e"],["/archives/page/4/index.html","60646a3d221886e44182eddb8adf78a0"],["/archives/page/5/index.html","862cd6f0e24cea6c1dc814ca88da81f9"],["/categories/index.html","70f755f8be9b8d353d9039954fbbe04e"],["/comments/index.html","474cedc01b64d797dec0b0c8a2399684"],["/cover/index.html","ef26573982c7a1d862c616d24889e1d1"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e3044dc348f1be05132b47919000177b"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","b82407c27f85f96a2ae27182efb44a41"],["/page/2/index.html","fb859059d2a13f5e5b6ca42e47bf49b4"],["/page/3/index.html","58134a75e41bed2443ef98475411fe68"],["/page/4/index.html","5b9e34dcf95a1a0c855237e75533c33f"],["/page/5/index.html","a60d4f3a5355bda18fc183becd96bea2"],["/posts/1/index.html","26f73665fd22a86f23d5bc4095971ad6"],["/posts/10250/index.html","1bc6d2951fcaafc65620432afa551979"],["/posts/11566/index.html","81f39841bce4f256d4f24ff6f0587299"],["/posts/11812/index.html","a1a7be6091c92e784e8cfa61cc8a056f"],["/posts/12811/index.html","02e5453abe3244d29703d40fa0890b59"],["/posts/1647/index.html","b8715b16a165af5d04bba56ffd217a56"],["/posts/17/index.html","4ff44cb42585326d5d77107478f08e73"],["/posts/19914/index.html","f9fe2256b00673c8753ee663e90e58a5"],["/posts/20777/index.html","7313e22d100ed0fcc87f28018bc46461"],["/posts/21874/index.html","f69f2d8b46080a9a7005fa284f2a935c"],["/posts/24608/index.html","7c8d9173065ef8727d01b7d9aa924f68"],["/posts/25781/index.html","ec5e25f0ba799fea7737a71fd7191267"],["/posts/27099/index.html","fddf426edeb247abcfacbaed9a63dc00"],["/posts/27776/index.html","757db7bfcba67a6f996f8f9af74403f7"],["/posts/27817/index.html","922bc1c416854a563233a474e8a75608"],["/posts/29095/index.html","1cd2b5875b245c42d6bf82a0df2bf6c9"],["/posts/29839/index.html","16eb6d91b231f680f29b0922ccaf4d96"],["/posts/34183/index.html","2f2c87efb0cf480056597df7b1a24e5f"],["/posts/34536/index.html","cd226a085181e548f7d12da3170f9534"],["/posts/36110/index.html","f7acb3745c62f84aceba51f80feed69d"],["/posts/36978/index.html","ce3f08c2e46f1ba5ec0cc2dbff9aba7c"],["/posts/37060/index.html","e15de8d63b17ac7e614589082d5f5cf2"],["/posts/38125/index.html","280716f6ef8c33daa4419de84d50cc5f"],["/posts/39413/index.html","cddf51f572aadb9f4fb08c0f4db8fc17"],["/posts/40/index.html","28f3f3da55ad074bc0384b7da3b9d9e8"],["/posts/40759/index.html","89421c6dee2b6cdebc54f26f37d4d9d3"],["/posts/41157/index.html","b10217893a1a72e37be9e118bdea8b4d"],["/posts/42327/index.html","68b32e52cabf72061c6ec0a76ccaeb23"],["/posts/44924/index.html","d32220d3803825db88b6dcbb269d5088"],["/posts/45698/index.html","7441092b4332583ff66f23d989bfd5d4"],["/posts/48040/index.html","a38b747082d7aaeb9cd2688d2ee2540b"],["/posts/48470/index.html","4736543a2f87385296b2cccbd5e01fd2"],["/posts/49122/index.html","b52f5d80954e37b121c80b9ccc0bb98b"],["/posts/49370/index.html","72c9b3cde404ac6e025988372628d844"],["/posts/50467/index.html","0bc53f7dd8409baca816910b9f0293b8"],["/posts/54280/index.html","6977c94986a97e24d7ee4d2bcec7fefc"],["/posts/56727/index.html","6cb18e3e870f169153af523b0ef826f4"],["/posts/60038/index.html","cbf7d827f956deafc4b13636c5fd3a4f"],["/posts/60039/index.html","e5e6bd4b57626b62a28755fdc322ebd5"],["/posts/60166/index.html","8fb6adce1bbee9505d74d2cdd0662501"],["/posts/60716/index.html","90e913348d4b85f2b2e9c54575896fdf"],["/posts/60766/index.html","b17c0e65fd863ddb2d2c029f2db43c0a"],["/posts/63489/index.html","3707e46bbecee44ff2ec7bfcc2b2d323"],["/posts/undefined/index.html","cde6ab95d22afaaa938066a220c25e12"],["/sw-register.js","26754dffc91add861295ed1653d18923"],["/tags/AAD/index.html","741825339a20770495750fd2ce1b8539"],["/tags/Aria2/index.html","f0a9ba3f00d24bfa1373a749620a90c0"],["/tags/AutoRclone/index.html","bfb3bc6934a1374e53bf9adfccd1ba9e"],["/tags/Azure/index.html","ccdbf8736e8fec60c56f8289753a889a"],["/tags/CDN/index.html","c55febac5c83f2933504ef74433f4729"],["/tags/CDN加速/index.html","3010abf5f09b42d85fc0817d19a8d752"],["/tags/DD系统/index.html","d16e2442756261bb29b8f45915b063c8"],["/tags/EMBY/index.html","733fb87ec42595c2504b96d8b84ac7d8"],["/tags/Github/index.html","fb4ffc8b8909a2e7231046add4f41fdc"],["/tags/Okteto/index.html","8cd4cf4797c308035f08b9f5b78204f3"],["/tags/Oracle/index.html","2c98c26797f6e74ad58ea0ff0d7a2625"],["/tags/Pixiv/index.html","d5f1d2313a51c28e13196f1ce62f476d"],["/tags/Rclone/index.html","7442dc2cea447a6b3fe863733781349d"],["/tags/VPS/index.html","aa04476725687a7c5d63f469d9d4e75e"],["/tags/Vercel/index.html","66e084d783b981c534365d3d71699a44"],["/tags/cloudflare/index.html","da86089b0f8b27971aa595f07fa31437"],["/tags/freenom/index.html","ce657f2f6f59501cd0102870683ec119"],["/tags/google-drive/index.html","5bb9ea46c41d41e510bc48abcc84b83d"],["/tags/google/index.html","1f0e9f9c35f641e6d69bfb5096b3ffd6"],["/tags/heroku/index.html","dbea80397855dd513831ec6802bf0e15"],["/tags/hostloc/index.html","ebbb311c95a0589185a302d33c873381"],["/tags/index.html","b7ff592577d344fae61307df36132ae1"],["/tags/onedrive/index.html","2ea8c2f49f75c78f57128226e31c1d59"],["/tags/telegram/index.html","c2fa566a4fb693034b7157ae4aec43ea"],["/tags/tracker/index.html","cc9495c3beca0f054a36f7289304fc15"],["/tags/wordpress/index.html","18aea7deb8f0250611e9df5318d3e6db"],["/tags/下载/index.html","dd0ba033ccbf7919b7cfc13ff73e7102"],["/tags/免费/index.html","f25cbad8426fa337f40e846ce8bc9cae"],["/tags/全局管理/index.html","1064a20e8dbde2b9cd7d8e60b352d8a6"],["/tags/升级/index.html","dd76c0dd120b227f6f54003c2b0e9bf5"],["/tags/图片收藏/index.html","37a81f7e06a0c3b13d69e5572a240fdd"],["/tags/域名/index.html","dc4e2278d1f718700b0537879ac62278"],["/tags/域名续期/index.html","0da5fb4b9d56c24eb10f3440efd690f6"],["/tags/富强/index.html","4208163968fc404866fa6a4bbf8f94ac"],["/tags/建站/index.html","91bb35b6fdbef42b9f3e592c249fc12b"],["/tags/挖矿/index.html","ec9090a775a5fcedcf6156eac0680433"],["/tags/搜图/index.html","66b0c4f409da673628d3989816ed0bef"],["/tags/白嫖/index.html","5ad37c8fd47957c561ad9042cc4e4b2a"],["/tags/目录程序/index.html","36fe28361c81c4c91fdffe07dba81717"],["/tags/磁力/index.html","72819936b45a8e6c57ba2315371ab11b"],["/tags/离线下载/index.html","878d9ed460b1ff427c8f037aa3ddc092"],["/tags/自建网盘/index.html","165f0aa9516919c244d74de03179aec9"],["/tags/自建网站/index.html","9442bc087b6fdb32a8beac506fed69d0"],["/tags/虚拟空间/index.html","abadf11207e531b4cb57411aab39bbf2"],["/tags/转存/index.html","23bab1edb2c6257fbe6b7f5b0d7d98a1"],["/tags/随机图/index.html","37edffadf364ee0cb1b47bb53fb5370d"],["/tags/随机图片/index.html","91b8f0e980c4114b78d5af7435a1883c"]];
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
