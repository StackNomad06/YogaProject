import { motion } from 'framer-motion';

/** Compact hero banner used on inner pages (About, Services, Trainers, Blog, Contact). */
export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-forest-700 py-24 text-center text-white">
      <div className="pointer-events-none absolute -left-16 top-8 h-64 w-64 rounded-full bg-sage/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-px relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-4">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow text-gold-light"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-beige/80"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
