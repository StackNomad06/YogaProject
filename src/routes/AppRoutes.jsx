import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import PageLoader from '../components/PageLoader.jsx';

// Route-level code splitting keeps the initial bundle small for better Core Web Vitals.
const Home = lazy(() => import('../pages/Home.jsx'));
const About = lazy(() => import('../pages/About.jsx'));
const Services = lazy(() => import('../pages/Services.jsx'));
const Trainers = lazy(() => import('../pages/Trainers.jsx'));
const Blog = lazy(() => import('../pages/Blog.jsx'));
const Contact = lazy(() => import('../pages/Contact.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
