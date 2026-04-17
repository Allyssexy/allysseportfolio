import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES, PROJECTS } from '../constants';
import { Category, Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

export const Projects = ({ onProjectClick }: ProjectsProps) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-sage-light/5">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-muted/80">Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-semibold">Selected Works</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-ink text-beige-soft'
                    : 'bg-white text-ink/60 hover:bg-beige-soft border border-beige-soft'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (index % 3) * 0.1 
                  }}
                  onClick={() => onProjectClick(project)}
                  className="group cursor-pointer bg-white rounded-[40px] overflow-hidden p-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-dopa-bg/20 transition-all duration-500"
                >
                  <div className="overflow-hidden relative rounded-[30px] aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dopa-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="pt-6 space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-black text-dopa-pink">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-dopa-text group-hover:text-dopa-purple transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
