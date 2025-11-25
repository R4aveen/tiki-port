import React from "react";
import classNames from "classnames";

interface WrapperProps {
  children: React.ReactNode;
  fullscreen?: boolean;
}

export default function Wrapper({ children, fullscreen = false }: WrapperProps) {
  const classes = classNames(
    "mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8",
    {
      "min-h-screen py-10 lg:py-12": fullscreen,
      "py-6 lg:py-8": !fullscreen,
    }
  );

  return <div className={classes}>{children}</div>;
}
