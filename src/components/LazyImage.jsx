/**
 * Thin wrapper around <img> that enforces lazy-loading, async decoding, and
 * explicit dimensions to protect Core Web Vitals (prevents layout shift / CLS).
 */
export default function LazyImage({
  src,
  alt,
  className = '',
  width = 800,
  height = 600,
  priority = false,
  ...rest
}) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={className}
      {...rest}
    />
  );
}
