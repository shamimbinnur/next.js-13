import { aboutUs } from "@/src/contents/about";
import Link from "next/link";

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
              <Link href={`/about/${section.slug}`} key={section.slug} className="text-xl opacity-50 hover:opacity-100 hover:scale-105 hover:translate-x-2 hover:font-bold transition-all ">
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Aside