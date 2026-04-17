import { motion } from 'motion/react';
import cv from "../assets/Allysse-Resume.pdf";

export const Navbar = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Education', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-xl border-b border-dopa-text/10"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="font-serif text-3xl font-black tracking-tighter text-dopa-text">Allysse</span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <div className="nav flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[12px] font-black uppercase tracking-widest text-dopa-text/40 hover:text-dopa-pink transition-all whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
          <a 
  href={cv}
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-2 bg-dopa-purple text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-transform"
>
  View My CV
</a>
        </div>
      </div>

      <button className="md:hidden w-8 h-8 flex flex-col justify-center items-end gap-1.5 focus:outline-none">
        <div className="w-6 h-0.5 bg-ink rounded-full" />
        <div className="w-4 h-0.5 bg-ink rounded-full" />
      </button>
    </motion.nav>
  );
};
