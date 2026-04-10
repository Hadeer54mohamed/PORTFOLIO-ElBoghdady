import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: 'Hadeer ElBoghdady | Frontend Developer Portfolio',
  description: 'Creative Frontend Developer turning ideas into interactive experiences. Specializing in React, Next.js, and modern web development.',
  generator: 'Hadeer ElBoghdady',
  keywords: ['frontend developer', 'react', 'next.js', 'web development', 'portfolio'],
  authors: [{ name: 'Hadeer ElBoghdady' }],
  icons: {
    icon: [
      {
        url: '/images/dede-logo.png',
      },
    ],
    apple: '/images/dede-logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f3fa' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0a14' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics debug={false} />
      </body>
    </html>
  )
}
