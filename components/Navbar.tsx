'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#work' },
  { name: 'Process', href: '/#process' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

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
            ? 'max-w-5xl bg-primary/80 backdrop-blur-md border border-border-light rounded-full py-3 px-6 shadow-lg shadow-black/5' 
            : 'max-w-7xl bg-transparent py-6 px-6 md:px-12'
        }`}
      >
        <Link href="/" className="text-2xl font-display font-bold tracking-tight text-text-primary">
          Kanzen
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-primary bg-text-primary hover:bg-accent-primary transition-colors rounded-full"
          >
            Book a Strategy Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex items-center gap-2 px-3 py-2 text-sm font-medium text-text-primary bg-secondary border border-border-light rounded-full hover:bg-border-light transition-colors"
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
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-text-primary hover:text-accent-primary transition-colors px-4 py-2 rounded-xl hover:bg-secondary"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-6 py-4 mt-2 text-base font-medium text-primary bg-text-primary hover:bg-accent-primary transition-colors rounded-full text-center"
            >
              Book a Strategy Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
