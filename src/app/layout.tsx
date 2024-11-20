import { materialSymbolsRoundedIconFont, nanumSquareEBFont, wantedSansFont } from '@/app/config/font';
import { metadata } from '@/app/config/metadata';

import Layout from './_components/Layout';

import '@/styles/globals.css';

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="ko">
    <body
      className={`${wantedSansFont.className} ${nanumSquareEBFont.variable} ${materialSymbolsRoundedIconFont.variable}`}>
      <Layout>{children}</Layout>
    </body>
  </html>
);

interface RootLayoutProps {
  children: React.ReactNode;
}

export default RootLayout;
export { metadata };
