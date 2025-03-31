

export default function HeroFavoritos() {
    return (

<section class="text-gray-900 px-6 md:px-20 flex flex-col xl:flex-row items-center justify-evenly lg:gap-32 min-h-[calc(100vh-100px)]"> 
 
  
    <div class="w-full md:w-[50%] lg:w-[40%] flex justify-center items-center">
      <img 
        src="/img/hero-favoritos.png" 
        alt="Perfumes más amados por los clientes"
        class="h-[400px] sm:h-auto w-auto max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-xl scale-100 md:scale-110 lg:scale-125 transition-transform duration-300" 
        loading="lazy"
      />
    </div>
     <div class="max-w-xl md:pt-20">
      <h1 class="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
        Los perfumes más amados por nuestros clientes
      </h1>
      <p class="text-base md:text-lg text-gray-600 mb-8">
        Descubre por qué estos perfumes son los preferidos. Fragancias elegantes, duraderas y con estilo, que han cautivado a miles.
      </p>
      <div class="flex flex-row  gap-4 flex-wrap">
        <a href="/perfumes#favoritos" class="bg-purple-500 hover:bg-purple-600 text-white font-medium px-2 py-3 rounded-lg transition">
          Explorar Favoritos
        </a>
        <a href="/perfumes#catalogo-perfumes" class="border border-gray-400 hover:border-gray-700 text-gray-700 px-6 py-3 rounded-lg transition">
          Ver más Perfumes
        </a>
      </div>
    </div>
  </section>
     
    
      );
}