import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
export function Projects() {
  const projects = [
  {
    title: 'Global Market Expansion Initiative',
    category: 'Strategic Growth',
    description:
    'Led comprehensive market entry strategy across 15 international markets, establishing regional headquarters and local partnerships. Resulted in $500M revenue increase and 40% market share growth.',
    image:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    title: 'Digital Transformation Program',
    category: 'Technology Leadership',
    description:
    'Orchestrated enterprise-wide digital transformation affecting 8,000+ employees. Implemented cloud infrastructure, AI-driven analytics, and automated workflows, achieving 45% efficiency improvement.',
    image:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    title: 'Strategic Acquisition & Integration',
    category: 'M&A Leadership',
    description:
    'Executed acquisition of three strategic competitors valued at $800M combined. Led post-merger integration, achieving synergy targets 6 months ahead of schedule and retaining 95% of key talent.',
    image:
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    title: 'Operational Excellence Initiative',
    category: 'Process Optimization',
    description:
    'Redesigned end-to-end supply chain operations across 25 facilities worldwide. Implemented lean manufacturing principles, reducing costs by $120M annually while improving quality metrics by 35%.',
    image:
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    title: 'Culture Transformation Program',
    category: 'Organizational Development',
    description:
    'Designed and implemented comprehensive culture change initiative focused on innovation, accountability, and employee engagement. Improved retention rate from 72% to 91% and employee satisfaction by 40%.',
    image:
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    link: '#'
  },
  {
    title: 'Sustainability & ESG Framework',
    category: 'Corporate Responsibility',
    description:
    'Established comprehensive ESG framework and sustainability roadmap. Achieved carbon neutrality across operations, improved diversity metrics by 50%, and enhanced corporate governance standards.',
    image:
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
    link: '#'
  }];

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-6 bg-slate-50 dark:bg-slate-950">

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
            Portfolio
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Transformational initiatives that delivered measurable impact and
            lasting value
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) =>
          <ProjectCard key={project.title} project={project} index={index} />
          )}
        </div>
      </div>
    </section>);

}
function ProjectCard({ project, index }: {project: any;index: number;}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -50 * (index % 2 === 0 ? 1 : -1)]
  );
  return (
    <motion.article
      className="group"
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}>

      <motion.div
        className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-glass border border-slate-200/50 dark:border-slate-800/50"
        whileHover={{
          y: -8,
          boxShadow: '0 20px 40px rgba(6, 182, 212, 0.15)',
          borderColor: 'rgba(6, 182, 212, 0.3)',
          transition: {
            duration: 0.3
          }
        }}>

        {/* Project Image with Parallax */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              y
            }}
            whileHover={{
              scale: 1.05
            }}
            transition={{
              duration: 0.4
            }} />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 left-4">
            <motion.span
              className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm font-bold rounded-full shadow-glow"
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + 0.2
              }}
              viewport={{
                once: true
              }}>

              {project.category}
            </motion.span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-3 tracking-tight">
            {project.title}
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>
          <motion.a
            href={project.link}
            className="inline-flex items-center text-cyan-500 font-bold group/link"
            whileHover={{
              x: 5
            }}
            transition={{
              duration: 0.2
            }}
            aria-label={`View case study for ${project.title}`}>

            View Case Study
            <ExternalLinkIcon
              className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              aria-hidden="true" />

          </motion.a>
        </div>
      </motion.div>
    </motion.article>);

}