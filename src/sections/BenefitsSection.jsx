import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import LazyImage from '../components/LazyImage.jsx';
import { benefits } from '../data/benefits.js';

export default function BenefitsSection() {
  return (
    <section className="section-py bg-beige dark:bg-forest-800">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Benefits"
          title="What Regular Practice Gives You"
          subtitle="Beyond flexibility — a healthier, calmer, more focused version of yourself."
        />

        <div className="mt-16 flex flex-col gap-20">
          {benefits.map((benefit, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={benefit.title}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 32 : -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="overflow-hidden rounded-xl3 shadow-softer"
                >
                  <LazyImage
                    src={benefit.image}
                    alt={`Yoga practice illustrating the benefit: ${benefit.title}`}
                    width={900}
                    height={620}
                    className="h-72 w-full object-cover sm:h-80 lg:h-96"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: reversed ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  className="flex flex-col gap-4"
                >
                  <span className="font-heading text-5xl font-bold text-forest/10 dark:text-beige/10">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold sm:text-3xl">{benefit.title}</h3>
                  <p className="max-w-md leading-relaxed text-forest-600/75 dark:text-beige/70">
                    {benefit.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
