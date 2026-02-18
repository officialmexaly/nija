import React from 'react';
import { ArrowRightIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

export function CTA() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-6 border-t border-subtle bg-surface">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
          Let's work together
        </h2>
        <p className="text-body text-secondary mb-16 max-w-3xl mx-auto">
          Whether you need project management expertise, customer success optimization, or remote team leadership, I'm ready to help deliver measurable results.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a
            href="mailto:najarhmuhrd4@gmail.com"
            className="p-8 bg-background border border-subtle rounded-xl hover:border-border hover:shadow-elevated transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-surface border border-subtle flex items-center justify-center mx-auto mb-6">
              <MailIcon className="w-6 h-6 text-text" />
            </div>
            <div className="text-sm text-secondary mb-2 font-medium">Email</div>
            <div className="text-text font-semibold">najarhmuhrd4@gmail.com</div>
          </a>

          <a
            href="tel:+2348075604065"
            className="p-8 bg-background border border-subtle rounded-xl hover:border-border hover:shadow-elevated transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-surface border border-subtle flex items-center justify-center mx-auto mb-6">
              <PhoneIcon className="w-6 h-6 text-text" />
            </div>
            <div className="text-sm text-secondary mb-2 font-medium">Phone</div>
            <div className="text-text font-semibold">+234 807 560 4065</div>
          </a>

          <div className="p-8 bg-background border border-subtle rounded-xl">
            <div className="w-14 h-14 rounded-xl bg-surface border border-subtle flex items-center justify-center mx-auto mb-6">
              <MapPinIcon className="w-6 h-6 text-text" />
            </div>
            <div className="text-sm text-secondary mb-2 font-medium">Location</div>
            <div className="text-text font-semibold">Abuja, Nigeria</div>
          </div>
        </div>

        <a
          href="#contact"
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 px-10 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all focus-ring shadow-subtle hover:shadow-elevated"
        >
          Start a Conversation
          <ArrowRightIcon className="w-4 h-4" />
        </a>

        <div className="mt-10 flex flex-wrap justify-center gap-10 text-secondary text-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 bg-text rounded-full" />
            <span>Typical response within 24 hours</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 bg-text rounded-full" />
            <span>Remote collaboration worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
