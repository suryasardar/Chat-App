import React from 'react'
import SearchImput from './SearchImput'
 
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
      <div className=' h-screen overflow-auto inset-0 space-y-3'>
          <SearchImput />
          <div className='divider px-3 '>
                
          </div>
          <Conversations />
          <LogoutButton/>
    </div>
  )
}

export default Sidebar