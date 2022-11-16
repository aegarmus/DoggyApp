import { useState } from 'react'
import { Header } from './components/header/Header';
import { DoggyList } from './pages/MainPage';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <DoggyList />
    
    </>
  )
}

export default App
