"use client";

import Navbar from '@/components/Navbar';
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
   subsets: ['latin'], 
   weight: ["100", "400", "500", "700"],
   variable: '--font-roboto'
  })

export const metadata = {
  title: 'Next Hero',
  description: 'Welcome to Next JS',
}

 const RootLayout = ({ children }) => {
  console.log('from RootLayout')
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        <Navbar/>
        {children}
        
        </body>
    </html>
  )
}

export default RootLayout;