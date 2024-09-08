import React, { useState } from 'react';
import profile from '../../../assets/profile.jpg';
import Navbar from '../../components/Home/Navbar';
import Footer from '../../components/Home/Footer';
import CategoriesCarousel from '../../components/Home/CategoriesCarousel';
import Features from '../../components/Home/Features';
import JobsList from '../../components/Home/JobsList';
import SuggestedFreelancers from '../../components/Home/SuggestedFreelancers';

const Home= () => {
 
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
     
      

      {/* Main Content */}
      <main className="container mx-auto mt-6 px-4">
       
        <div className="bg-teal-700 text-white rounded-lg p-4 md:p-6 mb-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Rise to the top of the client's list</h2>
          <p className="text-lg md:text-xl mb-4">Boosted Proposals deliver 10x more earnings on ad spend</p>
          <button className="bg-white text-teal-700 px-4 py-2 rounded">Boost now</button>
        </div>

        {/* Full-width Categories Carousel */}
        <CategoriesCarousel/>

        {/* Main Content Sections */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-3/4 md:pr-6">
            {/* Popular Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Popular services</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { title: 'Website Development', color: 'bg-green-600' },
                  { title: 'Logo Design', color: 'bg-orange-400' },
                  { title: 'SEO', color: 'bg-green-800' },
                  { title: 'Architecture & Interior Design', color: 'bg-purple-800' },
                  { title: 'Social Media Marketing', color: 'bg-green-600' },
                  { title: 'Voice Over', color: 'bg-orange-400' },
                ].map((service, index) => (
                  <div key={index} className={`${service.color} rounded-lg p-4 text-white`}>
                    <h3 className="font-bold mb-2">{service.title}</h3>
                    <img src={`https://img.freepik.com/premium-vector/isometric-design-concept-virtual-reality-augmented-reality_122058-388.jpg`} alt={service.title} className=" object-cover " style={{borderRadius:'50%',width:'90px',height:'90px'}}/>
                  </div>
                ))}
              </div>
            </div>
            <Features/>
            {/* Job Search */}
            <input type="text" placeholder="Search for jobs" className="w-full border rounded-full px-4 py-2 mb-6" />

            {/* Job Listings */}
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-4">Jobs you might like</h2>
              <div className="flex space-x-2 md:space-x-4 mb-4">
                <button className="text-green-500 font-semibold">Best Matches</button>
                <button className="text-gray-500">Most Recent</button>
                <button className="text-gray-500">Saved Jobs</button>
              </div>
              {/* Job Items */}
              
              <JobsList/>
              
              
            </div>
          </div>
          

          {/* Right Column */}
          <div className="md:w-1/4 md:pl-6">
            {/* Suggested Freelancers */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4">Suggested Freelancers</h2>
              <SuggestedFreelancers/>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Home;
