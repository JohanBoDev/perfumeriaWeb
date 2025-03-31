export default function CardOpinion({ nombre, ciudad, comentario, imagen }) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-w-sm w-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 shadow-md border">
          <img
            src={imagen}
            alt={`Foto de ${nombre}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
  
        <div className="flex justify-center gap-1 mb-2 text-yellow-500 text-lg">
          {[...Array(5)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
  
        <h4 className="text-center text-lg font-semibold text-gray-900">{nombre}</h4>
        {ciudad && (
          <p className="text-center text-sm italic text-gray-500 mb-3">{ciudad}</p>
        )}
  
        <p className="text-center text-gray-700 text-sm leading-relaxed">“{comentario}”</p>
      </div>
    );
  }
  