import React from 'react'
import Message from './Message'

function Messages() {
  return (
      <div className=' h-screen px-4 flex-1 overflow-y-auto'>
          <Message />
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
         
     
    </div>
  )
}

export default Messages