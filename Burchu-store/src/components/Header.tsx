import { useContext } from "react";
import hamburger from "../../public/images/icon-hamburger.svg";
import X from "../../public/images/cross.png";
import logo from "../../public/images/logo.jpg";
import search from "../../public/images/search.png";
import { Mycontext } from "../App";

function Header() {
  const context = useContext(Mycontext);
  if (!context) {
    throw new Error("Header must be used within a MyContext.Provider");
  }
  const { burgerClicked, setBurgerClicked } = context;

  const handleBurger = () => {
    setBurgerClicked(!burgerClicked);
  };

  const handleX = () => {
    setBurgerClicked(!burgerClicked);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center bg-black w-full px-16">
        <img src={hamburger} alt="hamburger menu" onClick={handleBurger} className="w-8 h-8 cursor-pointer" />
        <img src={logo} alt="logo" />
        <img src={search} alt="search icon" className="w-8 h-8" />
      </div>
      <div className="h-[1px] bg-grey"></div>


      <nav
        className={`fixed top-0 left-0 h-full w-[60%] bg-black text-white transition-transform duration-300 ease-in-out ${
          burgerClicked ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:flex md:items-center md:w-auto`}
      >
        <ul className="flex flex-col mt-16 space-y-4 md:mt-0 md:flex-row md:space-y-0 md:space-x-4">
        <img className="w-10 h-10 ml-10" src={X} alt="" onClick={handleX} />
          {navLinks.map((link) => (
            <li key={link.name} className="pl-10 pt-6 text-[1.8rem] font-bold mt-16">
              <a href={link.path} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
