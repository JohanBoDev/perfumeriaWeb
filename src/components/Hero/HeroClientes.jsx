

export default function HeroClientes() {
    return (
<section class="text-gray-900 px-6 md:px-20 flex flex-col xl:flex-row items-center justify-evenly gap-10 min-h-[calc(100vh-100px)]">
     <div class="w-full md:w-[50%] lg:w-[40%] flex justify-center items-center">
     <img
  src="/img/hero-clientes-satisfechos.webp"
  alt="Perfume sostenido en mano mostrando satisfacción de clientes"
  width="400"
  height="400"
  class="h-[400px] sm:h-auto w-auto max-w-xs sm:max-w-sm md:max-w-md object-contain"
  loading="lazy"
/>

    </div>

    <div className="w-full lg:w-1/2 pt-6 sm:pt-10 md:pt-20 text-center lg:text-left">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
    Más de 12.000 Clientes <br className="hidden md:block" /> Satisfechos
  </h1>
  <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
    Nuestros clientes nos prefieren por la calidad excepcional de nuestros perfumes y nuestro compromiso con el servicio. Vive tú también la experiencia Shesman.
  </p>
  <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
    <a
      href="/nosotros#opiniones"
      className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg text-center transition"
    >
      Ver Opiniones
    </a>
    <a
      href="/perfumes"
      className="border border-gray-400 hover:border-gray-700 text-gray-700 px-6 py-3 rounded-lg text-center transition"
    >
      Explorar Perfumes
    </a>
  </div>
</div>

  
 
  
  </section>
      
    
      );    
}