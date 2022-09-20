/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","de05b1ca81c64234de2b2068ab754ff5"],["/archives/2021/11/index.html","00f3bee86ba6c0277b303f14f7f50cc9"],["/archives/2021/11/page/2/index.html","98faca6f91f4a4a6f74925ec19ddc38a"],["/archives/2021/12/index.html","9114d3251d42868f6438581d68b0857d"],["/archives/2021/12/page/2/index.html","a2c62069fc6f1b87ac7e28ec550def9c"],["/archives/2021/index.html","922e128a9a1eb2ae3292099f91fc6660"],["/archives/2021/page/2/index.html","24757df7a8d01c0e5b863554018a1122"],["/archives/2021/page/3/index.html","5b1336a13dbe795f37b0dfdb57e9e0a0"],["/archives/2021/page/4/index.html","06aa652acdc39852ddafb6c0b2ff1c32"],["/archives/2022/01/index.html","5971abd60e4576faafba2d411170c82f"],["/archives/2022/02/index.html","10fc5d745cc4b0e3651a1abc5929d321"],["/archives/2022/03/index.html","59f80f61f0010b61bc15c9a2ea7487cb"],["/archives/2022/09/index.html","978307f30517f9e28c2f8e476e915a92"],["/archives/2022/index.html","926b63c0078d019e92f17418d3ddc63e"],["/archives/2022/page/2/index.html","acbf3729daac25ed4dd89a372b965a42"],["/archives/index.html","ec3355d8e2eb1501fd453e073ca536b0"],["/archives/page/2/index.html","48a6ec371e39b107719357aed17b5a6f"],["/archives/page/3/index.html","5a323bd6801898eb5963c9bcab9e0ff3"],["/archives/page/4/index.html","0ff6818aed4d0606f53878a1079d8468"],["/archives/page/5/index.html","528f67ac558b5911b541cc7e8fcfe9b1"],["/categories/index.html","d8a1569e955778ef49126c7d6c25cb82"],["/comments/index.html","d62ae0bb120acffd827e07c6761a04b5"],["/cover/index.html","ab4a4e47fc341aabc0e4c4b85eb8acdc"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fd9ff621e7f7cd9890a127e6c0550514"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","672987771ed03546909b6ef3f6b7e2ce"],["/page/2/index.html","126bbd76f1c36ea6d88ebc30d1e651d4"],["/page/3/index.html","36f29baaff0fdaecc9a556269e9b6425"],["/page/4/index.html","1eae64a4bffbc24e7c9d239b6a142a50"],["/page/5/index.html","d024a43a98ba0ccbc16e760bff52b01d"],["/posts/1/index.html","cc915228cf4e627445b4017294b2c965"],["/posts/10250/index.html","90b8162fec03ce06732fd602080b7d09"],["/posts/11566/index.html","102ff21094bd5f1a3cef050ce1533fe7"],["/posts/11812/index.html","b05e560ebdca232af062626e9c3965ad"],["/posts/12811/index.html","4c6733d84c543d627c4b10e0302c997d"],["/posts/1647/index.html","4ff2d0eb837235437afd79ad246dd459"],["/posts/17/index.html","7b14a3efc4e8a80edd20e12e9fde9bff"],["/posts/19914/index.html","6fad736c5e391904c35563e2f64c6aca"],["/posts/20777/index.html","3a93f62e62ffb9169f6aa96f2bd76749"],["/posts/21874/index.html","65730b628c85120253863ebc1fa7ee72"],["/posts/24608/index.html","3793d00e9b2bbf75c52cfda5a9e13a93"],["/posts/25781/index.html","eddab89d2fe1e2317999c83d4c70c4be"],["/posts/27099/index.html","ea0af96860251f77c9bb2d4eb514df0d"],["/posts/27776/index.html","17e2ec5f30c5cad500fa45c9b11008fb"],["/posts/27817/index.html","380c69deb3ad145d6e0be423e4154a89"],["/posts/29095/index.html","c53f90f5c812ad558ac65229c50f69ef"],["/posts/29839/index.html","64ff654f3b89976aefff745d309d42e4"],["/posts/34183/index.html","bdaf5cb442f6ab19a285b153131217a5"],["/posts/34536/index.html","4bf96362d406133fa05293fd097cda0f"],["/posts/36110/index.html","99770e3f81f5a9545a768bde8230e8ea"],["/posts/36978/index.html","7cace11b29ef4a9117cfce9185cce308"],["/posts/37060/index.html","72592a4d5e7fea4e0f9aaab56d1e00d2"],["/posts/38125/index.html","8386c05451c90145f2d08f45a0390dba"],["/posts/39413/index.html","3a636cc57fb8b5b61931d88f9a6c87c4"],["/posts/40/index.html","cbc12a63a7f50c204e089cd72be5176c"],["/posts/40759/index.html","ad0d406efe1638035509de105bbdfa8e"],["/posts/41157/index.html","92a36f0d43e5f28e4add11270c9953a6"],["/posts/42327/index.html","d34d0f6df49583a140b381da24db8b55"],["/posts/44924/index.html","951f399430c177795c0bd192110122fc"],["/posts/45698/index.html","46ac0ffff44b7d04c60212648630c724"],["/posts/48040/index.html","b3a147f5ecd883b869538fe063ed4964"],["/posts/48470/index.html","e2da024b4a4d17cb7e9e1e8b82f7ee6c"],["/posts/49122/index.html","ce96d96eda7f55004a06d7597361f64e"],["/posts/49370/index.html","1aff3869d9c5db7c7b6348c7ae27e8cf"],["/posts/50467/index.html","3dadd98b2fda006b0ea99cd710f4e0c2"],["/posts/54280/index.html","83646e5eab2d1b4b7bf55331dbc45c09"],["/posts/56727/index.html","cf07295ac137b8f23d3bd5756768a892"],["/posts/60038/index.html","319e96f078c1f5b634b86124aa7ee521"],["/posts/60039/index.html","e86249dead8dce23b562b812cfcaf04b"],["/posts/60166/index.html","9b1259f064ffb7bc07946c539b38d9a5"],["/posts/60716/index.html","eab117d35516265826774e2d64a90bd2"],["/posts/60766/index.html","6bfd178b059501117362e878efe17a66"],["/posts/63489/index.html","ce701b845ee8e8d7b6be183eb90843cf"],["/posts/undefined/index.html","2594e45d474fd49ed82cf2fa36df399b"],["/sw-register.js","441ffee1b0aa8edb56e9f6c0d1263265"],["/tags/AAD/index.html","7d5ee51ed496d4e403b194396e0df248"],["/tags/Aria2/index.html","167ebeda6dbcb1a159f61a920431e860"],["/tags/AutoRclone/index.html","9d1795db98c5e29b64045ea4028f864d"],["/tags/Azure/index.html","198d9e1f74105b0b778dfa16afad473e"],["/tags/CDN/index.html","82a45ee669d7c0ab5365845b7172c20c"],["/tags/CDN加速/index.html","ecf58024bbb729b6999fdf34b936eaad"],["/tags/DD系统/index.html","31b9075673ced5b1be61390858f0a176"],["/tags/EMBY/index.html","9f5356142096ba4f1e0ea52e3530d0d1"],["/tags/Github/index.html","d4f4e3572828d7cb06157dd11ea1e39e"],["/tags/Okteto/index.html","f711f3d5dfb15e0db2e6d21bc15cdbe6"],["/tags/Oracle/index.html","6e2cf9a7c225ad9026ae2c3e5e8a0181"],["/tags/Pixiv/index.html","074bc9f1c470d8b0286f4fdf290e600d"],["/tags/Rclone/index.html","e6a825644e548f9bbad09c70f5c5a7d3"],["/tags/VPS/index.html","f84d591bcb348238cf18f7b7b3f6aabb"],["/tags/Vercel/index.html","ea6b78c5edf31d526817cfbecc1682f8"],["/tags/cloudflare/index.html","d0c98abd0e507744b261098bcf90b2da"],["/tags/freenom/index.html","9cd3422884a9ef418e2bcf37669a62e0"],["/tags/google-drive/index.html","24084b5e6b46f2be86e885e528fc8a09"],["/tags/google/index.html","1e634c2b7de563bafa99fb20bea7c115"],["/tags/heroku/index.html","fe0437777b8d4d0a6b93f99a3afc8b19"],["/tags/hostloc/index.html","09ea2aa696a68090976bd79d21d4f571"],["/tags/index.html","a8236a1765ad4df1669876796876c936"],["/tags/onedrive/index.html","1e9fed7ceddc163c8ebf6a9880e7cff6"],["/tags/telegram/index.html","52f73036445e1d0389f4768e52ef8c35"],["/tags/tracker/index.html","a5eaf486cb93c070311499c474e5ed89"],["/tags/wordpress/index.html","f18135243d6f912545e8359291a84b23"],["/tags/下载/index.html","772ddc11a629f5f6129bc3e2d163ad32"],["/tags/免费/index.html","ce3ebeb962d9d27c57deca2386564f9e"],["/tags/全局管理/index.html","a1d8f74817b07c93b78a6bd3ca480174"],["/tags/升级/index.html","b016946672ba546cb911b6361bdcdf17"],["/tags/图片收藏/index.html","759c31c2ddc916526d8f5f5f6bb47e2e"],["/tags/域名/index.html","bb169af777921de0782d5a1385d12c43"],["/tags/域名续期/index.html","dfa49e079c93be0be0c8605fdd5256fd"],["/tags/富强/index.html","1556213992d370ce5e36525a63fb636a"],["/tags/建站/index.html","a99eb8f06a658f72a29041b5e5a7abc7"],["/tags/挖矿/index.html","9968ce966735360121baf7ae2c4e03c1"],["/tags/搜图/index.html","70a29cb57cc299c6ac8292a89b8d961b"],["/tags/白嫖/index.html","ea3f6c42608305daaebceb6be9844a1c"],["/tags/目录程序/index.html","afcc89c74d6a6198362b076f36bd2ddf"],["/tags/磁力/index.html","3ee4374c07d2a786628dacf159c81108"],["/tags/离线下载/index.html","039b180c378e3e2718e7382d8d50719e"],["/tags/自建网盘/index.html","99fd3b61e8888ad7beecf013e5984d28"],["/tags/自建网站/index.html","325b0ca89b839a4c71baacd94913c29a"],["/tags/虚拟空间/index.html","0aae87014884f36e21624b59f08570a0"],["/tags/转存/index.html","376085817cb4797a552ae04491d6434a"],["/tags/随机图/index.html","c71b8d10090d56f9da11d43eb343d18d"],["/tags/随机图片/index.html","961a549da4449909120fc02e3304a584"]];
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
