import Link from 'next/link';

const navigationUrl = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Contact',
    url: '/contact'
  },
  {
    name: 'Blog',
    url: '/blog'
  },
  {
    name: 'GitHub',
    url: 'https://github.com'
  }
]


const Nav = () => {
  return (
    <header>
      <nav className="text-black font-bold dark:invert p-10">
        <ul className="flex items-center justify-center gap-10 md:gap-16">
          {navigationUrl.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;