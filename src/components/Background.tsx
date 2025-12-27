import { useEffect, useRef, useState, useCallback } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext.tsx";

window.THREE = THREE;

// Vanta wave configuration
const getWaveConfig = (element: HTMLElement, theme: string) => ({
  el: element,
  THREE,
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: theme === "light" ? 0x575757 : 0x000000,
  shininess: 45,
  waveHeight: 20,
  waveSpeed: 0.2,
  zoom: 0.70,
});

interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Resize handler
  const handleResize = useCallback(() => {
    vantaEffect?.resize();
  }, [vantaEffect]);

  // Create/recreate Vanta effect when theme changes
  useEffect(() => {
    if (!vantaRef.current) return;

    // Cleanup previous effect
    vantaEffect?.destroy();

    // Create new effect with current theme
    const effect = WAVES(getWaveConfig(vantaRef.current, theme));
    setVantaEffect(effect);

    return () => {
      effect.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  // Handle resize events
  useEffect(() => {
    if (!vantaRef.current || !vantaEffect) return;

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(vantaRef.current);
    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [vantaEffect, handleResize]);

  return (
    <div
      ref={vantaRef}
      className="flex flex-col items-center min-h-screen w-full"
    >
      {children}
    </div>
  );
}
