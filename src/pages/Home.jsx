import SEO from '../components/SEO.jsx';
import Hero from '../sections/Hero.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import ServicesSection from '../sections/ServicesSection.jsx';
import WhyChooseUs from '../sections/WhyChooseUs.jsx';
import BenefitsSection from '../sections/BenefitsSection.jsx';
import FounderSection from '../sections/FounderSection.jsx';
import TrainersSection from '../sections/TrainersSection.jsx';
import TestimonialsSection from '../sections/TestimonialsSection.jsx';
import FAQSection from '../sections/FAQSection.jsx';
import BlogSection from '../sections/BlogSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import { organizationSchema, faqSchema } from '../utils/schema.js';
import { faqs } from '../data/faqs.js';

export default function Home() {
  return (
    <>
      <SEO
        title="Yoga Classes, Online Yoga Classes, Pilates, Corporate Yoga, Yoga Trainer, Wellness Coaching, Meditation Classes, Yoga Studio"
        description="Divine Heart Soul Yoga offers expert yoga classes, online yoga classes, corporate yoga, prenatal yoga, and meditation classes led by certified trainers with 6+ years of experience."
        path="/"
        keywords="Yoga Classes, Online Yoga Classes, Pilates, Corporate Yoga, Yoga Trainer, Wellness Coaching, Meditation Classes, Yoga Studio"
        schema={[organizationSchema, faqSchema(faqs)]}
      />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <BenefitsSection />
      <FounderSection />
      <TrainersSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection limit={3} />
      <ContactSection />
    </>
  );
}
