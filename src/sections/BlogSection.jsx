import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiClock, FiCalendar } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading.jsx';
import LazyImage from '../components/LazyImage.jsx';
import { blogPosts } from '../data/blog.js';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogSection({ limit = 3 }) {
  const posts = blogPosts.slice(0, limit);

  return (
    <section className="section-py bg-white dark:bg-forest-700">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="From the Blog"
          title="Wellness Insights & Yoga Tips"
          subtitle="Practical guidance on yoga, meditation, and holistic wellness from our trainers."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="group card-surface flex flex-col overflow-hidden"
            >
              <Link to="/blog" className="overflow-hidden" aria-label={`Read: ${post.title}`}>
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={320}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="w-fit rounded-full bg-forest/8 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest dark:bg-sage/10 dark:text-sage">
                  {post.category}
                </span>
                <h3 className="font-heading text-lg font-semibold leading-snug">
                  <Link to="/blog" className="transition-colors hover:text-gold-dark dark:hover:text-gold">
                    {post.title}
                  </Link>
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-forest-600/70 dark:text-beige/65">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 border-t border-forest/10 pt-4 text-xs text-forest-600/55 dark:border-beige/10 dark:text-beige/50">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar aria-hidden="true" /> {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock aria-hidden="true" /> {post.readingTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
