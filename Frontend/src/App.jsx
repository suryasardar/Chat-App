 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <div className=' h-screen m-2'>

       <Home/>
      </div>
        {/* <Login />
        <Signup/> */}
       
    </>
  )
}

export default App
