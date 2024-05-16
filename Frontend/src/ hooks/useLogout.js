

import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/Authcontext';

 const useLogout=()=> {
     const [loading, setloading] = useState(false);
     const { setAuthUser } = useAuthContext();
     const Logout = async () => {
         setloading(true);
         try {
             const response = await fetch('http://localhost:5000/api/auth/logout', {
                 method: "POST",
                 headers: { "content-Type": "application/json" }
             });
             const data = await response.json();
             if (data.error) {
                 throw new Error(data.error);
             }
             localStorage.removeItem("chat-user");
             setAuthUser(null);
             window.location.reload(); 
         } catch (error) {
            toast.error(error.message)
         } finally{
             setloading(false);
         }
     }
     return {loading,Logout}
}

export default useLogout