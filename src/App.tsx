import React, { useEffect } from 'react';
import { ScrollProgress } from './styles/ScrollProgress';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
    // Set up Intersection Observer for scroll animations (both directions)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            // Remove class when element leaves view for repeat animations
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Observe all elements with data-scroll attribute
    const observeTimeout = setTimeout(() => {
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach((el) => observer.observe(el));
    }, 300);

    return () => {
      clearTimeout(observeTimeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-background transition-theme">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
