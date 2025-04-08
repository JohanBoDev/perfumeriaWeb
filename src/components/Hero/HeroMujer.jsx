
export default function HeroMujer() {
  return (

<section class="text-gray-900 mt-5 px-6 md:px-20 flex flex-col xl:flex-row items-center justify-evenly gap-10 min-h-[calc(100vh-100px)]">
     <div class="w-full md:w-[50%] lg:w-[30%] flex justify-center items-center">
      <img 
        src="/img/hero-mujer.webp" 
        alt="Perfumes para mujer: La Vie Est Belle, Good Girl, 212 Sexy"
        class="h-[400px] sm:h-auto w-auto max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-xl scale-100 md:scale-110 lg:scale-125 transition-transform duration-300" 
        loading="lazy"
      />
    </div>
    <div className="w-full lg:w-1/2 pt-6 sm:pt-10 md:pt-20 text-center lg:text-left">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
    Fragancias Femeninas<br className="hidden md:block" />
    que Inspiran
  </h1>
  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
    Descubre los perfumes para mujer más cautivadores del momento.<br />
    Elegancia y distinción, ideales para cada escenario.
  </p>
  <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
    <a
      href="/perfumes?genero=mujer"
      className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg text-center transition"
    >
      Ver Colección
    </a>
    <a
      href="/ofertas"
      className="border border-gray-400 hover:border-gray-700 text-gray-700 px-6 py-3 rounded-lg text-center transition"
    >
      Ofertas Exclusivas
    </a>
  </div>
</div>

 
  </section>
  );
}