import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";



function Navbar() {
    const [authUser,setAuthUser]=useAuth();
  console.log(authUser);


  // Sticky navbar state
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navItems = (
    <>
      <li className="hover:bg-gray-800 hover:text-white px-2 py-1 rounded">
        <a href="/">Home</a>
      </li>
      <li className="hover:bg-gray-800 hover:text-white px-2 py-1 rounded">
        <a href="/course">Course</a>
      </li>
      <li className="hover:bg-gray-800 hover:text-white px-2 py-1 rounded">
        <a href="/contact">Contact</a>
      </li>
      <li className="hover:bg-gray-800 hover:text-white px-2 py-1 rounded">
        <a href="/about">About</a>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${sticky ? "bg-gray-200 shadow-md" : "bg-white"}`}
      >
        {/* Navbar Container */}
        <div className="flex  w-full items-center justify-between py-3">
          {/* Left: Logo + Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile Dropdown */}
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost text-black">
                {/* Hamburger */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-3 w-52 p-2 shadow cursor-pointer"
              >
                {navItems}
              </ul>
            </div>

            {/* Logo */}
            <a href="/"
              className={`text-2xl font-bold cursor-pointer text-black transform transition-transform duration-300 
              ${sticky ? "scale-75" : "scale-100"}`}
            >
              Book<span className="text-pink-500" >Store</span>
            </a>
          </div>

          {/* Right: Menu + Search + Login */}
          <div className="flex items-center space-x-4">
            {/* Desktop Menu */}
            <div className="hidden lg:flex">
              <ul className="flex space-x-6 text-black">{navItems}</ul>
            </div>

            {/* Search Box */}
            <div className="hidden md:block">
              <label className="input flex items-center gap-2 border rounded-lg px-2 py-1 bg-gray-50">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  required
                  placeholder="Search"
                  className="bg-transparent outline-none text-black"
                />
              </label>
            </div>

            {/* Login Button */}

            {
              authUser ? (
                <Logout />
              ) : (
                <div>
                  <a className="btn bg-pink-600 text-white hover:bg-slate-800 duration-300 cursor-pointer"
                    onClick={() => document.getElementById("my_modal").showModal()}>
                    Login
                  </a>
                  <Login />
                </div>

              )
            }



          </div>
        </div>
      </div>

      {/* Spacer for Navbar height */}
      <div className="pt-[64px] md:pt-[72px]"></div>
    </>
  );
}

export default Navbar;
