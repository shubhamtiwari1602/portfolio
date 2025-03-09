import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClientWrapper } from '@/components/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shubham Tiwari - Portfolio',
  description: 'Student at IIT Madras, B.Tech in Mechanical Engineering and M.Tech in Quantitative Finance. Passionate about Quantitative Finance, App Development, and Technology.',
  keywords: ['Shubham Tiwari', 'IIT Madras', 'Quantitative Finance', 'App Development', 'Portfolio'],
  authors: [{ name: 'Shubham Tiwari' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shubhamtiwari.com',
    title: 'Shubham Tiwari - Portfolio',
    description: 'Student at IIT Madras, B.Tech in Mechanical Engineering and M.Tech in Quantitative Finance',
    siteName: 'Shubham Tiwari Portfolio'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-white`}>
        <ClientWrapper />
        {children}
      </body>
    </html>
  );
}
