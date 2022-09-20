/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","fa7b52dc5dfbf91700a37494ee9fd669"],["/archives/2021/11/index.html","c2cab49bd1f98394657fcc9e25c1f727"],["/archives/2021/11/page/2/index.html","c9bfa76b3d6affbf2fd00d500f9a3b50"],["/archives/2021/12/index.html","c518cd9c517495313ff276748cd92df2"],["/archives/2021/12/page/2/index.html","7bda406c39c8a98d3839262a8c5ce175"],["/archives/2021/index.html","0aa54e8152135206455a2fa8384db986"],["/archives/2021/page/2/index.html","c783e487ba2b12f62cef66199a50ad13"],["/archives/2021/page/3/index.html","dc9ec2706eae7ba878dc48f24eeb37b1"],["/archives/2021/page/4/index.html","2e6f8fcda9dcb08cefb11d7a499ace91"],["/archives/2022/01/index.html","9c508995281c23bc06953cdf940132c8"],["/archives/2022/02/index.html","570b102f0009a9ec04136868364a412e"],["/archives/2022/03/index.html","b9cab7745d287678996573386bff515c"],["/archives/2022/09/index.html","f74f0f04426f40f21da7cf3dd5a40f77"],["/archives/2022/index.html","5bb3e7e23c343e141b8775dfd171146f"],["/archives/2022/page/2/index.html","03a10049a41f46aa2bc911a3f7298b6c"],["/archives/index.html","c68823bfb32c4a3ab9eff184956cf579"],["/archives/page/2/index.html","003c0e621addb6ad1abc9d19fc863a1c"],["/archives/page/3/index.html","3bfc24d1afa3bc7a08b7671acffca48e"],["/archives/page/4/index.html","5571fbf71a6d35a45fdf7ec6b6a8185a"],["/archives/page/5/index.html","15ff6cf769d4454c777a2d8dc8e03e10"],["/categories/index.html","47cd67dc3ddadbc516818d2dd0b8f34f"],["/comments/index.html","1a40071c3859b44f8561d6f0763447d5"],["/cover/index.html","21c47325d037d474477cb0c535dbbf3e"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","924924c1df89b5231e356f02ec32a1ef"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","271f3efd355c56cb21f615827cf88a04"],["/page/2/index.html","af6222d69de9992f575c87f389c4ef54"],["/page/3/index.html","879266d9032b74cab9ddc119a75dce19"],["/page/4/index.html","fdf96ced99f0bb79a666c64aa0b3f3e2"],["/page/5/index.html","923d9beddfbf4c0801f0a24c182fb09f"],["/posts/1/index.html","cef9c7e250c589e8cc6b1af4cc5efd74"],["/posts/10250/index.html","b7e8e3ae8f0e1df72d3a72046ceb9752"],["/posts/11566/index.html","3d503543628a3f4f9b961db64d06a0a2"],["/posts/11812/index.html","0b068b7831ebb9f152f0a28a8fa3c396"],["/posts/12811/index.html","9e21df24e85b72b7816c8eb714107b26"],["/posts/1647/index.html","5262829cb875d92d9fdb9171d0edc6c1"],["/posts/17/index.html","8138cdac4d364a664762e424b920b84d"],["/posts/19914/index.html","94fc3ac4adf89338c93ad2751406b719"],["/posts/20777/index.html","aa38687fb1dc6747ed5202b9ca07194a"],["/posts/21874/index.html","08f162b8bb0468baa8b41bd65bdedf9b"],["/posts/24608/index.html","a42823fb44a55a007f0c53b576e57ad6"],["/posts/25781/index.html","f39b226a3cdc99288f9b6a0d53943a16"],["/posts/27099/index.html","aa0c5c71512ae55d60ea95ac1b68c314"],["/posts/27776/index.html","3b773517d25a4ed4b257de094b1230cd"],["/posts/27817/index.html","9c1d123efcd3f74808344d0989a9aa55"],["/posts/29095/index.html","7d7ff227c092068eedf1863848b4abbb"],["/posts/29839/index.html","0d163f5bee21b725f2d6fee497166c82"],["/posts/34183/index.html","3bd98d478aea7ba7bdfa1bcf1001ee46"],["/posts/34536/index.html","351720665cd4a0f62b16ecfb814b9b7b"],["/posts/36110/index.html","0fc1b0e53ac32558ef5b67c567cbbe3a"],["/posts/36978/index.html","ba29f5c965c5d62d6e6a8f611901b2f7"],["/posts/37060/index.html","ac35d98a86bfd603ec5f1a27de957c0d"],["/posts/38125/index.html","79679527846971ce705a57bca04e7786"],["/posts/39413/index.html","e2c52f9275c59e4568c564e2e3285311"],["/posts/40/index.html","5371ce8ff0a5a16d1294cb623f278b9e"],["/posts/40759/index.html","d5ff33feec8edb7991591769061a78ed"],["/posts/41157/index.html","4b9eb6a5483ffdc1e9d0da22b400e9a2"],["/posts/42327/index.html","a9450902bd50eb000163b68f0c7d22c8"],["/posts/44924/index.html","1f76e90cbd26dd6f142687f9654aebb5"],["/posts/45698/index.html","31906c403507c1f18341dc87a9599d26"],["/posts/48040/index.html","6b847e78932d4c07a25db19c95431286"],["/posts/48470/index.html","5e66a924d846810ea280b32a4845b7bd"],["/posts/49122/index.html","8ee6726e0606bf972e529293a235cb85"],["/posts/49370/index.html","17215034f4ccac4618aace0aebef6fdf"],["/posts/50467/index.html","dac02c710bb0ea65f80d6d530bcc093d"],["/posts/54280/index.html","17e1def73371a4c001161d1d98955b99"],["/posts/56727/index.html","dd8a9445b71a681bed3a1a96c5d7332e"],["/posts/60038/index.html","f2c4665fa71936cc8c6da151cd2eff65"],["/posts/60039/index.html","f9d2f72834c601c043883eb0da89ed3a"],["/posts/60166/index.html","61fdecbd8d1d06f04d4532db0503efca"],["/posts/60716/index.html","72508c65ce7ffa9144db8885736a0a7b"],["/posts/60766/index.html","b2d09915943d9a3e6d308fa6685f82b1"],["/posts/63489/index.html","631319ecb634a904d7499f1219113a37"],["/posts/undefined/index.html","a6c4f2f4f699281f62600afe2eddecbe"],["/sw-register.js","cf6ee20d2b70816b0352641cbd3302e7"],["/tags/AAD/index.html","f6b5d948d1e825c6e7a04034d5bd971a"],["/tags/Aria2/index.html","4f6f18127652df0b9cdfbce81f03ec37"],["/tags/AutoRclone/index.html","3d7b728c8dcf8adc0c1e5c478e479842"],["/tags/Azure/index.html","1dd16abe81d0711d505856e62a7cac0a"],["/tags/CDN/index.html","cc4f803fff2e2f3601fdcf6b5734b6e8"],["/tags/CDN加速/index.html","023448f964b8a2e313abbd2c937b72a3"],["/tags/DD系统/index.html","a0bd929c6a8887bd94143a1c5cf65410"],["/tags/EMBY/index.html","c5c4215fa87d643eb7aa72f7a86b99b1"],["/tags/Github/index.html","f89d79ca2c5ed1ee5361e26648300965"],["/tags/Okteto/index.html","30c60badb1141001a641ed526350a6fb"],["/tags/Oracle/index.html","d9b693616c66a924b04f904c66d45a91"],["/tags/Pixiv/index.html","1d57105827df6d674da48be47fa32e5d"],["/tags/Rclone/index.html","64c045503eb37dd8251fe579e84edac8"],["/tags/VPS/index.html","12bc379a42e68187662e49517ad0c491"],["/tags/Vercel/index.html","f94d24c55c0354fb939c3e92c6219ec5"],["/tags/cloudflare/index.html","bcce171d02c0f390add27b7bc014989b"],["/tags/freenom/index.html","6be9f339ceefc573064539db69dc87cb"],["/tags/google-drive/index.html","d7277f9e9f9f3ab3ac8e4f5bd38be180"],["/tags/google/index.html","a86b2687af2ac5c3bf150200a5c1ee57"],["/tags/heroku/index.html","69472eccc14d7b6134f9f82a830b6abe"],["/tags/hostloc/index.html","04f943adbb72106d0a6d52bb1eee0938"],["/tags/index.html","0db6c80fef61c8bbacfd9710f19fdad5"],["/tags/onedrive/index.html","52125a340c52adee683fcbecfa1b8e76"],["/tags/telegram/index.html","63768945f8755f1c9c82586769b9e327"],["/tags/tracker/index.html","439276142458422c20e4046a4f895693"],["/tags/wordpress/index.html","a495894458737fa759a72db060a5cb5f"],["/tags/下载/index.html","beabbf9fa89542dcfec0ae2154beb679"],["/tags/免费/index.html","7884a808b443a2124c4421e6bb8c69ea"],["/tags/全局管理/index.html","b763a69b6005b5f25e1186f3335a7ab1"],["/tags/升级/index.html","e743783e0f22efe89a84705b1d1f4533"],["/tags/图片收藏/index.html","7f946a196b85b74b88813d39f9e4cd77"],["/tags/域名/index.html","cf10a0160619c75d5cd7bf140d500477"],["/tags/域名续期/index.html","160e175bc37dc386ebe6ac44e91062f5"],["/tags/富强/index.html","8af3b7f1e1cbc29a6199803907edcc72"],["/tags/建站/index.html","41f21ec2d78a9dc8d25936d04f2831c1"],["/tags/挖矿/index.html","4b9ab35d6d7eccb71dc7f406b7cc13ed"],["/tags/搜图/index.html","595f9b0c08f5edd7861c420faa977e1f"],["/tags/白嫖/index.html","77b094a03e3e0c512ebf26ba64e50f27"],["/tags/目录程序/index.html","efd1fcedc8f88749eda4baff3c17cfbe"],["/tags/磁力/index.html","8677a473d399a8e719e48daf61b1435f"],["/tags/离线下载/index.html","b60ad083a6a6a0c6774f7c9b02c38477"],["/tags/自建网盘/index.html","d14ce20dc3f6a7c927520440547829d2"],["/tags/自建网站/index.html","afdc68de754299f6e04cff77d12512f3"],["/tags/虚拟空间/index.html","a4fe935f65d1246832b60f7e86cf71f6"],["/tags/转存/index.html","aeec908ac225da62995870e91e69481c"],["/tags/随机图/index.html","adc83a97d2eb1dd8833a6cdff068b277"],["/tags/随机图片/index.html","b88dc6fbd818cd2eec29864a9340b624"]];
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
