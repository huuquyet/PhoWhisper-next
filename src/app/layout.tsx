import type React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <div id="root">{children}</div>
}
