import Link from "next/link";

const primaryNavigation = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/projects" },
  { label: "Servicios", href: "/services" },
  { label: "Contacto", href: "/contact" },
];

export default function HeaderLeft() {
  return (
    <div className="flex flex-1 flex-wrap items-center gap-4">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white"
      >
        TikiPort
      </Link>

      <nav className="hidden items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 md:flex">
        {primaryNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full px-3 py-1 transition hover:bg-zinc-100/80 hover:text-zinc-900 dark:hover:bg-zinc-800/80 dark:hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
