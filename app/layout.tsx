import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from '@/components/Providers';

const poppins = localFont({
  src: './fonts/poppins-var.otf',
  variable: '--font-poppins',
  weight: '100 900',
  // font
});

export const metadata: Metadata = {
  title: 'Mini Dog',
  description: 'Mini Dog is a tap to earn gam',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' user-scalable='no'>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
