import React, { useEffect, useState } from "react";
import useconversation from "../Zustand/useconversation";
import toast from "react-hot-toast";

const useGetMessage = () => {
  const [loading, setloading] = useState(false);
  const { messages, setMessages, selectedConversation } = useconversation();

  useEffect(() => {
    console.log(selectedConversation?._id, "ID");
    const token = sessionStorage.getItem('token');

    const getMessages = async () => {
      setloading(true);
      try {
        const response = await fetch(
          `http://localhost:5000/api/messages/${selectedConversation?._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        console.log(data, "mess");
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      } finally {
        setTimeout(() => {
          setloading(false);
        }, 2000);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  console.log("Mess");
  return { messages, loading };
};

export default useGetMessage;