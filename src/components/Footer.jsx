import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { services } from '../data/services.js';

const QUICK_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Trainers', to: '/trainers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'Book a Free Trial', to: '/contact' },
];

const SOCIALS = [
  { icon: FaInstagram, href: 'https://www.instagram.com/divine_heartsoulyoga?igsh=MzNkaW1wbzlmZTQ1', label: 'Instagram' },
  { icon: FaYoutube, href: 'https://www.youtube.com/@divineyogastudio', label: 'YouTube' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/divine-heart-soul-yoga', label: 'LinkedIn' },
];
    
export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // In production, wire this up to your ESP (Mailchimp, Klaviyo, etc.)
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="bg-forest text-beige/85">
      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Link to="/" className="mb-4 flex items-center gap-2.5">
<img
  alt="Divine Heart Soul Yoga"
  className="h-10 w-10 rounded-full border border-sage/60 object-contain bg-white/80 p-1 shadow-sm"
  src="/logo.png"
/>


            <span className="font-heading text-xl font-bold text-white">Divine Heart  Soul Yoga</span>
          </Link>
          <p className="text-sm leading-relaxed text-beige/70">
            Transform your mind, body &amp; soul through yoga. Expert-led classes for
            individuals, corporates, and wellness seekers.
          </p>
          <ul className="mt-5 flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-beige transition-colors hover:bg-gold hover:text-forest-700"
                >
                  <Icon size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>
            
        <div>
          <h3 className="mb-5 font-heading text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-beige/70 transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-lg font-semibold text-white">Services</h3>
          <ul className="space-y-3 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="text-beige/70 transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-heading text-lg font-semibold text-white">Stay Inspired</h3>
          <p className="mb-4 text-sm text-beige/70">
            Subscribe for wellness tips, class updates, and exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2" noValidate>
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-beige/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe to newsletter"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold text-forest-700 transition-colors hover:bg-gold-dark hover:text-white"
            >
              <FiSend size={16} />
            </button>
          </form>
          {submitted && (
            <p role="status" className="mt-3 text-xs text-sage">
              Thanks for subscribing — check your inbox soon!
            </p>
          )}
        </div>
      </div>  

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 text-xs text-beige/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Divine Heart & Soul Yoga. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
