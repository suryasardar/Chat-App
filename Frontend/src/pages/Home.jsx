import React from 'react'
import Sidebar from '../compoents/Sidebar'
import Messager from '../compoents/Messager'

 const Home=()=> {
   return (
     <>
     <div className="grid grid-cols-1 h-screen md:grid-cols-[40%_60%] lg:grid-cols-[20%_80%] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding">
         {/* <div> */}
         <Sidebar />
         {/* </div> */}
         {/* <div> */}
      <Messager/>
         {/* </div> */}
    </div>
     </>
  )
}

export default Home