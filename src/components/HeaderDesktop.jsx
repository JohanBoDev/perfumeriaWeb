const leftMenu = [
  { label: "Inicio", path: "/" },
  { label: "Perfumes", path: "/perfumes" },
  { label: "Catálogos", path: "/catalogos" },
];

const rightMenu = [
  { label: "Ofertas", path: "/ofertas" },
  { label: "Contacto", path: "/contacto" },
  { label: "Nosotros", path: "/nosotros" },
];

export default function HeaderDesktop() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 justify-center px-4 pt-6 pointer-events-none hidden lg:flex">
      <div className="relative w-full max-w-4xl rounded-full bg-white/30 backdrop-blur-md shadow-lg border border-gray-200 px-6 py-4 flex justify-between items-center transition-all duration-300 pointer-events-auto">

        {/* Menú izquierdo */}
        <nav className="hidden lg:flex gap-8 text-xl font-medium text-gray-800">
          {leftMenu.map(({ label, path }) => (
            <a
              key={label}
              href={path}
              className="relative group transition-all duration-300 ease-in-out"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-dorado transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Logo central ajustado */}
        <img
          src="/img/eslogan-removebg-preview.png"
          alt="Logo Shesman"
          className="h-10 w-auto object-contain transform scale-[2] origin-center pointer-events-auto hidden md:block"
        />

        {/* Menú derecho */}
        <div className="hidden lg:flex items-center gap-8 text-xl font-medium text-gray-800">
          {rightMenu.map(({ label, path }) => (
            <a
              key={label}
              href={path}
              className="relative group transition-all duration-300 ease-in-out"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-dorado transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
