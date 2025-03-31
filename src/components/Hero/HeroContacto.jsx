export default function HeroContacto() {
  return (
    <section className="text-gray-900 px-4 sm:px-6 py-12 flex flex-col-reverse xl:flex-row items-center justify-evenly lg:justify-between gap-12 lg:gap-20 min-h-[calc(100vh-100px)]">
      {/* Texto lado derecho */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          ¿Tienes dudas? <br className="hidden sm:block" />
          ¡Estamos para ayudarte!
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8">
          Escríbenos por WhatsApp o redes sociales. Nuestro equipo está listo para responder tus preguntas sobre perfumes, envíos y pedidos.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
          <a
            href="https://wa.me/573224395306"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg text-center transition"
          >
            Escribir por WhatsApp
          </a>
          <a
            href="#ubicacion"
            className="border border-gray-400 hover:border-gray-700 text-gray-700 px-6 py-3 rounded-lg text-center transition"
          >
            Ver Ubicación
          </a>
        </div>
      </div>

      {/* Imagen lado izquierdo */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src="/img/hero-contacto.webp"
          alt="Atención al cliente Shesman"
          className="h-60 sm:h-72 md:h-80 lg:h-[600px] w-auto object-contain drop-shadow-xl transition-transform duration-300"
          loading="lazy"
        />
      </div>
    </section>
  );
}
