import hamburger from "../../public/images/icon-hamburger.svg"
import logo from "../../public/images/logo.jpg"
import search from "../../public/images/search.png"

function Header() {
  return (
    <div>
      <div className=' flex justify-between items-center bg-black w-full px-16'>
        <img src={hamburger} alt="" className=' w-8 h-8'/>
        <img src={logo} alt="" />
        <img src={search} alt="" className='w-8 h-8'/>
      </div>
      <div className=' h-[1px] bg-grey'></div>
    </div>
  )
}

export default Header