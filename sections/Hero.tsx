import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Btn } from "@/components/ui/Kit";
import Tile from "@/components/ui/Tile";
import { site } from "@/data/site";

// [name, radius, angle]: tiles scattered on a wheel, like the reference hero
const wheel: [string, number, number][] = [
  ["Kotlin", 215, -90], ["Jetpack Compose", 215, -45], ["Flutter", 215, 0], ["TensorFlow Lite", 215, 45], ["Bluetooth LE", 215, 90],
  ["Spring Boot", 215, 135], ["Core ML", 215, 180], ["Java", 215, 225],
  ["Swift", 105, -30], ["gRPC", 105, 90], ["Firebase Firestore", 105, 210],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* glowing portal arc, the signature element of the space theme */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[420px] overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-[-40px] h-[260px] w-[900px] -translate-x-1/2 rounded-full bg-purple/40 blur-[90px]" />
        <div className="absolute left-1/2 top-[-760px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-bg shadow-[0_6px_14px_#ffffffcc,0_16px_40px_#c9b6ff,0_40px_110px_30px_#7042f8]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1200px] items-center gap-10 px-5 pb-16 pt-32 lg:grid-cols-2">
        <div>
          <div className="badge inline-flex items-center gap-2 px-3 py-2">
            <Sparkles size={16} className="text-[#b49bff]" />
            <span className="badge-text text-[13px]">Mobile Engineer · AI &amp; Edge Computing</span>
          </div>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.08] sm:text-6xl">
            Engineering <span className="grad-text">beyond</span> <span className="grad-text">the screen.</span>
          </h1>
          <p className="mt-6 max-w-xl text-gray-400">
            I&apos;m a software engineer with 2.5+ years of experience building production mobile apps on Android, iOS and Flutter, plus backend services and hardware-connected systems. I build intelligent software that connects applications, hardware and AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="/#projects">Explore my work <ArrowRight size={16} /></Btn>
            <Btn href={site.resume} variant="ghost" download><Download size={16} /> Download resume</Btn>
          </div>
        </div>

        {/* rotating wheel of tech tiles over a faint grid */}
        <div className="relative mx-auto hidden h-[560px] w-[560px] items-center justify-center lg:flex" aria-hidden="true">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(150,130,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(150,130,255,.14)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:radial-gradient(circle,#000_30%,transparent_70%)]" />
          {[105, 215, 270].map((r) => <div key={r} className="absolute rounded-full border border-white/10" style={{ width: r * 2, height: r * 2 }} />)}
          <div className="absolute h-[540px] w-px rotate-45 bg-white/10" /><div className="absolute h-[540px] w-px -rotate-45 bg-white/10" />
          <div className="absolute inset-0" style={{ animation: "orbit 90s linear infinite" }}>
            {wheel.map(([n, r, a]) => (
              <div key={n} className="absolute left-1/2 top-1/2" style={{ transform: `rotate(${a}deg) translateX(${r}px) rotate(${-a}deg)`, marginLeft: -56, marginTop: -46 }}>
                <div style={{ animation: "orbit-rev 90s linear infinite" }}><Tile name={n === "Firebase Firestore" ? "Firebase Firestore" : n} card /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
