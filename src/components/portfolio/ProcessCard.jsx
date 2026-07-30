import { motion } from 'framer-motion';
import { Search, Target, Rocket, TrendingUp } from 'lucide-react';

const ICON_MAP = {
  Search,
  Target,
  Rocket,
  TrendingUp,
};

export const ProcessCard = ({ process, index }) => {
  const IconComponent = ICON_MAP[process.iconName] || Search;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between"
    >
      {/* Top Number Badge */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-3xl font-black text-[#c5a059]/20 group-hover:text-[#c5a059] transition-colors duration-300">
          {process.step}
        </span>
        <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-[#c5a059] text-[#c5a059] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>

      <div className="space-y-2 text-left">
        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#c5a059] transition-colors duration-200">
          {process.title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
          {process.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProcessCard;
