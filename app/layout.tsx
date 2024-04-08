import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PhoWhisper',
  description: 'PhoWhisper built with Transformers.js + Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
