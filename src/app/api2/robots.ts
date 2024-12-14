import { BASE_URL } from '@/utils/constants';
export default function handler(req, res) {
  const robots = `
      User-agent: *
      Disallow: 
      Sitemap: ${BASE_URL}/sitemap.xml
    `;
  res.send(robots);
}
