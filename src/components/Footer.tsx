import { Sparkles } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-ink text-beige-soft/60 border-t border-beige-soft/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <span className="font-serif text-3xl font-black tracking-tighter text-dopa-text">Allysse</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-medium uppercase tracking-widest">
          <a href="#about" className="hover:text-gold-muted transition-colors">About</a>
          <a href="#projects" className="hover:text-gold-muted transition-colors">Work</a>
          <a href="#experience" className="hover:text-gold-muted transition-colors">Learning Path</a>
          <a href="#contact" className="hover:text-gold-muted transition-colors">Contact</a>
        </div>

        <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-50">
          © {currentYear} Allysse Portfolio. 
        </p>
      </div>
    </footer>
  );
};
