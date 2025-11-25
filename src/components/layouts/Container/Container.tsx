import React, { ReactNode, HTMLAttributes } from "react";
import classNames from "classnames";

export type TContainerVariant = "default" | "fluid" | "centered";
export type TContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: TContainerVariant;
  size?: TContainerSize;
  centered?: boolean;
}

const sizeClassMap: Record<TContainerSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  full: "w-full",
};

const Container = ({
  children,
  className,
  variant = "default",
  size = "xl",
  centered = false,
  ...rest
}: ContainerProps) => {
  const classes = classNames(
    "container",
    sizeClassMap[size],
    {
      "mx-auto": centered || variant === "centered",
      "w-full": variant === "fluid",
    },
    className
  );
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Container;
