import { useEffect, useRef, useCallback } from "react";
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
  const vantaRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const effectRef = useRef<any>(null);
  const { theme } = useTheme();

  // Resize handler
  const handleResize = useCallback(() => {
    try {
      effectRef.current?.resize();
    } catch {
      // Ignore resize errors
    }
  }, []);

  // Create/recreate Vanta effect when theme changes
  useEffect(() => {
    if (!vantaRef.current) return;

    // Cleanup function to safely destroy effect
    const cleanup = () => {
      try {
        if (effectRef.current) {
          effectRef.current.destroy();
          effectRef.current = null;
        }
      } catch {
        // Ignore destroy errors on mobile
        effectRef.current = null;
      }
    };

    // Cleanup previous effect
    cleanup();

    // Small delay to let WebGL context properly release (helps on mobile)
    const timeoutId = setTimeout(() => {
      if (!vantaRef.current) return;

      try {
        effectRef.current = WAVES(getWaveConfig(vantaRef.current, theme));
      } catch (error) {
        console.warn("Failed to create Vanta effect:", error);
      }
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      cleanup();
    };
  }, [theme]);

  // Handle resize events
  useEffect(() => {
    if (!vantaRef.current) return;

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(vantaRef.current);
    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div
      ref={vantaRef}
      className="flex flex-col items-center min-h-screen w-full"
    >
      {children}
    </div>
  );
}
