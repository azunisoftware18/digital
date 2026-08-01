import { motion } from 'framer-motion';
import logoImg from '../../assets/images/logos/digi-mitra-logo.png';

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#040817] text-white select-none">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute w-96 h-96 bg-[#c5a059]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-80 h-80 bg-[#0a1d72]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Brand Logo Container with Glowing Ring */}
        <div className="relative flex items-center justify-center">
          {/* Outer Rotating Gold Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-full border-2 border-transparent border-t-[#c5a059] border-r-[#c5a059]/40"
          />

          {/* Logo Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white/95 p-4 sm:p-5 rounded-2xl shadow-[0_0_40px_rgba(197,160,89,0.3)] border border-white/20"
          >
            <img
              src={logoImg}
              alt="Digi Mitra Enterprises Logo"
              className="h-14 sm:h-16 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/logo.png';
              }}
            />
          </motion.div>
        </div>

        {/* Animated Brand Tagline & Progress Bar */}
        <div className="flex flex-col items-center gap-2 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.3 }}
            className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#c5a059]"
          >
            D ENTERPRISES
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.25 }}
            className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase"
          >
            ELEVATE. ENGAGE. EXPAND.
          </motion.p>

          {/* Animated Gold Loading Dots */}
          <div className="flex items-center gap-1.5 pt-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: i * 0.18,
                  ease: 'easeInOut',
                }}
                className="w-2 h-2 rounded-full bg-[#c5a059]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
