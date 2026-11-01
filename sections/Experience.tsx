import { Reveal, Section, Pill } from "@/components/ui/Kit";
import { achievements, education, experience } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience">
      <Reveal><p className="eyebrow">Experience</p><h2 className="mt-3 text-3xl font-bold sm:text-4xl">Where I&apos;ve worked</h2></Reveal>
      <ol className="mt-8 space-y-5 border-l border-purple/30 pl-6">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.06}>
            <li className="relative">
              <span className={`absolute -left-[31px] top-7 h-3 w-3 rounded-full ${e.current ? "bg-cyan" : "bg-purple"}`} />
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-semibold">{e.role}</h3>{e.current && <Pill>Current</Pill>}</div>
                <p className="text-sm text-gray-400">{e.company} · {e.period}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">{e.points.map((p) => <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />{p}</li>)}</ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal><div className="glass h-full rounded-2xl p-6"><h3 className="font-semibold">Education</h3>
          <ul className="mt-4 space-y-4 text-sm">{education.map((e) => <li key={e.title}><p className="text-gray-100">{e.title}</p><p className="text-gray-400">{e.school}</p><p className="text-xs text-gray-500">{e.period} · {e.score}</p></li>)}</ul></div></Reveal>
        <Reveal delay={0.06}><div className="glass h-full rounded-2xl p-6"><h3 className="font-semibold">Achievements</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-300">{achievements.map((a) => <li key={a} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />{a}</li>)}</ul></div></Reveal>
      </div>
    </Section>
  );
}
