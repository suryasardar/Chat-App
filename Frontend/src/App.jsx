 import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    <>
      <div className=' h-screen m-2'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Toaster/>
       
      </div>
         
       
    </>
  )
}

export default App
