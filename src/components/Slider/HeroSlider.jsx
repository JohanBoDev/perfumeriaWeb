import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import HeroHombre from '../Hero/HeroHombre.jsx';
import HeroMujer from '../Hero/HeroMujer.jsx';
import HeroClientes from '../Hero/HeroClientes.jsx';
import HeroFavoritos from '../Hero/HeroFavoritos.jsx';
import HeroCatalogos from '../Hero/HeroCatalogos.jsx';
import HeroOfertas from '../Hero/HeroOfertas.jsx';

const CustomPrev = () => (
  <div className="custom-swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-transparent p-1 hover:scale-110 transition">
    <svg width="24" height="24" fill="none" stroke="#ffffffaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  </div>
);

const CustomNext = () => (
  <div className="custom-swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-transparent p-1 hover:scale-110 transition">
    <svg width="24" height="24" fill="none" stroke="#ffffffaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6-6 6" />
    </svg>
  </div>
);


const HeroSlider = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev"
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="w-full"
      >
        <SwiperSlide><HeroHombre /></SwiperSlide>
        <SwiperSlide><HeroMujer /></SwiperSlide>
        <SwiperSlide><HeroCatalogos /></SwiperSlide>
        <SwiperSlide><HeroClientes /></SwiperSlide>
        <SwiperSlide><HeroOfertas /></SwiperSlide>
        <SwiperSlide><HeroFavoritos /></SwiperSlide>
      </Swiper>

      {/* Custom arrows */}
      <CustomPrev />
      <CustomNext />
    </div>
  );
};

export default HeroSlider;
