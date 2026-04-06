import React, { useState } from 'react'
import { HashLink } from "react-router-hash-link"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "#Home", label: "Home" },
    { to: "#About", label: "About" },
    { to: "#project", label: "Projects" },
    { to: "#Contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-black">

      {/* ── DESKTOP NAV ── */}
      <div className='hidden md:flex gap-16 lg:gap-25 justify-center text-white py-5 font-bold'>
        {links.map(({ to, label }) => (
          <HashLink key={to} smooth to={to} className='hover:text-purple-600 transition duration-200'>
            {label}
          </HashLink>
        ))}
      </div>

      {/* ── MOBILE NAV ── */}
      <div className='md:hidden flex items-center justify-between px-5 py-4'>
        
        {/* Logo / Name */}
        <span className='text-white font-bold text-lg tracking-wide'>
          Darshan <span className='text-purple-600'>.</span>
        </span>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-white focus:outline-none'
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}/>
          <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}/>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className='flex flex-col items-center gap-5 pb-5 text-white font-bold'>
          {links.map(({ to, label }) => (
            <HashLink
              key={to}
              smooth
              to={to}
              className='hover:text-purple-600 transition duration-200 text-lg'
              onClick={() => setIsOpen(false)}
            >
              {label}
            </HashLink>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Nav