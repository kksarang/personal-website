import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULTS = {
  title: 'Sarang Rajan | Portfolio',
  description:
    'Sarang Rajan — Mobile Team Lead & Full Stack Developer. Portfolio of apps, platforms, and digital products.',
  image: 'https://sarangrajan.in/logo.png',
};

const HEXENITY_BY_PATH = {
  '/hexenity': {
    title: 'Hexenity | Mobile Apps, Websites & Digital Product Studio',
    description:
      'Hexenity builds mobile apps, websites, UI/UX, and digital products. Software studio by Sarang Rajan — modern, performance-focused development.',
  },
  '/hexenity/about': {
    title: 'About Hexenity | Digital & Software Solutions Studio',
    description:
      'Learn about Hexenity — a digital and software solutions company delivering apps, websites, branding, and growth systems.',
  },
  '/hexenity/services': {
    title: 'Services | Hexenity — App, Web & Product Development',
    description:
      'Hexenity services: mobile app development, website development, UI/UX design, branding, and scalable software solutions.',
  },
  '/hexenity/work': {
    title: 'Work & Case Studies | Hexenity',
    description:
      'Selected Hexenity projects and case studies — mobile apps, websites, and digital products shipped for real businesses.',
  },
  '/hexenity/solutions/laundry': {
    title: 'Cleanso | Custom Laundry Software by Hexenity',
    description:
      'Cleanso — white-label laundry management software. Customer app, delivery app, CMS + POS. Product planning and custom builds for India, UAE & GCC.',
  },
  '/hexenity/cleanso': {
    title: 'Cleanso | Custom Laundry Software by Hexenity',
    description:
      'Cleanso — white-label laundry management software. Customer app, delivery app, CMS + POS. Product planning and custom builds for India, UAE & GCC.',
  },
  '/hexenity/contact': {
    title: 'Contact Hexenity | Start a Project',
    description:
      'Contact Hexenity to discuss mobile apps, websites, or product development. Based in India — open for new work.',
  },
  '/hexenity/core-hexenity': {
    title: 'Core Hexenity | How We Build',
    description:
      'Core Hexenity — our principles, process, and approach to building modern software products.',
  },
  '/hexenity/learning': {
    title: 'Learning | Hexenity',
    description:
      'Hexenity learning resources for mobile and software development.',
  },
};

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets document title + meta for portfolio and Hexenity routes.
 * Helps Google / social previews once the page is crawled.
 */
export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalized = pathname.replace(/\/$/, '') || '/';
    const page =
      HEXENITY_BY_PATH[normalized] ||
      (normalized.startsWith('/hexenity')
        ? HEXENITY_BY_PATH['/hexenity']
        : DEFAULTS);

    const title = page.title;
    const description = page.description;
    const url = `https://sarangrajan.in${normalized === '/' ? '/' : normalized}`;
    const image = DEFAULTS.image;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', normalized.startsWith('/hexenity') ? 'Hexenity' : 'Sarang Rajan');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', image);
    upsertMeta('name', 'twitter:card', 'summary');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
    upsertLink('canonical', url);
  }, [pathname]);

  return null;
}
