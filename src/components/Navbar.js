import React from 'react'
import logo from "../images/logo.svg"
import {FaBars} from "react-icons/fa"
import { useGlobalContext } from '../context'

const Navbar = () => {
const { openSidebar, openSubmenu, closeSubmenu} = useGlobalContext()


const displaySubmenu = (e) =>{
  const page = e.target.textContent;
  const tempBtn = e.target.getBoundingClientRect()
  const center = (tempBtn.left + tempBtn.right) / 2
  const bottom = tempBtn.bottom - 8
openSubmenu(page, {center, bottom})
  
  // console.log(center, bottom)


}
const handleSubmenu = (e) =>{
  if(!e.target.classList.contains("link-btn")){
    closeSubmenu()
  }
}

  return (
    <nav className="fixed top-0 left-0 right-0 max-w-7xl mx-auto flex justify-between items-center py-4 px-8" onMouseOver={handleSubmenu}>
      <div className="flex">
        <img src={logo} alt="" />
      </div>
      <ul className="hidden md:flex  text-xl text-white">
        <li><button data-btn="link-btn" className="px-8 py-3 link-btn" onMouseOver={displaySubmenu}>Products</button></li>
        <li><button data-btn="link-btn" className="px-8 py-3 link-btn" onMouseOver={displaySubmenu}>Developers</button></li>
        <li><button data-btn="link-btn" className="px-8 py-3 link-btn" onMouseOver={displaySubmenu}>Company</button></li>
      </ul>
      <button className="hidden md:block bg-neutral-800 py-1 px-3 text-white rounded-md shadow-md">Sign In</button>
      <button className="md:hidden bg-neutral-800 p-2 text-white rounded-sm text-xl shadow-md" onClick={openSidebar}><FaBars/></button>

    </nav>
  )
}

export default Navbar