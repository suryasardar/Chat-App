import React from 'react'
import Sidebar from '../compoents/Sidebar'
import Messager from '../compoents/Messager'

 const Home=()=> {
   return (
     <div className='flex sm:h-[450px] md-h-[550px] rounded-lg overflow-hidden bg-gray-400  bg-clip-padding' >
      <Sidebar />
      <Messager/>
    </div>
  )
}

export default Home