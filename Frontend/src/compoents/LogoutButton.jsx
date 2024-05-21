import React from 'react'
import { CiLogout } from "react-icons/ci";
import { useAuthContext } from '../context/Authcontext';
import useLogout from '../ hooks/useLogout';


function LogoutButton() {
  const { loading, Logout } = useLogout();
  // const {authUser} = useAuthContext();
  return (
      <div className='space-y-2' >
          <CiLogout className='w-10 h-10 text-white cursor-pointer' onClick={Logout}/>
    </div>
  )
}

export default LogoutButton