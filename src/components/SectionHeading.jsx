import { motion } from 'framer-motion';

/**
 * Consistent section header used across the site: eyebrow label + heading + optional subtext.
 * `as` lets callers choose the correct semantic heading level (h1/h2/h3) per page for SEO/a11y.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  as: HeadingTag = 'h2',
  light = false,
}) {
  const alignment = align === 'left' ? 'items-start text-left mx-0' : 'items-center text-center mx-auto';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && <span className={`eyebrow ${light ? 'text-gold-light' : ''}`}>{eyebrow}</span>}
      <HeadingTag
        className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-white' : ''
        }`}
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <p className={`font-body text-base leading-relaxed sm:text-lg ${light ? 'text-beige/85' : 'text-forest-600/80 dark:text-beige/70'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
