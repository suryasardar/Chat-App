import { Input } from "postcss";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { json } from "react-router-dom";
import { useAuthContext } from "../context/Authcontext";

const useSignup = () => {
  const [loading, setloading] = useState(false);
  const { setAuthUser} = useAuthContext();
  const signups = async ({
    fullName,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    console.log(fullName, username, password, confirmpassword, gender);
    const success = HandleInputError({
      fullName,
      username,
      password,
      confirmpassword,
      gender,
    });
    if (!success) return false;

    setloading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });
      const data = await response.json();
      console.log(data);

      

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
        if (data.error) {
            throw new Error(data.error);
        }
      localStorage.setItem("chat-user", JSON.stringify(data))
      setAuthUser(data);
      console.log(data);
    } catch (error) {
        toast.error(error.message);
        console.log(error.message,"sjdfjsdfjj");
    } finally {
      setloading(false);
    }
  };
  return { loading, signups };
};

export default useSignup;

const HandleInputError = ({
  fullName,
  username,
  password,
  confirmpassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmpassword || !gender) {
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
  return true;
};
