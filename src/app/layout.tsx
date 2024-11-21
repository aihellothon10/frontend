import { materialSymbolsRoundedIconFont, nanumSquareRoundEBFont, wantedSansFont } from '@/app/config/font';
import { metadata } from '@/app/config/metadata';

import Layout from './_components/common/Layout';

import '@/styles/globals.css';

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className="min-h-svh" lang="ko">
    <body
      className={`${wantedSansFont.className} ${nanumSquareRoundEBFont.variable} ${materialSymbolsRoundedIconFont.variable} h-full scrollbar-hide`}>
      <Layout>{children}</Layout>
    </body>
  </html>
);

interface RootLayoutProps {
  children: React.ReactNode;
}

export default RootLayout;
export { metadata };
