import React, { useState } from 'react';
import './Auth.css';
import logo from '../../../assets/logo.png';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[url(assets/bg.svg)] bg-cover bg-center">
      <div className="w-full max-w-md mx-auto perspective-1000 mt-[-85vh]">
        {/* Flip Container */}
        <div className={`flip-container ${isSignUp ? 'rotate-y-180' : ''}`}>
          {/* Login Form */}
          <div className="absolute w-full h-full bg-white shadow-lg rounded-lg backface-hidden">
            <div className="flex flex-col items-center p-6">
                <img src={logo} alt="" style={{ width: '80px', height: '80px' }} />
              <h1 className="text-3xl sm:text-4xl font-bold mb-6">Login</h1>
              <form className="w-full">
                <div className="relative mb-4">
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="w-full p-3 border-b-2 border-gray-300 rounded-none shadow-sm focus:border-gray-400"
                  />
                  <i className="fa fa-user-o absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="relative mb-4">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full p-3 border-b-2 border-gray-300 rounded-none shadow-sm focus:border-gray-400"
                  />
                  <i className="fa fa-key absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <label className="flex items-center mb-2 sm:mb-0">
                    <input
                      type="checkbox"
                      id="defaultCheck1"
                      className="form-checkbox"
                    />
                    <span className="ml-2 text-black">Remember me</span>
                  </label>
                  <a href="#" className="text-black hover:underline">Forgot Password?</a>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-pink-600 to-red-400 text-white rounded-full shadow-md hover:bg-gradient-to-l transition-colors">
                  Login
                </button>
                <p className="text-center mt-5 text-black">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(true)}
                    className="text-black hover:underline"
                  >
                    Create your account
                  </button>
                </p>
              </form>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="absolute w-full h-full bg-white shadow-lg rounded-lg backface-hidden rotate-y-180">
            <div className="flex flex-col items-center p-6">
            <img src={logo} alt="" style={{ width: '80px', height: '80px' }} />
              <h1 className="text-3xl sm:text-4xl font-bold mb-6">Sign Up</h1>
              <form className="w-full">
                <div className="relative mb-4">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full p-3 border-b-2 border-gray-300 rounded-none shadow-sm focus:border-gray-400"
                  />
                  <i className="fa fa-user-o absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    id="username-signup"
                    placeholder="Username"
                    className="w-full p-3 border-b-2 border-gray-300 rounded-none shadow-sm focus:border-gray-400"
                  />
                  <i className="fa fa-user-o absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div className="relative mb-4">
                  <input
                    type="password"
                    id="password-signup"
                    placeholder="Password"
                    className="w-full p-3 border-b-2 border-gray-300 rounded-none shadow-sm focus:border-gray-400"
                  />
                  <i className="fa fa-key absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-pink-600 to-red-400 text-white rounded-full shadow-md hover:bg-gradient-to-l transition-colors">
                  Sign Up
                </button>
                <p className="text-center mt-5 text-black">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsSignUp(false)}
                    className="text-black hover:underline"
                  >
                    Login
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;