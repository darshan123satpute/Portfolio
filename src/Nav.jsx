import React from 'react'
import {HashLink} from "react-router-hash-link"
const Nav = () => {
  return (
    <div className="sticky top-0 py-4 z-50 bg-black">
        <div className='flex gap-25 justify-center text-white mt-7 font-bold cursor-pointer'>
           <HashLink smooth to="#Home" className='hover:text-purple-700'>Home</HashLink>
          <HashLink smooth to="#About" className='hover:text-purple-700'>About</HashLink>
          <HashLink smooth to="#project" className='hover:text-purple-700'>Projects</HashLink>
          <HashLink smooth to="#Contact" className='hover:text-purple-700'>Contact</HashLink>
        </div>
    </div>
  )
}

export default Nav