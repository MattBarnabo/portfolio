import React from 'react'
import Logo from "../assets/logo1.png"
// import { FaBars, FaTimes } from 'react-icons/fa'
// import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
  // const path = window.location.pathname
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo" style={{width: '50px'}} />
      </div>
    </div>
    // <nav className='nav'>
    //   <Link to='/' className='site-title'>Matt's Portfolio</Link>
    //   <ul>
    //     <CustomLink to="/about">About</CustomLink>
    //     <CustomLink to="/projects">Projects</CustomLink>
    //     <CustomLink to="/contact">Contact</CustomLink>
    //   </ul>
    // </nav>
  )
}

// const CustomLink = ({ to, children, ...props }) => {
//  const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
//   return(
// <li className={isActive ? "active" : ""}>
//   <Link to={to}{...props}>
//     {children}
//     </Link>
// </li>
//   )
// }

export default Navbar
