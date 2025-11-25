const quickLinks = [
  { label: "Brief general", accent: "Activo" },
  { label: "Backlog creativo", accent: "12 ideas" },
  { label: "Proyectos destacados", accent: "3" },
  { label: "Colaboraciones", accent: "Abierto" },
];

export default function Aside({ variant }: { variant?: string }) {
  return (
    <aside className="w-full rounded-2xl border border-zinc-200/60 bg-white/60 p-5 text-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/50 lg:max-w-xs">
      <div className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
        {variant === "primary" ? "Menú principal" : "Panel"}
      </div>
      <ul className="mt-4 space-y-3 text-zinc-600 dark:text-zinc-300">
        {quickLinks.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2 transition hover:border-zinc-200 hover:bg-white dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <span>{item.label}</span>
            <span className="text-xs uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              {item.accent}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
