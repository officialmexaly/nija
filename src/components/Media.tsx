import React, { Children } from 'react';
import { motion } from 'framer-motion';
export function Media() {
  const mediaLogos = [
  {
    name: 'Forbes',
    featured: 'Top 100 CEOs'
  },
  {
    name: 'Wall Street Journal',
    featured: 'Leadership Profile'
  },
  {
    name: 'Bloomberg',
    featured: 'Market Insights'
  },
  {
    name: 'Fortune',
    featured: 'Executive Interview'
  },
  {
    name: 'Harvard Business Review',
    featured: 'Strategy Article'
  },
  {
    name: 'Financial Times',
    featured: 'Opinion Piece'
  },
  {
    name: 'The Economist',
    featured: 'Industry Analysis'
  },
  {
    name: 'CNBC',
    featured: 'Market Commentary'
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };
  return (
    <section className="py-32 px-6 bg-slate-50 dark:bg-slate-950">
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
            Media & Press
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Featured insights and commentary in leading business publications
          </p>
        </motion.div>

        {/* Media Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}>

          {mediaLogos.map((media, index) =>
          <motion.div
            key={media.name}
            variants={itemVariants}
            whileHover={{
              y: -8,
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)',
              transition: {
                duration: 0.3
              }
            }}>

              <div className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 dark:border-slate-800/50 h-full flex flex-col items-center justify-center text-center">
                {/* Logo Placeholder */}
                <motion.div
                className="w-full h-16 flex items-center justify-center mb-4"
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08 + 0.2
                }}
                viewport={{
                  once: true
                }}>

                  <span className="text-2xl font-black text-slate-950 dark:text-white tracking-tight">
                    {media.name}
                  </span>
                </motion.div>

                {/* Featured Tag */}
                <motion.span
                className="text-xs text-cyan-500 font-bold"
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08 + 0.4
                }}
                viewport={{
                  once: true
                }}>

                  {media.featured}
                </motion.span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.8
          }}
          viewport={{
            once: true
          }}>

          <p className="text-slate-600 dark:text-slate-400">
            Regular contributor to industry publications and speaker at global
            conferences
          </p>
        </motion.div>
      </div>
    </section>);

}