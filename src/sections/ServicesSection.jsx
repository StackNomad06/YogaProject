import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading.jsx';
import { services } from '../data/services.js';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  return (
    <section className="section-py bg-beige dark:bg-forest-800">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What We Offer"
          title="Yoga Programs for Every Body & Goal"
          subtitle="From boardrooms to living rooms, our certified trainers design programs that meet you exactly where you are."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="group card-surface flex flex-col gap-5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/8 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-sage dark:bg-sage/10 dark:text-sage">
                  <Icon size={26} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-forest-600/75 dark:text-beige/70">
                  {service.shortDescription}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors group-hover:text-gold-dark dark:text-sage"
                >
                  Learn More
                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
