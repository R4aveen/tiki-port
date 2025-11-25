'use client';
// src/components/ui/UiCard.tsx
import React, { FC, HTMLAttributes, ReactNode, forwardRef } from "react";
import classNames from "classnames";
import { useRef, useEffect } from "react";
import { animate } from "animejs";
import type { TRounded } from "@/types/ui/rounded.type";
// Si tienes un hook para tamaño de rounded, adáptalo aquí
// import useRoundedSize from '@/hooks/useRoundedSize';
// import themeConfig from '@/config/theme.config';

export const UiCardTitle: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => (
  <div
    data-component-name="UiCard/UiCardTitle"
    className={classNames(
      "flex items-center text-2xl font-semibold",
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export const UiCardHeaderChild: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => (
  <div
    data-component-name="UiCard/UiCardHeaderChild"
    className={classNames("flex flex-wrap items-start gap-4", className)}
    {...rest}
  >
    {children}
  </div>
);

export const UiCardHeader: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => (
  <div
    data-component-name="UiCard/UiCardHeader"
    className={classNames(
      "flex flex-wrap items-center justify-between gap-4 px-4 pb-4 first:pt-4",
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export const UiCardBody: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => (
  <div
    data-component-name="UiCard/UiCardBody"
    className={classNames("grow px-4 pb-4 first:pt-4", className)}
    {...rest}
  >
    {children}
  </div>
);

export const UiCardBodyCollapse: FC<{
  children: ReactNode;
  className?: string;
  isOpen: boolean;
}> = ({ children, className, isOpen, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      animate(ref.current, {
        height: isOpen ? ref.current.scrollHeight : 0,
        opacity: isOpen ? 1 : 0,
        duration: 600,
        easing: "easeInOutQuad",
      });
    }
  }, [isOpen, children]);
  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
      }}
      data-component-name="UiCard/UiCardBodyCollapse"
      className={classNames("px-4 grow pb-4 first:pt-4", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export const UiCardFooterChild: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => (
  <div
    data-component-name="UiCard/UiCardFooterChild"
    className={classNames("flex flex-wrap items-center gap-4", className)}
    {...rest}
  >
    {children}
  </div>
);

export const UiCardFooter: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => (
  <div
    data-component-name="UiCard/UiCardFooter"
    className={classNames(
      "flex flex-wrap items-center justify-between gap-4 px-4 pb-4 first:pt-4",
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export interface UiCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  rounded?: TRounded | "auto";
}

const UiCard = forwardRef<HTMLDivElement, UiCardProps>(
  ({ children, className, rounded = "rounded-lg", ...rest }, ref) => {
    // Si tienes hook y config, descomenta y adapta:
    // const { roundedCustom } = useRoundedSize(themeConfig.rounded);

    const cardClasses = classNames(
      "flex flex-col bg-zinc-100/90 dark:bg-zinc-900",
      { [`${rounded as TRounded}`]: rounded !== "auto" },
      // { [`${roundedCustom(1)}`]: rounded === 'auto' },
      className
    );

    return (
      <div
        ref={ref}
        data-component-name="UiCard"
        className={cardClasses}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

UiCard.displayName = "UiCard";

export default UiCard;
