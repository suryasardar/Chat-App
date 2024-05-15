import React from 'react'
import { IoSendSharp } from "react-icons/io5";

function MessageInput() {
  return (
      < form className='px-4 my-3'>
          <div className='w-full flex'>
              <input type='text'
                  placeholder='Send a Message'
                  className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white'
              />
              <button type='submit'  >
               
              <IoSendSharp  className='w-6 h-6 pl-1 rounded-lg' />
              </button>
          </div>
    </form>
  )
}

export default MessageInput;