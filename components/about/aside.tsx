import { aboutUs } from "@/src/contents/about";
import StyledNav from "./styledNav";

const Aside = () => {
  const sections = aboutUs.sections.map((section) => (
    {
      title: section.title,
      slug: section.slug
    }
  ))

  return (
    <aside className="border-r-2 w-48 border-white border-opacity-10 dark:border-invert">
      <div>
        <ul>
          {sections.map((section) => (
            <li className="py-2" key={section.slug}>
              <StyledNav slug={section.slug} title={section.title} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Aside