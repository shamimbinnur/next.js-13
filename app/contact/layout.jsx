import Aside from "@/components/about/aside";
import Container from "@/components/common/Container";

export default function layout({ children }) {
  return (
    <Container direction="row" paddingX={40} paddingY={40} >
      {children}
    </Container>
  );
}