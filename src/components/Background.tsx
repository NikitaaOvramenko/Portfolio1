import { useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext.tsx";

window.THREE = THREE;

export default function Background() {
  const vantaRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const effectRef = useRef<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!vantaRef.current) return;

    if (effectRef.current) effectRef.current.destroy();

    effectRef.current = WAVES({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: theme === "light" ? 0x575757 : 0x000000,
      shininess: 45,
      waveHeight: 20,
      waveSpeed: 0.8,
      zoom: 1.5,
    });

    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, [theme]);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
}
