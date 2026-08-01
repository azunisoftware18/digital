import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Menu, X, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { NAV_LINKS, ROUTES } from '../../constants/routes';
import { useScroll } from '../../hooks/useScroll';
import logoImg from '../../assets/images/logos/digi-mitra-logo.png';

// Comprehensive Searchable Index across Pages & Services
const SEARCH_INDEX = [
  {
    title: 'Search Engine Optimization (SEO)',
    category: 'Service',
    description: 'Scientific website optimization & keyword strategies to boost organic rankings.',
    path: ROUTES.HOME,
  },
  {
    title: 'Pay Per Click (PPC) & SEM',
    category: 'Service',
    description: 'High-ROI paid ad campaigns across Google, Bing, and social channels.',
    path: ROUTES.HOME,
  },
  {
    title: 'Business Analytics & Data',
    category: 'Service',
    description: 'Data-driven marketing insights, visitor tracking, and conversion optimization.',
    path: ROUTES.HOME,
  },
  {
    title: 'Local & Regional SEO',
    category: 'Service',
    description: 'Dominate local map listings and local search results in Jaipur & beyond.',
    path: ROUTES.HOME,
  },
  {
    title: 'Content Writing & Marketing',
    category: 'Service',
    description: 'Engaging, SEO-optimized copy for blogs, web pages, and brand stories.',
    path: ROUTES.HOME,
  },
  {
    title: 'Our Digital Marketing Services',
    category: 'Services',
    description: 'Explore full suite of SEO, PPC, Web Development, and Branding solutions.',
    path: ROUTES.SERVICES,
  },
  {
    title: 'Our Featured Portfolio',
    category: 'Portfolio',
    description: 'Explore successful digital growth projects, case studies, and client work.',
    path: ROUTES.PORTFOLIO,
  },
  {
    title: 'Shree Foods E-Commerce Platform',
    category: 'Case Study',
    description: 'High-conversion organic food e-commerce site with automated delivery tracking.',
    path: ROUTES.PORTFOLIO,
  },
  {
    title: 'Executive Team & Leadership',
    category: 'About Us',
    description: 'Meet Founder & CEO Shubham Sharma and our digital strategy experts.',
    path: ROUTES.ABOUT,
  },
  {
    title: 'Company Journey & Milestones',
    category: 'About Us',
    description:
      'Discover how Digi Mitra Enterprises grew into a leading digital marketing agency.',
    path: ROUTES.ABOUT,
  },
  {
    title: 'Contact & Free Consultation',
    category: 'Contact',
    description: 'Get in touch for free quotes, office address (Jaipur), and direct consultations.',
    path: ROUTES.CONTACT,
  },
];

const QUICK_SUGGESTIONS = ['Services', 'SEO', 'Portfolio', 'Analytics', 'Contact'];

export const Navbar = () => {
  const { scrolled } = useScroll(20);
  const location = useLocation();
  const navigate = useNavigate();

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Close mobile menu & search overlay on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle ESC key to close search modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Real-time filtered search results
  const searchResults =
    searchQuery.trim() === ''
      ? []
      : SEARCH_INDEX.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const handleSelectResult = (path) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

  // Smooth scroll to top when clicking current active navbar route
  const handleNavLinkClick = (e, path) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);

    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-1 border-b border-slate-100'
            : 'bg-white py-1.5 sm:py-2 border-b border-slate-100'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to={ROUTES.HOME}
            onClick={(e) => handleNavLinkClick(e, ROUTES.HOME)}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              src={logoImg}
              alt="Digi Mitra Enterprises Logo"
              className="h-16 sm:h-18 lg:h-20 w-auto max-w-[220px] sm:max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/logo.png';
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              const hasDropdown = link.hasDropdown;

              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    onClick={(e) => handleNavLinkClick(e, link.path)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      active
                        ? 'text-indigo-600 font-bold bg-indigo-50/70'
                        : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.label
                            ? 'rotate-180 text-indigo-600'
                            : 'text-slate-400'
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute left-0 top-full pt-2 w-72 z-50"
                        >
                          <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 overflow-hidden ring-1 ring-black/5">
                            {link.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.path}
                                onClick={(e) => handleNavLinkClick(e, subItem.path)}
                                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/60 transition-all duration-150 group/sub"
                              >
                                <span>{subItem.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-200 text-indigo-600" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Icon */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open Search"
              className="p-2 rounded-full text-slate-700 hover:text-[#c5a059] hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Contact CTA */}
            <Link
              to={ROUTES.CONTACT}
              onClick={(e) => handleNavLinkClick(e, ROUTES.CONTACT)}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#c5a059] hover:bg-[#b38e47] text-white text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Get in Touch</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] sm:top-[72px] bg-white border-b border-slate-200 shadow-xl z-40 lg:hidden overflow-hidden"
          >
            <div className="container-custom py-4 space-y-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.path);
                return (
                  <div key={link.label}>
                    <Link
                      to={link.path}
                      onClick={(e) => handleNavLinkClick(e, link.path)}
                      className={`block px-4 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                        active
                          ? 'text-[#c5a059] bg-amber-50/60 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-6 space-y-1 my-1">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            onClick={(e) => handleNavLinkClick(e, sub.path)}
                            className="block px-3 py-1.5 text-xs text-slate-600 hover:text-[#c5a059] font-medium"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-3 border-t border-slate-100">
                <Link
                  to={ROUTES.CONTACT}
                  onClick={(e) => handleNavLinkClick(e, ROUTES.CONTACT)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#c5a059] text-white font-semibold text-sm shadow-sm"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fully Functional Search Modal Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 z-50 bg-slate-900/65 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-2xl relative border border-slate-100 overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-[#c5a059]" />
                <span>Search Agency Services & Content</span>
              </h3>

              {/* Input Field */}
              <div className="relative mb-5">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Type to search (e.g. SEO, Portfolio, Shubham, Analytics)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:bg-white text-sm font-medium transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Suggestions when Query is Empty */}
              {searchQuery.trim() === '' && (
                <div className="space-y-3 pt-1 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Popular Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_SUGGESTIONS.map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setSearchQuery(tag)}
                        className="px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-[#c5a059] hover:text-white text-slate-600 text-xs font-semibold transition-all duration-200 cursor-pointer"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Results List */}
              {searchQuery.trim() !== '' && (
                <div className="max-h-80 overflow-y-auto space-y-2 pr-1 border-t border-slate-100 pt-3">
                  {searchResults.length > 0 ? (
                    searchResults.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => handleSelectResult(item.path)}
                        className="p-3.5 rounded-xl hover:bg-amber-50/60 border border-transparent hover:border-amber-200/50 transition-all duration-150 cursor-pointer group flex items-start justify-between gap-4"
                      >
                        <div className="space-y-1 text-left">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#c5a059]/10 text-[#c5a059]">
                              {item.category}
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#c5a059] transition-colors">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#c5a059] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 space-y-3">
                      <p className="text-slate-500 text-sm font-medium">
                        No results found for "
                        <span className="text-slate-900 font-bold">{searchQuery}</span>"
                      </p>
                      <button
                        type="button"
                        onClick={() => handleSelectResult(ROUTES.CONTACT)}
                        className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#c5a059] hover:underline"
                      >
                        <span>Need something custom? Contact Us</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
