import React from 'react';
import Link from 'next/link';

interface DesktopNavProps {
  className?: string;
  navigation: {
    name: string;
    url: string;
  }[]
}

const DesktopNav:React.FC<DesktopNavProps> = ({
  className,
  navigation
}) => {

  return (
    <nav className={`${className} text-black font-bold dark:invert p-10`}>
      <ul className="flex items-center justify-center gap-10 md:gap-16">
        {navigation.map((nav) => (
          <li key={nav.url}>
            <Link href={nav.url}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;