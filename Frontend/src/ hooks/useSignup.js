import React, { useState } from "react";
import toast from "react-hot-toast";

const useSignup = async () => {
  const [loading, setloading] = useState(false);

  const signups = async({
    fullname,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
      
      const success = HandleInputError({
          fullname,
          username,
          password,
          confirmpassword,
          gender,
        });
        if (!success) return;
        
        setloading(true);
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullname,
                    username,
                    password,
                    confirmpassword,
                    gender,
                }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setloading(false);
        }
  }
    return {loading,signups}
    };
    
    export default useSignup;
    
const HandleInputError = ({
  fullname,
  username,
  password,
  confirmpassword,
  gender,
}) => {
  if (!fullname || !username || !password || !confirmpassword || !gender) {
    toast.error("Please Fill in all Fields");
    return false;
  }

  if (password !== confirmpassword) {
    toast.error("password do not match");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be at least 6 characters");
  }
  return success;
};
