/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","6d1f128bd431ff0bf083b905103a5106"],["/archives/2021/11/index.html","70a0c6d621a452c4387babcb0708c86e"],["/archives/2021/11/page/2/index.html","ec2ba6404089f456157a06cd10817158"],["/archives/2021/12/index.html","da0f95c8534e136731ae23595bed238b"],["/archives/2021/12/page/2/index.html","f4a6e8994539dd32819eb1a3ff69da62"],["/archives/2021/index.html","c9c33623f47271eeb7617949414a9aab"],["/archives/2021/page/2/index.html","1d784b76d86fe63836ec621e2734d992"],["/archives/2021/page/3/index.html","62ef724ef383c727e29eff1aab604c22"],["/archives/2021/page/4/index.html","2b9764c3e4d307fc21d8ca1744454806"],["/archives/2022/01/index.html","940abca6d8bd827a412b16d8aa4f0de6"],["/archives/2022/02/index.html","96ad24aad76bbd31b6c86b5d0d8c4e84"],["/archives/2022/03/index.html","9a0b043fec5aabdaeb5750dbfeabee9a"],["/archives/2022/09/index.html","11daa0422a23ba09633f903725073c3d"],["/archives/2022/index.html","2bab5350a1c415d96be6572bbb083d66"],["/archives/2022/page/2/index.html","0c0fc004d1bffd6fc6fc3539bc8ee091"],["/archives/index.html","e9a4d31960d37db93916e38e113e5890"],["/archives/page/2/index.html","c0e66bc140f7d5c118c065f565dba018"],["/archives/page/3/index.html","cf428ff267b6550e56963df4c5b4a04a"],["/archives/page/4/index.html","faea5711b5113bf9e722c0b9a99b5d5e"],["/archives/page/5/index.html","d6472317f0caab7e863e679ac13e444f"],["/categories/index.html","f94c6f4b1f2ea3f0ec0f8563bff857cc"],["/comments/index.html","e309c13c69c7789a9ff147a238574357"],["/cover/index.html","1aa9021d832a26add578cf4ad9f89dd9"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1bfe0eb9f231201b914aaf023e6e7464"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","bf531341bd1f79b71a84183ac56f9a36"],["/page/2/index.html","bcef5d28f58eb34e66ebf499b9796008"],["/page/3/index.html","ac51e3daa9b75e38659af4af6dc4bcbe"],["/page/4/index.html","3e2703cd3132f6dabd5686d2218a5c91"],["/page/5/index.html","bf3b3dc958b2e6ae27c5114704a0df91"],["/posts/1/index.html","863dac9b81a74009b3d14faff2dc13e9"],["/posts/10250/index.html","d5691a72a9d526e7dffdae184c5c3892"],["/posts/11566/index.html","920528f60943e0420430acb9d8097025"],["/posts/11812/index.html","2f0bbd9ece060a62e4d9eeaaf942f7d1"],["/posts/12811/index.html","7b8deb9df33dd9cc154556279f1f4af8"],["/posts/1647/index.html","1ec0d5e1bfffea5963725f3aaf8396ab"],["/posts/17/index.html","d897f6a4ad60661ce3659eaea22ef6ac"],["/posts/19914/index.html","76c414111b2b1fd543401e7287f72d43"],["/posts/20777/index.html","e47e9dabded727e41383decde837d752"],["/posts/21874/index.html","15f44bd2af966a9beaed45779ccd4648"],["/posts/24608/index.html","87c90a66195542064669bb7bf375e209"],["/posts/25781/index.html","4c6341f5e2d76b208e6d992ae56bacbd"],["/posts/27099/index.html","6e75ec6d2372d421c1805eb007434452"],["/posts/27776/index.html","3f7f4a5a422411ff87d2cd423da74405"],["/posts/27817/index.html","eead96b646dbd0aff1bf003f4851fc3e"],["/posts/29095/index.html","4ce772433970e090ada38873000d1d60"],["/posts/29839/index.html","7dbe2f51867e593064f4be9bf0bec612"],["/posts/34183/index.html","b09340a54e87bd3f281fe207a850a3ad"],["/posts/34536/index.html","ba1a38281966bba26b00be07341df764"],["/posts/36110/index.html","705f1a97c667a39e69916ba239d4def8"],["/posts/36978/index.html","2977018cbd7c4a68a079723a25c1953f"],["/posts/37060/index.html","86e46536d877fc088a62895b3e7f2b80"],["/posts/38125/index.html","1b0bdf7ec45ed6005ddbc526b2a03020"],["/posts/39413/index.html","b6089ac9b7b69e0d1f444f2a5dfe5cd1"],["/posts/40/index.html","36cf226f5e57b74e8e13a26a2c3704ae"],["/posts/40759/index.html","12ef582fe19469f8a706a421548a529a"],["/posts/41157/index.html","937e0e73b1f4f1eacf1d3d00249fcd51"],["/posts/42327/index.html","17d80f3dee649699a39bf8c6ece7a5e0"],["/posts/44924/index.html","d354acc608e808e0a68de9968dd66f51"],["/posts/45698/index.html","92b98b5ec6e537de72023032180f7c18"],["/posts/48040/index.html","ab83f761d8772d5cf3e574284cd69f16"],["/posts/48470/index.html","ab02f1d6b54a5def807e470af31964ef"],["/posts/49122/index.html","b8e69cdaaec1437730b9e6e05bfcd78c"],["/posts/49370/index.html","99323b45291ad0866f79a264b3b1be9e"],["/posts/50467/index.html","ce46b590f9ef265ecd06eedab6863f9c"],["/posts/54280/index.html","3cb6a9e177e5235c3c6710db78fd74c7"],["/posts/56727/index.html","be55880648a861b9ad01134b048f26f6"],["/posts/60038/index.html","956f43152d51001bafa0c27fa648fc05"],["/posts/60039/index.html","e410d1c7217e465f8116246072bb2409"],["/posts/60166/index.html","925ed82de569ed031a62445c02d0c824"],["/posts/60716/index.html","48279423ddde54aed7f9aaa115883e77"],["/posts/60766/index.html","43ffb4593e17986c37aea967100b0abc"],["/posts/63489/index.html","1ecdb5a205d8d0050c89ea756bc6b2c2"],["/posts/undefined/index.html","6f75e391e10743bfcdec9ed129e6b12e"],["/sw-register.js","42b4692d7d5199ffe8b38a7607b0241f"],["/tags/AAD/index.html","ebac2b280b25a1c2097429f7e0114cf0"],["/tags/Aria2/index.html","f66b4c8237c09b6d887be5211f09f834"],["/tags/AutoRclone/index.html","4ebaa6595b8c400c36d6d5cecc139be6"],["/tags/Azure/index.html","a603c9e5494fa2bd95ad9d2533540459"],["/tags/CDN/index.html","7db651346bfa2026de613e4d2fb84da9"],["/tags/CDN加速/index.html","cc0449f5cff5ad083617de9bf3499238"],["/tags/DD系统/index.html","3425c80b9df6deddfde2432c1ee6072f"],["/tags/EMBY/index.html","7ab9c906bfb47c385810be6bed261276"],["/tags/Github/index.html","03acec73f9c71846bff74a2deab74361"],["/tags/Okteto/index.html","3cc31633cedf22e1d3853cdb928902d3"],["/tags/Oracle/index.html","a9b42a80b2927c68ef341156e05064c7"],["/tags/Pixiv/index.html","e02127685f224dc5ee60420c3fd576e0"],["/tags/Rclone/index.html","597068821c27b0632c6f09d21c613d70"],["/tags/VPS/index.html","da99bda155db4fb08f1c69f082c9d9e3"],["/tags/Vercel/index.html","a2abeb9030024730f19f56d7a91602e2"],["/tags/cloudflare/index.html","365f397482a40297da2453471922fd86"],["/tags/freenom/index.html","11394f35e546ff6ced8166b2c6618763"],["/tags/google-drive/index.html","e187f9bdfb19a96e4a287a83ac7eb09e"],["/tags/google/index.html","8952c9f05384e2ceef895d07d6796d61"],["/tags/heroku/index.html","85b36c57e7274dc01f500e0d6d7fff38"],["/tags/hostloc/index.html","8e05b83782556dea5be52327ca718b77"],["/tags/index.html","69527b1d68ceac67b94af0aa31fca7dc"],["/tags/onedrive/index.html","bb413ce7159e034dc8e84c6d21c18e2d"],["/tags/telegram/index.html","3a24a509df8789a12db9bf6550031a00"],["/tags/tracker/index.html","50a38667ded5cc8db4a4eb9604490fa1"],["/tags/wordpress/index.html","6a8c918bfc3c88d2c63ef3bd6c7b7758"],["/tags/下载/index.html","ef605ebc3a49e9cfdac4b28bf457000a"],["/tags/免费/index.html","42b903158d75ea9992414dd9a3b37c4a"],["/tags/全局管理/index.html","1ec2a0612241a17fcfd56e95524a0abb"],["/tags/升级/index.html","73220cd97a9902b14c69cf741185e913"],["/tags/图片收藏/index.html","9e62e036a59bc01fedef978d260f3610"],["/tags/域名/index.html","8bce8f0bf9a7bc8be7d6011d0b44ee47"],["/tags/域名续期/index.html","db0445a9ca90c6d4ec686c7ee5dfa55a"],["/tags/富强/index.html","7dc76db9f8365f466699645e474aac5b"],["/tags/建站/index.html","3b83fe0b31411b232ef6a5b0ffcc930c"],["/tags/挖矿/index.html","ff1f04be60d80777315359b742195d5b"],["/tags/搜图/index.html","d3fea966f88c6e2ac59ad0200b53666c"],["/tags/白嫖/index.html","64bb00d731405a4f7f0a2f381a637f4f"],["/tags/目录程序/index.html","3b10ebde3286719e30c3cd4aa0ba1036"],["/tags/磁力/index.html","a547661a48d4c913898908396b212ee9"],["/tags/离线下载/index.html","47861f38d35b385cc76cd0e59554fd4b"],["/tags/自建网盘/index.html","835c965fc2bac3412f4a4bf14741ceba"],["/tags/自建网站/index.html","521c28ae9d1867bd45dad1d77b4e61dd"],["/tags/虚拟空间/index.html","73b2c002e3c383857e405808ec618997"],["/tags/转存/index.html","4e968cb2d624e0b9e7f668d158516163"],["/tags/随机图/index.html","871f6ca610d728871f08690e4a2e7707"],["/tags/随机图片/index.html","98206949724afc5e5d5d14fa38afe51b"]];
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
