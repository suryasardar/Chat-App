import React, {useEffect, useState } from 'react'
import toast from 'react-hot-toast';

 const useGetConversations=()=> {
     const [loading, setloading] = useState(false);
     const [conversations, setConversations] = useState([]);
     console.log("djsfsdfsdfsdf");


     useEffect(() => {
         const getConversations = async () => {
             setloading(true);
             try {
                 const token = sessionStorage.getItem('token');
                 console.log(token, "gettoken");
                 const response = await fetch('http://localhost:5000/api/users/', {
                     headers: {
                         "Authorization": `Bearer ${ token }`
                    },
                 })
                 const data = await response.json();
                 console.log(data, "con");
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
     console.log(conversations,"dfjk");
     return { loading, conversations };
}

export default useGetConversations