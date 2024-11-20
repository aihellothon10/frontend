const Layout = ({ children }: LayoutProps) => <div className="m-auto h-full w-mobile">{children}</div>;

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
