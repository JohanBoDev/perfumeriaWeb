export default function HeroNosotros() {
    return (
      <section className="text-gray-900 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-evenly gap-10 min-h-[calc(100vh-100px)]">
        
        {/* Imagen izquierda */}
        <div className="w-full md:w-[50%] lg:w-[40%] flex justify-center items-center">
          <img 
            src="/img/hero-nosotros.png" 
            alt="Perfume 3D representando a la marca Shesman"
            className="h-[400px] sm:h-auto w-auto max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-xl scale-100 md:scale-110 lg:scale-125 transition-transform duration-300" 
            loading="lazy"
          />
        </div>
  
        {/* Texto derecha */}
        <div className="max-w-xl md:pt-20 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Conoce a <br className="hidden sm:block" />
            Shesman Perfumes Premium
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Somos una marca colombiana apasionada por crear experiencias olfativas
            memorables. Ofrecemos perfumes de alta calidad, atención personalizada y envíos
            a todo el país. Descubre quiénes somos y por qué miles de personas nos eligen.
          </p>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <a
              href="/perfumes"
              className="bg-red-500 hover:bg-red-700 text-white font-medium px-10 py-3 rounded-lg transition"
            >
              Ver Colección
            </a>
            <a
              href="#opiniones"
              className="border border-gray-400 hover:border-gray-700 text-gray-700 px-6 py-3 rounded-lg transition"
            >
              Opiniones de Clientes
            </a>
          </div>
        </div>
      </section>
    );
  }
  