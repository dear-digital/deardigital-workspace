const contentSecurityPolicy = `
  default-src 'self' 'unsafe-eval';
  img-src 'self' data: https://a.storyblok.com;
  connect-src 'self' https://vitals.vercel-insights.com https://api.storyblok.com;
  style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com;
  style-src 'self' 'unsafe-inline';
  font-src 'self' https://fonts.gstatic.com;
`;

module.exports = contentSecurityPolicy;
