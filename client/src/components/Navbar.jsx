import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* title and icons section */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center text-white">
              <h1 className="text-4xl font-bold">Rapid Refresh!</h1>
              <div className="flex space-x-3 items-center ml-6 h-16">
                <span className="material-symbols-outlined text-2xl leading-none">dry_cleaning</span>
                <span className="material-symbols-outlined text-2xl leading-none">local_laundry_service</span>
                <span className="material-symbols-outlined text-2xl leading-none">cleaning</span>
                <span className="material-symbols-outlined text-2xl leading-none">cleaning_services</span>
              </div>
            </Link>
          </div>

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
      </div>
    </nav>
  );
};

export default Navbar;
