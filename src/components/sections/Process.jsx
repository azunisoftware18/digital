import { motion } from "framer-motion";

import avatar1 from "../../assets/images/team/owner-shubham.jpg";
import avatar2 from "../../assets/images/team/teamperson1.webp";
import avatar3 from "../../assets/images/team/teamperon2.webp";
import avatar4 from "../../assets/images/team/teamperson3.jpg";
import avatar5 from "../../assets/images/team/teamperson4.webp";
import avatar6 from "../../assets/images/team/teamperson5.webp";

export const Process = () => {
  const avatars = [
    { id: 1, src: avatar1, className: "top-8 left-[25%]" },
    { id: 2, src: avatar2, className: "top-1/2 left-[15%] -translate-y-1/2" },
    { id: 3, src: avatar3, className: "bottom-10 left-[25%]" },
    { id: 4, src: avatar4, className: "top-8 right-[25%]" },
    { id: 5, src: avatar5, className: "top-1/3 right-[15%]" },
    { id: 6, src: avatar6, className: "bottom-10 right-[25%]" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f9fafb] py-24 lg:py-32">
      <div className="absolute inset-0 opacity-15 flex items-center justify-center pointer-events-none select-none z-0">
        <svg width="1100" height="500" viewBox="0 0 1100 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#94a3b8">
            <circle cx="180" cy="140" r="2.5" /><circle cx="200" cy="130" r="3" /><circle cx="220" cy="150" r="2.5" />
            <circle cx="240" cy="140" r="3" /><circle cx="260" cy="120" r="2.5" /><circle cx="280" cy="160" r="3" />
            <circle cx="210" cy="170" r="2.5" /><circle cx="230" cy="190" r="3" /><circle cx="250" cy="180" r="2.5" />
            <circle cx="310" cy="280" r="2.5" /><circle cx="330" cy="310" r="3" /><circle cx="340" cy="340" r="2.5" />
            <circle cx="320" cy="360" r="2" /><circle cx="350" cy="290" r="3" />
            <circle cx="500" cy="120" r="2.5" /><circle cx="520" cy="110" r="3" /><circle cx="540" cy="130" r="2.5" />
            <circle cx="560" cy="120" r="3" /><circle cx="510" cy="150" r="2.5" /><circle cx="530" cy="180" r="3" />
            <circle cx="520" cy="220" r="3" /><circle cx="540" cy="260" r="2.5" /><circle cx="550" cy="300" r="3" />
            <circle cx="700" cy="120" r="2.5" /><circle cx="730" cy="110" r="3" /><circle cx="760" cy="130" r="2.5" />
            <circle cx="790" cy="140" r="3" /><circle cx="820" cy="160" r="2.5" /><circle cx="850" cy="150" r="3" />
            <circle cx="740" cy="170" r="2.5" /><circle cx="770" cy="190" r="3" /><circle cx="800" cy="210" r="2.5" />
            <circle cx="840" cy="320" r="3" /><circle cx="870" cy="340" r="2.5" /><circle cx="890" cy="330" r="3" />
          </g>
        </svg>
      </div>

      {avatars.map((avatar) => (
        <div 
          key={avatar.id}
          className={`absolute hidden md:block rounded-full border-[3px] border-white shadow-xl shadow-indigo-500/10 overflow-hidden w-14 h-14 lg:w-20 lg:h-20 transition-transform duration-300 hover:scale-110 z-10 ${avatar.className}`}
        >
          <img src={avatar.src} alt="Team member" className="w-full h-full object-cover" />
        </div>
      ))}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-[#c5a059] font-bold tracking-wider uppercase text-xs sm:text-sm block mb-3">
            Helping Businesses Grow Online
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#1d2736]">
           Our Success in Numbers
          </h2>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12 lg:gap-16 max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-4 right-4 h-0 border-b-2 border-dashed border-[#c5a059]/40 -translate-y-1/2 hidden md:block z-0"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center justify-center w-48 h-48 sm:w-52 sm:h-52 bg-[#c5a059] text-white rounded-full shadow-2xl shadow-[#c5a059]/30 transition-transform duration-300 hover:scale-105"
          >
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">120+</div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/90">Happy Clients</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center justify-center w-52 h-52 sm:w-56 sm:h-56 bg-[#0a1d72] text-white rounded-full shadow-2xl shadow-[#0a1d72]/40 transition-transform duration-300 hover:scale-105"
          >
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">250+</div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/90">Successful Projects</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10 flex flex-col items-center justify-center w-48 h-48 sm:w-52 sm:h-52 bg-[#c5a059] text-white rounded-full shadow-2xl shadow-[#c5a059]/30 transition-transform duration-300 hover:scale-105"
          >
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">10+</div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/90">Years of Excellence</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Process;
