import img1 from "../Assets/Kelly-Felder.jpg"
import { FaCartArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Header() {
    return ( 
        <>
            <div className="hidden md:flex justify-between items-center">
                <div>
                    <img className="h-28 w-auto px-4 py-2" src={img1} alt="Header Logo" />
                </div>
                

                <div className="flex flex-col items-end mr-28">
                 
                    <div className="flex items-center mb-2">
                    <p className="text-right text-sm mr-4">Customer Service +767324845</p>
                    <div className="relative">
                        <input
                        type="text"
                        placeholder="Search..."
                        className="border px-4 py-2 text-sm"
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <CiSearch className="text-black" />
                        </button>
                    </div>
                    </div>

                    <p className="font-bold text-sm">FREE SHIPPING ON ORDERS ABOVE 5,000</p>

                  
                    <div className="flex items-center space-x-4 mt-2">
                    <a href="/" className="flex items-center text-black text-sm">
                        <FaCartArrowDown className="mr-2" />
                        Shopping Cart
                    </a>
                    <a href="/" className="flex items-center text-black text-sm">
                        Sign in or
                    </a>
                    <a href="/" className="flex items-center text-black text-sm">
                        Create Account
                    </a>
                </div>
            </div>
        </div>



        </>
     );
}

export default Header;