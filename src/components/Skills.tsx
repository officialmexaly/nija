import React from 'react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Agile & Project Management',
      skills: [
        'Agile & Scrum',
        'Sprint Planning',
        'Cross-functional Leadership',
        'Risk Management',
        'Roadmap Definition',
        'Stakeholder Management'
      ]
    },
    {
      category: 'Customer Operations',
      skills: [
        'CRM Management',
        'Salesforce',
        'HubSpot',
        'Zendesk',
        'Ticket Resolution',
        'Client Onboarding'
      ]
    },
    {
      category: 'Technical Tools',
      skills: [
        'Microsoft Office Suite',
        'Advanced Excel',
        'Google Workspace',
        'Canva',
        'Zoom/Teams',
        'Trello/Asana/Jira'
      ]
    },
    {
      category: 'Communication',
      skills: [
        'Conflict Resolution',
        'SLA Adherence',
        'Brand Voice Uniformity',
        'Empathy-driven Strategies',
        'De-escalation',
        'Omni-channel Support'
      ]
    },
    {
      category: 'Strategic Skills',
      skills: [
        'Strategic Planning',
        'Critical Thinking',
        'Process Optimization',
        'Data Analysis',
        'Remote Collaboration',
        'Time Management'
      ]
    },
    {
      category: 'Languages',
      skills: [
        'English (Native)',
        'Hausa (Native)',
        'Data Entry',
        'Workflow Coordination',
        'Documentation',
        'Report Writing'
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20" data-scroll data-scroll-position="bottom">
          <p className="text-sm font-semibold text-secondary mb-5 uppercase tracking-widest">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            Core competencies
          </h2>
          <p className="text-body text-secondary max-w-3xl">
            A comprehensive toolkit built through project management and customer operations experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="p-8 bg-surface border border-subtle rounded-xl hover:border-border transition-all shadow-subtle hover:shadow-elevated"
              data-scroll
              data-scroll-position="bottom"
              data-scroll-delay={String((index % 5) + 1) as any}
              data-scroll-scale
            >
              <h3 className="text-xl font-bold text-text mb-6 tracking-tight">
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-body-small text-secondary"
                  >
                    <span className="w-1.5 h-1.5 bg-text rounded-full flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
