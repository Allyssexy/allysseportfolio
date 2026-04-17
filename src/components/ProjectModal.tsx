import { motion, AnimatePresence } from 'motion/react';
import { X, Wrench, Lightbulb, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/60 backdrop-blur-md"
        />

        <motion.div
  layoutId={`card-${project.id}`}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.9 }}
  className="relative z-10 w-full max-w-6xl max-h-[90vh] bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-[1.2fr_0.8fr]"
>
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-30 w-12 h-12 bg-dopa-bg hover:bg-dopa-pink hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-xl active:scale-90"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="h-[80vh] overflow-y-auto scroll-smooth bg-dopa-bg p-6 md:p-12">
            <div className="space-y-8">
              {!project.gallery?.some(
  (item) => typeof item === "object" && item.type === "video"
) && (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2 }}
  >
    <img
      src={project.image}
      alt={project.title}
      referrerPolicy="no-referrer"
      className="w-full h-auto rounded-[3rem] shadow-lg border-[10px] border-white"
    />
  </motion.div>
)}
          {project.gallery?.map((item, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    {typeof item === "object" && item.type === "video" ? (
  <div className="flex justify-center items-center min-h-[60vh]">
    <video
      src={item.src}
      controls
      className="max-h-[70vh] object-contain rounded-[3rem]"
    />
  </div>
) : (
  <img
    src={item}
    alt={`${project.title} gallery ${idx}`}
    className="w-full h-auto rounded-[3rem] shadow-sm brightness-95 hover:brightness-100 transition-all duration-500 border-4 border-white"
  />
)}
  </motion.div>
))}
            </div>
          </div>

          <div className="h-[80vh] overflow-y-auto scroll-smooth p-8 md:p-16 bg-white relative">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dopa-pink block">
                  {project.category}
                </span>
                <h2 className="text-5xl md:text-6xl font-black leading-[0.9] text-dopa-text tracking-tighter">
                  {project.title}
                </h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-xs font-black uppercase tracking-widest text-dopa-text/20">Concept</h3>
                  <p className="text-xl text-dopa-text leading-relaxed font-sans font-medium">
                    {project.concept}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-5 py-2 bg-dopa-bg text-dopa-text text-[10px] rounded-xl font-black uppercase tracking-widest border border-dopa-text/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-dopa-bg">
                <p className="text-dopa-text/60 text-sm leading-relaxed mb-10">
                  {project.description}
                </p>
                {project.link && (
  <a
    href={project.link}
    target="_blank"
    className="w-full bg-dopa-text text-white py-6 rounded-full font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-dopa-pink transition-all active:scale-[0.98]"
  >
    <span>View Project</span>
    <ExternalLink className="w-4 h-4" />
  </a>
)}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
