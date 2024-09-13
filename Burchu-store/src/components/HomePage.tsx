import React, { useContext } from 'react'
import MainImg from "../../public/images/cr7.jpeg"
import MessiWide from "../../public/images/messiWide.jpeg"
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
      <Products />
        <Footer/>
    </div>
  )
}

export default HomePage