import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import TicTacToe from './pages/TicTacToe';
import Whack_A_Mole from './pages/Whack_A_Mole';
import YIRPage from './pages/YIRPages';
import YahooPage from './pages/YahooPage';
import RainfallPage from './pages/RainfallPage';
import Home from './routes/Home'
import { Route, Navigate,Router, Routes } from 'react-router-dom';


function App() {
  const scroll = new LocomotiveScroll();
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('#main-container'),
  //     smooth: true,
  //   });
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);


  return (
    <>
    <div id='main-container' className='w-full h-full bg-zinc-900 text-white'>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/Whack_A_Mole" element={<Whack_A_Mole />} />
          <Route path="/yir" element={<YIRPage />} />
          <Route path="/yahoo" element={<YahooPage />} />
          <Route path="/rainfall" element={<RainfallPage />} />
        </Routes>
    </div>
    </>
  )
}

export default App
