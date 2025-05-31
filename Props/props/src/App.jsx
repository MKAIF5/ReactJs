import './App.css'
import Card from './components/Card'

function App() {

  const user = {
    username: "imran",
    age: 17
  };

  const arr = [1, 2, 3, 4, 5]

  return (
    <>
      <div className='flex'>
        <Card username="kaif" someObj={{ user }} btnText="Click Me" />
        <Card username="taha" someArr={{arr}} />
      </div>
    </>
  )
}

export default App
