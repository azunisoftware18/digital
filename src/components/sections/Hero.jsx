import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import heroBanner from '../../assets/images/hero/heroimage.png';

const HERO_CONTENT = {
  badgePrefix: 'Helping Businesses',
  badgeHighlight: 'Grow Online',
  title: "India's Trusted Digital Marketing Partner for Business Growth",
  description:
    'We help startups, local businesses, and growing brands across India increase their online visibility, generate quality leads, and drive measurable business growth through SEO, Google Ads, Social Media Marketing, and Web Development.',
  buttonText: 'Get Started',
  buttonLink: ROUTES.CONTACT,
};

const HeroShapes = () => (
  <>
    {/* Decorative Concentric Circles - Moved to far bottom-left edge outside the text area */}
    <div className="absolute -bottom-36 -left-28 sm:-left-20 opacity-50 pointer-events-none select-none">
      <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="200" r="160" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="6 6" />
        <circle cx="80" cy="200" r="120" stroke="#e0e7ff" strokeWidth="2" />
        <circle cx="80" cy="200" r="80" stroke="#e0e7ff" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="80" cy="200" r="40" stroke="#e0e7ff" strokeWidth="2" />
      </svg>
    </div>
    {/* Ambient Glow Orb - Moved to bottom-right whitespace outside text area */}
    <div className="absolute -bottom-16 right-4 sm:right-16 h-56 w-56 rounded-full bg-blue-50/60 opacity-50 blur-3xl pointer-events-none" />
  </>
);

const HeroContent = () => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col justify-center max-w-lg"
  >
    <div className="mb-3 mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 shadow-xs">
      <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
      <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#0a1d72]">
        {HERO_CONTENT.badgePrefix}
      </span>
      <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#c5a059]">
        {HERO_CONTENT.badgeHighlight}
      </span>
    </div>

    <h1 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold leading-[1.15] text-[#1d2736] tracking-tight">
      {HERO_CONTENT.title}
    </h1>

    <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 max-w-md">
      {HERO_CONTENT.description}
    </p>

    <div className="mt-8">
      <Link
        to={HERO_CONTENT.buttonLink}
        className="inline-flex items-center rounded-lg bg-[#c5a059] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b38e47] shadow-sm hover:shadow-md"
      >
        {HERO_CONTENT.buttonText}
      </Link>
    </div>
  </motion.div>
);

const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="relative flex items-center justify-center w-full"
  >
    <img
      src={heroBanner}
      alt="Bespoke Branding Solutions"
      className="relative z-10 w-full max-w-[650px] object-contain select-none"
    />
  </motion.div>
);

export const Hero = () => (
  <section className="relative overflow-hidden bg-white">
    <HeroShapes />
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="w-full lg:col-span-5 z-10">
          <HeroContent />
        </div>
        <div className="w-full lg:col-span-7 flex justify-center lg:justify-end">
          <HeroImage />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
