import { useEffect, useRef, useState, useCallback } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
window.THREE = THREE;

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  // Resize handler for dynamic content
  const handleResize = useCallback(() => {
    if (vantaEffect) {
      vantaEffect.resize();
    }
  }, [vantaEffect]);

  // Initialize Vanta effect
  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x000000,
          shininess: 45,
          waveHeight: 20,
          waveSpeed: 0.2,
          zoom: 0.75,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Watch for container size changes (when content loads dynamically)
  useEffect(() => {
    if (!vantaRef.current || !vantaEffect) return;

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    resizeObserver.observe(vantaRef.current);

    // Also handle window resize
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
