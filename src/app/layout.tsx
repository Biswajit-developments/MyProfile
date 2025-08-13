import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biswajit Narzary | Believer in Technologies, Learning & Hardwork",
  description: "Personal portfolio of Biswajit Narzary - Full Stack Developer & Technology Enthusiast",
  icons: {
    icon: [
      {
        url: '/MyPhoto.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/MyPhoto.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        url: '/MyPhoto.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/MyPhoto.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/MyPhoto.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: 'Biswajit Narzary | Believer in Technologies, Learning & Hardwork',
    description: 'Personal portfolio of Biswajit Narzary - Full Stack Developer & Technology Enthusiast',
    url: 'https://biswajitnarzary.com',
    siteName: 'Biswajit Narzary',
    images: [
      {
        url: '/MyPhoto.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biswajit Narzary | Believer in Technologies, Learning & Hardwork',
    description: 'Personal portfolio of Biswajit Narzary - Full Stack Developer & Technology Enthusiast',
    images: ['/MyPhoto.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
