const Layout = ({ children }: LayoutProps) => (
  <div className="m-auto flex min-h-svh w-mobile flex-col pb-mobile-bottom-navigation-height">{children}</div>
);

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
