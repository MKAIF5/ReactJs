import { useState } from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className='w-full h-screen duration-300 text-white'
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2
        px-2">
          <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white
         px-3 py-2 rounded-3xl'>
            <button
              onClick={() => setColor("green")}
              className='cursor-pointer outline-none px-4 py-1 rounded-full shadow-lg'
              style={{ backgroundColor: "green" }}
            >Green</button>

            <button
              onClick={() => setColor("red")}
              className='cursor-pointer outline-none px-4 py-1 rounded-full shadow-lg'
              style={{ backgroundColor: "red" }}
            >Red</button>

            <button
              onClick={() => setColor("blue")}
              className='cursor-pointer outline-none px-4 py-1 rounded-full shadow-lg'
              style={{ backgroundColor: "blue" }}
            >Blue</button>

            <button
              onClick={() => setColor("yellow")}
              className='cursor-pointer outline-none px-4 py-1 rounded-full shadow-lg'
              style={{ backgroundColor: "yellow" }}
            >Yellow</button>

            <button
              onClick={() => setColor("orange")}
              className='cursor-pointer outline-none px-4 py-1 rounded-full shadow-lg'
              style={{ backgroundColor: "orange" }}
            >Orange</button>

            <button
              onClick={() => setColor("purple")}
              className='cursor-pointer outline-none px-4 py-1 rounded-full shadow-lg'
              style={{ backgroundColor: "purple" }}
            >Purple</button>

            <button
              onClick={() => setColor("brown")}
              className='cursor-pointer outline-none px-4 py-1 rounded-full shadow-lg'
              style={{ backgroundColor: "brown" }}
            >Brown</button>

            <button
              onClick={() => setColor("grey")}
              className='cursor-pointer outline-none px-4 py-1 rounded-full shadow-lg'
              style={{ backgroundColor: "grey" }}
            >Grey</button>

            <button
              onClick={() => setColor("olive")}
              className='cursor-pointer outline-none px-4 py-1 rounded-full shadow-lg'
              style={{ backgroundColor: "olive" }}
            >Olive</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
