import { motion } from 'framer-motion';
import brandCreativeIcon from '../../assets/images/brands/brand-creative-content.webp';
import brandCompetitorIcon from '../../assets/images/brands/brand-competitor-analysis.webp';
import brandCycleIcon from '../../assets/images/brands/brand-business-lifecycle.png';
import brandImplIcon from '../../assets/images/brands/brand-implementation.png';

const BRAND_CARDS = [
  {
    id: 'creative',
    title: 'Creative Content',
    description: 'Creating engaging content that builds trust, attracts customers, and drives growth.',
    icon: brandCreativeIcon,
    delay: 0.1,
  },
  {
    id: 'competitor',
    title: 'Competitor Analysis',
    description: 'Analyzing competitors to identify opportunities and strengthen your market position.',
    icon: brandCompetitorIcon,
    delay: 0.2,
  },
  {
    id: 'lifecycle',
    title: 'Business Life Cycle',
    description: 'Supporting business growth through every stage of success.',
    icon: brandCycleIcon,
    delay: 0.3,
  },
  {
    id: 'implementation',
    title: 'Implementation',
    description: 'Executing proven strategies with precision for measurable business results.',
    icon: brandImplIcon,
    delay: 0.4,
  },
];

export const Brands = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Decorative Circles */}
      <div className="absolute top-40 left-0 -translate-y-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <div className="relative flex items-center justify-center">
          <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-indigo-200/50 flex items-center justify-center">
            <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full bg-gradient-to-tr from-[#dbe4ff] via-[#e6eeff] to-[#f4f7ff] relative flex items-center justify-center">
              <div className="absolute right-2 bottom-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#c5a059] rounded-full shadow-lg shadow-[#c5a059]/40" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-4 text-left"
          >
            <div className="inline-block text-xs sm:text-sm font-bold tracking-wider mt-4">
              <span className="text-[#0a1d72]">Helping Businesses </span>
              <span className="text-[#c5a059]">Grow Online</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.2] text-[#1d2736] tracking-tight">
              Learn How to Grow <br className="hidden sm:inline" />
              Your Business <br className="hidden sm:inline" />
              in Days
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Help your business reach more customers with expert SEO, social media marketing, Google Ads, and result-driven digital marketing solutions.
            </p>
          </motion.div>

          {/* Right Column Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {BRAND_CARDS.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-md shadow-slate-200 border border-slate-200/80 border-b-[3px] border-b-[#c5a059] flex flex-col items-center text-center justify-between transition-transform duration-300 hover:-translate-y-1.5 group h-full"
              >
                <div className="mb-5 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d2736] mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
