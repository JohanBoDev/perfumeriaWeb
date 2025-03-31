import { useState } from "react";
import { perfumes } from "@/data/perfumes-puro.data.js"; 
import ListaPerfumes from "./ListaPerfumes.jsx";
import ModalPerfume from "../ModalPerfume.jsx";

// Extraer valores únicos para los filtros
const obtenerValoresUnicos = (arr, prop) => {
  const valores = arr.map((p) => p[prop]).filter(Boolean);
  return [...new Set(valores)];
};

export default function FiltroPerfumes() {
  const [filtros, setFiltros] = useState({
    genero: "",
    marca: "",
    tamaño: "",
    familiaOlfativa: "",
    busqueda: "",
  });

  const [modalActivo, setModalActivo] = useState(false);
  const [perfumeModal, setPerfumeModal] = useState(null);

  const openModal = (perfume) => {
    setPerfumeModal(perfume);
    setModalActivo(true);
  };

  const closeModal = () => {
    setModalActivo(false);
    setPerfumeModal(null);
  };

  const manejarCambioFiltro = (e) => {
    const { name, value } = e.target;
    setFiltros({ ...filtros, [name]: value });
  };

  const perfumesFiltrados = perfumes.filter((p) => {
    const coincideGenero = filtros.genero ? p.genero === filtros.genero : true;
    const coincideMarca = filtros.marca ? p.marca === filtros.marca : true;
    const coincideTamaño = filtros.tamaño ? p.tamaño === filtros.tamaño : true;
    const coincideFamilia = filtros.familiaOlfativa ? p.familiaOlfativa === filtros.familiaOlfativa : true;
    const coincideBusqueda = filtros.busqueda
      ? p.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase()) || p.id.toLowerCase().includes(filtros.busqueda.toLowerCase())
      : true;

    return coincideGenero && coincideMarca && coincideTamaño && coincideFamilia && coincideBusqueda;
  });

  const generos = obtenerValoresUnicos(perfumes, "genero");
  const marcas = obtenerValoresUnicos(perfumes, "marca");
  const tamaños = obtenerValoresUnicos(perfumes, "tamaño");
  const familias = obtenerValoresUnicos(perfumes, "familiaOlfativa");

  return (
    <section className="container mx-auto px-4 " id="catalogo-perfumes">
      <h1 className="text-3xl font-bold text-center mb-8">Catálogo de Perfumes</h1>

      {/* Filtros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
        <input
          type="text"
          name="busqueda"
          placeholder="Buscar por nombre o ID"
          value={filtros.busqueda}
          onChange={manejarCambioFiltro}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />

        <select name="genero" value={filtros.genero} onChange={manejarCambioFiltro} className="border border-gray-300 rounded px-3 py-2">
          <option value="">Género</option>
          {generos.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

        <select name="marca" value={filtros.marca} onChange={manejarCambioFiltro} className="border border-gray-300 rounded px-3 py-2">
          <option value="">Marca</option>
          {marcas.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select name="tamaño" value={filtros.tamaño} onChange={manejarCambioFiltro} className="border border-gray-300 rounded px-3 py-2">
          <option value="">Tamaño</option>
          {tamaños.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select name="familiaOlfativa" value={filtros.familiaOlfativa} onChange={manejarCambioFiltro} className="border border-gray-300 rounded px-3 py-2">
          <option value="">Familia Olfativa</option>
          {familias.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      {/* Lista de perfumes filtrados */}
      <ListaPerfumes perfumes={perfumesFiltrados} openModal={openModal} />

      {/* Modal (opcional, puedes crearlo más adelante) */}
      {modalActivo && perfumeModal && (
  <ModalPerfume perfume={perfumeModal} onClose={closeModal} />
)}

    </section>
  );
}
