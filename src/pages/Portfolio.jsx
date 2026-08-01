import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Layers,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Building2,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Utensils,
  Scissors,
  Landmark,
  Cpu,
  Clock,
  Target,
  Award,
} from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import TestimonialSlider from '../components/portfolio/TestimonialSlider';
import { ROUTES } from '../constants/routes';

// Local Complete Projects Assets Imports
import firstCompleteImg from '../assets/images/comleteprojects/firstComplete.png';
import secondCompleteImg from '../assets/images/comleteprojects/secondComplete.png';
import thirdCompleteImg from '../assets/images/comleteprojects/thirdComplete.png';
import fourthCompleteImg from '../assets/images/comleteprojects/fourthComplete.png';
import fifthCompleteImg from '../assets/images/comleteprojects/fifthComplete.png';
import sixthCompleteImg from '../assets/images/comleteprojects/sixthComplete.png';

// Additional Local Category Project Assets
import seoImage from '../assets/images/portfolio/seoimage.jpg';
import fashionImg from '../assets/images/portfolio/fashion.png';
import freshLocalImg from '../assets/images/portfolio/fresh-local.png';
import semCodeImg from '../assets/images/services/service-sem-code.jpg';

import aboutCtaBg from '../assets/images/about/about-cta-bg.jpg';
import aboutCtaRocket from '../assets/images/about/about-cta-rocket.png';

// Portfolio Categories
const PORTFOLIO_CATEGORIES = [
  'All',
  'Website Development',
  'SEO',
  'Google Ads',
  'Social Media',
  'Branding',
  'UI/UX',
  'Web Applications',
];

// Completed Client Projects Data Array (Distinct from Services)
const PROJECTS_DATA = [
  {
    id: 1,
    name: 'Luxe Salon & Spa Digital Portal',
    category: 'Website Development',
    industry: 'Beauty & Salon',
    projectType: 'Salon Booking Portal',
    image: firstCompleteImg,
    summary:
      'Designed a mobile-responsive online booking portal and digital service catalog for a premier beauty salon chain.',
    servicesProvided: ['Website Design', 'Online Booking System', 'Local SEO'],
    tech: ['React', 'Tailwind CSS', 'Responsive Web'],
    metricsLabel: '4.8★ Customer Rating',
  },
  {
    id: 2,
    name: 'Urban Bite Multi-Cuisine Restaurant',
    category: 'Website Development',
    industry: 'Hospitality',
    projectType: 'Restaurant Platform',
    image: secondCompleteImg,
    summary:
      'Built a modern restaurant platform featuring interactive QR menus, online table reservation forms, and location maps.',
    servicesProvided: ['Web Architecture', 'Digital Menu', 'Local Map SEO'],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Google Maps API'],
    metricsLabel: '180% Order Surge',
  },
  {
    id: 3,
    name: 'Moda Boutique E-Commerce Store',
    category: 'Web Applications',
    industry: 'Retail',
    projectType: 'E-Commerce Store',
    image: thirdCompleteImg,
    summary:
      'Developed a high-converting fashion e-commerce web app with instant cart checkout, product search filters, and inventory tracking.',
    servicesProvided: ['E-Commerce Development', 'UI/UX Architecture', 'Payment Integration'],
    tech: ['React', 'Tailwind CSS', 'Payment Gateway'],
    metricsLabel: '2.5X Revenue Growth',
  },
  {
    id: 4,
    name: 'Jaipur Public School Portal',
    category: 'Web Applications',
    industry: 'Education',
    projectType: 'School Management Portal',
    image: fourthCompleteImg,
    summary:
      'Architected a comprehensive web portal for online admissions, digital fee receipts, and academic notice board management.',
    servicesProvided: ['Web Application', 'Student Portal', 'Form Automation'],
    tech: ['React', 'Node.js', 'Responsive Forms'],
    metricsLabel: '85% Admin Efficiency',
  },
  {
    id: 5,
    name: 'Royal Haven Luxury Interior Showcase',
    category: 'Website Development',
    industry: 'Real Estate',
    projectType: 'Portfolio Showcase',
    image: fifthCompleteImg,
    summary:
      'Crafted a bespoke portfolio showcase website for a luxury interior architecture studio to present residential and commercial projects.',
    servicesProvided: ['Website Development', 'Portfolio Gallery', 'Lead Capture Form'],
    tech: ['Custom Web Design', 'Framer Motion'],
    metricsLabel: '5X Qualified Leads',
  },
  {
    id: 6,
    name: 'Apex Tech Corporate Platform',
    category: 'UI/UX',
    industry: 'Technology',
    projectType: 'Enterprise UI/UX Platform',
    image: sixthCompleteImg,
    summary:
      'Re-engineered the digital platform for an enterprise IT company, delivering modern UI/UX design, service architecture, and performance optimization.',
    servicesProvided: ['Corporate Web Architecture', 'UI/UX Redesign', 'Performance Tuning'],
    tech: ['React', 'Tailwind CSS', 'Performance Tuning'],
    metricsLabel: '90% Faster Load Time',
  },
  {
    id: 7,
    name: 'Zenith Healthcare Local SEO',
    category: 'SEO',
    industry: 'Healthcare',
    projectType: 'Healthcare SEO Campaign',
    image: seoImage,
    summary:
      'Executed a 90-day targeted local SEO campaign for a multi-specialty hospital, ranking key medical terms #1 on Google Search.',
    servicesProvided: ['Local SEO', 'Google Business Profile', 'Keyword Optimization'],
    tech: ['Google Search Console', 'Local Schema', 'Ahrefs'],
    metricsLabel: '320% Organic Growth',
  },
  {
    id: 8,
    name: 'ProFit Gym Google Ads Campaign',
    category: 'Google Ads',
    industry: 'Fitness & Wellness',
    projectType: 'PPC Advertising Campaign',
    image: semCodeImg,
    summary:
      'Managed high-intent Google Search and Display PPC campaigns, capturing targeted gym membership inquiries and free trial leads.',
    servicesProvided: ['Google Ads (PPC)', 'Landing Page Funnel', 'Conversion Tracking'],
    tech: ['Google Ads', 'Conversion Analytics', 'PPC Funnel'],
    metricsLabel: '60% Lower CPC',
  },
  {
    id: 9,
    name: 'FreshMart Social Growth Campaign',
    category: 'Social Media',
    industry: 'Retail Grocery',
    projectType: 'Social Media Campaign',
    image: freshLocalImg,
    summary:
      'Managed end-to-end Instagram and Facebook ad campaigns, creative graphic designs, and local store promotion for an organic grocery brand.',
    servicesProvided: ['Social Media Marketing', 'Ad Creatives', 'Local Brand Awareness'],
    tech: ['Meta Business Suite', 'Canva', 'Targeted Ads'],
    metricsLabel: '45% Higher Engagement',
  },
  {
    id: 10,
    name: 'Shree FMCG Brand Identity',
    category: 'Branding',
    industry: 'Retail & FMCG',
    projectType: 'Brand Identity Project',
    image: fashionImg,
    summary:
      'Created a complete brand identity system including trademark logo design, product packaging artwork, and official brand style guidelines.',
    servicesProvided: ['Brand Strategy', 'Logo Typography', 'Packaging Design'],
    tech: ['Adobe Illustrator', 'Brand Guidelines'],
    metricsLabel: 'Cohesive Brand',
  },
];

// Featured Case Studies Spotlight
const FEATURED_CASE_STUDIES = [
  {
    id: 1,
    title: 'Luxe Salon & Spa - Complete Digital Transformation',
    industry: 'Beauty & Salon',
    duration: '30 Days',
    challenge:
      'The client lacked a web presence and automated appointment scheduling, relying solely on phone calls and walk-in visits.',
    solution:
      'We built a responsive, fast-loading website with an integrated online booking system, service price list, and targeted Google Local SEO optimization.',
    results: ['Responsive Website', 'SEO Optimized', 'Lead Generation'],
    servicesUsed: ['Website Development', 'Local SEO', 'Booking Integration'],
    image: firstCompleteImg,
  },
  {
    id: 2,
    title: 'Moda Boutique - High-Conversion E-Commerce Growth',
    industry: 'Retail & Fashion',
    duration: '45 Days',
    challenge:
      'The existing store suffered from slow page loading times, poor mobile UX, and high shopping cart drop-off rates.',
    solution:
      'We re-architected the store using modern lightweight web code, streamlined product checkout, and launched targeted Google & Social Media campaigns.',
    results: ['Modern UI', 'Performance Marketing', 'Business Website'],
    servicesUsed: ['Web Applications', 'UI/UX Design', 'Google Ads'],
    image: thirdCompleteImg,
  },
];

// Professional Performance Indicators
const PROFESSIONAL_METRICS = [
  { label: 'Responsive Website', count: '100% Mobile Ready' },
  { label: 'SEO Optimized', count: 'Top Search Visibility' },
  { label: 'Google Ads', count: 'High Intent Funnels' },
  { label: 'Brand Identity', count: 'Cohesive Visuals' },
  { label: 'Business Website', count: 'Fast & Secure' },
  { label: 'Corporate Website', count: 'Enterprise Architecture' },
  { label: 'Performance Marketing', count: 'Data Driven' },
  { label: 'Lead Generation', count: 'High Conversion' },
  { label: 'Modern UI', count: 'Seamless UX' },
];

// Industries Served Data
const INDUSTRIES_SERVED = [
  { name: 'Healthcare', icon: Stethoscope, desc: 'Hospitals, Clinics & Doctors' },
  { name: 'Education', icon: GraduationCap, desc: 'Schools, Colleges & Academies' },
  { name: 'Retail', icon: ShoppingBag, desc: 'E-Commerce & Stores' },
  { name: 'Real Estate', icon: Building2, desc: 'Property & Interior Designers' },
  { name: 'Hospitality', icon: Utensils, desc: 'Restaurants & Hotels' },
  { name: 'Beauty & Salon', icon: Scissors, desc: 'Salons, Spas & Wellness' },
  { name: 'Finance', icon: Landmark, desc: 'Consultants & Agencies' },
  { name: 'Technology', icon: Cpu, desc: 'IT Companies & Startups' },
];

// Project-Specific Client Testimonials
const PROJECT_TESTIMONIALS = [
  {
    id: 1,
    name: 'Pooja Verma',
    role: 'Owner, Luxe Salon & Spa',
    project: 'Salon Website & Local SEO',
    quote:
      'Digi Mitra Enterprises built a stunning website for our salon that allows clients to book appointments online effortlessly. Our local visibility in Jaipur has increased significantly!',
  },
  {
    id: 2,
    name: 'Vikram Singh',
    role: 'Founder, Urban Bite Restaurant',
    project: 'Restaurant Website & Digital Menu',
    quote:
      'The digital menu and table reservation portal designed by their team made our restaurant operations smooth and improved our customer feedback tremendously.',
  },
  {
    id: 3,
    name: 'Ananya Roy',
    role: 'Marketing Head, Moda Boutique',
    project: 'E-Commerce Store & Ads',
    quote:
      'Outstanding work on our fashion e-commerce storefront! The site is blazing fast on mobile devices and the checkout experience is extremely user-friendly.',
  },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Filter projects by selected category
  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <section className="bg-[#c5a059] py-16 sm:py-24 text-center relative overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="container-custom relative z-10 space-y-4 max-w-3xl mx-auto">
          {/* Small Heading */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-white" />
            <span>OUR PORTFOLIO</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm leading-tight">
            Showcasing Our Best Digital Marketing Projects
          </h1>

          {/* Description */}
          <p className="text-white/95 text-xs sm:text-sm leading-relaxed font-normal max-w-2xl mx-auto">
            Explore a collection of successful digital marketing campaigns, websites, SEO
            strategies, branding projects, and business solutions delivered for clients across
            multiple industries.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#featured-projects"
              className="inline-flex items-center justify-center bg-[#0a1d72] hover:bg-[#071452] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects Section */}
      <section id="featured-projects" className="bg-white py-16 sm:py-24">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-[#0a1d72] uppercase">
              DELIVERED CLIENT PROJECTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Featured Client Work &amp; Business Solutions
            </h2>
          </div>

          {/* 3. Category Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mb-14">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0a1d72] text-white shadow-md shadow-[#0a1d72]/20 scale-105'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Project Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Project Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.name}
                      decoding="async"
                      loading="eager"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                    />
                    {/* Industry Badge */}
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-bold">
                      {project.industry}
                    </div>

                    {/* Professional Metric Badge */}
                    <div className="absolute top-4 right-4 bg-[#c5a059] text-white px-3 py-1 rounded-full text-[11px] font-extrabold shadow-sm">
                      {project.metricsLabel}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-xs font-extrabold text-[#0a1d72] uppercase tracking-wider block">
                        {project.projectType}
                      </span>
                      <h3 className="text-lg font-extrabold text-slate-900 leading-snug group-hover:text-[#c5a059] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Services Provided Pills */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Services Provided:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.servicesProvided.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#c5a059]" />
                            <span>{service}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-50 hover:bg-[#0a1d72] text-slate-800 hover:text-white border border-slate-200 py-2.5 text-xs font-extrabold transition-all duration-300 cursor-pointer"
                      >
                        <span>View Project Summary</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. Case Study Spotlight Section */}
      <section className="bg-[#f8fafc] py-20 sm:py-28 relative border-t border-slate-200/60">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-[#0a1d72] uppercase">
              CASE STUDY SPOTLIGHT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              In-Depth Client Case Studies
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              How we solve complex digital challenges for businesses across India using structured
              strategy, design, and performance execution.
            </p>
          </div>

          {/* Case Studies Cards */}
          <div className="space-y-12">
            {FEATURED_CASE_STUDIES.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                {/* Image Area */}
                <div
                  className={`lg:col-span-5 relative min-h-[300px] bg-slate-900 ${index % 2 === 1 ? 'lg:order-last' : ''}`}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 bg-[#0a1d72] text-[#c5a059] px-3.5 py-1.5 rounded-full text-xs font-extrabold border border-[#c5a059]/30">
                    {study.industry}
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        {study.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                        <span>{study.duration}</span>
                      </span>
                    </div>

                    {/* Challenge & Solution Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                          <Target className="w-4 h-4 text-red-500" />
                          <span>Client Challenge</span>
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                        <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-[#c5a059]" />
                          <span>Our Solution</span>
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Results Labels */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block">
                      Key Deliverables &amp; Outcomes:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {study.results.map((res) => (
                        <span
                          key={res}
                          className="bg-[#c5a059]/10 text-[#0a1d72] border border-[#c5a059]/30 text-xs font-extrabold px-3 py-1 rounded-full"
                        >
                          {res}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Professional Success Metrics & Capabilities Banner */}
      <section className="bg-gradient-to-r from-[#0a1d72] via-[#091552] to-[#040b30] py-20 text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-[#c5a059] uppercase">
              DELIVERY STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Project Capabilities
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Every project delivered by D Enterprises satisfies strict technical, architectural,
              and visual quality benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROFESSIONAL_METRICS.map((m) => (
              <div
                key={m.label}
                className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-colors"
              >
                <div className="space-y-1">
                  <h3 className="text-base font-extrabold text-white">{m.label}</h3>
                  <p className="text-xs text-[#c5a059] font-medium">{m.count}</p>
                </div>
                <CheckCircle2 className="w-5 h-5 text-[#c5a059] shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries Served Grid */}
      <section className="bg-white py-20 sm:py-28 relative">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-[#0a1d72] uppercase">
              VERSATILE EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Industries We Serve Across India
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Tailored digital marketing strategies and web solutions engineered for diverse market
              sectors.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_SERVED.map((ind) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={ind.name}
                  className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center space-y-3 group"
                >
                  <div className="p-3.5 rounded-xl bg-[#0a1d72]/10 text-[#0a1d72] group-hover:bg-[#c5a059] group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900">{ind.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials Section (Shared Component & Data) */}
      <TestimonialSlider />

      {/* 8. Final CTA Section */}
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
              <span className="text-xs font-extrabold text-[#c5a059] uppercase tracking-widest block">
                READY TO START YOUR PROJECT?
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-sm">
                Let's Build Something <br className="hidden sm:inline" />
                Amazing Together.
              </h2>

              <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-normal max-w-md">
                Have a project idea or need expert digital marketing solutions? Connect with Digi
                Mitra Enterprises today for a free project consultation.
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
                className="inline-flex items-center justify-center bg-[#c5a059] hover:bg-[#b38e47] text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 transition-all duration-200 shadow-lg hover:shadow-xl rounded-sm whitespace-nowrap"
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

      {/* Modal Drawer for Project Details */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-slate-200"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-[#c5a059] uppercase block">
                  {selectedCaseStudy.industry}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">{selectedCaseStudy.name}</h3>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">{selectedCaseStudy.summary}</p>

            <div className="space-y-3 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-extrabold text-slate-900 uppercase">
                Services Delivered:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCaseStudy.servicesProvided.map((s) => (
                  <span
                    key={s}
                    className="bg-[#0a1d72]/10 text-[#0a1d72] text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
              >
                Close
              </button>
              <Link
                to={ROUTES.CONTACT}
                className="px-5 py-2.5 rounded-lg bg-[#c5a059] hover:bg-[#b38e47] text-white font-bold text-xs shadow-md cursor-pointer"
              >
                Request Similar Project
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </PageTransition>
  );
};

export default Portfolio;
