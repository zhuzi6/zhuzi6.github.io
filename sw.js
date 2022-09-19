/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","b2dbcba1b9d421e263074532978ba9f9"],["/archives/2021/11/index.html","d7b573b7a6a24b8ae6c338cd645a3cf6"],["/archives/2021/11/page/2/index.html","5d40cf157c09bb912e23a8dd17212cb0"],["/archives/2021/12/index.html","12ca6cf9218b11245ed08654c6c622b0"],["/archives/2021/12/page/2/index.html","f82c5278260f2026f84b20d3a542b2c7"],["/archives/2021/index.html","57eda8c760fc35b579a927c9dc90210a"],["/archives/2021/page/2/index.html","f45123aee0dd8f26affd6894de1615f8"],["/archives/2021/page/3/index.html","9a258fcab09a56cf0963d6ebef3dc553"],["/archives/2021/page/4/index.html","1a312f8cf995a1b007c396f0b973aea7"],["/archives/2022/01/index.html","812bf580e07066dabbedef6a673da000"],["/archives/2022/02/index.html","d087dc4f167b7ee55f38907f1df6d047"],["/archives/2022/03/index.html","eadab59ba253e759119b725c1f5a651c"],["/archives/2022/index.html","2417f4f0a9db170ce1c0429642791400"],["/archives/index.html","b444387e5ea069306b7c53c520bd5ebf"],["/archives/page/2/index.html","dd54c747ef6674e565bd7918d2f83abe"],["/archives/page/3/index.html","afada3c6a306c71889adfa9e6efe796f"],["/archives/page/4/index.html","2dbecc55b94fdb38a505d4cc970350c9"],["/archives/page/5/index.html","2b41640345efeec79bbc6ed923f51381"],["/categories/index.html","751fd62b6dc7ba5f02aeb0f917f41084"],["/comments/index.html","31e2bbadcd18e5ec356a09c30eea36df"],["/cover/index.html","00c9653b6658790233cf0bcf1d6e9f69"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5c93f77c7a9e8764f0d4f029e3d3bf8b"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","78388a1117de35a60d73ed62a1175678"],["/page/2/index.html","3b1c26e801c059a4c31fe5f2709d2eb3"],["/page/3/index.html","764139b59524025c0ed31f0be5f90a9d"],["/page/4/index.html","2e7b7d3b3896472cbf2615626f2ce42f"],["/page/5/index.html","a247a7ddfff65287b6777b10d0bcefca"],["/posts/1/index.html","b289d42e0d6e3718d5175d7a0d847fea"],["/posts/10250/index.html","0db7201cf8061d9e30ca54de0cb99fc2"],["/posts/11566/index.html","ef7f6ae906fe9833c86c08fed91635e5"],["/posts/11812/index.html","214ab0a72b98ddf5bf3789de44b7c27b"],["/posts/12811/index.html","57fac07be1af5e0a1472cb2266953c0f"],["/posts/1647/index.html","57d065673bd092702a821b967c22d723"],["/posts/17/index.html","11763b2d259db5a3fa8c79bab70779c5"],["/posts/19914/index.html","7027f0648300026e272b5a6add19fa15"],["/posts/20777/index.html","ebc1f35be4df9322688bf12d9d05e7a6"],["/posts/21874/index.html","46ed4e39c5efb1a0c831cb0f2473ac1f"],["/posts/24608/index.html","ff6796c5de6f44dad6964e2d2cc600e0"],["/posts/25781/index.html","105a9ba445a07adfb2137a743d342825"],["/posts/27099/index.html","0d683492c8b7369e149384769dfadb2e"],["/posts/27776/index.html","8709a18f6ca4e38996e32be7e72e7709"],["/posts/27817/index.html","ae0d7c5b8ab904a39d3511778e2074e7"],["/posts/29095/index.html","c88105fce0d1211f2a4f0c6336a03588"],["/posts/29839/index.html","ec7e407d1e8b12fe2993dfbaba4c2c8d"],["/posts/34183/index.html","e9895439d4975e5389e8223622d82fd4"],["/posts/34536/index.html","8dd30aab2f99c038e6417e47f65835b9"],["/posts/36110/index.html","8a2a5705050873c250051ef7b516bc0d"],["/posts/36978/index.html","7d6c3a4b6d742c03441de17e93edaa85"],["/posts/37060/index.html","2e065ebbdd19fd6dfa25fa0d419dcf81"],["/posts/38125/index.html","e02da7ae729ca5fb21b09979d2b4be6a"],["/posts/39413/index.html","27d0dcb742088cf37a3bd95f3acf7c9e"],["/posts/40/index.html","bb6347b57f6bf2d627b36d68f787dd5a"],["/posts/40759/index.html","074d73e5d2291d498752c13390a3b74e"],["/posts/41157/index.html","d115e6478abd3b4a919e7e90c2ba0a45"],["/posts/42327/index.html","e101987f93b776b89fdd32ba3e02d9ca"],["/posts/45698/index.html","276e40c7fd84fc590ccf1c5d3fb7a617"],["/posts/48470/index.html","e7a8dbd9c81a61931e0cc34a5bdf55b3"],["/posts/49122/index.html","e2e6e5e4c422547b9532c096b745dde0"],["/posts/49370/index.html","62d54bf466b32047ecde7a5f36dd940e"],["/posts/50467/index.html","af83d0174105ab58cb74a8ef6ff08afd"],["/posts/56727/index.html","0af3e6a32ddb07a8d4c6bee84c105a03"],["/posts/60038/index.html","ccb684016275a190488f51161ee680fb"],["/posts/60039/index.html","4de7d65148dc06f76100c0a546ff34ec"],["/posts/60166/index.html","0767de5e550e0fb5d27599e98eedcce0"],["/posts/60716/index.html","df5f34cf2b445948a091cfd2163c4597"],["/posts/60766/index.html","32ad6b1e7e707d51754a80d269f11bea"],["/posts/63489/index.html","c0ffb05d4e44d309432e3403a7f0e4b0"],["/posts/undefined/index.html","78ccfcc37430f9b39d32b1a1b6412859"],["/sw-register.js","fd5572c56bab29058d37cb8170a91c02"],["/tags/AAD/index.html","86c871262664f8f794659f5771b0abbd"],["/tags/AutoRclone/index.html","14f629acd1b3dd4e9c030b9c9cda6d43"],["/tags/Azure/index.html","acc4024e3fc4fb2b98d97e3b40fca822"],["/tags/CDN/index.html","e414a172ddd5cd33a312ab662a7bd737"],["/tags/CDN加速/index.html","cd39a6081bbd411e037292deaada88f3"],["/tags/DD系统/index.html","0a220a56ce3bb11c76d9260915c0933b"],["/tags/EMBY/index.html","116698045095c7af4b1ba214b5b2426d"],["/tags/Github/index.html","7d7377fe221834cf9b474d3da99b9737"],["/tags/Okteto/index.html","1c98f13c9e8544234c12e89f40520168"],["/tags/Oracle/index.html","5bc976230cc02de758964e4cf48d90a9"],["/tags/Pixiv/index.html","4ac9401f9b49eb9a1bae56ae30807602"],["/tags/Rclone/index.html","ffebaaa23d4e5499ec2975448391063b"],["/tags/VPS/index.html","f907d7df5fb107b33b10dcd5c675f67e"],["/tags/Vercel/index.html","8723fab1e8130c5d180907ac0bd8e1cc"],["/tags/cloudflare/index.html","fe92440320d21748fc4b4afa35a0170a"],["/tags/freenom/index.html","a1cb86ee1771091f8eda764972898f07"],["/tags/google-drive/index.html","e8006b65341e7a1377b1c8e7ca6955e7"],["/tags/google/index.html","8f3a5f3a1f6e6ca2554fa11ce70af73d"],["/tags/heroku/index.html","385ebee317423b664969cb595dc8b17e"],["/tags/hostloc/index.html","ec5bec0016f131e86b2c036103124757"],["/tags/index.html","d897275b4e11c58cc31ed91b687258d7"],["/tags/onedrive/index.html","f99fc6bf9a76410fa72a6742354cd2fa"],["/tags/telegram/index.html","8af3618ba773c9e7c0a8b56686c23708"],["/tags/wordpress/index.html","270de49726786b891f85dfdd2681354a"],["/tags/免费/index.html","abfe818ac0ee285d82d02f894d9e720a"],["/tags/全局管理/index.html","a5f80afd61b9d309fc4670a13feb72d3"],["/tags/升级/index.html","878c7bf1f30cdf9139f619ba2e800a83"],["/tags/图片收藏/index.html","8def122f864c3d8695e314bc3d7dcf6b"],["/tags/域名/index.html","494f6030e2ba13846bdd9be73ad3951c"],["/tags/域名续期/index.html","4d3c3c7ce99a5672d4359d886b05fc44"],["/tags/富强/index.html","6b8ca5e0f5879cc6663c11568c6d7431"],["/tags/建站/index.html","003602f15a47f6e5ff3b4338de206217"],["/tags/挖矿/index.html","c3ff0e4a7296dcebea78811abacdc00a"],["/tags/搜图/index.html","022c0d998620f7f7b875021e9752a960"],["/tags/白嫖/index.html","46e60011a93def71d8f92d52bd26a1c6"],["/tags/目录程序/index.html","60e292d752ccfe240e18f6c93ab0fde9"],["/tags/自建网盘/index.html","f67777143b89466cb57bcc80afacce7a"],["/tags/自建网站/index.html","e23df1c2651749cb3279f88d4c0fe04d"],["/tags/虚拟空间/index.html","a7e391a56ae82586c62ae609341f7717"],["/tags/转存/index.html","ad2bfde442c4a0db3880e8e37532b4ee"],["/tags/随机图/index.html","fd2a257884b529fe5e97307f7e8c73ec"],["/tags/随机图片/index.html","057bb98c66321eec76c26a8e82ffdcc5"]];
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
