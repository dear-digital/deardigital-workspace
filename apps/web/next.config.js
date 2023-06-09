//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next/plugins/with-nx');
const { i18n } = require('./next-i18next.config');
const securityHeaders = require('./security-headers.config');
const CopyPlugin = require('copy-webpack-plugin');
const redirectConfig = require('./redirect.config');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  i18n: i18n,
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return redirectConfig;
  },
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: './security-headers.config.js',
            to: '../',
          },
          {
            from: './next-i18next.config.js',
            to: '../',
          },
          {
            from: './csp.js',
            to: '../',
          },
        ],
      })
    );

    // Important: return the modified config
    return config;
  },
};

module.exports = withNx(nextConfig);
