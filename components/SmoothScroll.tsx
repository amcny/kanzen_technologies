'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { ReactNode, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function HashScrollerInner() {
  const lenis = useLenis();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!lenis) return;
    if (!window.location.hash) {
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true, force: true });
      
      // Also try after a short delay to ensure layout is complete
      const timeoutId = setTimeout(() => {
        window.scrollTo(0, 0);
        lenis.scrollTo(0, { immediate: true, force: true });
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [pathname, lenis]);

  useEffect(() => {
    if (!lenis) return;

    // Disable native scroll restoration to prevent conflicts with our custom scroller
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    let lastHash = '';
    let scrollTimeout: NodeJS.Timeout;

    const checkHashAndScroll = () => {
      const currentHash = window.location.hash;
      
      // Only trigger scroll if the hash has changed or if we just navigated to a new page with a hash
      if (currentHash && currentHash !== lastHash) {
        lastHash = currentHash;
        
        const ignoreHash = sessionStorage.getItem('lenis_ignore_hash');
        if (ignoreHash === currentHash || ignoreHash === `/${currentHash}`) {
          sessionStorage.removeItem('lenis_ignore_hash');
          return; // Ignore this hash change as it was already handled by a click listener
        }

        const targetId = currentHash.replace('#', '');
        
        let attempts = 0;
        const tryScroll = () => {
          const element = document.getElementById(targetId);
          if (element) {
            // Wait for next frame to ensure layout is complete
            requestAnimationFrame(() => {
              scrollTimeout = setTimeout(() => {
                // Tell Lenis to scroll to the element smoothly
                if (lenis) {
                  // Force lenis to recalculate dimensions before scrolling
                  // This is crucial when navigating between pages of different heights
                  lenis.resize();
                  // Calculate absolute Y position to avoid issues if lenis.scroll is out of sync with window.scrollY
                  const y = element.getBoundingClientRect().top + window.scrollY - 80;
                  lenis.scrollTo(y, { force: true });
                } else {
                  const y = element.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }, 250);
            });
          } else if (attempts < 40) { // Try for up to 2 seconds
            attempts++;
            scrollTimeout = setTimeout(tryScroll, 50);
          }
        };
        
        tryScroll();
      } else if (!currentHash && lastHash) {
        lastHash = '';
      }
    };

    // Check immediately on mount/route change
    checkHashAndScroll();

    // Constantly monitor for hash changes (catches Next.js internal navigations)
    const interval = setInterval(checkHashAndScroll, 100);

    // Also listen for native hash changes
    window.addEventListener('hashchange', checkHashAndScroll);

    return () => {
      clearInterval(interval);
      clearTimeout(scrollTimeout);
      window.removeEventListener('hashchange', checkHashAndScroll);
    };
  }, [lenis, pathname, searchParams]);

  return null;
}

function HashScroller() {
  return (
    <Suspense fallback={null}>
      <HashScrollerInner />
    </Suspense>
  );
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, 
        smoothWheel: true, 
        wheelMultiplier: 1.2, 
        syncTouch: false,
      }}
    >
      <HashScroller />
      {children}
    </ReactLenis>
  );
}
