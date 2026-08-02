import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULTS = {
  title: 'Sarang Rajan | Portfolio',
  description:
    'Sarang Rajan — Mobile Team Lead & Full Stack Developer. Portfolio of apps, platforms, and digital products.',
  image: 'https://sarangrajan.in/logo.png',
};

const ENITEXA_OG_IMAGE = 'https://sarangrajan.in/assets/enitexa-logo-dark-bg.jpg';

const ENITEXA_BY_PATH = {
  '/enitexa.ai': {
    title: 'Enitexa.Ai | Mobile Apps, Websites & Digital Product Studio',
    description:
      'Enitexa.Ai builds mobile apps, websites, UI/UX, and digital products. Software studio by Sarang Rajan — modern, performance-focused development.',
  },
  '/enitexa.ai/about': {
    title: 'About Enitexa.Ai | Digital & Software Solutions Studio',
    description:
      'Learn about Enitexa.Ai — a digital and software solutions company delivering apps, websites, branding, and growth systems.',
  },
  '/enitexa.ai/services': {
    title: 'Services | Enitexa.Ai — App, Web & Product Development',
    description:
      'Enitexa.Ai services: mobile app development, website development, UI/UX design, branding, and scalable software solutions.',
  },
  '/enitexa.ai/work': {
    title: 'Work & Case Studies | Enitexa.Ai',
    description:
      'Selected Enitexa.Ai projects and case studies — mobile apps, websites, and digital products shipped for real businesses.',
  },
  '/enitexa.ai/solutions/laundry': {
    title: 'Cleanso | Custom Laundry Software by Enitexa.Ai',
    description:
      'Cleanso — white-label laundry management software. Customer app, delivery app, CMS + POS. Product planning and custom builds for India, UAE & GCC.',
  },
  '/enitexa.ai/cleanso': {
    title: 'Cleanso | Custom Laundry Software by Enitexa.Ai',
    description:
      'Cleanso — white-label laundry management software. Customer app, delivery app, CMS + POS. Product planning and custom builds for India, UAE & GCC.',
  },
  '/enitexa.ai/contact': {
    title: 'Contact Enitexa.Ai | Start a Project',
    description:
      'Contact Enitexa.Ai to discuss mobile apps, websites, or product development. Based in India — open for new work.',
  },
  '/enitexa.ai/core-enitexa': {
    title: 'Core Enitexa.Ai | How We Build',
    description:
      'Core Enitexa.Ai — our principles, process, and approach to building modern software products.',
  },
  '/enitexa.ai/learning': {
    title: 'Learning | Enitexa.Ai',
    description:
      'Enitexa.Ai learning resources for mobile and software development.',
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
 * Sets document title + meta for portfolio and Enitexa.Ai routes.
 * Helps Google / social previews once the page is crawled.
 */
export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalized = pathname.replace(/\/$/, '') || '/';
    const page =
      ENITEXA_BY_PATH[normalized] ||
      (normalized.startsWith('/enitexa.ai')
        ? ENITEXA_BY_PATH['/enitexa.ai']
        : DEFAULTS);

    const title = page.title;
    const description = page.description;
    const url = `https://sarangrajan.in${normalized === '/' ? '/' : normalized}`;
    const isEnitexa = normalized.startsWith('/enitexa.ai');
    const image = isEnitexa ? ENITEXA_OG_IMAGE : DEFAULTS.image;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', isEnitexa ? 'Enitexa.Ai' : 'Sarang Rajan');
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
