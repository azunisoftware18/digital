import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import StatisticCard from '../components/portfolio/StatisticCard';
import ProcessCard from '../components/portfolio/ProcessCard';
import TestimonialSlider from '../components/portfolio/TestimonialSlider';
import { ROUTES } from '../constants/routes';
import aboutCtaBg from '../assets/images/about/about-cta-bg.jpg';
import aboutCtaRocket from '../assets/images/about/about-cta-rocket.png';

import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  PORTFOLIO_STATS,
  PROCESS_STEPS,
  TRUSTED_BRANDS,
} from '../data/portfolioData';

export const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter services by active category
  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(
          (p) =>
            p.category.toLowerCase() === activeCategory.toLowerCase() ||
            p.categoryTag.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <PageTransition>
      {/* 1. Hero Banner */}
      <section className="bg-[#c5a059] py-16 sm:py-20 text-center relative overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="container-custom relative z-10 space-y-3">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Our Services
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-normal">
            Discover how we help businesses strengthen their online presence, attract more customers, and achieve measurable growth through innovative digital marketing solutions.
          </p>
        </div>
      </section>

      {/* 2. Featured Services Filter & Grid Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-custom">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-slate-800 uppercase">
              FEATURED SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Transforming Ideas Into Digital Success
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mb-14">
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#c5a059] text-white shadow-md shadow-[#c5a059]/20 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Project Cards Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <PortfolioCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. Portfolio Statistics Banner */}
      <section className="bg-gradient-to-r from-[#0a1c72] via-[#0f2bb1] to-[#0a1c72] py-20 text-white relative overflow-hidden">
        {/* Soft Ambient Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a059]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-[#c5a059] uppercase">
              AGENCY STATS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Numbers That Define Our Impact
            </h2>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PORTFOLIO_STATS.map((stat, idx) => (
              <StatisticCard key={stat.id} stat={stat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Process Section */}
      <section className="bg-[#f8fafc] py-20 sm:py-28 relative">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-slate-800 uppercase">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Our Proven Digital Strategy Process
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
              A systematic 4-step workflow engineered to analyze your target market, execute high-converting digital campaigns, and drive sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <ProcessCard key={step.step} process={step} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials Slider */}
      <TestimonialSlider />

      {/* 6. Trusted Brands Showcase */}
      <section className="bg-white py-16 border-t border-slate-100 relative">
        <div className="container-custom text-center">
          <span className="block text-xs font-extrabold tracking-widest text-slate-400 uppercase mb-8">
            TRUSTED BY FORWARD-THINKING BRANDS
          </span>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {TRUSTED_BRANDS.map((brand) => (
              <span
                key={brand.id}
                className="text-base sm:text-lg font-black tracking-widest text-slate-800 hover:text-[#c5a059] transition-colors cursor-default"
              >
                {brand.logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-16 sm:pt-20 pb-28 sm:pb-36 overflow-hidden"
        style={{ backgroundImage: `url(${aboutCtaBg})` }}
      >
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-4 text-left"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-sm">
                Let's Build Your Next <br className="hidden sm:inline" />
                Success Story
              </h2>

              <p className="text-[#e2e8f0] text-xs sm:text-sm leading-relaxed font-normal max-w-md">
                Ready to grow your business with modern digital solutions? Partner with our team of experts today.
              </p>
            </motion.div>

            {/* Center Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 flex justify-start lg:justify-center items-center"
            >
              <Link
                to={ROUTES.CONTACT}
                className="inline-flex items-center justify-center bg-[#c5a059] hover:bg-[#b38e47] text-white font-extrabold text-xs uppercase tracking-wider px-7 py-4 transition-all duration-200 shadow-lg hover:shadow-xl rounded-sm whitespace-nowrap"
              >
                Start Your Project
              </Link>
            </motion.div>

            {/* Right Rocket Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3 flex justify-center lg:justify-end items-center"
            >
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-48 sm:w-56 lg:w-64"
              >
                <img
                  src={aboutCtaRocket}
                  alt="Rocket Launch"
                  className="w-full h-auto object-contain select-none"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/about-cta-rocket.png';
                  }}
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
