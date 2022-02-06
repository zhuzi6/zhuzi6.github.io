/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","4ca5d2e1af48b4d11e784e28084baaca"],["/archives/2021/11/index.html","19964a76281c6ca27cdabbc7ca94f0b1"],["/archives/2021/11/page/2/index.html","e0a98fac9a6f4642bc62f1e94f6ac70d"],["/archives/2021/12/index.html","5aa55fb28ce15b6badc964895225ff93"],["/archives/2021/12/page/2/index.html","4ce906a177b6f0aeff263d427bdefbfa"],["/archives/2021/index.html","65cd078589476d2324c4f58c809146da"],["/archives/2021/page/2/index.html","3ec02267603647738193e1f7d4b2f8e2"],["/archives/2021/page/3/index.html","852388f1339aeaa0c7838a43b8e5b8d3"],["/archives/2021/page/4/index.html","5716b0dea2691e85ff6408c43af4861d"],["/archives/2022/01/index.html","2beb38c8ec47ee26a202a25c2691e302"],["/archives/2022/02/index.html","b4c6539d33cb97b4fe03232c43ae4af1"],["/archives/2022/index.html","3cffbc025440602ef4aa261397f702a0"],["/archives/index.html","fdbd7850f1633f8deb46a5513b57a7c0"],["/archives/page/2/index.html","b8115bf513f816d0378de128720c747a"],["/archives/page/3/index.html","5bb71eaca4bdba5468fe59fa45dc78ce"],["/archives/page/4/index.html","9d7c38efb7cadf5a793bcdf8341020ff"],["/archives/page/5/index.html","bd74fbd8d48babf8f2902c7a268e4d75"],["/categories/index.html","af7f087fd66cc609ffca3e7990e64c63"],["/comments/index.html","b97740634a0d539dca0c40d7378f44ef"],["/cover/index.html","6b525ab15658fc9ab5458232971f8a14"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6a76ac67e39116cefa7918872d0c75fb"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","ab275ba2f453c71c2206c8a1aa716211"],["/page/2/index.html","67426cbf1497bd0ab50f099c883ddff0"],["/page/3/index.html","e102be87da726278bcdb2cdafcc262da"],["/page/4/index.html","51d1c0c9aa3287d742274af4109bafe0"],["/page/5/index.html","d92ecadf0839249221c52ded5fc00064"],["/posts/1/index.html","fc52a9e879469fee004bb734a39109ce"],["/posts/10250/index.html","8e0160384dbdd14c99f2cb4a986c0277"],["/posts/11566/index.html","c764555835d6af6dc10a2cdd5b7087c5"],["/posts/11812/index.html","9e687b2b3f5131bd8be3c3893e0dff96"],["/posts/12811/index.html","04643b4d2d992dc0c14387df68b333f9"],["/posts/1647/index.html","05855449cb966f16fb418080f059f58f"],["/posts/17/index.html","da82da1cd727626228df3db4fbc3a2ca"],["/posts/19914/index.html","79ef88c5225c8775ebedebddd058e388"],["/posts/20777/index.html","14053ae5d7f72b1671076749496b06f8"],["/posts/21874/index.html","135009ac7c9283879c01db222808a994"],["/posts/24608/index.html","79106caadffd327e2162789c37942cde"],["/posts/25781/index.html","4811b6fffc7c88167d102753ada79238"],["/posts/27099/index.html","f7aa06d8d6523dfc657136810977a83d"],["/posts/27776/index.html","7c07d5ee49ec98d2a618795be99e8278"],["/posts/27817/index.html","439c74e92ab80978742e5dc2d3b9aa30"],["/posts/29095/index.html","b45ac251119406a7093991dc7c2e69bb"],["/posts/29839/index.html","47289bc878b92f40b4017bb967f10606"],["/posts/34183/index.html","6a939ce4673c2770116f77420b6b14b0"],["/posts/34536/index.html","1196cc5d68d5bda1fba713e01c29a851"],["/posts/36110/index.html","03d08a865e7d2aece2d1bd0fd3f2c709"],["/posts/36978/index.html","e3a8885b6ac45e968b20e3d62669b2a2"],["/posts/37060/index.html","c05b17789c98e8649148274b0a762d99"],["/posts/38125/index.html","0ea08fd07b501f6c5911a8a586296d22"],["/posts/39413/index.html","5088796a089f8b9a28b8a24f0a91536c"],["/posts/40759/index.html","0ec1554d9d82be4bdc2a4e8449647730"],["/posts/41157/index.html","5cc913ddfa7c92a768af92ea6ab0cb99"],["/posts/42327/index.html","7033187ba59ff5b20012563748208b9a"],["/posts/45698/index.html","9c4492f747b0aa679edb4d3d671bf3d3"],["/posts/48470/index.html","fe8b8102b503ee72cc3f3cdaf1c436f8"],["/posts/49122/index.html","88f8c694cedbb30d9fae2ebc5b9675ee"],["/posts/49370/index.html","9a9bb5195f765fd9837d9ee98f90ddce"],["/posts/50467/index.html","ab8228b71124ad38600e662674213b4e"],["/posts/56727/index.html","141971f9ecdcdbdf50d690b4befe6804"],["/posts/60038/index.html","0563215c4e8485f3f599389661fc275f"],["/posts/60039/index.html","d6dd3a65ae9443e52a1ea159025df2e8"],["/posts/60166/index.html","9d9a61a558b5bc4d723a0c22b234af25"],["/posts/60716/index.html","188cd230c9d282c6f4ccca685342cab5"],["/posts/60766/index.html","a3bfd3cc981d69b71eec671771745efa"],["/posts/63489/index.html","9a154419e16d7a020d0c4deb6168e982"],["/posts/undefined/index.html","086d9177965c495b333df88d44de34a0"],["/sw-register.js","db1f900f0c12a9488112512c4951e53a"],["/tags/AAD/index.html","c271926307a7aa0e8981e2cab3ef0fba"],["/tags/AutoRclone/index.html","7cee12434eed094ea1266ea11019348c"],["/tags/Azure/index.html","cc89bc7730349b2745823ccac1bd7241"],["/tags/CDN/index.html","91cdb6801f186cf7fd11bdc8cee7e2e5"],["/tags/CDN加速/index.html","38e25a67010da285e00c0f3f1964ba34"],["/tags/DD系统/index.html","c0ef1cf955c89818a2a0257c93fc2312"],["/tags/Github/index.html","6c5c66963f60c30924182ad5a50faf9a"],["/tags/Okteto/index.html","b3598feae62a65005363211e4b8e3f54"],["/tags/Oracle/index.html","6a0020a6d379c127fcb34ab02d93b46c"],["/tags/Pixiv/index.html","5157bc2a689a3487462b7ebfd5c9edb5"],["/tags/Rclone/index.html","7718a48690cb766cccbb078e5dfbd523"],["/tags/VPS/index.html","6192e287e5b7518d45ea1e98b799ba2d"],["/tags/Vercel/index.html","0215bf27c441d4b2a255ea61e62a2104"],["/tags/cloudflare/index.html","169db80dbf2164a7b98b3bcbcc1392fe"],["/tags/freenom/index.html","5993012d8b06d41c787df4af857f0ecc"],["/tags/google-drive/index.html","e84fa4a6ec6e7d513515593391509a95"],["/tags/google/index.html","7fc2b8779b25474989c1050cc300d943"],["/tags/heroku/index.html","f52190153d3ba41f0ff7e0d919dcf281"],["/tags/hostloc/index.html","015ae9720f97ccc467d07ff7ad961eb2"],["/tags/index.html","a10e71b2bc5ca764cc4c68190ea8d4e1"],["/tags/onedrive/index.html","0ee02f8b5a5e126ec09bbff4818a20af"],["/tags/telegram/index.html","d1179499940ec55881b94e262a0d438b"],["/tags/wordpress/index.html","ef68ea85dc7511f0234de25325e84c8d"],["/tags/免费/index.html","658d87c9204fa35c9a630e94226ce2a4"],["/tags/全局管理/index.html","6344e23c2389391660f1359d3fcb6edb"],["/tags/升级/index.html","76747e0c467a7b5b495b7cc60665913a"],["/tags/图片收藏/index.html","4a8ab014590c5898ab0e7efae6a578da"],["/tags/域名/index.html","8a3d7b3c86dc65479719c5eea493234c"],["/tags/域名续期/index.html","70037c70fd0c5393e2b2bc7578b0dbfd"],["/tags/富强/index.html","0e3d2f1ebd1f10b5270fdb943d8d4be1"],["/tags/建站/index.html","f2761f41daeabfc0d292d0b80fd6a2c5"],["/tags/挖矿/index.html","c767bfc2427cb5d3e6666b92568efd25"],["/tags/搜图/index.html","79559bbccc0ed1f671acbcb3460c55be"],["/tags/白嫖/index.html","10a22e26a99c3baab9404594ac0e28f1"],["/tags/目录程序/index.html","193ee0ed650353eabca5ecde9564bfa1"],["/tags/自建网盘/index.html","37bc5815d988d37e70bc7d7bc5f45446"],["/tags/自建网站/index.html","6f9722658f17e1aa08f4d107d0cf6767"],["/tags/虚拟空间/index.html","5e7bcdb5f9f352d0175fbadb04816fa4"],["/tags/转存/index.html","22a99a5e5999a4b6b17fd995f7f6317c"],["/tags/随机图/index.html","dc760bf2678f93ac254a703a7a0cc81f"],["/tags/随机图片/index.html","1024e663d4b731d0b91296df3c763955"]];
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
