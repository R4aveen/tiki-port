import React from "react";
import type { TColors } from "@/types/ui/colors.type";
import type { TColorIntensity } from "@/types/ui/colorIntensities.type";
import type { TRounded } from "@/types/ui/rounded.type";
import classNames from "classnames";

export interface UiAlertProps {
  children?: React.ReactNode;
  color?: TColors;
  colorIntensity?: TColorIntensity;
  rounded?: TRounded;
  className?: string;
}

const colorClassMap: Record<string, string> = {
  "primary-500": "bg-sky-100 text-sky-900 border border-sky-500",
  "neutral-500": "bg-zinc-100 text-zinc-900 border border-zinc-500",
  "danger-500": "bg-rose-100 text-rose-900 border border-rose-500",
};

const UiAlert = ({
  children,
  color = "sky",
  colorIntensity = "500",
  rounded = "rounded-md",
  className,
}: UiAlertProps) => {
  const key = `${color === "sky" ? "primary" : color}-${colorIntensity}`;
  const colorClasses = colorClassMap[key] ?? colorClassMap["primary-500"];
  const classes = classNames("p-3 text-sm", colorClasses, rounded, className);
  return <div className={classes}>{children}</div>;
};

export default UiAlert;
