import React from "react";
import logo from "../assets/logo.png"
function Footer(){
    return(
  <footer className="bg-[#09005F]">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div className="text-teal-600">
          <img src={logo} alt="logo" className="h-25 w-60" />
        </div>

        <p className="mt-10 max-w-xs text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
          molestias.
        </p>

      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <div>
          <p className="font-medium text-white">Services</p>

          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75"> 1on1 Coaching </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Company Review </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Accounts Review </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> HR Consulting </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> SEO Optimisation </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white">Company</p>

          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Meet the Team </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Accounts Review </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white">Helpful Links</p>

          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Contact </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> FAQs </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Live Chat </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-white">Legal</p>

          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Accessibility </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Returns Policy </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Refund Policy </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75"> Hiring Statistics </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p className="text-xs text-white">&copy; 2022. Company Name. All rights reserved.</p>
  </div>
</footer>
    )
}
export default Footer;