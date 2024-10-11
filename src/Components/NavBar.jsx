import React, { useState } from 'react';
import { IoMdContact } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import img1 from '../Assets/Kelly-Felder.jpg'


function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className="bg-white ">
         <div className="items-center justify-center hidden mx-auto space-x-4 bg-black md:flex ">
          <a href="/" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline ">
            HOME
          </a>
          <a href="/new" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline ">
            NEW ARRIVALS
          </a>
          <a href="/collection" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline">
            COLLECTIONS
          </a>
          <a href="/workwear" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline">
            WORKWEAR
          </a>
          <a href="/linen" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline">
            LINEN
          </a>
          <a href="/Denim" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline ">
            DENIM
          </a>
          <a href="/scylla" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline ">
            SCYLLA ZELUS
          </a>
          <a href="/Men" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline">
            SHOP MEN
          </a>
          <a href="/sale" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline">
            50% OFF
          </a>
          <a href="/" className="px-3 py-2 text-sm font-bold text-white rounded hover:underline">
            ANGEL CLUB
          </a>

        </div>
        <div className="container flex items-center justify-between mx-auto ">

            <div className="flex items-center justify-between px-4 py-2 md:hidden">
         
                <button onClick={toggleMobileMenu} className="mr-4 text-black focus:outline-none">
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                    </svg>
                </button>

              
                <a href="/" className="flex items-center mx-6">
                    <img src={img1} alt="Logo" className="w-auto h-24" />
                </a>

                <button className="ml-16 text-black">
                    <CiSearch className="w-6 h-6" />
                </button>
            </div>

        </div>

     
      {isMobileMenuOpen && (
       <div className="md:hidden">
      
       {/* Menu Items */}
       <a href="/" className="block px-4 py-2 font-bold text-black border-b border-gray-300">
         Home
       </a>
       <a href="/new" className="block px-4 py-2 font-bold text-black border-b border-gray-300">
         NEW ARRIVALS
       </a>
       <a href="/collection" className="block px-4 py-2 font-bold text-black border-b border-gray-300">
         COLLECTIONS
       </a>
       <a href="/workwear" className="block px-4 py-2 font-bold text-black border-b border-gray-300">
         WORKWEAR
       </a>
       <a href="/linen" className="block px-4 py-2 font-bold text-black border-b border-gray-300">
         LINEN
       </a>
       <a href="/Denim" className="block px-4 py-2 font-bold text-black border-b border-gray-300">
         DENIM
       </a>
       <a href="/scylla" className="block px-4 py-2 font-bold text-black border-b border-gray-300">
         SCYLLA ZELUS
       </a>
       <a href="/Men" className="block px-4 py-2 font-bold text-black border-b border-gray-300">
         SHOP MEN
       </a>
       <a href="/sale" className="block px-4 py-2 font-bold text-black border-b border-gray-300">
         50% OFF
       </a>
       <a href="/" className="block px-4 py-2 font-bold text-black border-b border-gray-300">
         ANGEL CLUB
       </a>
     
       {/* Sign in, Create Account, and Wish List with icons */}
       <a href="/OurProduct" className="flex items-center px-4 py-2 mt-2 text-black border-b border-gray-300">
         <IoMdContact className="mr-2" />
         Sign in
       </a>
     
       <a href="/CreateAccount" className="flex items-center px-4 py-2 mt-2 text-black border-b border-gray-300">
         <MdOutlineManageAccounts className="mr-2" />
         Create Account
       </a>
     
       <a href="/MyWishList" className="flex items-center px-4 py-2 mt-2 text-black border-b border-gray-300">
         <CiHeart className="mr-2" />
         My Wish List
       </a>
     </div>
     
      
      )}
    </nav>
  );
}

export default NavBar;
