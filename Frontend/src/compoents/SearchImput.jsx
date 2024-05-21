import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useconversation from "../Zustand/useconversation";
import useGetConversations from "../ hooks/useGetConversations";
import toast from "react-hot-toast";

function SearchImput() {
  const [Search, setsearch] = useState('');
  const { setSelectedConversation } = useconversation();
  const { conversations } = useGetConversations();

  const Handlesubmit = (e) => {
    e.preventDefault();
    if (!Search) return;
    if (Search.length < 3) {
      return toast.error("search term must be at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(Search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation)
      setsearch('')

    }else toast.error("No Such User Found")
  };

  return (
    <form className="flex items-center gap-2" onSubmit={Handlesubmit}>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
        value={Search}
        onChange={(e) => setsearch(e.target.value)}
      />

      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch className="w-5 h-5 outline-none" />
      </button>
    </form>
  );
}

export default SearchImput;
