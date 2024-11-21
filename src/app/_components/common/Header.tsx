const Header = ({ children }: HeaderProps) => (
  <header className="sticky top-0 z-10 bg-grayscale-20 text-grayscale-60">
    {/* <div className="h-mobile-header-top"></div> */}
    <div className="flex items-center justify-between">{children}</div>
  </header>
);

interface HeaderProps {
  children: React.ReactNode;
}

export default Header;
