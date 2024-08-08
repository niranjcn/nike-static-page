import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Content from './Components/Content'
import CopyRight from './Components/CopyRight'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Content />
      <CopyRight />
    </>
  )
}

export default App
