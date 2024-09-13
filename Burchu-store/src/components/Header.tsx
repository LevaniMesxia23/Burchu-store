import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from "../../public/images/logo.jpg";
import downArrow from "../../public/images/down-arrow.png";
import { Mycontext } from "../App";
import { Fade as Hamburger } from 'hamburger-react';

function Header() {
  const context = useContext(Mycontext);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { burgerClicked, setBurgerClicked, isTablet } = context;

  const handleBurger = () => {
    setBurgerClicked(!burgerClicked);
  };

  const handleLinkClick = () => {
    if (burgerClicked) {
      setBurgerClicked(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = burgerClicked ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [burgerClicked]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center bg-black w-full px-16">
        {!isTablet && (
          <Hamburger
            toggled={burgerClicked}
            toggle={handleBurger}
            size={24}
            color="white"
          />
        )}
        {isTablet && (
          <nav
            className={`fixed top-0 left-0 h-full w-[60%] bg-black text-white transition-transform duration-300 ease-in-out ${
              burgerClicked ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 md:flex md:items-center md:w-auto`}
          >
            <ul className="flex flex-col mt-16 space-y-4 md:-mt-[15px] md:flex-row md:space-y-0 md:space-x-4">
              {navLinks.map((link) => (
                <li key={link.name} className="pl-2 pt-6 text-[0.9rem] font-bold ">
                  <Link to={link.path} className="hover:underline" onClick={handleLinkClick}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <Link to={"/"}><img src={logo} alt="logo" className=" h-[8rem] -ml-18" /></Link>

        <div className={` p-2 flex items-center gap-4 justify-end ${isTablet ? "w-[15rem]" : ""}`}>
          <span className='text-white'>English</span>
          <img src={downArrow} alt="" className=' w-4 h-4'/>
        </div>

      </div>
      <div className="h-[1px] bg-grey"></div>

      {!isTablet && (
        <nav
          className={`fixed top-279 left-0 h-full w-full bg-black text-white transition-transform duration-300 ease-in-out ${
            burgerClicked ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col mt-16 space-y-4 md:mt-0 md:flex-row md:space-y-0 md:space-x-4">
            {navLinks.map((link) => (
              <li key={link.name} className=" hover:bg-[#333333] pl-10 pt-6 text-[1.8rem] font-bold ">
                <Link to={link.path} className="hover:underline" onClick={handleLinkClick}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;
