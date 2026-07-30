import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import ExecutiveTeam from '../components/sections/ExecutiveTeam';
import { ROUTES } from '../constants/routes';
import aboutTeamImg from '../assets/images/about/about-team.jpg';
import aboutPatner from '../assets/images/about/about-patner.png';
import aboutBestBg from '../assets/images/about/about-best-bg.jpg';
import aboutMilestonesBg from '../assets/images/about/about-milestones-bg.png';
import aboutCtaBg from '../assets/images/about/about-cta-bg.jpg';
import aboutCtaRocket from '../assets/images/about/about-cta-rocket.png';

// 4 Feature Cards Data Array for Why Best
import fullTransparencyIcon from '../assets/images/icons/full-transparency.png';
import bigDataIcon from '../assets/images/icons/big-data.png';
import liveSupportIcon from '../assets/images/icons/live-support.png';
import networkMonitoringIcon from '../assets/images/icons/network-monitoring.png';

const WHY_BEST_CARDS = [
  {
    id: 1,
    title: 'Complete Transparency',
    icon: fullTransparencyIcon,
    fallbackIcon: '/full-transparency.png',
    description:
      'We believe in honest communication, clear reporting, and complete transparency so you always know how your campaigns are performing.',
  },
  {
    id: 2,
    title: 'Data-Driven Strategies',
    icon: bigDataIcon,
    fallbackIcon: '/big-data.png',
    description:
      'Every marketing decision is backed by research, analytics, and real-time data to maximize your return on investment.',
  },
  {
    id: 3,
    title: 'Dedicated Expert Support',
    icon: liveSupportIcon,
    fallbackIcon: '/live-support.png',
    description:
      'Our experienced professionals provide continuous guidance, quick assistance, and personalized solutions for your business goals.',
  },
  {
    id: 4,
    title: 'Performance Monitoring',
    icon: networkMonitoringIcon,
    fallbackIcon: '/network-monitoring.png',
    description:
      'We continuously monitor campaign performance, optimize strategies, and deliver measurable results that help your business grow.',
  },
];

// 4 Pillars Data Array for Client's Success & Future Growth
const REASONS_LIST = [
  {
    num: '01.',
    title: 'Strategic Planning',
    description:
      'Every campaign begins with detailed research and a customized strategy tailored to your business goals and target audience.',
  },
  {
    num: '02.',
    title: 'Proven Expertise',
    description:
      'With expertise in SEO, Google Ads, Social Media Marketing, and Web Development, we help businesses stay ahead of the competition.',
  },
  {
    num: '03.',
    title: 'Data-Driven Results',
    description:
      'We continuously monitor campaign performance, analyze key metrics, and optimize strategies to maximize your ROI.',
  },
  {
    num: '04.',
    title: 'Long-Term Partnership',
    description:
      'We believe in building lasting relationships by providing continuous support, transparent communication, and ongoing optimization.',
  },
];

// Company Journey Timeline Data Array
const TIMELINE_DATA = [
  {
    id: 1,
    year: '2016',
    title: 'The Beginning',
    description:
      'We started our journey with a mission to help businesses establish a strong online presence through innovative digital marketing strategies and customer-focused solutions.',
  },
  {
    id: 2,
    year: '2018',
    title: 'Expanding Our Expertise',
    description:
      'Our team expanded its expertise in SEO, website development, social media marketing, and performance advertising to deliver complete digital growth solutions.',
  },
  {
    id: 3,
    year: '2020',
    title: 'Trusted Growth Partner',
    description:
      'By consistently delivering measurable results, we became a trusted digital marketing partner for startups, local businesses, and growing brands across multiple industries.',
  },
  {
    id: 4,
    year: '2023',
    title: 'Innovation & Performance',
    description:
      'We adopted advanced marketing technologies, data-driven strategies, and performance-focused campaigns to maximize ROI and accelerate business growth.',
  },
  {
    id: 5,
    year: '2026',
    title: '10+ Years of Excellence',
    description:
      'Today, we proudly help businesses grow with SEO, Google Ads, Social Media Marketing, Website Development, Branding, and complete digital marketing solutions backed by over 10 years of industry experience.',
  },
];

export const About = () => {
  return (
    <PageTransition>
      {/* 1. Top Banner */}
      <section className="bg-[#c5a059] py-16 sm:py-20 text-center relative overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
            About Our Agency
          </h1>
        </div>
      </section>

      {/* 2. Dynamic Team / About Content Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column: Text & Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              {/* Tagline */}
              <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-slate-800 uppercase">
                ABOUT OUR AGENCY
              </span>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                We Help Businesses Grow Faster with Strategic Digital Marketing
              </h2>

              {/* Description Body Text */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                We are a results-driven digital marketing agency dedicated to helping businesses build a strong online presence and achieve sustainable growth. From SEO and Google Ads to Social Media Marketing, Website Development, and Branding, we create customized strategies that attract the right audience, generate quality leads, and maximize your return on investment.
                Our experienced team combines creativity, technology, and data-driven insights to deliver measurable results. We believe in building long-term partnerships by providing transparent communication, innovative solutions, and exceptional service that helps businesses stay ahead in today's competitive digital landscape.
              </p>

              {/* Button */}
              <div className="pt-2">
                <Link
                  to={ROUTES.PORTFOLIO}
                  className="inline-flex items-center justify-center bg-[#c5a059] hover:bg-[#b38e47] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 transition-all duration-200 shadow-md hover:shadow-lg rounded-sm"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Illustration Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 flex justify-center items-center"
            >
              <div className="w-full max-w-lg lg:max-w-xl">
                <img
                  src={aboutTeamImg}
                  alt="We Are a Dynamic Team of Professional People of Digital Marketing"
                  className="w-full h-auto object-contain select-none"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/about-dynamic.png';
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Parallax Scroll Section: Why We Are The Best */}
      <section className="relative bg-white pb-20 sm:pb-28">

        {/* Fixed Parallax Header Banner */}
        <div
          className="relative py-24 sm:py-32 bg-cover bg-center bg-no-repeat bg-fixed text-center overflow-hidden"
          style={{ backgroundImage: `url(${aboutBestBg})` }}
        >
          {/* Light Overlay */}
          <div className="absolute inset-0 bg-slate-900/20 z-0" />

          <div className="container-custom relative z-10 space-y-4 max-w-3xl mx-auto text-white">
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase drop-shadow-md">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
              Why Businesses Choose Us for Digital Marketing Success
            </h2>
            <p className="text-white text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium drop-shadow-sm">
              We deliver result-driven digital marketing solutions that help businesses increase visibility, attract qualified leads, and achieve sustainable growth through proven strategies and measurable performance.
            </p>
          </div>
        </div>

        {/* 4 Overlapping Feature Cards Grid */}
        <div className="container-custom relative z-20 -mt-16 sm:-mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {WHY_BEST_CARDS.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center space-y-4 group"
              >
                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-14 h-14 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = card.fallbackIcon;
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* 4. Client's Success & Future Growth Section */}
      <section className="bg-white py-16 sm:py-24 relative">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-stretch">

            {/* Left Column: Goal Illustration Graphic */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex items-stretch h-full"
            >
              <div className="w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] overflow-hidden rounded-2xl shadow-xl border border-slate-100/80 relative group flex items-center justify-center">
                <img
                  src={aboutPatner}
                  alt="Our Goal Is Your Business Growth & Long-Term Success"
                  className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105 select-none"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/about-goal.png';
                  }}
                />
              </div>
            </motion.div>

            {/* Right Column: Title, Subtitle & 4 Pillars Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-slate-800 uppercase">
                WHY PARTNER WITH US
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                Our Goal Is Your Business Growth & Long-Term Success
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                We partner with businesses to create result-driven digital marketing strategies that increase brand visibility, generate quality leads, and drive sustainable growth. Our focus is to deliver measurable results while building long-term relationships based on trust, innovation, and performance.
              </p>

              {/* 2x2 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {REASONS_LIST.map((item) => (
                  <div key={item.num} className="space-y-1.5">
                    <h4 className="text-base font-bold text-slate-900 flex items-center">
                      <span className="text-[#c5a059] font-extrabold mr-1.5">
                        {item.num}
                      </span>
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Company Journey Timeline Section */}
      <section className="bg-[#f4f6f8] pb-20 sm:pb-28 relative overflow-hidden">

        {/* Wavy White Background Header Block */}
        <div
          className="bg-white bg-cover bg-bottom bg-no-repeat pt-12 pb-16 text-center px-4 relative z-10"
          style={{ backgroundImage: `url(${aboutMilestonesBg})` }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-3 mt-12 sm:mt-16 lg:mt-20"
          >
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-slate-800 uppercase">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Discover Our Journey and the Milestones That Shaped Our Success
            </h2>
            <div className="pt-2">
              <span className="inline-block bg-[#c5a059] text-white font-extrabold text-[11px] uppercase tracking-wider px-5 py-2 rounded-sm shadow-md">
                Our Story
              </span>
            </div>
          </motion.div>
        </div>

        {/* Central Vertical Timeline Items */}
        <div className="container-custom relative z-10 pt-6 sm:pt-10">
          <div className="relative max-w-4xl mx-auto">

            {/* Center Vertical Axis Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute left-1/2 -top-6 bottom-0 w-[2px] bg-[#c5a059]/40 -translate-x-1/2 hidden md:block origin-top"
            />

            <div className="space-y-6 sm:space-y-8 md:space-y-16">
              {TIMELINE_DATA.map((item, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.12 }}
                    className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 group bg-white md:bg-transparent p-6 sm:p-8 md:p-0 rounded-2xl md:rounded-none border border-slate-100 md:border-none shadow-xl shadow-slate-200/50 md:shadow-none"
                  >
                    {/* Mobile-only Year Badge */}
                    <div className="w-full flex justify-start md:hidden mb-1">
                      <span className="bg-[#c5a059] text-white font-extrabold text-xs px-4 py-1.5 rounded-md shadow-sm">
                        {item.year}
                      </span>
                    </div>

                    {isEven ? (
                      <>
                        {/* Desktop Left Side: Year Badge */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.12 + 0.1 }}
                          className="hidden md:flex w-1/2 justify-end pr-10"
                        >
                          <span className="bg-slate-200 group-hover:bg-[#c5a059] group-hover:text-white transition-colors duration-300 text-slate-700 font-bold text-xs px-4 py-2 rounded-sm shadow-2xs">
                            {item.year}
                          </span>
                        </motion.div>

                        {/* Center Circle Dot */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#c5a059] bg-white group-hover:bg-[#c5a059] group-hover:scale-125 transition-all duration-300 z-20 hidden md:block" />

                        {/* Right Side / Content Box */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.12 + 0.1 }}
                          className="w-full md:w-1/2 text-left pl-0 md:pl-10 space-y-2"
                        >
                          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#c5a059] transition-colors duration-200">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </motion.div>
                      </>
                    ) : (
                      <>
                        {/* Left Side: Content Box */}
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.12 + 0.1 }}
                          className="w-full md:w-1/2 text-left md:text-right pr-0 md:pr-10 space-y-2 order-2 md:order-1"
                        >
                          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-[#c5a059] transition-colors duration-200">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </motion.div>

                        {/* Center Circle Dot */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#c5a059] bg-white group-hover:bg-[#c5a059] group-hover:scale-125 transition-all duration-300 z-20 hidden md:block" />

                        {/* Desktop Right Side: Year Badge */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.12 + 0.1 }}
                          className="hidden md:flex w-1/2 justify-start pl-10 order-1 md:order-2"
                        >
                          <span className="bg-slate-200 group-hover:bg-[#c5a059] group-hover:text-white transition-colors duration-300 text-slate-700 font-bold text-xs px-4 py-2 rounded-sm shadow-2xs">
                            {item.year}
                          </span>
                        </motion.div>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </section>

      {/* 6. Call To Action Section (Boost Rankings Upto 500%) */}
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-16 sm:pt-20 pb-28 sm:pb-36 overflow-hidden"
        style={{ backgroundImage: `url(${aboutCtaBg})` }}
      >
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Content Area: Title & Subtext */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-4 text-left"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-sm">
                Let's Take Your Business   <br className="hidden sm:inline" />
                to the Next Level
              </h2>

              <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-normal max-w-md">
                From SEO and Google Ads to Social Media Marketing and Website Development, we help businesses build a stronger online presence and achieve measurable results.
              </p>
            </motion.div>

            {/* Center Button Area */}
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
                CONTACT US TODAY
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

      {/* 7. Our Executive Team Member Section */}
      <ExecutiveTeam />
    </PageTransition>
  );
};

export default About;
