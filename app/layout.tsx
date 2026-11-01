import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GfxProvider } from "@/hooks/useGfx";
import Stars from "@/components/Stars";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { site } from "@/data/site";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: { title: site.title, description: site.description, url: site.url, siteName: "Kartik Sharma", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kartik Sharma, Mobile Engineer and AI & Edge Computing Developer" }] },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og.png"] },
};
export const viewport: Viewport = { themeColor: "#080B18" };

const jsonLd = {
  "@context": "https://schema.org", "@type": "Person", name: site.name, url: site.url, email: site.email,
  jobTitle: "Software Development Engineer I", worksFor: { "@type": "Organization", name: "Nayan India Science and Technology" },
  sameAs: [site.github, site.linkedin],
  knowsAbout: ["Android", "iOS", "Flutter", "Kotlin", "Java", "Spring Boot", "TensorFlow Lite", "Core ML", "Bluetooth LE"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${inter.variable}`}>
      <body id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="sr-only-skip glass rounded-full px-4 py-2">Skip to content</a>
        <GfxProvider>
          <Stars />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
        </GfxProvider>
      </body>
    </html>
  );
}
