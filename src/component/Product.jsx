import React from 'react'
import Button from './Button'
import { Link, Route, Routes } from 'react-router-dom';


function Product({val,mover,count}) {
  return (
    <>
      <div className='w-full py-20 h-[23rem] text-white '>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-lg mx-auto flex items-center justify-between'>
            <h1 className='text-4xl capitalize font-medium'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-6'>{val.description}</p>
                <div className='flex items-center gap-10'>
                  <Link to={`/${val.route}`}><Button title='Play'/></Link>
                  {/* <Button to={`/${val.route}`}/> */}
                  {val.case&&<Button title='Case Study'/>}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Product
