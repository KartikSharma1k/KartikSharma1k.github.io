import Link from "next/link";
import { Reveal, Section } from "@/components/ui/Kit";
import { projects, type Project } from "@/data/projects";

/** Generated cover (no screenshots supplied yet): accent glow, grid and stack monograms. */
function Cover({ p }: { p: Project }) {
  return (
    <div className="relative h-44 overflow-hidden border-b border-[#2A0E61]" style={{ background: `radial-gradient(circle at 70% 20%, ${p.accent}55, transparent 60%), linear-gradient(135deg, #0b0820, #150a35)` }}>
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(150,130,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(150,130,255,.2)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex gap-2">{p.stack.slice(0, 3).map((s) => <span key={s} className="rounded-xl border border-white/15 bg-white/[0.07] px-3 py-2 text-xs font-medium text-white/90 backdrop-blur">{s}</span>)}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <Reveal className="text-center"><h2 className="grad-text text-4xl font-semibold sm:text-5xl">My Projects</h2><p className="mt-3 text-sm text-gray-400">Select a project for its case study.</p></Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.05}>
            <Link href={`/projects/${p.slug}/`} className="group block h-full overflow-hidden rounded-lg border border-[#2A0E61] bg-[#030014]/60 shadow-lg transition hover:border-purple/70">
              <Cover p={p} />
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-widest" style={{ color: p.accent }}>{p.kind}</p>
                <h3 className="mt-1 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{p.tagline}</p>
                {p.results[0] && <p className="mt-4 font-display text-lg font-bold grad-text">{p.results[0].value} <span className="text-xs font-normal text-gray-400">{p.results[0].label}</span></p>}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
