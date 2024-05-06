
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import image2 from "../../../public/register&login.png";
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
const Navbar = () => {
    const router=useRouter()
    const handleLogOut=()=>{
    
      Cookies.remove("Token")
      router.push('/login')
    }  
const[auth,setAuth]=useState(true)
    useEffect(()=>{

        const tokenExist=Cookies.get('Token')
        if(!tokenExist){
         
           return setAuth(false)
        }
        setAuth(true)
    },[])
    
  return (
    <div className='w-full flex justify-between  h-[8.5vh] border relative'>
       <div className='flex gap-3'>

     
       
        <div className='w-[3rem] h-full'>
            <Image className='w-full h-full' src={image2} alt='logo'/>
        </div>
        <div>
            <ul className='flex gap-2 w-fit h-full'>
        <li className='my-auto'>
                    About
                </li>
                <li className='my-auto'>
                    Careers
                </li>
                <li  className='my-auto'>
                    History
                </li>
                <li  className='my-auto'>
                    Services
                </li>
                <li  className='my-auto'>
                    Projects
                </li>
                <li  className='my-auto'>
                    Blog
                </li>
            </ul>
        </div>
        </div>
        {/* right side */}
<div className='flex '>
{auth ?
    <button onClick={handleLogOut}>Logout</button>:
<div
className='flex gap-2  px-4 my-auto'>
<Link href={'/login'}>
<button>Login</button>
</Link>

<button className='px-4 my-auto'>Register</button>
</div>
}

</div>
    </div>
  )
}

export default Navbar