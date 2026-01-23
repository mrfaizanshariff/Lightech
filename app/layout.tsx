// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google'; // Keep if needed for fallback

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}> {/* Default lang */}
      <body>{children}</body>
    </html>
  );
}