"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function PageHeader({ eyebrow, title, sub, children }: { eyebrow: string; title: ReactNode; sub?: string; children?: ReactNode }) {
  return (
    <header className="mx-auto max-w-[1200px] px-5 pb-10 pt-36">
      <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
      <Reveal delay={0.05}><h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl">{title}</h1></Reveal>
      {sub && <Reveal delay={0.1}><p className="mt-6 max-w-2xl text-lg text-muted">{sub}</p></Reveal>}
      {children}
    </header>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`mx-auto max-w-[1200px] px-5 py-14 ${className}`}>{children}</section>;
}

export function Pill({ children, tone = "pro" }: { children: ReactNode; tone?: "pro" | "learn" | "grow" }) {
  const c = tone === "pro" ? "border-cyan/40 text-cyan bg-cyan/10" : tone === "learn" ? "border-magenta/40 text-magenta bg-magenta/10" : "border-violet/40 text-violet bg-violet/10";
  return <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${c}`}>{children}</span>;
}

export function Counter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);
  useEffect(() => {
    if (!inView || reduce) { if (reduce) setN(value); return; }
    let raf = 0; const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - t0) / 1400, 1);
      setN(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);
  return <span ref={ref}>{n.toFixed(decimals)}{suffix}</span>;
}

export function Btn({ href, children, variant = "primary", download, external }: { href: string; children: ReactNode; variant?: "primary" | "ghost"; download?: boolean; external?: boolean }) {
  const cls = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${variant === "primary" ? "btn-primary border border-purple/50 text-white" : "glass text-ink hover:border-purple/70"}`;
  if (download || external || href.startsWith("mailto:") || href.startsWith("tel:"))
    return <a className={cls} href={href} download={download} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>{children}</a>;
  return <Link className={cls} href={href}>{children}</Link>;
}

export function Fallback2D({ title, items, color = "#8657FF" }: { title: string; items?: string[]; color?: string }) {
  return (
    <div className="glass relative grid h-full w-full place-items-center overflow-hidden rounded-3xl p-6 text-center">
      <div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(circle at 50% 40%, ${color}55, transparent 65%)` }} />
      <div className="relative">
        <p className="font-display text-xl font-semibold">{title}</p>
        {items && <div className="mt-4 flex flex-wrap justify-center gap-2">{items.map((i) => <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-xs text-muted">{i}</span>)}</div>}
        <p className="mt-4 text-[11px] text-muted/70">Simplified view. Enable 3D in the menu for the interactive scene.</p>
      </div>
    </div>
  );
}
