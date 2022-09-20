/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","52e7a2003c895ee78ae089320923840e"],["/archives/2021/11/index.html","b891ef710632a38fcd93edf854759582"],["/archives/2021/11/page/2/index.html","013afa208d200838be9bade80a829147"],["/archives/2021/12/index.html","b831a3dab2f51c29a081645a48bf41d6"],["/archives/2021/12/page/2/index.html","8d5bab3dcd76db536653ed40ded53026"],["/archives/2021/index.html","ee0f3bbeacce816a8599a319abeca6cf"],["/archives/2021/page/2/index.html","a06397f2720a8006d1d4799140a2bb1e"],["/archives/2021/page/3/index.html","6f57756f73935142c6ee8253819adb58"],["/archives/2021/page/4/index.html","d3856ad8567fadc0b1522de946126865"],["/archives/2022/01/index.html","8fe45bee7c3689c5ea44b27fac7ad46d"],["/archives/2022/02/index.html","cb15c36759a5b6a04a7617499fcf70eb"],["/archives/2022/03/index.html","c9b9c0f4b37e5def5f86f99b1cc04019"],["/archives/2022/09/index.html","617b2ce09977eccce2ab4f2e6494492b"],["/archives/2022/index.html","b9dc4be96f71deea3b04f52638d8cf56"],["/archives/2022/page/2/index.html","ca11d236c23689914994407459d063e0"],["/archives/index.html","1ecaf72882b1be9e992753b3587d3d93"],["/archives/page/2/index.html","62defc6328bcc911745a9e7db98413bd"],["/archives/page/3/index.html","275b13d1102cfbd4a08707085836ed78"],["/archives/page/4/index.html","26948ff9eb9ab046bac548495649ae2d"],["/archives/page/5/index.html","1f8a11ff4e0f949334c6458e162fdf87"],["/categories/index.html","6a98ce058c433291e1ae57e248ba3dad"],["/comments/index.html","1202ef9ecccd765495136ce6719e7b0e"],["/cover/index.html","4ebc6e7eba09f828ff1ba19898d7bd87"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","91779f2d71c81a20faa9e72152490bac"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","2a0bc8851e14d2625251d63faa5003a1"],["/page/2/index.html","b42566b2a35be97649d072eb42fdda8a"],["/page/3/index.html","e67401ad3fe3e0ab508c37a32361f057"],["/page/4/index.html","e83dd3aef14e1d8b0208c0d610d210ab"],["/page/5/index.html","cb64a5d1198c94c47d59b7b41a3be779"],["/posts/1/index.html","f2d54949737247bd3f1fe9bcdcc9dca2"],["/posts/10250/index.html","c350c6cc4203ba3623e2a2d1f43d5b60"],["/posts/11566/index.html","559e97747bd305f6b7468f98996f05a7"],["/posts/11812/index.html","c1ad8b451e88ad368885d3fcfcb35aa0"],["/posts/12811/index.html","396e0200f9e5563e9a80bf4dd60bd958"],["/posts/1647/index.html","1eeee5c02035042a506e7bc3266cfaf0"],["/posts/17/index.html","518259bf9b76f7f78ff511a5e153489c"],["/posts/19914/index.html","4a7625a0e2c3cf92db8811c0aaa53222"],["/posts/20777/index.html","d778d8946f0c6ca21ed92b1c99047e8e"],["/posts/21874/index.html","65c7502d37afbebc38e99528580dd331"],["/posts/24608/index.html","ed99c28002d1168eca0f9d3b67266a1c"],["/posts/25781/index.html","4990686a177bb80f17582db389fa8eaa"],["/posts/27099/index.html","c7838c094ede69d3cb267c29fb91e23c"],["/posts/27776/index.html","17a06a453ca4cbe3266b6412c0a8faa8"],["/posts/27817/index.html","6cabf14ed9783fcff886a43b2ef0f280"],["/posts/29095/index.html","4f8b776b80c01dd23f4742c1ac1fcd78"],["/posts/29839/index.html","826333e9c3835c6ead5cde4847df62c6"],["/posts/34183/index.html","217170d19fa8dc27eb1d45ed58a17e2b"],["/posts/34536/index.html","1a5d48f870993dcf5e74c3d571847da4"],["/posts/36110/index.html","026b79149441e4edad4bab47351260ac"],["/posts/36978/index.html","71bc58cad073e5cd873a406e56f079bc"],["/posts/37060/index.html","43d0b521891f5f95cebd841b5c65e363"],["/posts/38125/index.html","62d2eddc3cbb3dba073a0364da5dee9f"],["/posts/39413/index.html","a342cd26751da2439ca2ad1a4bf4c7a8"],["/posts/40/index.html","273af3d1710f07a214bab0e0da90914e"],["/posts/40759/index.html","a5aab9d7483b2cfb223209aacafb2ebb"],["/posts/41157/index.html","3d035b574d5a6d616ed82e84a528e8e5"],["/posts/42327/index.html","4818d17cb6b2fa2c0cdffdb2b6de9522"],["/posts/44924/index.html","fe1a65b5954e07c3f66ad210f7a5b741"],["/posts/45698/index.html","e53a50fe5ad43330d06a3813a15d8e85"],["/posts/48040/index.html","9b9c95376ffb98b55fc04bd5cfb17f8c"],["/posts/48470/index.html","96cd1f2aca2e8980bd83d4d3635c3f9f"],["/posts/49122/index.html","ca66dd6674a17ddcfafbc34509ed46cf"],["/posts/49370/index.html","2260413e2efd2c214e0c485e284b1e10"],["/posts/50467/index.html","dacbf8e5a6db79dc9e28495a28ffe016"],["/posts/54280/index.html","2324f4931ab21ad65c2aac52de82f42d"],["/posts/56727/index.html","d13200d8634b3bbd61316e0ccdef883d"],["/posts/60038/index.html","d75e3ae2b9d6ee46288f1af699e85eba"],["/posts/60039/index.html","d0c0fc29a41229ec384d5159e2034177"],["/posts/60166/index.html","6e565961802de60169192b1c6184966b"],["/posts/60716/index.html","48951711bac5e3ee434f4e11308e6051"],["/posts/60766/index.html","21eac74805d2ed934169a08ef4632bb9"],["/posts/63489/index.html","0bf18b41f4d95e2c8c3488ce122a6d1c"],["/posts/undefined/index.html","5a8a38ead7f7989bc9a1d3fa83215c67"],["/sw-register.js","d86347ded722461899b76706e6ab4b4a"],["/tags/AAD/index.html","a9bfe4fd58a344308de43d5580dc703f"],["/tags/Aria2/index.html","4474cd6707637709c5f0d9c11def1c4d"],["/tags/AutoRclone/index.html","202aca406e5401f2de2a0cf0fc4e679d"],["/tags/Azure/index.html","d1a268e0b501add533ca3922158025cb"],["/tags/CDN/index.html","6792fad85e2d7d6635c34077dd80d2cf"],["/tags/CDN加速/index.html","74210fd5c7f461fbb2af5baba101f4be"],["/tags/DD系统/index.html","9ae042d7805182a1eb6be2383b411ccd"],["/tags/EMBY/index.html","5fc1afad65cf7f7fddfb53dc90b0447b"],["/tags/Github/index.html","6b1c2dbddac1e7797067a284729ede5e"],["/tags/Okteto/index.html","a76ce246d1fce0f10145eb80638b464b"],["/tags/Oracle/index.html","c2a065e69767ec8a797e7d7854fbb24c"],["/tags/Pixiv/index.html","7c9917306ffab2573c76239e6e1ae53a"],["/tags/Rclone/index.html","18382c9dd38528310824011871074682"],["/tags/VPS/index.html","ea650938fc690ef45c640f7fe1f02837"],["/tags/Vercel/index.html","45195caaf372b30274e7958a621131a4"],["/tags/cloudflare/index.html","3bd891db5e44511cc4dd4200784765d4"],["/tags/freenom/index.html","6f2fdb94f64768d964ddde46816b96b1"],["/tags/google-drive/index.html","95f0000e166c4a760a9df4f71ff89e12"],["/tags/google/index.html","ce53364847d684352aa595b328d3185b"],["/tags/heroku/index.html","b9cb457baf18296de17f9fb400b39998"],["/tags/hostloc/index.html","1da349d505cfbe238b502cd94e7e683b"],["/tags/index.html","456563d9914bf2a7631073f055bbac1f"],["/tags/onedrive/index.html","7c454d1ad1851f8fefe75a7c44e59ced"],["/tags/telegram/index.html","c98a59e4a291c8ab9e4a0f72eabfc047"],["/tags/tracker/index.html","9d09c6828b6ffe38bcbfc412482bbf8c"],["/tags/wordpress/index.html","49c894a76fcc53104d80275b2210c453"],["/tags/下载/index.html","61a3a2a5b9d26dc3de5f6cbd04c92402"],["/tags/免费/index.html","df3a61de9031bec0af108d6439581f9c"],["/tags/全局管理/index.html","1ed678026e512651b5b2f4e9de6c951f"],["/tags/升级/index.html","55d1558ba598c73889802a3336ba18d6"],["/tags/图片收藏/index.html","b3ed2edf924509d45bacd89c0717eff7"],["/tags/域名/index.html","ffcefbb907c6da13e88040d91dff2606"],["/tags/域名续期/index.html","5b4ece68050d011eabf6c5b61cbaedc1"],["/tags/富强/index.html","acc987a2f2950f95c404edcbe9da266d"],["/tags/建站/index.html","b208710714f6077a42dad087a75aa635"],["/tags/挖矿/index.html","e078594493a42dbbe4c393e2d5815100"],["/tags/搜图/index.html","2e47fd2fc4f9be02737d1f0d0e374d55"],["/tags/白嫖/index.html","632a15323c6d11fc2fef58f1f541a978"],["/tags/目录程序/index.html","46374e71218ac5cd3403b1b944418510"],["/tags/磁力/index.html","e6c8da35ee94b948566a2c8d0642b062"],["/tags/离线下载/index.html","82f16c2df1a754d254ba906244e8d397"],["/tags/自建网盘/index.html","bbe0f775be6c8c2678ffdfec7c8117c1"],["/tags/自建网站/index.html","571b10081dcd70bdd0ea1fcc2f4eb635"],["/tags/虚拟空间/index.html","037b4ec55a9a1eaeeb59974b3ae7c580"],["/tags/转存/index.html","2e4228ddf49d5b996129565f3ce9cbe3"],["/tags/随机图/index.html","262399b54856a1f956b312c39bd8702a"],["/tags/随机图片/index.html","68dfaaf98c5f08358e6be0fbb74acb6d"]];
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
