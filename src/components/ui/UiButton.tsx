import React, { forwardRef, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import type { TColors } from "@/types/ui/colors.type";
import type { TColorIntensity } from "@/types/ui/colorIntensities.type";
import type { TRounded } from "@/types/ui/rounded.type";
import type { TBorderWidth } from "@/types/ui/borderWidth.type";

export type TButtonVariants = "solid" | "outline" | "ghost";
export type TButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "disabled" | "color"> {
  children?: ReactNode;
  className?: string;
  variant?: TButtonVariants;
  size?: TButtonSize;
  color?: TColors;
  colorIntensity?: TColorIntensity;
  rounded?: TRounded;
  borderWidth?: TBorderWidth;
  isLoading?: boolean;
  asChild?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const colorClassMap: Record<
  string,
  { solid: string; outline: string; ghost: string }
> = {
  "primary-500": {
    solid:
      "bg-sky-500 text-white hover:bg-sky-600 border border-sky-500 hover:border-sky-600",
    outline:
      "bg-transparent text-sky-500 border border-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/40",
    ghost:
      "bg-transparent text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/40",
  },
  "neutral-500": {
    solid:
      "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-900 hover:border-zinc-800",
    outline:
      "bg-transparent text-zinc-900 dark:text-zinc-100 border border-zinc-300/70 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900",
    ghost:
      "bg-transparent text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-900",
  },
  "danger-500": {
    solid:
      "bg-rose-500 text-white hover:bg-rose-600 border border-rose-500 hover:border-rose-600",
    outline:
      "bg-transparent text-rose-500 border border-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40",
    ghost:
      "bg-transparent text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40",
  },
};

const sizeClassMap: Record<TButtonSize, { general: string }> = {
  xs: { general: "px-2.5 py-1 text-xs" },
  sm: { general: "px-3 py-1.5 text-sm" },
  md: { general: "px-4 py-2 text-sm" },
  lg: { general: "px-5 py-2.5 text-base" },
};

const UiButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    variant = "solid",
    size = "md",
    color = "sky",
    colorIntensity = "500",
    rounded = "rounded-md",
    borderWidth = "border",
    isLoading = false,
    type = "button",
    disabled = false,
    ...rest
  } = props;

  const key = `${color === "sky" ? "primary" : color}-${colorIntensity}`;
  const colorClasses =
    colorClassMap[key as keyof typeof colorClassMap]?.[variant] ??
    colorClassMap["primary-500"][variant];

  const sizeClasses = sizeClassMap[size].general;

  const classes = classNames(
    "inline-flex items-center justify-center gap-2",
    "font-medium",
    "transition-colors duration-150",
    borderWidth,
    rounded,
    sizeClasses,
    colorClasses,
    {
      "opacity-60 pointer-events-none": disabled || isLoading,
    },
    className
  );

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled || isLoading}
      data-component-name="Button"
      {...rest}
    >
      {isLoading && (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
      )}
      {children}
    </button>
  );
});

UiButton.displayName = "Button";

export default UiButton;
