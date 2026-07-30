import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

import shubhamImg from '../../assets/images/team/owner-shubham.jpg';
import team1Img from '../../assets/images/team/teamperson1.webp';
import team2Img from '../../assets/images/team/teamperon2.webp';
import team3Img from '../../assets/images/team/teamperson3.jpg';
import team4Img from '../../assets/images/team/teamperson4.webp';
import team5Img from '../../assets/images/team/teamperson5.webp';

const EXECUTIVE_MEMBERS = [
  {
    id: 1,
    name: 'Shubham Sharma',
    role: 'Founder & CEO',
    image: shubhamImg,
    socials: { fb: '#', insta: '#', twitter: '#', linkedin: '#', youtube: '#' },
  },
  {
    id: 2,
    name: 'Rosana Davio',
    role: 'Chief Product Officer',
    image: team1Img,
    socials: { fb: '#', insta: '#', twitter: '#', linkedin: '#', youtube: '#' },
  },
  {
    id: 3,
    name: 'Aarav Sharma',
    role: 'Co-Founder & CTO',
    image: team2Img,
    socials: { fb: '#', insta: '#', twitter: '#', linkedin: '#', youtube: '#' },
  },
  {
    id: 4,
    name: 'John Doe',
    role: 'VP, Solution Architecture',
    image: team3Img,
    socials: { fb: '#', insta: '#', twitter: '#', linkedin: '#', youtube: '#' },
  },
  {
    id: 5,
    name: 'Zalina Thomas',
    role: 'Technological Expert',
    image: team4Img,
    socials: { fb: '#', insta: '#', twitter: '#', linkedin: '#', youtube: '#' },
  },
  {
    id: 6,
    name: 'Priya Patel',
    role: 'Head of Digital Strategy',
    image: team5Img,
    socials: { fb: '#', insta: '#', twitter: '#', linkedin: '#', youtube: '#' },
  },
];

export const ExecutiveTeam = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white pt-16 sm:pt-24 pb-0 relative overflow-hidden">
      
      {/* 1. Header Area with Decorative Floating Elements */}
      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto mb-12 space-y-3">
        {/* Floating Ring Left of Heading */}
        <div className="absolute top-0 left-[10%] sm:left-[15%] w-4 h-4 rounded-full border-[3px] border-[#c5a059] opacity-80 pointer-events-none select-none"></div>
        {/* Floating Gold Blob Right of Heading */}
        <div className="absolute -top-4 right-[10%] sm:right-[15%] w-12 h-12 bg-[#c5a059] rounded-[30%_70%_70%_30%_/_50%_60%_40%_50%] opacity-90 pointer-events-none select-none"></div>

        <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-[#c5a059] uppercase">
          Our Team
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Meet Our Digital Marketing Experts
        </h2>
      </div>

      {/* 2. Deep Blue Wavy Banner */}
      <div className="relative bg-gradient-to-b from-[#0f2bb1] via-[#0b218f] to-[#0a1c72] pt-32 pb-24 mt-28 overflow-visible p-10">
        
        {/* Top Wave Curve Divider */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] z-0 select-none pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 sm:h-24 text-white fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120H321.39Z"></path>
          </svg>
        </div>

        {/* Background Decorative Rings in Blue Container */}
        <div className="absolute bottom-12 right-[12%] w-6 h-6 rounded-full border-[3px] border-[#c5a059]/60 opacity-60 pointer-events-none select-none z-0"></div>
        <div className="absolute -bottom-16 -left-16 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-[#0052d4] via-[#4364f7] to-[#6fb1fc] opacity-80 blur-[2px] pointer-events-none select-none z-0"></div>

        {/* Swiper Slider Wrapper overlapping the top wave line */}
        <div className="container-custom relative z-10 group px-2 sm:px-10 -mt-44 sm:-mt-52">
          
          {/* Previous Arrow Button */}
          <button
            ref={prevRef}
            aria-label="Previous Slide"
            className="absolute left-0 sm:-left-8 top-[40%] -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            ref={nextRef}
            aria-label="Next Slide"
            className="absolute right-0 sm:-right-8 top-[40%] -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full pb-4 overflow-visible"
          >
            {EXECUTIVE_MEMBERS.map((member) => (
              <SwiperSlide key={member.id} className="h-auto">
                <div className="bg-white rounded-2xl border border-slate-100/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden group/card h-full">
                  {/* Portrait Image Container */}
                  <div className="w-full aspect-square overflow-hidden bg-slate-100 relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = shubhamImg;
                      }}
                    />
                  </div>

                  {/* Details Container */}
                  <div className="p-6 w-full space-y-3 flex-grow flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-slate-500 text-xs font-medium mt-0.5">
                        {member.role}
                      </p>
                    </div>

                    {/* Social Media Icons (FB, Insta, Twitter, LinkedIn, YouTube) */}
                    {/* <div className="flex items-center justify-center gap-3.5 pt-3 text-slate-500 border-t border-slate-100">
                      <a
                        href={member.socials.fb}
                        className="hover:text-[#c5a059] transition-colors p-1"
                        title="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                      <a
                        href={member.socials.insta}
                        className="hover:text-[#c5a059] transition-colors p-1"
                        title="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                      <a
                        href={member.socials.twitter}
                        className="hover:text-[#c5a059] transition-colors p-1"
                        title="Twitter / X"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={member.socials.linkedin}
                        className="hover:text-[#c5a059] transition-colors p-1"
                        title="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.socials.youtube}
                        className="hover:text-[#c5a059] transition-colors p-1"
                        title="YouTube"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Youtube className="w-4 h-4" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;
