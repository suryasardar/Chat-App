import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../ hooks/useGetConversations';

function Conversations() {
  const { loading, conversations } = useGetConversations();
  console.log("con",conversations);
  return (
      <div className='py-2 flex flex-col overflow-auto'>
      {
        conversations.map((conversation,idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx===conversation.length-1}
          />
         ) )
         }

    </div>
  )
}

export default Conversations