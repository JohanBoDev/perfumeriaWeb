export default function HeroHombre() {
    return (
<section class="text-gray-900 px-4 sm:px-6 md:px-20 flex flex-col-reverse xl:flex-row items-center justify-evenly gap-6 md:gap-10 min-h-[calc(100vh-100px)]">
  
<div className="w-full lg:w-1/2 pt-6 sm:pt-10 md:pt-20 text-center lg:text-left">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
    Fragancias Masculinas<br />
    que Dejan Huella
  </h1>
  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
    Potencia tu presencia con perfumes para hombre de alto impacto.<br />
    Aromas sofisticados, intensos y con carácter, diseñados para destacar donde vayas.
  </p>
  <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
    <a
      href="/perfumes?genero=hombre"
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-lg text-center transition"
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


<div class="w-full sm:w-[80%] md:w-[60%] lg:w-[35%] flex justify-center items-center">
  <img 
    src="/img/hero-hombre.webp" 
    alt="Perfumes para hombre: Boss, Le Male y Azzaro Wanted"
    width="600"
    height="400"
    loading="lazy"
    class="h-[400px] sm:h-auto w-auto max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-xl scale-100 md:scale-110 lg:scale-125 transition-transform duration-300" 
  />
</div>


</section>


    );
  }