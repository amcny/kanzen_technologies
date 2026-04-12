'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
import { getCalApi } from "@calcom/embed-react";

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Services', href: '/#services' },
  { name: 'Process', href: '/#process' },
  { name: 'Work', href: '/#work' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"business-call"});
      cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (latest > 150 && latest > previous) {
      setIsHidden(true);
      setIsMobileMenuOpen(false);
    } else {
      setIsHidden(false);
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        if (lenis) {
          lenis.scrollTo(y, { force: true });
        } else {
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
      sessionStorage.setItem('lenis_ignore_hash', href);
      window.history.pushState(null, '', href);
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? 'pt-4 px-4' : 'pt-0 px-0'
      }`}
    >
      <div 
        className={`w-full transition-all duration-500 flex items-center justify-between ${
          isScrolled 
            ? 'max-w-5xl glass-panel rounded-full py-3 px-6' 
            : 'max-w-7xl bg-transparent py-6 px-6 md:px-12'
        }`}
      >
        <Link 
          href="/" 
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-2xl font-display font-bold tracking-tight text-gray-900 flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">K</div>
          Kanzen
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              scroll={false}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-text-secondary hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            data-cal-namespace="business-call"
            data-cal-link="kanzentechnologies/business-call"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":1,"theme":"light"}'
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-full premium-glow"
          >
            Book a Strategy Call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <>
              <X size={18} />
              <span>Close</span>
            </>
          ) : (
            <>
              <Menu size={18} />
              <span>Menu</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-4 right-4 bg-primary border border-border-light p-6 lg:hidden flex flex-col gap-4 shadow-xl rounded-3xl ${
              isScrolled ? 'top-[80px]' : 'top-[88px]'
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                scroll={false}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-text-primary hover:text-accent-primary transition-colors px-4 py-2 rounded-xl hover:bg-secondary"
              >
                {link.name}
              </Link>
            ))}
            <button
              data-cal-namespace="business-call"
              data-cal-link="kanzentechnologies/business-call"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":1,"theme":"light"}'
              onClick={() => {
                // Ensure the menu doesn't close before the event propagates
                setTimeout(() => setIsMobileMenuOpen(false), 500);
              }}
              className="inline-flex items-center justify-center px-6 py-4 mt-2 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-full text-center"
            >
              Book a Strategy Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
