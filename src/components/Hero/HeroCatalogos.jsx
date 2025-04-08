

export default function HeroCatalogos() {
    return (

<section class="text-gray-900 px-6 md:px-20 flex flex-col xl:flex-row items-center justify-evenly gap-10 min-h-[calc(100vh-100px)]">

     <div class="w-full md:w-[50%] lg:w-[40%] flex justify-center items-center">
     <img
  src="/img/hero-catalogo.webp"
  alt="Catálogo descargable con perfumes premium"
  width="400"
  height="400"
  class="h-[400px] sm:h-auto w-auto max-w-xs sm:max-w-sm md:max-w-md object-contain"
  loading="lazy"
/>
    </div>

    <div class="max-w-xl md:pt-20">
      <h1 class="text-4xl md:text-5xl font-extrabold leading-8 mb-6">
        Descarga Nuestro Catálogo Completo de Perfumes
      </h1>
      <p class="text-base md:text-lg text-gray-600 mb-8">
        Explora fácilmente todas nuestras fragancias exclusivas y descubre tu próxima favorita desde la comodidad de tu dispositivo.
      </p>
      <div class="flex gap-4 flex-wrap">
        <a href="pdf/catalogo-shesman.pdf" download class="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-lg transition">
          Descargar Catálogo
        </a>
        <a href="/catalogos" class="border border-gray-400 hover:border-gray-700 text-gray-700 px-6 py-3 rounded-lg transition">
          Ver en Línea
        </a>
      </div>
    </div>
  
    
   
  
  </section>
  
    
  );
}