import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading.jsx';
import LazyImage from '../components/LazyImage.jsx';

const SOCIALS = [
  { icon: FaInstagram, href: 'https://www.instagram.com/divineyogastudio', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/divineyogastudio', label: 'LinkedIn' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@divineyogastudio', label: 'YouTube' },
];

export default function FounderSection() {
  return (
    <section className="section-py bg-forest text-beige">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-sm"
        >
          <div className="absolute -inset-4 rounded-xl3 border border-gold/30" />
          <div className="overflow-hidden rounded-xl3 shadow-soft">
            <LazyImage
              src="/Dinesh.jpeg"
              alt="Portrait of the founder of Divine Heart Soul Yoga"
              width={700}
              height={860}
              className="h-[420px] w-full object-cover sm:h-[500px]"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="Meet the Founder" title="Dinesh Chauhan" align="left" as="h2" light />
          <p className="font-heading text-lg italic text-gold-light">
            Founder &amp; Lead Yoga Therapist, E-RYT 500
          </p>
          <p className="leading-relaxed text-beige/80">
          Dinesh Chauhan
Founder & Lead Yoga Therapist | Yoga & Pilates Expert
Dinesh Chauhan is the visionary behind Divine Heart Soul Yoga, dedicated to transforming lives through the power of yoga and Pilates. With years of experience and deep knowledge, he has helped hundreds of clients achieve physical strength, mental clarity, and inner balance.
His journey began with a passion for holistic healing and traditional yoga practices. Over time, he mastered therapeutic yoga, weight management, posture correction, and stress relief techniques
          </p>
          <p className="leading-relaxed text-beige/80">
           Today, Dinesh provides personalized sessions, both online and at home across Delhi NCR, focusing on real, result-driven transformation.
          </p>

          <div className="grid grid-cols-2 gap-6 border-t border-beige/15 pt-6 sm:grid-cols-3">
            <div>
              <p className="font-heading text-2xl font-bold text-gold-light">6+</p>
              <p className="text-sm text-beige/70">Years Teaching</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-gold-light">E-RYT 500</p>
              <p className="text-sm text-beige/70">Yoga Alliance Certified</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-gold-light">40+</p>
              <p className="text-sm text-beige/70">Corporate Clients</p>
            </div>
          </div>

          <ul className="flex gap-3 pt-2">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-beige/10 transition-colors hover:bg-gold hover:text-forest-700"
                >
                  <Icon size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
