const NextFederationPlugin = require('@module-federation/nextjs-mf');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    webpack(config) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'footer',
                filename: 'static/chunks/remoteEntry.js',
                exposes: {
                    './footerApp': './src/pages/index.js',
                }
            })
        );

        return config;
    },
}

module.exports = nextConfig
