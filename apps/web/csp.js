const contentSecurityPolicy = `
  default-src 'self' 'unsafe-eval';
  img-src 'self' data: https://a.storyblok.com https://cdn.shopify.com https://i.ytimg.com https://authjs.dev;
  connect-src 'self' https://vitals.vercel-insights.com https://api.storyblok.com https://deardigital.vercel.app;
  style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com;
  style-src 'self' 'unsafe-inline';
  font-src 'self' https://fonts.gstatic.com;
  frame-src 'self' https://www.youtube.com https://www.buzzsprout.com;
  script-src-elem 'self' 'unsafe-inline' https://app.storyblok.com https://www.youtube.com https://www.buzzsprout.com;
`;

module.exports = contentSecurityPolicy;

