import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import BlogSection from '../sections/BlogSection.jsx';
import { organizationSchema, breadcrumbSchema } from '../utils/schema.js';

export default function Blog() {
  return (
    <>
      <SEO
        title="Wellness Blog — Yoga & Meditation Tips"
        description="Read the Divine  Heart Soul Yoga blog for practical yoga tips, meditation guidance, corporate wellness insights, and prenatal yoga advice from certified trainers."
        path="/blog"
        keywords="Yoga Classes, Meditation Classes, Wellness Coaching"
        schema={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])]}
      />
      <PageHero
        eyebrow="The Journal"
        title="Wellness Insights & Yoga Guidance"
        subtitle="Practical, expert-backed articles to support your practice on and off the mat."
      />
      <BlogSection limit={6} />
    </>
  );
}
