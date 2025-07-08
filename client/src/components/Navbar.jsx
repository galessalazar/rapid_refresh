import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../index.css";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    //  fixed keeps it stuck to top of page
    <nav className="bg-gray-800 fixed top-0 w-full z-50">
      <div className="ml-4">
        <div className=" flex  h-16 items-center justify-between">
          {/* title and icons section */}
          <div className="flex items-center space-x-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center text-white"
            >
              <h1 className="bruno-heading text-2xl sm:text-4xl font-bold">
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

          {/* Hamburger Menu */ }
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

            {/* Account Menu */}
            <div
              className="relative inline-block"
              onMouseEnter={() => setIsAccountMenuOpen(true)}
              onMouseLeave={() => setIsAccountMenuOpen(false)}
            >
              <button className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center">
                <span className="ml-1">Account ▼</span>
              </button>

              {isAccountMenuOpen && (
                <div className="absolute right-0 top-full w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsAccountMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsAccountMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Create User
                    </Link>
                    <Link
                      to="/change-password"
                      onClick={() => setIsAccountMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Change Password
                    </Link>

                    <button
                      onClick={signOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                  <Link
                    to="/login"
                    onClick={() => setIsAccountMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
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
            {/* {isLoggedIn ? ( */}
            <>
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="text-white bg-gray-700 rounded px-3 py-2"
              >
                Dashboard
              </Link>
              {/* {isOwner && ( */}
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="text-white bg-gray-700 rounded px-3 py-2"
              >
                Create User
              </Link>
              {/* )} */}
              <Link
                to="/change-password"
                onClick={() => setIsOpen(false)}
                className="text-white bg-gray-700 rounded px-3 py-2"
              >
                Change Password
              </Link>
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="text-white bg-gray-700 rounded px-3 py-2 text-left"
              >
                Logout
              </button>
            </>
            {/* ) : ( */}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-white bg-gray-700 rounded px-3 py-2"
            >
              Login
            </Link>
            {/* )} */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
