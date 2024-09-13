import React, { useContext } from 'react'
import MainImg from "../../public/images/focus.jpg"
import MessiWide from "../../public/images/_.jpeg"
import { Mycontext } from "../App";
import Footer from './Footer';
import Products from './Products';

function HomePage() {
  const context = useContext(Mycontext);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { isTablet } = context;

  return (
    <div>
      {!isTablet ? <img src={MainImg} className=' w-full' alt="" /> : <img src={MessiWide} className=' flex justify-center items-center w-full' alt="" /> }
      <h1 className=' flex justify-center text-[2.5rem] font-bold mt-4'>First Drop</h1>
      <Products />
        <Footer/>
    </div>
  )
}

export default HomePage