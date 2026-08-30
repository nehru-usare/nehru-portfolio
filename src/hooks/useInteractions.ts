import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect when an element comes into view
 */
export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, {
      rootMargin: "-100px 0px -100px 0px",
      ...options,
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isInView] as const;
}

/**
 * Hook to detect scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const lastScrollTop = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrollPosition((prev) => {
        if (prev === currentScroll) return prev;
        return currentScroll;
      });

      const nextDirection = currentScroll >= lastScrollTop.current ? "down" : "up";
      setScrollDirection((prev) => {
        if (prev === nextDirection) return prev;
        return nextDirection;
      });

      lastScrollTop.current = currentScroll;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollPosition, scrollDirection };
}

/**
 * Hook for mouse move parallax effect
 */
export function useMouseMove() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePosition;
}

/**
 * Hook for cursor position relative to element
 */
export function useElementMouseMove() {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    element.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => element.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return [ref, position] as const;
}
