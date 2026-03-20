import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);
  const mouse = useRef({ x: -400, y: -400 });
  const current = useRef({ x: -400, y: -400 });
  const raf = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      current.current.x = lerp(current.current.x, mouse.current.x, 0.15);
      current.current.y = lerp(current.current.y, mouse.current.y, 0.15);

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.current.x - 200}px, ${current.current.y - 200}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (glowRef.current) glowRef.current.style.opacity = "1";
    };

    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    const onEnter = () => {
      if (glowRef.current) glowRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[400px] w-[400px] rounded-full opacity-0"
      style={{
        background:
          "radial-gradient(circle, rgba(12,143,143,0.30) 0%, rgba(12,143,143,0.15) 30%, rgba(12,143,143,0.05) 55%, transparent 70%)",
        transition: "opacity 0.3s ease",
        willChange: "transform",
      }}
    />
  );
}
