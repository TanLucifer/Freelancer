import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from '../../../assets/profile.jpg';
import logo from '../../../assets/logo.png';
import { Search, Briefcase, FileText, DollarSign, MessageSquare } from 'lucide-react';

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
    <header className="bg-white shadow-md py-4 px-6 top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to='/' className="flex items-center space-x-2">
            <img src={logo} alt="SkillMitraX Logo" className="h-10 sm:h-12" />
            <span className="text-xl font-bold text-green-600">SkillMitraX</span>
          </Link>
          <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-6`}>
            <NavLink to="/find-work" className="flex items-center text-gray-600 hover:text-green-500 py-2 md:py-0 font-medium" activeClassName="text-green-500">
              <Briefcase className="w-5 h-5 mr-2" />
              Find Work
            </NavLink>
            <NavLink to="/deliver-work" className="flex items-center text-gray-600 hover:text-green-500 py-2 md:py-0 font-medium" activeClassName="text-green-500">
              <FileText className="w-5 h-5 mr-2" />
              Deliver Work
            </NavLink>
            <NavLink to="/manage-finances" className="flex items-center text-gray-600 hover:text-green-500 py-2 md:py-0 font-medium" activeClassName="text-green-500">
              <DollarSign className="w-5 h-5 mr-2" />
              Finances
            </NavLink>
            <NavLink to="/messages" className="flex items-center text-gray-600 hover:text-green-500 py-2 md:py-0 font-medium" activeClassName="text-green-500">
              <MessageSquare className="w-5 h-5 mr-2" />
              Messages
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input type="text" placeholder="Search for services" className="border border-gray-300 rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-500" aria-label="Search" />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-500">
              <Search className="w-5 h-5" />
            </button>
          </div>
          <Link to='/faq' className="text-gray-600 hover:text-green-500 font-medium">FAQ</Link>
          <button className="text-gray-600 md:hidden" onClick={handleMobileMenuToggle}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="relative">
            <button 
              onClick={handleDropdownToggle} 
              className="flex items-center space-x-2 text-gray-600 hover:text-green-500"
              aria-label="Profile"
            >
              <img src={profile} className="w-8 h-8 rounded-full object-cover" alt="Profile" />
              <span className="hidden md:inline font-medium">Tanmay Mirgal</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                <Link to="/auth" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-500">Login</Link>
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-500">View Your Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-500">Settings</Link>
                <Link to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-500">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
