import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import FounderSection from '../sections/FounderSection.jsx';
import WhyChooseUs from '../sections/WhyChooseUs.jsx';
import TestimonialsSection from '../sections/TestimonialsSection.jsx';
import { organizationSchema, breadcrumbSchema } from '../utils/schema.js';

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Our Story & Mission"
        description="Learn the story behind Divine Heart Soul Yoga: 5+ years of experience, certified trainers, and a mission to make authentic yoga accessible to everyone."
        path="/about"
        keywords="Yoga Studio, Yoga Trainer, Wellness Coaching"
        schema={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])]}
      />
      <PageHero
        eyebrow="About Divine Heart Soul Yoga"
        title="A Practice Built on Trust, Tradition & Care"
        subtitle="Since 2008, we've helped over a thousand students find balance through expert-led yoga and wellness coaching."
      />
      <AboutSection />
      <FounderSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </>
  );
}
