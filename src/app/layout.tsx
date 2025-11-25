import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

import Wrapper from "@/components/layouts/Wrapper/Wrapper";
import Header from "@/components/layouts/Header/Header";
import Subheader from "@/components/layouts/Subheader/Subheader";
import Aside from "@/components/layouts/Aside/Aside";
import PageWrapper from "@/components/layouts/PageWrapper/PageWrapper";
import Container from "@/components/layouts/Container/Container";
import Footer from "@/components/layouts/Footer/Footer";
import Portal from "@/components/layouts/Portal/Portal";
import UiAlert from "@/components/ui/UiAlert";
import UiBadge from "@/components/ui/UiBadge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TikiPort | Portafolio creativo",
  description:
    "Evolución del portafolio TikiPort: diseño modular, componentes propios y modo oscuro listo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-(--background) text-(--foreground) antialiased`}
        data-mode="light"
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Wrapper fullscreen>
            <Header />
            <Subheader />
            <div className="flex flex-col gap-8 lg:flex-row">
              <Aside variant="primary" />
              <PageWrapper>
                <Container
                  variant="centered"
                  size="2xl"
                  className="flex flex-col gap-10 py-10 lg:py-14"
                >
                  {children}
                </Container>
              </PageWrapper>
            </div>
            <Footer />
          </Wrapper>

          <Portal>
            <UiAlert
              color="neutral"
              className="fixed bottom-6 right-6 z-50 shadow-lg backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <UiBadge color="sky" className="uppercase tracking-wide">
                  Beta
                </UiBadge>
                <strong>TikiPort</strong> está en construcción activa.
              </div>
            </UiAlert>
          </Portal>
        </ThemeProvider>
      </body>
    </html>
  );
}
