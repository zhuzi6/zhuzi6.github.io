/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","aea8e4081a30c171d33974cea0ef43a3"],["/archives/2021/11/index.html","7c2af4cb252fe6fe6aea8393039d09ac"],["/archives/2021/11/page/2/index.html","cd1e03b8318437fa695621f2af48928b"],["/archives/2021/12/index.html","c4650498796008ba900b66c1caf9b1ed"],["/archives/2021/12/page/2/index.html","5aabd4270c36ae3d6b7235e67810b2ed"],["/archives/2021/index.html","7498c051a19c46f8ec225bce521b30ca"],["/archives/2021/page/2/index.html","c60e1ad067f25bd817fe80ded16c3990"],["/archives/2021/page/3/index.html","943f2e90338dafaa927aca0b518382e9"],["/archives/2021/page/4/index.html","856bface5880855c0adac77df4fa0d9d"],["/archives/2022/01/index.html","8e85a499b505113c4cb45f25394b85e4"],["/archives/2022/index.html","26bd04dd0dcd188f57bb09f3f4e86c3c"],["/archives/index.html","c5e395ffd4647bd0bafc72a54e006108"],["/archives/page/2/index.html","beb2b9258a4a9f0a9d8460fc333bdb3e"],["/archives/page/3/index.html","b160b1b229784ca7c17e47687495022f"],["/archives/page/4/index.html","845645aff752c0a41b336bc1b76d3c0a"],["/archives/page/5/index.html","e79536a7395cbb5b841334f8dce4a21d"],["/categories/index.html","0154f9464c6b80fd61f4629c82914c37"],["/comments/index.html","1516c2c32144781e7134f01fd8d2f6a3"],["/cover/index.html","bba505d3c51a50fb2ba9a255bc109f29"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6ea6fddb3f2d1778193ff45c4dfc0a22"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","fc161e6e3387f252ae9176989ae9cde2"],["/page/2/index.html","77a31a617d449b1a3c7e5263d6b18d2e"],["/page/3/index.html","4ca76e7df4ba63541ec1672404ccaa21"],["/page/4/index.html","df7772d295f386d371e659d908fbf6a6"],["/page/5/index.html","d9e611fee90f26208480a5b6b91dd6e3"],["/posts/1/index.html","d86a12da069852b7283bef9b65ac916b"],["/posts/10250/index.html","84e54ce15254884f2d6d43d4c6d82a85"],["/posts/11566/index.html","f4a8dbc7482149b8c1ed23eeead7532b"],["/posts/11812/index.html","cec8ba252c4ce6236a5fb9d0910d4756"],["/posts/12811/index.html","23f2657ea8455f7385272e0477a3f8c8"],["/posts/1647/index.html","08ba51c78a47a6b075040172f62e3fb1"],["/posts/17/index.html","09395581a9ccce53a99d4d21af01e861"],["/posts/19914/index.html","1bec1a599f4c35199639cf672834f33f"],["/posts/20777/index.html","efc7d50cee822f30c03e20a33664a2c6"],["/posts/21874/index.html","19fa05d2f8c30992beb4bda32b6eced0"],["/posts/24608/index.html","258fff5670579d1a102f9be7efcf08b9"],["/posts/25781/index.html","ca8925823b39f9f9313aeeb815e5fa62"],["/posts/27099/index.html","9873fb5c40e00260416ddc2efc8a7c5a"],["/posts/27776/index.html","7bf6577a6516b9a8c9c27d4a995b457d"],["/posts/27817/index.html","519b1c54eeba75bda5269f1c99d3e7ec"],["/posts/29839/index.html","0c5a9fa59fa0eb3d59d7690f50e4c006"],["/posts/34183/index.html","0366ae3d8059be98717562a8bc0cae71"],["/posts/34536/index.html","0ae609ac0178c5fc294e0c3e521eaf2f"],["/posts/36110/index.html","64d632bc5a64cdf24afa4763a53cbadd"],["/posts/36978/index.html","acc0012c88d64c416bf51ce9ac2ee75e"],["/posts/37060/index.html","67b6f361ddee5e5355c9134c716f30ec"],["/posts/38125/index.html","8cf0be96e470743733e39d2eb51b0364"],["/posts/39413/index.html","a7d51faf51a43018e700d7c5e1db0f43"],["/posts/40759/index.html","a0cded2ad3f823d99db65c8f16373565"],["/posts/41157/index.html","3f48cf344e02dbf6ad2cc2952176630b"],["/posts/42327/index.html","d96b2b6ba02b67953d06be22e38d650f"],["/posts/45698/index.html","cd47b9c7380cc84efb0b4b0aa2cbdafe"],["/posts/48470/index.html","3f69988c574e6631f295b15975879891"],["/posts/49122/index.html","88360b0e9df4c7753bfda5f83a7e78b6"],["/posts/49370/index.html","9521f5b913b50d1498286c69d836d322"],["/posts/50467/index.html","a687b04e95926d0eea512c40ef1eee67"],["/posts/56727/index.html","5791e161b26df724af3d7e9f7a57aa93"],["/posts/60038/index.html","328dc3dd83a20969cc9822baa50714d3"],["/posts/60039/index.html","4087cc736eb6288e71a2c10c1113dd0f"],["/posts/60166/index.html","8d9386dfd422e3efcacd02c95f512336"],["/posts/60716/index.html","799dfb99b596bf00e9fd6cead80032b4"],["/posts/60766/index.html","3c59436943339afbb0b86cbd02f4e18b"],["/posts/63489/index.html","f9edccc9f9df192a57ffd3fe63255a23"],["/posts/undefined/index.html","f828d396c4872b4e27aa408ac99e3b2d"],["/sw-register.js","641807d1a73984c7d703405e6aecac7a"],["/tags/AAD/index.html","348576f799e1fb87951530114d13c517"],["/tags/AutoRclone/index.html","887f701000d711a36ccdcba7a849e21f"],["/tags/Azure/index.html","6a6c855efaa227c390f477f97c03387f"],["/tags/CDN/index.html","2ddfe571a435ded91ee3d7e373bf9a69"],["/tags/CDN加速/index.html","40e90b4ced73f03a093876b9de074957"],["/tags/DD系统/index.html","7f6e0b8053d023975442e96d94770884"],["/tags/Github/index.html","df77b85083e05c8e4d9a279fa9c21be1"],["/tags/Okteto/index.html","f6c49bde034ef6152ddfbb1678ce4275"],["/tags/Oracle/index.html","27dbd270b35e84716880eada0ac6e8f7"],["/tags/Rclone/index.html","637716719d4c532260193562aa00391b"],["/tags/VPS/index.html","fa9c737ec92bc33eb35fe4c936b23a20"],["/tags/Vercel/index.html","7d2671f8faf18ede5d6c0ed59bd440b4"],["/tags/cloudflare/index.html","fcd54e3e8a171e6b5e966d1a7254512f"],["/tags/freenom/index.html","780d9ce5284d4f8a4c51426975ddc5c9"],["/tags/google-drive/index.html","82a2171d43b1e7e50d59c6bf1482549b"],["/tags/google/index.html","d490779be338a1bc61d3220c96d2d473"],["/tags/heroku/index.html","5d81386ba3f0a4dd39f5aa6a84d1f38a"],["/tags/hostloc/index.html","6554ae554d95c12aa08b3772bbeea65a"],["/tags/index.html","93c4a3afb6e8bdfbb267e3f827f8379e"],["/tags/onedrive/index.html","2dab80fe041b6561a8cbe42c866ce7d0"],["/tags/telegram/index.html","28f9b804f62878b98cbc7307ad1d3867"],["/tags/wordpress/index.html","351ca476bfe8d7b7c432a75e5d953082"],["/tags/免费/index.html","8e75a1c2846d149fb8dcfc36e41f00e1"],["/tags/全局管理/index.html","81e8e910fdb1dcc6ccba5304dc2d1b4c"],["/tags/升级/index.html","6f53caced2049ac1f22cbbdbe05127a7"],["/tags/图片收藏/index.html","fdbad1a2f9644a319c0be67dc8b74115"],["/tags/域名/index.html","252eb4d3f819f99d695a3d4ca703c75f"],["/tags/域名续期/index.html","974fec1380d1ac4f8bfa30d4a7eaad10"],["/tags/富强/index.html","2c93bf90cc8ef33457530c48127d4fbc"],["/tags/建站/index.html","375d3c228217ec3908c4067878a85df1"],["/tags/挖矿/index.html","22e07dbd87648d77f106afe02e8d8dd6"],["/tags/搜图/index.html","84bf40d4cb11bb7cf4c68f2f82152632"],["/tags/白嫖/index.html","1d32696e03475c218d1a725cead01bd4"],["/tags/目录程序/index.html","98ed4ca21889ef2835712dcab5eefda5"],["/tags/自建网盘/index.html","bb5f34f2e2da103014ef96c1909020df"],["/tags/自建网站/index.html","d7cb89a2117101d0b850ea4960455ead"],["/tags/虚拟空间/index.html","6d4e85ee11dcbd8adb47c20130355653"],["/tags/转存/index.html","23f4c22fcff44d1e0d88fc27d25f3e9d"],["/tags/随机图/index.html","0b9e1be195b410561071ad7198ec9bab"],["/tags/随机图片/index.html","9631117fd1bb81d9be60440e1cada76a"]];
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
