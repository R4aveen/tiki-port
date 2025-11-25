import React from "react";
import type { TColors } from "@/types/ui/colors.type";
import type { TColorIntensity } from "@/types/ui/colorIntensities.type";
import type { TRounded } from "@/types/ui/rounded.type";
import classNames from "classnames";

export interface UiBadgeProps {
  children?: React.ReactNode;
  color?: TColors;
  colorIntensity?: TColorIntensity;
  rounded?: TRounded;
  className?: string;
}

const colorClassMap: Record<string, string> = {
  "primary-500": "bg-sky-500 text-white",
  "neutral-500": "bg-zinc-900 text-white",
  "danger-500": "bg-rose-500 text-white",
};

const UiBadge = ({
  children,
  color = "sky",
  colorIntensity = "500",
  rounded = "rounded",
  className,
}: UiBadgeProps) => {
  const key = `${color === "sky" ? "primary" : color}-${colorIntensity}`;
  const colorClasses = colorClassMap[key] ?? colorClassMap["primary-500"];
  const classes = classNames(
    "inline-block px-2 py-0.5 text-xs font-semibold",
    colorClasses,
    rounded,
    className
  );
  return <span className={classes}>{children}</span>;
};

export default UiBadge;
