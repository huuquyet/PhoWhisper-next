import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

const APP_NAME = 'R3F Gallery'
const APP_DEFAULT_TITLE = 'PhoWhisper using Transformers.js + Next.js'
const APP_TITLE_TEMPLATE = '%s - PhoWhisper'
const APP_DESCRIPTION =
  'PhoWhisper: Automatic Speech Recognition for Vietnamese (2024) using Transformer.js + Next.js'
const APP_URL = 'https://hf.co/spaces/huuquyet/PhoWhisper-next/'
const TWITTER = '@HuuQuyetNg'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json',
  metadataBase: new URL('https://${process.env.VERCEL_URL}'),
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: APP_URL,
    images: ['/icon/share.png'],
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    site: TWITTER,
  },
  keywords: ['PhoWhisper', 'Transformers.js', 'Next.js', 'speech-regconition', 'vietnamese'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div id="root">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
