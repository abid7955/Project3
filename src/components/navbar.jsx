import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Assuming you have a logo.png file in the same directory

function Navbar() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to='/home' className="block text-teal-600 h-50">
              <span className="sr-only">Home</span>
              <img src={logo} alt="Logo" className="h-12 w-100" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-20 text-sm">
                <li>
                  <Link className="text-[#09005F] text-lg" to="/"> About </Link>
                </li>

                <li>
                  <Link className="text-[#09005F] text-lg" to="/pricing"> Pricing </Link>
                </li>

                <li>
                  <Link className="text-[#09005F] text-lg" to="/login1"> Feedback </Link>
                </li>

                <li>
                  <Link className="text-[#09005F] text-lg" to="/login2"> Contact Us </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-xl bg-[#09005F] px-5 py-2.5 text-sm font-medium text-white shadow"
                to="#"
              >
                Login
              </Link>

              <div className="hidden sm:flex">
                <Link
                  className="rounded-xl bg-[#09005F] px-5 py-2.5 text-sm font-medium text-white"
                  to="#"
                >
                  Sign Up
                </Link>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Navbar;