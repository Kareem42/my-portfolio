import type { MouseEventHandler, ReactNode } from "react";
import { cn } from "@/lib/utils";

const shell =
  "inline-flex font-mono items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800";

const inner =
  "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent";

interface GradientCtaProps {
  href?: string;
  download?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const GradientCta = ({
  href,
  download,
  type = "button",
  className,
  onClick,
  children,
}: GradientCtaProps) => {
  if (href) {
    return (
      <a href={href} download={download} className={cn(shell, className)}>
        <span className={inner}>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(shell, className)}>
      <span className={inner}>{children}</span>
    </button>
  );
};
