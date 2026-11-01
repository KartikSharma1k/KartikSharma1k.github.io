import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-8 text-center text-xs text-muted">
      <p>© {new Date().getFullYear()} {site.name}. Engineering beyond the screen.</p>
    </footer>
  );
}
