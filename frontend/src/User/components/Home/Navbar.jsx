import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from '../../../assets/profile.jpg';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-3 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to='/'>
            <img src={logo} alt="SkillMitraX Logo" className="h-12 sm:h-16" />
          </Link>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative hidden sm:block">
            <input type="text" placeholder="Search" className="border rounded-full px-4 py-1" aria-label="Search" />
            <button className="absolute right-0 top-0 mt-1 mr-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
          <Link to='/faq'><button className="text-gray-600" aria-label="Help">
            ?
          </button></Link>
          <button className="text-gray-600 sm:hidden" onClick={handleMobileMenuToggle}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="relative">
            <button 
              onClick={handleDropdownToggle} 
              className="text-gray-600"
              aria-label="Profile"
            >
              <img src={profile} className="w-8 h-8 bg-gray-300 rounded-full" alt="Profile" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                <Link to="/auth" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</Link>
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">View Your Profile</Link>
              </div>
            )}
          </div>
        </div>
        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1 mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <NavLink to="/find-work" className="text-gray-600 hover:text-green-500 py-2 md:py-0" activeClassName="text-green-500">Find work</NavLink>
            <NavLink to="/deliver-work" className="text-gray-600 hover:text-green-500 py-2 md:py-0" activeClassName="text-green-500">Deliver work</NavLink>
            <NavLink to="/manage-finances" className="text-gray-600 hover:text-green-500 py-2 md:py-0" activeClassName="text-green-500">Manage finances</NavLink>
            <NavLink to="/messages" className="text-gray-600 hover:text-green-500 py-2 md:py-0" activeClassName="text-green-500">Messages</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
