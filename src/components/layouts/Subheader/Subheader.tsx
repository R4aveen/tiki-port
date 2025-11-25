const breadcrumbs = ["TikiPort", "Labs", "Season 2025"];

export default function Subheader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-zinc-200/60 bg-white/50 px-5 py-3 text-xs uppercase tracking-[0.2em] text-zinc-500 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/50 dark:text-zinc-400">
      <div className="flex flex-wrap items-center gap-2">
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb} className="flex items-center gap-2">
            {crumb}
            {index < breadcrumbs.length - 1 && (
              <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
            )}
          </span>
        ))}
      </div>
      <span className="text-[10px] uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">
        Sprint creativo en curso
      </span>
    </div>
  );
}
