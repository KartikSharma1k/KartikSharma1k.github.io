export const experience = [
  {
    role: "Software Development Engineer I", company: "Nayan India Science and Technology", period: "Aug 2026 – Present", current: true,
    points: [
      "Lead Android development for a camera-based product, owning app architecture, feature delivery and releases.",
      "Migrated the production Android codebase to Kotlin and from XML layouts to Jetpack Compose, adopting state-driven UI and multithreading to improve UI performance by over 40% through fewer frame drops and ANRs.",
      "Restructured the app into reusable feature modules, reducing duplicate code by approximately 35%.",
      "Integrated the app with 2 camera devices (Nayan Cam, KENT) for real-time image processing and video encoding, cutting processing latency by around 25%.",
    ],
  },
  {
    role: "Associate Software Engineer", company: "Hestabit Technologies Pvt. Ltd., Noida, India", period: "Apr 2024 – May 2026", current: false,
    points: [
      "Built an underwater Android camera application in Kotlin, controlling the camera over Bluetooth LE; reduced shutter delay by 40% through low-latency Bluetooth communication.",
      "Improved captured image quality by 25% by implementing on-device TensorFlow Lite post-processing, keeping inference on the device instead of a server.",
      "Developed a voice-enabled golf assistant for iOS using Core ML and AVFoundation voice activity detection, achieving 91.5% wake-word accuracy and 70% fewer false activations.",
      "Refactored 3+ Android and Flutter applications to MVVM with Dependency Injection, improving testability and increasing feature delivery speed by 25%.",
      "Developed and maintained backend services in Java with Spring Boot and Spring Framework, building and consuming REST APIs that powered the mobile applications.",
      "Integrated REST APIs and third-party SDKs including Maps SDK and speech recognition, and handled API error states, caching and offline behaviour.",
      "Designed and published reusable Kotlin packages shared across projects, cutting duplicated code by around 40% and shortening onboarding for new developers.",
      "Applied Clean Architecture across Android and iOS codebases, reducing technical debt by 30%.",
    ],
  },
];

export const education = [
  { title: "B.Tech, Information Technology", school: "Dr. Akhilesh Das Gupta Institute of Technology & Management, Delhi", period: "2021 – 2024", score: "CGPA 8.41 / 10" },
  { title: "Diploma, Computer Science", school: "Ambedkar Institute of Technology, Delhi", period: "2018 – 2021", score: "CGPA 7.4 / 10" },
];

export const achievements = [
  "Top 5 team in a government-organised on-campus hackathon.",
  "Ranked 3rd out of 60 students in the IT branch in the campus placement drive.",
];

export type Metric = { value: number; suffix: string; decimals?: number; label: string; context: string };
export const metrics: Metric[] = [
  { value: 2.5, suffix: "+", decimals: 1, label: "Years of experience", context: "Production mobile and backend work" },
  { value: 40, suffix: "%+", label: "UI performance gain", context: "Nayan: XML → Jetpack Compose migration, fewer frame drops and ANRs" },
  { value: 35, suffix: "%", label: "Less duplicate code", context: "Nayan: feature modularisation (approx.)" },
  { value: 40, suffix: "%", label: "Lower shutter delay", context: "Underwater camera: low-latency Bluetooth LE" },
  { value: 25, suffix: "%", label: "Better image quality", context: "Underwater camera: on-device TensorFlow Lite post-processing" },
  { value: 91.5, suffix: "%", decimals: 1, label: "Wake-word accuracy", context: "Golf assistant: Core ML + AVFoundation VAD" },
  { value: 70, suffix: "%", label: "Fewer false activations", context: "Golf assistant (iOS)" },
];

export const steps = [
  { name: "Understand", d: "Ask what the problem really is: the users, the device, the constraints." },
  { name: "Architect", d: "Choose structure that stays testable and modular as it grows." },
  { name: "Build", d: "Ship features in Kotlin, Compose, Swift, Flutter and Spring Boot." },
  { name: "Integrate", d: "Connect APIs, SDKs, cameras and Bluetooth devices." },
  { name: "Test", d: "Make behaviour verifiable before it reaches users." },
  { name: "Deploy", d: "Own releases from prototype to production." },
  { name: "Optimize", d: "Chase frame drops, latency and duplicate code." },
];
