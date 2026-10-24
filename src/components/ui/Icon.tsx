import type { CSSProperties } from "react";

// Renders a single-color SVG as a mask so it follows `currentColor`.
export function Icon({ src, className = "size-6" }: { src: string; className?: string }) {
  return <span aria-hidden className={`icon ${className}`} style={{ "--icon": `url(${src})` } as CSSProperties} />;
}
