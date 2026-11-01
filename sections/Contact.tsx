import { Mail, Phone, Download } from "lucide-react";
import { Btn, Reveal, Section } from "@/components/ui/Kit";
import { Github, Linkedin } from "@/components/ui/Icons";
import { site } from "@/data/site";

const rows = [
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: site.phone, href: site.phoneHref },
  { icon: Linkedin, label: "linkedin.com/in/kartik-sharma-1k", href: site.linkedin, ext: true },
  { icon: Github, label: "github.com/KartikSharma1k", href: site.github, ext: true },
];

export default function Contact() {
  return (
    <Section id="contact" className="text-center">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">Have a real-world problem? <span className="grad-text">Let&apos;s engineer the solution.</span></h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-400">Mobile apps, hardware integration, on-device AI, platform modernisation, or a complex system. I&apos;m always interested in meaningful challenges.</p>
      </Reveal>
      <Reveal delay={0.08}>
        <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
          {rows.map((r) => (
            <li key={r.label}><a href={r.href} {...(r.ext ? { target: "_blank", rel: "noreferrer" } : {})} className="glass flex items-center justify-center gap-3 rounded-2xl p-4 text-sm transition hover:border-purple/70"><r.icon size={18} className="text-purple" />{r.label}</a></li>
          ))}
        </ul>
        <div className="mt-6 flex justify-center"><Btn href={site.resume} download><Download size={16} /> Download resume</Btn></div>
      </Reveal>
    </Section>
  );
}
