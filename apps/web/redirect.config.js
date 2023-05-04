const redirectConfig = [
  {
    source: '/page/:slug*',
    destination: '/:slug*',
    permanent: true,
  },
];

module.exports = redirectConfig;
