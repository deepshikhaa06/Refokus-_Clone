import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router'


const Button = ({title="Get Started"}) => {
 
  return (
    <>
     <div  className='w-[10vw] px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight className='ml-2 text-lg text-zinc-500'/>
    </div> 
    </>
  )
}

export default Button
