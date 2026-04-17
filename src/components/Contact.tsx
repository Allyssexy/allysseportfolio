import { motion } from 'motion/react';
import { Send, Instagram, Globe, Mail, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden relative border-t border-dopa-text/5">
      <div className="max-w-4xl mx-auto space-y-20 relative z-10 text-center">
        <div className="space-y-6">
          <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-dopa-text">
            Let's Make <br />
            <span className="text-dopa-pink italic serif bg-clip-text">Something Bold.</span>
          </h2>
          <p className="max-w-xl mx-auto text-dopa-text/40 text-xl font-medium">
            Feel free to reach out for collaborations or opportunities.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dopa-pink/10 p-10 md:p-16 rounded-[4rem] border border-dopa-text/5 shadow-sm relative text-dopa-text"
        >
<form
  className="space-y-8"
  action="https://formspree.io/f/xzdyrvbe"
  method="POST"
>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3 text-left">
                <label className="text-[10px] font-black uppercase tracking-widest text-dopa-text ml-4">Name</label>
                <input name="name" type="text" placeholder="Your Name" 
                  className="w-full bg-white border border-dopa-text/5 rounded-3xl px-8 py-5 focus:outline-none focus:ring-4 ring-dopa-pink/5 transition-all font-bold placeholder:text-dopa-text/30"
                />
              </div>
              <div className="space-y-3 text-left">
                <label className="text-[10px] font-black uppercase tracking-widest text-dopa-text ml-4">Email</label>
                <input name="email" type="email" placeholder="hello@studio.com"
                  className="w-full bg-white border border-dopa-text/5 rounded-3xl px-8 py-5 focus:outline-none focus:ring-4 ring-dopa-purple/5 transition-all font-bold placeholder:text-dopa-text/30"
                />
              </div>
            </div>
            <div className="space-y-3 text-left">
              <label className="text-[10px] font-black uppercase tracking-widest text-dopa-text ml-4">Message</label>
              <textarea name="message" rows={4} placeholder="How can I help you?"
                className="w-full bg-white border border-dopa-text/5 rounded-[2rem] px-8 py-6 focus:outline-none focus:ring-4 ring-dopa-green/5 transition-all font-bold resize-none placeholder:text-dopa-text/30"
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full group bg-dopa-text text-white py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 hover:bg-dopa-pink transition-all shadow-xl"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

       <div className="flex flex-wrap justify-center gap-12 pt-10">
  <a
    href="https://www.instagram.com/bylis_design"
    target="_blank"
    className="text-[10px] font-black uppercase tracking-[0.2em] text-dopa-text/20 hover:text-dopa-pink transition-all"
  >
    Instagram
  </a>

  <a
    href="https://www.behance.net/xinee2"
    target="_blank"
    className="text-[10px] font-black uppercase tracking-[0.2em] text-dopa-text/20 hover:text-dopa-pink transition-all"
  >
    Behance
  </a>

</div>
</div>
      {/* Soft Background Blurs */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dopa-purple/5 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dopa-blue/5 blur-[120px] rounded-full" />
    </section>
  );
};
