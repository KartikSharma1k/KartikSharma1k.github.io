import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Section, Pill } from "@/components/ui/Kit";
import { Github } from "@/components/ui/Icons";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} | Kartik Sharma`, description: p.tagline } : {};
}

const H = ({ children }: { children: React.ReactNode }) => <h2 className="eyebrow mb-3">{children}</h2>;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const i = projects.indexOf(p), next = projects[(i + 1) % projects.length];
  return (
    <article className="mx-auto max-w-[1000px] px-5 pb-10 pt-32">
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted">
        <Link href="/" className="hover:text-ink">Home</Link><ChevronRight size={12} /><Link href="/#projects" className="hover:text-ink">Projects</Link><ChevronRight size={12} /><span className="text-ink">{p.title}</span>
      </nav>
      <p className="mt-8 text-xs uppercase tracking-widest" style={{ color: p.accent }}>{p.kind} · {p.org}</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-6xl">{p.title}</h1>
      <p className="mt-4 text-lg text-muted">{p.tagline}</p>
      <ul className="mt-5 flex flex-wrap gap-2">{p.stack.map((s) => <li key={s} className="glass rounded-full px-3 py-1 text-xs">{s}</li>)}</ul>
      {p.results.length > 0 && <div className="mt-8 grid gap-3 sm:grid-cols-3">{p.results.map((r) => <div key={r.label} className="glass rounded-3xl p-5"><p className="font-display text-4xl font-bold grad-text">{r.value}</p><p className="mt-1 text-xs text-muted">{r.label}</p></div>)}</div>}

      <Section className="!px-0 grid gap-8 md:grid-cols-2">
        <div><H>Overview</H><p className="text-muted leading-relaxed">{p.overview}</p></div>
        <div><H>Problem</H><p className="text-muted leading-relaxed">{p.problem}</p></div>
        <div><H>Engineering challenges</H><ul className="space-y-2 text-sm text-muted">{p.challenges.map((c) => <li key={c}>• {c}</li>)}</ul></div>
        <div><H>My contribution</H><ul className="space-y-2 text-sm text-muted">{p.contribution.map((c) => <li key={c}>• {c}</li>)}</ul></div>
      </Section>

      <div className="glass rounded-3xl p-6">
        <H>Architecture</H>
        <ol className="flex flex-wrap items-center gap-2">
          {p.architecture.map((a, k) => (
            <li key={a} className="flex items-center gap-2"><span className="rounded-2xl px-3 py-2 text-sm" style={{ background: p.accent + "22", border: `1px solid ${p.accent}55` }}>{a}</span>{k < p.architecture.length - 1 && <ArrowRight size={14} className="text-muted" />}</li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-muted">Simplified diagram based on the project description.</p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="glass rounded-3xl p-6"><H>Highlights</H><ul className="space-y-1.5 text-sm text-muted">{p.highlights.map((h) => <li key={h}>• {h}</li>)}</ul></div>
        <div className="glass rounded-3xl p-6"><H>Links &amp; media</H>
          {p.github ? <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-cyan hover:underline"><Github size={16} /> {p.github.replace("https://", "")} <ExternalLink size={12} /></a>
            : <p className="text-sm text-muted"><Pill tone="grow">Repository link coming soon</Pill></p>}
          <p className="mt-4 rounded-2xl border border-dashed border-white/15 p-4 text-xs text-muted">Screenshots placeholder: add images to <code>public/projects/{p.slug}/</code> and reference them in <code>data/projects.ts</code>.</p>
        </div>
      </div>

      <div className="mt-10 flex justify-between text-sm"><Link href="/#projects" className="text-muted hover:text-ink">← All projects</Link><Link href={`/projects/${next.slug}/`} className="text-cyan hover:underline">Next: {next.title} →</Link></div>
    </article>
  );
}
