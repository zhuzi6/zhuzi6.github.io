/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","9b89adcea2e79489c117b01f25f57b72"],["/archives/2021/11/index.html","04b41ec71b66c319590080ef9cb48181"],["/archives/2021/11/page/2/index.html","6f07f6b235f632d549e61f8c1a8e0458"],["/archives/2021/12/index.html","9f1842d6ef366355cf69ad6370b6a70c"],["/archives/2021/12/page/2/index.html","a7aaa594fc7e32c863d3176c0ed3f8fe"],["/archives/2021/index.html","1adf8380d2874afbd9d8660e1101e45d"],["/archives/2021/page/2/index.html","05d93e89de1a097b15ef2e492a3bfe63"],["/archives/2021/page/3/index.html","ee564b6b8ff329f65afc3d033735956c"],["/archives/2021/page/4/index.html","c9d7868ff08a0a6887d635ab98331070"],["/archives/2022/01/index.html","9536fa17bd209b6513c13e09a361287c"],["/archives/2022/02/index.html","7ba953fa2cc066abc630e265316dc438"],["/archives/2022/03/index.html","8f7a51267ef002e4e18d040edddd755c"],["/archives/2022/09/index.html","b76603fcbdf2f23728d258b516f491b5"],["/archives/2022/index.html","19bdd1cb3b80c5345d931b06a35abf43"],["/archives/2022/page/2/index.html","2e6271a5b581ef7fc86765566bddc10e"],["/archives/index.html","bd80b6a3e14e783322d0f53f28121d2e"],["/archives/page/2/index.html","939cce0249b675703a5a83255fdd6f93"],["/archives/page/3/index.html","9067707e245c0a43e1e92bf0d8553996"],["/archives/page/4/index.html","76358b050995c50dfe43223527fc37f0"],["/archives/page/5/index.html","a2ca43b0fab7ba4a6ad302086f8315fe"],["/categories/index.html","bb9d46769bac679f896a350c31998e85"],["/comments/index.html","75ad73c91a19579fc19be27a93394840"],["/cover/index.html","214acd39bc83f17b4efa01bdbe658b23"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","962a307c1b31e3e68be63559989af768"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","cfd587b9d27279a17eae5ef39552e80f"],["/page/2/index.html","a2691c304a73b50f3e80b53f109c9723"],["/page/3/index.html","0c41e33e526a06b0a0347957be60d706"],["/page/4/index.html","af52d77677e0af0e0fcc42c65a167102"],["/page/5/index.html","6330ae018f05860f762d65c6ee257998"],["/posts/1/index.html","be8c438e4c934b3449ed16a8151d0405"],["/posts/10250/index.html","2a3cb41c282690410f69042a47de8162"],["/posts/11566/index.html","03e7c6afd7d86273498f2724a3252977"],["/posts/11812/index.html","0a25f1ee55a18f0d6eedebb0445d3dd5"],["/posts/12811/index.html","d36f5377b8aadd5314aeeea87264ee4f"],["/posts/1647/index.html","a1d41daa38bc83eb36bd7398cbef2847"],["/posts/17/index.html","d7b59a629fec0291c164e25547f4cc55"],["/posts/19914/index.html","3f7055d71cff68db888cb79a57e0f90a"],["/posts/20777/index.html","c5581a37f254509239527f82a5db3b4a"],["/posts/21874/index.html","2b4ac301ce2367ee20a207363ae2d493"],["/posts/24608/index.html","4575b6424f96be7436b4063447c738d9"],["/posts/25781/index.html","50df4d71b7e53c99dc594a6c4886108c"],["/posts/27099/index.html","d53d7c9da055c11e1ea5aecc963e22f4"],["/posts/27776/index.html","8c8616c04cab0eff22b5c1adb013b643"],["/posts/27817/index.html","0823d6c1b696b6e61cdd57a40645d603"],["/posts/29095/index.html","473d182cefc21e36e883f626774687e9"],["/posts/29839/index.html","e81176673f9132969b7cc25ac6586e0c"],["/posts/34183/index.html","44609919ed9d7f63a46fceae05db7047"],["/posts/34536/index.html","dcae945d250b5b99d7b838706c1df54d"],["/posts/36110/index.html","2ebea92146ee30a83726f3b080c2201a"],["/posts/36978/index.html","a6010770bf6db2abbc231ab5b33da30b"],["/posts/37060/index.html","2fb290d6d131061ab5fd278ab8751bfa"],["/posts/38125/index.html","071a3487f4f91c899930a98a230647fd"],["/posts/39413/index.html","52ee6d2f1cac30ed3d6bab6bf4fd9319"],["/posts/40/index.html","568e2bec632acb92bf5644510e576196"],["/posts/40759/index.html","442878518ec28e3dd06579b41fee0566"],["/posts/41157/index.html","020c7c01e156cbb31d8387c9e2c4c665"],["/posts/42327/index.html","35b0a3a3a5d534da6772c550a8d45b4c"],["/posts/44924/index.html","472b395ee4d18746ea3cbf4a26ded4f1"],["/posts/45698/index.html","fece078ba4d52f2a9688812f5541d076"],["/posts/48470/index.html","4adf03626c9d87d28cce5d4bff6cd514"],["/posts/49122/index.html","816db3a8bb7829f8146cad5aa884e4f6"],["/posts/49370/index.html","d035f2c7495b9bb9d2046dd1e7008808"],["/posts/50467/index.html","6c03430e9901c9f36d4d6b713fdebd68"],["/posts/56727/index.html","e4d7be9f51068521a4b11c9c0b15a37b"],["/posts/60038/index.html","d86f1c4f92db5891390c67a6f812088f"],["/posts/60039/index.html","280e0c5d78e2f10af44f2ff6d36bc3eb"],["/posts/60166/index.html","5f5ba43d5d35c3355a1c075d98703695"],["/posts/60716/index.html","d3262e56ff8c7cf1ed464722b81e7086"],["/posts/60766/index.html","381f7a170988330994ecfa9faa0c03a4"],["/posts/63489/index.html","c998514ca6d81c47484deae8d833c3a2"],["/posts/undefined/index.html","4b1cac8b001ba0b000ecff9fdf393e57"],["/sw-register.js","12e299e9e99c21fc2b97318e3a6d8d75"],["/tags/AAD/index.html","142b9fdfc99fd7a762d9d8af1090ec57"],["/tags/Aria2/index.html","8a533670a9c57eeea6efbd28c7f44876"],["/tags/AutoRclone/index.html","f66cdfc5c7390c2b9103b0c20319ce78"],["/tags/Azure/index.html","a434375dd6cd50179b9dd1c07d365965"],["/tags/CDN/index.html","cd5270b0b28e5175ea3da0d3fa2516c8"],["/tags/CDN加速/index.html","1f349cd813bdcc1a39acc576fce260fc"],["/tags/DD系统/index.html","1e1a01eb8a58e41cd472e439a3bfbc31"],["/tags/EMBY/index.html","9a486ee08be2807d425a92265d8a417e"],["/tags/Github/index.html","f8e6439851d71c982c9845190d0e4e94"],["/tags/Okteto/index.html","cdde6e892d329852fa32e94f03e04241"],["/tags/Oracle/index.html","e7732035a1a1487e28c0439b5c8ad420"],["/tags/Pixiv/index.html","e783c7485142306f66ad3930a3b4c3da"],["/tags/Rclone/index.html","2f552f7ba2f7deec69b679b4b5603c8c"],["/tags/VPS/index.html","f2e310eba7ffee9e93851a046b8b850c"],["/tags/Vercel/index.html","f75d53247cacb793023dc890fee2963d"],["/tags/cloudflare/index.html","b957537eb1ea92ce063b76c6b2e96da7"],["/tags/freenom/index.html","f8a6caedb502a30037712341ef14af20"],["/tags/google-drive/index.html","70de5251b17f36940468e8eefa8b56ef"],["/tags/google/index.html","26b3a24090236af5571a1dfdb9611ce3"],["/tags/heroku/index.html","7155a152a88f6781ea56d5c6043ccec3"],["/tags/hostloc/index.html","06295cf8be41049093c847c5e12beda2"],["/tags/index.html","547e9d0043a04d8caa7965fe3e309d67"],["/tags/onedrive/index.html","defc4da0d58cd568fb42a72843432ec1"],["/tags/telegram/index.html","b6c6b02051699dfde0a0c7be394b02d2"],["/tags/wordpress/index.html","0d269e4584887ac5985ccf569fe9ae1d"],["/tags/免费/index.html","0ff40df2114bd910860afab8adb663cc"],["/tags/全局管理/index.html","63f67f4f59f7181be01c87f0b4b9a183"],["/tags/升级/index.html","4e045cda7addadd1511eb6badef29f5b"],["/tags/图片收藏/index.html","348b2831bfcd596217049b58ba7518b3"],["/tags/域名/index.html","f4aad895f5a3c521c0fbbc9cc97e72f5"],["/tags/域名续期/index.html","c1f69b11bce5715bc57d9351e9838bf0"],["/tags/富强/index.html","272fca174951842b7f7b53749f95533e"],["/tags/建站/index.html","8f5e27dc90cec14f9552d757e1862083"],["/tags/挖矿/index.html","4a9da508f0a20b7be402eef4498a60ab"],["/tags/搜图/index.html","43cb4587f3e16a97e9652eea48fc9ff6"],["/tags/白嫖/index.html","6aeb0e37670827bc9daa6301f98abae7"],["/tags/目录程序/index.html","74a3d3f730cc508835765886d23671bc"],["/tags/离线下载/index.html","2e89835a7b4101424eea5bb9fe55d9bc"],["/tags/自建网盘/index.html","b96e1d4c5d7e093d0734d23bb4db5fb7"],["/tags/自建网站/index.html","b4902d3680b2a8016623d07ebeb837bb"],["/tags/虚拟空间/index.html","0a5c077f6e7c0ab8c73fe59320fd42a4"],["/tags/转存/index.html","a593b1871258eb6826e1d1197675025a"],["/tags/随机图/index.html","d8d630264e72c51e684ccb9894aa0830"],["/tags/随机图片/index.html","f9ae3a3f859bf157525d1f2e6c3060b8"]];
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
