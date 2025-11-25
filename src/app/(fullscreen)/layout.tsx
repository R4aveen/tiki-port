import Wrapper from "@/components/layouts/Wrapper/Wrapper";
import PageWrapper from "@/components/layouts/PageWrapper/PageWrapper";

export default function FullscreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper fullscreen>
      <PageWrapper>{children}</PageWrapper>
    </Wrapper>
  );
}
