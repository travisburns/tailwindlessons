import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className="border-4 border-green-4 text-white w-96 h-96">
      Text Color
    </div>
    <div className="text-greencust w-96 h-96">
    Text Color
  </div>
  <p className='text-9xl'>Text</p>
  <p className='text-2xl'>Text</p>
  <p className='text-xl'> note</p>
  <p className='text-base note'> note</p>
  <p className='text-sm note'> note</p>
  <p className='text-xs note'> note</p>

  </div>
  

  )
}

export default App
