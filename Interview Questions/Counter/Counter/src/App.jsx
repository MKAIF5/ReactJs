import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addvalue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);

  }

  const decrValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <div>
        <h1>Counter Value : {counter}</h1>
        <button
          onClick={addvalue}
        >Increament: {counter}</button>
        <br />
        <button
          onClick={decrValue}
        >Decreament: {counter}</button>
        <p>Footer : {counter} </p>
      </div>
    </>
  )
}

export default App
