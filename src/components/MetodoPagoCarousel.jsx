import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const metodosPago = [
 /* {
    nombre: "PayU",
    imagen: "img/metodos-pago/logo-payu.webp",
    alt: "Logo de PayU método de pago",
  }*/,
  {
    nombre: "Nequi",
    imagen: "img/metodos-pago/logo-nequi.svg",
    alt: "Logo de Nequi",
  },
  {
    nombre: "Daviplata",
    imagen: "img/metodos-pago/logo-daviplata.webp",
    alt: "Logo de Daviplata",
  },
  
  {
    nombre: "PSE",
    imagen: "img/metodos-pago/logo-pse.webp",
    alt: "Logo de PSE pago seguro en línea",
  },
  {
    nombre: "Visa",
    imagen: "img/metodos-pago/logo-visa.webp",
    alt: "Logo de tarjeta Visa",
  },
  {
    nombre: "MasterCard",
    imagen: "img/metodos-pago/logo-mastercard.webp",
    alt: "Logo de tarjeta MasterCard",
  },
  {
    nombre: "Bancolombia",
    imagen: "img/metodos-pago/logo-bancolombia.webp",
    alt: "Logo de Bancolombia",
  },
  {
    nombre: "Davivienda",
    imagen: "img/metodos-pago/logo-davivienda.webp",  
    alt: "Logo de Davivienda",
  }
];

export default function MetodoPagoCarousel() {
  return (
    <section className="py-10 px-4 mt-10  dark:bg-gray-900">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Contamos con métodos de Pago Seguros
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
        loop={true}
      >
        {metodosPago.map((metodo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center mt-10">
              <img
                src={metodo.imagen}
                alt={metodo.alt}
                width="80"
                height="40"
                className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
