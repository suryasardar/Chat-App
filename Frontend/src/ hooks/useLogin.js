import React, { useState } from 'react'
import { useAuthContext } from '../context/Authcontext';
import toast from 'react-hot-toast';

function useLogin() {
  
    const [loading, setloading] = useState(false);
    
    const { setAuthUser } = useAuthContext();
    const login = async (username, password) => {
        const success = HandleInputError(username,password);
          if (!success) return false;
           setloading(true);
           try {
               const response = await fetch('http://localhost:5000/api/auth/login', {
                   method: "POST",
                   headers: { "content-Type": "application/json" },
                   body:JSON.stringify({username,password})
               });
             const data = await response.json();
             console.log(data.token);
             sessionStorage.setItem('token', data.token);

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

export default useLogin;




const HandleInputError = (username,password) => {
    if (!username || !password ) {
      toast.error("Please Fill in all Fields");
      return false;
    }
  
    if (password.length < 6) {
      toast.error("password must be at least 6 characters");
    }
    return true;
  };
  