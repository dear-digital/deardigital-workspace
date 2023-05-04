import { PAGE_TYPES } from '@deardigital/shared/constants';
import { fetchPagePaths } from '@deardigital/shared/services';

export default async function preview(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const page = await fetchPagePaths(PAGE_TYPES.root, "en", true);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(400).json({ message: 'Invalid slug' });
  }

  const path = getPath(req.query.slug);

  // Rebuild static page again with latest changes
  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(path);
  } catch (err) {
    console.error(err);
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send(`Error revalidating: ${err}`);
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: path });
  res.end();
}

function getPath(slug: string) {
  if(!slug) {
    return `/`;
  }

  const isPageTypePage = slug.startsWith(PAGE_TYPES.page);
  if (isPageTypePage) {
    return `/${slug.replace(PAGE_TYPES.page, '')}`;
  }

  return `/${slug}`;
}
