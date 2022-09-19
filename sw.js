/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","cd98eb29afcd3dd2b78ef6e9e5af71cf"],["/archives/2021/11/index.html","dd68824511037deecb677672919d7919"],["/archives/2021/11/page/2/index.html","fbe212dfbde30223c83401a24c9739bd"],["/archives/2021/12/index.html","b8b52e8cfb7fba5133b3c5b69b7797c6"],["/archives/2021/12/page/2/index.html","7cb45a46a16ba9ac9e618e365deece0f"],["/archives/2021/index.html","20807ff3f4bfb10b551fb65cc9b6fd78"],["/archives/2021/page/2/index.html","a440f0e0b46e5d66d08eb908a144cb28"],["/archives/2021/page/3/index.html","3379bba2152928bf20c20f964502e3cd"],["/archives/2021/page/4/index.html","68a651694af3203a965f01b9096548af"],["/archives/2022/01/index.html","d1f71dddc15a9745c4b3c06cfd35bfc1"],["/archives/2022/02/index.html","48334f1d923c317aada0a1bddf1ae827"],["/archives/2022/03/index.html","34612da745429cabe2ce91e5300b4cd3"],["/archives/2022/09/index.html","6991f52ebd113abd4c8cca850042f5f8"],["/archives/2022/index.html","aa947ff7fa5540004cb7d5304b1e1f60"],["/archives/2022/page/2/index.html","ac626c45938a093a630a08e5dcc47e55"],["/archives/index.html","4693b7bf2e0f22b219bbea1a469c28a0"],["/archives/page/2/index.html","998cb1e0bdffb0ce9b3efba80514d85d"],["/archives/page/3/index.html","f397ebcd489f8f9426626d77f95c8f34"],["/archives/page/4/index.html","015c833500d7a449e0ee15993f603159"],["/archives/page/5/index.html","a76d0cd5cab716b34534e21e5d8739ce"],["/categories/index.html","a74d8bcc3559dc477d0c67a883bb172b"],["/comments/index.html","8623356ce7c15df37387d73d00956be2"],["/cover/index.html","e8bbeb56be7a5d5739b74734c9eacbc4"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e90d84f617930fb5c4bdfdc0ea028751"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","2cb8af2f5a449e7e044fe597943e9e29"],["/page/2/index.html","f32c188888a2398281ed7651cbae0f23"],["/page/3/index.html","bc43d2c9311d3b0d9e45736bd2613f82"],["/page/4/index.html","362272d80ab300a846f08841e7add5d9"],["/page/5/index.html","3d4ed95da8797f8d6cfef1032ac787f9"],["/posts/1/index.html","1879651334a8405fcb5e3f7ecabfe637"],["/posts/10250/index.html","7b8ae12c15f0fcb3fe98e309bb158ef4"],["/posts/11566/index.html","f312d8527804b03c7d306b46909a3fa7"],["/posts/11812/index.html","bb75075c2539622306483a54acd4fb17"],["/posts/12811/index.html","2fe133dcd9b463607323a4f8f78b034f"],["/posts/1647/index.html","bd972a07db35eb3cf6d2854a6c6ded9e"],["/posts/17/index.html","e44b958d1653c32b53d2fac03c44e10d"],["/posts/19914/index.html","b29d0c5ef5d06ddf1968dcad7c2aa2fd"],["/posts/20777/index.html","eb710ffb4b0dde93900f9fcb3fe4bcca"],["/posts/21874/index.html","42d4459679e8970c7ac97edf496fe47d"],["/posts/24608/index.html","acf0ddd9f0db6d6ffa67e3b9ecee3875"],["/posts/25781/index.html","56f0cb21180d44aebd70d48da5baacd2"],["/posts/27099/index.html","c97b5384e5d1cd48df7cc3a0d2bc7e06"],["/posts/27776/index.html","5c07f105df37d7eef478235b6a040812"],["/posts/27817/index.html","928d7e308dfbf694bae6302d17c0f4ad"],["/posts/29095/index.html","3eca343537ec5587fdfee9110df5e417"],["/posts/29839/index.html","c73686829f5e6b405c46d9e8212903c6"],["/posts/34183/index.html","d36ed4c2cca18cd42ba2cdceb391c819"],["/posts/34536/index.html","e4a6654e57d700bc4ed8b71dc2d2fcfe"],["/posts/36110/index.html","b86eb724c302efbc04dc00fe865e6c09"],["/posts/36978/index.html","409702ad0e556b1444ea46fa597c32f5"],["/posts/37060/index.html","36fb352ccf8acc5c591b98b68f013b83"],["/posts/38125/index.html","5e7697f70bbf954115ea79224b0d610f"],["/posts/39413/index.html","e1d78cf4b7b11f0f1de5cc78f1a4f9be"],["/posts/40/index.html","e3cda4d752434eb504c570854a643308"],["/posts/40759/index.html","3705ee0b30955f15775f27cfe6e39bb6"],["/posts/41157/index.html","178530894155e1b2e7b3b344d8ba5fb6"],["/posts/42327/index.html","a19660b8df6b6332ae2b0fdc43508a84"],["/posts/44924/index.html","7b8197e7e903bbc0689852e0c2efa93c"],["/posts/45698/index.html","0dedc2ebf5cf18ea39536820f7c77caa"],["/posts/48040/index.html","f6b049bfa34781efa50fdb4cfd020b59"],["/posts/48470/index.html","06869ca63de99f74ad52a6990fe4aac0"],["/posts/49122/index.html","46907c24884c018d880c6d3471c717d3"],["/posts/49370/index.html","e7cd0a27b985b7ce89e375cbf7a07a1a"],["/posts/50467/index.html","6338e33ef33fa5523af144f18bc93ebb"],["/posts/54280/index.html","10a9fbb12069d90b8d222169c5da2b8d"],["/posts/56727/index.html","c7fc15c1e81be45250e9a9649528cbaa"],["/posts/60038/index.html","a9cdbc3d928bc0e86dc142014888f2b8"],["/posts/60039/index.html","0e1463de54c067e185f92d68f3865e79"],["/posts/60166/index.html","e41b07574dbd6f48487d09829d165b29"],["/posts/60716/index.html","b8f41c8b4df173a5af24679d990da23c"],["/posts/60766/index.html","23fe17e4e457fdfc56830288b04700f0"],["/posts/63489/index.html","3b4ce6e721407a4e89cfbc6dc8259834"],["/posts/undefined/index.html","05526704f176700a94eca353f79fc79a"],["/sw-register.js","ef0991c1db16812952f5c9a4b999154e"],["/tags/AAD/index.html","b6500d2bc0b10db24fcdb41fa941c9ff"],["/tags/Aria2/index.html","bdde51e2be26c528f8c0f5dec9f65477"],["/tags/AutoRclone/index.html","de17d3fa8234cefa0adb332bb9567916"],["/tags/Azure/index.html","8e5fc2520eae903d0a30302fa4c6b173"],["/tags/CDN/index.html","a697425beeabca78cb4fc136cc79758c"],["/tags/CDN加速/index.html","42e7c86d516b12cd5575faa2ff8d9338"],["/tags/DD系统/index.html","53a54b2c02b003ccee640e8780ddff1e"],["/tags/EMBY/index.html","e26883e48eb4cfc221bf844dccbce927"],["/tags/Github/index.html","86334b59c526acc2d86451526324823c"],["/tags/Okteto/index.html","b516a5365a8e9b848f06ed48a7f0c15b"],["/tags/Oracle/index.html","bc477cc0dc15cf97060f360ad4b36d7e"],["/tags/Pixiv/index.html","1d43504be3c4b6099b6b56f37188213d"],["/tags/Rclone/index.html","a93434c099989de951ab48a496c2b936"],["/tags/VPS/index.html","e3910333d0c265ac9b07bcc77f4c6ca2"],["/tags/Vercel/index.html","a49c1822ccd2883803c31ae375a901b3"],["/tags/cloudflare/index.html","18d968d9659b4a9f24b896b887922581"],["/tags/freenom/index.html","be1591646cf4bb1353e73a8392f7b880"],["/tags/google-drive/index.html","940aa5ebd78fcc6b1cd5fc2fc7858722"],["/tags/google/index.html","6915581f76adab3a999601a19cfdd181"],["/tags/heroku/index.html","ccbe37a4c0ca86f1af67fff774bc1b3b"],["/tags/hostloc/index.html","ba401a3a3f26e575151dce4e1b2c4ea5"],["/tags/index.html","55a1390766c72c27ad4cd23d6b246334"],["/tags/onedrive/index.html","003314fc8fc0c554c234892e62b2b992"],["/tags/telegram/index.html","a8b0e1f9072b2ea0408bc2e7014ffa58"],["/tags/tracker/index.html","341c3aa67005844f768bf1f43c769f93"],["/tags/wordpress/index.html","2464c5b69ce5001b019950ba7ab7c5c8"],["/tags/下载/index.html","63c137b4dc246e7c70f28e28ea5e6a1a"],["/tags/免费/index.html","303d582a853ef217da12f45fb6fa3082"],["/tags/全局管理/index.html","5753d70fce039a771ed513a84b6239b5"],["/tags/升级/index.html","e5fba71c6d4111ba6e253c25d3e17bbf"],["/tags/图片收藏/index.html","3d687554f6b537180f0ec115e7ec2e89"],["/tags/域名/index.html","63757f8890caf0b6c8f5ef4e29acf1e6"],["/tags/域名续期/index.html","30f928464ea0b74083a2f5879e80ec8f"],["/tags/富强/index.html","8a815fe8ae1e9fc2bd81990096da0d36"],["/tags/建站/index.html","d566924b17edf3943ccb595de8c41247"],["/tags/挖矿/index.html","d5350d8593270978cbfc0f622a72ad48"],["/tags/搜图/index.html","1a97d942e796070c71644c27e0ae0c7c"],["/tags/白嫖/index.html","2df0a2bbe4045c71b2bbb435e7601f83"],["/tags/目录程序/index.html","ebf9dbee28ef1ba9de66e008269d272b"],["/tags/磁力/index.html","7d2c97e1b587ad77833e4053a8ea5e67"],["/tags/离线下载/index.html","19b2d7e57d98b0a626f190b569f34b4b"],["/tags/自建网盘/index.html","deebc5817734346728858d6efc39c08b"],["/tags/自建网站/index.html","ceb4bf87c5b12e6eaf22440a18160ec3"],["/tags/虚拟空间/index.html","c0a4d88f95d3f40663bafd6811e5b3d5"],["/tags/转存/index.html","976122b6ebc43d95b7aafdc1f12bc41a"],["/tags/随机图/index.html","ce88ae0e38cff5e248963dbc56ca2b1a"],["/tags/随机图片/index.html","764bb8b4e656584665f1503383d2beca"]];
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
