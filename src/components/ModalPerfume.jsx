
const ModalPerfume = ({ perfume, onClose }) => {
  if (!perfume) return null;
  

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl p-8 relative overflow-y-auto max-h-[90vh] transition-transform scale-100 animate-fadeIn">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-5 text-gray-500 hover:text-black text-2xl font-bold"
        >
          ×
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Imagen del perfume */}
          <div className="flex justify-center  lg:w-1/3">
            <img
              src={perfume.imgUrl}
              alt={`Perfume ${perfume.nombre}`}
              className="w-44  lg:w-[22rem] h-auto rounded-lg shadow-md"
              loading="lazy"
            />
          </div>

          {/* Detalles del perfume */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">{perfume.nombre}</h2>
            <h3 className="text-xl text-gray-600 mb-3">{perfume.marca}</h3>

            {/* Oferta activa */}
            {perfume.enOferta && (
              <div className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-sm">
                🎉 ¡Este perfume tiene {perfume.descuento}% de descuento!
              </div>
            )}

            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              <strong>Género:</strong> {perfume.genero} <br />
              <strong>Tamaño:</strong> {perfume.tamaño} <br />
              <strong>Familia olfativa:</strong> {perfume.familiaOlfativa}
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="text-gray-800 font-semibold mb-1">Notas de salida</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {perfume.notasSalida.map((nota, i) => (
                    <li key={i}>{nota}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-gray-800 font-semibold mb-1">Notas de corazón</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {perfume.notasCorazon.map((nota, i) => (
                    <li key={i}>{nota}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-gray-800 font-semibold mb-1">Notas de fondo</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {perfume.notasFondo.map((nota, i) => (
                    <li key={i}>{nota}</li>
                  ))}
                </ul>
              </div>
            </div>

            {perfume.descripcion && (
              <p className="mt-6 text-gray-800 italic text-sm leading-relaxed">
                {perfume.descripcion}
              </p>
            )}

            <a
              href={`https://wa.me/573214879877?text=Hola!%20Quiero%20comprar%20el%20perfume%20${encodeURIComponent(perfume.nombre)}%20de%20${encodeURIComponent(perfume.marca)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition"
            >
              <img src="img/logo-whatsapp.webp" alt="WhatsApp" className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ModalPerfume;
