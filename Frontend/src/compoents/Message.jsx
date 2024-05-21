import React from 'react'
import chat from "../assets/Chat-app.jpeg";
import { useAuthContext } from '../context/Authcontext'
import useconversation from '../Zustand/useconversation';

function Message({ message }) {
  console.log(message, "mefjsjdfl");
  const { authUser } = useAuthContext();
  const { selectedConversation } = useconversation();
  const fromME = message.senderId === authUser._id;
  const chatClassName = fromME ? 'chat-end' : 'chat-start';
  const profilePic = fromME ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromME ? 'bg-blue-500' : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleBgColor} pb-2`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {new Date(message.createdAt).toLocaleString()}
      </div>
    </div>
  );
}


export default Message;