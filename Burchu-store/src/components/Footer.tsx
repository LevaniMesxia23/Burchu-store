import React, { useState } from 'react'
import plus from "../../public/images/plus.png"
import minus from "../../public/images/minus-sign.png"
import instagram from "../../public/images/icon-instagram.svg"

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [socialOpen, setSocialOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleFeedback = () => {
    setFeedbackOpen(!feedbackOpen);
  };

  const toggleSocial = () => {
    setSocialOpen(!socialOpen);
  };

  const toggleContacts = () => {
    setContactOpen(!contactOpen);
  };

  return (
    <div className=' bg-black'>
      <div className=' px-12 py-8'>
        <ul className=' flex flex-col gap-4 text-white'>
          <div className=' flex justify-between items-center' onClick={toggleDropdown}>
            <li>MENU</li>
            <img className='w-2 h-2' src={menuOpen ? minus : plus} alt="" />
          </div>
          <div className={`flex flex-col gap-3 top-full  p-2 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-40 opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
            <p>Home</p>
            <p>Products</p>
            <p>About Us</p>
          </div>
          
          <div className=' flex justify-between items-center' onClick={toggleFeedback}>
            <li>FEEDBACK</li>
            <img className='w-2 h-2' src={feedbackOpen ? minus : plus} alt="" />
          </div>
          <div className={`flex flex-col gap-3 top-full  p-2 transition-all duration-300 ease-in-out overflow-hidden ${feedbackOpen ? "max-h-40 opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
            <p>Contact</p>
          </div>
          
          <div className=' flex justify-between items-center' onClick={toggleSocial}>
            <li>SOCIALS</li>
            <img className='w-2 h-2' src={socialOpen ? minus : plus} alt="" />
          </div>
          <div className={`flex flex-col gap-3 top-full  p-2 transition-all duration-300 ease-in-out overflow-hidden ${socialOpen ? "max-h-40 opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
          <a target='_blank' href="https://www.instagram.com/burchu.14/"><img src={instagram} alt="Instagram" className='w-12 h-12'/></a>
          </div>

          <div className=' flex justify-between items-center' onClick={toggleContacts}>
            <li>CONTACT INFO</li>
            <img className='w-2 h-2' src={contactOpen ? minus : plus} alt="" />
          </div>
          <div className={`flex flex-col gap-3 top-full  p-2 transition-all duration-300 ease-in-out overflow-hidden ${contactOpen ? "max-h-40 opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
            <p>levanimesxia10@gmail.com</p>
            <p>(+995) 557-147-471</p>
          </div>
        </ul>
      </div>
    </div>
  )
}
