import React from 'react';

export function Education() {
  const education = [
    {
      institution: 'Bayero University Kano',
      degree: 'Bachelor of Arts (B.A)',
      field: 'Special Needs Education/Sociology',
      period: '2018 – 2024',
      location: 'Kano, Nigeria'
    }
  ];

  const languages = [
    { name: 'English', level: 'Native', flag: '🇬🇧' },
    { name: 'Hausa', level: 'Native', flag: '🇳🇬' }
  ];

  return (
    <section id="education" className="py-32 px-6 border-t border-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <p className="text-sm font-semibold text-secondary mb-5 uppercase tracking-widest">
            Education & Languages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            Academic background
          </h2>
          <p className="text-body text-secondary max-w-3xl">
            Educational foundation and language proficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div
            className="p-10 bg-surface border border-subtle rounded-xl shadow-subtle hover:shadow-elevated transition-all"
            data-scroll
            data-scroll-position="left"
            data-scroll-delay="1"
            data-scroll-scale
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-text mb-6 tracking-tight">
                {education[0].institution}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-xl font-semibold text-text">
                    {education[0].degree}
                  </p>
                  <p className="text-body-small text-secondary mt-1">
                    {education[0].field}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary">
                  <span>{education[0].period}</span>
                  <span>•</span>
                  <span>{education[0].location}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-subtle">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2.5 h-2.5 bg-success rounded-full" />
                <span className="text-secondary font-medium">Graduated 2024</span>
              </div>
            </div>
          </div>

          {/* Languages Card */}
          <div
            className="p-10 bg-surface border border-subtle rounded-xl shadow-subtle hover:shadow-elevated transition-all"
            data-scroll
            data-scroll-position="right"
            data-scroll-delay="2"
            data-scroll-scale
          >
            <h3 className="text-3xl font-bold text-text mb-8 tracking-tight">
              Languages
            </h3>

            <div className="space-y-5">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-5 bg-background border border-subtle rounded-xl hover:border-border transition-all"
                  data-scroll
                  data-scroll-position="bottom"
                  data-scroll-delay={String(index + 3) as any}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{lang.flag}</span>
                    <div>
                      <p className="font-semibold text-text text-base">
                        {lang.name}
                      </p>
                      <p className="text-xs text-secondary mt-0.5">
                        Proficiency
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-text">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
