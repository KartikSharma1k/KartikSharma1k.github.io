export type SkillLevel = "professional" | "learning";
export type SkillGroup = { id: string; name: string; color: string; blurb: string; skills: { name: string; level: SkillLevel }[] };

const pro = (names: string[]) => names.map((name) => ({ name, level: "professional" as const }));
const learn = (names: string[]) => names.map((name) => ({ name, level: "learning" as const }));

export const skillGroups: SkillGroup[] = [
  { id: "mobile", name: "Mobile Engineering", color: "#4285FF", blurb: "Production apps across Android, iOS and Flutter.",
    skills: pro(["Kotlin", "Java", "Android SDK", "Jetpack Compose", "XML Layouts", "Flutter", "Dart", "Swift", "SwiftUI"]) },
  { id: "arch", name: "Architecture & Engineering", color: "#8657FF", blurb: "Structure that keeps large codebases testable and modular.",
    skills: pro(["MVVM", "MVP", "Clean Architecture", "Dependency Injection", "Multi-module Architecture", "Multithreading"]) },
  { id: "backend", name: "Backend Engineering", color: "#36D9F5", blurb: "Services and APIs that power the mobile apps.",
    skills: pro(["Java", "Spring Boot", "Spring Framework", "Spring AI", "REST APIs", "Retrofit", "gRPC", "Protocol Buffers"]) },
  { id: "ai", name: "AI & Machine Learning", color: "#D65AFF", blurb: "Inference that runs on the device, not in the cloud.",
    skills: pro(["TensorFlow Lite", "Core ML", "On-Device ML Inference", "Speech Recognition", "Real-Time Image Processing"]) },
  { id: "hardware", name: "Hardware & Connectivity", color: "#36D9F5", blurb: "Software that talks to cameras and devices.",
    skills: pro(["Bluetooth LE", "Camera Integration", "Video Encoding", "Maps SDK", "IoT Integrations"]) },
  { id: "data", name: "Databases & Storage", color: "#4285FF", blurb: "Local and cloud persistence.",
    skills: pro(["Firebase Firestore", "Firebase Realtime Database", "Firebase Authentication", "Room", "SQLite", "MongoDB"]) },
  { id: "emerging", name: "Emerging Engineering Focus", color: "#D65AFF", blurb: "Where I'm growing next. Learning and developing, not claimed as professional experience.",
    skills: learn(["Forward Deployed Engineering", "Platform Engineering", "DevOps", "CI/CD", "Cloud Deployment", "Solution Architecture", "Production AI Integration", "System Reliability"]) },
];
