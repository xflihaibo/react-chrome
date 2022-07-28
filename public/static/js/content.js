console.log('content', chrome);

function injectCustomJS(path) {
    const el = document.createElement('script');
    console.log(path);
    el.src = chrome.runtime.getURL(path);
    el.onload = function () {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(el);
}

injectCustomJS('static/js/insert.js');
