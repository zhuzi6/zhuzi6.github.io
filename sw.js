/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","ff9c2a0e741fb01a58d017c3d1a241d5"],["/archives/2021/11/index.html","babd8484643a8d193c3246af7b5ec8d8"],["/archives/2021/11/page/2/index.html","223cdd9bb076c439021f5596fc9a3dfa"],["/archives/2021/12/index.html","bd091e79dcb603dbc360b9bb8570aa37"],["/archives/2021/12/page/2/index.html","9dc6d2931160fdb69d0bf58cc4574b22"],["/archives/2021/index.html","727ce4035fb548e22de7033a0260d49c"],["/archives/2021/page/2/index.html","7e8de20bd2a48fed39feba123c383e95"],["/archives/2021/page/3/index.html","2c066269890a33b0fd91542eafd0fd31"],["/archives/2021/page/4/index.html","3018fcdd1c2899453a0ebbe874b34189"],["/archives/2022/01/index.html","bb5333801518d827f81f34f34926e015"],["/archives/2022/02/index.html","a299c7e5187ff266f077211708b6ad10"],["/archives/2022/03/index.html","c44a0e3ad7b17e4db0080ab0922f6b80"],["/archives/2022/09/index.html","2398b10b2b6ba778d4efbdac012ccbbc"],["/archives/2022/index.html","78c518cd2ba3e4e0525f9a51847e9bed"],["/archives/2022/page/2/index.html","96f710703d9526d16b688f53abb66f4f"],["/archives/index.html","2803fa68824f1fd593cd9c53eed5af3c"],["/archives/page/2/index.html","119f5fb14e254f20eb9d04d4c6a128c5"],["/archives/page/3/index.html","4c0bfb116dda156a82d321fdeda2d1d6"],["/archives/page/4/index.html","2405eb41c39a47524a565bde789350c8"],["/archives/page/5/index.html","4969a737841d701ce75487a67616d77b"],["/categories/index.html","83890d1318980e32d5683aec0a145a30"],["/comments/index.html","2700917eb994d074a05bb87faf78c474"],["/cover/index.html","62ab9122b3f9b6bcc32f3d560094e2be"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","bf7ab26989b288ba1fc75d5a35cd1080"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","67c0c82bdbdb250d4ab3b58e2d6c5428"],["/page/2/index.html","3821af898fbcc9a2662384af91f83f6c"],["/page/3/index.html","abadf109746a6cd99294ad095fa24905"],["/page/4/index.html","71c4bc58129fa385c26053fd7b73406f"],["/page/5/index.html","22cb814eb7666a39e50c9a669c548996"],["/posts/1/index.html","707c6cb850ce0d5a9170fd226a78491b"],["/posts/10250/index.html","fceef8aa1ecd3f16cf714d84905f8223"],["/posts/11566/index.html","0d2f752ec18869bf296f8d97677b955d"],["/posts/11812/index.html","81032e337f5724990be647f6db01942e"],["/posts/12811/index.html","557828d97fb090394ccf29232a4f071d"],["/posts/1647/index.html","8c09d905248a852a871a92e206d518db"],["/posts/17/index.html","2794b1bc3639889e5ddd4be6c644f9a1"],["/posts/19914/index.html","f5c3d84c2915b341c3ad5778a477e5fe"],["/posts/20777/index.html","1c5fc95ad36ad9b3ee4f8ee4734511ae"],["/posts/21874/index.html","94d985a33c420942e10fbbd37970bd4a"],["/posts/24608/index.html","ad7992c1ebeddaa3ea65fed98017f0cb"],["/posts/25781/index.html","8db925279e7fd082e3fee47bb47307eb"],["/posts/27099/index.html","47dcf511a7bc39e6d6274e910fe4ae7e"],["/posts/27776/index.html","1af7665b51aa998609ca167fcab0b2a5"],["/posts/27817/index.html","121d0c013727d46713d7d0c2aae16fba"],["/posts/29095/index.html","440ef96badb450301544835656dd4343"],["/posts/29839/index.html","c464570d6379fc9d1292606afc9d391b"],["/posts/34183/index.html","b69995c9d078b0484c01939d709ece0d"],["/posts/34536/index.html","8057d15a4e5181ad8e149f5fe74d6981"],["/posts/36110/index.html","ecaf52abebd5a30bfafb9ea1c55fdc83"],["/posts/36978/index.html","8260fe1055d4bc0c3da14800fae675d1"],["/posts/37060/index.html","ba605c5d1146826cee2278485f9d8d42"],["/posts/38125/index.html","ea44dd333aa422dd96f03d97648a5e09"],["/posts/39413/index.html","362d973f5686600f2216292958e9e624"],["/posts/40/index.html","db8a7f85558c3f0b93f7c18d1f7a3b1e"],["/posts/40759/index.html","04386601aeeed4a792b84264d653d09b"],["/posts/41157/index.html","6fae3f99fd547d0fe54feea8510cb749"],["/posts/42327/index.html","2aaa3ae510fe2f052cc6fa364c7caef3"],["/posts/44924/index.html","fa19221e55cf2a93d8edc29f6a997156"],["/posts/45698/index.html","74d432121a361caab7cce5be98399599"],["/posts/48040/index.html","60c13b50ed6767acee452dd113cfa73d"],["/posts/48470/index.html","b950c2e44c61d9a5e2e27738af46a131"],["/posts/49122/index.html","d90527f93ae51d1dff4ccaf183e4a33c"],["/posts/49370/index.html","344567f941aa68ded334cfa00a416298"],["/posts/50467/index.html","c230f5fecab507e6903006a86816d0c3"],["/posts/54280/index.html","723f5dd73d25e022b76adf9569bcc485"],["/posts/56727/index.html","26bebd1fb6340d7a3003db31f5f884f0"],["/posts/60038/index.html","aa05a44af7f9a231daf0756286ab2eed"],["/posts/60039/index.html","9cfd629f954b17f9b509c4e06293f9b0"],["/posts/60166/index.html","6af1187f0df3e26941cc39ffcf3a4966"],["/posts/60716/index.html","a3806aa663052296586995cf0fa41869"],["/posts/60766/index.html","f71422d89138b993d8625a1bbb5d8d44"],["/posts/63489/index.html","324f23ba45e9872cf32c31faf0c6ff91"],["/posts/undefined/index.html","38d67cf0c7f9a2b0c3e42b5ecb282216"],["/sw-register.js","f3ad9bfe2623f8353a6087f9b20888e8"],["/tags/AAD/index.html","4f99dc29c2d0bfdc555442b44d6228f0"],["/tags/Aria2/index.html","6bc1e067a428c2f54f59fc9d63e6ce8e"],["/tags/AutoRclone/index.html","ef6ce5bd0cbe3e0fe6ebc019dcf3793c"],["/tags/Azure/index.html","b96cd122489b198f9a8b4fa4b61d647c"],["/tags/CDN/index.html","90c203b6fdcd58fe41fbcb196ed35e8d"],["/tags/CDN加速/index.html","6778b6ae1619db54d55ec3fbe41a58b3"],["/tags/DD系统/index.html","afc421df4ff2e5b135b37704b1b948ec"],["/tags/EMBY/index.html","04186aff4aaad0a6bbee8627a4aa6306"],["/tags/Github/index.html","6ce7d51b3776552c2cc2cf8b800231c3"],["/tags/Okteto/index.html","645f6e1b337301348de7d0afdecf1d66"],["/tags/Oracle/index.html","7d4e3502d8d19e728144a23223de16c7"],["/tags/Pixiv/index.html","2035da076c3c00131ca5769abeb682ed"],["/tags/Rclone/index.html","50fa8d6f401e95da6644364e2968c204"],["/tags/VPS/index.html","c24c83cb28253543520a16a6843ee3a6"],["/tags/Vercel/index.html","e5d0b3a00eaf05d20be761f5a29e5c93"],["/tags/cloudflare/index.html","4a11b0633cb7eeaf3906490a7538c72d"],["/tags/freenom/index.html","ea81195d87af95e3af95f5837ab64804"],["/tags/google-drive/index.html","5c8a63f38277ab1c93b1667d0d451e0a"],["/tags/google/index.html","0c057681059e748deb51255843c9c35a"],["/tags/heroku/index.html","988d1e206c5d35df7304e0d612c0fed3"],["/tags/hostloc/index.html","4406a4e011b155bd87fd14bcca5aaa84"],["/tags/index.html","5e51a55d711cd04e6eca8c141b5b0576"],["/tags/onedrive/index.html","caab0a68f11a947949360b62ab5d863c"],["/tags/telegram/index.html","07693d0abadd279d5161dcc0212187ab"],["/tags/tracker/index.html","7b9df090fa9936ae5528186ad12f0ea6"],["/tags/wordpress/index.html","a2d0b9df4a2f80586152afcb2ad720b4"],["/tags/下载/index.html","0f966663edd71cc604cbab45761c93e4"],["/tags/免费/index.html","5f7a09cc0a8b38103025bcac18873dbe"],["/tags/全局管理/index.html","5ed89c008f95765e6e86443c3f390974"],["/tags/升级/index.html","8b8aa59adace4925417fc7ddc217fb66"],["/tags/图片收藏/index.html","0db46d3acd909ae1dd3a54af89c0dc86"],["/tags/域名/index.html","544091cc901c8a242bc739ee845d3780"],["/tags/域名续期/index.html","55467484d7fdf1f391768e723d2d5c6f"],["/tags/富强/index.html","13673dec6587d71c2e547c6865ef7562"],["/tags/建站/index.html","1887e39a516ccf72cbf71a10ad92b2fc"],["/tags/挖矿/index.html","f8233ef3a04032720610c84cd9fbe2c8"],["/tags/搜图/index.html","98e0ee0e39d3f3e79d06175fd1218fb7"],["/tags/白嫖/index.html","8f480aa32a926bebd24c3759c010ffb2"],["/tags/目录程序/index.html","3ec3564911a6afe1afe1a2517cd5b7bc"],["/tags/磁力/index.html","8787d8f2ddbbbb7dd721b3b3f04ecb62"],["/tags/离线下载/index.html","b3db98256c90ca93cd874e3b57c1f354"],["/tags/自建网盘/index.html","d165070f5ab872f238d88982522ded6d"],["/tags/自建网站/index.html","34106d3797e6759d0bd59d9e76ad7fe4"],["/tags/虚拟空间/index.html","6db25f9573a046420821b0f57f39a9e7"],["/tags/转存/index.html","814e987b146e3b0eadd76bc99918ad32"],["/tags/随机图/index.html","446d75b0d7a0b427c2b3c19f6529af18"],["/tags/随机图片/index.html","a6f07b254f25e415e8aa80c40659e4ce"]];
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
