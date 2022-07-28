//数据清洗
//属性转换
//样式类查找

const findPath = (path) => {
	let domArr = [];
	if (Array.isArray(path)) {
		for (let i = 0; i < path.length; i++) {
			let domName = path[i].localName;
			domName && domArr.push(domName);
			if (['html', 'document'].includes(domName)) {
				break;
			}
		}
	}
	if (domArr.length < 1) {
		//兼容滚动 document
		domArr = ['html'];
	}
	const domStr = domArr.reduceRight((pre, nex) => `${pre} > ${nex}`);
	return domStr;
};

const findxpathFun = (element) => {
	let reg = /^[0-9_]/; //百度
	if (element.id && element.id !== '' && !reg.test(element.id)) {
		return '//*[@id="' + element.id + '"]';
	}
	if (element === document.body) {
		return '//html/' + element.tagName.toLowerCase();
	}
	if (element.nodeName === '#document') {
		//doucument 滚动返沪的xpath 为//html
		return '//html';
	}
	let ix = 0;
	if (element.parentNode) {
		let siblings = element.parentNode.childNodes;
		for (let i = 0, l = siblings.length; i < l; i++) {
			let sibling = siblings[i];
			if (sibling == element) {
				let yl = 0;
				for (let y = 0, l = siblings.length; y < l; y++) {
					if (siblings[y].tagName == element.tagName) {
						yl += 1;
					}
				}
				return (
					until.findxpathFun(element.parentNode) +
					'/' +
					(element.tagName === 'svg'
						? '/*[name()="svg"]' + (ix + 1 == 1 && yl < 2 ? '' : '[' + (ix + 1) + ']')
						: element.tagName.toLowerCase() + (ix + 1 == 1 && yl < 2 ? '' : '[' + (ix + 1) + ']'))
				);
			} else if (sibling.nodeType == 1 && sibling.tagName == element.tagName) {
				ix++;
			}
		}
	} else {
		return '/';
	}
};
const findAttribute = (target) => {
	if (target) {
		let attributeArr = target.getAttributeNames() || [];
		let attrButArr = attributeArr.map((item) => ({ name: item, value: target.getAttribute(item) }));
		return attrButArr;
	} else {
		return [];
	}
};

const transformWindow = () => {
	let userAgent = window.navigator.userAgent;
	let isMobile = !!userAgent.match(/AppleWebKit.*Mobile.*/);
	until.sendMessage({ userAgent, isMobile, hasTouch: isMobile, deviceScaleFactor: window.devicePixelRatio, type: 'start' });
};

const getXpathDom = (ele) => document.evaluate(ele, document).iterateNext();

const addLive = (e, source) => {
	const { pageX, pageY, clientX, clientY, path, type, url } = e;
	let localName = e.target.localName;
	let rectObj = e.target.getBoundingClientRect ? e.target.getBoundingClientRect() : {};
	let localNameType = e.target.type || '';
	let value = localNameType === 'checkbox' ? e.target.checked : e.target.value;
	let innerHtml = e.target && e.target.innerText ? e.target.innerText.substring(0, 50) : '';
	if (path && !['html', 'document'].includes(localName)) {
		let xpath = until.findxpathFun(e.target);
		let selector = until.findPath(e.path);
		if (e.target && e.target.nodeName === 'SELECT') {
			source = 'select';
		}
		let iframe = window.self !== window.top ? window.self.location.href : '';
		let bool = e.target;
		if (bool && xpath) {
			until.sendMessage({
				bool,
				value,
				xpath,
				pageX,
				pageY,
				iframe,
				clientX,
				clientY,
				innerHtml,
				localName,
				x: rectObj.x,
				y: rectObj.y,
				localNameType,
				selector: selector,
				width: rectObj.width,
				height: rectObj.height,
				type: source || type,
				url: window.location.href,
			});
		}
	}
};

const sendMessage = (message) => {
	if (message) {
		if (typeof chrome.app.isInstalled !== 'undefined') {
			const str = window.JSON.stringify(message);
			console.log(str);
			chrome.runtime.sendMessage(str);
		}
	}
};

const exportJson = (meaasge) => {
	let topHref = false;
	try {
		topHref = top.location.href;
	} catch (e) {
		topHref = false;
	}
	if (meaasge.length > 2 && topHref && topHref === self.location.href) {
		let str = window.JSON.stringify(meaasge);
		let url = window.URL.createObjectURL(new Blob([`${str}`]));
		let link = document.createElement('a');
		link.style.display = 'none';
		link.href = url;
		link.setAttribute('download', (`${meaasge[0].title}` || 'etetest') + '.json');
		document.body.appendChild(link);
		link.click();
	}
};

const clearSelection = () => {
	if (window.getSelection) {
		window.getSelection().removeAllRanges();
	} else if (document.selection && document.selection.type != 'Control') {
		document.selection.empty();
	}
};

const mouseDownFun = (e) => {
	if (e.button == 0) {
		until.clearSelection();
	}
};

const keycodeFun = (e) => {
	// 删除、回车、tap 、esc、上、下、左、右
	//input表现不同
	//select  不生效
	if (['Backspace', 'Enter', 'Tab', 'Escape', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].includes(e.key)) {
		const { pageX, pageY, clientX, clientY } = e;
		let rectObj = e.target.getBoundingClientRect ? e.target.getBoundingClientRect() : {};
		let xpath = until.findxpathFun(e.target);
		let selector = until.findPath(e.path);
		//   let dom = until.getXpathDom(xpath)
		let dom = e.target;

		console.log(e, e.target.value, e.target.innerText);
		if (dom && dom.childElementCount < 1) {
			let iframe = window.self !== window.top ? window.self.location.href : '';
			until.sendMessage({
				xpath,
				pageX,
				pageY,
				iframe,
				clientX,
				clientY,
				selector,
				x: rectObj.x,
				y: rectObj.y,
				code: e.code,
				type: 'keyCode',
				value: e.target.value,
				width: rectObj.width,
				height: rectObj.height,
				localName: e.target.localName,
			});
		}
	}
};

const selectionFun = (e) => {
	if (e.button === 2) {
		//鼠标右键不支持加入事件
		return false;
	}
	const { pageX, pageY, clientX, clientY } = e;
	let iframe = window.self !== window.top ? window.self.location.href : '';
	let rectObj = e.target.getBoundingClientRect ? e.target.getBoundingClientRect() : {};
	let text = '';
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != 'Control') {
		text = document.selection.createRange().text;
	}

	!text && until.addLive(e, 'mouseup');
	if (e.target.children.length < 1 && text) {
		text = e.target.innerText;
		window.getSelection().selectAllChildren(e.target);
	}
	let attribute = until.findAttribute(e.target);
	let xpath = until.findxpathFun(e.target);
	let selector = until.findPath(e.path);
	if (e.target && e.target.localName === 'input') {
		console.log(e.target.value);
		attribute.push({ name: 'value', value: e.target.value });
	}
	console.log(text, e, attribute, rectObj);
	until.sendMessage({
		xpath,
		pageX,
		pageY,
		iframe,
		clientX,
		clientY,
		selector,
		attribute,
		x: rectObj.x,
		y: rectObj.y,
		message: text,
		width: rectObj.width,
		height: rectObj.height,
		localName: e.target.localName,
	});
};

const mouseMove = (e) => {
	clearTimeout(until.mouseTimer, e);
	until.mouseTimer = setTimeout(() => {
		if (!(['input', 'textarea'].includes(e.target.localName) || e.target.isContentEditable)) {
			until.sendMessage({ type: 'clearMenus' });
			const { pageX, pageY, clientX, clientY } = e;
			let xpath = until.findxpathFun(e.target);
			let selector = until.findPath(e.path);
			// let dom = until.getXpathDom(xpath)
			let dom = e.target;
			let rectObj = e.target.getBoundingClientRect ? e.target.getBoundingClientRect() : {};
			console.log('mouseMove', e);
			if (dom && dom.childElementCount < 1) {
				let attribute = until.findAttribute(e.target);
				let iframe = window.self !== window.top ? window.self.location.href : '';
				let message = '';
				try {
					message = dom.innerText;
				} catch (err) {
					console.log(err);
				}
				until.sendMessage({
					iframe,
					pageX,
					pageY,
					clientX,
					clientY,
					xpath,
					message,
					selector,
					attribute,
					x: rectObj.x,
					y: rectObj.y,
					width: rectObj.width,
					height: rectObj.height,
					localName: e.target.localName,
				});
				// 需要过滤 svg
				window.getSelection().selectAllChildren(e.target);
			}
		}
	}, 300);
};

const scrollFun = (e) => {
	clearTimeout(until.timer);
	until.timer = setTimeout(() => {
		let innerHtml = e.target.innerText;
		let selector = until.findPath(e.path);
		let xpath = until.findxpathFun(e.target);
		let { scrollTop, scrollLeft } = e.target;
		let iframe = window.self !== window.top ? window.self.location.href : '';
		scrollTop = scrollTop !== undefined ? scrollTop : document.documentElement.scrollTop || document.body.scrollTop;
		scrollLeft = scrollLeft !== undefined ? scrollLeft : document.documentElement.scrollLeft || document.body.scrollLeft;
		let rectObj = e.target.getBoundingClientRect ? e.target.getBoundingClientRect() : {};
		console.log(rectObj);
		if (scrollTop || scrollLeft) {
			until.sendMessage({
				xpath,
				iframe,
				selector,
				scrollTop,
				scrollLeft,
				innerHtml,
				x: rectObj.x,
				y: rectObj.y,
				type: 'scrollWin',
				width: rectObj.width,
				height: rectObj.height,
				url: window.location.href,
			});
		}
	}, 200);
};
