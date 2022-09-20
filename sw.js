/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2021/10/index.html","8926506a561ba93e93fd6814be62cc36"],["/archives/2021/11/index.html","9deed91004701fb94b09ae79bde57fba"],["/archives/2021/11/page/2/index.html","357ac3988b68c41a829223137dc22237"],["/archives/2021/12/index.html","bfa1a009864597ee7b12a4911c9a4a23"],["/archives/2021/12/page/2/index.html","6edb888f81a719a07a9e4d55bf5bac83"],["/archives/2021/index.html","09f111a68dcdaac22a6f422a57f318da"],["/archives/2021/page/2/index.html","f7b6b288fc8884ba7b947ca366c20ff1"],["/archives/2021/page/3/index.html","12c9637e0a0d291679661864d3b4bc54"],["/archives/2021/page/4/index.html","b0026f704cc04334b4202ba7c2207bc8"],["/archives/2022/01/index.html","ddec6944d733c53b3357a0937638fcd8"],["/archives/2022/02/index.html","a07fab6b44da6302f43229306a146096"],["/archives/2022/03/index.html","ef93b4e3e3a026188db0f13eb10caf3c"],["/archives/2022/09/index.html","b1cfa098db70de426c643d9b5257ea14"],["/archives/2022/index.html","0d428ee8edf0bda7158212541833254b"],["/archives/2022/page/2/index.html","36b80449d606f6a9f9342822a6fea8df"],["/archives/index.html","e13fd527716a2684379ce8b3da312440"],["/archives/page/2/index.html","e9e451dee65590e9eb7b8bcfb730a7e3"],["/archives/page/3/index.html","3d19dc879e7dcb50b2ad3d5cde8cf137"],["/archives/page/4/index.html","353646ab5b760f03af3f1b989864296b"],["/archives/page/5/index.html","0a86f063bb90a3e90199bf1067d119c9"],["/categories/index.html","e27c843529731d2fc19b34bd2150055b"],["/comments/index.html","c8964389d51b27ac738eb24f3b6acf65"],["/cover/index.html","871e5b9dd1311c2c367b4a54c0b776c7"],["/css/custom.css","9a44cb3fb938a8b055055acdaca1c145"],["/css/index.css","01a345c41c3988d594c62e239a061a39"],["/css/lete.css","a0ef73c6fe630099bd62f37258e20c14"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","94b96042fd9c536a600781798a43ee07"],["/js/main.js","240e062def7897dd4c03a12bf07fdc65"],["/js/search/algolia.js","f4991362e8ef3eb2c328e8f31739c21b"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/js/wow_init.js","4244acb8641a2525f168b604f9ca4844"],["/messageboard/index.html","566cb8285b11e89512fc8a6d7a1614aa"],["/page/2/index.html","a21c2810cc99548af3aadf4774152d54"],["/page/3/index.html","249c887513f73dc1bf96d96845eb7688"],["/page/4/index.html","c79682ae22ae1109d3d8e2d53a172532"],["/page/5/index.html","ac29f214b8857767c9a05c9937d794e3"],["/posts/1/index.html","579c2e5dffc319c51ce6ef45d7ec97cd"],["/posts/10250/index.html","44ca639ccdd195a78cf130cd89bc0b19"],["/posts/11566/index.html","c756bdd698080e4f6992047800e2fe63"],["/posts/11812/index.html","b6f9a46b2de0adde8452f411393fa5f3"],["/posts/12811/index.html","2ac79ceef6796da8e20faf8915075695"],["/posts/1647/index.html","38ed52205bf3d87e87e8264e488a4cfd"],["/posts/17/index.html","2dfee6d8ac301a6ecf1d35118bb54ed0"],["/posts/19914/index.html","f49151b50eeed9b183efeac8e569771d"],["/posts/20777/index.html","b8b179b927580e8dc665cf1eb0b38ace"],["/posts/21874/index.html","082350a5d84f722d7004317b3ed6d1fc"],["/posts/24608/index.html","3bc53175254f4a9d7059550917d22aff"],["/posts/25781/index.html","5f8ffdb8d0d16647bd0f57f3080d9186"],["/posts/27099/index.html","4d5ac4837aefb43231d47392a8838ab1"],["/posts/27776/index.html","16c32bb1be58e061ea613bed81e19339"],["/posts/27817/index.html","6cb22fd9bfd0cb78ef2970b987275b34"],["/posts/29095/index.html","4dd4b03b77f56c7b4de560cd1b728e9c"],["/posts/29839/index.html","a1b528538cb2fbc9aaa7edd921ac5ab8"],["/posts/34183/index.html","5511044934a81fce6e183d6f5eec3ceb"],["/posts/34536/index.html","3e441acdafcc643c84ab1a9545480afc"],["/posts/36110/index.html","b7e6f2b95694d1a97f38a025d6f6e979"],["/posts/36978/index.html","4733141eb50e7e7cdfbd8e3754134b76"],["/posts/37060/index.html","c7bda786ddf3ccfb204eed0d653ba1d7"],["/posts/38125/index.html","158af4564741c83cb8ff6bbf57e57b37"],["/posts/39413/index.html","c040dc077244c2a5460406077ac87019"],["/posts/40/index.html","73accd77d26c1ab182db20570d7c8f4c"],["/posts/40759/index.html","0a24b40cd4edce17f0ba3c8fdda2a36d"],["/posts/41157/index.html","62d568eed5e7fcc6d000454e2e8891da"],["/posts/42327/index.html","1ee1048b79b72fb9c7180446a37722d9"],["/posts/44924/index.html","38522e73c65bf2acaf2d2588ffc7e97c"],["/posts/45698/index.html","4477c48ced8760a654f7438c40ff3df9"],["/posts/48040/index.html","f1aed95346e04bf223913b33133caf6e"],["/posts/48470/index.html","3f400c22c65ca8ba60f32e42a1b9d9be"],["/posts/49122/index.html","7c55136aa79edabf3bf0a8cdc3d94d3d"],["/posts/49370/index.html","ac183e9e0a90ebd372e2dc6afb3c77ea"],["/posts/50467/index.html","b55f4d816e5d529edc434b59c22b316b"],["/posts/54280/index.html","5c2eab8c55d963b8a2749c29a9d13ca6"],["/posts/56727/index.html","3a50a2e35e3dc4fa994542baa50f3710"],["/posts/60038/index.html","3f0ac744525d28d8194c7cf2823f57bd"],["/posts/60039/index.html","379eb657e1c4f4cb6cd5778794ae862d"],["/posts/60166/index.html","9ece3ec38be8ad58f6ab2d873b511f64"],["/posts/60716/index.html","0552f3daa6dada7afbf832c6c767d677"],["/posts/60766/index.html","fcb42701da8d168e07fd80a9584aac45"],["/posts/63489/index.html","c79ca836608530e67cd0ba915c805174"],["/posts/undefined/index.html","2162688383bb5dd1a12d0bf1465de0be"],["/sw-register.js","a2598ddafbefa9f944c511c90bea24b6"],["/tags/AAD/index.html","feb2c4f3aab46a5cf78128cc6261aa13"],["/tags/Aria2/index.html","1083d6a79da86cd1051e5acab14d6d9b"],["/tags/AutoRclone/index.html","513801d82067202f88398522c48ce15d"],["/tags/Azure/index.html","e4676d5b6c3b8421593894b20a32efc7"],["/tags/CDN/index.html","b96b3fee0383ee9c0da99838e654395a"],["/tags/CDN加速/index.html","1c6da3ee1913381ba6ce69f2ab71a7c0"],["/tags/DD系统/index.html","492d9e59bc2488a00e522d5aad6eb831"],["/tags/EMBY/index.html","a58140f8520e5d01379647e9624ebb1a"],["/tags/Github/index.html","2c3a899f3d144578e4fcc63dc044da16"],["/tags/Okteto/index.html","bec0c707737d26f599c696fe4f682007"],["/tags/Oracle/index.html","c04065c77b6fb206d847347fd3364795"],["/tags/Pixiv/index.html","4f97feb58153caff70d481913dae39ee"],["/tags/Rclone/index.html","6cbfac5b3207abf0d521955311a9a408"],["/tags/VPS/index.html","b8053063c665d7738ff8c8c2a1fc2708"],["/tags/Vercel/index.html","cdea273537cbe429d400336f53081675"],["/tags/cloudflare/index.html","968f143790b92fe826e185c0ed64a8db"],["/tags/freenom/index.html","cfcdc472edf2d470685297f13e93ea41"],["/tags/google-drive/index.html","3c15f8e91758b52695967b2a9b3bf138"],["/tags/google/index.html","6a9f7d62474f4c78c6961636e39635fc"],["/tags/heroku/index.html","bb99721acbee02ad901706f67b9e6326"],["/tags/hostloc/index.html","92642663d8d40e5d2c2a39a37172b661"],["/tags/index.html","9413f3219fb5c017ccebbd04b3952eca"],["/tags/onedrive/index.html","71d6a3461a5d165244dfa12986df7761"],["/tags/telegram/index.html","aa392ae12f20927c69fb3bad8d79c255"],["/tags/tracker/index.html","4b5eecbe4f5bdc422eb34b8673679741"],["/tags/wordpress/index.html","1d94893286c29743be7aaee447204f2c"],["/tags/下载/index.html","d50657583a54711f8f08849e60381340"],["/tags/免费/index.html","8bd4d57716c630cdb97030fa663787ee"],["/tags/全局管理/index.html","bf9ac1609f4be653f6f50564cfddf90e"],["/tags/升级/index.html","e211c2ae0a545bcfa7df7da9b3eb3827"],["/tags/图片收藏/index.html","d5a5efc9becb20d837da4ae2a7b5171e"],["/tags/域名/index.html","b371e72be41aa428c64e14d0631e05e3"],["/tags/域名续期/index.html","8cecd553d90ffd255cf0436a12847f54"],["/tags/富强/index.html","2282032ac2f994e5e5778fce0f85f93a"],["/tags/建站/index.html","9928add7fe5c3737c8d237c6934a978c"],["/tags/挖矿/index.html","de9502eb3ae24b00f31dfe653c40f7ee"],["/tags/搜图/index.html","cb8720a083631fcedc019e4f99517c1b"],["/tags/白嫖/index.html","38dc82d051b338307763ac5282e72d10"],["/tags/目录程序/index.html","c86441b8cfb240d1965226ec4fd3ba5d"],["/tags/磁力/index.html","931f5f0f71e031717b33cbc1513d7c7c"],["/tags/离线下载/index.html","2ecb25411465c030def183420b75609f"],["/tags/自建网盘/index.html","eeb7344cf448ef11d12009bcecbd7d43"],["/tags/自建网站/index.html","d87866876d8081c08fe3239681982785"],["/tags/虚拟空间/index.html","0835986d46eadc84b1cd050de92a57bb"],["/tags/转存/index.html","bf22470d2e5979fcd7906e6654060c88"],["/tags/随机图/index.html","844dc594e3d8c960945c948bb2c0d3c3"],["/tags/随机图片/index.html","9b814b4d2fc18e034ce6a3263b3d7267"]];
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
