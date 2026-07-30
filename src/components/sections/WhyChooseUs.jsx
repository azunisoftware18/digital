import { motion } from "framer-motion";
import whyChooseUsSpecialist from "../../assets/images/services/why-choose-us-specialist.jpg";

export const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="absolute bottom-0 left-0 -translate-x-12 translate-y-12 opacity-40 pointer-events-none select-none">
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="200" r="160" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="80" cy="200" r="120" stroke="#c7d2fe" strokeWidth="2" />
          <circle cx="80" cy="200" r="80" stroke="#c7d2fe" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="80" cy="200" r="40" stroke="#c7d2fe" strokeWidth="2" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            <div className="relative z-10 w-full max-w-[420px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
              <img 
                src={whyChooseUsSpecialist} 
                alt="Business Analytics Specialist" 
                className="w-full h-auto object-cover aspect-[4/5] select-none"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="mb-5 inline-block text-base font-bold tracking-wider">
              <span className="text-[#0a1d72]">Helping Businesses </span>{" "}
              <span className="text-[#c5a059]">Grow Online</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#1d2736] mb-6">
              Track Performance and Grow Your Business with Data-Driven Insights
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Monitor your marketing performance with advanced analytics, understand customer behavior, and make smarter decisions that drive traffic, generate quality leads, and increase business growth.
            </p>

            <p className="text-[#1d2736] font-bold text-lg leading-snug mb-8">
              Make every marketing decision backed by accurate data and measurable results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-xl border border-amber-100 flex items-center justify-center text-[#c5a059] bg-amber-50/30 flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20V10M13 20V4M8 20V14M3 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 13L8 9L13 11L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 4H20V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#1d2736] tracking-tight">32%</div>
                  <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-0.5">Increase in Organic Traffic</div>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-xl border border-amber-100 flex items-center justify-center text-[#c5a059] bg-amber-50/30 flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 20V14M13 20V4M8 20V10M3 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 4L8 8L13 6L20 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 13H20V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#1d2736] tracking-tight">45%</div>
                  <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-0.5">Higher Lead Conversion Rate</div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
