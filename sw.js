/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/08/C语言基础/index.html","994d50e4b03c94c83c916d963fb388be"],["/2024/07/08/c++基础编程/index.html","3c156b3f4a4f5aba37729ecf318781fb"],["/2024/07/08/c++核心编程/index.html","460dd752cf85b0dac37b82169de0be7d"],["/2024/07/08/牛客网第一周训练赛/index.html","6cd6f687793e27be09c383c98e92d8a5"],["/2024/07/08/牛客网第三周训练赛/index.html","7c0ab58a9b057beb9296eb0d3b4c7c8e"],["/2024/07/08/牛客网训练题第二周/index.html","a11a49f24a000b06279fc767b8624a52"],["/2024/07/11/排序算法/index.html","0c9f1fdc1c8663d790367e21f0649df7"],["/404.html","c5dff9edb71c33f3a474c555b33a64b8"],["/archives/2024/07/index.html","f218211885115068eb438fcc4d88e1a8"],["/archives/2024/index.html","3412a2ed2b7b3789ad172901eb9ab0e2"],["/archives/index.html","a5a3e5f617b2bd57a941694f111db2b0"],["/categories/index.html","38e29f85f1650ca9cd1bcc1f7e48b2bc"],["/css/index.css","626bc76279b54bd60f47008a99c36b5f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/36.png","d48b1233d09fd8da2886ae94f4f688de"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/640.png","0639280b95b2558d275f8f9f2864d2b9"],["/img/bg.jpg","23fa4771bc738fe2c4db668ee1d0582d"],["/img/bijiao.png","02fc26255f94e4ea3896d306ed72e433"],["/img/c++cover.jpg","bf35177858848cec69a6a1f23caee850"],["/img/chakan.png","a18499fcfde1e4d76d33470a6f337f16"],["/img/dayinjieguo.png","6f42b702b9fb60eb498d06404a415a45"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/fengmian.jpg","7ca9d1635fecbf6fc7ec61ffb8866aae"],["/img/fire.png","1effc0dc2b2b75f9968c2e229c46d2f2"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/fudian.png","a57769d7020418f8f212017e63b6f18b"],["/img/fuzhi.png","1e4d4cacba2365c63758e06a56e67526"],["/img/guanjianzi.png","6cbcec7f93f3e9a7fd367c45b5b64968"],["/img/hexin.jpg","da1b251695618bb6b2c4a40af2905e86"],["/img/hu.jpg","675f16d989e05b3baab25e686cf86585"],["/img/jicheng.png","cf77f846c1887a63f9c5d8d3f75c39c9"],["/img/luoji.png","fbced6c80dff0b437ec9b57ca56292e7"],["/img/scanf.png","41e5f052d09a5dc306054fd78d8fc9b2"],["/img/shulie.png","17ebac6a7143cece39dd2bad07546147"],["/img/sort.png","75bc46057188262b7b81e14403eb49dd"],["/img/suanshu.png","53278ffc413296281a6151bb59aa71e1"],["/img/wenbentext.png","91d333ab067954565a7d58282774fe3b"],["/img/xiaoguo.png","a057fef6acef7f36d3512d029d8ebd8f"],["/img/xunhuan.png","f60722e4bcc6fe7681730147369a8200"],["/img/yunsuanfu.png","c030d795aa926291edc4fcb93639e7c7"],["/img/zhengxing.png","03398a6e45bdae33311b347808bb458e"],["/img/zhuanyi.png","4d90936cb7f3cacbd16b3044b8904ac8"],["/img/分析与递归函数.jpg","55a37ead990a07cce612dc3d6d61f9f2"],["/img/基础变量类型与分析.jpg","629e5d89bdba1a0cef95e5be887b64d2"],["/img/循环与分支.jpg","98939930caa5598968830cfc8022d939"],["/img/指针.png","242cdfd1490f133a7754dac7ab69e4b7"],["/img/指针的概念.jpg","2f60dc23bbe54fa464b047a58a5a43f5"],["/img/数列.png","9c13a0cad918a928310bf6cbca8be1ac"],["/img/输入输出函数的用法.jpg","02752e897848c5444af3f7f930642c73"],["/index.html","2d5c272de121b0cc3154357d3a49d2fc"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","dffbd7c54621131297a16c44e1597e42"],["/sw-register.js","031d3efbc138db4439931d4b9279d401"],["/tags/index.html","35130767addcec00c6a73aa50ec31a03"]];
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
