import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("pink")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

            <button onClick={() => setcolor("red") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "red" }}>red</button>

            <button onClick={() => setcolor("green") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "green" }}>green</button>

            <button onClick={() => setcolor("yellow") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "yellow" }}>yellow</button>

            <button onClick={() => setcolor("blue") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "blue" }}>blue</button>

            <button onClick={() => setcolor("Orange") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Orange" }}>Orange</button>

            <button onClick={() => setcolor("Black") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Black" }}>Black</button>

            <button onClick={() => setcolor("Brown") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Brown" }}>Brown</button>

            <button onClick={() => setcolor("Violet") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Violet" }}>Violet</button>

            <button onClick={() => setcolor("Olive") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Olive" }}>Olive</button>

            <button onClick={() => setcolor("Gold") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Gold" }}>Gold</button>

            <button onClick={() => setcolor("Silver") } className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{ backgroundColor: "Silver" }}>Silver</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
