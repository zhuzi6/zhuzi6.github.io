/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","1cc2d8c5b40c334403066154a0658889"],["/archives/2021/11/index.html","ecda827d6abd1f56b4ede620c8eed01f"],["/archives/2021/11/page/2/index.html","49242929d94f851364e3fdc639efbc8c"],["/archives/2021/12/index.html","4246cc3292a9bc8a7bee4ac171b8e28d"],["/archives/2021/12/page/2/index.html","29e1b8d8a86c9bca33d03d7cba9327a7"],["/archives/2021/index.html","6a3010a5691663a19eb27596ff5d7651"],["/archives/2021/page/2/index.html","03838f1df9e8ec7e7a445065da62e0c1"],["/archives/2021/page/3/index.html","d2e170f38f80e7178a1fce1940219b84"],["/archives/2021/page/4/index.html","eb32960e8dae3df0c3e009c4a63c5460"],["/archives/2022/01/index.html","696ef6612f360a240ec21acc02180b5c"],["/archives/2022/02/index.html","994dec1fc77770f105c995a00a6cb952"],["/archives/2022/03/index.html","e04d623574dbed32a6ed9e4fea17682f"],["/archives/2022/09/index.html","09d06349fd0c167579939713eab9e208"],["/archives/2022/index.html","46b06050eba0d90337a0e62fd619de45"],["/archives/2022/page/2/index.html","635aa4d557e4397a16354912f33ad6b3"],["/archives/index.html","393f3d890bef63b1bd44619d6e7cb8a8"],["/archives/page/2/index.html","7d126697f62bf3383efc5d22940f4c38"],["/archives/page/3/index.html","dd1b3f8364a269abd79a811d80a68a19"],["/archives/page/4/index.html","6f50d169a4a0db5b321d59e67b05b9ec"],["/archives/page/5/index.html","bc8f63e90b0858a1fa188dd4ee0104c9"],["/categories/index.html","da83bcd214cba2ced42da75fb5a1f55a"],["/comments/index.html","369c16a99b9a53b5c380054893027431"],["/cover/index.html","c1b577963ba2cb2cb714bc867e93a481"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bb634382da8ff45ea5934614e0eb1ac1"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","b924f2711ace3fd8d4781ec5b15669a1"],["/page/2/index.html","9750b037b5b00cc4532a69169bbd7dc0"],["/page/3/index.html","191201ca35cc977f812af8ed6014a936"],["/page/4/index.html","e102b9ae367154d7b2aa5ad148811361"],["/page/5/index.html","8e9b97da48ac38782f27b3e04fe9763c"],["/posts/1/index.html","a45ede057c055d9ab46902429faf2df9"],["/posts/10250/index.html","daacc14215b987412fbc66a0031ebe3f"],["/posts/11566/index.html","0b41ddf194386ea8d1b5afd096c8cf17"],["/posts/11812/index.html","50d77af40b770d353ade8442769ededa"],["/posts/12811/index.html","f3deeb7b9c26c3bb68d15f22fe58a573"],["/posts/1647/index.html","3933a04600ad9f7ad083cada916a6a42"],["/posts/17/index.html","e6f1cc0bd4e00cab92d77a1020d1b574"],["/posts/19914/index.html","357df4c06fd0bedddcc82a3cc217d755"],["/posts/20777/index.html","d5db70b75c98e3455a56121cd5fc6ac6"],["/posts/21874/index.html","04015bff67c718bcdfbf35bfd8e6c33d"],["/posts/24608/index.html","6bbe0030a333f56bd5a3a3159c4e8cab"],["/posts/25781/index.html","a6c4b6c3d6c282d75b751fb0f3f03a0a"],["/posts/27099/index.html","01f36820f4fdd1939bfffe24c0f53750"],["/posts/27776/index.html","6ea6932f4b60811159d36588c905ea4a"],["/posts/27817/index.html","bf615619fb2eb07a06b8d62e043d15af"],["/posts/29095/index.html","857d7801d2c95bc946a71eeb5b5a9f69"],["/posts/29839/index.html","b4407ac67afb62b35bc27d7bcc051638"],["/posts/34183/index.html","2fa13c8fbbc415eaf06bf7b614184ec1"],["/posts/34536/index.html","3e89a8bf811d7e73edae652390852589"],["/posts/36110/index.html","e5df8a94ed0aa151b9979161299b24e5"],["/posts/36978/index.html","f7c6021429828d475215e672df18519e"],["/posts/37060/index.html","b468ef61ba422182cacabb50334e6345"],["/posts/38125/index.html","c661407790880c40f71dd1eb0d62f75a"],["/posts/39413/index.html","8a37a00ee51b9f271ead70e9b04bfb82"],["/posts/40/index.html","3f1b4eb50b321610d20dcba8a3183a8b"],["/posts/40759/index.html","d17f79e35e387366b19069d2aa069dbc"],["/posts/41157/index.html","17e12b8c7e8c23a843d7bd010d48b34a"],["/posts/42327/index.html","e098477a6da59f59f8828439c101f767"],["/posts/44924/index.html","48efd6ad431ee448e86584c8a768b142"],["/posts/45698/index.html","b744250fdfd6d444ec72fcc462e73199"],["/posts/48040/index.html","017e057bc71b8070058653df4c777779"],["/posts/48470/index.html","e288885a107273e0bd1a14a57f805995"],["/posts/49122/index.html","032b6bff6b798fbd2eeaff62aca81023"],["/posts/49370/index.html","b26663d56df8e3ff17dd4d08fea5aa61"],["/posts/50467/index.html","862465ba08f22e386d5f09ded371dffa"],["/posts/54280/index.html","322aeed54b4e2ee99ffcf79f29c6421d"],["/posts/56727/index.html","c95b5e9858029b5c8f0baad10b33aae7"],["/posts/60038/index.html","090fc0b7a15f32fd7093b0d1408badf7"],["/posts/60039/index.html","9a39b034f1905912f75ecd1ade8bf875"],["/posts/60166/index.html","29a77421f2788d44ee5b96ee7d21f68a"],["/posts/60716/index.html","8f52b6b068baa746586c27c78469017c"],["/posts/60766/index.html","4210add1a64ddbbea80d7e85f8ddfb80"],["/posts/63489/index.html","f00ab4fb6d3ac57b02f81e8a7948335a"],["/posts/undefined/index.html","50ae18ec2443d7cba227bbbc7dc11184"],["/sw-register.js","bd0520f08cc70e459f050a3d230bf946"],["/tags/AAD/index.html","133375a8f5c543084ca98a4cc744ef67"],["/tags/Aria2/index.html","6d0663b19a40d02fbb895b285fbde569"],["/tags/AutoRclone/index.html","de8f6dc0eaf3bcb66a92f0c32fb9f4f8"],["/tags/Azure/index.html","92f633c278394f4bd8ccf80d9831066d"],["/tags/CDN/index.html","743101d56c7ac9df00fd41a38c3930dd"],["/tags/CDN加速/index.html","4849a791defafa6610d23f3d2a7e29c4"],["/tags/DD系统/index.html","0c4ca1a5ece50e219c7dd2852894b4c9"],["/tags/EMBY/index.html","3402ed7f3018884c3eeffff12641feba"],["/tags/Github/index.html","b6af84638966389bfcce3f61779d1fce"],["/tags/Okteto/index.html","10f7a39f9185515974ed87d803b87a8e"],["/tags/Oracle/index.html","a7dbfdf36a2ef7b1294f6bb0a792022b"],["/tags/Pixiv/index.html","100677064b31b909ad1226a531ea3bf9"],["/tags/Rclone/index.html","0314ed0cc9fbd23c2fb066f4e45aaaf5"],["/tags/VPS/index.html","7dd96e9c278fdf33c735ef765e61b8b3"],["/tags/Vercel/index.html","1b312df33ab6a931fdcbe9c51c33bdfa"],["/tags/cloudflare/index.html","6a1daafb5c8432ae3108171d967cc045"],["/tags/freenom/index.html","c85b52e3fd15af92d1ef55bd2c4ed1ba"],["/tags/google-drive/index.html","e70a7f7d4f31b612afbb22b16ce2bccf"],["/tags/google/index.html","6a0ab3997ab00140d6fc299fdc2eba1e"],["/tags/heroku/index.html","ae54ab533754075ee45946939fadc891"],["/tags/hostloc/index.html","a07534547c49cddb93566f55751191a0"],["/tags/index.html","7a668a7ac5a3b5045524ae339522bcf2"],["/tags/onedrive/index.html","12e3af5db65257ec9a514af551b4a03b"],["/tags/telegram/index.html","49d656cc460e3c7a3c0eabd4d536b8f0"],["/tags/tracker/index.html","fa42de4413d8f791d12691f4ab094a4c"],["/tags/wordpress/index.html","b1ac848aca0f505f0ce93b31e5cea315"],["/tags/下载/index.html","1625bb4641970a171283da9a3682491a"],["/tags/免费/index.html","27738359b183413da13c486a2c21f751"],["/tags/全局管理/index.html","c09189314cbc190a0ad10cce9b90fd79"],["/tags/升级/index.html","795a6aba968c11e7120bab2f7a6094fc"],["/tags/图片收藏/index.html","becfd22b1228f1eb57ed1c1db406ad67"],["/tags/域名/index.html","ec42a3a72b3ac251cb698d9ab8ac5669"],["/tags/域名续期/index.html","11e9207c19a1900e9d08fa40c4477522"],["/tags/富强/index.html","5dee81ebb00f891017d6a406b74ec7bc"],["/tags/建站/index.html","f3142d82ec371a9e04e754926cbde16d"],["/tags/挖矿/index.html","45c1c3b0f1d2d571bd9cf21c89234d36"],["/tags/搜图/index.html","66200f3762dc609dd2db12319031b59e"],["/tags/白嫖/index.html","218d052d4e417ac5ed4e8707b0868b5e"],["/tags/目录程序/index.html","bc2e05bd44a8759293bbe95dd5c67f2f"],["/tags/磁力/index.html","67a60b4f5f43d7b2737dfe3371700476"],["/tags/离线下载/index.html","5f651482ea73336ba0f15a5459768718"],["/tags/自建网盘/index.html","5206de7e1bf0ebfbb019980ff9fd052f"],["/tags/自建网站/index.html","53014e3b0b3c2d221222d79be6bfc907"],["/tags/虚拟空间/index.html","3b2f056d238e46366f0741b3b8eb9f58"],["/tags/转存/index.html","57c0b27027d34b6c888b13c60d01ef3a"],["/tags/随机图/index.html","2f75b0aa340cf5bb9313f51e4ae7220b"],["/tags/随机图片/index.html","730811423199fe268b6cf1ec3eb760b7"]];
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
