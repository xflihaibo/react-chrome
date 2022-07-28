# react-chrome

一个基于 react 架构 chrome 插件（V3）开发项目

## 启动

```json

//开发

yarn install

yarn run serve


//打包

npm run build

```

## 文件结构

```json

├── README.md
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
│       ├── images
│       │   └── logo.png
│       └── js
│           ├── background.js
│           ├── content.js
│           ├── insert.js
│           └── page.js
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   └── api //模拟接口
│   └── chrome //chrome 插件扩展
│   └── components //组件
│   └── config //全局配置，字典项等
│   └── pages //页面
│  		├── devtools
│  		├── panel
│  		├── popup
│   └── store //维护录入的脚本用例信息
│   └── until //工具函数
│   ├── App.js
│   └── index.js
└── yarn.lock
```

chrome 插件 panel 生效方式，需要重新加载插件，并且关闭调试刷新，打开调试面板才可以生效
chrome 插件 popup 生效方式，刷新页面即可生效

#### 参考文档

[nodemon]()
[react]()
