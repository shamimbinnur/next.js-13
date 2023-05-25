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
    <aside className="border-r-2 w-52 border-white border-opacity-5 dark:border-invert">
      <div className="pr-2 text-lg">
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