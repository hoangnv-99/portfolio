import type { AnchorHTMLAttributes } from "react";
import { Icon } from "./Icon";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "outline";
  arrow?: boolean;
};

const variants = {
  primary: "bg-primary-500 text-white hover:bg-primary-500/85",
  outline:
    "border border-primary-500 bg-surface text-primary-500 hover:bg-primary-500 hover:text-white",
};

// Figma "Button": 48px tall, 24px x-padding, 4px radius, Body/Regular/600.
export function ButtonLink({
  variant = "primary",
  arrow,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <a
      className={`inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-[6px] px-6 text-body font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {arrow && <Icon src="/figma/arrow-right-white.svg" />}
    </a>
  );
}
