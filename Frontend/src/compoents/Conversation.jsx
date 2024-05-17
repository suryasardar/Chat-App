import React from "react";
import chat from "../assets/Chat-app.jpeg";
import useconversation from "../Zustand/useconversation";

function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useconversation();
  const isSelected = selectedConversation?._id === conversation._id;
  console.log(conversation.fullName, lastIdx, "data");
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py- m-2 cursor-pointer
      ${isSelected ? "bg-sky-500" : ""}`}
        onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-center">
            <p className="font-bold text-gray-200 ">{conversation.fullName}</p>
            <span className="">f</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}

export default Conversation;
