import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import serviceSem from "../../assets/images/services/service-sem-code.jpg";
import serviceAnalytics from "../../assets/images/services/service-business-analytics.jpg";
import serviceKeywords from "../../assets/images/services/service-keyword-selection.jpg";
import serviceCtr from "../../assets/images/services/service-click-through-rate.jpg";
import serviceLocal from "../../assets/images/services/service-local-seo-meeting.jpg";
import serviceContent from "../../assets/images/services/service-content-writing.jpg";

export const HomeServices = () => {
  const servicesList = [
    {
      title: "Search Engine Marketing",
      description: "Boost your website rankings and attract quality organic traffic.",
      image: serviceSem,
      shape: "rounded-full"
    },
    {
      title: "Business Analytics",
      description: "Track performance, measure growth, and make smarter business decisions.",
      image: serviceAnalytics,
      shape: "rounded-[60%_40%_30%_70%_/_60%_50%_50%_40%]"
    },
    {
      title: "Keyword Research",
      description: "Target high-value keywords that bring relevant visitors and conversions.",
      image: serviceKeywords,
      shape: "rounded-[50%_50%_70%_30%_/_30%_50%_70%_50%]"
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Run high-converting Google Ads campaigns with maximum return on investment.",
      image: serviceCtr,
      shape: "rounded-[40%_60%_70%_30%_/_40%_40%_60%_50%]"
    },
    {
      title: "Local SEO",
      description: "Increase your visibility in local searches and attract nearby customers.",
      image: serviceLocal,
      shape: "rounded-full"
    },
    {
      title: "Content Marketing",
      description: "Create engaging content that builds trust and drives customer engagement.",
      image: serviceContent,
      shape: "rounded-[30%_70%_60%_40%_/_50%_30%_70%_50%]"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-white pb-32">
      <div 
        className="bg-gradient-to-b from-[#0f2bb1] via-[#0b218f] to-[#0a1c72] pt-24 pb-36 text-white"
        style={{
          clipPath: "ellipse(115% 100% at 50% 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-[#c5a059] font-bold tracking-wider uppercase text-xs sm:text-sm block mb-3">
              Action To Brands
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-tight text-white mb-8">
              An Array of Scientific Digital Marketing Solutions
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#c5a059] text-[#c5a059] text-xs">✓</span>
                <span>SEO Services</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#c5a059] text-[#c5a059] text-xs">✓</span>
                <span>Google Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-[#c5a059] text-[#c5a059] text-xs">✓</span>
                <span>Social Media Marketing</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto items-center">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex gap-6 items-center group"
              >
                {/* Organic Blob & Circle Mask Image Container */}
                <div className={`w-24 h-24 sm:w-28 sm:h-28 overflow-hidden flex-shrink-0 shadow-lg ${service.shape} group-hover:scale-105 transition-transform duration-300 bg-white/10`}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover select-none"
                  />
                </div>

                <div className="flex-grow space-y-1 text-left">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-[#c5a059] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-blue-100/75 text-xs sm:text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-[#c5a059] rounded-2xl p-8 lg:p-12 text-white shadow-xl shadow-[#c5a059]/20"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,50 Q25,70 50,50 T100,50 L100,100 L0,100 Z" fill="white" />
            </svg>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold max-w-xl text-center md:text-left leading-snug">
             Ready to Grow Your Business with Digital Marketing ?
            </h3>
            <Link
              to={ROUTES.CONTACT}
              className="flex-shrink-0 bg-white text-[#c5a059] hover:bg-amber-50 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-md inline-flex items-center justify-center text-base"
            >
              Get Free Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
