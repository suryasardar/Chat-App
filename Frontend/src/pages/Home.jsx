import React from "react";
import Sidebar from "../compoents/Sidebar";
import Messager from "../compoents/Messager";
import useconversation from "../Zustand/useconversation";

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useconversation();
console.log(selectedConversation,"select");
  return (
    <>
      <div className="grid grid-cols-1 h-screen md:grid-cols-[40%_60%] lg:grid-cols-[20%_80%] rounded-lg  bg-black bg-clip-padding">
        <Sidebar />
        <Messager />
      </div>
      
    </>
  );
};

export default Home;
