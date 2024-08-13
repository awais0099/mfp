const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const productionConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            remote: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, productionConfig);