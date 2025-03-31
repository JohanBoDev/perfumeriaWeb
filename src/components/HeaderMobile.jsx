import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const leftMenu = [
  { label: "Inicio", path: "/" },
  { label: "Perfumes", path: "/perfumes" },
  { label: "Catálogos", path: "/catalogos" },
];

const rightMenu = [
  { label: "Ofertas", path: "/#ofertas" },
  { label: "Contacto", path: "/#contacto" },
  { label: "Nosotros", path: "/#nosotros" },
];

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);

  const allMenu = [...leftMenu, ...rightMenu];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-gray-200 shadow-sm lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Botón menú */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-white/50 transition"
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex justify-end flex-grow pr-10">
          <img
            src="/img/eslogan-removebg-preview.png"
            alt="Logo Shesman"
            className="h-16 w-auto object-contain"
          />
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white/70 backdrop-blur-md px-6 py-4 border-t border-gray-200 shadow origin-top"
          >
            <ul className="flex flex-col gap-4 text-base font-medium text-gray-800">
              {allMenu.map(({ label, path }) => (
                <li key={label}>
                  <a
                    href={path}
                    className="block py-1 hover:text-dorado transition"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
