import React from 'react';
import { ArrowRightIcon, MailIcon, MapPinIcon } from 'lucide-react';

export function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Status Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-subtle bg-surface shadow-subtle"
              data-scroll
              data-scroll-position="bottom"
              data-scroll-delay="1"
            >
              <span className="relative flex h-2 w-2">
                <span className="inline-flex rounded-full bg-success w-2 h-2 animate-pulse"></span>
              </span>
              <span className="text-sm font-medium text-secondary">
                Available for opportunities
              </span>
            </div>

            {/* Greeting */}
            <div className="space-y-4" data-scroll data-scroll-position="bottom" data-scroll-delay="2">
              <p className="text-lg font-medium text-secondary">
                Hello, I'm
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-text leading-[1.05] tracking-tighter">
                Naja'atu<br className="hidden sm:block" /> Muhammed
              </h1>
            </div>

            {/* Title */}
            <div className="space-y-3" data-scroll data-scroll-position="bottom" data-scroll-delay="3">
              <p className="text-xl text-secondary font-medium">
                Remote Project Manager & Customer Success Specialist
              </p>
              <div className="flex items-center gap-2 text-secondary">
                <MapPinIcon className="w-4 h-4" />
                <span className="text-base">Abuja, Nigeria</span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-body text-secondary max-w-xl"
              data-scroll
              data-scroll-position="bottom"
              data-scroll-delay="4"
            >
              Driving operational excellence through strategic project management and customer-centric solutions. 3+ years transforming remote teams and optimizing client operations.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4"
              data-scroll
              data-scroll-position="bottom"
              data-scroll-delay="5"
            >
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all focus-ring shadow-subtle hover:shadow-elevated dark:bg-white dark:text-accent dark:hover:bg-gray-100"
              >
                <MailIcon className="w-4 h-4" />
                Get in Touch
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-8 py-4 bg-surface border border-subtle text-text font-semibold rounded-lg hover:border-border transition-all focus-ring dark:bg-surface dark:border-border hover:bg-border-subtle dark:hover:bg-accent-light/10"
              >
                View Experience
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className="relative flex justify-center lg:justify-end"
            data-scroll
            data-scroll-position="right"
            data-scroll-delay="3"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div
                className="absolute inset-0 bg-gradient-to-br from-border-subtle to-border rounded-3xl transform rotate-3"
                data-scroll
                data-scroll-position="right"
                data-scroll-delay="4"
                data-scroll-scale
              ></div>
              <img
                src="/WhatsApp Image 2026-02-17 at 13.08.06.jpeg"
                alt="Naja'atu Muhammed"
                className="relative w-full h-full object-cover object-center rounded-3xl shadow-elevated"
                data-scroll
                data-scroll-position="right"
                data-scroll-delay="5"
                data-scroll-scale
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
