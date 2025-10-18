import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import {  useUser ,SignIn} from '@clerk/clerk-react'
const Layout = () => {
  
  const navigate=useNavigate();
  const [sidebar, setsidebar] = useState(false)
  const {user}=useUser();
  
  return (
    user?  
    <div>
        
        <nav>
          <img src={assets.logo} alt="" className='cursor-pointer w-22 sm:w-44'  onClick={()=>navigate('/')}/>
        
          {sidebar?
          <X onClick={()=>setsidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden'/>
          :
          <Menu onClick={()=>setsidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden'/>  
        }
        
        </nav>
        <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
          <Sidebar sidebar={sidebar} setSidebar={setsidebar}/>
          <div className='flex-1 bg-[#F4F7FB]'>
            <Outlet/>
          </div>
        
        </div>

    </div>:
   <div className='h-screen w-screen flex items-center justify-center '>
      <SignIn/>
   </div> 
  )
}

export default Layout