import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../ hooks/useGetConversations';

function Conversations() {
  const { loading, Conversations } = useGetConversations();
  console.log("con",Conversations);
  return (
      <div className='py-2 flex flex-col overflow-auto'>
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />

    </div>
  )
}

export default Conversations