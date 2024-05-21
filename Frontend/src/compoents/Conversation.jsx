import React from "react";
import chat from "../assets/Chat-app.jpeg";
import useconversation from "../Zustand/useconversation";
import useGetConversations from "../ hooks/useGetConversations";
import { useSocketContext } from "../context/Socketcontext";

function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useconversation();
  console.log(conversation,"cocncn");
     
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-yellow-500 rounded p-2 py- m-2 cursor-pointer
      ${isSelected ? " bg-yellow-400" : ""}`}
        onClick={() => {
          setSelectedConversation(conversation);
        }}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-center">
            <p className="font-bold text-gray-200 ">{conversation.fullName}</p>
            <span className=""></span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}

export default Conversation;
