/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","10521850b713c34f273a2421f247cdb8"],["/archives/2021/11/index.html","c655f649e215459a4dff60430f7d04b7"],["/archives/2021/11/page/2/index.html","d2e4b8edb8ca9b67b2bba69eb6a11535"],["/archives/2021/12/index.html","5b68e0cabc7c1a074485bcab511e3201"],["/archives/2021/12/page/2/index.html","5a532c588bff22b85fe9e0607fd2a358"],["/archives/2021/index.html","6f57fa7dd57b906edefe90fd0f44903d"],["/archives/2021/page/2/index.html","88e05185933d0abe5a0084f12c8ebaee"],["/archives/2021/page/3/index.html","66e589164b2e4ae1322415747abed877"],["/archives/2021/page/4/index.html","092544c5e2503cc7a4b33df5cc98639e"],["/archives/2022/01/index.html","dd58e55c93c613e75211aa7c2870c780"],["/archives/2022/02/index.html","3a31771742095b9015f4cc9e1299f194"],["/archives/2022/03/index.html","1fb13b67840ced9894f9f1188a551dc6"],["/archives/2022/index.html","560c295a312843cbcad808013dd2e41e"],["/archives/index.html","20c40282d85633e38019f00bcf1ef6ed"],["/archives/page/2/index.html","0039c4b55b2524519df344ef21bc1857"],["/archives/page/3/index.html","b2f35c3cc6f750415323354b81beec13"],["/archives/page/4/index.html","7eb34664127348c538da868a3a7695b1"],["/archives/page/5/index.html","204f9cc3a1a0bb52dc43858163a339f9"],["/categories/index.html","ef3960732b0d09ce69233a1d62c86ecd"],["/comments/index.html","03a5e64e9195e379b08cde6b856f03cf"],["/cover/index.html","818e6bbece099b8fcf0898937549c208"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","040be2c8de0d03cc651cce34f61e103d"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","7d07ae0e96bfa0d06fdd2589ace743fe"],["/page/2/index.html","1ec1ac4ea242c5d04e6a4c8e79f4bc8f"],["/page/3/index.html","5e4fa3cfcffd4915cf0c2deeee6b1ac9"],["/page/4/index.html","349cd3ab736c14b9e85ba5492d44fd0b"],["/page/5/index.html","a61857c857840c8f6ddb3e7ff3fe2e42"],["/posts/1/index.html","b289d42e0d6e3718d5175d7a0d847fea"],["/posts/10250/index.html","0db7201cf8061d9e30ca54de0cb99fc2"],["/posts/11566/index.html","ef7f6ae906fe9833c86c08fed91635e5"],["/posts/11812/index.html","214ab0a72b98ddf5bf3789de44b7c27b"],["/posts/12811/index.html","57fac07be1af5e0a1472cb2266953c0f"],["/posts/1647/index.html","57d065673bd092702a821b967c22d723"],["/posts/17/index.html","11763b2d259db5a3fa8c79bab70779c5"],["/posts/19914/index.html","7027f0648300026e272b5a6add19fa15"],["/posts/20777/index.html","ebc1f35be4df9322688bf12d9d05e7a6"],["/posts/21874/index.html","46ed4e39c5efb1a0c831cb0f2473ac1f"],["/posts/24608/index.html","ff6796c5de6f44dad6964e2d2cc600e0"],["/posts/25781/index.html","105a9ba445a07adfb2137a743d342825"],["/posts/27099/index.html","0d683492c8b7369e149384769dfadb2e"],["/posts/27776/index.html","8709a18f6ca4e38996e32be7e72e7709"],["/posts/27817/index.html","ae0d7c5b8ab904a39d3511778e2074e7"],["/posts/29095/index.html","dceb0fd58579a1d9309d61d9f6c308ad"],["/posts/29839/index.html","ec7e407d1e8b12fe2993dfbaba4c2c8d"],["/posts/34183/index.html","e9895439d4975e5389e8223622d82fd4"],["/posts/34536/index.html","8dd30aab2f99c038e6417e47f65835b9"],["/posts/36110/index.html","8a2a5705050873c250051ef7b516bc0d"],["/posts/36978/index.html","7d6c3a4b6d742c03441de17e93edaa85"],["/posts/37060/index.html","2e065ebbdd19fd6dfa25fa0d419dcf81"],["/posts/38125/index.html","e02da7ae729ca5fb21b09979d2b4be6a"],["/posts/39413/index.html","27d0dcb742088cf37a3bd95f3acf7c9e"],["/posts/40/index.html","d8a0791c96a8611b4f3d90d42a8a6c88"],["/posts/40759/index.html","074d73e5d2291d498752c13390a3b74e"],["/posts/41157/index.html","d115e6478abd3b4a919e7e90c2ba0a45"],["/posts/42327/index.html","e101987f93b776b89fdd32ba3e02d9ca"],["/posts/45698/index.html","276e40c7fd84fc590ccf1c5d3fb7a617"],["/posts/48470/index.html","e7a8dbd9c81a61931e0cc34a5bdf55b3"],["/posts/49122/index.html","e2e6e5e4c422547b9532c096b745dde0"],["/posts/49370/index.html","62d54bf466b32047ecde7a5f36dd940e"],["/posts/50467/index.html","af83d0174105ab58cb74a8ef6ff08afd"],["/posts/56727/index.html","0af3e6a32ddb07a8d4c6bee84c105a03"],["/posts/60038/index.html","ccb684016275a190488f51161ee680fb"],["/posts/60039/index.html","4de7d65148dc06f76100c0a546ff34ec"],["/posts/60166/index.html","0767de5e550e0fb5d27599e98eedcce0"],["/posts/60716/index.html","df5f34cf2b445948a091cfd2163c4597"],["/posts/60766/index.html","32ad6b1e7e707d51754a80d269f11bea"],["/posts/63489/index.html","c0ffb05d4e44d309432e3403a7f0e4b0"],["/posts/undefined/index.html","78ccfcc37430f9b39d32b1a1b6412859"],["/sw-register.js","5cf212c31162e0e6899d062297079ec6"],["/tags/AAD/index.html","8af33b82e7e6de0cb5a9d01f4f68451b"],["/tags/AutoRclone/index.html","dfe84dd5fa908be742e006bb41b927b3"],["/tags/Azure/index.html","c369ac3cb8dc322c88c27087b60f482e"],["/tags/CDN/index.html","d4a3620825654ae953823b282dd4e48f"],["/tags/CDN加速/index.html","3127582ed3955289670b90fbb0b052a3"],["/tags/DD系统/index.html","d8f0c9026f194bf020cb14a10bf4e4f4"],["/tags/EMBY/index.html","ff964a11e59a123faa62aef9de594dc0"],["/tags/Github/index.html","4659d9a992d1039f42409a533ee96ded"],["/tags/Okteto/index.html","bdfd991a596a35f58f70cf9fc67ac22e"],["/tags/Oracle/index.html","0c24d99ff2f2901a5e689154f9f8c7c1"],["/tags/Pixiv/index.html","eee3b192c942f0d99e30dee2df439d2a"],["/tags/Rclone/index.html","25b4a29ee30aad6ccb4a1bd2d10daf76"],["/tags/VPS/index.html","6c376ea1bf89275a28aef828124d7ffb"],["/tags/Vercel/index.html","810e9b4e2fb26e3817611db5c72310a4"],["/tags/cloudflare/index.html","1f61fdeca0003c5f7bebe4f54d04dda1"],["/tags/freenom/index.html","a49650317261a91dd1b32384473874c4"],["/tags/google-drive/index.html","35cf2264e6d4aa3018d6b48b921d2f66"],["/tags/google/index.html","662652823a935d5802acd4fe8999f296"],["/tags/heroku/index.html","ee05cfe060267dff01e23ccbff957b2b"],["/tags/hostloc/index.html","dc66cd8900ae104127368f5741e641fc"],["/tags/index.html","1bab2437969636269ad97cde46e00c95"],["/tags/onedrive/index.html","c4515ddfb1262e043a8747b8423d2a54"],["/tags/telegram/index.html","18418cd7df51f9a50e1ff81479a8bef0"],["/tags/wordpress/index.html","7793a97c5a7b05921a4c3a40adfecdf9"],["/tags/免费/index.html","aab4d24c6c37698f5620b77bd653d44e"],["/tags/全局管理/index.html","5ee391e0726de9378bf82c1b8f7bc32e"],["/tags/升级/index.html","aef079336cf2512aaaf26c56ab49dab1"],["/tags/图片收藏/index.html","eb2051c11e1d9e5c4901e041ce5b6410"],["/tags/域名/index.html","0cebbc8933308a5933bb7f1b42d728e8"],["/tags/域名续期/index.html","44237e092cc387b1018ae80b2f7c703c"],["/tags/富强/index.html","b130ad0fd65109bd5b3cdafde247dd1c"],["/tags/建站/index.html","fcad21797aab134c19fb48409a887ed0"],["/tags/挖矿/index.html","4262d368b98af690c7c16959d8ee1f5c"],["/tags/搜图/index.html","95487c386f2f8254275b375e2418648d"],["/tags/白嫖/index.html","6be4250359c02031debc82ef2be69611"],["/tags/目录程序/index.html","62421166f4eb02b324df25996f607cfc"],["/tags/自建网盘/index.html","28ee40a98c81e23b5edaab8718601a57"],["/tags/自建网站/index.html","36818b9dc7d278d75fe5ea5bbc2efd7a"],["/tags/虚拟空间/index.html","7a53dc36f981809072b0bfe35d9e2009"],["/tags/转存/index.html","c9594070d0ac12929da4d4fa3c803d32"],["/tags/随机图/index.html","39978ad7d6ca1d4263b3dc803ceefce0"],["/tags/随机图片/index.html","870dc12a92d47a68d42119f3a3556444"]];
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
