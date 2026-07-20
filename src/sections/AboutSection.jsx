import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading.jsx';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import LazyImage from '../components/LazyImage.jsx';
import Button from '../components/Button.jsx';

const CERTIFICATIONS = [
  'Registered Yoga School (RYS-500), Yoga Alliance',
  'Certified Corporate Wellness Program Provider',
  'International Association of Yoga Therapists Member',
];

const STATS = [
  { end: 6, label: 'Years of Experience' },
  { end: 70, label: 'Wellness Programs' },
  { end: 1200, label: 'Happy Students' },
  { end: 1000, label: 'Sessions Conducted' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-py bg-white dark:bg-forest-700">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl3 shadow-soft">
            <LazyImage
              src="/public/Yoga4.jpeg"
              alt="Founder of Divine Yoga Studio guiding a student through a yoga pose"
              width={900}
              height={1080}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden w-56 rounded-2xl bg-forest p-5 text-white shadow-gold sm:block">
            <p className="font-heading text-3xl font-bold text-gold-light">6+</p>
            <p className="text-sm text-beige/80">Years guiding students to balanced living</p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Our Story"
            title="Rooted in Tradition, Guided by Modern Wellness"
            align="left"
            as="h2"
          />
          <p className="font-body leading-relaxed text-forest-600/80 dark:text-beige/75">
            Divine Heart Soul Yoga was founded on a simple belief: yoga should meet you exactly
            where you are. What began as a single home studio has grown into a trusted wellness
            destination for individuals, families, and companies seeking real, lasting balance
            between work and life.
          </p>
          <p className="font-body leading-relaxed text-forest-600/80 dark:text-beige/75">
            Our mission is to make authentic, expert-led yoga accessible — whether you're
            stepping onto a mat for the first time or deepening a decade-long practice.
          </p>

          <ul className="flex flex-col gap-3">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert} className="flex items-start gap-3 text-sm text-forest-600/85 dark:text-beige/80">
                <FiCheckCircle className="mt-0.5 flex-shrink-0 text-gold" size={18} aria-hidden="true" />
                {cert}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-8 border-t border-forest/10 pt-8 dark:border-beige/10 sm:grid-cols-4 lg:grid-cols-2">
            {STATS.map((stat) => (
              <AnimatedCounter key={stat.label} end={stat.end} label={stat.label} />
            ))}
          </div>

          <Button to="/about" className="mt-2 w-fit">
            Learn Our Story
          </Button>
        </div>
      </div>
    </section>
  );
}
