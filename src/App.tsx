'use client'

import { AudioManager } from './components/AudioManager'
import Transcript from './components/Transcript'
import { useTranscriber } from './hooks/useTranscriber'

export default function App() {
  const transcriber = useTranscriber()

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl text-center">
          PhoWhisper Web
        </h1>
        <h2 className="mt-3 mb-5 px-4 text-center text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          ML-powered speech recognition for Vietnamese directly in your browser
        </h2>
        <AudioManager transcriber={transcriber} />
        <Transcript transcribedData={transcriber.output} />
      </div>

      <div className="absolute bottom-4">
        Made with{' '}
        <a className="underline" href="https://github.com/xenova/transformers.js">
          🤗 Transformers.js
        </a>{' '}
        + Vite{' '}
        <a className="underline" href="https://github.com/huuquyet/PhoWhisper-next">
          Give it a ⭐️
        </a>
      </div>
    </div>
  )
}
