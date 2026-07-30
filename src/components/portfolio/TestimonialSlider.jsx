import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../../data/portfolioData';

import 'swiper/css';
import 'swiper/css/navigation';

export const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#f8fafc] py-20 sm:py-28 relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-slate-800 uppercase">
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            What Our Clients Say About Us
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            Real feedback from businesses across India that have partnered with us to strengthen their online presence and achieve sustainable digital growth.
          </p>
        </div>

        {/* Swiper Slider Wrapper with Navigation */}
        <div className="relative group px-2 sm:px-10">
          
          {/* Previous Arrow Button */}
          <button
            ref={prevRef}
            aria-label="Previous Testimonial"
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            ref={nextRef}
            aria-label="Next Testimonial"
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#c5a059] hover:text-white hover:border-[#c5a059] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3500,
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
              768: { slidesPerView: 2, spaceBetween: 24 },
              1280: { slidesPerView: 2, spaceBetween: 30 },
            }}
            className="w-full pb-4"
          >
            {CLIENT_TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between h-full relative group/card hover:-translate-y-1 transition-transform duration-300">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 group-hover/card:text-[#c5a059]/20 transition-colors duration-300 pointer-events-none" />

                  {/* Rating Stars & Quote */}
                  <div className="space-y-4 text-left relative z-10">
                    <div className="flex gap-1 text-amber-400">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-slate-700 text-xs sm:text-sm sm:text-base leading-relaxed italic font-normal">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Client Info Footer */}
                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100 relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#c5a059] flex-shrink-0 shadow-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-base font-extrabold text-slate-900 tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-slate-500 text-xs font-medium">
                        {item.role}
                      </p>
                    </div>
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

export default TestimonialSlider;
