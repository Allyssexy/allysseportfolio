import { motion } from 'motion/react';
import { Download, Palette, Camera, Clapperboard, Monitor } from 'lucide-react';
import allysse from "../assets/allysse.jpg";
import cv from "../assets/Allysse-Resume.pdf";
export const About = () => {
  const skills = [
    { name: 'Graphic Design', icon: Palette, color: 'text-dopa-pink', bg: 'bg-dopa-pink/5' },
    { name: 'Photography', icon: Camera, color: 'text-dopa-yellow', bg: 'bg-dopa-yellow/5' },
    { name: 'Motion', icon: Clapperboard, color: 'text-dopa-blue', bg: 'bg-dopa-blue/5' },
    { name: 'Web Design', icon: Monitor, color: 'text-dopa-green', bg: 'bg-dopa-green/5' },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-dopa-bg">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-dopa-text tracking-tight uppercase"
          >
            Design in <br /> <span className="text-dopa-purple italic serif border-b-4 border-dopa-yellow">PROGRESS.</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-dopa-text/50 font-medium">
I create visual and motion design work while exploring and learning along the way.          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-[300px] h-[350px] md:w-[400px] md:h-[500px] rounded-[60px] overflow-hidden relative shadow-2xl group border-[12px] border-white">
              <img
                src={allysse}
                alt="Allysse"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dopa-pink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-dopa-pink" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dopa-pink">About Me</span>
              </div>
              <p className="text-xl text-dopa-text/70 leading-relaxed font-sans font-medium">
               I am a graphic designer based in Malaysia, creating visual work that communicates ideas clearly. I enjoy exploring ideas through each project, while ensuring every piece is delivered with care, consistency, and on time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-[2rem] bg-white border border-dopa-text/5 shadow-sm hover:shadow-md transition-all cursor-default group`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${skill.bg} ${skill.color} flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <span className="font-black uppercase tracking-widest text-[9px] text-dopa-text/40">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
             <motion.a
  href={cv}
  target="_blank"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-dopa-text text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-dopa-pink transition-colors"
>
  View My CV
</motion.a>
            <motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=wuxinyu964@gmail.com"
  target="_blank"
  whileHover={{ scale: 1.05 }}
  className="text-xs font-black uppercase tracking-[0.2em] text-dopa-text/40 hover:text-dopa-pink transition-colors"
>
  wuxinyu964@gmail.com
</motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

