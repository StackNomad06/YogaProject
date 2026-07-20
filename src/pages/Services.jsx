import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import WhyChooseUs from '../sections/WhyChooseUs.jsx';
import FAQSection from '../sections/FAQSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import { services } from '../data/services.js';
import { organizationSchema, breadcrumbSchema, serviceSchema } from '../utils/schema.js';

export default function Services() {
  return (
    <>
      <SEO
        title="Yoga Programs — Corporate, Personal, Online & More"
        description="Explore Divine Yoga Studio's full range of programs: corporate yoga, personal training, online yoga classes, meditation, prenatal yoga, and senior citizen yoga."
        path="/services"
        keywords="Yoga Classes, Corporate Yoga, Online Yoga Classes, Meditation Classes, Prenatal Yoga"
        schema={[
          organizationSchema,
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]),
          ...services.map(serviceSchema),
        ]}
      />
      <PageHero
        eyebrow="Our Programs"
        title="Yoga & Wellness Programs for Every Goal"
        subtitle="Certified instruction, flexible formats, and programs built around real, measurable results."
      />

      <section className="section-py bg-white dark:bg-forest-700">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Choose Your Path"
            title="Six Ways to Practice With Us"
            subtitle="Every program is led by certified trainers and can be adapted to your schedule, whether in-studio, at your office, or online."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.slug}
                  id={service.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
                  className="card-surface flex flex-col gap-4 p-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/8 text-forest dark:bg-sage/10 dark:text-sage">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <h2 className="font-heading text-2xl font-semibold">{service.title}</h2>
                  <p className="leading-relaxed text-forest-600/75 dark:text-beige/70">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-forest transition-colors hover:text-gold-dark dark:text-sage"
                  >
                    Book a Free Trial <FiArrowUpRight />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <FAQSection />
      <ContactSection />
    </>
  );
}
