const fs = require('fs');
const { glob } = require('glob');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Your website URL
const siteUrl = 'https://yourdomain.com';

// Add all your routes here
const routes = [
  '',         // Homepage
  'about',
  'skills',
  'experience',
  'contact'
];

async function generateSitemap() {
  const pages = await glob('**/*.{js,jsx,ts,tsx,mdx}', {
    cwd: 'src/app',
    ignore: [
      '**/_*.{js,jsx,ts,tsx,mdx}',
      '**/api/**',
      '**/layout.{js,tsx}',
      '**/page.{js,tsx}'
    ]
  });

  // Convert file paths to URLs
  const pageUrls = pages
    .filter(page => {
      const parts = page.split('/');
      const fileName = parts[parts.length - 1];
      return fileName === 'page.tsx' || fileName === 'page.jsx';
    })
    .map(page => {
      const path = page
        .replace(/(\/index)?\.(jsx|tsx|js|mdx)$/, '')
        .replace(/\[([^\]]+)\]/g, ':$1');
      return path === 'index' ? '' : path;
    });

  const allRoutes = [...new Set([...routes, ...pageUrls])];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: siteUrl });

  // Add all pages to sitemap
  const links = allRoutes.map(route => ({
    url: `/${route}`,
    changefreq: 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }));

  // Return a promise that resolves with your XML string
  const data = await streamToPromise(
    Readable.from(links).pipe(stream)
  );

  // Write sitemap to public directory
  fs.writeFileSync('public/sitemap.xml', data.toString());
}

generateSitemap().catch(console.error);
