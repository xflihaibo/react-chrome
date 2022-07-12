# react-chrome

一个基于 react架构 chrome 插件（V3）开发项目


## 启动

``` json

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
│   ├── App.js
│   └── index.js
└── yarn.lock

```

#### 参考文档

[nodemon]()
[react]()



