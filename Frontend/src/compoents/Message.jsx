import React from 'react'
import chat from "../assets/Chat-app.jpeg";
function Message() {
  return (
      <div className='chat chat-end'>
          <div className='chat-image avatar'>
              <div className='w-10 rounded-full'>
              <img src={chat} alt="user avatar" />
              </div>
          </div>
          <div className="chat-bubble">Not leave it in Darkness</div>
    </div>
  )
}

export default Message;