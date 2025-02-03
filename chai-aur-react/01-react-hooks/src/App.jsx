import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Increase = () => {
    setCount(count + 1);
  }

  const Decrease = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h2>Counter value: {count}</h2>
      <button onClick={Increase}>Increase Value</button>
      <button onClick={Decrease}>Decrease Value</button>
    </>
  )
}

export default App
