import React from 'react'
import Navbar from '../component/Navbar'
import Work from '../component/Work'
import Stripes from '../component/stripes'
import Products from '../component/Products'
import Marquees from '../component/Marquees'
import Cards from '../component/Cards'
import Footer from '../component/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function Home() {
  const scroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
     
    </>
  )
}

export default Home
