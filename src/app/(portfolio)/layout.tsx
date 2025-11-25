import Wrapper from "@/components/layouts/Wrapper/Wrapper";
import Header from "@/components/layouts/Header/Header";
import Subheader from "@/components/layouts/Subheader/Subheader";
import PageWrapper from "@/components/layouts/PageWrapper/PageWrapper";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Header />
      <Subheader />
      <PageWrapper>{children}</PageWrapper>
    </Wrapper>
  );
}
