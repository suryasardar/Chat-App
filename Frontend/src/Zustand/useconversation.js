import React from 'react'
import Messages from '../compoents/Messages';

const useconversation = create((set) => {
    selectedConversation: null;
    setSelectedConversation: (selectedConversation) => set({ selectedConversation });
    messages: [];
        setMessages:(messages)=>set({messages})
})
  


export default useconversation;