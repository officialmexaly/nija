import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { TrendingUpIcon, UsersIcon, GlobeIcon, AwardIcon } from 'lucide-react';
function AnimatedCounter({
  value,
  suffix = '',
  duration = 2




}: {value: number;suffix?: string;duration?: number;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000
  });
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);
  useEffect(() => {
    return springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);
  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>);

}
export function Stats() {
  const stats = [
  {
    icon: TrendingUpIcon,
    value: 3,
    suffix: '+',
    label: 'Years Experience',
    description: 'In project management & customer success'
  },
  {
    icon: AwardIcon,
    value: 100,
    suffix: '%',
    label: 'Response Rate',
    description: 'Maintained across all channels'
  },
  {
    icon: UsersIcon,
    value: 500,
    suffix: '+',
    label: 'Clients Served',
    description: 'Across multiple organizations'
  },
  {
    icon: GlobeIcon,
    value: 20,
    suffix: '%',
    label: 'Ticket Reduction',
    description: 'Through process optimization'
  }];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-slate-950 dark:bg-black">
      {/* Parallax Background Layers */}
      <motion.div
        className="absolute inset-0 opacity-20 mesh-gradient"
        initial={{
          scale: 1.2
        }}
        whileInView={{
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        viewport={{
          once: true
        }} />


      <div className="max-w-7xl mx-auto relative z-10">
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

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Impact by Numbers
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Measurable results that demonstrate a commitment to operational excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="relative"
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
                  margin: '-50px'
                }}>

                <motion.div
                  className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 text-center h-full"
                  whileHover={{
                    y: -8,
                    borderColor: 'rgba(6, 182, 212, 0.5)',
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                    transition: {
                      duration: 0.3
                    }
                  }}>

                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-xl mb-6"
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
                      delay: index * 0.1 + 0.3,
                      type: 'spring',
                      stiffness: 200
                    }}
                    viewport={{
                      once: true
                    }}>

                    <Icon
                      className="w-8 h-8 text-cyan-500"
                      aria-hidden="true" />

                  </motion.div>

                  <div className="text-5xl md:text-6xl font-black text-cyan-500 mb-2 tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="text-xl font-bold text-white mb-2">
                    {stat.label}
                  </div>

                  <div className="text-sm text-slate-400">
                    {stat.description}
                  </div>
                </motion.div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}