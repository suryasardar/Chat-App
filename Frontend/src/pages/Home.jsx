import React from "react";
import Sidebar from "../compoents/Sidebar";
import Messager from "../compoents/Messager";
import { useEffect ,useState} from "react";
 
import { useDataContext } from "../context/Datacontext";

const Home = () => {
  const {DataUser} = useDataContext();
 console.log(DataUser,"Data");
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