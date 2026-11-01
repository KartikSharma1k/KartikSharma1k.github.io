import { Cpu } from "lucide-react";
import { Reveal, Section } from "@/components/ui/Kit";

const row = "camera frame ▸ preprocess ▸ tflite model ▸ inference ▸ post-process ▸ output ▸ ";
const stats = [
  { v: "25%", l: "better captured image quality", c: "Underwater camera app, on-device TensorFlow Lite post-processing" },
  { v: "40%", l: "lower shutter delay", c: "Underwater camera app, low-latency Bluetooth LE" },
  { v: "91.5%", l: "wake-word accuracy", c: "Golf assistant, Core ML + AVFoundation (70% fewer false activations)" },
];

export default function EdgeAI() {
  return (
    <Section id="edge-ai">
      <Reveal className="text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Intelligence <span className="grad-text">on the device.</span></h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400">Not every intelligent system needs a cloud connection. I run inference directly on the phone: faster to respond, working offline, with data staying put.</p>
      </Reveal>
      {/* glowing core with streaming pipeline text, echoing the reference's "Performance & security" scene */}
      <div className="relative mx-auto mt-10 h-[340px] max-w-[900px] overflow-hidden [mask-image:radial-gradient(ellipse_at_center,#000_35%,transparent_75%)]" aria-hidden="true">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap font-mono text-[13px] text-[#8a7bff]" style={{ opacity: 0.12 + (i % 3) * 0.1, height: 30, transform: `translateX(${i % 2 ? "-30%" : "0"})` }}>
            <div style={{ animation: `${i % 2 ? "orbit" : "none"} 0s` }}>{row.repeat(6)}</div>
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-purple/70 bg-bg shadow-[0_0_80px_20px_#7042f866]"><Cpu size={42} className="text-[#b49bff]" /></div>
          <span className="badge mt-3 inline-block bg-bg/80 px-3 py-1 text-xs text-gray-200">On-device inference</span>
        </div>
      </div>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.v} delay={i * 0.06}>
            <li className="glass h-full list-none rounded-2xl p-5 text-center"><p className="font-display text-3xl font-bold grad-text">{s.v}</p><p className="mt-1 text-sm">{s.l}</p><p className="mt-1 text-xs text-gray-500">{s.c}</p></li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
