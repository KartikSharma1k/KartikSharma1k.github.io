"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { Github, Linkedin } from "./ui/Icons";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[65px] bg-[#03001427] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-5">
        <Link href="/#top" className="flex items-center gap-3" aria-label="Kartik Sharma, back to top">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-purple/60 bg-purple/20 text-xs font-bold">KS</span>
          <span className="hidden font-medium text-gray-300 sm:inline">Kartik Sharma</span>
        </Link>
        <ul className="hidden items-center gap-7 rounded-full border border-purple/40 bg-[rgba(3,0,20,0.37)] px-6 py-2.5 text-sm text-gray-200 md:flex">
          {nav.map((n) => <li key={n.href}><Link href={n.href} className="transition hover:text-purple">{n.label}</Link></li>)}
        </ul>
        <div className="hidden items-center gap-5 md:flex">
          <a aria-label="GitHub" href={site.github} target="_blank" rel="noreferrer"><Github size={22} className="text-white transition hover:text-purple" /></a>
          <a aria-label="LinkedIn" href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={22} className="text-white transition hover:text-purple" /></a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X size={26} /> : <Menu size={26} />}</button>
      </nav>
      {open && (
        <div className="absolute left-0 top-[65px] w-full bg-bg p-5 md:hidden">
          <ul className="flex flex-col items-center gap-4 text-gray-300">
            {nav.map((n) => <li key={n.href}><Link href={n.href} onClick={() => setOpen(false)} className="transition hover:text-purple">{n.label}</Link></li>)}
          </ul>
          <div className="mt-5 flex justify-center gap-6">
            <a aria-label="GitHub" href={site.github} target="_blank" rel="noreferrer"><Github size={26} /></a>
            <a aria-label="LinkedIn" href={site.linkedin} target="_blank" rel="noreferrer"><Linkedin size={26} /></a>
          </div>
        </div>
      )}
    </header>
  );
}
