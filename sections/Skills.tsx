import { Reveal, Section } from "@/components/ui/Kit";
import Tile from "@/components/ui/Tile";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" className="relative">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/25 blur-[110px]" aria-hidden="true" />
      <Reveal className="text-center">
        <div className="badge inline-flex items-center gap-2 px-3 py-1.5"><span className="badge-text text-[13px]">Skills</span></div>
        <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Building across the whole stack.</h2>
        <p className="mt-3 text-sm text-gray-400">Solid tiles are used in production work. <span className="text-magenta">Dashed tiles</span> are areas I&apos;m learning, not claimed as professional experience.</p>
      </Reveal>
      <div className="mt-12 space-y-10">
        {skillGroups.map((g, i) => (
          <Reveal key={g.id} delay={0.03 * (i % 3)}>
            <p className="mb-4 text-center text-xs uppercase tracking-[0.2em]" style={{ color: g.color }}>{g.name}</p>
            <ul className="mx-auto flex max-w-[960px] flex-wrap justify-center gap-x-4 gap-y-5">
              {g.skills.map((s) => <li key={s.name}><Tile name={s.name} learning={s.level === "learning"} /></li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
