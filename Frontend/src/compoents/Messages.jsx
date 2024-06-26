import React, { useEffect, useRef,useLayoutEffect } from "react";
import Message from "./Message";
import useGetMessage from "../ hooks/useGetMessage";
import MessageSkeleton from "./Messageskeleton";
import useListen from "../ hooks/useListen";

function Messages() {
  const { messages, loading } = useGetMessage();
  useListen();
  const lastMessageRef = useRef(null);
  console.log(lastMessageRef, "ref");
  console.log("messages", messages);
  useEffect(() => {
    // Debug: Ensure ref is being assigned
    console.log(lastMessageRef.current, "lastMessageRef");
    if (lastMessageRef.current) {
      // Use setTimeout to ensure DOM updates are applied
      setTimeout(() => {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages]);

  return (
    <div className=" h-screen px-4 flex-1 overflow-y-auto scroll-m-0">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <div
            key={message._id}
            ref={index === messages.length - 1 ? lastMessageRef : null}
          >
            <Message key={message._id} message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-white"> send a message to start conversation</p>
      )}
    </div>
  );
}

export default Messages;
