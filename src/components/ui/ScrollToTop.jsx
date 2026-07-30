import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Global Scroll-to-Top Component for React Router
 * Ensures every route change starts at the very top (0, 0) on both mobile and desktop browsers.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  // 1. Disable native browser scroll restoration globally on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // 2. Perform robust scroll reset across window, documentElement, and body
  const resetScroll = () => {
    try {
      window.scrollTo(0, 0);
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    } catch (e) {
      // Fallback
    }
  };

  useLayoutEffect(() => {
    // Immediate scroll reset before paint
    resetScroll();

    // Secondary rAF / setTimeout scroll resets to prevent mobile browser scroll restoration race conditions
    const rafId = requestAnimationFrame(() => {
      resetScroll();
    });

    const timerId = setTimeout(() => {
      resetScroll();
    }, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
