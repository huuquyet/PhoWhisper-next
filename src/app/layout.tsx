import type React from 'react'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div id="root">{children}</div>
}
