import React from "react";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex-1">{children}</main>;
}
