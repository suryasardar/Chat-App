import React, { useEffect } from 'react'
import { useSocketContext } from '../context/Socketcontext'
import useconversation from '../Zustand/useconversation';

const useListen = () => {
    const { socket } = useSocketContext();
    const [messages, setMessages] = useconversation();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            setMessages([...messages,newMessage])
        })
        return () => socket.off("newMessage");
    },[socket,setMessages,messages])
}

export default useListen