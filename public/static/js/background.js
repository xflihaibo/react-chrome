console.log('background', chrome, chrome.declarativeNetRequest);

// chrome.devtools.network.onNavigated.addListener(function (request) {
// 	console.log('onNavigated', request);
// 	// chrome.devtools.inspectedWindow.eval('console.log("Large image: " + unescape("' + escape(request.request.url) + '"))');
// });
// chrome.devtools.network.onRequestFinished.addListener(function (request) {
// 	console.log('onRequestFinished', request);
// 	// chrome.devtools.inspectedWindow.eval('console.log("Large image: " + unescape("' + escape(request.request.url) + '"))');
// });

//webRequest

// const callback = function (details) {
// 	console.log(details);
// 	return details;
// };
// const filter = { urls: ['<all_urls>'] };
// const opt_extraInfoSpec = ['responseHeaders', 'extraHeaders'];
// // extraHeaders, responseHeaders.
// // traHeaders、responseHeaders
// // extraHeaders, responseHeaders.
// chrome.webRequest.onCompleted.addListener(callback, filter, opt_extraInfoSpec);

// function responseListener(details) {
// 	console.log(details);

// 	return details;
// }

// chrome.webRequest.onBeforeRequest.addListener(responseListener, filter, ['blocking']);
