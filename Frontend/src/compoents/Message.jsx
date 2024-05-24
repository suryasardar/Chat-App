import React from "react";
import { useEffect } from "react";
 import { useAuthContext } from "../context/Authcontext";
import useconversation from "../Zustand/useconversation";
import { useDataContext } from "../context/Datacontext";
function Message({ message }) {
  console.log(message, "mefjsjdfl");
  const { authUser } = useAuthContext();
  const { selectedConversation } = useconversation();
  const { setDataUser } = useDataContext();


  console.log(selectedConversation, "surya");
  useEffect(() => {
    if (selectedConversation) {
      setDataUser(selectedConversation);
    }
  }, [selectedConversation, setDataUser]);



  const fromME = message.senderId === authUser._id;
  const chatClassName = fromME ? "chat-end" : "chat-start";
  const profilePic = fromME
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromME ? "bg-yellow-500" : "";
  const shakeclass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>
      <div
        className={`chat-bubble ${bubbleBgColor}${shakeclass} text-black pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 text-white items-center">
        {new Date(message.createdAt).toLocaleString()}
      </div>
    </div>
  );
}

export default Message;
