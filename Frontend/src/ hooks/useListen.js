import React, { useEffect } from 'react'
import { useSocketContext } from '../context/Socketcontext'
import useconversation from '../Zustand/useconversation';
import notificationsound from "../assets/sound/sounds_notification.mp3"

const useListen = () => {
    const { socket } = useSocketContext();
    const {messages, setMessages} = useconversation();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationsound);
            sound.play();
            setMessages([...messages,newMessage])
        })
        return () => socket.off("newMessage");
    },[socket,setMessages,messages])
}

export default useListen