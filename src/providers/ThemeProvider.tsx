"use client";
import { Provider, useSelector } from "react-redux";
import { store } from "@/store/store";
import { RootState } from "@/store/store";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ThemeContextWrapper>{children}</ThemeContextWrapper>
    </Provider>
  );
}

function ThemeContextWrapper({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return <div data-theme={theme}>{children}</div>;
}
