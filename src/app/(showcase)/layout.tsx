import Wrapper from "@/components/layouts/Wrapper/Wrapper";
import Header from "@/components/layouts/Header/Header";
import Aside from "@/components/layouts/Aside/Aside";
import PageWrapper from "@/components/layouts/PageWrapper/PageWrapper";

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Header minimal />
      <Aside variant="demos" />
      <PageWrapper>{children}</PageWrapper>
    </Wrapper>
  );
}
