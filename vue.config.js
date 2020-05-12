const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

const webpack = require('webpack');


module.exports = {
    devServer: {
        port: 20003,
        proxy: {
            '/api': {
                target: 'http://192.168.1.70:32102/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
    },
    outputDir: resolve("dist"),
    publicPath: "./",
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('image', resolve('src/image'))
            .set('style', resolve('src/style'))
    },
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({}),
        ]
    }
};