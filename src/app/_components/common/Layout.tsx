import BottomNavigation from './BottomNavigation';

const Layout = ({ children }: LayoutProps) => (
  <div className="m-auto min-h-svh w-mobile bg-grayscale-20 pb-mobile-bottom-navigation-height">{children}</div>
);

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
