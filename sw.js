/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","b56046efc8f4c02ce715a0cfede48e02"],["/archives/2021/11/index.html","eba7483322de772f0a11e1660e1dbbc3"],["/archives/2021/11/page/2/index.html","cbad757bd90f8bebc07e415f0615da73"],["/archives/2021/12/index.html","b2795551330331b4ce3562a4f31a5a9d"],["/archives/2021/12/page/2/index.html","e9e1697c344647b9c835b5048ee4d38b"],["/archives/2021/index.html","0cef3cffa53fa23a43ebbe85ef17fb66"],["/archives/2021/page/2/index.html","97decc1166d0323279de0aaf4ae7210a"],["/archives/2021/page/3/index.html","76023e8e9946e633b3b5f852ceabda0a"],["/archives/2021/page/4/index.html","f5dfbebb1a3359b48a82a24494d12d79"],["/archives/2022/01/index.html","3247187c39ed83b497b18b5ed85ec9ba"],["/archives/2022/index.html","9b09a973c673ec90cd4a9770398d0e6f"],["/archives/index.html","bf7821f89524c303393786905b7ddfcd"],["/archives/page/2/index.html","213e8b1e71b107f2b604c407828df696"],["/archives/page/3/index.html","2a1de61df613caa1a480aa5f05cf71b2"],["/archives/page/4/index.html","efff1969666983f16d824649eef9e627"],["/categories/index.html","53bc675469391d47447e9978c1609676"],["/comments/index.html","d36346eece6a0ef631668f3bf6c021bf"],["/cover/index.html","977fa538232eb413fad005c49f37bbd3"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b7015ef688ddffe21486f9111df9e0f2"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","cede8a62200cc7f088dc11d78571bf5d"],["/page/2/index.html","d873d25741f0e3a63b815c774c97a80e"],["/page/3/index.html","b1a64764215968ab793d51420a05ed04"],["/page/4/index.html","537cf23be6c8bc3449964f834b54111b"],["/posts/1/index.html","cea23c9ce792e68707774605ec9b7e33"],["/posts/10250/index.html","6389bc730946e999825c9796cff2ef0a"],["/posts/11812/index.html","f644e9598c132092050317819d037c9a"],["/posts/12811/index.html","eb1383b797ef3d896523c76165403d7e"],["/posts/1647/index.html","b67ac62c199608ca53aa2005063d2171"],["/posts/17/index.html","4e8d670323c627da9a599c35d75f8c2e"],["/posts/19914/index.html","8c8952c15ec5f7d99f1bfc0c97c8371e"],["/posts/20777/index.html","05329443c4c0171420c043eee9cf7944"],["/posts/21874/index.html","33457291be13186e92f987e1d8b94157"],["/posts/24608/index.html","dc9799834195d39d767ec0417b485ccc"],["/posts/25781/index.html","fd5d797aa548a4b6002f9599ab997cb8"],["/posts/27099/index.html","a016098fdb8f2255dda67968ff2e14ab"],["/posts/27776/index.html","52b11ac2028a36dc5588638fffa9c113"],["/posts/27817/index.html","45139554583acbbc65a17bd8e86bf194"],["/posts/34183/index.html","0c1529b5e00ade2521071cb31da80eb0"],["/posts/34536/index.html","a2f979f8a352fe0e37fd76c02a727428"],["/posts/36110/index.html","4027e546e452089babad53aeaaf990c2"],["/posts/36978/index.html","e9b3d4abd77ce0571d888914cb4bb264"],["/posts/37060/index.html","b36a65a51215237fe84fea80e6c1bf83"],["/posts/38125/index.html","ff70979140af90636096e50021f8e7d9"],["/posts/39413/index.html","69b6a0d9f7896382ee34f27f04e38d06"],["/posts/40759/index.html","92eba467ef3ea68bf7f69d9800929592"],["/posts/41157/index.html","8e01459603985e4b6b83634dc99ff0f2"],["/posts/42327/index.html","8a2c68933c7301d283aa25acc2e3ffda"],["/posts/45698/index.html","8643dfe27622bbdbf382178bca826307"],["/posts/48470/index.html","1d27d46206526fa0c54ba0a30e394651"],["/posts/49122/index.html","e8317e67c893594218e96f922e5a7369"],["/posts/49370/index.html","c039b433a69bcb7404a633e7d7d9e3ab"],["/posts/50467/index.html","d213ee56e7668be6fddd19475297b77c"],["/posts/56727/index.html","599c63e2ee674d4e4f499e6a9770da81"],["/posts/60038/index.html","964cf5e23ee94b04f851a77cfab72d11"],["/posts/60039/index.html","077cfa4fb426c1ecab5561e187cc8fe1"],["/posts/60166/index.html","2870b72be7967f05f5044a84f2dabe5f"],["/posts/60716/index.html","61251e7ed970aabf204e9c11cd6cd4d6"],["/posts/60766/index.html","7c45a2050b264f0304b86cef8a07045d"],["/posts/63489/index.html","f6df6c3e60a4993439975082c88f0aad"],["/posts/undefined/index.html","ce68a74873426a716a95c88af988a732"],["/sw-register.js","42941b2bcbae0633c3995267c65e2a60"],["/tags/AAD/index.html","af9a7843116e72fc1e4e2c7c125281f6"],["/tags/AutoRclone/index.html","4d621102cbbfab341f4687eab81ad85e"],["/tags/Azure/index.html","f6807dc8c75bcd169a9202fef9d58bb1"],["/tags/CDN/index.html","362def7bf62d6445d0b4682c787e593b"],["/tags/CDN加速/index.html","9e721cf5dbf17673c327cf44aa71ba13"],["/tags/DD系统/index.html","afc0fc0237c56774428c0065ff43e4ee"],["/tags/Github/index.html","a3dec3f7a265ec0fde5467c9dc5ab63f"],["/tags/Okteto/index.html","a6264be5c7accb793615bbd743403431"],["/tags/Oracle/index.html","586991ef5b09dea2b98c8db071f5e447"],["/tags/Rclone/index.html","0f47f472b9ae2b81b8d10696718b6386"],["/tags/VPS/index.html","3e1321e1a557a76d6d590450435e8e11"],["/tags/Vercel/index.html","1819c9bbae2ad19f2c2068451001f46a"],["/tags/cloudflare/index.html","97008ec9c313d17edf4155304300dd1f"],["/tags/freenom/index.html","b571330879e71d53a377d7d14949249d"],["/tags/google-drive/index.html","ba257fbab31ad7fd6267636e7791c8da"],["/tags/google/index.html","e1616b17642d5d9ef702400aa2262427"],["/tags/heroku/index.html","9071987f06b905fba50dbe6043e98e1d"],["/tags/hostloc/index.html","4677234a766b3593649e8bda0a2c1f77"],["/tags/index.html","ac84ee241d91f373a5c17aaa05145e88"],["/tags/onedrive/index.html","e6ec9314ee6a13619ca8b67dd4a3a794"],["/tags/telegram/index.html","1e6de79ea86fcde14c8cbdb4e27758a9"],["/tags/wordpress/index.html","27f1080cdf1a21b02917938164aea8fc"],["/tags/免费/index.html","43ab8cd7c83511c103d5ad1eb3b1e1c9"],["/tags/全局管理/index.html","be35681d8ae65eb523bafad16d5b260b"],["/tags/升级/index.html","f5f10d95326e95b65d0d32ec622ec3ea"],["/tags/图片收藏/index.html","4d335cec73dfef9b0fe33afd271d0b42"],["/tags/域名/index.html","d0015c9865b63cb598cbdf30b040caec"],["/tags/域名续期/index.html","4e89eb9961ab9a54f6281b6e94007ba7"],["/tags/富强/index.html","59dc1b4cdbf369341b41bd3af3ab8bb8"],["/tags/建站/index.html","15843a34e8777fd4fd86df95be41aaa0"],["/tags/挖矿/index.html","c3e7c2affbc998de69782e1870f7e5d3"],["/tags/搜图/index.html","0ec788000088a365813394ddd67b3150"],["/tags/目录程序/index.html","f51409abad3db2e52112c4fcc4e19a02"],["/tags/自建网盘/index.html","d1fad4e030338b2c50627914f9761059"],["/tags/自建网站/index.html","160daa7fb9d5c9346f852eb53411006b"],["/tags/虚拟空间/index.html","52fdd9ceb6c87b4298d3e8350188e4f5"],["/tags/转存/index.html","fb53f260e41d7d3a445a0f66016e3304"],["/tags/随机图/index.html","a041df213eff3525aa5e704ad4263e45"],["/tags/随机图片/index.html","181bc20c8abc1a21d008576c2b6772b5"]];
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
