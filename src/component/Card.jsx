import { motion } from 'framer-motion';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Card({width,start,para,hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff",padding: "25px",}} className={`${width} bg-zinc-800 p-5 rounded-md min-h-[30rem] flex flex-col justify-between`}>
      <div className='w-full'>
      <div className='w-full flex justify-between items-center'>
        <h3>One Heading</h3>
        <IoIosArrowForward />
      </div>
        <h1 className='text-3xl font-medium  mt-6'>Whatever heading</h1>
      </div>
      <div className='down w-full '>
        {start===true&&(<>
            <h1 className='text-5xl font-semibold tracking-tight leading-none'>Start Project</h1>
            <button className='rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50'>Contact US</button>
        </>)}
        {para&&(<p className='text-sm text-zinc-600 font-medium'>Lorem ipsum dolor sit amet consectetur.</p>)}
      </div>
    </motion.div>
  )
}

export default Card


