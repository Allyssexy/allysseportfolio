import { motion } from 'motion/react';
import { MousePointer2, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 text-center">
      {/* Subtle Dopamine Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-dopa-pink/20 blur-[150px] rounded-full -z-10"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-dopa-blue/10 blur-[150px] rounded-full -z-10"
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-dopa-text/5 text-dopa-text text-sm font-black uppercase tracking-widest shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-dopa-yellow fill-current" />
        <span>Graphic Designer</span>
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter text-dopa-text"
          >
           Allysse <br /> 
            <span className="text-dopa-purple italic serif underline decoration-dopa-pink decoration-[12px] underline-offset-[-4px]">Design Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-xl mx-auto text-xl md:text-2xl text-dopa-text/60 font-medium leading-relaxed"
          >
           Designing visuals that connect ideas, motion, and storytelling.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-4"
        >
          <a
            href="#projects"
            className="group relative bg-dopa-text text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all hover:bg-dopa-pink hover:scale-105 active:scale-95 shadow-xl"
          >
            Explore Work
          </a>
          
         
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50"
      >
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-dopa-pink to-transparent" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Scroll</span>
      </motion.div>
    </section>
  );
};


