import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <img src={logo} alt="SkillMitraX Logo" className="h-16 w-16"/>
                <h2 className="ml-2 text-2xl font-bold">SkillMitraX</h2>
              </div>
              <p className="text-gray-600">Empowering skills, connecting opportunities.</p>
              <div className="mt-4 flex space-x-4">
                <Link to="#" className="text-gray-400 hover:text-blue-500"><FaFacebookF /></Link>
                <Link to="#" className="text-gray-400 hover:text-pink-500"><FaInstagram /></Link>
                <Link to="#" className="text-gray-400 hover:text-blue-400"><FaTwitter /></Link>
                <Link to="#" className="text-gray-400 hover:text-gray-900"><FaGithub /></Link>
                <Link to="#" className="text-gray-400 hover:text-pink-500"><FaDribbble /></Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Features</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Integrations</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Documentation</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">FAQs</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Our Story</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Company</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Privacy</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Advertising</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Press</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Email</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Partners</Link></li>
                <li><Link to="#" className="text-gray-600 hover:text-blue-500 transition-colors">Jobs</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="max-w-sm mx-auto">
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors">Subscribe</button>
              </div>
            </form>
            <p className="mt-2 text-gray-500">Get the latest updates and news about our service.</p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">&copy; 2024 SkillMitraX. All Rights Reserved.</p>
              <div className="mt-4 md:mt-0 space-x-4">
                <Link to="#" className="text-gray-500 hover:text-blue-500 transition-colors">Terms</Link>
                <Link to="#" className="text-gray-500 hover:text-blue-500 transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
