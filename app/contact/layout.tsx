import Container from "@/components/common/Container";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps ) {
  return (
    <Container direction="row">
      {children}
    </Container>
  );
}