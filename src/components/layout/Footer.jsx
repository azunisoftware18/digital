import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
} from 'lucide-react';
import { NAV_LINKS, ROUTES } from '../../constants/routes';
import logoImg from '../../assets/images/logos/digi-mitra-logo.png';

// Social Media Data Array
const SOCIAL_LINKS = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/OmenterprisesJaipur/', color: 'hover:text-[#c5a059] hover:border-[#c5a059]/50' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/omenterprises.jp', color: 'hover:text-[#c5a059] hover:border-[#c5a059]/50' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/om-enterprises-jaipur/', color: 'hover:text-[#c5a059] hover:border-[#c5a059]/50' },
  // { name: 'Twitter (X)', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-[#c5a059] hover:border-[#c5a059]/50' },
];

// Contact Details Column Data (Phone 1, Phone 2, Email Address)
const CONTACT_DETAILS = [
  {
    id: 'phone1',
    icon: Phone,
    text: '+91 9460921962',
    href: 'tel:+919460921962',
  },
  {
    id: 'phone2',
    icon: Phone,
    text: '+91 7733999060',
    href: 'tel:+917733999060',
  },
  {
    id: 'email',
    icon: Mail,
    text: 'omenterprises.jaipurdigital@gmail.com',
    href: 'mailto:omenterprises.jaipurdigital@gmail.com',
  },
];

// Contact Us Column Data (Office Address & Business Hours directly below)
const CONTACT_US_ITEMS = [
  {
    id: 'address',
    icon: MapPin,
    text: 'UG-45, Sunny Trade center, New Aatish Market, Mansarover, Jaipur, Rajasthan 302020',
  },
  {
    id: 'hours',
    icon: Clock,
    text: 'Mon - Sat: 9:00 AM - 7:00 PM',
  },
];

export const Footer = () => {
  const scrollToTop = () => {
    try {
      window.scrollTo(0, 0);
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    } catch (e) {}
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0b132b] via-[#091024] to-[#040817] text-slate-300 overflow-hidden">
      
      {/* Top Decorative Curved Divider Wave */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none -translate-y-[99%]">
        <svg
          className="relative block w-full h-12 sm:h-16 lg:h-20 text-[#0b132b]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Main Footer Container */}
      <div className="container-custom relative z-20 pt-16 lg:pt-24 pb-8">
        
        {/* 12-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* COLUMN 1: Company Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-5"
          >
            {/* Logo */}
            <Link
              to={ROUTES.HOME}
              onClick={scrollToTop}
              className="inline-block focus:outline-none bg-white/95 px-4 py-2.5 rounded-xl shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105"
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
            </Link>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We are a full-service digital agency dedicated to transforming brands through data-driven performance marketing, bespoke web design, and strategic digital solutions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 transition-all duration-200 ${social.color}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* COLUMN 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <h4 className="text-white text-lg font-bold tracking-wide border-b border-[#c5a059]/30 pb-2 inline-block">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="group inline-flex items-center text-sm text-slate-400 hover:text-[#c5a059] transition-all duration-200"
                  >
                    <ChevronRight className="w-4 h-4 text-[#c5a059] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: Contact Details (Phone 1, Phone 2, Email Address) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 space-y-5"
          >
            <h4 className="text-white text-lg font-bold tracking-wide border-b border-[#c5a059]/30 pb-2 inline-block">
              Contact Details
            </h4>

            <ul className="space-y-3.5 text-sm text-slate-400">
              {CONTACT_DETAILS.map((item) => {
                const IconComp = item.icon;
                return (
                  <li key={item.id} className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-[#c5a059]/10 text-[#c5a059] mt-0.5 shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    {item.href ? (
                      <a href={item.href} className="hover:text-[#c5a059] transition-colors whitespace-nowrap">
                        {item.text}
                      </a>
                    ) : (
                      <span className="leading-relaxed">{item.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* COLUMN 4: Contact Us (Office Address & Business Hours directly below) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 space-y-5"
          >
            <h4 className="text-white text-lg font-bold tracking-wide border-b border-[#c5a059]/30 pb-2 inline-block">
              Contact Us
            </h4>

            <ul className="space-y-3.5 text-sm text-slate-400">
              {CONTACT_US_ITEMS.map((item) => {
                const IconComp = item.icon;
                return (
                  <li key={item.id} className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-[#c5a059]/10 text-[#c5a059] mt-0.5 shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

        </div>

        {/* BOTTOM BAR: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Digi Mitra Enterprises. All Rights Reserved.
          </p>

          <p className="text-center sm:text-right">
            Designed &amp; Developed by{' '}
            <Link
              to={ROUTES.HOME}
              onClick={scrollToTop}
              className="font-semibold text-slate-300 hover:text-[#c5a059] transition-colors cursor-pointer"
            >
              Digi Mitra Enterprises
            </Link>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
