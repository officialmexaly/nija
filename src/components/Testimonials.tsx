import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef
  });
  const opacity = useTransform(
    scrollXProgress,
    [0, 0.1, 0.9, 1],
    [0.5, 1, 1, 0.5]
  );
  const testimonials = [
  {
    quote:
    "Naja'atu's dedication to customer success and process optimization transformed our operations. Her ability to maintain high response rates while improving efficiency is remarkable.",
    author: 'Amina Abdullahi',
    role: 'Operations Manager',
    company: 'Outsource Global'
  },
  {
    quote:
    'Working with Naja\'atu was exceptional. Her approach to problem-solving combines technical expertise with genuine empathy for customers, creating sustainable solutions.',
    author: 'Chinedu Okafor',
    role: 'Team Lead',
    company: 'Instance Car Fix'
  },
  {
    quote:
    "Naja'atu's project management skills speak for themselves, but what truly sets her apart is her commitment to delivering results while supporting team growth. Her collaboration has been invaluable.",
    author: 'Fatima Ibrahim',
    role: 'Product Lead',
    company: 'HNG Internship'
  },
  {
    quote:
    'In times of tight deadlines, Naja\'atu demonstrated the calm, organized leadership that inspired confidence across the entire team. Her strategic planning saved our project and positioned us for success.',
    author: 'Grace Okonkwo',
    role: 'Coordinator',
    company: 'UNICEF Project'
  }];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
            What Colleagues Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Perspectives from colleagues, managers, and team members
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
            Scroll horizontally →
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <motion.div
          ref={containerRef}
          className="overflow-x-auto scrollbar-hide pb-8"
          style={{
            opacity
          }}>

          <div
            className="flex gap-8 px-4"
            style={{
              width: 'max-content'
            }}>

            {testimonials.map((testimonial, index) =>
            <motion.div
              key={index}
              className="w-[90vw] md:w-[600px] flex-shrink-0"
              initial={{
                opacity: 0,
                x: 100
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}>

                <motion.div
                className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-slate-200/50 dark:border-slate-800/50 h-full shadow-glass"
                whileHover={{
                  y: -4,
                  boxShadow: '0 20px 40px rgba(6, 182, 212, 0.15)',
                  borderColor: 'rgba(6, 182, 212, 0.3)',
                  transition: {
                    duration: 0.3
                  }
                }}>

                  {/* Quote Icon */}
                  <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 rounded-xl mb-6"
                  initial={{
                    scale: 0,
                    rotate: -180
                  }}
                  whileInView={{
                    scale: 1,
                    rotate: 0
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    type: 'spring',
                    stiffness: 200
                  }}
                  viewport={{
                    once: true
                  }}>

                    <QuoteIcon
                    className="w-6 h-6 text-cyan-500"
                    aria-hidden="true" />

                  </motion.div>

                  {/* Quote Text */}
                  <blockquote className="mb-8">
                    <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                    <p className="text-lg font-black text-slate-950 dark:text-white mb-1 tracking-tight">
                      {testimonial.author}
                    </p>
                    <p className="text-base text-cyan-500 font-bold mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-8 gap-2"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            delay: 0.5
          }}
          viewport={{
            once: true
          }}>

          {testimonials.map((_, index) =>
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"
            whileHover={{
              scale: 1.5,
              backgroundColor: '#06B6D4'
            }} />

          )}
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-snap-type: x mandatory;
        }
        .scrollbar-hide > div > div {
          scroll-snap-align: center;
        }
      `}</style>
    </section>);

}