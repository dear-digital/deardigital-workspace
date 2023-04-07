module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:4200',
  outDir: './dist/apps/web/public',
  sourceDir: './dist/apps/web/.next',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
