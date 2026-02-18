import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  AwardIcon,
  TrophyIcon,
  StarIcon,
  MedalIcon,
  CrownIcon,
  TargetIcon } from
'lucide-react';
export function Awards() {
  const awards = [
  {
    icon: CrownIcon,
    title: 'CEO of the Year',
    organization: 'Business Excellence Awards',
    year: '2023',
    description: 'Recognized for outstanding leadership and strategic vision'
  },
  {
    icon: TrophyIcon,
    title: 'Innovation Leader',
    organization: 'Tech Industry Forum',
    year: '2022',
    description: 'Digital transformation and technology integration'
  },
  {
    icon: StarIcon,
    title: 'Top 50 Executives',
    organization: 'Fortune Magazine',
    year: '2022',
    description: 'Listed among most influential business leaders'
  },
  {
    icon: MedalIcon,
    title: 'Excellence in Operations',
    organization: 'Operations Management Society',
    year: '2021',
    description: 'Operational efficiency and process optimization'
  },
  {
    icon: TargetIcon,
    title: 'Strategic Leadership Award',
    organization: 'Harvard Business Review',
    year: '2020',
    description: 'Market expansion and growth strategy'
  },
  {
    icon: AwardIcon,
    title: 'Lifetime Achievement',
    organization: 'Executive Leadership Council',
    year: '2019',
    description: 'Two decades of transformational leadership'
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20
      }
    }
  };
  return (
    <section className="py-32 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}>

          <motion.div
            className="inline-block w-16 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mb-6 rounded-full"
            initial={{
              width: 0
            }}
            whileInView={{
              width: 64
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            viewport={{
              once: true
            }} />

          <h2 className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-4 tracking-tight">
            Awards & Recognition
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Honored by leading organizations for excellence in leadership and
            innovation
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}>

          {awards.map((award) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                  transition: {
                    duration: 0.3
                  }
                }}>

                <div className="bg-slate-50/80 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 dark:border-slate-800/50 h-full">
                  {/* Icon and Year */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="inline-flex items-center justify-center w-14 h-14 bg-cyan-500/10 rounded-xl"
                      whileHover={{
                        rotate: 360
                      }}
                      transition={{
                        duration: 0.6
                      }}>

                      <Icon
                        className="w-7 h-7 text-cyan-500"
                        aria-hidden="true" />

                    </motion.div>
                    <span className="text-sm font-bold text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>

                  {/* Award Title */}
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-2 tracking-tight">
                    {award.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-base font-bold text-cyan-500 mb-4">
                    {award.organization}
                  </p>

                  {/* Description */}
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

}