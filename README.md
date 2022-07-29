# react-chrome

一个基于 react 架构 chrome 插件（V3）开发项目

## 启动

```json

//开发

yarn install

yarn run serve
yarn run start

//打包

npm run build

```

## 文件结构

```json
├── README.md
├── build
├── config
│   ├── env.js
│   ├── getHttpsConfig.js
│   ├── jest
│   │   ├── babelTransform.js
│   │   ├── cssTransform.js
│   │   └── fileTransform.js
│   ├── modules.js
│   ├── paths.js
│   ├── webpack
│   │   └── persistentCache
│   │       └── createEnvironmentHash.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── craco.config.js
├── nodemon.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── static
│       ├── css
│       │   └── content.css
│       └── images
│           └── logo.png
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── App.js
│   ├── api
│   │   └── index.js
│   ├── app.less
│   ├── assert
│   │   └── tool.less
│   ├── chrome
│   │   └── index.js
│   ├── components
│   │   ├── caseslist
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   ├── globalconfig
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   ├── interfaceassert
│   │   │   ├── index.jsx
│   │   │   └── index.less
│   │   └── normalconfig
│   │       ├── index.jsx
│   │       └── index.less
│   ├── config
│   │   └── index.js
│   ├── index.js
│   ├── pages
│   │   ├── background
│   │   │   └── index.js
│   │   ├── content
│   │   │   └── index.js
│   │   ├── devtools
│   │   │   ├── devtools.jsx
│   │   │   ├── index.js
│   │   │   └── index.less
│   │   ├── insert
│   │   │   └── index.js
│   │   ├── panel
│   │   │   ├── index.js
│   │   │   ├── index.less
│   │   │   └── panel.jsx
│   │   └── popup
│   │       ├── index.js
│   │       ├── index.less
│   │       └── popup.jsx
│   ├── store
│   │   └── index.js
│   └── until
│       └── index.js
├── task.md
└── yarn.lock
```

chrome 插件 panel 生效方式: 需要重新加载插件，并且关闭调试刷新，打开调试面板才可以生效
chrome 插件 popup 生效方式: 刷新页面即可生效
chrome 插件 content 生效方式:需要刷新页面
chrome 插件 insert 生效方式:不需要刷新页面，热加载

#### 参考文档

[nodemon]()
[react]()
