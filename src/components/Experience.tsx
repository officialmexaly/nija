import React from 'react';
import { CalendarIcon, MapPinIcon, BriefcaseIcon } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'Instance Car Fix',
      role: 'Customer Service Representative',
      period: 'Dec 2024 – Present',
      location: 'Remote',
      type: 'Current',
      description: 'Managing inbound inquiries and orchestrating logistics between clients and mechanics.',
      achievements: [
        'Maintained 100% response rate across all channels',
        'Optimized calendar management reducing wait times',
        'De-escalated client concerns turning negatives into positives'
      ]
    },
    {
      company: 'Outsource Global',
      role: 'Customer Service Representative',
      period: 'Mar 2023 – Aug 2024',
      location: 'Remote',
      type: 'Previous',
      description: 'Provided omni-channel support and process optimization for client operations.',
      achievements: [
        'Reduced ticket backlog by 20% through process improvements',
        'Streamlined customer onboarding improving UX',
        'Delivered consistent support across all platforms'
      ]
    },
    {
      company: 'HNG Internship',
      role: 'Product Manager',
      period: '2021 – 2022',
      location: 'Remote',
      type: 'Previous',
      description: 'Led cross-functional teams delivering user-focused digital products using Agile.',
      achievements: [
        'Facilitated sprints ensuring milestone completion',
        'Conducted user research to define product roadmaps',
        'Led cross-functional teams in digital product delivery'
      ]
    },
    {
      company: 'UNICEF',
      role: 'Project Manager',
      period: 'Aug 2020 – Jan 2021',
      location: 'Remote',
      type: 'Previous',
      description: 'Executed high-stakes projects with limited resources and tight deadlines.',
      achievements: [
        'Achieved all deliverables within scope and budget',
        'Implemented contingency plans ensuring project flow',
        'Facilitated virtual meetings maintaining transparency'
      ]
    },
    {
      company: 'Printivo',
      role: 'Administrative Assistant',
      period: 'Aug 2023',
      location: 'Remote',
      type: 'Previous',
      description: 'Oversaw order processing lifecycle and coordinated production schedules.',
      achievements: [
        'Managed order processing with high accuracy',
        'Maintained zero downtime through inventory control',
        'Aligned production with strict deadlines'
      ]
    },
    {
      company: 'Ray\'s Haven',
      role: 'Project Coordinator',
      period: '2020',
      location: 'Remote',
      type: 'Previous',
      description: 'Provided program support and documentation for disability support services.',
      achievements: [
        'Educated families on care protocols',
        'Maintained rigorous documentation standards',
        'Facilitated care strategies with stakeholders'
      ]
    },
    {
      company: 'Chartered Institute of Cost and Management',
      role: 'Project Coordinator',
      period: 'Jan 2019 – 2020',
      location: 'Remote',
      type: 'Previous',
      description: 'Managed administrative operations and member relations.',
      achievements: [
        'Improved office efficiency through optimization',
        'Provided high-level member support',
        'Managed executive correspondence effectively'
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 border-t border-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-sm font-semibold text-secondary mb-5 uppercase tracking-widest">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            Professional journey
          </h2>
          <p className="text-body text-secondary">
            A track record of success across project management, customer operations, and remote collaboration
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className="relative md:grid md:grid-cols-2 gap-8 md:gap-16"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 w-3 h-3 bg-accent rounded-full border-4 border-background -translate-x-1/2" />

                  {/* Date - Alternates sides */}
                  <div className={isEven ? "md:text-right md:pr-16" : "md:text-left md:pl-16 md:order-2"}>
                    <div className={`flex items-center gap-2 mb-2 text-secondary ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                      <CalendarIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Content - Alternates sides */}
                  <div className={isEven ? "md:pl-16" : "md:pr-16 md:order-1"}>
                    <div
                      className="bg-surface border border-subtle rounded-xl p-8 hover:border-border transition-all shadow-subtle hover:shadow-elevated"
                      data-scroll
                      data-scroll-position={isEven ? "right" : "left"}
                      data-scroll-delay={String((index % 5) + 1) as any}
                      data-scroll-scale
                    >
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-text mb-2 tracking-tight">
                              {exp.role}
                            </h3>
                            <p className="text-lg font-semibold text-text">
                              {exp.company}
                            </p>
                          </div>
                          {exp.type === 'Current' && (
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-secondary">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-body text-secondary mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                          Key Achievements
                        </p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-body-small text-secondary leading-relaxed">
                              <BriefcaseIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
