import { motion } from 'framer-motion';
import aboutTeamImg from '../../assets/images/about/about-team.jpg';

export const HomeAbout = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-start"
          >
            <div className="absolute top-0 right-0 w-[85%] h-[90%] bg-[#f8fafc] rounded-2xl -z-10 translate-x-4 -translate-y-4" />

            <div className="relative z-10 w-[90%] lg:w-full max-w-[420px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
              <img
                src={aboutTeamImg}
                alt="Online Marketing Team"
                className="w-full h-auto object-cover aspect-[4/5] select-none"
              />
            </div>

            <div className="absolute -bottom-8 left-12 w-28 h-28 bg-[#c5a059] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-lg shadow-[#c5a059]/20 z-20 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="mb-5 inline-block text-base font-bold tracking-wider">
              <span className="text-[#0a1d72]">Helping Businesses</span>{' '}
              <span className="text-[#c5a059]">Grow Online</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight text-[#1d2736] mb-6">
              Complete Digital Marketing Solutions for Business Growth
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              We provide end-to-end digital marketing services that help businesses improve online visibility, attract qualified leads, strengthen brand presence, and achieve sustainable business growth through data-driven strategies.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#c5a059] text-[#c5a059]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10L8.5 13.5L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d2736] mb-1">Search Engine Optimization (SEO)</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Improve search rankings, increase organic traffic, and build long-term online visibility for your business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#c5a059] text-[#c5a059]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10L8.5 13.5L15 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d2736] mb-1">Revenue-Driven Marketing</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Generate quality leads, maximize conversions, and grow your business with data-driven marketing strategies.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
