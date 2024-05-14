import express from "express"

const Logoutuser =async (req, res) => {
   try {
      res.cookie("jwt", "", { maxAge: 0 });
      res.status(200).json({message:"Loggedout successfuly"})
   } catch (error) {
      console.log("Error",error.message);
    res.status(500).json({error:"Internal server error"})
   }
}

export default Logoutuser;