import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
      <footer class="bg-white">
      <div class="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              
              <div>
                <div class="flex items-center">
                  <img src={logo} alt="" className="text-lg font-semibold" style={{height:'80px', width: '80px'}}/>
                  <h2 class="ml-2 text-xl font-bold">SkillMitraX</h2>
                  </div>
                
                  <p class="mt-2 text-gray-600">Beautifully hand-crafted components to help you build amazing pages.</p>
              </div>
  
              
              <div>
                  <h3 class="text-lg font-semibold">PRODUCT</h3>
                  <ul class="mt-4 space-y-2">
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Features</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Integrations</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Documentation</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">FAQs</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Pricing</a></li>
                  </ul>
              </div>
  
              
              <div>
                  <h3 class="text-lg font-semibold">ABOUT</h3>
                  <ul class="mt-4 space-y-2">
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Our Story</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Company</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Privacy</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Blog</a></li>
                  </ul>
              </div>
  
              
              <div>
                  <h3 class="text-lg font-semibold">CONTACT</h3>
                  <ul class="mt-4 space-y-2">
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Advertising</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Press</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Email</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Partners</a></li>
                      <li><a href="#" class="text-gray-600 hover:text-gray-900">Jobs</a></li>
                  </ul>
              </div>
          </div>
  
          
          <div class="mt-12 text-center">
              <h3 class="text-lg font-semibold">SUBSCRIBE TO OUR NEWSLETTER</h3>
              <div class="mt-4 flex justify-center">
                  <input type="email" placeholder="Enter your email" class="p-2 border border-gray-300 rounded-l-md" />
                  <button class="bg-blue-600 text-white px-4 rounded-r-md">Subscribe</button>
              </div>
              <p class="mt-2 text-gray-500">Get the latest updates and news about our service.</p>
          </div>
  
          
          <div class="mt-8 text-center text-gray-500">
              <p>© Copyright 2024 SkillMitraX. All Rights Reserved.</p>
              <div class="mt-2 space-x-4">
                  <a href="#" class="text-gray-500 hover:text-gray-900">Terms</a>
                  <a href="#" class="text-gray-500 hover:text-gray-900">Privacy</a>
              </div>
          </div>
      </div>
  </footer>
  
    );
};

export default Footer;
