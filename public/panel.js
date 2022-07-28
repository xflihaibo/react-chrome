console.log('122', chrome);

// // 开始截屏
function handleCaptureScreen() {
	//   // 获取当前窗口 -> 回调函数包括当前窗口的详细信息，如窗口id等
	chrome.windows.getCurrent(function () {
		// 抓取当前tab的内容
		chrome.tabs.captureVisibleTab(null, { format: 'png' }, function (dataUrl) {
			const info = {
				action: 'CAPTURE_SCREEN',
				payload: dataUrl,
			};
			console.log(info);
			// popup._sendMsg(info);
		});
	});
}
