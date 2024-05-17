import React from 'react'
import Messages from '../compoents/Messages';
import { create } from 'zustand'

const useconversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages) => set({ messages }),
}))
  


export default useconversation;