
export default function HeroOfertas() {
    return (
<section class="text-gray-900 px-6 md:px-20 flex flex-col xl:flex-row items-center justify-evenly gap-10 min-h-[calc(100vh-100px)]">
  
    <div class="w-full md:w-[50%] lg:w-[40%] flex justify-center items-center">
      <img 
        src="/img/hero-ofertas.webp" 
        alt="Perfumes en oferta con descuentos especiales"
        class="h-[400px] sm:h-auto w-auto max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-xl scale-100 md:scale-110 lg:scale-125 transition-transform duration-300" 
        loading="lazy"
      />
    </div>

    <div class="max-w-xl  md:pt-20">
      <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        Ofertas Exclusivas<br class="hidden md:block"/> en Perfumes Premium
      </h1>
      <p class="text-base md:text-lg text-gray-600 mb-8">
        Aprovecha descuentos únicos en perfumes seleccionados. ¡Fragancias exclusivas al mejor precio por tiempo limitado!
      </p>
      <div class="flex gap-4 flex-wrap">
        <a href="#ofertas" class="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-lg transition">
          Ver Ofertas
        </a>
        <a href="/perfumes" class="border border-gray-400 hover:border-gray-700 text-gray-700 px-6 py-3 rounded-lg transition">
          Explorar Más
        </a>
      </div>
    </div>

  
  </section>

    );
}