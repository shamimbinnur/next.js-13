import Container from './Container';
import DropdownNav from './MobileNav';
import DesktopNav from './DesktopNav';

const navigation = [
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

const Navigation = () => {
  return (
    <header>
      <Container>
        <DesktopNav className="hidden md:block " navigation={navigation} />
        <div className="flex justify-end md:hidden">
          <DropdownNav navigation={navigation} />
        </div>
      </Container>
    </header>
  );
}

export default Navigation;