import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      y = 60,
      x = 0,
      opacity = 0,
      duration = 1,
      delay = 0,
      ease = "power3.out",
      start = "top 85%",
      once = true,
    } = options;

    gsap.set(el, { y, x, opacity });

    const tween = gsap.to(el, {
      y: 0,
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement>(
  childSelector: string,
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll(childSelector);
    if (!children.length) return;

    const {
      y = 60,
      opacity = 0,
      duration = 0.8,
      stagger = 0.15,
      ease = "power3.out",
      start = "top 85%",
    } = options;

    gsap.set(children, { y, opacity });

    const tween = gsap.to(children, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return ref;
}
