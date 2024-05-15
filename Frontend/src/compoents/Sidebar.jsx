import React from 'react'
import SearchImput from './SearchImput'
 
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
      <div className=' h-screen'>
          <SearchImput />
          <div className='divider px-3'>
                
          </div>
          <Conversations />
          <LogoutButton/>
    </div>
  )
}

export default Sidebar