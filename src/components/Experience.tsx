import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 bg-dopa-bg">
      <div className="max-w-4xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-dopa-purple block mb-2">My Journey</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-dopa-text">
            Learning <br /> <span className="text-dopa-green italic serif">Path.</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            className="h-2 bg-dopa-pink mx-auto rounded-full w-24" 
          />
        </div>

        <div className="relative space-y-16">
          <div className="absolute left-[39px] top-4 bottom-4 w-px bg-dopa-text/10" />

          {EXPERIENCES.map((exp, index) => {
            const isEducation = exp.title.includes('B.A.');
            const Icon = isEducation ? GraduationCap : Briefcase;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pl-24 group"
              >
                <div className="absolute left-0 top-0 w-20 h-20 bg-white border border-dopa-text/5 rounded-[2rem] flex items-center justify-center shadow-sm group-hover:scale-105 transition-all duration-500 z-10">
                  <Icon className="w-8 h-8 text-dopa-text/20 group-hover:text-dopa-purple transition-colors" />
                </div>
                
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-dopa-text/30">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-dopa-text group-hover:text-dopa-pink transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="text-lg text-dopa-text/40 font-serif italic">
                    {exp.company}
                  </div>
                  <p className="text-lg text-dopa-text/60 leading-relaxed font-sans font-medium max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

