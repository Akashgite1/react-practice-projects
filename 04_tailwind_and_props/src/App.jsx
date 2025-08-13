import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 p-10 m-50 rounded-xl "> hello world </h1>
      {<Card/>}
    </>
  )
}

export default App
