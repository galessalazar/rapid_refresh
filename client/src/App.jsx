import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
       
       
       
       
        <h1>Rapid Refresh!</h1>
     
       
        </BrowserRouter> 
    </>
  )
}

export default App
