import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading.jsx';
import LazyImage from '../components/LazyImage.jsx';
import { testimonials } from '../data/testimonials.js';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  return (
    <section className="section-py bg-sage/10 dark:bg-forest-800">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Student Stories"
          title="Real Results, Real Wellbeing"
          subtitle="Hear from the students, parents, and professionals who've made yoga part of their daily lives."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14 !pt-10"
          a11y={{ enabled: true }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <figure className="card-surface flex h-full flex-col gap-5 p-8">
                <div className="flex text-gold" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-forest-600/85 dark:text-beige/80">
                  “{t.review}”
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-forest/10 pt-5 dark:border-beige/10">
                  <LazyImage
                    src={t.image}
                    alt={`Portrait of ${t.name}`}
                    width={96}
                    height={96}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-forest-600/60 dark:text-beige/55">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
