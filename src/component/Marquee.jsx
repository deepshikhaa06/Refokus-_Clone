import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imagesurl,direction}) {
  return (
    <>
    <div className='flex w-full overflow-hidden'>
     <motion.div initial={{x:direction==="left"?"0":"-100%"}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear" ,duration:15,repeat:Infinity}} className='flex flex-shrink-0  py-7 gap-20 whitespace-nowrap overflow-hidden'>
        {imagesurl.map((url,index)=><img src={url} key={index} className=''/>)}
        {/* {imagesurl.map((url,index)=><img src={url} key={index} className=' flex-shrink-0'/>)} */}
    </motion.div> 
    <motion.div initial={{x:direction==="left"?"0":"-100%"}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear" ,duration:15,repeat:Infinity}} className='flex flex-shrink-0  py-7 gap-20 whitespace-nowrap overflow-hidden'>
        {/* {imagesurl.map((url,index)=><img src={url} key={index} className='w-[7vw] flex-shrink-0'/>)} */}
        {imagesurl.map((url,index)=><img src={url} key={index} className=' '/>)}
    </motion.div> 
    </div>
    </>
  )
}

export default Marquee
