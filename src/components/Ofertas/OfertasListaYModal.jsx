import { useState } from "react";
import ListaOfertas from "./ListaOfertas.jsx";
import ModalPerfume from "../ModalPerfume.jsx";

export default function OfertasListaYModal({ perfumes }) {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [perfumeSeleccionado, setPerfumeSeleccionado] = useState(null);

  const abrirModal = (perfume) => {
    setModalAbierto(true);
    setPerfumeSeleccionado(perfume);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setPerfumeSeleccionado(null);
  };

  return (
    <>
      <ListaOfertas perfumes={perfumes} openModal={abrirModal} />
      {modalAbierto && (
        <ModalPerfume perfume={perfumeSeleccionado} onClose={cerrarModal} />
      )}
    </>
  );
}
