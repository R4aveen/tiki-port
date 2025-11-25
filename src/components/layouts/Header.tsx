import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center px-6">
      <h1 className="font-bold text-xl">TikiPort</h1>

      <nav className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/about">Sobre mí</Link>
        <Link href="/contact">Contacto</Link>

        {/* <ThemeToggle /> */}
      </nav>
    </header>
  );
}
