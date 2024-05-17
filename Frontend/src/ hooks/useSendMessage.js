import React, { useState } from 'react'
import useconversation from '../Zustand/useconversation'
import useGetConversations from './useGetConversations'

const useSendMessage = () => {
  const [loading, setloading] = useState(false)
  const { messages, setMessages, selectedConversation } = useconversation();
  // const {conversations } = useGetConversations();

  const sendMessage = async (message)=>{
    setloading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/messages/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message})
      })
      const data = await res.json();
      if (data.error) throw new Error(data.error)
      setMessages([...messages,data])
    } catch (error) {
      
    } finally {
      setloading(false);
    }
  }
  return { sendMessage, loading };
}

export default useSendMessage