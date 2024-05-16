import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

 const useGetConversations=()=> {
     const [loading, setloading] = useState(false);
     const [conversations, setConversations] = useState([])
     
     useEffect(() => {
         const getConversations = async () => {
             setloading(true);
             try {
                 const response = await fetch('http://localhost:5000/api/users/')
                 const data = await response.json();
                 if (data.error) {
                     throw new Error(data.error);
                 }
                 setConversations(data);
             } catch (error) {
                 toast.error(error.message);
             } finally {
                 setloading(false);
             }
         }
         getConversations();
     }, [])
     return { loading, conversations };
}

export default useGetConversations