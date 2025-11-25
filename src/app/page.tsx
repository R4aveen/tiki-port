import UiBadge from "@/components/ui/UiBadge";
import UiButton from "@/components/ui/UiButton";
import UiCard, {
  UiCardBody,
  UiCardFooter,
  UiCardFooterChild,
  UiCardHeader,
  UiCardHeaderChild,
  UiCardTitle,
} from "@/components/ui/UiCard";
import UiAlert from "@/components/ui/UiAlert";

const stats = [
  { value: "12+", label: "Productos lanzados" },
  { value: "5", label: "Equipos guiados" },
  { value: "3", label: "Nuevos experimentos" },
];

const focusAreas = [
  {
    title: "Motion UI",
    description: "Animaciones con anime.js y microinteracciones accesibles.",
  },
  {
    title: "Sistemas modulares",
    description: "Componentes propios para escalar diseño sin fricción.",
  },
];

const featuredProjects = [
  {
    title: "Panel de experiencias inmersivas",
    summary:
      "Dashboard que sintetiza performance de campañas y activa microinteracciones en tiempo real.",
    stack: ["Next.js", "Tailwind v4", "Redux Toolkit"],
    status: "Iteración 02",
  },
  {
    title: "Motor de case studies",
    summary:
      "Plantilla dinámica para narrar proyectos con storytelling, motion y datos accionables.",
    stack: ["Next.js App Router", "MDX", "Anime.js"],
    status: "Exploración",
  },
];

export default function Home() {
  return (
    <section className="space-y-10 text-balance">
      <UiAlert color="neutral" rounded="rounded-lg" className="shadow-sm">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Versión preliminar
          </span>
          Nueva temporada de TikiPort enfocada en experiencias digitales,
          diseño funcional y una librería UI propia en constante evolución.
        </div>
      </UiAlert>

      <UiCard className="bg-white/80 shadow-xl dark:bg-zinc-900/70">
        <UiCardHeader className="items-start">
          <UiCardHeaderChild className="gap-3">
            <UiBadge className="uppercase tracking-widest">Temporada 2025</UiBadge>
            <UiCardTitle>Portafolio en construcción activa</UiCardTitle>
          </UiCardHeaderChild>
          <UiButton variant="outline">Descargar CV</UiButton>
        </UiCardHeader>
        <UiCardBody className="space-y-6">
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Rediseñando la presencia digital de TikiPort con foco en performance,
            accesibilidad y una narrativa que muestre cómo se construyen los
            productos desde la investigación hasta la entrega.
          </p>
          <div className="grid gap-6 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-zinc-200/70 bg-white/70 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </UiCardBody>
        <UiCardFooter className="flex-col gap-8 lg:flex-row">
          <UiCardFooterChild className="flex-1 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="space-y-2">
                <UiBadge
                  color="neutral"
                  rounded="rounded-full"
                  className="bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                >
                  {area.title}
                </UiBadge>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {area.description}
                </p>
              </div>
            ))}
          </UiCardFooterChild>
          <UiCardFooterChild className="justify-end">
            <UiButton size="lg">Agenda una demo</UiButton>
            <UiButton variant="ghost" color="neutral">
              Escríbeme
            </UiButton>
          </UiCardFooterChild>
        </UiCardFooter>
      </UiCard>

      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <UiCard key={project.title} className="h-full shadow-md">
            <UiCardHeader>
              <UiCardHeaderChild className="flex-col items-start gap-2">
                <UiBadge rounded="rounded-full" className="uppercase tracking-wide">
                  {project.status}
                </UiBadge>
                <UiCardTitle className="text-xl">{project.title}</UiCardTitle>
              </UiCardHeaderChild>
              <UiButton variant="ghost" size="sm">
                Ver avance
              </UiButton>
            </UiCardHeader>
            <UiCardBody className="space-y-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <UiBadge
                    key={tech}
                    color="neutral"
                    rounded="rounded-full"
                    className="bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {tech}
                  </UiBadge>
                ))}
              </div>
            </UiCardBody>
            <UiCardFooter>
              <UiCardFooterChild>
                <UiButton size="sm" variant="outline">
                  Documentación
                </UiButton>
              </UiCardFooterChild>
              <UiCardFooterChild className="justify-end text-xs text-zinc-500">
                Actualizado semanalmente
              </UiCardFooterChild>
            </UiCardFooter>
          </UiCard>
        ))}
      </div>
    </section>
  );
}
