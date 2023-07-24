"use client";

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Hero',
  description: 'Welcome to Next JS',
}

 const RootLayout = ({ children }) => {
  console.log('from RootLayout')
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        
        </body>
    </html>
  )
}

export default RootLayout;