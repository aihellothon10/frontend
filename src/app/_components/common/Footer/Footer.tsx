'use client';

import { cn } from 'dotori-utils';

const Footer = ({ children, className }: FooterProps) => (
  <footer className={footerStyle({ className })}>{children}</footer>
);

interface FooterProps {
  children: React.ReactNode;
  className?: string;
}

const footerStyle = cn(
  'fixed bottom-0 left-0 right-0 mx-auto h-mobile-bottom-navigation w-mobile bg-grayscale-10 text-center',
);

export default Footer;
