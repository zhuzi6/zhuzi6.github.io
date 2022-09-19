/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","2315e8e929c47b47dd77530e65188f9f"],["/archives/2021/11/index.html","82949cdd4df829cc0df2525accb09632"],["/archives/2021/11/page/2/index.html","bd5e3798f9e2136cfede8dd27f401cc5"],["/archives/2021/12/index.html","963fe46cf21bcdf8d402d911b8bf6475"],["/archives/2021/12/page/2/index.html","dd6c4a3c82f9406fb28bda334c3501d3"],["/archives/2021/index.html","6cf47d5c967c2bce4039f86bc600da52"],["/archives/2021/page/2/index.html","14d7ca0146e756262b7af42a27509a04"],["/archives/2021/page/3/index.html","bb71a5cbaaf5a987a8e333e9e83e237a"],["/archives/2021/page/4/index.html","58c1bbfb2bc5516a54f3f847cfec7f21"],["/archives/2022/01/index.html","54486a4d0722b9886089a97c7d4f7171"],["/archives/2022/02/index.html","204b04e16e64525e35ab23c5e4760b57"],["/archives/2022/03/index.html","5bad743aba8852e4063109e5b39532eb"],["/archives/2022/09/index.html","2ade305bdc6d3ec979df3417a7f08380"],["/archives/2022/index.html","68797e8983e0eb3451090b63fe4becab"],["/archives/2022/page/2/index.html","ac47f9ea7ea79391ae76ffe8f717c0f2"],["/archives/index.html","67ba8a5435f6e53b5230b6836da8f745"],["/archives/page/2/index.html","d51089d3b184d15a96d3da8eda2b7df6"],["/archives/page/3/index.html","5b82b8262e48168fc2482d48bfc62882"],["/archives/page/4/index.html","d2bd173b9ffed6f0f0094ae0f10b18ae"],["/archives/page/5/index.html","e906251a95105e1797e466c59bdd09b9"],["/categories/index.html","6700a7e447b882dbef90a3bbd8db44ad"],["/comments/index.html","d6de384907f9a769dfd29dfd5c9f42b0"],["/cover/index.html","9a2d9b58efe728bc7eb6c105de9cf211"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6c4bfda5036ea9f70c3783c6824181ad"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","de18df3d41bd04a53c5c6e57556857f6"],["/page/2/index.html","c5e84b6c97e0d598449b116b9829f38b"],["/page/3/index.html","d6e3a36bf1cbcdd6dc89d1485ed163af"],["/page/4/index.html","b3dc56fa52bf89db7c463c5f283da7ae"],["/page/5/index.html","45fe4a41b8e4f0cf1fdb2def76fb1964"],["/posts/1/index.html","486c3085e34b0f935d3c15f86b1ab02e"],["/posts/10250/index.html","a738e07335a0f8a6d4c89acda532b8a1"],["/posts/11566/index.html","edc6d3a897060fcec6a529b809d2ec5d"],["/posts/11812/index.html","8701b3cec0c3ce350927cb5d5297d580"],["/posts/12811/index.html","b70f3dab525da38e22859b863e814b8e"],["/posts/1647/index.html","6829971efd1a213b6ba100a0c288a6e7"],["/posts/17/index.html","1a752cbbe96dcb01314879f885554494"],["/posts/19914/index.html","d7d90a5c144db8c14de9cf582ecd390b"],["/posts/20777/index.html","1b4558e76595304be0861be511f539a3"],["/posts/21874/index.html","4842d397a7626d9f4258a2328f7f7991"],["/posts/24608/index.html","ebbe998013d0a7c369e8ee5912b4ffb9"],["/posts/25781/index.html","234d6ba02fb46e1b5222430c6aa6baa3"],["/posts/27099/index.html","ff96b8ecef6a71d558b32a3b7bae3c34"],["/posts/27776/index.html","f2fabd5b77135be9f8895b235f7cb1d8"],["/posts/27817/index.html","d6de088c3122eefd0ef2f1546c648e01"],["/posts/29095/index.html","5c63991c823dfac0ad00f03d05d18766"],["/posts/29839/index.html","4eb82eb5160eb05b61d131fe434c9942"],["/posts/34183/index.html","957eb83f4f05c0ad6bd767014b668ec1"],["/posts/34536/index.html","623624b5641a6aad258e0f8cd684559a"],["/posts/36110/index.html","3b3a2834248926bb3f3ce335604b847b"],["/posts/36978/index.html","afa9606247b543efc58570d9c8915850"],["/posts/37060/index.html","3cbf3f1b6520502dc67e311b730413d7"],["/posts/38125/index.html","95c4fe75d9af10ad33c76046e3aa29f8"],["/posts/39413/index.html","7936b808cb52a6b20dc8c498b6ea497d"],["/posts/40/index.html","243e9de20aa297e9f1ed161e344b71a8"],["/posts/40759/index.html","bf2f6de4973a4595eb44834c49a286e6"],["/posts/41157/index.html","e27495b5cd399f3a6b1e04ea9476fa57"],["/posts/42327/index.html","d6874743ee6cc4ec7b93eee08f5b793b"],["/posts/44924/index.html","150882dba99c47808ce102b1b3279cce"],["/posts/45698/index.html","8ef939145097fab9e8c54d15c1457162"],["/posts/48040/index.html","dc28b298f1c7762673fc795dc8ecf0f0"],["/posts/48470/index.html","a4dbd65efd0427fa88f5e60e73e15d09"],["/posts/49122/index.html","a272f0c28297aa7d1caa2c1053f18710"],["/posts/49370/index.html","4bb874f54fef2916ea427ab4f3459181"],["/posts/50467/index.html","18717ac4b9f0bb4afc7ae35968a95356"],["/posts/54280/index.html","3f06ec69e44c97859176445eaf66ce80"],["/posts/56727/index.html","bf23bcbca78a6035bd0c66fc19d7f045"],["/posts/60038/index.html","4b33de978eab752bd1ed75e2f4ef7317"],["/posts/60039/index.html","a4eb7ee8b682a6ae2810063b2bb59d71"],["/posts/60166/index.html","21af0be5ef1112b8bf8c1466eb2ac4fa"],["/posts/60716/index.html","6a6a4fe7342cb5a8c054d463a9a8dfa2"],["/posts/60766/index.html","d942489dd6cf6e8d6076ca3c242fc28d"],["/posts/63489/index.html","83016e804632e0bc70023d8dafe4b26c"],["/posts/undefined/index.html","f7d1b66bf9a02e91cbd2d34da2bcc009"],["/sw-register.js","b204a95bec945136a586f9596e2fa22c"],["/tags/AAD/index.html","95e834a9a79e5809f1cf2e18ad9d0a7e"],["/tags/Aria2/index.html","a2175d8f1f6dc4f3d226e0b3ce673e40"],["/tags/AutoRclone/index.html","ee021e2d2d6c681dd07d079eded237c2"],["/tags/Azure/index.html","8853fa1c0d875b5ca0549995bd16aea7"],["/tags/CDN/index.html","a79e4a1ce60723aaffa426b74acd6bf7"],["/tags/CDN加速/index.html","938035713e5a0d76b91332e19372ceb6"],["/tags/DD系统/index.html","ac68a5cb39fd96d27b9fd554c50fad01"],["/tags/EMBY/index.html","3aa6aae50a99d77c6b79787b4e834f8a"],["/tags/Github/index.html","0f28bcaee62b9d9e2a00532bacc7eca3"],["/tags/Okteto/index.html","c8e0f0d42796098a8ce47ff309108c5c"],["/tags/Oracle/index.html","ecd950993f95117a80a005aecd483d4c"],["/tags/Pixiv/index.html","defdddb7efdba407920fefb9673d6091"],["/tags/Rclone/index.html","65aa44024401ce4f71648415a45845fb"],["/tags/VPS/index.html","592691fd8d4836c04356943f9bc7e54b"],["/tags/Vercel/index.html","bf7aeee21f270e1bdafe435469ca23c1"],["/tags/cloudflare/index.html","9360d730ba8a2897e141596111027bac"],["/tags/freenom/index.html","0d4775a807e1f858c17e7d2f4a06d37e"],["/tags/google-drive/index.html","321262347638ffe9eddce739deb9a1d4"],["/tags/google/index.html","fc522d26db8c8fa9b3101112aebffd27"],["/tags/heroku/index.html","1c1241c0ef3483d4fa9889566aecc176"],["/tags/hostloc/index.html","0b0427de585133276885df87bf6f8e4e"],["/tags/index.html","9a6c106e462ca080d914e2ce4694bdeb"],["/tags/onedrive/index.html","5e93263ca950a3dcfb3446d8ba837e54"],["/tags/telegram/index.html","a54b8712fd2fa05528593ad373385ef2"],["/tags/tracker/index.html","0be8c42507b8a1c797820ea812e15041"],["/tags/wordpress/index.html","14d597b8c04ef9d3b9bd2565a66afeb6"],["/tags/下载/index.html","5988ca31c670bda072d3e6457abf88f7"],["/tags/免费/index.html","81f0c3d3b61e26cc8f4d07afc22126e7"],["/tags/全局管理/index.html","1c707f9e2aa79ba9d35d9d9e355c1ce0"],["/tags/升级/index.html","bb2e96965183c2617677c2bb52c933a0"],["/tags/图片收藏/index.html","4e402883462080605cf21ef5396de28c"],["/tags/域名/index.html","e1c0ce3d09338d64058176a8b7a2eea4"],["/tags/域名续期/index.html","efcfcc91146fc26e8108bff60361b7e3"],["/tags/富强/index.html","532e54e42ca7bfd78a80f5a7f7c97463"],["/tags/建站/index.html","57533bd77a1c44ee227e0584b12fdccb"],["/tags/挖矿/index.html","ad7754f5deae391bce96783865da0fb1"],["/tags/搜图/index.html","a8eeffaecabf567e0bdffeef321765e4"],["/tags/白嫖/index.html","a6f3d09c79158e1b98fb1b42ec9a58d4"],["/tags/目录程序/index.html","7f6905285cb76ed126b8a6559e261ae2"],["/tags/磁力/index.html","38e472ff02532c9e9f66bb7669df04bb"],["/tags/离线下载/index.html","0f5568965d36fd2b88c60381edfaccca"],["/tags/自建网盘/index.html","e41a5da862f37df4a03217912324e1cd"],["/tags/自建网站/index.html","d95df99d36c2bea780c8b143ba92132b"],["/tags/虚拟空间/index.html","74454f98bcf54f928eb7807083732025"],["/tags/转存/index.html","6bbf6f2e31799d128df17f2fda898c6f"],["/tags/随机图/index.html","777b0382b6895ef4c0d8fa0b26e0e440"],["/tags/随机图片/index.html","6c0536b0759bc9a02c340bccb1a31037"]];
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
