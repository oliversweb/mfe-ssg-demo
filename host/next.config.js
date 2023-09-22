const NextFederationPlugin = require('@module-federation/nextjs-mf');
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    webpack(config, options) {
        const { isServer } = options;
        config.plugins.push(
            new NextFederationPlugin({
                name: 'host',
                filename: 'static/chunks/remoteEntry.js',
                remotes: {
                    footer: `footer@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
                },
            })
        );

        return config;
    }
}

module.exports = nextConfig
