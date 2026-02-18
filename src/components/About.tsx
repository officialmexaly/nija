import React from 'react';
import { ArrowRightIcon, MapPinIcon } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20" data-scroll data-scroll-position="bottom">
          <p className="text-sm font-semibold text-secondary mb-5 uppercase tracking-widest">
            About
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 tracking-tight">
            Delivering excellence through strategic project management
          </h2>
        </div>

        {/* Main Content */}
        <div className="mb-20">
          {/* Introduction */}
          <div className="max-w-4xl mb-16" data-scroll data-scroll-position="left" data-scroll-delay="1">
            <p className="text-xl md:text-2xl text-secondary leading-relaxed mb-8">
              High-impact <span className="font-semibold text-text">Project Manager</span> and <span className="font-semibold text-text">Customer Success Specialist</span> based in Abuja, Nigeria.
            </p>
            <p className="text-body text-secondary leading-relaxed">
              I lead remote teams and optimize client lifecycle operations with precision and strategic focus. My approach combines Agile methodologies with data-driven decision making, ensuring every project delivers measurable results.
            </p>
          </div>

          {/* Pull Quote */}
          <div
            className="max-w-5xl mb-16 py-12 border-l-4 border-accent bg-surface/50 -ml-6 pl-8"
            data-scroll
            data-scroll-position="bottom"
            data-scroll-delay="2"
          >
            <blockquote className="text-2xl md:text-3xl font-bold text-text leading-relaxed tracking-tight">
              Passionate about leveraging technology and strategic planning to drive productivity and customer satisfaction in distributed teams.
            </blockquote>
          </div>

          {/* Two Column Info */}
          <div className="grid md:grid-cols-2 gap-12">
            <div data-scroll data-scroll-position="left" data-scroll-delay="3">
              <h3 className="text-lg font-bold text-text mb-4">Background</h3>
              <p className="text-body text-secondary leading-relaxed">
                Throughout my experience at companies like <span className="font-semibold text-text">Instance Car Fix</span>, <span className="font-semibold text-text">Outsource Global</span>, and <span className="font-semibold text-text">UNICEF</span>, I've consistently driven operational improvements—from reducing ticket backlogs to maintaining exceptional response rates.
              </p>
            </div>
            <div data-scroll data-scroll-position="right" data-scroll-delay="4">
              <h3 className="text-lg font-bold text-text mb-4">Approach</h3>
              <p className="text-body text-secondary leading-relaxed">
                My commitment to continuous improvement and process optimization ensures that every initiative I lead is set up for success. I bring a global perspective to project management, with experience working across diverse industries and organizational cultures.
              </p>
            </div>
          </div>
        </div>

        {/* Company Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10" data-scroll data-scroll-position="bottom" data-scroll-delay="5">
            <div className="h-px bg-border flex-1"></div>
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest whitespace-nowrap">
              Professional Experience
            </p>
            <div className="h-px bg-border flex-1"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Instance Car Fix', type: 'Project Management' },
              { name: 'Outsource Global', type: 'Customer Success' },
              { name: 'UNICEF', type: 'Program Coordination' },
              { name: 'HNG Internship', type: 'Agile Projects' },
              { name: 'Printivo', type: 'Operations' },
            ].map((company, index) => (
              <div
                key={index}
                className="bg-surface border border-subtle rounded-lg p-6 hover:border-accent transition-all group"
                data-scroll
                data-scroll-position="bottom"
                data-scroll-delay={String(index + 1) as any}
              >
                <p className="text-body-small font-semibold text-text mb-2 group-hover:text-accent transition-colors">
                  {company.name}
                </p>
                <p className="text-sm text-tertiary">
                  {company.type}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Banner */}
        <div
          className="bg-surface border border-subtle rounded-xl p-10 shadow-subtle mb-8"
          data-scroll
          data-scroll-position="bottom"
          data-scroll-scale
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-surface-elevated rounded-full border border-subtle">
              <MapPinIcon className="w-6 h-6 text-text" />
            </div>
            <div className="text-center md:text-left flex-1">
              <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-2">
                Based In
              </p>
              <p className="text-2xl font-bold text-text tracking-tight">
                Abuja, Nigeria
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-secondary">
                Available for remote opportunities worldwide
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="p-10 bg-accent text-white rounded-xl shadow-elevated"
          data-scroll
          data-scroll-position="bottom"
          data-scroll-scale
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight text-white">
                Ready to work together?
              </h3>
              <p className="text-body text-white/90">
                Let's discuss how I can help deliver results for your team.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface hover:bg-surface-elevated text-accent font-semibold rounded-lg transition-all focus-ring shadow-subtle hover:shadow-elevated whitespace-nowrap"
            >
              Get in Touch
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
