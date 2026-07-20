import { FiPhone, FiEdit3 } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './MobileBottomBar.css';

const phoneNumber = '+919084623216';
const whatsappUrl = 'https://wa.me/919084623216';

export default function MobileBottomBar() {
  return (
    <nav className="mobile-bottom-bar" aria-label="Quick actions">
      <a
        href={`tel:${phoneNumber}`}
        className="mobile-bottom-bar__action"
        aria-label="Call us"
      >
        <FiPhone size={22} aria-hidden="true" />
        <span>Call</span>
      </a>

      <Link to="/contact#contact" className="mobile-bottom-bar__action" aria-label="Fill a form">
        <FiEdit3 size={22} aria-hidden="true" />
        <span>Fill a Form</span>
      </Link>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mobile-bottom-bar__action"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={22} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </nav>
  );
}
