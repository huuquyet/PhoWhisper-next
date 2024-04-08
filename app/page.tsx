import App from '@/App'
import '@/css/index.css'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

export default function Page() {
  const App = dynamic(() => import('@/App'), { ssr: false })
  return <App />
}
