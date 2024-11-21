const Footer = ({ children }: FooterProps) => (
  <footer className="fixed bottom-0 left-0 right-0 mx-auto h-mobile-bottom-navigation w-mobile bg-grayscale-10">
    <div className="flex justify-center">{children}</div>
  </footer>
);

interface FooterProps {
  children: React.ReactNode;
}

export default Footer;
