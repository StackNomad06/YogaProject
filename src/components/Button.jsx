import { Link } from 'react-router-dom';

const VARIANT_CLASS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  gold: 'btn-gold',
};

/**
 * Reusable CTA button. Renders a <Link> for internal routes, an <a> for
 * external/anchor hrefs, or a <button> when only onClick is provided.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  className = '',
  icon: Icon,
  ...rest
}) {
  const classes = `${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon aria-hidden="true" className="text-base" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
