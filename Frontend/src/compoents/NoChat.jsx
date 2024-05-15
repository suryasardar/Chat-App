import React from 'react'
import { TiMessages } from "react-icons/ti";

function NoChat() {
  return (
      <div className='flex h-screen place-items-center justify-center'>
          <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
              
          <p >Welcome John</p>
          <p>Select a chat to Start Messaging</p>
          <TiMessages className='text-3xl md:text-6xl text-center' />
          </div>

    </div>
  )
}

export default NoChat