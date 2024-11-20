const Layout = ({ children }: LayoutProps) => (
  <div className="pb-mobile-bottom-navigation-height m-auto h-full w-mobile">{children}</div>
);

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
