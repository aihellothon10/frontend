const Header = ({ children }: HeaderProps) => (
  <header className="sticky top-0 h-mobile-header text-grayscale-60">
    <div className="h-mobile-header-top"></div>
    <div className="py-4.25 flex h-mobile-header-bottom items-center justify-between px-6">{children}</div>
  </header>
);

interface HeaderProps {
  children: React.ReactNode;
}

export default Header;
