import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

export function Philosophy() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  return (
    <section id="philosophy" className="relative py-20 md:py-32 px-6 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          style={{ y: y1 }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{ y: y2 }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          style={{ opacity }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <QuoteIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Philosophy</span>
          </motion.div>

          {/* Main Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white mb-6 tracking-tight">
              Project Management
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
                Philosophy
              </span>
            </h2>

            <motion.blockquote className="relative">
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 leading-tight mb-6"
                style={{ y: y1 }}
              >
                "Successful project management is not just about tasks and timelines.
              </motion.p>
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300 leading-tight mb-6"
                style={{ y: y2 }}
              >
                It's about people, communication, and delivering value
              </motion.p>
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                through collaboration and continuous improvement."
              </motion.p>
            </motion.blockquote>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-slate-600 dark:text-slate-400 font-semibold">
                — Naja'atu Muhammed
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {['Agility', 'Communication', 'Execution', 'Collaboration'].map((value, index) => (
            <motion.div
              key={value}
              className="group relative bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-800/50 text-center hover:border-cyan-500/30 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1, type: 'spring', stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.5)' }}
            >
              <p className="text-xl font-black text-slate-950 dark:text-cyan-500 tracking-tight">
                {value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
