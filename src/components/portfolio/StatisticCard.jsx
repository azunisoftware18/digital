import { motion } from 'framer-motion';

export const StatisticCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center text-white shadow-xl hover:bg-white/15 transition-all duration-300 group"
    >
      {/* Animated Counter Display */}
      <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 group-hover:scale-110 transition-transform duration-300">
        <span className="text-white">{stat.value}</span>
        <span className="text-[#c5a059] font-black">{stat.suffix}</span>
      </div>

      <h4 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase mb-1">
        {stat.label}
      </h4>

      <p className="text-blue-100/80 text-xs sm:text-sm font-normal leading-relaxed">
        {stat.description}
      </p>
    </motion.div>
  );
};

export default StatisticCard;
