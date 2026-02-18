import React, { createContext, useContext, useRef, useEffect, ReactNode } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface ScrollContextType {
  scroll: LocomotiveScroll | null;
}

const ScrollContext = createContext<ScrollContextType>({ scroll: null });

export const useScroll = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Locomotive Scroll
    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      tablet: { smooth: true },
      smartphone: { smooth: true },
      class: 'is-revealed'
    });

    // Use Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-scroll', 'in');
            entry.target.classList.add('is-in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Observe all scroll elements after a short delay
    const observeTimeout = setTimeout(() => {
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach((el) => observer.observe(el));
    }, 300);

    return () => {
      clearTimeout(observeTimeout);
      observer.disconnect();
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        scrollRef.current.update();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScrollContext.Provider value={{ scroll: scrollRef.current }}>
      <div
        ref={containerRef}
        data-scroll-container
        style={{
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {children}
      </div>
    </ScrollContext.Provider>
  );
}
