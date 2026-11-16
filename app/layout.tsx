import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

export const metadata: Metadata = {
  title: 'Studio kintsugi – Interiors | Furniture | Products',
  description:
    'Studio Kintsugi was founded on a simple belief: great design should make life easier, calmer, and more meaningful. Interiors, architecture, turnkey projects, and custom furniture based in Dehradun.',
  icons: {
    icon: '/images/034_watermark2-1-e1767947751893-120x113.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1A1918] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
