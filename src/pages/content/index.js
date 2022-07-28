console.log('content---react');

const injectCustomJS = (path) => {
	const el = document.createElement('script');
	console.log(path);

	// eslint-disable-next-line
	el.src = chrome.runtime.getURL(path);
	el.onload = function () {
		this.remove();
	};
	(document.head || document.documentElement).appendChild(el);
};

injectCustomJS('static/js/insert/insert.js');
