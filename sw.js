/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","4ff7fa810078c74f14b2e56642c71126"],["/archives/2021/11/index.html","726caf2c6d4787057648e22181acdf66"],["/archives/2021/11/page/2/index.html","625c7f4d76c00e4dfe1b87438187c318"],["/archives/2021/12/index.html","647150da5b7c18ce2819003bbe7ff01e"],["/archives/2021/12/page/2/index.html","b2432c55e8426e85be161c24feaa596b"],["/archives/2021/index.html","66120951c3ea24db8e71b048b22389c5"],["/archives/2021/page/2/index.html","fba89121327cbcdb5e0bcc97281f1e4e"],["/archives/2021/page/3/index.html","f6abdc15d2e3f461ab1d99df4c244f09"],["/archives/2021/page/4/index.html","79d2681ffc59253bb20303118c4abd60"],["/archives/2022/01/index.html","569ec7793e0683d172ada7798ae4aee1"],["/archives/2022/02/index.html","f67c0f76c7a0b55f2c38bc3799242c08"],["/archives/2022/03/index.html","77f732d546547e2f283dfb6116e0481e"],["/archives/2022/index.html","47bc964bbfb343ee475efdef04be5ea8"],["/archives/index.html","97dadc340ac4f38b38ac8cce300c6540"],["/archives/page/2/index.html","5c9dc60f45f455e68150c94ccfcccbe5"],["/archives/page/3/index.html","1d55ad1305b80f241c7bd79260d6d2f7"],["/archives/page/4/index.html","81dc4299fbabe04d60ff00ad402b3d51"],["/archives/page/5/index.html","fa5678cae2d90c1a49bc0a240ba74089"],["/categories/index.html","bde79d4a07ea905033505aa39fc5c5d1"],["/comments/index.html","c390a41dfb09ae2267db006be51a114a"],["/cover/index.html","1c6e87d20592adcbeeba769aee868234"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d005256d6b613748ae7f24c045a5b3eb"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","bef246e8b7728f2bb3ab98031243176b"],["/page/2/index.html","d37486b9e091d12507ee3e7b3d18c092"],["/page/3/index.html","7aa8a6b5dff897195719dc19d9833a43"],["/page/4/index.html","d38fd2ff901144fe6e2208386de3e2c6"],["/page/5/index.html","bad7695f32e5ad4ce8d244e2fdbfe748"],["/posts/1/index.html","756757ac16ff85f2ca0227d6514e894a"],["/posts/10250/index.html","981ca24200f3b92b18a26a37f6629320"],["/posts/11566/index.html","ca95651e49b9db4e32a57cc4955563a1"],["/posts/11812/index.html","f37f6e3b6738a3d03da41bdb5355eae0"],["/posts/12811/index.html","5cbfb9286558cbdee3b9b8dfd4483a0b"],["/posts/1647/index.html","1af36e311156fb1b634b33bd1703b800"],["/posts/17/index.html","2c5769fc1ef31667393a0f7736d4ed47"],["/posts/19914/index.html","73a3a7dd6354cb172119c60c2b273bf8"],["/posts/20777/index.html","b11d613043edac66314bdbc174dbd895"],["/posts/21874/index.html","6e8cb165708bf83b42242c6768c18298"],["/posts/24608/index.html","cfad70834572e4af8a06c6d444d7e098"],["/posts/25781/index.html","eee3e52bc0bc5e4a97fac7334125746d"],["/posts/27099/index.html","cfcf902c814a918dab4507a396538934"],["/posts/27776/index.html","508e8b70bbdd481e1c17dc3852c6899e"],["/posts/27817/index.html","ba6ec4a3ab2ac7c5a6f80cf5f181004d"],["/posts/29095/index.html","dceb0fd58579a1d9309d61d9f6c308ad"],["/posts/29839/index.html","b420ce4c113d9a3ce9622bd06c3f383b"],["/posts/34183/index.html","e67c82f6cf761cde58502dbe5bc6d123"],["/posts/34536/index.html","d01681a1e39225c065d1cf2dde997f13"],["/posts/36110/index.html","9a02c1abe78104ae2994f2bf84552316"],["/posts/36978/index.html","12857cb32c8e4c1bfc07142d9b38a29d"],["/posts/37060/index.html","6ae70aaa028e4b2d1f298d9c07b13a6a"],["/posts/38125/index.html","3f51c8e4b589cc1059a938545d664a22"],["/posts/39413/index.html","8b1bbd32af885db3339bc16fc5ed319a"],["/posts/40/index.html","d8a0791c96a8611b4f3d90d42a8a6c88"],["/posts/40759/index.html","24be2d87e0a040748191d6a2ba1db751"],["/posts/41157/index.html","30e75af01908b9cb02727963700d3474"],["/posts/42327/index.html","7ff0a66fcce31e647d1f0dde9e2a7c1f"],["/posts/45698/index.html","252327e7a294e104d84121cd4626b7fc"],["/posts/48470/index.html","802373a5ffb3c011ff1022fee457e17d"],["/posts/49122/index.html","d3c8c3c6cce6e71a69ee00a3accd337b"],["/posts/49370/index.html","d8fd502d772d893cb80c92a355005fd1"],["/posts/50467/index.html","7318c0107314b93e669bd979284fe93b"],["/posts/56727/index.html","2ad127b47fd4face4c048154f18d26c6"],["/posts/60038/index.html","5175868f1e452b45aaf2e763d08b3cd7"],["/posts/60039/index.html","3bfbbb339ff139197b280daa23401c9a"],["/posts/60166/index.html","e4899a1065401ef416b76e0925918bb9"],["/posts/60716/index.html","297cb05108eb73829be5fde0bafdec92"],["/posts/60766/index.html","c1c68dc7259a908a1a361a2ef13a8453"],["/posts/63489/index.html","0dd4351d92a7c01ca9652aed8ac88327"],["/posts/undefined/index.html","4085332987499db3ad7d8c5c50e8201a"],["/sw-register.js","a6dce5ec2935b3fd2aae5dd301d16151"],["/tags/AAD/index.html","47d4b25bf8cdca3daf873b0ca5841d2c"],["/tags/AutoRclone/index.html","8d9508d5f1d57d3a3ae316e2bc30328f"],["/tags/Azure/index.html","0537821079208eab802bb8e638205aa7"],["/tags/CDN/index.html","8a0c738bb87b09195b11b5428934b1f7"],["/tags/CDN加速/index.html","a0c3efadf18f2a9d817a562b43772022"],["/tags/DD系统/index.html","649398facca1c2d474d5b1e0dab27922"],["/tags/EMBY/index.html","f265e518eae83ec4cad9994de85e9d41"],["/tags/Github/index.html","ff7eea11c8adcd87dfd88584931446c2"],["/tags/Okteto/index.html","3671ab6af94247d776adaa88996f3839"],["/tags/Oracle/index.html","bec25462bc052a6dbba4ea18afa51ada"],["/tags/Pixiv/index.html","f2571a7c561e1ad5b9fc321f3881c572"],["/tags/Rclone/index.html","81e288af5802707448687215b529278d"],["/tags/VPS/index.html","588af861688aef1b0b06bb90e3109779"],["/tags/Vercel/index.html","5bcaac8cccfe5dbb331f1c81106f6023"],["/tags/cloudflare/index.html","b341e72deb432c6f4916bd3391c83411"],["/tags/freenom/index.html","3d34b8c696c8e86313aa055197caa48a"],["/tags/google-drive/index.html","978c5d54179e964fd7d7bc4221c8cccd"],["/tags/google/index.html","bb8444ad20ed6e135bcb4077318f30ec"],["/tags/heroku/index.html","33905ea8d4fe1fac67839cda73231e97"],["/tags/hostloc/index.html","8a4cf81eccf6d9a050845b4f9e5d92cf"],["/tags/index.html","e7a26262d8c83f14d870ef0f88c9ed39"],["/tags/onedrive/index.html","51d8d5ee06208138da2aeb691f44fd02"],["/tags/telegram/index.html","b8e4c19729999ce11a852d22a03a034a"],["/tags/wordpress/index.html","34ce0abe0d662dbb952103dfa904763b"],["/tags/免费/index.html","224129bdf8682e1fd804caa4b42751d6"],["/tags/全局管理/index.html","8309cd3c49e1e4e96cc5ef26d01ec131"],["/tags/升级/index.html","0fbd87990fa91c82515937f843f16481"],["/tags/图片收藏/index.html","5ba0208877a47621fab1ccbef2733c66"],["/tags/域名/index.html","e5df10932ebd811f102a2aca4d09b3a2"],["/tags/域名续期/index.html","0de39575349dfaf0d30a32a9ef727e33"],["/tags/富强/index.html","9474aaa0d5b08498280ac9914bafa4a8"],["/tags/建站/index.html","21262f2734f9866d4d5090043b6f2769"],["/tags/挖矿/index.html","8972cbe473dedd7f2e6db7a7b7a9b475"],["/tags/搜图/index.html","88cbc8401e634aaa7cdc56531d28a50f"],["/tags/白嫖/index.html","8ff934834192c047dc3acd7d2e481ddc"],["/tags/目录程序/index.html","53238a6bb9b58defe31856b665dabeb3"],["/tags/自建网盘/index.html","6380b46077ff73f96f42f0659ba3f393"],["/tags/自建网站/index.html","e714c8f31ec740a0e06c1b5e0dd93070"],["/tags/虚拟空间/index.html","5db0eb0fdef6d6876a804ec71ee3ae71"],["/tags/转存/index.html","b42325a330d3d9fa79cee78477c406aa"],["/tags/随机图/index.html","adc653b6e59af434ba375ad8bcfe5f87"],["/tags/随机图片/index.html","885783aac10ea035353b05788c01be1a"]];
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
