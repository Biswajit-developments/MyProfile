/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://biswajitnarzary.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Allow all pages
      },
    ],
    additionalSitemaps: [
      'https://biswajitnarzary.com/sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: true,
  outDir: 'public',
};
