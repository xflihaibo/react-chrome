// chrome.devtools.network.onNavigated.addListener(function (request) {
// 	console.log('onNavigated', request);
// 	// chrome.devtools.inspectedWindow.eval('console.log("Large image: " + unescape("' + escape(request.request.url) + '"))');
// });
// chrome.devtools.network.onRequestFinished.addListener(function (request) {
// 	console.log('onRequestFinished', request);
// 	// chrome.devtools.inspectedWindow.eval('console.log("Large image: " + unescape("' + escape(request.request.url) + '"))');
// });
console.log(chrome);
chrome.devtools.network.onRequestFinished.addListener(function (request) {
	console.log('onRequestFinished', request);
	// chrome.devtools.inspectedWindow.eval('console.log("Large <--send->image: " + unescape("' + escape(JSON.stringify(request)) + '"))');
});

chrome.devtools.panels.create(
	// title
	'V3',
	// iconPath
	null,
	// pagePath
	'panel.html'
);
