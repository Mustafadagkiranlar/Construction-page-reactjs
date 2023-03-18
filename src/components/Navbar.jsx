import React from 'react'

export default function Navbar() {


  return (
    <div className="fixed top-0 navbar bg-base-100">
      <div className="navbar-start">
        {/* Mobile */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href='#gallery'>Gallery</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
          <li><a href='#contact'>Contact</a></li>             
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl tracking-tighter" href='#home'>ConstRuck</a>
      </div>

      {/* Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='#home'>Home</a></li>
          <li><a href='#gallery'>Gallery</a></li>
          <li><a href='#testimonials'>Testimonials</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn" href='#home'>+90 548 870 85 10</a>
      </div>
    </div>
  )
}
