import { Apple, Bird, Binary, Blocks, BrainCircuit, Bluetooth, Boxes, Camera, Cloud, Code, Coffee, Component, Cpu, Database, FileCode, Film, Flame, GitBranch, Layers, Layout, LayoutDashboard, Leaf, MapPin, Mic, Network, Puzzle, Radio, Rocket, Server, Share2, ShieldCheck, Smartphone, Webhook, Workflow, Zap, type LucideIcon } from "lucide-react";

const G = "#3DDC84";
const ICONS: Record<string, [LucideIcon, string]> = {
  Kotlin: [Code, "#B58CFF"], Java: [Coffee, "#F89820"], Swift: [Bird, "#FA7343"], SwiftUI: [Apple, "#FA7343"], Dart: [Zap, "#40C4FF"], Flutter: [Layers, "#54C5F8"],
  "Android SDK": [Smartphone, G], "Jetpack Compose": [LayoutDashboard, "#4285F4"], "XML Layouts": [FileCode, "#9CA6C5"],
  MVVM: [Component, "#8657FF"], MVP: [Component, "#8657FF"], "Clean Architecture": [Boxes, "#8657FF"], "Dependency Injection": [Puzzle, "#8657FF"], "Multi-module Architecture": [Blocks, "#8657FF"], Multithreading: [Workflow, "#8657FF"],
  "Spring Boot": [Leaf, "#6DB33F"], "Spring Framework": [Leaf, "#6DB33F"], "Spring AI": [BrainCircuit, "#6DB33F"], "REST APIs": [Webhook, "#36D9F5"], Retrofit: [Share2, "#36D9F5"], gRPC: [Network, "#36D9F5"], "Protocol Buffers": [Binary, "#36D9F5"],
  "TensorFlow Lite": [BrainCircuit, "#FF8F00"], "Core ML": [Cpu, "#D65AFF"], "On-Device ML Inference": [Cpu, "#D65AFF"], "Speech Recognition": [Mic, "#D65AFF"], "Real-Time Image Processing": [Camera, "#D65AFF"],
  "Bluetooth LE": [Bluetooth, "#4285FF"], "Camera Integration": [Camera, "#36D9F5"], "Video Encoding": [Film, "#36D9F5"], "Maps SDK": [MapPin, "#36D9F5"], "IoT Integrations": [Radio, "#36D9F5"],
  "Firebase Firestore": [Flame, "#FFCA28"], "Firebase Realtime Database": [Flame, "#FFCA28"], "Firebase Authentication": [Flame, "#FFCA28"], Room: [Database, "#4285FF"], SQLite: [Database, "#4285FF"], MongoDB: [Database, "#47A248"],
  "Forward Deployed Engineering": [Rocket, "#D65AFF"], "Platform Engineering": [Server, "#D65AFF"], DevOps: [GitBranch, "#D65AFF"], "CI/CD": [GitBranch, "#D65AFF"], "Cloud Deployment": [Cloud, "#D65AFF"],
  "Solution Architecture": [Boxes, "#D65AFF"], "Production AI Integration": [BrainCircuit, "#D65AFF"], "System Reliability": [ShieldCheck, "#D65AFF"],
};
const lookup = (n: string): [LucideIcon, string] => ICONS[n] ?? [Layout, "#9CA6C5"];

/** Rounded glass tile with the technology's icon and its full name. */
export default function Tile({ name, size = 64, learning = false, label = true, card = false }: { name: string; size?: number; learning?: boolean; label?: boolean; card?: boolean }) {
  const [Icon, color] = lookup(name);
  const box = learning ? "border border-dashed border-magenta/60 bg-magenta/5" : "border border-white/10 bg-white/[0.06]";
  if (card)
    return (
      <div className={`flex h-[92px] w-[112px] flex-col items-center justify-center gap-2 rounded-2xl px-2 text-center shadow-[inset_0_0_14px_rgba(164,143,255,0.18)] backdrop-blur ${box}`} title={name}>
        <Icon size={30} color={color} strokeWidth={1.75} />
        <span className="text-[12px] font-medium leading-tight text-gray-200">{name}</span>
      </div>
    );
  return (
    <div className="flex w-[92px] flex-col items-center gap-2 text-center" title={name}>
      <span className={`grid place-items-center rounded-2xl shadow-[inset_0_0_14px_rgba(164,143,255,0.18)] ${box}`} style={{ width: size, height: size }}>
        <Icon size={size * 0.46} color={color} strokeWidth={1.75} />
      </span>
      {label && <span className="text-[11px] leading-tight text-gray-300">{name}</span>}
    </div>
  );
}
