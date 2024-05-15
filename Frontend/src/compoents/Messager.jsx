import React from "react";
import Messages from "./Messages";
import MessageInput from "./MesageInput";
import NoChat from "./NoChat";

function Messager() {
  const state = true;
  return (
    <div className="w-full  flex flex-col">
      {state ? (
        <NoChat />
      ) : (
        <>
          <div className="bg-gray-500 px-4 py-2 mb-2 w-full">
            <span className="label-text ">To:</span>
            <span className="text-gray-900 font-bold">JoHN dOE</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default Messager;
