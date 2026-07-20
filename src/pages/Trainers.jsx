import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import TrainersSection from '../sections/TrainersSection.jsx';
import FounderSection from '../sections/FounderSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import { organizationSchema, breadcrumbSchema } from '../utils/schema.js';

export default function Trainers() {
  return (
    <>
      <SEO
        title="Meet Our Certified Yoga Trainers"
        description="Meet the certified yoga trainers at Divine Yoga Studio, each specializing in Hatha, Vinyasa, prenatal, and meditation instruction with years of hands-on experience."
        path="/trainers"
        keywords="Yoga Trainer, Yoga Studio, Wellness Coaching"
        schema={[organizationSchema, breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Trainers', path: '/trainers' }])]}
      />
      <PageHero
        eyebrow="Our Team"
        title="Expert Trainers, Every Step of the Way"
        subtitle="Certified, experienced, and genuinely invested in helping you build a sustainable practice."
      />
      <TrainersSection />
      <FounderSection />
      <ContactSection />
    </>
  );
}
