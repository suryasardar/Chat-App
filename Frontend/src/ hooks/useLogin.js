import React, { useState } from 'react'
import { useAuthContext } from '../context/Authcontext';
import toast from 'react-hot-toast';

function useLogin() {
  
    const [loading, setloading] = useState(false);
    
    const { setAuthUser } = useAuthContext();
       const login = async (username,) => {
           setloading(true);
           try {
               const response = await fetch('http://localhost:5000/api/auth/login', {
                   method: "POST",
                   headers: { "content-Type": "application/json" },
                   body:JSON.stringify({username,password})
               });
               const data = await response.json();
               if (data.error) {
                   throw new Error(data.error);
               }
               localStorage.setItem("chat-user",JSON.stringify(data));
               setAuthUser(data);
                
           } catch (error) {
              toast.error(error.message)
           } finally{
               setloading(false);
           }
       }
       return {loading,login}
  }

export default useLogin