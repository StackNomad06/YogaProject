import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle.jsx';
import Button from './Button.jsx';
import { services } from '../data/services.js';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Trainers', to: '/trainers' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-beige/90 shadow-softer backdrop-blur-md dark:bg-forest-800/90'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Divine Yoga Studio — home">
          <img
            src="/logo.png"
            alt="Divine Heart Soul Yoga"
            className="h-12 w-12 rounded-full border border-sage/60 object-contain bg-white/80 p-1 shadow-sm"
          />
          <span className="font-heading text-xl font-bold text-forest dark:text-beige">
            Divine Heart Soul Yoga
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            if (link.label === 'Services') {
              return (
                <li
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onFocus={() => setServicesOpen(true)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setServicesOpen(false);
                    }
                  }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `relative text-sm font-medium tracking-wide transition-colors ${
                        isActive || servicesOpen
                          ? 'text-forest dark:text-sage'
                          : 'text-forest-600/70 hover:text-forest dark:text-beige/70 dark:hover:text-beige'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {(isActive || servicesOpen) && (
                          <motion.span
                            layoutId="nav-underline"
                            className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-gold"
                          />
                        )}
                      </>
                    )}
                  </NavLink>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 rounded-2xl border border-forest/10 bg-white/95 p-3 shadow-xl backdrop-blur dark:border-beige/10 dark:bg-forest-800/95"
                      >
                        <div className="grid gap-2">
                          {services.map((service) => {
                            const Icon = service.icon;
                            return (
                              <Link
                                key={service.slug}
                                to={`/services#${service.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="flex items-start gap-3 rounded-xl border border-transparent px-3 py-2.5 text-left transition-colors hover:border-sage/40 hover:bg-sage/10 dark:hover:bg-sage/10"
                              >
                                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest/8 text-forest dark:bg-sage/10 dark:text-sage">
                                  <Icon size={16} />
                                </span>
                                <span>
                                  <span className="block text-sm font-semibold text-forest dark:text-beige">
                                    {service.title}
                                  </span>
                                  <span className="mt-1 block text-xs leading-relaxed text-forest-600/70 dark:text-beige/70">
                                    {service.shortDescription}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative text-sm font-medium tracking-wide transition-colors ${
                      isActive
                        ? 'text-forest dark:text-sage'
                        : 'text-forest-600/70 hover:text-forest dark:text-beige/70 dark:hover:text-beige'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1.5 left-0 h-[2px] w-full bg-gold"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button to="/contact" variant="primary" className="!px-6 !py-3 text-xs">
            Book Free Trial
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-forest dark:text-beige"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-beige shadow-soft dark:bg-forest-800 lg:hidden"
          >
            <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 pb-6 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium ${
                        isActive
                          ? 'bg-forest/5 text-forest dark:bg-beige/10 dark:text-sage'
                          : 'text-forest-600/80 dark:text-beige/80'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="px-4 pt-2">
                <Button to="/contact" onClick={() => setOpen(false)} className="w-full">
                  Book Free Trial
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
