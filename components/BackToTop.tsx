"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`glass fixed bottom-6 right-6 z-40 rounded-full p-3 transition-all hover:text-cyan ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
      <ArrowUp size={18} />
    </button>
  );
}
