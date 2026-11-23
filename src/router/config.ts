import pages from "./pages.json";

// Single list of pages, shared with scripts/generate-pages.js (static HTML,
// sitemap and Netlify redirects are generated from it after the build).
export interface PageConfig {
  key: string;
  path: string;
  component: string;
  noIndex?: boolean;
}

const routes: PageConfig[] = pages;

export default routes;
