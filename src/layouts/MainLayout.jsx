import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import MobileBottomBar from '../components/MobileBottomBar.jsx';
import FloatingSocialBar from '../components/FloatingSocialBar.jsx';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-beige dark:bg-forest-800">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-20 pb-20 md:pb-0">
        <Outlet />
      </main>
      <FloatingSocialBar />
      <MobileBottomBar />
      <Footer />
    </div>
  );
}
