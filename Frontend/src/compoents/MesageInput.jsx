import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import useSendMessage from "../ hooks/useSendMessage";

function MessageInput() {
  const [messsage, setmessage] = useState();
  const { loading, sendMessage } = useSendMessage();
  const Handlesubmit = async (e) => {
    e.preventDefault();
    if (!messsage) {
      return;
    }
    await sendMessage(messsage);
    setmessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={Handlesubmit}>
      <div className="w-full flex">
        <input
          type="text"
          placeholder="Send a Message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 text-white"
          value={messsage}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button type="submit">
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <IoSendSharp className="w-6 h-6 pl-1 rounded-lg" />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
