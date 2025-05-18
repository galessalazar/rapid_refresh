import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // think of false as OFF
  const [isOpen, setIsOpen] = useState(false);
  return (
    //  fixed keeps it stuck to top of page
    <nav className="bg-gray-800 fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className=" flex  h-16 items-center justify-between">
          {/* title and icons section */}
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center text-white"
            >
              <h1 className="bruno-heading font-bold">
                Rapid Refresh!
              </h1>
              
              
                
              <div className="hidden sm:flex space-x-3 items-center ml-4">
                <span className="material-symbols-outlined text-2xl leading-none">
                  dry_cleaning
                </span>
                <span className="material-symbols-outlined text-2xl leading-none">
                  local_laundry_service
                </span>
                <span className="material-symbols-outlined text-2xl leading-none">
                  cleaning
                </span>
                <span className="material-symbols-outlined text-2xl leading-none">
                  cleaning_services
                </span>
              </div>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            className="sm:hidden text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          {/* link buttons */}
          <div className="hidden sm:flex space-x-4">
            <Link
              to="/about"
              className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
              aria-current="page"
            >
              About
            </Link>

            <Link
              to="/services"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact Us
            </Link>
            <Link
              to="/dashboard"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Admin
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col space-y-2 mt-2 px-2 pb-4">
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-white bg-gray-700 rounded px-3 py-2"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="text-white bg-gray-700 rounded px-3 py-2"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-white bg-gray-700 rounded px-3 py-2"
            >
              Contact Us
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="text-white bg-gray-700 rounded px-3 py-2"
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
