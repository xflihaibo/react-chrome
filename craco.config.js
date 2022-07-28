const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#00bebe',
                            '@link-color': ' #00bebe', // 链接色
                            '@font-size-base': '13px', // 主字号
                            '@border-radius-base': '2px',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
