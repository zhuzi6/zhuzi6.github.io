/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","45b318ace28ac5bd485bdf5b59383e1b"],["/archives/2021/11/index.html","e983a513dd621ff0e46965e8369cde11"],["/archives/2021/11/page/2/index.html","748b2b7c1f466590e12ec0a576781ea1"],["/archives/2021/12/index.html","df52ca7435e0de48074cafb24148f36a"],["/archives/2021/12/page/2/index.html","69f7bb71ad81cdfa7fc2667a3242416c"],["/archives/2021/index.html","78356cf9dd7a6c6985f2d1c0f9b3ff48"],["/archives/2021/page/2/index.html","bcc3467176919a3b6addee0002df748f"],["/archives/2021/page/3/index.html","2e861a85cd9452dc0af955ef97dc0094"],["/archives/2021/page/4/index.html","33181d8f8e71962a30e168ca3a7a2577"],["/archives/2022/01/index.html","d64fd53acb9ac64d64ecd575a820893b"],["/archives/2022/02/index.html","2daee93b30358d05307821caad48dd2b"],["/archives/2022/03/index.html","9e3f87dd1f7a22540200912dd8e8d25b"],["/archives/2022/09/index.html","d71f3fae503bfa8e72ed2d4e3b257d65"],["/archives/2022/index.html","7b1c611ceab2cf2e2ed98ddac0c9f5bc"],["/archives/2022/page/2/index.html","90a078d4de66937578d68d5530008998"],["/archives/index.html","03e6467195b159496be9b8e71c08f130"],["/archives/page/2/index.html","df2da6bf17a023b5ab9843625b20c9d0"],["/archives/page/3/index.html","5d4f6db70f08813ef3ac0fbc7eb7767b"],["/archives/page/4/index.html","79c245316c582f6a8114b982a48972e3"],["/archives/page/5/index.html","f3a3daf36ca91614e1f21796d118b06a"],["/categories/index.html","c4e2e2dad30b8a1b3edf0a1c4cb06b5f"],["/comments/index.html","3dd3ff9c917a4e72ffd65efe1c299dc8"],["/cover/index.html","54716f3164b40ea2a0941ddbc6cbfe7c"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","dc21b975d6fc9b734027b19a71ffd530"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","7fb4a7fae0be922088d9d5841d47ac7f"],["/page/2/index.html","9a4e692801ffcf1be0ac0e448f0450b1"],["/page/3/index.html","18b8634c09b1d8e6fb074b27c91be0ca"],["/page/4/index.html","b1e634fb2dc274e3851f11a4d783af34"],["/page/5/index.html","cb85596e61d19cd36e7f746a9416394a"],["/posts/1/index.html","3fae7d22b57d651600642d0e1c37ce8b"],["/posts/10250/index.html","cfc629c70527d659def30174a8c98c51"],["/posts/11566/index.html","5f96ad1aa03130a6b5e0a6ea6677469a"],["/posts/11812/index.html","f1a09d996c849f60470468cbde883564"],["/posts/12811/index.html","b50bb2181ba820510a1992d7a4979194"],["/posts/1647/index.html","40b83d432eb9417515f65dd1d5d53831"],["/posts/17/index.html","9152847a8b27c6a486204ecd694a23d5"],["/posts/19914/index.html","373256563f72a56faa3f0703192d15cc"],["/posts/20777/index.html","3b1cb05267c7c95fc53d02e490d53f43"],["/posts/21874/index.html","78bc5fe436ff4fb886e127af6cb28e35"],["/posts/24608/index.html","e9424b12d7da7154229d9bdd67e7c2c8"],["/posts/25781/index.html","6a33de499ed7d1678acdb6d51633d985"],["/posts/27099/index.html","509ee56e240d97498c67ce5a5a914f16"],["/posts/27776/index.html","85ed186bd738aadba884155673e91d36"],["/posts/27817/index.html","e30704e1a9e2f72ab3b52a64183b305d"],["/posts/29095/index.html","f00b5d93dc1a6ad3d161249f5b7ae7b2"],["/posts/29839/index.html","54be7e76d7d6dd2e12af237b31fe01fd"],["/posts/34183/index.html","4772603de22e1afcbff7c2a6ffc12f69"],["/posts/34536/index.html","af9a28fe6305839ae929c3e45d9ecd25"],["/posts/36110/index.html","c048841f118f4c056affdb7cfe52bf05"],["/posts/36978/index.html","b115261418810af45c61bb4c9d321778"],["/posts/37060/index.html","c176efbbf5fb5694129f31c08d62d27d"],["/posts/38125/index.html","df42dc8ad5b5be202e0a94861d0db2b6"],["/posts/39413/index.html","36590b13e24e8a0a27c853a5bb80ba4d"],["/posts/40/index.html","dc309ffaaea3130c64e27605f51a1cd2"],["/posts/40759/index.html","ec48737a08293b682a43d017b11800b6"],["/posts/41157/index.html","55f51d3d2a099984df90ff2fdc73b300"],["/posts/42327/index.html","745e41dd61eb243fe1b7899b5cec9dba"],["/posts/44924/index.html","683dfe901711c843a225793a646f121f"],["/posts/45698/index.html","275945db77e8ea7ae46ebe9da8fabf74"],["/posts/48040/index.html","90231001385c9c0a4153d68a9a20388f"],["/posts/48470/index.html","c7ddcf9e5b3ad47039ae30837edbd109"],["/posts/49122/index.html","b95b6b7cf9f04c40e07f6a1b9ae3bf15"],["/posts/49370/index.html","a2b85272dc6cee66ffed947a71c3bd2b"],["/posts/50467/index.html","c370bfceb5768c80180d9c649c637f66"],["/posts/54280/index.html","0cdc493fc15588b9e900f02ec132470e"],["/posts/56508/index.html","5418dec88b832fa9b84e08ab095acadc"],["/posts/56727/index.html","c90456269286f839d4347ad1f51ca97c"],["/posts/60038/index.html","f9b188c9e72abec683d9804f82a2fbba"],["/posts/60039/index.html","27c931dc9d4502145e25921f36d76203"],["/posts/60166/index.html","181da7c9c9137879e5925cd56a27ced8"],["/posts/60716/index.html","cefd5b8d7008635370d8dca74cb45d77"],["/posts/60766/index.html","64f8885eded276c192f2bb5772e7ce2c"],["/posts/63489/index.html","c6fd6eca2045a57e5eb03941297188f3"],["/posts/undefined/index.html","7580796c003fa9e95d3b269cce88dcd3"],["/sw-register.js","a54bf1c3d9f36873e046ff6f98eb4521"],["/tags/AAD/index.html","e96af34343ad925e653dab1d6e264b8e"],["/tags/Aria2/index.html","622ad2aba6c3e809df6059186a80c610"],["/tags/AutoRclone/index.html","52fea7fbf39768514360d45c5be4c39c"],["/tags/Azure/index.html","4c1811b777be7ccf575c4fedfdf3f4af"],["/tags/CDN/index.html","4a3ad2d45696f0beb35fc80e9afcab0d"],["/tags/CDN加速/index.html","cafb11e4f7d39f01d9f26473f35ffec7"],["/tags/DD系统/index.html","803861d2f77309f9cc35926320ad2b29"],["/tags/EMBY/index.html","375078868d94460a9602291693098aed"],["/tags/Github/index.html","95a0cbdf63b32c4fb2ca7f788bc7deff"],["/tags/Linux/index.html","42ef1b6b3660f375d4e29d0bf3873a58"],["/tags/Okteto/index.html","51dcf53da7075405f3aece0dbccf9ab6"],["/tags/Oracle/index.html","727186f830fd1d79a1ff31c1d7aa3f1e"],["/tags/Pixiv/index.html","cb9a9d055a57114ee2663e8b8fa24f95"],["/tags/Rclone/index.html","1de47ee978eb05d1658841bf0cc3412f"],["/tags/VPS/index.html","bcda304442d753d32d8007d74154c526"],["/tags/Vercel/index.html","a7f217e3ec5258da78b2d02f8ed9d927"],["/tags/cloudflare/index.html","ae682ebdeb38d0ce55822ac1d01c9ad4"],["/tags/freenom/index.html","486bb8ee77149083df9bc853acbfc3f7"],["/tags/google-drive/index.html","31b13ff7b20c55286b801777d4b0cb72"],["/tags/google/index.html","3cd3be94aee696472f5a5bee300510e2"],["/tags/heroku/index.html","794b2527a28045ee17754976249cfced"],["/tags/hostloc/index.html","bc24544f649f5b5997fdedc54ec4039f"],["/tags/index.html","de76893a4596e47c1367bb74b6adfd50"],["/tags/onedrive/index.html","83d8045a8901b879ceaaf68cab934a87"],["/tags/telegram/index.html","ebf2a5280964c40e2ad81e2fe0c172f8"],["/tags/tracker/index.html","df590173867cdcc903a61486ac0fea5a"],["/tags/wordpress/index.html","fdae00fab5560a22a94bf2613ead09d9"],["/tags/下载/index.html","ea580b7bba7ac3fde288bce3d8017ad7"],["/tags/免费/index.html","a4518fc62b9065afffb3bb5b6bea36c3"],["/tags/全局管理/index.html","1ee52d7274e0dc88f5b05a5fd31bb255"],["/tags/升级/index.html","4d67da8973f2b42d3f5ddaef723030e1"],["/tags/图片收藏/index.html","66d3863974661d73a6888ce5dca16cca"],["/tags/域名/index.html","ecdf7cf62d6886525efe330fef844d89"],["/tags/域名续期/index.html","38a8b175ac4a1eb38a1d4f9e6a4967ad"],["/tags/富强/index.html","38218e77abf4d7a563264e0bd71606e2"],["/tags/建站/index.html","d4add9e7954449cb44fc20667a1f976a"],["/tags/挖矿/index.html","741fd1a13b0bd8babe0df930afec8aaf"],["/tags/搜图/index.html","496fc90d9a86e7403c7d9433af57bfac"],["/tags/白嫖/index.html","d62750c0956ae02d380fd03dfa785a01"],["/tags/目录程序/index.html","7510387438bceac857ca9c5af1faf6f3"],["/tags/磁力/index.html","c52afdce10bb8c38f8c7c294697cf179"],["/tags/离线下载/index.html","2cdcc97aecf0590ad66847edbf75c0f2"],["/tags/自建网盘/index.html","aa515b6fded3d56ffe674c6bb753f410"],["/tags/自建网站/index.html","1134b0ad25c51964be1a8e3e01393a47"],["/tags/虚拟空间/index.html","5a42ec591b0d6d58d70b1472595cbb52"],["/tags/转存/index.html","461815f3a0c461b5af0fd86fd9eea0bc"],["/tags/运维监控/index.html","cc80114916aee109892a6bc99518ac1c"],["/tags/随机图/index.html","b7b381ded1073436d4db409ac163abe8"],["/tags/随机图片/index.html","bf17a4f97c1da4e5bd2dc0c9d4d4fc3a"]];
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
