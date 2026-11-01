"use client";
import dynamic from "next/dynamic";
import { useGfx } from "@/hooks/useGfx";

const StarField = dynamic(() => import("./StarField"), { ssr: false });

/** Drifting star field behind the whole page. Skipped on low-end devices / reduced motion / 3D off. */
export default function Stars() {
  const { enabled } = useGfx();
  if (!enabled) return null;
  return <div className="fixed inset-0 -z-10" aria-hidden="true"><StarField /></div>;
}
