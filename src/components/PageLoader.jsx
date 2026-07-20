/** Lightweight, on-brand loading indicator used as the Suspense fallback for route chunks. */
export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center" role="status" aria-label="Loading page">
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute h-14 w-14 rounded-full border border-sage animate-breatheRing" />
        <span className="h-4 w-4 rounded-full bg-gold animate-breathe" />
      </span>
    </div>
  );
}
