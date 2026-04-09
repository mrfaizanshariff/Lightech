// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google'; // Keep if needed for fallback
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}> {/* Default lang */}
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}