import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import CardOpinion from "./cardOpinion";

const opiniones = [
  {
    nombre: "Laura Sánchez",
    ciudad: "Bogotá",
    comentario: "¡Los perfumes de Shesman son increíbles! El aroma dura todo el día.",
    imagen: "/img/opiniones/laura.avif",
  },
  {
    nombre: "Camilo Ríos",
    ciudad: "Medellín",
    comentario: "Me encantó la atención y la calidad del producto. Súper recomendado.",
    imagen: "/img/opiniones/camilo.avif",
  },
  {
    nombre: "Diana Gómez",
    ciudad: "Cali",
    comentario: "La presentación es elegante y huele espectacular. Volveré a comprar.",
    imagen: "/img/opiniones/diana.jpg",
  },
  {
    nombre: "Julián Herrera",
    ciudad: "Barranquilla",
    comentario: "Compré uno para regalo y quedó fascinado. Excelente marca.",
    imagen: "/img/opiniones/julian.avif",
  },
];

export default function OpinionesCarousel() {
  return (
<section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-20" id="opiniones">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-14">
    Lo que dicen nuestros clientes
  </h2>

  <Swiper
    modules={[Autoplay, EffectCoverflow]}
    effect="coverflow"
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    }}
    coverflowEffect={{
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    }}
    className="w-full pb-6"
  >
    {opiniones.map((opinion, index) => (
      <SwiperSlide key={index} className="flex justify-center">
        <CardOpinion {...opinion} />
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  );
}
