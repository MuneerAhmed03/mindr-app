import type { Metadata } from "next";
import Link from "next/link"
import { Inter } from "next/font/google";
import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  weight : '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})
// const fontHeading = DM_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-heading',
// })



export const metadata: Metadata = {
  title: "MindR",
  description: "Never loose any memory again",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body 
      className={cn(
        'antialiased',
        fontHeading.variable,
        fontBody.variable
      )}
    >
          {children}
    </body>
  </html>
  );
}
