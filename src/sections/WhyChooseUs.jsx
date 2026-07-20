import { motion } from 'framer-motion';
import {
  FiAward,
  FiUsers,
  FiClock,
  FiHeart,
  FiWifi,
  FiMessageCircle,
} from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading.jsx';

const FEATURES = [
  { icon: FiAward, title: 'Certified Trainers', description: 'Every instructor holds internationally recognized yoga certifications and years of teaching experience.' },
  { icon: FiUsers, title: 'Personalized Guidance', description: 'Programs adapt to your body, goals, and pace — never a generic, one-size-fits-all class.' },
  { icon: FiClock, title: 'Flexible Timings', description: 'Early morning, lunchtime, or evening — book sessions that fit around your schedule.' },
  { icon: FiHeart, title: 'Holistic Wellness', description: 'We blend movement, breathwork, and mindfulness for complete mind-body wellbeing.' },
  { icon: FiWifi, title: 'Online & Offline Classes', description: 'Practice in-studio or join live from anywhere — the same quality instruction either way.' },
  { icon: FiMessageCircle, title: 'Community Support', description: 'Join a warm, encouraging community of practitioners on the same wellness journey as you.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section-py bg-white dark:bg-forest-700">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A Studio Built Around Trust & Results"
          subtitle="Everything about our approach is designed to help you build a sustainable, meaningful yoga practice."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="flex flex-col gap-4"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/30 text-gold-dark dark:text-gold">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-forest-600/75 dark:text-beige/70">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
