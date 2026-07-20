import { SITE_URL } from '../components/SEO.jsx';

/** Organization / LocalBusiness schema — include on every page for brand trust signals. */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: 'Divine Yoga Heart Soul Yoga',
  alternateName: 'Divine Yoga & Wellness',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    'Divine Heart Soul Yoga offers expert yoga classes, online yoga, corporate yoga, prenatal yoga, senior yoga and meditation coaching led by certified trainers with 6+ years of experience.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '221 Lotus Garden Road, Sector 45',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122003',
    addressCountry: 'IN',
  },
  telephone: '+91-9084623216',
  email: 'hello@divineyogastudio.com',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/divine_heartsoulyoga?igsh=MzNkaW1wbzlmZTQ1',
    'https://www.facebook.com/divineyogastudio',
    'https://www.youtube.com/@divineyogastudio',
    'https://www.linkedin.com/company/divineyogastudio',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '486',
  },
};

/** Breadcrumb list schema builder. items: [{ name, path }] */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** FAQPage schema builder. faqs: [{ question, answer }] */
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

/** Service schema builder for individual programs. */
export function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'HealthAndBeautyBusiness',
      name: 'Divine Yoga Studio',
      url: SITE_URL,
    },
    areaServed: 'IN',
  };
}

/** BlogPosting schema builder. */
export function blogPostSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Divine Heart Soul Yoga',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Divine Heart Soul Yoga',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
  };
}
