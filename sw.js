/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/08/c++基础编程/index.html","d5ce4bd34192aae5a706c61552614ade"],["/2023/04/08/c++核心编程/index.html","d2064888c0dfdf7b9e8900988d98782e"],["/2023/04/22/牛客网第一周训练赛/index.html","f471a3ecc8b17cf5636b0ec6bdf7f587"],["/2023/04/22/牛客网第三周训练赛/index.html","40271f173ec226ce9d3375aa384e6258"],["/2023/04/22/牛客网训练题第二周/index.html","a0564d364debb66f84697ec223942545"],["/404.html","0cdf1363111bcd6d5d94406bc5d25959"],["/archives/2023/04/index.html","b82a1dd69c39d1b8e443ae9e7a6eab2e"],["/archives/2023/index.html","f9506a0f7127af85adfcec07a70a4012"],["/archives/index.html","c71d8e57e3dfd42fe04130d77eb07ea1"],["/categories/index.html","ac680341fe28a0c20b428a5a376eeb1e"],["/css/index.css","2bedb6cc6b35a37577b4c99c62c2b33e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/36.png","d48b1233d09fd8da2886ae94f4f688de"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/640.png","0639280b95b2558d275f8f9f2864d2b9"],["/img/bg.jpg","23fa4771bc738fe2c4db668ee1d0582d"],["/img/bijiao.png","02fc26255f94e4ea3896d306ed72e433"],["/img/c++cover.jpg","bf35177858848cec69a6a1f23caee850"],["/img/chakan.png","a18499fcfde1e4d76d33470a6f337f16"],["/img/dayinjieguo.png","6f42b702b9fb60eb498d06404a415a45"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/fengmian.jpg","7ca9d1635fecbf6fc7ec61ffb8866aae"],["/img/fire.png","1effc0dc2b2b75f9968c2e229c46d2f2"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/fudian.png","a57769d7020418f8f212017e63b6f18b"],["/img/fuzhi.png","1e4d4cacba2365c63758e06a56e67526"],["/img/guanjianzi.png","6cbcec7f93f3e9a7fd367c45b5b64968"],["/img/hexin.jpg","da1b251695618bb6b2c4a40af2905e86"],["/img/hu.jpg","675f16d989e05b3baab25e686cf86585"],["/img/jicheng.png","cf77f846c1887a63f9c5d8d3f75c39c9"],["/img/luoji.png","fbced6c80dff0b437ec9b57ca56292e7"],["/img/shulie.png","17ebac6a7143cece39dd2bad07546147"],["/img/suanshu.png","53278ffc413296281a6151bb59aa71e1"],["/img/wenbentext.png","91d333ab067954565a7d58282774fe3b"],["/img/xiaoguo.png","a057fef6acef7f36d3512d029d8ebd8f"],["/img/xunhuan.png","f60722e4bcc6fe7681730147369a8200"],["/img/yunsuanfu.png","c030d795aa926291edc4fcb93639e7c7"],["/img/zhengxing.png","03398a6e45bdae33311b347808bb458e"],["/img/zhuanyi.png","4d90936cb7f3cacbd16b3044b8904ac8"],["/img/数列.png","9c13a0cad918a928310bf6cbca8be1ac"],["/index.html","2cd4923a7b145f387ce954fa0108ba54"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","9d57a428fdc7dfbcc113db51e36f5da0"],["/sw-register.js","e59ee3258f0d5df453800850aa89824d"],["/tags/index.html","0615d84608c3f7fcbff2a3656944363d"]];
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
