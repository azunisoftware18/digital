export const PORTFOLIO_CATEGORIES = [
  'All',
  'Website Development',
  'SEO',
  'Google Ads',
  'Social Media',
  'Branding',
  'UI/UX Design',
  'Digital Marketing',
];

// Service Card Image Imports
import webDevImg from '../assets/images/portfolio/website-development.png';
import fashionImg from '../assets/images/portfolio/fashion.png';
import seoImage from '../assets/images/portfolio/seoimage.jpg';
import uiUxImg from '../assets/images/portfolio/uidesgion.avif';
import premiumWebsiteImg from '../assets/images/portfolio/primimum-webiste.png';
import freshLocalImg from '../assets/images/portfolio/fresh-local.png';
import semCodeImg from '../assets/images/services/service-sem-code.jpg';
import digitalStrategyImg from '../assets/images/services/service-local-seo-meeting.jpg';

// Local Reviewer Images Imports
import reviewPerson1 from '../assets/images/review/first-person.avif';
import reviewPerson2 from '../assets/images/review/second-person.avif';
import reviewPerson3 from '../assets/images/review/person3.webp';
import reviewPerson4 from '../assets/images/review/person5.avif';

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'Corporate Website Development',
    category: 'Website Development',
    categoryTag: 'Corporate Web',
    description:
      'Developed a high-performance corporate business website with modern UI architecture, fast load times, and custom lead generation forms.',
    image: webDevImg,
    stats: 'Responsive Web',
  },
  {
    id: 2,
    title: 'Fashion Brand Identity',
    category: 'Branding',
    categoryTag: 'Brand Strategy',
    description:
      'Crafted a cohesive brand identity system including logo design, color palette typography, visual guidelines, and packaging collateral for a retail apparel brand.',
    image: fashionImg,
    stats: 'Brand Strategy',
  },
  {
    id: 3,
    title: 'Search Engine Optimization',
    category: 'SEO',
    categoryTag: 'Search Ranking',
    description:
      'Executed technical SEO audits, keyword research, on-page optimization, and Google Business Profile management to achieve top organic search rankings.',
    image: seoImage,
    stats: 'Organic SEO',
  },
  {
    id: 4,
    title: 'Education Platform UI/UX',
    category: 'UI/UX Design',
    categoryTag: 'UI/UX Design',
    description:
      'Designed an intuitive, user-friendly UI/UX interface for an online education portal with interactive student dashboards and mobile-first navigation.',
    image: uiUxImg,
    stats: 'Modern UI/UX',
  },
  {
    id: 5,
    title: 'Luxury Interior Showcase Website',
    category: 'Website Development',
    categoryTag: 'Interior Web',
    description:
      'Designed an elegant portfolio website for an interior architecture studio to present luxury residential and commercial design projects.',
    image: premiumWebsiteImg,
    stats: 'Bespoke Web',
  },
  {
    id: 6,
    title: 'Retail Social Media Marketing',
    category: 'Social Media',
    categoryTag: 'Social Growth',
    description:
      'Curated high-converting social media marketing campaigns, promotional graphics, and local community engagement strategies for an organic grocery brand.',
    image: freshLocalImg,
    stats: 'Social Growth',
  },
  {
    id: 7,
    title: 'Google Ads PPC Campaign',
    category: 'Google Ads',
    categoryTag: 'PPC Advertising',
    description:
      'Managed targeted Google Search & Display PPC ad campaigns with optimized landing page funnels to maximize conversion rates and ad spend return.',
    image: semCodeImg,
    stats: 'PPC Growth',
  },
  {
    id: 8,
    title: 'Full-Funnel Digital Marketing',
    category: 'Digital Marketing',
    categoryTag: 'Growth Strategy',
    description:
      'Delivered an integrated digital growth strategy combining performance marketing, content strategy, and multi-channel analytics monitoring.',
    image: digitalStrategyImg,
    stats: 'Growth Strategy',
  },
];

export const PORTFOLIO_STATS = [
  {
    id: 1,
    value: 250,
    suffix: '+',
    label: 'Projects Completed',
    description:
      'Successfully delivered websites, SEO campaigns, branding, and digital marketing solutions across multiple industries.',
  },
  {
    id: 2,
    value: 120,
    suffix: '+',
    label: 'Happy Clients',
    description:
      'Trusted by startups, local businesses, and growing brands with long-term partnerships.',
  },
  {
    id: 3,
    value: 35,
    suffix: '+',
    label: 'Industries Served',
    description:
      'Serving businesses across healthcare, education, retail, real estate, hospitality, technology, and more.',
  },
  {
    id: 4,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description:
      'Helping businesses achieve sustainable growth through innovative digital marketing strategies and proven expertise.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Business Research & Market Analysis',
    description:
      'We perform in-depth research to understand your business goals, target audience, industry trends, and competitor positioning before designing any strategy.',
    iconName: 'Search',
  },
  {
    step: '02',
    title: 'Custom Strategy Planning',
    description:
      'We craft a tailored digital marketing roadmap incorporating SEO opportunities, targeted ad campaigns, brand positioning, and conversion-focused messaging.',
    iconName: 'Target',
  },
  {
    step: '03',
    title: 'Campaign Execution',
    description:
      'Our experts launch your SEO optimizations, Google Ads, social media marketing campaigns, and content strategies with precision and creative excellence.',
    iconName: 'Rocket',
  },
  {
    step: '04',
    title: 'Performance Optimization & Growth',
    description:
      'We continuously track campaign metrics, analyze performance data, refine strategies, and scale successful marketing channels for long-term business growth.',
    iconName: 'TrendingUp',
  },
];

export const CLIENT_TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Managing Director, Sharma Enterprises',
    rating: 5,
    quote:
      'Digi Mitra Enterprises delivered our corporate website ahead of schedule with exceptional UI design and performance. Their team maintained clear communication throughout the project and helped us establish a strong digital presence.',
    image: reviewPerson1,
  },
  {
    id: 2,
    name: 'Pooja Agarwal',
    role: 'Founder, Elite Fashion House',
    rating: 5,
    quote:
      'Partnering with Digi Mitra Enterprises for our e-commerce store and social media marketing has been a great experience. The website is mobile-responsive and fast, and their team is always prompt with updates.',
    image: reviewPerson2,
  },
  {
    id: 3,
    name: 'Dr. Vikram Malhotra',
    role: 'Director, Sunrise Healthcare',
    rating: 5,
    quote:
      'Their SEO and Google My Business optimization significantly improved our local search visibility. We have noticed a steady increase in patient inquiries and positive client feedback since launching our portal.',
    image: reviewPerson3,
  },
  {
    id: 4,
    name: 'Sunil Joshi',
    role: 'Principal, Bright Future Academy',
    rating: 5,
    quote:
      'Extremely professional and supportive team. They designed an intuitive, user-friendly educational portal that makes online admissions and notice updates seamless for our staff and parents.',
    image: reviewPerson4,
  },
];

export const TRUSTED_BRANDS = [
  { id: 1, name: 'Sharma Enterprises', logo: 'SHARMA ENTERPRISES' },
  { id: 2, name: 'Elite Fashion House', logo: 'ELITE FASHION' },
  { id: 3, name: 'Sunrise Healthcare', logo: 'SUNRISE HEALTHCARE' },
  { id: 4, name: 'Bright Future Academy', logo: 'BRIGHT FUTURE' },
  { id: 5, name: 'Urban Interiors', logo: 'URBAN INTERIORS' },
  { id: 6, name: 'TechNova Solutions', logo: 'TECHNOVA' },
];
