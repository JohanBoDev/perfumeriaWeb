import { useState } from "react";
import TarjetaPerfume from "./TarjetaPerfume.jsx";

export default function ListaPerfumes({ perfumes, openModal }) {
  const perfumesPorPagina = 20;
  const totalPaginas = Math.ceil(perfumes.length / perfumesPorPagina);

  const [paginaActual, setPaginaActual] = useState(1);

  const inicio = (paginaActual - 1) * perfumesPorPagina;
  const perfumesVisibles = perfumes.slice(inicio, inicio + perfumesPorPagina);

  const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (perfumes.length === 0) {
    return <p className="text-center text-neutral-500 mt-8">No se encontraron perfumes con los filtros seleccionados.</p>;
  }

  return (
    <>
      <div className="text-sm text-gray-600 text-center mb-4">
        Mostrando <span className="font-semibold">{perfumesVisibles.length}</span> de{" "}
        <span className="font-semibold">{perfumes.length}</span> perfumes
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {perfumesVisibles.map((perfume) => (
          <TarjetaPerfume key={perfume.id} perfume={perfume} openModal={openModal} />
        ))}
      </div>

      {/* Navegación de páginas */}
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
