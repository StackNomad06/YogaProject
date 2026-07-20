import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import LazyImage from '../components/LazyImage.jsx';
import { trainers } from '../data/trainers.js';

export default function TrainersSection() {
  return (
    <section className="section-py bg-white dark:bg-forest-700">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Team"
          title="Certified Trainers Who Care"
          subtitle="Every instructor at Divine Yoga Studio is certified, experienced, and genuinely invested in your progress."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, index) => (
            <motion.article
              key={trainer.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="group card-surface overflow-hidden"
            >
              <div className="overflow-hidden">
                <LazyImage
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.specialty} instructor at Divine Yoga Studio`}
                  width={400}
                  height={480}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1.5 p-6">
                <h3 className="font-heading text-lg font-semibold">{trainer.name}</h3>
                <p className="text-sm font-medium text-gold-dark dark:text-gold">{trainer.specialty}</p>
                <p className="mt-1 text-xs leading-relaxed text-forest-600/70 dark:text-beige/65">
                  {trainer.certifications}
                </p>
                <p className="text-xs font-semibold text-forest-600/60 dark:text-beige/50">
                  {trainer.experience}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
