const Layout = ({ children }: LayoutProps) => <div className="w-mobile m-auto">{children}</div>;

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
