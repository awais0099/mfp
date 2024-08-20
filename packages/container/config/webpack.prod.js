const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const marketingAppDomain = 'http://localhost:8081'; //process.env.PRODUCTION_DOMAIN;
const authAppDomain = 'http://localhost:8082'; //process.env.PRODUCTION_DOMAIN;

const productionConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            remotes: {
                marketing: `marketing@${marketingAppDomain}/marketing/remoteEntry.js`,
                auth: `auth@${authAppDomain}/remoteEntry.js`,
            },
            shared: packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, productionConfig);