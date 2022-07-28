/* eslint-disable */
const isChromeExtend = chrome;
/**
 * [监听页面所有请求]
 * @return {[type]} [false]
 */
export const chromeListenerRequest = () => {
	console.log('🍎🍎', isChromeExtend.devtools);
	if (!isChromeExtend.devtools) {
		return false;
	}
	chrome.devtools.network.onRequestFinished.addListener(function (request) {
		console.log('onRequestFinished', request);
		// chrome.devtools.inspectedWindow.eval('console.log("Large <--send->image: " + unescape("' + escape(JSON.stringify(request)) + '"))');
	});
};

/**
 * [添加chrome页面调试面板eTest]
 * @return {[type]} [description]
 */
export const chromePanelAdd = () => {
	if (!isChromeExtend.devtools) {
		return false;
	}
	chrome.devtools.panels.create('eTest', null, 'panel.html');
};

//通信
