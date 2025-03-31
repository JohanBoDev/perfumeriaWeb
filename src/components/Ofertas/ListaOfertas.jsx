import { useState } from "react";
import TarjetaPerfume from "../Perfumes/TarjetaPerfume.jsx";

export default function ListaOfertas({ perfumes, openModal }) {
  // Filtrar solo perfumes en oferta
  const perfumesEnOferta = perfumes.filter((p) => p.enOferta === true);
  const perfumesPorPagina = 20;
  const totalPaginas = Math.ceil(perfumesEnOferta.length / perfumesPorPagina);

  const [paginaActual, setPaginaActual] = useState(1);

  const inicio = (paginaActual - 1) * perfumesPorPagina;
  const perfumesVisibles = perfumesEnOferta.slice(inicio, inicio + perfumesPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (perfumesEnOferta.length === 0) {
    return (
      <p className="text-center text-neutral-500 mt-8">
        No hay perfumes en oferta actualmente.
      </p>
    );
  }

  return (
    <>
      <div className="text-sm text-gray-600 text-center mb-4">
        Mostrando <span className="font-semibold">{perfumesVisibles.length}</span> de{" "}
        <span className="font-semibold">{perfumesEnOferta.length}</span> perfumes en oferta
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {perfumesVisibles.map((perfume) => (
          <TarjetaPerfume key={perfume.id} perfume={perfume} openModal={openModal} />
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-10 gap-2 flex-wrap">
        {Array.from({ length: totalPaginas }).map((_, index) => {
          const numeroPagina = index + 1;
          const activo = numeroPagina === paginaActual;

          return (
            <button
              key={numeroPagina}
              onClick={() => cambiarPagina(numeroPagina)}
              className={`px-4 py-2 rounded-full border ${
                activo
                  ? "bg-[#054B64] text-white "
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              } transition`}
            >
              {numeroPagina}
            </button>
          );
        })}
      </div>
    </>
  );
}
