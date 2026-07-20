import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading.jsx';
import { faqs } from '../data/faqs.js';

function FAQItem({ faq, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-forest/10 py-5 dark:border-beige/10">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 text-left"
        >
          <span className="font-heading text-base font-semibold sm:text-lg">{faq.question}</span>
          <span
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest transition-transform duration-300 dark:bg-beige/10 dark:text-beige ${
              isOpen ? 'rotate-45' : ''
            }`}
          >
            <FiPlus aria-hidden="true" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-sm leading-relaxed text-forest-600/75 dark:text-beige/70">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-py bg-beige dark:bg-forest-800">
      <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQs"
          title="Common Questions, Answered"
          subtitle="Everything you need to know before starting your yoga journey with us."
          align="left"
        />
        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
