"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazyOnVisibleProps {
  children: ReactNode;
  /** Height reserved until the children mount, so nothing shifts. */
  minHeight: number;
  rootMargin?: string;
}

/**
 * Mounts children once the placeholder nears the viewport. Used for heavy
 * interactive widgets below the fold so their code stays off the critical path.
 */
export function LazyOnVisible({
  children,
  minHeight,
  rootMargin = "600px",
}: LazyOnVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
}
