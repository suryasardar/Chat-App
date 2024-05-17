import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MesageInput";
import NoChat from "./NoChat";
import useconversation from "../Zustand/useconversation";

function Messager() {
  const { selectedConversation, setSelectedConversation } = useconversation();
  // console.log(selectedConversation,"sdjjkl");
  // const noChatSelected = true;

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);


  return (
    <div className="w-full  flex flex-col">
      {!selectedConversation ? (
        <NoChat />
      ) : (
        <>
          <div className="bg-gray-500 px-4 py-2 mb-2 w-full">
            <span className="label-text ">To:</span>
              <span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default Messager;
