import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from '../../../assets/profile.jpg';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm py-3 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to='/'>
            <img src={logo} alt="SkillMitraX Logo" className="text-xl sm:text-2xl font-bold text-green-500"style={{height:'60px'}} />
          </Link>
          <nav className="hidden md:flex space-x-4">
            <NavLink to="/find-work" className="text-gray-600 hover:text-green-500" activeClassName="text-green-500">Find work</NavLink>
            <NavLink to="/deliver-work" className="text-gray-600 hover:text-green-500" activeClassName="text-green-500">Deliver work</NavLink>
            <NavLink to="/manage-finances" className="text-gray-600 hover:text-green-500" activeClassName="text-green-500">Manage finances</NavLink>
            <NavLink to="/messages" className="text-gray-600 hover:text-green-500" activeClassName="text-green-500">Messages</NavLink>
          </nav>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search" className="hidden sm:block border rounded-full px-4 py-1" aria-label="Search" />
            <button className="absolute right-0 top-0 mt-1 mr-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
              </svg>
            </button>
          </div>
          <button className="text-gray-600" aria-label="Help">
            ?
          </button>
          <button className="text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img src={profile} className="w-8 h-8 bg-gray-300 rounded-full" alt="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
