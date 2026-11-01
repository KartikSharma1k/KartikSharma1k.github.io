"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Gfx = { enabled: boolean; setEnabled: (v: boolean) => void; reduced: boolean; supported: boolean };
const Ctx = createContext<Gfx>({ enabled: false, setEnabled: () => {}, reduced: false, supported: false });
export const useGfx = () => useContext(Ctx);

/** Decides whether 3D scenes run: needs WebGL, no reduced-motion, not a low-end device, and the user hasn't opted out. */
export function GfxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({ enabled: false, reduced: false, supported: false });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let webgl = false;
    try { webgl = !!document.createElement("canvas").getContext("webgl2") || !!document.createElement("canvas").getContext("webgl"); } catch { /* none */ }
    const nav = navigator as Navigator & { deviceMemory?: number };
    const lowEnd = (nav.hardwareConcurrency ?? 8) <= 2 || (nav.deviceMemory ?? 8) <= 2;
    let pref: string | null = null;
    try { pref = localStorage.getItem("gfx"); } catch { /* ignore */ }
    const supported = webgl && !lowEnd;
    setState({ reduced, supported, enabled: supported && !reduced && pref !== "off" });
  }, []);

  const setEnabled = (v: boolean) => {
    setState((s) => ({ ...s, enabled: v && s.supported }));
    try { localStorage.setItem("gfx", v ? "on" : "off"); } catch { /* ignore */ }
  };
  return <Ctx.Provider value={{ ...state, setEnabled }}>{children}</Ctx.Provider>;
}
