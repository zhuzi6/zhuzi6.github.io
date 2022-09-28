/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","d58b5378678602c915e67a093b7d44c5"],["/archives/2021/11/index.html","8d377cf4c6898e114a1702763bad3717"],["/archives/2021/11/page/2/index.html","02178a572e27e54ef3a97df2d74c5ecc"],["/archives/2021/12/index.html","6c0c68201e9af595cc8f66cbcc576a45"],["/archives/2021/12/page/2/index.html","714b92bc624208d3ef2c92646ce4c960"],["/archives/2021/index.html","c1a16d1b50d04a7e809e6c09a309e1f4"],["/archives/2021/page/2/index.html","c51e0f15dbef876be3e0f56bdf4b86d9"],["/archives/2021/page/3/index.html","ea996f4d2f1aedb2461500ce81138e3b"],["/archives/2021/page/4/index.html","4d14f4cd4c6ca814ad205572aa0349d6"],["/archives/2022/01/index.html","e9a86b46d9a618a7e711772065e36f84"],["/archives/2022/02/index.html","6c5620396b0908a7e001361d2a812632"],["/archives/2022/03/index.html","cde6a5c3e56508f8a4ca4ad55acb3ad0"],["/archives/2022/09/index.html","bf2ab6de5c848b8d3dd1850ea4fe097f"],["/archives/2022/index.html","5b986ec1084fca9695ac9bdfac15b493"],["/archives/2022/page/2/index.html","b1922edca49851f580b309b279f40ecd"],["/archives/index.html","282000b31507acbcae5acd3024e8f3d7"],["/archives/page/2/index.html","08a5c23f486da055c6c44ddf311022df"],["/archives/page/3/index.html","c42f1558dc5535535ecb14a1d8957c1b"],["/archives/page/4/index.html","1bcb6592a2034104d0ac7802c4cb63b1"],["/archives/page/5/index.html","9e1787b77f327ef8bcfebd97017d2c02"],["/categories/index.html","567e49517a72cd10fa341d1c67bd381d"],["/comments/index.html","7e4daa5d266e87e7f638752346492d2b"],["/cover/index.html","31f56343f6d8823479adf9a120f6cab3"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","37ef368b98c2d4b633e67345b546e22b"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","797326953dbc93db026dc69c024892b2"],["/page/2/index.html","aaa0d7d9467d27bc2377dada06bc454a"],["/page/3/index.html","db26e3673fa70e585380b5f5b6596c7e"],["/page/4/index.html","59dcd969b40141d8eaf7f7788e939864"],["/page/5/index.html","559c9ff120528b81256cc09ec4de661d"],["/posts/1/index.html","466c78d9dadd32a055b154546b5276bc"],["/posts/10250/index.html","0b9da0aa90ed48847946c26c8a434daf"],["/posts/11566/index.html","f6107f1450f9bb055368bd0b12fb562e"],["/posts/11812/index.html","dd9f4523a93c19b1a46244fa4f64a2a8"],["/posts/12811/index.html","5a1d865530470edead886c170c4610c5"],["/posts/1647/index.html","0ad32ac6fd7e45aa2669b88fc5b72142"],["/posts/17/index.html","00a3e628574b1cbabb1b3429327b3e49"],["/posts/19914/index.html","e975504da7af3d023fdb12e22583322d"],["/posts/20777/index.html","59873ece5c04d0f48f8406fd680b5223"],["/posts/21874/index.html","841828078c77e8a6653ab50b9729bd5f"],["/posts/24608/index.html","a863cd61637ef1f7fe5a0f8a6d009074"],["/posts/25781/index.html","7c3648240ce08c0b476eb7059915186f"],["/posts/27099/index.html","69fb0d2a2568bb9ec1abf1b704f6e69a"],["/posts/27776/index.html","641580a0119df46c29ac7b917350ecc4"],["/posts/27817/index.html","698799c08f98ae3f8b9cb98d77fc6dca"],["/posts/29095/index.html","af964babe3ebedb952ba0ec85dead2bd"],["/posts/29839/index.html","fd939739e19f46f34b481704b99a2c72"],["/posts/34183/index.html","b6e0626dc9f5c5830ccf8fe990fd459c"],["/posts/34536/index.html","263ef406b99e1555834dc3f9f58f28b8"],["/posts/36110/index.html","17646b2fbb6f8217f2a6e5fb195a1f30"],["/posts/36978/index.html","35f9cf31d3a4c90f020809f9fa9142a5"],["/posts/37060/index.html","e4da8b844147dacb182fc0dad8067676"],["/posts/38125/index.html","322d566f872b65d6f559e78b020aec04"],["/posts/39413/index.html","37c54b2a1d40c527947c119437e0cbf8"],["/posts/40/index.html","b1d0922e0691f56859fa75ac02e9097e"],["/posts/40759/index.html","b21a9cdddcc4c813d3a50d15cad8ef6d"],["/posts/41157/index.html","f943d4f75c5be71bb0ed8379b23b809d"],["/posts/42327/index.html","daa9639633af6712edde71e13e8e1183"],["/posts/44924/index.html","f99b93874e0c35157b1f7a93655c00b2"],["/posts/45698/index.html","22b5756dba32a2a20f4c63b70e4a6996"],["/posts/48040/index.html","00c4545177429a048239b24a72b94ea9"],["/posts/48470/index.html","7afa1568ecea789366715d9b2dc96267"],["/posts/49122/index.html","454ce8a1aa63937003f8bd37e1d827be"],["/posts/49370/index.html","06b7139ef2a7f0dbf29fc8b74e58644b"],["/posts/50467/index.html","df4d41e89165de0094734ed0d80581d6"],["/posts/54280/index.html","2227eb21e180f14f2e0cc3a78bcfe7b6"],["/posts/56508/index.html","a7a47f3ca93a71a024c531013beab061"],["/posts/56727/index.html","4e2595b9cc74cb37da23062556918e5b"],["/posts/60038/index.html","a5b01e93c5c0ac583c4cc5c1a0293f93"],["/posts/60039/index.html","4824f929b7ee8560dcd72830f4bbfaee"],["/posts/60166/index.html","e6b267bcc79fdfa42d25c2fb03c9d3e0"],["/posts/60716/index.html","9f037982ab99bf68d43dd23635e8b84a"],["/posts/60766/index.html","003bae18a9e3ced2c8b9fdec6067a5dd"],["/posts/63489/index.html","7be76d1bfd8d60b7b80791d6642f7da3"],["/posts/undefined/index.html","e850df7ba3d85b00dadc8d396a229879"],["/sw-register.js","c22e2182b2076c1a5174b210402f5be4"],["/tags/AAD/index.html","a1a5f64ee52a4b056000226baca160a7"],["/tags/Aria2/index.html","bf4328ba1024ec29900fb04a366c1171"],["/tags/AutoRclone/index.html","bef9c8f42babd5290c2c6a99ffc2098f"],["/tags/Azure/index.html","8e905a9726146d36ec63428fbfe3dd9b"],["/tags/CDN/index.html","17ca0d57b7dabe8fc194ab2fad35338c"],["/tags/CDN加速/index.html","8834de3471879acbf79869889a9ccb11"],["/tags/DD系统/index.html","407ce62bcd84ff5eea4f9ae7f9bd2516"],["/tags/EMBY/index.html","5f5552488ed64c00ab5218e17dfb170d"],["/tags/Github/index.html","77dba9f44f380943fc4f68234691261e"],["/tags/Linux/index.html","e1be06f953c714337f06081256e94b12"],["/tags/Okteto/index.html","a15bbbceea36734cc8cad51aa932fe2d"],["/tags/Oracle/index.html","de44883b0b1df3679f9df4c4d62e3f73"],["/tags/Pixiv/index.html","7d596920b757947ab805e92f2d5f9b5b"],["/tags/Rclone/index.html","7c46ecc2f036b10bbd56f2cd5a9ae772"],["/tags/VPS/index.html","d165097d075fdd7c83246244c8e7ab7d"],["/tags/Vercel/index.html","b225c6afb9ce10ac4e9a261ed4b1913c"],["/tags/cloudflare/index.html","5ad52502f8ec892e3748e4030dd7b941"],["/tags/freenom/index.html","f207c8e561d1d4261b9cebad4c001fc2"],["/tags/google-drive/index.html","e25545210fbb4732e73308b128a07b2f"],["/tags/google/index.html","a3419c29a7cfc9ca2b804514405e01b5"],["/tags/heroku/index.html","f126298cb75507d773db7730b6465b88"],["/tags/hostloc/index.html","eea084fe36dd29ee9961073b768cad59"],["/tags/index.html","cd0deb206543d06454dbd8717580680e"],["/tags/onedrive/index.html","93523bbb21d7f6d360f4beb503943ca7"],["/tags/telegram/index.html","9fb062f6b3b6fe5cc5fdd084d63deafd"],["/tags/tracker/index.html","b860d555740de1bf2f47d8a78e26372e"],["/tags/wordpress/index.html","689015d6f3c5a82b16baf9c591e43d97"],["/tags/下载/index.html","19d6ce9c8040f63b047a1bf25078c4f1"],["/tags/免费/index.html","7e62de6e115c99ec22975c24d6d9ea54"],["/tags/全局管理/index.html","8dca579f1efa1c87ed8e3c1ade7c3bc5"],["/tags/升级/index.html","bfd7fd53f68aa6c2ac9218c6c5eb0172"],["/tags/图片收藏/index.html","ce0b2c87b1e19c57ccf711f0669965ec"],["/tags/域名/index.html","c9c50c966338e6e60ffc72e0ba75875b"],["/tags/域名续期/index.html","b731723f59774bb266370ea701f1b0bb"],["/tags/富强/index.html","77cd6780e4236c7225b97b168530f79f"],["/tags/建站/index.html","90d81a165ebda2dd6d946416a05e945e"],["/tags/挖矿/index.html","744d39a66a53b06d96aa66153f548465"],["/tags/搜图/index.html","be70a02b76f2442b6ba25e2d58b4b170"],["/tags/白嫖/index.html","dffd78fc4643b4871032d64d7a50d40e"],["/tags/目录程序/index.html","0bbf27dffd2f73c266abd972f8a1f69f"],["/tags/磁力/index.html","e7d2e75b7a8fc95af6a43acb0800e66a"],["/tags/离线下载/index.html","359b206df9cf79fc3376f3bae98900fe"],["/tags/自建网盘/index.html","5b10edff15807fcdb3a58ad39c0d56ec"],["/tags/自建网站/index.html","f2b62b637846c2efdaeb847edca1b72c"],["/tags/虚拟空间/index.html","69b7d8298ff880ed453f173a78efb1db"],["/tags/转存/index.html","c6fdb2ab8e68bbf988734f431dc19a73"],["/tags/运维监控/index.html","75b7683bdd41674a67806377a1d97e1d"],["/tags/随机图/index.html","5dde1590a9d0158185a3225d8d72acc3"],["/tags/随机图片/index.html","943e00b758c34d2e5087720620350153"]];
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
