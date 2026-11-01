"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Points as PointsType } from "three";

function Stars() {
  const ref = useRef<PointsType>(null);
  const positions = useMemo(() => {
    const a = new Float32Array(6000);
    for (let i = 0; i < a.length; i += 3) {
      const r = 1.2 * Math.cbrt(Math.random()), t = Math.random() * Math.PI * 2, p = Math.acos(2 * Math.random() - 1);
      a[i] = r * Math.sin(p) * Math.cos(t); a[i + 1] = r * Math.sin(p) * Math.sin(t); a[i + 2] = r * Math.cos(p);
    }
    return a;
  }, []);
  useFrame((_, dt) => { if (ref.current) { ref.current.rotation.x -= dt / 12; ref.current.rotation.y -= dt / 18; } });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} stride={3} positions={positions} frustumCulled>
        <PointMaterial transparent color="#ffffff" size={0.0022} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export default function StarField() {
  return <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} gl={{ alpha: true }} style={{ background: "transparent" }} onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}><Stars /></Canvas>;
}
