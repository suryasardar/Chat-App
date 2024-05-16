import React from 'react'
import { CiLogout } from "react-icons/ci";
import { useAuthContext } from '../context/Authcontext';
import useLogout from '../ hooks/useLogout';


function LogoutButton() {
  const { loading, Logout } = useLogout();
  // const {authUser} = useAuthContext();
  return (
      <div className='mt-auto' >
          <CiLogout className='w-10 h-10 mt-auto cursor-pointer' onClick={Logout}/>
    </div>
  )
}

export default LogoutButton