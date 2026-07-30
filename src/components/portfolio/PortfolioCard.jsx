import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const PortfolioCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
      className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col group"
    >
      {/* Project Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
          loading="lazy"
        />

        {/* Floating Category Badge */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <span className="bg-[#c5a059] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-md">
            {project.category}
          </span>
        </div>

        {/* Floating Stats Tag */}
        <div className="absolute bottom-4 right-4 z-10">
          <span className="bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-md border border-white/10 shadow-md">
            ⚡ {project.stats}
          </span>
        </div>
      </div>

      {/* Card Body Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2 text-left">
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#c5a059] transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* View Project Button */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400">
            Tag: {project.categoryTag}
          </span>
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-900 group-hover:text-[#c5a059] transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
