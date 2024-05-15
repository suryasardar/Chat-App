import React from 'react'
import SearchImput from './SearchImput'
 
import Conversations from './Conversations'

function Sidebar() {
  return (
      <div className=' h-screen'>
          <SearchImput />
          <div className='divider px-3'>
              <Conversations/>
                
          </div>
    </div>
  )
}

export default Sidebar