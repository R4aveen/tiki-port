import Wrapper from "@/components/layouts/Wrapper/Wrapper";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import PageWrapper from "@/components/layouts/PageWrapper/PageWrapper";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Wrapper>
      <Header />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </Wrapper>
  );
}
