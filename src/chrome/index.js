/* eslint-disable */
const isChromeExtend = chrome;

/**
 * @fuction  [监听页面所有请求]
 * @xfshz
 * @DateTime 2022-07-29T11:18:46+0800
 * @return   {[type]}                 [description]
 */
export const chromeListenerRequest = () => {
	if (!isChromeExtend.devtools) {
		return false;
	}
	chrome.devtools.network.onRequestFinished.addListener(function (request) {
		console.log('onRequestFinished', request);
		// chrome.devtools.inspectedWindow.eval('console.log("Large <--send->image: " + unescape("' + escape(JSON.stringify(request)) + '"))');
	});
};

/**
 * @fuction  [添加chrome页面调试面板eTest]
 * @xfshz
 * @DateTime 2022-07-29T11:18:46+0800
 * @return   {[type]}                 [description]
 */
export const chromePanelAdd = () => {
	if (!isChromeExtend.devtools) {
		return false;
	}
	chrome.devtools.panels.create('eTest', null, 'panel.html');
};

/**
 * @fuction  [通信发送消息]
 * @xfshz
 * @DateTime 2022-07-29T11:18:08+0800
 * @param   {[object]} message [发生消息]
 * @return   {[null]}
 */
export const chromeSendMes = (message) => {
	if (!isChromeExtend.app) {
		return false;
	}
	if (message) {
		if (typeof chrome.app.isInstalled !== 'undefined') {
			const str = window.JSON.stringify(message);
			chrome.runtime.sendMessage(str);
		}
	}
};

/**
 * @fuction  [动态向网页注入js 脚本]
 * @xfshz
 * @DateTime 2022-07-29T11:36:28+0800
 * @param    {[string]}                 path [路径地址]
 * @return   {[type]}                      [description]
 */
export const chromeInjectScript = (path) => {
	if (isChromeExtend.app) {
		const el = document.createElement('script');
		el.src = chrome.runtime.getURL(path);
		el.onload = function () {
			this.remove();
		};
		(document.head || document.documentElement).appendChild(el);
	}
};
