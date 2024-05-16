 import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/Authcontext'

function App() {
  const{authUser} =useAuthContext()

  return (
    <>
      <div className=' h-screen m-2'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={authUser?<Navigate to='/'/>:<Signup/>}/>
        </Routes>
        <Toaster/>
       
      </div>
         
       
    </>
  )
}

export default App
