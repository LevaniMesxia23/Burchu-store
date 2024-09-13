import React from 'react'
import plus from "../../public/images/plus.png"

export default function Footer() {
  return (
    <div className=' bg-black'>
      <div className=' px-12 py-8'>

      <ul className=' flex flex-col gap-4 text-white'>
        <div className=' flex justify-between items-center'>
        <li>MENU</li>
        <img className='w-2 h-2' src={plus} alt="" />
        </div>
        <div className=' flex justify-between items-center'>
        <li>FEEDBACK</li>
        <img className='w-2 h-2' src={plus} alt="" />
        </div>
        <div className=' flex justify-between items-center'>
        <li>SOCIALS</li>
        <img className='w-2 h-2' src={plus} alt="" />
        </div>
        <div className=' flex justify-between items-center'>
        <li>CONTACT INFO</li>
        <img className='w-2 h-2' src={plus} alt="" />
        </div>
        
      </ul>
      </div>
    </div>
  )
}
