import Aside from "@/components/about/aside";
import Dropdown from "@/components/about/dropdown";
import Container from "@/components/common/Container";

export default function layout({ children }) {
  return (
    <Container direction="col">
      <div className="md:hidden">
        <Dropdown/>
      </div>

      <div className="flex">
        <Aside/>
        {children}
      </div>
    </Container>
  );
}