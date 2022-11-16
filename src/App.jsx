import { useState } from 'react'
import { DoggyList } from './pages/MainPage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DoggyList />
  )
}

export default App
