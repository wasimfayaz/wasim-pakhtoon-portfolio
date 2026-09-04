import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import ServicesIndex from './pages/ServicesIndex';
import { ServiceDetail } from './pages/ServiceDetail';
import { LocationPage } from './pages/LocationPage';
import BlogIndex from './pages/BlogIndex';
import { BlogPost } from './pages/BlogPost';
import NotFound from './pages/NotFound';
import { SERVICES } from './data/services';
import { LOCATIONS } from './data/locations';
import { POSTS } from './data/blog';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'work', element: <Work /> },

      // Services
      { path: 'services', element: <ServicesIndex /> },
      ...SERVICES.map((s) => ({
        path: `services/${s.slug}`,
        element: <ServiceDetail slug={s.slug} />,
      })),

      // Flagship location pages (top-level slugs)
      ...LOCATIONS.map((l) => ({
        path: l.slug,
        element: <LocationPage slug={l.slug} />,
      })),

      // Blog
      { path: 'blog', element: <BlogIndex /> },
      ...POSTS.map((p) => ({
        path: `blog/${p.slug}`,
        element: <BlogPost slug={p.slug} />,
      })),

      // 404
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

/** Flat list of canonical, indexable paths — used to generate the sitemap. */
export const SITEMAP_PATHS: string[] = [
  '/',
  '/about',
  '/services',
  ...SERVICES.map((s) => `/services/${s.slug}`),
  '/work',
  ...LOCATIONS.map((l) => `/${l.slug}`),
  '/blog',
  ...POSTS.map((p) => `/blog/${p.slug}`),
  '/contact',
];
