"use client";

import { cn } from "@/lib/utils";

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
  shineColor = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
}) {
  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
      }}
      className={cn(
        "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-(--border-radius) bg-white p-3 text-black",
        className
      )}
    >
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--shine-pulse-duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
            shineColor instanceof Array ? shineColor.join(",") : shineColor
          },transparent,transparent)`,
        }}
        className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-(--border-radius) before:p-(--border-width) before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:subtract] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      {children}
    </div>
  );
}
