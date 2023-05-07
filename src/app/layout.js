'use client';
import './globals.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Java Script Course',
  description: 'Developing Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
