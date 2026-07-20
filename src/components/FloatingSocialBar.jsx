import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import './FloatingSocialBar.css';

const socialLinks = [
 
  {
    label: 'Follow Us on LinkedIn',
    href: 'https://www.linkedin.com/in/divine-heart-soul-yoga',
    icon: FaLinkedinIn,
    color: '#0A66C2',
  },
  {
    label: 'Follow Us on Instagram',
    href: 'https://www.instagram.com/',
    icon: FaInstagram,
    color: '#E4405F',
  },
  {
    label: 'Subscribe on YouTube',
    href: 'https://www.youtube.com/@divineyogastudio',
    icon: FaYoutube,
    color: '#FF0000',
  },
  {
    label: 'Chat on WhatsApp',
    href: 'https://wa.me/919084623216',
    icon: FaWhatsapp,
    color: '#25D366',
  },
  {
    label: 'Call Us',
    href: 'tel:+919084623216',
    icon: FiPhone,
    color: '#8A6D2F',
  },
];

export default function FloatingSocialBar() {
  return (
    <nav className="floating-social-bar" aria-label="Social and contact links">
      <ul className="floating-social-bar__list">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="floating-social-bar__item">
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="floating-social-bar__link"
                aria-label={item.label}
              >
                <span className="floating-social-bar__icon" style={{ color: item.color }}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className="floating-social-bar__tooltip">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
