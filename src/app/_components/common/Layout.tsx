import BottomNavigation from './BottomNavigation';

const Layout = ({ children }: LayoutProps) => (
  <div className="m-auto h-full w-mobile">
    {children}
    <div className="pb-mobile-bottom-navigation-height">
      <BottomNavigation />
    </div>
  </div>
);

interface LayoutProps {
  children: React.ReactNode;
}

export default Layout;
