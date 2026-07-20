import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Divine Yoga Studio';
const SITE_URL = 'https://www.divineyogastudio.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * Centralized SEO component. Every page should render this once with a unique
 * title + description to satisfy dynamic meta title / description requirements.
 *
 * @param {Object} props
 * @param {string} props.title - Page-specific title (site name is appended).
 * @param {string} props.description - Meta description, ~150-160 chars.
 * @param {string} [props.path] - Route path, e.g. '/services'.
 * @param {string} [props.image] - Absolute URL to a social share image.
 * @param {Object|Array} [props.schema] - JSON-LD structured data object(s).
 * @param {string} [props.keywords] - Comma separated keyword list.
 */
export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE, schema, keywords }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Yoga Classes, Corporate Yoga & Wellness Coaching`;
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const schemaList = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured data */}
      {schemaList.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

export { SITE_NAME, SITE_URL, DEFAULT_IMAGE };
