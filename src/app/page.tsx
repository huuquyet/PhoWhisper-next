import dynamic from 'next/dynamic'

export default function Page() {
  const App = dynamic(() => import('@/App'), { ssr: false })
  return <App />
}
