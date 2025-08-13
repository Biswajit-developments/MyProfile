/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourdomain.com', // Change this to your domain
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Allow all pages
      },
    ],
    additionalSitemaps: [
      'https://yourdomain.com/sitemap.xml', // Change this to your domain
    ],
  },
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: true,
  outDir: 'public',
};
