/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","74d0c08280a6aae0b3461ad2d8159769"],["/archives/2021/11/index.html","e9f9db32a2150b066274c0c67daf543f"],["/archives/2021/11/page/2/index.html","5f81a8947319264690b2d98f565aaaa6"],["/archives/2021/12/index.html","1eb7284d4a75e6c77f8112c2d44bbb62"],["/archives/2021/12/page/2/index.html","51de2a1b7eec52d3629e520da35b16df"],["/archives/2021/index.html","351f8cd039b5fe80657e830f822bfbaa"],["/archives/2021/page/2/index.html","4b40e1f4dcc16c6100107ec4b0dd04c2"],["/archives/2021/page/3/index.html","962dd23c2b03b5ba88b4e60a5914d63c"],["/archives/2021/page/4/index.html","6620cc426ca822125dd477ad2f61d138"],["/archives/2022/01/index.html","d05ad43266cd153f05df4938cf8da84c"],["/archives/2022/02/index.html","82da9b1db507d752b36621b8282c7572"],["/archives/2022/03/index.html","902eddc860b647bee2331de3a90d4da2"],["/archives/2022/09/index.html","3b1c95b7ebbfef88854e149f6affc9b4"],["/archives/2022/index.html","cca470ee5a458abab4d34116e9b5ce5e"],["/archives/2022/page/2/index.html","330ca4effcf5a023614942e78893290c"],["/archives/index.html","627ddae65b4c6ad8142f8d23dab48a4e"],["/archives/page/2/index.html","04d09fc74815b41c80ca573e9d3b5965"],["/archives/page/3/index.html","543c5b8b5d2e6fed8275656fe161b38c"],["/archives/page/4/index.html","645a66ed99b6d7967a58af166f3f9e23"],["/archives/page/5/index.html","f04451b7ce39bd227c7d9aa981a090b1"],["/categories/index.html","ac742c9561d185274008675f8c31d3d1"],["/comments/index.html","a5743d007b8f0bfba24a30d496b290ae"],["/cover/index.html","8a66dc3a1e65d577394774e2ce4997e5"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","edd84b3e7e435ac8f53e6a86f9cb28dc"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","1a9dac1cb52a992c9398ea0ebe3ce8fd"],["/page/2/index.html","5803e01f2dd59ab879d04ad1d0a15eb5"],["/page/3/index.html","376bf9b7c09fd4f6edb55c99023c877f"],["/page/4/index.html","fe87a737b9704838155ccc8bb4c4fa97"],["/page/5/index.html","2b526e0818e9430ba3cae0b6d7b57be0"],["/posts/1/index.html","071f400198f1905c159f818879e873bf"],["/posts/10250/index.html","b3572acb3b21fab9c6701c572046faba"],["/posts/11566/index.html","e7eb02e4b7863098f6575f53d652c545"],["/posts/11812/index.html","0575d58aaa542c9bd62e19b74e5aa8cf"],["/posts/12811/index.html","2f8afd0e4813c8d2d0b51a12c08d1c96"],["/posts/1647/index.html","3013be5e424f5e908f5d3cf248820138"],["/posts/17/index.html","77d83ce9e128bb6d69b51f91b756cd50"],["/posts/19914/index.html","f0fab414235c8644b4f204e5a628f0a8"],["/posts/20777/index.html","8631f92502138116035dcb7b87c74ce2"],["/posts/21874/index.html","a10b33d10861f2a3eadbf6f0b2b722d4"],["/posts/24608/index.html","b6aef524ae86774ab3a7de447c14654c"],["/posts/25781/index.html","3d871c045dfa7e9135713a826ffe33e1"],["/posts/27099/index.html","07a3404e70b41e0b1d7e8f9b17a34290"],["/posts/27776/index.html","91f8e5e99e2c790ccdc83c705e40e37f"],["/posts/27817/index.html","fb486257d33f385ae44359719c526959"],["/posts/29095/index.html","9df5777cc68417bf067231b7b7a38385"],["/posts/29839/index.html","8363a666374882c1af6571fed6f4ba99"],["/posts/34183/index.html","887826109216c7352f7904e75d831a35"],["/posts/34536/index.html","03be242baedc535cd67920a575da4c5e"],["/posts/36110/index.html","a227f43b2c2122fe6fbbab6b5da723f8"],["/posts/36978/index.html","6314161858f03d8d748ee0ffcc3b15d8"],["/posts/37060/index.html","d6c73501d4d85e2710690e3cfd11a944"],["/posts/38125/index.html","ee797e8014eb8f98e3d7d556679e0c90"],["/posts/39413/index.html","844acd2966c9fb2548afeb0bccfc33fe"],["/posts/40/index.html","547af9215b6940978374da68ac82199a"],["/posts/40759/index.html","50e33ca95d6fc1845c32206fcc089305"],["/posts/41157/index.html","cc30029578988cbc0eb81b6641f50956"],["/posts/42327/index.html","71acebdb6336f61e608488e68ba909df"],["/posts/44924/index.html","82d03469dfe2d76e9dc41ecb1a9c4416"],["/posts/45698/index.html","4289a9f0ef64db9b36ff66aac322e1be"],["/posts/48040/index.html","5083130861aae49d83e9db9af024e4ca"],["/posts/48470/index.html","cfad2fb2c995f27f8f3131d4c443396b"],["/posts/49122/index.html","1fe4e7b34f006a6e9407b87dfcb1f50b"],["/posts/49370/index.html","6da96923678b630706c2924bf4e16c10"],["/posts/50467/index.html","e6744568eeac927966d850720dfc29f5"],["/posts/54280/index.html","2566330248dae8da61be0a5621944aa1"],["/posts/56727/index.html","922626209282cd0644aa4b59dd010eff"],["/posts/60038/index.html","ca7006bb41b54ec9cb54b258f592fb2e"],["/posts/60039/index.html","9bd01a9957c2ec5597a87adc586968e6"],["/posts/60166/index.html","c37a26fcf9c4aaf0bba8885430c85549"],["/posts/60716/index.html","6cc325a15938ac0e9c74a5b3151ecee2"],["/posts/60766/index.html","79f4d70ae2453781ac6973a9b34602c7"],["/posts/63489/index.html","36d9ddb3a871bf9bdcc2c552919238bc"],["/posts/undefined/index.html","140ab5036a0c12f58e2d93ab1a519c10"],["/sw-register.js","76b9f481722a32a026507391a2e5e9d0"],["/tags/AAD/index.html","c89f6df4f15fba38c1e729ef4a7e60ba"],["/tags/Aria2/index.html","e29ec9702f600dfc288d4b300abcd0aa"],["/tags/AutoRclone/index.html","8b87325eb1a2a6a090a878dcc1e04b93"],["/tags/Azure/index.html","ae1bce5b0c4a246a68c00c6f1ca28431"],["/tags/CDN/index.html","c1458167f0cac32b8fdcd442438ff0c3"],["/tags/CDN加速/index.html","f20501723581786921756098f8e3e164"],["/tags/DD系统/index.html","ef998b765f052e629aef338087dc608a"],["/tags/EMBY/index.html","92f2ae9d60c68cfd57705f21f58dc85a"],["/tags/Github/index.html","fc9aa1aba5c483a819426320d40f0586"],["/tags/Okteto/index.html","3fbf56ea253d8e6804d9c87450be53ec"],["/tags/Oracle/index.html","b226a7874994fb721739325dced67f65"],["/tags/Pixiv/index.html","b2e595accd668ab1207e5253ef271a2a"],["/tags/Rclone/index.html","030824a94abaac23b0a37672c5dd7110"],["/tags/VPS/index.html","ad8beb9b9d827d7572572fbe75961623"],["/tags/Vercel/index.html","9a98517abdbd2998312c9c65683422ca"],["/tags/cloudflare/index.html","5637247b794f9de05ab24ba5fd0b9f84"],["/tags/freenom/index.html","11be4921e0286a5a8a2c015ac8b78b34"],["/tags/google-drive/index.html","b9a188d6532dd6fb6ac8cf120ae98cdc"],["/tags/google/index.html","66ea12782170e1d23a6f29e97b0a5389"],["/tags/heroku/index.html","5bbe2ba1c3598e75830112029dbcaa83"],["/tags/hostloc/index.html","0c3b99e904f96c4b9ec3340bde96bb81"],["/tags/index.html","42ec681dd6c214dd59fcab4b3d8b1b46"],["/tags/onedrive/index.html","75cb50e7f2b47d9902fb2d8d78556f7c"],["/tags/telegram/index.html","c38a9d7e48c1df079a2c32b15b0b69f1"],["/tags/tracker/index.html","a2efac62c5c2d634be86561328173c8a"],["/tags/wordpress/index.html","20f89aac6235b7624fc8092dd7f37f0c"],["/tags/下载/index.html","54ad705bbd47c8b6953ae013266f1245"],["/tags/免费/index.html","8d9fc1188f2cdeddda6d4642912d0406"],["/tags/全局管理/index.html","94a01071faa213d727e7c1151cbd26f7"],["/tags/升级/index.html","39d96d70ce4af8925e3dee6ec1eb7f79"],["/tags/图片收藏/index.html","e46fd322640fb0665ae72db320f28cff"],["/tags/域名/index.html","87b282cc41a13412d7a6822d96566ebc"],["/tags/域名续期/index.html","b3b4cd6dd4df39577697f5e25beb5b95"],["/tags/富强/index.html","3b457e839c1c0bc95dcf144dfd034294"],["/tags/建站/index.html","da772341bd97276e6814f5a8a2df5994"],["/tags/挖矿/index.html","686e2890feec4802a41d4a3ea9d2365a"],["/tags/搜图/index.html","32878f6e60d84327c881f307fedea8ec"],["/tags/白嫖/index.html","d90b39e0532c138812d3c66a384fbce4"],["/tags/目录程序/index.html","ed475036ca62dd63a2b5ed7d286b5c2f"],["/tags/磁力/index.html","3292cd941fa7262f58dc32ddd378911d"],["/tags/离线下载/index.html","642747c5a0cf4d693f9b0f53e11d54b0"],["/tags/自建网盘/index.html","4cfd13385633f96b78545eccf4484b7e"],["/tags/自建网站/index.html","61739176e424e79a895ecaf4464e7fbe"],["/tags/虚拟空间/index.html","a73031724e409b402e87da1276bad686"],["/tags/转存/index.html","9ab0ce801bee6f4cfd28360a9118d282"],["/tags/随机图/index.html","6e6a0e48201a916e23e77d0faff82644"],["/tags/随机图片/index.html","8c7045af23b6ed4fdde134272bc8e547"]];
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
