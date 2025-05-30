import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  // let counter = 15

  const addvalue = () => {
    counter = counter + 1
    setCounter(counter)
    // console.log("Clicked", counter);
  };

  const subtractValue = () => {
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }
  }

  return (
    <>
      <div>
        <h1>kaif Aur React</h1>
        <button
          onClick={addvalue}
        >Increament : {counter}</button>
        <br />
        <button
          onClick={subtractValue}
        >Decreament : {counter}</button>
        <p>Footer : {counter}</p>
      </div>
    </>
  )
}

export default App
