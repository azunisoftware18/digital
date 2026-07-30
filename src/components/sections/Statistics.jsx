import { motion } from "framer-motion";
import statsHqImg from "../../assets/images/backgrounds/statistics-boardroom.jpg";

export const Statistics = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 opacity-40 pointer-events-none select-none">
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="160" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="80" cy="80" r="120" stroke="#c7d2fe" strokeWidth="2" />
          <circle cx="80" cy="80" r="80" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="80" cy="80" r="40" stroke="#c7d2fe" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#c5a059] rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
          >
            <div className="mb-5 inline-block text-base font-bold tracking-wider">
              <span className="text-[#0a1d72]">Helping Businesses</span>{" "}
              <span className="text-[#c5a059]">Grow Online</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#1d2736] mb-6">
              Boost Your Online Presence and Generate More Quality Leads
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Our tailored digital marketing strategies help businesses improve search rankings, attract the right audience, increase conversions, and achieve sustainable business growth.
            </p>

            <div className="space-y-6">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-[#0a1d72] text-white rounded-[30%_70%_70%_30%_/_50%_60%_40%_50%] shadow-md shadow-[#0a1d72]/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                    <polygon points="12 22.08 12 12 3 6.92 3 17.08 12 22.08" />
                    <polygon points="12 12 21 6.92 21 17.08 12 22.08" />
                    <polygon points="12 2 21 6.92 12 12 3 6.92 12 2" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d2736] mb-1">Keyword Research & Strategy</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Identify high-value keywords that attract targeted traffic and improve search engine visibility.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-[#c5a059] text-white rounded-[60%_40%_30%_70%_/_60%_50%_50%_40%] shadow-md shadow-[#c5a059]/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d2736] mb-1">On-Page SEO Optimization</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Optimize your website structure and content to improve rankings, user experience, and conversions.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="absolute bottom-0 right-0 w-[85%] h-[90%] bg-[#f8fafc] rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
            
            <div className="relative z-10 w-[90%] lg:w-full max-w-[420px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
              <img 
                src={statsHqImg} 
                alt="Be One Top & Drive More Sales" 
                className="w-full h-auto object-cover aspect-[4/5] select-none"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/src/assets/images/homeImage/statistics-indian-boardroom.jpg';
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Statistics;
