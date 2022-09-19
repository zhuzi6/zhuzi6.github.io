/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","7b26c30a990067217fc6133c6924a1cb"],["/archives/2021/11/index.html","6d332564691d36826c3c660c77e05388"],["/archives/2021/11/page/2/index.html","eba418d79bd4820eff36fdc7032da735"],["/archives/2021/12/index.html","933c2bebdb513b786f5e625ac20dd72e"],["/archives/2021/12/page/2/index.html","aab21f5fc5bb986020f64afb76ddc43f"],["/archives/2021/index.html","16a1575d9e09c76364fce6e4e0cf8188"],["/archives/2021/page/2/index.html","6b9e0386a13b8e0a6e98d92a14d2e76d"],["/archives/2021/page/3/index.html","703d8a9d57bfc35b4f55b55c5c28f66e"],["/archives/2021/page/4/index.html","6eb43d4dbf962db1097a5d84583bd3a7"],["/archives/2022/01/index.html","99c68eae8c1eb25d668d1b9890242183"],["/archives/2022/02/index.html","d7e7560a69cdf78b913bad20c7c4f677"],["/archives/2022/03/index.html","e0d6eced4a66fbe99d55063da3891e88"],["/archives/2022/09/index.html","44737daccdd441cf0d7226f79db7a828"],["/archives/2022/index.html","397adc30cfbfabd296f7da3d51c035ec"],["/archives/2022/page/2/index.html","bf4de7324dbff6241c8ccb3670933eaf"],["/archives/index.html","62cac5d1523bc82dd0fbb87662516717"],["/archives/page/2/index.html","21b8fbbcd1448ece89367fa81ae3a810"],["/archives/page/3/index.html","265dbd6a5fe8881297f96f2fb10abaed"],["/archives/page/4/index.html","147b7fe89b4a7ab2f4fa1c12953012cc"],["/archives/page/5/index.html","7bead570bbd09fe98da126ceb725f4fb"],["/categories/index.html","da5363d1fad5a3d67f837efcfc00c6f7"],["/comments/index.html","34d48cb90244833f5e9f6fb46cf6a466"],["/cover/index.html","735fb39aae178dba867d761fa6ed67bb"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0ff0b2e6b78cad290589f9f878a568b0"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","6006b08a583d5f2ef79813b907b6d6b9"],["/page/2/index.html","7473d419fcb1d7020110c11f94257189"],["/page/3/index.html","bd27f83bff0e0c974b2c57dcb2fd9afd"],["/page/4/index.html","9c494c22fd780bd7831e9b571f99dcfd"],["/page/5/index.html","1f411b9edc2fa64e77b3d3d8cb9ec699"],["/posts/1/index.html","a45ede057c055d9ab46902429faf2df9"],["/posts/10250/index.html","daacc14215b987412fbc66a0031ebe3f"],["/posts/11566/index.html","0b41ddf194386ea8d1b5afd096c8cf17"],["/posts/11812/index.html","50d77af40b770d353ade8442769ededa"],["/posts/12811/index.html","f3deeb7b9c26c3bb68d15f22fe58a573"],["/posts/1647/index.html","3933a04600ad9f7ad083cada916a6a42"],["/posts/17/index.html","e6f1cc0bd4e00cab92d77a1020d1b574"],["/posts/19914/index.html","357df4c06fd0bedddcc82a3cc217d755"],["/posts/20777/index.html","d5db70b75c98e3455a56121cd5fc6ac6"],["/posts/21874/index.html","04015bff67c718bcdfbf35bfd8e6c33d"],["/posts/24608/index.html","6bbe0030a333f56bd5a3a3159c4e8cab"],["/posts/25781/index.html","a6c4b6c3d6c282d75b751fb0f3f03a0a"],["/posts/27099/index.html","01f36820f4fdd1939bfffe24c0f53750"],["/posts/27776/index.html","6ea6932f4b60811159d36588c905ea4a"],["/posts/27817/index.html","bf615619fb2eb07a06b8d62e043d15af"],["/posts/29095/index.html","857d7801d2c95bc946a71eeb5b5a9f69"],["/posts/29839/index.html","b4407ac67afb62b35bc27d7bcc051638"],["/posts/34183/index.html","2fa13c8fbbc415eaf06bf7b614184ec1"],["/posts/34536/index.html","3e89a8bf811d7e73edae652390852589"],["/posts/36110/index.html","e5df8a94ed0aa151b9979161299b24e5"],["/posts/36978/index.html","f7c6021429828d475215e672df18519e"],["/posts/37060/index.html","b468ef61ba422182cacabb50334e6345"],["/posts/38125/index.html","c661407790880c40f71dd1eb0d62f75a"],["/posts/39413/index.html","8a37a00ee51b9f271ead70e9b04bfb82"],["/posts/40/index.html","3f1b4eb50b321610d20dcba8a3183a8b"],["/posts/40759/index.html","d17f79e35e387366b19069d2aa069dbc"],["/posts/41157/index.html","17e12b8c7e8c23a843d7bd010d48b34a"],["/posts/42327/index.html","e098477a6da59f59f8828439c101f767"],["/posts/44924/index.html","48efd6ad431ee448e86584c8a768b142"],["/posts/45698/index.html","b744250fdfd6d444ec72fcc462e73199"],["/posts/48040/index.html","017e057bc71b8070058653df4c777779"],["/posts/48470/index.html","e288885a107273e0bd1a14a57f805995"],["/posts/49122/index.html","032b6bff6b798fbd2eeaff62aca81023"],["/posts/49370/index.html","b26663d56df8e3ff17dd4d08fea5aa61"],["/posts/50467/index.html","862465ba08f22e386d5f09ded371dffa"],["/posts/54280/index.html","29420294432f23e5d8ec0e3dfcd27669"],["/posts/56727/index.html","c95b5e9858029b5c8f0baad10b33aae7"],["/posts/60038/index.html","090fc0b7a15f32fd7093b0d1408badf7"],["/posts/60039/index.html","9a39b034f1905912f75ecd1ade8bf875"],["/posts/60166/index.html","29a77421f2788d44ee5b96ee7d21f68a"],["/posts/60716/index.html","8f52b6b068baa746586c27c78469017c"],["/posts/60766/index.html","4210add1a64ddbbea80d7e85f8ddfb80"],["/posts/63489/index.html","f00ab4fb6d3ac57b02f81e8a7948335a"],["/posts/undefined/index.html","50ae18ec2443d7cba227bbbc7dc11184"],["/sw-register.js","b580b822346edc15e724a2c8d99995e7"],["/tags/AAD/index.html","6a4feb7e358fba2f42f7564f322e3ea7"],["/tags/Aria2/index.html","f8e83875596e44a0f9c106b64296cee2"],["/tags/AutoRclone/index.html","46329c60bb3ce41a88208e7bfee0903e"],["/tags/Azure/index.html","47146902711527ffb5b3932041059b3e"],["/tags/CDN/index.html","f52376a859fd297f235cb9c1c75e3a6d"],["/tags/CDN加速/index.html","c21b7f7c06e6e6d262151c70c9ae3140"],["/tags/DD系统/index.html","2b84d1e4caaa355734028ca6ecb105c6"],["/tags/EMBY/index.html","da8a9912b51845e51a98eadc8689f9fe"],["/tags/Github/index.html","4cbd423b7ac57ee7f7ab2d5c72e56e18"],["/tags/Okteto/index.html","2e307cdbdc40265df30903421a1d1b7c"],["/tags/Oracle/index.html","a61f8264303eafd42976f26b9f492574"],["/tags/Pixiv/index.html","4d1e7cd2fb95e19deeb57090b6a8ce16"],["/tags/Rclone/index.html","37a16016df61c32c12a75257e1a7f07c"],["/tags/VPS/index.html","cf2de00b0afc36aa749132fc909534a7"],["/tags/Vercel/index.html","224930ff3365cc94cd1ea9cb07010a4e"],["/tags/cloudflare/index.html","de43997c685373729c899da760c53c83"],["/tags/freenom/index.html","b57f3d7ed26df4d5e219ca4386fcdecc"],["/tags/google-drive/index.html","216996d764a27562c5864e1445a633de"],["/tags/google/index.html","92452e2ffac99da9b2d6995b43dc2673"],["/tags/heroku/index.html","943a5ce09410989bf2ea5b83f714563a"],["/tags/hostloc/index.html","1b9c6074fe0c8f55b6499b685cbf88e1"],["/tags/index.html","91be08ac2a4b232a0f07c0a8e513d871"],["/tags/onedrive/index.html","e0cba7865b855d953842260c5dba5cb8"],["/tags/telegram/index.html","3c4c40acc589d6c31846dda69d359fc5"],["/tags/tracker/index.html","0a3e04d5b853b901970c97853febe132"],["/tags/wordpress/index.html","496b2d0f398d853f081f9dc95d6153e7"],["/tags/下载/index.html","fe1d0544aacfafb16f6e71a0e32d2665"],["/tags/免费/index.html","06ba188c0b54428e025fc29e89620cf7"],["/tags/全局管理/index.html","b0516ff9de34afe73553690559ea91ea"],["/tags/升级/index.html","fcbc255b4ca6c68c3f87c2971134f67b"],["/tags/图片收藏/index.html","52736ef0a86d82833e578bfb904d929a"],["/tags/域名/index.html","ad4ea5b4c2314161dfee06e606724bfb"],["/tags/域名续期/index.html","54e83afc0ab6d1da850e90de03ca396f"],["/tags/富强/index.html","b780d8f968d63e831b331d22542d785f"],["/tags/建站/index.html","3f6e9d9b9766e15733412c120d71714a"],["/tags/挖矿/index.html","185fee4bba6c62535ed6328b4a21458b"],["/tags/搜图/index.html","99d57d56818a04a0e1b28f63bb07ee5e"],["/tags/白嫖/index.html","b943e6bab1f6b80b1d6cefcf4429cff4"],["/tags/目录程序/index.html","6036be0ad91d37a2a0a48e311820c514"],["/tags/磁力/index.html","729a2c96e329081de1a9803d859e1f7f"],["/tags/离线下载/index.html","87baf26c4f99543e04ca3c38b78143c6"],["/tags/自建网盘/index.html","e4f731f35e3690c9f1cc1ea441b33be1"],["/tags/自建网站/index.html","ae93214adea2c564cfe3ca98db4f2399"],["/tags/虚拟空间/index.html","1c822a6be1bdd95a37a22141800a3c56"],["/tags/转存/index.html","1500d02a0babefb41f3f37fd1d9f20cb"],["/tags/随机图/index.html","0692472f6f6939d2919a2adf951292ff"],["/tags/随机图片/index.html","86214ec3d05539ff4f930c8dc6c3e639"]];
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
