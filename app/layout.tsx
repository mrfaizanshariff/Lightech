import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Noto_Kufi_Arabic } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LightRays from '@/components/shared-ui/light-rays';
import { LanguageProvider } from '@/context/LanguageContext';
 import localFont from 'next/font/local';

  const Bahnschrift = localFont({
    src: '../public/fonts/Bahnschrift.ttf',
    display: 'swap',
  });
  const noto_kufi = Noto_Kufi_Arabic({subsets:['arabic']})
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Lightech',
    default: 'Lightech - Professional Lighting Solutions',
  },
  description: 'Lightech provides sophisticated turnkey lighting solutions with professional expertise in architectural, interior, and landscape lighting projects since 2005.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}