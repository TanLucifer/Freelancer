import React from 'react';
import { Link } from 'react-router-dom';

import CategoriesCarousel from '../../components/Home/CategoriesCarousel';
import Features from '../../components/Home/Features';
import JobsList from '../../components/Home/JobsList';
import SuggestedFreelancers from '../../components/Home/SuggestedFreelancers';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find the perfect freelance services for your business</h1>
          <p className="text-xl mb-8">Connect with talented professionals and get your projects done</p>
          <Link to="/search" className="bg-white text-teal-700 px-6 py-3 rounded-full font-semibold hover:bg-teal-100 transition duration-300">Get Started</Link>
        </div>
      </header>

      <main className="container mx-auto mt-12 px-4">
        {/* Boosted Proposals Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-6 mb-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Rise to the top of the client's list</h2>
          <p className="text-xl mb-6">Boosted Proposals deliver 10x more earnings on ad spend</p>
          <Link to='/subscription' className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">Boost now</Link>
        </div>

        <CategoriesCarousel />

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Left Column */}
          <div className="lg:w-3/4">
            {/* Popular Services */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Popular services</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { title: 'Website Development', icon: '🌐', color: 'bg-blue-600' },
                  { title: 'Logo Design', icon: '🎨', color: 'bg-pink-500' },
                  { title: 'SEO', icon: '🔍', color: 'bg-green-600' },
                  { title: 'Architecture & Interior Design', icon: '🏠', color: 'bg-yellow-500' },
                  { title: 'Social Media Marketing', icon: '📱', color: 'bg-purple-600' },
                  { title: 'Voice Over', icon: '🎙️', color: 'bg-red-500' },
                ].map((service, index) => (
                  <div key={index} className={`${service.color} rounded-lg p-6 text-white shadow-md hover:shadow-lg transition duration-300`}>
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="font-bold text-lg">{service.title}</h3>
                  </div>
                ))}
              </div>
            </section>

            <Features />

            {/* Job Search */}
            {/* <div className="relative mb-8">
              <input 
                type="text" 
                placeholder="Search for jobs" 
                className="w-full border rounded-full px-6 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <svg className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div> */}

            {/* Job Listings */}
            {/* <section>
              <h2 className="text-2xl font-bold mb-6">Jobs you might like</h2>
              <div className="flex space-x-4 mb-6">
                <button className="text-teal-600 font-semibold pb-2 border-b-2 border-teal-600">Best Matches</button>
                <button className="text-gray-500 hover:text-teal-600 transition duration-300">Most Recent</button>
                <button className="text-gray-500 hover:text-teal-600 transition duration-300">Saved Jobs</button>
              </div>
              <JobsList />
            </section> */}
            <JobsList/>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Suggested Freelancers</h2>
              <SuggestedFreelancers />
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
