import SEO from '../components/SEO.jsx';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Divine Yoga Studio's homepage to explore our yoga classes and wellness programs."
        path="/404"
      />
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 text-center">
        <span className="font-heading text-7xl font-bold text-forest/15 dark:text-beige/15">404</span>
        <h1 className="font-heading text-3xl font-semibold">This Page Has Wandered Off Its Mat</h1>
        <p className="max-w-md text-forest-600/70 dark:text-beige/70">
          The page you're looking for doesn't exist. Let's guide you back to center.
        </p>
        <Button to="/">Return Home</Button>
      </section>
    </>
  );
}
