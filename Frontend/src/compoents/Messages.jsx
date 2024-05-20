import React from "react";
import Message from "./Message";
import useGetMessage from "../ hooks/useGetMessage";
import MessageSkeleton from "./Messageskeleton";

function Messages() {
  const { messages, loading } = useGetMessage();
  console.log("messages", messages);
  return (
    <div className=" h-screen px-4 flex-1 overflow-y-auto">
      {!loading && messages.length > 0 && messages.map((message) => (
        <Message key={messages._id} message={message}/>
      ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center"> send a message to start conversation</p>
      )}
      
    </div>
  );
}

export default Messages;
