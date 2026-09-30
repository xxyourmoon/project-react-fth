import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-neutral-800 min-h-screen flex flex-col justify-center items-center text-center">
      <div className="flex items-center justify-center space-x-8 mb-12">
        <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
        <img
          src={reactLogo}
          className="w-24 h-24 animate-spin"
          style={{ animationDuration: '10s' }}
          alt="React logo"
        />
      </div>

      <h1 className="text-white text-5xl font-bold mb-16">
        Vite + React + Tailwind CSS
      </h1>

      <div className="space-y-6 mb-8">
        <button
          type="button"
          className="bg-neutral-900 text-white py-2 px-6 rounded-lg text-lg"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>

      <p className="text-neutral-400 text-sm">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default App
