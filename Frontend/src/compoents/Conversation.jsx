import React from "react";
import chat from "../assets/Chat-app.jpeg";

function Conversation() {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py- m-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={chat} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-center">
            <p className="font-bold text-gray-200 ">John</p>
            <span className=''>f</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
}

export default Conversation;
