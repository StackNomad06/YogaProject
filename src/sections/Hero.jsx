import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import Button from '../components/Button.jsx';

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-forest-700">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/public/Yoga1.jpeg"
          alt="Yoga practitioner in a calm, sunlit studio holding a meditative pose"
          width={2000}
          height={1333}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-800/90 via-forest-700/70 to-forest-700/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-800/80 via-transparent to-transparent" />
      </div>

      {/* Ambient floating orbs for depth */}
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-sage/10 blur-3xl animate-floatSlow" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-floatSlow" style={{ animationDelay: '2s' }} />

      <div className="container-px relative z-10 mx-auto flex max-w-7xl flex-col gap-8 py-32">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold-light"
        >
          Divine Heart Soul Yoga · Est. 2020
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Balance Your Work Life Through Yoga
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-xl font-body text-lg text-beige/85 sm:text-xl"
        >
          Expert yoga programs for individuals, corporates, and wellness seekers — guided by
          certified trainers with 6+ years of experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button to="/contact" variant="gold" icon={FaArrowRight}>
            Book Free Trial
          </Button>
          <Button to="/services" variant="secondary" icon={FaPlay} className="!bg-white/10 !text-white !border-white/30 hover:!bg-white/20">
            Explore Programs
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-sm font-medium text-beige/60"
        >
          Trusted by 800+ students and 40+ corporate teams
        </motion.p>
      </div>

      {/* Signature element: a slow "breathing" ring indicator — a 4-count inhale / 3-count hold / 
          matched to the rhythm of a resting breath, standing in for a generic bouncing chevron. */}
      <a
        href="#about"
        aria-label="Scroll to learn more, breathing indicator"
        className="group absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="relative flex h-12 w-12 items-center justify-center">
          <span className="absolute h-12 w-12 rounded-full border border-sage/50 animate-breatheRing" />
          <span className="absolute h-12 w-12 rounded-full border border-sage/30 animate-breatheRing" style={{ animationDelay: '2.3s' }} />
          <span className="h-2.5 w-2.5 rounded-full bg-gold animate-breathe" />
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-beige/60 transition-colors group-hover:text-gold-light">
          Breathe &amp; Scroll
        </span>
      </a>
    </section>
  );
}
