import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'
import Records from './components/Records'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <h1>BCCI</h1>
      <h2 position="fixed" sx={{top:'auto' ,bottom:500,width:100,minHeight:500}} >Stats</h2>
      <View/>
      <Routes>
        <Route path='/' element={<Records/>}></Route>
        <Route path='/add' element={<Add person={{fname:"M",middlename:"S",lastname:"Dhoni"}}/>}></Route>
      </Routes>
    </>
  )
}

export default App
