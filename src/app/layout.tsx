import type { Metadata } from "next";
import Link from "next/link"
import { Inter } from "next/font/google";
import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import "./globals.css";
import Provider from "@/app/provider"


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
  title: "MindR - Your thoughts, always within reach",
  description: "Add you thoughts, ideas and memories to one place and retrieve them through AI  ",
  openGraph:{
    title: "MindR",
      description:"Your thoughts always within reach",
    images:[
      {
        url: "https://mindr-ayu.pages.dev/open-graph.jpg",
        width: 1200,
				height: 627,
				alt: "MindR- Your AI powered second brain on telegram.",
      },
    ],
    
  },
  keywords :[
    'second brain',
    'ai bot',
    'telegram bot',
    'rag',
    'memories',
    'mindr',
    'mindR',
    'MindR'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
    <body 
      className={cn(
        'antialiased',
        fontHeading.variable,
        fontBody.variable
      )}
    >
      <Provider>
      <div className="wave-pattern">
          {children}
          </div>
          </Provider>
    </body>
  </html>
  );
}
