import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading.jsx';
import emailjs from "@emailjs/browser";
const SERVICE_OPTIONS = [
  'Corporate Yoga',
  'Personal Yoga Training',
  'Online Yoga Classes',
  'Meditation Sessions',
  'Prenatal Yoga',
  'Senior Citizen Yoga',
];

function ToastMessage({ toast }) {
  const isSuccess = toast.type === 'success';

  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className={`pointer-events-auto flex max-w-sm items-start gap-3 rounded-2xl border px-4 py-3 shadow-lg backdrop-blur ${isSuccess
        ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/70 dark:text-emerald-200'
        : 'border-red-200 bg-red-50 text-red-700 dark:border-red-900/40 dark:bg-red-950/70 dark:text-red-200'}`}
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 dark:bg-slate-900/40">
        {isSuccess ? <FiCheckCircle className="h-5 w-5" /> : <FiAlertCircle className="h-5 w-5" />}
      </span>
      <div>
        <p className="text-sm font-semibold">{isSuccess ? 'Success' : 'Error'}</p>
        <p className="text-sm leading-5">{toast.message}</p>
      </div>
    </motion.div>
  );
}

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;

    const hideTimer = window.setTimeout(() => {
      setToast(null);
    }, 3600);

    return () => window.clearTimeout(hideTimer);
  }, [toast]);

  const showToast = (type, message) => {
    setToast({ id: Date.now(), type, message });
  };

  const onSubmit = async (data) => {
    try {
      console.log('Contact form submitted:', data);

      await emailjs.send(
        "service_emzsqek",
        "template_kkaky4t",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          service: data.service,
          phone: data.phone,
        },
        "wF9ayY11d1VNU68GX"
      );

      reset();
      showToast('success', 'Thank you! Your form has been submitted successfully.');
    } catch (error) {
      console.error(error);
      showToast('error', 'We could not send your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section-py bg-beige dark:bg-forest-800">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Start Your Yoga Journey Today"
          subtitle="Have a question, or ready to book your free trial? Reach out and our team will respond within one business day."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info + map */}
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest dark:bg-sage/10 dark:text-sage">
                  <FiMapPin aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Studio Address</p>
                  <p className="text-sm text-forest-600/70 dark:text-beige/65">
                    Trillium Avenue, near Millennium City Center, Sector 29, Gurugram, Haryana 122001, India
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest dark:bg-sage/10 dark:text-sage">
                  <FiPhone aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+919084623216" className="text-sm text-forest-600/70 hover:text-gold-dark dark:text-beige/65">
                    +91 9084623216
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest dark:bg-sage/10 dark:text-sage">
                  <FiMail aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:divineheartsoulofficial@gmail.com" className="text-sm text-forest-600/70 hover:text-gold-dark dark:text-beige/65">
                    divineheartsoulofficial@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest dark:bg-sage/10 dark:text-sage">
                  <FiClock aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-sm text-forest-600/70 dark:text-beige/65">
                    Mon–Fri: 6:00 AM – 8:00 PM · Sat–Sun: 7:00 AM – 6:00 PM
                  </p>
                </div>
              </li>
            </ul>

            <div className="overflow-hidden rounded-xl3 shadow-softer">
              <iframe
                title="Divine Heart Soul Yoga location map"
                src="https://www.google.com/maps?q=Sector%2045%20Gurugram%20Haryana&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="card-surface flex flex-col gap-5 p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  {...register('name', { required: 'Please enter your name' })}
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none dark:border-beige/15 dark:bg-forest-700"
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  {...register('phone', {
                    required: 'Please enter your phone number',
                    pattern: { value: /^[0-9+\-\s()]{7,15}$/, message: 'Enter a valid phone number' },
                  })}
                  className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none dark:border-beige/15 dark:bg-forest-700"
                />
                {errors.phone && (
                  <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
                })}
                className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none dark:border-beige/15 dark:bg-forest-700"
              />
              {errors.email && (
                <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
                Service Interested In
              </label>
              <select
                id="service"
                defaultValue=""
                aria-invalid={!!errors.service}
                {...register('service', { required: 'Please select a service' })}
                className="w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none dark:border-beige/15 dark:bg-forest-700"
              >
                <option value="" disabled>
                  Select a program
                </option>
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p role="alert" className="mt-1 text-xs text-red-600">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                aria-invalid={!!errors.message}
                {...register('message', { required: 'Tell us a little about your goals' })}
                className="w-full resize-none rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm focus:border-gold focus:outline-none dark:border-beige/15 dark:bg-forest-700"
              />
              {errors.message && (
                <p role="alert" className="mt-1 text-xs text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="btn-primary mt-2 inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <FiCheckCircle className="h-4 w-4" />
                  Book Free Trial
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <div className="fixed right-4 top-4 z-50">
        <AnimatePresence>
          {toast && <ToastMessage key={toast.id} toast={toast} />}
        </AnimatePresence>
      </div>
    </section>
  );
}
