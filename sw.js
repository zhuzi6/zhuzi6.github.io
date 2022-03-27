/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","7f2428cb9ad690bb3e3c54be8553d4ab"],["/archives/2021/11/index.html","7c99545a9674ca6ef5c730e97521faf4"],["/archives/2021/11/page/2/index.html","090f24dc4cc82f295ea989f3a06469c1"],["/archives/2021/12/index.html","67968f5e125cff0b1ba6ce796511d6b7"],["/archives/2021/12/page/2/index.html","50351336fe831371108339869290262b"],["/archives/2021/index.html","2b2e763afce53530afa74f13ce53d5d5"],["/archives/2021/page/2/index.html","7c3383f6cb5bada1bc671c60983d0a4c"],["/archives/2021/page/3/index.html","71ff849f85eac6dea4badb8823ebf585"],["/archives/2021/page/4/index.html","04136205a3a4cbed34229e4e41d54e9c"],["/archives/2022/01/index.html","e9ce2760c676319beaa08df1f6f50a37"],["/archives/2022/02/index.html","b20b80d0aeaa02f40b78c314cfb4a1f3"],["/archives/2022/03/index.html","e9693ef4873387b18ea533a3453392ed"],["/archives/2022/index.html","102eddb9fb9347107d539510061931e4"],["/archives/index.html","4322fc4f96272c601448417e5c08eeee"],["/archives/page/2/index.html","c80b5840edc6283c8cf56bb216fa490c"],["/archives/page/3/index.html","5ebc17e5d36984eeb03cc9904ed45636"],["/archives/page/4/index.html","73be251e002eeb5f441e8499a721ed4f"],["/archives/page/5/index.html","dcd09a3993729722f6dbcb42461b8a66"],["/categories/index.html","27e3a184b6d8d0ab631bca12b5f00ecb"],["/comments/index.html","dfc88565427d6e52b45877736bb50e64"],["/cover/index.html","610bd627620427b42dd6404449e13df4"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","15135a00fb43a6539a0070cdf0684d06"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","aea1c6a4225b53444d5dfe0cf1e3c449"],["/page/2/index.html","1fe35681e9b4e6ed9f3d0e70b9d9a5a6"],["/page/3/index.html","dddd5d929bef2017b23807fe9449e878"],["/page/4/index.html","fee77a1761d7fd4604d7ccb64d71c4e1"],["/page/5/index.html","8857a4ebb44366ffaa1b32f9455a2a45"],["/posts/1/index.html","447b94a81bed278a6eb497d74460a6bd"],["/posts/10250/index.html","685077afde94e9ca5fe1eb2fd9cbd6cb"],["/posts/11566/index.html","d0498cddcea45351548ea8cca0391c54"],["/posts/11812/index.html","637f95e15f29b85ba9628c7480425e38"],["/posts/12811/index.html","deafd66e91a070be1ee8daa6f48a3dcb"],["/posts/1647/index.html","4ce9ccad285b9472c5ed4cd052c9eb50"],["/posts/17/index.html","e19718b35d6776faded09731d8426129"],["/posts/19914/index.html","767edb3da29f29c6471362d0191c6637"],["/posts/20777/index.html","04ea06ea56b9af304ca29c187a22abd5"],["/posts/21874/index.html","28741e5bb60545d7c199bc6c95bf6518"],["/posts/24608/index.html","f8393fe6ff18d24e4c01b1224e350aaf"],["/posts/25781/index.html","2585115a666ecc154fd10584cec6ae2b"],["/posts/27099/index.html","61ac092885b80fe21a25bb2a4a14a4fa"],["/posts/27776/index.html","e5bc110492beb104f96423237ef6aae3"],["/posts/27817/index.html","578cd11a7de3176b908edc6f014f8948"],["/posts/29095/index.html","dceb0fd58579a1d9309d61d9f6c308ad"],["/posts/29839/index.html","9829dd15f9c22628553f2642682a8533"],["/posts/34183/index.html","c2b8fa37cb79b02bdf26054f2d2913c5"],["/posts/34536/index.html","7e7d126dc53ce27c9a28425257c4cafb"],["/posts/36110/index.html","f89ed81055eb9b1a7e151eb2b1303297"],["/posts/36978/index.html","2dbd268c1034b34e55ca48f6cd8d0fb4"],["/posts/37060/index.html","fac7c9d48056af7ab0b8b228b3938a7d"],["/posts/38125/index.html","8fe49f4fa1b66aa115a9971c095d2cec"],["/posts/39413/index.html","122db435520df05cc729b9f8de738d6f"],["/posts/40/index.html","bb6347b57f6bf2d627b36d68f787dd5a"],["/posts/40759/index.html","7c37b2577a93e1d38a4a62fb62c95f15"],["/posts/41157/index.html","9cde803f27df7413782a42c59c27cdab"],["/posts/42327/index.html","508dbe89322fb6a67a30a7b330b927e5"],["/posts/45698/index.html","d283f64f81a66974e3753e3e148a5283"],["/posts/48470/index.html","758f7afb83bb140b880d15620aeb8750"],["/posts/49122/index.html","6f8fd1b03061b53d480a591084af158c"],["/posts/49370/index.html","bfdd0c27b6cdc4060abdb5869c9b912b"],["/posts/50467/index.html","48a48766d1f5e9b181f6a923f118c402"],["/posts/56727/index.html","3379b80405ec2294c62d441356befa7b"],["/posts/60038/index.html","17176a85e720f07e60dbe62d8134bc84"],["/posts/60039/index.html","dd43eab85437b84ba04ae7675e2064a8"],["/posts/60166/index.html","10b032bf0b1935fa6580f93dbb6b7971"],["/posts/60716/index.html","c1645a84ee5a9cd01ec088bb63bac9be"],["/posts/60766/index.html","4457a7e5f7fb28266fe524f5f7f7898c"],["/posts/63489/index.html","a0e74cde8747cc9900adf7704ceaf094"],["/posts/undefined/index.html","1f1a3285a746c546a487c8aa2fdaee8b"],["/sw-register.js","7290ce922bf22d39a1e661cf4bfd4361"],["/tags/AAD/index.html","416ef69c642b1c276669fc2151c8667b"],["/tags/AutoRclone/index.html","4d620b07db4961e8f0d842a799c3b610"],["/tags/Azure/index.html","2e35516ab9ceacc2433fd98e6ae84a6c"],["/tags/CDN/index.html","f69c9a634f0073f911abfef39207d9ed"],["/tags/CDN加速/index.html","2402dbfe333ef9cdeb0c2a768fbdffc7"],["/tags/DD系统/index.html","690cb468bdac83b8368f0741bfeddb12"],["/tags/EMBY/index.html","72d6b959c4e0bfc91532461814a47048"],["/tags/Github/index.html","7c02ad610745ea736bea135a4361f400"],["/tags/Okteto/index.html","0c8f92658a95a02999c7dd4ba251b412"],["/tags/Oracle/index.html","c71206eed86ce48b3be97b6a8bf39a9c"],["/tags/Pixiv/index.html","efb6bf7164ef655e93d73cb2c338abda"],["/tags/Rclone/index.html","b2d7d16e64c8d7141787abe0b99893ad"],["/tags/VPS/index.html","13924814c4c6d6527c9e7a76765e0a0a"],["/tags/Vercel/index.html","9695b51f64f8ba7d60cf231dff655e7f"],["/tags/cloudflare/index.html","b7aebd63843133be99095256a7cd10d7"],["/tags/freenom/index.html","e4c5f40fe0d27ea8e6a9d0154dcc1164"],["/tags/google-drive/index.html","c0635a7218aca50d7ac6b48453ba91d1"],["/tags/google/index.html","3ebfdeddeb91fbdc7fd5fca7c82a2704"],["/tags/heroku/index.html","d1c7866581e1560bf301ec842a890a5f"],["/tags/hostloc/index.html","4ed0526c355514f0f8270100887ba384"],["/tags/index.html","da77a24630b26f0a3ce05ea38beb344f"],["/tags/onedrive/index.html","5a77f4c013e60e93c85c7709e294c667"],["/tags/telegram/index.html","d215a141bf344a04daf0712c807a7925"],["/tags/wordpress/index.html","af4ed9e1ea703d8ed278c4112182f958"],["/tags/免费/index.html","74f5001e1e39b7745c082c263d24ca18"],["/tags/全局管理/index.html","77879c15d912c142d7ed1b683f94eb35"],["/tags/升级/index.html","6d8c2b832fa0e1d19b57292231bde2a5"],["/tags/图片收藏/index.html","7108dcfa9d406bddf2006796b51fe478"],["/tags/域名/index.html","e3b2ade67f592e557ff9a940dd3dcc7b"],["/tags/域名续期/index.html","7a5b56701e502e5bc0e4c27492b35c50"],["/tags/富强/index.html","9113b2ad0544e30601884237ab34bca6"],["/tags/建站/index.html","b3a031b8555df13396a8268501a0e3f7"],["/tags/挖矿/index.html","5f6b58ee484431398d4ada326e2385ea"],["/tags/搜图/index.html","55cb2be315abd66203608e6c259696be"],["/tags/白嫖/index.html","fe413dea56d3af9051074d943149c51d"],["/tags/目录程序/index.html","253f84e889224767229886293f913424"],["/tags/自建网盘/index.html","583cbb8dbd8ee3b86cf91ecb78d6ceea"],["/tags/自建网站/index.html","3808a53c8c4e354f56efce84384dca41"],["/tags/虚拟空间/index.html","1a7bc55403fa700dfec2e685a4488610"],["/tags/转存/index.html","35cfad38ba8a729099d30cc6d2d00a71"],["/tags/随机图/index.html","6a5303e93f907883c93372975f33a660"],["/tags/随机图片/index.html","90fe54d983a19b56453d5fdf7138e665"]];
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
