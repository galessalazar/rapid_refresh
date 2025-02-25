import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Dashboard from './components/Dashboard';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
       <Dashboard />
       
       
       
        
     
       
        </BrowserRouter> 
    </>
  )
}

export default App
