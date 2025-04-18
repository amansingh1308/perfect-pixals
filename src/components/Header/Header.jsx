import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/ps.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/invitations", text: "Invitations" },
    { path: "/annoucement", text: "Annoucement" }, 
    { path: "/business", text: "Business" },
    { path: "/about", text: "About Us" },
  ]
  return (
    <header className="headerSection z-50 w-full">
      <nav className=" px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <Link to="/" className="flex items-center pt-10">
            <img src={Logo} className="mr-3 h-12 " alt="Logo" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="flex items-center lg:order-2">
            <div className="group cursor-pointer text-[#9133DC] hover:text-white bg-white hover:bg-gradient-to-r from-[#9133DC] to-[#1767CF] focus:ring-4 focus:ring-orange-300 font-medium text-sm px-4 lg:px-6 py-2 lg:py-2.5 mt-10 focus:outline-none rounded-sm ">
              <Link to="#">
                <span className="inline-block transition-transform duration-200 group-hover:scale-110 hover:font-[500]">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>


          {/* Navigation Links */}
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'
              } w-full lg:flex lg:w-auto lg:order-1 `}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 bg-white pt-11 px-28 pb-5  menuClip">
              {navLinks.map((link) => (
                <li  key={link.path} >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 font-josefin font-semibold ${isActive ? "textUniversal" : "text-[#525252]"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#9133DC]
                       lg:p-0`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header