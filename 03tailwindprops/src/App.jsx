import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold  bg-green-500 text-white p-4">Tailwind</h1>
      <Cards username="Sweet Dreams" />
      <Cards  />

      {/* <img width={400} height={300} className='object-cover object-center w-100 h-full ' src="https://images.pexels.com/photos/3585034/pexels-photo-3585034.jpeg" alt="Featured content" /> */}
    </>
  )
}

export default App
