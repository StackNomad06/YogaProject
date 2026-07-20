import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import FAQSection from '../sections/FAQSection.jsx';
import { organizationSchema, breadcrumbSchema } from '../utils/schema.js';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us — Book a Free Trial Class"
        description="Get in touch with Divine Heart Soul Yoga  to book a free trial class, ask about corporate yoga packages, or learn more about our online and in-studio programs."
        path="/contact"
        keywords="Yoga Classes, Corporate Yoga, Yoga Studio"
        schema={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])]}
      />
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Start Your Wellness Journey"
        subtitle="Questions about classes, pricing, or corporate programs? Our team responds within one business day."
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}
