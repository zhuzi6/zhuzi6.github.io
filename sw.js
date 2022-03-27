/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","f419107a24fa69a1cc2de8f0de2decad"],["/archives/2021/11/index.html","96a1ea196fcb0d27c774bffe3d7ea300"],["/archives/2021/11/page/2/index.html","7018f452de13edb16f367b2a353da516"],["/archives/2021/12/index.html","556ad7589cc4c46b74984e7a683ef27a"],["/archives/2021/12/page/2/index.html","7646bd7da5dac5220f01a17428c1c52d"],["/archives/2021/index.html","a58eafa1c7945e60f0415e63174f79c3"],["/archives/2021/page/2/index.html","06be5db83a902234a8ea026a4e4b3d0c"],["/archives/2021/page/3/index.html","62d2595236ec8284e01ff704a6bf83b6"],["/archives/2021/page/4/index.html","144ad209064fd55d7ac6be055c63bbd7"],["/archives/2022/01/index.html","5d420fe821d514e3544a8e7e05090805"],["/archives/2022/02/index.html","0a22bfb2375f8e4640536d4846656bbd"],["/archives/2022/03/index.html","b8870251973db4e769c8e5710f6451f5"],["/archives/2022/index.html","88989c28ef8df7429e8a6e45f908ae50"],["/archives/index.html","1b32cde43daf0eaa2493b59d2d2bf8c3"],["/archives/page/2/index.html","8a60d997e54385d61dcb4b7a68f004fc"],["/archives/page/3/index.html","a6024f0fb4676520dcb92202e8d9cfca"],["/archives/page/4/index.html","dd7b1f9885d534feddb2c7e1ddacf73a"],["/archives/page/5/index.html","5e2e45d78e8d61e2096e0a0e2b06b3e4"],["/categories/index.html","dabf35b4f3752aa8b071b9359bbbd451"],["/comments/index.html","dbf78691dc245ed19a09b7e595c3ec2d"],["/cover/index.html","164bbd4210698ab571dc803587a986b3"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6935fcde54e5b7041cf9b4bdc4515a4e"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","819ec4073e878f6db4a8fc29e304228b"],["/page/2/index.html","9fc125d076711e66087fe0c62f3416a3"],["/page/3/index.html","8da25c9b8b8352d50108b4d178f50370"],["/page/4/index.html","ac28098794eb25fed9da0453c6e90d9e"],["/page/5/index.html","d5aa5a5ca0ba08b9b63b05323f12de39"],["/posts/1/index.html","5740c6a4019233d44da5e2f716e50ae4"],["/posts/10250/index.html","c41076d650b5e7ccd4b2ef10904ca352"],["/posts/11566/index.html","fc7c774c582055be729acbc0f9bbe564"],["/posts/11812/index.html","4cb22c4c8e13feff2367c51955aa86c1"],["/posts/12811/index.html","497f0da6777e74e7436f9a33bf4f0257"],["/posts/1647/index.html","64b9d60826e7adfa9a4ab44e033fb5f6"],["/posts/17/index.html","7f6739117245c566e43daf57cd0d3a27"],["/posts/19914/index.html","870fbecbc9e49a0e33913d8179bf0bf1"],["/posts/20777/index.html","85db3d9873e385777fbfbc7e44ca6ae8"],["/posts/21874/index.html","8ced1e8bb186d37762528b3f4936ae21"],["/posts/24608/index.html","95c56c95d084bf5e71ef4d1c9dff906e"],["/posts/25781/index.html","a2d25ad43696b2f4286810df238f31c3"],["/posts/27099/index.html","0f01d361971e2c5170197dd61f0ed688"],["/posts/27776/index.html","f9885cc0d16cd0ff8419cd34512f048b"],["/posts/27817/index.html","e6a772b2d3db86829fbb229929a0096f"],["/posts/29095/index.html","c88105fce0d1211f2a4f0c6336a03588"],["/posts/29839/index.html","967ff83e2fd60fc7b187fc59c7350c41"],["/posts/34183/index.html","74b8c76fca081446f34e8c1a916a5e6b"],["/posts/34536/index.html","660e2b7f98f6f5b4efe280fea061d269"],["/posts/36110/index.html","8114700d8b6e6218f445fdd59436dc79"],["/posts/36978/index.html","472c4c8f565da48cfd2d56e6ed26f3f6"],["/posts/37060/index.html","63996cbbab45297f0bf0d4971716b10c"],["/posts/38125/index.html","81dc117128f567bcd0c2caf0b03f49ff"],["/posts/39413/index.html","5cbdbef46fe27e98fb0ca2ff42926f95"],["/posts/40/index.html","a0df84cf971baaaa4a76719b3c7fbb10"],["/posts/40759/index.html","c176fbf85c32f05dc3258a92c67e2f79"],["/posts/41157/index.html","a89d11a92836d3401bb7aa928cd8c454"],["/posts/42327/index.html","2c2f169d67cb799f17698bd0635a7950"],["/posts/45698/index.html","8914a9b9a391aff994a5a50877b9479a"],["/posts/48470/index.html","d31159628a40c4dcd9824780350fbfc2"],["/posts/49122/index.html","67f3d7aaeec17e65cf9f759262bdc6fe"],["/posts/49370/index.html","b8dbc7716b20da1e53b8fd4866cb24d7"],["/posts/50467/index.html","f964508af2840a1698c55aa95d246b65"],["/posts/56727/index.html","1b58a7d8616f7d1367ba3fbace8dce1f"],["/posts/60038/index.html","b0ff84a7d1d851cb6fb7b36068fefd52"],["/posts/60039/index.html","6e5e8c27f8635a2b7a01d998645fc75e"],["/posts/60166/index.html","bf661e8823c203477bbcddacefe6fd80"],["/posts/60716/index.html","5028f904591034ebf4f1fd75f2778b49"],["/posts/60766/index.html","99f5c9a23f9d29b6a054d20ee65c642d"],["/posts/63489/index.html","e0656d9db860be2b2c7a11be37ccd89a"],["/posts/undefined/index.html","ef526fa0b05391e1ac2a3a147bed14d5"],["/sw-register.js","eb999b511f2d6bb4fcf087dafa39647c"],["/tags/AAD/index.html","d22a0b46e6f23aa7cb88f4a0c3d7d4b9"],["/tags/AutoRclone/index.html","702ae3508baf2f32dc56908dff357b0f"],["/tags/Azure/index.html","cdbf6ff543dfaaee2b476670636047b9"],["/tags/CDN/index.html","842441016be78fbd67f5c047e1440a00"],["/tags/CDN加速/index.html","0bfa3079c673536399d03d7028cab165"],["/tags/DD系统/index.html","d5bcb3607ad31d1cf652503632034a24"],["/tags/EMBY/index.html","96fc80dcc689adc471b671fe0446b2a8"],["/tags/Github/index.html","c8cdb9734182afc8adb6a0ee70f35e4d"],["/tags/Okteto/index.html","659988dff52c3299da98df14d17fb834"],["/tags/Oracle/index.html","8a8a09beeb06560c222a6466e626e2a1"],["/tags/Pixiv/index.html","3e9e40b7f8c71db36baf496fba82885a"],["/tags/Rclone/index.html","af15b1691acb8707093f945cbc410cee"],["/tags/VPS/index.html","9d2df323d6e7b282e73c0030d4b66a61"],["/tags/Vercel/index.html","c3fd7ed96ce3845542b7a82b7394231a"],["/tags/cloudflare/index.html","adf1c1937029fcbe5a6e2f0248eb251a"],["/tags/freenom/index.html","0793221bd3bfa9f933ccc76164fb4b1f"],["/tags/google-drive/index.html","be2016a51e9159a8fd2bbed74cd0c599"],["/tags/google/index.html","543e3788dd46003589a71712ea86c516"],["/tags/heroku/index.html","63a45f239a7e2dd0b1e1fcb87e9cfc48"],["/tags/hostloc/index.html","207bb3a22af308a8c0d15e695cf13ddb"],["/tags/index.html","8777d879a1a4f7b09462379ee9654dac"],["/tags/onedrive/index.html","f8a5662c5a781ea0db8710a9ac6754ad"],["/tags/telegram/index.html","da25f68b4bc7610c5090cd332ae10d23"],["/tags/wordpress/index.html","3ff2e41c65f06f29591521e4aa2b3a9d"],["/tags/免费/index.html","46fcc19bd8d0066327047dc39439ea18"],["/tags/全局管理/index.html","125685bb7c798eab7ce81a4eca5d0beb"],["/tags/升级/index.html","906c2901a1e9867da83b6b938293d841"],["/tags/图片收藏/index.html","9d4ad9d140ce1da1b97052a4adcf2b7e"],["/tags/域名/index.html","f8cbb8649fb424949d2ef8a602c1483b"],["/tags/域名续期/index.html","5b3c127545537fcbbd78c7eb38f98656"],["/tags/富强/index.html","ca8e73b9923507f38d3806709ab6c370"],["/tags/建站/index.html","4a9902bb8e99bfdb33a3927ee2fdf6e3"],["/tags/挖矿/index.html","ffb4701e3e0b96f0bcf92a1a8205ee02"],["/tags/搜图/index.html","0a816a8c650562c403d2e936b23e5bf5"],["/tags/白嫖/index.html","8633095b164629e69de397e644f09e0f"],["/tags/目录程序/index.html","1929bb353a8d5da5890a9158046640c9"],["/tags/自建网盘/index.html","41f352489acdab8c4387bceceda98b64"],["/tags/自建网站/index.html","7915f3eeb5611080e9585a38dbfa4313"],["/tags/虚拟空间/index.html","48564129c58f3481a069f25ed0b1b21d"],["/tags/转存/index.html","3f5788442ba5cef3a0efc0204e718845"],["/tags/随机图/index.html","b707e7fcf11ca85b320e11a68540715a"],["/tags/随机图片/index.html","dea72dc406e9c230f9c94d390e2697c7"]];
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
