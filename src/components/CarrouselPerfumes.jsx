import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { perfumes } from "../data/perfumes-puro.data";
import ModalPerfume from "./ModalPerfume"; // ajusta ruta si es necesario


const PerfumesCarousel = () => {
  const perfumesConImagen = perfumes.filter(p => p.imgUrl && p.imgUrl !== "");
  const [destacados, setDestacados] = useState([]);
  const [modalPerfume, setModalPerfume] = useState(null);
  const openModal = (perfume) => setModalPerfume(perfume);
  const closeModal = () => setModalPerfume(null);


  useEffect(() => {
    const aleatorios = [...perfumesConImagen]
      .sort(() => Math.random() - 0.5)
      .slice(0, 15);
    setDestacados(aleatorios);
  }, []);

  return (
    <>
<section
  id="favoritos"
  className="w-full max-w-screen-xl mx-auto px-4 py-10 
             h-[78vh]  lg:h-[80vh] xl:h-[80vh]"
>
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800">Perfumes Destacados</h2>

        <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={24}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 3500, disableOnInteraction: false }}
  breakpoints={{
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 5 },
  }}
  className="[&_.swiper-pagination]:gap-3 [&_.swiper-pagination]:mt-10 h-full"
>
  {destacados.map((perfume) => (
    <SwiperSlide key={perfume.id}>
<div className="relative bg-white h-[450px] rounded-2xl shadow-md p-4 flex flex-col text-center transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]">
  
  {/* Badge de oferta */}
  {perfume.enOferta && (
    <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
      -{perfume.descuento}%
    </span>
  )}

  <img
    src={perfume.imgUrl}
    alt={perfume.nombre}
    className="w-28 h-36 object-contain mb-2 mx-auto"
    loading="lazy"
  />

  <h3 className="text-base font-semibold text-gray-800 leading-snug mb-1">{perfume.nombre}</h3>
  <p className="text-sm text-gray-500 font-medium">{perfume.marca}</p>

  <div className="text-sm text-gray-500 leading-snug px-2 mt-1 max-h-[72px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
    {perfume.descripcion}
  </div>

  <p className="text-sm mt-1 font-medium text-gray-700">
    {perfume.genero} — {perfume.tamaño}
  </p>

  <div className="flex-grow" />

  <div className="flex flex-col gap-2 mt-4 w-full">
    <a
      href={`https://wa.me/573214879877?text=Hola!%20Quiero%20comprar%20el%20perfume%20${encodeURIComponent(perfume.nombre)}%20de%20${encodeURIComponent(perfume.marca)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition"
    >
      <img src="img/logo-whatsapp.webp" alt="WhatsApp" className="w-5 h-5" />
      WhatsApp
    </a>

    <button
      onClick={() => openModal(perfume)}
      className="bg-gray-100 hover:bg-gray-200 text-sm text-gray-800 py-1 rounded transition-all"
    >
      Más info
    </button>
  </div>
</div>

    </SwiperSlide>
  ))}
</Swiper>

      </section>

      {modalPerfume && (
        <ModalPerfume perfume={modalPerfume} onClose={closeModal} />
      )}
    </>
  );

};

export default PerfumesCarousel;
