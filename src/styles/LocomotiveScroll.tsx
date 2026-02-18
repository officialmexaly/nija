import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

interface LocomotiveScrollProps {
  children: React.ReactNode;
}

export function LocomotiveScrollWrapper({ children }: LocomotiveScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    scrollRef.current = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
      tablet: { smooth: true },
      smartphone: { smooth: true }
    });

    return () => {
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
  );
}
