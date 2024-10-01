/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/08/c++基础编程/index.html","939d893bfb1b7c5a7f76dae69ef089fd"],["/2023/04/12/牛客网第一周训练赛/index.html","16c40114e79c993376003574297bd59f"],["/2023/04/17/牛客网训练题第二周/index.html","00fa1e674d3f16b8cc0bf8b71dc4701d"],["/2023/04/22/牛客网第三周训练赛/index.html","234766c2d715e081232aa1162cf410dd"],["/2023/05/04/c++核心编程/index.html","0fa163cd6d264b97534bde8dc8dbf545"],["/2024/07/08/C语言基础/index.html","88a3f01113ced67106d4b8e8744090e4"],["/2024/07/11/排序算法/index.html","a236f9eda8d49298814866c332a44297"],["/2024/07/13/单链表的基本操作/index.html","06dd7cd9f85c1c2753fb512183dee75d"],["/2024/07/18/双链表的基本操作/index.html","6cde51749bbd257ee07f5ef572027fb2"],["/2024/07/20/栈和队列/index.html","d5338b29b7992d7930b53134896bc94a"],["/2024/07/22/循环链表/index.html","4b1b79d1a8a2b77501ebe3e237abd674"],["/2024/07/23/linux IO 编程/index.html","2456c00a79ad80b051912ac4a78cacc9"],["/2024/08/15/车载娱乐小平板/index.html","c4b59eef798d591f097e22072c7aab0f"],["/2024/09/24/计算机网络/index.html","d43d86fa32c971e6deb6d50bcee3aad8"],["/404.html","ebe152b6b9f8e32d469b9a297e1b2a02"],["/archives/2023/04/index.html","3f951467a6a029e997488bae8d70d950"],["/archives/2023/05/index.html","008473b40eed702368cbb775e4b1db69"],["/archives/2023/index.html","0cf8791ea73981a88f82251c458e6ab2"],["/archives/2024/07/index.html","89d5e91df18ae2c4b34a44c970f6e045"],["/archives/2024/08/index.html","3e099e28847ded9ae225b9ac99e79c24"],["/archives/2024/09/index.html","77fade9b2df4da15b20e281b612aa211"],["/archives/2024/index.html","2f9690725c3c9536dbb977946cb608ca"],["/archives/index.html","392d63f19f1d6998807b3a632093870c"],["/archives/page/2/index.html","49403af8ac62344fffeee82ebdd59ef9"],["/categories/index.html","4c36fa8d75a944afae4788d8dc3bf7ce"],["/comments/index.html","0171f687d701154da29bcf17f917487c"],["/css/index.css","626bc76279b54bd60f47008a99c36b5f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/data_structure_cover/CEB84AD279D3EAE52C76F9A6989DD48D.jpg","a9426610219a9f56ab2cfb628e154c97"],["/data_structure_cover/Circular_Linked_List.jpg","c7927bd0e0edfb62489f8d70c5da8ee9"],["/data_structure_cover/Doubly_linked_lists.png","c2851c2f300c9a9d9b63672e743df56d"],["/data_structure_cover/stack_queue.png","b465c99defde2da2f2094f4147a08545"],["/data_structure_cover/下载 (1).png","e77e86999bb5746ea82ad10781481d7c"],["/data_structure_cover/下载 (10).png","3f3972dc51332f89e5979f8397edb1a1"],["/data_structure_cover/下载 (11).png","974d3d98f5faf40e0ea41bfe836e7634"],["/data_structure_cover/下载 (12).png","b626268e11be8ad9bd59b851497f30b7"],["/data_structure_cover/下载 (13).png","843e1ced62b52e3686918617e168adb0"],["/data_structure_cover/下载 (14).png","3e414dc6df39679ea527c324d7bb71e4"],["/data_structure_cover/下载 (15).png","18b4968151f76752b8c29017780e2c61"],["/data_structure_cover/下载 (16).png","a44e0795c1de9f798621e0e83199baf3"],["/data_structure_cover/下载 (17).png","090ee97ce79d20ceaaa4ecccba15cbab"],["/data_structure_cover/下载 (18).png","31ab368c7716b6c842b6960b70dd8381"],["/data_structure_cover/下载 (19).png","b29c4e1aaa3f80868dead34b74aac18a"],["/data_structure_cover/下载 (2).png","f29e22c030e232830ea27ce790b2b159"],["/data_structure_cover/下载 (20).png","3e66dbf765f25c655ef65d84256ca5db"],["/data_structure_cover/下载 (21).png","c98164355cdfc20cb0bf9b4ecee604f1"],["/data_structure_cover/下载 (23).png","4bdf730eeb221935606c753719b53aa1"],["/data_structure_cover/下载 (24).png","b58a288be0dd6cb2b1382e8778c23b24"],["/data_structure_cover/下载 (3).png","09819aba907b8bb29fe3fca5940838c3"],["/data_structure_cover/下载 (4).png","1e9477ff166ab446323cbd0c98a487da"],["/data_structure_cover/下载 (5).png","69ce0b15c192a13b510ab8ac375b42f4"],["/data_structure_cover/下载 (6).png","d21c821d0325816bdfdca781575d86d5"],["/data_structure_cover/下载 (7).png","86edcaf926f744bd97daaa8d938c43ec"],["/data_structure_cover/下载 (8).png","5f09eac1cb2ae67a3d386b44b36a677c"],["/data_structure_cover/下载 (9).png","2e3b7cccdaa99529aa0a2bea1b6549ae"],["/data_structure_cover/下载.png","cb5541792642c3a8f1ec481d311e1cb8"],["/data_structure_img/cover.png","0b395e0d049b151091ce2b8cc8e233ee"],["/data_structure_img/循环队列.png","cf958199e85f5182b052e2ec3f02613b"],["/data_structure_img/时间复杂度.png","d7c1fc734288729b30ca0c54a7c1fb7d"],["/data_structure_img/链栈.png","2f84fc59716af6dc2a4bf3ca23f496d7"],["/img/36.png","d48b1233d09fd8da2886ae94f4f688de"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/640.png","0639280b95b2558d275f8f9f2864d2b9"],["/img/bg.jpg","23fa4771bc738fe2c4db668ee1d0582d"],["/img/bijiao.png","02fc26255f94e4ea3896d306ed72e433"],["/img/c++cover.jpg","bf35177858848cec69a6a1f23caee850"],["/img/chakan.png","a18499fcfde1e4d76d33470a6f337f16"],["/img/dayinjieguo.png","6f42b702b9fb60eb498d06404a415a45"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/fengmian.jpg","7ca9d1635fecbf6fc7ec61ffb8866aae"],["/img/fire.png","1effc0dc2b2b75f9968c2e229c46d2f2"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/fudian.png","a57769d7020418f8f212017e63b6f18b"],["/img/fuzhi.png","1e4d4cacba2365c63758e06a56e67526"],["/img/guanjianzi.png","6cbcec7f93f3e9a7fd367c45b5b64968"],["/img/hexin.jpg","da1b251695618bb6b2c4a40af2905e86"],["/img/hu.jpg","675f16d989e05b3baab25e686cf86585"],["/img/jicheng.png","cf77f846c1887a63f9c5d8d3f75c39c9"],["/img/luoji.png","fbced6c80dff0b437ec9b57ca56292e7"],["/img/scanf.png","41e5f052d09a5dc306054fd78d8fc9b2"],["/img/shulie.png","17ebac6a7143cece39dd2bad07546147"],["/img/sort.png","75bc46057188262b7b81e14403eb49dd"],["/img/suanshu.png","53278ffc413296281a6151bb59aa71e1"],["/img/wenbentext.png","91d333ab067954565a7d58282774fe3b"],["/img/xiaoguo.png","a057fef6acef7f36d3512d029d8ebd8f"],["/img/xunhuan.png","f60722e4bcc6fe7681730147369a8200"],["/img/yunsuanfu.png","c030d795aa926291edc4fcb93639e7c7"],["/img/zhengxing.png","03398a6e45bdae33311b347808bb458e"],["/img/zhuanyi.png","4d90936cb7f3cacbd16b3044b8904ac8"],["/img/分析与递归函数.jpg","55a37ead990a07cce612dc3d6d61f9f2"],["/img/基础变量类型与分析.jpg","629e5d89bdba1a0cef95e5be887b64d2"],["/img/循环与分支.jpg","98939930caa5598968830cfc8022d939"],["/img/指针.png","242cdfd1490f133a7754dac7ab69e4b7"],["/img/指针的概念.jpg","2f60dc23bbe54fa464b047a58a5a43f5"],["/img/数列.png","9c13a0cad918a928310bf6cbca8be1ac"],["/img/输入输出函数的用法.jpg","02752e897848c5444af3f7f930642c73"],["/index.html","18b6684cc975ffbda5bd49bd6591a501"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","2977b4dccba90c93b03b9d096acd709b"],["/linux_io_img/close.png","f2de55799c4e90492ca1504c857d47a0"],["/linux_io_img/cover.png","974d3d98f5faf40e0ea41bfe836e7634"],["/linux_io_img/dup.png","7430621d54b0b88e96813b556d91a358"],["/linux_io_img/dup2.png","a3135018846cdcf9b64b2f68b4c4ea52"],["/linux_io_img/fclose.png","597919787ca1775a9c4ec6dcddd37cfa"],["/linux_io_img/fcntl1.png","1fbd5aa134b56d74e41b9c927ea6fe1f"],["/linux_io_img/fcntl2.png","6e40761585b606424fb7659f2ff623b6"],["/linux_io_img/fd.png","ad0a205b498c841c528231be1db16906"],["/linux_io_img/fd2.png","d7aa9ab0000db107fbb4b22e8f995c95"],["/linux_io_img/fget.png","b41903076a8514788756b83c5bcc12e5"],["/linux_io_img/fgets.png","cfcce673860302c6598e434c1e6f86b2"],["/linux_io_img/fopen.png","bbe7b001c647a14daaf01dc250d56fef"],["/linux_io_img/fopen_agr.png","5424a8a8c8c45f34a06cac0f9599fd62"],["/linux_io_img/fprintf.png","0b76f1177a62e433f84d6752e8b8f0fd"],["/linux_io_img/fprintf_must.png","717457497698048e9251aa2ac57cc11c"],["/linux_io_img/fread.png","4f7c8def22edd43c63af23e04d6bf378"],["/linux_io_img/ioctl.png","53fa26da0385ed80252bc8b3c4b664cd"],["/linux_io_img/lseek.png","1d5dd93ebb25bb71c6d76754e52ffdfc"],["/linux_io_img/mmap.png","f5705b43a4988a93ecadf6f3d1569f64"],["/linux_io_img/mmap2.png","81f2063bca9be8ab5852f0885ae2fb4d"],["/linux_io_img/open.png","331d741178802e78acd2f854f121d22a"],["/linux_io_img/rw.png","2a7be9920268b73e49ad589fc5ac4bac"],["/linux_io_img/系统io和标准io.png","997a630daa0f9afd967b1d669cfad711"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","ef9bee5038027be0d1eb97befa105fb0"],["/sort_img/Sorting_heapsort_anim.gif","b7907d351809293c60658b0b87053c66"],["/sort_img/Sorting_shellsort_anim.gif","f9616f6892819e579a2d4ab10256a732"],["/sort_img/bubbleSort.gif","b7d216a5b292cf3a5412bbc7fbb56a9e"],["/sort_img/bucketSort.png","7a99a6c6b4dffdde2653560efaaa2635"],["/sort_img/countingSort.gif","827d96b8ca3682e8775f4916f22b45ac"],["/sort_img/heapSort.gif","658d0f58eed41a5c11cd1d1c039269ba"],["/sort_img/insertionSort.gif","be81c151f38d8923fe1ede31ac530ac4"],["/sort_img/mergeSort.gif","9541d116b9ad191437cb0f9acce7baf6"],["/sort_img/quickSort.gif","71c0f1c0ceb0e053c423426e7f343602"],["/sort_img/radixSort.gif","6690b1054909755ffcca96feb7a4d3ec"],["/sort_img/selectionSort.gif","44be35da53ae9ee564ce444542a43d10"],["/sort_img/sort1.png","fc109738981932bd194e176812dce9ad"],["/sort_img/sort2.png","b3345cf9d43747e68766862986f077d1"],["/sw-register.js","380d1918d1c00a712f3d8f0cdb7c712e"],["/tags/c/index.html","b233bc08a981009bd8cf23346c1f1f40"],["/tags/c语言/index.html","bb0a931d0265041de0f50c7935b75ad0"],["/tags/index.html","6beb0f889650e87d9536c606df0af5fd"],["/tags/linux/index.html","58844efca4f905d5553a57bad408a082"],["/tags/linuxIO/index.html","2fbdd95e931db8450fdf153623d7bb69"],["/tags/单链表/index.html","c7a100410b07563e208553e1307295a1"],["/tags/双向循环链表/index.html","ef6f37d7214eb3366a463c2ca672441f"],["/tags/双链表/index.html","afb4caab93c806202d6dbbbe967bb6e8"],["/tags/嵌入式/index.html","203c76f252006b2888bbe36aa6a435c2"],["/tags/循环链表/index.html","ba20d5eb2bd4ee30fc74e19b4900c38b"],["/tags/数据结构/index.html","9d643fd5d5ea4b54a1cd41e0bd714fdc"],["/tags/栈/index.html","5faa8d5cfc024f94ee5e1050d124f2bc"],["/tags/算法/index.html","9d3a915e567dc0c5b73bb63d2526b665"],["/tags/计算机网络/index.html","b2f503cdc5a16e096e227f7c09147d61"],["/tags/队列/index.html","8081358e409e0d8ae21cca71122ef708"]];
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
