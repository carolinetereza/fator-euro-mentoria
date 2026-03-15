import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX - 20, y: e.clientY - 20, duration: 0.5, ease: "power3.out" });
      gsap.to(dot, { x: e.clientX - 3, y: e.clientY - 3, duration: 0.1 });
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      scale: isHovering ? 1.5 : 1,
      opacity: isHovering ? 0.6 : 0.4,
      duration: 0.3,
    });
  }, [isHovering]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ border: "1px solid hsl(35, 60%, 55%)", opacity: 0.4 }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ background: "hsl(35, 60%, 55%)" }}
      />
    </>
  );
};
