/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","75c64c518e0ea0752a59c5121bfe2d7e"],["/archives/2021/11/index.html","bec4e49e33eecdf4e439d2db9fe3d8d7"],["/archives/2021/11/page/2/index.html","0dd95dbe485e56fe416ed62eef26291b"],["/archives/2021/12/index.html","ad2ddb88d38f3eb170ac7473c083ce5a"],["/archives/2021/12/page/2/index.html","a0a71b7f14ac57f8412228dc5e594bd9"],["/archives/2021/index.html","eac04f8a115a0c3f388cc02483d8772d"],["/archives/2021/page/2/index.html","26ec528b2a857f6e53763f38211f0931"],["/archives/2021/page/3/index.html","a483e8d7cfbdfdb66b15f8610d4c66ae"],["/archives/2021/page/4/index.html","9f7e019a7b6e9afa3fc9908a417b6461"],["/archives/2022/01/index.html","3b8082fda884e3d1a1abdea41f18ac76"],["/archives/2022/02/index.html","598b166292fd1eb3b1e5dce9ac63a870"],["/archives/2022/03/index.html","f5fae2b6b9a0ab2fd557166d2a5280f5"],["/archives/2022/09/index.html","f05354e28f083a5ce0dba3fa6347906f"],["/archives/2022/index.html","001929dc5480712f33289427b25c9343"],["/archives/2022/page/2/index.html","85181ac5dec677d1bd90f91bd9ec6ad0"],["/archives/index.html","43cfa890b5f36027f9d9cad266f723bd"],["/archives/page/2/index.html","9baa894a6e7f22d68ba35781c8f94274"],["/archives/page/3/index.html","bd417f5e30c15cff8a847f2a9f316615"],["/archives/page/4/index.html","590c0dde7c66e5e526bfb14e4d48d0c1"],["/archives/page/5/index.html","e68ef6eee571f8160fef9a4f18c6eb43"],["/categories/index.html","859e4db3c8992f0e99262bc0a13dde3a"],["/comments/index.html","33a6620fb727e1ad7c37db09b2fea63a"],["/cover/index.html","8cfc8ab5f1b8dcbce0eff89dece15275"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","659933624cfdf40768e7330c725440c1"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","705cd25adbfc9e22cbd7b0613fc7881f"],["/page/2/index.html","918c040ffb5e06552f61c7168c0d0c17"],["/page/3/index.html","741943747e334575bafb13a61f08132f"],["/page/4/index.html","64fc11fc9d35d99563e0f5d7d03e7c98"],["/page/5/index.html","e22d6aa653a4addb578a9d47e9565c22"],["/posts/1/index.html","16815421ec762edc364b01caaa98f9aa"],["/posts/10250/index.html","2c60bb866fadd2eb56ebbcaae387097a"],["/posts/11566/index.html","17de1e3e79238ec97d6a2de80a85da77"],["/posts/11812/index.html","3c80687692d32219f1503bc4187326ce"],["/posts/12811/index.html","900825a7be5ac0350e764a54d7fa8044"],["/posts/1647/index.html","5912ea276040b7c5afc27d19fd6c3c51"],["/posts/17/index.html","db59fa7c2c7a4e938aea99ad300fa1b1"],["/posts/19914/index.html","51d72f19e3182ba5fa85715736a5112c"],["/posts/20777/index.html","7dd9562fa99912ce1922b1b9c5167e46"],["/posts/21874/index.html","4f6695560fd34afc5420ffa37c3e12b0"],["/posts/24608/index.html","374876fbb72bb3f82de8d51821bca4bd"],["/posts/25781/index.html","0687b72bd46a1f65b830fc8c0a49aff3"],["/posts/27099/index.html","30a41eb7bff2a45588a1f900da35acd0"],["/posts/27776/index.html","814c2f46da7f4a6acfc0b111fb69b8ad"],["/posts/27817/index.html","eee7a9d75a77c3085796b279c199178d"],["/posts/29095/index.html","03416ec6575836c46fa4743a72d243b3"],["/posts/29839/index.html","681828c41f7d48086f03a71864f52fce"],["/posts/34183/index.html","0a86ee29f5629631910fe304e7535484"],["/posts/34536/index.html","da328cf12f7115dd11961cbc4b673949"],["/posts/36110/index.html","12f5cac399f356abb4a681b340fb00d9"],["/posts/36978/index.html","c61534a9a62d948cb58147e2eac301e0"],["/posts/37060/index.html","253f57d36eaef0fce01ccb5073e9f32f"],["/posts/38125/index.html","ec7a6036b106c7afe2d0856f914e4a2a"],["/posts/39413/index.html","b67a5f1657a27892dd3440a8bec65c82"],["/posts/40/index.html","8c4c1dab87c2a17781a5b5a2b54fd1eb"],["/posts/40759/index.html","f4078f531562f84210f8526c28dd1251"],["/posts/41157/index.html","e551b4c0ff52d288d9d0e203cef92220"],["/posts/42327/index.html","4ff7ccbe93bd7d2d233387d3fe6c390b"],["/posts/44924/index.html","eb8277d0b3e4c35ab55cbeb0010c965d"],["/posts/45698/index.html","3e5c1086ab151d3fd48e7ce7ac639fc1"],["/posts/48040/index.html","81cc60071e78cf52658a76652ce79026"],["/posts/48470/index.html","fb14f974d3bff98ebc115feebbc75a97"],["/posts/49122/index.html","7c6d57d965c68d44a331914f68ce4470"],["/posts/49370/index.html","f23775f472cce8226affb2e7a5d48675"],["/posts/50467/index.html","540f8ecb3918142991b8cc473597fb98"],["/posts/54280/index.html","c46842a5882813e0c5f42de2b231d9a6"],["/posts/56727/index.html","06fe9f2828af6ad969cf068956094fab"],["/posts/60038/index.html","56d88d4eceae122c4052c0059a0bcf0d"],["/posts/60039/index.html","ee67642f14de3c355a8071541cf13504"],["/posts/60166/index.html","69aaae0114ae04fc0427927bcd3368a1"],["/posts/60716/index.html","639411d76f0ce84230c959c2cb547e6c"],["/posts/60766/index.html","5768b28f9cd840ee650961350828d02c"],["/posts/63489/index.html","7ac437e6589ee188d3273a490ec93753"],["/posts/undefined/index.html","4d274c3eff095895a4c7efb770ce0063"],["/sw-register.js","58c3294c1ba1342c44f3560bb3e8d689"],["/tags/AAD/index.html","f2821909ca65430e7aff32f825700730"],["/tags/Aria2/index.html","bcc3680536c93e0617a05bfdcb0bff64"],["/tags/AutoRclone/index.html","b0bcdc80d9dda39dde6023e2b3a2e7f3"],["/tags/Azure/index.html","92284b44bf3f2a4826e868cf37737542"],["/tags/CDN/index.html","8e62205d1da2a7e169b06afad5f298e1"],["/tags/CDN加速/index.html","1ed3a7d5d9e4b7451d94f314dc2a956e"],["/tags/DD系统/index.html","d78c2cdb16daec589f8410e0a2aa5ecf"],["/tags/EMBY/index.html","a9efd0d54678266457a5f4bf678473ba"],["/tags/Github/index.html","248dbc69eed8ed098bb6ced3fe2ad387"],["/tags/Okteto/index.html","ca1faf70bf386108a79b3bd1415ce3ef"],["/tags/Oracle/index.html","70388cbd75f8b6217d633db6c79ea9ee"],["/tags/Pixiv/index.html","8e074214c97391184cf10805c4ebb483"],["/tags/Rclone/index.html","39c1c495ae88fa195fe6c3dfa4a02b02"],["/tags/VPS/index.html","038512f34f08746aeb60791994db57be"],["/tags/Vercel/index.html","b063b88a10788699c21e0b07a34a674f"],["/tags/cloudflare/index.html","d3e98747a47a40248ab943b5b10ecc0c"],["/tags/freenom/index.html","c7e04e03427098f1dbea9b49b9e68b64"],["/tags/google-drive/index.html","e4a6cb293c4402571e0d625db0260f6f"],["/tags/google/index.html","03afb1c0a1597dd3b1a1308acf50312e"],["/tags/heroku/index.html","a1927afaf3d8d96f114127fba1430177"],["/tags/hostloc/index.html","a46ea01835f58c2a33bfb6296e4e8fd5"],["/tags/index.html","8b14a95704003ec3c56e02a2370cd822"],["/tags/onedrive/index.html","08b10dd121b2fe16c7630ea8725b7ed8"],["/tags/telegram/index.html","3205004aa16473e940490a4bb6450fed"],["/tags/tracker/index.html","dbaaa51f776dcd6792318fa2572ca5f6"],["/tags/wordpress/index.html","dcece85cb9a6449e57cce56edd966e76"],["/tags/下载/index.html","d93de19b58bdccee8153766944e85df0"],["/tags/免费/index.html","5aba67e12fd25f8f82020e697cb569e8"],["/tags/全局管理/index.html","977e55f8d40414d7d90672c0382d7ebb"],["/tags/升级/index.html","b1850d9a8da4868bdbe829e55a683c10"],["/tags/图片收藏/index.html","353f53fbc92a9b8d2c24c5fbad070bc4"],["/tags/域名/index.html","2094834ac54cd629ffbfdde0d1677371"],["/tags/域名续期/index.html","02458df843963b60b925ab2b9ba52bc1"],["/tags/富强/index.html","540c5be9431eb42a3d1994b416c17058"],["/tags/建站/index.html","a1e8a347dec7122616ddfbcb5ff2ed7e"],["/tags/挖矿/index.html","b15ecf5d89d3667868067767c27594c4"],["/tags/搜图/index.html","8bd0df27b2a9652c73d4e87182800b5e"],["/tags/白嫖/index.html","b7fec9c1f1c708754b8e41831abaedf4"],["/tags/目录程序/index.html","97bb4df1dfefe64e2e102592924c53ce"],["/tags/磁力/index.html","0d56d39bdd4d0a2704c94a1447727aa3"],["/tags/离线下载/index.html","b23b3980ba02f2b8ca502be1391965d9"],["/tags/自建网盘/index.html","cf60233513c379f243369f6a48a3457c"],["/tags/自建网站/index.html","ddce6798b71c4f844ae9a9f1fc49ccfe"],["/tags/虚拟空间/index.html","6ebb38bb0a14efd91363bb10f3a7b907"],["/tags/转存/index.html","42724b7e858034f7b6240bf1b4a139c2"],["/tags/随机图/index.html","f8b480f7ca3a48ebdef7875130863d3d"],["/tags/随机图片/index.html","09b7496d5317fbefbfc99763e3422a40"]];
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
