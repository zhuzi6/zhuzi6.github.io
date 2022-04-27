/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","698807d5d1530cddfd322c241ecbc80b"],["/archives/2021/11/index.html","30947658fcf3a518f2b1f3227370a97e"],["/archives/2021/11/page/2/index.html","c2650e939225ba036e377b999f81ae9f"],["/archives/2021/12/index.html","8ea2622a1e0f06b161916a64388b6fad"],["/archives/2021/12/page/2/index.html","340ee15c4a8f4d8afb701f12585d1d2d"],["/archives/2021/index.html","cfdab3925c32cb9095f11f1dbf55a6cd"],["/archives/2021/page/2/index.html","b16c39396ce30c0d890948f638def380"],["/archives/2021/page/3/index.html","020f4ef541d85ac2bfd45dacb170090f"],["/archives/2021/page/4/index.html","0c98f62e9d288fdc7365baec5f0c8c54"],["/archives/2022/01/index.html","100f2425d6eabb27970ef00cb4e01864"],["/archives/2022/02/index.html","910c0f067a0b1cec653dd20632b0e85a"],["/archives/2022/03/index.html","f4e3cae716b0412bdc3ce125dce2202a"],["/archives/2022/index.html","0c9efb84a891333f90be923685629141"],["/archives/index.html","6a61c93c035223c7f1eef9d5f61eac9d"],["/archives/page/2/index.html","3c9f198afa3d978bab4815acc45fcbf4"],["/archives/page/3/index.html","222bbfab22a649f2f45a7b97d6c07a9b"],["/archives/page/4/index.html","4b891ed14702257b6f183a768e322085"],["/archives/page/5/index.html","20f773763d60fc541ae82c5cccf0cc22"],["/categories/index.html","ccaa9a86619ddd44795d7ae4af393e9d"],["/comments/index.html","a58a66e271d967663082c865d8d88c1c"],["/cover/index.html","b04d569121d76417430e0e96819aedc6"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1545d27a74a49c8d62e4f1952424b3f7"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","6b2cd6d865831b481e9b0e2a4c242d4f"],["/page/2/index.html","9df8f3d395ac7b0a3a34414c28cc5cf3"],["/page/3/index.html","bd56140008cad295ea336e0d45b529c2"],["/page/4/index.html","ba8af358ed9dbcebc3112724364c767f"],["/page/5/index.html","147ffffd3e072f9da1e9717d8ddf4820"],["/posts/1/index.html","756757ac16ff85f2ca0227d6514e894a"],["/posts/10250/index.html","981ca24200f3b92b18a26a37f6629320"],["/posts/11566/index.html","ca95651e49b9db4e32a57cc4955563a1"],["/posts/11812/index.html","f37f6e3b6738a3d03da41bdb5355eae0"],["/posts/12811/index.html","5cbfb9286558cbdee3b9b8dfd4483a0b"],["/posts/1647/index.html","1af36e311156fb1b634b33bd1703b800"],["/posts/17/index.html","2c5769fc1ef31667393a0f7736d4ed47"],["/posts/19914/index.html","73a3a7dd6354cb172119c60c2b273bf8"],["/posts/20777/index.html","b11d613043edac66314bdbc174dbd895"],["/posts/21874/index.html","6e8cb165708bf83b42242c6768c18298"],["/posts/24608/index.html","cfad70834572e4af8a06c6d444d7e098"],["/posts/25781/index.html","eee3e52bc0bc5e4a97fac7334125746d"],["/posts/27099/index.html","cfcf902c814a918dab4507a396538934"],["/posts/27776/index.html","508e8b70bbdd481e1c17dc3852c6899e"],["/posts/27817/index.html","ba6ec4a3ab2ac7c5a6f80cf5f181004d"],["/posts/29095/index.html","dceb0fd58579a1d9309d61d9f6c308ad"],["/posts/29839/index.html","b420ce4c113d9a3ce9622bd06c3f383b"],["/posts/34183/index.html","e67c82f6cf761cde58502dbe5bc6d123"],["/posts/34536/index.html","d01681a1e39225c065d1cf2dde997f13"],["/posts/36110/index.html","9a02c1abe78104ae2994f2bf84552316"],["/posts/36978/index.html","12857cb32c8e4c1bfc07142d9b38a29d"],["/posts/37060/index.html","6ae70aaa028e4b2d1f298d9c07b13a6a"],["/posts/38125/index.html","3f51c8e4b589cc1059a938545d664a22"],["/posts/39413/index.html","8b1bbd32af885db3339bc16fc5ed319a"],["/posts/40/index.html","d8a0791c96a8611b4f3d90d42a8a6c88"],["/posts/40759/index.html","24be2d87e0a040748191d6a2ba1db751"],["/posts/41157/index.html","30e75af01908b9cb02727963700d3474"],["/posts/42327/index.html","7ff0a66fcce31e647d1f0dde9e2a7c1f"],["/posts/45698/index.html","252327e7a294e104d84121cd4626b7fc"],["/posts/48470/index.html","802373a5ffb3c011ff1022fee457e17d"],["/posts/49122/index.html","d3c8c3c6cce6e71a69ee00a3accd337b"],["/posts/49370/index.html","d8fd502d772d893cb80c92a355005fd1"],["/posts/50467/index.html","7318c0107314b93e669bd979284fe93b"],["/posts/56727/index.html","2ad127b47fd4face4c048154f18d26c6"],["/posts/60038/index.html","5175868f1e452b45aaf2e763d08b3cd7"],["/posts/60039/index.html","3bfbbb339ff139197b280daa23401c9a"],["/posts/60166/index.html","e4899a1065401ef416b76e0925918bb9"],["/posts/60716/index.html","297cb05108eb73829be5fde0bafdec92"],["/posts/60766/index.html","c1c68dc7259a908a1a361a2ef13a8453"],["/posts/63489/index.html","0dd4351d92a7c01ca9652aed8ac88327"],["/posts/undefined/index.html","4085332987499db3ad7d8c5c50e8201a"],["/sw-register.js","4090228d0685b7eb5e344dd1e685417e"],["/tags/AAD/index.html","364a14de75b4f528c41871f2d4f25435"],["/tags/AutoRclone/index.html","9bdc95b88cb2b66c26a90eb04f49d1f1"],["/tags/Azure/index.html","8a2b79805165fb750a3008c750838df3"],["/tags/CDN/index.html","0e2487b3616c4036c568be28e8fbf092"],["/tags/CDN加速/index.html","688865052611580763891b1ee2bfbd55"],["/tags/DD系统/index.html","726a996734332a6df842c60ff2a69339"],["/tags/EMBY/index.html","52439702d341d4c1fa9ea4d68e92b2a9"],["/tags/Github/index.html","81ea824482c7c37ff1d4d6d2ad29fe77"],["/tags/Okteto/index.html","487f0c2cdc062f779dbe67903352effc"],["/tags/Oracle/index.html","6f4236cd3351a30196ce82e773c50e54"],["/tags/Pixiv/index.html","61358ad01076bd9f8faf287850bf927c"],["/tags/Rclone/index.html","a5126dd0f7fa22cadb6801ff6b9cf4ec"],["/tags/VPS/index.html","d3dd8a2825047e84033f15726a2cc7a4"],["/tags/Vercel/index.html","68b99c74e6ef32a9006399c5a04f6707"],["/tags/cloudflare/index.html","14a58251b2fdcf97ee285da9877cac84"],["/tags/freenom/index.html","cc3ab8d49604a40178faf4300dda073e"],["/tags/google-drive/index.html","aa09ac5d485d77febeb5c959daef29d6"],["/tags/google/index.html","1116889744ab13830133a486b2b7b823"],["/tags/heroku/index.html","656052c84e649c5a5275dc763648efce"],["/tags/hostloc/index.html","41a9cba6f9aeb23553c435bc4f7d7db9"],["/tags/index.html","5555c8e6f64c5f06fe45a02316eb227c"],["/tags/onedrive/index.html","e6e2910a3899f969eb86713f91131a42"],["/tags/telegram/index.html","707484c79625f5d88597a32685cbf152"],["/tags/wordpress/index.html","fb285d7375fca392a3fec7fa7122c1b6"],["/tags/免费/index.html","6f33159bf28cd7e9770b591cae2c8881"],["/tags/全局管理/index.html","d92b565312155f194865c8e88767a463"],["/tags/升级/index.html","0fa986154d0423248af746c744ac3b0e"],["/tags/图片收藏/index.html","e62610b606beb0153ca0eb23a33106e2"],["/tags/域名/index.html","be4279341f5462882896ffa06238e2cc"],["/tags/域名续期/index.html","d3afec7a8d522642b5421abb55a47d3d"],["/tags/富强/index.html","7d45380dbc1afc059b01b34e158e805d"],["/tags/建站/index.html","07d0d2b8614c23a5858955c8670c79f1"],["/tags/挖矿/index.html","6ac2d81dbd985fa315b6c361d28eb66a"],["/tags/搜图/index.html","cd2283422293f79b826116bb2a28f612"],["/tags/白嫖/index.html","8f793bd84578683b407852b71d53ae76"],["/tags/目录程序/index.html","263dab74315f8ced156baf2929f51ab2"],["/tags/自建网盘/index.html","7ae95576ca590647153a1ec257edcf0f"],["/tags/自建网站/index.html","62167d1c93d91d9c2292b203aa8f7f73"],["/tags/虚拟空间/index.html","041267276aad8f4bb3adc8997ab8228d"],["/tags/转存/index.html","3285bf96d461411b50c7f1edd8a4edf4"],["/tags/随机图/index.html","9273cc2efc08654ebe212a9767a6a0d3"],["/tags/随机图片/index.html","a53ebe75fea6a62a04df049efb5a762c"]];
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
