import { Smartphone, Cpu, Server } from "lucide-react";
import { Reveal, Section } from "@/components/ui/Kit";
import { metrics } from "@/data/profile";

const cards = [
  { icon: Smartphone, t: "Mobile engineering", d: "Kotlin, Jetpack Compose, Swift and Flutter apps in production, modernised into clean, modular architectures." },
  { icon: Cpu, t: "On-device AI & hardware", d: "Camera and Bluetooth LE devices, real-time image processing, and TensorFlow Lite / Core ML inference that runs on the phone." },
  { icon: Server, t: "Backend & systems", d: "Java and Spring Boot services and REST APIs behind the apps, with gRPC and Protocol Buffers in my open-source work." },
];

export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">I don&apos;t just build applications. <span className="grad-text">I build complete solutions.</span></h2>
        <p className="mt-5 max-w-3xl text-gray-400">I like understanding the whole system first (the user, the device, the network, the backend) and then building the part that makes it work reliably. I&apos;m now growing toward Forward Deployed Engineering, where software, infrastructure, AI and real-world delivery meet. It&apos;s a direction I&apos;m developing, not a title I hold today.</p>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-6">
              <c.icon className="text-purple" size={26} />
              <h3 className="mt-4 text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-gray-400">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metrics.slice(1, 5).map((m) => (
            <li key={m.label} className="glass rounded-2xl p-5">
              <p className="font-display text-3xl font-bold grad-text">{m.value}{m.suffix}</p>
              <p className="mt-1 text-sm">{m.label}</p>
              <p className="mt-1 text-xs text-gray-500">{m.context}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
